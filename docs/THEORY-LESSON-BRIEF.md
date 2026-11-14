# Brief for a lesson author (theory track)

You are writing **one lesson** of the bilingual (English + Arabic) database-design track
of this course, plus the material that travels with it. Read
[THEORY-CONTENT-PLAN.md](THEORY-CONTENT-PLAN.md) and
[THEORY-AUTHORING.md](THEORY-AUTHORING.md) first — they are the contract. This file says
*how to do the job well*.

ROOT is the repository root. Use absolute paths and `python -I` for scripts. The SQL
course in the same repository (`lessons/chapter-3-lesson-1.html` and friends) is a
read-only reference for voice and for what the student already knows if they took it.

## What you deliver — your own files only

1. `src/content/<key>/lesson-NN.html` — the lesson
   (one `<section class="page" id="<key>-lesson-NN">…</section>`).
2. `src/diagrams/<key>-<slug>.svg` — **3–6 ERDs**, authored SVG, both languages inside
   one file (THEORY-AUTHORING §6). This is a diagramming subject: the diagram is the
   lesson, not decoration.
3. `assets/theory/data/topics/<key>-lN.js` — ≥ 12 topic tags, each `href` a heading id
   in your lesson.
4. `src/glossary/<key>/lesson-NN.json` — 8–12 terms this lesson *introduces*, bilingual.

Do **not** write the lesson's test questions (a separate author does that from your
finished lesson). Do not touch `build-theory.py`, `assets/theory/js/*`,
`assets/theory/css/*`, `src/registry.json`, another lesson, anything belonging to the
SQL course, or `docs/*`. Do not run git. Write each file in one go, so it is valid at
every moment — other authors run `python build-theory.py` while you work.

## What "good" means here

**Short explanations, constant activity.** This is the rule that outranks the others.

* **Two short paragraphs, then something happens.** No paragraph over about 60 words.
  A definition is one sentence, in its own `.note` or in bold, never buried mid-paragraph.
* **Every `h2` concept section ends with an activity** — an inline `.quiz`, an
  `.exercise`, a live SQL box or an `.evolve` block. The verifier fails a section that
  has none. Across the lesson: **≥ 6 inline checks and ≥ 4 exercises**.
* A student should never be more than about **eight minutes** from doing something.

**Teach by evolving a model.** Each lesson has **≥ 2 `.evolve` blocks**. A version is a
diagram (plus a sentence or a small table), and each version fixes a *named* defect of
the previous one: "version 1 repeats the author's name in every row — update anomaly";
"version 2 splits them, but now nothing says a book must have an author". The last
version is the recommended model. The tests ask which version is better and why, so make
the differences crisp and checkable.

**Start from the pain.** Every concept opens with a `.problem` box: a concrete thing the
business cannot do, or a wrong answer the current model gives. Never open with a
definition.

**"In the database" in every concept** (`.sql-lens`): what this design decision becomes
in a real table — which column, which key, which constraint, which query gets easy or
impossible. Be specific (`authors.id` becomes `books.author_id`, declared `NOT NULL`
because the line is solid), not general. This is the box that makes the theory track
worth reading next to the SQL one.

**Diagrams carry the argument.** Draw the Oracle conventions exactly
(THEORY-AUTHORING §6) — a wrong crow's foot in a lesson about crow's feet is a defect,
not a typo. Caption every figure with what the reader should notice.

**Threads to the SQL track.** Where this idea meets the SQL course, say so in a
`.thread` box with a real link (`href="@/chapters/chapter-3.html"`), name what the SQL
chapter does, and name the gap the design side closes. T2 → chapters 1–2, T3 →
chapter 3, T4 → chapter 7, T5 → chapters 3 and 5.

**Definitions before use.** Every term of art is defined in the running text before it
is used, marked `<span class="term" data-term="id">…</span>` once per section where it
matters, and given a glossary entry.

**Domain consistency.** Use the chapter's domain from the content plan (T2 the school
library, T3 the HR system and the restaurant, T4 payments, T5 students and subjects).
Keep the same entity names, the same attributes and the same example rows across the
chapter, so the reader is learning the subject and not a new cast each lesson.

**Arabic is written, not translated.** Natural technical Arabic, with the English term
in parentheses at first use in each lesson («الكيان (Entity)»). Entity names, attribute
names, SQL and ERDish stay LTR inside `<code>`. Every `.en` has an `.ar` twin carrying
exactly the same content — not a shorter one.

**Verify everything you print.** Any SQL output you quote must come from actually
running the query in the widget or with `alasql` in node. Do not reason about output.
Oracle conventions: when you are unsure, follow the source decks in the content plan,
not memory.

**Size.** Roughly 5–7 numbered concept sections, 20–60 KB of HTML. Shorter than the
sibling course's lessons on purpose — the budget goes to activities and diagrams, not
prose.

## Procedure

1. Read the contract docs, your lesson's row in the content plan, and the source
   material it names.
2. Sketch the lesson: concept sections, which evolve block sits where, which diagram
   each concept needs, where the activities fall. Check the cadence rule before writing
   a word of prose.
3. Draw the diagrams first. They are the hard part and they shape the prose.
4. Write the lesson file, then the topics, then the glossary fragment. Keep heading ids
   sequential (`<key>lN-h1…`, `<key>lN-s1…`).
5. `python build-theory.py` (warnings about *other* authors' missing files are
   expected; yours must be clean), then
   `python tools/verify_chapter.py --scope <key>-lesson-NN` and fix everything it
   reports for your lesson. "Question bank does not exist" for your own test is
   expected — the next author writes it — but your lesson must link to
   `#<key>-test-NN`.
6. Look at the page: `python scripts/dev-server.py 8099`, then open
   `lessons/<key>-lesson-NN.html` and read it in English and Arabic, light and dark.
   Check that every diagram is legible in both themes and that Arabic text inside the
   SVGs is right-to-left.
7. Final report (≤ 20 lines): files written with sizes; counts (concept sections,
   evolve blocks, inline checks, exercises, diagrams, glossary terms, topics); the
   topic keys with the heading each points to; anything you could not verify; any file
   outside your ownership that needs a change.
