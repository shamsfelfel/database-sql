#!/usr/bin/env python3
"""Build the theory track one page at a time, unattended.

Walks the registry in reading order. For each page that has no authored source
yet it writes a brief, hands it to a headless Claude Code run inside this
repository, then builds, verifies, commits and pushes. A page that fails
verification is retried once with the failure text attached; if it fails again
it is recorded as BLOCKED and the run moves on, so one bad page never stops the
other sixty-nine.

    python3 tools/theory_runner.py                 # build everything that is left
    python3 tools/theory_runner.py --only t2       # one chapter
    python3 tools/theory_runner.py --units 3       # three units, then stop
    python3 tools/theory_runner.py --dry-run       # print the plan and the first brief
    python3 tools/theory_runner.py --status        # what is done, left and blocked

State lives in .build/state.json, the log in .build/run.log and a heartbeat in
.build/heartbeat (which the watchdog reads). Both are git-ignored.
"""
import argparse
import io
import json
import os
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, ".build")
STATE = os.path.join(BUILD, "state.json")
LOG = os.path.join(BUILD, "run.log")
HEARTBEAT = os.path.join(BUILD, "heartbeat")

CLAUDE = os.environ.get("CLAUDE_BIN", os.path.expanduser("~/.local/bin/claude"))
MODEL = os.environ.get("THEORY_MODEL", "opus")
# A lesson with its diagrams is a long job; a question bank is shorter.
TIMEOUT_LESSON = int(os.environ.get("THEORY_TIMEOUT_LESSON", 60 * 60))
TIMEOUT_OTHER = int(os.environ.get("THEORY_TIMEOUT_OTHER", 40 * 60))
MAX_ATTEMPTS = 2


# --------------------------------------------------------------------------
# small helpers
# --------------------------------------------------------------------------

def log(msg):
    line = "%s  %s" % (time.strftime("%Y-%m-%d %H:%M:%S"), msg)
    print(line, flush=True)
    os.makedirs(BUILD, exist_ok=True)
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(line + "\n")


def beat(what):
    os.makedirs(BUILD, exist_ok=True)
    io.open(HEARTBEAT, "w", encoding="utf-8").write("%d %s\n" % (int(time.time()), what))


def run(cmd, timeout=None, cwd=ROOT):
    return subprocess.run(cmd, cwd=cwd, capture_output=True, text=True,
                          encoding="utf-8", errors="replace", timeout=timeout)


def read_state():
    if os.path.exists(STATE):
        return json.loads(io.open(STATE, encoding="utf-8").read())
    return {"done": [], "blocked": {}, "attempts": {}}


def write_state(st):
    os.makedirs(BUILD, exist_ok=True)
    io.open(STATE, "w", encoding="utf-8").write(json.dumps(st, indent=1, ensure_ascii=False) + "\n")


def registry():
    return json.loads(io.open(os.path.join(ROOT, "src", "registry.json"), encoding="utf-8").read())


# --------------------------------------------------------------------------
# the work list
# --------------------------------------------------------------------------

def units(reg, only=None):
    """Every page to author, in reading order, as (unit id, kind, chapter, page)."""
    out = []
    for ch in reg["chapters"]:
        if only and ch["key"] != only:
            continue
        for p in ch["pages"]:
            if p["kind"] in ("chapter", "lesson", "lab"):
                out.append((p["id"], p["kind"], ch, p))
            elif p["kind"] in ("test", "exam"):
                out.append((p["id"], "bank", ch, p))
            # the glossary page is synthesised from the lessons' own fragments
    return out


def already_written(kind, ch, page):
    key = ch["key"]
    if kind == "chapter":
        rel = "src/content/%s/index.html" % key
    elif kind == "lesson":
        rel = "src/content/%s/lesson-%02d.html" % (key, page["n"])
    elif kind == "lab":
        rel = "src/content/%s/lab.html" % key
    else:
        rel = "assets/theory/data/questions/%s.js" % page["bank"]
    return os.path.exists(os.path.join(ROOT, rel)), rel


