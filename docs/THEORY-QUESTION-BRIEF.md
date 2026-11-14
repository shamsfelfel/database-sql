# Brief for a question author (theory track)

You write **one question bank**: a lesson test, or one of the three chapter tests, for
the database-design track of this course. Read
[THEORY-CONTENT-PLAN.md](THEORY-CONTENT-PLAN.md) §4 and
[THEORY-AUTHORING.md](THEORY-AUTHORING.md) §4 and §5, then the lesson(s) your bank
covers **in full** — you are testing what they teach, in the way they teach it.

ROOT is the repository root; absolute paths; `python -I` for scripts; do not run git;
touch only your own files.

## Deliverable

`assets/theory/data/questions/<bank>.js` — a lesson test has **at least 20** questions
(target 24); each chapter test has **exactly 24**. Optionally
`assets/theory/data/topics/<bank>-extra.js` if you need topic keys the lesson authors
did not define (keys `<chapterkey>-<slug>`, each `href` an existing heading id; never
redefine an existing key).

```js
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-01"] = {
  title: { en: "Test 1 — One Table Is Not Enough", ar: "اختبار 1 — جدول واحد لا يكفي" },
  intro: { en: "…what it covers, how long, that hint/answer/explanation are hidden…", ar: "…" },
  questions: [ { id: "t2l1q01", type: "tf", level: "easy", topics: ["t2-flat-file"],
                 q: {…}, truth: true, hint: {…}, explain: {…} }, … ]
};
```

Field reference per type: THEORY-AUTHORING §4. Ids: lesson tests `t2l1q01`…, chapter
tests `t2ax01` / `t2bx01` / `t2cx01`…. ES5 syntax, valid under `node --check`.

## Composition

Difficulty ≈ 8 easy / 10 medium / 6 hard. **At least 7 different `type`s per bank**,
never more than 5 of any one. Across a chapter's banks, all 14 types must appear.

* **Lesson tests** cover that lesson only, every concept section and **every evolve
  block** — which version is better and why, which defect version N fixes, what version
  N still leaves open, what version N−1 hides. Tag every question with the lesson's
  topic keys so every topic is exercised by at least one question.
* **Chapter test A — Core**: easy/medium, samples every lesson (about four questions
  each), the ideas every student must own.
  **B — Applied**: give a business scenario and make them *do* it — pick the right
  model, name the optionality and cardinality, write the ERDish sentence, write the
  `CREATE TABLE`, choose where an attribute belongs.
  **C — Advanced**: the hard corners that cross lessons — a hierarchy that is not
  exhaustive, a subtype that is not mutually exclusive, a barred UID, a redundant
  relationship, a transferability rule that contradicts the business, an attribute
  hidden inside a many-to-many.
  The three together cover the chapter; vary the angle so A, B and C never ask the same
  thing twice.

## Quality rules

1. **Test judgement, not vocabulary.** Prefer "which model is right for this business
   and why / what breaks if you choose the other one / fix this diagram" over "define
   cardinality". A student who read carefully should pass; one who memorised the
   Terminology slide should not.
2. **Every distractor is wrong for a reason the `explain` names**, and is tempting
   because of a real misconception. The richest sources in this subject: confusing
   optionality with cardinality; reading a relationship from only one end; putting a
   relationship's attribute into one of the entities; making a subtype that is really
   an attribute value; forgetting the OTHER subtype; assuming every 1:1 should be two
   entities; thinking a many-to-many can be implemented directly.
   No joke options, no "all of the above". Spread the correct option across positions.
   **Name a distractor by its content, never by its position** — `assess.js` shuffles
   the options of `mcq`, `multi` and `compare` and renders them unlettered, so "the
   third option" points at something the student cannot see.
3. **`hint` nudges** (point at the rule to recall), never states the answer.
4. **`explain` teaches** (2–5 sentences): why the right answer is right, why the most
   tempting wrong one is tempting, the rule to carry away. Same content in both
   languages.
5. **Diagrams cannot be questions on their own.** The question engine renders `code`,
   not SVG. So:
   * put the model in `code` as **ERD text** — one entity or relationship per line, so
     an `error` question can name a line:
     ```
     1  PAYMENT  # id  * paid on  * amount
     2  CASH     (subtype of PAYMENT)
     3  CHEQUE   (subtype of PAYMENT)  * bank, * cheque no
     4  Each PAYMENT must be made by one and only one CUSTOMER.
     ```
   * or put the **ERDish sentence** in `code` with blanks:
     `Each EMPLOYEE ____1____ work in ____2____ DEPARTMENT.`
   * or quote the business scenario in `q` and ask what the model must be.
6. **SQL answers must be run.** Any `output` question, and any `write` question's
   `solution.code`, must have been executed against the lab data (alasql, in the widget
   or in node). Do not reason about rows.
7. **One consistent domain per chapter** — the same entities, attributes and example
   rows the lessons used. Do not invent a new cast.
8. **Arabic is written, not translated**, with the English term in parentheses where
   the lesson did that. Entity names, ERDish and SQL stay LTR inside `<code>`.
9. **Right-sized**: answerable in ≤ 90 seconds (hard ones ≤ 3 minutes). ERD text
   listings ≤ 20 lines.
10. `write` questions: `checks` must be tolerant (`["']` for either quote style,
    `\s*` for optional spaces, any table alias unless the question fixes it) and every
    check must be satisfied by your own `solution.code` once whitespace is collapsed —
    the verifier proves it. Three to five checks capturing the essential parts, plus
    `forbid` for the classic wrong shortcut where it teaches something (for a
    many-to-many: forbid a comma-separated list in one column).
11. `contrast`: 5–7 rows, for the pairs the lessons distinguish — optionality vs
    cardinality, entity vs instance, attribute vs entity, conceptual vs physical model,
    supertype vs subtype, transferable vs non-transferable, 1:M vs M:M. Rows must
    discriminate; avoid rows that are "both".
12. `order` / `ordercode`: use for sequences that have a real dependency — the stages of
    the development process, the steps of resolving a many-to-many, the order a
    `CREATE TABLE` with a foreign key must run in.

## Procedure

1. Read the lesson(s) completely. List their concept sections, evolve blocks, the
   misconceptions they warn about, and their `.sql-lens` points.
2. Draft the plan as a table of 24: id, type, level, which concept or evolve block,
   topic keys. Check it against the composition rules *before* writing any prose.
3. Write the bank in one go. `node --check` it, then `python build-theory.py` and
   `python tools/verify_chapter.py --scope <page id>` (e.g. `t2-test-01`,
   `t2-exam-a`), and fix everything it reports about your bank.
4. Run `node tools/check_banks.mjs <bank>` if it is present: it opens the real test
   page, answers every question correctly from its own data, and expects "Correct"
   each time. A failure means a data-shape mistake — wrong answer index, an `accept`
   list that misses your own solution, a regex that does not match it.
5. Final report (≤ 15 lines): the plan table, counts per type and level, topic keys
   used, anything you could not verify, and files outside your ownership that need a
   change.
