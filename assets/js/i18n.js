/* i18n.js — language engine (English / Arabic, in-page toggle).
   - Swaps [data-i18n] label text from the STRINGS dictionary.
   - Flips document lang + dir; CSS (base.css) shows/hides .i18n-en / .i18n-ar blocks.
   - Persists the choice in localStorage; a head inline script applies it pre-paint.
   Exposes window.I18N. Emits an 'i18n:change' event on document after each switch. */
(function () {
  'use strict';

  var STRINGS = {
    en: {
      brand: 'SQL Lab',
      course_title: 'SQL Lab',
      lang_toggle: 'العربية',
      theme_toggle_dark: 'Dark',
      theme_toggle_light: 'Light',
      nav_home: 'Home',
      nav_chapter: 'Chapter',
      chapters: 'Chapters',
      continue: 'Continue where you left off',
      start: 'Start',
      chapter_test: 'Chapter test',
      coming_soon: 'Coming soon',
      lesson: 'Lesson',
      tab_explanation: 'Explanation',
      tab_lab: 'Lab',
      tab_test: 'Test',
      run: 'Run',
      running: 'Running…',
      check_answer: 'Check answer',
      reset: 'Reset',
      run_hint: 'Ctrl/Cmd + Enter to run',
      schema: 'Schema',
      rows_returned: 'rows',
      no_rows: 'Query ran — 0 rows returned.',
      statement_ok: 'Statement ran successfully.',
      correct: 'Correct',
      incorrect: 'Not quite — try again',
      submit: 'Check',
      prev_lesson: 'Previous',
      next_lesson: 'Next',
      back_to_chapter: 'Back to chapter',
      go_to_test: 'Go to chapter test',
      progress_done: 'done',
      score: 'Score',
      offline_ready: 'Works fully offline',
      practice: 'Practice',
      lesson_quiz: 'Lesson quiz',
      sandbox: 'Sandbox — try your own queries',
      database: 'Database',
      db_empty: 'No tables yet',
      rows_word: 'rows',
      row_word: 'row',
      test_score: 'You scored',
      test_of: 'of',
      retake: 'Retake test'
    },
    ar: {
      brand: 'مختبر SQL',
      course_title: 'مختبر SQL',
      lang_toggle: 'English',
      theme_toggle_dark: 'داكن',
      theme_toggle_light: 'فاتح',
      nav_home: 'الرئيسية',
      nav_chapter: 'الفصل',
      chapters: 'الفصول',
      continue: 'تابع من حيث توقفت',
      start: 'ابدأ',
      chapter_test: 'اختبار الفصل',
      coming_soon: 'قريبًا',
      lesson: 'الدرس',
      tab_explanation: 'الشرح',
      tab_lab: 'المختبر',
      tab_test: 'الاختبار',
      run: 'تشغيل',
      running: 'جارٍ التشغيل…',
      check_answer: 'تحقق من الإجابة',
      reset: 'إعادة تعيين',
      run_hint: 'Ctrl/Cmd + Enter للتشغيل',
      schema: 'المخطط',
      rows_returned: 'صفوف',
      no_rows: 'تم تنفيذ الاستعلام — أُعيد 0 صف.',
      statement_ok: 'تم تنفيذ العبارة بنجاح.',
      correct: 'صحيح',
      incorrect: 'ليست صحيحة تمامًا — حاول مجددًا',
      submit: 'تحقق',
      prev_lesson: 'السابق',
      next_lesson: 'التالي',
      back_to_chapter: 'العودة إلى الفصل',
      go_to_test: 'انتقل إلى اختبار الفصل',
      progress_done: 'مكتمل',
      score: 'النتيجة',
      offline_ready: 'يعمل دون اتصال تمامًا',
      practice: 'تمارين',
      lesson_quiz: 'اختبار الدرس',
      sandbox: 'ساحة تجريب — جرّب استعلاماتك',
      database: 'قاعدة البيانات',
      db_empty: 'لا توجد جداول بعد',
      rows_word: 'صفوف',
      row_word: 'صف',
      test_score: 'نتيجتك',
      test_of: 'من',
      retake: 'إعادة الاختبار'
    }
  };

  var LS_KEY = 'sqllab.lang';
  var lang = 'en';

  function read() {
    try { return localStorage.getItem(LS_KEY) || 'en'; } catch (e) { return 'en'; }
  }
  function write(l) {
    try { localStorage.setItem(LS_KEY, l); } catch (e) {}
  }

  function t(key) {
    return (STRINGS[lang] && STRINGS[lang][key]) ||
           (STRINGS.en && STRINGS.en[key]) || key;
  }

  function applyLabels(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val != null) {
        if (el.hasAttribute('data-i18n-attr')) {
          el.setAttribute(el.getAttribute('data-i18n-attr'), val);
        } else {
          el.textContent = val;
        }
      }
    });
  }

  function apply(l) {
    lang = (l === 'ar') ? 'ar' : 'en';
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    applyLabels(document);
    write(lang);
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  function toggle() { apply(lang === 'en' ? 'ar' : 'en'); }

  function init() { apply(read()); }

  window.I18N = {
    init: init,
    apply: apply,
    toggle: toggle,
    applyLabels: applyLabels,
    t: t,
    get lang() { return lang; }
  };
})();
