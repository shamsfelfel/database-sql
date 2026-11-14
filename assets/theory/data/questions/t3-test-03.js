/* Question bank: T3 lesson 3 test -- Cardinality: how many. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-03"] = {
  title: { en: "Test 3 — Cardinality: how many", ar: "اختبار 3 — التعدّدية: كم واحدًا؟" },
  intro: {
    en: "24 questions on lesson 3: the two \"how many?\" questions, the single toe and the crow's foot, reading the symbol at the far entity, singular or plural and never a number, the minimum and maximum of one reading, deciding the restaurant from its scenario, and which table receives the foreign key because of where the crow's foot is. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثالث: سؤالا «كم؟»، والإصبع الواحدة وقدم الغراب، وقراءة الرمز عند الكيان البعيد، والمفرد أو الجمع لا الرقم أبدًا، والحدّ الأدنى والأعلى للقراءة الواحدة، وحسم المطعم من سيناريوهه، وأيّ جدول يستقبل المفتاح الأجنبي بحسب موضع قدم الغراب. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · how many? */
    {
      id: "t3l3q01", type: "multi", level: "easy", topics: ["t3-how-many", "t3-cardinality-questions", "t3-cardinality"],
      q: {
        en: "Which of these are cardinality questions, not optionality questions? Select all that apply.",
        ar: "أيّ هذه الأسئلة أسئلة تعدّدية (cardinality)، لا أسئلة إلزامية (optionality)؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Can one employee hold more than one job?", ar: "هل يستطيع الموظّف الواحد أن يشغل أكثر من وظيفة؟" },
        { en: "Must every order be placed by a customer?", ar: "هل يجب أن يكون لكل طلب زبون قدّمه؟" },
        { en: "How many orders can one customer place over time?", ar: "كم طلبًا يستطيع الزبون الواحد أن يقدّم مع مرور الوقت؟" },
        { en: "Can a job exist with nobody in it?", ar: "هل يمكن أن توجد وظيفة لا يشغلها أحد؟" },
        { en: "Can one order be placed by more than one customer?", ar: "هل يمكن أن يقدّم الطلبَ الواحد أكثرُ من زبون؟" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Cardinality asks \"how many?\" — one, or more than one. Optionality asks whether a link must exist at all.",
        ar: "التعدّدية تسأل «كم؟» — واحد أم أكثر من واحد. أما الإلزامية فتسأل هل يجب أن يوجد الرابط أصلًا."
      },
      explain: {
        en: "\"More than one?\" and \"how many?\" are cardinality: each is answered with one and only one or one or more. \"Must every order have a customer?\" and \"can a job have nobody?\" ask whether zero is allowed — that is optionality, Lesson 2's question. The vacant-job question is tempting because it mentions a number of people, but \"nobody\" is about must or may.",
        ar: "«أكثر من واحد؟» و«كم؟» أسئلة تعدّدية: يُجاب عن كلٍّ منها بـ one and only one أو one or more. أما «هل يجب أن يكون لكل طلب زبون؟» و«هل يمكن ألّا يشغل الوظيفةَ أحد؟» فتسألان هل الصفر مسموح — وهذه إلزامية، سؤال الدرس 2. وسؤال الوظيفة الشاغرة مغرٍ لأنه يذكر عدد الأشخاص، لكن «لا أحد» سؤال عن «يجب» أو «قد»."
      }
    },
    {
      id: "t3l3q02", type: "tf", level: "easy", topics: ["t3-singular-or-plural", "t3-cardinality"],
      q: {
        en: "The Accounting manager's rule \"each department holds at most twenty employees\" can be drawn on the ERD with the right cardinality symbol.",
        ar: "قاعدة مدير المحاسبة «يضمّ كل قسم عشرين موظّفًا على الأكثر» يمكن رسمها على مخطّط ERD برمز التعدّدية المناسب."
      },
      truth: false,
      hint: {
        en: "How many end symbols exist, and what does each one say?",
        ar: "كم رمزًا للطرف يوجد، وماذا يقول كلٌّ منها؟"
      },
      explain: {
        en: "False. The slides: cardinality \"only answers whether the number is singular or plural; it does not answer with a specific plural number.\" There are only two symbols — the single toe and the crow's foot — and twenty is neither. The ERD says \"one or more\"; the cap of twenty is a separate business rule kept outside the diagram.",
        ar: "خطأ. تقول الشرائح إن التعدّدية «تجيب فقط هل العدد مفرد أم جمع، ولا تجيب برقم جمعٍ محدّد». لا يوجد إلا رمزان — الإصبع الواحدة (single toe) وقدم الغراب (crow's foot) — والعشرون ليست أيًّا منهما. المخطّط يقول «one or more»، وسقف العشرين قاعدة عمل منفصلة تُحفظ خارج المخطّط."
      }
    },
    {
      id: "t3l3q03", type: "output", level: "easy", topics: ["t3-one-or-more", "t3-how-many", "t3-cardinality-questions"],
      q: {
        en: "The lesson's employees table: Dana (AD_PRES), Tyler (SA_REP), Lawrence (AC_MGR), Carlos (AC_ACCOUNT), Neil (IT_PROG) and Mariam (SA_REP). What does the query return?",
        ar: "جدول employees في الدرس: Dana (AD_PRES) وTyler (SA_REP) وLawrence (AC_MGR) وCarlos (AC_ACCOUNT) وNeil (IT_PROG) وMariam (SA_REP). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT job_id, COUNT(*) AS holders\nFROM employees\nGROUP BY job_id\nHAVING COUNT(*) > 1;",
      blanks: [
        { accept: ["SA_REP", "sa_rep"], label: { en: "job_id", ar: "job_id" } },
        { accept: ["2"], label: { en: "holders", ar: "holders" } }
      ],
      hint: {
        en: "Which job_id appears in more than one employee row?",
        ar: "أيّ قيمة job_id تظهر في أكثر من صفّ موظّف؟"
      },
      explain: {
        en: "One row: SA_REP, 2 — Tyler and Mariam. A single job with two holders is enough to make \"how many employees can hold one job?\" plural: one or more. The 2 is today's count, not the cardinality; tomorrow it may be 5, and the crow's foot at EMPLOYEE does not change.",
        ar: "صفّ واحد: SA_REP و2 — Tyler وMariam. وظيفة واحدة لها شاغلان تكفي لتجعل جواب «كم موظّفًا يشغل الوظيفة الواحدة؟» جمعًا: one or more. والرقم 2 عدد اليوم لا التعدّدية؛ قد يصير غدًا 5، وقدم الغراب عند EMPLOYEE لا تتغيّر."
      },
      solution: { out: "job_id | holders\nSA_REP | 2" }
    },

    /* ---------------------------------------------------- 2 · single toe and crow's foot */
    {
      id: "t3l3q04", type: "match", level: "easy", topics: ["t3-single-toe", "t3-crows-foot", "t3-one-and-only-one", "t3-one-or-more"],
      q: {
        en: "Match each mark to what it means. Two marks belong to cardinality, two to optionality.",
        ar: "طابِق كل علامة بمعناها. علامتان للتعدّدية، وعلامتان للإلزامية."
      },
      leftHead: { en: "Mark on the line", ar: "العلامة على الخط" },
      rightHead: { en: "Read as", ar: "تُقرأ" },
      pairs: [
        { l: { en: "single toe where the line meets an entity", ar: "إصبع واحدة حيث يلتقي الخط بالكيان" },
          r: { en: "one and only one", ar: "one and only one" } },
        { l: { en: "crow's foot where the line meets an entity", ar: "قدم غراب حيث يلتقي الخط بالكيان" },
          r: { en: "one or more", ar: "one or more" } },
        { l: { en: "solid half beside the start entity", ar: "نصف متّصل بجانب كيان البداية" },
          r: { en: "must (be)", ar: "must (be)" } },
        { l: { en: "dashed half beside the start entity", ar: "نصف متقطّع بجانب كيان البداية" },
          r: { en: "may (be)", ar: "may (be)" } }
      ],
      hint: {
        en: "The ends of the line count; the halves of the line decide must or may.",
        ar: "طرفا الخط يعدّان؛ ونصفاه يقرّران «يجب» أو «قد»."
      },
      explain: {
        en: "The symbol where the line meets an entity is cardinality: a single toe says one and only one, a crow's foot one or more. The pattern of each half is optionality: solid for must, dashed for may. Reading a crow's foot as \"may\" or a dashed half as \"many\" is the commonest slip — they are two different questions on two different parts of the line.",
        ar: "الرمز حيث يلتقي الخط بالكيان هو التعدّدية: الإصبع الواحدة تقول one and only one، وقدم الغراب one or more. ونمط كل نصف هو الإلزامية: المتّصل لـ must والمتقطّع لـ may. وقراءة قدم الغراب «قد» أو النصف المتقطّع «كثير» هي أشيع زلّة — فهما سؤالان مختلفان على جزأين مختلفين من الخط."
      }
    },
    {
      id: "t3l3q05", type: "mcq", level: "medium", topics: ["t3-symbol-at-far-end", "t3-crows-foot"],
      q: {
        en: "\"Each CUSTOMER must place one or more ORDERs.\" Where on the line is the symbol that says \"one or more\"?",
        ar: "«Each CUSTOMER must place one or more ORDERs.» أين على الخط الرمز الذي يقول «one or more»؟"
      },
      options: [
        { en: "A crow's foot where the line meets CUSTOMER, because the sentence starts there", ar: "قدم غراب حيث يلتقي الخط بـ CUSTOMER، لأن الجملة تبدأ منه" },
        { en: "A single toe where the line meets ORDER, because each order is one order", ar: "إصبع واحدة حيث يلتقي الخط بـ ORDER، لأن كل طلب طلبٌ واحد" },
        { en: "A crow's foot where the line meets ORDER, the entity being counted", ar: "قدم غراب حيث يلتقي الخط بـ ORDER، الكيان الذي يُعَدّ" },
        { en: "The solid half beside CUSTOMER, because must means at least one", ar: "النصف المتّصل بجانب CUSTOMER، لأن must تعني واحدًا على الأقلّ" }
      ],
      answer: 2,
      hint: {
        en: "The half is read beside the entity you start from. Where is the end symbol read?",
        ar: "النصف يُقرأ بجانب الكيان الذي تبدأ منه. فأين يُقرأ رمز الطرف؟"
      },
      explain: {
        en: "The sentence counts orders, so the crow's foot is at ORDER — the entity it arrives at. Starting at CUSTOMER gives only the must, from the solid half beside CUSTOMER. Putting the crow's foot beside the start entity is the lesson's first warned mistake: it would say one order belongs to many customers.",
        ar: "الجملة تعدّ الطلبات، فقدم الغراب عند ORDER — الكيان الذي تصل إليه. والبدء من CUSTOMER يعطي must فقط، من النصف المتّصل بجانب CUSTOMER. ووضع قدم الغراب بجانب كيان البداية أوّل خطأ يحذّر منه الدرس: سيقول إن الطلب الواحد يملكه زبائن كثيرون."
      }
    },
    {
      id: "t3l3q06", type: "compare", level: "medium", topics: ["t3-symbol-at-far-end", "t3-single-toe", "t3-crows-foot"],
      q: {
        en: "Two drafts of EMPLOYEE–JOB. [toe] or [crow] is the symbol where the line meets that entity. The H.R. business: each employee holds one job; Tyler and Mariam both hold SA_REP. Compare them.",
        ar: "مسودّتان لـ EMPLOYEE–JOB. ‏[toe] أو [crow] هو الرمز حيث يلتقي الخط بذلك الكيان. عمل الموارد البشرية: كل موظّف يشغل وظيفة واحدة، وTyler وMariam كلاهما يشغل SA_REP. قارن بينهما."
      },
      lang: "text",
      codeA: "[toe]  EMPLOYEE  hold  |  held by  JOB  [crow]",
      codeB: "[crow] EMPLOYEE  hold  |  held by  JOB  [toe]",
      options: [
        { en: "A is right: JOB is the \"many\" side, so the crow's foot belongs beside it", ar: "A صحيحة: JOB هو جانب «الكثير»، فقدم الغراب مكانها بجانبه" },
        { en: "B is right: the crow's foot at EMPLOYEE lets a job have one or more holders, and the toe at JOB keeps one job per employee", ar: "B صحيحة: قدم الغراب عند EMPLOYEE تسمح للوظيفة بشاغل أو أكثر، والإصبع عند JOB تُبقي وظيفة واحدة لكل موظّف" },
        { en: "Both say the same thing, read from opposite ends", ar: "كلتاهما تقول الشيء نفسه، مقروءًا من طرفين متقابلين" },
        { en: "B is right, but it also needs the half beside JOB made solid", ar: "B صحيحة، لكنها تحتاج أيضًا إلى جعل النصف بجانب JOB متّصلًا" }
      ],
      answer: 1,
      hint: {
        en: "A symbol counts the entity it touches. Which entity is plural here — jobs per employee, or employees per job?",
        ar: "الرمز يعدّ الكيان الذي يلمسه. أيّ كيان هو الجمع هنا — الوظائف لكل موظّف، أم الموظّفون لكل وظيفة؟"
      },
      explain: {
        en: "A is the lesson's version 1: the crow's foot at JOB says an employee holds one or more jobs, and the toe at EMPLOYEE refuses Mariam as a second SA_REP. B is version 2, the slides' model. They are not the same model read twice — swapping the symbols swaps both rules. The halves are a separate question; the vacant Stock Clerk job needs the JOB half dashed, not solid.",
        ar: "A هي الإصدار 1 في الدرس: قدم الغراب عند JOB تقول إن الموظّف يشغل وظيفة أو أكثر، والإصبع عند EMPLOYEE ترفض Mariam مندوبةً ثانية في SA_REP. وB هي الإصدار 2، نموذج الشرائح. وليستا نموذجًا واحدًا مقروءًا مرّتين — تبديل الرمزين يبدّل القاعدتين معًا. والنصفان سؤال منفصل؛ فوظيفة أمين المخزن الشاغرة تحتاج نصف JOB متقطّعًا لا متّصلًا."
      }
    },
    {
      id: "t3l3q07", type: "tf", level: "medium", topics: ["t3-crows-foot", "t3-single-toe", "t3-symbol-at-far-end"],
      q: {
        en: "Version 1 of EMPLOYEE–JOB (crow's foot at JOB, single toe at EMPLOYEE) would let Tyler hold three jobs at once.",
        ar: "الإصدار 1 من EMPLOYEE–JOB (قدم الغراب عند JOB، والإصبع الواحدة عند EMPLOYEE) يسمح لـ Tyler بأن يشغل ثلاث وظائف في وقت واحد."
      },
      truth: true,
      hint: {
        en: "Read version 1 starting from EMPLOYEE. Which symbol do you arrive at?",
        ar: "اقرأ الإصدار 1 بادئًا من EMPLOYEE. عند أيّ رمز تصل؟"
      },
      explain: {
        en: "True. Starting at EMPLOYEE you arrive at the crow's foot at JOB: \"each EMPLOYEE must hold one or more JOBs\". So Tyler may hold three jobs with three salary ranges — the second defect version 1 hides, beside refusing Mariam. Version 2 fixes both by moving each symbol to the end it really counts; the halves stay as they were.",
        ar: "صواب. بالبدء من EMPLOYEE تصل إلى قدم الغراب عند JOB: «each EMPLOYEE must hold one or more JOBs». فقد يشغل Tyler ثلاث وظائف بثلاثة نطاقات رواتب — العيب الثاني الذي يخفيه الإصدار 1 إلى جانب رفض Mariam. ويصلح الإصدار 2 الاثنين بنقل كل رمز إلى الطرف الذي يعدّه فعلًا؛ ويبقى النصفان كما هما."
      }
    },
    {
      id: "t3l3q08", type: "fill", level: "easy", topics: ["t3-one-and-only-one", "t3-one-or-more", "t3-symbol-at-far-end"],
      q: {
        en: "Each line says, in brackets, what the line looks like where it meets the far entity. Write one and only one, or one or more.",
        ar: "كل سطر يذكر بين قوسين شكل الخط حيث يلتقي بالكيان البعيد. اكتب one and only one أو one or more."
      },
      lang: "erdish",
      code: "Each PRODUCT       must be classified by ____1____ PRODUCT TYPE.   (single toe at PRODUCT TYPE)\nEach PRODUCT TYPE  may classify          ____2____ PRODUCTs.       (crow's foot at PRODUCT)\nEach EMPLOYEE      must work in          ____3____ DEPARTMENT.     (single toe at DEPARTMENT)\nEach EMPLOYEE      may manage            ____4____ EMPLOYEEs.      (crow's foot at the managed end)",
      blanks: [
        { accept: ["one and only one", "one (and only one)"], label: { en: "1", ar: "1" } },
        { accept: ["one or more"], label: { en: "2", ar: "2" } },
        { accept: ["one and only one", "one (and only one)"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "A single toe is the singular answer, a crow's foot the plural one. The s on the entity name agrees with it.",
        ar: "الإصبع الواحدة هي جواب المفرد، وقدم الغراب جواب الجمع. وحرف s على اسم الكيان يتبعها."
      },
      explain: {
        en: "1 one and only one, 2 one or more, 3 one and only one, 4 one or more. The symbol at the far entity gives the cardinality; must or may came from the other half. A crow's foot is never \"many\" or \"several\" in ERDish — the slides' phrase is one or more.",
        ar: "1 one and only one، 2 one or more، 3 one and only one، 4 one or more. الرمز عند الكيان البعيد يعطي التعدّدية، وجاءت must أو may من النصف الآخر. وقدم الغراب لا تُقرأ في ERDish «many» ولا «several» — عبارة الشرائح هي one or more."
      }
    },
    {
      id: "t3l3q09", type: "error", level: "hard", topics: ["t3-symbol-at-far-end", "t3-single-toe", "t3-crows-foot", "t3-cardinality-from-scenario"],
      q: {
        en: "A classmate's draft, as text: [toe] or [crow] is the symbol where the line meets that entity. The business rules are the lesson's, and in the slides' library each book is written by one author. Which line is wrong?",
        ar: "مسودّة زميل، نصًّا: ‏[toe] أو [crow] هو الرمز حيث يلتقي الخط بذلك الكيان. قواعد العمل هي قواعد الدرس، وفي مكتبة الشرائح يكتب كلَّ كتاب مؤلّفٌ واحد. أيّ سطر خاطئ؟"
      },
      lang: "text",
      code: "[crow] PRODUCT   classified by  |  classify         PRODUCT TYPE  [toe]\n[toe]  CUSTOMER  place          |  placed by        ORDER         [crow]\n[crow] EMPLOYEE  work in        |  responsible for  DEPARTMENT    [toe]\n[toe]  BOOK      written by     |  the author of    AUTHOR        [crow]",
      answer: 4,
      solution: {
        code: "[crow] PRODUCT   classified by  |  classify         PRODUCT TYPE  [toe]\n[toe]  CUSTOMER  place          |  placed by        ORDER         [crow]\n[crow] EMPLOYEE  work in        |  responsible for  DEPARTMENT    [toe]\n[crow] BOOK      written by     |  the author of    AUTHOR        [toe]",
        en: "Swap the symbols on line 4: a single toe at AUTHOR (one author per book) and a crow's foot at BOOK (one or more books per author).",
        ar: "بدّل الرمزين في السطر 4: إصبع واحدة عند AUTHOR (مؤلّف واحد لكل كتاب) وقدم غراب عند BOOK (كتاب أو أكثر لكل مؤلّف)."
      },
      hint: {
        en: "For each line, start at the left entity and read the symbol at the right one; then start at the right and read the left.",
        ar: "في كل سطر ابدأ من الكيان الأيسر واقرأ الرمز عند الأيمن، ثم ابدأ من الأيمن واقرأ الأيسر."
      },
      explain: {
        en: "Line 4: read from BOOK you reach a crow's foot at AUTHOR — \"each BOOK must be written by one or more AUTHORs\" — and read from AUTHOR you reach a toe at BOOK, so an author writes only one book. Both rules are the reverse of the slides'. Line 2 looks like line 4 (toe on the left) but is right: a customer places one or more orders, each order has one customer.",
        ar: "السطر 4: بالقراءة من BOOK تصل إلى قدم غراب عند AUTHOR — «each BOOK must be written by one or more AUTHORs» — وبالقراءة من AUTHOR تصل إلى إصبع عند BOOK، فلا يكتب المؤلّف إلا كتابًا واحدًا. والقاعدتان عكس ما في الشرائح. والسطر 2 يشبه السطر 4 (إصبع على اليسار) لكنه صحيح: الزبون يقدّم طلبًا أو أكثر، ولكل طلب زبون واحد."
      }
    },

    /* ---------------------------------------------------- 3 · singular or plural, min and max */
    {
      id: "t3l3q10", type: "multi", level: "medium", topics: ["t3-singular-or-plural", "t3-one-or-more", "t3-one-and-only-one"],
      q: {
        en: "Which of these business rules can the end symbols of an ERD show on their own? Select all that apply.",
        ar: "أيّ قواعد العمل هذه تستطيع رموز الأطراف في مخطّط ERD أن تُظهرها وحدها؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Each order has one customer who owns it and pays", ar: "لكل طلب زبون واحد يملكه ويدفع ثمنه" },
        { en: "An employee holds at most two jobs", ar: "يشغل الموظّف وظيفتين على الأكثر" },
        { en: "A customer can place as many orders as he wants", ar: "يستطيع الزبون أن يقدّم ما يشاء من الطلبات" },
        { en: "A department has between 2 and 20 employees", ar: "في القسم ما بين 2 و20 موظّفًا" },
        { en: "A job may be held by more than one employee", ar: "قد يشغل الوظيفةَ أكثرُ من موظّف" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "An end symbol says singular or plural. Does the rule need anything more than that?",
        ar: "رمز الطرف يقول مفرد أو جمع. هل تحتاج القاعدة إلى أكثر من ذلك؟"
      },
      explain: {
        en: "\"One customer per order\" is a single toe; \"as many as he wants\" and \"more than one employee\" are crow's feet. \"At most two\" and \"between 2 and 20\" name specific numbers, and cardinality never answers with a number — the line can only say one or more, and the limits are kept as separate rules. \"At most two\" is tempting because two sounds small, but it is still a count.",
        ar: "«زبون واحد لكل طلب» إصبع واحدة؛ و«ما يشاء» و«أكثر من موظّف» قدما غراب. أما «اثنتان على الأكثر» و«ما بين 2 و20» فتسمّيان أرقامًا محدّدة، والتعدّدية لا تجيب برقم أبدًا — لا يقول الخط إلا one or more، وتُحفظ الحدود قواعدَ منفصلة. و«اثنتان على الأكثر» مغرية لأن الاثنين عدد صغير، لكنها تبقى عددًا."
      }
    },
    {
      id: "t3l3q11", type: "mcq", level: "medium", topics: ["t3-min-max", "t3-zero-or-more"],
      q: {
        en: "\"Each JOB may be held by one or more EMPLOYEEs.\" What are the minimum and maximum number of employees for one job?",
        ar: "«Each JOB may be held by one or more EMPLOYEEs.» ما الحدّ الأدنى والأعلى لعدد الموظّفين في الوظيفة الواحدة؟"
      },
      options: [
        { en: "Zero and many: zero or more", ar: "صفر وكثير: صفر أو أكثر" },
        { en: "One and many: one or more, as the sentence says", ar: "واحد وكثير: واحد أو أكثر، كما تقول الجملة" },
        { en: "Zero and one: zero or one", ar: "صفر وواحد: صفر أو واحد" },
        { en: "One and two: today SA_REP has two holders", ar: "واحد واثنان: لـ SA_REP اليوم شاغلان" }
      ],
      answer: 0,
      hint: {
        en: "The half beside JOB gives the minimum; the symbol at EMPLOYEE gives the maximum.",
        ar: "النصف بجانب JOB يعطي الحدّ الأدنى؛ والرمز عند EMPLOYEE يعطي الحدّ الأعلى."
      },
      explain: {
        en: "may sets the minimum at zero — Stock Clerk has nobody — and one or more, the crow's foot, sets the maximum at many. Together: zero or more, the lecturer's own words for this reading. \"One or more\" alone is tempting because it is printed in the sentence, but it is only the cardinality half of the answer; two is a count from today's rows.",
        ar: "may تجعل الحدّ الأدنى صفرًا — فأمين المخزن لا يشغله أحد — وone or more، قدم الغراب، تجعل الحدّ الأعلى كثيرًا. والمجموع: صفر أو أكثر (zero or more)، وهي عبارة المحاضر نفسه لهذه القراءة. و«one or more» وحدها مغرية لأنها مكتوبة في الجملة، لكنها نصف الجواب الخاص بالتعدّدية فقط؛ والاثنان عدد من صفوف اليوم."
      }
    },
    {
      id: "t3l3q12", type: "match", level: "medium", topics: ["t3-min-max", "t3-zero-or-more"],
      q: {
        en: "Each reading combines a half and an end. Match it to its range.",
        ar: "كل قراءة تجمع نصفًا وطرفًا. طابِقها بمداها."
      },
      leftHead: { en: "Reading", ar: "القراءة" },
      rightHead: { en: "Range", ar: "المدى" },
      pairs: [
        { l: { en: "Each ORDER must be placed by one and only one CUSTOMER.", ar: "Each ORDER must be placed by one and only one CUSTOMER." },
          r: { en: "exactly one", ar: "واحد بالضبط" } },
        { l: { en: "Each EMPLOYEE may be managed by one and only one EMPLOYEE.", ar: "Each EMPLOYEE may be managed by one and only one EMPLOYEE." },
          r: { en: "zero or one", ar: "صفر أو واحد" } },
        { l: { en: "Each CUSTOMER must place one or more ORDERs.", ar: "Each CUSTOMER must place one or more ORDERs." },
          r: { en: "one or more", ar: "واحد أو أكثر" } },
        { l: { en: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs.", ar: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs." },
          r: { en: "zero or more", ar: "صفر أو أكثر" } }
      ],
      hint: {
        en: "must is a minimum of 1, may a minimum of 0; one and only one is a maximum of 1, one or more a maximum of many.",
        ar: "must حدّ أدنى 1، وmay حدّ أدنى 0؛ وone and only one حدّ أعلى 1، وone or more حدّ أعلى كثير."
      },
      explain: {
        en: "must + toe = exactly one; may + toe = zero or one (Dana has no manager); must + crow's foot = one or more; may + crow's foot = zero or more (a new department may be empty). The slides list cardinality as \"the minimum and maximum number\": the half fixes the bottom of the range, the symbol fixes the top.",
        ar: "must + إصبع = واحد بالضبط؛ may + إصبع = صفر أو واحد (Dana بلا مدير)؛ must + قدم غراب = واحد أو أكثر؛ may + قدم غراب = صفر أو أكثر (قد يكون القسم الجديد فارغًا). تذكر الشرائح التعدّدية بأنها «الحدّ الأدنى والأعلى للعدد»: النصف يثبّت أسفل المدى، والرمز يثبّت أعلاه."
      }
    },
    {
      id: "t3l3q13", type: "contrast", level: "medium", topics: ["t3-cardinality", "t3-min-max", "t3-how-many"],
      q: {
        en: "Sort each statement: is it about optionality or about cardinality?",
        ar: "صنّف كل عبارة: هل هي عن الإلزامية أم عن التعدّدية؟"
      },
      concepts: [
        { en: "Optionality", ar: "الإلزامية (optionality)" },
        { en: "Cardinality", ar: "التعدّدية (cardinality)" }
      ],
      rows: [
        { s: { en: "Answers \"how many?\" with singular or plural", ar: "يجيب عن «كم؟» بمفرد أو جمع" }, a: 1 },
        { s: { en: "Drawn as a solid or a dashed half", ar: "يُرسم نصفًا متّصلًا أو متقطّعًا" }, a: 0 },
        { s: { en: "Drawn as a single toe or a crow's foot", ar: "يُرسم إصبعًا واحدة أو قدم غراب" }, a: 1 },
        { s: { en: "Sets the minimum of a reading: 0 or 1", ar: "يحدّد الحدّ الأدنى للقراءة: 0 أو 1" }, a: 0 },
        { s: { en: "Sets the maximum of a reading: 1 or many", ar: "يحدّد الحدّ الأعلى للقراءة: 1 أو كثير" }, a: 1 },
        { s: { en: "Decides which table carries the foreign key", ar: "يقرّر أيّ جدول يحمل المفتاح الأجنبي" }, a: 1 },
        { s: { en: "Decides whether that foreign key column is NOT NULL", ar: "يقرّر هل يكون عمود المفتاح الأجنبي NOT NULL" }, a: 0 }
      ],
      hint: {
        en: "Ask of each statement: is it about whether a link must exist, or about how many links there may be?",
        ar: "اسأل عن كل عبارة: هل هي عن وجوب وجود الرابط، أم عن عدد الروابط الممكنة؟"
      },
      explain: {
        en: "Cardinality: how many, singular or plural, the toe or crow's foot, the maximum, and where the key goes. Optionality: the solid or dashed half, the minimum, and whether the key column may be empty. The two foreign-key rows are the pair to remember — the crow's foot picks the table, the half picks NOT NULL.",
        ar: "التعدّدية: كم، مفرد أو جمع، الإصبع أو قدم الغراب، الحدّ الأعلى، وموضع المفتاح. الإلزامية: النصف المتّصل أو المتقطّع، الحدّ الأدنى، وهل يجوز أن يبقى عمود المفتاح فارغًا. وصفّا المفتاح الأجنبي هما الزوج الذي يجب تذكّره — قدم الغراب تختار الجدول، والنصف يختار NOT NULL."
      }
    },

    /* ---------------------------------------------------- 4 · the restaurant */
    {
      id: "t3l3q14", type: "mcq", level: "easy", topics: ["t3-cardinality-from-scenario", "t3-single-toe"],
      q: {
        en: "Under version 1 of the restaurant (a single toe at both ends), the cashier gets Linda's Friday order through by creating a second Linda. What does that workaround cost?",
        ar: "في الإصدار 1 من المطعم (إصبع واحدة عند الطرفين) يمرّر أمين الصندوق طلب Linda يوم الجمعة بإنشاء Linda ثانية. ما ثمن هذا الالتفاف؟"
      },
      options: [
        { en: "Order 102 now has two customers", ar: "صار للطلب 102 زبونان" },
        { en: "Linda's history is split across two customer records — the redundancy chapter T2 warned about", ar: "تاريخ Linda مقسوم على سجلّين للزبون — التكرار الذي حذّر منه الفصل T2" },
        { en: "Order 102 is saved with no customer at all", ar: "يُحفَظ الطلب 102 بلا زبون أصلًا" },
        { en: "Nothing: the two Linda rows have different ids, so the data stays clean", ar: "لا شيء: لصفَّي Linda معرّفان مختلفان، فتبقى البيانات سليمة" }
      ],
      answer: 1,
      hint: {
        en: "The model allowed one order per customer. To get around it, what was stored twice?",
        ar: "سمح النموذج بطلب واحد لكل زبون. وللالتفاف عليه، ما الذي خُزِّن مرّتين؟"
      },
      explain: {
        en: "One real person now has two customer rows, and neither holds her complete history: the same fact stored twice, the redundancy of T2. Different ids are exactly what hides the problem, not what solves it. Order 102 still has one customer — the fake one. The fix is a crow's foot at ORDER, because \"a customer can place as many orders as he wants\".",
        ar: "صار لشخص حقيقي واحد صفّان في الزبائن، ولا يحمل أيّهما تاريخها كاملًا: الحقيقة نفسها مخزّنة مرّتين، وهو تكرار T2. واختلاف المعرّفين هو بالضبط ما يخفي المشكلة لا ما يحلّها. والطلب 102 ما زال له زبون واحد — المزيّف. والإصلاح قدم غراب عند ORDER، لأن «الزبون يستطيع أن يقدّم ما يشاء من الطلبات»."
      }
    },
    {
      id: "t3l3q15", type: "trace", level: "hard", topics: ["t3-cardinality-from-scenario", "t3-single-toe"],
      q: {
        en: "Version 1 of the restaurant, built as tables: orders.customer_id is NUMBER NOT NULL UNIQUE. Linda (customer 1) already has order 10. Friday's order runs:",
        ar: "الإصدار 1 من المطعم مبنيًّا جداول: orders.customer_id من نوع NUMBER NOT NULL UNIQUE. لـ Linda (الزبون 1) الطلب 10 من قبل. ويُنفَّذ طلب الجمعة:"
      },
      lang: "sql",
      code: "INSERT INTO orders VALUES (102, 1);",
      options: [
        { en: "Saved: customer 1 exists, so the foreign key is satisfied", ar: "يُحفَظ: الزبون 1 موجود، فقيد المفتاح الأجنبي متحقّق" },
        { en: "Refused: Wrong NULL value in NOT NULL column customer_id", ar: "يُرفض: Wrong NULL value in NOT NULL column customer_id" },
        { en: "Saved, and Linda now has two orders", ar: "يُحفَظ، ويصير لـ Linda طلبان" },
        { en: "Refused: Cannot insert record, because it already exists in unique index", ar: "يُرفض: Cannot insert record, because it already exists in unique index" }
      ],
      answer: 3,
      hint: {
        en: "Which constraint turns \"one and only one ORDER per CUSTOMER\" into a rule on the column?",
        ar: "أيّ قيد يحوّل «طلب واحد فقط لكل زبون» إلى قاعدة على العمود؟"
      },
      explain: {
        en: "alasql refuses it: Cannot insert record, because it already exists in unique index. UNIQUE on customer_id is the single toe at ORDER, enforced — Linda's 1 is already used. NOT NULL is satisfied, since 1 is supplied. In version 3 the column is plain NOT NULL, and the same insert gives Linda orders 10 and 102.",
        ar: "يرفضه alasql: Cannot insert record, because it already exists in unique index. قيد UNIQUE على customer_id هو الإصبع الواحدة عند ORDER مفروضةً — والرقم 1 الخاص بـ Linda مستعمل من قبل. أما NOT NULL فمتحقّق، لأن القيمة 1 معطاة. وفي الإصدار 3 يكون العمود NOT NULL فقط، ويعطي الإدخال نفسه Linda الطلبين 10 و102."
      },
      solution: { out: "Cannot insert record, because it already exists in unique index" }
    },
    {
      id: "t3l3q16", type: "compare", level: "hard", topics: ["t3-both-ends-plural", "t3-cardinality-from-scenario"],
      q: {
        en: "Versions 2 and 3 of CUSTOMER–ORDER; both halves are solid in each. The scenario: \"a customer can place as many orders as he wants\"; \"the mother is the customer who owns the order and is responsible for payment\". Compare them.",
        ar: "الإصداران 2 و3 من CUSTOMER–ORDER، والنصفان متّصلان في كلٍّ منهما. السيناريو: «يستطيع الزبون أن يقدّم ما يشاء من الطلبات»؛ «الأمّ هي الزبون الذي يملك الطلب ويتحمّل الدفع». قارن بينهما."
      },
      lang: "text",
      codeA: "[crow] CUSTOMER  place  |  placed by  ORDER  [crow]",
      codeB: "[toe]  CUSTOMER  place  |  placed by  ORDER  [crow]",
      options: [
        { en: "A is safer: crow's feet at both ends refuse nothing the restaurant might need", ar: "A أكثر أمانًا: قدما الغراب عند الطرفين لا ترفضان شيئًا قد يحتاجه المطعم" },
        { en: "A is right: the mother orders for her children, so an order has several customers", ar: "A صحيحة: الأمّ تطلب لأطفالها، فللطلب زبائن عدّة" },
        { en: "B is right only if the CUSTOMER half is also made dashed", ar: "B صحيحة فقط إذا جُعل نصف CUSTOMER متقطّعًا أيضًا" },
        { en: "B is right: plural at ORDER from \"as many as he wants\", singular at CUSTOMER from the one owner who pays", ar: "B صحيحة: جمع عند ORDER من «ما يشاء»، ومفرد عند CUSTOMER من المالك الواحد الذي يدفع" }
      ],
      answer: 3,
      hint: {
        en: "Find the one scenario sentence that answers each end, and check what A says about the owner of an order.",
        ar: "جد جملة السيناريو التي تجيب عن كل طرف، وتحقّق ممّا تقوله A عن مالك الطلب."
      },
      explain: {
        en: "A is version 2: it fixes Linda's second order but says each order may be placed by one or more customers, so nobody is the one who pays. B is version 3, the slides' model. The children are tempting, but the scenario says the mother is the customer — the food is for several people, the order belongs to one. A wrong plural is not safe: it loses the single owner.",
        ar: "A هي الإصدار 2: تصلح طلب Linda الثاني لكنها تقول إن الطلب قد يقدّمه زبون أو أكثر، فلا يكون أحدٌ هو الذي يدفع. وB هي الإصدار 3، نموذج الشرائح. والأطفال مغرون، لكن السيناريو يقول إن الأمّ هي الزبون — الطعام لعدّة أشخاص، والطلب لواحد. والجمع الخاطئ ليس آمنًا: إنه يُضيّع المالك الواحد."
      }
    },
    {
      id: "t3l3q17", type: "multi", level: "hard", topics: ["t3-cardinality-from-scenario", "t3-cardinality-questions"],
      q: {
        en: "Which sentences of the restaurant scenario decide a cardinality — that is, put a single toe or a crow's foot at one end? Select all that apply.",
        ar: "أيّ جمل سيناريو المطعم تحسم تعدّديةً — أي تضع إصبعًا واحدة أو قدم غراب عند أحد الطرفين؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "\"A customer walks up to the counter and places their order.\"", ar: "«يتقدّم الزبون إلى المنضدة ويقدّم طلبه.»" },
        { en: "\"Over a period of time, a customer can place as many orders as he wants.\"", ar: "«مع مرور الوقت، يستطيع الزبون أن يقدّم ما يشاء من الطلبات.»" },
        { en: "\"A customer can order for him or herself only, or for him/herself and others.\"", ar: "«يستطيع الزبون أن يطلب لنفسه فقط، أو لنفسه ولآخرين.»" },
        { en: "\"We consider the mother to be the customer who owns the order and is responsible for payment.\"", ar: "«نَعُدّ الأمّ الزبونَ الذي يملك الطلب ويتحمّل الدفع.»" }
      ],
      answer: [1, 3],
      hint: {
        en: "A cardinality sentence answers \"one, or more than one?\" about customers per order or orders per customer.",
        ar: "جملة التعدّدية تجيب عن «واحد أم أكثر؟» بشأن الزبائن لكل طلب أو الطلبات لكل زبون."
      },
      explain: {
        en: "\"As many orders as he wants\" puts the crow's foot at ORDER; \"the customer who owns the order\" puts the single toe at CUSTOMER. Walking up and placing an order only shows that the link exists. \"For himself and others\" is the trap: the others eat, but they are not customers of the order — read it as plural and you get version 2.",
        ar: "«ما يشاء من الطلبات» تضع قدم الغراب عند ORDER؛ و«الزبون الذي يملك الطلب» تضع الإصبع الواحدة عند CUSTOMER. أما التقدّم وتقديم الطلب فيُظهر فقط أن الرابط موجود. و«لنفسه ولآخرين» هي الفخّ: الآخرون يأكلون، لكنهم ليسوا زبائن الطلب — اقرأها جمعًا تحصل على الإصدار 2."
      }
    },
    {
      id: "t3l3q18", type: "mcq", level: "hard", topics: ["t3-both-ends-plural", "t3-key-at-crows-foot"],
      q: {
        en: "A designer says: \"When I'm unsure, I put a crow's foot at both ends. A plural never refuses data.\" What is the best answer?",
        ar: "يقول مصمّم: «حين لا أكون متأكّدًا أضع قدم غراب عند الطرفين. فالجمع لا يرفض بيانات أبدًا.» ما أفضل ردّ؟"
      },
      options: [
        { en: "Agreed: a model that accepts more data is always the safer model", ar: "موافق: النموذج الذي يقبل بيانات أكثر هو الأكثر أمانًا دائمًا" },
        { en: "Wrong, because a crow's foot is only allowed on a dashed half", ar: "خطأ، لأن قدم الغراب لا تُسمح إلا على نصف متقطّع" },
        { en: "Wrong: a false plural loses a rule the business needs — an order with no single owner who pays — and leaves no end that can be a single key column", ar: "خطأ: الجمع الزائف يُضيّع قاعدة يحتاجها العمل — طلب بلا مالك واحد يدفع — ولا يترك طرفًا يصلح أن يكون عمود مفتاح واحدًا" },
        { en: "Agreed, as long as both halves are solid", ar: "موافق، ما دام النصفان متّصلَين" }
      ],
      answer: 2,
      hint: {
        en: "Think of the restaurant's version 2, and of where the foreign key would have to go.",
        ar: "فكّر في الإصدار 2 من المطعم، وفي أين يجب أن يذهب المفتاح الأجنبي."
      },
      explain: {
        en: "Accepting more is not safer when the business has a singular rule: version 2 lets an order belong to several customers, and the restaurant loses the one who pays. It also leaves no singular end, so no table's single column can hold the link. Optionality is a separate question — a crow's foot sits on solid and dashed halves alike. Ask each end; draw the answer the scenario gives.",
        ar: "قبول الأكثر ليس أكثر أمانًا حين يكون للعمل قاعدة مفرد: الإصدار 2 يسمح بأن يكون للطلب زبائن عدّة، فيضيع على المطعم من يدفع. ولا يترك أيضًا طرفًا مفردًا، فلا يستطيع عمود واحد في أيّ جدول أن يحمل الرابط. والإلزامية سؤال منفصل — قدم الغراب تقع على النصف المتّصل والمتقطّع سواء. اسأل كل طرف، وارسم الجواب الذي يعطيه السيناريو."
      }
    },
    {
      id: "t3l3q19", type: "order", level: "medium", topics: ["t3-cardinality-from-scenario", "t3-cardinality-questions", "t3-key-at-crows-foot"],
      q: {
        en: "Put the steps for settling one end of CUSTOMER–ORDER in the order they depend on each other.",
        ar: "رتّب خطوات حسم طرفٍ واحد من CUSTOMER–ORDER بحسب اعتماد كلٍّ منها على ما قبلها."
      },
      items: [
        { en: "Ask the question for one end: how many ORDERs can one CUSTOMER place?", ar: "اطرح سؤال طرفٍ واحد: كم طلبًا (ORDER) يستطيع الزبون (CUSTOMER) الواحد أن يقدّم؟" },
        { en: "Find the scenario sentence that answers it: \"as many orders as he wants\"", ar: "جد جملة السيناريو التي تجيب عنه: «ما يشاء من الطلبات»" },
        { en: "Answer with one of the two values: one or more", ar: "أجب بإحدى القيمتين: one or more" },
        { en: "Draw the answer at the entity being counted: a crow's foot at ORDER", ar: "ارسم الجواب عند الكيان الذي يُعَدّ: قدم غراب عند ORDER" },
        { en: "Put the foreign key in the table at the crow's-foot end: orders.customer_id", ar: "ضع المفتاح الأجنبي في جدول طرف قدم الغراب: orders.customer_id" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "You cannot draw an answer you have not found, nor place a key before you know where the crow's foot is.",
        ar: "لا تستطيع أن ترسم جوابًا لم تجده، ولا أن تضع مفتاحًا قبل أن تعرف موضع قدم الغراب."
      },
      explain: {
        en: "Question, evidence, answer, symbol, key — each step needs the one before. Version 1 skipped the evidence step and answered \"singular\" without asking; version 2 skipped it the other way. The key comes last because it follows from the drawing: the crow's foot at ORDER sends customer_id into orders.",
        ar: "السؤال، فالدليل، فالجواب، فالرمز، فالمفتاح — كل خطوة تحتاج سابقتها. تخطّى الإصدار 1 خطوة الدليل فأجاب «مفرد» دون سؤال، وتخطّاها الإصدار 2 في الاتجاه المعاكس. ويأتي المفتاح أخيرًا لأنه نتيجة الرسم: قدم الغراب عند ORDER ترسل customer_id إلى orders."
      }
    },

    /* ---------------------------------------------------- 5 · where the key goes */
    {
      id: "t3l3q20", type: "mcq", level: "easy", topics: ["t3-key-at-crows-foot", "t3-crows-foot"],
      q: {
        en: "\"Each CUSTOMER must place one or more ORDERs. Each ORDER must be placed by one and only one CUSTOMER.\" Where does the foreign key go?",
        ar: "«Each CUSTOMER must place one or more ORDERs. Each ORDER must be placed by one and only one CUSTOMER.» أين يذهب المفتاح الأجنبي؟"
      },
      options: [
        { en: "In customers, as order_no", ar: "في customers، باسم order_no" },
        { en: "In both tables, one key each, since both halves are solid", ar: "في الجدولين، مفتاح لكلٍّ منهما، لأن النصفين متّصلان" },
        { en: "In customers, as a list of order numbers", ar: "في customers، قائمةً بأرقام الطلبات" },
        { en: "In orders, as customer_id", ar: "في orders، باسم customer_id" }
      ],
      answer: 3,
      hint: {
        en: "A column holds one value per row. Which table's rows each point to exactly one row of the other?",
        ar: "العمود يحمل قيمة واحدة في كل صفّ. صفوف أيّ جدول يشير كلٌّ منها إلى صفّ واحد بالضبط من الآخر؟"
      },
      explain: {
        en: "The crow's foot is at ORDER, and each order names one and only one customer — one value, one column: orders.customer_id. A customer row would need many order numbers in one cell, which a column cannot hold. Solid halves decide NOT NULL, not where the key lives.",
        ar: "قدم الغراب عند ORDER، وكل طلب يسمّي زبونًا واحدًا فقط — قيمة واحدة في عمود واحد: orders.customer_id. أما صفّ الزبون فيحتاج أرقام طلبات كثيرة في خلية واحدة، وهذا ما لا يحمله العمود. والنصفان المتّصلان يقرّران NOT NULL، لا موضع المفتاح."
      }
    },
    {
      id: "t3l3q21", type: "trace", level: "medium", topics: ["t3-key-at-crows-foot", "t3-one-or-more"],
      q: {
        en: "The administrator's design puts the key at the single-toe end: jobs (job_id PRIMARY KEY, title, employee_id). The row ('SA_REP', 'Sales Representative', 310) is in. Now Mariam (315) is added to SA_REP:",
        ar: "تصميم المسؤول يضع المفتاح عند طرف الإصبع الواحدة: jobs (job_id PRIMARY KEY, title, employee_id). والصفّ ('SA_REP', 'Sales Representative', 310) موجود. والآن تُضاف Mariam (315) إلى SA_REP:"
      },
      lang: "sql",
      code: "INSERT INTO jobs VALUES ('SA_REP', 'Sales Representative', 315);",
      options: [
        { en: "Refused: Cannot insert record, because it already exists in primary key index", ar: "يُرفض: Cannot insert record, because it already exists in primary key index" },
        { en: "Saved: SA_REP now names both Tyler and Mariam", ar: "يُحفَظ: صار SA_REP يسمّي Tyler وMariam معًا" },
        { en: "Saved, but it replaces Tyler with Mariam", ar: "يُحفَظ، لكنه يضع Mariam مكان Tyler" },
        { en: "Refused: Wrong NULL value in NOT NULL column employee_id", ar: "يُرفض: Wrong NULL value in NOT NULL column employee_id" }
      ],
      answer: 0,
      hint: {
        en: "job_id is the primary key of jobs. How many SA_REP rows can exist?",
        ar: "job_id هو المفتاح الأساسي لـ jobs. كم صفًّا لـ SA_REP يمكن أن يوجد؟"
      },
      explain: {
        en: "alasql refuses it: Cannot insert record, because it already exists in primary key index. One SA_REP row has one employee_id cell, and that cell already holds Tyler. The only way round is a second SA_REP row — a job stored twice. With the key at the crow's-foot end, employees.job_id, both rows simply say SA_REP.",
        ar: "يرفضه alasql: Cannot insert record, because it already exists in primary key index. لصفّ SA_REP الواحد خلية employee_id واحدة، وفيها Tyler من قبل. ولا مخرج إلا صفّ SA_REP ثانٍ — وظيفة مخزّنة مرّتين. ومع المفتاح عند طرف قدم الغراب، employees.job_id، يكتب الصفّان SA_REP ببساطة."
      },
      solution: { out: "Cannot insert record, because it already exists in primary key index" }
    },
    {
      id: "t3l3q22", type: "write", level: "hard", topics: ["t3-key-at-crows-foot", "t3-cardinality-from-scenario"],
      q: {
        en: "customers (customer_id NUMBER PRIMARY KEY, name) already exists. Write CREATE TABLE orders (order_no, customer_id) for version 3: each order is placed by one and only one customer, and a customer may have one or more orders — Linda must be able to have both 10 and 102.",
        ar: "الجدول customers (customer_id NUMBER PRIMARY KEY, name) موجود. اكتب CREATE TABLE orders (order_no, customer_id) للإصدار 3: كل طلب يقدّمه زبون واحد فقط، وقد يكون للزبون طلب أو أكثر — يجب أن تستطيع Linda أن تملك الطلبين 10 و102."
      },
      lang: "sql",
      lines: 5,
      starter: "CREATE TABLE orders (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+orders\\s*\\(", flags: "i", label: { en: "CREATE TABLE orders", ar: "CREATE TABLE orders" } },
        { re: "order_no\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "order_no is the primary key", ar: "order_no هو المفتاح الأساسي" } },
        { re: "customer_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "customer_id NOT NULL: each order must have its customer", ar: "customer_id بقيد NOT NULL: لكل طلب زبونه وجوبًا" } },
        { re: "REFERENCES\\s+customers\\s*\\(\\s*customer_id\\s*\\)", flags: "i", label: { en: "customer_id references customers", ar: "customer_id يشير إلى customers" } }
      ],
      forbid: [
        { re: "customer_id\\s+\\w+[^,]*\\bUNIQUE\\b", flags: "i", label: { en: "no UNIQUE on customer_id: that is version 1's single toe at ORDER, which refuses Linda's second order", ar: "لا UNIQUE على customer_id: هذا هو إصبع الإصدار 1 عند ORDER، الذي يرفض طلب Linda الثاني" } }
      ],
      solution: {
        code: "CREATE TABLE orders (\n  order_no    NUMBER PRIMARY KEY,\n  customer_id NUMBER NOT NULL REFERENCES customers(customer_id)\n);",
        en: "Checked in alasql: orders 10, 77, 100 and 102 all insert, and counting gives Linda 2, Krishna 1, Mel 1.",
        ar: "جُرّب في alasql: تُدخَل الطلبات 10 و77 و100 و102 كلها، والعدّ يعطي Linda طلبين وKrishna طلبًا وMel طلبًا."
      },
      hint: {
        en: "The crow's foot is at ORDER, so the key lives in orders. Then ask what would stop a customer_id from repeating.",
        ar: "قدم الغراب عند ORDER، فالمفتاح يسكن orders. ثم اسأل: ما الذي قد يمنع customer_id من التكرار؟"
      },
      explain: {
        en: "customer_id goes in orders because each order names one customer. It is NOT NULL from the solid ORDER half (Lesson 2), and it must be allowed to repeat — that repetition is the crow's foot. Adding UNIQUE turns the table back into version 1 and refuses order 102 with \"already exists in unique index\".",
        ar: "يوضع customer_id في orders لأن كل طلب يسمّي زبونًا واحدًا. وهو NOT NULL بسبب نصف ORDER المتّصل (الدرس 2)، ويجب أن يُسمح بتكراره — فذلك التكرار هو قدم الغراب. وإضافة UNIQUE تُرجع الجدول إلى الإصدار 1 فيُرفض الطلب 102 برسالة «already exists in unique index»."
      }
    },
    {
      id: "t3l3q23", type: "output", level: "easy", topics: ["t3-recursive-cardinality", "t3-one-or-more"],
      q: {
        en: "The lesson's employees: Dana (100, manager_id NULL), Tyler (310, 100), Lawrence (210, 100), Carlos (405, 210), Neil (378, 100). The plural end, \"may manage one or more EMPLOYEEs\", has no column. How many employees does Dana manage?",
        ar: "موظّفو الدرس: Dana (100، manager_id فارغ) وTyler (310، 100) وLawrence (210، 100) وCarlos (405، 210) وNeil (378، 100). الطرف الجمع «may manage one or more EMPLOYEEs» لا عمود له. كم موظّفًا تدير Dana؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS reports\nFROM employees\nWHERE manager_id = 100;",
      blanks: [{ accept: ["3"], label: { en: "reports", ar: "reports" } }],
      hint: {
        en: "Count the rows whose manager_id names 100.",
        ar: "عُدّ الصفوف التي يسمّي manager_id فيها الرقم 100."
      },
      explain: {
        en: "3 — Tyler, Lawrence and Neil. Carlos names 210, not 100. The plural end is read from the rows, not from a column: every row whose manager_id names you. The singular end, \"managed by one and only one\", is the column itself.",
        ar: "3 — Tyler وLawrence وNeil. أما Carlos فيسمّي 210 لا 100. الطرف الجمع يُقرأ من الصفوف لا من عمود: كل صفّ يسمّيك في manager_id. والطرف المفرد «managed by one and only one» هو العمود نفسه."
      },
      solution: { out: "3" }
    },
    {
      id: "t3l3q24", type: "complete", level: "medium", topics: ["t3-recursive-cardinality", "t3-one-and-only-one", "t3-zero-or-more"],
      q: {
        en: "employees.manager_id holds one manager per row, and may be empty. Complete the ERDish sentence it implements.",
        ar: "يحمل employees.manager_id مديرًا واحدًا في كل صفّ، وقد يكون فارغًا. أكمل جملة ERDish التي ينفّذها."
      },
      lang: "erdish",
      code: "Each EMPLOYEE may be managed by ____ EMPLOYEE.",
      options: [
        { code: "one or more" },
        { code: "one and only one" },
        { code: "zero or one" },
        { code: "exactly one" }
      ],
      answer: 1,
      solution: {
        code: "Each EMPLOYEE may be managed by one and only one EMPLOYEE.\nEach EMPLOYEE may manage one or more EMPLOYEEs.",
        en: "One value per row is the singular end; the empty cell is the may, already in the sentence.",
        ar: "قيمة واحدة في الصفّ هي الطرف المفرد؛ والخلية الفارغة هي may، الموجودة في الجملة أصلًا."
      },
      hint: {
        en: "ERDish has only two cardinality phrases. Which one does a single column express?",
        ar: "في ERDish عبارتان فقط للتعدّدية. أيّهما يعبّر عنها عمود واحد؟"
      },
      explain: {
        en: "one and only one: a column holds one value, so this is the singular end. \"zero or one\" is the true range of the reading, which makes it tempting — but the zero already comes from may, and ERDish says the cardinality with one of its two phrases. \"one or more\" is the other end, the one that has no column.",
        ar: "one and only one: العمود يحمل قيمة واحدة، فهذا هو الطرف المفرد. و«zero or one» هي المدى الحقيقي للقراءة، وهذا ما يجعلها مغرية — لكن الصفر يأتي أصلًا من may، وERDish تقول التعدّدية بإحدى عبارتيها الاثنتين. و«one or more» هي الطرف الآخر، الذي لا عمود له."
      }
    }
  ]
};
