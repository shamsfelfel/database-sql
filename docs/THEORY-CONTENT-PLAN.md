# Theory track — content plan (Chapters 2–5)

**Course:** *Introduction to Database* — Computer Engineering Dept., UCAS (Eng. Noor A. Nashwan)
**Source material:** Oracle Academy *Database Foundations* (DFo) and *Database Design* (DDS),
as delivered in `db ch2.pptx`, `db ch3.pptx`, `db ch4.pptx`, `db ch5.pdf`.
**Lives in:** this repository (SQL Lab), as a **second track** beside the existing SQL chapters.

---

## 0. Why a track and not chapters 8–11

This repository already teaches **SQL** in chapters 1–7 (and reserves 8–9). The new
material is **database design** — the relational model, conceptual/logical/physical
models, entities, attributes, UIDs, ERDs, relationships, subtypes, and resolving
many-to-many. It is the *other half* of the same university course, and the lecturer
numbers it 2, 3, 4, 5.

So the site gets two tracks, exactly as the sibling *Data Analysis & Implementation*
course does:

| Track | What it is | Chapters |
|---|---|---|
| **Practical — SQL** | the existing course: writing SQL against a live in-browser database | 1–7 (8–9 reserved) |
| **Theory — Database Design** | the new material: how a database is designed before any SQL is written | **2–5** (1 reserved for the *Introduction* deck) |

Chapter **T1** is deliberately left empty: the lecturer's Chapter 1 (*Introduction*) deck
has not been supplied. The registry marks it `planned`, the course home shows it greyed,
and nothing links to it.

File names never collide: theory pages are `t2…t5`, SQL pages stay `chapter-N`.

---

## 1. The teaching contract for this track

Inherited from the sibling course's `SPEC.md`, with the two changes you asked for.

1. **Less text per idea.** A concept section is **two short paragraphs at most** before
   something happens. No paragraph over ~60 words. Definitions are one sentence, set
   apart, not buried in prose.
2. **Never more than ~8 minutes without an activity.** Every `h2` concept section ends
   with at least one of: an inline `quiz` check, a `classify` sorter, a *read-the-ERD*
   question, an exercise with a hidden worked solution, or a lab step. A lesson of five
   concept sections therefore carries **5–8 activities**, and no two consecutive screens
   are prose.
3. **English and Arabic at full parity**, RTL for Arabic, diagrams authored twice.
   The lecturer's own Arabic glosses in the decks (تفسير، مفرد أو جمع، علامات، لهجة،
   محتمل، تزلج) are kept as the Arabic term where they fit.
4. **Every term defined before use**, and collected into the chapter glossary.
5. **Diagrams are the primary teaching device here** (this is a *diagramming* subject):
   ERDs are drawn in the real Oracle convention — softbox, `#` `*` `o`, solid/dashed
   line, single toe / crow's foot, diamond, bar — not as generic boxes-and-arrows.
6. **Every chapter ends in SQL.** See §3.

---

## 2. The four chapters

### T2 — The Relational Model and the Conceptual Model

*Sources: DFo 2-1 "Relational Databases", DFo 1-3 (development process), DFo 2-2
"Conceptual and Physical Data Models", DDS 2-2 "Entities, Instances, Attributes and
Identifiers", DDS 2-3 "Entity Relationship Modeling and ERDs".*

**Domain carried through the chapter:** a small **school library** (the Oracle case:
MEMBER, BOOK, AUTHOR, PUBLISHER, BOOK TRANSACTION).

| # | Lesson | The idea it lands |
|---|---|---|
| 1 | **One Table Is Not Enough** | flat file = all data in one table; its real advantages; redundancy → inconsistency, and the update/insert/delete anomalies it causes (`AD0003 Oliver Goldsmith` stored twice) |
| 2 | **The Relational Answer** | rows, columns, fields; primary key, foreign key, unique key; the seven rules for relational tables; why "order of rows and columns is insignificant" matters |
| 3 | **Three Models, One Database** | strategy → conceptual → logical → physical → build; what each model does and refuses to do; "implementation-free"; the same library drawn three times |
| 4 | **Entities and Instances** | entity = something of significance you can list; instance = one occurrence; tangible / intangible / event; the DOG question — entity or instance depends on the business |
| 5 | **Attributes and Their Values** | describe, quantify, qualify, classify, specify; data types; single-valued; mandatory vs optional (null); volatile vs non-volatile (store birth date, not age) |
| 6 | **Unique Identifiers and Your First ERD** | UID: single, composite, artificial; why STUDENT needs a student number; the four goals of ER modelling; reading the HR ERD end to end |

