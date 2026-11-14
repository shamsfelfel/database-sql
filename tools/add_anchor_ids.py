#!/usr/bin/env python3
"""Give every concept heading in the chapter content a stable id.

Test questions label themselves with the topics they cover and link to them,
so the headings they point at need ids that do not move when prose is edited.
Scheme, per page: h2 -> <short>-h<n>, h3 -> <short>-s<n>, numbered in document
order ("lesson-03" -> "l3-h1", "l3-s4"). Idempotent: a heading that already
carries an id is left exactly as it is.
"""
import io
import re
import sys

PATH = "src/content/chapter-01.html"


def short(page_id):
    m = re.match(r"lesson-0*(\d+)$", page_id)
    return "l" + m.group(1) if m else page_id


def main():
    text = io.open(PATH, encoding="utf-8").read()
    chunks = re.split(r'(?=<section class="page" id=")', text)
    added = 0
    out = []

    for chunk in chunks:
        m = re.match(r'<section class="page" id="([^"]+)"', chunk)
        if not m:
            out.append(chunk)
            continue
        prefix = short(m.group(1))
        counts = {"h2": 0, "h3": 0}

        def tag(match):
            nonlocal added
            level, attrs = match.group(1), match.group(2)
            counts[level] += 1
            if "id=" in attrs:
                return match.group(0)
            added += 1
            letter = "h" if level == "h2" else "s"
            return '<%s id="%s-%s%d"%s>' % (level, prefix, letter, counts[level], attrs)

        out.append(re.sub(r"<(h2|h3)((?:\s[^>]*)?)>", tag, chunk))

    io.open(PATH, "w", encoding="utf-8", newline="\n").write("".join(out))
    print("added %d heading ids" % added)
    return 0


if __name__ == "__main__":
    sys.exit(main())
