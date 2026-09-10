/* questions.js — the six theoretical question types.
   Five are handled here (mcq, tf, fill, order, match); the sixth, "write
   statement", is an exercise-mode SqlWidget (see widget.js).

   Authoring: a question is
     <div class="question" data-qtype="mcq" data-qid="lab-q1"
          data-chapter="1" data-lesson="1">
       <script type="application/json" class="q-config"> { ...bilingual config... } </script>
     </div>
   Text fields may be a plain string or a { "en": "...", "ar": "..." } pair.
   Grading records pass/fail to Progress keyed by chapter/lesson/qid and shows
   immediate feedback (green pulse / red shake, both reduced-motion-safe). */
(function () {
  'use strict';

  function L(v) {
    if (v && typeof v === 'object' && ('en' in v || 'ar' in v)) {
      var lang = window.I18N ? window.I18N.lang : 'en';
      return v[lang] != null ? v[lang] : (v.en != null ? v.en : '');
    }
    return v == null ? '' : v;
  }
  function t(k) { return window.I18N ? window.I18N.t(k) : k; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

  function Question(node) {
    this.node = node;
    this.type = node.getAttribute('data-qtype');
    this.qid = node.getAttribute('data-qid');
    this.chapter = node.getAttribute('data-chapter');
    this.lesson = node.getAttribute('data-lesson');
    var cfgEl = node.querySelector('script.q-config');
    try { this.cfg = cfgEl ? JSON.parse(cfgEl.textContent) : {}; } catch (e) { this.cfg = {}; }
    this.render();
    var self = this;
    document.addEventListener('i18n:change', function () { self.render(); });
  }

  Question.prototype.render = function () {
    var node = this.node, cfg = this.cfg;
    node.innerHTML = '';
    // keep config around for re-render
    var cfgEl = el('script'); cfgEl.type = 'application/json'; cfgEl.className = 'q-config';
    cfgEl.textContent = JSON.stringify(cfg); node.appendChild(cfgEl);

    var head = el('div', 'q-head');
    if (cfg.num != null) head.appendChild(el('span', 'q-num', String(cfg.num)));
    head.appendChild(el('span', 'q-type', this.type));
    node.appendChild(head);

    if (cfg.prompt) node.appendChild(el('p', 'q-prompt', L(cfg.prompt)));

    var bodyBox = el('div', 'q-body');
    node.appendChild(bodyBox);
    this.bodyBox = bodyBox;

    this['render_' + this.type] && this['render_' + this.type](bodyBox);

    var actions = el('div', 'q-actions');
    var checkBtn = el('button', 'btn btn-primary btn-sm');
    checkBtn.type = 'button';
    checkBtn.setAttribute('data-i18n', 'submit');
    checkBtn.textContent = t('submit');
    var self = this;
    checkBtn.addEventListener('click', function () { self.grade(); });
    actions.appendChild(checkBtn);
    var fb = el('span', 'q-feedback'); fb.hidden = true;
    actions.appendChild(fb);
    this.feedback = fb;
    node.appendChild(actions);

    this.explainEl = el('div', 'q-explain'); this.explainEl.hidden = true;
    node.appendChild(this.explainEl);

    // reflect a previously-recorded pass
    if (window.Progress) {
      var prev = window.Progress.questionResult(this.chapter, this.lesson, this.qid);
      if (prev === true) this.showFeedback(true, true);
    }
  };

  /* ---- MCQ ---- */
  Question.prototype.render_mcq = function (box) {
    var self = this, cfg = this.cfg;
    var ul = el('ul', 'opt-list');
    this.optEls = [];
    (cfg.options || []).forEach(function (opt, i) {
      var li = el('li', 'opt');
      var input = el('input'); input.type = 'radio'; input.name = self.qid; input.value = i;
      var span = el('span', 'opt-text', L(opt));
      li.appendChild(input); li.appendChild(span);
      li.addEventListener('click', function () { input.checked = true; self.clearMarks(); li.classList.add('chosen'); });
      ul.appendChild(li); self.optEls.push(li);
    });
    box.appendChild(ul);
  };
  Question.prototype.clearMarks = function () { (this.optEls || []).forEach(function (li) { li.classList.remove('chosen', 'correct', 'wrong'); }); };
  Question.prototype.grade_mcq = function () {
    var chosen = -1;
    this.optEls.forEach(function (li, i) { if (li.querySelector('input').checked) chosen = i; });
    if (chosen < 0) return null;
    var correct = this.cfg.correctIndex;
    this.optEls[chosen].classList.add(chosen === correct ? 'correct' : 'wrong');
    if (chosen !== correct) this.optEls[correct].classList.add('correct');
    return chosen === correct;
  };

  /* ---- True / False ---- */
  Question.prototype.render_tf = function (box) {
    var self = this;
    var ul = el('ul', 'opt-list');
    this.optEls = [];
    [{ v: true, k: 'True' }, { v: false, k: 'False' }].forEach(function (o) {
      var li = el('li', 'opt');
      var input = el('input'); input.type = 'radio'; input.name = self.qid; input.value = String(o.v);
      var labels = { True: { en: 'True', ar: 'صحيح' }, False: { en: 'False', ar: 'خطأ' } };
      var span = el('span', 'opt-text', L(labels[o.k]));
      li.appendChild(input); li.appendChild(span);
      li.__val = o.v;
      li.addEventListener('click', function () { input.checked = true; self.clearMarks(); li.classList.add('chosen'); });
      ul.appendChild(li); self.optEls.push(li);
    });
    box.appendChild(ul);
  };
  Question.prototype.grade_tf = function () {
    var chosen = null, chosenEl = null;
    this.optEls.forEach(function (li) { if (li.querySelector('input').checked) { chosen = li.__val; chosenEl = li; } });
    if (chosenEl === null) return null;
    var ok = chosen === !!this.cfg.correct;
    chosenEl.classList.add(ok ? 'correct' : 'wrong');
    if (!ok) this.optEls.forEach(function (li) { if (li.__val === !!this.cfg.correct) li.classList.add('correct'); }, this);
    return ok;
  };

  /* ---- Fill in the blank ---- */
  Question.prototype.render_fill = function (box) {
    var cfg = this.cfg;
    var line = el('div', 'fill-line');
    var parts = String(cfg.template || '').split('____');
    this.inputs = [];
    var self = this;
    parts.forEach(function (p, i) {
      line.appendChild(document.createTextNode(p));
      if (i < parts.length - 1) {
        var inp = el('input'); inp.type = 'text'; inp.spellcheck = false;
        inp.setAttribute('aria-label', 'answer');
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') self.grade(); });
        line.appendChild(inp); self.inputs.push(inp);
      }
    });
    box.appendChild(line);
  };
  Question.prototype.grade_fill = function () {
    var cfg = this.cfg;
    // accepted answers: array of strings (single blank) OR array-of-arrays (per blank)
    var perBlank = Array.isArray(cfg.answers[0]) ? cfg.answers : [cfg.answers];
    var allOk = true, any = false;
    this.inputs.forEach(function (inp, i) {
      var val = (inp.value || '').trim();
      if (val) any = true;
      var accepted = perBlank[i] || perBlank[0] || [];
      var ok = accepted.some(function (a) { return String(a).trim().toLowerCase() === val.toLowerCase(); });
      inp.style.borderBottomColor = ok ? 'var(--success)' : 'var(--danger)';
      if (!ok) allOk = false;
    });
    if (!any) return null;
    return allOk;
  };

  /* ---- Order ---- */
  Question.prototype.render_order = function (box) {
    var self = this, cfg = this.cfg;
    this.correctOrder = (cfg.items || []).map(function (_, i) { return i; }); // canonical index order
    var display = shuffle(this.correctOrder);
    // avoid an already-correct shuffle
    if (display.join() === this.correctOrder.join() && display.length > 1) { var a = display[0]; display[0] = display[1]; display[1] = a; }
    var ul = el('ul', 'order-list'); this.orderUl = ul;
    display.forEach(function (origIdx) { ul.appendChild(self.orderItem(origIdx)); });
    box.appendChild(ul);
  };
  Question.prototype.orderItem = function (origIdx) {
    var self = this, cfg = this.cfg;
    var li = el('li', 'order-item'); li.__idx = origIdx; li.setAttribute('draggable', 'true');
    li.appendChild(el('span', 'handle', '⋮⋮'));
    li.appendChild(el('span', 'order-text', L(cfg.items[origIdx])));
    var btns = el('span', 'move-btns');
    var up = el('button', 'icon-btn btn-sm', '↑'); up.type = 'button'; up.setAttribute('aria-label', 'move up');
    var dn = el('button', 'icon-btn btn-sm', '↓'); dn.type = 'button'; dn.setAttribute('aria-label', 'move down');
    up.addEventListener('click', function () { var p = li.previousElementSibling; if (p) li.parentNode.insertBefore(li, p); self.clearOrderMarks(); });
    dn.addEventListener('click', function () { var n = li.nextElementSibling; if (n) li.parentNode.insertBefore(n, li); self.clearOrderMarks(); });
    btns.appendChild(up); btns.appendChild(dn); li.appendChild(btns);
    // drag
    li.addEventListener('dragstart', function () { li.classList.add('dragging'); self._drag = li; });
    li.addEventListener('dragend', function () { li.classList.remove('dragging'); self._drag = null; });
    li.addEventListener('dragover', function (e) {
      e.preventDefault();
      var d = self._drag; if (!d || d === li) return;
      var rect = li.getBoundingClientRect();
      var after = (e.clientY - rect.top) / rect.height > 0.5;
      li.parentNode.insertBefore(d, after ? li.nextSibling : li);
    });
    return li;
  };
  Question.prototype.clearOrderMarks = function () { this.orderUl.querySelectorAll('.order-item').forEach(function (li) { li.classList.remove('correct', 'wrong'); }); };
  Question.prototype.grade_order = function () {
    var lis = Array.prototype.slice.call(this.orderUl.children);
    var ok = true;
    lis.forEach(function (li, i) {
      var right = li.__idx === i;
      li.classList.add(right ? 'correct' : 'wrong');
      if (!right) ok = false;
    });
    return ok;
  };

  /* ---- Match ---- */
  Question.prototype.render_match = function (box) {
    var self = this, cfg = this.cfg;
    this.pairs = {};                 // leftIdx -> rightIdx
    this.selectedLeft = null;
    var grid = el('div', 'match-grid');
    var leftCol = el('div', 'match-col');
    var rightCol = el('div', 'match-col');
    var lh = el('h4', null, L({ en: 'Terms', ar: 'المصطلحات' }));
    var rh = el('h4', null, L({ en: 'Meanings', ar: 'المعاني' }));
    leftCol.appendChild(lh); rightCol.appendChild(rh);
    this.leftEls = []; this.rightEls = [];
    // fixed display order for right side (shuffle for challenge)
    var rIndices = shuffle((cfg.right || []).map(function (_, i) { return i; }));

    (cfg.left || []).forEach(function (item, li) {
      var d = el('div', 'match-item', L(item)); d.__li = li;
      d.addEventListener('click', function () {
        self.leftEls.forEach(function (x) { x.classList.remove('selected'); });
        d.classList.add('selected'); self.selectedLeft = li;
      });
      leftCol.appendChild(d); self.leftEls.push(d);
    });
    rIndices.forEach(function (ri) {
      var d = el('div', 'match-item', L(cfg.right[ri])); d.__ri = ri;
      d.addEventListener('click', function () {
        if (self.selectedLeft == null) return;
        self.pairs[self.selectedLeft] = ri;
        self.refreshPairs();
      });
      rightCol.appendChild(d); self.rightEls.push(d);
    });
    grid.appendChild(leftCol); grid.appendChild(rightCol);
    box.appendChild(grid);
  };
  Question.prototype.refreshPairs = function () {
    var self = this;
    var badges = {}; var n = 1;
    this.leftEls.forEach(function (d) {
      d.classList.remove('paired'); d.querySelectorAll('.pair-badge').forEach(function (b) { b.remove(); });
      d.classList.remove('selected');
      if (self.pairs[d.__li] != null) {
        d.classList.add('paired');
        var label = String(n);
        badges[self.pairs[d.__li]] = label;
        d.appendChild(mkBadge(label)); n++;
      }
    });
    this.rightEls.forEach(function (d) {
      d.classList.remove('paired'); d.querySelectorAll('.pair-badge').forEach(function (b) { b.remove(); });
      if (badges[d.__ri] != null) { d.classList.add('paired'); d.appendChild(mkBadge(badges[d.__ri])); }
    });
    this.selectedLeft = null;
    function mkBadge(txt) { var b = el('span', 'pair-badge', txt); return b; }
  };
  Question.prototype.grade_match = function () {
    var self = this, cfg = this.cfg;
    var correct = {}; (cfg.correctPairs || []).forEach(function (p) { correct[p[0]] = p[1]; });
    var keys = Object.keys(this.pairs);
    if (!keys.length) return null;
    var ok = true;
    this.leftEls.forEach(function (d) {
      var li = d.__li;
      if (self.pairs[li] == null) { ok = false; return; }
      var right = self.pairs[li] === correct[li];
      d.classList.add(right ? 'correct' : 'wrong');
      if (!right) ok = false;
    });
    return ok;
  };

  /* ---- shared grade dispatch + feedback ---- */
  Question.prototype.grade = function () {
    var fn = this['grade_' + this.type];
    if (!fn) return;
    var res = fn.call(this);
    if (res === null) { this.showHint(t('incorrect')); return; }  // nothing selected
    this.showFeedback(res);
    if (window.Progress) window.Progress.recordQuestion(this.chapter, this.lesson, this.qid, !!res);
  };
  Question.prototype.showHint = function (msg) {
    this.feedback.hidden = false; this.feedback.className = 'q-feedback fail';
    this.feedback.innerHTML = '<span>' + msg + '</span>';
  };
  Question.prototype.showFeedback = function (pass, silent) {
    this.feedback.hidden = false;
    this.feedback.className = 'q-feedback ' + (pass ? 'pass' : 'fail');
    this.feedback.innerHTML = '<span class="mark">' + (pass ? '✓' : '✕') + '</span><span>' + (pass ? t('correct') : t('incorrect')) + '</span>';
    if (this.cfg.explain) { this.explainEl.hidden = false; this.explainEl.textContent = L(this.cfg.explain); }
    if (!silent) {
      var node = this.node;
      node.classList.remove('pulse', 'shake'); void node.offsetWidth;
      node.classList.add(pass ? 'pulse' : 'shake');
      setTimeout(function () { node.classList.remove('pulse', 'shake'); }, 500);
    }
  };

  var instances = [];
  function initAll(root) {
    (root || document).querySelectorAll('.question[data-qtype]').forEach(function (n) {
      if (n.__question) return;
      n.__question = new Question(n); instances.push(n.__question);
    });
  }

  window.Questions = { initAll: initAll, instances: instances };
})();
