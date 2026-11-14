/* ============================================================
   The bootstrapper.

   Every page loads this last. It starts whichever engines that
   page happens to have loaded - a lesson has no question bank, a
   test has no execution lab - records the visit, and sets up the
   two progressive-web-app pieces: the service worker that makes
   the course work offline, and the Install button that appears
   when the browser says the course can be installed.

   Order matters once: language and theme go first, so nothing
   draws a label in the wrong language or paints the wrong theme.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------- service worker */

  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    /* Service workers need a secure context. From file:// the course
       still works - every asset is local - there is just no cache
       layer and no install prompt, so skip it quietly. */
    if (location.protocol !== "http:" && location.protocol !== "https:") return;

    var base = window.DBT_BASE || "";
    try {
      navigator.serviceWorker.register(base + "sw.js", { scope: base || "./" })
        ["catch"](function () {
          /* An unregistered worker costs offline use and nothing else. */
        });
    } catch (e) {}
  }

  /* ---------------------------------------------------------- install */

  /* Chrome and Edge fire beforeinstallprompt when the course passes
     the installability checks; we keep the event and offer a button
     in the top bar. iOS never fires it - there the route is
     Share -> Add to Home Screen - so no button appears and nothing
     claims otherwise. */
  function setupInstall() {
    var deferred = null;

    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferred = e;
      var bar = document.querySelector(".topbar");
      if (!bar || bar.querySelector("#installBtn")) return;

      var btn = document.createElement("button");
      btn.className = "btn install";
      btn.id = "installBtn";
      btn.type = "button";
      btn.setAttribute("data-ui", "install");
      btn.textContent = window.I18N ? window.I18N.t("install") : "Install";
      btn.onclick = function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.then(function () {
          deferred = null;
          if (btn.parentNode) btn.parentNode.removeChild(btn);
        });
      };
      var brand = bar.querySelector(".brand");
      if (brand && brand.nextSibling) bar.insertBefore(btn, brand.nextSibling);
      else bar.appendChild(btn);
    });

    window.addEventListener("appinstalled", function () {
      var b = document.getElementById("installBtn");
      if (b && b.parentNode) b.parentNode.removeChild(b);
    });
  }

  /* ---------------------------------------------------------- boot */

  function boot() {
    if (window.THEME) window.THEME.init();
    if (window.I18N) window.I18N.init();
    if (window.CHROME) window.CHROME.init();
    if (window.CODE) window.CODE.init();
    if (window.DBTAssess) window.DBTAssess.renderAll(document);
    if (window.DBTTrace) window.DBTTrace.mountAll(document);
    if (window.DBTGlossaryUI) window.DBTGlossaryUI.mountAll(document);
    if (window.HOME) window.HOME.init();

    /* The shell, the copy buttons and the home page all add labels the
       language owns, and all of them are built after I18N.init(). One
       pass now catches every one of them. */
    if (window.I18N) window.I18N.relabel();
    if (window.THEME) window.THEME.apply(window.THEME.current(), false);

    var body = document.body;
    var id = body.getAttribute("data-page");
    if (id && window.PROGRESS) {
      window.PROGRESS.record(body.getAttribute("data-chapter") || "", id);
    }

    registerSW();
    setupInstall();

    /* The e2e suite waits on this instead of a fixed timeout. */
    body.setAttribute("data-booted", "1");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
