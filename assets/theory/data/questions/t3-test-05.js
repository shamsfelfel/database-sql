/* Question bank: T3 lesson 5 test -- Speaking ERDish. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-05"] = {
  title: { en: "Test 5 — Speaking ERDish", ar: "اختبار 5 — التحدّث بلغة ERDish" },
  intro: {
    en: "24 questions on lesson 5: what ERDish is for and who listens to it, the six parts of a sentence and the mark each comes from, reading a relationship both ways, drawing a line back from its two sentences, and speaking a recursive relationship without taking the symbol from the wrong end. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الخامس: الغرض من لغة ERDish ومن يستمع إليها، والأجزاء الستة للجملة والعلامة التي يأتي منها كل جزء، وقراءة العلاقة في الاتجاهين، ورسم الخط من جملتيه من جديد، والتحدّث بعلاقة ذاتية (recursive) دون أخذ الرمز من الطرف الخطأ. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · a language for business rules */
    {
      id: "t3l5q01", type: "mcq", level: "easy", topics: ["t3-erdish-audiences", "t3-erdish"],
      q: {
        en: "You finish the H.R. ERD and write \"Each DEPARTMENT may be responsible for one or more EMPLOYEEs.\" According to the slides, who is this sentence for?",
        ar: "أنهيت مخطّط الموارد البشرية وكتبت «Each DEPARTMENT may be responsible for one or more EMPLOYEEs.» بحسب الشرائح، لمن هذه الجملة؟"
      },
      options: [
        { en: "Only the database administrator, who needs precise words to build the tables", ar: "لمدير قاعدة البيانات وحده، فهو يحتاج إلى كلمات دقيقة ليبني الجداول" },
        { en: "Only the client, because the administrator reads the diagram instead", ar: "للعميل وحده، لأن المدير يقرأ المخطّط بدلًا منها" },
        { en: "Both: the client confirms the rule in it, and the administrator implements the design from it", ar: "لكليهما: العميل يؤكّد القاعدة بها، والمدير ينفّذ التصميم منها" },
        { en: "The modeller alone, as a private note before drawing the line", ar: "للمصمّم وحده، ملاحظةً خاصّة قبل رسم الخط" }
      ],
      answer: 2,
      hint: {
        en: "The slides call ERDish \"a common language both when …\" — finish the sentence.",
        ar: "تصف الشرائح لغة ERDish بأنها «لغة مشتركة حين … وحين …» — أكمل العبارة."
      },
      explain: {
        en: "The slides: \"a common language both when collecting the business rules from your client and communicating them to the Database Administrators who will implement your design.\" The same sentence is read to the client, who says yes or no, and handed to the DBA. Thinking it is only for the DBA misses why it is in plain words: the client cannot read crow's feet.",
        ar: "تقول الشرائح: «لغة مشتركة حين تجمع قواعد العمل من عميلك، وحين تنقلها إلى مديري قواعد البيانات (Database Administrators) الذين سينفّذون تصميمك». فالجملة نفسها تُقرأ على العميل فيقول نعم أو لا، وتُسلَّم إلى المدير. ومن ظنّها للمدير وحده فاته سبب كتابتها بكلمات واضحة: العميل لا يقرأ أقدام الغراب."
      }
    },
    {
      id: "t3l5q02", type: "tf", level: "easy", topics: ["t3-erdish", "t3-industry-terminology"],
      q: {
        en: "ERDish is a new notation introduced in this lesson; the relationship sentences of Lessons 1 to 4 were ordinary English, not ERDish.",
        ar: "لغة ERDish ترميز جديد يُقدَّم في هذا الدرس؛ أما جمل العلاقات في الدروس 1 إلى 4 فكانت إنجليزية عادية، لا ERDish."
      },
      truth: false,
      hint: {
        en: "What did the slides say you have \"already been\" doing when you set optionality and cardinality?",
        ar: "ماذا قالت الشرائح إنك «كنت تفعله سلفًا» حين حدّدت الاختيارية (optionality) والعدديّة (cardinality)؟"
      },
      explain: {
        en: "False. The slides: \"You have already been speaking and writing it, when you identified relationships and specified optionality and cardinality.\" Every \"Each … must/may … one and only one/one or more …\" sentence so far was ERDish. Like any industry-specific terminology, its words have a fixed meaning; this lesson only takes the sentence apart.",
        ar: "خطأ. تقول الشرائح: «لقد كنت تتحدّثها وتكتبها سلفًا، حين حدّدت العلاقات وعيّنت الاختيارية والعدديّة». كل جملة «Each … must/may … one and only one/one or more …» حتى الآن كانت ERDish. وككل مصطلحات خاصة بمجال (industry-specific terminology)، لكلماتها معنى ثابت؛ وهذا الدرس يفكّك الجملة فحسب."
      }
    },
    {
      id: "t3l5q03", type: "multi", level: "medium", topics: ["t3-erdish-six-parts", "t3-erdish", "t3-business-rule-syntax"],
      q: {
        en: "Which of these are complete ERDish sentences — ones the DBA could build from without a phone call? Choose all that apply.",
        ar: "أيّ هذه جمل ERDish كاملة — يستطيع المدير أن يبني منها دون اتّصال هاتفي؟ اختر كل ما ينطبق."
      },
      options: [
        { code: "Each EMPLOYEE must work in one and only one DEPARTMENT." },
        { code: "Our staff usually belong to a department." },
        { code: "Each JOB may be held by one or more EMPLOYEEs." },
        { code: "Each EMPLOYEE works in a DEPARTMENT." },
        { code: "Each ORDER must be placed by one and only one CUSTOMER." },
        { code: "Each DEPARTMENT must have at least three EMPLOYEEs." }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Check each for an optionality word (must be / may be) and a cardinality phrase (one and only one / one or more).",
        ar: "ابحث في كل واحدة عن كلمة اختيارية (must be / may be) وعن عبارة عدديّة (one and only one / one or more)."
      },
      explain: {
        en: "The three with all six parts are ERDish. \"Usually belong to\" is the manager's ordinary words: no fixed optionality, no cardinality. \"Works in a DEPARTMENT\" sounds precise but drops parts 3 and 5 — is \"a\" one and only one, and is it required? \"At least three\" is a number, and cardinality is never a number: only one and only one or one or more.",
        ar: "الجمل الثلاث التي فيها الأجزاء الستة كلها هي ERDish. أما «usually belong to» فكلمات المدير العادية: لا اختيارية ثابتة ولا عدديّة. و«works in a DEPARTMENT» تبدو دقيقة لكنها تُسقط الجزأين 3 و5 — هل «a» تعني واحدًا فقط، وهل هي إلزامية؟ و«at least three» رقم، والعدديّة ليست رقمًا أبدًا: إما one and only one وإما one or more."
      }
    },

    /* ---------------------------------------------------- 2 · the six parts */
    {
      id: "t3l5q04", type: "order", level: "easy", topics: ["t3-erdish-six-parts", "t3-business-rule-syntax"],
      q: {
        en: "Put the six parts of an ERDish sentence in the order the slides fix for them.",
        ar: "رتّب الأجزاء الستة لجملة ERDish بالترتيب الذي تثبّته الشرائح."
      },
      items: [
        { en: "EACH", ar: "EACH" },
        { en: "Entity A — the subject", ar: "الكيان A — الفاعل" },
        { en: "Optionality — must be / may be", ar: "الاختيارية — must be / may be" },
        { en: "Relationship name", ar: "اسم العلاقة" },
        { en: "Cardinality — one and only one / one or more", ar: "العدديّة — one and only one / one or more" },
        { en: "Entity B", ar: "الكيان B" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "Say \"Each EMPLOYEE must work in one and only one DEPARTMENT\" and label each chunk as you go.",
        ar: "قل «Each EMPLOYEE must work in one and only one DEPARTMENT» وسمِّ كل قطعة وأنت تقرأ."
      },
      explain: {
        en: "EACH · entity A · optionality · name · cardinality · entity B — the business rule syntax \"Each entity1 {must be | may be} relationship-name {one and only one | one or more} entity2\". The common slip is to put the cardinality before the name (\"must one and only one work in\"); the template fixes it after.",
        ar: "‏EACH · الكيان A · الاختيارية · الاسم · العدديّة · الكيان B — وهي صيغة قاعدة العمل (business rule syntax): «Each entity1 {must be | may be} relationship-name {one and only one | one or more} entity2». والزلّة الشائعة وضع العدديّة قبل الاسم («must one and only one work in»)؛ والقالب يثبّتها بعده."
      }
    },
    {
      id: "t3l5q05", type: "match", level: "easy", topics: ["t3-entity-a-entity-b", "t3-erdish-six-parts"],
      q: {
        en: "\"Each ORDER must be placed by one and only one CUSTOMER.\" Match each part of the sentence to where it is on the line.",
        ar: "«Each ORDER must be placed by one and only one CUSTOMER.» طابِق كل جزء من الجملة بموضعه على الخط."
      },
      leftHead: { en: "Part of the sentence", ar: "جزء الجملة" },
      rightHead: { en: "On the drawing", ar: "في الرسم" },
      pairs: [
        { l: { en: "ORDER (part 2)", ar: "ORDER (الجزء 2)" },
          r: { en: "entity A: the box the reading starts from", ar: "الكيان A: الصندوق الذي تبدأ منه القراءة" } },
        { l: { en: "must be (part 3)", ar: "must be (الجزء 3)" },
          r: { en: "the solid half beside ORDER", ar: "النصف المتّصل بجانب ORDER" } },
        { l: { en: "placed by (part 4)", ar: "placed by (الجزء 4)" },
          r: { en: "the name written beside ORDER", ar: "الاسم المكتوب بجانب ORDER" } },
        { l: { en: "one and only one (part 5)", ar: "one and only one (الجزء 5)" },
          r: { en: "the single toe at CUSTOMER", ar: "الإصبع الواحدة عند CUSTOMER" } },
        { l: { en: "CUSTOMER (part 6)", ar: "CUSTOMER (الجزء 6)" },
          r: { en: "entity B: the box at the far end", ar: "الكيان B: الصندوق عند الطرف البعيد" } }
      ],
      hint: {
        en: "Parts 2, 3 and 4 come from one side of the line; parts 5 and 6 from the other.",
        ar: "الأجزاء 2 و3 و4 تأتي من جهة واحدة من الخط؛ والجزآن 5 و6 من الجهة الأخرى."
      },
      explain: {
        en: "Entity A, its half and its name all sit on A's side: ORDER, solid, placed by. The cardinality and entity B are on B's side: the single toe at CUSTOMER. The tempting slip is to look for \"one and only one\" beside ORDER because the sentence is about orders — but cardinality answers how many CUSTOMERs, so it is drawn at CUSTOMER.",
        ar: "الكيان A ونصفه واسمه كلها في جهة A: ‏ORDER، متّصل، placed by. أما العدديّة والكيان B ففي جهة B: الإصبع الواحدة عند CUSTOMER. والزلّة المغرية أن تبحث عن «one and only one» بجانب ORDER لأن الجملة عن الطلبات — لكن العدديّة تجيب: كم CUSTOMER؟ فتُرسم عند CUSTOMER."
      }
    },
    {
      id: "t3l5q06", type: "fill", level: "easy", topics: ["t3-business-rule-syntax", "t3-must-be-or-must"],
      q: {
        en: "In the H.R. ERD, the half beside EMPLOYEE is solid and named hold; the end at JOB is a single toe. Fill in the sentence read from EMPLOYEE.",
        ar: "في مخطّط الموارد البشرية، النصف المجاور لـ EMPLOYEE متّصل واسمه hold؛ والطرف عند JOB إصبع واحدة. املأ الجملة المقروءة من EMPLOYEE."
      },
      lang: "erdish",
      code: "Each EMPLOYEE ____1____ hold ____2____ JOB.",
      blanks: [
        { accept: ["must", "MUST"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one", "ONE AND ONLY ONE", "One and only one"], label: { en: "2", ar: "2" }, wide: true }
      ],
      hint: {
        en: "Solid means one word, single toe means one phrase. Which form of the word fits before \"hold\"?",
        ar: "المتّصل يعني كلمة، والإصبع الواحدة تعني عبارة. أيّ صيغتي الكلمة تناسب قبل «hold»؟"
      },
      explain: {
        en: "must · one and only one — the slides' own sentence. Solid is mandatory; the slides allow \"must be\" or \"must\", and you pick the one that makes English with the name: \"must be hold\" does not. A single toe at JOB is one and only one; \"a\" or \"one\" alone would leave the DBA guessing.",
        ar: "‏must · one and only one — وهي جملة الشرائح نفسها. المتّصل إلزامي؛ والشرائح تسمح بـ «must be» أو «must»، وتختار ما يستقيم مع الاسم في الإنجليزية: «must be hold» لا تستقيم. والإصبع الواحدة عند JOB تعني one and only one؛ أما «a» أو «one» وحدها فتترك المدير يخمّن."
      }
    },
    {
      id: "t3l5q07", type: "tf", level: "easy", topics: ["t3-must-be-or-must"],
      q: {
        en: "\"Each AUTHOR may be the author of …\" and \"Each AUTHOR may author …\" draw different halves: may be is weaker than may.",
        ar: "«Each AUTHOR may be the author of …» و«Each AUTHOR may author …» ترسمان نصفين مختلفين: may be أضعف من may."
      },
      truth: false,
      hint: {
        en: "The slides give two forms for each optionality. What decides which one you write?",
        ar: "تعطي الشرائح صيغتين لكل اختيارية. ما الذي يحدّد أيّهما تكتب؟"
      },
      explain: {
        en: "False. The slides: for optional use \"may be\" or \"may\"; for mandatory use \"must be\" or \"must\". Both forms mean the same dashed (or solid) half; only the grammar of the relationship name decides — may be the author of, may author. A reader who hears two strengths in them has added a rule the diagram does not hold.",
        ar: "خطأ. تقول الشرائح: للاختياري استعمل «may be» أو «may»؛ وللإلزامي «must be» أو «must». والصيغتان تعنيان النصف المتقطّع (أو المتّصل) نفسه؛ وقواعد اسم العلاقة وحدها تحسم — may be the author of، وmay author. ومن يسمع فيهما قوّتين مختلفتين أضاف قاعدة لا يحملها المخطّط."
      }
    },
    {
      id: "t3l5q08", type: "error", level: "medium", topics: ["t3-business-rule-syntax", "t3-erdish-six-parts"],
      q: {
        en: "A student writes the H.R. rules for the DBA. Which line breaks the six-part form?",
        ar: "يكتب طالب قواعد الموارد البشرية لمدير قاعدة البيانات. أيّ سطر يخالف صيغة الأجزاء الستة؟"
      },
      lang: "erdish",
      code: "Each EMPLOYEE must work in one and only one DEPARTMENT.\nEach DEPARTMENT may be responsible for one or more EMPLOYEEs.\nEach EMPLOYEE must hold one and only one JOB.\nEach JOB may be held by many EMPLOYEEs.",
      answer: 4,
      solution: {
        code: "Each EMPLOYEE must work in one and only one DEPARTMENT.\nEach DEPARTMENT may be responsible for one or more EMPLOYEEs.\nEach EMPLOYEE must hold one and only one JOB.\nEach JOB may be held by one or more EMPLOYEEs.",
        en: "Part 5 has exactly two choices: \"many\" is replaced by \"one or more\".",
        ar: "للجزء 5 خياران فقط: تُستبدل «many» بـ «one or more»."
      },
      hint: {
        en: "Each brace in the template offers exactly two choices. Is every part 5 one of them?",
        ar: "كل قوس في القالب يعرض خيارين فقط. هل كل جزء 5 واحد منهما؟"
      },
      explain: {
        en: "Line 4. \"Many\" means the same to most readers, but it is not one of the two cardinality phrases, and the six-part form needs no other word. Line 2 is the tempting one — \"may be … one or more\" can sound loose — yet it is exactly the slides' sentence. Line 3's \"must\" without \"be\" is allowed: grammar picks the form.",
        ar: "السطر 4. قد تعني «many» الشيء نفسه لمعظم القرّاء، لكنها ليست إحدى عبارتي العدديّة، وصيغة الأجزاء الستة لا تحتاج إلى كلمة أخرى. والسطر 2 هو المغري — «may be … one or more» قد تبدو مرتخية — لكنه جملة الشرائح بعينها. و«must» دون «be» في السطر 3 مسموحة: القواعد تختار الصيغة."
      }
    },
    {
      id: "t3l5q09", type: "contrast", level: "medium", topics: ["t3-entity-a-entity-b", "t3-erdish-six-parts", "t3-what-swaps"],
      q: {
        en: "You read one sentence off a relationship line. Sort each thing: do you take it from beside entity A (where the sentence starts), or from the end at entity B (where it ends)?",
        ar: "تقرأ جملة واحدة من خط علاقة. صنّف كل شيء: هل تأخذه من جانب الكيان A (حيث تبدأ الجملة)، أم من الطرف عند الكيان B (حيث تنتهي)؟"
      },
      concepts: [
        { en: "Beside entity A", ar: "بجانب الكيان A" },
        { en: "At entity B", ar: "عند الكيان B" }
      ],
      rows: [
        { s: { en: "must be / may be", ar: "must be / may be" }, a: 0 },
        { s: { en: "one and only one / one or more", ar: "one and only one / one or more" }, a: 1 },
        { s: { en: "The relationship name you say", ar: "اسم العلاقة الذي تنطقه" }, a: 0 },
        { s: { en: "Whether the half is solid or dashed", ar: "هل النصف متّصل أم متقطّع" }, a: 0 },
        { s: { en: "Whether the line ends in a toe or a crow's foot", ar: "هل ينتهي الخط بإصبع واحدة أم بقدم غراب" }, a: 1 },
        { s: { en: "The entity name after the cardinality", ar: "اسم الكيان بعد العدديّة" }, a: 1 }
      ],
      hint: {
        en: "Parts 2, 3, 4 — one side. Parts 5, 6 — the other.",
        ar: "الأجزاء 2 و3 و4 — جهة. والجزآن 5 و6 — الجهة الأخرى."
      },
      explain: {
        en: "Optionality and the name are read beside the start; cardinality is read at the end, together with entity B. This is the rule people break when they read a line from one end only: they take the crow's foot beside them and say it as their own cardinality. Turn the reading round and every row swaps sides with it.",
        ar: "الاختيارية والاسم يُقرآن بجانب البداية؛ والعدديّة تُقرأ عند النهاية مع الكيان B. وهذه القاعدة هي التي يكسرها من يقرأ الخط من طرف واحد: يأخذ قدم الغراب التي بجانبه ويقولها عدديّةً له. وإذا عكست القراءة تبادل كل صفّ جهته معها."
      }
    },
    {
      id: "t3l5q10", type: "output", level: "medium", topics: ["t3-erdish-six-parts", "t3-erdish-audiences"],
      q: {
        en: "The DBA built employees from \"Each EMPLOYEE must work in one and only one DEPARTMENT\": department_id NUMBER NOT NULL. The lesson's five employees are in, spread over departments 10, 15 and 22. Both inserts run, one at a time, then the query. What does it return?",
        ar: "بنى المدير الجدول employees من «Each EMPLOYEE must work in one and only one DEPARTMENT»: ‏department_id NUMBER NOT NULL. والموظّفون الخمسة في الدرس موجودون، موزّعون على الأقسام 10 و15 و22. تُنفَّذ عمليّتا الإدراج واحدة واحدة، ثم الاستعلام. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "INSERT INTO employees (employee_id, first_name, last_name, manager_id)\nVALUES (315, 'Mariam', 'Odeh', 100);\n\nINSERT INTO employees (employee_id, first_name, last_name, department_id, manager_id)\nVALUES (316, 'Omar', 'Haddad', 30, 100);\n\nSELECT COUNT(*) AS staff, COUNT(DISTINCT department_id) AS departments\nFROM employees;",
      blanks: [
        { accept: ["6"], label: { en: "staff", ar: "staff" } },
        { accept: ["4"], label: { en: "departments", ar: "departments" } }
      ],
      hint: {
        en: "Which part of the sentence became NOT NULL, and does the first insert give it a value?",
        ar: "أيّ جزء من الجملة صار NOT NULL، وهل يعطيه الإدراج الأول قيمة؟"
      },
      explain: {
        en: "6 and 4, run in alasql. Mariam is refused — Wrong NULL value in NOT NULL column department_id — because part 3 says must. Omar is saved in Shipping (30), so four departments now have staff. Counting 7 assumes the refused row is kept; counting 3 forgets that Omar opened Shipping.",
        ar: "‏6 و4، بالتشغيل في alasql. تُرفض Mariam — ‏Wrong NULL value in NOT NULL column department_id — لأن الجزء 3 يقول must. ويُحفظ Omar في Shipping ‏(30)، فصار لأربعة أقسام موظّفون. ومن عدّ 7 افترض أن الصفّ المرفوض يبقى؛ ومن عدّ 3 نسي أن Omar فتح Shipping."
      },
      solution: { out: "staff | departments\n6 | 4" }
    },

    /* ---------------------------------------------------- 3 · read it both ways */
    {
      id: "t3l5q11", type: "compare", level: "medium", topics: ["t3-two-readings", "t3-reading-direction"],
      q: {
        en: "Versions 2 and 3 of the lesson's evolve block, as handed to the DBA. Compare them.",
        ar: "الإصداران 2 و3 من كتلة التطوّر في الدرس، كما سُلّما إلى مدير قاعدة البيانات. قارن بينهما."
      },
      lang: "erdish",
      codeA: "Each EMPLOYEE must work in one and only one DEPARTMENT.",
      codeB: "Each EMPLOYEE must work in one and only one DEPARTMENT.\nEach DEPARTMENT may be responsible for one or more EMPLOYEEs.",
      options: [
        { en: "B is better: the second reading supplies the dashed DEPARTMENT half, its name and the crow's foot at EMPLOYEE", ar: "B أفضل: القراءة الثانية تعطي نصف DEPARTMENT المتقطّع واسمه وقدم الغراب عند EMPLOYEE" },
        { en: "A is enough: its sentence has all six parts, so the line is fully stated", ar: "A تكفي: جملتها فيها الأجزاء الستة، فالخط مقرَّر كاملًا" },
        { en: "They state the same rule: the second sentence only repeats the first from the other side", ar: "تقرّران القاعدة نفسها: الجملة الثانية تكرّر الأولى من الجهة الأخرى فحسب" },
        { en: "A is better: B contradicts itself, since one sentence says must and the other may", ar: "A أفضل: B تناقض نفسها، لأن جملة تقول must والأخرى may" }
      ],
      answer: 0,
      hint: {
        en: "One complete sentence fixes three marks. How many marks does a line have?",
        ar: "الجملة الكاملة الواحدة تثبّت ثلاث علامات. كم علامة في الخط؟"
      },
      explain: {
        en: "A is complete but says half the line; B says all six marks. Only B answers the DBA's question — may a department exist with nobody in it? Yes, the DEPARTMENT half is dashed. \"Same rule\" is the trap: the second reading adds three new marks. And must at one end with may at the other is no contradiction — optionality is per end.",
        ar: "‏A كاملة لكنها تقول نصف الخط؛ وB تقول العلامات الست كلها. وB وحدها تجيب سؤال المدير — هل يجوز وجود قسم بلا أحد؟ نعم، نصف DEPARTMENT متقطّع. و«القاعدة نفسها» هي الفخّ: القراءة الثانية تضيف ثلاث علامات جديدة. وmust عند طرف مع may عند الآخر ليس تناقضًا — فالاختيارية لكل طرف على حدة."
      }
    },
    {
      id: "t3l5q12", type: "multi", level: "hard", topics: ["t3-two-readings", "t3-what-swaps"],
      q: {
        en: "Version 2 handed the DBA only \"Each EMPLOYEE must work in one and only one DEPARTMENT.\" Which marks of the line does that sentence leave open? Choose all that apply.",
        ar: "سلّم الإصدار 2 المدير «Each EMPLOYEE must work in one and only one DEPARTMENT.» وحدها. أيّ علامات الخط تتركها تلك الجملة مفتوحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Whether the half beside DEPARTMENT is solid or dashed", ar: "هل النصف المجاور لـ DEPARTMENT متّصل أم متقطّع" },
        { en: "Whether the half beside EMPLOYEE is solid or dashed", ar: "هل النصف المجاور لـ EMPLOYEE متّصل أم متقطّع" },
        { en: "The relationship name written beside DEPARTMENT", ar: "اسم العلاقة المكتوب بجانب DEPARTMENT" },
        { en: "The symbol at the EMPLOYEE end", ar: "الرمز عند طرف EMPLOYEE" },
        { en: "The symbol at the DEPARTMENT end", ar: "الرمز عند طرف DEPARTMENT" },
        { en: "The relationship name written beside EMPLOYEE", ar: "اسم العلاقة المكتوب بجانب EMPLOYEE" }
      ],
      answer: [0, 2, 3],
      hint: {
        en: "This sentence starts at EMPLOYEE. It fixes the half and name beside its start and the symbol at its far end. What is left?",
        ar: "هذه الجملة تبدأ من EMPLOYEE. تثبّت النصف والاسم بجانب بدايتها والرمز عند طرفها البعيد. ماذا يبقى؟"
      },
      explain: {
        en: "The sentence fixes the EMPLOYEE half (must), the name work in, and the toe at DEPARTMENT. Open are the other three: the DEPARTMENT half, its name, and the end at EMPLOYEE. The tempting wrong pick is \"the symbol at the DEPARTMENT end\" — it sounds like DEPARTMENT's business, but it is part 5 of this very sentence.",
        ar: "الجملة تثبّت نصف EMPLOYEE ‏(must)، والاسم work in، والإصبع عند DEPARTMENT. ويبقى مفتوحًا الثلاثة الأخرى: نصف DEPARTMENT، واسمه، والطرف عند EMPLOYEE. والاختيار الخاطئ المغري «الرمز عند طرف DEPARTMENT» — يبدو من شأن DEPARTMENT، لكنه الجزء 5 من هذه الجملة نفسها."
      }
    },
    {
      id: "t3l5q13", type: "trace", level: "medium", topics: ["t3-two-readings", "t3-erdish"],
      q: {
        en: "The lesson's departments and employees tables: Accounting (10), Sales (15), Development (22), Shipping (30), and the five employees. What does this query return, and which mark allows it?",
        ar: "جدولا departments وemployees في الدرس: ‏Accounting ‏(10)، وSales ‏(15)، وDevelopment ‏(22)، وShipping ‏(30)، والموظّفون الخمسة. ماذا يُرجع هذا الاستعلام، وأيّ علامة تسمح به؟"
      },
      lang: "sql",
      code: "SELECT d.name\nFROM departments d LEFT JOIN employees e\n  ON e.department_id = d.department_id\nWHERE e.employee_id IS NULL;",
      options: [
        { en: "Shipping — allowed by the dashed half beside DEPARTMENT (may be)", ar: "Shipping — يسمح به النصف المتقطّع بجانب DEPARTMENT ‏(may be)" },
        { en: "No rows — every department must have at least one employee", ar: "لا صفوف — يجب أن يكون لكل قسم موظّف واحد على الأقل" },
        { en: "Shipping — allowed by the crow's foot at EMPLOYEE (one or more)", ar: "Shipping — تسمح به قدم الغراب عند EMPLOYEE ‏(one or more)" },
        { en: "Shipping — allowed by the dashed half beside EMPLOYEE", ar: "Shipping — يسمح به النصف المتقطّع بجانب EMPLOYEE" }
      ],
      answer: 0,
      hint: {
        en: "A department with nobody in it answers DEPARTMENT's own sentence. Which part of that sentence says whether zero is allowed?",
        ar: "القسم الذي لا أحد فيه يجيب جملة DEPARTMENT نفسها. أيّ جزء منها يقول هل الصفر مسموح؟"
      },
      explain: {
        en: "Run in alasql: one row, Shipping. Nobody's department_id is 30, and that is legal because reading 2 says each DEPARTMENT may be responsible for … — the dashed half beside DEPARTMENT. The crow's foot says how many are allowed, not whether none is. The EMPLOYEE half is solid: every employee must have a department.",
        ar: "عند التشغيل في alasql: صفّ واحد، Shipping. لا أحد قيمة department_id عنده 30، وهذا مشروع لأن القراءة 2 تقول إن كل DEPARTMENT ‏may be responsible for … — النصف المتقطّع بجانب DEPARTMENT. وقدم الغراب تقول كم يُسمح، لا هل يُسمح بلا أحد. ونصف EMPLOYEE متّصل: لكل موظّف قسم لا بدّ منه."
      },
      solution: { out: "name\nShipping" }
    },
    {
      id: "t3l5q14", type: "complete", level: "medium", topics: ["t3-what-swaps", "t3-two-readings"],
      q: {
        en: "EMPLOYEE is on the left, JOB on the right. The half beside EMPLOYEE is solid and named hold; the half beside JOB is dashed and named held by; the crow's foot is at EMPLOYEE. Complete reading 2.",
        ar: "‏EMPLOYEE على اليسار، وJOB على اليمين. النصف المجاور لـ EMPLOYEE متّصل واسمه hold؛ والنصف المجاور لـ JOB متقطّع واسمه held by؛ وقدم الغراب عند EMPLOYEE. أكمل القراءة 2."
      },
      lang: "erdish",
      code: "Reading 1: Each EMPLOYEE must hold one and only one JOB.\nReading 2: Each JOB ____ EMPLOYEEs.",
      options: [
        { code: "must hold one or more" },
        { code: "may be held by one and only one" },
        { code: "may be held by one or more" },
        { code: "must be held by one or more" }
      ],
      answer: 2,
      solution: {
        code: "Reading 1: Each EMPLOYEE must hold one and only one JOB.\nReading 2: Each JOB may be held by one or more EMPLOYEEs.",
        en: "Half and name beside the new start (JOB): dashed, held by. Symbol at the old start (EMPLOYEE): crow's foot.",
        ar: "النصف والاسم بجانب البداية الجديدة (JOB): متقطّع، held by. والرمز عند البداية القديمة (EMPLOYEE): قدم غراب."
      },
      hint: {
        en: "Going back, everything changes sides at once: half and name from the new start, symbol from the old start.",
        ar: "في العودة يتبادل كل شيء جهته دفعة واحدة: النصف والاسم من البداية الجديدة، والرمز من البداية القديمة."
      },
      explain: {
        en: "may be held by one or more — the slides' own sentence. Each wrong option swaps only part of the way: \"must hold\" keeps reading 1's half and name; \"must be held by\" takes the new name but the old half; \"one and only one\" takes the symbol at the new start, which belongs to reading 1.",
        ar: "‏may be held by one or more — جملة الشرائح نفسها. وكل خيار خاطئ يبدّل جزءًا من الطريق فقط: «must hold» يُبقي نصف القراءة 1 واسمها؛ و«must be held by» يأخذ الاسم الجديد والنصف القديم؛ و«one and only one» يأخذ الرمز عند البداية الجديدة، وهو للقراءة 1."
      }
    },

    /* ---------------------------------------------------- 4 · from two sentences to a line */
    {
      id: "t3l5q15", type: "mcq", level: "easy", topics: ["t3-reading-direction", "t3-top-to-bottom"],
      q: {
        en: "On a restaurant ERD, CUSTOMER is drawn above ORDER. Which sentence do you read first?",
        ar: "في مخطّط المطعم، رُسم CUSTOMER فوق ORDER. أيّ الجملتين تقرأ أوّلًا؟"
      },
      options: [
        { code: "Each ORDER must be placed by one and only one CUSTOMER." },
        { code: "Each CUSTOMER must place one or more ORDERs." },
        { en: "Either one: the order of the two readings carries no rule", ar: "أيّهما: ترتيب القراءتين لا يحمل قاعدة" },
        { en: "Whichever sentence contains one and only one", ar: "الجملة التي فيها one and only one، أيًّا كانت" }
      ],
      answer: 1,
      hint: {
        en: "The slides: left to right, or top to bottom, first. Which box is on top?",
        ar: "تقول الشرائح: من اليسار إلى اليمين، أو من الأعلى إلى الأسفل، أوّلًا. أيّ الصندوقين في الأعلى؟"
      },
      explain: {
        en: "Top to bottom first, so the upper box, CUSTOMER, is entity A of the first sentence. The order comes from the layout, not from the meaning: not from which sentence is mandatory or which has one and only one. It does not change the rules — both readings are still needed — but the slides fix where you start.",
        ar: "من الأعلى إلى الأسفل أوّلًا، فالصندوق الأعلى CUSTOMER هو الكيان A في الجملة الأولى. والترتيب يأتي من التخطيط لا من المعنى: لا من أيّ الجملتين إلزامية ولا من أيّهما فيها one and only one. وهو لا يغيّر القواعد — فالقراءتان مطلوبتان كلتاهما — لكن الشرائح تثبّت من أين تبدأ."
      }
    },
    {
      id: "t3l5q16", type: "match", level: "medium", topics: ["t3-sentence-to-line", "t3-book-author"],
      q: {
        en: "The library sends: \"Each BOOK must be written by one and only one AUTHOR. Each AUTHOR may be the author of one or more BOOKs.\" Match each mark of the drawn line to the words that drew it.",
        ar: "ترسل المكتبة: «Each BOOK must be written by one and only one AUTHOR. Each AUTHOR may be the author of one or more BOOKs.» طابِق كل علامة في الخط المرسوم بالكلمات التي رسمتها."
      },
      leftHead: { en: "Mark on the line", ar: "علامة على الخط" },
      rightHead: { en: "Drawn by", ar: "رسمتها" },
      pairs: [
        { l: { en: "the solid half beside BOOK", ar: "النصف المتّصل بجانب BOOK" },
          r: { en: "must be, in sentence 1", ar: "must be في الجملة 1" } },
        { l: { en: "the dashed half beside AUTHOR", ar: "النصف المتقطّع بجانب AUTHOR" },
          r: { en: "may be, in sentence 2", ar: "may be في الجملة 2" } },
        { l: { en: "the single toe at AUTHOR", ar: "الإصبع الواحدة عند AUTHOR" },
          r: { en: "one and only one, in sentence 1", ar: "one and only one في الجملة 1" } },
        { l: { en: "the crow's foot at BOOK", ar: "قدم الغراب عند BOOK" },
          r: { en: "one or more, in sentence 2", ar: "one or more في الجملة 2" } },
        { l: { en: "the name author of, beside AUTHOR", ar: "الاسم author of بجانب AUTHOR" },
          r: { en: "part 4 of sentence 2", ar: "الجزء 4 من الجملة 2" } }
      ],
      hint: {
        en: "Each sentence draws three marks: the half and name beside its subject, the symbol at its far end.",
        ar: "كل جملة ترسم ثلاث علامات: النصف والاسم بجانب فاعلها، والرمز عند طرفها البعيد."
      },
      explain: {
        en: "Run the six-part table backwards. Sentence 1 starts at BOOK: solid half and written by beside BOOK, single toe at AUTHOR. Sentence 2 starts at AUTHOR: dashed half and author of beside AUTHOR, crow's foot at BOOK. The trap is to draw the crow's foot beside AUTHOR because \"an author has many books\" — the symbol goes at the entity being counted.",
        ar: "اقرأ جدول الأجزاء الستة بالعكس. الجملة 1 تبدأ من BOOK: نصف متّصل وwritten by بجانب BOOK، وإصبع واحدة عند AUTHOR. والجملة 2 تبدأ من AUTHOR: نصف متقطّع وauthor of بجانب AUTHOR، وقدم غراب عند BOOK. والفخّ أن ترسم قدم الغراب بجانب AUTHOR لأن «المؤلّف له كتب كثيرة» — الرمز يوضع عند الكيان المعدود."
      }
    },
    {
      id: "t3l5q17", type: "write", level: "hard", topics: ["t3-book-author", "t3-sentence-to-line"],
      q: {
        en: "Sentence 1, \"Each BOOK must be written by one and only one AUTHOR\", is the one that builds a column. Write the books table it builds: book_id (5 characters) as the key, title (up to 40 characters, required), and the column for the author, matching authors.author_id (6 characters).",
        ar: "الجملة 1، «Each BOOK must be written by one and only one AUTHOR»، هي التي تبني عمودًا. اكتب الجدول books الذي تبنيه: ‏book_id ‏(5 أحرف) مفتاحًا، وtitle ‏(حتى 40 حرفًا، إلزامي)، وعمود المؤلّف، مطابقًا لـ authors.author_id ‏(6 أحرف)."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE books (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+books\\s*\\(", flags: "i", label: { en: "CREATE TABLE books", ar: "CREATE TABLE books" } },
        { re: "book_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "book_id is the PRIMARY KEY", ar: "book_id هو PRIMARY KEY" } },
        { re: "title\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "title NOT NULL", ar: "title NOT NULL" } },
        { re: "author_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "must be → author_id NOT NULL", ar: "must be ← author_id NOT NULL" } }
      ],
      forbid: [
        { re: "author_id\\s+[^,)]*UNIQUE", flags: "i", label: { en: "author_id must not be UNIQUE: sentence 2 lets one author write one or more books", ar: "يجب ألّا يكون author_id فريدًا (UNIQUE): الجملة 2 تسمح للمؤلّف بكتاب واحد أو أكثر" } }
      ],
      solution: {
        code: "CREATE TABLE books (\n  book_id   VARCHAR(5) PRIMARY KEY,\n  title     VARCHAR(40) NOT NULL,\n  author_id VARCHAR(6) NOT NULL\n);",
        en: "Checked in alasql: Goldsmith's two books are both saved, and INSERT INTO books (book_id, title) VALUES ('BK005', 'Emma') is refused with Wrong NULL value in NOT NULL column author_id. One and only one author gives a single column; must be gives NOT NULL.",
        ar: "تحقّقتُ منه في alasql: يُحفظ كتابا Goldsmith كلاهما، ويُرفض INSERT INTO books (book_id, title) VALUES ('BK005', 'Emma') بالرسالة Wrong NULL value in NOT NULL column author_id. فـ one and only one تعطي عمودًا واحدًا؛ وmust be تعطي NOT NULL."
      },
      hint: {
        en: "One and only one decides how many author columns; must be decides whether it may be empty.",
        ar: "‏one and only one تحدّد عدد أعمدة المؤلّف؛ وmust be تحدّد هل يجوز أن يكون فارغًا."
      },
      explain: {
        en: "One and only one AUTHOR puts exactly one author_id in each book row; must be makes it NOT NULL. Sentence 2 builds nothing — it is what the data may look like: Austen with no book, Goldsmith with two. Making author_id UNIQUE is the classic slip: it would turn \"one or more\" into \"one\" and refuse Goldsmith's second book.",
        ar: "‏one and only one AUTHOR تضع author_id واحدًا بالضبط في كل صفّ كتاب؛ وmust be تجعله NOT NULL. والجملة 2 لا تبني شيئًا — إنها ما يجوز أن تبدو عليه البيانات: Austen بلا كتاب، وGoldsmith بكتابين. وجعل author_id فريدًا (UNIQUE) هو الزلّة المعهودة: يحوّل «one or more» إلى «one» ويرفض كتاب Goldsmith الثاني."
      }
    },
    {
      id: "t3l5q18", type: "output", level: "hard", topics: ["t3-book-author", "t3-two-readings"],
      q: {
        en: "The lesson's library: four authors (Wilde, Tolstoy, Goldsmith, Austen) and four books — one by Wilde, one by Tolstoy, two by Goldsmith; books.author_id is NOT NULL. The two inserts run one at a time, then the query. What does it return?",
        ar: "مكتبة الدرس: أربعة مؤلّفين (Wilde وTolstoy وGoldsmith وAusten) وأربعة كتب — واحد لـ Wilde، وواحد لـ Tolstoy، واثنان لـ Goldsmith؛ والعمود books.author_id هو NOT NULL. تُنفَّذ عمليّتا الإدراج واحدة واحدة، ثم الاستعلام. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "INSERT INTO books (book_id, title)\nVALUES ('BK005', 'Emma');\n\nINSERT INTO books\nVALUES ('BK005', 'Emma', 'AD0004');\n\nSELECT COUNT(*) AS books, COUNT(DISTINCT author_id) AS authors\nFROM books;",
      blanks: [
        { accept: ["5"], label: { en: "books", ar: "books" } },
        { accept: ["4"], label: { en: "authors", ar: "authors" } }
      ],
      hint: {
        en: "Which sentence's must be does the first insert break? After the second, who is still missing from books?",
        ar: "أيّ جملة يخالف الإدراج الأول must be فيها؟ وبعد الثاني، من بقي غائبًا عن books؟"
      },
      explain: {
        en: "5 and 4, run in alasql. The first insert breaks sentence 1's must be — Wrong NULL value in NOT NULL column author_id — and stores nothing. The second gives Emma to Austen (AD0004), so every author now has a book. Before it, Austen's absence was legal: sentence 2 says may be. Goldsmith counts once in DISTINCT, though he has two.",
        ar: "‏5 و4، بالتشغيل في alasql. الإدراج الأول يخالف must be في الجملة 1 — ‏Wrong NULL value in NOT NULL column author_id — ولا يخزّن شيئًا. والثاني ينسب Emma إلى Austen ‏(AD0004)، فصار لكل مؤلّف كتاب. وقبله كان غياب Austen مشروعًا: الجملة 2 تقول may be. ويُعدّ Goldsmith مرة واحدة في DISTINCT مع أن له كتابين."
      },
      solution: { out: "books | authors\n5 | 4" }
    },
    {
      id: "t3l5q19", type: "tf", level: "easy", topics: ["t3-erdish-plural", "t3-top-to-bottom"],
      q: {
        en: "In \"Each PRODUCT TYPE may classify one or more PRODUCTs\", the lowercase s is correct ERDish, and the box on the ERD is still labelled PRODUCT.",
        ar: "في «Each PRODUCT TYPE may classify one or more PRODUCTs»، حرف s الصغير صحيح في ERDish، والصندوق في المخطّط ما زال اسمه PRODUCT."
      },
      truth: true,
      hint: {
        en: "Lesson 4 fixed the box name. What does the lesson do to entity B after one or more?",
        ar: "حسم الدرس 4 اسم الصندوق. ماذا يفعل الدرس بالكيان B بعد one or more؟"
      },
      explain: {
        en: "True. After one or more, entity B takes a plural, written as the singular entity name plus a lowercase s: PRODUCTs, EMPLOYEEs. The box keeps its singular, uppercase name, because it describes one instance. Renaming the box PRODUCTS to match the sentence would break Lesson 4's rule.",
        ar: "صحيح. بعد one or more يأتي الكيان B جمعًا، يُكتب اسم الكيان المفرد وبعده s صغيرة: ‏PRODUCTs، وEMPLOYEEs. ويبقى اسم الصندوق مفردًا بالأحرف الكبيرة، لأنه يصف مثيلًا واحدًا. وتسمية الصندوق PRODUCTS ليطابق الجملة تكسر قاعدة الدرس 4."
      }
    },

    /* ---------------------------------------------------- 5 · a recursive relationship */
    {
      id: "t3l5q20", type: "mcq", level: "medium", topics: ["t3-erdish-recursive", "t3-recursive-symbol-end"],
      q: {
        en: "The manager loop is drawn correctly: one line leaves EMPLOYEE and comes back, with the crow's foot at the managed by end. A student reads: \"Each EMPLOYEE may be managed by one or more EMPLOYEEs.\" What went wrong?",
        ar: "رُسمت حلقة المدير صحيحة: خط واحد يخرج من EMPLOYEE ويعود إليه، وقدم الغراب عند طرف managed by. يقرأ طالب: «Each EMPLOYEE may be managed by one or more EMPLOYEEs.» ما الخطأ؟"
      },
      options: [
        { en: "The drawing: if every employee has one manager, the crow's foot belongs at the manager of end", ar: "الرسم: إن كان لكل موظّف مدير واحد، فقدم الغراب مكانها عند طرف manager of" },
        { en: "Nothing: in a recursive relationship both symbols touch the same box, so either may be read", ar: "لا شيء: في العلاقة الذاتية يلامس الرمزان الصندوق نفسه، فيجوز قراءة أيّهما" },
        { en: "The optionality: managed by should be must be, because every employee has a manager", ar: "الاختيارية: كان يجب أن تكون must be، لأن لكل موظّف مديرًا" },
        { en: "The reading: they took the symbol at the end they started from, instead of at the far end", ar: "القراءة: أخذ الرمز عند الطرف الذي بدأ منه، بدل الطرف البعيد" }
      ],
      answer: 3,
      hint: {
        en: "Name from the start, symbol from … ?",
        ar: "الاسم من البداية، والرمز من …؟"
      },
      explain: {
        en: "The picture is right; the reading is wrong. Starting at managed by, travel to the other end: a single toe, so \"one and only one EMPLOYEE\". The crow's foot beside managed by belongs to the other sentence. Moving it to manager of is version 1's defect, and must be is wrong too: Dana, at the top, has no manager.",
        ar: "الصورة صحيحة؛ والقراءة خاطئة. ابدأ من managed by وانتقل إلى الطرف الآخر: إصبع واحدة، أي «one and only one EMPLOYEE». وقدم الغراب بجانب managed by تخصّ الجملة الأخرى. ونقلها إلى manager of هو عيب الإصدار 1، وmust be خاطئة أيضًا: ‏Dana في القمّة ولا مدير لها."
      }
    },
    {
      id: "t3l5q21", type: "compare", level: "hard", topics: ["t3-erdish-recursive", "t3-recursive-symbol-end"],
      q: {
        en: "Scenario: \"Every employee has one manager … Each manager can manage several employees.\" Two drawings of the loop on EMPLOYEE, described as text. Compare them.",
        ar: "السيناريو: «لكل موظّف مدير واحد … ويستطيع كل مدير أن يدير عدّة موظّفين.» رسمان للحلقة على EMPLOYEE، موصوفان نصًّا. قارن بينهما."
      },
      lang: "text",
      codeA: "loop on EMPLOYEE, both halves dashed\nend named managed by : single toe\nend named manager of : crow's foot",
      codeB: "loop on EMPLOYEE, both halves dashed\nend named managed by : crow's foot\nend named manager of : single toe",
      options: [
        { en: "A is better: a manager has many employees, so the crow's foot goes beside manager of", ar: "A أفضل: للمدير موظّفون كثيرون، فقدم الغراب توضع بجانب manager of" },
        { en: "They are the same: on a loop both ends touch EMPLOYEE, so the symbols may sit at either end", ar: "هما متماثلان: في الحلقة يلامس الطرفان EMPLOYEE، فيجوز أن يكون الرمزان عند أيّ طرف" },
        { en: "B is better: read from managed by, the far end has a single toe — one manager; read from manager of, the far end has the crow's foot — several employees", ar: "B أفضل: من managed by، الطرف البعيد فيه إصبع واحدة — مدير واحد؛ ومن manager of، الطرف البعيد فيه قدم الغراب — عدّة موظّفين" },
        { en: "Neither: a manager is a separate thing, so the model needs MANAGER and EMPLOYEE boxes", ar: "ولا أحدهما: المدير شيء منفصل، فيحتاج النموذج إلى صندوقين MANAGER وEMPLOYEE" }
      ],
      answer: 2,
      hint: {
        en: "Read each drawing aloud from both ends, taking each symbol from the far end.",
        ar: "اقرأ كل رسم بصوت عالٍ من الطرفين، آخذًا كل رمز من الطرف البعيد."
      },
      explain: {
        en: "B is the lesson's version 2. A is version 1: the crow's foot sits where \"a manager has many\" felt right, and read aloud it says each employee may have one or more managers and each manager may manage only one — both contradict the scenario. Splitting off MANAGER is tempting, but managers are also employees, so entity A and entity B are both EMPLOYEE.",
        ar: "‏B هو الإصدار 2 في الدرس. وA هو الإصدار 1: وُضعت قدم الغراب حيث بدا «للمدير كثيرون» صحيحًا، وإذا قُرئ بصوت عالٍ قال إن لكل موظّف مديرًا أو أكثر وإن كل مدير لا يدير إلا واحدًا — وكلاهما يخالف السيناريو. وفصل MANAGER مغرٍ، لكن المديرين موظّفون أيضًا، فالكيان A والكيان B كلاهما EMPLOYEE."
      }
    },
    {
      id: "t3l5q22", type: "error", level: "hard", topics: ["t3-recursive-may-both", "t3-recursive-symbol-end"],
      q: {
        en: "A student describes the manager loop of the lesson's version 2 and speaks it. Which line is wrong?",
        ar: "يصف طالب حلقة المدير في الإصدار 2 من الدرس وينطقها. أيّ سطر خاطئ؟"
      },
      lang: "text",
      code: "Line: from EMPLOYEE back to EMPLOYEE, both halves dashed\nEnds: crow's foot at the managed by end; single toe at the manager of end\nEach EMPLOYEE may be managed by one and only one EMPLOYEE.\nEach EMPLOYEE may be the manager of one and only one EMPLOYEE.",
      answer: 4,
      solution: {
        code: "Line: from EMPLOYEE back to EMPLOYEE, both halves dashed\nEnds: crow's foot at the managed by end; single toe at the manager of end\nEach EMPLOYEE may be managed by one and only one EMPLOYEE.\nEach EMPLOYEE may be the manager of one or more EMPLOYEEs.",
        en: "Starting at manager of, the far end is the managed by end, with the crow's foot: one or more EMPLOYEEs.",
        ar: "من manager of، الطرف البعيد هو طرف managed by، وعليه قدم الغراب: one or more EMPLOYEEs."
      },
      hint: {
        en: "For each sentence, find its start by the name, then look at the other end.",
        ar: "لكل جملة، اعثر على بدايتها من الاسم، ثم انظر إلى الطرف الآخر."
      },
      explain: {
        en: "Line 4. It starts at manager of but takes the single toe beside that same end; the far end has the crow's foot, so Dana may be the manager of one or more EMPLOYEEs — she manages three. Line 2 looks wrong, since the crow's foot sits beside managed by, but that is exactly version 2. Line 1 is right: Dana has no manager and Tyler manages nobody.",
        ar: "السطر 4. يبدأ من manager of لكنه يأخذ الإصبع الواحدة بجانب الطرف نفسه؛ والطرف البعيد فيه قدم الغراب، فـ Dana ‏may be the manager of one or more EMPLOYEEs — وهي تدير ثلاثة. والسطر 2 يبدو خاطئًا لأن قدم الغراب بجانب managed by، لكنه الإصدار 2 بعينه. والسطر 1 صحيح: ‏Dana بلا مدير وTyler لا يدير أحدًا."
      }
    },
    {
      id: "t3l5q23", type: "fill", level: "hard", topics: ["t3-erdish-recursive", "t3-recursive-may-both"],
      q: {
        en: "H.R. adds: \"A new employee may be assigned one mentor, who is another employee. An experienced employee may mentor several new ones.\" Complete both sentences, then name the single column this adds to employees.",
        ar: "تضيف الموارد البشرية: «قد يُعيَّن للموظّف الجديد مرشد واحد، وهو موظّف آخر. وقد يرشد الموظّف المتمرّس عدّة موظّفين جدد.» أكمل الجملتين، ثم سمِّ العمود الواحد الذي يضيفه هذا إلى employees."
      },
      lang: "erdish",
      code: "Each EMPLOYEE ____1____ mentored by ____2____ EMPLOYEE.\nEach EMPLOYEE ____3____ the mentor of ____4____ EMPLOYEEs.\n\ncolumn added to employees: ____5____",
      blanks: [
        { accept: ["may be", "MAY BE", "May be"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one", "ONE AND ONLY ONE", "One and only one"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["may be", "MAY BE", "May be"], label: { en: "3", ar: "3" } },
        { accept: ["one or more", "ONE OR MORE", "One or more"], label: { en: "4", ar: "4" }, wide: true },
        { accept: ["mentor_id"], label: { en: "5", ar: "5" } }
      ],
      hint: {
        en: "\"May\" appears twice in the scenario. One mentor is stored; several mentees are counted.",
        ar: "ترد «may» مرتين في السيناريو. المرشد الواحد يُخزَّن؛ والمتدرّبون المتعدّدون يُعدّون."
      },
      explain: {
        en: "may be · one and only one · may be · one or more · mentor_id. Both halves are dashed, like the manager loop: not every employee has a mentor, not every employee mentors. The crow's foot goes at the mentored by end — the far end of the one or more sentence. One mentor per row is a single nullable column; a list of mentees is never stored.",
        ar: "‏may be · one and only one · may be · one or more · mentor_id. النصفان متقطّعان، مثل حلقة المدير: ليس لكل موظّف مرشد، ولا كل موظّف يرشد. وقدم الغراب عند طرف mentored by — الطرف البعيد لجملة one or more. ومرشد واحد لكل صفّ يعني عمودًا واحدًا يقبل NULL؛ أما قائمة المتدرّبين فلا تُخزَّن أبدًا."
      }
    },
    {
      id: "t3l5q24", type: "output", level: "medium", topics: ["t3-recursive-may-both", "t3-erdish-recursive"],
      q: {
        en: "The lesson's five employees: Dana (100) has no manager; Lawrence (210), Tyler (310) and Neil (378) report to Dana; Carlos (405) reports to Lawrence. What do the two queries return?",
        ar: "الموظّفون الخمسة في الدرس: ‏Dana ‏(100) بلا مدير؛ وLawrence ‏(210) وTyler ‏(310) وNeil ‏(378) يتبعون Dana؛ وCarlos ‏(405) يتبع Lawrence. ماذا يُرجع الاستعلامان؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS no_manager\nFROM employees\nWHERE manager_id IS NULL;\n\nSELECT COUNT(*) AS manage_nobody\nFROM employees m LEFT JOIN employees e\n  ON e.manager_id = m.employee_id\nWHERE e.employee_id IS NULL;",
      blanks: [
        { accept: ["1"], label: { en: "no_manager", ar: "no_manager" } },
        { accept: ["3"], label: { en: "manage_nobody", ar: "manage_nobody" } }
      ],
      hint: {
        en: "The first counts who is not managed by anyone; the second counts who is the manager of no one.",
        ar: "الأول يعدّ من لا يديره أحد؛ والثاني يعدّ من لا يدير أحدًا."
      },
      explain: {
        en: "1 and 3, run in alasql. Dana alone has no manager — legal because \"may be managed by\" is dashed. Tyler, Neil and Carlos manage nobody — legal because \"may be the manager of\" is dashed too. That is why the slides say may at both ends: a must on either half would make one of these counts impossible.",
        ar: "‏1 و3، بالتشغيل في alasql. ‏Dana وحدها بلا مدير — وهذا مشروع لأن «may be managed by» متقطّع. وTyler وNeil وCarlos لا يديرون أحدًا — مشروع لأن «may be the manager of» متقطّع أيضًا. لهذا تقول الشرائح may عند الطرفين: لو كان أيّ نصف must لاستحال أحد هذين العدّين."
      }
    }
  ]
};
