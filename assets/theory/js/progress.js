/* ============================================================
   Progress.

   Three things are remembered, all of them in localStorage and
   none of them anywhere else - nothing is sent off the device:

     da.seen    pages opened, so the drawer and the chapter page
                 can tick off what has been read
     da.last    the last page opened, for "continue where you
                 stopped" on the home page
     da.answers written by the assessment engine, one entry per
                 bank; read back here only to show a test's score

   A page records itself on load. Marking a page seen is cheap and
   idempotent, so there is no "mark complete" button to forget.
   ============================================================ */
(function () {
  "use strict";

  var SEEN = "dbt.seen";
  var LAST = "dbt.last";

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function seen() { return read(SEEN, {}) || {}; }

  function key(chapter, id) { return chapter + ":" + id; }

  function isSeen(chapter, id) { return !!seen()[key(chapter, id)]; }

  function markSeen(chapter, id) {
    var s = seen();
    if (s[key(chapter, id)]) return;
    s[key(chapter, id)] = 1;
    write(SEEN, s);
  }

  /* {chapter, id} of the last page opened, or null on a first visit. */
  function last() {
    var v = read(LAST, null);
    return v && v.id ? v : null;
  }
  function setLast(chapter, id) { write(LAST, { chapter: chapter, id: id }); }

  /* The assessment engine stores one object per bank, keyed by question
     id. The keys are short because the whole bank is one localStorage
     value: `k` is the verdict ("right" | "wrong" | "part" | "shown"),
     and the rest is what the reader entered. A bank that was never
     opened has no entry at all, and a question cleared is set to null. */
  function bankScore(bank) {
    var state = read("dbt.bank." + bank, null);
    if (!state) return null;
    var done = 0, right = 0;
    for (var q in state) {
      if (!Object.prototype.hasOwnProperty.call(state, q)) continue;
      if (!state[q] || !state[q].k) continue;
      done++;
      if (state[q].k === "right") right++;
    }
    return done ? { done: done, right: right } : null;
  }

  /* `key` is the chapter key ("t1", "p1").
     How far through a chapter the reader is: lessons opened over
     lessons that exist. Tests and the lab are not counted - they
     are optional on a first pass. */
  function chapterProgress(key) {
    var list = (window.COURSE && window.COURSE.pages(key)) || [];
    var total = 0, done = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].kind !== "lesson") continue;
      total++;
      if (isSeen(key, list[i].id)) done++;
    }
    return { done: done, total: total, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function reset() {
    try {
      localStorage.removeItem(SEEN);
      localStorage.removeItem(LAST);
    } catch (e) {}
  }

  /* Called by app.js once the page knows which page it is. */
  function record(chapter, id) {
    if (!id) return;
    markSeen(chapter, id);
    setLast(chapter, id);
  }

  window.PROGRESS = {
    record: record,
    isSeen: isSeen,
    markSeen: markSeen,
    last: last,
    bankScore: bankScore,
    chapterProgress: chapterProgress,
    reset: reset
  };
})();
