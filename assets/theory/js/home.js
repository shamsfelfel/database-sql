/* ============================================================
   The two index pages - the course home and a chapter home.

   Both are static HTML; this only fills in the parts that depend
   on what the reader has already done: the "continue where you
   stopped" link, the progress line on each chapter card, and the
   ticks and scores beside the lessons and tests of the open
   chapter. With an empty localStorage every one of these hides
   itself, so a first visit shows a clean page and not a row of
   zeroes.
   ============================================================ */
(function () {
  "use strict";

  function base() { return window.DBT_BASE || ""; }
  function L(e) { return window.I18N ? window.I18N.pick(e) : (e && e.en) || ""; }
  function t(k, v) { return window.I18N ? window.I18N.t(k, v) : k; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* ---------------------------------------------------------- resume */

  function fillResume() {
    var host = document.getElementById("resume");
    if (!host || !window.PROGRESS || !window.COURSE) return;
    var last = window.PROGRESS.last();
    if (!last) { host.hidden = true; return; }
    var p = window.COURSE.page(last.chapter, last.id);
    if (!p) { host.hidden = true; return; }

    host.hidden = false;
    host.innerHTML = "";
    var a = document.createElement("a");
    a.className = "resume-link";
    a.href = base() + p.href;
    var lead = el("span", "mini");
    lead.setAttribute("data-ui", "resume");
    lead.textContent = t("resume");
    a.appendChild(lead);
    var name = el("span", "t");
    name.appendChild(el("span", "en", p.en));
    name.appendChild(el("span", "ar", p.ar));
    a.appendChild(name);
    host.appendChild(a);
  }

  /* ---------------------------------------------------------- chapter cards */

  function fillChapterCards() {
    var cards = document.querySelectorAll("[data-chapter-progress]");
    if (!window.PROGRESS) return;
    for (var i = 0; i < cards.length; i++) {
      var key = cards[i].getAttribute("data-chapter-progress");
      var p = window.PROGRESS.chapterProgress(key);
      if (!p.total || !p.done) { cards[i].hidden = true; continue; }
      cards[i].hidden = false;
      cards[i].innerHTML = "";
      var bar = el("span", "bar");
      var fill = el("span", "fill");
      fill.style.width = p.pct + "%";
      bar.appendChild(fill);
      cards[i].appendChild(bar);
      cards[i].appendChild(el("span", "n", p.done + " / " + p.total));
    }
  }

  /* ---------------------------------------------------------- chapter page */

  /* Each lesson card on a chapter page gets a tick once opened, and
     each test card the score of its bank once answered. */
  function fillChapterPage() {
    if (!window.PROGRESS || !window.COURSE) return;
    var key = document.body.getAttribute("data-chapter") || "";

    var marks = document.querySelectorAll("[data-page-state]");
    for (var i = 0; i < marks.length; i++) {
      var id = marks[i].getAttribute("data-page-state");
      var p = window.COURSE.page(key, id);
      if (!p) continue;

      if (p.bank) {
        var score = window.PROGRESS.bankScore(p.bank);
        if (!score) { marks[i].hidden = true; continue; }
        marks[i].hidden = false;
        marks[i].textContent = score.right + " / " + score.done;
        marks[i].className = "state score-chip";
      } else if (window.PROGRESS.isSeen(key, id)) {
        marks[i].hidden = false;
        marks[i].textContent = "✓";
        marks[i].className = "state seen-chip";
      } else {
        marks[i].hidden = true;
      }
    }
  }

  /* ---------------------------------------------------------- roadmap */

  /* The chapters still to be written, listed from the same registry
     the finished ones come from so the two can never drift apart. One
     list per track: <ol id="roadmap-theory"> and <ol id="roadmap-practical">.

     Two kinds of chapter belong here, and the difference matters. A chapter
     in `planned` has a number and a title and nothing else. A chapter that is
     already in `chapters` with ready:false has its pages registered -- they
     build, they deploy, its author reads them in a browser -- but the course
     does not offer it yet. Listing only `planned` once left a hole in the road
     where a chapter was being written: the track jumped from 1 to 3. So the
     road is both, by number, and a chapter leaves it by becoming ready, which
     is the same moment it joins the grid above. Nothing to remember by hand. */
  function roadAhead(trackId) {
    var out = [];
    var planned = (window.COURSE.planned || []);
    var chapters = (window.COURSE.chapters || []);
    var i;
    for (i = 0; i < chapters.length; i++) {
      if (chapters[i].track === trackId && !chapters[i].ready) out.push(chapters[i]);
    }
    for (i = 0; i < planned.length; i++) {
      if (planned[i].track === trackId) out.push(planned[i]);
    }
    out.sort(function (a, b) { return a.num - b.num; });
    return out;
  }

  /* What to put on the right of a road-ahead row. A chapter that is only
     planned has nothing to report. One that is registered and being written
     does: its lessons land before its tests, and a reader can start the
     moment the first lesson is up, so say how many are ready rather than
     "being written" over a chapter that is two thirds readable. The label is
     rebuilt on a language change like every other, through data-ui. */
  function progressTag(ch) {
    var tag = el("span", "soon");
    var pages = ch.pages || [];
    var total = 0, done = 0;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].kind !== "lesson") continue;
      total++;
      if (pages[i].written) done++;
    }
    if (!total || !done) {
      tag.setAttribute("data-ui", "soon");
      tag.textContent = t("soon");
      return tag;
    }
    var key = done === total ? "partAll" : "partLessons";
    tag.className = "soon part";
    tag.setAttribute("data-ui", key);
    tag.setAttribute("data-a", String(done));
    tag.setAttribute("data-b", String(total));
    tag.textContent = t(key).replace("{a}", done).replace("{b}", total);
    return tag;
  }

  function fillRoadmap() {
    if (!window.COURSE) return;
    var hosts = document.querySelectorAll("[data-roadmap]");
    for (var h = 0; h < hosts.length; h++) {
      var host = hosts[h];
      var trackId = host.getAttribute("data-roadmap");
      var ahead = roadAhead(trackId);
      host.innerHTML = "";
      for (var i = 0; i < ahead.length; i++) {
        var li = el("li");
        li.appendChild(el("span", "n", String(ahead[i].num)));
        var name = el("span", "t");
        name.appendChild(el("span", "en", ahead[i].title.en));
        name.appendChild(el("span", "ar", ahead[i].title.ar));
        li.appendChild(name);
        li.appendChild(progressTag(ahead[i]));
        host.appendChild(li);
      }
    }
  }

  function init() {
    fillResume();
    fillChapterCards();
    fillChapterPage();
    fillRoadmap();
    document.addEventListener("da:lang", fillResume);
  }

  window.HOME = { init: init };
})();
