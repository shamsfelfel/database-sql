/* verify-exercises.js — grading fidelity check for every widget in the course.

   Usage:
     node scripts/verify-exercises.js                 # every lesson / test / exam page
     node scripts/verify-exercises.js lessons/chapter-6-lesson-1.html ...

   For each <script class="wd-config"> found in those pages it replays exactly
   what assets/js/widget.js does — load the snapshot as real tables, run `setup`
   live, execute SQL, compare result sets order-insensitively — and then asserts:

     demo widgets      the prefilled SQL runs without error.
     exercise widgets  a KNOWN-CORRECT answer is graded correct, and a plausible
                       WRONG answer is graded incorrect.

   The known-correct answer is the config's own reference: `grade.expected` for
   result mode, or the explicit `answer` field (required for state/structural
   mode, where the student writes a statement rather than the query itself).
   The wrong answer is the config's `wrong` field when given, otherwise a
   derived one (the naive whole-table query, or a statement that changes
   nothing). Anything that cannot be checked is reported, not skipped silently.

   Exit code is non-zero if any check fails, so it can gate a chapter build. */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const alasql = require(path.join(ROOT, 'assets/vendor/alasql/alasql.min.js'));

/* ---------- widget.js behaviour, replicated ---------- */

function clone(x) { return JSON.parse(JSON.stringify(x)); }

function inferColumns(rows) {
  const order = [], seen = {};
  rows.forEach(r => Object.keys(r).forEach(k => { if (!seen[k]) { seen[k] = true; order.push(k); } }));
  return order.map(k => {
    let type = 'TEXT';
    for (const r of rows) {
      const v = r[k];
      if (v === null || v === undefined) continue;
      if (typeof v === 'boolean') type = 'BOOLEAN';
      else if (typeof v === 'number') type = Number.isInteger(v) ? 'INT' : 'REAL';
      else type = 'TEXT';
      break;
    }
    return { id: k, type };
  });
}

function loadTables(data) {
  Object.keys(alasql.tables || {}).forEach(k => { delete alasql.tables[k]; });
  Object.keys(data || {}).forEach(name => {
    const rows = Array.isArray(data[name]) ? data[name] : [];
    const cols = inferColumns(rows);
    if (cols.length) {
      alasql('CREATE TABLE ' + name + ' (' + cols.map(c => c.id + ' ' + c.type).join(', ') + ')');
      alasql.tables[name].data = clone(rows);
    } else {
      alasql.tables[name] = { data: [] };
    }
  });
}

function isRowsArray(x) {
  return Array.isArray(x) && (x.length === 0 || (typeof x[0] === 'object' && x[0] !== null && !Array.isArray(x[0])));
}

function exec(sql) {
  try {
    const res = alasql(sql);
    const rows = isRowsArray(res) ? res
      : (Array.isArray(res) && res.length && isRowsArray(res[res.length - 1])) ? res[res.length - 1]
      : null;
    return { rows, error: null };
  } catch (e) {
    return { rows: null, error: (e && e.message) ? e.message : String(e) };
  }
}

function compareResultSets(actual, expected, opts) {
  opts = opts || {};
  if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
  if (actual.length !== expected.length) return false;
  const canon = row => JSON.stringify(Object.keys(row).sort().reduce((o, k) => (o[k] = row[k], o), {}));
  const a = actual.map(canon), e = expected.map(canon);
  if (!opts.orderMatters) { a.sort(); e.sort(); }
  return JSON.stringify(a) === JSON.stringify(e);
}

/* ---------- datasets ---------- */

const snapshots = {};
function snapshot(caseId, chapter) {
  const key = caseId + '/' + chapter;
  if (!snapshots[key]) {
    const file = path.join(ROOT, 'data', 'case-' + caseId, 'chapter-' + chapter + '.json');  // chapter may be 'exam'
    snapshots[key] = JSON.parse(fs.readFileSync(file, 'utf8')).tables;
  }
  return clone(snapshots[key]);
}

function datasetOf(cfg) {
  if (cfg.dataset) return clone(cfg.dataset);
  if (cfg.case && cfg.chapter) return snapshot(cfg.case, cfg.chapter);
  return {};
}

