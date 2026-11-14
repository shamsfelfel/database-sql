/* ============================================================
   Code blocks, the "evolve" component, and the inline quizzes
   that punctuate a lesson.

   SYNTAX COLOURING
   window.DBTHighlight(src, lang) returns highlighted HTML. One
   single-pass tokenizer per language: a list of [class, regex]
   rules joined into one alternation, so the first rule that
   matches at the leftmost position wins. It is not a parser and
   does not try to be: it runs on fixed, already-correct code that
   was written to be read.

     python (default)  json  excel  dax  m  sql  bash
     csv (header row)  text (no colour)  py-repl (>>> sessions)

   Classes: t-str t-com t-self t-kw t-fn t-num (as before) and
   t-op t-prop t-prompt t-out (styled in base.css).

   The execution lab and the question banks borrow the same
   function (trace.js, assess.js call it with one argument, which
   means Python), so a line looks identical wherever it sits.

   CODE BLOCKS     pre.code > code  ->  language badge + copy
                   button in a bar that never covers the code.
   EVOLVE          .evolve > .ver*  ->  numbered tabs, a diff
                   against the previous version, prev/next.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------- helpers */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function sp(cls, text) {
    return '<span class="' + cls + '">' + esc(text) + "</span>";
  }

  function cur() {
    return document.documentElement.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  function S(re) { return re.source; }

  function words(list) { return "\\b(?:" + list + ")\\b"; }

  /* Rule handler: leading blanks stay plain, the rest takes `cls`. */
  function lead(cls) {
    return function (t) {
      var ws = /^[ \t]*/.exec(t)[0];
      return esc(ws) + sp(cls, t.slice(ws.length));
    };
  }

  /* Rule handler: first character plain (a dot), the rest takes `cls`. */
  function afterDot(cls) {
    return function (t) { return esc(t.charAt(0)) + sp(cls, t.slice(1)); };
  }

  /* ---------------------------------------------------------- python */

  var PY_KW = "False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|" +
              "finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield";

  /* Builtins and the names a data-analysis lesson reaches for. Anything
     here is coloured as a library/builtin when it stands alone; after a
     dot every call is a function and every other name is a property. */
  var PY_NAMES = ("print|len|range|str|int|float|bool|list|dict|set|tuple|sum|min|max|sorted|enumerate|zip|" +
    "round|abs|input|open|isinstance|hasattr|getattr|setattr|type|property|staticmethod|classmethod|" +
    "super|object|Exception|ValueError|TypeError|KeyError|AttributeError|NotImplementedError|ABC|" +
    "abstractmethod|dataclass|datetime|date|Decimal|" +
    "all|any|map|filter|reversed|repr|format|id|iter|next|divmod|pow|callable|vars|dir|bytes|frozenset|" +
    "IndexError|ZeroDivisionError|FileNotFoundError|StopIteration|RuntimeError|OSError|" +
    "pd|np|plt|sns|df|Series|DataFrame|Index|Categorical|Timestamp|Timedelta|NaT|" +
    "requests|json|pathlib|Path|os|sys|re|math|random|csv|sqlite3|statistics|scipy|sklearn|stats|" +
    "read_csv|read_excel|read_json|read_parquet|read_sql|read_html|read_table|json_normalize|" +
    "to_numeric|to_datetime|to_timedelta|get_dummies|cut|qcut|melt|pivot_table|crosstab|" +
    "concat|merge|merge_asof|astype|groupby|isna|notna|isnull|notnull|dropna|fillna|" +
    "train_test_split|StandardScaler|LinearRegression|Counter|defaultdict|timedelta").split("|").join("|");

  var PY_RULES = [
    ["t-str", S(/(?:\b[rRbBfFuU]{1,2})?(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\[\s\S])*"|'(?:[^'\\\n]|\\[\s\S])*')/)],
    ["t-com", S(/#[^\n]*/)],
    [lead("t-fn"), S(/^[ \t]*@[A-Za-z_][\w.]*/)],
    ["t-self", words("self|cls")],
    ["t-kw", words(PY_KW)],
    [afterDot("t-fn"), S(/\.[A-Za-z_]\w*(?=\s*\()/)],
    [afterDot("t-prop"), S(/\.[A-Za-z_]\w*/)],
    ["t-fn", words(PY_NAMES)],
    ["t-num", S(/\b(?:0[xX][0-9a-fA-F_]+|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/)],
    ["t-op", S(/==|!=|<=|>=|\*\*=?|\/\/=?|->|:=|[-+*\/%<>=|&^~]=?/)]
  ];

  /* ---------------------------------------------------------- json */

  var JSON_RULES = [
    ["t-com", S(/\/\/[^\n]*/)],
    ["t-prop", S(/"(?:[^"\\\n]|\\.)*"(?=[ \t]*:)/)],
    ["t-str", S(/"(?:[^"\\\n]|\\.)*"/)],
    ["t-num", S(/-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/)],
    ["t-kw", words("true|false|null")],
    ["t-op", S(/[{}\[\]:,]/)]
  ];

  /* ---------------------------------------------------------- excel */

  var XL_CELL1 = S(/(?:\b|(?=\$))\$?[A-Za-z]{1,3}\$?\d+/);
  var XL_CELL2 = S(/\$?[A-Za-z]{1,3}\$?\d+/);
  var XL_COLS = S(/(?:\b|(?=\$))\$?[A-Za-z]{1,3}:\$?[A-Za-z]{1,3}/);
  var XL_SHEET = S(/(?:'[^'\n]+'|[A-Za-z_][\w.]*)!/);
  var XL_REF = "(?:" + XL_SHEET + ")?(?:" + XL_CELL1 + "(?::" + XL_CELL2 + ")?|" + XL_COLS + ")#?(?![\\w(\\[])";

  var EXCEL_RULES = [
    ["t-com", S(/\/\/[^\n]*/)],
    ["t-str", S(/"(?:[^"\n]|"")*"/)],
    ["t-kw", S(/#(?:N\/A|REF!|VALUE!|DIV\/0!|NAME\?|NULL!|NUM!|SPILL!|CALC!)/)],
    ["t-prop", S(/(?:[A-Za-z_][\w.]*)?\[(?:[^\[\]\n]|\[[^\]\n]*\])*\]/)],
    ["t-fn", S(/[A-Za-z_][\w.]*(?=[ \t]*\()/)],
    ["t-self", XL_REF],
    ["t-num", S(/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?%?/)],
    ["t-kw", words("TRUE|FALSE")],
    ["t-op", S(/<>|<=|>=|[-+*\/^&=<>@]/)]
  ];

  /* ---------------------------------------------------------- dax */

  var DAX_KW = "VAR|RETURN|DEFINE|EVALUATE|MEASURE|COLUMN|TABLE|ORDER BY|START AT|ASC|DESC|IN|NOT|TRUE|FALSE";

  var DAX_RULES = [
    ["t-com", S(/\/\/[^\n]*|--[^\n]*|\/\*[\s\S]*?\*\//)],
    ["t-str", S(/"(?:[^"\n]|"")*"/)],
    [lead("t-self"), S(/^[ \t]*(?!(?:VAR|RETURN|DEFINE|EVALUATE|MEASURE|COLUMN|TABLE|ORDER|START)\b)[A-Za-z_][\w %.\-]*?(?=[ \t]*:?=(?!=))/)],
    [function (t) {
      var m = /^(VAR)([ \t]+)(.*)$/.exec(t);
      return sp("t-kw", m[1]) + esc(m[2]) + sp("t-self", m[3]);
    }, S(/\bVAR[ \t]+[A-Za-z_]\w*/)],
    ["t-prop", S(/(?:'[^'\n]+'|[A-Za-z_]\w*)\[[^\]\n]+\]|'[^'\n]+'/)],
    ["t-self", S(/\[[^\]\n]+\]/)],
    ["t-kw", words(DAX_KW)],
    ["t-fn", S(/[A-Za-z_][\w.]*(?=[ \t]*\()/)],
    ["t-num", S(/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/)],
    ["t-op", S(/&&|\|\||:=|<>|<=|>=|[-+*\/^&=<>]/)]
  ];

  /* ---------------------------------------------------------- power query m */

  var M_TYPES = "number|text|logical|date|datetime|datetimezone|time|duration|binary|any|anynonnull|none|list|record|table|function";

  var M_RULES = [
    ["t-com", S(/\/\/[^\n]*|\/\*[\s\S]*?\*\//)],
    ["t-str", S(/"(?:[^"\n]|"")*"/)],
    [lead("t-self"), S(/^[ \t]*(?:#"(?:[^"\n]|"")*"|[A-Za-z_][\w.]*)(?=[ \t]*=(?![=>]))/)],
    ["t-self", S(/#"(?:[^"\n]|"")*"/)],
    ["t-fn", S(/#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/)],
    [function (t) {
      var m = /^(type|as)(\s+)(nullable\s+)?(\w+)$/.exec(t);
      return sp("t-kw", m[1]) + esc(m[2]) + (m[3] ? sp("t-kw", m[3].replace(/\s+$/, "")) + esc(/\s+$/.exec(m[3])[0]) : "") + sp("t-fn", m[4]);
    }, "\\b(?:type|as)\\s+(?:nullable\\s+)?(?:" + M_TYPES + ")\\b"],
    ["t-fn", S(/\b[A-Z][A-Za-z0-9]*(?:\.[A-Za-z0-9]+)+\b/)],
    ["t-kw", words("let|in|each|if|then|else|try|otherwise|error|and|or|not|as|is|meta|type|section|shared|true|false|null|nullable")],
    ["t-self", S(/\b_\b/)],
    ["t-prop", S(/\[[A-Za-z_][\w ]*\]/)],
    ["t-num", S(/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/)],
    ["t-op", S(/=>|<>|<=|>=|\.\.|&|[-+*\/=<>]/)]
  ];

  /* ---------------------------------------------------------- sql */

  var SQL_KW = ("SELECT|FROM|WHERE|GROUP|BY|ORDER|HAVING|JOIN|INNER|LEFT|RIGHT|FULL|OUTER|CROSS|ON|AS|AND|OR|NOT|IN|IS|NULL|" +
    "LIKE|BETWEEN|LIMIT|OFFSET|DISTINCT|UNION|ALL|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|ALTER|DROP|" +
    "INDEX|VIEW|CASE|WHEN|THEN|ELSE|END|ASC|DESC|WITH|OVER|PARTITION|EXISTS|TOP|PRIMARY|KEY|FOREIGN|REFERENCES|" +
    "DEFAULT|CHECK|UNIQUE|TRUE|FALSE|USING|EXCEPT|INTERSECT");
  var SQL_TYPES = "INTEGER|INT|BIGINT|SMALLINT|VARCHAR|CHAR|REAL|FLOAT|DOUBLE|DECIMAL|NUMERIC|BOOLEAN|TIMESTAMP|DATETIME|BLOB";

  var SQL_RULES = [
    ["t-com", S(/--[^\n]*|\/\*[\s\S]*?\*\//)],
    ["t-str", S(/'(?:[^']|'')*'/)],
    ["t-prop", S(/"[^"\n]*"|`[^`\n]*`|\[[^\]\n]+\]/)],
    ["t-kw", words(SQL_KW)],
    ["t-fn", words(SQL_TYPES)],
    ["t-fn", S(/[A-Za-z_]\w*(?=[ \t]*\()/)],
    ["t-num", S(/\b\d+(?:\.\d+)?\b/)],
    ["t-op", S(/<>|!=|<=|>=|\|\||[-+*\/%=<>]/)]
  ];

  /* ---------------------------------------------------------- bash / powershell */

  var SH_CMDS = ("pip|pip3|pipx|python|python3|py|jupyter|ipython|conda|mamba|git|cd|ls|dir|mkdir|cp|mv|rm|del|cat|echo|export|" +
    "set|source|activate|deactivate|npm|npx|node|curl|wget|sudo|apt|apt-get|brew|choco|winget|where|which|touch|head|" +
    "tail|grep|sort|uniq|wc|chmod|tar|unzip|pwd|clear|cls|copy|type|venv|virtualenv|papermill|streamlit|pytest|" +
    "sqlite3|psql|mysql|docker|exit|powershell|pwsh|Set-ExecutionPolicy|Get-Command|Invoke-WebRequest|Get-Content|" +
    "Set-Location|New-Item|Remove-Item|Get-ChildItem|Write-Host");

  var SH_RULES = [
    [lead("t-prompt"), S(/^[ \t]*(?:\$|PS [^>\n]*>|[A-Za-z]:\\[^>\n]*>)(?=[ \t])/)],
    [lead("t-com"), S(/(?:^|[ \t])#[^\n]*/)],
    ["t-str", S(/"(?:[^"\\\n]|\\.)*"|'[^'\n]*'/)],
    ["t-self", S(/\$\{[^}\n]*\}|\$[A-Za-z_]\w*(?::\w+)?|\$[0-9?!#@*$]|%[A-Za-z_]\w*%/)],
    [lead("t-prop"), S(/(?:^|[ \t])--?[A-Za-z][\w-]*(?:=[^\s"']+)?/)],
    [function (t) {
      var m = /^[^A-Za-z]*/.exec(t)[0];
      return esc(m) + sp("t-fn", t.slice(m.length));
    }, "(?:^|[ \\t|;&(])(?:" + SH_CMDS + ")(?![\\w/.-])"],
    ["t-num", S(/\b\d+(?:\.\d+)*\b/)],
    ["t-op", S(/&&|\|\|?|>>?|<|;|&|\\(?=[ \t]*$)/)]
  ];

  /* ---------------------------------------------------------- engine */

  var DEFS = {
    python: { flags: "gm", rules: PY_RULES },
    json:   { flags: "gm", rules: JSON_RULES },
    excel:  { flags: "gmi", rules: EXCEL_RULES },
    dax:    { flags: "gm", rules: DAX_RULES },
    m:      { flags: "gm", rules: M_RULES },
    sql:    { flags: "gmi", rules: SQL_RULES },
    bash:   { flags: "gm", rules: SH_RULES }
  };

  var COMPILED = {};

  /* Every rule is one capture group, so the group that matched says
     which rule did. A rule source with a capture group of its own would
     shift the numbering, which is why compile() counts them. */
  function compile(name) {
    if (COMPILED[name] !== undefined) return COMPILED[name];
    var def = DEFS[name], parts = [], i;
    for (i = 0; i < def.rules.length; i++) parts.push("(" + def.rules[i][1] + ")");
    var src = parts.join("|");
    var groups = new RegExp(src + "|", def.flags).exec("").length - 1;
    COMPILED[name] = groups === def.rules.length
      ? { re: new RegExp(src, def.flags), rules: def.rules } : null;
    return COMPILED[name];
  }

  function run(c, src) {
    var re = c.re, rules = c.rules, out = "", last = 0, m, k, rule;
    re.lastIndex = 0;
    while ((m = re.exec(src)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      out += esc(src.slice(last, m.index));
      for (k = 1; k <= rules.length; k++) if (m[k] !== undefined) break;
      rule = rules[k - 1];
      out += typeof rule[0] === "function" ? rule[0](m[0]) : sp(rule[0], m[0]);
      last = m.index + m[0].length;
    }
    return out + esc(src.slice(last));
  }

  var ALIASES = {
    py: "python", python3: "python", ipynb: "python", jupyter: "python",
    jsonc: "json", json5: "json",
    xlsx: "excel", formula: "excel", xl: "excel", spreadsheet: "excel",
    powerquery: "m", pq: "m", mcode: "m", "power-query": "m",
    tsql: "sql", sqlite: "sql", postgres: "sql", mysql: "sql",
    sh: "bash", shell: "bash", zsh: "bash", console: "bash", cmd: "bash",
    powershell: "bash", ps: "bash", ps1: "bash", terminal: "bash",
    tsv: "csv",
    txt: "text", plain: "text", output: "text", none: "text",
    repl: "py-repl", pycon: "py-repl", "python-repl": "py-repl"
  };

  function normLang(l) {
    l = String(l == null ? "" : l).toLowerCase().replace(/^\s+|\s+$/g, "");
    if (!l) return "python";
    if (ALIASES.hasOwnProperty(l)) l = ALIASES[l];
    if (DEFS.hasOwnProperty(l) || l === "csv" || l === "text" || l === "py-repl") return l;
    return "text";
  }

  /* csv: no colouring beyond the header row. */
  function highlightCsv(src) {
    var nl = src.indexOf("\n");
    var first = nl < 0 ? src : src.slice(0, nl);
    return sp("t-prop", first) + (nl < 0 ? "" : esc(src.slice(nl)));
  }

  /* py-repl: >>> and ... are prompts, anything else is output. */
  function highlightRepl(src) {
    var lines = src.split("\n"), out = [], i, m;
    for (i = 0; i < lines.length; i++) {
      m = /^(\s*)(>>>|\.\.\.)(?: (.*))?$/.exec(lines[i]);
      if (m) {
        out.push(esc(m[1]) + sp("t-prompt", m[2]) +
          (m[3] !== undefined ? " " + run(compile("python"), m[3]) : ""));
      } else if (lines[i] === "") {
        out.push("");
      } else {
        out.push(sp("t-out", lines[i]));
      }
    }
    return out.join("\n");
  }

  function highlight(src, lang) {
    src = String(src == null ? "" : src);
    var l = normLang(lang);
    try {
      if (l === "text") return esc(src);
      if (l === "csv") return highlightCsv(src);
      if (l === "py-repl") return highlightRepl(src);
      var c = compile(l);
      return c ? run(c, src) : esc(src);
    } catch (e) {
      return esc(src);
    }
  }

  window.DBTHighlight = highlight;

  /* ---------------------------------------------------------- UI strings */

  var LANG_LABEL = {
    python: "Python", json: "JSON", excel: "Excel", dax: "DAX", m: "Power Query M",
    sql: "SQL", bash: "Shell", csv: "CSV", text: "Text", "py-repl": "Python REPL"
  };

  var UI = {
    versions:  { en: "Versions", ar: "النسخ" },
    first:     { en: "First version", ar: "النسخة الأولى" },
    nochange:  { en: "No code changes", ar: "لا تغيير في الكود" },
    stat:      { en: "+{a} new · −{r} removed", ar: "+{a} جديد · −{r} محذوف" },
    stat1:     { en: "+{a} new", ar: "+{a} جديد" },
    show:      { en: "Show what changed", ar: "أظهر ما تغيّر" },
    prev:      { en: "Previous version", ar: "النسخة السابقة" },
    next:      { en: "Next version", ar: "النسخة التالية" },
    removed:   { en: "Removed from the previous version ({n})", ar: "حُذف من النسخة السابقة ({n})" },
    version:   { en: "Version {n}", ar: "النسخة {n}" }
  };

  function T(key, vars) {
    var e = UI[key], s = e ? (e[cur()] || e.en) : key, k;
    if (vars) for (k in vars) if (vars.hasOwnProperty(k)) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }

  function label(key) {
    return window.I18N ? window.I18N.t(key) : key;
  }

  /* ---------------------------------------------------------- code blocks */

  function addCopy(bar, src) {
    var btn = document.createElement("button");
    btn.className = "copy";
    btn.setAttribute("data-ui", "copy");
    btn.type = "button";
    btn.textContent = label("copy");

    btn.onclick = function () {
      var done = function () {
        btn.textContent = label("copied");
        setTimeout(function () { btn.textContent = label("copy"); }, 1400);
      };
      var started = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(src).then(done, function () {});
          started = true;
        }
      } catch (e) {}
      if (!started) {
        /* file:// and older browsers have no async clipboard. */
        var ta = document.createElement("textarea");
        ta.value = src;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (e2) {}
        document.body.removeChild(ta);
      }
    };
    bar.appendChild(btn);
  }

  /* A button inside a button is not valid markup, so answer options
     (which are buttons) get colour but no bar. */
  function insideButton(node) {
    for (var n = node.parentNode; n && n.nodeType === 1; n = n.parentNode) {
      if (n.tagName === "BUTTON") return true;
    }
    return false;
  }

  function addBar(pre, code, src, lang) {
    var bar = document.createElement("div");
    bar.className = "code-bar";
    var badge = document.createElement("span");
    badge.className = "lang-badge";
    badge.textContent = LANG_LABEL[lang] || lang;
    bar.appendChild(badge);
    addCopy(bar, src);
    pre.insertBefore(bar, code);
    pre.classList.add("has-bar");
  }

  function paint(scope) {
    var codes = (scope || document).querySelectorAll("pre.code > code");
    for (var i = 0; i < codes.length; i++) {
      var code = codes[i];
      if (code.getAttribute("data-done")) continue;
      var pre = code.parentNode;
      var lang = normLang(pre.getAttribute("data-lang"));
      var src = code.textContent.replace(/^\n/, "").replace(/\s+$/, "");
      code.innerHTML = highlight(src, lang);
      code.setAttribute("data-done", "1");
      pre._src = src;
      pre._lang = lang;
      if (!pre.getAttribute("data-lang")) pre.setAttribute("data-lang", lang);
      if (!insideButton(pre)) addBar(pre, code, src, lang);
    }
    markScrollable(scope || document);
  }

  /* A region that scrolls sideways has to be reachable by keyboard. */
  function markScrollable(scope) {
    var codes = scope.querySelectorAll("pre.has-bar > code");
    for (var i = 0; i < codes.length; i++) {
      var c = codes[i];
      if (!c.offsetWidth) continue;
      if (c.scrollWidth > c.clientWidth + 1) {
        c.setAttribute("tabindex", "0");
      } else if (c.getAttribute("tabindex") === "0") {
        c.removeAttribute("tabindex");
      }
    }
  }

  /* ---------------------------------------------------------- evolve */

  /* Split highlighted HTML into per-line HTML. Spans are flat (they never
     nest), so a span still open at the end of a line is closed there and
     reopened on the next one. */
  function splitHtmlLines(html) {
    var raw = html.split("\n"), out = [], open = "", i, line, m;
    for (i = 0; i < raw.length; i++) {
      line = open + raw[i];
      if (line.lastIndexOf("<span ") > line.lastIndexOf("</span>")) {
        m = /<span class="([^"]*)">[^<]*$/.exec(line);
        open = m ? '<span class="' + m[1] + '">' : "";
        line += "</span>";
      } else {
        open = "";
      }
      out.push(line);
    }
    return out;
  }

  /* Which lines of `b` are new relative to `a`, and which lines of `a`
     are gone: a longest-common-subsequence over trimmed, non-blank lines. */
  function diffLines(a, b) {
    var ka = [], ia = [], kb = [], ib = [], i, j;
    for (i = 0; i < a.length; i++) { var ta = a[i].replace(/^\s+|\s+$/g, ""); if (ta) { ka.push(ta); ia.push(i); } }
    for (j = 0; j < b.length; j++) { var tb = b[j].replace(/^\s+|\s+$/g, ""); if (tb) { kb.push(tb); ib.push(j); } }
    var n = ka.length, m = kb.length;
    var keepA = [], keepB = [];
    for (i = 0; i < n; i++) keepA.push(false);
    for (j = 0; j < m; j++) keepB.push(false);

    if (n * m > 160000) {
      /* absurdly long: fall back to plain set membership */
      var seenA = {}, seenB = {};
      for (i = 0; i < n; i++) seenA[ka[i]] = true;
      for (j = 0; j < m; j++) seenB[kb[j]] = true;
      for (i = 0; i < n; i++) keepA[i] = !!seenB[ka[i]];
      for (j = 0; j < m; j++) keepB[j] = !!seenA[kb[j]];
    } else {
      var dp = [];
      for (i = 0; i <= n; i++) {
        var row = [];
        for (j = 0; j <= m; j++) row.push(0);
        dp.push(row);
      }
      for (i = n - 1; i >= 0; i--) {
        for (j = m - 1; j >= 0; j--) {
          dp[i][j] = ka[i] === kb[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
      }
      i = 0; j = 0;
      while (i < n && j < m) {
        if (ka[i] === kb[j]) { keepA[i] = true; keepB[j] = true; i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
        else j++;
      }
    }

    var added = {}, removed = [];
    for (j = 0; j < m; j++) if (!keepB[j]) added[ib[j]] = true;
    for (i = 0; i < n; i++) if (!keepA[i]) removed.push(ia[i]);
    return { added: added, removed: removed };
  }

  function mk(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var evoSeq = 0;

  function buildEvolve(ev) {
    var vers = [], c;
    for (c = ev.firstElementChild; c; c = c.nextElementSibling) {
      if (c.classList.contains("ver")) vers.push(c);
    }
    ev.setAttribute("data-evo", "1");
    if (vers.length < 2) return;            /* nothing to step through */

    paint(ev);
    var uid = "evo" + (++evoSeq);
    var st = { vers: [], tabs: [], cur: 0 };
    var i, k;

    /* 1. read every version */
    for (i = 0; i < vers.length; i++) {
      var pre = vers[i].querySelector("pre.code");
      var code = pre ? pre.querySelector("code") : null;
      var src = pre ? (pre._src != null ? pre._src : code.textContent) : "";
      var lang = pre ? (pre._lang || normLang(pre.getAttribute("data-lang"))) : "python";
      st.vers.push({
        el: vers[i], pre: pre, code: code, lang: lang,
        lines: src.split("\n"),
        html: splitHtmlLines(highlight(src, lang)),
        en: vers[i].getAttribute("data-title-en"),
        ar: vers[i].getAttribute("data-title-ar"),
        diff: null
      });
    }

    /* 2. diff each version against the one before, and draw it */
    for (i = 0; i < st.vers.length; i++) {
      var v = st.vers[i];
      v.diff = i > 0 ? diffLines(st.vers[i - 1].lines, v.lines) : null;
      if (!v.code) continue;
      var h = '<span class="dls">';
      for (k = 0; k < v.html.length; k++) {
        h += '<span class="dl' + (v.diff && v.diff.added[k] ? " added" : "") + '">' + v.html[k] + "</span>";
      }
      v.code.innerHTML = h + "</span>";
      v.pre.classList.add("evo-code");

      if (v.diff && v.diff.removed.length) {
        var prev = st.vers[i - 1];
        var det = mk("details", "evo-removed");
        var sum = mk("summary");
        det.appendChild(sum);
        var body = mk("div", "rm-code");
        var rh = '<span class="dls">';
        for (k = 0; k < v.diff.removed.length; k++) {
          rh += '<span class="dl removed">' + prev.html[v.diff.removed[k]] + "</span>";
        }
        body.innerHTML = rh + "</span>";
        det.appendChild(body);
        v.pre.parentNode.insertBefore(det, v.pre.nextSibling);
        v.removedSummary = sum;
      }
    }

    /* 3. the chrome: tabs, title row, prev/next */
    var head = mk("div", "evo-head");
    var tabs = mk("div", "evo-tabs");
    tabs.setAttribute("role", "tablist");
    head.appendChild(tabs);

    var meta = mk("div", "evo-meta");
    var title = mk("div", "evo-title");
    title.setAttribute("aria-live", "polite");
    var stat = mk("span", "evo-stat");
    var toggle = mk("label", "evo-toggle");
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = true;
    var tlabel = mk("span", "evo-toggle-text");
    toggle.appendChild(cb);
    toggle.appendChild(tlabel);
    meta.appendChild(title);
    meta.appendChild(stat);
    meta.appendChild(toggle);

    var nav = mk("div", "evo-nav");
    var bPrev = mk("button", "evo-btn evo-prev");
    bPrev.type = "button";
    var bNext = mk("button", "evo-btn evo-next");
    bNext.type = "button";
    var count = mk("span", "evo-count");
    nav.appendChild(bPrev);
    nav.appendChild(count);
    nav.appendChild(bNext);

    for (i = 0; i < st.vers.length; i++) {
      var tab = mk("button", "evo-tab", "V" + (i + 1));
      tab.type = "button";
      tab.id = uid + "-t" + i;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", uid + "-p" + i);
      tab.setAttribute("data-i", String(i));
      tabs.appendChild(tab);
      st.tabs.push(tab);
      st.vers[i].el.id = st.vers[i].el.id || (uid + "-p" + i);
      tab.setAttribute("aria-controls", st.vers[i].el.id);
      st.vers[i].el.setAttribute("role", "tabpanel");
      st.vers[i].el.setAttribute("aria-labelledby", tab.id);
    }

    ev.insertBefore(meta, ev.firstChild);
    ev.insertBefore(head, ev.firstChild);
    ev.appendChild(nav);
    ev.classList.add("evolve-js", "evo-diff");
    ev.setAttribute("role", "group");

    st.title = title; st.stat = stat; st.tlabel = tlabel; st.cb = cb;
    st.bPrev = bPrev; st.bNext = bNext; st.count = count; st.tabsEl = tabs;
    ev._evo = st;

    /* 4. behaviour */
    cb.onchange = function () {
      if (cb.checked) ev.classList.add("evo-diff"); else ev.classList.remove("evo-diff");
    };
    bPrev.onclick = function () { showVersion(ev, st.cur - 1, false, true); };
    bNext.onclick = function () { showVersion(ev, st.cur + 1, false, true); };
    tabs.onclick = function (e) {
      var t = e.target;
      while (t && t !== tabs && !t.getAttribute("data-i")) t = t.parentNode;
      if (t && t !== tabs) showVersion(ev, +t.getAttribute("data-i"), false, false);
    };
    tabs.onkeydown = function (e) {
      var key = e.key, to;
      var rtl = document.documentElement.getAttribute("dir") === "rtl";
      if (key === "ArrowRight") to = st.cur + (rtl ? -1 : 1);
      else if (key === "ArrowLeft") to = st.cur + (rtl ? 1 : -1);
      else if (key === "Home") to = 0;
      else if (key === "End") to = st.vers.length - 1;
      else return;
      e.preventDefault();
      if (to < 0 || to >= st.vers.length) return;
      showVersion(ev, to, true, false);
    };

    showVersion(ev, 0, false, false);
  }

  function evoTitle(v, i) {
    var t = cur() === "ar" ? (v.ar || v.en) : (v.en || v.ar);
    return t || T("version", { n: i + 1 });
  }

  /* Everything in the chrome that depends on the language or the version. */
  function refreshEvolve(ev) {
    var st = ev._evo, i = st.cur, v = st.vers[i], k;
    st.title.textContent = evoTitle(v, i);
    for (k = 0; k < st.tabs.length; k++) {
      st.tabs[k].setAttribute("title", evoTitle(st.vers[k], k));
      st.tabs[k].setAttribute("aria-label", evoTitle(st.vers[k], k));
    }
    st.tabsEl.setAttribute("aria-label", T("versions"));
    var s;
    if (!v.diff) s = T("first");
    else {
      var a = 0, key;
      for (key in v.diff.added) if (v.diff.added.hasOwnProperty(key)) a++;
      var r = v.diff.removed.length;
      s = !a && !r ? T("nochange") : r ? T("stat", { a: a, r: r }) : T("stat1", { a: a });
    }
    st.stat.textContent = s;
    st.tlabel.textContent = T("show");
    st.bPrev.innerHTML = '<span class="evo-arrow" aria-hidden="true">‹</span><span></span>';
    st.bPrev.lastChild.textContent = T("prev");
    st.bNext.innerHTML = '<span></span><span class="evo-arrow" aria-hidden="true">›</span>';
    st.bNext.firstChild.textContent = T("next");
    st.count.textContent = (i + 1) + " / " + st.vers.length;
    st.bPrev.disabled = i === 0;
    st.bNext.disabled = i === st.vers.length - 1;
    for (k = 0; k < st.vers.length; k++) {
      if (st.vers[k].removedSummary) {
        st.vers[k].removedSummary.textContent = T("removed", { n: st.vers[k].diff.removed.length });
      }
    }
  }

  function showVersion(ev, i, focusTab, keepInView) {
    var st = ev._evo;
    if (i < 0 || i >= st.vers.length) return;
    st.cur = i;
    for (var k = 0; k < st.vers.length; k++) {
      var on = k === i;
      st.vers[k].el.hidden = !on;
      st.vers[k].el.classList.toggle("active", on);
      st.tabs[k].setAttribute("aria-selected", on ? "true" : "false");
      st.tabs[k].setAttribute("tabindex", on ? "0" : "-1");
      st.tabs[k].classList.toggle("on", on);
    }
    refreshEvolve(ev);
    if (focusTab) st.tabs[i].focus();
    /* keep the strip on screen when the new version is shorter or taller */
    if (keepInView) {
      var top = ev.getBoundingClientRect().top;
      if (top < 64) window.scrollTo(0, Math.max(0, (window.pageYOffset || 0) + top - 72));
    }
    /* make the active tab visible inside the scrolling strip */
    var tab = st.tabs[i];
    if (st.tabsEl.scrollWidth > st.tabsEl.clientWidth) {
      var tl = tab.offsetLeft, tr = tl + tab.offsetWidth;
      if (document.documentElement.getAttribute("dir") !== "rtl") {
        if (tl < st.tabsEl.scrollLeft) st.tabsEl.scrollLeft = tl - 8;
        else if (tr > st.tabsEl.scrollLeft + st.tabsEl.clientWidth) st.tabsEl.scrollLeft = tr - st.tabsEl.clientWidth + 8;
      } else if (tab.scrollIntoView) {
        try { tab.scrollIntoView({ block: "nearest", inline: "nearest" }); } catch (e) {}
      }
    }
    markScrollable(ev);
  }

  function enhanceEvolve(scope) {
    var list = (scope || document).querySelectorAll(".evolve");
    for (var i = 0; i < list.length; i++) {
      if (list[i].getAttribute("data-evo")) continue;
      try {
        buildEvolve(list[i]);
      } catch (e) {
        /* leave the stacked CSS fallback in place */
        if (window.console && console.error) console.error("evolve:", e);
      }
    }
  }

  function relabelEvolve() {
    var list = document.querySelectorAll(".evolve-js");
    for (var i = 0; i < list.length; i++) if (list[i]._evo) refreshEvolve(list[i]);
  }

  /* ---------------------------------------------------------- inline quizzes */

  /* A lesson quiz is a single question with its answer revealed on
     the first click: one attempt, no grading, no storage. The graded
     banks on the test pages are a different engine entirely. */
  function wireQuizzes(scope) {
    var quizzes = (scope || document).querySelectorAll(".quiz");
    for (var i = 0; i < quizzes.length; i++) {
      (function (quiz) {
        if (quiz.getAttribute("data-wired")) return;
        quiz.setAttribute("data-wired", "1");
        var opts = quiz.querySelectorAll(".opt");
        for (var j = 0; j < opts.length; j++) {
          opts[j].onclick = function () {
            if (quiz.getAttribute("data-answered")) return;
            quiz.setAttribute("data-answered", "1");
            var correct = this.getAttribute("data-correct") === "true";
            quiz.setAttribute("data-correct", correct ? "1" : "0");
            for (var k = 0; k < opts.length; k++) {
              opts[k].disabled = true;
              if (opts[k].getAttribute("data-correct") === "true") {
                opts[k].classList.add("right");
              }
            }
            if (!correct) this.classList.add("wrong");
            var fb = quiz.querySelector(".feedback");
            if (fb) fb.hidden = false;
            updateScores();
          };
        }
      })(quizzes[i]);
    }
  }

  /* The running tally a lesson shows after its first answered quiz. */
  function updateScores() {
    var boxes = document.querySelectorAll(".score");
    var quizzes = document.querySelectorAll(".quiz");
    var total = quizzes.length, right = 0, done = 0;
    for (var j = 0; j < quizzes.length; j++) {
      if (quizzes[j].getAttribute("data-answered")) {
        done++;
        if (quizzes[j].getAttribute("data-correct") === "1") right++;
      }
    }
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].textContent = (window.I18N ? window.I18N.t("score") : "{a}/{b}")
        .replace("{a}", right).replace("{b}", total);
      boxes[i].style.display = done ? "inline-block" : "none";
    }
  }

  /* ---------------------------------------------------------- init */

  var started = false, pending = null;

  function refresh() {
    pending = null;
    paint(document);
    enhanceEvolve(document);
  }

  /* Blocks that appear later (the question banks render on demand) get
     coloured too, without the renderer having to call us. */
  function watch() {
    if (!window.MutationObserver || !document.body) return;
    new MutationObserver(function (records) {
      if (pending) return;
      for (var i = 0; i < records.length; i++) {
        if (records[i].addedNodes && records[i].addedNodes.length) {
          pending = setTimeout(refresh, 30);
          return;
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    paint(document);
    enhanceEvolve(document);
    wireQuizzes(document);
    updateScores();
    if (started) return;
    started = true;
    document.addEventListener("da:lang", function () {
      updateScores();
      relabelEvolve();
    });
    var timer = null;
    window.addEventListener("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { markScrollable(document); }, 150);
    });
    watch();
  }

  window.CODE = { init: init, paint: paint, highlight: highlight, evolve: enhanceEvolve };
})();