### T3 — Reading and Drawing Relationships

*Sources: DDS 3-1 … 3-4, DFo 2-5 / 3-6.*

**Domain:** the HR system (EMPLOYEE, DEPARTMENT, JOB, LOCATION) plus the restaurant
CUSTOMER/ORDER scenario.

| # | Lesson | The idea it lands |
|---|---|---|
| 1 | **What a Relationship Is** | significant, bi-directional, named at *both* ends, between two entities or an entity and itself |
| 2 | **Optionality — must or may** | mandatory vs optional, one end at a time; solid line vs dashed line; "must every EMPLOYEE have a JOB?" |
| 3 | **Cardinality — how many** | one-and-only-one vs one-or-more; single toe vs crow's foot; cardinality answers *singular or plural*, never a number |
| 4 | **Diagramming Conventions** | softboxes; SINGULAR, UPPERCASE entity names; `#` UID, `*` mandatory, `o` optional; lowercase relationship names; why a shared convention exists at all |
| 5 | **Speaking ERDish** | the six-part sentence (EACH · entity · must/may · name · one-and-only-one / one-or-more · entity), read in both directions; recursive relationships (an EMPLOYEE manages EMPLOYEEs) |
| 6 | **Matrix Diagrams** | finding relationships you would otherwise miss; read the matrix in one direction only; turning a filled matrix into an ERD |

### T4 — Supertypes and Subtypes

*Source: DDS 4-1.* **Five lessons, not six** — this is one Oracle lesson; a sixth would be
padding. The depth comes from practice, not from more topics.

**Domain:** PAYMENT (cash / cheque / credit card), then WALL COVERING and SNOW SPORT.

| # | Lesson | The idea it lands |
|---|---|---|
| 1 | **When One Entity Is Really Several** | some instances have attributes or relationships the others do not; three separate entities vs one entity vs subtypes; what happens when a fourth payment method arrives |
| 2 | **Supertype and Subtype** | the supertype holds what is common; each subtype adds its own; **inheritance** — a subtype inherits every attribute *and every relationship* of its supertype |
| 3 | **The Three Rules** | "is a kind of"; **exhaustive** (and the `OTHER` subtype); **mutually exclusive**; and the rule that there is never exactly one subtype |
| 4 | **Nesting, and Knowing When to Stop** | nested subtypes (ANIMAL → VERTEBRATE → BIRD / REPTILE / MAMMAL); two levels for readability; when subtyping is the wrong tool |
| 5 | **Judging a Model** | given four ERDs, find the broken hierarchy, say which rule it breaks, and repair it |

### T5 — Relationship Types, and Resolving Them

*Sources: DDS 5-1, 5-2, 5-3.*

**Domain:** STUDENT / SUBJECT / ENROLLMENT, with TV SHOW and CLEANING SERVICE as the
second and third worked resolutions.

| # | Lesson | The idea it lands |
|---|---|---|
| 1 | **Transferability** | can this link be moved to another parent? class → teacher (yes); RECEIPT → STUDENT (no); the **diamond** on the relationship |
| 2 | **One-to-Many** | the workhorse; "many" means one-or-more *or* zero-or-more depending on optionality; M:1 is the same relationship read the other way |
| 3 | **One-to-One** | COMPUTER / MOTHERBOARD; 1:1 for **roles** (PERSON acting as TEACHER / as STUDENT); when a 1:1 is a sign you drew two entities where one belongs |
| 4 | **Many-to-Many, and the Attribute It Hides** | common in a first draft; `Grade` belongs to neither STUDENT nor SUBJECT — the relationship is hiding an attribute; also: spotting and removing a **redundant** relationship |
| 5 | **The Intersection Entity** | add ENROLLMENT; one M:M becomes two 1:M; where the attributes go; two more worked resolutions |
| 6 | **Barred Relationships and Composite UIDs** | the intersection entity's UID comes from its parents; the **bar** on the relationship line; reading a composite UID correctly |

