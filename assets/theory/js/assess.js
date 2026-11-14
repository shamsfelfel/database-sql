/* ============================================================
   Assessment engine.

   Question banks are data (assets/theory/data/questions/*.js ->
   window.DBTBanks); this file turns them into cards, grades them,
   remembers the answers and reports which topics are weak.

   Fourteen authored question types ride on eight interaction
   primitives, so there are eight widgets and not fourteen:

     choice    mcq · multi · tf · compare · complete · output(choice)
               · trace(choice) · error(choice)
     text      fill · output(typed) · trace(typed) · complete(blanks)
     order     order · ordercode
     match     match
     pickline  error
     contrast  contrast
     write     write

   Every card shows its difficulty and the topics it covers, each
   topic linking back to the exact heading that teaches it. A wrong,
   partial or revealed answer repeats those links as "Review".
   A hint (hidden until asked) never touches the grade.
   Explanation and worked solution are <details>, closed on load.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------- i18n */

  var UI = {
    check:    { en: "Check", ar: "تحقّق" },
    recheck:  { en: "Check again", ar: "أعد التحقّق" },
    showme:   { en: "Show the answer", ar: "أظهر الجواب" },
    clear:    { en: "Clear", ar: "أفرغ" },
    hint:     { en: "Hint", ar: "تلميح" },
    hintOff:  { en: "Hide hint", ar: "أخفِ التلميح" },
    qword:    { en: "question", ar: "السؤال" },
    why:      { en: "Why", ar: "لماذا" },
    sol:      { en: "Worked solution", ar: "الحل المفصّل" },
    ok:       { en: "Correct.", ar: "صحيح." },
    no:       { en: "Not right.", ar: "غير صحيح." },
    part:     { en: "Partly right — {a} of {b} pieces.", ar: "صحيح جزئيًا — {a} من {b}." },
    revealed: { en: "Answer shown — this one is not counted.", ar: "تم إظهار الجواب — لا تُحسب هذه." },
    pickone:  { en: "Choose an answer first.", ar: "اختر جوابًا أولًا." },
    typeone:  { en: "Type an answer first.", ar: "اكتب جوابًا أولًا." },
    writeone: { en: "Write some code first.", ar: "اكتب بعض الكود أولًا." },
    orderall: { en: "Place every line first.", ar: "ضع كل السطور أولًا." },
    matchall: { en: "Match every pair first.", ar: "وصّل كل الأزواج أولًا." },
    pickline: { en: "Click the line you think is wrong.", ar: "انقر السطر الذي تظنه خطأ." },
    pickmany: { en: "If several lines are wrong, click each of them.",
                ar: "إن كان أكثر من سطر خطأ فانقر كل واحد منها." },
    covers:   { en: "Covers:", ar: "يغطي:" },
    review:   { en: "Review:", ar: "راجع:" },
    tally:    { en: "<b>{d}</b> of <b>{t}</b> answered &middot; <b>{r}</b> correct",
                ar: "أُجيب عن <b>{d}</b> من <b>{t}</b> &middot; <b>{r}</b> صحيحة" },
    checkall: { en: "Check everything", ar: "تحقّق من الكل" },
    resetall: { en: "Start over", ar: "ابدأ من جديد" },
    all:      { en: "All", ar: "الكل" },
    lvEasy:   { en: "Easy", ar: "سهل" },
    lvMedium: { en: "Medium", ar: "متوسط" },
    lvHard:   { en: "Hard", ar: "صعب" },
    unseen:   { en: "Unanswered", ar: "بلا إجابة" },
    missed:   { en: "Missed", ar: "الأخطاء" },
    resTitle: { en: "Your result", ar: "نتيجتك" },
    resSub:   { en: "{r} correct out of {t} answered ({p}%).",
                ar: "{r} صحيحة من {t} مُجابة ({p}%)." },
    byLevel:  { en: "By difficulty", ar: "حسب المستوى" },
    byTopic:  { en: "By topic", ar: "حسب الموضوع" },
    weak:     { en: "Worth re-reading before you move on",
                ar: "يستحق إعادة القراءة قبل أن تكمل" },
    strongAll:{ en: "Nothing stands out as weak. Go on to the next lesson.",
                ar: "لا يوجد ضعف واضح. تابع إلى الدرس التالي." },
    level:    { en: "Level", ar: "المستوى" },
    topic:    { en: "Topic", ar: "الموضوع" },
    right:    { en: "Correct", ar: "صحيح" },
    asked:    { en: "Asked", ar: "المطروح" },
    yourpick: { en: "Your answer", ar: "جوابك" },
    correctis:{ en: "Correct answer", ar: "الجواب الصحيح" },
    blank:    { en: "blank {n}", ar: "الفراغ {n}" },
    codeA:    { en: "Version A", ar: "النسخة أ" },
    codeB:    { en: "Version B", ar: "النسخة ب" },
    pool:     { en: "Available lines", ar: "السطور المتاحة" },
    slots:    { en: "Your order", ar: "ترتيبك" },
    trueL:    { en: "True", ar: "صح" },
    falseL:   { en: "False", ar: "خطأ" },
    both:     { en: "Both", ar: "كلاهما" },
    neither:  { en: "Neither", ar: "لا هذا ولا ذاك" },
    contrastHint: { en: "For each statement, choose the concept it describes.",
                    ar: "لكل عبارة، اختر المفهوم الذي تصفه." },
    writeHint:{ en: "Tab inserts 4 spaces. To leave the box with the keyboard, press Esc and then Tab.",
                ar: "مفتاح Tab يُدخل 4 مسافات. للخروج من الصندوق بلوحة المفاتيح اضغط Esc ثم Tab." },
    writeLabel:{ en: "Your code", ar: "الكود الخاص بك" },
    needs:    { en: "What your code needs", ar: "ما يحتاجه كودك" },
    avoid:    { en: "Avoid", ar: "تجنّب" },
    met:      { en: "met", ar: "متحقّق" },
    missing:  { en: "missing", ar: "ناقص" },
    used:     { en: "used", ar: "مستخدم" },
    outHint:  { en: "Type exactly what the program prints, one line per line of output.",
                ar: "اكتب ما يطبعه البرنامج بالضبط، سطرًا لكل سطر مُخرَج." }
  };

  /* All fourteen question types, as the chip on every card names them. */
  var TYPES = {
    tf:        { en: "True / False",             ar: "صح أو خطأ" },
    mcq:       { en: "Multiple choice",          ar: "اختيار من متعدد" },
    multi:     { en: "Choose all that apply",    ar: "اختر كل ما ينطبق" },
    fill:      { en: "Fill in the blank",        ar: "أكمل الفراغ" },
    order:     { en: "Put in order",             ar: "رتّب الخطوات" },
    ordercode: { en: "Order the code statements", ar: "رتّب أسطر الكود" },
    match:     { en: "Match the pairs",          ar: "وصّل بين العمودين" },
    error:     { en: "Find the error",           ar: "اعثر على الخطأ" },
    complete:  { en: "Complete the code",        ar: "أكمل الكود" },
    compare:   { en: "Compare two versions",     ar: "قارن بين نسختين" },
    contrast:  { en: "Compare and contrast",     ar: "قارن وميّز" },
    output:    { en: "Write the output",         ar: "اكتب المُخرَج" },
    trace:     { en: "Trace the value",          ar: "تتبّع القيمة" },
    write:     { en: "Write the code",           ar: "اكتب الكود" }
  };

  var LEVELS = {
    easy:   { en: "Easy",   ar: "سهل" },
    medium: { en: "Medium", ar: "متوسط" },
    hard:   { en: "Hard",   ar: "صعب" }
  };

  function lang() {
    return document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en";
  }
  function L(k) { return (UI[k] || { en: k, ar: k })[lang()]; }
  /* Both languages as spans, for labels that are written into markup
     once and must survive a language switch without being re-rendered. */
  function LB(k) {
    var o = UI[k] || { en: k, ar: k };
    return '<span class="en">' + o.en + '</span><span class="ar">' + o.ar + "</span>";
  }
  /* The same, with {n} filled in. */
  function LBn(k, n) {
    var o = UI[k] || { en: k, ar: k };
    return '<span class="en">' + o.en.replace("{n}", n) + '</span><span class="ar">' +
           o.ar.replace("{n}", n) + "</span>";
  }
  function pick(o) { return o ? (o[lang()] || o.en || "") : ""; }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escA(s) { return esc(s).replace(/"/g, "&quot;"); }
  function bi(o) {
    if (!o) return "";
    if (typeof o === "string") return esc(o);
    return '<span class="en">' + (o.en || "") + "</span>" +
           '<span class="ar">' + (o.ar || "") + "</span>";
  }

  /* Arabic number agreement: 1 / 2 / 3-10 / 11+ each take a different form. */
  function arCount(n, one, two, few, many) {
    if (n === 1) return one;
    if (n === 2) return two;
    return n + " " + (n >= 3 && n <= 10 ? few : many);
  }
  function countLabel(n, kind) {
    var en, ar;
    if (kind === "types") {
      en = n + " question type" + (n === 1 ? "" : "s");
      ar = arCount(n, "نوع واحد من الأسئلة", "نوعان من الأسئلة", "أنواع من الأسئلة", "نوعًا من الأسئلة");
    } else {
      en = n + " question" + (n === 1 ? "" : "s");
      ar = arCount(n, "سؤال واحد", "سؤالان", "أسئلة", "سؤالًا");
    }
    return '<span class="en">' + en + '</span><span class="ar">' + ar + "</span>";
  }

  /* ---------------------------------------------------------- code */

  /* Highlight through the site's highlighter when it exists (code.js);
     plain escaped text when it does not, or when it throws. */
  function hl(src, lang) {
    var f = window.DBTHighlight;
    if (typeof f === "function") {
      try {
        var r = f(src, lang);
        if (typeof r === "string") return r;
      } catch (e) { /* fall through to plain text */ }
    }
    return esc(src);
  }
  function trimCode(src) {
    return String(src == null ? "" : src).replace(/^\n/, "").replace(/\s+$/, "");
  }
  function codeBlock(src, extra, lg) {
    return '<pre class="code' + (extra ? " " + extra : "") + '" dir="ltr"' +
           (lg ? ' data-lang="' + escA(lg) + '"' : "") + '><code data-done="1">' +
           hl(trimCode(src), lg) + "</code></pre>";
  }
  /* One line reads best as inline code; several need a block. */
  function codeInline(src, lg) {
    var s = trimCode(src);
    if (s.indexOf("\n") > -1) return codeBlock(s, "good", lg);
    return "<code>" + esc(s) + "</code>";
  }

  /* ---------------------------------------------------------- storage */

  function load(key) {
    try {
      var raw = localStorage.getItem("dbt.bank." + key);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function save(key, obj) {
    try { localStorage.setItem("dbt.bank." + key, JSON.stringify(obj)); } catch (e) {}
  }

  /* ---------------------------------------------------------- topics */

  /* A topic chip links to the heading that teaches the idea. That
     heading usually lives on another page, so the anchor id is resolved
     through the map the build writes (assets/theory/js/anchors.js) and
     prefixed with the path back to the site root. An id the map does
     not know is left as a plain in-page anchor rather than dropped,
     so a half-built chapter still renders. */
  function topicHref(anchor) {
    var map = window.DBTAnchors || {};
    var page = map[anchor];
    if (!page) return "#" + anchor;
    var here = (document.body && document.body.getAttribute("data-path")) || "";
    if (page === here) return "#" + anchor;
    return (window.DBT_BASE || "") + page + "#" + anchor;
  }

  /* The <a> elements for a list of topic keys; "" when none resolves. */
  function topicLinks(ids) {
    var reg = window.DBTTopics || {};
    var h = "";
    if (!ids || !ids.length) return h;
    for (var i = 0; i < ids.length; i++) {
      var t = reg[ids[i]];
      if (!t) continue;
      h += '<a href="' + escA(topicHref(t.href)) + '">' + bi(t) + "</a>";
    }
    return h;
  }

  function topicChips(ids) {
    var links = topicLinks(ids);
    if (!links) return "";
    return '<div class="qtopics"><span>' + LB("covers") + "</span>" + links + "</div>";
  }

  /* ---------------------------------------------------------- helpers */

  function normLine(s) {
    return String(s == null ? "" : s).replace(/\s+/g, " ").trim();
  }
  function normOut(s) {
    var rows = String(s == null ? "" : s).replace(/\r/g, "").split("\n");
    var out = [];
    for (var i = 0; i < rows.length; i++) out.push(rows[i].replace(/\s+$/, "").replace(/^\s+/, ""));
    while (out.length && out[out.length - 1] === "") out.pop();
    while (out.length && out[0] === "") out.shift();
    return out.join("\n");
  }
  function accepts(list, given, asOutput) {
    var g = asOutput ? normOut(given) : normLine(given);
    for (var i = 0; i < list.length; i++) {
      var w = asOutput ? normOut(list[i]) : normLine(list[i]);
      if (w === g) return true;
    }
    return false;
  }
  /* Deterministic per-question shuffle: the pool looks mixed but does
     not jump around when the card re-renders or the language flips. */
  function shuffled(n, seedText) {
    var idx = [], i;
    for (i = 0; i < n; i++) idx.push(i);
    var seed = 0;
    for (i = 0; i < seedText.length; i++) seed = (seed * 31 + seedText.charCodeAt(i)) % 2147483647;
    function rnd() { seed = (seed * 1103515245 + 12345) % 2147483647; return seed / 2147483647; }
    for (i = n - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
    }
    return idx;
  }
  function touched(host) {
    host.dispatchEvent(new CustomEvent("qtouch", { bubbles: true }));
  }
  function up(n, host, tag) {
    while (n && n !== host && n.tagName !== tag) n = n.parentNode;
    return (!n || n === host) ? null : n;
  }

  /* ========================================================== widgets
     Each widget exposes the same contract:
       read()            -> payload or null when nothing is entered
       write(payload)    -> restore a payload
       grade(payload)    -> { right, got, total }
       mark(payload)     -> paint right/wrong on the controls
       reveal()          -> show the correct answer
       clear()           -> back to untouched
       lock(bool)        -> disable/enable input
       answerHtml()      -> the correct answer, for the verdict line
       empty             -> UI key of the "nothing entered" message
     Optional:
       keepOpen          -> stays editable after a check (write)
       unmark()          -> drop the right/wrong paint (write)
       relabel()         -> refresh aria labels after a language flip
  */

  function wChoice(q, host) {
    var multi = q.type === "multi" || q.multi === true;
    var opts = q.options || [];
    var ans = multi ? (q.answer || []).slice().sort() : [q.answer];
    var order = q.noshuffle ? shuffled(opts.length, "x").sort(function (a, b) { return a - b; })
                            : shuffled(opts.length, q.id);
    var h = '<ul class="answers" data-multi="' + (multi ? 1 : 0) + '">';
    for (var i = 0; i < order.length; i++) {
      var oi = order[i];
      var o = opts[oi];
      var body = (o && typeof o === "object" && (o.en || o.ar)) ? bi(o)
               : (o && o.code != null) ? codeBlock(o.code, "", q.lang) : esc(o);
      h += '<li><button type="button" class="opt" aria-pressed="false" data-i="' + oi + '">' +
           '<span class="tick" aria-hidden="true"></span><span class="ob">' + body + "</span></button></li>";
    }
    host.innerHTML = h + "</ul>";
    var btns = host.querySelectorAll(".opt");

    host.addEventListener("click", function (e) {
      var n = e.target;
      while (n && n !== host && !(n.classList && n.classList.contains("opt"))) n = n.parentNode;
      if (!n || n === host || n.disabled) return;
      var on = n.getAttribute("aria-pressed") === "true";
      if (multi) {
        n.setAttribute("aria-pressed", on ? "false" : "true");
      } else {
        for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-pressed", "false");
        n.setAttribute("aria-pressed", "true");
      }
      touched(host);
    });

    function read() {
      var got = [];
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].getAttribute("aria-pressed") === "true") {
          got.push(parseInt(btns[i].getAttribute("data-i"), 10));
        }
      }
      return got.length ? got.sort() : null;
    }
    return {
      read: read,
      write: function (p) {
        if (!p) return;
        for (var i = 0; i < btns.length; i++) {
          var at = parseInt(btns[i].getAttribute("data-i"), 10);
          btns[i].setAttribute("aria-pressed", p.indexOf(at) > -1 ? "true" : "false");
        }
      },
      grade: function (p) {
        p = p || [];
        var hit = 0, bad = 0, i;
        for (i = 0; i < p.length; i++) (ans.indexOf(p[i]) > -1 ? hit++ : bad++);
        return { right: hit === ans.length && bad === 0, got: Math.max(0, hit - bad), total: ans.length };
      },
      mark: function (p) {
        p = p || [];
        for (var i = 0; i < btns.length; i++) {
          var at = parseInt(btns[i].getAttribute("data-i"), 10);
          var isA = ans.indexOf(at) > -1, chose = p.indexOf(at) > -1;
          btns[i].classList.toggle("right", isA);
          btns[i].classList.toggle("wrong", chose && !isA);
        }
      },
      reveal: function () {
        for (var i = 0; i < btns.length; i++) {
          var at = parseInt(btns[i].getAttribute("data-i"), 10);
          btns[i].classList.toggle("right", ans.indexOf(at) > -1);
          btns[i].setAttribute("aria-pressed", ans.indexOf(at) > -1 ? "true" : "false");
        }
      },
      clear: function () {
        for (var i = 0; i < btns.length; i++) {
          btns[i].setAttribute("aria-pressed", "false");
          btns[i].classList.remove("right", "wrong");
        }
      },
      lock: function (on) {
        for (var i = 0; i < btns.length; i++) btns[i].disabled = !!on;
      },
      answerHtml: function () {
        var out = [];
        for (var i = 0; i < ans.length; i++) {
          var o = opts[ans[i]];
          out.push((o && typeof o === "object" && (o.en || o.ar)) ? bi(o)
                 : (o && o.code != null) ? codeInline(o.code, q.lang) : esc(o));
        }
        return out.join(" &nbsp;+&nbsp; ");
      },
      empty: "pickone"
    };
  }

  function wText(q, host) {
    var blanks = q.blanks || [];
    var asOutput = q.type === "output";
    var stemId = "qt-" + q.id;
    var h = '<div class="fills">';
    if (asOutput) h += '<p class="fill-hint">' + LB("outHint") + "</p>";
    for (var i = 0; i < blanks.length; i++) {
      var b = blanks[i];
      var labId = "bl-" + q.id + "-" + i;
      var lab = b.label ? bi(b.label) : (blanks.length > 1 ? LBn("blank", i + 1) : "");
      var named = ' aria-labelledby="' + (lab ? labId + " " : "") + stemId + '"';
      h += '<div class="fill-row">' + (lab ? '<span class="lab" id="' + labId + '">' + lab + "</span>" : "");
      if (b.lines) {
        h += '<textarea class="fillin" data-i="' + i + '" spellcheck="false" dir="ltr" rows="' +
             b.lines + '"' + named + "></textarea>";
      } else {
        h += '<input class="fillin' + (b.wide ? " wide" : "") + '" type="text" data-i="' + i +
             '" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off" dir="ltr"' +
             named + (b.ph ? ' placeholder="' + escA(b.ph) + '"' : "") + ">";
      }
      h += "</div>";
      if (b.hint) h += '<p class="fill-hint">' + bi(b.hint) + "</p>";
    }
    host.innerHTML = h + "</div>";
    var ins = host.querySelectorAll(".fillin");
    host.addEventListener("input", function () { touched(host); });

    function read() {
      var v = [], any = false;
      for (var i = 0; i < ins.length; i++) {
        v.push(ins[i].value);
        if (String(ins[i].value).trim()) any = true;
      }
      return any ? v : null;
    }
    return {
      read: read,
      write: function (p) {
        if (!p) return;
        for (var i = 0; i < ins.length && i < p.length; i++) ins[i].value = p[i];
      },
      grade: function (p) {
        p = p || [];
        var hit = 0;
        for (var i = 0; i < blanks.length; i++) {
          if (accepts(blanks[i].accept, p[i], asOutput || blanks[i].lines)) hit++;
        }
        return { right: hit === blanks.length, got: hit, total: blanks.length };
      },
      mark: function (p) {
        p = p || [];
        for (var i = 0; i < ins.length; i++) {
          var ok = accepts(blanks[i].accept, p[i], asOutput || blanks[i].lines);
          ins[i].classList.toggle("right", ok);
          ins[i].classList.toggle("wrong", !ok);
        }
      },
      reveal: function () {
        for (var i = 0; i < ins.length; i++) {
          ins[i].value = blanks[i].accept[0];
          ins[i].classList.add("right");
          ins[i].classList.remove("wrong");
        }
      },
      clear: function () {
        for (var i = 0; i < ins.length; i++) {
          ins[i].value = "";
          ins[i].classList.remove("right", "wrong");
        }
      },
      lock: function (on) {
        for (var i = 0; i < ins.length; i++) ins[i].readOnly = !!on;
      },
      answerHtml: function () {
        var out = [];
        for (var i = 0; i < blanks.length; i++) {
          out.push(codeInline(blanks[i].accept[0], q.lang));
        }
        return out.join(blanks.length > 1 ? " &middot; " : "");
      },
      empty: "typeone"
    };
  }

  /* order and ordercode: the same widget. An item that carries `code`
     is drawn as a monospace, left-to-right tile (one statement, or a
     few lines of one); any other item is bilingual prose. */
  function wOrder(q, host) {
    var items = q.items || [];
    var ans = q.answer;
    if (!ans) {
      ans = [];
      for (var a = 0; a < items.length; a++) ans.push(a);
    }
    var isCode = q.type === "ordercode";
    for (var c = 0; c < items.length; c++) if (items[c] && items[c].code != null) isCode = true;

    var order = shuffled(items.length, q.id + "o");
    /* never present the pool already in the right order */
    if (order.length > 1 && order.length === ans.length) {
      var same = true;
      for (var k = 0; k < ans.length; k++) if (order[k] !== ans[k]) { same = false; break; }
      if (same) { var tmp = order[0]; order[0] = order[1]; order[1] = tmp; }
    }

    var cls = isCode ? " codey" : "";
    host.innerHTML =
      '<p class="order-sep" id="op-' + q.id + '">' + LB("pool") + "</p>" +
      '<ul class="order-pool' + cls + '" aria-labelledby="op-' + q.id + '"></ul>' +
      '<p class="order-sep" id="os-' + q.id + '">' + LB("slots") + "</p>" +
      '<ul class="order-slots' + cls + '" aria-labelledby="os-' + q.id + '"></ul>';
    var pool = host.querySelector(".order-pool");
    var slots = host.querySelector(".order-slots");

    function cell(i) {
      var o = items[i];
      var body = (o && o.code != null)
        ? '<code class="oc" dir="ltr">' + hl(trimCode(o.code), q.lang) + "</code>"
        : bi(o);
      return '<li><button type="button" data-i="' + i + '">' + body + "</button></li>";
    }
    function fill(seq) {
      var inSlots = seq || [];
      var ph = "", i;
      for (i = 0; i < inSlots.length; i++) ph += cell(inSlots[i]);
      slots.innerHTML = ph;
      var pl = "";
      for (i = 0; i < order.length; i++) {
        if (inSlots.indexOf(order[i]) === -1) pl += cell(order[i]);
      }
      pool.innerHTML = pl;
    }
    fill([]);

    host.addEventListener("click", function (e) {
      var n = up(e.target, host, "BUTTON");
      if (!n || n.disabled) return;
      var i = parseInt(n.getAttribute("data-i"), 10);
      var cur = read() || [];
      if (n.parentNode.parentNode === slots) {
        cur.splice(cur.indexOf(i), 1);
      } else {
        cur.push(i);
      }
      fill(cur);
      touched(host);
    });

    function read() {
      var bs = slots.querySelectorAll("button"), v = [];
      for (var i = 0; i < bs.length; i++) v.push(parseInt(bs[i].getAttribute("data-i"), 10));
      return v.length ? v : null;
    }
    return {
      read: read,
      write: function (p) { if (p) fill(p); },
      grade: function (p) {
        p = p || [];
        var hit = 0;
        for (var i = 0; i < ans.length; i++) if (p[i] === ans[i]) hit++;
        return { right: hit === ans.length && p.length === ans.length, got: hit, total: ans.length };
      },
      mark: function (p) {
        p = p || [];
        var bs = slots.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) {
          var ok = p[i] === ans[i];
          bs[i].classList.toggle("right", ok);
          bs[i].classList.toggle("wrong", !ok);
        }
      },
      reveal: function () {
        fill(ans.slice());
        var bs = slots.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) bs[i].classList.add("right");
      },
      clear: function () { fill([]); },
      lock: function (on) {
        var bs = host.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) bs[i].disabled = !!on;
      },
      answerHtml: function () {
        var out = "";
        for (var i = 0; i < ans.length; i++) {
          var o = items[ans[i]];
          out += "<li>" + ((o && o.code != null) ? codeInline(o.code, q.lang) : bi(o)) + "</li>";
        }
        return '<ol class="vlist">' + out + "</ol>";
      },
      empty: "orderall"
    };
  }

  function wMatch(q, host) {
    var pairs = q.pairs || [];
    var order = shuffled(pairs.length, q.id + "m");
    var picks = [];   /* picks[leftIndex] = right original index */
    var sel = -1;
    var i;

    function side(x) {
      return (x && x.code != null) ? "<code>" + esc(x.code) + "</code>" : bi(x);
    }
    var hl_ = '<div><p class="colhead">' + bi(q.leftHead || { en: "Item", ar: "العنصر" }) + "</p><ul>";
    for (i = 0; i < pairs.length; i++) {
      hl_ += '<li><button type="button" data-side="l" data-i="' + i + '">' +
             '<span class="tagno" hidden></span>' + side(pairs[i].l) + "</button></li>";
    }
    hl_ += "</ul></div>";
    var hr = '<div><p class="colhead">' + bi(q.rightHead || { en: "Matches", ar: "المقابل" }) + "</p><ul>";
    for (i = 0; i < order.length; i++) {
      var ri = order[i];
      hr += '<li><button type="button" data-side="r" data-i="' + ri + '">' +
            '<span class="tagno" hidden></span>' + side(pairs[ri].r) + "</button></li>";
    }
    hr += "</ul></div>";
    host.innerHTML = '<div class="match">' + hl_ + hr + "</div>";

    var lefts = host.querySelectorAll('[data-side="l"]');
    var rights = host.querySelectorAll('[data-side="r"]');

    function badge(btn, n) {
      var t = btn.querySelector(".tagno");
      if (n == null) { t.hidden = true; t.textContent = ""; }
      else { t.hidden = false; t.textContent = String(n); }
    }
    function repaint() {
      var i, k;
      for (i = 0; i < lefts.length; i++) {
        var li = parseInt(lefts[i].getAttribute("data-i"), 10);
        var has = picks[li] != null;
        badge(lefts[i], has ? li + 1 : null);
        lefts[i].classList.toggle("sel", sel === li);
        lefts[i].classList.toggle("done", has);
        lefts[i].setAttribute("aria-pressed", sel === li ? "true" : "false");
      }
      for (i = 0; i < rights.length; i++) {
        var rj = parseInt(rights[i].getAttribute("data-i"), 10);
        var owner = null;
        for (k = 0; k < picks.length; k++) if (picks[k] === rj) owner = k;
        badge(rights[i], owner != null ? owner + 1 : null);
        rights[i].classList.toggle("done", owner != null);
      }
    }
    repaint();

    host.addEventListener("click", function (e) {
      var n = up(e.target, host, "BUTTON");
      if (!n || n.disabled) return;
      var sd = n.getAttribute("data-side");
      var i = parseInt(n.getAttribute("data-i"), 10);
      if (sd === "l") {
        if (picks[i] != null) { picks[i] = null; sel = -1; }
        else sel = (sel === i ? -1 : i);
      } else {
        for (var k = 0; k < picks.length; k++) if (picks[k] === i) picks[k] = null;
        if (sel > -1) { picks[sel] = i; sel = -1; }
      }
      repaint();
      touched(host);
    });

    function read() {
      var any = false, v = [];
      for (var i = 0; i < pairs.length; i++) {
        v.push(picks[i] == null ? null : picks[i]);
        if (picks[i] != null) any = true;
      }
      return any ? v : null;
    }
    return {
      read: read,
      write: function (p) { if (p) { picks = p.slice(); sel = -1; repaint(); } },
      grade: function (p) {
        p = p || [];
        var hit = 0, done = 0;
        for (var i = 0; i < pairs.length; i++) {
          if (p[i] != null) done++;
          if (p[i] === i) hit++;
        }
        return { right: hit === pairs.length, got: hit, total: pairs.length, done: done };
      },
      mark: function (p) {
        p = p || [];
        for (var i = 0; i < lefts.length; i++) {
          var li = parseInt(lefts[i].getAttribute("data-i"), 10);
          var ok = p[li] === li;
          lefts[i].classList.toggle("right", ok);
          lefts[i].classList.toggle("wrong", !ok);
        }
      },
      reveal: function () {
        picks = [];
        for (var i = 0; i < pairs.length; i++) picks.push(i);
        sel = -1; repaint();
        for (i = 0; i < lefts.length; i++) lefts[i].classList.add("right");
      },
      clear: function () {
        picks = []; sel = -1; repaint();
        for (var i = 0; i < lefts.length; i++) lefts[i].classList.remove("right", "wrong");
      },
      lock: function (on) {
        var bs = host.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) bs[i].disabled = !!on;
      },
      answerHtml: function () {
        var out = [];
        for (var i = 0; i < pairs.length; i++) {
          out.push(side(pairs[i].l) + " &rarr; " + side(pairs[i].r));
        }
        return out.join("<br>");
      },
      empty: "matchall"
    };
  }

  function wPickline(q, host) {
    var lines = trimCode(q.code).split("\n");
    var ans = (typeof q.answer === "number") ? [q.answer] : (q.answer || []);
    var many = ans.length > 1;
    var h = '<div class="pickcode" role="group" aria-labelledby="qt-' + q.id + '">';
    for (var i = 0; i < lines.length; i++) {
      var n = i + 1;
      var dead = q.skip && q.skip.indexOf(n) > -1;
      h += '<button type="button" data-n="' + n + '" aria-pressed="false"' + (dead ? " disabled" : "") + ">" +
           '<span class="ln" aria-hidden="true">' + n + "</span>" +
           '<span class="lx">' + hl(lines[i], q.lang) + "</span></button>";
    }
    host.innerHTML = h + "</div>" +
      '<p class="pickcode-note">' + LB("pickline") + (many ? " " + LB("pickmany") : "") + "</p>";
    var btns = host.querySelectorAll(".pickcode button");

    function setSel(b, on) {
      b.classList.toggle("sel", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    }
    host.addEventListener("click", function (e) {
      var n = up(e.target, host, "BUTTON");
      if (!n || n.disabled) return;
      if (!many) {
        /* one wrong line: a new pick replaces the old one. If the author
           lists one answer but the student wants several, the note above
           only invites that when the answer is an array. */
        for (var i = 0; i < btns.length; i++) setSel(btns[i], false);
        setSel(n, true);
      } else {
        setSel(n, !n.classList.contains("sel"));
      }
      touched(host);
    });

    function read() {
      var v = [];
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("sel")) v.push(parseInt(btns[i].getAttribute("data-n"), 10));
      }
      return v.length ? v : null;
    }
    return {
      read: read,
      write: function (p) {
        if (!p) return;
        for (var i = 0; i < btns.length; i++) {
          var n = parseInt(btns[i].getAttribute("data-n"), 10);
          setSel(btns[i], p.indexOf(n) > -1);
        }
      },
      grade: function (p) {
        p = p || [];
        var hit = 0, bad = 0, i;
        for (i = 0; i < p.length; i++) (ans.indexOf(p[i]) > -1 ? hit++ : bad++);
        return { right: hit === ans.length && bad === 0, got: Math.max(0, hit - bad), total: ans.length };
      },
      mark: function (p) {
        p = p || [];
        for (var i = 0; i < btns.length; i++) {
          var n = parseInt(btns[i].getAttribute("data-n"), 10);
          var isA = ans.indexOf(n) > -1, chose = p.indexOf(n) > -1;
          btns[i].classList.remove("sel");
          btns[i].classList.toggle("right", isA);
          btns[i].classList.toggle("wrong", chose && !isA);
        }
      },
      reveal: function () {
        for (var i = 0; i < btns.length; i++) {
          var n = parseInt(btns[i].getAttribute("data-n"), 10);
          btns[i].classList.remove("sel");
          btns[i].classList.toggle("right", ans.indexOf(n) > -1);
        }
      },
      clear: function () {
        for (var i = 0; i < btns.length; i++) {
          btns[i].classList.remove("sel", "right", "wrong");
          btns[i].setAttribute("aria-pressed", "false");
        }
      },
      lock: function (on) {
        for (var i = 0; i < btns.length; i++) {
          if (!(q.skip && q.skip.indexOf(parseInt(btns[i].getAttribute("data-n"), 10)) > -1)) {
            btns[i].disabled = !!on;
          }
        }
      },
      answerHtml: function () {
        var out = [];
        for (var i = 0; i < ans.length; i++) {
          out.push("<code>" + ans[i] + ": " + esc((lines[ans[i] - 1] || "").trim()) + "</code>");
        }
        return out.join("<br>");
      },
      empty: "pickline"
    };
  }

  /* contrast: one row per statement, one toggle per concept, plus
     "both" and (when q.neither is true) "neither".
     q.rows[i].a: 0 first concept only, 1 second only, 2 both, 3 neither. */
  function wContrast(q, host) {
    var concepts = q.concepts || [];
    var rows = q.rows || [];
    var neither = q.neither === true;
    var cols = [0, 1, 2];
    if (neither) cols.push(3);

    function colHtml(v) {
      if (v === 2) return LB("both");
      if (v === 3) return LB("neither");
      return bi(concepts[v]);
    }

    var h = '<p class="fill-hint">' + LB("contrastHint") + "</p>" +
            '<div class="contrast" data-cols="' + cols.length + '">';
    for (var i = 0; i < rows.length; i++) {
      var sid = "cs-" + q.id + "-" + i;
      h += '<div class="crow" data-r="' + i + '">' +
           '<p class="cs" id="' + sid + '">' + bi(rows[i].s) + "</p>" +
           '<div class="copts" role="group" aria-labelledby="' + sid + '">';
      for (var c = 0; c < cols.length; c++) {
        h += '<button type="button" class="copt" aria-pressed="false" data-v="' + cols[c] + '">' +
             '<span class="dot" aria-hidden="true"></span><span class="cl">' + colHtml(cols[c]) +
             "</span></button>";
      }
      h += "</div></div>";
    }
    host.innerHTML = h + "</div>";
    var rowEls = host.querySelectorAll(".crow");

    function btnsOf(r) { return rowEls[r].querySelectorAll(".copt"); }
    function valOf(b) { return parseInt(b.getAttribute("data-v"), 10); }
    function setPressed(b, on) { b.setAttribute("aria-pressed", on ? "true" : "false"); }

    host.addEventListener("click", function (e) {
      var n = up(e.target, host, "BUTTON");
      if (!n || n.disabled || !n.classList.contains("copt")) return;
      var r = parseInt(n.parentNode.parentNode.getAttribute("data-r"), 10);
      var bs = btnsOf(r);
      for (var i = 0; i < bs.length; i++) setPressed(bs[i], bs[i] === n);
      touched(host);
    });

    function read() {
      var v = [], any = false;
      for (var r = 0; r < rows.length; r++) {
        var bs = btnsOf(r), got = null;
        for (var i = 0; i < bs.length; i++) {
          if (bs[i].getAttribute("aria-pressed") === "true") got = valOf(bs[i]);
        }
        v.push(got);
        if (got != null) any = true;
      }
      return any ? v : null;
    }
    return {
      read: read,
      write: function (p) {
        if (!p) return;
        for (var r = 0; r < rows.length; r++) {
          var bs = btnsOf(r);
          for (var i = 0; i < bs.length; i++) setPressed(bs[i], p[r] != null && valOf(bs[i]) === p[r]);
        }
      },
      grade: function (p) {
        p = p || [];
        var hit = 0;
        for (var r = 0; r < rows.length; r++) if (p[r] === rows[r].a) hit++;
        return { right: hit === rows.length, got: hit, total: rows.length };
      },
      mark: function (p) {
        p = p || [];
        for (var r = 0; r < rows.length; r++) {
          var bs = btnsOf(r), ok = p[r] === rows[r].a;
          rowEls[r].classList.toggle("right", ok);
          rowEls[r].classList.toggle("wrong", !ok);
          for (var i = 0; i < bs.length; i++) {
            var v = valOf(bs[i]);
            bs[i].classList.toggle("right", v === rows[r].a);
            bs[i].classList.toggle("wrong", p[r] === v && v !== rows[r].a);
          }
        }
      },
      reveal: function () {
        for (var r = 0; r < rows.length; r++) {
          var bs = btnsOf(r);
          rowEls[r].classList.add("right");
          rowEls[r].classList.remove("wrong");
          for (var i = 0; i < bs.length; i++) {
            var on = valOf(bs[i]) === rows[r].a;
            setPressed(bs[i], on);
            bs[i].classList.toggle("right", on);
            bs[i].classList.remove("wrong");
          }
        }
      },
      clear: function () {
        for (var r = 0; r < rows.length; r++) {
          rowEls[r].classList.remove("right", "wrong");
          var bs = btnsOf(r);
          for (var i = 0; i < bs.length; i++) {
            setPressed(bs[i], false);
            bs[i].classList.remove("right", "wrong");
          }
        }
      },
      lock: function (on) {
        var bs = host.querySelectorAll("button");
        for (var i = 0; i < bs.length; i++) bs[i].disabled = !!on;
      },
      answerHtml: function () {
        var out = [];
        for (var r = 0; r < rows.length; r++) {
          out.push(bi(rows[r].s) + " &rarr; <b>" + colHtml(rows[r].a) + "</b>");
        }
        return out.join("<br>");
      },
      empty: "pickone"
    };
  }

  /* write: a code box checked for required parts.
     The text is collapsed to single spaces and every check regex must
     match it; no forbid regex may. A bad regex in the data counts as a
     failed check (and is reported once in the console), never a crash. */
  function wWrite(q, host) {
    var checks = q.checks || [];
    var forbid = q.forbid || [];
    var starter = trimCode(q.starter);
    var rowsN = q.lines > 0 ? q.lines : 8;
    var solution = (q.solution && q.solution.code) ? trimCode(q.solution.code) : "";
    var warned = {};
    if (!solution && window.console) console.warn("[assess] write question " + q.id + " has no solution.code");
    if (!checks.length && !forbid.length && window.console) {
      console.warn("[assess] write question " + q.id + " has no checks");
    }

    host.innerHTML =
      '<p class="fill-hint" id="wh-' + q.id + '">' + LB("writeHint") + "</p>" +
      '<textarea class="writein" dir="ltr" wrap="off" spellcheck="false" autocapitalize="off" ' +
        'autocorrect="off" autocomplete="off" rows="' + rowsN + '" aria-describedby="wh-' + q.id +
        '" aria-labelledby="qt-' + q.id + '"></textarea>' +
      '<div class="wchecks" hidden><h5>' + LB("needs") + '</h5><ul></ul></div>';
    var ta = host.querySelector("textarea");
    var box = host.querySelector(".wchecks");
    var list = box.querySelector("ul");
    ta.value = starter;

    /* ---- keyboard: Tab indents, Esc then Tab leaves ---- */
    var escaped = false;
    function indent() {
      var done = false;
      try { done = document.execCommand("insertText", false, "    "); } catch (err) { done = false; }
      if (!done) {
        var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
        ta.value = v.slice(0, s) + "    " + v.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4;
        ta.dispatchEvent(new CustomEvent("input", { bubbles: true }));
      }
    }
    ta.addEventListener("keydown", function (e) {
      var key = e.key || (e.keyCode === 9 ? "Tab" : e.keyCode === 27 ? "Escape" : "");
      if (key === "Escape" || key === "Esc") { escaped = true; return; }
      if (key === "Tab" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (escaped || ta.readOnly) { escaped = false; return; }   /* let focus move on */
        e.preventDefault();
        indent();
        return;
      }
      if (key !== "Shift" && key !== "Control" && key !== "Alt" && key !== "Meta") escaped = false;
    });
    ta.addEventListener("blur", function () { escaped = false; });
    host.addEventListener("input", function () { touched(host); });

    /* ---- grading ---- */
    function run(spec, text, id) {
      /* true / false: did it match; null: the regex itself is bad */
      try {
        return new RegExp(spec.re, String(spec.flags || "").replace(/[gy]/g, "")).test(text);
      } catch (err) {
        if (!warned[id] && window.console) {
          warned[id] = true;
          console.warn("[assess] bad regex in question " + q.id + ": " + spec.re + " (" + err.message + ")");
        }
        return null;
      }
    }
    function evaluate(text) {
      var t = normLine(text), items = [], i, r;
      for (i = 0; i < checks.length; i++) {
        r = run(checks[i], t, "c" + i);
        items.push({ ok: r === true, spec: checks[i], avoid: false });
      }
      for (i = 0; i < forbid.length; i++) {
        r = run(forbid[i], t, "f" + i);
        items.push({ ok: r === false, spec: forbid[i], avoid: true });
      }
      return items;
    }
    function itemLabel(it) {
      return it.spec.label ? bi(it.spec.label) : "<code>" + esc(it.spec.re) + "</code>";
    }

    function paintChecks(items) {
      var h = "";
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        h += '<li class="' + (it.ok ? "pass" : "fail") + '">' +
             '<span class="wi" aria-hidden="true">' + (it.ok ? "&#10003;" : "&#10007;") + "</span>" +
             (it.avoid ? '<span class="wtag">' + LB("avoid") + "</span> " : "") +
             '<span class="wl">' + itemLabel(it) + "</span>" +
             '<span class="sr"> &mdash; ' +
             (it.ok ? LB("met") : LB(it.avoid ? "used" : "missing")) + "</span></li>";
      }
      list.innerHTML = h;
      box.hidden = !items.length;
    }
    function unmark() {
      ta.classList.remove("right", "wrong");
      box.hidden = true;
      list.innerHTML = "";
    }

    return {
      keepOpen: true,
      read: function () {
        var v = ta.value, t = v.trim();
        if (!t || t === starter.trim()) return null;
        return v;
      },
      write: function (p) { if (typeof p === "string") ta.value = p; },
      grade: function (p) {
        var items = evaluate(p || "");
        if (!items.length) return { right: true, got: 1, total: 1 };
        var hit = 0;
        for (var i = 0; i < items.length; i++) if (items[i].ok) hit++;
        return { right: hit === items.length, got: hit, total: items.length };
      },
      mark: function (p) {
        var items = evaluate(p || "");
        var bad = 0;
        for (var i = 0; i < items.length; i++) if (!items[i].ok) bad++;
        ta.classList.toggle("right", !bad);
        ta.classList.toggle("wrong", !!bad);
        paintChecks(items);
      },
      reveal: function () {
        ta.value = solution;
        ta.classList.add("right");
        ta.classList.remove("wrong");
        box.hidden = true;
      },
      clear: function () { ta.value = starter; unmark(); },
      unmark: unmark,
      lock: function (on) {
        ta.readOnly = !!on;
        ta.setAttribute("aria-readonly", on ? "true" : "false");
      },
      answerHtml: function () {
        if (solution) return codeBlock(solution, "good", q.lang);
        var out = [];
        for (var i = 0; i < checks.length; i++) {
          out.push(checks[i].label ? bi(checks[i].label) : "<code>" + esc(checks[i].re) + "</code>");
        }
        return out.join("<br>");
      },
      relabel: function () {
        ta.setAttribute("aria-label", L("writeLabel"));
      },
      empty: "writeone"
    };
  }

  var WIDGETS = {
    mcq: wChoice, multi: wChoice, tf: wChoice, compare: wChoice,
    complete: wChoice, output: wText, fill: wText, trace: wText,
    order: wOrder, ordercode: wOrder, match: wMatch, error: wPickline,
    contrast: wContrast, write: wWrite
  };

  /* ========================================================== one card */

  function makeCard(q, n, bank) {
    var kind = q.widget || q.type;
    /* a few types can be authored either way; the data decides */
    if (q.type === "output" && q.options) kind = "mcq";
    if (q.type === "complete" && q.blanks) kind = "fill";
    if (q.type === "trace" && q.options) kind = "mcq";
    if (q.type === "error" && q.options) kind = "mcq";

    var el = document.createElement("article");
    el.className = "qbox";
    el.id = "q-" + q.id;
    el.setAttribute("data-level", q.level || "medium");
    el.setAttribute("data-qid", q.id);
    el.setAttribute("data-type", q.type || "mcq");

    var tf = q.type === "tf";
    if (tf && !q.options) {
      q = Object.create(q);
      q.options = [{ en: UI.trueL.en, ar: UI.trueL.ar }, { en: UI.falseL.en, ar: UI.falseL.ar }];
      q.answer = q.truth ? 0 : 1;
      q.noshuffle = true;
    }

    var stem = "";
    if (q.type === "compare" && q.codeA) {
      stem += '<div class="cmp"><div><h5>' + LB("codeA") + "</h5>" + codeBlock(q.codeA, "", q.lang) +
              "</div><div><h5>" + LB("codeB") + "</h5>" + codeBlock(q.codeB, "", q.lang) + "</div></div>";
    } else if (q.code && kind !== "error") {
      stem += codeBlock(q.code, "", q.lang);
    }
    if (q.after) stem += "<p>" + bi(q.after) + "</p>";

    var hasHint = !!(q.hint && (q.hint.en || q.hint.ar));

    el.innerHTML =
      '<div class="qhead">' +
        '<span class="qnum">' + (bank.mode === "inline" ? "?" : "Q" + n) + "</span>" +
        '<span class="chip lv-' + (q.level || "medium") + '">' +
          bi(LEVELS[q.level] || LEVELS.medium) + "</span>" +
        '<span class="chip kind">' + bi(TYPES[q.type] || TYPES.mcq) + "</span>" +
        topicChips(q.topics) +
      "</div>" +
      '<div class="qstem"><p id="qt-' + q.id + '">' + bi(q.q) + "</p>" + stem + "</div>" +
      '<div class="qwidget" role="group"></div>' +
      '<div class="qactions">' +
        '<button type="button" class="btn primary" data-a="check"></button>' +
        (hasHint ? '<button type="button" class="btn hintbtn" data-a="hint" aria-expanded="false" ' +
                   'aria-controls="hint-' + q.id + '"></button>' : "") +
        '<button type="button" class="btn" data-a="show"></button>' +
        '<button type="button" class="btn" data-a="clear"></button>' +
      "</div>" +
      (hasHint ? '<div class="qhint" id="hint-' + q.id + '" role="note" hidden>' +
                 '<span class="hl">' + LB("hint") + "</span> " + bi(q.hint) + "</div>" : "") +
      '<div class="verdict" role="status" aria-live="polite" hidden></div>' +
      (q.explain ? '<details class="xp"><summary></summary><div class="inner">' +
                   "<p>" + bi(q.explain) + "</p></div></details>" : "") +
      (q.solution ? '<details class="sl"><summary></summary><div class="inner">' +
                    (q.solution.code ? codeBlock(q.solution.code, "good", q.lang) : "") +
                    (q.solution.out ? '<div class="output">' + esc(q.solution.out) + "</div>" : "") +
                    (q.solution.en || q.solution.ar ? "<p>" + bi(q.solution) + "</p>" : "") +
                    "</div></details>" : "");

    var qw = el.querySelector(".qwidget");
    var widget = (WIDGETS[kind] || wChoice)(q, qw);
    var verdict = el.querySelector(".verdict");
    var hintBox = el.querySelector(".qhint");
    var checkBtn = el.querySelector('[data-a="check"]');
    var state = null;
    var hintOpen = false;
    var showingEmpty = false;

    function setBtn(a, key) {
      var b = el.querySelector('[data-a="' + a + '"]');
      if (!b) return;
      b.textContent = L(key);
      b.setAttribute("aria-label", L(key) + " — " + L("qword") + " " + n);
    }

    function relabel() {
      setBtn("check", state ? "recheck" : "check");
      setBtn("show", "showme");
      setBtn("clear", "clear");
      if (hasHint) {
        setBtn("hint", hintOpen ? "hintOff" : "hint");
        el.querySelector('[data-a="hint"]').setAttribute("aria-expanded", hintOpen ? "true" : "false");
      }
      checkBtn.disabled = !!(state && state.kind === "shown");
      qw.setAttribute("aria-label", pick(TYPES[q.type] || TYPES.mcq) + " — " + L("qword") + " " + n);
      if (widget.relabel) widget.relabel();
      var xp = el.querySelector(".xp > summary");
      if (xp) xp.textContent = L("why");
      var sl = el.querySelector(".sl > summary");
      if (sl) sl.textContent = L("sol");
      if (state) paintVerdict(state);
      else if (showingEmpty) verdict.textContent = L(widget.empty);
    }

    function reviewHtml() {
      var links = topicLinks(q.topics);
      return links ? '<div class="vline vreview"><span class="vl">' + L("review") + "</span> " +
                     links + "</div>" : "";
    }
    function answerLine() {
      var a = widget.answerHtml();
      /* a list, a block of code or several lines: the label gets its own line */
      var stack = /<(ol|pre)[ >]|<br>/.test(a);
      return '<div class="vline' + (stack ? " stack" : "") + '"><span class="vl">' + L("correctis") +
             (stack ? "" : ":") + "</span> " + a + "</div>";
    }

    function paintVerdict(st) {
      showingEmpty = false;
      verdict.hidden = false;
      if (st.kind === "right") {
        verdict.className = "verdict ok";
        verdict.innerHTML = L("ok");
      } else if (st.kind === "part") {
        verdict.className = "verdict part";
        verdict.innerHTML = L("part").replace("{a}", st.got).replace("{b}", st.total) +
          answerLine() + reviewHtml();
      } else if (st.kind === "shown") {
        verdict.className = "verdict part";
        verdict.innerHTML = L("revealed") + reviewHtml();
      } else {
        verdict.className = "verdict no";
        verdict.innerHTML = L("no") + answerLine() + reviewHtml();
      }
    }

    function check(silent) {
      var p = widget.read();
      if (!p) {
        if (!silent) {
          showingEmpty = true;
          verdict.hidden = false;
          verdict.className = "verdict part";
          verdict.textContent = L(widget.empty);
        }
        return null;
      }
      var g = widget.grade(p);
      var kindName = g.right ? "right" : (g.got > 0 ? "part" : "wrong");
      state = { kind: kindName, got: g.got, total: g.total, payload: p };
      widget.mark(p);
      if (!widget.keepOpen) widget.lock(true);
      paintVerdict(state);
      el.setAttribute("data-state", g.right ? "right" : "wrong");
      if (q.explain) el.querySelector(".xp").open = !g.right;
      bank.record(q.id, state);
      relabel();
      return state;
    }

    /* Editing an answer that stays editable (write) withdraws its verdict
       until the student checks again. */
    function withdraw() {
      if (widget.unmark) widget.unmark();
      state = null;
      verdict.hidden = true;
      el.removeAttribute("data-state");
      bank.record(q.id, null);
      relabel();
    }

    el.querySelector(".qactions").addEventListener("click", function (e) {
      var b = up(e.target, el, "BUTTON");
      if (!b) return;
      var a = b.getAttribute("data-a");
      if (a === "check") {
        if (state && state.kind === "shown") return;   /* Clear first: a revealed answer cannot be re-submitted */
        widget.lock(false);
        check(false);
      }
      if (a === "hint") {
        hintOpen = !hintOpen;
        hintBox.hidden = !hintOpen;
        relabel();
      }
      if (a === "show") {
        widget.clear();
        widget.reveal();
        widget.lock(true);
        state = { kind: "shown", got: 0, total: 1, payload: null };
        el.setAttribute("data-state", "wrong");
        paintVerdict(state);
        if (q.explain) el.querySelector(".xp").open = true;
        if (q.solution) el.querySelector(".sl").open = true;
        bank.record(q.id, state);
        relabel();
      }
      if (a === "clear") {
        widget.clear();
        widget.lock(false);
        state = null;
        showingEmpty = false;
        verdict.hidden = true;
        el.removeAttribute("data-state");
        bank.record(q.id, null);
        relabel();
      }
    });

    el.addEventListener("qtouch", function () {
      if (state) {
        if (widget.keepOpen && state.kind !== "shown") withdraw();
        return;
      }
      showingEmpty = false;
      verdict.hidden = true;
    });

    relabel();

    return {
      el: el,
      q: q,
      relabel: relabel,
      check: function () {
        if (state) return state;
        widget.lock(false);
        return check(true);
      },
      restore: function (st) {
        if (!st) return;
        if (st.kind === "shown") {
          widget.reveal(); widget.lock(true);
          state = st; paintVerdict(state);
          el.setAttribute("data-state", "wrong");
        } else if (st.payload) {
          widget.write(st.payload);
          widget.mark(st.payload);
          if (!widget.keepOpen) widget.lock(true);
          state = st;
          paintVerdict(state);
          el.setAttribute("data-state", st.kind === "right" ? "right" : "wrong");
        }
        relabel();
      },
      state: function () { return state; },
      reset: function () {
        widget.clear(); widget.lock(false);
        state = null; showingEmpty = false; verdict.hidden = true;
        el.removeAttribute("data-state");
        relabel();
      }
    };
  }

  /* ========================================================== one bank */

  function renderBank(host) {
    var id = host.getAttribute("data-bank");
    var spec = (window.DBTBanks || {})[id];
    if (!spec) { host.innerHTML = ""; return null; }
    var qs = spec.questions || [];
    var mode = spec.mode || host.getAttribute("data-mode") || "test";
    var saved = load(id);
    var cards = [];

    var bank = {
      id: id,
      mode: mode,
      record: function (qid, st) {
        if (st) saved[qid] = { k: st.kind, g: st.got, t: st.total, p: st.payload };
        else delete saved[qid];
        save(id, saved);
        refresh();
      }
    };

    var frag = document.createDocumentFragment();

    var bar = null, tally = null, barFill = null, result = null;
    if (mode !== "inline") {
      if (spec.intro) {
        var intro = document.createElement("div");
        intro.className = "testhead";
        var mix = { easy: 0, medium: 0, hard: 0 };
        var seen = {}, nTypes = 0, mi;
        for (mi = 0; mi < qs.length; mi++) {
          var lv = qs[mi].level;
          mix[mix.hasOwnProperty(lv) ? lv : "medium"]++;
          var ty = qs[mi].type || "mcq";
          if (!seen[ty]) { seen[ty] = 1; nTypes++; }
        }
        intro.innerHTML =
          "<h4>" + bi(spec.title || { en: "Test", ar: "اختبار" }) + "</h4>" +
          "<p>" + bi(spec.intro) + "</p>" +
          '<div class="meta"><span>' + countLabel(qs.length, "questions") + "</span>" +
          "<span>" + countLabel(nTypes, "types") + "</span>" +
          "<span>" +
            "<b>" + mix.easy + "</b> " + bi(LEVELS.easy) + " &middot; " +
            "<b>" + mix.medium + "</b> " + bi(LEVELS.medium) + " &middot; " +
            "<b>" + mix.hard + "</b> " + bi(LEVELS.hard) +
          "</span></div>";
        frag.appendChild(intro);
      }

      bar = document.createElement("div");
      bar.className = "testbar";
      bar.innerHTML =
        '<span class="tally"></span>' +
        '<button type="button" class="btn" data-a="all"></button>' +
        '<button type="button" class="btn" data-a="reset"></button>' +
        '<span class="bar"><i></i></span>';
      frag.appendChild(bar);
      tally = bar.querySelector(".tally");
      barFill = bar.querySelector(".bar > i");

      var filter = document.createElement("div");
      filter.className = "qfilter";
      filter.setAttribute("role", "group");
      filter.innerHTML =
        '<button type="button" data-f="all" aria-pressed="true"></button>' +
        '<button type="button" data-f="easy" aria-pressed="false"></button>' +
        '<button type="button" data-f="medium" aria-pressed="false"></button>' +
        '<button type="button" data-f="hard" aria-pressed="false"></button>' +
        '<button type="button" data-f="unseen" aria-pressed="false"></button>' +
        '<button type="button" data-f="missed" aria-pressed="false"></button>';
      frag.appendChild(filter);
      bank.filterEl = filter;
    }

    for (var i = 0; i < qs.length; i++) {
      var card = makeCard(qs[i], i + 1, bank);
      cards.push(card);
      frag.appendChild(card.el);
    }

    if (mode !== "inline") {
      result = document.createElement("div");
      result.className = "result";
      result.hidden = true;
      frag.appendChild(result);
    }

    host.innerHTML = "";
    host.appendChild(frag);

    /* ---- restore ---- */
    for (i = 0; i < cards.length; i++) {
      var st = saved[cards[i].q.id];
      if (st) cards[i].restore({ kind: st.k, got: st.g, total: st.t, payload: st.p });
    }

    /* ---- toolbar behaviour ---- */
    function counts() {
      var done = 0, right = 0;
      for (var i = 0; i < cards.length; i++) {
        var s = cards[i].state();
        if (!s) continue;
        done++;
        if (s.kind === "right") right++;
      }
      return { done: done, right: right, total: cards.length };
    }

    function buildResult() {
      var c = counts();
      if (!c.done) { result.hidden = true; return; }
      var pct = Math.round((c.right / c.done) * 100);
      var lv = { easy: [0, 0], medium: [0, 0], hard: [0, 0] };
      var tp = {};
      var reg = window.DBTTopics || {};
      for (var i = 0; i < cards.length; i++) {
        var s = cards[i].state();
        if (!s) continue;
        var q = cards[i].q;
        var l = lv.hasOwnProperty(q.level) ? q.level : "medium";
        lv[l][1]++;
        if (s.kind === "right") lv[l][0]++;
        var ts = q.topics || [];
        for (var j = 0; j < ts.length; j++) {
          if (!tp[ts[j]]) tp[ts[j]] = [0, 0];
          tp[ts[j]][1]++;
          if (s.kind === "right") tp[ts[j]][0]++;
        }
      }
      var h = "<h3>" + L("resTitle") + '</h3><div class="big">' + pct + "%</div>" +
              '<p class="sub">' + L("resSub").replace("{r}", c.right)
                 .replace("{t}", c.done).replace("{p}", pct) + "</p>";
      h += "<table><thead><tr><th>" + L("level") + "</th><th>" + L("right") +
           "</th><th>" + L("asked") + "</th></tr></thead><tbody>";
      var keys = ["easy", "medium", "hard"];
      for (i = 0; i < keys.length; i++) {
        if (!lv[keys[i]][1]) continue;
        h += "<tr><td>" + pick(LEVELS[keys[i]]) + "</td><td>" + lv[keys[i]][0] +
             "</td><td>" + lv[keys[i]][1] + "</td></tr>";
      }
      h += "</tbody></table>";

      var weak = [], k;
      for (k in tp) {
        if (!Object.prototype.hasOwnProperty.call(tp, k)) continue;
        if (tp[k][1] >= 1 && tp[k][0] / tp[k][1] < 0.6 && reg[k]) weak.push(k);
      }
      h += '<div class="weak"><h4>' + L("weak") + "</h4>";
      if (!weak.length) {
        h += "<p>" + L("strongAll") + "</p>";
      } else {
        h += '<ul class="seelist">';
        for (i = 0; i < weak.length; i++) {
          h += '<li><a href="' + escA(topicHref(reg[weak[i]].href)) + '">' + bi(reg[weak[i]]) +
               "</a> &mdash; " + tp[weak[i]][0] + "/" + tp[weak[i]][1] + "</li>";
        }
        h += "</ul>";
      }
      h += "</div>";
      result.innerHTML = h;
      result.hidden = false;
    }

    function refresh() {
      if (!bar) return;
      var c = counts();
      tally.innerHTML = L("tally").replace("{d}", c.done)
        .replace("{t}", c.total).replace("{r}", c.right);
      barFill.style.width = (c.total ? (c.done / c.total) * 100 : 0) + "%";
      bar.querySelector('[data-a="all"]').textContent = L("checkall");
      bar.querySelector('[data-a="reset"]').textContent = L("resetall");
      var fb = bank.filterEl.querySelectorAll("[data-f]");
      var names = { all: "all", easy: "lvEasy", medium: "lvMedium", hard: "lvHard",
                    unseen: "unseen", missed: "missed" };
      for (var i = 0; i < fb.length; i++) {
        fb[i].textContent = L(names[fb[i].getAttribute("data-f")]);
      }
      buildResult();
    }

    if (bar) {
      bar.addEventListener("click", function (e) {
        var b = up(e.target, bar, "BUTTON");
        if (!b) return;
        var a = b.getAttribute("data-a");
        if (a === "all") {
          for (var i = 0; i < cards.length; i++) if (!cards[i].state()) cards[i].check();
          refresh();
          if (result && !result.hidden) result.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (a === "reset") {
          for (var j = 0; j < cards.length; j++) cards[j].reset();
          saved = {};
          save(id, saved);
          refresh();
          if (result) result.hidden = true;
        }
      });

      bank.filterEl.addEventListener("click", function (e) {
        var b = up(e.target, bank.filterEl, "BUTTON");
        if (!b) return;
        var f = b.getAttribute("data-f");
        var bs = bank.filterEl.querySelectorAll("[data-f]");
        for (var i = 0; i < bs.length; i++) {
          bs[i].setAttribute("aria-pressed", bs[i] === b ? "true" : "false");
        }
        for (i = 0; i < cards.length; i++) {
          var s = cards[i].state();
          var lvl = cards[i].q.level || "medium";
          var show = f === "all" ? true
                   : f === "unseen" ? !s
                   : f === "missed" ? !!(s && s.kind !== "right")
                   : lvl === f;
          cards[i].el.hidden = !show;
        }
      });
    }

    refresh();

    return {
      id: id,
      relabel: function () {
        for (var i = 0; i < cards.length; i++) cards[i].relabel();
        refresh();
      }
    };
  }

  /* ========================================================== boot */

  var banks = [];

  function renderAll(scope) {
    var hosts = (scope || document).querySelectorAll("[data-bank]");
    for (var i = 0; i < hosts.length; i++) {
      if (hosts[i].getAttribute("data-rendered")) continue;
      hosts[i].setAttribute("data-rendered", "1");
      var b = renderBank(hosts[i]);
      if (b) banks.push(b);
    }
  }

  function relabel() {
    for (var i = 0; i < banks.length; i++) banks[i].relabel();
  }

  /* app.js calls renderAll once the language is settled, so there is
     no self-boot here: a bank rendered before I18N.init() would draw
     its labels in the wrong language and then have to redraw them. */
  document.addEventListener("da:lang", relabel);

  window.DBTAssess = { renderAll: renderAll, relabel: relabel };
})();
