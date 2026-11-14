#!/usr/bin/env python3
"""Print an authored lesson as plain text in ONE language - for question authors and reviewers.

    python tools/lesson_text.py t1-lesson-03            # English (default)
    python tools/lesson_text.py t1-lesson-03 --lang ar
    python tools/lesson_text.py t1-lesson-03 --no-code  # prose only

Headings are printed as  ## [heading-id] title  so a question's topic tags can be
chosen from them. Code blocks, outputs, evolve versions, exercises, quizzes and
AI-lens boxes are kept and labelled; the other language is dropped, which halves
what has to be read.
"""
import argparse
import html
import io
import os
import re
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Text(HTMLParser):
    def __init__(self, lang, code):
        HTMLParser.__init__(self, convert_charrefs=True)
        self.lang = lang
        self.code = code
        self.out = []
        self.skip = []          # stack of tags being skipped (other language)
        self.stack = []         # (tag, kind) for every open element
        self.in_pre = 0
        self.head = None

    def _other(self, attrs):
        cls = (dict(attrs).get("class") or "").split()
        return ("ar" if self.lang == "en" else "en") in cls

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = (a.get("class") or "").split()
        if tag in ("br", "img", "hr", "input", "meta", "link"):
            if tag == "br" and not self.skip:
                self.out.append("\n")
            return
        skipping = bool(self.skip)
        if not skipping and self._other(attrs):
            self.skip.append(tag)
            self.stack.append((tag, "skip"))
            return
        if skipping:
            self.skip.append(tag)
            self.stack.append((tag, "skip"))
            return
        kind = None
        if tag in ("h1", "h2", "h3", "h4"):
            kind = "h"
            self.head = (tag, a.get("id"))
            self.out.append("\n\n%s %s" % ("#" * int(tag[1]), "[%s] " % a["id"] if a.get("id") else ""))
        elif tag == "pre":
            kind = "pre"
            self.in_pre += 1
            lang = a.get("data-lang") or "python"
            if self.code:
                self.out.append("\n```%s%s\n" % (lang, " (bad)" if "bad" in cls else " (good)" if "good" in cls else ""))
        elif "output" in cls:
            kind = "output"
            self.out.append("\n[output]\n")
        elif tag == "div" and ("evolve" in cls):
            self.out.append("\n\n=== EVOLVE BLOCK ===")
        elif tag == "div" and "ver" in cls:
            self.out.append("\n--- VERSION: %s ---" % (a.get("data-title-" + self.lang) or ""))
        elif tag == "div" and "ai-lens" in cls:
            self.out.append("\n[AI LENS]")
        elif tag == "div" and "thread" in cls:
            self.out.append("\n[THREAD]")
        elif tag == "div" and "quiz" in cls:
            self.out.append("\n[INLINE QUIZ]")
        elif tag == "div" and "warn" in cls:
            self.out.append("\n[WARNING]")
        elif tag == "div" and "tip" in cls:
            self.out.append("\n[TIP]")
        elif tag == "div" and "problem" in cls:
            self.out.append("\n[PROBLEM]")
        elif (tag in ("section", "div")) and "exercise" in cls:
            self.out.append("\n[EXERCISE]")
        elif tag == "details" and "solution" in cls:
            self.out.append("\n[SOLUTION]")
        elif tag == "figure" and "diagram" in cls:
            self.out.append("\n[DIAGRAM %s]" % a.get("data-diagram", ""))
        elif tag == "div" and a.get("data-trace-id"):
            self.out.append("\n[TRACE %s]" % a["data-trace-id"])
        elif tag in ("p", "li", "tr", "figcaption", "summary"):
            self.out.append("\n" + ("- " if tag == "li" else ""))
        elif tag in ("td", "th"):
            self.out.append(" | ")
        self.stack.append((tag, kind))

    def handle_endtag(self, tag):
        if not self.stack:
            return
        # pop to the matching tag
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                popped = self.stack[i:]
                del self.stack[i:]
                break
        else:
            return
        for t, kind in popped:
            if kind == "skip":
                if self.skip:
                    self.skip.pop()
            elif kind == "pre":
                self.in_pre -= 1
                if self.code:
                    self.out.append("\n```\n")
            elif kind == "h":
                self.head = None

    def handle_data(self, data):
        if self.skip:
            return
        if self.in_pre:
            if self.code:
                self.out.append(data)
            return
        self.out.append(re.sub(r"\s+", " ", data))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("page")
    ap.add_argument("--lang", default="en", choices=["en", "ar"])
    ap.add_argument("--no-code", action="store_true")
    args = ap.parse_args()

    m = re.match(r"^([a-z]+\d+)-lesson-(\d+)$", args.page)
    if not m:
        raise SystemExit("page must look like t1-lesson-03")
    rel = os.path.join(ROOT, "src", "content", m.group(1), "lesson-%s.html" % m.group(2))
    src = io.open(rel, encoding="utf-8").read()
    p = Text(args.lang, not args.no_code)
    p.feed(src)
    text = "".join(p.out)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    sys.stdout.reconfigure(encoding="utf-8")
    print(text.strip())


if __name__ == "__main__":
    main()
