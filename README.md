# SQL Lab

A self-contained, static, **bilingual (English / Arabic)** interactive SQL course
for students who already know programming and data-analysis basics. It teaches SQL
from first statements through joins, subqueries, aggregation, views, normalization
(database design), and bulk operations across 9 chapters. Every lesson has three parts — **Explanation**,
**Lab**, **Test** — and everywhere SQL appears, you can type a query and run it
live against a real (small, in-browser) database through a reusable SQL widget.

The SQL engine is [alasql](https://github.com/alasql/alasql), running entirely in
your browser. There is **no server, no database, and no build step**.

## What's here

```
index.html              course landing page (chapter index + continue link)
manifest.webmanifest    PWA manifest (name, icons, colors) — linked from every page
sw.js                   service worker: precaches the whole site for offline / install
/assets
  /css                  tokens, base, components, widget, questions, rtl
  /js                   i18n, theme, progress, widget, questions, nav, app,
                        data (all case snapshots embedded — see below)
  /icons                PWA app icons (192/512/maskable) + apple-touch + favicon
  /vendor/alasql        vendored alasql.min.js (v4.19.0) — do not edit
  /vendor/fonts         self-hosted IBM Plex woff2 files + fonts.css
/data/case-a|b|c        the three case databases, one JSON snapshot per chapter
                        (source of truth; bundled into assets/js/data.js)
/chapters               one index page per chapter
/lessons                one page per lesson (three tabs)
/tests                  the chapter-end tests (added with each chapter build)
```

The three cases — **Bright Books Library** (Explanation), **Orbit Electronics**
(Lab), and **GreenField University** (Test) — each grow richer chapter by chapter.
`/data/case-*/chapter-N.json` holds the *cumulative* state of that case through
chapter N; a lesson loads the snapshot for its own chapter.

## Running it locally

**Just open `index.html`** — double-click it, or drag it into a browser. No server,
no build, no install. Every case database is embedded in `assets/js/data.js` (loaded
via a normal `<script>` tag), so nothing is fetched at runtime and the widgets work
straight from a `file://` URL.

> A local server is still perfectly fine if you prefer one
> (`python -m http.server 8000`, `npx serve`, VS Code "Live Server", …). When a page
> is served over http(s), the widget will use the embedded data all the same; it only
> falls back to fetching the `/data/*.json` files if `data.js` is ever missing.

### The embedded data bundle

`assets/js/data.js` is generated from the `data/case-*/chapter-*.json` files and holds
`window.SQLLAB_DATA[case][chapter]`. The JSON files remain the source of truth — **if you
change them, regenerate the bundle**:

```bash
node -e '
const fs=require("fs"),out={};
["a","b","c"].forEach(cs=>{out[cs]={};for(let ch=1;ch<=9;ch++){const p="data/case-"+cs+"/chapter-"+ch+".json";if(fs.existsSync(p))out[cs][ch]=JSON.parse(fs.readFileSync(p,"utf8"));}});
fs.writeFileSync("assets/js/data.js","window.SQLLAB_DATA = "+JSON.stringify(out,null,2)+";\n");
'
```

(New chapters just extend the loop bound; the JSON files stay authoritative.)
`node scripts/build-data.js` does the same and also bundles the exam databases (cases `d`/`e`).

## Deploying to GitHub Pages

Pages **source = repository root** (Settings → Pages → *Deploy from a branch* →
`main` / `/root`). Every path in the site is relative, so it works unchanged
whether served from a user/organization site or a project subpath
(`https://<user>.github.io/<repo>/`). Push to `main` and the site is live at the
URL Pages reports; no workflow or build is required.

## Offline check

The whole site must work with **no network at all** — alasql, the fonts, and all case
data are vendored/embedded locally, and nothing loads from a CDN at runtime. The
strongest proof is that it runs from a `file://` URL with no server. To confirm:

1. Turn off Wi-Fi / enable airplane mode, then open `index.html` directly (`file://`).
2. Open any lesson, run a query in each widget, and check answers on the exercises —
   fonts, styling, and every widget should work with the network fully off.
3. (Optional, when served over http) open DevTools → **Network**, reload, and confirm
   there are **no `.json` requests** — the widgets read the embedded `data.js`.

You can also audit for stray external references:

```bash
grep -ri "cdn\|googleapis\|jsdelivr\|unpkg" --include=*.html --include=*.css --include=*.js .
```

(Matches should only ever appear in this README, never in a served page or asset.)

## Install as an app (PWA)

When the site is served over **https (or `http://localhost`)** it registers a service
worker (`sw.js`) that precaches every page, script, style, font, icon, and the
embedded data bundle. After the first visit the whole course works with the network
fully off, and the browser offers to **install** it — an "Install" button also appears
in the header (Chrome/Edge/Android). On iOS use **Share → Add to Home Screen**. Once
installed it opens in its own standalone window and runs entirely offline on Windows,
Android, and iOS.

Two independent offline stories, on purpose:

- **`file://` (just open `index.html`)** — no service worker (browsers don't allow one
  on `file://`), but every widget still works because the data is embedded in `data.js`.
- **served over http(s)** — the service worker makes the site *installable* and caches
  it so even navigations work offline, exactly like a native app.

Service workers require a secure context, so the install/offline layer activates only
over https or localhost — GitHub Pages serves https, so it works there out of the box.
To verify: open DevTools → **Application** → *Service Workers* (should show `sw.js`
activated) and *Manifest* (no errors), then tick **Offline** and reload — the page still
loads.

`sw.js` holds an explicit precache list; **regenerate it whenever pages or assets are
added or removed** (bumps the cache version so clients update):

```bash
node scripts/build-sw.js   # scans the site and rewrites sw.js
```

(The generator walks the html / assets / data / icons and writes the list into `sw.js`
with a cache name built from the date plus a hash of every precached file's contents. Any
edit to any shipped file therefore changes `sw.js`, which is what makes browsers install the
new worker; it activates immediately, deletes the old cache, and installed apps pick up the
new files on their next load. Run it last, after `node scripts/build-data.js`.)

## Features

- **Bilingual, in-page toggle.** One button flips the whole UI and lesson prose
  between English and Arabic and switches direction between LTR and RTL. SQL
  editors stay LTR always, because code is LTR regardless of UI language.
- **Light / dark**, following the system preference by default with an explicit
  toggle persisted per browser.
- **Progress** (lessons touched, quiz results) persists in `localStorage`. There
  is **no tracking and no external write endpoint** — nothing leaves the browser.
- **Subtle, reduced-motion-safe animations** throughout.
- **Live "Database" sidebar.** Widgets can show a panel (add `"objects": true` to
  the widget config; always on in `explore` mode) that lists the current tables,
  their columns, and row counts. It refreshes after every run, so students see
  `CREATE` / `DROP` add and remove tables and `INSERT` / `DELETE` change row
  counts in real time.

## Widget authoring reference

Each widget is a `<div class="qb-widget">` containing a JSON config in a
`<script type="application/json" class="wd-config">`. Key fields:

- `mode`: `demo` (prefilled, run only), `exercise` (graded), or `explore` (sandbox).
- `dataset`: inline `{ "table": [rows] }`, **or** `case` + `chapter` to load a
  snapshot from the embedded `window.SQLLAB_DATA` (bundled in `data.js`; falls back to
  fetching `/data/case-<x>/chapter-<n>.json` only if the bundle is absent).
- `setup`: array of SQL run (live, keeping column metadata) before every
  execution — used to start an INSERT demo from a freshly created empty table, and
  by the chapter test to replay earlier answers so each question is graded against
  the running story so far.
- `objects: true`: show the live Database sidebar.
- `grade` (exercise only):
  - `structural` — schema checks. `{table, columns}` for a `CREATE` (table exists +
    declares those columns, with a probe insert); add `probe:false` and use `columns`
    for an `ALTER … ADD COLUMN`; use `absent:[...]` for an `ALTER … DROP COLUMN`.
  - `result` — compares a query's rows to an `expected` reference query or literal array
    (row order ignored; column set + values matter).
  - `state` — runs a mutation, then a `check` query, compared to `expected` (literal rows
    or a reference query) or `expectEmpty:true`. For "delete every X" prefer a full-table
    `check` with `expected` a `… WHERE NOT (<delete condition>)` reference, so both over-
    and under-deletion are caught even when the target set is empty.

Datasets loaded from a snapshot are re-created as real tables (schema inferred from the
rows), so `ALTER TABLE` works on them and the sidebar shows real column metadata.

## Building the rest of the course

Chapters are authored one at a time with the chapter prompt
(`02-chapter-prompt-template.md`) plus that chapter's content file
(`03-chapter-N-content.txt`), reusing the shared engines in `/assets` unchanged.
**Chapters 1–7 are complete:**

1. **First Steps** — CREATE / INSERT / SELECT / UPDATE / DELETE (5 lessons).
2. **Multiple Columns** — column types, `ALTER TABLE`, selecting/filtering/updating/
   deleting on many columns (6 lessons).
3. **Relationships** — primary/foreign keys, inserting with a key, `JOIN`, and cross-table
   update/delete via a subquery lookup (6 lessons).
4. **Subqueries** — scalar / `IN` / correlated / `EXISTS` / derived tables / scalar-in-SELECT,
   and a subquery-vs-JOIN consolidation (8 lessons).
5. **Aggregation** — `COUNT` / `SUM` / `AVG` / `MIN` / `MAX`, `GROUP BY`, `HAVING`, `ORDER BY`
   with aggregates, and aggregation over a `JOIN` (6 lessons).
6. **Views** — `CREATE VIEW`, choosing columns and rows, views over `JOIN` and aggregation,
   views built on views, and managing views (6 lessons).
7. **Normalization** — anomalies, 1NF, functional dependencies and 2NF, 3NF, and diagnosing real
   designs; SQL is used throughout to expose anomalies, test dependencies and reassemble the
   normalized tables with `JOIN` (5 lessons).

Chapters 1–3 end with a 20-question test that builds a fresh table (or pair of related tables)
across the questions, graded apply-in-order; Chapter 4's and Chapter 5's tests are 20 independent
questions across all three databases, each write-statement graded on the rows it returns.
Chapters 6–7 are built on the same scaffold, and so will Chapters 8–9 be. Each case grows one table per chapter;
`/data/case-*/chapter-N.json` holds the cumulative snapshot.

Chapter 4 also **adds descriptive columns** to the case tables it needs for subquery examples
(`books.genre`, `authors.country`/`birth_year`, `categories.department`, `products.brand`,
`departments.building`/`budget`, `courses.enrollment_cap`) — see `data/case-*/chapter-4.json`.

### Chapter-6 handoff — final schema after Chapter 5

Chapter 5 kept every Chapter-4 column and table and only **added rows** (aggregation needs no new
columns). Row counts grew so `GROUP BY` yields distinctive, non-empty groups. The cumulative schema
in `data/case-*/chapter-5.json` (unchanged from Chapter 4) is:

- **Case A** — `authors(id, name, country, birth_year)` · 6 rows;
  `books(id, title, price, published_year, in_stock, author_id, genre)` · 10 rows,
  genres Fiction(4)/Science Fiction(3)/Fantasy(2)/Mystery(1).
- **Case B** — `categories(id, name, department)` · 6 rows;
  `products(id, name, price, stock_qty, is_featured, category_id, brand)` · 12 rows,
  departments Electronics(6)/Home(4)/Office(2).
- **Case C** — `departments(id, name, building, budget)` · 6 rows (Fine Arts has no courses);
  `courses(id, title, credits, level, active, department_id, enrollment_cap)` · 10 rows,
  5 undergrad / 5 graduate.

alasql quirks Chapter 5 works around (verified): `HAVING` must repeat the aggregate (a SELECT alias
in `HAVING` matches nothing); the reserved words `count`/`sum`/`avg`/`total`/`value` (and others)
cannot be used as column aliases — every aggregate is named descriptively (`book_count`, `avg_price`,
`total_stock`, …). Graded write-statement questions specify the exact output aliases the answer must use.

### Chapter-8 handoff — final schema after Chapter 7

Chapter 7 (Normalization) keeps every Chapter-6 table, column and row unchanged and only **adds
tables** — the un-normalized "sheet" each case started from, its 1NF form, and the 3NF tables the
decomposition produces. The added tables in `data/case-*/chapter-7.json` are:

- **Case A** — `library_flat` (4 loans, multi-valued cells + `book_1..book_3`), `library_1nf`
  (7 rows, key `(loan_id, book_title)`), and the 3NF result `members(id, name, mobile, home_phone,
  city)` · 3, `loans(id, member_id, loan_date)` · 4 (ids 101–104), `loan_items(loan_id, book_id)` · 7 —
  which reference the existing `books` / `authors`.
- **Case B** — `orders_flat` (4 orders), `orders_1nf` (7 rows, key `(order_id, product_name)`),
  `brands(id, name, country)` · 7, `customers(id, name, email, phone, city)` · 3,
  `orders(id, customer_id, order_date)` · 4 (ids 5001–5004), `order_items(order_id, product_id)` · 7.
  `products.brand` stays a text column (joins as `products.brand = brands.name`); the lesson
  discusses replacing it with a `brand_id`.
- **Case C** — `enrollments_flat` (8 rows, 1NF with key `(student_id, course_id)`, repeating the
  student, course, department name and building), `students(id, name, study_year)` · 4,
  `enrollments(student_id, course_id, term, grade)` · 8.

Chapter 7 also adds `assets/css/normalize.css` (normal-form chips, stage boxes, rule boxes,
click-to-reveal solutions, dependency diagrams). alasql quirk found: a correlated subquery in
`UPDATE … SET col = (SELECT …)` fails, so cross-table updates keep the Chapter 3 form
`WHERE … IN (SELECT …)`.
