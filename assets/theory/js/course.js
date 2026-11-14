/* ============================================================
   The course registry and the UI strings.

   The shape of the course -- which tracks exist, which chapters
   each holds, which pages each chapter has, in what reading order
   -- lives in src/registry.json and reaches the browser as
   window.DBT_REGISTRY (assets/theory/js/registry.js, written by build.py,
   with every page's href already filled in). This file turns that
   data into lookups. The drawer, the breadcrumbs, the previous /
   next pager, the home pages, the service-worker precache list,
   the build and the end-to-end suite all read the same registry,
   so the site cannot disagree with itself.

   `href` is always relative to the site root. A page turns it into
   a working link by prefixing window.DBT_BASE, which each page sets
   to the number of ../ it needs. That is what lets the same files
   serve from a domain root and from a GitHub Pages project subpath.
   ============================================================ */
(function () {
  "use strict";

  var R = window.DBT_REGISTRY || { site: {}, tracks: [], chapters: [], planned: [] };

  var UI = {
    brand:    { en: "SQL Lab", ar: "مختبر SQL" },
    menu:     { en: "Course", ar: "المقرر" },
    prev:     { en: "Previous", ar: "السابق" },
    next:     { en: "Next", ar: "التالي" },
    copy:     { en: "copy", ar: "نسخ" },
    copied:   { en: "copied", ar: "تم النسخ" },
    score:    { en: "Score: {a} / {b} correct", ar: "النتيجة: {a} من {b} صحيحة" },
    onpage:   { en: "On this page", ar: "في هذه الصفحة" },
    chapters: { en: "All chapters", ar: "كل الفصول" },
    home:     { en: "Home", ar: "الرئيسية" },
    chapter:  { en: "Chapter {n}", ar: "الفصل {n}" },
    theory:   { en: "Theory", ar: "النظري" },
    practical:{ en: "Practical", ar: "العملي" },
    install:  { en: "Install", ar: "تثبيت" },
    offline:  { en: "Works fully offline", ar: "يعمل دون اتصال بالكامل" },
    resume:   { en: "Continue where you stopped", ar: "تابع من حيث توقّفت" },
    start:    { en: "Start the chapter", ar: "ابدأ الفصل" },
    soon:     { en: "Being written", ar: "قيد الكتابة" },
    /* A chapter being written, once some of it can be read. {a} of {b}
       lessons are finished; the tests follow the lessons. */
    partLessons: { en: "{a} of {b} lessons ready", ar: "{a} من {b} دروس جاهزة" },
    partAll:     { en: "all {b} lessons ready · tests being written",
                   ar: "الدروس الـ{b} جاهزة · الاختبارات قيد الكتابة" },
    top:      { en: "Back to top", ar: "إلى الأعلى" },
    lang:     { en: "العربية", ar: "English" },
    dark:     { en: "Dark", ar: "داكن" },
    light:    { en: "Light", ar: "فاتح" }
  };

  /* ---------------------------------------------------------- build the model */

  var KIND_ORDER = { chapter: 0, lesson: 1, test: 2, lab: 3, glossary: 4, exam: 5 };

  var chapters = [];
  var byKey = {};
  var byId = {};
  var byHref = {};

  (function build() {
    var src = R.chapters || [];
    for (var i = 0; i < src.length; i++) {
      var c = src[i];
      var ch = {
        key: c.key, track: c.track, num: c.num, ready: c.ready !== false,
        title: c.title, blurb: c.blurb, domain: c.domain || null,
        href: "", pages: []
      };
      for (var j = 0; j < (c.pages || []).length; j++) {
        var p = c.pages[j];
        var page = {
          id: p.id, kind: p.kind, n: p.n || null, of: p.of || null,
          bank: p.bank || null, href: p.href, written: p.written !== false,
          title: p.title, blurb: p.blurb || null,
          en: p.title ? p.title.en : p.id, ar: p.title ? p.title.ar : p.id
        };
        ch.pages.push(page);
        byId[page.id] = { chapter: ch.key, page: page };
        byHref[page.href] = { chapter: ch.key, page: page };
        if (page.kind === "chapter") ch.href = page.href;
      }
      chapters.push(ch);
      byKey[ch.key] = ch;
    }
  })();

  /* ---------------------------------------------------------- lookups */

  function chapter(key) { return byKey[key] || null; }

  /* The reading order of one chapter, as a flat list. The chapter
     home page is index 0, so "previous" from lesson 1 lands there. */
  function pages(key) {
    var c = byKey[key];
    return c ? c.pages : [];
  }

  function page(key, id) {
    var list = pages(key);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function indexOf(key, id) {
    var list = pages(key);
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return i;
    return -1;
  }

  function pageById(id) { return byId[id] || null; }
  function pageByHref(href) {
    return byHref[String(href || "").replace(/#.*$/, "")] || null;
  }

  function track(id) {
    var t = R.tracks || [];
    for (var i = 0; i < t.length; i++) if (t[i].id === id) return t[i];
    return null;
  }

  function chaptersOf(trackId) {
    var out = [];
    for (var i = 0; i < chapters.length; i++) {
      if (chapters[i].track === trackId) out.push(chapters[i]);
    }
    return out;
  }

  /* Every page that is a file of its own, across every chapter -
     what the service worker precaches and what the e2e suite walks. */
  function allPages() {
    var out = [];
    for (var i = 0; i < chapters.length; i++) {
      for (var j = 0; j < chapters[i].pages.length; j++) {
        out.push({ chapter: chapters[i].key, page: chapters[i].pages[j] });
      }
    }
    return out;
  }

  /* The pages of a given kind in one chapter, in reading order. */
  function ofKind(key, kind) {
    var out = [], list = pages(key);
    for (var i = 0; i < list.length; i++) if (list[i].kind === kind) out.push(list[i]);
    return out;
  }

  window.COURSE = {
    site: R.site || {},
    tracks: R.tracks || [],
    chapters: chapters,
    planned: R.planned || [],
    UI: UI,
    kindOrder: KIND_ORDER,
    chapter: chapter,
    chaptersOf: chaptersOf,
    track: track,
    pages: pages,
    page: page,
    indexOf: indexOf,
    ofKind: ofKind,
    pageById: pageById,
    pageByHref: pageByHref,
    allPages: allPages
  };
})();
