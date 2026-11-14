# Authoring the theory track

The mechanics of the database-design track in this repository, and every format an
author touches. *What* each chapter must contain is in
[THEORY-CONTENT-PLAN.md](THEORY-CONTENT-PLAN.md); *how to write it well* is in
[THEORY-LESSON-BRIEF.md](THEORY-LESSON-BRIEF.md) and
[THEORY-QUESTION-BRIEF.md](THEORY-QUESTION-BRIEF.md).

> **Golden rule.** Never edit a generated file by hand. Generated:
> `theory/index.html`, `chapters/t*.html`, `lessons/t*.html`, `tests/t*.html`,
> `exams/t*.html`, `labs/t*.html`, `glossary/t*.html`,
> `assets/theory/js/registry.js`, `assets/theory/js/anchors.js`,
> `assets/theory/data/glossary-t*.js`, `sw.js`. Edit the sources and rebuild.
>
> **Never touch the SQL course.** `index.html`, `chapters/chapter-*.html`,
> `lessons/chapter-*.html`, `tests/chapter-*.html`, `exams/exam-*.html`,
> `assets/css/*`, `assets/js/*`, `data/*` belong to the SQL track. The one thing
> the theory track uses from it is the SQL widget, read-only.

## 1. Layout

```
src/registry.json              THE REGISTRY: the track, its chapters, every page, titles, order
src/content/<key>/index.html   chapter home prose              -> section id <key>-chapter
src/content/<key>/lesson-NN.html  one lesson                   -> section id <key>-lesson-NN
src/content/<key>/lab.html     the chapter's SQL lab           -> section id <key>-lab
src/glossary/<key>/lesson-NN.json  terms lesson NN introduces (merged per chapter)
src/diagrams/<id>.svg          one ERD, both languages inside  (see §6)
assets/theory/data/questions/<bank>.js  question banks (hand-written, loaded by tests)
assets/theory/data/topics/<key>-lN.js   topic tags of lesson N -> heading ids
```

`<key>` is `t2`, `t3`, `t4` or `t5`. Tests, chapter tests and the glossary page are
**synthesised by `build-theory.py` from the registry** — nobody writes their HTML.
Only lessons, the chapter home and the lab are authored.

| Page | id | built to |
|---|---|---|
| chapter home | `t2-chapter` | `chapters/t2.html` |
| lesson n | `t2-lesson-01` | `lessons/t2-lesson-01.html` |
| lesson test n | `t2-test-01` | `tests/t2-test-01.html` |
| SQL lab | `t2-lab` | `labs/t2-lab.html` |
| glossary | `t2-glossary` | `glossary/t2-glossary.html` |
| chapter tests | `t2-exam-a` `-b` `-c` | `exams/t2-exam-a.html` … |

Reading order: chapter home → (lesson, its test)×N → lab → glossary → A → B → C.

## 2. Build and check

```bash
python build-theory.py              # registry + content -> every page, anchors, registry, glossary data
python scripts/build-sw.py          # the precache list (run it last)
python tools/verify_chapter.py      # structure, links, anchors, banks, parity, coverage
python tools/verify_chapter.py --scope t2-lesson-01    # just one page
python scripts/dev-server.py 8099   # look at it in a browser
```

No Node and no Playwright are needed to build: there is no Mermaid and no trace
generator in this track. `tools/check_banks.mjs` uses Node, and only for banks.

## 3. Writing a lesson (`src/content/<key>/lesson-NN.html`)

One file = one `<section class="page" id="t2-lesson-01">…</section>`.

**Bilingual markup.** Every visible sentence is written twice: `<p class="en">…</p>`
then `<p class="ar">…</p>`; inline text uses `<span class="en">…</span><span class="ar">…</span>`.
`h1/h2/h3` contain both spans. Entity names, attribute names, SQL and ERDish keywords
stay inside `<code>` (LTR).

**Skeleton**

```html
<section class="page" id="t2-lesson-01">

  <span class="kicker">Lesson 1</span>
  <h1><span class="en">…</span><span class="ar">…</span></h1>
  <p class="lede en">By the end of this lesson you will …</p>
  <p class="lede ar">…</p>

  <div class="note">      the setting + prerequisites, with links to earlier lessons </div>
  <div class="objectives"> 3–5 measurable objectives </div>

  <h2 id="t2l1-h1"><span class="en">1 · …</span><span class="ar">١ · …</span></h2>
  <div class="problem">  the pain, concretely, in the chapter's domain </div>
  …two short paragraphs at most…
  <figure class="diagram" data-diagram="t2-flat-file"><figcaption>…</figcaption></figure>
  <div class="sql-lens"> what this becomes in a real table </div>
  <div class="quiz">     an inline check — EVERY h2 ends with an activity </div>

  … more concepts, simple -> subtle -> professional …

  <h2 id="t2l1-h6">Exercises</h2>   <!-- 4–5 .exercise blocks, each with <details class="solution"> -->
  <div class="card takeaways"> key takeaways + the mistakes cheat-sheet </div>
  <div class="callout ahead"> link to this lesson's test and the next lesson </div>
</section>
```

