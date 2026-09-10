/* nav.js — breadcrumbs and the previous/next lesson footer, generated from the
   COURSE registry (progress.js) plus the page's data-chapter / data-lesson.
   Populates any <nav class="breadcrumbs" data-auto> and <nav class="footer-nav" data-auto>. */
(function () {
  'use strict';

  function base() { return window.SQLLAB_BASE || (document.body && document.body.getAttribute('data-base')) || ''; }
  function L(v) {
    if (v && typeof v === 'object') { var lang = window.I18N ? window.I18N.lang : 'en'; return v[lang] != null ? v[lang] : v.en; }
    return v;
  }
  function t(k) { return window.I18N ? window.I18N.t(k) : k; }

  function homeHref() { return base() + 'index.html'; }
  function chapterHref(ch) { return base() + 'chapters/chapter-' + ch + '.html'; }
  function lessonHref(ch, n) { return base() + 'lessons/chapter-' + ch + '-lesson-' + n + '.html'; }
  function testHref(ch) { return base() + 'tests/chapter-' + ch + '-test.html'; }

  function chapterOf(ch) {
    var C = window.COURSE; if (!C) return null;
    return C.chapters.filter(function (c) { return c.num === +ch; })[0] || null;
  }

  function crumb(href, textNode, current) {
    var a;
    if (current) { a = document.createElement('span'); a.setAttribute('aria-current', 'page'); }
    else { a = document.createElement('a'); a.href = href; }
    a.appendChild(textNode);
    return a;
  }
  function sep() { var s = document.createElement('span'); s.className = 'sep'; s.textContent = '›'; return s; }

  function renderBreadcrumbs() {
    var box = document.querySelector('nav.breadcrumbs[data-auto]');
    if (!box) return;
    var ch = box.getAttribute('data-chapter') || (document.body && document.body.getAttribute('data-chapter'));
    var lesson = box.getAttribute('data-lesson') || (document.body && document.body.getAttribute('data-lesson'));
    box.innerHTML = '';
    box.appendChild(crumb(homeHref(), document.createTextNode(t('nav_home'))));
    if (ch) {
      var c = chapterOf(ch);
      var chText = t('nav_chapter') + ' ' + ch + (c ? ' · ' + L(c.title) : '');
      box.appendChild(sep());
      box.appendChild(crumb(chapterHref(ch), document.createTextNode(chText), !lesson));
    }
    if (ch && lesson) {
      var c2 = chapterOf(ch);
      var ls = c2 && c2.lessons.filter(function (x) { return x.n === +lesson; })[0];
      var lText = t('lesson') + ' ' + lesson + (ls ? ' · ' + L(ls.title) : '');
      box.appendChild(sep());
      box.appendChild(crumb('#', document.createTextNode(lText), true));
    }
  }

  function linkBlock(dirLabel, title, href) {
    var a = document.createElement('a'); a.href = href;
    a.appendChild(el('span', 'dir', dirLabel));
    a.appendChild(el('span', 'title', title));
    return a;
  }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  function renderFooterNav() {
    var box = document.querySelector('nav.footer-nav[data-auto]');
    if (!box) return;
    var ch = box.getAttribute('data-chapter') || (document.body && document.body.getAttribute('data-chapter'));
    var lesson = +(box.getAttribute('data-lesson') || (document.body && document.body.getAttribute('data-lesson')));
    if (!ch || !lesson) return;
    var c = chapterOf(ch); if (!c) return;
    box.innerHTML = '';
    var rtl = (window.I18N && window.I18N.lang === 'ar');

    // previous
    var prev;
    if (lesson > 1) prev = linkBlock(t('prev_lesson'), (window.I18N ? t('lesson') : 'Lesson') + ' ' + (lesson - 1) + ' · ' + L(c.lessons[lesson - 2].title), lessonHref(ch, lesson - 1));
    else prev = linkBlock(t('back_to_chapter'), t('nav_chapter') + ' ' + ch, chapterHref(ch));
    prev.classList.add('prev');

    // next
    var next;
    if (lesson < c.lessons.length) next = linkBlock(t('next_lesson'), t('lesson') + ' ' + (lesson + 1) + ' · ' + L(c.lessons[lesson].title), lessonHref(ch, lesson + 1));
    else next = linkBlock(t('go_to_test'), t('chapter_test'), testHref(ch));
    next.classList.add('next');

    box.appendChild(prev);
    box.appendChild(next);
    void rtl;
  }

  function render() { renderBreadcrumbs(); renderFooterNav(); }

  function init() {
    render();
    document.addEventListener('i18n:change', render);
  }

  window.Nav = { init: init, render: render, hrefs: { home: homeHref, chapter: chapterHref, lesson: lessonHref, test: testHref } };
})();
