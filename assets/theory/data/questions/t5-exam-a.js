/* Question bank: T5 chapter test A -- Core. Four questions per lesson, easy and medium. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-exam-a"] = {
  title: { en: "Chapter Test A — Core", ar: "اختبار الفصل A — الأساسيات" },
  intro: {
    en: "24 questions across the whole chapter, four from each lesson: transferability and the diamond, one-to-many, one-to-one, many-to-many and the attribute it hides, the intersection entity, and barred relationships with composite UIDs. The cases are the chapter's own — the school's receipts, study groups, students and subjects, the wholesaler, the computer lab, the TV channel and the cleaning agency. These are the ideas every student must own; none is hard. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الفصل كله، أربعة من كل درس: قابلية النقل (transferability) والمعيَّن، وعلاقة واحد إلى متعدّد (one-to-many)، وواحد إلى واحد (one-to-one)، ومتعدّد إلى متعدّد (many-to-many) والخاصية التي تخفيها، وكيان التقاطع (intersection entity)، والعلاقات المقضّبة (barred relationships) مع المعرّفات المركّبة. والحالات هي حالات الفصل نفسها — إيصالات المدرسة ومجموعات الدراسة والطلاب والمواد، وتاجر الجملة، ومختبر الحاسوب، والقناة التلفزيونية، وشركة التنظيف. هذه أفكار يجب أن يمتلكها كل طالب، وليس فيها سؤال صعب. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== lesson 1 · transferability */
    {
      id: "t5ax01", type: "tf", level: "easy",
      topics: ["t5-business-decides", "t5-transferability"],
      q: {
        en: "Whether a relationship is transferable is decided by the entities themselves: a <code>MEMBERSHIP</code> is a kind of document, so <code>MEMBERSHIP</code> held by <code>PERSON</code> is nontransferable at every health club.",
        ar: "قابلية العلاقة للنقل يحدّدها الكيانان نفساهما: فـ <code>MEMBERSHIP</code> نوع من الوثائق، ولذلك تكون علاقة <code>MEMBERSHIP</code> held by <code>PERSON</code> غير قابلة للنقل (nontransferable) في كل نادٍ صحّي."
      },
      truth: false,
      hint: {
        en: "Recall the slides' two health clubs, and who decides the rule for each.",
        ar: "تذكّر الناديين الصحّيين في الشرائح، ومن يحدّد القاعدة لكلٍّ منهما."
      },
      explain: {
        en: "False. The slides say some health clubs allow memberships to be transferred and others don't, and that this is decided by what is most efficient and most profitable for the club. Transferability is a business rule, not a fact about the entities. The same two boxes can carry a diamond in one model and none in another, and both are right.",
        ar: "خطأ. تقول الشرائح إن بعض الأندية الصحّية تسمح بنقل العضوية وبعضها لا يسمح، وإن ذلك يُحدَّد بما هو أكفأ وأربح للنادي. فقابلية النقل قاعدة عمل (business rule)، لا صفة في الكيانين. والصندوقان نفساهما قد يحملان معيَّنًا في نموذج ولا يحملانه في آخر، وكلاهما صحيح."
      }
    },
    {
      id: "t5ax02", type: "multi", level: "medium",
      topics: ["t5-relationship-review", "t5-where-drawn", "t5-diamond", "t5-nontransferable"],
      q: {
        en: "The slides' internet company: each <code>ORDER</code> must be placed by one and only one <code>CUSTOMER</code>; each <code>CUSTOMER</code> may place one or more <code>ORDER</code>s; once placed, an order can never pass to another customer. Which of these are drawn on the line? Choose every one.",
        ar: "شركة الإنترنت في الشرائح: كل <code>ORDER</code> يجب أن يضعه <code>CUSTOMER</code> واحد فقط لا غير؛ وكل <code>CUSTOMER</code> قد يضع <code>ORDER</code> واحدًا أو أكثر؛ وبعد وضع الطلب لا ينتقل أبدًا إلى عميل آخر. أيّ هذه يُرسم على الخطّ؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "A diamond on the relationship line", ar: "معيَّن على خطّ العلاقة" },
        { en: "A crow's foot at the <code>ORDER</code> end", ar: "رِجل غراب عند طرف <code>ORDER</code>" },
        { en: "A solid half next to <code>ORDER</code>", ar: "نصف متّصل بجانب <code>ORDER</code>" },
        { en: "A dashed half next to <code>ORDER</code>, because the order cannot move", ar: "نصف متقطّع بجانب <code>ORDER</code>، لأن الطلب لا يمكن نقله" },
        { en: "A diamond inside the <code>ORDER</code> softbox, beside its UID", ar: "معيَّن داخل صندوق <code>ORDER</code>، بجانب معرّفه" },
        { en: "A crow's foot at the <code>CUSTOMER</code> end", ar: "رِجل غراب عند طرف <code>CUSTOMER</code>" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Ask the three questions one at a time — must or may, one or many, can it move — and recall where each answer is drawn.",
        ar: "اطرح الأسئلة الثلاثة واحدًا تلو الآخر — يجب أم قد، واحد أم متعدّد، هل ينتقل — وتذكّر أين تُرسم كل إجابة."
      },
      explain: {
        en: "\"Must\" makes the half at <code>ORDER</code> solid; \"one or more\" orders per customer puts the crow's foot at <code>ORDER</code>; \"can never pass to another customer\" puts the diamond on the relationship. The dashed half is tempting because \"cannot move\" sounds like a strength rule, but optionality and transferability are separate questions. The diamond belongs to the relationship, not inside either box.",
        ar: "كلمة «يجب» تجعل النصف عند <code>ORDER</code> متّصلًا؛ و«طلب واحد أو أكثر» لكل عميل تضع رِجل الغراب عند <code>ORDER</code>؛ و«لا ينتقل أبدًا إلى عميل آخر» تضع المعيَّن على العلاقة. يُغري النصف المتقطّع لأن «لا ينتقل» تبدو قاعدة عن الإلزام، لكن الإلزامية (optionality) وقابلية النقل سؤالان منفصلان. والمعيَّن يخصّ العلاقة، لا داخل أيٍّ من الصندوقين."
      }
    },
    {
      id: "t5ax03", type: "output", level: "easy",
      topics: ["t5-cancel-reissue", "t5-keep-history", "t5-receipt"],
      q: {
        en: "The lesson's <code>receipts</code>: 5001 Sara (1001), 5002 Omar (1002), 5003 Omar (1002, 40, Bookstore). Receipt 5003 was really for Lina (1003), so the school corrects it the way the slides say. What does the last query return?",
        ar: "جدول <code>receipts</code> في الدرس: 5001 لـ Sara (1001)، و5002 لـ Omar (1002)، و5003 لـ Omar (1002، 40، Bookstore). الإيصال 5003 كان في الحقيقة لـ Lina (1003)، فتصحّحه المدرسة بالطريقة التي تقولها الشرائح. ماذا يُعيد الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "UPDATE receipts\nSET    status = 'CANCELLED'\nWHERE  receipt_no = 5003;\n\nINSERT INTO receipts\nVALUES (5004, 1003, '2026-10-05', 40, 'Bookstore', 'ISSUED');\n\nSELECT receipt_no, student_id, status\nFROM   receipts\nWHERE  paid_for = 'Bookstore'\nORDER  BY receipt_no;",
      options: [
        { code: "receipt_no  student_id  status\n5003        1003        ISSUED" },
        { code: "receipt_no  student_id  status\n5003        1002        CANCELLED\n5004        1003        ISSUED" },
        { code: "receipt_no  student_id  status\n5004        1003        ISSUED" },
        { code: "receipt_no  student_id  status\n5003        1003        CANCELLED\n5004        1003        ISSUED" }
      ],
      answer: 1,
      solution: {
        code: "receipt_no  student_id  status\n5003        1002        CANCELLED\n5004        1003        ISSUED",
        en: "Run in alasql: two rows. 5003 still names Omar and is cancelled; 5004 is new and names Lina.",
        ar: "نُفّذ في alasql: صفّان. ما زال 5003 يحمل Omar وهو ملغى؛ و5004 جديد ويحمل Lina."
      },
      hint: {
        en: "Which column did the <code>UPDATE</code> change — the link, or an attribute of the receipt?",
        ar: "أيّ عمود غيّره أمر <code>UPDATE</code> — الرابط، أم خاصية من خصائص الإيصال؟"
      },
      explain: {
        en: "Cancel and reissue never moves and never deletes. The update touched <code>status</code>, an attribute, so 5003 stays with Omar (1002) and is marked cancelled; the insert writes up a new receipt for Lina. A 5003 that names Lina would be the transfer the diamond forbids, and a missing 5003 would leave Omar holding a paper receipt with no row.",
        ar: "الإلغاء وإعادة الإصدار لا ينقل ولا يحذف. لمس التحديث العمود <code>status</code>، وهو خاصية، فبقي 5003 مع Omar (1002) وعُلّم ملغى؛ وكتب الإدخال إيصالًا جديدًا لـ Lina. أمّا 5003 يحمل Lina فهو النقل الذي يمنعه المعيَّن، وغياب 5003 يترك Omar يحمل إيصالًا ورقيًا بلا صفّ."
      }
    },
    {
      id: "t5ax04", type: "tf", level: "easy",
      topics: ["t5-relationship-review", "t5-transferable", "t5-default-transferable"],
      q: {
        en: "\"Each <code>EMPLOYEE</code> must be assigned to one and only one <code>DEPARTMENT</code>.\" Because the employee must have exactly one department, Carlos Gomez can never move from Accounting to Development.",
        ar: "«Each <code>EMPLOYEE</code> must be assigned to one and only one <code>DEPARTMENT</code>.» ولأن للموظّف قسمًا واحدًا بالضبط إلزامًا، لا يستطيع Carlos Gomez أبدًا الانتقال من Accounting إلى Development."
      },
      truth: false,
      hint: {
        en: "Which of the three questions do \"must\" and \"one and only one\" answer? Which one is left?",
        ar: "أيّ الأسئلة الثلاثة تجيب عنه «must» و«one and only one»؟ وأيّها يبقى؟"
      },
      explain: {
        en: "False. \"Must\" answers optionality and \"one and only one\" answers cardinality: one department <em>at a time</em>. Whether that one may later be a different one is transferability, and the slides say a person may change departments, so the line has no diamond. Carlos's move is a single <code>UPDATE</code> of <code>employees.department_id</code>.",
        ar: "خطأ. «must» تجيب عن الإلزامية و«one and only one» تجيب عن التعدّدية (cardinality): قسم واحد <em>في كل وقت</em>. أمّا هل يمكن أن يصير ذلك القسم قسمًا آخر لاحقًا فهو قابلية النقل، والشرائح تقول إن الشخص قد يغيّر قسمه، فلا معيَّن على الخطّ. وانتقال Carlos أمر <code>UPDATE</code> واحد على <code>employees.department_id</code>."
      }
    },

    /* ==================================================== lesson 2 · one-to-many */
    {
      id: "t5ax05", type: "match", level: "medium",
      topics: ["t5-relationship-type", "t5-type-from-ends", "t5-two-how-many"],
      q: {
        en: "Match each pair of business rules with the relationship type it describes.",
        ar: "صِل كل زوج من قواعد العمل بنوع العلاقة الذي يصفه."
      },
      leftHead: { en: "Business rules", ar: "قواعد العمل" },
      rightHead: { en: "Type", ar: "النوع" },
      pairs: [
        { l: { en: "<code>Each CUSTOMER must be visited by one and only one SALES REPRESENTATIVE.</code> <code>Each SALES REPRESENTATIVE may be assigned to one or more CUSTOMERs.</code>", ar: "<code>Each CUSTOMER must be visited by one and only one SALES REPRESENTATIVE.</code> <code>Each SALES REPRESENTATIVE may be assigned to one or more CUSTOMERs.</code>" },
          r: { en: "One-to-many (1:M)", ar: "واحد إلى متعدّد (‎1:M)" } },
        { l: { en: "<code>Each COMPUTER must contain one and only one MOTHERBOARD.</code> <code>Each MOTHERBOARD must be contained in one and only one COMPUTER.</code>", ar: "<code>Each COMPUTER must contain one and only one MOTHERBOARD.</code> <code>Each MOTHERBOARD must be contained in one and only one COMPUTER.</code>" },
          r: { en: "One-to-one (1:1)", ar: "واحد إلى واحد (‎1:1)" } },
        { l: { en: "<code>Each STUDENT may learn from one or more TEACHERs.</code> <code>Each TEACHER may educate one or more STUDENTs.</code>", ar: "<code>Each STUDENT may learn from one or more TEACHERs.</code> <code>Each TEACHER may educate one or more STUDENTs.</code>" },
          r: { en: "Many-to-many (M:M)", ar: "متعدّد إلى متعدّد (‎M:M)" } },
        { l: { en: "<code>Each RECEIPT must be issued to one and only one STUDENT.</code> — and nothing else is known yet", ar: "<code>Each RECEIPT must be issued to one and only one STUDENT.</code> — ولا شيء غيرها معروف بعد" },
          r: { en: "Not yet known: only one direction has been asked", ar: "غير معروف بعد: لم يُسأل إلا اتجاه واحد" } }
      ],
      hint: {
        en: "The type needs both ends. Look at how each sentence ends: \"one and only one\" or \"one or more\".",
        ar: "النوع يحتاج إلى الطرفين. انظر بماذا تنتهي كل جملة: «one and only one» أم «one or more»."
      },
      explain: {
        en: "One \"one or more\" and one \"one and only one\" is a 1:M; two \"one and only one\" is a 1:1; two \"one or more\" is an M:M. Must and may play no part — they are the halves, not the ends. A single sentence fixes only one end, so the receipt line could still be 1:1 or 1:M until someone asks how many receipts a student may have.",
        ar: "جملة تنتهي بـ «one or more» وأخرى بـ «one and only one» تعني ‎1:M؛ وجملتان بـ «one and only one» تعنيان ‎1:1؛ وجملتان بـ «one or more» تعنيان ‎M:M. ولا دور لـ must وmay هنا — فهما النصفان لا الطرفان. والجملة الواحدة تحدّد طرفًا واحدًا فقط، فقد يبقى خطّ الإيصال ‎1:1 أو ‎1:M حتى يسأل أحدٌ كم إيصالًا قد يكون للطالب."
      }
    },
    {
      id: "t5ax06", type: "tf", level: "easy",
      topics: ["t5-many-meaning", "t5-many-zero-or-more", "t5-many-one-or-more"],
      q: {
        en: "In a one-to-many relationship, the \"many\" always means at least one: a parent at the one end can never exist with no children.",
        ar: "في علاقة واحد إلى متعدّد، «المتعدّد» يعني دائمًا واحدًا على الأقل: لا يمكن أن يوجد الأب عند طرف الواحد بلا أبناء."
      },
      truth: false,
      hint: {
        en: "Recall Nadia Rami, the new sales representative with no customers yet. Which half of the line decides whether she can be recorded?",
        ar: "تذكّر Nadia Rami، مندوبة المبيعات الجديدة التي لا عملاء لها بعد. أيّ نصف من الخطّ يقرّر هل يمكن تسجيلها؟"
      },
      explain: {
        en: "False. The slides say \"many\" can mean one-or-more <em>or</em> zero-or-more, depending on the optionality. With a solid half at the parent, each parent must have at least one child; with a dashed half — the slides' \"may be assigned to\" — a representative like Nadia can exist with none. Both are still 1:M: the ends decide the type, the half decides where \"many\" starts.",
        ar: "خطأ. تقول الشرائح إن «المتعدّد» قد يعني واحدًا أو أكثر <em>أو</em> صفرًا أو أكثر، بحسب الإلزامية. فإذا كان النصف عند الأب متّصلًا وجب أن يكون لكل أب ابن واحد على الأقل؛ وإذا كان متقطّعًا — كعبارة الشرائح «may be assigned to» — أمكن أن توجد مندوبة مثل Nadia بلا أيّ عميل. والحالتان كلتاهما ‎1:M: الطرفان يقرّران النوع، والنصف يقرّر من أين يبدأ «المتعدّد»."
      }
    },
    {
      id: "t5ax07", type: "mcq", level: "easy",
      topics: ["t5-parent-child", "t5-fk-in-child", "t5-many-end"],
      q: {
        en: "Each <code>RECEIPT</code> must be issued to one and only one <code>STUDENT</code>; each <code>STUDENT</code> may be issued one or more <code>RECEIPT</code>s. When this 1:M becomes tables, where is the foreign key?",
        ar: "كل <code>RECEIPT</code> يجب أن يُصدَر لـ <code>STUDENT</code> واحد فقط لا غير؛ وكل <code>STUDENT</code> قد يُصدَر له <code>RECEIPT</code> واحد أو أكثر. حين تصير علاقة ‎1:M هذه جداول، أين يكون المفتاح الأجنبي؟"
      },
      options: [
        { en: "<code>students.receipt_no</code>, because the student is the one who pays", ar: "<code>students.receipt_no</code>، لأن الطالب هو الذي يدفع" },
        { en: "<code>receipts.student_id</code>, because <code>RECEIPT</code> is at the many end", ar: "<code>receipts.student_id</code>، لأن <code>RECEIPT</code> عند الطرف المتعدّد" },
        { en: "In both tables, one pointing each way", ar: "في الجدولين كليهما، واحد في كل اتجاه" },
        { en: "In a third table, <code>student_receipts</code>, with one row per pair", ar: "في جدول ثالث، <code>student_receipts</code>، فيه صفّ لكل زوج" }
      ],
      answer: 1,
      hint: {
        en: "Which entity is the child? It is the one at the crow's foot.",
        ar: "أيّ الكيانين هو الابن؟ إنه الذي عند رِجل الغراب."
      },
      explain: {
        en: "The crow's foot is at <code>RECEIPT</code>, so <code>RECEIPT</code> is the child, and the key goes in the child's table: each receipt row names its one student. <code>students.receipt_no</code> could hold only one receipt per student, which breaks \"one or more\". A key in both tables stores the fact twice, and a third table is the tool for an M:M, not for a 1:M.",
        ar: "رِجل الغراب عند <code>RECEIPT</code>، فـ <code>RECEIPT</code> هو الابن، والمفتاح يذهب إلى جدول الابن: كل صفّ إيصال يسمّي طالبه الواحد. أمّا <code>students.receipt_no</code> فلا يتّسع إلا لإيصال واحد لكل طالب، وهذا يكسر «one or more». والمفتاح في الجدولين يخزّن الحقيقة مرّتين، والجدول الثالث أداة علاقة ‎M:M لا ‎1:M."
      }
    },
    {
      id: "t5ax08", type: "fill", level: "medium",
      topics: ["t5-many-to-one", "t5-read-backwards", "t5-study-group"],
      q: {
        en: "Lesson 1's study groups: a student may have no group at all (Yousef), and a group may have one or more students. The first sentence is given. Write the other direction, then name which reading it is: <code>1:M</code> or <code>M:1</code>.",
        ar: "مجموعات الدراسة في الدرس 1: قد لا يكون للطالب أيّ مجموعة (Yousef)، وقد يكون للمجموعة طالب واحد أو أكثر. الجملة الأولى معطاة. اكتب الاتجاه الآخر، ثم سمِّ أيّ قراءة هي: <code>1:M</code> أم <code>M:1</code>."
      },
      lang: "erdish",
      code: "Each STUDY GROUP may have one or more STUDENTs.\nEach STUDENT ____1____ join ____2____ STUDY GROUP.\n\nThe second sentence is the ____3____ reading.",
      blanks: [
        { accept: ["may"], label: { en: "optionality", ar: "الإلزامية" } },
        { accept: ["one and only one"], label: { en: "cardinality", ar: "التعدّدية" }, wide: true },
        { accept: ["M:1", "M : 1", "many-to-one", "many to one"], label: { en: "reading", ar: "القراءة" } }
      ],
      hint: {
        en: "Can Yousef exist with no group? How many groups can one student be in at once? And which end is the sentence read from?",
        ar: "هل يمكن أن يوجد Yousef بلا مجموعة؟ وفي كم مجموعة يكون الطالب في الوقت نفسه؟ ومن أيّ طرف تُقرأ الجملة؟"
      },
      explain: {
        en: "<code>Each STUDENT may join one and only one STUDY GROUP.</code> \"May\" because Yousef has none; \"one and only one\" because the single toe is at <code>STUDY GROUP</code>. Read from the student, the many end, towards the group, it is the M:1 reading; the given sentence is the 1:M reading. Two sentences, one relationship, one key: <code>students.group_id</code>.",
        ar: "<code>Each STUDENT may join one and only one STUDY GROUP.</code> «may» لأن Yousef بلا مجموعة؛ و«one and only one» لأن الإصبع الواحدة عند <code>STUDY GROUP</code>. وحين تُقرأ من الطالب، أي من الطرف المتعدّد، نحو المجموعة فهي قراءة ‎M:1؛ والجملة المعطاة هي قراءة ‎1:M. جملتان، وعلاقة واحدة، ومفتاح واحد: <code>students.group_id</code>."
      }
    },

    /* ==================================================== lesson 3 · one-to-one */
    {
      id: "t5ax09", type: "tf", level: "easy",
      topics: ["t5-unique-fk", "t5-one-to-one", "t5-computer-motherboard"],
      q: {
        en: "Because a 1:1 is \"one and only one\" in both directions, it needs a foreign key in both tables: <code>computers.motherboard_id</code> and <code>motherboards.computer_id</code>.",
        ar: "لأن علاقة ‎1:1 هي «واحد فقط لا غير» في الاتجاهين، فهي تحتاج إلى مفتاح أجنبي في الجدولين كليهما: <code>computers.motherboard_id</code> و<code>motherboards.computer_id</code>."
      },
      truth: false,
      hint: {
        en: "What does a plain foreign key already guarantee, and what is the one word that adds the second toe?",
        ar: "ماذا يضمن المفتاح الأجنبي العادي أصلًا، وما الكلمة الواحدة التي تضيف الإصبع الثانية؟"
      },
      explain: {
        en: "False. A 1:1 needs one foreign key, in one table — say <code>motherboards.computer_id</code>. Being one column, it gives each motherboard one computer; declaring it <code>UNIQUE</code> stops two motherboards pointing at the same computer. Two keys would store the same link twice, and the copies could disagree.",
        ar: "خطأ. علاقة ‎1:1 تحتاج إلى مفتاح أجنبي واحد في جدول واحد — مثل <code>motherboards.computer_id</code>. ولأنه عمود واحد فهو يعطي كل لوحة أمّ حاسوبًا واحدًا؛ وإعلانه <code>UNIQUE</code> يمنع لوحتين من الإشارة إلى الحاسوب نفسه. أمّا مفتاحان فيخزّنان الرابط نفسه مرّتين، وقد تختلف النسختان."
      }
    },
    {
      id: "t5ax10", type: "mcq", level: "medium",
      topics: ["t5-roles", "t5-mandatory-one-end", "t5-person-twice"],
      q: {
        en: "The slides' role model: <code>PERSON</code> acting as <code>TEACHER</code>, a 1:1 mandatory at one end. Which end is mandatory, and why?",
        ar: "نموذج الأدوار في الشرائح: <code>PERSON</code> acting as <code>TEACHER</code>، علاقة ‎1:1 إلزامية عند طرف واحد. أيّ الطرفين إلزامي، ولماذا؟"
      },
      options: [
        { en: "The <code>PERSON</code> end: every person in the school must be acting as a teacher", ar: "طرف <code>PERSON</code>: كل شخص في المدرسة يجب أن يكون معلّمًا" },
        { en: "Both ends: a 1:1 is always mandatory in both directions", ar: "الطرفان كلاهما: علاقة ‎1:1 إلزامية دائمًا في الاتجاهين" },
        { en: "The <code>TEACHER</code> end: no teacher exists without a person, but most persons are not teachers", ar: "طرف <code>TEACHER</code>: لا يوجد معلّم بلا شخص، لكن معظم الأشخاص ليسوا معلّمين" },
        { en: "Neither end: roles are always optional, which is why they are separate entities", ar: "لا طرف: الأدوار اختيارية دائمًا، ولهذا هي كيانات منفصلة" }
      ],
      answer: 2,
      hint: {
        en: "Read both sentences. Can a <code>TEACHER</code> row exist on its own? Is Sara, a student, a teacher?",
        ar: "اقرأ الجملتين. هل يمكن أن يوجد صفّ <code>TEACHER</code> وحده؟ وهل Sara، الطالبة، معلّمة؟"
      },
      explain: {
        en: "<code>Each TEACHER must be the role of one and only one PERSON</code>: the half at <code>TEACHER</code> is solid. <code>Each PERSON may be acting as one and only one TEACHER</code>: the half at <code>PERSON</code> is dashed. That is why the slides say 1:1 mandatory at one end commonly occurs when roles are modelled. A 1:1 can be solid, dashed or mixed — the type comes from the ends, the must or may from the halves.",
        ar: "<code>Each TEACHER must be the role of one and only one PERSON</code>: النصف عند <code>TEACHER</code> متّصل. و<code>Each PERSON may be acting as one and only one TEACHER</code>: النصف عند <code>PERSON</code> متقطّع. ولهذا تقول الشرائح إن ‎1:1 الإلزامية عند طرف واحد تكثر حين تُنمذَج الأدوار. وقد تكون ‎1:1 متّصلة أو متقطّعة أو مختلطة — النوع من الطرفين، والإلزام من النصفين."
      }
    },
    {
      id: "t5ax11", type: "contrast", level: "medium",
      topics: ["t5-one-to-one", "t5-one-to-many", "t5-few-one-to-one", "t5-most-common", "t5-unique-fk"],
      q: {
        en: "Does each statement describe a one-to-one or a one-to-many relationship?",
        ar: "هل تصف كل عبارة علاقة واحد إلى واحد أم علاقة واحد إلى متعدّد؟"
      },
      concepts: [
        { en: "One-to-one (1:1)", ar: "واحد إلى واحد (‎1:1)" },
        { en: "One-to-many (1:M)", ar: "واحد إلى متعدّد (‎1:M)" }
      ],
      rows: [
        { s: { en: "The slides call it the most common type in an ER model.", ar: "تسمّيه الشرائح النوع الأكثر شيوعًا في نموذج ER." }, a: 1 },
        { s: { en: "The slides say you will usually find just a few of them in every model.", ar: "تقول الشرائح إنك ستجد عادةً القليل منه فقط في كل نموذج." }, a: 0 },
        { s: { en: "Its foreign key column is declared <code>UNIQUE</code> as well.", ar: "يُعلَن عمود مفتاحه الأجنبي <code>UNIQUE</code> أيضًا." }, a: 0 },
        { s: { en: "Hana Saleh's <code>rep_id</code> appears in three <code>customers</code> rows.", ar: "يظهر <code>rep_id</code> الخاصّ بـ Hana Saleh في ثلاثة صفوف من <code>customers</code>." }, a: 1 },
        { s: { en: "Neither of its two ERDish sentences ends in \"one or more\".", ar: "لا تنتهي أيّ من جملتي ERDish فيه بـ «one or more»." }, a: 0 },
        { s: { en: "A single toe at one end, a crow's foot at the other.", ar: "إصبع واحدة عند طرف، ورِجل غراب عند الآخر." }, a: 1 }
      ],
      hint: {
        en: "Count the crow's feet, or the \"one or more\" endings: none, or exactly one?",
        ar: "عُدّ أرجل الغراب، أو نهايات «one or more»: لا شيء، أم واحدة بالضبط؟"
      },
      explain: {
        en: "A 1:M has one crow's foot, so one sentence ends in \"one or more\" and a parent's id may repeat in the child — Hana's three customers. The slides call it the most common type. A 1:1 has a toe at both ends; in the table that second toe is <code>UNIQUE</code>, and the slides warn you will find only a few. Halves and diamonds were left out on purpose: they never decide the type.",
        ar: "لعلاقة ‎1:M رِجل غراب واحدة، فتنتهي جملة واحدة بـ «one or more» ويتكرّر معرّف الأب في جدول الابن — كعملاء Hana الثلاثة. وتسمّيها الشرائح النوع الأكثر شيوعًا. أمّا ‎1:1 فلها إصبع عند الطرفين، والإصبع الثانية في الجدول هي <code>UNIQUE</code>، وتنبّه الشرائح إلى أنك لن تجد منها إلا القليل. وتُركت الأنصاف والمعيَّنات عمدًا: فهي لا تقرّر النوع أبدًا."
      }
    },
    {
      id: "t5ax12", type: "error", level: "medium",
      topics: ["t5-roles", "t5-role-attributes", "t5-one-to-one"],
      q: {
        en: "A classmate wrote the slides' role model as text. Rana Saad is one person who is both a teacher and a student. Which line is wrong?",
        ar: "كتب زميل نموذج الأدوار في الشرائح نصًّا. Rana Saad شخص واحد هي معلّمة وطالبة معًا. أيّ سطر خاطئ؟"
      },
      lang: "text",
      code: "PERSON   # ID, * First Name, * Last Name, * Phone\nTEACHER  # ID, * Hire Date\nSTUDENT  # ID, * Start Date\nPERSON --acting as / role of--> TEACHER   single toe at both ends; solid at TEACHER, dashed at PERSON\nPERSON --acting as / role of--> STUDENT   crow's foot at STUDENT, single toe at PERSON; solid at STUDENT, dashed at PERSON",
      answer: 5,
      solution: {
        code: "PERSON --acting as / role of--> STUDENT   single toe at both ends; solid at STUDENT, dashed at PERSON",
        en: "A role is a 1:1: a single toe at both ends.",
        ar: "الدور علاقة ‎1:1: إصبع واحدة عند الطرفين."
      },
      hint: {
        en: "A role is linked to its person by which type of relationship? Check each line's ends.",
        ar: "بأيّ نوع من العلاقات يرتبط الدور بشخصه؟ افحص طرفَي كل خطّ."
      },
      explain: {
        en: "Line 5 puts a crow's foot at <code>STUDENT</code>, making the line 1:M: one person could then be acting as several students, and Rana could be enrolled twice as two student records. A role is modelled by a 1:1, so both ends need a single toe. The attribute lines are right: name and phone live once in <code>PERSON</code>, and only role attributes such as <code>Hire Date</code> stay in the role.",
        ar: "السطر 5 يضع رِجل غراب عند <code>STUDENT</code>، فيجعل الخطّ ‎1:M: وعندئذٍ قد يؤدّي الشخص الواحد دور عدّة طلاب، وقد تُسجَّل Rana مرّتين في سجلّي طالب. والدور يُنمذَج بعلاقة ‎1:1، فيحتاج الطرفان إلى إصبع واحدة. وأسطر الخصائص سليمة: الاسم والهاتف يسكنان مرّة واحدة في <code>PERSON</code>، ولا يبقى في الدور إلا خصائصه مثل <code>Hire Date</code>."
      }
    },

    /* ==================================================== lesson 4 · many-to-many, hidden attribute, redundant */
    {
      id: "t5ax13", type: "mcq", level: "medium",
      topics: ["t5-mm-no-column", "t5-many-to-many", "t5-student-subject"],
      q: {
        en: "Sara (1001) studies Maths and Physics; Maths is studied by Sara and Omar. Why can't the M:M between <code>STUDENT</code> and <code>SUBJECT</code> be built with one foreign key column?",
        ar: "تدرس Sara (1001) مادّتي Maths وPhysics؛ وتُدرَس Maths من Sara وOmar. لماذا لا يمكن بناء علاقة ‎M:M بين <code>STUDENT</code> و<code>SUBJECT</code> بعمود مفتاح أجنبي واحد؟"
      },
      options: [
        { en: "It can, if the column goes in the table with more rows", ar: "يمكن ذلك، إذا وُضع العمود في الجدول الذي فيه صفوف أكثر" },
        { en: "Because an M:M is always optional, and a foreign key must be <code>NOT NULL</code>", ar: "لأن علاقة ‎M:M اختيارية دائمًا، والمفتاح الأجنبي يجب أن يكون <code>NOT NULL</code>" },
        { en: "It can, by storing <code>'1,2'</code> in <code>students.subject_id</code>", ar: "يمكن ذلك، بتخزين <code>'1,2'</code> في <code>students.subject_id</code>" },
        { en: "Because both ends are \"many\": a column holds one value per row, so <code>students.subject_id</code> fits one subject for Sara, and <code>subjects.student_id</code> one student for Maths", ar: "لأن الطرفين كليهما «متعدّد»: العمود يحمل قيمة واحدة في كل صفّ، فلا يتّسع <code>students.subject_id</code> إلا لمادّة واحدة لـ Sara، ولا <code>subjects.student_id</code> إلا لطالب واحد لـ Maths" }
      ],
      answer: 3,
      hint: {
        en: "In a 1:M the key goes in the child. Which table is the child when both ends have a crow's foot?",
        ar: "في ‎1:M يذهب المفتاح إلى الابن. أيّ الجدولين هو الابن حين يكون عند الطرفين رِجل غراب؟"
      },
      explain: {
        en: "With a crow's foot at both ends, both tables would be the child, and a column holds one value per row — in either table the column runs out at the second value. A list such as <code>'1,2'</code> breaks the single-valued rule and turns every query into string surgery. Optionality has nothing to do with it: the halves of an M:M can be solid or dashed.",
        ar: "مع رِجل غراب عند الطرفين يصير الجدولان كلاهما ابنًا، والعمود يحمل قيمة واحدة في كل صفّ — ففي أيّ الجدولين ينفد العمود عند القيمة الثانية. والقائمة مثل <code>'1,2'</code> تكسر قاعدة القيمة الواحدة وتحوّل كل استعلام إلى جراحة نصوص. ولا علاقة للإلزامية بالأمر: فأنصاف ‎M:M قد تكون متّصلة أو متقطّعة."
      }
    },
    {
      id: "t5ax14", type: "mcq", level: "easy",
      topics: ["t5-first-version", "t5-many-to-many"],
      q: {
        en: "What do the slides say about many-to-many relationships in the life of a model?",
        ar: "ماذا تقول الشرائح عن علاقات متعدّد إلى متعدّد خلال حياة النموذج؟"
      },
      options: [
        { en: "They are mistakes, and a careful designer never draws one", ar: "هي أخطاء، والمصمّم الحريص لا يرسمها أبدًا" },
        { en: "They are common in a first version, and in later stages all of them are resolved and disappear", ar: "تكثر في النسخة الأولى، وفي المراحل اللاحقة تُحلّ كلها وتختفي" },
        { en: "They stay in the final model and become a list column in one table", ar: "تبقى في النموذج النهائي وتصير عمود قائمة في جدول واحد" },
        { en: "They are rare, and are usually turned into a 1:1", ar: "هي نادرة، وتُحوَّل عادةً إلى ‎1:1" }
      ],
      answer: 1,
      hint: {
        en: "Is an M:M the truth about the business? And can it reach the tables as it is?",
        ar: "هل علاقة ‎M:M حقيقة عن العمل؟ وهل يمكن أن تصل إلى الجداول كما هي؟"
      },
      explain: {
        en: "The slides: M:M relationships are common, particularly in a first version of an ER model, and in later stages all of them are resolved and disappear. Draw them first — they record the business rule honestly. Calling them mistakes leads designers to squeeze them into a 1:M, which is the real mistake; a list column breaks the single-valued rule.",
        ar: "تقول الشرائح: علاقات ‎M:M شائعة، خصوصًا في النسخة الأولى من نموذج ER، وفي المراحل اللاحقة تُحلّ كلها وتختفي. ارسمها أوّلًا — فهي تسجّل قاعدة العمل بصدق. أمّا عدّها أخطاء فيدفع المصمّم إلى حشرها في ‎1:M، وهذا هو الخطأ الحقيقي؛ وعمود القائمة يكسر قاعدة القيمة الواحدة."
      }
    },
    {
      id: "t5ax15", type: "multi", level: "medium",
      topics: ["t5-redundant", "t5-relationship-path", "t5-same-meaning"],
      q: {
        en: "At this school, a student's supervisor <em>is</em> the teacher who supervises the student's study group. A draft has <code>STUDENT</code> joins <code>STUDY GROUP</code>, <code>STUDY GROUP</code> supervised by <code>TEACHER</code>, and also a direct line <code>STUDENT</code> supervised by <code>TEACHER</code>. Which statements are true? Choose every one.",
        ar: "في هذه المدرسة، مشرف الطالب <em>هو</em> المعلّم الذي يشرف على مجموعة دراسته. في مسوّدةٍ خطّ <code>STUDENT</code> joins <code>STUDY GROUP</code>، وخطّ <code>STUDY GROUP</code> supervised by <code>TEACHER</code>، وخطّ مباشر أيضًا <code>STUDENT</code> supervised by <code>TEACHER</code>. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The direct <code>STUDENT</code>–<code>TEACHER</code> line is redundant: its fact can be derived through the study group", ar: "الخطّ المباشر <code>STUDENT</code>–<code>TEACHER</code> زائد: حقيقته يمكن اشتقاقها عبر مجموعة الدراسة" },
        { en: "Keeping both, the two copies can disagree, and the office can get two answers for one student", ar: "إن بقي الاثنان قد تختلف النسختان، وقد يحصل المكتب على جوابين للطالب الواحد" },
        { en: "Removing the direct line loses the fact of who supervises each student", ar: "حذف الخطّ المباشر يُضيّع حقيقة من يشرف على كل طالب" },
        { en: "Any second path between two entities proves that the direct line is redundant, whatever it means", ar: "أيّ مسار ثانٍ بين كيانين يثبت أن الخطّ المباشر زائد، مهما كان معناه" },
        { en: "The line to delete is the direct one, not <code>STUDY GROUP</code> supervised by <code>TEACHER</code>", ar: "الخطّ الذي يُحذف هو المباشر، لا <code>STUDY GROUP</code> supervised by <code>TEACHER</code>" }
      ],
      answer: [0, 1, 4],
      hint: {
        en: "Read the direct line, then read the path. Does the business mean the same thing by both?",
        ar: "اقرأ الخطّ المباشر، ثم اقرأ المسار. هل يعني العمل الشيء نفسه بالاثنين؟"
      },
      explain: {
        en: "Here the business says the supervisor <em>is</em> the group's teacher, so the path and the direct line mean the same thing: the direct line is redundant and its copy can drift, as Omar's did. Deleting it loses nothing — every supervisor is still read through the group. Deleting the group's line instead would lose who supervises each group. A second path alone proves nothing; only the same-meaning test decides.",
        ar: "هنا يقول العمل إن المشرف <em>هو</em> معلّم المجموعة، فالمسار والخطّ المباشر يعنيان الشيء نفسه: الخطّ المباشر زائد ونسخته قد تنحرف، كما حدث لـ Omar. وحذفه لا يُضيّع شيئًا — فكل مشرف ما زال يُقرأ عبر المجموعة. أمّا حذف خطّ المجموعة بدلًا منه فيُضيّع من يشرف على كل مجموعة. والمسار الثاني وحده لا يثبت شيئًا؛ اختبار المعنى نفسه هو الذي يقرّر."
      }
    },
    {
      id: "t5ax16", type: "complete", level: "easy",
      topics: ["t5-learns-from", "t5-mm-sentences"],
      q: {
        en: "The slides' second M:M: a student learns from many teachers, and a teacher educates many students; a new teacher may have no students yet. Complete the second sentence.",
        ar: "علاقة ‎M:M الثانية في الشرائح: يتعلّم الطالب من معلّمين كثيرين، ويعلّم المعلّم طلابًا كثيرين؛ وقد لا يكون للمعلّم الجديد طلاب بعد. أكمل الجملة الثانية."
      },
      lang: "erdish",
      code: "Each STUDENT may learn from one or more TEACHERs.\n____",
      options: [
        { code: "Each TEACHER may educate one and only one STUDENT." },
        { code: "Each TEACHER must educate one or more STUDENTs." },
        { code: "Each TEACHER may educate one or more STUDENTs." },
        { code: "Each TEACHER may be learned from by one or more STUDENTs." }
      ],
      answer: 2,
      solution: {
        code: "Each STUDENT may learn from one or more TEACHERs.\nEach TEACHER may educate one or more STUDENTs.",
        en: "Both sentences end in \"one or more\": an M:M, dashed at both halves.",
        ar: "الجملتان كلتاهما تنتهيان بـ «one or more»: علاقة ‎M:M، ونصفاها متقطّعان."
      },
      hint: {
        en: "The second sentence starts at <code>TEACHER</code> and uses the name at that end of the line. Then answer must-or-may and how-many for a teacher.",
        ar: "تبدأ الجملة الثانية من <code>TEACHER</code> وتستعمل الاسم عند ذلك الطرف من الخطّ. ثم أجب عن «يجب أم قد» و«كم» للمعلّم."
      },
      explain: {
        en: "<code>Each TEACHER may educate one or more STUDENTs.</code> \"May\" because a new teacher can have none; \"one or more\" because a teacher educates many — so both sentences end in \"one or more\", which is what makes it an M:M. \"One and only one\" would turn it into a 1:M. \"Learned from by\" reuses the student's name for the relationship; each end has its own name.",
        ar: "<code>Each TEACHER may educate one or more STUDENTs.</code> «may» لأن المعلّم الجديد قد لا يكون له طلاب؛ و«one or more» لأن المعلّم يعلّم كثيرين — فتنتهي الجملتان كلتاهما بـ «one or more»، وهذا ما يجعلها ‎M:M. أمّا «one and only one» فتحوّلها إلى ‎1:M. و«learned from by» تعيد استعمال اسم العلاقة عند طرف الطالب، ولكل طرف اسمه."
      }
    },

    /* ==================================================== lesson 5 · the intersection entity */
    {
      id: "t5ax17", type: "compare", level: "medium",
      topics: ["t5-viewing-record", "t5-feet-at-intersection", "t5-two-one-to-many"],
      q: {
        en: "Two resolutions of the TV channel's M:M between <code>TV SHOW</code> and <code>PERSON</code>, as text. <code>Rating</code> is the score one person gives one show. Which statement is right?",
        ar: "حلّان لعلاقة ‎M:M بين <code>TV SHOW</code> و<code>PERSON</code> في القناة التلفزيونية، نصًّا. <code>Rating</code> هي الدرجة التي يعطيها شخص واحد لبرنامج واحد. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "VIEWING RECORD  * Rating\nTV SHOW --on / for--> VIEWING RECORD    crow's foot at TV SHOW, single toe at VIEWING RECORD\nPERSON  --on / for--> VIEWING RECORD    crow's foot at PERSON, single toe at VIEWING RECORD",
      codeB: "VIEWING RECORD  * Rating\nTV SHOW --on / for--> VIEWING RECORD    crow's foot at VIEWING RECORD, single toe at TV SHOW\nPERSON  --on / for--> VIEWING RECORD    crow's foot at VIEWING RECORD, single toe at PERSON",
      options: [
        { en: "A and B say the same thing; the position of the crow's feet is a drawing style", ar: "A وB يقولان الشيء نفسه؛ وموضع أرجل الغراب أسلوب رسم فقط" },
        { en: "A is right: the crow's feet stay where they were on the original M:M line", ar: "A هو الصحيح: تبقى أرجل الغراب حيث كانت على خطّ ‎M:M الأصلي" },
        { en: "Both are wrong: the original M:M line must stay on the diagram beside the new entity", ar: "كلاهما خطأ: يجب أن يبقى خطّ ‎M:M الأصلي في المخطّط بجانب الكيان الجديد" },
        { en: "B is right: each viewing record is for one show and one person, so one Rating means one thing", ar: "B هو الصحيح: كل سجلّ مشاهدة لبرنامج واحد وشخص واحد، فتعني الدرجة الواحدة شيئًا واحدًا" }
      ],
      answer: 3,
      hint: {
        en: "In A, how many shows can one viewing record be for? Then whose score is its Rating?",
        ar: "في A، لكم برنامجًا قد يكون سجلّ المشاهدة الواحد؟ فدرجةُ مَن تكون Rating فيه؟"
      },
      explain: {
        en: "In B the M:M has become two 1:Ms with <code>VIEWING RECORD</code> as the child of both: one record, one show, one person, one rating. A copies the feet from the old line, so one record is for many shows and many persons, and its Rating describes a crowd again — the same ambiguity, one box further along. The old M:M line is removed: the two new lines replace it.",
        ar: "في B صارت علاقة ‎M:M علاقتَي ‎1:M و<code>VIEWING RECORD</code> ابنٌ في كلتيهما: سجلّ واحد، برنامج واحد، شخص واحد، درجة واحدة. أمّا A فينسخ الأرجل من الخطّ القديم، فيصير السجلّ الواحد لبرامج كثيرة وأشخاص كثيرين، وتصف Rating فيه جمعًا من جديد — الغموض نفسه، بصندوق إضافي. وخطّ ‎M:M القديم يُحذف: الخطّان الجديدان يحلّان محلّه."
      }
    },
    {
      id: "t5ax18", type: "output", level: "medium",
      topics: ["t5-intersection-table", "t5-intersection-instance", "t5-enrollment"],
      q: {
        en: "The school's resolved tables: <code>subjects</code> 1 Maths, 2 Physics, 3 Arabic; <code>enrollments (student_id, subject_id, grade)</code> holds (1001, 1, 'A'), (1001, 2, 'B'), (1002, 1, 'C'), (1003, 2, 'A'), (1003, 3, 'A'). What does this query return?",
        ar: "جداول المدرسة بعد الحلّ: <code>subjects</code> فيه 1 Maths و2 Physics و3 Arabic؛ و<code>enrollments (student_id, subject_id, grade)</code> يحمل (1001, 1, 'A') و(1001, 2, 'B') و(1002, 1, 'C') و(1003, 2, 'A') و(1003, 3, 'A'). ماذا يُعيد هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT b.name, COUNT(*) AS students\nFROM   enrollments e\nJOIN   subjects b ON b.subject_id = e.subject_id\nGROUP  BY b.name\nORDER  BY b.name;",
      blanks: [
        { accept: ["1"], label: { en: "Arabic", ar: "Arabic" } },
        { accept: ["2"], label: { en: "Maths", ar: "Maths" } },
        { accept: ["2"], label: { en: "Physics", ar: "Physics" } }
      ],
      solution: {
        code: "name     students\nArabic   1\nMaths    2\nPhysics  2",
        en: "Run in alasql: Arabic 1, Maths 2, Physics 2 — five enrollment rows, five pairs.",
        ar: "نُفّذ في alasql: Arabic 1، وMaths 2، وPhysics 2 — خمسة صفوف تسجيل، خمسة أزواج."
      },
      hint: {
        en: "Each <code>enrollments</code> row is one student in one subject. Count the rows for each subject id.",
        ar: "كل صفّ في <code>enrollments</code> طالب واحد في مادّة واحدة. عُدّ الصفوف لكل رقم مادّة."
      },
      explain: {
        en: "Arabic 1, Maths 2, Physics 2. One row of the intersection table is one pair, so counting rows per subject counts that subject's students: Maths has Sara and Omar, Physics has Sara and Lina, Arabic has Lina. The question no single table could answer before the resolution is now one join and a <code>GROUP BY</code>.",
        ar: "Arabic 1، وMaths 2، وPhysics 2. الصفّ الواحد في جدول التقاطع زوج واحد، فعدّ الصفوف لكل مادّة يعدّ طلابها: في Maths ‏Sara وOmar، وفي Physics ‏Sara وLina، وفي Arabic ‏Lina. والسؤال الذي لم يكن أيّ جدول يجيب عنه قبل الحلّ صار ربطًا واحدًا و<code>GROUP BY</code>."
      }
    },
    {
      id: "t5ax19", type: "write", level: "medium",
      topics: ["t5-intersection-fks", "t5-intersection-attribute", "t5-intersection-table"],
      q: {
        en: "Using <code>students (student_id, first_name, last_name)</code>, <code>subjects (subject_id, name)</code> and <code>enrollments (student_id, subject_id, grade)</code> from the previous question, write a query that answers the chapter's question: which students got an A in Maths? Show first and last names. Filter on the subject's name, not its id.",
        ar: "باستخدام <code>students (student_id, first_name, last_name)</code> و<code>subjects (subject_id, name)</code> و<code>enrollments (student_id, subject_id, grade)</code> من السؤال السابق، اكتب استعلامًا يجيب عن سؤال الفصل: أيّ الطلاب نالوا A في Maths؟ اعرض الاسم الأول واسم العائلة. رشّح على اسم المادّة، لا على رقمها."
      },
      lang: "sql",
      lines: 6,
      checks: [
        { re: "\\benrollments\\b", flags: "i",
          label: { en: "reads the intersection table, enrollments", ar: "يقرأ جدول التقاطع enrollments" } },
        { re: "\\bstudents\\b", flags: "i",
          label: { en: "brings in students for the names", ar: "يضمّ students لأجل الأسماء" } },
        { re: "\\bsubjects\\b", flags: "i",
          label: { en: "brings in subjects for the subject's name", ar: "يضمّ subjects لأجل اسم المادّة" } },
        { re: "grade\\s*=\\s*[\"']A[\"']", flags: "i",
          label: { en: "filters on grade = 'A'", ar: "يرشّح على grade = 'A'" } },
        { re: "name\\s*=\\s*[\"']Maths[\"']", flags: "i",
          label: { en: "filters on the subject name 'Maths'", ar: "يرشّح على اسم المادّة 'Maths'" } }
      ],
      forbid: [
        { re: "\\bLIKE\\b", flags: "i",
          label: { en: "the grade and the subject are separate columns of one row: no string matching", ar: "الدرجة والمادّة عمودان منفصلان في صفّ واحد: لا مطابقة نصوص" } }
      ],
      solution: {
        code: "SELECT s.first_name, s.last_name\nFROM students s\nJOIN enrollments e ON e.student_id = s.student_id\nJOIN subjects j ON j.subject_id = e.subject_id\nWHERE e.grade = 'A' AND j.name = 'Maths';",
        en: "Run in alasql: one row, Sara Hamdan. Both conditions sit on the same enrollments row, joined to both parents.",
        ar: "نُفّذ في alasql: صفّ واحد، Sara Hamdan. والشرطان كلاهما على صفّ واحد من enrollments، مربوط بالأبوين كليهما."
      },
      hint: {
        en: "The grade lives in the intersection table. The names live in its two parents. Join all three.",
        ar: "الدرجة تسكن جدول التقاطع، والأسماء تسكن أبويه. اربط الثلاثة."
      },
      explain: {
        en: "<code>enrollments</code> is the child of both 1:Ms, so it joins to <code>students</code> on <code>student_id</code> and to <code>subjects</code> on <code>subject_id</code>. The grade is an attribute of the pair, so \"an A in Maths\" is one row: <code>grade = 'A'</code> and <code>name = 'Maths'</code> in the same <code>WHERE</code>. Only Sara qualifies; Lina's two A's are in Physics and Arabic.",
        ar: "<code>enrollments</code> ابنٌ في علاقتَي ‎1:M، فيُربط بـ <code>students</code> على <code>student_id</code> وبـ <code>subjects</code> على <code>subject_id</code>. والدرجة خاصية للزوج، فعبارة «A في Maths» صفّ واحد: <code>grade = 'A'</code> و<code>name = 'Maths'</code> في <code>WHERE</code> واحدة. ولا ينطبق ذلك إلا على Sara؛ أمّا درجتا A عند Lina ففي Physics وArabic."
      }
    },
    {
      id: "t5ax20", type: "fill", level: "medium",
      topics: ["t5-intersection-entity", "t5-two-one-to-many", "t5-cleaning-schedule", "t5-resolved-model"],
      q: {
        en: "The cleaning agency's first version: <code>CLEANING COMPANY</code> provides <code>CLEANING SERVICE</code>, M:M, hiding the start date and the price. Fill in what the resolution produces. Use numbers or entity names.",
        ar: "النسخة الأولى لشركة التنظيف: <code>CLEANING COMPANY</code> provides <code>CLEANING SERVICE</code>، علاقة ‎M:M تخفي تاريخ البدء والسعر. املأ ما ينتج عن الحلّ. استعمل أرقامًا أو أسماء كيانات."
      },
      lang: "text",
      code: "new entity added:                        ____1____\nM:M relationships left in the model:     ____2____\n1:M relationships that replace the M:M:  ____3____\nentity that holds Start Date and Price:  ____4____",
      blanks: [
        { accept: ["CLEANING SCHEDULE", "cleaning schedule"], label: { en: "new entity", ar: "الكيان الجديد" }, wide: true },
        { accept: ["0", "zero", "none"], label: { en: "M:M left", ar: "‎M:M الباقية" } },
        { accept: ["2", "two"], label: { en: "1:Ms", ar: "علاقات ‎1:M" } },
        { accept: ["CLEANING SCHEDULE", "cleaning schedule"], label: { en: "home of the facts", ar: "موطن الحقيقتين" }, wide: true }
      ],
      hint: {
        en: "Recall the slides' name for the third entity in this example, and what happens to the line it replaces.",
        ar: "تذكّر اسم الكيان الثالث في هذا المثال كما في الشرائح، وما يحدث للخطّ الذي يحلّ محلّه."
      },
      explain: {
        en: "The slides resolve it with <code>CLEANING SCHEDULE</code>. The M:M line is removed — none is left — and two 1:Ms replace it, both with the crow's foot at <code>CLEANING SCHEDULE</code>. Start date and price describe one company offering one service, so they move into the intersection entity, not into either parent.",
        ar: "تحلّها الشرائح بـ <code>CLEANING SCHEDULE</code>. يُحذف خطّ ‎M:M — فلا تبقى أيّ واحدة — وتحلّ محلّه علاقتا ‎1:M، رِجل الغراب في كلتيهما عند <code>CLEANING SCHEDULE</code>. وتاريخ البدء والسعر يصفان شركة واحدة تقدّم خدمة واحدة، فينتقلان إلى كيان التقاطع، لا إلى أيٍّ من الأبوين."
      }
    },

    /* ==================================================== lesson 6 · barred relationships and composite UIDs */
    {
      id: "t5ax21", type: "mcq", level: "easy",
      topics: ["t5-bar", "t5-bar-placement", "t5-barred-relationship"],
      q: {
        en: "In the slides' barred school model, where exactly is each bar drawn?",
        ar: "في نموذج المدرسة المقضّب في الشرائح، أين يُرسم كل قضيب بالضبط؟"
      },
      options: [
        { en: "In the middle of the line, where a diamond would go", ar: "في منتصف الخطّ، حيث يوضع المعيَّن" },
        { en: "Across the line at the <code>STUDENT</code> and <code>SUBJECT</code> ends, beside each parent's own UID", ar: "عرضيًا على الخطّ عند طرفي <code>STUDENT</code> و<code>SUBJECT</code>، بجانب معرّف كل أب" },
        { en: "Across each line at the <code>ENROLLMENT</code> end, beside the crow's foot", ar: "عرضيًا على كل خطّ عند طرف <code>ENROLLMENT</code>، بجانب رِجل الغراب" },
        { en: "Inside the <code>ENROLLMENT</code> box, as <code># Student ID</code> and <code># Subject ID</code>", ar: "داخل صندوق <code>ENROLLMENT</code>، بصورة <code># Student ID</code> و<code># Subject ID</code>" }
      ],
      answer: 2,
      hint: {
        en: "A bar says \"this relationship is part of the UID of the entity at this end\". Which entity is being identified?",
        ar: "القضيب يقول «هذه العلاقة جزء من معرّف الكيان عند هذا الطرف». أيّ كيان يُراد تمييزه؟"
      },
      explain: {
        en: "<code>ENROLLMENT</code> is the entity that takes its UID from the lines, so each bar sits at its end, beside the crow's foot. The parents already have <code># ID</code>; a bar at their end would claim they take their identity from the enrollment. The middle of the line belongs to the diamond, and typing the parents' IDs into the box repeats what the lines already carry.",
        ar: "<code>ENROLLMENT</code> هو الكيان الذي يأخذ معرّفه من الخطّين، فيقع كل قضيب عند طرفه بجانب رِجل الغراب. وللأبوين <code># ID</code> أصلًا؛ والقضيب عند طرفيهما يدّعي أنهما يأخذان هويتهما من التسجيل. ومنتصف الخطّ مكان المعيَّن، وكتابة معرّفَي الأبوين داخل الصندوق تكرّر ما يحمله الخطّان."
      }
    },
    {
      id: "t5ax22", type: "compare", level: "medium",
      topics: ["t5-unique-together", "t5-composite-pk", "t5-composite-uid"],
      q: {
        en: "The barred school model's UID is <code>STUDENT</code> plus <code>SUBJECT</code>. Two students build <code>enrollments</code> from it. Which statement is right?",
        ar: "معرّف نموذج المدرسة المقضّب هو <code>STUDENT</code> مع <code>SUBJECT</code>. يبني طالبان <code>enrollments</code> منه. أيّ العبارات صحيحة؟"
      },
      lang: "sql",
      codeA: "CREATE TABLE enrollments (\n  student_id NUMBER NOT NULL UNIQUE REFERENCES students(student_id),\n  subject_id NUMBER NOT NULL UNIQUE REFERENCES subjects(subject_id),\n  grade      VARCHAR(2)\n);",
      codeB: "CREATE TABLE enrollments (\n  student_id NUMBER NOT NULL REFERENCES students(student_id),\n  subject_id NUMBER NOT NULL REFERENCES subjects(subject_id),\n  grade      VARCHAR(2),\n  PRIMARY KEY (student_id, subject_id)\n);",
      options: [
        { en: "A is stricter and therefore safer: it refuses every duplicate B refuses, and more", ar: "A أشدّ ولذلك أأمن: يرفض كل تكرار يرفضه B، وأكثر" },
        { en: "B is right: only the combination must be unique, so Sara may take many subjects and Maths may have many students, but one pair appears once", ar: "B هو الصحيح: التركيبة وحدها يجب أن تكون فريدة، فتأخذ Sara موادّ كثيرة وتضمّ Maths طلابًا كثيرين، لكن الزوج يظهر مرّة واحدة" },
        { en: "They are equivalent: two <code>UNIQUE</code> columns make a composite key", ar: "هما متكافئان: عمودان <code>UNIQUE</code> يصنعان مفتاحًا مركّبًا" },
        { en: "B is wrong: a primary key cannot be made of foreign key columns", ar: "B خطأ: لا يمكن أن يتكوّن المفتاح الأساسي من أعمدة مفاتيح أجنبية" }
      ],
      answer: 1,
      hint: {
        en: "In A, can Sara (1001) have a second row? Can Maths (1) have a second student?",
        ar: "في A، هل يمكن أن يكون لـ Sara (1001) صفّ ثانٍ؟ وهل يمكن أن يكون لـ Maths (1) طالب ثانٍ؟"
      },
      explain: {
        en: "A reads the composite UID as two separate UIDs: each student may appear once, and each subject once, so Sara gets one subject and Maths one student — the M:M is gone. B declares the key on both columns together: unique together, not apart. \"Stricter\" is the trap: A refuses rows the business needs. And two bars becoming a key over two foreign-key columns is exactly what the lesson builds.",
        ar: "يقرأ A المعرّف المركّب معرّفين منفصلين: يظهر كل طالب مرّة واحدة، وكل مادّة مرّة واحدة، فتنال Sara مادّة واحدة وتضمّ Maths طالبًا واحدًا — وتختفي ‎M:M. أمّا B فيعلن المفتاح على العمودين معًا: فريد مجتمعًا، لا متفرّقًا. وكلمة «أشدّ» هي الفخّ: فـ A يرفض صفوفًا يحتاجها العمل. وتحوّل القضيبين إلى مفتاح على عمودَي مفتاح أجنبي هو بالضبط ما يبنيه الدرس."
      }
    },
    {
      id: "t5ax23", type: "error", level: "medium",
      topics: ["t5-bar-to-column", "t5-half-uid", "t5-composite-pk"],
      q: {
        en: "A classmate turns the barred school model — a bar on both lines at <code>ENROLLMENT</code>, <code>o Grade</code> — into a table. Which line is wrong?",
        ar: "يحوّل زميل نموذج المدرسة المقضّب — قضيب على الخطّين كليهما عند <code>ENROLLMENT</code>، و<code>o Grade</code> — إلى جدول. أيّ سطر خاطئ؟"
      },
      lang: "sql",
      code: "CREATE TABLE enrollments (\n  student_id NUMBER NOT NULL REFERENCES students(student_id),\n  subject_id NUMBER NOT NULL REFERENCES subjects(subject_id),\n  grade      VARCHAR(2),\n  PRIMARY KEY (student_id)\n);",
      answer: 5,
      solution: {
        code: "  PRIMARY KEY (student_id, subject_id)",
        en: "Each bar becomes a column of the primary key, so the key lists both.",
        ar: "كل قضيب يصير عمودًا في المفتاح الأساسي، فيضمّ المفتاح العمودين."
      },
      hint: {
        en: "Count the bars, then count the columns in the key.",
        ar: "عُدّ القضبان، ثم عُدّ أعمدة المفتاح."
      },
      explain: {
        en: "Line 5 keys on <code>student_id</code> alone — half a UID. Each student could then have only one enrollment, and Sara's Physics row would be refused as a duplicate of her Maths one. Two bars mean two key columns: <code>PRIMARY KEY (student_id, subject_id)</code>. Line 4 is right: <code>o Grade</code> is optional and outside the UID, so it stays nullable.",
        ar: "السطر 5 يجعل المفتاح على <code>student_id</code> وحده — نصف معرّف. وعندئذٍ لا يكون للطالب إلا تسجيل واحد، ويُرفض صفّ Sara في Physics لأنه يكرّر صفّها في Maths. والقضيبان يعنيان عمودين في المفتاح: <code>PRIMARY KEY (student_id, subject_id)</code>. والسطر 4 سليم: <code>o Grade</code> اختيارية وخارج المعرّف، فتبقى قابلة لأن تكون NULL."
      }
    },
    {
      id: "t5ax24", type: "tf", level: "easy",
      topics: ["t5-uid-often", "t5-mixed-uid", "t5-intersection-uid"],
      q: {
        en: "The UID of an intersection entity always consists of its barred relationships and nothing else; a <code>#</code> attribute can never be part of it.",
        ar: "معرّف كيان التقاطع يتكوّن دائمًا من علاقاته المقضّبة ولا شيء غيرها؛ ولا يمكن أبدًا أن تكون خاصية <code>#</code> جزءًا منه."
      },
      truth: false,
      hint: {
        en: "The slides say the UID \"often\" comes from the originating relationships. Recall Huda's second viewing of News.",
        ar: "تقول الشرائح إن المعرّف يأتي «غالبًا» من العلاقات الأصلية. تذكّر مشاهدة Huda الثانية لـ News."
      },
      explain: {
        en: "False. The slides say the UID <em>often</em> comes from the originating relationships — often, not always. When the channel logs every viewing, the two bars allow one record per person per show, ever, and Huda's second viewing is refused. Adding <code># Date Watched</code> gives a mixed UID: show plus person plus date.",
        ar: "خطأ. تقول الشرائح إن المعرّف يأتي <em>غالبًا</em> من العلاقات الأصلية — غالبًا لا دائمًا. فحين تسجّل القناة كل مشاهدة، لا يسمح القضيبان إلا بسجلّ واحد لكل شخص لكل برنامج إلى الأبد، فتُرفض مشاهدة Huda الثانية. وإضافة <code># Date Watched</code> تعطي معرّفًا مختلطًا (mixed UID): البرنامج مع الشخص مع التاريخ."
      }
    }
  ]
};
