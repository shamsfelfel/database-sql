/* progress.js — localStorage progress tracker.
   Records per-question pass/fail keyed by chapter/lesson/questionId, derives
   lesson + chapter completion, and holds the static COURSE registry that nav.js
   and the index page read. Exposes window.Progress and window.COURSE.

   Storage shape (localStorage 'sqllab.progress'):
   {
     "q": { "1/1/lab-q1": true, "1/1/test-t3": false, ... },   // question results
     "lastLesson": "1/2"                                        // continue-where-you-left-off
   } */
(function () {
  'use strict';

  /* ---- Static course registry ----
     Each chapter lists its lessons and whether it is published yet.
     Chapter-build prompts extend this as new chapters ship. */
  var COURSE = {
    chapters: [
      {
        num: 1, published: true,
        title: { en: 'First Steps', ar: 'الخطوات الأولى' },
        lessons: [
          { n: 1, title: { en: 'CREATE TABLE', ar: 'إنشاء جدول' } },
          { n: 2, title: { en: 'INSERT', ar: 'الإدراج' } },
          { n: 3, title: { en: 'SELECT', ar: 'الاستعلام' } },
          { n: 4, title: { en: 'UPDATE', ar: 'التحديث' } },
          { n: 5, title: { en: 'DELETE', ar: 'الحذف' } }
        ]
      },
      {
        num: 2, published: true,
        title: { en: 'Multiple Columns', ar: 'أعمدة متعددة' },
        lessons: [
          { n: 1, title: { en: 'Types & Many Columns', ar: 'الأنواع والأعمدة المتعددة' } },
          { n: 2, title: { en: 'ALTER TABLE', ar: 'تعديل الجدول' } },
          { n: 3, title: { en: 'Selecting Columns', ar: 'تحديد الأعمدة' } },
          { n: 4, title: { en: 'Filtering (AND / OR)', ar: 'التصفية (AND / OR)' } },
          { n: 5, title: { en: 'Updating Many Columns', ar: 'تحديث أعمدة متعددة' } },
          { n: 6, title: { en: 'Multi-condition DELETE', ar: 'حذف متعدد الشروط' } }
        ]
      },
      {
        num: 3, published: true,
        title: { en: 'Relationships', ar: 'العلاقات' },
        lessons: [
          { n: 1, title: { en: 'Keys & Relationships', ar: 'المفاتيح والعلاقات' } },
          { n: 2, title: { en: 'Inserting with a Key', ar: 'الإدراج بمفتاح' } },
          { n: 3, title: { en: 'Joining Tables', ar: 'ربط الجداول (JOIN)' } },
          { n: 4, title: { en: 'Cross-table UPDATE', ar: 'التحديث عبر الجداول' } },
          { n: 5, title: { en: 'Cross-table DELETE', ar: 'الحذف عبر الجداول' } },
          { n: 6, title: { en: 'Changing Relationships', ar: 'تغيير العلاقات' } }
        ]
      },
      {
        num: 4, published: true,
        title: { en: 'Subqueries', ar: 'الاستعلامات الفرعية' },
        lessons: [
          { n: 1, title: { en: 'From Filters to Subqueries', ar: 'من التصفية إلى الاستعلامات الفرعية' } },
          { n: 2, title: { en: 'Scalar Subquery in WHERE', ar: 'استعلام فرعي قياسي في WHERE' } },
          { n: 3, title: { en: 'IN / NOT IN Subqueries', ar: 'استعلامات IN / NOT IN' } },
          { n: 4, title: { en: 'Correlated Subqueries', ar: 'الاستعلامات المترابطة' } },
          { n: 5, title: { en: 'EXISTS / NOT EXISTS', ar: 'وجود الصفوف (EXISTS)' } },
          { n: 6, title: { en: 'Derived Tables', ar: 'الجداول المشتقة' } },
          { n: 7, title: { en: 'Scalar Subquery in SELECT', ar: 'استعلام فرعي قياسي في SELECT' } },
          { n: 8, title: { en: 'Subquery vs. JOIN', ar: 'الاستعلام الفرعي مقابل JOIN' } }
        ]
      },
      { num: 5, published: false, title: { en: 'Aggregation', ar: 'التجميع' }, lessons: [] },
      { num: 6, published: false, title: { en: 'Views', ar: 'العروض' }, lessons: [] },
      { num: 7, published: false, title: { en: 'OUTPUT & Temp Tables', ar: 'الإخراج والجداول المؤقتة' }, lessons: [] },
      { num: 8, published: false, title: { en: 'CSV & Bulk Operations', ar: 'CSV والعمليات المجمّعة' }, lessons: [] }
    ]
  };

  var LS_KEY = 'sqllab.progress';

  function load() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      var d = raw ? JSON.parse(raw) : {};
      if (!d.q) d.q = {};
      return d;
    } catch (e) { return { q: {} }; }
  }
  function save(d) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch (e) {}
  }

  function key(ch, lesson, qid) { return ch + '/' + lesson + '/' + qid; }

  /* Record a question result. Pass wins: once passed, a later fail won't undo it,
     so a student who gets it right on the second try stays credited. */
  function recordQuestion(ch, lesson, qid, pass) {
    var d = load();
    var k = key(ch, lesson, qid);
    if (pass) d.q[k] = true;
    else if (!(k in d.q)) d.q[k] = false;
    d.lastLesson = ch + '/' + lesson;
    save(d);
    document.dispatchEvent(new CustomEvent('progress:change', { detail: { ch: ch, lesson: lesson, qid: qid, pass: pass } }));
  }

  function questionResult(ch, lesson, qid) {
    var d = load();
    return d.q[key(ch, lesson, qid)];
  }

  /* Fraction (0..1) of recorded questions passed within a lesson. */
  function lessonScore(ch, lesson) {
    var d = load();
    var prefix = ch + '/' + lesson + '/';
    var total = 0, passed = 0;
    Object.keys(d.q).forEach(function (k) {
      if (k.indexOf(prefix) === 0) { total++; if (d.q[k]) passed++; }
    });
    return { total: total, passed: passed, frac: total ? passed / total : 0 };
  }

  /* Chapter completion: fraction of its published lessons that have at least
     one recorded pass. Coarse but enough for the index progress bar. */
  function chapterProgress(ch) {
    var chapter = COURSE.chapters.filter(function (c) { return c.num === ch; })[0];
    if (!chapter || !chapter.lessons.length) return { frac: 0, lessons: 0, touched: 0 };
    var d = load();
    var touched = 0;
    chapter.lessons.forEach(function (l) {
      var prefix = ch + '/' + l.n + '/';
      var any = Object.keys(d.q).some(function (k) { return k.indexOf(prefix) === 0 && d.q[k]; });
      if (any) touched++;
    });
    return { frac: touched / chapter.lessons.length, lessons: chapter.lessons.length, touched: touched };
  }

  function lastLesson() { return load().lastLesson || null; }

  function markLesson(ch, lesson) {
    var d = load();
    d.lastLesson = ch + '/' + lesson;
    save(d);
  }

  function reset() { save({ q: {} }); document.dispatchEvent(new CustomEvent('progress:change', { detail: { reset: true } })); }

  window.COURSE = COURSE;
  window.Progress = {
    recordQuestion: recordQuestion,
    questionResult: questionResult,
    lessonScore: lessonScore,
    chapterProgress: chapterProgress,
    lastLesson: lastLesson,
    markLesson: markLesson,
    reset: reset
  };
})();
