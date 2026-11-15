#!/usr/bin/env python3
"""Structural checks on the built site. Exits non-zero on any failure.

Covers what a browser will not tell you until a student hits it: a topic chip
pointing at a heading that was renamed, a link to a page that is not there, a
question shipped without a hint, a trace step naming a line its program does not
have, an English sentence with no Arabic beside it, a lesson with no AI lens.

    python tools/verify_chapter.py                       # everything
    python tools/verify_chapter.py --scope t1-lesson-02  # one lesson + its test only
    python tools/verify_chapter.py --scope t1            # one whole chapter

A scoped run skips the checks that need the whole chapter to exist (type
coverage across banks, unused topics, glossary size, stale-build) so an author
can verify the page they just wrote while others are still writing theirs.
"""
import argparse
import glob
import io
import json
import os
import posixpath
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

QUESTION_TYPES = ["tf", "mcq", "multi", "fill", "order", "ordercode", "match", "error",
                  "complete", "compare", "contrast", "output", "trace", "write"]
LESSON_TEST_MIN = 20
EXAM_SIZE = 24
EXAM_COUNT = 3
MIN_TYPES_PER_TEST = 7
MIN_EVOLVE = 2
MIN_GLOSSARY = 40
MIN_DIAGRAMS = 6
MIN_TRACES = 6

problems = []
notes = []


def fail(msg):
    problems.append(msg)


def read(rel):
    return io.open(os.path.join(ROOT, rel), encoding="utf-8").read()


def exists(rel):
    return os.path.exists(os.path.join(ROOT, rel.replace("/", os.sep)))


def registry():
    return json.loads(read("src/registry.json"))


# --------------------------------------------------------------------------
# scope
# --------------------------------------------------------------------------

class Scope(object):
    """Which chapters / pages this run is about. Empty scope = everything."""

    def __init__(self, reg, tokens):
        self.full = not tokens
        self.chapters = set()
        self.pages = set()
        for t in tokens:
            if any(c["key"] == t for c in reg["chapters"]):
                self.chapters.add(t)
            else:
                self.pages.add(t)
        # a page in scope pulls in its test, and a test its lesson
        for ch in reg["chapters"]:
            for p in ch["pages"]:
                if p["id"] in self.pages:
                    if p["kind"] == "lesson":
                        self.pages.add("%s-test-%02d" % (ch["key"], p["n"]))
                    if p["kind"] == "test":
                        self.pages.add("%s-lesson-%02d" % (ch["key"], p["of"]))

    def has_page(self, ch, page):
        return self.full or ch["key"] in self.chapters or page["id"] in self.pages

    def has_chapter(self, ch):
        return self.full or ch["key"] in self.chapters


# --------------------------------------------------------------------------
# build
# --------------------------------------------------------------------------

def check_build():
    r = subprocess.run([sys.executable, os.path.join(ROOT, "build-theory.py"), "--check", "--strict"],
                       capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
    if r.returncode != 0:
        fail("the built site is stale or has build warnings - run python build-theory.py\n    " +
             r.stderr.strip().replace("\n", "\n    ")[:2500])
    r = subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "build-sw.py"), "--check"],
                       capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
    if r.returncode != 0:
        fail("sw.js is out of step with the site - run python scripts/build-sw.py\n    " + r.stderr.strip())
    # No trace generator and no Mermaid renderer in this track: the diagrams are
    # authored SVG (src/diagrams/<id>.svg) that build-theory.py inlines, so there
    # is nothing that can go stale and nothing here that needs Node.


def check_syntax():
    files = []
    for pattern in ("assets/theory/js/*.js", "assets/theory/data/*.js", "assets/theory/data/*/*.js"):
        files += glob.glob(os.path.join(ROOT, pattern))
    for f in sorted(files):
        r = subprocess.run(["node", "--check", f], capture_output=True, text=True, encoding="utf-8")
        if r.returncode != 0:
            fail("syntax error in %s:\n%s" % (os.path.relpath(f, ROOT), r.stderr.strip()[:600]))


# --------------------------------------------------------------------------
# pages
# --------------------------------------------------------------------------