**Heading ids.** Give *every* `h2`/`h3` an explicit id, numbered in document order:
`t2l1-h1, t2l1-h2 …` for `h2`, `t2l1-s1, t2l1-s2 …` for `h3` (continuing across the
lesson, not restarting per `h2`). Chapter home uses `t2idx-…`, the lab `t2lab-…`.

**Links.** Write in-site links as `href="#t2-lesson-02"` (a page) or `href="#t2l2-s3"`
(a heading) — `build-theory.py` rewrites them to real relative paths. A link to the SQL
track is a normal relative link written as `href="@/chapters/chapter-3.html"`.

### Components

| Markup | Use |
|---|---|
| `<div class="note">` `.problem` `.tip` `.warn` | info / the pain / a pro tip / a trap |
| `<div class="callout prereq">` `.ahead` | what to read first / where to go next |
| `<div class="objectives">` | learning objectives with tick markers |
| `<figure class="diagram" data-diagram="t2-hr-erd"><figcaption>…</figcaption></figure>` | an ERD — see §6 |
| `<div class="evolve">` | **a model evolved version by version** — see below |
| `<pre class="code" data-lang="sql"><code>` | SQL. `data-lang`: `sql` `text` `erdish` |
| `<div class="output">` | verified output of a query (run it; do not imagine it) |
| `<div class="exercise"><h4>…</h4>…<details class="solution"><summary>…</summary>…</details></div>` | practice with a hidden worked solution |
| `<div class="quiz"><p class="q">…</p><ul class="options"><li><button class="opt" data-correct="true">…</button></li>…</ul><div class="feedback" hidden>…</div></div>` | inline check |
| `<div class="sql-lens"><h4><span class="en">In the database</span><span class="ar">في قاعدة البيانات</span></h4>…</div>` | what this design decision becomes in real tables — **≥ 1 per concept section**. The header **must be an `<h4>` that is a direct child** |
| `<div class="thread"><h4>Thread · …</h4>…</div>` | link this idea to where the SQL track meets it, and name the gap |
| `<span class="term" data-term="entity">…</span>` | a glossary term mention |
| `<div class="qb-widget">` + a JSON config | a live SQL box — see §7 |
| `<table class="obj-table">` / plain `<table>` | tables (wrap wide ones in `<div class="table-wrap">`) |
| `<kbd>Ctrl</kbd>` | keyboard keys |

### Evolve — the primary teaching device here

In the sibling course an `evolve` block improves a program version by version. Here it
improves a **model**: each version is a diagram (or a diagram plus a table), and each
version fixes a *named* modelling defect of the one before.

```html
<div class="evolve" id="t2l1-e1">
  <div class="ver" data-title-en="Version 1 — one flat table" data-title-ar="النسخة 1 — جدول مسطّح واحد">
    <figure class="diagram" data-diagram="t2-library-v1"></figure>
    <p class="en">What it stores, and the repetition it forces.</p><p class="ar">…</p>
  </div>
  <div class="ver" data-title-en="Version 2 — …" data-title-ar="…">
    …
    <p class="en">What changed, which defect it closes, what is still open.</p><p class="ar">…</p>
  </div>
  <!-- 2–4 versions. The last is the recommended form. -->
</div>
```

The tests ask which version is better and why, so the differences must be crisp.

## 4. Questions (`assets/theory/data/questions/<bank>.js`)

```js
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-01"] = {
  title: { en: "Test 1 — …", ar: "اختبار 1 — …" },
  intro: { en: "…", ar: "…" },
  questions: [ { … }, … ]      // lesson test: >= 20 (target 24); chapter test: exactly 24
};
```

Common fields: `id` (unique across the course: `t2l1q01`, chapter tests `t2ax01`),
`type`, `level` (`easy|medium|hard`), `topics: ["t2-entity", …]`, `q {en,ar}`,
optional `code` / `codeA` + `codeB`, **`hint {en,ar}` (required)**,
**`explain {en,ar}` (required)**, optional `solution {code?, out?, en?, ar?}`.

