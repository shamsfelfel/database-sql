/* Question bank: T3 lesson 1 test -- What a Relationship Is. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-01"] = {
  title: { en: "Test 1 — What a Relationship Is", ar: "اختبار 1 — ما هي العلاقة" },
  intro: {
    en: "24 questions on lesson 1: what makes a link significant, who decides, why relationships join only entities, reading one line in both directions, naming it at both ends in lowercase, finding the relationship in the restaurant scenario, the recursive manager relationship, and everything a relationship carries. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الأول: ما الذي يجعل الرابط ذا أهمية، ومن يقرّر ذلك، ولماذا لا تربط العلاقات إلا الكيانات، وقراءة الخط الواحد في الاتجاهين، وتسميته عند طرفيه بحروف صغيرة، وإيجاد العلاقة في سيناريو المطعم، وعلاقة المدير الذاتية، وكل ما تحمله العلاقة. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · a line that matters */
    {
      id: "t3l1q01", type: "tf", level: "easy", topics: ["t3-significance", "t3-relationship"],
      q: {
        en: "A new designer draws a line between every pair of the six H.R. entities, \"just in case\". An extra line costs nothing, so this is a safe habit.",
        ar: "يرسم مصمّم جديد خطًّا بين كل زوج من كيانات الموارد البشرية الستة، «احتياطًا». الخط الزائد لا يكلّف شيئًا، فهذه عادة آمنة."
      },
      truth: false,
      hint: {
        en: "Recall the first item on the slides' list of what a relationship represents — and what each line turns into in the tables.",
        ar: "تذكّر البند الأول في قائمة الشرائح لما تمثّله العلاقة — وما يصير إليه كل خط في الجداول."
      },
      explain: {
        en: "False. A relationship represents something significant to the business; a link the business never records, looks up or acts on is not a relationship. And every line becomes a foreign key column, so fifteen lines mean columns such as jobs.region_id that nobody fills and nobody trusts. A line is a claim about the business, not insurance.",
        ar: "خطأ. العلاقة تمثّل شيئًا ذا أهمية للعمل؛ والرابط الذي لا يسجّله العمل ولا يبحث من خلاله ولا يتصرّف بناءً عليه ليس علاقة. ثم إن كل خط يصير عمود مفتاح أجنبي، فخمسة عشر خطًّا تعني أعمدة مثل jobs.region_id لا يملؤها أحد ولا يثق بها أحد. الخط ادّعاء عن العمل، لا تأمين احتياطي."
      }
    },
    {
      id: "t3l1q02", type: "mcq", level: "medium", topics: ["t3-business-rule", "t3-significance"],
      q: {
        en: "Two designers model the same entities, EMPLOYEE and JOB, for two companies. One model says every JOB must be held by an employee; the other allows a JOB nobody holds. Which explanation is right?",
        ar: "يُنمذج مصمّمان الكيانين نفسيهما، EMPLOYEE وJOB، لشركتين مختلفتين. يقول أحد النموذجين إن كل JOB يجب أن يشغلها موظّف؛ ويسمح الآخر بوظيفة JOB لا يشغلها أحد. أيّ تفسير صحيح؟"
      },
      options: [
        { en: "One of them is wrong: a relationship between two entities is the same in every organization", ar: "أحدهما مخطئ: العلاقة بين كيانين واحدة في كل مؤسسة" },
        { en: "Both can be right: each company's business rules decide, and one of them keeps vacant or obsolete jobs", ar: "كلاهما قد يكون صحيحًا: قواعد العمل في كل شركة هي التي تقرّر، وإحداهما تحتفظ بوظائف شاغرة أو ملغاة" },
        { en: "The second is wrong: a JOB with no employee is not significant, so it should be deleted", ar: "الثاني مخطئ: الوظيفة التي لا موظّف فيها ليست ذات أهمية، فيجب حذفها" },
        { en: "The designer should choose whichever rule makes the diagram simpler", ar: "على المصمّم أن يختار القاعدة التي تجعل المخطّط أبسط" }
      ],
      answer: 1,
      hint: {
        en: "Who owns a business rule: the designer, the textbook, or the business?",
        ar: "لمن تعود قاعدة العمل: للمصمّم، أم للكتاب، أم للعمل نفسه؟"
      },
      explain: {
        en: "The lecturer's note: the answer \"may vary from one organization to another, depending on the business rules\". Some jobs are vacant or obsolete, and a company that keeps them on its books needs a model that allows them. Thinking there is one correct relationship per pair of entities is the tempting error; so is the designer deciding the rule. The designer captures the rule; the business owns it.",
        ar: "ملاحظة المحاضر: الجواب «قد يختلف من مؤسسة إلى أخرى، بحسب قواعد العمل (business rules)». بعض الوظائف شاغرة أو ملغاة، والشركة التي تحتفظ بها في سجلّاتها تحتاج إلى نموذج يسمح بها. الخطأ المغري أن تظنّ أن لكل زوج من الكيانات علاقة صحيحة واحدة؛ ومثله أن يقرّر المصمّم القاعدة بنفسه. المصمّم يلتقط القاعدة، والعمل يملكها."
      }
    },
    {
      id: "t3l1q03", type: "multi", level: "medium", topics: ["t3-between-entities", "t3-relationship", "t3-recursive-relationship"],
      q: {
        en: "Which of these proposed links can be a relationship at all? Choose every one.",
        ar: "أيّ هذه الروابط المقترحة يمكن أن يكون علاقة أصلًا؟ اختر كلًّا منها."
      },
      options: [
        { en: "EMPLOYEE — DEPARTMENT", ar: "EMPLOYEE — DEPARTMENT" },
        { en: "EMPLOYEE — Salary", ar: "EMPLOYEE — Salary" },
        { en: "CUSTOMER — ORDER", ar: "CUSTOMER — ORDER" },
        { en: "First Name — Last Name", ar: "First Name — Last Name" },
        { en: "EMPLOYEE — EMPLOYEE", ar: "EMPLOYEE — EMPLOYEE" },
        { en: "JOB — Max Salary", ar: "JOB — Max Salary" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Relationships exist only between entities — or between an entity and itself. Which of these names are attributes?",
        ar: "العلاقات لا توجد إلا بين الكيانات — أو بين كيان ونفسه. أيّ هذه الأسماء خصائص؟"
      },
      explain: {
        en: "EMPLOYEE–DEPARTMENT and CUSTOMER–ORDER join two entities, and EMPLOYEE–EMPLOYEE joins an entity to itself, which the definition allows. Salary, First Name, Last Name and Max Salary are attributes: a relationship never joins an attribute to an entity, nor two attributes. Leaving out EMPLOYEE–EMPLOYEE is the tempting slip — \"between an entity and itself\" is part of the definition.",
        ar: "EMPLOYEE–DEPARTMENT وCUSTOMER–ORDER يربطان كيانين، وEMPLOYEE–EMPLOYEE يربط كيانًا بنفسه، وهذا ما يسمح به التعريف. أما Salary وFirst Name وLast Name وMax Salary فخصائص (attributes): العلاقة لا تربط خاصية بكيان أبدًا، ولا خاصيتين. والزلّة المغرية إسقاط EMPLOYEE–EMPLOYEE — فعبارة «بين كيان ونفسه» جزء من التعريف."
      }
    },
    {
      id: "t3l1q04", type: "error", level: "medium", topics: ["t3-between-entities", "t3-significance"],
      q: {
        en: "A draft of part of the H.R. model, as text. One line hides a relationship the business needs inside an attribute. Which line?",
        ar: "مسوّدة لجزء من نموذج الموارد البشرية، مكتوبة نصًّا. أحد الأسطر يُخفي داخل خاصية علاقةً يحتاج إليها العمل. أيّ سطر؟"
      },
      lang: "text",
      code: "DEPARTMENT  # * Department ID  * Name\nEMPLOYEE    # * Employee ID  * First Name  * Last Name  * Job Title\nJOB         # * Job ID  * Title  * Max Salary  * Min Salary\nEMPLOYEE  works in / responsible for  DEPARTMENT",
      answer: 2,
      solution: {
        code: "DEPARTMENT  # * Department ID  * Name\nEMPLOYEE    # * Employee ID  * First Name  * Last Name\nJOB         # * Job ID  * Title  * Max Salary  * Min Salary\nEMPLOYEE  works in / responsible for  DEPARTMENT\nEMPLOYEE  hold / held by  JOB",
        en: "Job Title leaves EMPLOYEE, and a line named at both ends joins EMPLOYEE to JOB.",
        ar: "يخرج Job Title من EMPLOYEE، ويربط خطٌّ مسمّى عند طرفيه EMPLOYEE بـ JOB."
      },
      hint: {
        en: "Look for an attribute of one entity whose value is really another entity in the same model.",
        ar: "ابحث عن خاصية في كيان قيمتها في الحقيقة كيان آخر في النموذج نفسه."
      },
      explain: {
        en: "Line 2: Job Title belongs to JOB, which is already an entity with its own facts. Keeping it in EMPLOYEE hides the link \"each employee holds a job\" inside an attribute — the same defect as * Department Name. Remove it and draw EMPLOYEE hold / JOB held by. Line 3 is fine: Max Salary and Min Salary are facts about a job, not entities.",
        ar: "السطر 2: Job Title يخصّ JOB، وهو كيان قائم له حقائقه. إبقاؤه في EMPLOYEE يُخفي الرابط «كل موظّف يشغل وظيفة» داخل خاصية — وهو العيب نفسه في * Department Name. احذفه وارسم EMPLOYEE hold / JOB held by. أما السطر 3 فسليم: Max Salary وMin Salary حقائق عن الوظيفة، لا كيانات."
      }
    },

    /* ---------------------------------------------------- 2 · one line, two directions */
    {
      id: "t3l1q05", type: "tf", level: "easy", topics: ["t3-bidirectional"],
      q: {
        en: "\"EMPLOYEE works in DEPARTMENT\" and \"DEPARTMENT responsible for EMPLOYEE\" are two relationships, so the ERD needs two lines between the boxes.",
        ar: "«EMPLOYEE works in DEPARTMENT» و«DEPARTMENT responsible for EMPLOYEE» علاقتان، فيحتاج مخطّط ERD إلى خطّين بين الصندوقين."
      },
      truth: false,
      hint: {
        en: "What does \"bi-directional\" say about how many lines one link needs?",
        ar: "ماذا تقول «ثنائية الاتجاه» عن عدد الخطوط التي يحتاج إليها الرابط الواحد؟"
      },
      explain: {
        en: "False. Every relationship is bi-directional: the two sentences are the same link read from its two ends, so one line carries both, named at each end. Two lines would claim two different links — and would become two key columns for one fact.",
        ar: "خطأ. كل علاقة ثنائية الاتجاه (bi-directional): الجملتان هما الرابط نفسه مقروءًا من طرفيه، فيحمل الخط الواحد كلتيهما، مسمّى عند كل طرف. والخطّان يدّعيان رابطين مختلفين — وسيصيران عمودَي مفتاح لحقيقة واحدة."
      }
    },
    {
      id: "t3l1q06", type: "output", level: "easy", topics: ["t3-one-column-two-readings", "t3-bidirectional"],
      q: {
        en: "The lesson's employees table (Dana 100 and Lawrence 210 and Carlos 405 in department 10, Tyler 310 in 15, Neil 378 in 22). Carlos asks which department he is in. What does the query return?",
        ar: "جدول employees من الدرس (Dana 100 وLawrence 210 وCarlos 405 في القسم 10، وTyler 310 في 15، وNeil 378 في 22). يسأل Carlos في أيّ قسم هو. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT department_id\nFROM employees\nWHERE employee_id = 405;",
      blanks: [{ accept: ["10"], label: { en: "department_id", ar: "department_id" } }],
      hint: {
        en: "Start from one employee's row and read across to the key column.",
        ar: "ابدأ من صفّ موظّف واحد واقرأ أفقيًّا حتى عمود المفتاح."
      },
      explain: {
        en: "10 — Accounting. This is the works in reading: start at one EMPLOYEE, finish at its DEPARTMENT. The head of Accounting's question uses the same column from the other end (WHERE department_id = 10). One line, one column, two readings.",
        ar: "10 — Accounting. هذه قراءة works in: تبدأ من EMPLOYEE واحد وتنتهي عند قسمه DEPARTMENT. وسؤال رئيس قسم المحاسبة يستعمل العمود نفسه من الطرف الآخر (WHERE department_id = 10). خط واحد، وعمود واحد، وقراءتان."
      },
      solution: { out: "10" }
    },
    {
      id: "t3l1q07", type: "trace", level: "medium", topics: ["t3-one-column-two-readings", "t3-bidirectional"],
      q: {
        en: "Same employees table. Which reading of the EMPLOYEE–DEPARTMENT relationship does this query perform, and what does it return?",
        ar: "جدول employees نفسه. أيّ قراءة لعلاقة EMPLOYEE–DEPARTMENT يؤدّيها هذا الاستعلام، وماذا يُرجع؟"
      },
      lang: "sql",
      code: "SELECT employee_id\nFROM employees\nWHERE department_id = 15;",
      options: [
        { en: "responsible for, starting at DEPARTMENT 15; it returns 310", ar: "responsible for، بدءًا من DEPARTMENT 15؛ ويُرجع 310" },
        { en: "works in, starting at EMPLOYEE; it returns 15", ar: "works in، بدءًا من EMPLOYEE؛ ويُرجع 15" },
        { en: "responsible for; it returns 100 and 310, because Dana manages Tyler", ar: "responsible for؛ ويُرجع 100 و310، لأن Dana تدير Tyler" },
        { en: "Neither: reading from DEPARTMENT needs a second key column in a departments table", ar: "لا هذه ولا تلك: القراءة من DEPARTMENT تحتاج إلى عمود مفتاح ثانٍ في جدول departments" }
      ],
      answer: 0,
      hint: {
        en: "Which entity does the WHERE fix — one employee, or one department?",
        ar: "أيّ كيان يثبّته WHERE — موظّفًا واحدًا، أم قسمًا واحدًا؟"
      },
      explain: {
        en: "The WHERE fixes one department, 15, and asks for its employees: the responsible for reading. Only Tyler (310) is in Sales. Dana manages Tyler, but that is a different relationship, held in manager_id, not department_id. And no second column is needed: the same department_id answers both directions.",
        ar: "يثبّت WHERE قسمًا واحدًا، 15، ويطلب موظّفيه: هذه قراءة responsible for. وTyler (310) وحده في Sales. صحيح أن Dana تدير Tyler، لكن تلك علاقة أخرى محفوظة في manager_id لا في department_id. ولا حاجة إلى عمود ثانٍ: department_id نفسه يجيب في الاتجاهين."
      },
      solution: { out: "310" }
    },
    {
      id: "t3l1q08", type: "match", level: "easy", topics: ["t3-bidirectional", "t3-name-placement", "t3-relationship-name"],
      q: {
        en: "Each question starts from one end of a relationship. Match it to the name you read.",
        ar: "كل سؤال يبدأ من طرف واحد للعلاقة. صِله بالاسم الذي تقرؤه."
      },
      leftHead: { en: "Question", ar: "السؤال" },
      rightHead: { en: "Name read", ar: "الاسم المقروء" },
      pairs: [
        { l: { en: "Tyler: \"Which department am I in?\"", ar: "Tyler: «في أيّ قسم أنا؟»" },
          r: { en: "works in, next to EMPLOYEE", ar: "works in، بجانب EMPLOYEE" } },
        { l: { en: "Head of Accounting: \"Who works for me?\"", ar: "رئيس المحاسبة: «من يعمل عندي؟»" },
          r: { en: "responsible for, next to DEPARTMENT", ar: "responsible for، بجانب DEPARTMENT" } },
        { l: { en: "\"Who owns order 77?\"", ar: "«من يملك الطلب 77؟»" },
          r: { en: "placed by, next to ORDER", ar: "placed by، بجانب ORDER" } },
        { l: { en: "\"Which orders has Linda placed?\"", ar: "«ما الطلبات التي وضعتها Linda؟»" },
          r: { en: "place, next to CUSTOMER", ar: "place، بجانب CUSTOMER" } }
      ],
      hint: {
        en: "Find the entity the question starts from; its name for the link is written beside it.",
        ar: "حدّد الكيان الذي يبدأ منه السؤال؛ اسمه للرابط مكتوب بجانبه."
      },
      explain: {
        en: "A relationship is read from the entity you start at, using the name written close to that entity. Tyler starts at himself, an EMPLOYEE; the head of Accounting starts at a DEPARTMENT; \"who owns order 77\" starts at an ORDER; Linda's orders start at a CUSTOMER. Each pair of questions is one relationship read twice.",
        ar: "تُقرأ العلاقة من الكيان الذي تبدأ منه، بالاسم المكتوب قريبًا منه. يبدأ Tyler من نفسه، أي من EMPLOYEE؛ ويبدأ رئيس المحاسبة من DEPARTMENT؛ و«من يملك الطلب 77» يبدأ من ORDER؛ وطلبات Linda تبدأ من CUSTOMER. كل سؤالين علاقة واحدة مقروءة مرّتين."
      }
    },

    /* ---------------------------------------------------- 3 · named at both ends (evolve e1) */
    {
      id: "t3l1q09", type: "order", level: "medium", topics: ["t3-named-both-ends", "t3-relationship-name", "t3-between-entities"],
      q: {
        en: "Four drafts of the EMPLOYEE–DEPARTMENT link. Order them from the most defective to the recommended form.",
        ar: "أربع مسوّدات لرابط EMPLOYEE–DEPARTMENT. رتّبها من الأكثر عيبًا إلى الشكل الموصى به."
      },
      items: [
        { en: "No line: EMPLOYEE holds * Department Name", ar: "لا خط: EMPLOYEE يحمل * Department Name" },
        { en: "A line between EMPLOYEE and DEPARTMENT with no name", ar: "خط بين EMPLOYEE وDEPARTMENT بلا اسم" },
        { en: "The line named works in, next to EMPLOYEE only", ar: "الخط مسمّى works in، بجانب EMPLOYEE فقط" },
        { en: "works in next to EMPLOYEE and responsible for next to DEPARTMENT", ar: "works in بجانب EMPLOYEE وresponsible for بجانب DEPARTMENT" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Each step fixes exactly one defect of the step before: a hidden entity, then an ambiguous line, then a half-stated rule.",
        ar: "كل خطوة تعالج عيبًا واحدًا بالضبط في الخطوة السابقة: كيان مخفيّ، ثم خط غامض، ثم قاعدة نصفها غير مذكور."
      },
      explain: {
        en: "First the department hides inside an attribute, so there is no relationship at all. Drawing the line records that a link exists, but every reader supplies a meaning. Naming one end fixes the EMPLOYEE reading, yet from DEPARTMENT the line is still unnamed. Naming both ends makes both readings full sentences — the slides' form.",
        ar: "في البداية يختبئ القسم داخل خاصية، فلا علاقة أصلًا. ورسم الخط يسجّل أن رابطًا موجود، لكن كل قارئ يضع له معنى. وتسمية طرف واحد تحسم قراءة EMPLOYEE، غير أن الخط يبقى بلا اسم من جهة DEPARTMENT. وتسمية الطرفين تجعل كلتا القراءتين جملة كاملة — وهذا شكل الشرائح."
      }
    },
    {
      id: "t3l1q10", type: "mcq", level: "medium", topics: ["t3-named-both-ends", "t3-bidirectional"],
      q: {
        en: "Version 2 of the lesson's evolve block writes works in next to EMPLOYEE and nothing at the DEPARTMENT end. What does it still leave open?",
        ar: "الإصدار 2 في كتلة التطوّر في الدرس يكتب works in بجانب EMPLOYEE ولا شيء عند طرف DEPARTMENT. ما الذي يتركه مفتوحًا بعد؟"
      },
      options: [
        { en: "Whether EMPLOYEE and DEPARTMENT are linked at all", ar: "هل يرتبط EMPLOYEE وDEPARTMENT أصلًا" },
        { en: "Which table gets the key column", ar: "أيّ جدول يأخذ عمود المفتاح" },
        { en: "The reading that starts at DEPARTMENT, so half of the business rule is unstated", ar: "القراءة التي تبدأ من DEPARTMENT، فنصف قاعدة العمل غير مذكور" },
        { en: "Nothing: one name is enough, because the other reading is just the same name backwards", ar: "لا شيء: يكفي اسم واحد، لأن القراءة الأخرى هي الاسم نفسه معكوسًا" }
      ],
      answer: 2,
      hint: {
        en: "The relationship is bi-directional. How many of its directions have a name in version 2?",
        ar: "العلاقة ثنائية الاتجاه. كم اتجاهًا منها له اسم في الإصدار 2؟"
      },
      explain: {
        en: "Version 2 fixed the ambiguity from EMPLOYEE, but a bi-directional relationship has a second reading, and from DEPARTMENT it has no name. \"Works in\" backwards is not a sentence a department can say; it needs its own name, responsible for. Whether the entities are linked was settled by drawing the line in version 1, and the key column is cardinality's job, not the name's.",
        ar: "عالج الإصدار 2 الغموض من جهة EMPLOYEE، لكن العلاقة ثنائية الاتجاه لها قراءة ثانية، وهي من جهة DEPARTMENT بلا اسم. و«works in» معكوسةً ليست جملة يقولها قسم؛ فهو يحتاج إلى اسمه الخاص، responsible for. أما وجود الرابط فقد حسمه رسم الخط في الإصدار 1، وعمود المفتاح من شأن التعدّدية (cardinality) لا الاسم."
      }
    },
    {
      id: "t3l1q11", type: "compare", level: "hard", topics: ["t3-relationship-name", "t3-named-both-ends", "t3-one-column-two-readings"],
      q: {
        en: "The H.R. manager reads \"works in\"; the finance officer reads \"manages\" and asks why a department has forty managers. Compare the two drafts.",
        ar: "يقرأ مدير الموارد البشرية «works in»؛ ويقرأ المسؤول المالي «manages» ويسأل لماذا للقسم أربعون مديرًا. قارن بين المسوّدتين."
      },
      lang: "text",
      codeA: "EMPLOYEE  ----------------------------  DEPARTMENT",
      codeB: "EMPLOYEE  works in ----- responsible for  DEPARTMENT",
      options: [
        { en: "A is better: an unnamed line can stand for whichever meaning each reader needs", ar: "A أفضل: الخط غير المسمّى يصلح لأيّ معنى يحتاج إليه كل قارئ" },
        { en: "They are equivalent: both become the same department_id column, so the names add nothing", ar: "متكافئتان: كلتاهما تصير عمود department_id نفسه، فلا تضيف الأسماء شيئًا" },
        { en: "B settles the argument: each end states its rule, and \"manages\" is ruled out", ar: "B تحسم الخلاف: كل طرف يذكر قاعدته، و«manages» مستبعدة" },
        { en: "B draws two relationships, one per name, so it needs two key columns", ar: "B ترسم علاقتين، واحدة لكل اسم، فتحتاج إلى عمودَي مفتاح" }
      ],
      answer: 2,
      hint: {
        en: "Where does the meaning of the link live, if the table column is only a number?",
        ar: "أين يعيش معنى الرابط، إذا كان عمود الجدول مجرّد رقم؟"
      },
      explain: {
        en: "B names both ends, so both readings are full sentences and nobody can read \"manages\" into it. The tempting option is \"equivalent\": the table really is the same, but that is exactly the point — the name never reaches the table, so department_id = 10 cannot say whether Dana works in Accounting or runs it. The meaning lives only on the ERD, which is why the ERD must carry it. B is still one relationship: two names, one line.",
        ar: "B تسمّي الطرفين، فتصير كلتا القراءتين جملة كاملة ولا يستطيع أحد أن يقرأ فيها «manages». والخيار المغري «متكافئتان»: الجدول فعلًا واحد، وهذا بالضبط بيت القصيد — الاسم لا يصل إلى الجدول أبدًا، فلا يستطيع department_id = 10 أن يقول هل Dana تعمل في المحاسبة أم تديرها. المعنى يعيش على مخطّط ERD وحده، ولهذا يجب أن يحمله المخطّط. وتبقى B علاقة واحدة: اسمان، وخط واحد."
      }
    },
    {
      id: "t3l1q12", type: "fill", level: "easy", topics: ["t3-relationship-name", "t3-name-placement"],
      q: {
        en: "The H.R. scenario says \"All employees hold a job.\" Write the lowercase name at each end, as the H.R. ERD does.",
        ar: "يقول سيناريو الموارد البشرية «All employees hold a job.» اكتب الاسم بحروف صغيرة عند كل طرف، كما يفعل مخطّط ERD للموارد البشرية."
      },
      lang: "erdish",
      code: "EMPLOYEE  ____1____  JOB        -- start at EMPLOYEE\nJOB       ____2____  EMPLOYEE   -- start at JOB",
      blanks: [
        { accept: ["hold", "holds", "must hold"], label: { en: "1", ar: "1" } },
        { accept: ["held by", "is held by", "may be held by", "must be held by"], label: { en: "2", ar: "2" } }
      ],
      hint: {
        en: "Use the scenario's own verb, then turn it round for the JOB end.",
        ar: "استعمل الفعل الوارد في السيناريو نفسه، ثم اقلبه لطرف JOB."
      },
      explain: {
        en: "hold sits next to EMPLOYEE, because you say it starting from an employee; held by sits next to JOB. Both are lowercase, so they cannot be mistaken for entities. The scenario's verb gives one end; the other end is the same link said from the job's side.",
        ar: "hold يقع بجانب EMPLOYEE، لأنك تقوله بدءًا من موظّف؛ وheld by يقع بجانب JOB. وكلاهما بحروف صغيرة، فلا يُخلط بينهما وبين الكيانات. فعل السيناريو يعطيك طرفًا؛ والطرف الآخر هو الرابط نفسه مقولًا من جهة الوظيفة."
      }
    },
    {
      id: "t3l1q13", type: "contrast", level: "medium", topics: ["t3-lowercase-names", "t3-relationship-name", "t3-name-placement"],
      q: {
        en: "Sort each statement: is it true of an entity name, or of a relationship name?",
        ar: "صنّف كل عبارة: هل تصدق على اسم الكيان، أم على اسم العلاقة؟"
      },
      concepts: [
        { en: "Entity name", ar: "اسم الكيان" },
        { en: "Relationship name", ar: "اسم العلاقة" }
      ],
      rows: [
        { s: { en: "Written in capitals", ar: "يُكتب بحروف كبيرة" }, a: 0 },
        { s: { en: "Written in lowercase", ar: "يُكتب بحروف صغيرة" }, a: 1 },
        { s: { en: "responsible for", ar: "responsible for" }, a: 1 },
        { s: { en: "DEPARTMENT", ar: "DEPARTMENT" }, a: 0 },
        { s: { en: "Written close to the entity it is assigned to", ar: "يُكتب قريبًا من الكيان الذي يُسنَد إليه" }, a: 1 },
        { s: { en: "Becomes a table, such as employees", ar: "يصير جدولًا، مثل employees" }, a: 0 },
        { s: { en: "Never reaches the tables; it lives only on the ERD", ar: "لا يصل إلى الجداول أبدًا؛ يعيش على مخطّط ERD وحده" }, a: 1 }
      ],
      hint: {
        en: "The slides' rule: one kind of name is always lowercase, so a glance tells the two apart.",
        ar: "قاعدة الشرائح: نوع من الأسماء يُكتب دائمًا بحروف صغيرة، فتميّز بينهما بنظرة."
      },
      explain: {
        en: "Entity names are in capitals and become tables. Relationship names are lowercase, sit close to the entity they belong to, and stay on the ERD: the foreign key column is only a number. Writing WORKS IN in capitals makes a relationship look like an entity — the reason for the rule.",
        ar: "أسماء الكيانات بحروف كبيرة وتصير جداول. أسماء العلاقات بحروف صغيرة، تقع قرب الكيان الذي تخصّه، وتبقى على مخطّط ERD: عمود المفتاح الأجنبي مجرّد رقم. وكتابة WORKS IN بحروف كبيرة تجعل العلاقة تبدو كيانًا — وهذا سبب القاعدة."
      }
    },
    {
      id: "t3l1q14", type: "tf", level: "medium", topics: ["t3-relationship-name", "t3-one-column-two-readings"],
      q: {
        en: "Given only CREATE TABLE employees (… department_id NUMBER NOT NULL), and the row where Dana has department_id 10, you can tell whether Dana works in Accounting or manages it.",
        ar: "إذا لم يكن لديك إلا CREATE TABLE employees (… department_id NUMBER NOT NULL)، والصفّ الذي فيه department_id لـ Dana يساوي 10، فإنك تستطيع أن تعرف هل Dana تعمل في المحاسبة أم تديرها."
      },
      truth: false,
      hint: {
        en: "Which part of a relationship is the one that does not reach the table?",
        ar: "أيّ جزء من العلاقة هو الذي لا يصل إلى الجدول؟"
      },
      explain: {
        en: "False. The column holds a number, 10, and nothing about what the link means — works in and manages would produce the very same column. The relationship's name is the one part that never reaches the table, which is exactly why the ERD has to carry it, at both ends.",
        ar: "خطأ. العمود يحمل رقمًا، 10، ولا شيء عن معنى الرابط — works in وmanages تنتجان العمود نفسه تمامًا. اسم العلاقة هو الجزء الوحيد الذي لا يصل إلى الجدول، ولهذا بالضبط يجب أن يحمله مخطّط ERD، عند الطرفين."
      }
    },

    /* ---------------------------------------------------- 4 · finding relationships in a scenario */
    {
      id: "t3l1q15", type: "mcq", level: "easy", topics: ["t3-business-scenario", "t3-customer-order"],
      q: {
        en: "\"In our restaurant, a customer walks up to the counter and places their order. … A mother orders for herself and her children. We consider the mother to be the customer who owns the order and is responsible for payment.\" Which relationship does this scenario give?",
        ar: "«In our restaurant, a customer walks up to the counter and places their order. … A mother orders for herself and her children. We consider the mother to be the customer who owns the order and is responsible for payment.» أيّ علاقة يعطيها هذا السيناريو؟"
      },
      options: [
        { en: "CUSTOMER — ORDER, from the verb \"places\"", ar: "CUSTOMER — ORDER، من الفعل «places»" },
        { en: "CUSTOMER — CHILD, from \"orders for her children\"", ar: "CUSTOMER — CHILD، من «orders for her children»" },
        { en: "ORDER — COUNTER, from \"walks up to the counter\"", ar: "ORDER — COUNTER، من «walks up to the counter»" },
        { en: "None: the scenario never uses the word \"relationship\"", ar: "لا شيء: السيناريو لا يستعمل كلمة «relationship» أبدًا" }
      ],
      answer: 0,
      hint: {
        en: "Look for two nouns the business keeps facts about, and the verb between them.",
        ar: "ابحث عن اسمين يحتفظ العمل بحقائق عنهما، وعن الفعل الذي بينهما."
      },
      explain: {
        en: "CUSTOMER and ORDER are the two nouns with facts of their own, and \"places\" is the verb that links them. The children are tempting, but the business says the mother owns the order, so they are not customers and not part of any relationship. The counter is a place in the story, not something the business records. Relationships hide in ordinary verbs; nobody says the word.",
        ar: "CUSTOMER وORDER هما الاسمان اللذان لهما حقائق خاصة بهما، و«places» هو الفعل الذي يربطهما. الأطفال مغرون، لكن العمل يقول إن الأم تملك الطلب، فليسوا زبائن ولا جزءًا من أيّ علاقة. والمنضدة (counter) مكان في القصّة، لا شيء يسجّله العمل. العلاقات تختبئ في أفعال عادية؛ ولا أحد ينطق الكلمة."
      }
    },
    {
      id: "t3l1q16", type: "output", level: "medium", topics: ["t3-customer-order", "t3-one-column-two-readings"],
      q: {
        en: "The restaurant's tables: customers 1 Linda, 2 Krishna, 3 Mel; orders (order_no, customer_id) = (10, 1), (102, 1), (77, 2), (100, 3). This query reads the placed by direction. What does it return?",
        ar: "جداول المطعم: الزبائن 1 Linda و2 Krishna و3 Mel؛ والطلبات (order_no, customer_id) = (10, 1) و(102, 1) و(77, 2) و(100, 3). هذا الاستعلام يقرأ اتجاه placed by. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "SELECT customer_id\nFROM orders\nWHERE order_no = 102;",
      blanks: [{ accept: ["1"], label: { en: "customer_id", ar: "customer_id" } }],
      hint: {
        en: "Find order 102's row; its one customer is in the key column.",
        ar: "جِد صفّ الطلب 102؛ زبونه الوحيد في عمود المفتاح."
      },
      explain: {
        en: "1 — Linda. An order has one customer, so orders carries customer_id, and reading it from one order is the placed by direction. Linda placed both 10 and 102; asking WHERE customer_id = 1 is the place direction and returns both. The same column answers both ways.",
        ar: "1 — Linda. للطلب زبون واحد، فيحمل orders العمود customer_id، وقراءته من طلب واحد هي اتجاه placed by. وضعت Linda الطلبين 10 و102؛ والسؤال WHERE customer_id = 1 هو اتجاه place ويُرجع كليهما. العمود نفسه يجيب في الاتجاهين."
      },
      solution: { out: "1" }
    },
    {
      id: "t3l1q17", type: "multi", level: "hard", topics: ["t3-customer-order", "t3-business-rule", "t3-business-scenario"],
      q: {
        en: "Linda orders for herself and her two children, and over the year she places many orders. Which statements does the restaurant's scenario support? Choose every one.",
        ar: "تطلب Linda لنفسها ولطفليها، وعلى مدار السنة تضع طلبات كثيرة. أيّ العبارات يدعمها سيناريو المطعم؟ اختر كلًّا منها."
      },
      options: [
        { en: "Each of Linda's orders is placed by one CUSTOMER: Linda, who pays", ar: "كل طلب من طلبات Linda يضعه CUSTOMER واحد: Linda، التي تدفع" },
        { en: "Each child is also a CUSTOMER of that order", ar: "كل طفل هو أيضًا CUSTOMER لذلك الطلب" },
        { en: "One CUSTOMER can place many ORDERs over time", ar: "يمكن لـ CUSTOMER واحد أن يضع ORDERs كثيرة مع الوقت" },
        { en: "The model needs a CHILD entity linked to ORDER", ar: "يحتاج النموذج إلى كيان CHILD مرتبط بـ ORDER" },
        { en: "Who eats the food decides how many customers an order has", ar: "من يأكل الطعام هو الذي يحدّد عدد زبائن الطلب" }
      ],
      answer: [0, 2],
      hint: {
        en: "The business rule says who owns the order. Does it say anything the business needs to record about the children?",
        ar: "قاعدة العمل تقول من يملك الطلب. هل تقول شيئًا يحتاج العمل إلى تسجيله عن الأطفال؟"
      },
      explain: {
        en: "\"We consider the mother to be the customer who owns the order\": one customer per order, Linda. \"A customer can place as many orders as he wants\": many orders per customer. The children are tempting because they are in the story, but the business records nothing about them — a CHILD entity or extra customers would be links that are not significant. A business rule decides the relationship, not who is eating.",
        ar: "«We consider the mother to be the customer who owns the order»: زبون واحد لكل طلب، وهو Linda. و«A customer can place as many orders as he wants»: طلبات كثيرة لكل زبون. الأطفال مغرون لأنهم في القصّة، لكن العمل لا يسجّل عنهم شيئًا — فكيان CHILD أو زبائن إضافيون روابط ليست ذات أهمية. قاعدة العمل تقرّر العلاقة، لا من يأكل."
      }
    },
    {
      id: "t3l1q18", type: "write", level: "hard", topics: ["t3-customer-order", "t3-named-both-ends", "t3-lowercase-names"],
      q: {
        en: "Write the restaurant's relationship as its two readings, one per line, in the form ENTITY name ENTITY: first starting at CUSTOMER, then starting at ORDER. Follow the slides' naming rules.",
        ar: "اكتب علاقة المطعم بقراءتيها، كل قراءة في سطر، بالصيغة ENTITY name ENTITY: الأولى بدءًا من CUSTOMER، ثم بدءًا من ORDER. اتّبع قواعد التسمية في الشرائح."
      },
      lang: "erdish",
      lines: 3,
      checks: [
        { re: "CUSTOMER\\s+(must\\s+|may\\s+)?places?\\s+(one\\s+or\\s+more\\s+|an?\\s+)?ORDER", label: { en: "starting at CUSTOMER: place, in lowercase", ar: "بدءًا من CUSTOMER: place، بحروف صغيرة" } },
        { re: "ORDER\\s+(must\\s+|may\\s+)?(be\\s+|is\\s+)?placed\\s+by\\s+(one\\s+and\\s+only\\s+one\\s+|one\\s+|a\\s+)?CUSTOMER", label: { en: "starting at ORDER: placed by, in lowercase", ar: "بدءًا من ORDER: placed by، بحروف صغيرة" } }
      ],
      forbid: [
        { re: "\\bP(LACE|lace)", label: { en: "no relationship name in capitals", ar: "لا اسم علاقة بحروف كبيرة" } },
        { re: "\\b(CHILD|CHILDREN)\\b", flags: "i", label: { en: "no link to the children", ar: "لا رابط إلى الأطفال" } }
      ],
      solution: {
        code: "CUSTOMER place ORDER\nORDER placed by CUSTOMER",
        en: "place sits next to CUSTOMER and placed by next to ORDER, both lowercase; entity names stay in capitals. The slides' full sentences, which Lessons 2 and 3 complete, are: each ORDER must be placed by one and only one CUSTOMER; each CUSTOMER must place one or more ORDERs.",
        ar: "place يقع بجانب CUSTOMER وplaced by بجانب ORDER، وكلاهما بحروف صغيرة؛ وتبقى أسماء الكيانات بحروف كبيرة. وجمل الشرائح الكاملة، التي يُتمّها الدرسان 2 و3: each ORDER must be placed by one and only one CUSTOMER؛ each CUSTOMER must place one or more ORDERs."
      },
      hint: {
        en: "Use the scenario's verb at one end, turn it round at the other, and remember which words are capitals.",
        ar: "استعمل فعل السيناريو عند طرف، واقلبه عند الطرف الآخر، وتذكّر أيّ الكلمات تُكتب بحروف كبيرة."
      },
      explain: {
        en: "One relationship, two readings, two names: CUSTOMER place ORDER and ORDER placed by CUSTOMER. Writing PLACE in capitals makes it look like an entity, and naming only one end leaves the ORDER reading unstated. The children do not appear: the business makes only the mother the customer.",
        ar: "علاقة واحدة، وقراءتان، واسمان: CUSTOMER place ORDER وORDER placed by CUSTOMER. وكتابة PLACE بحروف كبيرة تجعله يبدو كيانًا، وتسمية طرف واحد تترك قراءة ORDER غير مذكورة. ولا يظهر الأطفال: العمل يجعل الأم وحدها الزبون."
      }
    },

    /* ---------------------------------------------------- 5 · an entity related to itself (evolve e2) */
    {
      id: "t3l1q19", type: "mcq", level: "easy", topics: ["t3-manager-is-employee", "t3-recursive-relationship"],
      q: {
        en: "Version 1 of the manager model has two entities, EMPLOYEE and MANAGER. Lawrence Chen is managed by Dana and manages Carlos. What does version 1 do with him?",
        ar: "الإصدار 1 من نموذج المدير فيه كيانان، EMPLOYEE وMANAGER. Lawrence Chen تديره Dana وهو يدير Carlos. ماذا يفعل الإصدار 1 به؟"
      },
      options: [
        { en: "Stores him in both entities, so his facts are held twice and can disagree", ar: "يخزّنه في الكيانين معًا، فتُحفظ حقائقه مرّتين ويمكن أن تتعارض" },
        { en: "Stores him only in MANAGER, so the fact that Dana manages him is lost", ar: "يخزّنه في MANAGER فقط، فتضيع حقيقة أن Dana تديره" },
        { en: "Nothing wrong: a middle manager belongs in MANAGER and an employee in EMPLOYEE", ar: "لا خطأ: المدير الأوسط مكانه MANAGER والموظّف مكانه EMPLOYEE" },
        { en: "Makes him a recursive relationship instead of an instance", ar: "يجعله علاقة ذاتية بدلًا من أن يكون نسخة" }
      ],
      answer: 0,
      hint: {
        en: "Lawrence is at both ends of \"manages\". Which boxes does that put him in?",
        ar: "Lawrence عند طرفَي «manages» كليهما. في أيّ صندوقين يضعه ذلك؟"
      },
      explain: {
        en: "Lawrence is an employee (Dana manages him) and a manager (he manages Carlos), so version 1 needs him in both boxes: the same person stored twice, whose facts can disagree. Every manager is also an employee — that is the defect version 2 removes by keeping one EMPLOYEE entity and drawing a line from it back to itself.",
        ar: "Lawrence موظّف (تديره Dana) ومدير (يدير Carlos)، فيحتاج الإصدار 1 إلى وضعه في الصندوقين: الشخص نفسه مخزَّن مرّتين، ويمكن أن تتعارض حقائقه. كل مدير هو موظّف أيضًا — وهذا هو العيب الذي يزيله الإصدار 2 بإبقاء كيان EMPLOYEE واحد ورسم خط يخرج منه ويعود إليه."
      }
    },
    {
      id: "t3l1q20", type: "complete", level: "easy", topics: ["t3-recursive-relationship", "t3-manager-is-employee"],
      q: {
        en: "Complete the slides' sentence for the recommended manager model.",
        ar: "أكمل جملة الشرائح لنموذج المدير الموصى به."
      },
      lang: "erdish",
      code: "Each EMPLOYEE may be managed by one and only one ____.",
      options: [
        { code: "MANAGER" },
        { code: "EMPLOYEE" },
        { code: "DEPARTMENT" }
      ],
      answer: 1,
      solution: {
        code: "Each EMPLOYEE may be managed by one and only one EMPLOYEE.\nEach EMPLOYEE may be the manager of one or more EMPLOYEEs.",
        en: "Both of the slides' sentences start and finish at EMPLOYEE: one recursive relationship, a name at each end.",
        ar: "كلتا جملتَي الشرائح تبدأ من EMPLOYEE وتنتهي عنده: علاقة ذاتية واحدة، واسم عند كل طرف."
      },
      hint: {
        en: "Since managers are also employees, where are they listed?",
        ar: "بما أن المديرين موظّفون أيضًا، أين يُدرَجون؟"
      },
      explain: {
        en: "EMPLOYEE. Managers are also employees, so both are listed in the same entity, and the relationship runs from EMPLOYEE back to EMPLOYEE — a recursive relationship. MANAGER is version 1's second entity, which stores every manager twice. DEPARTMENT is a different relationship altogether.",
        ar: "EMPLOYEE. المديرون موظّفون أيضًا، فيُدرَج الجميع في الكيان نفسه، وتمتدّ العلاقة من EMPLOYEE عائدةً إلى EMPLOYEE — علاقة ذاتية (recursive relationship). أما MANAGER فهو الكيان الثاني في الإصدار 1، الذي يخزّن كل مدير مرّتين. وDEPARTMENT علاقة أخرى تمامًا."
      }
    },
    {
      id: "t3l1q21", type: "trace", level: "hard", topics: ["t3-self-referencing-column", "t3-recursive-relationship"],
      q: {
        en: "The employees table: Dana 100 (manager_id null), Tyler 310, Lawrence 210 and Neil 378 (manager_id 100), Carlos 405 (manager_id 210). The table is joined to itself. What does the query return?",
        ar: "جدول employees: Dana 100 (manager_id فارغ)، وTyler 310 وLawrence 210 وNeil 378 (manager_id يساوي 100)، وCarlos 405 (manager_id يساوي 210). الجدول مربوط بنفسه. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT e.first_name\nFROM employees e\n  JOIN employees m ON e.manager_id = m.employee_id\nWHERE m.first_name = 'Dana'\nORDER BY e.first_name;",
      options: [
        { en: "Lawrence, Neil, Tyler", ar: "Lawrence، Neil، Tyler" },
        { en: "Carlos, Lawrence, Neil, Tyler", ar: "Carlos، Lawrence، Neil، Tyler" },
        { en: "Dana", ar: "Dana" },
        { en: "Dana, Lawrence, Neil, Tyler", ar: "Dana، Lawrence، Neil، Tyler" }
      ],
      answer: 0,
      hint: {
        en: "m is the manager's copy of the row. Whose manager_id holds Dana's employee_id directly?",
        ar: "m هي نسخة صفّ المدير. مَن يحمل manager_id عنده رقم employee_id الخاص بـ Dana مباشرةً؟"
      },
      explain: {
        en: "Lawrence, Neil and Tyler: their manager_id is 100, Dana's own employee_id in the same table. This is the manager of reading, starting at Dana. Carlos is tempting, but his manager_id is 210 — Lawrence manages him, and the relationship links one step, not a chain. Dana herself does not appear: her manager_id is null, so as an e row she finds no partner.",
        ar: "Lawrence وNeil وTyler: قيمة manager_id عندهم 100، وهو employee_id الخاص بـ Dana في الجدول نفسه. هذه قراءة manager of بدءًا من Dana. وCarlos مغرٍ، لكن manager_id عنده 210 — Lawrence هو من يديره، والعلاقة تربط خطوة واحدة لا سلسلة. ولا تظهر Dana نفسها: manager_id عندها فارغ، فلا تجد شريكًا بوصفها صفًّا في e."
      },
      solution: { out: "Lawrence\nNeil\nTyler" }
    },
    {
      id: "t3l1q22", type: "error", level: "hard", topics: ["t3-manager-is-employee", "t3-recursive-relationship", "t3-lowercase-names"],
      q: {
        en: "A classmate's draft, as text. Which lines break this lesson's rules? Choose every one.",
        ar: "مسوّدة زميل، مكتوبة نصًّا. أيّ الأسطر تخالف قواعد هذا الدرس؟ اختر كلًّا منها."
      },
      lang: "text",
      code: "EMPLOYEE    # * Employee ID  * First Name  * Last Name\nDEPARTMENT  # * Department ID  * Name\nMANAGER     # * Manager ID  * First Name  * Last Name\nEMPLOYEE  works in / responsible for  DEPARTMENT\nEMPLOYEE  managed by / MANAGER OF  MANAGER\nCUSTOMER  place / placed by  ORDER",
      answer: [3, 5],
      solution: {
        code: "EMPLOYEE    # * Employee ID  * First Name  * Last Name\nDEPARTMENT  # * Department ID  * Name\nEMPLOYEE  works in / responsible for  DEPARTMENT\nEMPLOYEE  managed by / manager of  EMPLOYEE\nCUSTOMER  place / placed by  ORDER",
        en: "MANAGER is gone; the manager link is one recursive line on EMPLOYEE, named in lowercase at both ends.",
        ar: "اختفى MANAGER؛ ورابط المدير خط ذاتي واحد على EMPLOYEE، مسمّى بحروف صغيرة عند طرفيه."
      },
      hint: {
        en: "Ask of each entity: is it really a second kind of thing? Ask of each name: is it lowercase, and at both ends?",
        ar: "اسأل عن كل كيان: هل هو فعلًا نوع ثانٍ من الأشياء؟ واسأل عن كل اسم: هل هو بحروف صغيرة، وعند الطرفين؟"
      },
      explain: {
        en: "Line 3: managers are also employees, so a MANAGER entity stores them twice — delete it. Line 5 links to that entity and writes MANAGER OF in capitals; it should be one recursive line from EMPLOYEE to itself, managed by / manager of. Lines 4 and 6 are correct: two entities, one line each, a lowercase name at each end.",
        ar: "السطر 3: المديرون موظّفون أيضًا، فكيان MANAGER يخزّنهم مرّتين — احذفه. والسطر 5 يربط بذلك الكيان ويكتب MANAGER OF بحروف كبيرة؛ والصواب خط ذاتي واحد من EMPLOYEE إلى نفسه، managed by / manager of. أما السطران 4 و6 فصحيحان: كيانان، وخط واحد لكلّ منهما، واسم بحروف صغيرة عند كل طرف."
      }
    },

    /* ---------------------------------------------------- 6 · what every relationship carries */
    {
      id: "t3l1q23", type: "tf", level: "hard", topics: ["t3-relationship-components", "t3-relationship-line"],
      q: {
        en: "Optionality and cardinality are answered once for the whole relationship, so a relationship line is either solid all along or dashed all along.",
        ar: "الإلزامية (optionality) والتعدّدية (cardinality) يُجاب عنهما مرّة واحدة للعلاقة كلها، فخط العلاقة إمّا متّصل بطوله وإمّا متقطّع بطوله."
      },
      truth: false,
      hint: {
        en: "The name is given once per end. Look at the H.R. line between EMPLOYEE and DEPARTMENT.",
        ar: "الاسم يُعطى مرّة لكل طرف. انظر إلى خط الموارد البشرية بين EMPLOYEE وDEPARTMENT."
      },
      explain: {
        en: "False. Like the name, optionality and cardinality are answered once per end: two ends, two answers. That is why the H.R. line between EMPLOYEE and DEPARTMENT can be solid at one half and dashed at the other. Lessons 2 and 3 read those marks.",
        ar: "خطأ. مثل الاسم، يُجاب عن الإلزامية والتعدّدية مرّة لكل طرف: طرفان، وجوابان. ولهذا يمكن أن يكون خط الموارد البشرية بين EMPLOYEE وDEPARTMENT متّصلًا في نصف ومتقطّعًا في النصف الآخر. والدرسان 2 و3 يقرآن هذه العلامات."
      }
    },
    {
      id: "t3l1q24", type: "match", level: "medium", topics: ["t3-relationship-components", "t3-relationship-name", "t3-one-column-two-readings"],
      q: {
        en: "Each part of the EMPLOYEE works in DEPARTMENT relationship lands somewhere different. Match each to what it decides.",
        ar: "كل جزء من علاقة EMPLOYEE works in DEPARTMENT يستقرّ في مكان مختلف. صِل كلًّا منها بما يقرّره."
      },
      leftHead: { en: "Component", ar: "المكوّن" },
      rightHead: { en: "What it decides", ar: "ما الذي يقرّره" },
      pairs: [
        { l: { en: "Name", ar: "الاسم (name)" },
          r: { en: "Nothing in the tables: it stays on the ERD", ar: "لا شيء في الجداول: يبقى على مخطّط ERD" } },
        { l: { en: "Cardinality", ar: "التعدّدية (cardinality)" },
          r: { en: "Which table gets the key column: employees.department_id", ar: "أيّ جدول يأخذ عمود المفتاح: employees.department_id" } },
        { l: { en: "Optionality", ar: "الإلزامية (optionality)" },
          r: { en: "Whether that column is NOT NULL", ar: "هل ذلك العمود NOT NULL" } },
        { l: { en: "Significance", ar: "الأهمية (significance)" },
          r: { en: "Whether there is a line at all", ar: "هل يوجد خط أصلًا" } }
      ],
      hint: {
        en: "One component says how many, one says must or may, one says what the link means, and one says whether the business needs it.",
        ar: "مكوّن يقول كم، ومكوّن يقول يجب أم يجوز، ومكوّن يقول ماذا يعني الرابط، ومكوّن يقول هل يحتاج إليه العمل."
      },
      explain: {
        en: "Significance decides whether the line exists at all. Cardinality — how many — decides which side holds the key: an employee has one department, so employees carries department_id. Optionality — must or may — decides whether that column may be null. The name never reaches the table, which is why the ERD must carry it. Mixing up optionality and cardinality is the classic slip: one is \"must or may\", the other \"one or more\".",
        ar: "الأهمية تقرّر هل يوجد الخط أصلًا. والتعدّدية — كم — تقرّر أيّ طرف يحمل المفتاح: للموظّف قسم واحد، فيحمل employees العمود department_id. والإلزامية — يجب أم يجوز — تقرّر هل يجوز أن يكون ذلك العمود فارغًا. والاسم لا يصل إلى الجدول أبدًا، ولهذا يجب أن يحمله مخطّط ERD. والخلط بين الإلزامية والتعدّدية زلّة شائعة: الأولى «يجب أم يجوز»، والثانية «واحد أم أكثر»."
      }
    }
  ]
};