# --------------------------------------------------------------------------
# the brief
# --------------------------------------------------------------------------

PREAMBLE = """You are authoring one page of the database-design (theory) track of the course in
this repository. Work only inside this repository. Do not run git -- the build
runner commits for you.

Read these first, in this order, and treat them as the contract:
  docs/THEORY-CONTENT-PLAN.md      what every chapter must contain
  docs/THEORY-AUTHORING.md         the mechanics, components and ERD conventions
  {brief}

Then read, in full:
  src/source/{source}      the lecturer's slides for your chapter, transcribed
and skim the finished pages of the chapters before yours (src/content/) so the
voice, the domain and the entity names stay the same across the track. The
transcript is the authority for what your chapter teaches: do not add topics it
does not cover, and do not contradict it from memory.

Two rules outrank everything else, because they are why this track exists:
  * short explanations -- two paragraphs at most before something happens, no
    paragraph over about sixty words, definitions set apart in one sentence;
  * no concept section may end without something to do -- an inline check, an
    exercise, a live SQL box or an evolve block. The verifier fails a section
    that has none.

When you are done, run:
    python3 build-theory.py
    python3 tools/verify_chapter.py --scope {page_id}
and fix everything it reports about your own files. Warnings about pages other
authors have not written yet are expected and are not yours to fix.
"""

SOURCE = {
    "t2": "ch2-relational-and-conceptual.md",
    "t3": "ch3-identifying-relationships.md",
    "t4": "ch4-supertypes-and-subtypes.md",
    "t5": "ch5-relationship-types.md",
}

TASK = {
    "chapter": """YOUR TASK: write the chapter home for chapter {num} ({key}) --
src/content/{key}/index.html, one <section class="page" id="{key}-chapter">.

It is short: what this chapter is about, why it matters before any SQL is
written, what the reader should already know (with links to earlier chapters),
the domain the chapter uses, and how the chapter is put together. End with
<!--GEN:index--> on its own line; the generator replaces it with the lesson
cards. Both languages, English then Arabic, at full parity.""",

    "lesson": """YOUR TASK: write lesson {n} of chapter {num} ({key}).

Its title is "{title_en}" / "{title_ar}".
Its blurb in the registry is: {blurb_en}
The content plan's row for it says it must land: {plan}

Deliver, and nothing else:
  src/content/{key}/lesson-{n:02d}.html
  src/diagrams/{key}-<slug>.svg            3-6 ERDs, both languages inside one file
  assets/theory/data/topics/{key}-l{n}.js  at least 12 topic tags
  src/glossary/{key}/lesson-{n:02d}.json   8-12 terms this lesson introduces

Do not write this lesson's test questions; another author does that from your
finished lesson. Your lesson must link to #{key}-test-{n:02d}.""",

    "lab": """YOUR TASK: write the SQL lab for chapter {num} ({key}) --
src/content/{key}/lab.html, one <section class="page" id="{key}-lab">.

The content plan says this lab must do: {plan}

It turns the chapter's finished ERD into real tables, in this repository's own
alasql widget (docs/THEORY-AUTHORING.md §7, and the "Widget authoring
reference" section of README.md for the config format). Build it as a sequence
of steps: show the diagram, state the rule the diagram carries, then have the
reader write or run the SQL that enforces it, graded where it can be graded.
Finish with a .thread box linking to the SQL chapter that meets the same idea
from the other side.""",

    "bank": """YOUR TASK: write the question bank {bank} for chapter {num} ({key}).

Deliver assets/theory/data/questions/{bank}.js and nothing else.

Read the lesson(s) it covers in full first -- they are in src/content/{key}/.
{scope}""",
}