---

## 3. Every chapter ends in SQL — the lab

This is the part the two tracks share, and the reason the theory track belongs **in this
repository** rather than in one of its own.

Each theory chapter's **lab** takes the ERD the chapter just taught and turns it into
real SQL, run live in the existing `alasql` widget:

| Chapter | Lab |
|---|---|
| **T2** | entities → `CREATE TABLE`, attributes → columns, UID → `PRIMARY KEY`; mandatory `*` → `NOT NULL`, optional `o` → nullable. Build the library's `members`, `books`, `authors`. |
| **T3** | relationships → foreign keys. Optionality decides `NOT NULL` or not; the crow's foot decides *which side* carries the key. Insert rows that break the rule and watch it fail. |
| **T4** | three ways to implement a supertype: one table with a type column and nullable subtype columns; a table per subtype; supertype table + subtype tables. Query each and compare. |
| **T5** | resolve the STUDENT/SUBJECT M:M into `enrollments(student_id, subject_id, grade)` with a composite primary key; then answer "which students got an A in Maths?" with a `JOIN`. |

Each lab carries a **Thread** box pointing at the SQL chapter where the same thing is
taught from the other side (T2 → Ch 1–2, T3 → Ch 3 joins and keys, T4 → Ch 7
normalization, T5 → Ch 3 and Ch 5).

---

## 4. Assessment

Per chapter, exactly as the sibling course:

- **One test after every lesson** — 8–10 questions, mixing `mcq`, `classify`
  (sort attributes into mandatory/optional, relationships into 1:M / M:M …),
  `read-erd` (answer a question *from* a drawn diagram), and `erdish`
  (write the business-rule sentence for a drawn relationship).
- **Three chapter tests** — **A — Core** (24 recall and understanding),
  **B — Applied** (24 *do it*: read a scenario, pick or build the right model),
  **C — Advanced** (24 on the hard corners: exhaustive / exclusive violations,
  barred UIDs, redundant relationships, transferability).
- **A glossary** per chapter, generated from the terms each lesson defines.

Page count: **23 lessons · 23 tests · 4 labs · 4 glossaries · 12 chapter tests ·
4 chapter homes = 70 pages.**

---

## 5. Engine

The theory track reuses the sibling course's generator (registry + content → pages),
which already handles bilingual parity, heading anchors, topic tags, glossary merge,
test synthesis, reading order and the precache list.

Three adaptations, because this repository already has a course in it:

1. **Assets are namespaced.** The theory engine's CSS/JS land in `assets/theory/…`;
   the SQL course's `assets/css/base.css` and friends are untouched. (Both repositories
   name their files the same — this is the only reason.)
2. **Progress is namespaced.** Theory progress is stored under `dbt.*`; the SQL course
   keeps `sqllab.*`. Nothing shared, nothing clobbered.
3. **The SQL widget is shared, not copied.** The labs load the existing
   `assets/js/widget.js` and `assets/vendor/alasql`, so there is one SQL engine on the
   site.

Sources live in `src/`: `src/registry.json`, `src/content/t2…t5/`, `src/diagrams/*.mmd`
(plus hand-authored ERD SVG partials), `src/glossary/`. Generated pages are **never**
hand-edited.

---

## 6. Build order (unattended, on the `imo` server)

One page at a time, committed and pushed after each, so the work is always recoverable
and always reviewable:

```
for chapter in t2 t3 t4 t5:
    chapter home            -> build, verify, commit, push
    for lesson in 1..N:
        lesson content      -> build, verify, commit, push
        its question bank   -> build, verify, commit, push
    lab                     -> build, verify, commit, push
    glossary terms          -> build, verify, commit, push
    exams A, B, C           -> build, verify, commit, push   (one commit each)
```

`verify` = `python build.py && python tools/verify_chapter.py && python scripts/build-sw.py --check`.
A page that fails verification is retried once, then skipped with a `BLOCKED:` note in
the run log; the run continues to the next page rather than stopping.

A watchdog restarts the runner if it dies or stalls (no new commit for 45 minutes) and
keeps `build/state.json`, so a restart resumes at the next unbuilt page.
