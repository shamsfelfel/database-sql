#!/usr/bin/env node
/* Open every question bank in a real browser and answer each question correctly
   from its own data. A "Correct" verdict on all of them proves the data shapes
   (answer index, accept lists, write-checks, contrast rows, ordering ...) agree
   with the engine; a failure names the question and the verdict it got.

     node tools/check_banks.mjs                  # every bank that exists
     node tools/check_banks.mjs t1-test-01 p1-exam-a

   It starts its own static server on a free port, so nothing else needs running.
   Also checks, per bank: the card count matches the data, no console errors or
   failed requests, the Hint box opens, and "Show the answer" is counted as shown. */
import { createRequire } from "module";
import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(path.join(ROOT, "package.json"));
const { chromium } = require("@playwright/test");

const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split("?")[0].split("#")[0]);
      if (p.endsWith("/")) p += "index.html";
      const f = path.join(ROOT, p);
      if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
        res.writeHead(404); res.end("not found"); return;
      }
      res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-store" });
      fs.createReadStream(f).pipe(res);
    });
    srv.listen(0, "127.0.0.1", () => resolve(srv));
  });
}

function registryBanks() {
  const reg = JSON.parse(fs.readFileSync(path.join(ROOT, "src/registry.json"), "utf8"));
  const out = [];
  for (const ch of reg.chapters) for (const p of ch.pages) {
    if (!p.bank) continue;
    out.push({ bank: p.bank, href: (p.kind === "exam" ? "exams/" : "tests/") + p.id + ".html" });
  }
  return out;
}

function kindOf(q) {
  if (q.type === "output" || q.type === "trace") return q.options ? "choice" : "text";
  if (q.type === "complete") return q.blanks ? "text" : "choice";
  if (q.type === "error") return q.options ? "choice" : "pick";
  return { tf: "choice", mcq: "choice", multi: "choice", compare: "choice", fill: "text",
    order: "order", ordercode: "order", match: "match", contrast: "contrast", write: "write" }[q.type];
}

async function answerRight(page, q) {
  const card = page.locator("#q-" + q.id);
  const k = kindOf(q);
  if (k === "choice") {
    const ans = q.type === "tf" ? (q.truth ? 0 : 1) : q.answer;
    for (const i of (Array.isArray(ans) ? ans : [ans])) await card.locator(`.opt[data-i="${i}"]`).click();
  } else if (k === "text") {
    for (let i = 0; i < q.blanks.length; i++) await card.locator(`.fillin[data-i="${i}"]`).fill(q.blanks[i].accept[0]);
  } else if (k === "order") {
    const seq = q.answer || q.items.map((_, i) => i);
    for (const i of seq) await card.locator(`.order-pool button[data-i="${i}"]`).click();
  } else if (k === "match") {
    for (let i = 0; i < q.pairs.length; i++) {
      await card.locator(`.match button[data-side="l"][data-i="${i}"]`).click();
      await card.locator(`.match button[data-side="r"][data-i="${i}"]`).click();
    }
  } else if (k === "pick") {
    for (const a of (Array.isArray(q.answer) ? q.answer : [q.answer])) await card.locator(`.pickcode button[data-n="${a}"]`).click();
  } else if (k === "contrast") {
    for (let r = 0; r < q.rows.length; r++) await card.locator(`.crow[data-r="${r}"] .copt[data-v="${q.rows[r].a}"]`).click();
  } else if (k === "write") {
    await card.locator("textarea.writein").fill(q.solution.code);
  } else {
    throw new Error("unknown question kind for type " + q.type);
  }
}

async function checkBank(browser, base, item) {
  const problems = [];
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(8000);
  page.on("console", (m) => { if (m.type() === "error") problems.push("console error: " + m.text()); });
  page.on("pageerror", (e) => problems.push("uncaught: " + e.message));
  page.on("requestfailed", (r) => problems.push("request failed: " + r.url()));
  page.on("response", (r) => { if (r.status() >= 400) problems.push(r.status() + " " + r.url()); });

  await page.goto(base + "/" + item.href);
  await page.waitForSelector("body[data-booted]");
  const bank = await page.evaluate((id) => (window.DBTBanks || {})[id] || null, item.bank);
  if (!bank) { problems.push("window.DBTBanks[" + item.bank + "] is not defined on the page"); await ctx.close(); return { problems, n: 0 }; }

  const cards = await page.locator(".qbox").count();
  if (cards !== bank.questions.length) problems.push(`page shows ${cards} cards but the bank has ${bank.questions.length} questions`);

  let n = 0;
  for (const q of bank.questions) {
    n++;
    try {
      const card = page.locator("#q-" + q.id);
      await card.scrollIntoViewIfNeeded();
      if (q.hint) {
        const hb = card.locator('[data-a="hint"]');
        if (await hb.count() === 0) problems.push(q.id + ": has a hint but no Hint button");
        else {
          await hb.click();
          if (!(await card.locator(".qhint").isVisible())) problems.push(q.id + ": Hint did not open");
          await hb.click();
        }
      }
      await answerRight(page, q);
      await card.locator('[data-a="check"]').click();
      const cls = (await card.locator(".verdict").getAttribute("class")) || "";
      if (!/\bok\b/.test(cls)) {
        const txt = (await card.locator(".verdict").innerText()).replace(/\s+/g, " ").slice(0, 160);
        problems.push(`${q.id} (${q.type}): correct answer was not accepted -> "${cls.replace("verdict", "").trim()}" ${txt}`);
      }
    } catch (e) {
      problems.push(`${q.id} (${q.type}): ${String(e.message).split("\n")[0]}`);
    }
  }

  // "Show the answer" on a fresh question must be counted as shown, not correct
  try {
    await page.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
    await page.reload();
    await page.waitForSelector("body[data-booted]");
    const q0 = bank.questions[0];
    const c0 = page.locator("#q-" + q0.id);
    await c0.locator('[data-a="show"]').click();
    const cls0 = (await c0.locator(".verdict").getAttribute("class")) || "";
    if (/\bok\b/.test(cls0)) problems.push(q0.id + ": a revealed answer was counted as correct");
  } catch (e) {
    problems.push("show-answer check: " + String(e.message).split("\n")[0]);
  }

  await ctx.close();
  return { problems, n };
}

const wanted = process.argv.slice(2);
const all = registryBanks();
const items = wanted.length ? all.filter((b) => wanted.includes(b.bank)) : all.filter((b) => fs.existsSync(path.join(ROOT, "assets/theory/data/questions", b.bank + ".js")));
if (wanted.length && items.length !== wanted.length) {
  console.error("unknown bank(s): " + wanted.filter((w) => !all.some((b) => b.bank === w)).join(", "));
  process.exit(2);
}
if (!items.length) { console.log("no question banks found yet"); process.exit(0); }

const srv = await serve();
const base = "http://127.0.0.1:" + srv.address().port;
const browser = await chromium.launch();
let failed = 0;
for (const item of items) {
  const { problems, n } = await checkBank(browser, base, item);
  if (problems.length) {
    failed++;
    console.log(`FAIL ${item.bank}: ${problems.length} problem(s) in ${n} questions`);
    for (const p of problems.slice(0, 25)) console.log("   - " + p);
  } else {
    console.log(`ok   ${item.bank}: ${n} questions, every correct answer accepted`);
  }
}
await browser.close();
srv.close();
process.exit(failed ? 1 : 0);