function prime(cfg) {
  loadTables(datasetOf(cfg));
  (cfg.setup || []).forEach(s => alasql(s));
}

/* ---------- grading, as the widget grades ---------- */

function computeExpected(cfg, expected) {
  if (Array.isArray(expected)) return expected;
  if (typeof expected === 'string') { prime(cfg); return exec(expected).rows || []; }
  return [];
}

function gradeResult(cfg, sql) {
  prime(cfg);
  const r = exec(sql);
  if (r.error) return { pass: false, why: 'error: ' + r.error };
  const expected = computeExpected(cfg, cfg.grade.expected);
  const pass = compareResultSets(r.rows || [], expected, { orderMatters: !!cfg.grade.orderMatters });
  return { pass, rows: (r.rows || []).length, expectedRows: expected.length };
}

function gradeState(cfg, sql) {
  const g = cfg.grade;
  const expected = g.expectEmpty ? [] : computeExpected(cfg, g.expected);
  prime(cfg);
  const r = exec(sql);
  if (r.error) return { pass: false, why: 'error: ' + r.error };
  const cr = exec(g.check);
  if (cr.error) return { pass: false, why: 'check failed: ' + cr.error };
  const pass = compareResultSets(cr.rows || [], expected, { orderMatters: !!g.orderMatters });
  return { pass, rows: (cr.rows || []).length, expectedRows: expected.length };
}

function gradeStructural(cfg, sql) {
  const g = cfg.grade;
  prime(cfg);
  const r = exec(sql);
  if (r.error) return { pass: false, why: 'error: ' + r.error };
  const tbl = alasql.tables[g.table];
  if (!tbl) return { pass: false, why: 'no table ' + g.table };
  const declared = (tbl.columns || []).map(c => String(c.columnid).toLowerCase());
  const haveCols = (g.columns || []).every(c => declared.indexOf(String(c).toLowerCase()) >= 0);
  const haveAbsent = (g.absent || []).every(c => declared.indexOf(String(c).toLowerCase()) < 0);
  let usable = true;
  if (g.probe !== false && (g.columns || []).length) {
    try {
      const cols = g.columns;
      const probe = {}; cols.forEach((c, i) => { probe[c] = /id$/i.test(c) ? (9000 + i) : ('probe' + i); });
      alasql('INSERT INTO ' + g.table + ' (' + cols.join(', ') + ') VALUES (' + cols.map(c => JSON.stringify(probe[c])).join(', ') + ')');
    } catch (e) { usable = false; }
    try { alasql('DELETE FROM ' + g.table + ' WHERE id >= 9000'); } catch (e) {}
  }
  return { pass: haveCols && haveAbsent && usable, why: haveCols && haveAbsent ? '' : 'columns' };
}

function grade(cfg, sql) {
  const mode = (cfg.grade || {}).mode || 'result';
  if (mode === 'structural') return gradeStructural(cfg, sql);
  if (mode === 'state') return gradeState(cfg, sql);
  return gradeResult(cfg, sql);
}

/* ---------- candidate answers ---------- */

function firstTable(sql) {
  const m = /\bfrom\s+([a-z_][a-z0-9_]*)/i.exec(sql || '');
  return m ? m[1] : null;
}

function correctAnswer(cfg) {
  if (cfg.answer) return cfg.answer;
  const g = cfg.grade || {};
  if ((g.mode || 'result') === 'result' && typeof g.expected === 'string') return g.expected;
  return null;                                     // needs an explicit `answer`
}

function wrongAnswer(cfg) {
  if (cfg.wrong) return cfg.wrong;
  const g = cfg.grade || {};
  const mode = g.mode || 'result';
  if (mode === 'result' && typeof g.expected === 'string') {
    const t = firstTable(g.expected);
    return t ? 'SELECT * FROM ' + t : null;
  }
  if (mode === 'state') {
    const m = /from\s+([a-z_][a-z0-9_]*)/i.exec(g.check || '');
    const target = m && m[1];
    if (target && /create\s+view/i.test(cfg.answer || cfg.placeholder || '')) {
      const base = firstTable(typeof g.expected === 'string' ? g.expected : '') || target;
      return 'CREATE VIEW ' + target + ' AS SELECT * FROM ' + base;
    }
    return 'SELECT 1';                             // a statement that changes nothing
  }
  if (mode === 'structural') return 'SELECT 1';    // creates nothing
  return null;
}