def built_pages(reg):
    pages = {}
    # The site's index.html belongs to the SQL course and is hand-written; the
    # page this generator owns is the theory track's own home.
    if exists("theory/index.html"):
        pages["theory/index.html"] = read("theory/index.html")
    for ch in reg["chapters"]:
        for p in ch["pages"]:
            href = p["href"] if "href" in p else None
            if href is None:
                d = {"chapter": "chapters", "lesson": "lessons", "test": "tests", "exam": "exams",
                     "lab": "labs", "glossary": "glossary"}[p["kind"]]
                href = ("chapters/%s.html" % ch["key"]) if p["kind"] == "chapter" else "%s/%s.html" % (d, p["id"])
            if exists(href):
                pages[href] = read(href)
            else:
                fail("registry page %s was not built (%s)" % (p["id"], href))
    return pages


def strip_scripts(html):
    return re.sub(r"<script\b.*?</script>", "", html, flags=re.S)


def ids_of(html):
    return set(re.findall(r'\sid="([^"]+)"', strip_scripts(html)))


def check_links(pages):
    ids = {path: ids_of(html) for path, html in pages.items()}
    internal = 0
    for path, html in pages.items():
        body = strip_scripts(html)
        here = posixpath.dirname(path)
        for href in re.findall(r'<a [^>]*?href="([^"]+)"', body):
            if href.startswith(("http://", "https://", "mailto:", "javascript:")):
                continue
            internal += 1
            file_part, _, anchor = href.partition("#")
            if not file_part:
                target = path
            else:
                target = posixpath.normpath(posixpath.join(here, file_part))
                if target not in pages:
                    if not exists(target):
                        fail("%s links to %s, which does not exist" % (path, file_part))
                    continue
            if anchor and anchor not in ids[target]:
                fail("%s links to #%s on %s, which has no such anchor" % (path, anchor, target))
    notes.append("%d pages, %d internal links, %d anchors" % (len(pages), internal, sum(len(v) for v in ids.values())))


def check_assets(pages):
    refs = 0
    for path, html in pages.items():
        here = posixpath.dirname(path)
        found = (re.findall(r'<link [^>]*?href="([^"]+)"', html) +
                 re.findall(r'<script [^>]*?src="([^"]+)"', html))
        for ref in found:
            if ref.startswith(("http://", "https://", "data:")):
                continue
            refs += 1
            target = posixpath.normpath(posixpath.join(here, ref.split("#")[0]))
            if not exists(target):
                fail("%s loads %s, which does not exist" % (path, ref))
    notes.append("%d asset references resolved" % refs)


def check_page_assets(pages):
    for path, html in pages.items():
        for must in ("registry.js", "course.js", "app.js", "tokens.css", "base.css"):
            if must not in html:
                fail("%s does not load %s" % (path, must))
        has_bank = 'data-bank="' in html
        loads_assess = "assets/theory/js/assess.js" in html
        if has_bank != loads_assess:
            fail("%s: question bank placeholder (%s) and assess.js (%s) disagree" % (path, has_bank, loads_assess))
        # This track has no Python execution traces; its lab runs SQL in the
        # course's own widget, so what a lab must load is the widget instead.
        if 'data-kind="lab"' in html or 'class="qb-widget"' in html:
            for must in ("alasql.min.js", "assets/js/widget.js", "assets/css/widget.css"):
                if must not in html:
                    fail("%s runs SQL but does not load %s" % (path, must))
        if "data-trace-id=" in html:
            fail("%s mounts an execution trace; this track has no trace engine" % path)
        banks = re.findall(r'assets/theory/data/questions/([a-z0-9-]+)\.js', html)
        if len(banks) > 1:
            fail("%s loads %d question banks; a page needs only its own" % (path, len(banks)))
        has_gloss = "data-glossary=" in html
        if has_gloss != ("assets/theory/js/glossary.js" in html):
            fail("%s: glossary mount and glossary.js disagree" % path)
        if ('class="diagram"' in html) != ("assets/theory/css/diagram.css" in html):
            fail("%s: figure.diagram and diagram.css disagree" % path)


# --------------------------------------------------------------------------
# authored content
# --------------------------------------------------------------------------

def content_files(reg, scope):
    out = {}
    for ch in reg["chapters"]:
        for p in ch["pages"]:
            if p["kind"] not in ("lesson", "lab", "chapter"):
                continue
            if not scope.has_page(ch, p):
                continue
            if p["kind"] == "lesson":
                rel = "src/content/%s/lesson-%02d.html" % (ch["key"], p["n"])
            elif p["kind"] == "lab":
                rel = "src/content/%s/lab.html" % ch["key"]
            else:
                rel = "src/content/%s/index.html" % ch["key"]
            if exists(rel):
                out[p["id"]] = (ch, p, rel, read(rel))
            elif p["kind"] == "lesson":
                fail("%s has no authored content (%s)" % (p["id"], rel))
    return out


