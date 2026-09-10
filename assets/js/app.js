/* app.js — tiny bootstrapper. Initializes whichever engines a page loaded,
   wires the header language/theme toggles, and sets up tab panels. Every engine
   is optional: pages that don't include widget/questions still boot cleanly. */
(function () {
  'use strict';

  function wireToggles() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-action]');
      if (!t) return;
      var action = t.getAttribute('data-action');
      if (action === 'toggle-lang' && window.I18N) { window.I18N.toggle(); }
      else if (action === 'toggle-theme' && window.THEME) { window.THEME.toggle(); }
    });
    // keep theme-toggle labels in sync
    function syncThemeLabel() {
      document.querySelectorAll('[data-action="toggle-theme"] .theme-label').forEach(function (lbl) {
        var next = (window.THEME && window.THEME.current() === 'dark') ? 'theme_toggle_light' : 'theme_toggle_dark';
        lbl.setAttribute('data-i18n', next);
        lbl.textContent = window.I18N ? window.I18N.t(next) : next;
      });
    }
    document.addEventListener('theme:change', syncThemeLabel);
    document.addEventListener('i18n:change', syncThemeLabel);
    syncThemeLabel();
  }

  /* Generic tabs: a container with role="tablist" holding [role="tab"] buttons
     whose aria-controls points at [role="tabpanel"] ids. */
  function initTabs(root) {
    (root || document).querySelectorAll('[role="tablist"]').forEach(function (list) {
      if (list.__tabs) return; list.__tabs = true;
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
      function select(tab) {
        tabs.forEach(function (t) {
          var sel = t === tab;
          t.setAttribute('aria-selected', sel ? 'true' : 'false');
          t.tabIndex = sel ? 0 : -1;
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !sel;
        });
      }
      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(tab); });
        tab.addEventListener('keydown', function (e) {
          var idx = i;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') idx = (i + 1) % tabs.length;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') idx = (i - 1 + tabs.length) % tabs.length;
          else return;
          e.preventDefault(); tabs[idx].focus(); select(tabs[idx]);
        });
      });
      var initial = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
      if (initial) select(initial);
    });
  }

  function boot() {
    if (window.I18N) window.I18N.init();
    if (window.THEME) window.THEME.init();
    wireToggles();
    initTabs(document);
    if (window.SqlWidgets) window.SqlWidgets.initAll(document);
    if (window.Questions) window.Questions.initAll(document);
    if (window.Nav) window.Nav.init();
    if (window.Index && window.Index.init) window.Index.init();
    if (typeof window.PageInit === 'function') window.PageInit();
    document.body.setAttribute('data-booted', '1');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.App = { initTabs: initTabs };
})();
