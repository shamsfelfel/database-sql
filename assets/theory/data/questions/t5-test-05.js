/* Question bank: T5 lesson 5 test -- The Intersection Entity. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-05"] = {
  title: { en: "Test 5 — The Intersection Entity", ar: "اختبار 5 — كيان التقاطع" },
  intro: {
    en: "24 questions on lesson 5: what one ENROLLMENT stands for, how one M:M becomes two 1:Ms, where the crow's feet and the solid halves go, the steps of the resolution, which attributes move into the new box and which stay, VIEWING RECORD and CLEANING SCHEDULE, and the question the lesson leaves open. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الخامس: ما الذي تمثّله نسخة واحدة من ENROLLMENT، وكيف تصير علاقة ‎M:M واحدة علاقتَي ‎1:M، وأين تقع أرجل الغراب والأنصاف المتّصلة، وخطوات الحلّ، وأيّ الخصائص تنتقل إلى الصندوق الجديد وأيّها يبقى، وVIEWING RECORD وCLEANING SCHEDULE، والسؤال الذي يتركه الدرس مفتوحًا. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · a third entity */
    {
      id: "t5l5q01", type: "tf", level: "easy", topics: ["t5-intersection-entity", "t5-two-one-to-many"],
      q: {
        en: "Once <code>ENROLLMENT</code> is added, the <code>STUDENT</code>&ndash;<code>SUBJECT</code> M:M line stays on the diagram beside it, so the model still shows that students study subjects.",
        ar: "بعد إضافة <code>ENROLLMENT</code> يبقى خطّ ‎M:M بين <code>STUDENT</code> و<code>SUBJECT</code> في المخطّط بجانبه، ليظلّ النموذج يُظهر أن الطلاب يدرسون المواد."
      },
      truth: false,
      hint: {
        en: "What does the definition say the M:M <em>becomes</em>?",
        ar: "إلامَ <em>تصير</em> علاقة ‎M:M بحسب التعريف؟"
      },
      explain: {
        en: "False. The intersection entity replaces the M:M: the line disappears and two 1:Ms take its place. \"Students study subjects\" is still in the model — it is read through <code>ENROLLMENT</code>. Keeping the old line would say the same thing twice, which is Lesson 4's redundant relationship.",
        ar: "خطأ. كيان التقاطع (intersection entity) يحلّ محلّ علاقة ‎M:M: يختفي الخطّ وتأخذ مكانه علاقتا ‎1:M. وما زال «الطلاب يدرسون المواد» في النموذج، لكنه يُقرأ عبر <code>ENROLLMENT</code>. وإبقاء الخطّ القديم يقول الشيء نفسه مرّتين، وهذه هي العلاقة الزائدة (redundant) في الدرس 4."
      }
    },
    {
      id: "t5l5q02", type: "mcq", level: "easy", topics: ["t5-enrollment", "t5-intersection-instance"],
      q: {
        en: "The school has five enrollments: Sara in Maths and Physics, Omar in Maths, Lina in Physics and Arabic. Yousef now enrols in Maths and Arabic. How many instances of <code>ENROLLMENT</code> are there?",
        ar: "في المدرسة خمسة تسجيلات: Sara في Maths وPhysics، وOmar في Maths، وLina في Physics وArabic. والآن يسجّل Yousef في Maths وArabic. كم نسخة (instance) من <code>ENROLLMENT</code> صار عندنا؟"
      },
      options: [
        { en: "4 — one per student", ar: "4 — نسخة لكل طالب" },
        { en: "7 — one per student-subject pair", ar: "7 — نسخة لكل زوج طالب ومادّة" },
        { en: "3 — one per subject", ar: "3 — نسخة لكل مادّة" },
        { en: "6 — one per enrolment of a subject by Yousef, plus one per subject", ar: "6 — نسخة لكل مادّة سجّلها Yousef، ونسخة لكل مادّة" }
      ],
      answer: 1,
      hint: {
        en: "An enrollment is not a student and not a subject. What is it?",
        ar: "التسجيل ليس طالبًا وليس مادّة. فما هو؟"
      },
      explain: {
        en: "One <code>ENROLLMENT</code> is one student taking one subject, so Yousef's two subjects add two instances to the five: 7. Counting students (4) or subjects (3) is the tempting mistake — it treats the new box as a copy of one parent. If one enrollment held one student with all their subjects, its <code>Grade</code> would be ambiguous again.",
        ar: "نسخة <code>ENROLLMENT</code> الواحدة هي طالب واحد يدرس مادّة واحدة، فمادّتا Yousef تضيفان نسختين إلى الخمس: 7. وعدّ الطلاب (4) أو المواد (3) هو الخطأ المغري، لأنه يعامل الصندوق الجديد نسخةً من أحد الأبوين. ولو حملت النسخة الواحدة طالبًا بكل موادّه لعادت <code>Grade</code> غامضة."
      }
    },
    {
      id: "t5l5q03", type: "output", level: "easy", topics: ["t5-intersection-table", "t5-intersection-instance"],
      q: {
        en: "The lesson's <code>enrollments</code> table holds (1001, 1, 'A'), (1001, 2, NULL), (1002, 1, 'C'), (1003, 2, 'A'), (1003, 3, 'A'). Sara is student 1001. What does this query return?",
        ar: "جدول <code>enrollments</code> في الدرس يحمل (1001, 1, 'A') و(1001, 2, NULL) و(1002, 1, 'C') و(1003, 2, 'A') و(1003, 3, 'A'). وSara هي الطالبة 1001. ماذا يُعيد هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS n\nFROM enrollments\nWHERE student_id = 1001;",
      blanks: [
        { accept: ["2"], label: { en: "n", ar: "n" } }
      ],
      solution: { code: "n\n2", en: "2 — one row for Maths, one for Physics.", ar: "2 — صفّ لـ Maths وصفّ لـ Physics." },
      hint: {
        en: "The intersection table has one row per pair. How many pairs include Sara?",
        ar: "جدول التقاطع فيه صفّ لكل زوج. كم زوجًا تدخل فيه Sara؟"
      },
      explain: {
        en: "2. Sara appears once for each subject she takes, and the Physics row counts even though its grade is still empty — the enrollment exists before the grade. One row per pair is what lets each grade sit beside exactly one student and one subject.",
        ar: "2. تظهر Sara مرّة لكل مادّة تدرسها، وصفّ Physics يُعدّ مع أن درجته ما زالت فارغة، فالتسجيل يوجد قبل الدرجة. وصفّ واحد لكل زوج هو ما يجعل كل درجة بجانب طالب واحد ومادّة واحدة بالضبط."
      }
    },

    /* ---------------------------------------------------- 2 · two one-to-manys */
    {
      id: "t5l5q04", type: "compare", level: "medium", topics: ["t5-feet-at-intersection", "t5-two-one-to-many"],
      q: {
        en: "Versions 2 and 3 of the first evolve block, as text. Which statement is right?",
        ar: "الإصداران 2 و3 من أوّل كتلة تطوّر، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT ---- ENROLLMENT ---- SUBJECT\n  end at STUDENT:    crow's foot\n  end at ENROLLMENT: single toe   (both lines)\n  end at SUBJECT:    crow's foot\n  ENROLLMENT  o Grade",
      codeB: "STUDENT ---- ENROLLMENT ---- SUBJECT\n  end at STUDENT:    single toe\n  end at ENROLLMENT: crow's foot  (both lines)\n  end at SUBJECT:    single toe\n  ENROLLMENT  o Grade",
      options: [
        { en: "A and B are the same model; the crow's feet can be drawn at either end once the new box exists", ar: "A وB نموذج واحد؛ فبعد وجود الصندوق الجديد يمكن رسم أرجل الغراب عند أيّ طرف" },
        { en: "B is right: each enrollment is for one student and one subject, so its Grade means one thing; in A one enrollment can hold many students and many subjects", ar: "B هو الصحيح: كل تسجيل لطالب واحد ومادّة واحدة، فدرجته تعني شيئًا واحدًا؛ وفي A قد يحمل التسجيل الواحد طلابًا كثيرين وموادّ كثيرة" },
        { en: "A is right: STUDENT keeps the crow's foot it had in the M:M, as the recipe says", ar: "A هو الصحيح: يحتفظ STUDENT برِجل الغراب التي كانت له في ‎M:M، كما تقول الوصفة" },
        { en: "B is right because it moves Grade out of STUDENT, where A had left it", ar: "B هو الصحيح لأنه ينقل Grade من STUDENT حيث تركها A" }
      ],
      answer: 1,
      hint: {
        en: "In each version, which entity is the child of both lines? Read one enrollment towards STUDENT.",
        ar: "في كل إصدار، أيّ كيان هو الابن في الخطّين؟ اقرأ تسجيلًا واحدًا باتّجاه STUDENT."
      },
      explain: {
        en: "B is the slides' model: both crow's feet at <code>ENROLLMENT</code>, a single toe at each parent, so each enrollment is for one and only one student and subject. A copies the M:M's feet onto the new lines, and its Grade describes a crowd again. Grade is in <code>ENROLLMENT</code> in both, so B did not move it; only the ends changed.",
        ar: "B هو نموذج الشرائح: رِجلا الغراب عند <code>ENROLLMENT</code> وإصبع واحدة عند كل أب، فكل تسجيل لطالب واحد فقط ومادّة واحدة فقط. أمّا A فينسخ أرجل ‎M:M على الخطّين الجديدين، فتعود درجته تصف جمعًا. وGrade في <code>ENROLLMENT</code> في الإصدارين، فلم ينقلها B؛ تغيّر الطرفان فقط."
      }
    },
    {
      id: "t5l5q05", type: "mcq", level: "medium", topics: ["t5-feet-at-intersection", "t5-intersection-attribute"],
      q: {
        en: "Version 2 of the first evolve block already has an <code>ENROLLMENT</code> box with <code>Grade</code> in it, but its crow's feet are still at <code>STUDENT</code> and <code>SUBJECT</code>. Compared with version 1, what does version 2 still leave open?",
        ar: "في الإصدار 2 من أوّل كتلة تطوّر صندوق <code>ENROLLMENT</code> فيه <code>Grade</code>، لكن أرجل الغراب ما زالت عند <code>STUDENT</code> و<code>SUBJECT</code>. مقارنةً بالإصدار 1، ما الذي يتركه الإصدار 2 مفتوحًا؟"
      },
      options: [
        { en: "Grade still has no entity to live in", ar: "ما زالت Grade بلا كيان تسكنه" },
        { en: "A student may still have no enrollments at all", ar: "ما زال يمكن ألّا يكون للطالب أيّ تسجيل" },
        { en: "One enrollment can still be for many students and many subjects, so its Grade is ambiguous", ar: "ما زال التسجيل الواحد يمكن أن يكون لطلاب كثيرين وموادّ كثيرة، فدرجته غامضة" },
        { en: "The original M:M line is still needed beside ENROLLMENT", ar: "ما زال خطّ ‎M:M الأصلي لازمًا بجانب ENROLLMENT" }
      ],
      answer: 2,
      hint: {
        en: "Version 2 fixed version 1's homeless Grade. Read one enrollment towards its parents.",
        ar: "الإصدار 2 أصلح Grade المشرّدة في الإصدار 1. اقرأ تسجيلًا واحدًا باتّجاه أبويه."
      },
      explain: {
        en: "With the feet at the parents, each enrollment is for one or more students and one or more subjects, so one Grade describes a crowd — the ambiguity moved one box along. \"No entity for Grade\" is what version 1 hid, and version 2 did fix it. A student with no enrollments is legal in every version: the STUDENT half is dashed by the business.",
        ar: "حين تكون الأرجل عند الأبوين يكون كل تسجيل لطالب أو أكثر ولمادّة أو أكثر، فتصف الدرجة الواحدة جمعًا، وينتقل الغموض صندوقًا واحدًا إلى الأمام. أمّا «لا كيان لـ Grade» فهو ما أخفاه الإصدار 1 وأصلحه الإصدار 2. وطالب بلا تسجيلات مشروع في كل الإصدارات: نصف STUDENT متقطّع لأن العمل هكذا."
      }
    },
    {
      id: "t5l5q06", type: "tf", level: "hard", topics: ["t5-resolution-steps", "t5-two-one-to-many"],
      q: {
        en: "Resolving the M:M makes the half next to <code>STUDENT</code> solid, because once <code>ENROLLMENT</code> exists every student must have at least one enrollment.",
        ar: "حلّ علاقة ‎M:M يجعل النصف المجاور لـ <code>STUDENT</code> متّصلًا، لأنه بعد وجود <code>ENROLLMENT</code> يجب أن يكون لكل طالب تسجيل واحد على الأقل."
      },
      truth: false,
      hint: {
        en: "Which halves does the recipe make solid, and what does it say about the others?",
        ar: "أيّ الأنصاف تجعلها الوصفة متّصلة، وماذا تقول عن البقية؟"
      },
      explain: {
        en: "False. The resolution is a change of structure, not of business rules. Only the halves at the intersection entity become solid, because an enrollment with no student is meaningless. Each parent's half keeps the optionality it had in the M:M: a new student may still have no subject, so Yousef, with no enrollment, is legal.",
        ar: "خطأ. الحلّ تغيير في البنية، لا في قواعد العمل. الأنصاف المجاورة لكيان التقاطع وحدها تصير متّصلة، لأن تسجيلًا بلا طالب لا معنى له. ونصف كل أب يحتفظ بالإلزامية (optionality) التي كانت له في ‎M:M: فقد لا يكون للطالب الجديد مادّة بعد، وYousef بلا تسجيل حالة مشروعة."
      }
    },

    /* ---------------------------------------------------- 2b · the steps */
    {
      id: "t5l5q07", type: "order", level: "medium", topics: ["t5-resolution-steps"],
      q: {
        en: "Put the lesson's recipe for resolving an M:M in order.",
        ar: "رتّب وصفة الدرس لحلّ علاقة ‎M:M."
      },
      items: [
        { en: "Name the pair: decide what one student-in-a-subject is to the business", ar: "سمِّ الزوج: حدّد ما يعنيه للعمل طالب واحد في مادّة واحدة" },
        { en: "Remove the M:M line and draw the new entity between the two", ar: "احذف خطّ ‎M:M وارسم الكيان الجديد بين الكيانين" },
        { en: "Draw two lines with the crow's foot at the new entity and a single toe at each original entity", ar: "ارسم خطّين، رِجل الغراب فيهما عند الكيان الجديد وإصبع واحدة عند كل كيان أصلي" },
        { en: "Set the halves: solid at the new entity, the parents' halves as they were", ar: "اضبط الأنصاف: متّصل عند الكيان الجديد، وأنصاف الأبوين كما كانت" },
        { en: "Name both ends of both lines and read the four ERDish sentences", ar: "سمِّ طرفَي الخطّين كليهما واقرأ جمل ERDish الأربع" },
        { en: "Move the hidden attributes into the new entity", ar: "انقل الخصائص المخفية إلى الكيان الجديد" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "You cannot draw a box before you know what it is called, and you cannot set a half on a line you have not drawn.",
        ar: "لا يمكنك رسم صندوق قبل أن تعرف اسمه، ولا ضبط نصف على خطّ لم ترسمه."
      },
      explain: {
        en: "Name, replace, move the feet, set the halves, name and read, then move the attributes in. Each step needs the one before it: the halves sit on lines that must exist, and the sentences can only be read once the ends are named. Moving the attributes last lets the pair test check them against a box whose meaning is already fixed.",
        ar: "سمِّ، استبدل، انقل الأرجل، اضبط الأنصاف، سمِّ واقرأ، ثم انقل الخصائص. كل خطوة تحتاج إلى سابقتها: فالأنصاف تقع على خطوط يجب أن توجد أوّلًا، والجمل لا تُقرأ إلا بعد تسمية الأطراف. ونقل الخصائص في الآخر يجعل اختبار الزوج يفحصها على صندوق ثبت معناه."
      }
    },
    {
      id: "t5l5q08", type: "fill", level: "easy", topics: ["t5-intersection-sentences", "t5-enrollment"],
      q: {
        en: "Write the slides' four sentences for the resolved school model. Fill each blank.",
        ar: "اكتب جمل الشرائح الأربع لنموذج المدرسة بعد الحلّ. املأ كل فراغ."
      },
      lang: "erdish",
      code: "Each STUDENT ____1____ enrol for one or more ENROLLMENTs.\nEach ENROLLMENT ____2____ be for ____3____ STUDENT.\nEach ENROLLMENT must be for one and only one SUBJECT.\nEach SUBJECT may be the subject of ____4____ ENROLLMENTs.",
      blanks: [
        { accept: ["may"], label: { en: "1", ar: "1" } },
        { accept: ["must"], label: { en: "2", ar: "2" } },
        { accept: ["one and only one"], label: { en: "3", ar: "3" }, wide: true },
        { accept: ["one or more"], label: { en: "4", ar: "4" }, wide: true }
      ],
      solution: { en: "1 = may, 2 = must, 3 = one and only one, 4 = one or more.", ar: "1 = may، 2 = must، 3 = one and only one، 4 = one or more." },
      hint: {
        en: "From a parent the sentence keeps the M:M's optionality; from the intersection entity it is always the same pair of words.",
        ar: "من جهة الأب تحتفظ الجملة بإلزامية ‎M:M؛ ومن جهة كيان التقاطع هي دائمًا الكلمتان نفسهما."
      },
      explain: {
        en: "A student <em>may</em> enrol for <em>one or more</em> enrollments — the dashed half and crow's foot are unchanged from the M:M. An enrollment <em>must</em> be for <em>one and only one</em> student — solid half at <code>ENROLLMENT</code>, single toe at <code>STUDENT</code>. Writing \"one or more\" in blank 3 would put the crow's foot back at the parent.",
        ar: "الطالب <em>may</em> يسجّل في <em>one or more</em> تسجيلات، فالنصف المتقطّع ورِجل الغراب كما كانا في ‎M:M. والتسجيل <em>must</em> يكون لـ <em>one and only one</em> طالب: نصف متّصل عند <code>ENROLLMENT</code> وإصبع واحدة عند <code>STUDENT</code>. وكتابة «one or more» في الفراغ 3 تعيد رِجل الغراب إلى الأب."
      }
    },
    {
      id: "t5l5q09", type: "multi", level: "medium", topics: ["t5-intersection-fks", "t5-feet-at-intersection"],
      q: {
        en: "The school model has been resolved with <code>ENROLLMENT</code>. Which statements are true? Choose all that apply.",
        ar: "حُلّ نموذج المدرسة بـ <code>ENROLLMENT</code>. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The <code>enrollments</code> table holds two foreign keys, and both are <code>NOT NULL</code>", ar: "يحمل جدول <code>enrollments</code> مفتاحين أجنبيين، وكلاهما <code>NOT NULL</code>" },
        { en: "<code>students</code> gets a <code>subject_id</code> column so each student can point at their subject", ar: "يُضاف إلى <code>students</code> عمود <code>subject_id</code> ليشير كل طالب إلى مادّته" },
        { en: "Both crow's feet touch <code>ENROLLMENT</code>", ar: "رِجلا الغراب كلتاهما تلمسان <code>ENROLLMENT</code>" },
        { en: "The halves at <code>ENROLLMENT</code> are dashed, since an enrollment may be recorded before its subject is chosen", ar: "النصفان عند <code>ENROLLMENT</code> متقطّعان، فقد يُسجَّل التسجيل قبل اختيار مادّته" },
        { en: "<code>SUBJECT</code> meets a single toe", ar: "يلقى <code>SUBJECT</code> إصبعًا واحدة" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Two 1:Ms with the same child: where does each foreign key go, and can an enrollment exist without either parent?",
        ar: "علاقتا ‎1:M لهما الابن نفسه: أين يذهب كل مفتاح أجنبي، وهل يوجد تسجيل بلا أحد أبويه؟"
      },
      explain: {
        en: "<code>ENROLLMENT</code> is the child of both lines, so it carries both foreign keys and both crow's feet, and each parent meets a single toe. Both keys are <code>NOT NULL</code> because the halves at <code>ENROLLMENT</code> are solid — an enrollment with no subject is exactly the ambiguity the box ends. A <code>subject_id</code> in <code>students</code> is Lesson 4's squeezed M:M: one subject per student.",
        ar: "<code>ENROLLMENT</code> هو الابن في الخطّين، فيحمل المفتاحين الأجنبيين ورِجلَي الغراب، ويلقى كل أب إصبعًا واحدة. والمفتاحان <code>NOT NULL</code> لأن النصفين عند <code>ENROLLMENT</code> متّصلان، فتسجيل بلا مادّة هو الغموض نفسه الذي جاء الصندوق لينهيه. أمّا <code>subject_id</code> في <code>students</code> فهو ‎M:M المحشورة في الدرس 4: مادّة واحدة لكل طالب."
      }
    },
    {
      id: "t5l5q10", type: "trace", level: "hard", topics: ["t5-intersection-fks", "t5-intersection-table"],
      q: {
        en: "The lesson's three tables: subjects 1 Maths, 2 Physics, 3 Arabic; Yousef (1004) has no enrollment. Each statement runs on its own. What does the last query return?",
        ar: "جداول الدرس الثلاثة: المواد 1 Maths و2 Physics و3 Arabic؛ وليس لـ Yousef (1004) أيّ تسجيل. تُنفَّذ كل جملة وحدها. ماذا يُعيد الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO enrollments VALUES (1004, 3, NULL);\nINSERT INTO enrollments VALUES (1004, 7, 'B');\n\nSELECT student_id, subject_id, grade\nFROM enrollments\nWHERE student_id = 1004;",
      options: [
        { en: "One row, 1004 | 3 | NULL — the second insert is refused because subject 7 does not exist", ar: "صفّ واحد، 1004 | 3 | NULL — تُرفض الإضافة الثانية لأن المادّة 7 غير موجودة" },
        { en: "No rows — the first insert is refused because grade is NULL", ar: "لا صفوف — تُرفض الإضافة الأولى لأن grade قيمتها NULL" },
        { en: "Two rows, 1004 | 3 | NULL and 1004 | 7 | B", ar: "صفّان: 1004 | 3 | NULL و1004 | 7 | B" },
        { en: "One row, 1004 | 7 | B — the second insert replaces the first, since a student has one enrollment", ar: "صفّ واحد، 1004 | 7 | B — تحلّ الإضافة الثانية محلّ الأولى لأن للطالب تسجيلًا واحدًا" }
      ],
      answer: 0,
      solution: {
        code: "Foreign key \"7\" not found in table \"subjects\"\n\nstudent_id | subject_id | grade\n1004       | 3          | NULL",
        en: "The first insert succeeds; the second fails on the foreign key to subjects.",
        ar: "تنجح الإضافة الأولى؛ وتفشل الثانية على المفتاح الأجنبي إلى subjects."
      },
      hint: {
        en: "Which columns are NOT NULL, and what does each foreign key check?",
        ar: "أيّ الأعمدة NOT NULL، وماذا يفحص كل مفتاح أجنبي؟"
      },
      explain: {
        en: "<code>grade</code> is nullable (<code>o Grade</code>), so Yousef can be enrolled in Arabic before he has a grade. <code>subject_id</code> references <code>subjects</code>, and there is no subject 7, so the second row is refused. Nothing limits a student to one enrollment: had subject 7 existed, both rows would be there.",
        ar: "العمود <code>grade</code> يقبل NULL (<code>o Grade</code>)، فيمكن تسجيل Yousef في Arabic قبل أن تكون له درجة. و<code>subject_id</code> يشير إلى <code>subjects</code>، ولا توجد مادّة 7، فيُرفض الصفّ الثاني. ولا شيء يقصر الطالب على تسجيل واحد: لو وُجدت المادّة 7 لكان الصفّان موجودين."
      }
    },

    /* ---------------------------------------------------- 3 · where the attributes go */
    {
      id: "t5l5q11", type: "contrast", level: "medium", topics: ["t5-intersection-attribute"],
      q: {
        en: "Now that <code>ENROLLMENT</code> exists, sort each fact: does it move into the intersection entity, or stay in <code>STUDENT</code> or <code>SUBJECT</code>?",
        ar: "بعد أن وُجد <code>ENROLLMENT</code>، صنّف كل حقيقة: هل تنتقل إلى كيان التقاطع، أم تبقى في <code>STUDENT</code> أو <code>SUBJECT</code>؟"
      },
      concepts: [
        { en: "Moves into ENROLLMENT", ar: "تنتقل إلى ENROLLMENT" },
        { en: "Stays in a parent", ar: "تبقى في أحد الأبوين" }
      ],
      rows: [
        { s: { en: "<code>Grade</code>", ar: "<code>Grade</code>" }, a: 0 },
        { s: { en: "<code>Phone</code> of a student", ar: "<code>Phone</code> للطالب" }, a: 1 },
        { s: { en: "<code>Enrolment Date</code> — the day a student joined a subject", ar: "<code>Enrolment Date</code> — اليوم الذي التحق فيه طالب بمادّة" }, a: 0 },
        { s: { en: "<code>Credit Hours</code> of a subject", ar: "<code>Credit Hours</code> للمادّة" }, a: 1 },
        { s: { en: "<code>Absences</code> — a student's absences in one subject", ar: "<code>Absences</code> — غيابات طالب في مادّة واحدة" }, a: 0 },
        { s: { en: "<code>Last Name</code> of a student", ar: "<code>Last Name</code> للطالب" }, a: 1 }
      ],
      hint: {
        en: "Ask the pair test: one value per student, per subject, or per student in a subject?",
        ar: "اسأل اختبار الزوج: قيمة واحدة لكل طالب، أم لكل مادّة، أم لكل طالب في مادّة؟"
      },
      explain: {
        en: "<code>Grade</code>, <code>Enrolment Date</code> and <code>Absences</code> each have one value per student in a subject: intersection attributes, so they go into <code>ENROLLMENT</code>. <code>Phone</code> and <code>Last Name</code> are one per student, <code>Credit Hours</code> one per subject. The tempting mistake is to move everything into the new box; a per-parent fact stored there repeats in every enrollment.",
        ar: "لكلّ من <code>Grade</code> و<code>Enrolment Date</code> و<code>Absences</code> قيمة واحدة لكل طالب في مادّة: إنها خصائص تقاطع (intersection attributes)، فتنتقل إلى <code>ENROLLMENT</code>. أمّا <code>Phone</code> و<code>Last Name</code> فواحدة لكل طالب، و<code>Credit Hours</code> واحدة لكل مادّة. والخطأ المغري هو نقل كل شيء إلى الصندوق الجديد؛ فالحقيقة التي تخصّ أبًا تتكرّر حينها في كل تسجيل."
      }
    },
    {
      id: "t5l5q12", type: "mcq", level: "medium", topics: ["t5-intersection-attribute", "t5-enrollment"],
      q: {
        en: "A designer reasons, \"every attribute should live in the newest box\", and moves <code>Credit Hours</code> from <code>SUBJECT</code> into <code>ENROLLMENT</code>. Maths counts 4 hours. What goes wrong?",
        ar: "يقول مصمّم: «كل خاصية يجب أن تسكن أحدث صندوق»، فينقل <code>Credit Hours</code> من <code>SUBJECT</code> إلى <code>ENROLLMENT</code>. وMaths تُحتسب 4 ساعات. ما الذي يفسد؟"
      },
      options: [
        { en: "Nothing — the hours describe the pair, so ENROLLMENT is their home", ar: "لا شيء — الساعات تصف الزوج، فبيتها ENROLLMENT" },
        { en: "Maths's 4 repeats in every Maths enrollment, and changing it means updating them all; a subject with no students has no hours at all", ar: "يتكرّر الرقم 4 لـ Maths في كل تسجيل لها، وتغييره يعني تحديثها كلها؛ والمادّة التي لا طلاب فيها لا ساعات لها أصلًا" },
        { en: "The enrollments table can no longer hold its foreign key to subjects", ar: "لم يعد جدول enrollments قادرًا على حمل مفتاحه الأجنبي إلى subjects" },
        { en: "Grade has to move back into STUDENT to make room", ar: "يجب أن تعود Grade إلى STUDENT لتفسح المكان" }
      ],
      answer: 1,
      hint: {
        en: "Does Maths count different hours for Sara and for Omar?",
        ar: "هل تُحتسب Maths بساعات مختلفة لـ Sara ولـ Omar؟"
      },
      explain: {
        en: "<code>Credit Hours</code> is one value per subject, so it belongs to <code>SUBJECT</code>. Stored per enrollment, the same 4 repeats for Sara and Omar — Chapter 2's update anomaly — and a new subject with nobody enrolled cannot record its hours. Only attributes that describe one pair move in; everything else stays where it was.",
        ar: "<code>Credit Hours</code> قيمة واحدة لكل مادّة، فهي تنتمي إلى <code>SUBJECT</code>. وإن خُزّنت لكل تسجيل تكرّر الرقم 4 نفسه لـ Sara وOmar، وهذا شذوذ التحديث (update anomaly) من الفصل الثاني، ولا تستطيع مادّة جديدة لم يسجّل فيها أحد أن تحفظ ساعاتها. لا ينتقل إلا ما يصف زوجًا واحدًا؛ وكل ما عداه يبقى مكانه."
      }
    },
    {
      id: "t5l5q13", type: "tf", level: "easy", topics: ["t5-grade-optional", "t5-intersection-attribute"],
      q: {
        en: "Every attribute of an intersection entity is optional, which is why the slides draw <code>o Grade</code> in <code>ENROLLMENT</code>.",
        ar: "كل خصائص كيان التقاطع اختيارية، ولهذا ترسم الشرائح <code>o Grade</code> في <code>ENROLLMENT</code>."
      },
      truth: false,
      hint: {
        en: "Look at the other attribute in ENROLLMENT that is known on the first day.",
        ar: "انظر إلى الخاصية الأخرى في ENROLLMENT التي تُعرف في اليوم الأوّل."
      },
      explain: {
        en: "False. <code>Grade</code> is optional because the enrollment exists from its first day while the grade arrives at the end of term. <code>Enrolment Date</code> is known on that first day, so it is <code>*</code>, mandatory. Each attribute's symbol is decided by the business, wherever the attribute lives.",
        ar: "خطأ. <code>Grade</code> اختيارية لأن التسجيل يوجد من يومه الأوّل بينما تصل الدرجة في آخر الفصل. أمّا <code>Enrolment Date</code> فتُعرف في ذلك اليوم الأوّل، فهي <code>*</code> إلزامية. ورمز كل خاصية يقرّره العمل، أينما سكنت الخاصية."
      }
    },
    {
      id: "t5l5q14", type: "output", level: "medium", topics: ["t5-intersection-attribute", "t5-intersection-table"],
      q: {
        en: "Start from the lesson's <code>enrollments</code>: (1001, 1, 'A'), (1001, 2, NULL), (1002, 1, 'C'), (1003, 2, 'A'), (1003, 3, 'A'). Sara's Physics B arrives. In Lesson 4's <code>students.grade</code> this overwrote her Maths A. What does the query return now?",
        ar: "ابدأ من جدول <code>enrollments</code> في الدرس: (1001, 1, 'A') و(1001, 2, NULL) و(1002, 1, 'C') و(1003, 2, 'A') و(1003, 3, 'A'). تصل درجة Sara في Physics وهي B. في <code>students.grade</code> في الدرس 4 كتبت هذه فوق A في Maths. ماذا يُعيد الاستعلام الآن؟"
      },
      lang: "sql",
      code: "UPDATE enrollments SET grade = 'B'\nWHERE student_id = 1001 AND subject_id = 2;\n\nSELECT COUNT(*) AS a_grades\nFROM enrollments\nWHERE grade = 'A';",
      blanks: [
        { accept: ["3"], label: { en: "a_grades", ar: "a_grades" } }
      ],
      solution: { code: "a_grades\n3", en: "3 — Sara's Maths, Lina's Physics and Lina's Arabic.", ar: "3 — Maths لـ Sara، وPhysics وArabic لـ Lina." },
      hint: {
        en: "The update names both a student and a subject. Which row does it touch?",
        ar: "التحديث يسمّي طالبًا ومادّة معًا. أيّ صفّ يلمس؟"
      },
      explain: {
        en: "3. The <code>WHERE</code> names the pair, so only Sara's Physics row changes, from empty to B; her Maths A survives. With <code>Grade</code> in <code>ENROLLMENT</code>, each grade sits beside exactly one student and one subject, so a new grade can never overwrite another. Someone expecting Lesson 4's behaviour would answer 2.",
        ar: "3. جملة <code>WHERE</code> تسمّي الزوج، فلا يتغيّر إلا صفّ Physics لـ Sara، من فارغ إلى B؛ وتبقى A في Maths. وحين تكون <code>Grade</code> في <code>ENROLLMENT</code> تجلس كل درجة بجانب طالب واحد ومادّة واحدة بالضبط، فلا تكتب درجة جديدة فوق أخرى أبدًا. ومن يتوقّع سلوك الدرس 4 يجيب 2."
      }
    },

    /* ---------------------------------------------------- 4 & 5 · VIEWING RECORD, CLEANING SCHEDULE */
    {
      id: "t5l5q15", type: "match", level: "easy", topics: ["t5-viewing-record", "t5-cleaning-schedule", "t5-intersection-attribute"],
      q: {
        en: "After the three resolutions in the lesson, match each fact with the entity it lives in.",
        ar: "بعد الحلول الثلاثة في الدرس، صِل كل حقيقة بالكيان الذي تسكنه."
      },
      leftHead: { en: "Fact", ar: "الحقيقة" },
      rightHead: { en: "Lives in", ar: "تسكن في" },
      pairs: [
        { l: { en: "<code>Grade</code> — one student in one subject", ar: "<code>Grade</code> — طالب واحد في مادّة واحدة" },
          r: { en: "<code>ENROLLMENT</code>", ar: "<code>ENROLLMENT</code>" } },
        { l: { en: "<code>Rating</code> — one person's score for one show", ar: "<code>Rating</code> — تقييم شخص واحد لبرنامج واحد" },
          r: { en: "<code>VIEWING RECORD</code>", ar: "<code>VIEWING RECORD</code>" } },
        { l: { en: "<code>Price</code> — what one company charges for one service", ar: "<code>Price</code> — ما تتقاضاه شركة واحدة عن خدمة واحدة" },
          r: { en: "<code>CLEANING SCHEDULE</code>", ar: "<code>CLEANING SCHEDULE</code>" } },
        { l: { en: "<code>Duration Of Show</code>", ar: "<code>Duration Of Show</code>" },
          r: { en: "<code>TV SHOW</code>", ar: "<code>TV SHOW</code>" } }
      ],
      hint: {
        en: "One value per what? A pair goes to the box in the middle.",
        ar: "قيمة واحدة لكل ماذا؟ ما يخصّ زوجًا يذهب إلى الصندوق الأوسط."
      },
      explain: {
        en: "<code>Grade</code>, <code>Rating</code> and <code>Price</code> each describe one pair, so each lives in the intersection entity of its model. <code>Duration Of Show</code> is the same for every viewer, so it stays with <code>TV SHOW</code> — the reminder that a resolution moves only the pair's attributes.",
        ar: "كلّ من <code>Grade</code> و<code>Rating</code> و<code>Price</code> يصف زوجًا واحدًا، فيسكن كيان التقاطع في نموذجه. أمّا <code>Duration Of Show</code> فهي واحدة لكل المشاهدين، فتبقى مع <code>TV SHOW</code>، وهذا تذكير بأن الحلّ لا ينقل إلا خصائص الزوج."
      }
    },
    {
      id: "t5l5q16", type: "complete", level: "easy", topics: ["t5-viewing-record", "t5-intersection-sentences"],
      q: {
        en: "Version 2 of the TV evolve block, read in ERDish. Complete the missing sentence.",
        ar: "الإصدار 2 من كتلة تطوّر التلفاز، مقروءًا بلغة ERDish. أكمل الجملة الناقصة."
      },
      lang: "erdish",
      code: "Each TV SHOW may be on one or more VIEWING RECORDs.\nEach VIEWING RECORD must be for one and only one TV SHOW.\n____\nEach PERSON may be on one or more VIEWING RECORDs.",
      options: [
        { code: "Each VIEWING RECORD may be for one or more PERSONs." },
        { code: "Each VIEWING RECORD must be for one or more PERSONs." },
        { code: "Each VIEWING RECORD may be for one and only one PERSON." },
        { code: "Each VIEWING RECORD must be for one and only one PERSON." }
      ],
      answer: 3,
      hint: {
        en: "The line to PERSON is drawn exactly like the line to TV SHOW.",
        ar: "الخطّ إلى PERSON مرسوم تمامًا مثل الخطّ إلى TV SHOW."
      },
      explain: {
        en: "From the intersection entity's side the sentence is always <em>must</em> and <em>one and only one</em>: solid half at <code>VIEWING RECORD</code>, single toe at <code>PERSON</code>. \"One or more PERSONs\" puts the crow's foot at the parent, so one record could hold several people and its Rating would mean nothing. <em>may</em> would allow a viewing by nobody.",
        ar: "من جهة كيان التقاطع تكون الجملة دائمًا <em>must</em> و<em>one and only one</em>: نصف متّصل عند <code>VIEWING RECORD</code> وإصبع واحدة عند <code>PERSON</code>. أمّا «one or more PERSONs» فتضع رِجل الغراب عند الأب، فيحمل السجلّ الواحد أشخاصًا عدّة ولا يعود لـ Rating معنى. و<em>may</em> تسمح بمشاهدة بلا مشاهد."
      }
    },
    {
      id: "t5l5q17", type: "trace", level: "medium", topics: ["t5-viewing-record", "t5-intersection-table"],
      q: {
        en: "The lesson's <code>viewing_records</code>: Huda rated News 4 and Drama 2, Ahmad rated News 5, Mona rated Drama 4. Mona (person 3) now rates News (show 1) a 3. What is the News row of the query?",
        ar: "جدول <code>viewing_records</code> في الدرس: قيّمت Huda برنامج News بـ 4 وDrama بـ 2، وقيّم Ahmad برنامج News بـ 5، وقيّمت Mona برنامج Drama بـ 4. والآن تقيّم Mona (الشخص 3) برنامج News (البرنامج 1) بـ 3. ما صفّ News في الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO viewing_records VALUES (1, 3, 3);\n\nSELECT t.title, COUNT(*) AS viewers, AVG(v.rating) AS avg_rating\nFROM viewing_records v\nJOIN tv_shows t ON t.show_id = v.show_id\nGROUP BY t.title\nORDER BY t.title;",
      options: [
        { en: "News | 3 | 4", ar: "News | 3 | 4" },
        { en: "News | 2 | 4.5", ar: "News | 2 | 4.5" },
        { en: "News | 1 | 3 — Mona's new rating replaces the old ones", ar: "News | 1 | 3 — يحلّ تقييم Mona الجديد محلّ القديم" },
        { en: "News | 3 | 3.5", ar: "News | 3 | 3.5" }
      ],
      answer: 0,
      solution: {
        code: "title | viewers | avg_rating\nDrama | 2       | 3\nNews  | 3       | 4",
        en: "Three viewing records for News: (4 + 5 + 3) / 3 = 4.",
        ar: "ثلاثة سجلّات مشاهدة لـ News: ‎(4 + 5 + 3) / 3 = 4."
      },
      hint: {
        en: "Mona's new viewing is one more row. Which ratings does News now have?",
        ar: "مشاهدة Mona الجديدة صفّ إضافي. ما تقييمات News الآن؟"
      },
      explain: {
        en: "Mona watching News is a new pair, so it is a new viewing record; her Drama record is untouched. News has 4, 5 and 3: three viewers, average 4. In Lesson 4's <code>persons.ratings</code> string this needed string surgery; with one row per pair it is a plain <code>GROUP BY</code>.",
        ar: "مشاهدة Mona لـ News زوج جديد، فهي سجلّ مشاهدة جديد، ولا يُمسّ سجلّها لـ Drama. لـ News الآن 4 و5 و3: ثلاثة مشاهدين ومتوسّط 4. وفي نصّ <code>persons.ratings</code> في الدرس 4 احتاج هذا إلى تقطيع النصوص؛ أمّا مع صفّ لكل زوج فهو <code>GROUP BY</code> بسيط."
      }
    },
    {
      id: "t5l5q18", type: "error", level: "medium", topics: ["t5-cleaning-schedule", "t5-feet-at-intersection"],
      q: {
        en: "A student resolved the cleaning agency's M:M and wrote the model as text. Which line breaks the resolution?",
        ar: "حلّ طالب علاقة ‎M:M في شركة التنظيف وكتب النموذج نصًّا. أيّ سطر يكسر الحلّ؟"
      },
      lang: "text",
      code: "1  CLEANING COMPANY   # id  * name\n2  CLEANING SERVICE   # id  * name\n3  CLEANING SCHEDULE  * start date  * price\n4  Each CLEANING COMPANY may be on one or more CLEANING SCHEDULEs.\n5  Each CLEANING SCHEDULE must be for one and only one CLEANING COMPANY.\n6  Each CLEANING SCHEDULE may be for one and only one CLEANING SERVICE.\n7  Each CLEANING SERVICE may be on one or more CLEANING SCHEDULEs.",
      answer: 6,
      solution: {
        code: "6  Each CLEANING SCHEDULE must be for one and only one CLEANING SERVICE.",
        en: "The half at CLEANING SCHEDULE must be solid.",
        ar: "النصف المجاور لـ CLEANING SCHEDULE يجب أن يكون متّصلًا."
      },
      hint: {
        en: "From the intersection entity's side, both sentences should look alike.",
        ar: "من جهة كيان التقاطع، يجب أن تتشابه الجملتان."
      },
      explain: {
        en: "Line 6 draws the half at <code>CLEANING SCHEDULE</code> dashed: a schedule with no service, whose <code>price</code> is the price of nothing. Both halves at an intersection entity are solid, as line 5 has it. Line 3 has no <code>#</code>, but that matches the slides: the UID is the question the lesson leaves open.",
        ar: "السطر 6 يرسم النصف المجاور لـ <code>CLEANING SCHEDULE</code> متقطّعًا: جدول بلا خدمة، و<code>price</code> فيه سعر لا شيء. والنصفان عند كيان التقاطع متّصلان كلاهما، كما في السطر 5. وليس في السطر 3 علامة <code>#</code>، لكن هذا يوافق الشرائح: المعرّف الفريد (UID) هو السؤال الذي يتركه الدرس مفتوحًا."
      }
    },
    {
      id: "t5l5q19", type: "compare", level: "hard", topics: ["t5-resolved-model", "t5-cleaning-schedule"],
      q: {
        en: "Two resolutions of the cleaning agency's model. Which statement is right?",
        ar: "حلّان لنموذج شركة التنظيف. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "CLEANING COMPANY  1 ---< CLEANING SCHEDULE >--- 1  CLEANING SERVICE\nCLEANING COMPANY  >--- provide / provided by ---<  CLEANING SERVICE\nCLEANING SCHEDULE  * start date  * price",
      codeB: "CLEANING COMPANY  1 ---< CLEANING SCHEDULE >--- 1  CLEANING SERVICE\nCLEANING SCHEDULE  * start date  * price",
      options: [
        { en: "A is better: the direct line is the only place that says which company provides which service", ar: "A أفضل: الخطّ المباشر هو المكان الوحيد الذي يقول أيّ شركة تقدّم أيّ خدمة" },
        { en: "B is better: the M:M is replaced, not supplemented; A's direct line says the same as the path through CLEANING SCHEDULE", ar: "B أفضل: علاقة ‎M:M تُستبدل ولا يُضاف إليها؛ وخطّ A المباشر يقول ما يقوله المسار عبر CLEANING SCHEDULE" },
        { en: "B is better because CLEANING COMPANY and CLEANING SERVICE no longer need to be related at all", ar: "B أفضل لأن CLEANING COMPANY وCLEANING SERVICE لم يعودا بحاجة إلى أيّ ارتباط" },
        { en: "They are equivalent; the direct line can stay as long as it is drawn dashed", ar: "هما متكافئان؛ ويمكن أن يبقى الخطّ المباشر ما دام مرسومًا متقطّعًا" }
      ],
      answer: 1,
      hint: {
        en: "Read A's second line and then the path through the middle box. Do they say different things?",
        ar: "اقرأ السطر الثاني في A ثم المسار عبر الصندوق الأوسط. هل يقولان شيئين مختلفين؟"
      },
      explain: {
        en: "In a resolved model every M:M has disappeared. Which company provides which service is still recorded — by the schedules between them — so A's direct M:M repeats that fact, a redundant relationship, and it is still an M:M no table can hold. B does not drop the link between company and service; it reads it through <code>CLEANING SCHEDULE</code>.",
        ar: "في النموذج المحلول تختفي كل علاقات ‎M:M. وما زال النموذج يسجّل أيّ شركة تقدّم أيّ خدمة، عبر الجداول بينهما، فخطّ A المباشر يكرّر هذه الحقيقة، وهي علاقة زائدة، وهو فوق ذلك ‎M:M لا يتّسع لها جدول. ولا يُسقط B الربط بين الشركة والخدمة؛ بل يقرؤه عبر <code>CLEANING SCHEDULE</code>."
      }
    },
    {
      id: "t5l5q20", type: "multi", level: "hard", topics: ["t5-cleaning-schedule", "t5-resolution-steps"],
      q: {
        en: "In the cleaning agency's first version, each company <em>may</em> provide one or more services and each service <em>may be</em> provided by one or more companies. After resolving it with <code>CLEANING SCHEDULE</code>, which statements are true? Choose all that apply.",
        ar: "في النسخة الأولى لشركة التنظيف، كل شركة <em>may</em> تقدّم خدمة أو أكثر، وكل خدمة <em>may be</em> تقدّمها شركة أو أكثر. بعد حلّها بـ <code>CLEANING SCHEDULE</code>، أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "One instance of CLEANING SCHEDULE is one company offering one service", ar: "النسخة الواحدة من CLEANING SCHEDULE هي شركة واحدة تقدّم خدمة واحدة" },
        { en: "The half next to CLEANING COMPANY stays dashed: a new company may offer nothing yet", ar: "يبقى النصف المجاور لـ CLEANING COMPANY متقطّعًا: فقد لا تقدّم الشركة الجديدة شيئًا بعد" },
        { en: "The company's Name moves into CLEANING SCHEDULE, next to Price", ar: "ينتقل Name الخاصّ بالشركة إلى CLEANING SCHEDULE، بجانب Price" },
        { en: "CLEANING COMPANY now meets a crow's foot from each of the two new lines", ar: "يلقى CLEANING COMPANY الآن رِجل غراب من كلّ من الخطّين الجديدين" },
        { en: "The schedules table carries a foreign key to companies and one to services, both NOT NULL", ar: "يحمل جدول الجداول مفتاحًا أجنبيًا إلى الشركات وآخر إلى الخدمات، وكلاهما NOT NULL" }
      ],
      answer: [0, 1, 4],
      hint: {
        en: "Apply the recipe: what is one instance, which halves change, and how many new lines touch each parent?",
        ar: "طبّق الوصفة: ما النسخة الواحدة، وأيّ الأنصاف يتغيّر، وكم خطًّا جديدًا يلمس كل أب؟"
      },
      explain: {
        en: "The recipe gives one schedule per company-service pair, solid halves and both foreign keys at the schedule, and leaves the parents' optionality alone, so the company half stays dashed. Only one new line touches <code>CLEANING COMPANY</code>, and it meets a single toe. <code>Name</code> is one value per company, so it does not move — only <code>Start Date</code> and <code>Price</code> do.",
        ar: "تعطي الوصفة جدولًا واحدًا لكل زوج شركة وخدمة، وأنصافًا متّصلة ومفتاحين أجنبيين عند الجدول، وتترك إلزامية الأبوين كما هي، فيبقى نصف الشركة متقطّعًا. ولا يلمس <code>CLEANING COMPANY</code> إلا خطّ جديد واحد، ويلقاه بإصبع واحدة. و<code>Name</code> قيمة واحدة لكل شركة، فلا ينتقل؛ لا ينتقل إلا <code>Start Date</code> و<code>Price</code>."
      }
    },

    /* ---------------------------------------------------- s3 · one question still open */
    {
      id: "t5l5q21", type: "mcq", level: "hard", topics: ["t5-intersection-no-uid", "t5-intersection-table"],
      q: {
        en: "Sara has Maths A and Physics B. A clerk runs <code>INSERT INTO enrollments VALUES (1001, 1, 'D');</code> and the office then asks for Sara's grade in Maths. What does the database give back, and why?",
        ar: "لـ Sara درجة A في Maths وB في Physics. ينفّذ موظّف <code>INSERT INTO enrollments VALUES (1001, 1, 'D');</code> ثم يسأل المكتب عن درجة Sara في Maths. ماذا تعطي قاعدة البيانات، ولماذا؟"
      },
      options: [
        { en: "Only A — the insert is refused because Sara is already enrolled in Maths", ar: "A فقط — تُرفض الإضافة لأن Sara مسجّلة في Maths مسبقًا" },
        { en: "Only D — the new row replaces the old one for the same pair", ar: "D فقط — يحلّ الصفّ الجديد محلّ القديم للزوج نفسه" },
        { en: "Nothing — the insert breaks the foreign key to students, so the table is left unchanged", ar: "لا شيء — تكسر الإضافة المفتاح الأجنبي إلى students، فيبقى الجدول كما هو" },
        { en: "Two rows, A and D — ENROLLMENT has no UID yet, so nothing stops the same pair being recorded twice", ar: "صفّان، A وD — ليس لـ ENROLLMENT معرّف فريد بعد، فلا شيء يمنع تسجيل الزوج نفسه مرّتين" }
      ],
      answer: 3,
      solution: {
        code: "grade\nA\nD",
        en: "The insert succeeds; the Maths query returns both grades.",
        ar: "تنجح الإضافة؛ ويُعيد استعلام Maths الدرجتين."
      },
      hint: {
        en: "Student 1001 and subject 1 both exist. Which rule would say one pair is one enrollment?",
        ar: "الطالب 1001 والمادّة 1 موجودان كلاهما. أيّ قاعدة ستقول إن الزوج الواحد تسجيل واحد؟"
      },
      explain: {
        en: "The lines are right and both foreign keys are satisfied, so the row goes in, and Sara now has two Maths grades with nothing to say which is real. Nothing replaces a row on insert, and no rule yet refuses a repeated pair: every intersection entity in this lesson has no <code>#</code>. Giving <code>ENROLLMENT</code> its UID is Lesson 6.",
        ar: "الخطوط صحيحة والمفتاحان الأجنبيان متحقّقان، فيدخل الصفّ، ويصير لـ Sara درجتان في Maths دون ما يقول أيّهما الحقيقية. لا شيء يستبدل صفًّا عند الإضافة، ولا قاعدة بعد ترفض تكرار الزوج: فلا علامة <code>#</code> في أيّ كيان تقاطع في هذا الدرس. وإعطاء <code>ENROLLMENT</code> معرّفه الفريد (UID) موضوع الدرس 6."
      }
    },

    /* ---------------------------------------------------- SQL: building and reading the box */
    {
      id: "t5l5q22", type: "ordercode", level: "medium", topics: ["t5-intersection-fks", "t5-intersection-table"],
      q: {
        en: "Build the resolved school model and read Sara's grades, so that the final listing shows her Physics B. Put the statements in an order that runs.",
        ar: "ابنِ نموذج المدرسة بعد الحلّ واقرأ درجات Sara، بحيث تُظهر القائمة الأخيرة درجتها B في Physics. رتّب الجمل ترتيبًا يعمل."
      },
      items: [
        { code: "CREATE TABLE students (student_id NUMBER PRIMARY KEY,\n  first_name VARCHAR(20) NOT NULL);\nCREATE TABLE subjects (subject_id NUMBER PRIMARY KEY,\n  name VARCHAR(20) NOT NULL);\nINSERT INTO students VALUES (1001, 'Sara');\nINSERT INTO subjects VALUES (1, 'Maths'), (2, 'Physics');" },
        { code: "CREATE TABLE enrollments (\n  student_id NUMBER NOT NULL REFERENCES students(student_id),\n  subject_id NUMBER NOT NULL REFERENCES subjects(subject_id),\n  grade VARCHAR(2));" },
        { code: "INSERT INTO enrollments VALUES (1001, 1, 'A'), (1001, 2, NULL);" },
        { code: "UPDATE enrollments SET grade = 'B'\nWHERE student_id = 1001 AND subject_id = 2;" },
        { code: "SELECT s.first_name, j.name, e.grade\nFROM enrollments e\nJOIN students s ON s.student_id = e.student_id\nJOIN subjects j ON j.subject_id = e.subject_id;" }
      ],
      answer: [0, 1, 2, 3, 4],
      solution: {
        code: "first_name | name    | grade\nSara       | Maths   | A\nSara       | Physics | B",
        en: "Parents, then the intersection table, then its rows, then the grade, then the join.",
        ar: "الأبوان، ثم جدول التقاطع، ثم صفوفه، ثم الدرجة، ثم الربط."
      },
      hint: {
        en: "A foreign key can only reference a table that exists, and a row can only reference a parent row that exists.",
        ar: "لا يشير المفتاح الأجنبي إلا إلى جدول موجود، ولا يشير الصفّ إلا إلى صفّ أب موجود."
      },
      explain: {
        en: "<code>enrollments</code> is the child of both tables, so both parents and their rows come first; its <code>REFERENCES</code> clauses fail otherwise, and so would an enrollment for a student who does not exist. The update needs the Physics row to be there, and the join is last so that it shows the B.",
        ar: "<code>enrollments</code> ابن للجدولين، فيأتي الأبوان وصفوفهما أوّلًا؛ وإلا فشلت جمل <code>REFERENCES</code>، وفشل أيضًا تسجيل طالب غير موجود. والتحديث يحتاج إلى وجود صفّ Physics، والربط في الآخر ليُظهر B."
      }
    },
    {
      id: "t5l5q23", type: "write", level: "hard", topics: ["t5-intersection-table", "t5-intersection-fks"],
      q: {
        en: "Using the lesson's <code>enrollments</code> and <code>subjects</code> tables (after Sara's Physics B), write a query that lists the names of the subjects in which Lina (student 1003) got an A, in alphabetical order.",
        ar: "باستخدام جدولَي <code>enrollments</code> و<code>subjects</code> في الدرس (بعد درجة Sara B في Physics)، اكتب استعلامًا يعرض أسماء المواد التي نالت فيها Lina (الطالبة 1003) درجة A، مرتّبة أبجديًا."
      },
      lang: "sql",
      lines: 5,
      checks: [
        { re: "\\benrollments\\b", flags: "i",
          label: { en: "reads the intersection table, enrollments", ar: "يقرأ جدول التقاطع enrollments" } },
        { re: "JOIN\\s+subjects\\b|FROM\\s+subjects\\b", flags: "i",
          label: { en: "brings in subjects for the names", ar: "يضمّ subjects لأجل الأسماء" } },
        { re: "subject_id\\s*=\\s*\\w+\\.subject_id", flags: "i",
          label: { en: "joins on subject_id", ar: "يربط على subject_id" } },
        { re: "student_id\\s*=\\s*1003", flags: "i",
          label: { en: "filters on student 1003", ar: "يرشّح على الطالبة 1003" } },
        { re: "grade\\s*=\\s*[\"']A[\"']", flags: "i",
          label: { en: "filters on grade = 'A'", ar: "يرشّح على grade = 'A'" } }
      ],
      forbid: [
        { re: "\\bLIKE\\b", flags: "i",
          label: { en: "the subject and the grade are separate columns of one row: no string matching", ar: "المادّة والدرجة عمودان منفصلان في صفّ واحد: لا مطابقة نصوص" } }
      ],
      solution: {
        code: "SELECT j.name\nFROM enrollments e\nJOIN subjects j ON j.subject_id = e.subject_id\nWHERE e.student_id = 1003 AND e.grade = 'A'\nORDER BY j.name;",
        en: "Returns Arabic and Physics. Both conditions sit on the same enrollments row.",
        ar: "يُعيد Arabic وPhysics. والشرطان كلاهما على صفّ واحد من enrollments."
      },
      hint: {
        en: "The grade and the student are in enrollments; the subject's name is in subjects.",
        ar: "الدرجة والطالب في enrollments؛ واسم المادّة في subjects."
      },
      explain: {
        en: "Each enrollments row holds one student, one subject and that pair's grade, so one <code>WHERE</code> filters on student and grade together, and a join on <code>subject_id</code> turns the id into a name. The result is Arabic and Physics. In Lesson 4's single-column grade this question could not be asked.",
        ar: "كل صفّ في enrollments يحمل طالبًا واحدًا ومادّة واحدة ودرجة ذلك الزوج، فجملة <code>WHERE</code> واحدة ترشّح على الطالب والدرجة معًا، والربط على <code>subject_id</code> يحوّل الرقم إلى اسم. والنتيجة Arabic وPhysics. أمّا مع عمود الدرجة الواحد في الدرس 4 فلم يكن هذا السؤال ممكنًا."
      }
    },
    {
      id: "t5l5q24", type: "tf", level: "easy", topics: ["t5-intersection-entity", "t5-two-one-to-many"],
      q: {
        en: "In both of the new one-to-many relationships, the intersection entity is the child.",
        ar: "في كلتا علاقتَي «واحد إلى متعدّد» الجديدتين، كيان التقاطع هو الابن."
      },
      truth: true,
      hint: {
        en: "Where is the crow's foot on each new line, and what does the crow's foot mark?",
        ar: "أين رِجل الغراب في كل خطّ جديد، وعلامَ تدلّ رِجل الغراب؟"
      },
      explain: {
        en: "True. Both crow's feet point at the intersection entity, and the crow's foot marks the child: one student has many enrollments, one subject has many enrollments. That is why both foreign keys live in <code>enrollments</code> and neither parent table gains a column.",
        ar: "صحيح. رِجلا الغراب كلتاهما تشيران إلى كيان التقاطع، ورِجل الغراب تدلّ على الابن: للطالب الواحد تسجيلات كثيرة، وللمادّة الواحدة تسجيلات كثيرة. ولهذا يسكن المفتاحان الأجنبيان في <code>enrollments</code> ولا يكسب أيّ من جدولَي الأبوين عمودًا."
      }
    }
  ]
};
