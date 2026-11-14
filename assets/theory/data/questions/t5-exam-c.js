/* Question bank: T5 chapter test C -- Advanced. The hard corners where two lessons meet. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-exam-c"] = {
  title: { en: "Chapter Test C — Advanced", ar: "اختبار الفصل C — متقدّم" },
  intro: {
    en: "24 questions on the places where the chapter's lessons meet: a diamond, a bar and a crow's foot on one line; transferability mistaken for cardinality; a rule the table enforces and one it cannot; a redundant line hidden behind a role; an intersection entity mistaken for a split entity; a UID with too few parts or too many. The cases are the chapter's own — the school, the computer lab, the TV channel and the cleaning agency. Expect to read every line of a model before you answer. Allow about 45 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على المواضع التي تلتقي فيها دروس الفصل: معيَّن وقضيب ورِجل غراب على خطّ واحد؛ وقابلية النقل (transferability) حين تُحسب خطأً عددًا (cardinality)؛ وقاعدة يفرضها الجدول وأخرى لا يقدر عليها؛ وخطّ زائد (redundant) مختبئ خلف دور؛ وكيان تقاطع (intersection entity) يُظنّ كيانًا مقسومًا؛ ومعرّف فريد (UID) أجزاؤه أقلّ مما يلزم أو أكثر. والحالات هي حالات الفصل نفسها — المدرسة، ومختبر الحاسوب، والقناة التلفزيونية، وشركة التنظيف. توقّع أن تقرأ كل سطر من النموذج قبل أن تجيب. خصّص نحو 45 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ============================================ transferability meets the other questions */
    {
      id: "t5cx01", type: "tf", level: "easy",
      topics: ["t5-transferable", "t5-mm-squeezed", "t5-study-group"],
      q: {
        en: "<code>STUDENT</code> join <code>STUDY GROUP</code> has no diamond, so it is transferable. That means Sara Hamdan may belong to the Algebra Circle and the Data Club at the same time.",
        ar: "علاقة <code>STUDENT</code> join <code>STUDY GROUP</code> بلا معيَّن، فهي قابلة للنقل (transferable). وهذا يعني أن Sara Hamdan يجوز أن تنتمي إلى Algebra Circle وData Club في الوقت نفسه."
      },
      truth: false,
      hint: {
        en: "Transferability asks whether the link may move. Which question asks how many groups a student has at once?",
        ar: "قابلية النقل تسأل هل يجوز أن ينتقل الرابط. فأيّ سؤال يسأل كم مجموعة للطالب في وقت واحد؟"
      },
      explain: {
        en: "False. Transferable means Sara may move from one group to another — one <code>UPDATE</code> of <code>students.group_id</code>, after which she is in the new group only. How many groups she has at once is cardinality, read from the end at <code>STUDY GROUP</code>, and that end is a single toe. Two groups at once would need a crow's foot there: an M:M, which no single <code>group_id</code> column can hold.",
        ar: "خطأ. القابلية للنقل تعني أن Sara يجوز أن تنتقل من مجموعة إلى أخرى — بجملة <code>UPDATE</code> واحدة على <code>students.group_id</code>، فتصير بعدها في المجموعة الجديدة وحدها. أمّا عدد المجموعات التي تنتمي إليها في وقت واحد فهو العدد (cardinality)، ويُقرأ من الطرف عند <code>STUDY GROUP</code>، وهو إصبع واحدة. ولو أرادت مجموعتين معًا لاحتاج ذلك الطرف رِجل غراب: علاقة ‎M:M، لا يتّسع لها عمود <code>group_id</code> واحد."
      }
    },
    {
      id: "t5cx02", type: "mcq", level: "easy",
      topics: ["t5-transferability", "t5-one-to-one", "t5-computer-motherboard"],
      q: {
        en: "Each <code>COMPUTER</code> must contain one and only one <code>MOTHERBOARD</code>; each <code>MOTHERBOARD</code> must be contained in one and only one <code>COMPUTER</code>. There is no diamond. LAB-01's board fails and is thrown away, and the technician moves board MB-7745 from LAB-03 into LAB-01. Does the model forbid this?",
        ar: "كل <code>COMPUTER</code> يجب أن يحتوي <code>MOTHERBOARD</code> واحدة فقط لا غير؛ وكل <code>MOTHERBOARD</code> يجب أن تكون في <code>COMPUTER</code> واحد فقط لا غير. ولا معيَّن على الخطّ. تتعطّل لوحة LAB-01 فتُرمى، وينقل الفنّي اللوحة MB-7745 من LAB-03 إلى LAB-01. هل يمنع النموذج ذلك؟"
      },
      options: [
        { en: "No: \"one and only one\" means one at a time, and with no diamond the link may move", ar: "لا: «واحد فقط لا غير» تعني واحدًا في كل وقت، وبلا معيَّن يجوز أن ينتقل الرابط" },
        { en: "Yes: a motherboard contained in one and only one computer can never be in a different one", ar: "نعم: اللوحة التي تكون في حاسوب واحد فقط لا غير لا يمكن أن تصير في حاسوب آخر أبدًا" },
        { en: "Yes: both halves are solid, and a solid half fixes the link for good", ar: "نعم: النصفان متّصلان، والنصف المتّصل يثبّت الرابط إلى الأبد" },
        { en: "No, but only after the line is redrawn as a 1:M", ar: "لا، ولكن بعد أن يُعاد رسم الخطّ ‎1:M فقط" }
      ],
      answer: 0,
      hint: {
        en: "Recall Lesson 1's warning about reading \"one and only one\", and where transferability is drawn.",
        ar: "تذكّر تحذير الدرس الأول من قراءة «واحد فقط لا غير»، وأين تُرسم قابلية النقل."
      },
      explain: {
        en: "Cardinality says how many at a time; optionality says whether there must be one; neither says whether the one may change. That is the third question, and the empty middle of the line answers it: transferable. In the tables the move is one <code>UPDATE</code> of <code>motherboards.computer_id</code>, and <code>UNIQUE</code> accepts it because LAB-01 no longer has a board. Solid halves only mean there must always be one.",
        ar: "العدد يقول كم في الوقت الواحد، والاختيارية (optionality) تقول هل يجب أن يوجد واحد؛ ولا يقول أيّهما هل يجوز أن يتغيّر هذا الواحد. ذلك هو السؤال الثالث، ويجيب عنه وسط الخطّ الفارغ: قابلة للنقل. وفي الجداول يكون النقل جملة <code>UPDATE</code> واحدة على <code>motherboards.computer_id</code>، ويقبلها <code>UNIQUE</code> لأن LAB-01 لم تعد فيه لوحة. أمّا النصفان المتّصلان فمعناهما أنه يجب أن توجد لوحة دائمًا فقط."
      }
    },
    {
      id: "t5cx03", type: "error", level: "medium",
      topics: ["t5-transfer-update", "t5-diamond-rule", "t5-cancel-reissue"],
      q: {
        en: "One afternoon's work in the school office. <code>RECEIPT</code>–<code>STUDENT</code> carries a diamond; <code>STUDENT</code>–<code>STUDY GROUP</code> does not. The database accepts every statement. Which line breaks the model all the same?",
        ar: "عمل ظهيرة واحدة في مكتب المدرسة. على <code>RECEIPT</code>–<code>STUDENT</code> معيَّن، وليس على <code>STUDENT</code>–<code>STUDY GROUP</code> معيَّن. تقبل قاعدة البيانات كل الجمل. فأيّ سطر يخالف النموذج مع ذلك؟"
      },
      lang: "sql",
      code: "-- Receipt 5002 was written to Omar (1002); Lina (1003) paid it.\nUPDATE receipts SET status = 'CANCELLED' WHERE receipt_no = 5002;\nINSERT INTO receipts VALUES (5004, 1003, '2026-11-14', 300, 'Tuition fees', 'ISSUED');\n-- Sara (1001) leaves the Algebra Circle for the Data Club.\nUPDATE students SET group_id = 2 WHERE student_id = 1001;\n-- Omar's bookstore receipt 5003 was also Lina's.\nUPDATE receipts SET student_id = 1003 WHERE receipt_no = 5003;",
      answer: 7,
      solution: {
        code: "-- Omar's bookstore receipt 5003 was also Lina's.\nUPDATE receipts SET status = 'CANCELLED' WHERE receipt_no = 5003;\nINSERT INTO receipts VALUES (5005, 1003, '2026-10-05', 40, 'Bookstore', 'ISSUED');",
        en: "Run in alasql: all seven lines are accepted, line 7 included — no CREATE TABLE clause stands for a diamond. Line 7 must become a cancel and reissue, as lines 2 and 3 already did for receipt 5002.",
        ar: "نُفّذ في alasql: تُقبل الأسطر السبعة كلها، ومنها السطر 7 — فلا عبارة في CREATE TABLE تقابل المعيَّن. ويجب أن يصير السطر 7 إلغاءً وإعادة إصدار، كما فعل السطران 2 و3 مع الإيصال 5002."
      },
      hint: {
        en: "Two lines update a foreign key. Which of the two lines they belong to carries a diamond?",
        ar: "سطران يعدّلان مفتاحًا أجنبيًا. أيّ الخطّين اللذين ينتميان إليهما يحمل معيَّنًا؟"
      },
      explain: {
        en: "Line 7 re-points an issued receipt to another student — exactly the move the diamond forbids, and SQL does not stop it. Line 5 also updates a foreign key, which makes it tempting, but <code>STUDENT</code>–<code>STUDY GROUP</code> has no diamond, so moving Sara is a legal transfer. Lines 2–3 are the slides' own correction: cancel the wrong receipt where it is and write up a new one.",
        ar: "السطر 7 يحوّل إيصالًا صادرًا إلى طالب آخر — وهذا بالضبط ما يمنعه المعيَّن، ولا توقفه SQL. والسطر 5 يعدّل مفتاحًا أجنبيًا أيضًا، ولذلك يُغري، لكن <code>STUDENT</code>–<code>STUDY GROUP</code> بلا معيَّن، فنقل Sara نقلٌ مشروع. أمّا السطران 2–3 فهما تصحيح الشرائح نفسه: يُلغى الإيصال الخاطئ في مكانه ويُكتب إيصال جديد."
      }
    },
    {
      id: "t5cx04", type: "match", level: "medium",
      topics: ["t5-wrong-diamond", "t5-diamond", "t5-unique-fk", "t5-intersection-attribute", "t5-redundant", "t5-duplicate-pair", "t5-mixed-uid"],
      q: {
        en: "Each symptom was seen somewhere in this chapter. Match it with the change to the model that cures it.",
        ar: "كل عَرَض مما يلي ظهر في موضع ما من هذا الفصل. صِله بالتغيير في النموذج الذي يعالجه."
      },
      leftHead: { en: "Symptom", ar: "العَرَض" },
      rightHead: { en: "Cure", ar: "العلاج" },
      pairs: [
        {
          l: { en: "Receipt 5003 was quietly re-pointed from Omar to Lina, and nothing shows that it changed.", ar: "حُوِّل الإيصال 5003 بصمت من Omar إلى Lina، ولا شيء يدلّ على أنه تغيّر." },
          r: { en: "A diamond on <code>RECEIPT</code>–<code>STUDENT</code>; mistakes are cancelled and reissued", ar: "معيَّن على <code>RECEIPT</code>–<code>STUDENT</code>؛ والأخطاء تُلغى ويُعاد إصدارها" }
        },
        {
          l: { en: "Sara can never leave the Algebra Circle, although the school lets students change groups.", ar: "لا تستطيع Sara أن تترك Algebra Circle أبدًا، مع أن المدرسة تسمح للطلاب بتغيير مجموعاتهم." },
          r: { en: "Remove the diamond from <code>STUDENT</code>–<code>STUDY GROUP</code>", ar: "احذف المعيَّن من <code>STUDENT</code>–<code>STUDY GROUP</code>" }
        },
        {
          l: { en: "The inventory says LAB-01 contains two motherboards.", ar: "يقول سجلّ الجرد إن LAB-01 يحتوي لوحتين أمّ." },
          r: { en: "A single toe at <code>MOTHERBOARD</code>: <code>computer_id</code> declared <code>UNIQUE</code>", ar: "إصبع واحدة عند <code>MOTHERBOARD</code>: يُعلَن <code>computer_id</code> بقيد <code>UNIQUE</code>" }
        },
        {
          l: { en: "Sara's Physics B overwrote her Maths A.", ar: "كتبت درجة Sara في Physics ‏(B) فوق درجتها في Maths ‏(A)." },
          r: { en: "Add <code>ENROLLMENT</code> and move <code>Grade</code> into it", ar: "أضف <code>ENROLLMENT</code> وانقل <code>Grade</code> إليه" }
        },
        {
          l: { en: "The office gets two different supervisors for Omar.", ar: "يحصل المكتب على مشرفَين مختلفين لـ Omar." },
          r: { en: "Delete the direct <code>STUDENT</code>–<code>TEACHER</code> line; read the supervisor through the study group", ar: "احذف الخطّ المباشر <code>STUDENT</code>–<code>TEACHER</code>؛ واقرأ المشرف عبر مجموعة الدراسة" }
        },
        {
          l: { en: "Sara is recorded twice in Maths, once with an A and once with a D.", ar: "سُجّلت Sara مرّتين في Maths، مرّة بـ A ومرّة بـ D." },
          r: { en: "Bar both lines at <code>ENROLLMENT</code>: <code>PRIMARY KEY (student_id, subject_id)</code>", ar: "ضع قضيبًا على الخطّين عند <code>ENROLLMENT</code>: ‏<code>PRIMARY KEY (student_id, subject_id)</code>" }
        },
        {
          l: { en: "Huda's second viewing of News, a week after the first, is refused.", ar: "تُرفض مشاهدة Huda الثانية لـ News، بعد أسبوع من الأولى." },
          r: { en: "Add <code># Date Watched</code> beside the two bars", ar: "أضف <code># Date Watched</code> بجانب القضيبين" }
        }
      ],
      hint: {
        en: "For each symptom ask which of the three marks — or which box — is missing, extra, or in the wrong place.",
        ar: "اسأل عن كل عَرَض: أيّ العلامات الثلاث — أو أيّ صندوق — ناقص، أو زائد، أو في غير مكانه؟"
      },
      explain: {
        en: "A missing diamond lets history be rewritten; a wrong one blocks a move the business allows. A crow's foot where the business says one lets a second row in, and <code>UNIQUE</code> is the table form of the toe. An attribute of a pair needs the intersection entity; a fact stored twice needs one copy deleted; a duplicate pair needs bars; a pair that may meet twice needs a # beside the bars. The trap is curing the receipt with <code>UNIQUE</code>: <code>UNIQUE</code> counts rows, it does not stop a value from changing.",
        ar: "المعيَّن الناقص يسمح بإعادة كتابة التاريخ، والمعيَّن الخاطئ يمنع نقلًا يسمح به العمل. ورِجل الغراب حيث يقول العمل «واحد» تُدخل صفًّا ثانيًا، و<code>UNIQUE</code> هو صورة الإصبع الواحدة في الجدول. وخاصية الزوج تحتاج كيان التقاطع؛ والحقيقة المخزّنة مرّتين يجب حذف إحدى نسختيها؛ والزوج المكرّر يحتاج قضبانًا؛ والزوج الذي قد يلتقي مرّتين يحتاج # بجانب القضبان. والفخّ أن يُعالَج الإيصال بـ <code>UNIQUE</code>: فـ <code>UNIQUE</code> يعدّ الصفوف، ولا يمنع القيمة من أن تتغيّر."
      }
    },
    {
      id: "t5cx05", type: "mcq", level: "easy",
      topics: ["t5-type-from-ends", "t5-diamond", "t5-bar-vs-diamond"],
      q: {
        en: "<code>RECEIPT</code> issued to <code>STUDENT</code>: crow's foot at <code>RECEIPT</code>, single toe at <code>STUDENT</code>, solid at <code>RECEIPT</code>, dashed at <code>STUDENT</code>, a diamond in the middle. Which one change would make it a different relationship type?",
        ar: "<code>RECEIPT</code> issued to <code>STUDENT</code>: رِجل غراب عند <code>RECEIPT</code>، وإصبع واحدة عند <code>STUDENT</code>، ومتّصل عند <code>RECEIPT</code>، ومتقطّع عند <code>STUDENT</code>، ومعيَّن في الوسط. أيّ تغيير واحد يجعلها نوعًا آخر من العلاقات؟"
      },
      options: [
        { en: "Removing the diamond", ar: "حذف المعيَّن" },
        { en: "Making the half at <code>STUDENT</code> solid", ar: "جعل النصف عند <code>STUDENT</code> متّصلًا" },
        { en: "A bar across the line at the <code>RECEIPT</code> end", ar: "قضيب عبر الخطّ عند طرف <code>RECEIPT</code>" },
        { en: "A crow's foot at <code>STUDENT</code> instead of the single toe", ar: "رِجل غراب عند <code>STUDENT</code> بدل الإصبع الواحدة" }
      ],
      answer: 3,
      hint: {
        en: "Of all the marks a line can carry, only one pair of them decides 1:1, 1:M or M:M.",
        ar: "من بين كل العلامات التي يحملها الخطّ، زوج واحد فقط منها يحدّد ‎1:1 أو ‎1:M أو ‎M:M."
      },
      explain: {
        en: "The type is read from the two ends only: toe and crow's foot is 1:M, two crow's feet is M:M. The diamond answers transferability, a half answers optionality, and a bar says the line is part of a UID — each adds a fact, and none changes the type. A crow's foot at <code>STUDENT</code> would let one receipt be issued to several students: an M:M.",
        ar: "النوع يُقرأ من الطرفين وحدهما: إصبع ورِجل غراب ‎1:M، ورِجلا غراب ‎M:M. أمّا المعيَّن فيجيب عن قابلية النقل، والنصف عن الاختيارية، والقضيب يقول إن الخطّ جزء من معرّف — كلٌّ منها يضيف حقيقة، ولا يغيّر أيٌّ منها النوع. ورِجل غراب عند <code>STUDENT</code> تسمح بإصدار إيصال واحد لعدّة طلاب: ‏M:M."
      }
    },
    {
      id: "t5cx06", type: "multi", level: "medium",
      topics: ["t5-bar-vs-diamond", "t5-barred-relationship", "t5-intersection-fks", "t5-many-zero-or-more"],
      q: {
        en: "One line of the barred school model: <code>STUDENT</code> enrols for / for <code>ENROLLMENT</code>. Crow's foot at <code>ENROLLMENT</code>; a bar across the line at the <code>ENROLLMENT</code> end; solid half at <code>ENROLLMENT</code>; dashed half at <code>STUDENT</code>; nothing in the middle. Which statements follow from this line? Choose every one.",
        ar: "خطّ واحد من نموذج المدرسة المقضّب: <code>STUDENT</code> enrols for / for <code>ENROLLMENT</code>. رِجل غراب عند <code>ENROLLMENT</code>؛ وقضيب عبر الخطّ عند طرف <code>ENROLLMENT</code>؛ ونصف متّصل عند <code>ENROLLMENT</code>؛ ونصف متقطّع عند <code>STUDENT</code>؛ ولا شيء في الوسط. أيّ العبارات تلزم عن هذا الخطّ؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "It is a 1:M, and <code>ENROLLMENT</code> is the child", ar: "هي ‎1:M، و<code>ENROLLMENT</code> هو الابن" },
        { en: "The student is part of what identifies an enrollment", ar: "الطالب جزء مما يعرّف التسجيل" },
        { en: "<code>enrollments.student_id</code> is <code>NOT NULL</code>", ar: "<code>enrollments.student_id</code> بقيد <code>NOT NULL</code>" },
        { en: "Every student must have at least one enrollment", ar: "كل طالب يجب أن يكون له تسجيل واحد على الأقل" },
        { en: "The bar adds a second \"many\" at <code>ENROLLMENT</code>, so the line is M:M", ar: "القضيب يضيف «متعدّدًا» ثانيًا عند <code>ENROLLMENT</code>، فالخطّ ‎M:M" },
        { en: "<code>STUDENT</code> takes part of its UID from <code>ENROLLMENT</code>", ar: "<code>STUDENT</code> يأخذ جزءًا من معرّفه من <code>ENROLLMENT</code>" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Read each mark in its own place: the ends, the halves, the bar. Then ask from which end the half you need is read.",
        ar: "اقرأ كل علامة في مكانها: الطرفين، والنصفين، والقضيب. ثم اسأل من أيّ طرف يُقرأ النصف الذي تحتاجه."
      },
      explain: {
        en: "Toe and crow's foot make a 1:M with the child at the crow's foot. The bar, at the <code>ENROLLMENT</code> end, makes the student part of the enrollment's UID. The solid half at <code>ENROLLMENT</code> makes the key <code>NOT NULL</code>. The dashed half at <code>STUDENT</code> makes \"many\" zero-or-more — Yousef has no enrollment — and a bar changes no end. The bar marks the entity it identifies; <code>STUDENT</code> has its own <code># ID</code> and lends it.",
        ar: "إصبع ورِجل غراب تصنعان ‎1:M، والابن عند رِجل الغراب. والقضيب عند طرف <code>ENROLLMENT</code> يجعل الطالب جزءًا من معرّف التسجيل. والنصف المتّصل عند <code>ENROLLMENT</code> يجعل المفتاح <code>NOT NULL</code>. والنصف المتقطّع عند <code>STUDENT</code> يجعل «المتعدّد» صفرًا أو أكثر — فلا تسجيل لـ Yousef — والقضيب لا يغيّر أيّ طرف. والقضيب يعلّم الكيان الذي يعرّفه؛ أمّا <code>STUDENT</code> فله <code># ID</code> خاصّ به ويُعيره."
      }
    },
    {
      id: "t5cx07", type: "contrast", level: "hard",
      topics: ["t5-diamond-rule", "t5-unique-fk", "t5-many-one-or-more", "t5-intersection-fks", "t5-composite-pk", "t5-redundant"],
      q: {
        en: "Every rule below is drawn on one of the chapter's models. When someone breaks it, does a clause of <code>CREATE TABLE</code> refuse the row, or does nothing in the table stop it?",
        ar: "كل قاعدة مما يلي مرسومة على أحد نماذج الفصل. حين يخالفها أحد، هل ترفض عبارةٌ في <code>CREATE TABLE</code> الصفَّ، أم لا شيء في الجدول يوقفه؟"
      },
      concepts: [
        { en: "A table clause refuses it", ar: "ترفضه عبارة في الجدول" },
        { en: "Nothing in the table stops it", ar: "لا شيء في الجدول يوقفه" }
      ],
      rows: [
        { s: { en: "Issued receipt 5003 is updated to point at Lina instead of Omar (the diamond).", ar: "يُعدَّل الإيصال الصادر 5003 ليشير إلى Lina بدل Omar (المعيَّن)." }, a: 1 },
        { s: { en: "A second motherboard row names LAB-01, and <code>computer_id</code> is <code>NOT NULL UNIQUE</code>.", ar: "صفّ لوحة أمّ ثانٍ يذكر LAB-01، و<code>computer_id</code> بقيد <code>NOT NULL UNIQUE</code>." }, a: 0 },
        { s: { en: "Nadia, a new representative, has no customers, but the model says each must be assigned to one or more.", ar: "Nadia، المندوبة الجديدة، بلا زبائن، لكن النموذج يقول إن كل مندوب يجب أن يُكلَّف بواحد أو أكثر." }, a: 1 },
        { s: { en: "An enrollment is inserted with a student and a grade but no subject.", ar: "يُدرَج تسجيل فيه طالب ودرجة ولا مادّة فيه." }, a: 0 },
        { s: { en: "Sara is entered in Maths a second time, and the table has <code>PRIMARY KEY (student_id, subject_id)</code>.", ar: "تُدخَل Sara في Maths مرّة ثانية، وللجدول <code>PRIMARY KEY (student_id, subject_id)</code>." }, a: 0 },
        { s: { en: "The draft keeps both <code>study_groups.teacher_id</code> and <code>students.teacher_id</code>, and Omar's two copies disagree.", ar: "تُبقي المسوّدة <code>study_groups.teacher_id</code> و<code>students.teacher_id</code> معًا، فتختلف نسختا Omar." }, a: 1 }
      ],
      hint: {
        en: "A table can say NOT NULL, UNIQUE, PRIMARY KEY and REFERENCES about the rows of one table. Ask whether the rule is one of those.",
        ar: "يستطيع الجدول أن يقول NOT NULL وUNIQUE وPRIMARY KEY وREFERENCES عن صفوف جدول واحد. اسأل هل القاعدة واحدة من هذه."
      },
      explain: {
        en: "<code>UNIQUE</code>, <code>NOT NULL</code> and a composite primary key each refuse their row. The other three slip through. No clause stands for a diamond, so the application must never offer that update. A one-or-more many is a rule about a parent, but the key sits in the child's table. And two columns holding one fact are both legal on their own — the cure is to drop one, not to constrain it. Knowing which rules the table cannot keep tells you which ones the design must.",
        ar: "<code>UNIQUE</code> و<code>NOT NULL</code> والمفتاح الأساسي المركّب، كلٌّ منها يرفض صفّه. أمّا الثلاث الأخرى فتمرّ. فلا عبارة تقابل المعيَّن، ولذلك يجب ألّا يعرض التطبيق ذلك التعديل أبدًا. و«المتعدّد» الذي يبدأ من واحد قاعدة على الأب، والمفتاح في جدول الابن. والعمودان اللذان يحملان حقيقة واحدة صحيحان كلٌّ على حدة — والعلاج حذف أحدهما لا تقييده. ومعرفة القواعد التي لا يقدر عليها الجدول تخبرك أيّها يجب أن يحفظه التصميم."
      }
    },
    {
      id: "t5cx08", type: "tf", level: "medium",
      topics: ["t5-mm-no-column", "t5-type-from-ends", "t5-learns-from"],
      q: {
        en: "A school decides that every student must learn from at least one teacher and every teacher must educate at least one student, so <code>STUDENT</code> learns from <code>TEACHER</code> is solid at both halves, with a crow's foot at both ends. Because both halves are mandatory, it can be built as one <code>NOT NULL</code> foreign key column, <code>students.teacher_id</code>.",
        ar: "تقرّر مدرسة أن كل طالب يجب أن يتعلّم من معلّم واحد على الأقل، وكل معلّم يجب أن يعلّم طالبًا واحدًا على الأقل، فتصير <code>STUDENT</code> learns from <code>TEACHER</code> متّصلة في النصفين، مع رِجل غراب عند الطرفين. ولأن النصفين إلزاميان، يمكن بناؤها بعمود مفتاح أجنبي واحد بقيد <code>NOT NULL</code> هو <code>students.teacher_id</code>."
      },
      truth: false,
      hint: {
        en: "Halves decide NOT NULL. What decides how many values one row would have to hold?",
        ar: "النصفان يحدّدان NOT NULL. فما الذي يحدّد كم قيمة يجب أن يحملها الصفّ الواحد؟"
      },
      explain: {
        en: "False. Solid halves change optionality, never the type: two crow's feet are M:M whatever the halves say. A student learns from many teachers, so <code>students.teacher_id</code> would need many values in one row — and <code>NOT NULL</code> would only force the first of them. No foreign key column can hold an M:M; it must first be resolved with an intersection entity, whose two keys would then both be <code>NOT NULL</code>.",
        ar: "خطأ. النصفان المتّصلان يغيّران الاختيارية، ولا يغيّران النوع أبدًا: رِجلا الغراب ‎M:M مهما قال النصفان. فالطالب يتعلّم من معلّمين كثيرين، وسيحتاج <code>students.teacher_id</code> إلى قيم كثيرة في صفّ واحد — ولن يفرض <code>NOT NULL</code> إلا أوّلها. ولا يتّسع عمود مفتاح أجنبي لعلاقة ‎M:M؛ بل تُحلّ أولًا بكيان تقاطع، يكون مفتاحاه كلاهما <code>NOT NULL</code>."
      }
    },

    /* ============================================ redundancy, roles and the intersection */
    {
      id: "t5cx09", type: "mcq", level: "hard",
      topics: ["t5-redundant", "t5-same-meaning", "t5-relationship-path", "t5-roles"],
      q: {
        en: "The school's model has <code>PERSON</code> acting as / role of <code>STUDENT</code> (1:1) and <code>STUDENT</code> enrols for <code>ENROLLMENT</code>. A designer adds a direct line, <code>PERSON</code> enrolled through <code>ENROLLMENT</code>, meaning \"the person who is enrolled\", so that reports can reach Rana Saad's enrollments without going through <code>STUDENT</code>. What should happen to it?",
        ar: "في نموذج المدرسة <code>PERSON</code> acting as / role of <code>STUDENT</code> ‏(1:1)، و<code>STUDENT</code> enrols for <code>ENROLLMENT</code>. يضيف مصمّم خطًّا مباشرًا هو <code>PERSON</code> enrolled through <code>ENROLLMENT</code>، ويعني «الشخص المسجَّل»، لتصل التقارير إلى تسجيلات Rana Saad دون المرور بـ <code>STUDENT</code>. ماذا ينبغي أن يحدث له؟"
      },
      options: [
        { en: "Keep it: a path through a 1:1 role does not count, because a role is not a real relationship", ar: "يبقى: المسار عبر دور ‎1:1 لا يُحسب، لأن الدور ليس علاقة حقيقية" },
        { en: "Keep it and bar it at <code>ENROLLMENT</code>, because the person identifies the enrollment", ar: "يبقى ويُقضَّب عند <code>ENROLLMENT</code>، لأن الشخص يعرّف التسجيل" },
        { en: "Remove it: following acting as, then enrols for, already gives each enrollment's person, with the same meaning", ar: "يُحذف: اتّباع acting as ثم enrols for يعطي شخص كل تسجيل أصلًا، وبالمعنى نفسه" },
        { en: "Remove it, and remove <code>PERSON</code>–<code>STUDENT</code> too, since the new line now joins <code>PERSON</code> to the enrollments", ar: "يُحذف، ويُحذف <code>PERSON</code>–<code>STUDENT</code> أيضًا، لأن الخطّ الجديد صار يصل <code>PERSON</code> بالتسجيلات" }
      ],
      answer: 2,
      hint: {
        en: "Apply the same-meaning test: read the direct line, then read the path. Is there any enrollment for which they could name different people?",
        ar: "طبّق اختبار المعنى نفسه: اقرأ الخطّ المباشر، ثم اقرأ المسار. هل يوجد تسجيل يمكن أن يسمّيا له شخصين مختلفين؟"
      },
      explain: {
        en: "Each enrollment is for one student, and each student is the role of one person, so the path names exactly one person per enrollment — the person who is enrolled. The direct line stores that fact a second time, and the two copies can disagree, as Omar's two supervisors did. A 1:1 is a relationship like any other, so it does count in a path. And <code>PERSON</code>–<code>STUDENT</code> must stay: it carries the role and its <code>Start Date</code>. A shorter query is never a reason for a second copy.",
        ar: "كل تسجيل لطالب واحد، وكل طالب دورٌ لشخص واحد، فيسمّي المسار شخصًا واحدًا بالضبط لكل تسجيل — الشخص المسجَّل. والخطّ المباشر يخزّن هذه الحقيقة مرّة ثانية، وقد تختلف النسختان كما اختلف مشرفا Omar. والعلاقة ‎1:1 علاقة كغيرها، فهي تُحسب في المسار. ويجب أن يبقى <code>PERSON</code>–<code>STUDENT</code>: فهو يحمل الدور و<code>Start Date</code> الخاصّ به. والاستعلام الأقصر ليس سببًا أبدًا لنسخة ثانية."
      }
    },
    {
      id: "t5cx10", type: "complete", level: "medium",
      topics: ["t5-redundant", "t5-relationship-path", "t5-study-group"],
      q: {
        en: "The redundant line is gone: <code>students (student_id, first_name, last_name, group_id)</code> has no <code>teacher_id</code> any more, and <code>study_groups (group_id, name, teacher_id)</code> keeps the supervisor. List the students Rana (teacher 31) supervises. What completes the query?",
        ar: "حُذف الخطّ الزائد: لم يعد في <code>students (student_id, first_name, last_name, group_id)</code> عمود <code>teacher_id</code>، ويحتفظ <code>study_groups (group_id, name, teacher_id)</code> بالمشرف. اعرض الطلاب الذين تشرف عليهم Rana (المعلّمة 31). ما الذي يُكمل الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT s.first_name, g.teacher_id AS supervisor\nFROM students s\n____\nWHERE g.teacher_id = 31\nORDER BY s.first_name;",
      options: [
        { code: "JOIN study_groups g ON g.group_id = s.group_id" },
        { code: "JOIN study_groups g ON g.teacher_id = s.group_id" },
        { code: "JOIN study_groups g ON g.teacher_id = s.teacher_id" },
        { code: "JOIN study_groups g ON g.group_id = s.student_id" }
      ],
      answer: 0,
      solution: {
        code: "SELECT s.first_name, g.teacher_id AS supervisor\nFROM students s\nJOIN study_groups g ON g.group_id = s.group_id\nWHERE g.teacher_id = 31\nORDER BY s.first_name;",
        en: "Run in alasql with Lesson 4's version 2 data: Omar 31, Sara 31. Joining the group id to a teacher id returns no rows.",
        ar: "نُفّذ في alasql على بيانات الإصدار 2 من الدرس الرابع: Omar ‏31، وSara ‏31. أمّا ربط رقم المجموعة برقم معلّم فلا يُرجع أيّ صفّ."
      },
      hint: {
        en: "The supervisor is now read along a path. Which foreign key starts that path from the student's row?",
        ar: "صار المشرف يُقرأ على طول مسار. أيّ مفتاح أجنبي يبدأ هذا المسار من صفّ الطالب؟"
      },
      explain: {
        en: "The path is <code>STUDENT</code> join <code>STUDY GROUP</code>, then supervised by <code>TEACHER</code>: <code>students.group_id</code> meets <code>study_groups.group_id</code>, and the group's <code>teacher_id</code> is the answer. <code>s.teacher_id</code> is tempting because the draft had it — but that was the second copy, and removing it is the whole cure. Every join must match a foreign key with the key it references.",
        ar: "المسار هو <code>STUDENT</code> join <code>STUDY GROUP</code>، ثم supervised by <code>TEACHER</code>: يلتقي <code>students.group_id</code> بـ <code>study_groups.group_id</code>، و<code>teacher_id</code> الخاصّ بالمجموعة هو الجواب. ويُغري <code>s.teacher_id</code> لأنه كان في المسوّدة — لكنه كان النسخة الثانية، وحذفه هو العلاج كلّه. وكل ربط يجب أن يطابق مفتاحًا أجنبيًا بالمفتاح الذي يشير إليه."
      }
    },
    {
      id: "t5cx11", type: "output", level: "hard",
      topics: ["t5-roles", "t5-unique-fk", "t5-intersection-table", "t5-enrollment"],
      q: {
        en: "Lesson 3's roles meet Lesson 6's enrollments. <code>persons</code>: 1 Sara, 2 Omar, 3 Rana, 4 Lina, 5 Khaled. <code>teachers (teacher_id, hire_date, person_id)</code>: 31 → person 3, 32 → person 5. <code>students (student_id, start_date, person_id)</code>: 1001 → 1, 1002 → 2, 1003 → 4, 1005 → 3. <code>subjects</code>: 1 Maths, 2 Physics, 3 Arabic. <code>enrollments</code>: (1001, 1, A), (1001, 2, B), (1002, 1, C), (1003, 2, A), (1003, 3, A), (1005, 1, no grade yet), (1005, 3, B). What does the query return?",
        ar: "أدوار الدرس الثالث تلتقي بتسجيلات الدرس السادس. ‏<code>persons</code>: ‏1 Sara، ‏2 Omar، ‏3 Rana، ‏4 Lina، ‏5 Khaled. ‏<code>teachers (teacher_id, hire_date, person_id)</code>: ‏31 ← الشخص 3، و32 ← الشخص 5. ‏<code>students (student_id, start_date, person_id)</code>: ‏1001 ← 1، و1002 ← 2، و1003 ← 4، و1005 ← 3. ‏<code>subjects</code>: ‏1 Maths، ‏2 Physics، ‏3 Arabic. ‏<code>enrollments</code>: ‏(1001, 1, A)، (1001, 2, B)، (1002, 1, C)، (1003, 2, A)، (1003, 3, A)، (1005, 1، بلا درجة بعد)، (1005, 3, B). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT p.first_name, j.name AS subject, e.grade\nFROM persons p\nJOIN teachers t    ON t.person_id = p.person_id\nJOIN students s    ON s.person_id = p.person_id\nJOIN enrollments e ON e.student_id = s.student_id\nJOIN subjects j    ON j.subject_id = e.subject_id\nORDER BY j.name;",
      options: [
        { code: "first_name  subject  grade\nRana        Arabic   B" },
        { code: "first_name  subject  grade\nRana        Arabic   B\nRana        Maths    ∅" },
        { code: "first_name  subject  grade\nKhaled      ∅        ∅\nRana        Arabic   B\nRana        Maths    ∅" },
        { code: "first_name  subject  grade\nRana        Arabic   B\nSara        Physics  B" }
      ],
      answer: 1,
      solution: {
        code: "first_name  subject  grade\nRana        Arabic   B\nRana        Maths    ∅",
        en: "Run in alasql: two rows, both Rana's. Her Maths enrollment has no grade yet, and the joins keep it because nothing is joined on the grade.",
        ar: "نُفّذ في alasql: صفّان، كلاهما لـ Rana. تسجيلها في Maths بلا درجة بعد، وتُبقيه عمليات الربط لأن شيئًا منها لا يعتمد على الدرجة."
      },
      hint: {
        en: "A person passes the first two joins only by being a teacher and a student. Then count that person's enrollments.",
        ar: "لا يجتاز الشخص الربطين الأوّلين إلا إن كان معلّمًا وطالبًا معًا. ثم عُدّ تسجيلات ذلك الشخص."
      },
      explain: {
        en: "The two inner joins keep only persons who play both roles: Rana alone, since Khaled teaches but studies nothing. Through her student row 1005 she has two enrollments, one per subject, so she appears twice. The empty Maths grade is the slides' <code>o Grade</code>: the enrollment exists before its grade does. One person, one student row (the <code>UNIQUE</code> on <code>person_id</code>), many enrollments.",
        ar: "لا يُبقي الربطان الداخليان إلا الأشخاص الذين يؤدّون الدورين: Rana وحدها، لأن Khaled يدرّس ولا يدرس شيئًا. وعبر صفّها الطلابي 1005 لها تسجيلان، واحد لكل مادّة، فتظهر مرّتين. والدرجة الفارغة في Maths هي <code>o Grade</code> في الشرائح: يوجد التسجيل قبل أن توجد درجته. شخص واحد، وصفّ طالب واحد (بفضل <code>UNIQUE</code> على <code>person_id</code>)، وتسجيلات كثيرة."
      }
    },
    {
      id: "t5cx12", type: "mcq", level: "medium",
      topics: ["t5-split-entity", "t5-intersection-instance", "t5-own-significance", "t5-grade-where"],
      q: {
        en: "A classmate looks at <code>ENROLLMENT</code> — only <code>o Grade</code> inside, no <code>#</code> attribute of its own — and says: \"This is a split entity, like <code>STUDENT CONTACT</code>. Merge <code>Grade</code> back into <code>STUDENT</code>.\" Is the classmate right?",
        ar: "ينظر زميل إلى <code>ENROLLMENT</code> — لا شيء داخله سوى <code>o Grade</code>، ولا خاصية <code>#</code> خاصّة به — ويقول: «هذا كيان مقسوم (split entity) مثل <code>STUDENT CONTACT</code>. أعِد <code>Grade</code> إلى <code>STUDENT</code>.» هل الزميل محقّ؟"
      },
      options: [
        { en: "Yes: a box with no <code>#</code> of its own has no significance and should be merged", ar: "نعم: الصندوق الذي لا <code>#</code> له لا أهمية له ويجب دمجه" },
        { en: "Yes, but into <code>SUBJECT</code>, since a grade is given in a subject", ar: "نعم، لكن في <code>SUBJECT</code>، لأن الدرجة تُعطى في مادّة" },
        { en: "No: it should go back onto the M:M line as a note instead", ar: "لا: بل يجب أن تعود إلى خطّ ‎M:M ملاحظةً" },
        { en: "No: a split entity hangs off a 1:1, but a student has one enrollment per subject, and merging would lose the subject again", ar: "لا: الكيان المقسوم معلّق بعلاقة ‎1:1، أمّا الطالب فله تسجيل لكل مادّة، والدمج سيُضيع المادّة من جديد" }
      ],
      answer: 3,
      hint: {
        en: "Compare the lines: what joins STUDENT CONTACT to STUDENT, and what joins ENROLLMENT to STUDENT?",
        ar: "قارن الخطّين: ما الذي يصل STUDENT CONTACT بـ STUDENT، وما الذي يصل ENROLLMENT بـ STUDENT؟"
      },
      explain: {
        en: "A split entity is one thing drawn twice across a 1:1, usually mandatory at both ends. <code>ENROLLMENT</code> is the child of a 1:M: Sara has two of them, one for Maths and one for Physics, and each is its own fact. Merging puts one <code>Grade</code> per student back — Lesson 4's overwritten A. Having no <code>#</code> inside is normal for an intersection entity; its identity arrives along the barred lines.",
        ar: "الكيان المقسوم شيء واحد رُسم مرّتين عبر علاقة ‎1:1، إلزامية في الطرفين عادةً. أمّا <code>ENROLLMENT</code> فهو ابن في علاقة ‎1:M: لـ Sara منه اثنان، واحد لـ Maths وآخر لـ Physics، ولكلٍّ منهما حقيقته. والدمج يُعيد <code>Grade</code> واحدة لكل طالب — درجة A التي كُتب فوقها في الدرس الرابع. وغياب <code>#</code> داخل الصندوق أمر طبيعي في كيان التقاطع؛ فهويّته تصل على طول الخطّين المقضّبين."
      }
    },
    {
      id: "t5cx13", type: "order", level: "medium",
      topics: ["t5-first-version", "t5-pair-test", "t5-intersection-entity", "t5-barred-relationship", "t5-composite-pk"],
      q: {
        en: "Follow <code>STUDENT</code>–<code>SUBJECT</code> through the whole chapter, from first sketch to a table that refuses a duplicate grade. Put the stages in the order they depend on each other.",
        ar: "تتبّع <code>STUDENT</code>–<code>SUBJECT</code> عبر الفصل كلّه، من الرسم الأول إلى جدول يرفض درجة مكرّرة. رتّب المراحل بحسب اعتماد بعضها على بعض."
      },
      items: [
        { en: "Draw the first version: <code>STUDENT</code> studies <code>SUBJECT</code>, a crow's foot at both ends", ar: "ارسم الإصدار الأول: <code>STUDENT</code> studies <code>SUBJECT</code>، ورِجل غراب عند الطرفين" },
        { en: "Apply the pair test: <code>Grade</code> is one value per student per subject, so neither entity can hold it", ar: "طبّق اختبار الزوج: <code>Grade</code> قيمة واحدة لكل طالب في كل مادّة، فلا يحملها أيّ من الكيانين" },
        { en: "Add <code>ENROLLMENT</code>; the M:M line becomes two 1:Ms with both crow's feet at <code>ENROLLMENT</code>", ar: "أضف <code>ENROLLMENT</code>؛ فيصير خطّ ‎M:M علاقتين ‎1:M، ورِجلا الغراب كلتاهما عند <code>ENROLLMENT</code>" },
        { en: "Move <code>Grade</code> into <code>ENROLLMENT</code>, as <code>o Grade</code>", ar: "انقل <code>Grade</code> إلى <code>ENROLLMENT</code>، بصيغة <code>o Grade</code>" },
        { en: "Bar both lines at <code>ENROLLMENT</code>: its UID is <code>STUDENT</code> plus <code>SUBJECT</code>", ar: "ضع قضيبًا على الخطّين عند <code>ENROLLMENT</code>: معرّفه <code>STUDENT</code> زائد <code>SUBJECT</code>" },
        { en: "Declare <code>PRIMARY KEY (student_id, subject_id)</code> on <code>enrollments</code>", ar: "أعلن <code>PRIMARY KEY (student_id, subject_id)</code> على <code>enrollments</code>" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "Each stage needs something the previous one made: a line to test, a diagnosis to act on, a box to fill, lines to bar, bars to turn into columns.",
        ar: "كل مرحلة تحتاج شيئًا صنعته سابقتها: خطًّا يُختبر، وتشخيصًا يُبنى عليه، وصندوقًا يُملأ، وخطّين يُقضَّبان، وقضبانًا تتحوّل إلى أعمدة."
      },
      explain: {
        en: "The first version records the rule as stated. The pair test diagnoses an attribute no box can hold. The intersection entity is the cure, and the attribute moves in only after the box and its lines exist. Bars sit on those lines, at the new entity's end, so they come next. The composite key is the table form of the two bars, so it comes last. Skipping to the key early is how Lesson 5 ended: a correct box that still accepted Sara's second Maths row.",
        ar: "الإصدار الأول يسجّل القاعدة كما قيلت. واختبار الزوج يشخّص خاصية لا يحملها أيّ صندوق. وكيان التقاطع هو العلاج، ولا تنتقل إليه الخاصية إلا بعد أن يوجد الصندوق وخطّاه. والقضبان توضع على هذين الخطّين عند طرف الكيان الجديد، فتأتي بعد ذلك. والمفتاح المركّب صورة القضيبين في الجدول، فيأتي في الآخر. وقد انتهى الدرس الخامس قبل هذه الخطوة: صندوق صحيح ما زال يقبل صفّ Maths الثاني لـ Sara."
      }
    },
    {
      id: "t5cx14", type: "tf", level: "easy",
      topics: ["t5-many-to-one", "t5-two-one-to-many", "t5-read-backwards"],
      q: {
        en: "Read from <code>ENROLLMENT</code>, each of the two lines that replaced the M:M is a many-to-one.",
        ar: "إذا قُرئ كلٌّ من الخطّين اللذين حلّا محلّ ‎M:M انطلاقًا من <code>ENROLLMENT</code>، فهو علاقة متعدّد إلى واحد (many-to-one)."
      },
      truth: true,
      hint: {
        en: "Where are the crow's feet after the resolution, and what is a 1:M called when you start reading at its many end?",
        ar: "أين رِجلا الغراب بعد الحلّ، وماذا تُسمّى ‎1:M حين تبدأ قراءتها من طرفها المتعدّد؟"
      },
      explain: {
        en: "True. Both crow's feet sit at <code>ENROLLMENT</code>, so it is the many end of both lines. \"Each <code>ENROLLMENT</code> must be for one and only one <code>STUDENT</code>\" is the M:1 reading of the first line, and the <code>SUBJECT</code> sentence is the M:1 reading of the second. M:1 and 1:M are one line read from two ends, so the resolution still has exactly two foreign keys, both in <code>enrollments</code>.",
        ar: "صواب. رِجلا الغراب كلتاهما عند <code>ENROLLMENT</code>، فهو الطرف المتعدّد في الخطّين. وجملة «Each <code>ENROLLMENT</code> must be for one and only one <code>STUDENT</code>» هي قراءة ‎M:1 للخطّ الأول، وجملة <code>SUBJECT</code> قراءة ‎M:1 للثاني. و‎M:1 و‎1:M خطّ واحد مقروء من طرفين، فلا يزال في الحلّ مفتاحان أجنبيان بالضبط، كلاهما في <code>enrollments</code>."
      }
    },
    {
      id: "t5cx15", type: "fill", level: "medium",
      topics: ["t5-intersection-sentences", "t5-many-one-or-more", "t5-feet-at-intersection", "t5-cleaning-schedule"],
      q: {
        en: "This cleaning agency lists a service only once at least one company provides it: each <code>CLEANING SERVICE</code> must be provided by one or more companies. A new company may provide nothing yet. Resolve the M:M with <code>CLEANING SCHEDULE</code> and complete the four sentences. Then answer blank 6: can a foreign key in <code>cleaning_schedules</code> enforce the fourth sentence? (yes / no)",
        ar: "شركة التنظيف هذه لا تُدرج خدمة إلا إذا قدّمتها شركة واحدة على الأقل: كل <code>CLEANING SERVICE</code> يجب أن تقدّمها شركة واحدة أو أكثر. والشركة الجديدة قد لا تقدّم شيئًا بعد. حُلّ ‎M:M بـ <code>CLEANING SCHEDULE</code> وأكمل الجمل الأربع. ثم أجب في الفراغ 6: هل يستطيع مفتاح أجنبي في <code>cleaning_schedules</code> أن يفرض الجملة الرابعة؟ (yes / no)"
      },
      lang: "erdish",
      code: "Each CLEANING COMPANY ____1____ be on one or more CLEANING SCHEDULEs.\nEach CLEANING SCHEDULE ____2____ be for ____3____ CLEANING COMPANY.\nEach CLEANING SCHEDULE must be for one and only one CLEANING SERVICE.\nEach CLEANING SERVICE ____4____ be on ____5____ CLEANING SCHEDULEs.\n\nA foreign key can enforce sentence 4: ____6____",
      blanks: [
        { accept: ["may"] },
        { accept: ["must"] },
        { accept: ["one and only one"], wide: true },
        { accept: ["must"] },
        { accept: ["one or more"], wide: true },
        { accept: ["no", "لا"] }
      ],
      hint: {
        en: "Both new lines meet the new box with a crow's foot and a solid half. Each parent's half keeps what the business said about that parent.",
        ar: "الخطّان الجديدان يلتقيان بالصندوق الجديد برِجل غراب ونصف متّصل. ونصف كل أب يحتفظ بما قاله العمل عن ذلك الأب."
      },
      explain: {
        en: "From the intersection entity the sentence is always must and one and only one. The parents keep their optionality from the M:M: may for a company, which can be new, and must for a service, which this agency lists only once someone provides it. The many at <code>CLEANING SCHEDULE</code> is therefore one-or-more for services. No foreign key can enforce that, because the key sits in the child — it forces each schedule to have a service, never each service to have a schedule.",
        ar: "من جهة كيان التقاطع تكون الجملة دائمًا must وone and only one. ويحتفظ الأبوان باختياريتهما من ‎M:M: ‏may للشركة، إذ قد تكون جديدة، وmust للخدمة، التي لا تُدرجها هذه الشركة إلا إذا قدّمها أحد. فيكون «المتعدّد» عند <code>CLEANING SCHEDULE</code> واحدًا أو أكثر بالنسبة إلى الخدمات. ولا يفرض ذلك أيّ مفتاح أجنبي، لأن المفتاح في الابن — فهو يُلزم كل جدول خدمة بأن تكون له خدمة، ولا يُلزم كل خدمة بأن يكون لها جدول."
      }
    },
    {
      id: "t5cx16", type: "mcq", level: "hard",
      topics: ["t5-many-one-or-more", "t5-fk-in-child", "t5-intersection-fks", "t5-parent-without-child"],
      q: {
        en: "The school makes a new rule: every student must take at least one subject. Yousef (1004) currently has no enrollment. In the resolved model, what changes, and what does the database do about Yousef?",
        ar: "تضع المدرسة قاعدة جديدة: كل طالب يجب أن يدرس مادّة واحدة على الأقل. ليس لـ Yousef ‏(1004) أيّ تسجيل حاليًا. في النموذج المحلول، ما الذي يتغيّر، وماذا تفعل قاعدة البيانات بشأن Yousef؟"
      },
      options: [
        { en: "The half at <code>ENROLLMENT</code> becomes solid, and the <code>NOT NULL</code> on <code>enrollments.student_id</code> refuses Yousef's row", ar: "يصير النصف عند <code>ENROLLMENT</code> متّصلًا، ويرفض <code>NOT NULL</code> على <code>enrollments.student_id</code> صفّ Yousef" },
        { en: "The half at <code>STUDENT</code> becomes solid, and a new <code>students.subject_id NOT NULL</code> column enforces it", ar: "يصير النصف عند <code>STUDENT</code> متّصلًا، ويفرضه عمود جديد <code>students.subject_id NOT NULL</code>" },
        { en: "The half at <code>STUDENT</code> becomes solid; no foreign key enforces it, so Yousef's row stays until someone enrols him", ar: "يصير النصف عند <code>STUDENT</code> متّصلًا؛ ولا يفرضه أيّ مفتاح أجنبي، فيبقى صفّ Yousef حتى يسجّله أحد" },
        { en: "Nothing changes: in a resolved model the parents' halves are always dashed", ar: "لا شيء يتغيّر: في النموذج المحلول يكون نصفا الأبوين متقطّعين دائمًا" }
      ],
      answer: 2,
      hint: {
        en: "\"Each STUDENT must enrol for one or more ENROLLMENTs\" — which half does that sentence read? And which table holds the key?",
        ar: "«Each STUDENT must enrol for one or more ENROLLMENTs» — أيّ نصف تقرؤه هذه الجملة؟ وأيّ جدول يحمل المفتاح؟"
      },
      explain: {
        en: "The rule is read from the parent, so it changes the half at <code>STUDENT</code>: the many becomes one-or-more. The key lives in <code>enrollments</code>, so it can force every enrollment to have a student — already true — but never every student to have an enrollment. The half at <code>ENROLLMENT</code> was solid from the start. A <code>subject_id</code> in <code>students</code> squeezes the M:M back into one column, Lesson 4's first defect.",
        ar: "القاعدة تُقرأ من جهة الأب، فهي تغيّر النصف عند <code>STUDENT</code>: يصير «المتعدّد» واحدًا أو أكثر. والمفتاح في <code>enrollments</code>، فيستطيع أن يُلزم كل تسجيل بأن يكون له طالب — وهذا قائم أصلًا — ولا يستطيع أبدًا أن يُلزم كل طالب بأن يكون له تسجيل. والنصف عند <code>ENROLLMENT</code> كان متّصلًا من البداية. أمّا <code>subject_id</code> في <code>students</code> فيحشر ‎M:M في عمود واحد من جديد، وهو أول عيب في الدرس الرابع."
      }
    },
    {
      id: "t5cx17", type: "tf", level: "easy",
      topics: ["t5-resolved-model", "t5-one-to-one", "t5-few-one-to-one"],
      q: {
        en: "A resolved model is one in which every relationship has been replaced by an intersection entity, so the 1:1 between <code>COMPUTER</code> and <code>MOTHERBOARD</code> must be resolved too.",
        ar: "النموذج المحلول (resolved model) هو الذي استُبدلت فيه كل علاقة بكيان تقاطع، ولذلك يجب أن تُحلّ أيضًا علاقة ‎1:1 بين <code>COMPUTER</code> و<code>MOTHERBOARD</code>."
      },
      truth: false,
      hint: {
        en: "Which type of relationship do the slides say will disappear in later stages — and why does it need a third box?",
        ar: "أيّ نوع من العلاقات تقول الشرائح إنه سيختفي في المراحل اللاحقة — ولماذا يحتاج صندوقًا ثالثًا؟"
      },
      explain: {
        en: "False. The slides say all M:M relationships are resolved and disappear; 1:1 and 1:M lines stay. An M:M needs a third box because no column can hold many values per row. A 1:1 already fits one foreign key, declared <code>UNIQUE</code>, and so does a 1:M without it. A resolved model has no M:M left — not no 1:1.",
        ar: "خطأ. تقول الشرائح إن كل علاقات ‎M:M تُحلّ وتختفي؛ أمّا خطوط ‎1:1 و‎1:M فتبقى. وتحتاج ‎M:M صندوقًا ثالثًا لأن العمود لا يتّسع لقيم كثيرة في الصفّ الواحد. والعلاقة ‎1:1 يكفيها مفتاح أجنبي واحد بقيد <code>UNIQUE</code>، وكذلك ‎1:M من دونه. فالنموذج المحلول لم يبقَ فيه ‎M:M — لا أنه لم يبقَ فيه ‎1:1."
      }
    },

    /* ============================================ UIDs, bars and diamonds */
    {
      id: "t5cx18", type: "compare", level: "easy",
      topics: ["t5-uid-as-attributes", "t5-bar", "t5-originating-relationship"],
      q: {
        en: "Two ways to give <code>ENROLLMENT</code> its UID. Which statement is right?",
        ar: "طريقتان لإعطاء <code>ENROLLMENT</code> معرّفه. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "ENROLLMENT  # Student ID, # Subject ID, o Grade\nSTUDENT --enrols for / for--> ENROLLMENT   crow's foot at ENROLLMENT\nSUBJECT --subject of / for--> ENROLLMENT   crow's foot at ENROLLMENT",
      codeB: "ENROLLMENT  o Grade\nSTUDENT --enrols for / for--> ENROLLMENT   crow's foot and bar at ENROLLMENT\nSUBJECT --subject of / for--> ENROLLMENT   crow's foot and bar at ENROLLMENT",
      options: [
        { en: "A is right: every entity needs <code>#</code> attributes inside its box", ar: "A صحيح: كل كيان يحتاج خصائص <code>#</code> داخل صندوقه" },
        { en: "B is right: the student and the subject reach <code>ENROLLMENT</code> along the lines, so the lines carry the UID as bars", ar: "B صحيح: الطالب والمادّة يصلان إلى <code>ENROLLMENT</code> على طول الخطّين، فيحمل الخطّان المعرّف قضبانًا" },
        { en: "Both say the same thing; A is just more explicit", ar: "كلاهما يقول الشيء نفسه؛ وA أوضح فقط" },
        { en: "Neither: an intersection entity has no UID", ar: "لا هذا ولا ذاك: كيان التقاطع لا معرّف له" }
      ],
      answer: 1,
      hint: {
        en: "In an ERD, how is the link between an enrollment and its student shown — as an attribute or as a line?",
        ar: "في مخطّط ERD، كيف يُعرض الرابط بين التسجيل وطالبه — خاصيةً أم خطًّا؟"
      },
      explain: {
        en: "In an ERD a link is a line. A types the parents' IDs into the box as well, so each fact is stored twice — once as a line, once as an attribute — and the two can drift apart, the same trouble as a redundant relationship. The <code>student_id</code> column appears only when the line becomes a table. An intersection entity does need a UID — without one, Sara's second Maths row got in — and B gives it one.",
        ar: "في مخطّط ERD الرابط خطّ. أمّا A فيكتب أرقام الأبوين داخل الصندوق أيضًا، فتُخزَّن كل حقيقة مرّتين — مرّة خطًّا ومرّة خاصية — وقد تفترق النسختان، وهي مشكلة العلاقة الزائدة نفسها. ولا يظهر العمود <code>student_id</code> إلا حين يصير الخطّ جدولًا. وكيان التقاطع يحتاج معرّفًا فعلًا — فبدونه دخل صفّ Maths الثاني لـ Sara — وB يعطيه إيّاه."
      }
    },
    {
      id: "t5cx19", type: "error", level: "medium",
      topics: ["t5-bar-vs-diamond", "t5-bar-placement", "t5-viewing-record", "t5-intersection-uid"],
      q: {
        en: "The TV channel keeps one rating per person per show, and the designer means: a viewing record is identified by its show and its person. Which line fails to say so?",
        ar: "تحفظ القناة التلفزيونية تقييمًا واحدًا لكل شخص في كل برنامج، ويقصد المصمّم أن سجلّ المشاهدة يُعرَّف ببرنامجه وشخصه. أيّ سطر لا يقول ذلك؟"
      },
      lang: "text",
      code: "TV SHOW         # ID, * Title\nPERSON          # ID, * Name\nVIEWING RECORD  o Rating\nTV SHOW --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD; solid at VIEWING RECORD, dashed at TV SHOW\nPERSON  --on / for--> VIEWING RECORD   crow's foot at VIEWING RECORD, diamond on the middle of the line; solid at VIEWING RECORD, dashed at PERSON",
      answer: 5,
      solution: {
        code: "PERSON  --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD; solid at VIEWING RECORD, dashed at PERSON",
        en: "Replace the diamond with a bar at the VIEWING RECORD end, beside the crow's foot.",
        ar: "استبدل بالمعيَّن قضيبًا عند طرف VIEWING RECORD، بجانب رِجل الغراب."
      },
      hint: {
        en: "Each mark has its own place and its own meaning. Which mark says \"part of the UID\", and where is it drawn?",
        ar: "لكل علامة مكانها ومعناها. أيّ علامة تقول «جزء من المعرّف»، وأين تُرسم؟"
      },
      explain: {
        en: "Line 5 draws a diamond, which says the link is nontransferable — not that the person identifies the record. With only line 4 barred, the UID is the show alone, so each show could have only one viewing record. The bar goes at the <code>VIEWING RECORD</code> end, beside the crow's foot; the middle of the line belongs to the diamond. Line 3 is right: <code>o Rating</code> repeats and may be empty, so it identifies nothing.",
        ar: "يرسم السطر 5 معيَّنًا، والمعيَّن يقول إن الرابط غير قابل للنقل — لا إن الشخص يعرّف السجلّ. ومع قضيب على السطر 4 وحده يكون المعرّف هو البرنامج وحده، فلا يكون لكل برنامج إلا سجلّ مشاهدة واحد. والقضيب يوضع عند طرف <code>VIEWING RECORD</code> بجانب رِجل الغراب؛ أمّا وسط الخطّ فللمعيَّن. والسطر 3 صحيح: <code>o Rating</code> تتكرّر وقد تكون فارغة، فلا تعرّف شيئًا."
      }
    },
    {
      id: "t5cx20", type: "trace", level: "hard",
      topics: ["t5-composite-pk", "t5-transfer-update", "t5-duplicate-pair", "t5-unique-together"],
      q: {
        en: "The barred school table: <code>enrollments</code> with <code>PRIMARY KEY (student_id, subject_id)</code>, holding (1001, 1, A), (1001, 2, B), (1002, 1, C), (1003, 2, A), (1003, 3, A). The office moves enrollments between subjects with <code>UPDATE</code>. The statements run one at a time; a refused one does not stop the next. What does the last query return?",
        ar: "جدول المدرسة المقضّب: <code>enrollments</code> بمفتاح <code>PRIMARY KEY (student_id, subject_id)</code>، وفيه (1001, 1, A)، (1001, 2, B)، (1002, 1, C)، (1003, 2, A)، (1003, 3, A). ينقل المكتب التسجيلات بين الموادّ بجملة <code>UPDATE</code>. تُنفَّذ الجمل واحدة واحدة؛ والمرفوضة لا توقف ما بعدها. ماذا يُرجع الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "UPDATE enrollments SET subject_id = 2\nWHERE student_id = 1002 AND subject_id = 1;\nUPDATE enrollments SET subject_id = 1\nWHERE student_id = 1001 AND subject_id = 2;\nINSERT INTO enrollments VALUES (1002, 1, NULL);\nSELECT student_id, subject_id, grade\nFROM enrollments\nORDER BY student_id, subject_id;",
      options: [
        { code: "student_id  subject_id  grade\n1001        1           A\n1001        2           B\n1002        1           ∅\n1002        2           C\n1003        2           A\n1003        3           A" },
        { code: "student_id  subject_id  grade\n1001        1           A\n1001        1           B\n1002        1           ∅\n1002        2           C\n1003        2           A\n1003        3           A" },
        { code: "student_id  subject_id  grade\n1001        1           A\n1001        2           B\n1002        2           C\n1003        2           A\n1003        3           A" },
        { code: "student_id  subject_id  grade\n1001        1           A\n1001        2           B\n1002        1           C\n1003        2           A\n1003        3           A" }
      ],
      answer: 0,
      solution: {
        out: "student_id | subject_id | grade\n1001       | 1          | A\n1001       | 2          | B\n1002       | 1          | ∅\n1002       | 2          | C\n1003       | 2          | A\n1003       | 3          | A",
        en: "Run in alasql. The first UPDATE is accepted; the second fails with \"Record already exists\"; the INSERT is accepted.",
        ar: "نُفّذ في alasql. تُقبل جملة UPDATE الأولى؛ وتفشل الثانية بالرسالة \"Record already exists\"؛ وتُقبل جملة INSERT."
      },
      hint: {
        en: "After each statement, ask only one thing: does the whole pair (student, subject) now appear twice?",
        ar: "بعد كل جملة اسأل سؤالًا واحدًا فقط: هل صار الزوج كلّه (طالب، مادّة) يظهر مرّتين؟"
      },
      explain: {
        en: "Moving Omar's Maths row to Physics makes (1002, 2), a pair nobody has, so it is accepted — the key is a combination, and Physics already having students does not matter. Moving Sara's Physics row to Maths would make (1001, 1) a second time, so it is refused, as an <code>INSERT</code> of that pair would be. Then (1002, 1) is free again and Omar's new Maths row goes in, with no grade yet. A composite key guards updates as well as inserts.",
        ar: "نقل صفّ Omar في Maths إلى Physics يصنع الزوج (1002, 2)، ولا أحد يملكه، فيُقبل — فالمفتاح تركيبة، ولا يهمّ أن لـ Physics طلابًا أصلًا. ونقل صفّ Sara في Physics إلى Maths كان سيصنع (1001, 1) مرّة ثانية، فيُرفض كما يُرفض إدراج هذا الزوج. ثم يصير (1002, 1) متاحًا من جديد فيدخل صفّ Omar الجديد في Maths بلا درجة بعد. والمفتاح المركّب يحرس التعديلات كما يحرس الإدراجات."
      }
    },
    {
      id: "t5cx21", type: "write", level: "hard",
      topics: ["t5-duplicate-pair", "t5-intersection-no-uid", "t5-composite-pk", "t5-cleaning-schedule"],
      q: {
        en: "The cleaning agency's <code>cleaning_schedules (company_id, service_id, start_date, price)</code> was built before anyone barred its lines, so it has no primary key, and Sparkle is listed twice for windows. Before the two bars can become <code>PRIMARY KEY (company_id, service_id)</code>, list every company–service pair that appears more than once, with the number of copies as <code>copies</code>.",
        ar: "بُني جدول شركة التنظيف <code>cleaning_schedules (company_id, service_id, start_date, price)</code> قبل أن يضع أحد قضيبًا على خطّيه، فلا مفتاح أساسيًا له، وSparkle مُدرجة فيه مرّتين لتنظيف النوافذ. وقبل أن يصير القضيبان <code>PRIMARY KEY (company_id, service_id)</code>، اعرض كل زوج شركة–خدمة يظهر أكثر من مرّة، مع عدد النسخ باسم <code>copies</code>."
      },
      lang: "sql",
      lines: 5,
      checks: [
        { re: "FROM\\s+cleaning_schedules\\b", flags: "i", label: { en: "reads cleaning_schedules", ar: "يقرأ من cleaning_schedules" } },
        { re: "COUNT\\s*\\([^)]*\\)\\s*(AS\\s+)?copies", flags: "i", label: { en: "counts the copies as copies", ar: "يعدّ النسخ باسم copies" } },
        { re: "GROUP\\s+BY\\s+(\\w+\\.)?(company_id\\s*,\\s*(\\w+\\.)?service_id|service_id\\s*,\\s*(\\w+\\.)?company_id)\\b", flags: "i", label: { en: "groups by the whole pair: company_id and service_id", ar: "يجمّع على الزوج كلّه: company_id وservice_id" } },
        { re: "HAVING\\s+COUNT\\s*\\([^)]*\\)\\s*(>\\s*1|>=\\s*2)", flags: "i", label: { en: "keeps only groups with more than one row", ar: "لا يُبقي إلا المجموعات التي فيها أكثر من صفّ" } }
      ],
      forbid: [
        { re: "GROUP\\s+BY\\s+(\\w+\\.)?(company_id|service_id)\\s*(HAVING|ORDER|;|$)", flags: "i", label: { en: "grouping by one part of the pair flags companies with several different services", ar: "التجميع على جزء واحد من الزوج يُظهر شركات لها عدّة خدمات مختلفة" } }
      ],
      solution: {
        code: "SELECT company_id, service_id, COUNT(*) AS copies\nFROM cleaning_schedules\nGROUP BY company_id, service_id\nHAVING COUNT(*) > 1;",
        en: "Run in alasql on Lesson 6's four schedules plus a second Sparkle–Windows row: one row, company 1, service 1, copies 2. Grouping by company_id alone also returns FreshHome, which has two different services and no duplicate at all.",
        ar: "نُفّذ في alasql على جداول الدرس السادس الأربعة مع صفّ ثانٍ لـ Sparkle–Windows: صفّ واحد، الشركة 1، الخدمة 1، ‏copies ‏2. أمّا التجميع على company_id وحده فيُرجع FreshHome أيضًا، ولها خدمتان مختلفتان ولا تكرار عندها أصلًا."
      },
      hint: {
        en: "A duplicate is a repeat of the whole would-be key, never of one of its parts. Group by exactly what the two bars will become.",
        ar: "التكرار تكرارٌ للمفتاح المرتقب كلّه، لا لجزء منه. جمّع على ما سيصير إليه القضيبان بالضبط."
      },
      explain: {
        en: "The two bars will make the pair unique, so a duplicate is a pair with more than one row: group by both columns and keep the groups with <code>COUNT(*) &gt; 1</code>. Grouping by one column is the misreading of a composite UID as \"each part unique\" — it flags every company with two services. The agency then decides which Sparkle price is real, deletes the other, and only then declares the key.",
        ar: "سيجعل القضيبان الزوج فريدًا، فالتكرار زوجٌ له أكثر من صفّ: جمّع على العمودين واحتفظ بالمجموعات التي فيها <code>COUNT(*) &gt; 1</code>. والتجميع على عمود واحد هو قراءة المعرّف المركّب خطأً على أنه «كل جزء فريد» — فيُظهر كل شركة لها خدمتان. ثم تقرّر الشركة أيّ سعرَي Sparkle هو الصحيح، وتحذف الآخر، وعندئذٍ فقط تُعلن المفتاح."
      }
    },
    {
      id: "t5cx22", type: "compare", level: "hard",
      topics: ["t5-uid-often", "t5-mixed-uid", "t5-viewing-record", "t5-intersection-attribute"],
      q: {
        en: "This channel keeps exactly one rating per person per show; if a viewer changes their mind, the rating is updated. It also wants to know the date of that rating. Which UID for <code>VIEWING RECORD</code> is right?",
        ar: "تحفظ هذه القناة تقييمًا واحدًا بالضبط لكل شخص في كل برنامج؛ وإن غيّر المشاهد رأيه عُدِّل التقييم. وتريد أيضًا معرفة تاريخ ذلك التقييم. أيّ معرّف لـ <code>VIEWING RECORD</code> هو الصحيح؟"
      },
      lang: "text",
      codeA: "VIEWING RECORD  # Date Watched, o Rating\nTV SHOW --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD\nPERSON  --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD",
      codeB: "VIEWING RECORD  * Date Watched, o Rating\nTV SHOW --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD\nPERSON  --on / for--> VIEWING RECORD   crow's foot and bar at VIEWING RECORD",
      options: [
        { en: "A: an intersection entity always needs a <code>#</code> attribute of its own beside the bars", ar: "A: كيان التقاطع يحتاج دائمًا خاصية <code>#</code> خاصّة به بجانب القضبان" },
        { en: "A: <code>Date Watched</code> is an intersection attribute, and every intersection attribute belongs in the UID", ar: "A: ‏<code>Date Watched</code> خاصية تقاطع، وكل خاصية تقاطع مكانها في المعرّف" },
        { en: "Either: adding a part to a UID changes nothing about what may be stored", ar: "أيّهما: إضافة جزء إلى المعرّف لا تغيّر شيئًا مما يجوز تخزينه" },
        { en: "B: one record per person per show is exactly the pair, so the bars are enough; A would let Huda hold two ratings of News on two dates", ar: "B: سجلّ واحد لكل شخص في كل برنامج هو الزوج بالضبط، فالقضيبان يكفيان؛ أمّا A فيسمح لـ Huda بتقييمين لـ News في تاريخين" }
      ],
      answer: 3,
      hint: {
        en: "The slides say the UID often comes from the originating relationships. Ask what the business counts as \"the same record\" — and what an extra UID part would let in.",
        ar: "تقول الشرائح إن المعرّف كثيرًا ما يأتي من العلاقات الأصلية. اسأل ما الذي يعدّه العمل «السجلّ نفسه» — وما الذي يُدخله جزء زائد في المعرّف."
      },
      explain: {
        en: "A # beside the bars is for a pair that may meet more than once — Lesson 6's viewing log. This business allows one rating per pair, so the pair is the UID. Every extra part makes the UID easier to satisfy: with <code># Date Watched</code>, Huda's News rating could be entered again on another day, and the channel would hold two answers to one question. <code>Date Watched</code> still belongs in the box, as <code>*</code>: being a pair's attribute does not make it an identifier.",
        ar: "الـ # بجانب القضبان لزوج قد يلتقي أكثر من مرّة — سجلّ المشاهدات في الدرس السادس. أمّا هذا العمل فيسمح بتقييم واحد لكل زوج، فالزوج هو المعرّف. وكل جزء زائد يجعل المعرّف أسهل تحقيقًا: فمع <code># Date Watched</code> يمكن إدخال تقييم Huda لـ News من جديد في يوم آخر، فتحمل القناة جوابين لسؤال واحد. ويبقى <code>Date Watched</code> في الصندوق بصيغة <code>*</code>: فكونها خاصية للزوج لا يجعلها معرّفًا."
      }
    },
    {
      id: "t5cx23", type: "output", level: "medium",
      topics: ["t5-mixed-uid", "t5-intersection-instance", "t5-composite-pk"],
      q: {
        en: "The viewing log of Lesson 6, with the mixed UID: <code>viewings (show_id, person_id, date_watched, rating)</code>, <code>PRIMARY KEY (show_id, person_id, date_watched)</code>. Rows: News–Huda 2026-11-01, Drama–Huda 2026-11-01, News–Ahmad 2026-11-02, Drama–Mona 2026-11-03, News–Huda 2026-11-08. What does the query return?",
        ar: "سجلّ المشاهدات في الدرس السادس، بالمعرّف المختلط: <code>viewings (show_id, person_id, date_watched, rating)</code>، ‏<code>PRIMARY KEY (show_id, person_id, date_watched)</code>. الصفوف: News–Huda ‏2026-11-01، وDrama–Huda ‏2026-11-01، وNews–Ahmad ‏2026-11-02، وDrama–Mona ‏2026-11-03، وNews–Huda ‏2026-11-08. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT t.title, COUNT(*) AS viewings,\n       COUNT(DISTINCT v.person_id) AS viewers\nFROM viewings v\nJOIN tv_shows t ON t.show_id = v.show_id\nGROUP BY t.title\nORDER BY t.title;",
      options: [
        { code: "title  viewings  viewers\nDrama  2         2\nNews   2         2" },
        { code: "title  viewings  viewers\nDrama  2         2\nNews   3         3" },
        { code: "title  viewings  viewers\nDrama  2         2\nNews   3         2" },
        { code: "title  viewings  viewers\nHuda   3         2\nAhmad  1         1\nMona   1         1" }
      ],
      answer: 2,
      solution: {
        code: "title  viewings  viewers\nDrama  2         2\nNews   3         2",
        en: "Run in alasql: Huda's two News viewings are two rows, but one viewer.",
        ar: "نُفّذ في alasql: مشاهدتا Huda لـ News صفّان، لكنهما مشاهد واحد."
      },
      hint: {
        en: "With the date in the UID, what does one row stand for: a person-and-show pair, or one viewing?",
        ar: "مع وجود التاريخ في المعرّف، علامَ يدلّ الصفّ الواحد: على زوج شخص وبرنامج، أم على مشاهدة واحدة؟"
      },
      explain: {
        en: "The # Date Watched beside the bars changes what one instance is: one viewing, not one pair. So News has three rows — Huda twice, Ahmad once — and <code>COUNT(*)</code> gives 3, while <code>COUNT(DISTINCT person_id)</code> gives the two people. With only the two bars, Huda's second viewing would have been refused and both counts would agree. Know what a row of the intersection table means before you count it.",
        ar: "الـ # Date Watched بجانب القضيبين تغيّر ما يعنيه المثيل الواحد: مشاهدة واحدة، لا زوجًا واحدًا. فلـ News ثلاثة صفوف — Huda مرّتين وAhmad مرّة — فيعطي <code>COUNT(*)</code> ‏3، بينما يعطي <code>COUNT(DISTINCT person_id)</code> الشخصين. ولو كان القضيبان وحدهما المعرّف لرُفضت مشاهدة Huda الثانية، ولتساوى العددان. اعرف ما يعنيه صفّ جدول التقاطع قبل أن تعدّه."
      }
    },
    {
      id: "t5cx24", type: "error", level: "hard",
      topics: ["t5-feet-at-intersection", "t5-diamond", "t5-roles", "t5-intersection-attribute", "t5-barred-relationship"],
      q: {
        en: "A classmate's whole school model, as text. The rules are the chapter's: a person may act as a student; a receipt is issued to one student and can never move to another; each enrollment is for one student and one subject and is identified by that pair. Two lines are wrong. Which?",
        ar: "نموذج المدرسة كاملًا كما كتبه زميل نصًّا. والقواعد قواعد الفصل: الشخص قد يكون طالبًا؛ والإيصال يصدر لطالب واحد ولا ينتقل إلى غيره أبدًا؛ وكل تسجيل لطالب واحد ومادّة واحدة ويُعرَّف بهذا الزوج. سطران خاطئان. أيّهما؟"
      },
      lang: "text",
      code: "PERSON      # ID, * First Name, * Last Name, * Phone\nSTUDENT     # ID, * Start Date\nSUBJECT     # ID, * Name, * Credit Hours\nENROLLMENT  * Enrolment Date, o Grade\nPERSON  --acting as / role of--> STUDENT     single toe at both ends; solid at STUDENT, dashed at PERSON\nSTUDENT --enrols for / for--> ENROLLMENT     crow's foot and bar at ENROLLMENT; solid at ENROLLMENT, dashed at STUDENT\nSUBJECT --subject of / for--> ENROLLMENT     crow's foot at SUBJECT, bar at ENROLLMENT; solid at ENROLLMENT, dashed at SUBJECT\nRECEIPT --issued to / issued--> STUDENT      crow's foot at RECEIPT, single toe at STUDENT; solid at RECEIPT; no diamond",
      answer: [7, 8],
      solution: {
        code: "SUBJECT --subject of / for--> ENROLLMENT     crow's foot and bar at ENROLLMENT; solid at ENROLLMENT, dashed at SUBJECT\nRECEIPT --issued to / issued--> STUDENT      crow's foot at RECEIPT, single toe at STUDENT; solid at RECEIPT; diamond on the line",
        en: "Line 7: the crow's foot moves to ENROLLMENT, beside its bar. Line 8: add the diamond.",
        ar: "السطر 7: تنتقل رِجل الغراب إلى ENROLLMENT، بجانب قضيبها. السطر 8: أضف المعيَّن."
      },
      hint: {
        en: "Check every line with all three questions of a relationship, plus the bar. Attributes: ask \"one value per what?\"",
        ar: "افحص كل خطّ بأسئلة العلاقة الثلاثة، ومعها القضيب. وللخصائص: اسأل «قيمة واحدة لكل ماذا؟»"
      },
      explain: {
        en: "Line 7 leaves a crow's foot at <code>SUBJECT</code>, so one enrollment could be for many subjects and its grade would mean nothing; both crow's feet belong at the intersection entity. Line 8 has the right ends and halves but no diamond, so a receipt could be re-pointed. The tempting suspects are right: <code>Credit Hours</code> is one value per subject, <code>* Enrolment Date</code> is known on the first day, and a role is 1:1, solid at the role only.",
        ar: "يُبقي السطر 7 رِجل غراب عند <code>SUBJECT</code>، فيمكن أن يكون التسجيل الواحد لموادّ كثيرة ولا يعود لدرجته معنى؛ ومكان رِجلَي الغراب كلتيهما عند كيان التقاطع. والسطر 8 طرفاه ونصفاه صحيحة، لكن لا معيَّن عليه، فيمكن تحويل الإيصال. أمّا المشتبه بها المغرية فصحيحة: <code>Credit Hours</code> قيمة واحدة لكل مادّة، و<code>* Enrolment Date</code> معروفة من اليوم الأول، والدور ‎1:1 متّصل عند الدور وحده."
      }
    }

  ]
};
