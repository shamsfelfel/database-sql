/* widget.js — the reusable SQL widget, adapted from the "Query Bench" POC.
   Generalized to a per-container factory so many widgets can share the one
   global alasql engine: each widget reloads ITS OWN dataset into alasql.tables
   immediately before every run, so instances never interfere.

   Modes (container data-mode / config.mode):
     demo     — prefilled query, Run only, no grading.
     exercise — editable, Run + Check answer, graded (structural | result | state).
     explore  — free-form sandbox with a schema sidebar, no grading.

   Authoring: put a JSON config in a child <script type="application/json" class="wd-config">.
   The widget builds its own inner DOM. Exposes window.SqlWidget + window.SqlWidgets. */
(function () {
  'use strict';

  /* ---------- POC core (near-verbatim from the appendix) ---------- */

  function loadTables(data) {
    Object.keys(alasql.tables || {}).forEach(function (k) { delete alasql.tables[k]; });
    Object.keys(data || {}).forEach(function (name) {
      var rows = Array.isArray(data[name]) ? data[name] : [];
      var cols = inferColumns(rows);
      if (cols.length) {
        // CREATE a real table so it carries column metadata — ALTER TABLE and the
        // schema-aware sidebar need it — then load the rows straight into it.
        alasql('CREATE TABLE ' + name + ' (' + cols.map(function (c) { return c.id + ' ' + c.type; }).join(', ') + ')');
        alasql.tables[name].data = clone(rows);
      } else {
        // No rows to infer from: a bare data holder (setup usually CREATEs these).
        alasql.tables[name] = { data: [] };
      }
    });
  }

  // Infer a column list (id + coarse type) from sample rows for the CREATE above.
  function inferColumns(rows) {
    var order = [], seen = {};
    rows.forEach(function (r) {
      Object.keys(r).forEach(function (k) { if (!seen[k]) { seen[k] = true; order.push(k); } });
    });
    return order.map(function (k) {
      var type = 'TEXT';
      for (var i = 0; i < rows.length; i++) {
        var v = rows[i][k];
        if (v === null || v === undefined) continue;
        if (typeof v === 'boolean') type = 'BOOLEAN';
        else if (typeof v === 'number') type = Number.isInteger(v) ? 'INT' : 'REAL';
        else type = 'TEXT';
        break;
      }
      return { id: k, type: type };
    });
  }

  function clone(x) { return JSON.parse(JSON.stringify(x)); }

  function inferType(rows, col) {
    for (var i = 0; i < rows.length && i < 8; i++) {
      var v = rows[i][col];
      if (v === null || v === undefined) continue;
      if (typeof v === 'number') return 'num';
      if (typeof v === 'boolean') return 'bool';
      return 'str';
    }
    return 'str';
  }

  function fmtCell(v) {
    if (v === null || v === undefined) return { text: '∅', cls: 'cell-null' };
    if (typeof v === 'number') return { text: String(v), cls: 'cell-num' };
    if (typeof v === 'boolean') return { text: String(v), cls: 'cell-bool' };
    if (typeof v === 'object') return { text: JSON.stringify(v), cls: '' };
    return { text: String(v), cls: '' };
  }

  function isRowsArray(x) {
    return Array.isArray(x) && (x.length === 0 || (typeof x[0] === 'object' && x[0] !== null && !Array.isArray(x[0])));
  }

  /* runQuery(sql, dataset) => { rows, raw, ms, error } — reloads dataset first. */
  function runQuery(sql, dataset) {
    loadTables(dataset);
    var start = performance.now();
    try {
      var res = alasql(sql);
      var ms = (performance.now() - start).toFixed(1);
      // Extract the row set to display. A lone SELECT returns rows directly;
      // a multi-statement script (e.g. "CREATE …; SELECT …;") returns an array
      // of per-statement results, whose LAST element is the trailing query's rows.
      var rows = isRowsArray(res) ? res
        : (Array.isArray(res) && res.length && isRowsArray(res[res.length - 1])) ? res[res.length - 1]
        : null;
      return { rows: rows, raw: res, ms: ms, error: null };
    } catch (e) {
      return { rows: null, raw: null, ms: null, error: (e && e.message) ? e.message : String(e) };
    }
  }

  /* Result-set comparison for exercise grading. */
  function compareResultSets(actual, expected, opts) {
    opts = opts || {};
    if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
    if (actual.length !== expected.length) return false;
    var a = actual.map(canon), e = expected.map(canon);
    if (!opts.orderMatters) { a.sort(); e.sort(); }
    return JSON.stringify(a) === JSON.stringify(e);
    function canon(row) {
      var keys = Object.keys(row).sort();
      var o = {};
      keys.forEach(function (k) { o[k] = row[k]; });
      return JSON.stringify(o);
    }
  }

  /* ---------- dataset resolution ---------- */

  var dataCache = {};
  function dataBase() {
    return (window.SQLLAB_BASE || document.body.getAttribute('data-base') || '');
  }
  function tablesOf(json) { return (json && json.tables) ? json.tables : (json || {}); }

  function fetchSnapshot(caseId, chapter) {
    // Prefer the embedded snapshots (data.js) so the course runs from file:// with
    // no server. Fall back to fetching the JSON files only when a page is served
    // over http(s) without data.js loaded.
    var embedded = window.SQLLAB_DATA && window.SQLLAB_DATA[caseId] && window.SQLLAB_DATA[caseId][chapter];
    if (embedded) return Promise.resolve(clone(tablesOf(embedded)));
    var url = dataBase() + 'data/case-' + caseId + '/chapter-' + chapter + '.json';
    if (dataCache[url]) return dataCache[url];
    var p = fetch(url).then(function (r) {
      if (!r.ok) throw new Error('Could not load ' + url + ' (' + r.status + ')');
      return r.json();
    }).then(function (json) {
      return tablesOf(json);
    });
    dataCache[url] = p;
    return p;
  }

  /* ---------- the widget ---------- */

  function SqlWidget(el) {
    this.el = el;
    var cfgEl = el.querySelector('script.wd-config');
    var cfg = {};
    if (cfgEl) { try { cfg = JSON.parse(cfgEl.textContent); } catch (e) { cfg = {}; } }
    this.cfg = cfg;
    this.mode = cfg.mode || el.getAttribute('data-mode') || 'demo';
    el.setAttribute('data-mode', this.mode);
    // A live "Database" sidebar showing current tables — always in explore,
    // opt-in elsewhere via "objects": true. Refreshes after every execution.
    this.showObjects = (this.mode === 'explore') || !!cfg.objects;
    this.dataset = null;       // resolved rows-by-table object
    this._objSig = null;       // last-rendered signature, to flash changes
    this.build();
    this.resolveDataset();
  }

  SqlWidget.prototype.t = function (k) { return window.I18N ? window.I18N.t(k) : k; };

  SqlWidget.prototype.build = function () {
    var el = this.el, cfg = this.cfg, self = this;
    var explore = this.mode === 'explore';
    var exercise = this.mode === 'exercise';
    var readonly = !!cfg.readonly;

    el.innerHTML = '';
    if (this.showObjects) el.classList.add('has-objects');
    var body = div('widget-body');

    var editorCol = div('editor-col');
    if (explore) {
      var chips = div('example-chips');
      (cfg.examples || []).forEach(function (ex) {
        var c = document.createElement('button');
        c.type = 'button'; c.className = 'chip'; c.textContent = ex.label || ex.sql;
        c.addEventListener('click', function () { self.editor.value = ex.sql; self.run(); });
        chips.appendChild(c);
      });
      if ((cfg.examples || []).length) editorCol.appendChild(chips);
    }

    var editorWrap = div('editor-wrap');
    var ta = document.createElement('textarea');
    ta.className = 'editor'; ta.spellcheck = false;
    ta.setAttribute('aria-label', 'SQL editor');
    ta.value = cfg.sql || '';
    if (cfg.placeholder) ta.placeholder = cfg.placeholder;
    if (readonly) ta.readOnly = true;
    editorWrap.appendChild(ta);
    editorCol.appendChild(editorWrap);
    this.editor = ta;

    var footer = div('editor-footer');
    if (!readonly) {
      var runBtn = button('btn btn-secondary btn-sm', 'run');
      runBtn.addEventListener('click', function () { self.run(); });
      footer.appendChild(runBtn);
      this.runBtn = runBtn;
    }
    if (exercise) {
      var checkBtn = button('btn btn-primary btn-sm', 'check_answer');
      checkBtn.addEventListener('click', function () { self.check(); });
      footer.appendChild(checkBtn);
      this.checkBtn = checkBtn;
      var resetBtn = button('btn btn-ghost btn-sm', 'reset');
      resetBtn.addEventListener('click', function () {
        self.editor.value = cfg.sql || '';
        self.clearGrade(); self.clearError();
        self.resultsEl.innerHTML = ''; self.setStatus('');
        if (self.showObjects) { self._objSig = null; self.renderObjects(self.dataset, false); }
      });
      footer.appendChild(resetBtn);
    }
    if (!readonly) {
      var hint = document.createElement('span');
      hint.className = 'run-hint'; hint.setAttribute('data-i18n', 'run_hint');
      hint.textContent = this.t('run_hint');
      footer.appendChild(hint);
    }
    var status = document.createElement('span');
    status.className = 'status';
    footer.appendChild(status);
    this.status = status;
    editorCol.appendChild(footer);

    var err = div('error-banner'); err.hidden = true; editorCol.appendChild(err); this.errEl = err;
    var grade = div('grade-banner'); grade.hidden = true; editorCol.appendChild(grade); this.gradeEl = grade;
    var results = div('results'); editorCol.appendChild(results); this.resultsEl = results;

    body.appendChild(editorCol);

    if (this.showObjects) {
      var panel = div('schema-panel');
      var h = document.createElement('h4');
      h.setAttribute('data-i18n', 'database'); h.textContent = this.t('database');
      panel.appendChild(h);
      var objBody = div('schema-body');
      panel.appendChild(objBody);
      this.objBody = objBody;
      body.appendChild(panel);
    }

    el.appendChild(body);

    if (!readonly) {
      ta.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); self.run(); }
        else if (e.key === 'Tab') {
          e.preventDefault();
          var s = ta.selectionStart, en = ta.selectionEnd;
          ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(en);
          ta.selectionStart = ta.selectionEnd = s + 2;
        }
      });
    }
  };

  SqlWidget.prototype.resolveDataset = function () {
    var self = this, cfg = this.cfg;
    if (cfg.dataset) { this.setBaseDataset(cfg.dataset); return; }
    if (cfg.case && cfg.chapter) {
      this.setStatus('…');
      fetchSnapshot(cfg.case, cfg.chapter).then(function (tables) {
        self.setStatus(''); self.setBaseDataset(tables);
      }).catch(function (e) { self.showError(e.message); });
      return;
    }
    this.setBaseDataset({});
  };

  SqlWidget.prototype.setBaseDataset = function (base) {
    this.dataset = base || {};
    this.onDataReady();
  };

  /* Load this widget's dataset into the shared engine, then run any `setup`
     statements. Setup runs LIVE (not snapshotted) so CREATE TABLE keeps its
     column metadata — required for positional INSERTs and structural checks.
     Used to (a) prepare a fresh table for "start empty" INSERT demos, and
     (b) replay prior correct answers for the chapter test's running story. */
  SqlWidget.prototype.primeEngine = function () {
    loadTables(this.dataset || {});
    var setup = this.cfg.setup;
    if (setup && setup.length) setup.forEach(function (s) { alasql(s); });
  };

  /* Execute one SQL string against the already-primed engine (no reload). */
  SqlWidget.prototype.exec = function (sql) {
    var start = performance.now();
    try {
      var res = alasql(sql);
      var ms = (performance.now() - start).toFixed(1);
      var rows = isRowsArray(res) ? res
        : (Array.isArray(res) && res.length && isRowsArray(res[res.length - 1])) ? res[res.length - 1]
        : null;
      return { rows: rows, raw: res, ms: ms, error: null };
    } catch (e) {
      return { rows: null, raw: null, ms: null, error: (e && e.message) ? e.message : String(e) };
    }
  };

  SqlWidget.prototype.onDataReady = function () {
    if (!this.showObjects) return;
    // Reflect the true starting state, including any setup-created tables.
    try { this.primeEngine(); this.renderObjects('live', false); }
    catch (e) { this.renderObjects(this.dataset, false); }
  };

  /* ---- live "Database" objects panel ---- */
  function liveObjects() {
    return Object.keys(alasql.tables || {}).map(function (name) {
      var t = alasql.tables[name];
      var cols = (t.columns && t.columns.length) ? t.columns.map(function (c) { return c.columnid; })
        : (t.data && t.data.length ? Object.keys(t.data[0]) : []);
      return { name: name, columns: cols, rows: (t.data ? t.data.length : 0) };
    });
  }
  function datasetObjects(data) {
    return Object.keys(data || {}).map(function (name) {
      var rows = data[name] || [];
      return { name: name, columns: rows.length ? Object.keys(rows[0]) : [], rows: rows.length };
    });
  }
  SqlWidget.prototype.renderObjects = function (source, flash) {
    if (!this.objBody) return;
    var list = (source === 'live') ? liveObjects() : datasetObjects(source);
    this._objList = list;
    this.paintObjects(list, flash);
  };
  SqlWidget.prototype.paintObjects = function (list, flash) {
    var body = this.objBody; if (!body) return;
    body.innerHTML = '';
    var self = this;
    if (!list.length) {
      var e = div('empty-note'); e.textContent = this.t('db_empty'); body.appendChild(e);
      this._objSig = ''; return;
    }
    var sigOf = function (o) { return o.name + ':' + o.rows + ':' + o.columns.join(','); };
    var prev = this._objSig;
    list.forEach(function (o) {
      var wrap = div('schema-table');
      var head = div('tname-row');
      var tn = document.createElement('span'); tn.className = 'tname'; tn.textContent = o.name;
      var rc = document.createElement('span'); rc.className = 'row-count';
      rc.textContent = o.rows + ' ' + (o.rows === 1 ? self.t('row_word') : self.t('rows_word'));
      head.appendChild(tn); head.appendChild(rc);
      wrap.appendChild(head);
      var cols = div('schema-cols');
      o.columns.forEach(function (c) { var chip = document.createElement('span'); chip.className = 'schema-col'; chip.textContent = c; cols.appendChild(chip); });
      wrap.appendChild(cols);
      if (flash && prev != null && prev.split('|').indexOf(sigOf(o)) < 0) wrap.classList.add('obj-changed');
      body.appendChild(wrap);
    });
    this._objSig = list.map(sigOf).join('|');
  };

  SqlWidget.prototype.setStatus = function (text, cls) {
    this.status.textContent = text || '';
    this.status.className = 'status' + (cls ? ' ' + cls : '');
  };

  SqlWidget.prototype.showError = function (msg) {
    this.errEl.hidden = false; this.errEl.textContent = msg;
    this.resultsEl.innerHTML = '';
    this.setStatus('error', 'err');
  };
  SqlWidget.prototype.clearError = function () { this.errEl.hidden = true; this.errEl.textContent = ''; };
  SqlWidget.prototype.clearGrade = function () { this.gradeEl.hidden = true; this.gradeEl.className = 'grade-banner'; };

  SqlWidget.prototype.pulse = function () {
    var el = this.el;
    el.classList.remove('running'); void el.offsetWidth; el.classList.add('running');
    setTimeout(function () { el.classList.remove('running'); }, 550);
  };

  /* Run the editor's SQL against a fresh copy of this widget's dataset (+setup). */
  SqlWidget.prototype.run = function () {
    if (!this.dataset) { this.showError('Dataset still loading…'); return null; }
    this.clearError(); this.clearGrade();
    this.pulse();
    this.primeEngine();
    var res = this.exec(this.editor.value);
    if (res.error) { this.showError(res.error); if (this.showObjects) this.renderObjects('live', true); return res; }
    this.renderResults(res);
    if (this.showObjects) this.renderObjects('live', true);
    return res;
  };

  SqlWidget.prototype.renderResults = function (res) {
    var box = this.resultsEl; box.innerHTML = '';
    var rows = res.rows;
    if (!rows) {
      var note = div('empty-note'); note.textContent = this.t('statement_ok');
      box.appendChild(note);
      this.setStatus(res.ms + ' ms', 'ok');
      return;
    }
    if (rows.length === 0) {
      var n2 = div('empty-note'); n2.textContent = this.t('no_rows');
      box.appendChild(n2);
      this.setStatus('0 ' + this.t('rows_returned') + ' · ' + res.ms + ' ms', 'ok');
      return;
    }
    var cols = [];
    rows.forEach(function (r) { Object.keys(r).forEach(function (k) { if (cols.indexOf(k) < 0) cols.push(k); }); });
    var table = document.createElement('table'); table.className = 'result-table';
    var thead = document.createElement('thead'); var htr = document.createElement('tr');
    cols.forEach(function (c) { var th = document.createElement('th'); th.textContent = c; htr.appendChild(th); });
    thead.appendChild(htr); table.appendChild(thead);
    var tb = document.createElement('tbody');
    rows.forEach(function (r) {
      var tr = document.createElement('tr');
      cols.forEach(function (c) {
        var td = document.createElement('td');
        var f = fmtCell(r[c]);
        td.textContent = f.text; if (f.cls) td.className = f.cls;
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb); box.appendChild(table);
    var meta = div('results-meta');
    meta.textContent = rows.length + ' ' + this.t('rows_returned') + ' · ' + res.ms + ' ms';
    box.appendChild(meta);
    this.setStatus(rows.length + ' ' + this.t('rows_returned'), 'ok');
  };

  /* ---------- grading (exercise mode) ---------- */

  SqlWidget.prototype.check = function () {
    var g = this.cfg.grade || {};
    var result;
    try {
      if (g.mode === 'structural') result = this.gradeStructural(g);
      else if (g.mode === 'state') result = this.gradeState(g);
      else result = this.gradeResult(g);
    } catch (e) {
      result = { pass: false, error: (e && e.message) || String(e) };
    }
    this.showGrade(result);
    if (this.showObjects) this.renderObjects('live', true);
    var qid = this.el.getAttribute('data-qid');
    var ch = this.el.getAttribute('data-chapter');
    var lesson = this.el.getAttribute('data-lesson');
    if (qid && ch && lesson && window.Progress) {
      window.Progress.recordQuestion(ch, lesson, qid, !!result.pass);
    }
    return result;
  };

  /* Structural grading covers three schema shapes, driven by the config:
       CREATE  — { table, columns:[...] }        table exists + declares columns (+probe)
       ADD     — { table, columns:[...], probe:false }   an ALTER … ADD COLUMN; column now declared
       DROP    — { table, absent:[...] }          an ALTER … DROP COLUMN; column gone */
  SqlWidget.prototype.gradeStructural = function (g) {
    this.primeEngine();
    var r = this.exec(this.editor.value);                // runs student stmt on primed engine
    if (r.error) return { pass: false, error: r.error };
    var table = g.table;
    var tbl = alasql.tables[table];
    if (!tbl) return { pass: false, reason: 'no-table' };
    var cols = g.columns || [];
    var absent = g.absent || [];
    // alasql records a table's declared columns; check presence / absence there.
    var declared = (tbl.columns || []).map(function (c) { return String(c.columnid).toLowerCase(); });
    var haveCols = cols.every(function (c) { return declared.indexOf(String(c).toLowerCase()) >= 0; });
    var haveAbsent = absent.every(function (c) { return declared.indexOf(String(c).toLowerCase()) < 0; });
    // Optional probe insert (CREATE only) as a secondary usability check.
    var usable = true;
    if (g.probe !== false && cols.length) {
      try {
        var probe = {}; cols.forEach(function (c, i) { probe[c] = /id$/i.test(c) ? (9000 + i) : ('probe' + i); });
        alasql('INSERT INTO ' + table + ' (' + cols.join(', ') + ') VALUES (' + cols.map(function (c) { return JSON.stringify(probe[c]); }).join(', ') + ')');
      } catch (e) { usable = false; }
      try { alasql('DELETE FROM ' + table + ' WHERE id >= 9000'); } catch (e3) {}
    }
    try { this.renderResults({ rows: alasql('SELECT * FROM ' + table), ms: r.ms }); } catch (e2) {}
    return { pass: haveCols && haveAbsent && usable, reason: (haveCols && haveAbsent) ? '' : 'bad-columns' };
  };

  SqlWidget.prototype.gradeResult = function (g) {
    var r = this.run();                              // runs + renders student's query
    if (!r || r.error) return { pass: false, error: r && r.error };
    var actual = r.rows || [];
    var expected = this.computeExpected(g.expected);
    return { pass: compareResultSets(actual, expected, { orderMatters: !!g.orderMatters }) };
  };

  SqlWidget.prototype.gradeState = function (g) {
    // 1. compute expected on a clean engine FIRST (computeExpected re-primes),
    //    so the student's mutation below is the last thing to touch the engine —
    //    that leaves the objects sidebar showing the student's real result.
    var expected = g.expectEmpty ? [] : this.computeExpected(g.expected);
    // 2. run the student's mutation against a freshly primed engine
    this.primeEngine();
    var r = this.exec(this.editor.value);
    if (r.error) { this.showError(r.error); return { pass: false, error: r.error }; }
    this.clearError();
    // 3. inspect the resulting state with the check query (no reload)
    var actual = alasql(g.check) || [];
    this.renderResults({ rows: actual, ms: r.ms });
    return { pass: compareResultSets(actual, expected, { orderMatters: !!g.orderMatters }) };
  };

  /* expected may be a SQL string (run against a freshly primed engine) or a
     literal row array. */
  SqlWidget.prototype.computeExpected = function (expected) {
    if (Array.isArray(expected)) return expected;
    if (typeof expected === 'string') {
      this.primeEngine();
      var r = this.exec(expected);
      return r.rows || [];
    }
    return [];
  };

  SqlWidget.prototype.showGrade = function (result) {
    var g = this.gradeEl;
    g.hidden = false;
    if (result.error) {
      g.className = 'grade-banner fail';
      g.innerHTML = '<span class="mark">✕</span><span>' + escapeHtml(result.error) + '</span>';
      shake(this.el);
      return;
    }
    if (result.pass) {
      g.className = 'grade-banner pass';
      g.innerHTML = '<span class="mark">✓</span><span data-i18n="correct">' + this.t('correct') + '</span>';
      pulse(this.el);
    } else {
      g.className = 'grade-banner fail';
      g.innerHTML = '<span class="mark">✕</span><span data-i18n="incorrect">' + this.t('incorrect') + '</span>';
      shake(this.el);
    }
  };

  /* ---------- helpers ---------- */
  function div(cls) { var d = document.createElement('div'); if (cls) d.className = cls; return d; }
  function button(cls, i18nKey) {
    var b = document.createElement('button'); b.type = 'button'; b.className = cls;
    b.setAttribute('data-i18n', i18nKey);
    b.textContent = window.I18N ? window.I18N.t(i18nKey) : i18nKey;
    return b;
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function pulse(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('pulse'); setTimeout(function () { el.classList.remove('pulse'); }, 500); }
  function shake(el) { el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('shake'); setTimeout(function () { el.classList.remove('shake'); }, 450); }

  /* ---------- boot ---------- */
  var instances = [];
  function initAll(root) {
    (root || document).querySelectorAll('.qb-widget').forEach(function (el) {
      if (el.__sqlwidget) return;
      var w = new SqlWidget(el);
      el.__sqlwidget = w; instances.push(w);
    });
  }
  // relabel the objects panel (row words) on language change, without flashing
  document.addEventListener('i18n:change', function () {
    instances.forEach(function (w) { if (w.showObjects && w._objList) w.paintObjects(w._objList, false); });
  });

  window.SqlWidget = SqlWidget;
  window.SqlWidgets = { initAll: initAll, instances: instances, _core: { runQuery: runQuery, compareResultSets: compareResultSets, loadTables: loadTables } };
})();