| `type` | extra fields |
|---|---|
| `tf` | `truth: true\|false` |
| `mcq` | `options: [{en,ar}\|{code}]`, `answer: <index>` |
| `multi` | `options`, `answer: [i, j]` |
| `fill` | `blanks: [{accept: ["must be","must"], label?, wide?, lines?, ph?, hint?}]` (`____1____` markers in `code`) |
| `output` | `code` (SQL); `blanks:[{accept:[…], lines?}]` or `options` |
| `trace` | `code`; `blanks` or `options` |
| `order` | `items: [{en,ar}]`, `answer: [0,1,2…]` |
| `ordercode` | `items: [{code:"…"}]` — orders SQL statements or modelling steps |
| `match` | `pairs: [{l,r}]`, optional `leftHead`/`rightHead` |
| `error` | `code`, `answer: <1-based line or [lines]>`, optional `solution` |
| `complete` | `code` with a gap; `options:[{code}]` + `answer`, or `blanks` |
| `compare` | `codeA`, `codeB`, `options: [{en,ar}]`, `answer` |
| `contrast` | `concepts: [{en,ar},{en,ar}]`, `rows: [{s:{en,ar}, a:0\|1\|2\|3}]` |
| `write` | `starter?`, `lines?`, `checks: [{re:"CREATE\\s+TABLE", flags?:"i", label:{en,ar}}]`, optional `forbid`, `solution:{code,en,ar}` |

Two type notes specific to this track:

- **ERDish is code.** A `fill`, `complete` or `write` question about a business rule
  puts the sentence in `code` with `data-lang="erdish"`, e.g.
  `Each EMPLOYEE ____1____ work in ____2____ DEPARTMENT.`
- **`error` on a diagram.** Put the ERD as **text** in `code` (one entity or
  relationship per line, numbered by line) and ask which line breaks the rule.
  A picture cannot carry a line number.

## 5. Topics (`assets/theory/data/topics/<key>-lN.js`)

```js
window.DBTTopics = window.DBTTopics || {};
window.DBTTopics["t2-entity"] = { en: "Entity", ar: "الكيان", href: "#t2l4-h1" };
```

≥ 12 per lesson, each `href` a heading id **in that lesson**. One file per lesson so
authors never collide. Never redefine a key another lesson defined.

## 6. Diagrams (`src/diagrams/<id>.svg`)

An ERD is authored directly as SVG — there is no renderer and no build step, the source
file *is* the diagram. `build-theory.py` inlines it into every
`<figure class="diagram" data-diagram="<id>">`.

Rules the verifier enforces:

- a `viewBox` (so it scales), and **no `width`/`height` attributes on the root `<svg>`**;
- **no hard-coded colours** — use `currentColor` and the theme variables
  (`var(--accent)`, `var(--line)`, `var(--bg-soft)`, `var(--fg-dim)`), so one file is
  correct in light and dark;
- **both languages inside the one file**: every label is a `<g class="en">…</g>` and a
  `<g class="ar">…</g>` pair, and the page's language switch shows one and hides the
  other (the same `.en`/`.ar` rule as the prose). Arabic `<text>` carries
  `direction="rtl"`.

The Oracle conventions you are drawing (get these right — they are the subject):

| Thing | How it is drawn |
|---|---|
| entity | a softbox (`rx="10"`), name **SINGULAR, UPPERCASE**, at the top |
| unique identifier | `#` before the attribute |
| mandatory attribute | `*` before the attribute |
| optional attribute | `o` before the attribute |
| relationship | a line between two entities, **named at both ends, lowercase** |
| mandatory end | that half of the line is **solid** |
| optional end | that half of the line is **dashed** |
| one and only one | the line meets the entity as a **single toe** |
| one or more | the line meets the entity as a **crow's foot** (three strokes) |
| non-transferable | a **diamond** on the middle of the line |
| barred (UID comes from the parent) | a short **bar** across the line, at the child end |
| subtype | a box **inside** its supertype's box |

A relationship line is drawn in two halves because optionality is per end: the half
next to the entity whose rule is "must" is solid, the other half dashed.

## 7. A live SQL box

The theory track does not ship its own SQL engine; it loads the SQL course's. Any page
containing `class="qb-widget"` — and every lab — gets `alasql`, `assets/js/data.js`,
`assets/js/widget.js` and `assets/css/widget.css` wired in automatically. The config
format is the SQL course's, documented in the repository `README.md` under *Widget
authoring reference*. Use `mode: "explore"` for a sandbox, `mode: "demo"` for a
prefilled statement to run, `mode: "exercise"` with a `grade` block for graded work.

## 8. Glossary (`src/glossary/<key>/lesson-NN.json`)

```json
[ { "id": "entity",
    "term": { "en": "Entity", "ar": "كيان" },
    "def":  { "en": "…one sentence…", "ar": "…" },
    "see":  ["instance", "attribute"] } ]
```

8–12 terms per lesson — the terms *that lesson introduces*, not every term it mentions.
`id` must match the `data-term` you used in the prose.

## 9. What the verifier fails a lesson for

Under 20 KB; fewer than 2 evolve blocks; fewer than 4 exercises; fewer than 6 inline
quizzes; a concept section (`h2`) with no activity after it; no `sql-lens` in a concept
section; no takeaways; no link to its own test; an `h2`/`h3` without an id; ids not
starting with `<key>l<N>-`; unbalanced `.en`/`.ar`; a diagram id with no
`src/diagrams/<id>.svg`; a `data-term` with no glossary entry; a dead `#` link.
