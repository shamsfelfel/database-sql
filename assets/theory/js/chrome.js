/* ============================================================
   The shell: top bar, side drawer, breadcrumbs, the previous /
   next pager, the on-this-page jump list, the reading-progress
   bar and the back-to-top button.

   All of it is built here rather than written into every page,
   so changing the shell is one edit and not eighteen. The page
   only has to say who it is, on <body>:

     <body data-chapter="t1" data-page="t1-lesson-03">

   Links are resolved through window.DBT_BASE - the number of ../
   that gets from this page back to the site root - so the same
   markup works at a domain root and in a Pages subpath.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;

  function base() { return window.DBT_BASE || ""; }
  function url(href) { return base() + href; }

  /* The chapter key ("t1", "p1"); empty on the course home page. */
  function chapterKey() { return body.getAttribute("data-chapter") || ""; }
  function pageId() { return body.getAttribute("data-page") || ""; }

  function L(entry) {
    if (!entry) return "";
    return window.I18N ? window.I18N.pick(entry) : (entry.en || "");
  }
  function t(k, v) { return window.I18N ? window.I18N.t(k, v) : k; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* A label written twice, so flipping language needs no re-render. */
  function bilingual(entry) {
    var frag = document.createDocumentFragment();
    frag.appendChild(el("span", "en", entry.en));
    frag.appendChild(el("span", "ar", entry.ar));
    return frag;
  }

  /* ---------------------------------------------------------- top bar */

  function buildTopbar() {
    var bar = el("header", "topbar");

    var menu = el("button", "btn", "☰");
    menu.id = "menuBtn";
    menu.setAttribute("aria-label", "menu");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-controls", "drawer");

    var brand = document.createElement("a");
    brand.className = "brand";
    brand.href = url("index.html");
    brand.appendChild(el("span", "dot"));
    var bt = el("span", "t");
    bt.setAttribute("data-ui", "brand");
    brand.appendChild(bt);

    var lang = el("button", "btn");
    lang.id = "langBtn";
    lang.setAttribute("aria-label", "language");

    var theme = el("button", "btn");
    theme.id = "themeBtn";
    theme.setAttribute("aria-label", "theme");
    theme.setAttribute("data-theme-label", "1");

    bar.appendChild(menu);
    bar.appendChild(brand);
    bar.appendChild(lang);
    bar.appendChild(theme);
    body.insertBefore(bar, body.firstChild);

    lang.onclick = function () { if (window.I18N) window.I18N.toggle(); };
    theme.onclick = function () { if (window.THEME) window.THEME.toggle(); };

    /* The language button names the language it switches *to*. */
    function syncLang() {
      lang.textContent = (window.I18N && window.I18N.lang === "ar") ? "EN" : "ع";
    }
    document.addEventListener("da:lang", syncLang);
    syncLang();
  }

  /* ---------------------------------------------------------- drawer */

  function buildDrawer() {
    var C = window.COURSE;
    if (!C) return;

    var scrim = el("div", "scrim");
    var drawer = el("nav", "drawer");
    drawer.id = "drawer";
    drawer.setAttribute("aria-label", "course");

    var heading = el("h2");
    heading.setAttribute("data-ui", "menu");
    drawer.appendChild(heading);

    var home = document.createElement("ol");
    home.className = "nv-top";
    var homeLi = el("li", "nv-home");
    var homeA = document.createElement("a");
    homeA.href = url("index.html");
    homeA.setAttribute("data-page-id", "home");
    homeA.appendChild(el("span", null, ""));
    homeA.firstChild.appendChild(bilingual({ en: "Course home", ar: "صفحة المقرر" }));
    homeLi.appendChild(homeA);
    home.appendChild(homeLi);
    drawer.appendChild(home);

    var list = document.createElement("ol");
    var pages = C.pages(chapterKey());
    var cur = C.chapter(chapterKey());
    if (cur) {
      var ch = el("h2");
      ch.appendChild(bilingual(cur.title));
      ch.className = "nv-chapter-title";
      drawer.appendChild(ch);
    }
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      var li = el("li", "nv-" + p.kind);
      var a = document.createElement("a");
      a.href = url(p.href);
      a.setAttribute("data-page-id", p.id);
      var span = el("span");
      span.appendChild(bilingual(p));
      a.appendChild(span);
      if (window.PROGRESS && window.PROGRESS.isSeen(chapterKey(), p.id)) {
        a.classList.add("seen");
      }
      if (p.id === pageId()) {
        a.classList.add("current");
        a.setAttribute("aria-current", "page");
      }
      li.appendChild(a);
      list.appendChild(li);
    }
    drawer.appendChild(list);

    /* Every chapter, grouped by track, so a reader can hop between the
       theory and the practical track without going back to the home page. */
    var all = el("div", "allchapters");
    var ah = el("h2");
    ah.setAttribute("data-ui", "chapters");
    all.appendChild(ah);
    for (var ti = 0; ti < C.tracks.length; ti++) {
      var tr = C.tracks[ti];
      var cs = C.chaptersOf(tr.id);
      if (!cs.length) continue;
      var th = el("p", "nv-track");
      th.setAttribute("data-ui", tr.id);
      all.appendChild(th);
      var tl = document.createElement("ul");
      for (var ci = 0; ci < cs.length; ci++) {
        var cli = document.createElement("li");
        var ca = document.createElement("a");
        ca.href = url(cs[ci].href);
        if (cs[ci].key === chapterKey()) ca.className = "current";
        var cn = el("b", null, cs[ci].track.charAt(0).toUpperCase() + cs[ci].num);
        ca.appendChild(cn);
        var cspan = el("span");
        cspan.appendChild(bilingual(cs[ci].title));
        ca.appendChild(cspan);
        cli.appendChild(ca);
        tl.appendChild(cli);
      }
      all.appendChild(tl);
    }
    drawer.appendChild(all);

    var jump = el("div", "jump");
    var jh = el("h2");
    jh.setAttribute("data-ui", "onpage");
    jump.appendChild(jh);
    var jl = document.createElement("ul");
    jl.id = "jumpList";
    jump.appendChild(jl);
    drawer.appendChild(jump);

    body.appendChild(scrim);
    body.appendChild(drawer);

    var menuBtn = document.getElementById("menuBtn");
    function toggle(open) {
      drawer.classList.toggle("open", open);
      scrim.classList.toggle("open", open);
      if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (menuBtn) {
      menuBtn.onclick = function () {
        toggle(!drawer.classList.contains("open"));
      };
    }
    scrim.onclick = function () { toggle(false); };
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggle(false);
    });
    /* A link inside the drawer either navigates away or jumps within
       this page; either way the drawer has done its job. */
    drawer.addEventListener("click", function (e) {
      var n = e.target;
      while (n && n !== drawer) {
        if (n.tagName === "A") { toggle(false); return; }
        n = n.parentNode;
      }
    });
  }

  /* The drawer's second half: every concept heading on this page,
     so a reader can land on a section instead of the page top. */
  function buildJumpList() {
    var list = document.getElementById("jumpList");
    if (!list) return;
    var hs = document.querySelectorAll("main h2[id], main h3[id]");
    list.innerHTML = "";
    for (var i = 0; i < hs.length; i++) {
      var en = hs[i].querySelector(".en"), ar = hs[i].querySelector(".ar");
      if (!en && !ar) continue;
      var li = el("li", hs[i].tagName.toLowerCase());
      var a = document.createElement("a");
      a.href = "#" + hs[i].id;
      var se = el("span", "en"); se.innerHTML = en ? en.innerHTML : "";
      var sa = el("span", "ar"); sa.innerHTML = ar ? ar.innerHTML : "";
      a.appendChild(se);
      a.appendChild(sa);
      li.appendChild(a);
      list.appendChild(li);
    }
  }

  /* ---------------------------------------------------------- breadcrumbs */

  function buildCrumbs() {
    var host = document.querySelector("main .crumbs");
    if (!host || !window.COURSE) return;
    var key = chapterKey();
    var id = pageId();
    var ch = window.COURSE.chapter(key);
    host.innerHTML = "";

    function crumb(href, text, current) {
      var node;
      if (current) {
        node = el("span", null, text);
        node.setAttribute("aria-current", "page");
      } else {
        node = document.createElement("a");
        node.href = href;
        node.textContent = text;
      }
      host.appendChild(node);
    }
    function sep() { host.appendChild(el("span", "sep", "›")); }

    crumb(url("index.html"), t("home"));
    if (!ch) return;

    sep();
    /* The site home is index.html (the SQL course); this track has a home of
       its own one level down, and that is what the track crumb points at. */
    crumb(url("theory/index.html"), t(ch.track));

    var onChapterHome = id === ch.key + "-chapter";
    sep();
    crumb(url(ch.href), t("chapter", { n: ch.num }) + " · " + L(ch.title), onChapterHome);
    if (onChapterHome) return;

    var p = window.COURSE.page(key, id);
    if (p) { sep(); crumb("#", L(p), true); }
  }

  /* ---------------------------------------------------------- pager */

  function buildPager() {
    var host = document.querySelector("main .pager");
    if (!host || !window.COURSE) return;
    var key = chapterKey();
    var list = window.COURSE.pages(key);
    var i = window.COURSE.indexOf(key, pageId());
    if (i < 0) return;

    host.innerHTML = "";
    host.appendChild(side("prev", list[i - 1]));
    host.appendChild(side("next", list[i + 1]));

    function side(dir, target) {
      var a = document.createElement("a");
      a.className = dir;
      if (!target) {
        /* The far ends of a chapter lead back out to this track's home. */
        a.href = url("theory/index.html");
        a.classList.add("edge");
        var m0 = el("span", "mini");
        m0.setAttribute("data-ui", dir);
        a.appendChild(m0);
        var s0 = el("span");
        s0.appendChild(bilingual({ en: "Track home", ar: "صفحة المسار" }));
        a.appendChild(s0);
        return a;
      }
      a.href = url(target.href);
      var mini = el("span", "mini");
      mini.setAttribute("data-ui", dir);
      a.appendChild(mini);
      var label = el("span");
      label.appendChild(bilingual(target));
      a.appendChild(label);
      return a;
    }
  }

  /* ---------------------------------------------------------- scroll furniture */

  function buildScrollBits() {
    var prog = el("div", "progress");
    prog.id = "prog";
    body.appendChild(prog);

    var top = el("button", "backtop", "↑");
    top.id = "backtop";
    top.setAttribute("aria-label", "top");
    top.onclick = function () { window.scrollTo(0, 0); };
    body.appendChild(top);

    function update() {
      var max = root.scrollHeight - root.clientHeight;
      var pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
      prog.style.width = pct + "%";
      top.classList.toggle("show", root.scrollTop > 700);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------------------------------------------------------- boot */

  function init() {
    buildTopbar();
    buildDrawer();
    buildCrumbs();
    buildPager();
    buildJumpList();
    buildScrollBits();

    /* Breadcrumbs and the pager hold text the shell owns, so they
       are rebuilt when the language flips. The drawer and the jump
       list carry both languages at once and need no rebuild.

       Rebuilding makes new [data-ui] elements, and I18N has already
       labelled the old ones by the time this fires, so the new ones
       are labelled here. */
    document.addEventListener("da:lang", function () {
      buildCrumbs();
      buildPager();
      if (window.I18N) window.I18N.relabel();
    });
  }

  window.CHROME = { init: init, buildJumpList: buildJumpList };
})();
