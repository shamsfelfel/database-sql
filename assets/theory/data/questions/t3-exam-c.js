/* Question bank: T3 chapter test C -- Advanced. The hard corners that cross lesson boundaries. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-exam-c"] = {
  title: { en: "Chapter Test C — Advanced", ar: "اختبار الفصل C — المستوى المتقدّم" },
  intro: {
    en: "24 questions on the corners where the lessons meet: a line nobody needs because another path already answers it, a second relationship between the same two entities, a must the tables cannot hold, a crow's foot at both ends, a matrix cell with no partner, a sentence read from one end only. The cases are the chapter's own — H.R., the restaurant, the library and the travel agency. Most questions need two or three lessons at once. Allow about 45 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الزوايا التي تلتقي فيها الدروس: خطّ لا يحتاجه أحد لأن طريقًا آخر يجيب عنه أصلًا، وعلاقة ثانية بين الكيانين أنفسهما، وmust لا تستطيع الجداول حملها، وقدم غراب عند الطرفين، وخلية في المصفوفة بلا نظير، وجملة تُقرأ من طرف واحد فقط. والحالات هي حالات الفصل نفسها — الموارد البشرية والمطعم والمكتبة ووكالة السفر. ومعظم الأسئلة يحتاج درسين أو ثلاثة معًا. خصّص نحو 45 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== which lines belong on the ERD */
    {
      id: "t3cx01", type: "tf", level: "easy",
      topics: ["t3-bidirectional", "t3-relationship", "t3-significance"],
      q: {
        en: "Lesson 1 says two lines between <code>EMPLOYEE</code> and <code>DEPARTMENT</code> are a mistake. So when H.R. adds \"each department may have one head, who is an employee\", the designer must not draw a second line: the head has to be shown on the existing <code>works in</code> / <code>responsible for</code> line.",
        ar: "يقول الدرس 1 إن رسم خطّين بين <code>EMPLOYEE</code> و<code>DEPARTMENT</code> خطأ. فحين تضيف الموارد البشرية «قد يكون لكل قسم رئيس واحد، وهو موظف»، يجب ألّا يرسم المصمّم خطًّا ثانيًا: يجب أن يظهر الرئيس على الخطّ الموجود <code>works in</code> / <code>responsible for</code>."
      },
      truth: false,
      hint: {
        en: "What exactly did Lesson 1 forbid — two lines for two readings of one link, or two different links?",
        ar: "ما الذي منعه الدرس 1 بالضبط — خطّين لقراءتين لرابط واحد، أم رابطين مختلفين؟"
      },
      explain: {
        en: "False. Lesson 1 forbade two lines for the two readings of one relationship. Heading a department is a different link, with its own two names (<code>headed by</code> / <code>head of</code>), its own halves and its own ends: Tyler works in Sales and heads nothing. It gets its own line. Folding it into <code>works in</code> would make one line mean two different things.",
        ar: "خطأ. منع الدرس 1 رسم خطّين لقراءتَي علاقة واحدة. أمّا رئاسة القسم فرابط مختلف، له اسماه (<code>headed by</code> / <code>head of</code>) ونصفاه وطرفاه: Tyler يعمل في Sales ولا يرأس شيئًا. فله خطّه الخاص. ودمجه في <code>works in</code> يجعل خطًّا واحدًا يعني شيئين مختلفين."
      }
    },
    {
      id: "t3cx02", type: "mcq", level: "hard",
      topics: ["t3-significance", "t3-relationship", "t3-marks-to-sql"],
      q: {
        en: "H.R. asks, \"Which city is Tyler in?\" The ERD already has <code>EMPLOYEE</code> <code>works in</code> one <code>DEPARTMENT</code>, and <code>DEPARTMENT</code> <code>located in</code> one <code>LOCATION</code>. A designer adds a third line, <code>EMPLOYEE</code> <code>based in</code> / <code>base of</code> <code>LOCATION</code>, solid at <code>EMPLOYEE</code>. What is the best review?",
        ar: "تسأل الموارد البشرية: «في أيّ مدينة يعمل Tyler؟» وفي المخطّط أصلًا <code>EMPLOYEE</code> <code>works in</code> قسمًا واحدًا <code>DEPARTMENT</code>، و<code>DEPARTMENT</code> <code>located in</code> موقعًا واحدًا <code>LOCATION</code>. يضيف مصمّم خطًّا ثالثًا، <code>EMPLOYEE</code> <code>based in</code> / <code>base of</code> <code>LOCATION</code>، متّصلًا عند <code>EMPLOYEE</code>. ما أفضل مراجعة؟"
      },
      options: [
        { en: "Keep it: the question matters to H.R., so the line is significant", ar: "أبقِه: السؤال مهمّ للموارد البشرية، فالخطّ ذو أهمية" },
        { en: "Remove it: the question is already answered through <code>works in</code> then <code>located in</code>, and a second path can contradict the first", ar: "احذفه: السؤال مُجاب أصلًا عبر <code>works in</code> ثم <code>located in</code>، والطريق الثاني قد يناقض الأول" },
        { en: "Keep it, but dashed, so it does not have to agree with the department", ar: "أبقِه، لكن متقطّعًا، حتى لا يلزمه أن يوافق القسم" },
        { en: "Remove it: a relationship may never skip over an entity that lies between two others", ar: "احذفه: لا يجوز للعلاقة أبدًا أن تتخطّى كيانًا يقع بين كيانين آخرين" }
      ],
      answer: 1,
      hint: {
        en: "Follow Tyler along the lines that exist. Is every step singular? Then what new fact does the third line record?",
        ar: "اتبع Tyler على الخطوط الموجودة. هل كل خطوة مفردة؟ فما الحقيقة الجديدة التي يسجّلها الخطّ الثالث؟"
      },
      explain: {
        en: "Tyler has one and only one department, and it has one and only one location, so the two existing lines already give his city exactly. The third line records nothing new; it becomes <code>employees.location_id</code>, a second copy that must change whenever Sales moves — and one day will not. The question is significant; the line is not. Dashed only makes the contradiction easier to store, and there is no rule against skipping an entity: if H.R. said some staff work away from their department's building, the line would record a new fact and would belong.",
        ar: "لـ Tyler قسم واحد فقط، وللقسم موقع واحد فقط، فالخطّان الموجودان يعطيان مدينته بدقّة. والخطّ الثالث لا يسجّل شيئًا جديدًا؛ بل يصبح <code>employees.location_id</code>، نسخة ثانية يجب أن تتغيّر كلما انتقل Sales — وستُنسى يومًا ما. السؤال ذو أهمية؛ أمّا الخطّ فلا. ورسمه متقطّعًا لا يفعل إلا أن يسهّل تخزين التناقض، ولا توجد قاعدة تمنع تخطّي كيان: لو قالت الموارد البشرية إن بعض الموظفين يعملون خارج مبنى قسمهم، لسجّل الخطّ حقيقة جديدة ولكان في مكانه."
      }
    },
    {
      id: "t3cx03", type: "output", level: "medium",
      topics: ["t3-significance", "t3-key-at-crows-foot", "t3-marks-to-sql"],
      q: {
        en: "An administrator built the extra <code>EMPLOYEE</code> – <code>LOCATION</code> line anyway: <code>employees</code> has its own <code>location_id</code> beside <code>department_id</code>. Locations: 1400 Gaza, 1500 Khan Younis, 1700 Rafah. Accounting (10) and Sales (15) are in 1400, Development (22) in 1500. Dana, Lawrence and Carlos work in Accounting, Tyler in Sales, Neil in Development, and each row's <code>location_id</code> was copied from the department. Then Sales moves, and the query runs. Fill in the result.",
        ar: "بنى مسؤولٌ خطَّ <code>EMPLOYEE</code> – <code>LOCATION</code> الزائد على أيّ حال: في <code>employees</code> عمود <code>location_id</code> خاص به بجانب <code>department_id</code>. المواقع: 1400 Gaza و1500 Khan Younis و1700 Rafah. وAccounting ‏(10) وSales ‏(15) في 1400، وDevelopment ‏(22) في 1500. يعمل Dana وLawrence وCarlos في Accounting، وTyler في Sales، وNeil في Development، ونُسخ <code>location_id</code> في كل صفّ من القسم. ثم ينتقل Sales، ويُنفَّذ الاستعلام. املأ النتيجة."
      },
      lang: "sql",
      code: "UPDATE departments SET location_id = 1700 WHERE department_id = 15;\n\nSELECT e.first_name, l1.city AS employee_says, l2.city AS department_says\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id\nJOIN locations l1 ON e.location_id = l1.location_id\nJOIN locations l2 ON d.location_id = l2.location_id\nWHERE e.location_id <> d.location_id\nORDER BY e.first_name;",
      blanks: [
        { accept: ["1", "one"], label: { en: "rows returned", ar: "عدد الصفوف" } },
        { accept: ["Tyler"], label: { en: "first_name", ar: "first_name" } },
        { accept: ["Gaza"], label: { en: "employee_says", ar: "employee_says" } }
      ],
      solution: { out: "first_name | employee_says | department_says\nTyler | Gaza | Rafah" },
      hint: {
        en: "The UPDATE touches one table only. Whose two copies of the location now disagree?",
        ar: "‏UPDATE لا يمسّ إلا جدولًا واحدًا. من الذي صارت نسختا موقعه مختلفتين الآن؟"
      },
      explain: {
        en: "Run in alasql: one row, Tyler | Gaza | Rafah. The move changed <code>departments</code>, and nothing told <code>employees</code>, so the database now gives two answers to \"which city is Tyler in?\". This is what a redundant line costs: every relationship becomes a column, and a column that repeats a fact reachable through other lines can fall out of step. Without the extra line there is one copy, and the move is one <code>UPDATE</code>.",
        ar: "بالتشغيل في alasql: صفّ واحد، Tyler | Gaza | Rafah. غيّر الانتقال جدول <code>departments</code>، ولم يُخبر أحدٌ <code>employees</code>، فصارت قاعدة البيانات تعطي جوابين عن «في أيّ مدينة يعمل Tyler؟». هذا ثمن الخطّ الزائد: كل علاقة تصبح عمودًا، والعمود الذي يكرّر حقيقة يمكن الوصول إليها عبر خطوط أخرى قد يتخلّف عنها. ومن دون الخطّ الزائد توجد نسخة واحدة، والانتقال <code>UPDATE</code> واحد."
      }
    },
    {
      id: "t3cx04", type: "multi", level: "medium",
      topics: ["t3-convention-checklist", "t3-matrix-purpose", "t3-business-decides-optionality", "t3-significance"],
      q: {
        en: "A classmate's H.R. ERD passes all six checks of Lesson 4's card, and every line reads back as two complete six-part ERDish sentences. Which defects can it still have? Choose every one.",
        ar: "يجتاز مخطّط الموارد البشرية لزميلك الفحوص الستة كلها في بطاقة الدرس 4، وكل خطّ فيه يُقرأ جملتين كاملتين بلغة ERDish من ستة أجزاء. أيّ العيوب يمكن أن تبقى فيه؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "A line the business never asked for, such as <code>JOB</code> to <code>REGION</code>", ar: "خطّ لم يطلبه العمل قطّ، مثل <code>JOB</code> إلى <code>REGION</code>" },
        { en: "A relationship nobody noticed, such as the manager loop on <code>EMPLOYEE</code>", ar: "علاقة لم ينتبه إليها أحد، مثل حلقة المدير على <code>EMPLOYEE</code>" },
        { en: "A dashed half where H.R. said must — an employee who may have no department", ar: "نصف متقطّع حيث قالت الموارد البشرية must — موظف قد لا يكون له قسم" },
        { en: "A softbox labelled <code>Employees</code>", ar: "صندوق مستدير عنوانه <code>Employees</code>" },
        { en: "A line whose only name is <code>WORKS IN</code>, in the middle", ar: "خطّ اسمه الوحيد <code>WORKS IN</code>، في منتصفه" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "The card and ERDish check how a line is drawn and said. Who checks whether the line should exist, or whether its rule is the business's?",
        ar: "البطاقة ولغة ERDish تفحصان كيف يُرسم الخطّ ويُقال. فمن يفحص هل ينبغي أن يوجد الخطّ، وهل قاعدته هي قاعدة العمل؟"
      },
      explain: {
        en: "The convention and ERDish guarantee a line is readable, not that it is right. An unwanted line still reads perfectly (significance, Lesson 1); a missing line has nothing to read at all, which is why the matrix exists (Lesson 6); and a wrong may is a well-formed sentence that states the wrong rule — only asking the business catches it (Lesson 2). The plural, mixed-case box fails check 2, and the single capitalised name fails check 6, so those two cannot survive the card.",
        ar: "العُرف ولغة ERDish يضمنان أن الخطّ مقروء، لا أنه صحيح. فالخطّ غير المطلوب يُقرأ تمامًا (الأهمية، الدرس 1)؛ والخطّ المفقود لا شيء فيه يُقرأ أصلًا، ولهذا وُجدت المصفوفة (الدرس 6)؛ والـ may الخاطئة جملة سليمة الشكل تقول القاعدة الخطأ — ولا يكشفها إلا سؤال العمل (الدرس 2). أمّا الصندوق بالاسم الجمع والأحرف المختلطة فيسقط في الفحص 2، والاسم الوحيد بالأحرف الكبيرة يسقط في الفحص 6، فلا يمكن أن يجتازا البطاقة."
      }
    },
    {
      id: "t3cx05", type: "error", level: "hard",
      topics: ["t3-mirror-cells", "t3-matrix-diagonal", "t3-named-both-ends"],
      q: {
        en: "A student lists the filled cells of the H.R. matrix for <code>EMPLOYEE</code>, <code>DEPARTMENT</code>, <code>JOB</code> and <code>LOCATION</code>, as row × column: name. Every line is written row first. Which lines leave a relationship end without its name? Choose both.",
        ar: "يسرد طالب الخلايا الممتلئة في مصفوفة الموارد البشرية لـ <code>EMPLOYEE</code> و<code>DEPARTMENT</code> و<code>JOB</code> و<code>LOCATION</code>، بالشكل صفّ × عمود: اسم. وكل سطر مكتوب بدءًا من الصفّ. أيّ الأسطر يترك طرف علاقة بلا اسم؟ اختر الاثنين."
      },
      lang: "text",
      code: "EMPLOYEE   x EMPLOYEE  : manager of\nEMPLOYEE   x DEPARTMENT: work in\nDEPARTMENT x EMPLOYEE  : responsible for\nEMPLOYEE   x JOB       : hold\nJOB        x EMPLOYEE  : (blank)\nDEPARTMENT x LOCATION  : located in\nLOCATION   x DEPARTMENT: address of",
      answer: [1, 5],
      solution: {
        code: "EMPLOYEE   x EMPLOYEE  : manager of / managed by\nEMPLOYEE   x DEPARTMENT: work in\nDEPARTMENT x EMPLOYEE  : responsible for\nEMPLOYEE   x JOB       : hold\nJOB        x EMPLOYEE  : held by\nDEPARTMENT x LOCATION  : located in\nLOCATION   x DEPARTMENT: address of",
        en: "The diagonal cell carries both names of the loop; the JOB row gets held by.",
        ar: "خلية القُطر تحمل اسمَي الحلقة كليهما؛ وصفّ JOB يأخذ held by."
      },
      hint: {
        en: "Every relationship has two ends, so two names. Where does each pair keep its two names — and what if the pair is an entity with itself?",
        ar: "لكل علاقة طرفان، فلها اسمان. أين يحفظ كل زوج اسميه — وماذا لو كان الزوج كيانًا مع نفسه؟"
      },
      explain: {
        en: "Line 5: the <code>EMPLOYEE</code> × <code>JOB</code> cell is filled, so the pair is related, but its mirror is blank — the <code>JOB</code> end has no name, and <code>held by</code> is lost. Mirror cells are filled together or not at all. Line 1 is the subtle one: a diagonal cell has no mirror, so the loop's two ends must both be named in that one cell, <code>manager of / managed by</code>. \"One cell\" tempts you to write one name; a recursive relationship still has two ends.",
        ar: "السطر 5: خلية <code>EMPLOYEE</code> × <code>JOB</code> ممتلئة، فالزوج مرتبط، لكن الخلية المقابلة فارغة — طرف <code>JOB</code> بلا اسم، و<code>held by</code> ضائع. والخلايا المتقابلة تمتلئ معًا أو لا تمتلئ أبدًا. والسطر 1 هو الخفيّ: خلية القُطر لا مقابل لها، فيجب أن يُسمّى طرفا الحلقة كلاهما في تلك الخلية الواحدة، <code>manager of / managed by</code>. و«خلية واحدة» تغري بكتابة اسم واحد؛ لكن العلاقة الذاتية (recursive) يبقى لها طرفان."
      }
    },

    /* ==================================================== when the halves meet the tables */
    {
      id: "t3cx06", type: "trace", level: "hard",
      topics: ["t3-recursive-optionality", "t3-nullable-manager-id", "t3-optionality-to-not-null"],
      q: {
        en: "A designer takes the scenario literally — \"every employee has one manager, including the managing director who manages him/herself\" — and draws the <code>managed by</code> half solid. The administrator builds <code>employees (employee_id NUMBER PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, manager_id NUMBER NOT NULL)</code>. The statements run one at a time on the empty table. Which are refused?",
        ar: "يأخذ مصمّم السيناريو بحرفه — «لكل موظف مدير واحد، بمن فيهم المدير العام الذي يدير نفسه» — فيرسم نصف <code>managed by</code> متّصلًا. ويبني المسؤول <code>employees (employee_id NUMBER PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, manager_id NUMBER NOT NULL)</code>. تُنفَّذ العبارات واحدة واحدة على الجدول الفارغ. أيّها يُرفض؟"
      },
      lang: "sql",
      code: "INSERT INTO employees (employee_id, first_name, last_name) VALUES (100, 'Dana', 'Smith');\nINSERT INTO employees VALUES (100, 'Dana', 'Smith', 100);\nINSERT INTO employees VALUES (210, 'Lawrence', 'Chen', 100);\nINSERT INTO employees (employee_id, first_name, last_name) VALUES (378, 'Neil', 'Loungani');",
      options: [
        { en: "1 and 4: each leaves <code>manager_id</code> empty; Dana gets in only by naming herself", ar: "1 و4: كلٌّ منهما يترك <code>manager_id</code> فارغًا؛ ولا تدخل Dana إلا بأن تسمّي نفسها" },
        { en: "1, 2 and 4: a row can never name its own <code>employee_id</code> as its manager", ar: "1 و2 و4: لا يجوز للصفّ أبدًا أن يسمّي <code>employee_id</code> الخاص به مديرًا له" },
        { en: "Only 4: Dana is the top, so the database lets her leave <code>manager_id</code> empty", ar: "4 فقط: Dana في القمّة، فتسمح لها قاعدة البيانات بترك <code>manager_id</code> فارغًا" },
        { en: "None: a recursive relationship cannot be mandatory, so <code>NOT NULL</code> is ignored", ar: "لا شيء: العلاقة الذاتية لا يمكن أن تكون إلزامية، فيُتجاهَل <code>NOT NULL</code>" }
      ],
      answer: 0,
      solution: {
        en: "Run in alasql: 1 fails with Wrong NULL value in NOT NULL column manager_id; 2 succeeds; 3 succeeds; 4 fails with the same message.",
        ar: "بالتشغيل في alasql: تفشل 1 بالرسالة Wrong NULL value in NOT NULL column manager_id؛ وتنجح 2؛ وتنجح 3؛ وتفشل 4 بالرسالة نفسها."
      },
      hint: {
        en: "A solid half at the key's own table becomes NOT NULL — and the database does not know who is at the top.",
        ar: "النصف المتّصل عند جدول المفتاح نفسه يصبح NOT NULL — وقاعدة البيانات لا تعرف من في القمّة."
      },
      explain: {
        en: "A solid <code>managed by</code> half makes <code>manager_id</code> <code>NOT NULL</code>, so the top of the tree has one way in: manage herself, as in statement 2 — a recursive relationship may link a row to itself. Every later hire, like Neil, must have a manager chosen before he can be saved. The database has no idea who the president is; it only sees an empty column. That is why the slides draw both halves dashed: \"Each EMPLOYEE may be managed by one and only one EMPLOYEE.\"",
        ar: "النصف المتّصل <code>managed by</code> يجعل <code>manager_id</code> ‏<code>NOT NULL</code>، فلا يبقى لقمّة الشجرة إلا طريق واحد للدخول: أن تدير نفسها، كما في العبارة 2 — فالعلاقة الذاتية قد تربط الصفّ بنفسه. وكل تعيين لاحق، مثل Neil، يجب أن يُختار له مدير قبل حفظه. وقاعدة البيانات لا تعرف من الرئيس؛ إنها لا ترى إلا عمودًا فارغًا. لهذا ترسم الشرائح النصفين متقطّعين: «Each EMPLOYEE may be managed by one and only one EMPLOYEE.»"
      }
    },
    {
      id: "t3cx07", type: "contrast", level: "medium",
      topics: ["t3-dashed-not-safe", "t3-business-decides-optionality", "t3-cardinality-from-scenario", "t3-both-ends-plural"],
      q: {
        en: "Each symptom comes from a wrong mark somewhere in the chapter's models. Sort it: was the wrong mark too strict, or too loose?",
        ar: "كل عَرَض ناتج عن علامة خاطئة في مكان ما من نماذج الفصل. صنّفه: هل كانت العلامة الخاطئة أشدّ ممّا ينبغي، أم أرخى ممّا ينبغي؟"
      },
      concepts: [
        { en: "Too strict — refuses data the business needs", ar: "أشدّ ممّا ينبغي — ترفض بيانات يحتاجها العمل" },
        { en: "Too loose — lets in data the business forbids", ar: "أرخى ممّا ينبغي — تُدخل بيانات يمنعها العمل" }
      ],
      rows: [
        { s: { en: "H.R. cannot record the Stock Clerk job before anyone is hired for it.", ar: "لا تستطيع الموارد البشرية تسجيل وظيفة أمين المخزن قبل تعيين أحد فيها." }, a: 0 },
        { s: { en: "Order 105 is saved with no customer, and nobody pays for it.", ar: "يُحفظ الطلب 105 بلا زبون، ولا يدفع ثمنه أحد." }, a: 1 },
        { s: { en: "Linda's second order is refused, so the cashier creates a second Linda.", ar: "يُرفض طلب Linda الثاني، فيُنشئ أمين الصندوق Linda ثانية." }, a: 0 },
        { s: { en: "One order belongs to the mother and her two children at once.", ar: "طلب واحد يعود إلى الأم وطفليها معًا." }, a: 1 },
        { s: { en: "Mariam cannot be stored as a second Sales Representative.", ar: "لا يمكن تخزين Mariam مندوبةَ مبيعات ثانية." }, a: 0 },
        { s: { en: "Omar Haddad is saved with no job, and payroll cannot check his salary.", ar: "يُحفظ Omar Haddad بلا وظيفة، ولا يستطيع قسم الرواتب التحقّق من راتبه." }, a: 1 },
        { s: { en: "The new president cannot be saved until she is made her own manager.", ar: "لا يمكن حفظ الرئيسة الجديدة حتى تُجعل مديرةً لنفسها." }, a: 0 }
      ],
      hint: {
        en: "Ask of each symptom: did the model say no to something real, or yes to something the business ruled out?",
        ar: "اسأل عن كل عَرَض: هل قال النموذج «لا» لشيء حقيقي، أم «نعم» لشيء استبعده العمل؟"
      },
      explain: {
        en: "Too strict: a solid <code>JOB</code> half (Stock Clerk), a single toe at <code>ORDER</code> (Linda), a single toe at <code>EMPLOYEE</code> (Mariam), and a solid <code>managed by</code> half (the president). Too loose: a dashed <code>ORDER</code> half (order 105), a crow's foot at <code>CUSTOMER</code> (the shared order), a dashed <code>EMPLOYEE</code> half (Omar). Both kinds come from a wrong optionality or a wrong cardinality, so neither dashed nor plural is ever the \"safe\" default — the business decides each mark.",
        ar: "أشدّ ممّا ينبغي: نصف <code>JOB</code> متّصل (أمين المخزن)، وإصبع واحدة عند <code>ORDER</code> ‏(Linda)، وإصبع واحدة عند <code>EMPLOYEE</code> ‏(Mariam)، ونصف <code>managed by</code> متّصل (الرئيسة). وأرخى ممّا ينبغي: نصف <code>ORDER</code> متقطّع (الطلب 105)، وقدم غراب عند <code>CUSTOMER</code> (الطلب المشترك)، ونصف <code>EMPLOYEE</code> متقطّع (Omar). والنوعان يأتيان من إلزامية خاطئة أو تعدّدية خاطئة، فلا المتقطّع ولا الجمع خيار «آمن» افتراضي أبدًا — العمل يقرّر كل علامة."
      }
    },
    {
      id: "t3cx08", type: "match", level: "easy",
      topics: ["t3-marks-to-sql", "t3-key-at-crows-foot", "t3-optionality-to-not-null"],
      q: {
        en: "Each result comes from the chapter's tables, built mark for mark. Match it to the one mark on the ERD that caused it.",
        ar: "كل نتيجة تأتي من جداول الفصل، مبنيّة علامةً علامة. صِلها بالعلامة الواحدة على المخطّط التي سبّبتها."
      },
      leftHead: { en: "Result in the database", ar: "النتيجة في قاعدة البيانات" },
      rightHead: { en: "Mark on the ERD", ar: "العلامة على المخطّط" },
      pairs: [
        { l: { en: "<code>INSERT INTO landmarks (landmark_id, name) VALUES (5, 'Dead Sea');</code> fails: Wrong NULL value in NOT NULL column country_id", ar: "<code>INSERT INTO landmarks (landmark_id, name) VALUES (5, 'Dead Sea');</code> تفشل: Wrong NULL value in NOT NULL column country_id" },
          r: { en: "The solid half beside <code>LANDMARK</code>", ar: "النصف المتّصل بجانب <code>LANDMARK</code>" } },
        { l: { en: "Japan is listed with 0 landmarks", ar: "تظهر Japan ولها 0 معالم" },
          r: { en: "The dashed half beside <code>COUNTRY</code>", ar: "النصف المتقطّع بجانب <code>COUNTRY</code>" } },
        { l: { en: "Jordan is listed with 2 landmarks", ar: "تظهر Jordan ولها معلمان" },
          r: { en: "The crow's foot at <code>LANDMARK</code>", ar: "قدم الغراب عند <code>LANDMARK</code>" } },
        { l: { en: "Restaurant version 1 refuses Linda's order 102: already exists in unique index", ar: "الإصدار 1 للمطعم يرفض طلب Linda رقم 102: already exists in unique index" },
          r: { en: "A single toe at <code>ORDER</code>", ar: "إصبع واحدة عند <code>ORDER</code>" } }
      ],
      hint: {
        en: "A refused empty column is a half at the key's table; a count of zero is the other half; a count above one, or a refused second row, is an end.",
        ar: "رفض عمود فارغ هو نصف عند جدول المفتاح؛ والعدد صفر هو النصف الآخر؛ والعدد فوق الواحد، أو رفض صفّ ثانٍ، هو طرف."
      },
      explain: {
        en: "The Dead Sea is refused because each <code>LANDMARK</code> must be located in a country: the solid half at the table holding the key became <code>NOT NULL</code>. Japan's 0 is allowed by the dashed <code>COUNTRY</code> half (may be the location of), and Jordan's 2 by the crow's foot at <code>LANDMARK</code> (one or more). Linda's second order is refused because version 1 drew a single toe at <code>ORDER</code>, built as <code>UNIQUE</code>. Halves give the minimum, ends give the maximum.",
        ar: "يُرفض Dead Sea لأن كل <code>LANDMARK</code> يجب أن يقع في بلد: النصف المتّصل عند الجدول الذي يحمل المفتاح صار <code>NOT NULL</code>. ويسمح النصف المتقطّع عند <code>COUNTRY</code> ‏(may be the location of) بصفر Japan، وتسمح قدم الغراب عند <code>LANDMARK</code> ‏(one or more) باثنين لـ Jordan. ويُرفض طلب Linda الثاني لأن الإصدار 1 رسم إصبعًا واحدة عند <code>ORDER</code>، بُنيت <code>UNIQUE</code>. الأنصاف تعطي الحدّ الأدنى، والأطراف تعطي الحدّ الأعلى."
      }
    },

    /* ==================================================== crow's feet at both ends */
    {
      id: "t3cx09", type: "mcq", level: "hard",
      topics: ["t3-both-ends-plural", "t3-order-matrix", "t3-key-at-crows-foot"],
      q: {
        en: "The DFo line reads \"Each <code>ORDER</code> must be issued for one or more <code>ITEM</code>s. Each <code>ITEM</code> may be contained on one or more <code>ORDER</code>s.\" The restaurant now wants to record how many of each item an order has: order 10 has two Apple pies, order 102 has one. Where can <code>* Quantity</code> go?",
        ar: "يُقرأ خطّ DFo هكذا: «Each <code>ORDER</code> must be issued for one or more <code>ITEM</code>s. Each <code>ITEM</code> may be contained on one or more <code>ORDER</code>s.» ويريد المطعم الآن أن يسجّل كم من كل صنف في الطلب: في الطلب 10 قطعتا Apple pie، وفي الطلب 102 قطعة واحدة. أين يمكن أن يوضع <code>* Quantity</code>؟"
      },
      options: [
        { en: "In <code>ITEM</code>, beside <code>* Name</code>: a quantity describes an item", ar: "في <code>ITEM</code>، بجانب <code>* Name</code>: الكمّية تصف الصنف" },
        { en: "In <code>ORDER</code>: each order has its quantity", ar: "في <code>ORDER</code>: لكل طلب كمّيته" },
        { en: "In <code>ORDER</code>, as a list such as \"2 Apple pie, 1 Salad\"", ar: "في <code>ORDER</code>، قائمةً مثل «2 Apple pie, 1 Salad»" },
        { en: "In neither box: it belongs to one order–item pair, and a line with crow's feet at both ends has no place for it yet — Chapter T5 gives the pair its own", ar: "في أيّ من الصندوقين: إنها تخصّ زوجًا واحدًا من طلب وصنف، والخطّ الذي له قدم غراب عند طرفيه لا مكان فيه لها بعد — والفصل T5 يعطي الزوج مكانه الخاص" }
      ],
      answer: 3,
      hint: {
        en: "Apple pie has a different quantity on order 10 and on order 102. And order 10 can hold several items. Whose fact is \"2\"?",
        ar: "لـ Apple pie كمّية مختلفة في الطلب 10 وفي الطلب 102. والطلب 10 قد يحوي عدّة أصناف. فحقيقةُ مَن هي «2»؟"
      },
      explain: {
        en: "\"2\" is true of Apple pie on order 10 only. In <code>ITEM</code> it would need one value per order; in <code>ORDER</code> one value per item — each box can hold one, and the fact has many. The list is Chapter T2's defect again, several values in one. A quantity is a fact about the pair, and a line plural at both ends cannot even become one key column, let alone carry an attribute: that is why the chapter leaves <code>ORDER</code> – <code>ITEM</code> for T5.",
        ar: "«2» صحيحة لـ Apple pie في الطلب 10 فقط. ففي <code>ITEM</code> تحتاج قيمة لكل طلب، وفي <code>ORDER</code> قيمة لكل صنف — وكل صندوق يحمل قيمة واحدة، والحقيقة لها قيم كثيرة. والقائمة هي عيب الفصل T2 من جديد، عدّة قيم في قيمة واحدة. فالكمّية حقيقة عن الزوج، والخطّ الجمعي عند طرفيه لا يمكن حتى أن يصبح عمود مفتاح واحدًا، فضلًا عن أن يحمل خاصية: لهذا يترك الفصل <code>ORDER</code> – <code>ITEM</code> للفصل T5."
      }
    },

    /* ==================================================== a second line between the same pair */
    {
      id: "t3cx10", type: "write", level: "hard",
      topics: ["t3-key-at-crows-foot", "t3-optionality-to-not-null", "t3-two-readings"],
      q: {
        en: "H.R. adds: \"Each department may have one head, who is an employee; a new department has none until one is appointed. One employee may head more than one department.\" <code>employees(employee_id NUMBER PRIMARY KEY, first_name …)</code> already exists. Write <code>CREATE TABLE departments</code> with <code>department_id</code> (a number) as the key, <code>name</code> (up to 20 characters, required) and <code>head_id</code>, the column this second line needs.",
        ar: "تضيف الموارد البشرية: «قد يكون لكل قسم رئيس واحد، وهو موظف؛ والقسم الجديد بلا رئيس حتى يُعيَّن له واحد. وقد يرأس الموظف الواحد أكثر من قسم.» الجدول <code>employees(employee_id NUMBER PRIMARY KEY, first_name …)</code> موجود. اكتب <code>CREATE TABLE departments</code> فيه <code>department_id</code> ‏(رقم) مفتاحًا، و<code>name</code> ‏(حتى 20 حرفًا، إلزامي)، و<code>head_id</code>، العمود الذي يحتاجه هذا الخطّ الثاني."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE departments (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+departments\\s*\\(", flags: "i", label: { en: "CREATE TABLE departments", ar: "CREATE TABLE departments" } },
        { re: "department_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "department_id is the PRIMARY KEY", ar: "department_id هو PRIMARY KEY" } },
        { re: "name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "name NOT NULL", ar: "name NOT NULL" } },
        { re: "head_id[\\s\\S]*REFERENCES\\s+employees\\s*\\(\\s*employee_id\\s*\\)", flags: "i", label: { en: "head_id REFERENCES employees(employee_id)", ar: "head_id REFERENCES employees(employee_id)" } }
      ],
      forbid: [
        { re: "head_id[^,]*NOT\\s+NULL", flags: "i", label: { en: "No NOT NULL on head_id: a new department has no head yet (a dashed half)", ar: "لا NOT NULL على head_id: القسم الجديد بلا رئيس بعد (نصف متقطّع)" } },
        { re: "head_id[^,]*UNIQUE", flags: "i", label: { en: "No UNIQUE: one employee may head several departments (the crow's foot at DEPARTMENT)", ar: "لا UNIQUE: قد يرأس الموظف الواحد عدّة أقسام (قدم الغراب عند DEPARTMENT)" } }
      ],
      solution: {
        code: "CREATE TABLE departments (\n  department_id NUMBER      PRIMARY KEY,\n  name          VARCHAR(20) NOT NULL,\n  head_id       NUMBER      REFERENCES employees(employee_id)\n);",
        en: "Run in alasql with employee 100 Dana on file: Accounting (10) and Development (22), both headed by 100, are saved; Shipping (30) with no head is saved; a department headed by 999 is refused with Foreign key \"999\" not found in table \"employees\".",
        ar: "بالتشغيل في alasql والموظفة 100 ‏Dana مسجّلة: يُحفظ Accounting ‏(10) وDevelopment ‏(22) وكلاهما برئاسة 100؛ ويُحفظ Shipping ‏(30) بلا رئيس؛ ويُرفض قسم برئاسة 999 بالرسالة Foreign key \"999\" not found in table \"employees\"."
      },
      hint: {
        en: "Write the two sentences first. Which end gets the crow's foot this time — and is it the same table as for works in?",
        ar: "اكتب الجملتين أولًا. أيّ طرف يأخذ قدم الغراب هذه المرّة — وهل هو الجدول نفسه الذي لـ works in؟"
      },
      explain: {
        en: "Two sentences: \"Each DEPARTMENT may be headed by one and only one EMPLOYEE. Each EMPLOYEE may be the head of one or more DEPARTMENTs.\" The crow's foot is at <code>DEPARTMENT</code>, so this key lives in <code>departments</code> — the opposite table from <code>works in</code>, whose key is <code>employees.department_id</code>. Same two entities, two lines, two keys pointing opposite ways. The dashed <code>DEPARTMENT</code> half keeps <code>head_id</code> nullable; the plural at the other end rules out <code>UNIQUE</code>.",
        ar: "الجملتان: «Each DEPARTMENT may be headed by one and only one EMPLOYEE. Each EMPLOYEE may be the head of one or more DEPARTMENTs.» قدم الغراب عند <code>DEPARTMENT</code>، فهذا المفتاح يسكن <code>departments</code> — الجدول المقابل لجدول <code>works in</code> الذي مفتاحه <code>employees.department_id</code>. الكيانان نفسهما، وخطّان، ومفتاحان باتّجاهين متعاكسين. والنصف المتقطّع عند <code>DEPARTMENT</code> يُبقي <code>head_id</code> قابلًا لـ NULL؛ والجمع عند الطرف الآخر يستبعد <code>UNIQUE</code>."
      }
    },
    {
      id: "t3cx11", type: "fill", level: "medium",
      topics: ["t3-must-be-or-must", "t3-matrix-questions", "t3-erdish-six-parts"],
      q: {
        en: "The travel matrix gave <code>TRAVELER</code> · <code>have seen</code> · <code>LANDMARK</code> and <code>LANDMARK</code> · <code>seen by</code> · <code>TRAVELER</code>. The agency answers the rest: \"A new customer may have seen nothing yet, and usually sees many landmarks. A landmark may be on our list before any customer has seen it, and many customers see the same one.\" Complete both sentences.",
        ar: "أعطت مصفوفة السفر <code>TRAVELER</code> · <code>have seen</code> · <code>LANDMARK</code> و<code>LANDMARK</code> · <code>seen by</code> · <code>TRAVELER</code>. وتجيب الوكالة عن الباقي: «قد لا يكون الزبون الجديد قد رأى شيئًا بعد، وهو عادةً يرى معالم كثيرة. وقد يكون المَعلم على قائمتنا قبل أن يراه أيّ زبون، وكثير من الزبائن يرون المَعلم نفسه.» أكمل الجملتين."
      },
      lang: "erdish",
      code: "Each TRAVELER ____1____ have seen ____2____ LANDMARKs.\nEach LANDMARK ____3____ seen by ____4____ TRAVELERs.",
      blanks: [
        { accept: ["may"], label: { en: "1", ar: "1" } },
        { accept: ["one or more"], label: { en: "2", ar: "2" } },
        { accept: ["may be"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "The names came from the matrix; the rest came from the agency. Then let each name decide whether \"be\" is needed.",
        ar: "الاسمان جاءا من المصفوفة؛ والباقي من الوكالة. ثم دع كل اسم يقرّر هل تلزم «be»."
      },
      explain: {
        en: "Nothing seen yet is allowed at both ends, so both say may; many at both ends, so both say one or more. The grammar differs: \"may have seen\" — \"may be have seen\" is not English — but \"may be seen by\". The matrix supplied only the two names; every other word came from asking the business, exactly as Lesson 6 warned. And with a crow's foot at both ends, this line, like <code>TRAVELER</code> – <code>COUNTRY</code>, waits for T5.",
        ar: "«لم يرَ شيئًا بعد» مسموح عند الطرفين، فكلاهما يقول may؛ و«كثير» عند الطرفين، فكلاهما يقول one or more. لكن القواعد تختلف: «may have seen» — فـ«may be have seen» ليست جملة — لكن «may be seen by». لم تعطِ المصفوفة إلا الاسمين؛ وكل كلمة أخرى جاءت من سؤال العمل، كما حذّر الدرس 6. ومع قدم غراب عند الطرفين، ينتظر هذا الخطّ الفصل T5، مثل <code>TRAVELER</code> – <code>COUNTRY</code>."
      }
    },
    {
      id: "t3cx12", type: "compare", level: "medium",
      topics: ["t3-recursive-relationship", "t3-self-referencing-column", "t3-matrix-diagonal"],
      q: {
        en: "H.R. now records mentors as well as managers. Lawrence Chen is managed by Dana and mentored by Neil. Two drafts of <code>EMPLOYEE</code>, as text. Compare them.",
        ar: "صارت الموارد البشرية تسجّل الموجّهين (mentors) إلى جانب المديرين. Lawrence Chen يديره Dana ويوجّهه Neil. مسوّدتان لـ <code>EMPLOYEE</code>، نصًّا. قارن بينهما."
      },
      lang: "text",
      codeA: "EMPLOYEE  # * Employee ID  * First Name  * Last Name\nloop 1: managed by / manager of    -> employees.manager_id\nloop 2: mentored by / mentor of    -> employees.mentor_id",
      codeB: "EMPLOYEE  # * Employee ID  * First Name  * Last Name\n          * Boss Type  (\"manager\" or \"mentor\")\nloop: managed or mentored by / manager or mentor of\n                                   -> employees.boss_id",
      options: [
        { en: "A: two different relationships need two loops and two columns; B's one column can name Dana or Neil for Lawrence, never both", ar: "‏A: علاقتان مختلفتان تحتاجان حلقتين وعمودين؛ وعمود B الواحد يستطيع أن يسمّي Dana أو Neil لـ Lawrence، لا الاثنين معًا" },
        { en: "B: Lesson 1 forbids two lines between the same pair of ends", ar: "‏B: الدرس 1 يمنع خطّين بين الطرفين أنفسهما" },
        { en: "They are equal: one recursive line can carry any number of meanings", ar: "متساويتان: الخطّ الذاتي الواحد يستطيع أن يحمل أيّ عدد من المعاني" },
        { en: "A, but loop 2 needs a <code>MENTOR</code> entity, since mentors are a different role", ar: "‏A، لكن الحلقة 2 تحتاج كيان <code>MENTOR</code>، لأن الموجّهين دور مختلف" }
      ],
      answer: 0,
      solution: {
        en: "A: Lawrence's row holds manager_id 100 and mentor_id 378. The H.R. matrix's EMPLOYEE diagonal cell now holds two pairs of names.",
        ar: "‏A: يحمل صفّ Lawrence القيمة manager_id 100 والقيمة mentor_id 378. وخلية القُطر لـ EMPLOYEE في مصفوفة الموارد البشرية تحمل الآن زوجين من الأسماء."
      },
      hint: {
        en: "Write Lawrence's row under each draft. How many boss columns does B give him?",
        ar: "اكتب صفّ Lawrence في كل مسوّدة. كم عمودًا للرئيس تعطيه B؟"
      },
      explain: {
        en: "Managing and mentoring are two significant links with their own names, so they are two recursive relationships on <code>EMPLOYEE</code> — and Lesson 1's ban was on two lines for one relationship, not on two relationships. B merges them into one line and one column, so Lawrence can record Dana or Neil but not both, and the line's names no longer say anything precise. No <code>MENTOR</code> entity is needed: a mentor is an employee, the same reason there is no <code>MANAGER</code>.",
        ar: "الإدارة والتوجيه رابطان ذوا أهمية ولكلٍّ منهما اسماه، فهما علاقتان ذاتيتان على <code>EMPLOYEE</code> — ومنعُ الدرس 1 كان لخطّين لعلاقة واحدة، لا لعلاقتين. أمّا B فتدمجهما في خطّ واحد وعمود واحد، فيستطيع Lawrence أن يسجّل Dana أو Neil لا الاثنين، ولا يعود اسما الخطّ يقولان شيئًا دقيقًا. ولا حاجة إلى كيان <code>MENTOR</code>: الموجّه موظف، وهو السبب نفسه لعدم وجود <code>MANAGER</code>."
      }
    },

    /* ==================================================== hidden relationships, honest data */
    {
      id: "t3cx13", type: "error", level: "easy",
      topics: ["t3-between-entities", "t3-attribute-marks", "t3-recursive-relationship"],
      q: {
        en: "The <code>EMPLOYEE</code> softbox from a classmate's H.R. ERD, one line each. <code>JOB</code> is an entity on the same ERD, and managers are employees. Which lines hide a relationship inside an attribute? Choose both.",
        ar: "الصندوق المستدير <code>EMPLOYEE</code> من مخطّط زميلك للموارد البشرية، سطرًا سطرًا. و<code>JOB</code> كيان على المخطّط نفسه، والمديرون موظفون. أيّ الأسطر يُخفي علاقةً داخل خاصية؟ اختر الاثنين."
      },
      lang: "text",
      code: "EMPLOYEE\n# * Employee ID\n* First Name\n* Last Name\n* Hire Date\n* Salary\no Commission\no Manager Name\n* Job Title",
      answer: [8, 9],
      solution: {
        code: "EMPLOYEE\n# * Employee ID\n* First Name\n* Last Name\n* Hire Date\n* Salary\no Commission\n(loop) EMPLOYEE managed by / manager of EMPLOYEE\n(line) EMPLOYEE hold / held by JOB",
        en: "Both attributes leave the box and become lines.",
        ar: "تخرج الخاصيتان من الصندوق وتصبحان خطّين."
      },
      hint: {
        en: "Relationships exist only between entities. Which attributes name something that is itself an entity on this ERD?",
        ar: "العلاقات لا تقوم إلا بين كيانات. أيّ الخصائص تسمّي شيئًا هو نفسه كيان على هذا المخطّط؟"
      },
      explain: {
        en: "<code>Manager Name</code> names another <code>EMPLOYEE</code>: that is the recursive manager loop, hiding as text — and \"Dana\" in a cell cannot say which Dana. <code>Job Title</code> names a <code>JOB</code>, which already has its own box and its own <code>* Title</code>: the <code>hold</code> line is hiding here. Both become lines, never attributes. <code>o Commission</code> is a real fact about the employee, and its <code>o</code> is right.",
        ar: "‏<code>Manager Name</code> يسمّي <code>EMPLOYEE</code> آخر: إنها حلقة المدير الذاتية مختبئة نصًّا — و«Dana» في خلية لا تقول أيّ Dana. و<code>Job Title</code> يسمّي <code>JOB</code>، وله صندوقه الخاص و<code>* Title</code> الخاص به: خطّ <code>hold</code> مختبئ هنا. وكلاهما يصبح خطًّا، لا خاصية. أمّا <code>o Commission</code> فحقيقة فعلية عن الموظف، وعلامة <code>o</code> فيها صحيحة."
      }
    },
    {
      id: "t3cx14", type: "output", level: "medium",
      topics: ["t3-singular-or-plural", "t3-cardinality-from-scenario", "t3-business-rule"],
      q: {
        en: "Lesson 2's H.R. tables, before Mariam is hired: six jobs, and Dana, Tyler, Lawrence, Carlos and Neil each in a different job. The query counts each job's holders. Fill in the result, then answer the designer's question.",
        ar: "جداول الموارد البشرية في الدرس 2، قبل تعيين Mariam: ست وظائف، وDana وTyler وLawrence وCarlos وNeil كلٌّ في وظيفة مختلفة. يعدّ الاستعلام شاغلي كل وظيفة. املأ النتيجة، ثم أجب عن سؤال المصمّم."
      },
      lang: "sql",
      code: "SELECT j.job_id, COUNT(e.employee_id) AS holders\nFROM jobs j LEFT JOIN employees e ON e.job_id = j.job_id\nGROUP BY j.job_id\nORDER BY holders DESC, j.job_id;",
      blanks: [
        { accept: ["6", "six"], label: { en: "rows returned", ar: "عدد الصفوف" } },
        { accept: ["1", "one"], label: { en: "the largest holders value", ar: "أكبر قيمة لـ holders" } },
        { accept: ["no"], label: { en: "Does this prove each JOB is held by one and only one EMPLOYEE? (yes / no)", ar: "هل يثبت هذا أن كل JOB يشغلها موظف واحد فقط؟ (yes / no)" } }
      ],
      solution: { out: "job_id | holders\nAC_ACCOUNT | 1\nAC_MGR | 1\nAD_PRES | 1\nIT_PROG | 1\nSA_REP | 1\nST_CLERK | 0" },
      hint: {
        en: "Count the rows that point at each job. Then: who decides a cardinality — today's rows, or the business?",
        ar: "عُدّ الصفوف التي تشير إلى كل وظيفة. ثم: من يقرّر التعدّدية — صفوف اليوم، أم العمل؟"
      },
      explain: {
        en: "Run in alasql: six rows, five jobs with 1 holder and <code>ST_CLERK</code> with 0. No job has two holders today — and that proves nothing. Cardinality is a business rule about what may happen, not a count of what has: the next week Mariam joins Tyler as <code>SA_REP</code>, and H.R. calls it normal. A designer who drew a single toe at <code>EMPLOYEE</code> from this result would refuse her. Ask the \"how many?\" question; do not read it off the data.",
        ar: "بالتشغيل في alasql: ستة صفوف، خمس وظائف لكلٍّ منها شاغل واحد، و<code>ST_CLERK</code> بصفر. لا وظيفة لها شاغلان اليوم — وهذا لا يثبت شيئًا. التعدّدية قاعدة عمل عمّا يجوز أن يحدث، لا عدٌّ لما حدث: في الأسبوع التالي تنضمّ Mariam إلى Tyler في <code>SA_REP</code>، وتعدّ الموارد البشرية ذلك أمرًا عاديًا. والمصمّم الذي يرسم إصبعًا واحدة عند <code>EMPLOYEE</code> من هذه النتيجة سيرفضها. اسأل سؤال «كم؟»؛ لا تقرأه من البيانات."
      }
    },
    {
      id: "t3cx15", type: "compare", level: "medium",
      topics: ["t3-must-without-column", "t3-optionality-to-not-null", "t3-two-readings"],
      q: {
        en: "Two ERDs of the restaurant differ in one half only. The administrator builds <code>customers</code> and <code>orders</code> from each, mark for mark. Compare them.",
        ar: "مخطّطان للمطعم لا يختلفان إلا في نصف واحد. يبني المسؤول <code>customers</code> و<code>orders</code> من كلٍّ منهما، علامةً علامة. قارن بينهما."
      },
      lang: "erdish",
      codeA: "Each CUSTOMER must place one or more ORDERs.\nEach ORDER must be placed by one and only one CUSTOMER.",
      codeB: "Each CUSTOMER may place one or more ORDERs.\nEach ORDER must be placed by one and only one CUSTOMER.",
      options: [
        { en: "A adds a <code>NOT NULL</code> order column to <code>customers</code>; B leaves that column nullable", ar: "‏A يضيف إلى <code>customers</code> عمود طلب <code>NOT NULL</code>؛ وB يتركه قابلًا لـ NULL" },
        { en: "B moves the key into <code>customers</code>, because a dashed half moves the key", ar: "‏B ينقل المفتاح إلى <code>customers</code>، لأن النصف المتقطّع ينقل المفتاح" },
        { en: "They build identical tables; A's extra must has no column, and the application keeps it — saving a customer only with their first order", ar: "يبنيان جداول متطابقة؛ والـ must الزائدة في A لا عمود لها، ويحفظها التطبيق — فلا يُحفظ الزبون إلا مع طلبه الأول" },
        { en: "A makes <code>orders.customer_id</code> <code>NOT NULL</code>; B leaves it nullable", ar: "‏A يجعل <code>orders.customer_id</code> ‏<code>NOT NULL</code>؛ وB يتركه قابلًا لـ NULL" }
      ],
      answer: 2,
      hint: {
        en: "The halves that differ are beside CUSTOMER. Which table holds the key, and whose half reaches it?",
        ar: "النصفان المختلفان بجانب CUSTOMER. أيّ جدول يحمل المفتاح، ونصفُ مَن يصل إليه؟"
      },
      explain: {
        en: "In both, the crow's foot is at <code>ORDER</code>, so the only key is <code>orders.customer_id</code>, and the solid <code>ORDER</code> half makes it <code>NOT NULL</code> in both. The half that differs sits beside <code>CUSTOMER</code>, whose table has no order column to constrain. So the tables are identical, and the difference between A and B lives only on the ERD and in the application. Moving the key or the <code>NOT NULL</code> would change the other sentence, which A and B share.",
        ar: "في كليهما قدم الغراب عند <code>ORDER</code>، فالمفتاح الوحيد هو <code>orders.customer_id</code>، والنصف المتّصل عند <code>ORDER</code> يجعله <code>NOT NULL</code> في كليهما. أمّا النصف المختلف فيقع بجانب <code>CUSTOMER</code>، وجدوله لا عمود طلب فيه ليُقيَّد. فالجداول متطابقة، والفرق بين A وB لا يعيش إلا على المخطّط وفي التطبيق. ونقل المفتاح أو <code>NOT NULL</code> يغيّر الجملة الأخرى، وهي مشتركة بين A وB."
      }
    },
    {
      id: "t3cx16", type: "tf", level: "easy",
      topics: ["t3-key-at-crows-foot", "t3-optionality-per-end", "t3-optionality-to-not-null"],
      q: {
        en: "Suppose H.R. swapped the halves of <code>EMPLOYEE</code> – <code>DEPARTMENT</code>: dashed beside <code>EMPLOYEE</code>, solid beside <code>DEPARTMENT</code>, with the ends unchanged. Then the foreign key would move from <code>employees</code> to <code>departments</code>.",
        ar: "افترض أن الموارد البشرية بدّلت نصفَي <code>EMPLOYEE</code> – <code>DEPARTMENT</code>: متقطّع بجانب <code>EMPLOYEE</code>، ومتّصل بجانب <code>DEPARTMENT</code>، مع بقاء الطرفين كما هما. عندها سينتقل المفتاح الأجنبي من <code>employees</code> إلى <code>departments</code>."
      },
      truth: false,
      hint: {
        en: "Which mark decides the table, and which mark decides NULL or NOT NULL?",
        ar: "أيّ علامة تقرّر الجدول، وأيّ علامة تقرّر NULL أو NOT NULL؟"
      },
      explain: {
        en: "False. The crow's foot decides where the key lives, and it is still at <code>EMPLOYEE</code>, so the key stays <code>employees.department_id</code>. The halves only decide its constraint: the dashed <code>EMPLOYEE</code> half makes it nullable. The new solid <code>DEPARTMENT</code> half (every department must have staff) reaches no column at all; the application keeps it. Moving the key is the classic confusion of optionality with cardinality.",
        ar: "خطأ. قدم الغراب هي التي تقرّر مكان المفتاح، وما زالت عند <code>EMPLOYEE</code>، فيبقى المفتاح <code>employees.department_id</code>. والأنصاف لا تقرّر إلا قيده: النصف المتقطّع عند <code>EMPLOYEE</code> يجعله قابلًا لـ NULL. أمّا النصف المتّصل الجديد عند <code>DEPARTMENT</code> (كل قسم يجب أن يكون فيه موظفون) فلا يصل إلى أيّ عمود؛ ويحفظه التطبيق. ونقل المفتاح هو الخلط المعروف بين الإلزامية والتعدّدية."
      }
    },
    {
      id: "t3cx17", type: "tf", level: "easy",
      topics: ["t3-relationship-name", "t3-marks-to-sql", "t3-one-column-two-readings"],
      q: {
        en: "Two library ERDs have identical halves and ends. One names the line <code>written by</code> / <code>the author of</code>; the other <code>edited by</code> / <code>the editor of</code>. Built mark for mark, they give exactly the same tables.",
        ar: "مخطّطان للمكتبة لهما الأنصاف والأطراف نفسها. أحدهما يسمّي الخطّ <code>written by</code> / <code>the author of</code>، والآخر <code>edited by</code> / <code>the editor of</code>. إذا بُنيا علامةً علامة، أعطيا الجداول نفسها تمامًا."
      },
      truth: true,
      hint: {
        en: "Which part of a relationship does not reach the table?",
        ar: "أيّ جزء من العلاقة لا يصل إلى الجدول؟"
      },
      explain: {
        en: "True. The ends put one key in <code>books</code>, the solid <code>BOOK</code> half makes it <code>NOT NULL</code>, and the names become nothing. Both ERDs give <code>books.author_id NOT NULL</code> — or whatever the column is called — and the table cannot tell writing from editing. That is exactly why the names matter: the meaning of the line lives only on the ERD, so it must be written there, at both ends.",
        ar: "صحيح. الطرفان يضعان مفتاحًا واحدًا في <code>books</code>، والنصف المتّصل عند <code>BOOK</code> يجعله <code>NOT NULL</code>، والاسمان لا يصبحان شيئًا. فكلا المخطّطين يعطي <code>books.author_id NOT NULL</code> — أو أيّ اسم يحمله العمود — والجدول لا يميّز التأليف من التحرير. ولهذا بالضبط تهمّ الأسماء: معنى الخطّ لا يعيش إلا على المخطّط، فيجب أن يُكتب هناك، عند الطرفين."
      }
    },

    /* ==================================================== instances, paths and plurals */
    {
      id: "t3cx18", type: "mcq", level: "easy",
      topics: ["t3-customer-order", "t3-business-scenario", "t3-business-rule"],
      q: {
        en: "Last month Linda ordered for herself and her daughter Sara. Today Sara walks up to the counter alone, places an order and pays for it. How does the restaurant's model record today?",
        ar: "في الشهر الماضي طلبت Linda لنفسها ولابنتها Sara. واليوم تأتي Sara إلى الكاونتر وحدها، وتضع طلبًا وتدفع ثمنه. كيف يسجّل نموذج المطعم ما جرى اليوم؟"
      },
      options: [
        { en: "Today's order goes to Linda, because Sara is already recorded as Linda's child", ar: "يُنسب طلب اليوم إلى Linda، لأن Sara مسجّلة أصلًا طفلةً لـ Linda" },
        { en: "Sara becomes a <code>CUSTOMER</code> instance, and today's order is placed by her", ar: "تصبح Sara نسخة من <code>CUSTOMER</code>، ويكون طلب اليوم موضوعًا من قِبلها" },
        { en: "Today's order is placed by both Linda and Sara", ar: "يكون طلب اليوم موضوعًا من Linda وSara معًا" },
        { en: "Sara cannot be added: each <code>CUSTOMER</code> must already have placed one or more orders", ar: "لا يمكن إضافة Sara: كل <code>CUSTOMER</code> يجب أن يكون قد وضع طلبًا أو أكثر من قبل" }
      ],
      answer: 1,
      hint: {
        en: "The business named who owns an order: the one who places it and pays. Who is that today?",
        ar: "حدّد العمل مالك الطلب: من يضعه ويدفع ثمنه. من هو اليوم؟"
      },
      explain: {
        en: "The rule is about the order, not the person: the one who places and pays is its customer. Today that is Sara, so she becomes a <code>CUSTOMER</code> with this order. Last month's children were recorded nowhere, so there is no \"child of Linda\" to fall back on, and a single toe at <code>CUSTOMER</code> forbids two owners. \"Must place one or more\" does not lock her out: she is saved together with the order that satisfies it.",
        ar: "القاعدة تخصّ الطلب لا الشخص: من يضعه ويدفع هو زبونه. واليوم هي Sara، فتصبح <code>CUSTOMER</code> مع هذا الطلب. وأطفال الشهر الماضي لم يُسجَّلوا في أيّ مكان، فلا «طفلة لـ Linda» يُرجع إليها، والإصبع الواحدة عند <code>CUSTOMER</code> تمنع مالكَين. و«must place one or more» لا تُقفل الباب دونها: تُحفظ مع الطلب الذي يحقّقها."
      }
    },
    {
      id: "t3cx19", type: "multi", level: "easy",
      topics: ["t3-relationship-matrix", "t3-matrix-cell", "t3-order-matrix"],
      q: {
        en: "In the DFo matrix for <code>CUSTOMER</code>, <code>ITEM</code>, <code>ORDER</code> and <code>WAREHOUSE</code>, the cells pairing <code>CUSTOMER</code> with <code>ITEM</code> and with <code>WAREHOUSE</code> are blank. Which statements are true? Choose every one.",
        ar: "في مصفوفة DFo لـ <code>CUSTOMER</code> و<code>ITEM</code> و<code>ORDER</code> و<code>WAREHOUSE</code>، الخلايا التي تجمع <code>CUSTOMER</code> مع <code>ITEM</code> ومع <code>WAREHOUSE</code> فارغة. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The ERD has no line between <code>CUSTOMER</code> and <code>WAREHOUSE</code>", ar: "لا خطّ في المخطّط بين <code>CUSTOMER</code> و<code>WAREHOUSE</code>" },
        { en: "The model has no way at all to connect a customer to a warehouse", ar: "لا سبيل في النموذج إطلاقًا لربط زبون بمستودع" },
        { en: "A customer reaches an item only through an order", ar: "لا يصل الزبون إلى الصنف إلا عبر طلب" },
        { en: "The blanks are pairs the designer has not got round to yet", ar: "الخلايا الفارغة أزواج لم يصل إليها المصمّم بعد" },
        { en: "No table gets a <code>customer_id</code> next to a <code>warehouse_id</code>", ar: "لا جدول يأخذ <code>customer_id</code> بجانب <code>warehouse_id</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "A blank cell is a decision about a direct line. Is a direct line the only way two entities are ever connected?",
        ar: "الخلية الفارغة قرار بشأن خطّ مباشر. فهل الخطّ المباشر هو الطريقة الوحيدة لاتصال كيانين؟"
      },
      explain: {
        en: "An empty cell records a decision: no direct relationship, so no line and no key column pairing those two. That does not cut them off: a customer places orders, orders are issued for items, items are stored in warehouses, so the path exists through the lines that are there — the lesson's own words, \"a customer reaches an item only through an order\". A blank is not an unfinished cell; and a direct line along an existing path would be the redundant line of Lesson 1.",
        ar: "الخلية الفارغة تسجّل قرارًا: لا علاقة مباشرة، فلا خطّ ولا عمود مفتاح يجمع الاثنين. ولا يعني ذلك أنهما منفصلان: الزبون يضع طلبات، والطلبات تُصدر لأصناف، والأصناف تُخزَّن في مستودعات، فالطريق موجود عبر الخطوط القائمة — وهي كلمات الدرس نفسه: «لا يصل الزبون إلى الصنف إلا عبر طلب». والفراغ ليس خلية لم تكتمل؛ والخطّ المباشر على طريق موجود سيكون الخطّ الزائد الذي حذّر منه الدرس 1."
      }
    },
    {
      id: "t3cx20", type: "multi", level: "easy",
      topics: ["t3-both-ends-plural", "t3-symbol-at-far-end", "t3-crows-foot"],
      q: {
        en: "Which of these pairs of sentences describe a line with a crow's foot at both ends? Choose every one.",
        ar: "أيّ أزواج الجمل هذه تصف خطًّا له قدم غراب عند الطرفين؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Each TRAVELER may visit one or more COUNTRYs. Each COUNTRY may be visited by one or more TRAVELERs.", ar: "Each TRAVELER may visit one or more COUNTRYs. Each COUNTRY may be visited by one or more TRAVELERs." },
        { en: "Each EMPLOYEE may be managed by one and only one EMPLOYEE. Each EMPLOYEE may be the manager of one or more EMPLOYEEs.", ar: "Each EMPLOYEE may be managed by one and only one EMPLOYEE. Each EMPLOYEE may be the manager of one or more EMPLOYEEs." },
        { en: "Each ORDER must be issued for one or more ITEMs. Each ITEM may be contained on one or more ORDERs.", ar: "Each ORDER must be issued for one or more ITEMs. Each ITEM may be contained on one or more ORDERs." },
        { en: "Each LANDMARK must be located in one and only one COUNTRY. Each COUNTRY may be the location of one or more LANDMARKs.", ar: "Each LANDMARK must be located in one and only one COUNTRY. Each COUNTRY may be the location of one or more LANDMARKs." },
        { en: "Each CUSTOMER must place one or more ORDERs. Each ORDER must be placed by one and only one CUSTOMER.", ar: "Each CUSTOMER must place one or more ORDERs. Each ORDER must be placed by one and only one CUSTOMER." }
      ],
      answer: [0, 2],
      hint: {
        en: "Each sentence draws one end, at its entity B. Both ends are crow's feet only if both sentences say one or more.",
        ar: "كل جملة ترسم طرفًا واحدًا، عند كيانها B. ولا يكون الطرفان قدمَي غراب إلا إذا قالت الجملتان كلتاهما one or more."
      },
      explain: {
        en: "<code>TRAVELER</code> – <code>COUNTRY</code> and <code>ORDER</code> – <code>ITEM</code> say one or more in both sentences, so both ends are crow's feet — the lines no single column can hold. The manager loop is tempting, because both ends touch <code>EMPLOYEE</code> and one or more appears; but its other sentence says one and only one, so one end is a single toe, and <code>manager_id</code> holds it. Whether the halves say must or may has nothing to do with the ends.",
        ar: "‏<code>TRAVELER</code> – <code>COUNTRY</code> و<code>ORDER</code> – <code>ITEM</code> تقول كلٌّ منهما one or more في الجملتين، فالطرفان قدما غراب — وهي الخطوط التي لا يستطيع عمود واحد حملها. وحلقة المدير مغرية، لأن طرفيها يلمسان <code>EMPLOYEE</code> وتظهر فيها one or more؛ لكن جملتها الأخرى تقول one and only one، فأحد الطرفين إصبع واحدة، ويحمله <code>manager_id</code>. وكون الأنصاف تقول must أو may لا علاقة له بالأطراف."
      }
    },

    /* ==================================================== reading back, and reading both ways */
    {
      id: "t3cx21", type: "complete", level: "medium",
      topics: ["t3-what-swaps", "t3-single-toe", "t3-must-without-column"],
      q: {
        en: "Restaurant version 1 was built as <code>orders (order_no NUMBER PRIMARY KEY, customer_id NUMBER NOT NULL UNIQUE)</code>. Read the table back into ERDish: complete the second sentence, and name the entity where its symbol is drawn.",
        ar: "بُني الإصدار 1 للمطعم هكذا: <code>orders (order_no NUMBER PRIMARY KEY, customer_id NUMBER NOT NULL UNIQUE)</code>. اقرأ الجدول من جديد بلغة ERDish: أكمل الجملة الثانية، وسمِّ الكيان الذي يُرسم عنده رمزها."
      },
      lang: "erdish",
      code: "Each ORDER must be placed by one and only one CUSTOMER.\nEach CUSTOMER [must or may: not in the table] place ____1____ ORDER.\n-- the symbol for blank 1 is drawn where the line meets ____2____",
      blanks: [
        { accept: ["one and only one"], label: { en: "1", ar: "1" } },
        { accept: ["ORDER"], label: { en: "2", ar: "2" } }
      ],
      solution: {
        code: "Each ORDER must be placed by one and only one CUSTOMER.\nEach CUSTOMER [must or may] place one and only one ORDER.\n-- single toe where the line meets ORDER",
        en: "Run in alasql: with Linda (1) on order 10, INSERT INTO orders VALUES (102, 1); fails with Cannot insert record, because it already exists in unique index.",
        ar: "بالتشغيل في alasql: مع Linda ‏(1) في الطلب 10، تفشل INSERT INTO orders VALUES (102, 1); بالرسالة Cannot insert record, because it already exists in unique index."
      },
      hint: {
        en: "UNIQUE lets each customer_id appear in how many order rows? Then: part 5 is drawn at entity B.",
        ar: "‏UNIQUE يسمح لكل customer_id بالظهور في كم صفّ من الطلبات؟ ثم: الجزء 5 يُرسم عند الكيان B."
      },
      explain: {
        en: "<code>UNIQUE</code> lets each customer appear in at most one order row, so a customer has one and only one order: a single toe where the line meets <code>ORDER</code> — the defect that refused Linda's Friday order. The <code>NOT NULL</code> and the single column give the first sentence. What the table cannot give back is the <code>CUSTOMER</code> half: <code>customers</code> has no column for it, so must or may is recorded only on the ERD.",
        ar: "‏<code>UNIQUE</code> يسمح لكل زبون بالظهور في صفّ طلب واحد على الأكثر، فللزبون طلب واحد فقط: إصبع واحدة حيث يلتقي الخطّ بـ <code>ORDER</code> — وهو العيب الذي رفض طلب Linda يوم الجمعة. و<code>NOT NULL</code> مع العمود الواحد يعطيان الجملة الأولى. أمّا ما لا يستطيع الجدول إرجاعه فهو نصف <code>CUSTOMER</code>: لا عمود له في <code>customers</code>، فلا تُسجَّل must أو may إلا على المخطّط."
      }
    },
    {
      id: "t3cx22", type: "order", level: "medium",
      topics: ["t3-matrix-to-erd", "t3-erdish-audiences", "t3-key-at-crows-foot"],
      q: {
        en: "The agency mentions hotels for the first time. Put the steps from that sentence to a built <code>HOTEL</code> – <code>COUNTRY</code> table in the order each one depends on the one before.",
        ar: "تذكر الوكالة الفنادق لأول مرّة. رتّب الخطوات من تلك الجملة إلى جدول <code>HOTEL</code> – <code>COUNTRY</code> مبنيّ، بحيث تعتمد كل خطوة على التي قبلها."
      },
      items: [
        { en: "Fill the new cells of the matrix row first: the pair is related, with its two names", ar: "املأ خلايا المصفوفة الجديدة بدءًا من الصفّ: الزوج مرتبط، وله اسماه" },
        { en: "Ask the agency must or may, and how many, at each end", ar: "اسأل الوكالة must أم may، وكم، عند كل طرف" },
        { en: "Draw the line: each half, each end, each name beside its own entity", ar: "ارسم الخطّ: كل نصف، وكل طرف، وكل اسم بجانب كيانه" },
        { en: "Read the two ERDish sentences back to the agency and get a yes", ar: "اقرأ جملتَي ERDish على الوكالة واحصل على موافقتها" },
        { en: "Hand the confirmed sentences to the DBA", ar: "سلّم الجملتين المؤكَّدتين لمدير قاعدة البيانات (DBA)" },
        { en: "The DBA puts the key at the crow's-foot end, NOT NULL if that end's half is solid", ar: "يضع مدير قاعدة البيانات المفتاح عند طرف قدم الغراب، وNOT NULL إن كان نصف ذلك الطرف متّصلًا" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "Find it, ask about it, draw it, check it with the client, hand it over, build it.",
        ar: "اعثر عليه، واسأل عنه، وارسمه، وتحقّق منه مع العميل، وسلّمه، وابنِه."
      },
      explain: {
        en: "The matrix only says the pair is related and what each end is called, so the marks must be asked for before the line can be drawn in full. The two sentences are read to the client, who says yes or no, and only then handed to the DBA — ERDish's two audiences, in that order. The DBA's choices come last because both depend on marks: the crow's foot picks the table (<code>hotels.country_id</code>), the half at that end picks <code>NOT NULL</code>.",
        ar: "المصفوفة لا تقول إلا أن الزوج مرتبط وما اسم كل طرف، فلا بدّ من السؤال عن العلامات قبل رسم الخطّ كاملًا. وتُقرأ الجملتان على العميل، فيقول نعم أو لا، ثم تُسلَّمان لمدير قاعدة البيانات — جمهورا لغة ERDish، بهذا الترتيب. وتأتي قرارات مدير قاعدة البيانات أخيرًا لأنها تعتمد كلها على العلامات: قدم الغراب تختار الجدول (<code>hotels.country_id</code>)، والنصف عند ذلك الطرف يختار <code>NOT NULL</code>."
      }
    },
    {
      id: "t3cx23", type: "mcq", level: "hard",
      topics: ["t3-two-readings", "t3-key-at-crows-foot", "t3-both-ends-plural"],
      q: {
        en: "The DBA receives only one sentence about the travel agency: \"Each <code>TRAVELER</code> may visit one or more <code>COUNTRY</code>s.\" Following the rule \"the key goes in the table at the crow's-foot end\", they add a nullable <code>traveler_id</code> to <code>countries</code>. What went wrong?",
        ar: "يتلقّى مدير قاعدة البيانات جملة واحدة فقط عن وكالة السفر: «Each <code>TRAVELER</code> may visit one or more <code>COUNTRY</code>s.» واتّباعًا للقاعدة «المفتاح يوضع في الجدول عند طرف قدم الغراب»، يضيف <code>traveler_id</code> قابلًا لـ NULL إلى <code>countries</code>. ما الذي حدث خطأً؟"
      },
      options: [
        { en: "Nothing: the crow's foot is at <code>COUNTRY</code>, so <code>countries</code> is the right table", ar: "لا شيء: قدم الغراب عند <code>COUNTRY</code>، فـ <code>countries</code> هو الجدول الصحيح" },
        { en: "The key belongs in <code>travelers</code>, because the sentence starts at <code>TRAVELER</code>", ar: "مكان المفتاح <code>travelers</code>، لأن الجملة تبدأ من <code>TRAVELER</code>" },
        { en: "The other sentence was never read: it puts a crow's foot at <code>TRAVELER</code> too, so neither table can hold the line as one column — and this one lets Jordan be visited by one traveler only", ar: "الجملة الأخرى لم تُقرأ قطّ: إنها تضع قدم غراب عند <code>TRAVELER</code> أيضًا، فلا يستطيع أيّ جدول أن يحمل الخطّ عمودًا واحدًا — وهذا العمود لا يسمح لـ Jordan إلا بمسافر واحد" },
        { en: "<code>traveler_id</code> should be <code>NOT NULL</code>, because the sentence says one or more", ar: "يجب أن يكون <code>traveler_id</code> ‏<code>NOT NULL</code>، لأن الجملة تقول one or more" }
      ],
      answer: 2,
      hint: {
        en: "One sentence draws one end. What does the end at TRAVELER look like — and who said?",
        ar: "الجملة الواحدة ترسم طرفًا واحدًا. كيف يبدو الطرف عند TRAVELER — ومن قال ذلك؟"
      },
      explain: {
        en: "The rule \"key at the crow's foot\" is for a line with one crow's foot, and one sentence shows only one end. The slides' second sentence, \"Each COUNTRY may be visited by one or more TRAVELERs\", puts a crow's foot at <code>TRAVELER</code> as well. Plural both ways, no single column can hold it: <code>countries.traveler_id</code> lets each country name one traveler, and <code>travelers.country_id</code> would let each traveler visit one country. The line waits for T5. Reading from one end only is the error; \"one or more\" is cardinality and says nothing about <code>NOT NULL</code>.",
        ar: "قاعدة «المفتاح عند قدم الغراب» لخطّ فيه قدم غراب واحدة، والجملة الواحدة لا تُظهر إلا طرفًا واحدًا. وجملة الشرائح الثانية، «Each COUNTRY may be visited by one or more TRAVELERs»، تضع قدم غراب عند <code>TRAVELER</code> أيضًا. ومع الجمع في الاتجاهين لا يستطيع عمود واحد حمله: <code>countries.traveler_id</code> يسمح لكل بلد بأن يسمّي مسافرًا واحدًا، و<code>travelers.country_id</code> يسمح لكل مسافر ببلد واحد. والخطّ ينتظر الفصل T5. والخطأ هو القراءة من طرف واحد؛ و«one or more» تعدّدية لا تقول شيئًا عن <code>NOT NULL</code>."
      }
    },
    {
      id: "t3cx24", type: "mcq", level: "medium",
      topics: ["t3-recursive-cardinality", "t3-symbol-at-far-end", "t3-erdish-recursive"],
      q: {
        en: "\"Each <code>EMPLOYEE</code> may be mentored by one and only one <code>EMPLOYEE</code>. Each <code>EMPLOYEE</code> may be the mentor of one or more <code>EMPLOYEE</code>s.\" The DBA reads \"one and only one\" and declares <code>mentor_id NUMBER UNIQUE REFERENCES employees(employee_id)</code>. Lawrence (210) is on file; Mariam is saved with <code>mentor_id</code> 210. Then Omar is saved with <code>mentor_id</code> 210. What happens?",
        ar: "«Each <code>EMPLOYEE</code> may be mentored by one and only one <code>EMPLOYEE</code>. Each <code>EMPLOYEE</code> may be the mentor of one or more <code>EMPLOYEE</code>s.» يقرأ مدير قاعدة البيانات «one and only one» فيعرّف <code>mentor_id NUMBER UNIQUE REFERENCES employees(employee_id)</code>. ‏Lawrence ‏(210) مسجّل؛ وتُحفظ Mariam و<code>mentor_id</code> لها 210. ثم يُحفظ Omar و<code>mentor_id</code> له 210. ماذا يحدث؟"
      },
      options: [
        { en: "Saved: one mentor per row is already kept by the single column, so <code>UNIQUE</code> changes nothing", ar: "يُحفظ: مُوجِّه واحد لكل صفّ مضمون أصلًا بالعمود الواحد، فلا يغيّر <code>UNIQUE</code> شيئًا" },
        { en: "Refused, and rightly: one and only one means each mentor has one mentee", ar: "يُرفض، وهذا صحيح: one and only one تعني أن لكل موجِّه متدرّبًا واحدًا" },
        { en: "Saved, because <code>mentor_id</code> is nullable", ar: "يُحفظ، لأن <code>mentor_id</code> قابل لـ NULL" },
        { en: "Refused: <code>UNIQUE</code> lets each mentor appear in one row only, a single toe at the other end too — against \"one or more\"", ar: "يُرفض: ‏<code>UNIQUE</code> لا يسمح لكل موجِّه إلا بالظهور في صفّ واحد، أي إصبع واحدة عند الطرف الآخر أيضًا — خلافًا لـ «one or more»" }
      ],
      answer: 3,
      hint: {
        en: "The one column already holds \"one and only one mentor\". What extra rule does UNIQUE add — and about which end?",
        ar: "العمود الواحد يحمل أصلًا «مُوجِّه واحد فقط». فما القاعدة الإضافية التي يضيفها UNIQUE — وعن أيّ طرف؟"
      },
      explain: {
        en: "Run in alasql: Omar is refused with Cannot insert record, because it already exists in unique index. The first sentence's one and only one is already enforced by having a single <code>mentor_id</code> per row. <code>UNIQUE</code> adds a rule about the other sentence — each mentor may appear once — which draws a single toe where the business said one or more. Read each sentence's cardinality at its far end, and implement only what that end says.",
        ar: "بالتشغيل في alasql: يُرفض Omar بالرسالة Cannot insert record, because it already exists in unique index. فـ one and only one في الجملة الأولى مضمونة أصلًا بوجود <code>mentor_id</code> واحد لكل صفّ. أمّا <code>UNIQUE</code> فيضيف قاعدة عن الجملة الأخرى — كل موجِّه لا يظهر إلا مرّة — فيرسم إصبعًا واحدة حيث قال العمل one or more. اقرأ تعدّدية كل جملة عند طرفها البعيد، ولا تنفّذ إلا ما يقوله ذلك الطرف."
      }
    }
  ]
};
