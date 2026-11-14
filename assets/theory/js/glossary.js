/* ============================================================
   The chapter glossary widget.

   Mounted on <div data-glossary="t1"></div>; the data is
   window.DBTGlossary["t1"], an array of
     { id, term{en,ar}, def{en,ar}, cat{en,ar}, used:[headingId],
       see:[termId] }
   written by build.py from src/glossary/<key>.json.

   Two views of the same data:
     List   every entry in full, with the lessons it is used in
     Cards  flip cards for self-testing; "I know it / Review
            again" is remembered in localStorage "dbt.gloss.<key>"
            as { termId: 1 | 0 }

   Search covers the term and the definition in BOTH languages,
   ignoring case and Arabic diacritics. Entries are always sorted
   by the English term (so the A-Z bar is the same in either
   language); in Arabic the Arabic term is simply shown first.
   A URL hash #term-<id> scrolls to and highlights an entry.

   Public: window.DBTGlossaryUI = { mountAll(scope), relabel() }.
   (window.DBTGlossary is the data and is a different thing.)
   ============================================================ */
(function () {
  "use strict";

  var UI = {
    terms:      { en: "{n} terms", ar: "{n} مصطلحًا" },
    termsOf:    { en: "{n} of {m} terms", ar: "{n} من {m} مصطلحًا" },
    search:     { en: "Search terms and definitions", ar: "ابحث في المصطلحات والتعريفات" },
    searchHint: { en: "Search terms and definitions…", ar: "ابحث في المصطلحات والتعريفات…" },
    clear:      { en: "Clear search", ar: "مسح البحث" },
    view:       { en: "View", ar: "العرض" },
    list:       { en: "List", ar: "قائمة" },
    cards:      { en: "Cards", ar: "بطاقات" },
    all:        { en: "All", ar: "الكل" },
    cats:       { en: "Category", ar: "التصنيف" },
    jump:       { en: "Jump to letter", ar: "انتقل إلى حرف" },
    usedIn:     { en: "Used in:", ar: "يُستخدم في:" },
    seeAlso:    { en: "See also:", ar: "انظر أيضًا:" },
    lessonN:    { en: "Lesson {n}", ar: "الدرس {n}" },
    lab:        { en: "Lab", ar: "المختبر" },
    chapterHome:{ en: "Chapter home", ar: "صفحة الفصل" },
    perma:      { en: "Link to this term", ar: "رابط لهذا المصطلح" },
    showDef:    { en: "Show definition", ar: "أظهر التعريف" },
    showTerm:   { en: "Show term", ar: "أظهر المصطلح" },
    know:       { en: "I know it", ar: "أعرفه" },
    review:     { en: "Review again", ar: "أحتاج مراجعة" },
    markKnown:  { en: "Known", ar: "معروف" },
    markReview: { en: "Review", ar: "مراجعة" },
    progress:   { en: "{k} of {m} known", ar: "{k} من {m} معروف" },
    only:       { en: "Only terms to review", ar: "المصطلحات التي تحتاج مراجعة فقط" },
    reset:      { en: "Reset progress", ar: "إعادة ضبط التقدّم" },
    resetSure:  { en: "Click again to confirm", ar: "اضغط مرة أخرى للتأكيد" },
    none:       { en: "No terms match your search.", ar: "لا توجد مصطلحات مطابقة لبحثك." },
    nodata:     { en: "This glossary has no entries yet.", ar: "لا توجد مصطلحات في هذا المسرد بعد." },
    studyDone:  { en: "Every term here is marked as known.", ar: "كل المصطلحات هنا معلَّمة كمعروفة." }
  };

  function lang() {
    return document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  function t(key, vars) {
    var e = UI[key], s = e ? (e[lang()] || e.en) : key, k;
    if (vars) for (k in vars) if (vars.hasOwnProperty(k)) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escA(s) { return esc(s).replace(/"/g, "&quot;"); }

  function pick(o) {
    if (!o) return "";
    if (typeof o === "string") return o;
    return o[lang()] || o.en || o.ar || "";
  }

  /* ---------------------------------------------------------- search text */

  /* Lower-case, drop Arabic diacritics and tatweel, fold the alef, ya and
     ta-marbuta variants. Returns the folded string and, for each folded
     character, the index it came from in the original (for highlighting). */
  function foldChar(ch) {
    var c = ch.charCodeAt(0);
    if ((c >= 0x064B && c <= 0x065F) || c === 0x0670 || c === 0x0640 || (c >= 0x06D6 && c <= 0x06ED)) return "";
    if (c === 0x0622 || c === 0x0623 || c === 0x0625 || c === 0x0671) return "ا";
    if (c === 0x0649) return "ي";
    if (c === 0x0629) return "ه";
    return ch.toLowerCase();
  }

  function foldMap(s) {
    s = String(s == null ? "" : s);
    var out = "", map = [], i, r, j;
    for (i = 0; i < s.length; i++) {
      r = foldChar(s.charAt(i));
      for (j = 0; j < r.length; j++) { out += r.charAt(j); map.push(i); }
    }
    return { s: out, map: map };
  }

  function fold(s) { return foldMap(s).s; }

  function plain(html) {
    return String(html == null ? "" : html).replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  }

  function hasTags(s) { return /<\/?[a-z][^>]*>/i.test(String(s || "")); }

  /* Escape `text`, wrapping every occurrence of a search token in <mark>. */
  function marked(text, toks) {
    text = String(text == null ? "" : text);
    if (!toks || !toks.length) return esc(text);
    var fm = foldMap(text), ranges = [], i, p, idx, a, b, out = "", last = 0;
    for (i = 0; i < toks.length; i++) {
      if (!toks[i]) continue;
      idx = 0;
      while ((p = fm.s.indexOf(toks[i], idx)) >= 0) {
        a = fm.map[p];
        b = fm.map[p + toks[i].length - 1] + 1;
        ranges.push([a, b]);
        idx = p + toks[i].length;
      }
    }
    if (!ranges.length) return esc(text);
    ranges.sort(function (x, y) { return x[0] - y[0] || y[1] - x[1]; });
    for (i = 0; i < ranges.length; i++) {
      a = ranges[i][0]; b = ranges[i][1];
      if (a < last) { if (b <= last) continue; a = last; }
      out += esc(text.slice(last, a)) + "<mark>" + esc(text.slice(a, b)) + "</mark>";
      last = b;
    }
    return out + esc(text.slice(last));
  }

  /* ---------------------------------------------------------- storage */

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw) {
        var v = JSON.parse(raw);
        if (v && typeof v === "object") return v;
      }
    } catch (e) {}
    return fallback;
  }
  function saveJSON(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {}
  }
  function loadView() {
    try { return localStorage.getItem("dbt.gloss.view") === "cards" ? "cards" : "list"; } catch (e) { return "list"; }
  }
  function saveView(v) {
    try { localStorage.setItem("dbt.gloss.view", v); } catch (e) {}
  }

  /* ---------------------------------------------------------- where a heading lives */

  function pageLabel(path) {
    var info = null;
    try { info = window.COURSE && window.COURSE.pageByHref ? window.COURSE.pageByHref(path) : null; } catch (e) {}
    var p = info && info.page;
    if (p) {
      if (p.kind === "lesson" && p.n) return t("lessonN", { n: p.n });
      if (p.kind === "lab") return t("lab");
      if (p.kind === "chapter") return t("chapterHome");
      return p[lang()] || p.en || "";
    }
    var m = /lesson-0*(\d+)/.exec(path);
    return m ? t("lessonN", { n: m[1] }) : "";
  }

  function usedLink(h) {
    var anchors = window.DBTAnchors || {};
    var heads = window.DBTHeadings || {};
    var hd = heads[h];
    var title = hd ? (hd[lang()] || hd.en || h) : h;
    var path = anchors[h];
    if (!path) return '<span class="gl-use">' + esc(title) + "</span>";
    var lbl = pageLabel(path);
    var href = (window.DBT_BASE || "") + path + "#" + h;
    return '<a class="gl-use" href="' + escA(href) + '">' +
      (lbl ? "<strong>" + esc(lbl) + "</strong> · " : "") + esc(title) + "</a>";
  }

  /* ---------------------------------------------------------- one glossary */

  var instances = [];
  var uid = 0;

  function mount(host) {
    if (host._gl) return host._gl;
    var key = host.getAttribute("data-glossary") || "";
    var raw = (window.DBTGlossary && window.DBTGlossary[key]) || [];
    var id = ++uid;

    /* --- records, sorted by the English term --- */
    var recs = [], byId = {}, i, e, r;
    for (i = 0; i < raw.length; i++) {
      e = raw[i];
      if (!e || !e.id) continue;
      var te = (e.term && (e.term.en || "")) || "";
      var ta = (e.term && (e.term.ar || "")) || "";
      var de = (e.def && e.def.en) || "", da = (e.def && e.def.ar) || "";
      var sortKey = fold(te || ta).replace(/^[^a-z0-9ء-ي]+/, "");
      var m = /[a-z]/.exec(sortKey.charAt(0));
      r = {
        e: e, id: String(e.id), te: te, ta: ta, de: de, da: da,
        cat: e.cat || { en: "", ar: "" },
        used: e.used || [], see: e.see || [],
        key: sortKey,
        letter: m ? sortKey.charAt(0).toUpperCase() : "#",
        hay: fold(te + " " + ta + " " + plain(de) + " " + plain(da)),
        visible: true
      };
      recs.push(r);
      byId[r.id] = r;
    }
    recs.sort(function (a, b) { return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; });

    /* --- categories, in order of first appearance --- */
    var cats = [], catIdx = {};
    for (i = 0; i < recs.length; i++) {
      var cn = recs[i].cat.en || recs[i].cat.ar || "";
      recs[i].catKey = cn;
      if (cn && !catIdx.hasOwnProperty(cn)) { catIdx[cn] = cats.length; cats.push({ key: cn, cat: recs[i].cat, n: 0 }); }
    }

    var st = { q: "", cat: "", view: loadView(), only: false, flipped: {}, armed: false };
    var storeKey = "dbt.gloss." + key;
    var known = loadJSON(storeKey, {});
    var els = {};
    var armTimer = null, hlTimer = null, spy = 0;

    function toks() {
      var q = fold(st.q).replace(/^\s+|\s+$/g, "");
      return q ? q.split(/\s+/) : [];
    }

    function knownCount() {
      var n = 0;
      for (var j = 0; j < recs.length; j++) if (known[recs[j].id] === 1) n++;
      return n;
    }

    /* ----------------------------------------------- markup */

    function termHtml(rec, big) {
      var tk = toks();
      var en = '<span class="gl-t-en" lang="en" dir="ltr">' + marked(rec.te, tk) + "</span>";
      var ar = rec.ta ? '<span class="gl-t-ar" lang="ar" dir="rtl">' + marked(rec.ta, tk) + "</span>" : "";
      var first = lang() === "ar" && rec.ta ? ar : en;
      var second = lang() === "ar" && rec.ta ? en : ar;
      return '<span class="gl-t1">' + first + "</span>" + (second ? '<span class="gl-t2">' + second + "</span>" : "");
    }

    function defHtml(rec) {
      var d = lang() === "ar" ? (rec.da || rec.de) : (rec.de || rec.da);
      var attr = lang() === "ar" && rec.da ? "" : (lang() === "ar" ? ' lang="en" dir="ltr"' : "");
      return '<p class="gl-def"' + attr + ">" + (hasTags(d) ? d : marked(d, toks())) + "</p>";
    }

    function usedHtml(rec) {
      if (!rec.used.length) return "";
      var h = '<div class="gl-used"><span class="gl-lbl">' + esc(t("usedIn")) + "</span><span class=\"gl-uses\">";
      for (var j = 0; j < rec.used.length; j++) h += usedLink(rec.used[j]);
      return h + "</span></div>";
    }

    function seeHtml(rec) {
      var out = "";
      for (var j = 0; j < rec.see.length; j++) {
        var o = byId[rec.see[j]];
        if (!o) continue;
        var label = lang() === "ar" && o.ta ? o.ta : o.te;
        out += '<a class="gl-chip" href="#term-' + escA(o.id) + '" data-go="' + escA(o.id) + '"' +
               (lang() === "ar" && o.ta ? ' lang="ar"' : ' lang="en" dir="ltr"') + ">" + esc(label) + "</a>";
      }
      return out ? '<div class="gl-see"><span class="gl-lbl">' + esc(t("seeAlso")) + "</span>" + out + "</div>" : "";
    }

    function catBtn(rec) {
      var c = pick(rec.cat);
      return c ? '<button type="button" class="gl-cat" data-catf="' + escA(rec.catKey) + '">' + esc(c) + "</button>" : "";
    }

    function entryHtml(rec) {
      return '<article class="gl-entry" id="term-' + escA(rec.id) + '" data-id="' + escA(rec.id) + '" tabindex="-1">' +
        '<header class="gl-head"><h3 class="gl-term">' + termHtml(rec) + "</h3>" + catBtn(rec) +
        '<a class="gl-perma" href="#term-' + escA(rec.id) + '" data-go="' + escA(rec.id) + '" title="' + escA(t("perma")) +
        '" aria-label="' + escA(t("perma")) + '">#</a></header>' +
        defHtml(rec) + usedHtml(rec) + seeHtml(rec) + "</article>";
    }

    function markState(rec) {
      var v = known[rec.id];
      return v === 1 ? " is-known" : v === 0 ? " is-review" : "";
    }

    function markLabel(rec) {
      var v = known[rec.id];
      return v === 1 ? t("markKnown") : v === 0 ? t("markReview") : "";
    }

    function cardHtml(rec) {
      var fl = st.flipped[rec.id];
      var v = known[rec.id];
      return '<article class="gl-card' + (fl ? " is-flipped" : "") + markState(rec) + '" id="term-' + escA(rec.id) +
        '" data-id="' + escA(rec.id) + '" tabindex="-1"><div class="gl-card-in">' +
        '<div class="gl-face gl-front" data-flip="' + escA(rec.id) + '">' +
          '<span class="gl-mark">' + esc(markLabel(rec)) + "</span>" +
          '<h3 class="gl-term">' + termHtml(rec) + "</h3>" + catBtn(rec) +
          '<button type="button" class="gl-flip" data-flip="' + escA(rec.id) + '" aria-expanded="' + (fl ? "true" : "false") + '">' +
            esc(t("showDef")) + "</button></div>" +
        '<div class="gl-face gl-back">' +
          '<span class="gl-mark">' + esc(markLabel(rec)) + "</span>" +
          '<div class="gl-back-term" aria-hidden="true">' + termHtml(rec) + "</div>" +
          defHtml(rec) +
          '<div class="gl-rate"><button type="button" class="gl-know" data-rate="1" data-id="' + escA(rec.id) + '" aria-pressed="' + (v === 1 ? "true" : "false") + '">✓ ' +
            esc(t("know")) + '</button><button type="button" class="gl-rev" data-rate="0" data-id="' + escA(rec.id) + '" aria-pressed="' + (v === 0 ? "true" : "false") + '">↻ ' +
            esc(t("review")) + "</button></div>" +
          '<button type="button" class="gl-flip gl-flip-back" data-flip="' + escA(rec.id) + '" aria-expanded="' + (fl ? "true" : "false") + '">' +
            esc(t("showTerm")) + "</button>" +
        "</div></div></article>";
    }

    function build() {
      var active = document.activeElement, keepFocus = "", keepQ = false;
      if (active && host.contains(active)) {
        if (active.classList.contains("gl-q")) keepQ = true;
        else if (active.getAttribute("data-view")) keepFocus = '[data-view="' + active.getAttribute("data-view") + '"]';
      }

      if (!recs.length) {
        host.innerHTML = '<div class="gl gl-' + st.view + '"><p class="gl-empty">' + esc(t("nodata")) + "</p></div>";
        return;
      }

      var h = '<div class="gl gl-' + st.view + '" dir="' + (lang() === "ar" ? "rtl" : "ltr") + '">';
      h += '<div class="gl-top"><p class="gl-count" aria-live="polite"></p>' +
           '<div class="gl-search"><input type="search" class="gl-q" autocomplete="off" spellcheck="false" ' +
           'placeholder="' + escA(t("searchHint")) + '" aria-label="' + escA(t("search")) + '" value="' + escA(st.q) + '">' +
           '<button type="button" class="gl-clear" aria-label="' + escA(t("clear")) + '" hidden>×</button></div></div>';

      h += '<div class="gl-bar"><div class="gl-views" role="group" aria-label="' + escA(t("view")) + '">' +
           '<button type="button" class="gl-view" data-view="list" aria-pressed="' + (st.view === "list") + '">' + esc(t("list")) + "</button>" +
           '<button type="button" class="gl-view" data-view="cards" aria-pressed="' + (st.view === "cards") + '">' + esc(t("cards")) + "</button></div>";
      if (st.view === "cards") {
        h += '<div class="gl-study"><div class="gl-progress"><span class="gl-prog-text"></span>' +
             '<span class="gl-prog-bar"><i></i></span></div>' +
             '<label class="gl-only"><input type="checkbox" class="gl-only-cb"' + (st.only ? " checked" : "") + "> <span>" + esc(t("only")) + "</span></label>" +
             '<button type="button" class="gl-reset">' + esc(t("reset")) + "</button></div>";
      }
      h += "</div>";

      if (cats.length > 1) {
        h += '<div class="gl-cats" role="group" aria-label="' + escA(t("cats")) + '">' +
             '<button type="button" class="gl-chipf" data-catf="" aria-pressed="false"></button>';
        for (i = 0; i < cats.length; i++) {
          h += '<button type="button" class="gl-chipf" data-catf="' + escA(cats[i].key) + '" aria-pressed="false"></button>';
        }
        h += "</div>";
      }

      h += '<nav class="gl-az" aria-label="' + escA(t("jump")) + '" dir="ltr">';
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
      for (i = 0; i < letters.length; i++) {
        h += '<button type="button" class="gl-az-b" data-letter="' + letters[i] + '">' + letters[i] + "</button>";
      }
      h += "</nav>";

      h += '<div class="gl-body">';
      var cur = null;
      for (i = 0; i < recs.length; i++) {
        r = recs[i];
        if (r.letter !== cur) {
          if (cur !== null) h += "</div></section>";
          cur = r.letter;
          h += '<section class="gl-group" data-letter="' + cur + '" id="gl' + id + "-" + (cur === "#" ? "num" : cur) +
               '"><h2 class="gl-letter" dir="ltr">' + cur + '</h2><div class="gl-items">';
        }
        h += st.view === "cards" ? cardHtml(r) : entryHtml(r);
      }
      h += "</div></section></div>";
      h += '<p class="gl-empty" hidden>' + esc(t("none")) + "</p></div>";

      host.innerHTML = h;
      els.q = host.querySelector(".gl-q");
      els.clear = host.querySelector(".gl-clear");
      els.count = host.querySelector(".gl-count");
      els.empty = host.querySelector(".gl-empty");
      els.chips = host.querySelectorAll(".gl-chipf");
      els.az = host.querySelectorAll(".gl-az-b");
      els.groups = host.querySelectorAll(".gl-group");
      els.items = {};
      var nodes = host.querySelectorAll("[data-id]");
      for (i = 0; i < nodes.length; i++) {
        if (nodes[i].tagName === "ARTICLE") els.items[nodes[i].getAttribute("data-id")] = nodes[i];
      }
      els.progText = host.querySelector(".gl-prog-text");
      els.progBar = host.querySelector(".gl-prog-bar i");
      els.sticky = host.querySelector(".gl-az");
      applyFilter(true);
      progress();
      stickyTop();

      if (keepQ && els.q) { els.q.focus(); try { els.q.setSelectionRange(els.q.value.length, els.q.value.length); } catch (x) {} }
      else if (keepFocus) { var f = host.querySelector(keepFocus); if (f) f.focus(); }
    }

    /* ----------------------------------------------- filtering */

    function applyFilter(quiet) {
      var tk = toks(), shown = 0, i, j, rec, ok, okNoCat, counts = {}, total = 0;
      for (i = 0; i < cats.length; i++) counts[cats[i].key] = 0;

      for (i = 0; i < recs.length; i++) {
        rec = recs[i];
        ok = true;
        for (j = 0; j < tk.length; j++) if (rec.hay.indexOf(tk[j]) < 0) { ok = false; break; }
        if (ok && st.view === "cards" && st.only && known[rec.id] === 1 && !(els.keep && els.keep === rec.id)) ok = false;
        okNoCat = ok;
        if (okNoCat) { total++; if (counts.hasOwnProperty(rec.catKey)) counts[rec.catKey]++; }
        if (ok && st.cat && rec.catKey !== st.cat) ok = false;
        rec.visible = ok;
        var node = els.items[rec.id];
        if (node) node.hidden = !ok;
        if (ok) shown++;
      }

      /* groups and the A-Z bar */
      var present = {};
      for (i = 0; i < els.groups.length; i++) {
        var g = els.groups[i], any = false, kids = g.querySelectorAll("[data-id]");
        for (j = 0; j < kids.length; j++) if (kids[j].tagName === "ARTICLE" && !kids[j].hidden) { any = true; break; }
        g.hidden = !any;
        if (any) present[g.getAttribute("data-letter")] = true;
      }
      for (i = 0; i < els.az.length; i++) {
        var lt = els.az[i].getAttribute("data-letter");
        els.az[i].disabled = !present[lt];
      }

      /* chips */
      for (i = 0; i < els.chips.length; i++) {
        var ck = els.chips[i].getAttribute("data-catf");
        var label, n;
        if (ck === "") { label = t("all"); n = total; }
        else { label = pick(cats[catIdx[ck]].cat); n = counts[ck]; }
        els.chips[i].textContent = label + " (" + n + ")";
        els.chips[i].setAttribute("aria-pressed", (st.cat === ck) ? "true" : "false");
        els.chips[i].className = "gl-chipf" + (st.cat === ck ? " on" : "");
      }

      els.count.innerHTML = "";
      els.count.textContent = (tk.length || st.cat || (st.view === "cards" && st.only))
        ? t("termsOf", { n: shown, m: recs.length }) : t("terms", { n: recs.length });
      els.empty.hidden = shown > 0;
      if (els.clear) els.clear.hidden = !st.q;

      /* highlights follow the query, so re-draw the text of what is shown */
      if (!quiet || tk.length) redrawText();
    }

    function redrawText() {
      for (var i = 0; i < recs.length; i++) {
        var rec = recs[i], node = els.items[rec.id];
        if (!node || node.hidden) continue;
        var terms = node.querySelectorAll(".gl-term");
        for (var j = 0; j < terms.length; j++) terms[j].innerHTML = termHtml(rec);
        var back = node.querySelector(".gl-back-term");
        if (back) back.innerHTML = termHtml(rec);
        var def = node.querySelector(".gl-def");
        if (def && !hasTags(lang() === "ar" ? (rec.da || rec.de) : (rec.de || rec.da))) {
          def.innerHTML = marked(lang() === "ar" ? (rec.da || rec.de) : (rec.de || rec.da), toks());
        }
      }
    }

    function progress() {
      if (!els.progText) return;
      var k = knownCount();
      els.progText.textContent = t("progress", { k: k, m: recs.length });
      els.progBar.style.width = (recs.length ? Math.round(100 * k / recs.length) : 0) + "%";
    }

    /* The A-Z bar sticks just under the site's top bar, whatever height
       that has right now (it can wrap, and it changes with the language). */
    var lastTop = -1;
    function stickyTop() {
      var bar = document.querySelector(".topbar");
      var h = bar ? bar.offsetHeight : 0;
      if (h === lastTop) return;
      lastTop = h;
      host.style.setProperty("--gl-top", h + "px");
    }

    /* ----------------------------------------------- jumping around */

    function parseHash() {
      var m = /^#term-(.+)$/.exec(window.location.hash || "");
      if (!m) return "";
      try { return decodeURIComponent(m[1]); } catch (e) { return m[1]; }
    }

    function go(termId, setHash) {
      var rec = byId[termId];
      if (!rec) return;
      if (!rec.visible) {
        st.q = ""; st.cat = ""; st.only = false;
        if (els.q) els.q.value = "";
        var cb = host.querySelector(".gl-only-cb");
        if (cb) cb.checked = false;
        applyFilter();
      }
      var node = els.items[termId];
      if (!node) return;
      var old = host.querySelectorAll(".gl-hl, .gl-current");
      for (var i = 0; i < old.length; i++) old[i].classList.remove("gl-hl", "gl-current");
      node.classList.add("gl-hl", "gl-current");
      /* restart the flash animation */
      node.style.animation = "none";
      void node.offsetWidth;
      node.style.animation = "";
      try { node.scrollIntoView({ block: "start" }); } catch (e) { node.scrollIntoView(); }
      try { node.focus({ preventScroll: true }); } catch (e2) { node.focus(); }
      clearTimeout(hlTimer);
      hlTimer = setTimeout(function () { node.classList.remove("gl-hl"); }, 2600);
      if (setHash && window.history && history.replaceState) {
        try { history.replaceState(null, "", "#term-" + encodeURIComponent(termId)); } catch (e3) {}
      }
    }

    function handleHash() {
      var termId = parseHash();
      if (termId) go(termId, false);
    }

    function spyUpdate() {
      spy = 0;
      stickyTop();
      if (!els.groups || !els.sticky) return;
      var line = els.sticky.getBoundingClientRect().bottom + 8;
      var cur = "";
      for (var i = 0; i < els.groups.length; i++) {
        if (els.groups[i].hidden) continue;
        if (els.groups[i].getBoundingClientRect().top <= line) cur = els.groups[i].getAttribute("data-letter");
      }
      for (var j = 0; j < els.az.length; j++) {
        if (els.az[j].getAttribute("data-letter") === cur) els.az[j].setAttribute("aria-current", "true");
        else els.az[j].removeAttribute("aria-current");
      }
    }

    /* ----------------------------------------------- state changes */

    function setView(v) {
      if (st.view === v) return;
      st.view = v;
      saveView(v);
      build();
    }

    function setCat(c) {
      st.cat = (st.cat === c) ? "" : c;
      applyFilter();
    }

    function flip(termId) {
      var node = els.items[termId];
      if (!node) return;
      var on = !node.classList.contains("is-flipped");
      node.classList.toggle("is-flipped", on);
      st.flipped[termId] = on;
      var btns = node.querySelectorAll(".gl-flip");
      for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-expanded", on ? "true" : "false");
      var next = node.querySelector(on ? ".gl-back .gl-flip" : ".gl-front .gl-flip");
      if (next) { try { next.focus({ preventScroll: true }); } catch (e) { next.focus(); } }
    }

    function rate(termId, v) {
      var node = els.items[termId];
      if (known[termId] === v) delete known[termId]; else known[termId] = v;
      saveJSON(storeKey, known);
      if (node) {
        node.classList.remove("is-known", "is-review");
        var s = known[termId];
        if (s === 1) node.classList.add("is-known");
        if (s === 0) node.classList.add("is-review");
        var marks = node.querySelectorAll(".gl-mark");
        for (var i = 0; i < marks.length; i++) marks[i].textContent = s === 1 ? t("markKnown") : s === 0 ? t("markReview") : "";
        var kb = node.querySelector(".gl-know"), rb = node.querySelector(".gl-rev");
        if (kb) kb.setAttribute("aria-pressed", s === 1 ? "true" : "false");
        if (rb) rb.setAttribute("aria-pressed", s === 0 ? "true" : "false");
      }
      els.keep = termId;      /* keep the card on screen until the next filter change */
      progress();
    }

    function resetProgress(btn) {
      if (!st.armed) {
        st.armed = true;
        btn.textContent = t("resetSure");
        btn.classList.add("armed");
        clearTimeout(armTimer);
        armTimer = setTimeout(function () {
          st.armed = false;
          btn.textContent = t("reset");
          btn.classList.remove("armed");
        }, 3500);
        return;
      }
      clearTimeout(armTimer);
      st.armed = false;
      known = {};
      saveJSON(storeKey, known);
      els.keep = "";
      build();
    }

    /* ----------------------------------------------- events */

    function up(node, test) {
      for (var n = node; n && n !== host; n = n.parentNode) {
        if (n.nodeType === 1 && test(n)) return n;
      }
      return null;
    }

    host.addEventListener("input", function (ev) {
      if (!ev.target.classList || !ev.target.classList.contains("gl-q")) return;
      st.q = ev.target.value;
      els.keep = "";
      applyFilter();
    });

    host.addEventListener("change", function (ev) {
      if (ev.target.classList && ev.target.classList.contains("gl-only-cb")) {
        st.only = ev.target.checked;
        els.keep = "";
        applyFilter();
      }
    });

    host.addEventListener("keydown", function (ev) {
      var tg = ev.target;
      if (tg.classList && tg.classList.contains("gl-q") && (ev.key === "Escape" || ev.keyCode === 27) && st.q) {
        st.q = "";
        tg.value = "";
        applyFilter();
        ev.preventDefault();
      }
    });

    host.addEventListener("click", function (ev) {
      var n;
      if ((n = up(ev.target, function (x) { return x.classList.contains("gl-clear"); }))) {
        st.q = ""; els.q.value = ""; applyFilter(); els.q.focus(); return;
      }
      if ((n = up(ev.target, function (x) { return x.classList.contains("gl-view"); }))) { setView(n.getAttribute("data-view")); return; }
      if ((n = up(ev.target, function (x) { return x.classList.contains("gl-chipf") || x.classList.contains("gl-cat"); }))) { els.keep = ""; setCat(n.getAttribute("data-catf")); return; }
      if ((n = up(ev.target, function (x) { return x.classList.contains("gl-az-b"); }))) {
        var g = host.querySelector('.gl-group[data-letter="' + n.getAttribute("data-letter") + '"]');
        if (g && !g.hidden) g.scrollIntoView({ block: "start" });
        return;
      }
      if ((n = up(ev.target, function (x) { return x.tagName === "A" && x.hasAttribute("data-go"); }))) {
        ev.preventDefault();
        go(n.getAttribute("data-go"), true);
        return;
      }
      if ((n = up(ev.target, function (x) { return x.tagName === "BUTTON" && x.hasAttribute("data-rate"); }))) {
        rate(n.getAttribute("data-id"), +n.getAttribute("data-rate"));
        return;
      }
      if ((n = up(ev.target, function (x) { return x.classList.contains("gl-reset"); }))) { resetProgress(n); return; }
      if ((n = up(ev.target, function (x) { return x.hasAttribute("data-flip"); }))) {
        /* a click on a link or button inside the front face is not a flip */
        if (up(ev.target, function (x) { return x.classList.contains("gl-cat"); })) return;
        flip(n.getAttribute("data-flip"));
        return;
      }
    });

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("resize", stickyTop);
    window.addEventListener("load", stickyTop);
    document.addEventListener("da:lang", function () { setTimeout(stickyTop, 0); });
    try {
      var tb = document.querySelector(".topbar");
      if (tb && window.ResizeObserver) new ResizeObserver(stickyTop).observe(tb);
    } catch (e4) {}
    window.addEventListener("scroll", function () {
      if (spy) return;
      spy = window.requestAnimationFrame ? window.requestAnimationFrame(spyUpdate) : setTimeout(spyUpdate, 50);
    }, { passive: true });

    var api = { host: host, key: key, relabel: build, go: go };
    host._gl = api;
    instances.push(api);
    build();
    if (parseHash()) setTimeout(handleHash, 0);
    return api;
  }

  /* ---------------------------------------------------------- public */

  function mountAll(scope) {
    var hosts = (scope || document).querySelectorAll("[data-glossary]");
    for (var i = 0; i < hosts.length; i++) mount(hosts[i]);
  }

  function relabel() {
    for (var i = 0; i < instances.length; i++) instances[i].relabel();
  }

  document.addEventListener("da:lang", relabel);

  window.DBTGlossaryUI = { mountAll: mountAll, relabel: relabel };
})();