def brief_for(kind, ch, page, reg, extra=""):
    key, num = ch["key"], ch["num"]
    brief_doc = ("docs/THEORY-QUESTION-BRIEF.md" if kind == "bank"
                 else "docs/THEORY-LESSON-BRIEF.md")
    head = PREAMBLE.format(brief=brief_doc, page_id=page["id"], source=SOURCE[key])

    if kind == "lesson":
        body = TASK["lesson"].format(
            key=key, num=num, n=page["n"],
            title_en=page["title"]["en"], title_ar=page["title"]["ar"],
            blurb_en=page["blurb"]["en"],
            plan="see the row for lesson %d of %s in docs/THEORY-CONTENT-PLAN.md §2" % (page["n"], key))
    elif kind == "bank":
        if page["kind"] == "test":
            scope = ("It is the test for lesson %d only: at least 20 questions (target 24), "
                     "covering every concept section and every evolve block of that lesson."
                     % page["of"])
        else:
            letter = page["bank"].rsplit("-", 1)[1]
            scope = {"a": "It is chapter test A -- Core: exactly 24 questions, easy and medium, "
                          "sampling every lesson of the chapter.",
                     "b": "It is chapter test B -- Applied: exactly 24 questions that make the "
                          "student do it -- read a scenario, pick or build the right model, write "
                          "the ERDish sentence, write the SQL.",
                     "c": "It is chapter test C -- Advanced: exactly 24 questions on the hard "
                          "corners that cross lesson boundaries."}[letter]
            scope += (" Do not repeat what chapter tests A, B or C already ask -- read any of "
                      "them that exist in assets/theory/data/questions/ before you start.")
        body = TASK["bank"].format(key=key, num=num, bank=page["bank"], scope=scope)
    else:
        body = TASK[kind].format(
            key=key, num=num,
            plan="see §3 of docs/THEORY-CONTENT-PLAN.md" if kind == "lab" else "")

    out = head + "\n" + body
    if extra:
        out += ("\n\nA previous attempt at this page failed verification. Fix these, and "
                "check the whole page again rather than only these lines:\n\n" + extra)
    return out


# --------------------------------------------------------------------------
# one unit
# --------------------------------------------------------------------------

