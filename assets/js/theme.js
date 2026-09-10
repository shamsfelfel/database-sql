/* theme.js — light/dark engine.
   System preference by default; an explicit override is stored in localStorage
   and reflected as a [data-theme] attribute on <html> (see tokens.css).
   A head inline script applies the stored override pre-paint to avoid a flash.
   Exposes window.THEME; emits 'theme:change' on document. */
(function () {
  'use strict';

  var LS_KEY = 'sqllab.theme';

  function read() {
    try { return localStorage.getItem(LS_KEY); } catch (e) { return null; }
  }
  function write(v) {
    try {
      if (v) localStorage.setItem(LS_KEY, v);
      else localStorage.removeItem(LS_KEY);
    } catch (e) {}
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* The effective theme currently shown. */
  function current() {
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return systemPrefersDark() ? 'dark' : 'light';
  }

  /* mode: 'light' | 'dark' | null (follow system) */
  function apply(mode) {
    var root = document.documentElement;
    if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode);
    else root.removeAttribute('data-theme');
  }

  function set(mode) {
    apply(mode);
    write(mode);
    document.dispatchEvent(new CustomEvent('theme:change', { detail: { theme: current() } }));
  }

  function toggle() {
    set(current() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(read());
    // Follow the system when there is no explicit override.
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () {
        if (!read()) document.dispatchEvent(new CustomEvent('theme:change', { detail: { theme: current() } }));
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  window.THEME = { init: init, set: set, toggle: toggle, current: current };
})();