def balanced(html, rel):
    en_s = len(re.findall(r'<span class="en">', html))
    ar_s = len(re.findall(r'<span class="ar">', html))
    en_p = len(re.findall(r'<(?:p|li|div|figcaption|summary|td|th)\b[^>]*class="[^"]*\ben\b[^"]*"', html))
    ar_p = len(re.findall(r'<(?:p|li|div|figcaption|summary|td|th)\b[^>]*class="[^"]*\bar\b[^"]*"', html))
    if en_s != ar_s:
        fail("%s: bilingual spans unbalanced: %d en vs %d ar" % (rel, en_s, ar_s))
    if en_p != ar_p:
        fail("%s: bilingual blocks unbalanced: %d en vs %d ar" % (rel, en_p, ar_p))
    return en_s + en_p


def check_lessons(reg, scope):
    total = 0
    for pid, (ch, p, rel, html) in sorted(content_files(reg, scope).items()):
        total += balanced(html, rel)
        if p["kind"] != "lesson":
            continue
        n = p["n"]
        key = ch["key"]
        if not re.search(r'<h1>.*?</h1>', html, re.S):
            fail("%s: no <h1>" % rel)
        if 'class="lede en"' not in html or 'class="lede ar"' not in html:
            fail("%s: needs a bilingual .lede" % rel)
        # heading ids
        for tag, hid in re.findall(r'<h([23])\b[^>]*?\sid="([^"]+)"', html):
            if not hid.startswith("%sl%d-" % (key, n)):
                fail("%s: heading id %r should start with %sl%d-" % (rel, hid, key, n))
        for tag in re.findall(r'<(h[23])\b(?![^>]*\sid=)[^>]*>', html):
            fail("%s: an <%s> has no id" % (rel, tag))
        hs = re.findall(r'<h2\b[^>]*?\sid="([^"]+)"', html)
        if len(hs) < 4:
            fail("%s: only %d h2 sections (a lesson needs at least 4)" % (rel, len(hs)))
        lens = html.count('class="sql-lens"')
        if lens < len(hs) - 1:
            fail("%s: %d \"In the database\" boxes for %d concept sections (one each, bar the exercises)"
                 % (rel, lens, len(hs)))
        evo = html.count('class="evolve"')
        if evo < MIN_EVOLVE:
            fail("%s: %d evolve blocks (need at least %d)" % (rel, evo, MIN_EVOLVE))
        for block in re.findall(r'<div class="evolve"[^>]*>(.*?)\n  </div>\s*(?=\n)', html, re.S):
            pass
        for m in re.finditer(r'<div class="evolve"([^>]*)>', html):
            seg = html[m.end(): m.end() + 60000]
            end = seg.find('class="evolve"')
            seg = seg if end < 0 else seg[:end]
            vers = seg.count('class="ver"')
            if vers < 2:
                fail("%s: an evolve block has %d version(s); needs at least 2" % (rel, vers))
                break
        if 'data-title-en=' not in html and evo:
            fail("%s: evolve versions need data-title-en / data-title-ar" % rel)
        # Nobody reads for ten minutes. Every concept section must end in something
        # to do: an inline check, an exercise, a live SQL box or an evolve block.
        chunks = re.split(r'<h2\b', html)[1:]
        for i, chunk in enumerate(chunks[:-1], 1):   # the last h2 is Exercises
            if not re.search(r'class="[^"]*\b(quiz|exercise|qb-widget|evolve)\b', chunk):
                hid = re.search(r'id="([^"]+)"', chunk)
                fail("%s: concept section %s has nothing to do in it"
                     % (rel, hid.group(1) if hid else "#%d" % i))
        quizzes = len(re.findall(r'class="[^"]*\bquiz\b', html))
        if quizzes < 6:
            fail("%s: %d inline checks (need at least 6)" % (rel, quizzes))
        ex = html.count('class="exercise"')
        if ex < 4:
            fail("%s: %d exercises (need at least 4)" % (rel, ex))
        if ex and html.count('class="solution"') + html.count("<details class=\"solution\"") < ex:
            fail("%s: an exercise has no hidden solution" % rel)
        if "takeaways" not in html:
            fail("%s: no takeaways card" % rel)
        if ("#%s-test-%02d" % (key, n)) not in html:
            fail("%s: does not link to its own test" % rel)
        if not re.search(r'class="[^"]*\bquiz\b', html):
            fail("%s: no inline quiz" % rel)
        # every pre.code has a language or is python; every <code> block bilingual-neutral
        for bad in re.findall(r'<pre class="code[^"]*"(?![^>]*data-lang)', html):
            fail("%s: a code block has no data-lang" % rel)
        size = len(html.encode("utf-8"))
        if size < 20000:
            fail("%s is only %d KB; a lesson should be substantial" % (rel, size // 1024))
    notes.append("%d bilingual blocks in authored content" % total)


# --------------------------------------------------------------------------
# data (banks, topics, traces, glossary) via node
# --------------------------------------------------------------------------

def dump_data():
    script = r"""
global.window = {};
var fs = require('fs'), path = require('path');
var root = process.argv[1];
var errs = [];
function load(rel) {
  var p = path.join(root, rel);
  try { require(p); } catch (e) { errs.push(rel + ': ' + e.message); }
}
['assets/theory/data/topics', 'assets/theory/data/questions', 'assets/theory/data/traces'].forEach(function (d) {
  var full = path.join(root, d);
  if (!fs.existsSync(full)) return;
  fs.readdirSync(full).filter(function (f) { return /\.js$/.test(f); }).forEach(function (f) { load(d + '/' + f); });
});
fs.readdirSync(path.join(root, 'assets/theory/data')).filter(function (f) { return /^glossary-.*\.js$/.test(f); })
  .forEach(function (f) { load('assets/theory/data/' + f); });
process.stdout.write(JSON.stringify({
  banks: global.window.DBTBanks || {}, topics: global.window.DBTTopics || {},
  traces: global.window.DBTTraces || {}, glossary: global.window.DBTGlossary || {}, errors: errs }));
"""
    out = subprocess.run(["node", "-e", script, ROOT], capture_output=True, text=True, encoding="utf-8")
    if out.returncode != 0:
        fail("data files do not load under node:\n" + out.stderr.strip()[:800])
        return None
    data = json.loads(out.stdout)
    for e in data["errors"]:
        fail("data file failed to load: " + e)
    return data


def walk_bilingual(obj, where, seen):
    if isinstance(obj, dict):
        has_en, has_ar = "en" in obj, "ar" in obj
        if has_en or has_ar:
            if not (obj.get("en") or "").strip():
                seen.append("%s: empty or missing English" % where)
            if not (obj.get("ar") or "").strip():
                seen.append("%s: empty or missing Arabic" % where)
        for k, v in obj.items():
            if k not in ("en", "ar"):
                walk_bilingual(v, where + "." + str(k), seen)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk_bilingual(v, "%s[%d]" % (where, i), seen)


def anchors_of():
    src = read("assets/theory/js/anchors.js")
    m = re.search(r"window\.DBTAnchors = (\{.*?\});\s*window\.DBTHeadings", src, re.S)
    if not m:
        fail("assets/theory/js/anchors.js does not define DBTAnchors")
        return {}
    return json.loads(m.group(1))


def collapse(s):
    return re.sub(r"\s+", " ", s or "").strip()


def js_flags(flags):
    f = 0
    for c in flags or "":
        f |= {"i": re.I, "m": re.M, "s": re.S}.get(c, 0)
    return f


def check_question(q, at, topics, types_seen):
    """Everything one question must satisfy."""
    t = q.get("type")
    if t not in QUESTION_TYPES:
        fail("%s: unknown type %r" % (at, t))
        return
    types_seen[t] = types_seen.get(t, 0) + 1
    if q.get("level") not in ("easy", "medium", "hard"):
        fail("%s: level is %r" % (at, q.get("level")))
    if not q.get("topics"):
        fail("%s: no topics" % at)
    for tk in q.get("topics") or []:
        if tk not in topics:
            fail("%s: unknown topic %r" % (at, tk))
    if not q.get("hint"):
        fail("%s: no hint" % at)
    if not q.get("explain"):
        fail("%s: no explanation" % at)
    if not q.get("q"):
        fail("%s: no question text" % at)

    opts = q.get("options")
    if t == "tf":
        if not isinstance(q.get("truth"), bool):
            fail("%s: tf needs a boolean `truth`" % at)
    elif t in ("mcq", "compare") or (t in ("complete", "output", "trace", "error") and opts):
        if not opts:
            fail("%s: no options" % at)
        elif not isinstance(q.get("answer"), int) or isinstance(q.get("answer"), bool):
            fail("%s: answer must be an option index" % at)
        elif not (0 <= q["answer"] < len(opts)):
            fail("%s: answer %r out of range" % (at, q["answer"]))
        elif len(opts) < 3:
            fail("%s: a choice question needs at least 3 options" % at)
        if t == "compare" and not (q.get("codeA") and q.get("codeB")):
            fail("%s: compare needs codeA and codeB" % at)
    elif t == "multi":
        if not isinstance(q.get("answer"), list) or len(q.get("answer") or []) < 2:
            fail("%s: multi needs a list answer of at least two" % at)
        elif any(not (0 <= i < len(opts or [])) for i in q["answer"]):
            fail("%s: answer index out of range" % at)
    elif t in ("order", "ordercode"):
        items = q.get("items") or []
        ans = q.get("answer")
        if ans is None and t == "ordercode":
            ans = list(range(len(items)))      # the engine defaults to the order listed
        ans = ans or []
        if len(items) < 3:
            fail("%s: order needs at least 3 items" % at)
        if sorted(ans) != list(range(len(items))):
            fail("%s: answer must be a permutation of all %d items" % (at, len(items)))
        if t == "ordercode" and any("code" not in (i or {}) for i in items):
            fail("%s: ordercode items must be {code: ...}" % at)
    elif t == "match":
        if len(q.get("pairs") or []) < 3:
            fail("%s: match needs at least three pairs" % at)
    elif t == "contrast":
        concepts, rows = q.get("concepts") or [], q.get("rows") or []
        if len(concepts) != 2:
            fail("%s: contrast needs exactly 2 concepts" % at)
        if len(rows) < 4:
            fail("%s: contrast needs at least 4 rows" % at)
        top = 3 if q.get("neither") else 2
        for i, r in enumerate(rows):
            if not isinstance(r.get("a"), int) or not (0 <= r["a"] <= top) or "s" not in r:
                fail("%s: contrast row %d needs s and a in 0..%d" % (at, i + 1, top))
        if rows and len(set(r.get("a") for r in rows)) < 2:
            fail("%s: contrast rows should not all have the same answer" % at)
    elif t == "error":
        lines = len(str(q.get("code", "")).strip("\n").split("\n"))
        ans = q.get("answer")
        ans = ans if isinstance(ans, list) else [ans]
        for n in ans:
            if not isinstance(n, int) or not (1 <= n <= lines):
                fail("%s: answer line %r outside 1..%d" % (at, n, lines))
    elif t == "write":
        checks = q.get("checks") or []
        if not checks:
            fail("%s: write needs checks" % at)
        sol = (q.get("solution") or {}).get("code")
        if not sol:
            fail("%s: write needs solution.code" % at)
        for i, c in enumerate(checks):
            try:
                rx = re.compile(c["re"], js_flags(c.get("flags")))
            except Exception as e:      # pragma: no cover
                fail("%s: check %d has an invalid regex: %s" % (at, i + 1, e))
                continue
            if not c.get("label"):
                fail("%s: check %d has no label" % (at, i + 1))
            if sol and not rx.search(collapse(sol)):
                fail("%s: the model solution does not satisfy its own check %d (%r)" % (at, i + 1, c["re"]))
        for i, c in enumerate(q.get("forbid") or []):
            try:
                if sol and re.compile(c["re"], js_flags(c.get("flags"))).search(collapse(sol)):
                    fail("%s: the model solution trips its own forbid %d" % (at, i + 1))
            except Exception as e:      # pragma: no cover
                fail("%s: forbid %d has an invalid regex: %s" % (at, i + 1, e))
    else:   # fill, output (typed), complete (typed), trace (typed)
        blanks = q.get("blanks") or []
        if not blanks:
            fail("%s: no blanks" % at)
        for i, b in enumerate(blanks):
            if not (b.get("accept") or []):
                fail("%s: blank %d accepts nothing" % (at, i + 1))
        if t == "fill" and q.get("code") and not re.search(r"_{3,}\w*_{0,}", q["code"]):
            fail("%s: fill code has no ____n____ markers" % at)

    # A worked solution is for the questions a student types into. When the
    # answer is chosen from options the right option IS the solution, and
    # `explain` already says why -- which is why `error` was exempted when it
    # has options, and the same reasoning covers `complete`.
    if t in ("complete", "error", "write") and not q.get("solution"):
        if t == "write" or not q.get("options"):
            fail("%s: %s should carry a worked solution" % (at, t))

    bl = []
    walk_bilingual(q, at, bl)
    for m in bl:
        fail(m)


def check_banks(reg, data, pages, anchors, scope):
    banks, topics = data["banks"], data["topics"]
    for key in sorted(topics):
        href = topics[key].get("href")
        if href not in anchors:
            fail("topic %r points at #%s, which is on no page" % (key, href))

    all_html = "\n".join(pages.values())
    seen_ids = {}
    total = 0
    levels = {}
    types_by_chapter = {}
    used_topics = set()
    exam_sizes = {}

    for ch in reg["chapters"]:
        if not ch["ready"]:
            continue
        for p in ch["pages"]:
            if not p.get("bank"):
                continue
            if not scope.has_page(ch, p):
                continue
            name = p["bank"]
            bank = banks.get(name)
            if bank is None:
                fail("bank %r (page %s) is not defined" % (name, p["id"]))
                continue
            if ('data-bank="%s"' % name) not in all_html:
                fail("bank %r has no placeholder on any page" % name)
            qs = bank.get("questions") or []
            if not bank.get("title") or not bank.get("intro"):
                fail("bank %r needs a title and an intro" % name)
            if p["kind"] == "test":
                if len(qs) < LESSON_TEST_MIN:
                    fail("bank %r has %d questions; a lesson test needs at least %d" % (name, len(qs), LESSON_TEST_MIN))
            else:
                exam_sizes.setdefault(ch["key"], {})[name] = len(qs)
            btypes = {}
            for q in qs:
                total += 1
                qid = q.get("id") or "<no id>"
                at = "%s/%s" % (name, qid)
                if qid in seen_ids:
                    fail("duplicate question id %r (%s and %s)" % (qid, seen_ids[qid], name))
                seen_ids[qid] = name
                check_question(q, at, topics, btypes)
                levels[q.get("level")] = levels.get(q.get("level"), 0) + 1
                for tk in q.get("topics") or []:
                    used_topics.add(tk)
            if len(btypes) < MIN_TYPES_PER_TEST:
                fail("bank %r uses only %d question types (need at least %d): %s"
                     % (name, len(btypes), MIN_TYPES_PER_TEST, ", ".join(sorted(btypes))))
            tc = types_by_chapter.setdefault(ch["key"], {})
            for t, n in btypes.items():
                tc[t] = tc.get(t, 0) + n

    if scope.full or scope.chapters:
        for key, sizes in exam_sizes.items():
            if len(sizes) != EXAM_COUNT:
                fail("chapter %s: %d chapter tests found, need %d" % (key, len(sizes), EXAM_COUNT))
            if len(set(sizes.values())) != 1:
                fail("chapter %s: chapter tests are not the same size: %s" % (key, sizes))
            elif list(sizes.values())[0] != EXAM_SIZE:
                fail("chapter %s: chapter tests have %d questions; the course standard is %d"
                     % (key, list(sizes.values())[0], EXAM_SIZE))
        for key, tc in types_by_chapter.items():
            if not scope.full and key not in scope.chapters:
                continue
            for t in QUESTION_TYPES:
                if not tc.get(t):
                    fail("chapter %s never uses question type %r" % (key, t))
        # every topic of an in-scope chapter should be exercised
        for tk, tp in sorted(topics.items()):
            prefix = tk.split("-", 1)[0]
            if (scope.full or prefix in scope.chapters) and tk not in used_topics:
                fail("topic %r is defined but no question uses it" % tk)

    notes.append("%d questions in %d banks; levels: %s" % (
        total, len([b for b in banks]), ", ".join("%s=%d" % (l, levels.get(l, 0)) for l in ("easy", "medium", "hard"))))
    for key in sorted(types_by_chapter):
        notes.append("%s types: %s" % (key, ", ".join("%s=%d" % (t, types_by_chapter[key].get(t, 0))
                                                       for t in QUESTION_TYPES)))


def check_traces(reg, data, pages, scope):
    traces = data["traces"]
    all_html = "\n".join(pages.values())
    for key in sorted(traces):
        tr = traces[key]
        n = len(str(tr.get("code", "")).strip("\n").split("\n"))
        steps = tr.get("steps") or []
        if not steps:
            fail("trace %r has no steps" % key)
        for i, s in enumerate(steps):
            line = s.get("line")
            if not isinstance(line, int) or not (1 <= line <= n):
                fail("trace %r step %d: line %r outside 1..%d" % (key, i + 1, line, n))
        bl = []
        walk_bilingual(tr, "trace " + key, bl)
        for m in bl:
            fail(m)
    mounted = set(re.findall(r'data-trace-id="([^"]+)"', all_html))
    for key in sorted(mounted):
        if key not in traces:
            fail("content mounts trace %r, which is not defined" % key)
    if scope.full:
        for ch in reg["chapters"]:
            if not ch["ready"]:
                continue
            pass  # no execution traces in this track
    notes.append("%d traces, %d steps" % (len(traces), sum(len(t.get("steps") or []) for t in traces.values())))


def check_glossary(reg, data, anchors, scope):
    for ch in reg["chapters"]:
        if not ch["ready"] or not scope.has_chapter(ch):
            continue
        key = ch["key"]
        entries = (data["glossary"] or {}).get(key) or []
        if not scope.full and not entries:
            continue
        if len(entries) < MIN_GLOSSARY:
            fail("glossary %s has %d terms; at least %d are required" % (key, len(entries), MIN_GLOSSARY))
        ids = set(e["id"] for e in entries)
        for e in entries:
            at = "glossary %s/%s" % (key, e["id"])
            bl = []
            walk_bilingual(e, at, bl)
            for m in bl:
                fail(m)
            if not e.get("used"):
                fail("%s: never used - mark it in a lesson with <span class=\"term\" data-term=\"%s\"> or list `used`" % (at, e["id"]))
            for h in e.get("used") or []:
                if h not in anchors:
                    fail("%s: used-in heading #%s does not exist" % (at, h))
            for s in e.get("see") or []:
                if s not in ids:
                    fail("%s: see-also %r is not a term of this glossary" % (at, s))
        notes.append("glossary %s: %d terms" % (key, len(entries)))


def check_diagrams(reg, scope):
    for ch in reg["chapters"]:
        if not ch["ready"] or not scope.has_chapter(ch):
            continue
        used = set()
        for p in ch["pages"]:
            if p["kind"] in ("lesson", "lab", "chapter"):
                rel = ("src/content/%s/lesson-%02d.html" % (ch["key"], p["n"]) if p["kind"] == "lesson"
                       else "src/content/%s/%s.html" % (ch["key"], "lab" if p["kind"] == "lab" else "index"))
                if exists(rel):
                    used.update(re.findall(r'data-diagram="([^"]+)"', read(rel)))
        for d in sorted(used):
            rel = "src/diagrams/%s.svg" % d
            if not exists(rel):
                fail("diagram %s has no src/diagrams/%s.svg" % (d, d))
                continue
            svg = read(rel)
            for cls in ('class="en"', 'class="ar"'):
                if cls not in svg:
                    fail("diagram %s has no %s text" % (d, cls))
            if "viewBox=" not in svg:
                fail("diagram %s has no viewBox, so it cannot scale" % d)
            if "currentColor" not in svg and "var(--" not in svg:
                fail("diagram %s hard-codes its colours; it must follow the theme" % d)
        if scope.full or ch["key"] in scope.chapters:
            if len(used) < MIN_DIAGRAMS:
                fail("chapter %s uses %d diagrams; at least %d are required" % (ch["key"], len(used), MIN_DIAGRAMS))



def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--scope", default="", help="comma-separated page ids and/or chapter keys")
    args = ap.parse_args()

    reg = registry()
    tokens = [t.strip() for t in args.scope.split(",") if t.strip()]
    scope = Scope(reg, tokens)

    if scope.full:
        check_build()
    check_syntax()
    pages = built_pages(reg)
    check_links(pages)
    check_assets(pages)
    check_page_assets(pages)
    check_lessons(reg, scope)
    anchors = anchors_of()
    data = dump_data()
    if data:
        check_banks(reg, data, pages, anchors, scope)
        check_traces(reg, data, pages, scope)
        check_glossary(reg, data, anchors, scope)
    check_diagrams(reg, scope)

    for n in notes:
        print("  " + n)
    if problems:
        print("\n%d problem(s):" % len(problems))
        for p in problems[:200]:
            print("  - " + p)
        if len(problems) > 200:
            print("  ... and %d more" % (len(problems) - 200))
        return 1
    print("\nall checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