def author(kind, ch, page, reg, extra=""):
    prompt = brief_for(kind, ch, page, reg, extra)
    timeout = TIMEOUT_LESSON if kind in ("lesson", "lab") else TIMEOUT_OTHER
    cmd = [CLAUDE, "-p", prompt, "--model", MODEL,
           "--output-format", "text", "--dangerously-skip-permissions"]
    beat("authoring %s" % page["id"])
    t0 = time.time()
    try:
        r = run(cmd, timeout=timeout)
    except subprocess.TimeoutExpired:
        log("  TIMEOUT after %d min" % (timeout // 60))
        return False, "the author timed out"
    log("  author finished in %d min (exit %d)" % ((time.time() - t0) // 60, r.returncode))
    if r.returncode != 0:
        return False, (r.stderr or r.stdout or "").strip()[-2000:]
    return True, (r.stdout or "").strip()[-1500:]


def verify(page_id):
    beat("verifying %s" % page_id)
    b = run([sys.executable, "build-theory.py"], timeout=600)
    if b.returncode != 0:
        return False, "build-theory.py failed:\n" + (b.stderr or b.stdout)[-2000:]
    v = run([sys.executable, "tools/verify_chapter.py", "--scope", page_id], timeout=900)
    if v.returncode != 0:
        out = (v.stdout or "") + (v.stderr or "")
        # Problems about pages nobody has written yet are not this author's.
        keep = [l for l in out.splitlines()
                if "has no authored content" not in l
                and "does not exist" not in l
                and "no authored lab" not in l
                and "no glossary entries" not in l]
        return False, "\n".join(keep)[-3000:]
    return True, ""


def commit(page_id, title):
    beat("committing %s" % page_id)
    run([sys.executable, "scripts/build-sw.py"], timeout=300)
    run(["git", "add", "-A"], timeout=120)
    st = run(["git", "status", "--porcelain"], timeout=120)
    if not (st.stdout or "").strip():
        log("  NOTHING TO COMMIT for %s -- the page produced no change" % page_id)
        return False
    msg = "%s\n\nWritten by the unattended theory-track build runner\n(tools/theory_runner.py), one page per commit.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n" % title
    c = run(["git", "commit", "-m", msg], timeout=180)
    if c.returncode != 0:
        log("  commit failed: %s" % (c.stderr or c.stdout)[-500:])
        return False
    p = run(["git", "push", "origin", "HEAD"], timeout=300)
    if p.returncode != 0:
        log("  PUSH FAILED (commit is safe locally): %s" % (p.stderr or p.stdout).strip()[-300:])
    else:
        log("  pushed")
    return True


def commit_title(kind, ch, page):
    key = ch["key"]
    t = page["title"]["en"]
    if kind == "lesson":
        return "%s lesson %d: %s" % (key.upper(), page["n"], t)
    if kind == "bank":
        return "%s: questions for %s" % (key.upper(), page["id"])
    if kind == "lab":
        return "%s: the SQL lab" % key.upper()
    return "%s: the chapter home" % key.upper()


# --------------------------------------------------------------------------
# the run
# --------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="one chapter key, e.g. t2")
    ap.add_argument("--units", type=int, default=0, help="stop after this many units")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--status", action="store_true")
    ap.add_argument("--retry-blocked", action="store_true",
                    help="give every BLOCKED page one more go")
    args = ap.parse_args()

    reg = registry()
    st = read_state()
    work = units(reg, args.only)

    if args.status:
        done = blocked = todo = 0
        for uid, kind, ch, page in work:
            written, rel = already_written(kind, ch, page)
            if uid in st["blocked"]:
                blocked += 1
                print("BLOCKED  %-16s %s" % (uid, st["blocked"][uid][:90].replace("\n", " ")))
            elif written:
                done += 1
            else:
                todo += 1
        print("\n%d done, %d blocked, %d to go (of %d)" % (done, blocked, todo, len(work)))
        return 0

    if args.retry_blocked:
        st["blocked"] = {}
        write_state(st)

    built = 0
    for uid, kind, ch, page in work:
        written, rel = already_written(kind, ch, page)
        if written:
            continue
        if uid in st["blocked"]:
            continue

        log("=== %s (%s) -> %s" % (uid, kind, rel))
        if args.dry_run:
            print("\n" + "-" * 70)
            print(brief_for(kind, ch, page, reg))
            print("-" * 70)
            return 0

        extra = ""
        ok = False
        for attempt in range(1, MAX_ATTEMPTS + 1):
            log("  attempt %d/%d" % (attempt, MAX_ATTEMPTS))
            good, out = author(kind, ch, page, reg, extra)
            if not good:
                extra = out
                continue
            # The author can exit cleanly having written nothing, and verify()
            # filters out the very lines that would have caught it (those lines
            # are normally about other authors' unwritten pages). Check here.
            if not already_written(kind, ch, page)[0]:
                log("  the author wrote no %s" % rel)
                extra = ("You exited without writing %s, which is the one file this "
                         "task has to produce. Write it." % rel)
                continue
            good, problems = verify(page["id"])
            if good:
                ok = True
                break
            log("  verification failed:\n    " + problems.replace("\n", "\n    ")[:1200])
            extra = problems

        if ok and commit(uid, commit_title(kind, ch, page)):
            st["done"].append(uid)
            log("  DONE %s" % uid)
        else:
            st["blocked"][uid] = extra[:1500]
            log("  BLOCKED %s -- moving on" % uid)
        write_state(st)

        built += 1
        if args.units and built >= args.units:
            log("stopping after %d unit(s) as asked" % built)
            break

    beat("idle")
    log("run finished: %d unit(s) attempted, %d blocked in total" % (built, len(st["blocked"])))
    return 0


if __name__ == "__main__":
    sys.exit(main())