/* ---------- page scanning ---------- */

function configs(html) {
  const out = [];
  const re = /<script type="application\/json" class="wd-config">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    const before = html.slice(0, m.index);
    const qid = (before.match(/data-qid="([^"]+)"[^>]*>\s*$/) || [])[1]
      || (before.match(/data-qid="([^"]+)"/g) || []).slice(-1)[0] || '';
    out.push({ raw: m[1], qid: String(qid).replace(/.*data-qid="|"$/g, ''), index: out.length + 1 });
  }
  return out;
}

function pages(args) {
  if (args.length) return args;
  const out = [];
  ['lessons', 'tests', 'exams'].forEach(d => {
    const dir = path.join(ROOT, d);
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).filter(f => /\.html$/.test(f)).sort().forEach(f => out.push(d + '/' + f));
  });
  return out;
}

/* ---------- run ---------- */

let fails = 0, checked = 0, demos = 0, warns = 0, skipped = 0;

for (const rel of pages(process.argv.slice(2))) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const list = configs(html);
  const problems = [];
  for (const item of list) {
    let cfg;
    try { cfg = JSON.parse(item.raw); }
    catch (e) { problems.push('  #' + item.index + ' INVALID JSON: ' + e.message); fails++; continue; }
    const label = '  #' + item.index + ' ' + (item.qid || cfg.mode);

    // A readonly widget has no Run button: its SQL is printed as a sample (often
    // a deliberately dangerous one), never executed. Nothing to check.
    if (cfg.readonly) { skipped++; continue; }

    if (cfg.mode === 'exercise') {
      checked++;
      const ok = correctAnswer(cfg);
      if (!ok) { problems.push(label + ' SKIPPED — no reference answer (add "answer" to the config to check it)'); skipped++; continue; }
      const good = grade(cfg, ok);
      if (!good.pass) { problems.push(label + ' correct answer REJECTED — ' + (good.why || '') + ' (' + good.rows + ' rows vs expected ' + good.expectedRows + ')'); fails++; }
      else if (good.expectedRows === 0 && !(cfg.grade || {}).expectEmpty && (cfg.grade || {}).mode !== 'structural') {
        problems.push(label + ' WARNING expected result is empty — a wrong answer could match it'); warns++;
      }
      const bad = wrongAnswer(cfg);
      if (!bad) { problems.push(label + ' SKIPPED — no wrong-answer probe available'); skipped++; continue; }
      const norm = q => String(q).replace(/\s+/g, ' ').replace(/;\s*$/, '').trim().toLowerCase();
      if (!cfg.wrong && norm(bad) === norm(ok)) {
        // e.g. the question really is "select every column" — the naive query is correct
        problems.push(label + ' SKIPPED — the derived wrong answer is the right one (add "wrong" to probe it)');
        skipped++; continue;
      }
      const poor = grade(cfg, bad);
      if (poor.pass) { problems.push(label + ' WRONG answer ACCEPTED: ' + bad); fails++; }
    } else if (cfg.mode === 'explore') {
      // A sandbox has no prefilled SQL; its example chips are what we can check.
      (cfg.examples || []).forEach((ex, i) => {
        demos++;
        prime(cfg);
        const r = exec(ex.sql || '');
        if (r.error) { problems.push(label + ' example ' + (i + 1) + ' (' + (ex.label || '') + ') failed: ' + r.error); fails++; }
      });
    } else {
      demos++;
      prime(cfg);
      const r = exec(cfg.sql || '');
      if (r.error) { problems.push(label + ' demo SQL failed: ' + r.error); fails++; }
    }
  }
  const tag = problems.length ? 'ISSUES' : 'ok';
  console.log(rel + ' — ' + list.length + ' widgets — ' + tag);
  problems.forEach(p => console.log(p));
}

console.log('\n' + checked + ' exercises + ' + demos + ' demos checked · ' + fails + ' failures · '
  + warns + ' warnings · ' + skipped + ' skipped');
process.exit(fails ? 1 : 0);
