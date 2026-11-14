/* Question bank: T5 lesson 6 test -- Barred Relationships and Composite UIDs. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-06"] = {
  title: { en: "Test 6 — Barred Relationships and Composite UIDs", ar: "اختبار 6 — العلاقات المقضّبة والمعرّفات المركّبة" },
  intro: {
    en: "24 questions on lesson 6: why ENROLLMENT has no attribute that can identify it, where its UID comes from, where the bar is drawn and what one bar alone does, reading a composite UID in order, unique together but not apart, when a # attribute must join the bars, and the composite primary key that refuses a duplicate pair. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس السادس: لماذا لا يملك ENROLLMENT خاصية تميّزه، ومن أين يأتي معرّفه، وأين يُرسم القضيب وماذا يفعل قضيب واحد وحده، وقراءة المعرّف المركّب بالترتيب، والتفرّد مجتمعًا لا متفرّقًا، ومتى يجب أن تنضمّ خاصية # إلى القضبان، والمفتاح الأساسي المركّب الذي يرفض الزوج المكرّر. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · no UID of its own */
    {
      id: "t5l6q01", type: "tf", level: "easy", topics: ["t5-no-own-uid", "t5-intersection-uid"],
      q: {
        en: "<code>ENROLLMENT</code> has one attribute, <code>o Grade</code>. Because grades repeat and a grade may be missing, nothing inside the <code>ENROLLMENT</code> box can serve as its UID.",
        ar: "لـ <code>ENROLLMENT</code> خاصية واحدة هي <code>o Grade</code>. ولأن الدرجات تتكرّر وقد تغيب الدرجة، فلا شيء داخل صندوق <code>ENROLLMENT</code> يصلح معرّفًا فريدًا (UID) له."
      },
      truth: true,
      hint: {
        en: "A UID must be unique and must always have a value. Check <code>Grade</code> against both.",
        ar: "يجب أن يكون المعرّف الفريد غير مكرّر وأن تكون له قيمة دائمًا. افحص <code>Grade</code> بالشرطين."
      },
      explain: {
        en: "True. Three students hold an A, so <code>Grade</code> repeats, and the <code>o</code> means it is empty until the subject ends. What tells one enrollment from another is outside the box: which student and which subject. <code>Grade</code> still belongs in <code>ENROLLMENT</code>; it just cannot identify it.",
        ar: "صحيح. ثلاثة طلاب يحملون A، فـ <code>Grade</code> تتكرّر، وعلامة <code>o</code> تعني أنها فارغة حتى تنتهي المادّة. وما يميّز تسجيلًا من آخر يقع خارج الصندوق: أيّ طالب وأيّ مادّة. وتبقى <code>Grade</code> في مكانها في <code>ENROLLMENT</code>؛ لكنها لا تميّزه."
      }
    },
    {
      id: "t5l6q02", type: "output", level: "easy", topics: ["t5-no-own-uid", "t5-duplicate-pair"],
      q: {
        en: "The lesson's <code>enrollments</code> table holds (1001, 1, 'A'), (1001, 2, 'B'), (1002, 1, 'C'), (1003, 2, 'A'), (1003, 3, 'A'). What does this query return?",
        ar: "جدول <code>enrollments</code> في الدرس يحمل (1001, 1, 'A') و(1001, 2, 'B') و(1002, 1, 'C') و(1003, 2, 'A') و(1003, 3, 'A'). ماذا يُعيد هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS n\nFROM enrollments\nWHERE grade = 'A';",
      blanks: [
        { accept: ["3"], label: { en: "n", ar: "n" } }
      ],
      solution: { code: "n\n3", en: "3 — Sara in Maths, Lina in Physics, Lina in Arabic.", ar: "3 — Sara في Maths، وLina في Physics، وLina في Arabic." },
      hint: {
        en: "Count the rows whose grade is A. Is that number 1?",
        ar: "عُدّ الصفوف التي درجتها A. هل العدد 1؟"
      },
      explain: {
        en: "3. A value that a UID could use would pick out at most one row; <code>grade = 'A'</code> picks out three. The same test fails for <code>student_id</code> (Sara twice) and <code>subject_id</code> (Maths twice): no single column of <code>enrollments</code> is a key.",
        ar: "3. القيمة التي يصلح بها معرّف فريد تحدّد صفًّا واحدًا على الأكثر؛ أمّا <code>grade = 'A'</code> فتحدّد ثلاثة. والاختبار نفسه يفشل مع <code>student_id</code> (Sara مرّتين) ومع <code>subject_id</code> (Maths مرّتين): لا عمود واحد في <code>enrollments</code> يصلح مفتاحًا."
      }
    },
    {
      id: "t5l6q03", type: "mcq", level: "medium", topics: ["t5-intersection-uid", "t5-originating-relationship"],
      q: {
        en: "According to the slides, where does the UID of <code>ENROLLMENT</code> come from?",
        ar: "بحسب الشرائح، من أين يأتي المعرّف الفريد لـ <code>ENROLLMENT</code>؟"
      },
      options: [
        { en: "From the M:M between STUDENT and SUBJECT that ENROLLMENT replaced", ar: "من علاقة ‎M:M بين STUDENT وSUBJECT التي حلّ ENROLLMENT محلّها" },
        { en: "From STUDENT alone, since an enrollment belongs first to a student", ar: "من STUDENT وحده، لأن التسجيل يخصّ الطالب أوّلًا" },
        { en: "From the two originating relationships: which student, and which subject", ar: "من العلاقتين الأصليتين: أيّ طالب، وأيّ مادّة" },
        { en: "From Grade, once Grade is made mandatory", ar: "من Grade، بعد أن تُجعل إلزامية" }
      ],
      answer: 2,
      hint: {
        en: "The slides' sentence: the UID of the intersection entity often comes from the …",
        ar: "جملة الشرائح: المعرّف الفريد لكيان التقاطع يأتي غالبًا من …"
      },
      explain: {
        en: "The two 1:M lines from <code>STUDENT</code> and <code>SUBJECT</code> are the originating relationships, and together they identify an enrollment. The M:M no longer exists once it is resolved, so it cannot lend anything. STUDENT alone is version 2's half UID, and a mandatory Grade would still repeat.",
        ar: "الخطّان ‎1:M من <code>STUDENT</code> و<code>SUBJECT</code> هما العلاقتان الأصليتان (originating relationships)، ومعًا يميّزان التسجيل. أمّا علاقة ‎M:M فلم تعد موجودة بعد حلّها، فلا تُعير شيئًا. وSTUDENT وحده هو نصف المعرّف في الإصدار 2، وGrade الإلزامية تبقى مكرّرة."
      }
    },

    /* ---------------------------------------------------- 2 · evolve 1: bars */
    {
      id: "t5l6q04", type: "compare", level: "medium", topics: ["t5-uid-as-attributes", "t5-barred-relationship"],
      q: {
        en: "Versions 1 and 3 of the first evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و3 من أوّل كتلة تطوّر، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "ENROLLMENT  # Student ID, # Subject ID, o Grade\nSTUDENT --enrols for / for--> ENROLLMENT   crow's foot at ENROLLMENT\nSUBJECT --subject of / for--> ENROLLMENT   crow's foot at ENROLLMENT",
      codeB: "ENROLLMENT  o Grade\nSTUDENT --enrols for / for--> ENROLLMENT   crow's foot and bar at ENROLLMENT\nSUBJECT --subject of / for--> ENROLLMENT   crow's foot and bar at ENROLLMENT",
      options: [
        { en: "A is better: a UID must be shown with # inside the box, and B has no # at all", ar: "A أفضل: يجب أن يظهر المعرّف بعلامة # داخل الصندوق، وB ليس فيه # إطلاقًا" },
        { en: "B is right: A types into the box, as attributes, the links the two lines already carry; B marks the lines themselves as the UID", ar: "B هو الصحيح: يكتب A داخل الصندوق، خصائصَ، الروابطَ التي يحملها الخطّان أصلًا؛ أمّا B فيعلّم الخطّين نفسيهما معرّفًا" },
        { en: "They say different things: A's UID is student plus subject, B's is student alone", ar: "يقولان شيئين مختلفين: معرّف A هو الطالب مع المادّة، ومعرّف B هو الطالب وحده" },
        { en: "B is right because the bars make Grade part of the UID", ar: "B هو الصحيح لأن القضيبين يجعلان Grade جزءًا من المعرّف" }
      ],
      answer: 1,
      hint: {
        en: "In an ERD, what is a link to another entity — an attribute or a line?",
        ar: "في مخطّط ERD، ما الرابط إلى كيان آخر: خاصية أم خطّ؟"
      },
      explain: {
        en: "Both mean student plus subject, but A says it twice: once as lines, once as <code># Student ID</code> and <code># Subject ID</code>. In an ERD a link is a line, and the column <code>student_id</code> appears only when the line becomes a table. The bar is how a line joins the UID. Grade is <code>o</code> and outside the UID in both.",
        ar: "كلاهما يعني الطالب مع المادّة، لكن A يقوله مرّتين: مرّة خطوطًا ومرّة <code># Student ID</code> و<code># Subject ID</code>. ففي مخطّط ERD الرابط خطّ، ولا يظهر العمود <code>student_id</code> إلا حين يصير الخطّ جدولًا. والقضيب هو طريقة انضمام الخطّ إلى المعرّف. وGrade علامتها <code>o</code> وهي خارج المعرّف في الاثنين."
      }
    },
    {
      id: "t5l6q05", type: "mcq", level: "medium", topics: ["t5-half-uid", "t5-barred-relationship"],
      q: {
        en: "Version 2 of the first evolve block bars only the <code>STUDENT</code> line at <code>ENROLLMENT</code>. Sara already has her Maths enrollment. What happens when the office records her in Physics?",
        ar: "الإصدار 2 من أوّل كتلة تطوّر يضع قضيبًا على خطّ <code>STUDENT</code> وحده عند <code>ENROLLMENT</code>. لـ Sara تسجيلها في Maths. ماذا يحدث حين يسجّلها المكتب في Physics؟"
      },
      options: [
        { en: "It is refused: the UID is the student alone, so her Physics enrollment has the same UID as her Maths one", ar: "يُرفض: المعرّف هو الطالب وحده، فلتسجيلها في Physics المعرّفُ نفسه الذي لتسجيلها في Maths" },
        { en: "It is accepted, because the SUBJECT line still has its crow's foot", ar: "يُقبل، لأن خطّ SUBJECT ما زال يحمل رِجل الغراب" },
        { en: "It is accepted, but now Maths can have only one student", ar: "يُقبل، لكن صار لـ Maths طالب واحد فقط" },
        { en: "It is refused only if Physics already has a student", ar: "يُرفض فقط إذا كان لـ Physics طالب من قبل" }
      ],
      answer: 0,
      hint: {
        en: "With one bar, what is the whole UID of an enrollment?",
        ar: "مع قضيب واحد، ما المعرّف الكامل للتسجيل؟"
      },
      explain: {
        en: "One bar makes the UID half of what it should be: the student alone. Each student may then have one enrollment, so Sara's Physics row collides with her Maths row and is refused. The M:M has quietly become a many-to-one. The crow's foot on the SUBJECT line says how many, not what identifies.",
        ar: "قضيب واحد يجعل المعرّف نصف ما يجب: الطالب وحده. فيصير لكل طالب تسجيل واحد، ويصطدم صفّ Sara في Physics بصفّها في Maths ويُرفض. لقد صارت علاقة ‎M:M بهدوء علاقة «متعدّد إلى واحد». ورِجل الغراب على خطّ SUBJECT تقول «كم»، لا «ما الذي يميّز»."
      }
    },
    {
      id: "t5l6q06", type: "tf", level: "hard", topics: ["t5-half-uid", "t5-duplicate-pair"],
      q: {
        en: "Version 2 (one bar, on the <code>STUDENT</code> line) still lets the clerk record Sara in Maths twice; that is the defect version 3 closes.",
        ar: "الإصدار 2 (قضيب واحد على خطّ <code>STUDENT</code>) ما زال يسمح للموظّف بتسجيل Sara في Maths مرّتين؛ وهذا هو العيب الذي يُغلقه الإصدار 3."
      },
      truth: false,
      hint: {
        en: "If the UID is the student alone, can Sara appear twice in any subject at all?",
        ar: "إذا كان المعرّف هو الطالب وحده، فهل تستطيع Sara أن تظهر مرّتين في أيّ مادّة أصلًا؟"
      },
      explain: {
        en: "False. Version 2 already refuses the duplicate pair — it refuses far too much, since Sara cannot take a second subject at all. Version 3's second bar loosens it: the student may repeat as long as the subject differs. The defect closed is the lost M:M, not the duplicate.",
        ar: "خطأ. الإصدار 2 يرفض الزوج المكرّر أصلًا، بل يرفض أكثر بكثير، إذ لا تستطيع Sara أن تأخذ مادّة ثانية مطلقًا. والقضيب الثاني في الإصدار 3 يرخي القيد: يتكرّر الطالب ما دامت المادّة مختلفة. فالعيب الذي يُغلق هو ضياع علاقة ‎M:M، لا التكرار."
      }
    },

    /* ---------------------------------------------------- 2 · where the bar goes */
    {
      id: "t5l6q07", type: "multi", level: "medium", topics: ["t5-bar-placement", "t5-bar-vs-diamond"],
      q: {
        en: "Select every correct statement about the line between <code>SUBJECT</code> and <code>ENROLLMENT</code> in the barred school model.",
        ar: "اختر كل عبارة صحيحة عن الخطّ بين <code>SUBJECT</code> و<code>ENROLLMENT</code> في نموذج المدرسة المقضّب."
      },
      options: [
        { en: "The bar is drawn at the ENROLLMENT end, just beyond the crow's foot", ar: "يُرسم القضيب عند طرف ENROLLMENT، بعد رِجل الغراب مباشرة" },
        { en: "The bar is drawn at the SUBJECT end, because SUBJECT lends its ID", ar: "يُرسم القضيب عند طرف SUBJECT، لأن SUBJECT يُعير معرّفه" },
        { en: "The crow's foot is at ENROLLMENT: one subject has many enrollments", ar: "رِجل الغراب عند ENROLLMENT: للمادّة الواحدة تسجيلات كثيرة" },
        { en: "The bar may go in the middle of the line, where it is easiest to see", ar: "يمكن أن يوضع القضيب في منتصف الخطّ، حيث يُرى بسهولة" },
        { en: "The bar marks ENROLLMENT as the entity being identified", ar: "القضيب يعلّم ENROLLMENT بأنه الكيان الذي يُميَّز" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Which entity receives an identity, and which already has its own <code>#</code>? What lives in the middle of a line?",
        ar: "أيّ كيان يتلقّى هوية، وأيّها له <code>#</code> خاصّ به أصلًا؟ وماذا يسكن منتصف الخطّ؟"
      },
      explain: {
        en: "The bar sits at the end of the entity being identified, beside its crow's foot, and that is <code>ENROLLMENT</code>. <code>SUBJECT</code> already has <code># ID</code>; it lends identity, it does not receive it, so a bar at its end says the opposite. The middle of the line belongs to the diamond of non-transferability.",
        ar: "يقع القضيب عند طرف الكيان الذي يُميَّز، بجانب رِجل غرابه، وهو <code>ENROLLMENT</code>. أمّا <code>SUBJECT</code> فله <code># ID</code> أصلًا؛ يُعير الهوية ولا يتلقّاها، فالقضيب عند طرفه يقول العكس. ومنتصف الخطّ للمعيَّن الذي يدلّ على عدم قابلية النقل (non-transferable)."
      }
    },
    {
      id: "t5l6q08", type: "error", level: "medium", topics: ["t5-bar-placement", "t5-barred-relationship"],
      q: {
        en: "A student wrote the barred cleaning model as text. Which line is wrong?",
        ar: "كتب طالب نموذج التنظيف المقضّب نصًّا. أيّ سطر خاطئ؟"
      },
      lang: "text",
      code: "CLEANING COMPANY   # ID, * Name\nCLEANING SERVICE   # ID, * Name\nCLEANING SCHEDULE  * Start Date, * Price\nCLEANING COMPANY --offers / offered by--> CLEANING SCHEDULE   crow's foot at CLEANING SCHEDULE, bar at CLEANING COMPANY\nCLEANING SERVICE --scheduled in / for-->  CLEANING SCHEDULE   crow's foot and bar at CLEANING SCHEDULE",
      answer: 4,
      solution: {
        code: "CLEANING COMPANY --offers / offered by--> CLEANING SCHEDULE   crow's foot and bar at CLEANING SCHEDULE",
        en: "Both bars belong at CLEANING SCHEDULE, the entity being identified.",
        ar: "القضيبان كلاهما عند CLEANING SCHEDULE، الكيان الذي يُميَّز."
      },
      hint: {
        en: "A bar always sits beside a crow's foot. Is there a line where they are apart?",
        ar: "القضيب يقع دائمًا بجانب رِجل الغراب. هل من خطّ افترقا فيه؟"
      },
      explain: {
        en: "Line 4 puts the bar at <code>CLEANING COMPANY</code>, which would claim the company takes its identity from the schedule — but the company already has <code># ID</code>. Line 3 is fine: an intersection entity with no <code>#</code> is exactly what the bars are for. Line 5 is the correct form both lines need.",
        ar: "السطر 4 يضع القضيب عند <code>CLEANING COMPANY</code>، وكأن الشركة تأخذ هويتها من الجدول الزمني، مع أن لها <code># ID</code> أصلًا. والسطر 3 سليم: كيان تقاطع بلا <code>#</code> هو بالضبط ما وُجدت القضبان له. والسطر 5 هو الشكل الصحيح الذي يحتاجه الخطّان."
      }
    },
    {
      id: "t5l6q09", type: "match", level: "easy", topics: ["t5-bar-vs-diamond", "t5-bar"],
      q: {
        en: "Match each mark on an ERD with what it says.",
        ar: "صِل كل علامة في مخطّط ERD بما تقوله."
      },
      leftHead: { en: "Mark", ar: "العلامة" },
      rightHead: { en: "It says", ar: "تقول" },
      pairs: [
        { l: { en: "Bar across the line, at the intersection entity's end", ar: "قضيب عرضي على الخطّ، عند طرف كيان التقاطع" },
          r: { en: "This relationship is part of that entity's UID", ar: "هذه العلاقة جزء من معرّف ذلك الكيان" } },
        { l: { en: "Crow's foot at an end", ar: "رِجل غراب عند طرف" },
          r: { en: "Many instances at this end", ar: "نسخ كثيرة عند هذا الطرف" } },
        { l: { en: "Diamond in the middle of the line", ar: "معيَّن في منتصف الخطّ" },
          r: { en: "The relationship is non-transferable", ar: "العلاقة غير قابلة للنقل" } },
        { l: { en: "<code>#</code> inside the box", ar: "<code>#</code> داخل الصندوق" },
          r: { en: "This attribute is part of the UID", ar: "هذه الخاصية جزء من المعرّف" } }
      ],
      hint: {
        en: "Two of the marks are about identity; one is about how many; one is about changing parents.",
        ar: "علامتان تخصّان الهوية؛ وواحدة تخصّ العدد؛ وواحدة تخصّ تغيير الأب."
      },
      explain: {
        en: "A <code>#</code> puts an attribute into the UID, and a bar puts a relationship into it. The crow's foot is cardinality, and the diamond, Lesson 1's mark, forbids moving a child to another parent. Each mark has its own place; mix the places up and the diagram says something else.",
        ar: "علامة <code>#</code> تُدخل خاصية في المعرّف، والقضيب يُدخل علاقة فيه. ورِجل الغراب هي الكثرة (cardinality)، والمعيَّن، علامة الدرس 1، يمنع نقل الابن إلى أب آخر. لكل علامة مكانها؛ وإذا اختلطت الأماكن قال المخطّط شيئًا آخر."
      }
    },

    /* ---------------------------------------------------- 3 · composite UID */
    {
      id: "t5l6q10", type: "contrast", level: "hard", topics: ["t5-mixed-uid", "t5-uid-often"],
      q: {
        en: "For each business rule, are the two bars enough as the UID of the intersection entity, or must a <code>#</code> attribute join them?",
        ar: "لكل قاعدة عمل: هل يكفي القضيبان معرّفًا لكيان التقاطع، أم يجب أن تنضمّ إليهما خاصية <code>#</code>؟"
      },
      concepts: [
        { en: "Two bars are enough", ar: "القضيبان يكفيان" },
        { en: "Bars plus a # attribute", ar: "قضبان مع خاصية #" }
      ],
      rows: [
        { s: { en: "One grade per student per subject", ar: "درجة واحدة لكل طالب في كل مادّة" }, a: 0 },
        { s: { en: "A log of every time a person watches a show", ar: "سجلّ لكل مرّة يشاهد فيها شخص برنامجًا" }, a: 1 },
        { s: { en: "One company offers one service at one price", ar: "الشركة الواحدة تقدّم الخدمة الواحدة بسعر واحد" }, a: 0 },
        { s: { en: "One rating per viewer per show, ever", ar: "تقييم واحد لكل مشاهد لكل برنامج، إلى الأبد" }, a: 0 },
        { s: { en: "Every price Sparkle has charged for windows is kept, each from its start date", ar: "يُحفظ كل سعر تقاضته Sparkle عن تنظيف النوافذ، كلٌّ من تاريخ بدايته" }, a: 1 },
        { s: { en: "A student who retakes Maths keeps each year's grade", ar: "الطالب الذي يعيد Maths يحتفظ بدرجة كل سنة" }, a: 1 }
      ],
      hint: {
        en: "Ask: may the same pair meet more than once?",
        ar: "اسأل: هل يمكن أن يلتقي الزوج نفسه أكثر من مرّة؟"
      },
      explain: {
        en: "When one pair meets once, the bars are the whole UID. When the same pair can meet again — a second viewing, a later price, a retake — the bars alone refuse the second meeting, and a <code>#</code> attribute such as a date must join them. That is why the slides say the UID <em>often</em> comes from the relationships, not always.",
        ar: "حين يلتقي الزوج مرّة واحدة يكون القضيبان المعرّف كلّه. وحين يمكن أن يلتقي الزوج نفسه ثانيةً، كمشاهدة ثانية أو سعر لاحق أو إعادة مادّة، يرفض القضيبان وحدهما اللقاء الثاني، فيجب أن تنضمّ إليهما خاصية <code>#</code> كالتاريخ. ولهذا تقول الشرائح إن المعرّف يأتي <em>غالبًا</em> من العلاقات، لا دائمًا."
      }
    },
    {
      id: "t5l6q11", type: "mcq", level: "easy", topics: ["t5-composite-uid", "t5-unique-together"],
      q: {
        en: "A student reads the barred school model as \"<code>STUDENT ID</code> is unique and <code>SUBJECT ID</code> is unique\". If the school builds exactly that, what follows?",
        ar: "قرأ طالب نموذج المدرسة المقضّب على أنه «<code>STUDENT ID</code> فريد و<code>SUBJECT ID</code> فريد». إذا بنت المدرسة ذلك حرفيًّا، فماذا ينتج؟"
      },
      options: [
        { en: "Nothing changes: it is just another way of saying the UID is student plus subject", ar: "لا شيء يتغيّر: إنها طريقة أخرى لقول إن المعرّف هو الطالب مع المادّة" },
        { en: "Duplicate pairs are allowed again, as in Lesson 5", ar: "تعود الأزواج المكرّرة مسموحة، كما في الدرس 5" },
        { en: "Only Grade becomes unique", ar: "تصير Grade وحدها فريدة" },
        { en: "Each student can have one enrollment and each subject one student — version 2's defect, twice over", ar: "يصير لكل طالب تسجيل واحد ولكل مادّة طالب واحد — عيب الإصدار 2 مضاعفًا" }
      ],
      answer: 3,
      hint: {
        en: "A composite UID is unique as a … , not part by part.",
        ar: "المعرّف المركّب فريد بوصفه … ، لا جزءًا جزءًا."
      },
      explain: {
        en: "A composite UID is unique only in combination; each part repeats freely. Making each part unique on its own lets Sara appear once and Maths appear once — the one-bar defect on both lines. It does refuse duplicates, which is why it feels safe; it refuses every legitimate second enrollment too.",
        ar: "المعرّف المركّب (composite UID) فريد مجتمعًا فقط؛ وكل جزء منه يتكرّر بحرية. وجعل كل جزء فريدًا وحده يسمح لـ Sara بالظهور مرّة ولـ Maths بالظهور مرّة، وهو عيب القضيب الواحد على الخطّين. صحيح أنه يرفض التكرار، ولهذا يبدو آمنًا؛ لكنه يرفض أيضًا كل تسجيل ثانٍ مشروع."
      }
    },
    {
      id: "t5l6q12", type: "trace", level: "hard", topics: ["t5-unique-together", "t5-composite-pk", "t5-duplicate-pair"],
      q: {
        en: "<code>enrollments</code> has <code>PRIMARY KEY (student_id, subject_id)</code> and holds (1001, 1), (1001, 2), (1002, 1), (1003, 2), (1003, 3). Each statement runs on its own. What does the last query return?",
        ar: "لـ <code>enrollments</code> المفتاح <code>PRIMARY KEY (student_id, subject_id)</code> وفيه (1001, 1) و(1001, 2) و(1002, 1) و(1003, 2) و(1003, 3). تُنفَّذ كل جملة وحدها. ماذا يُعيد الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO enrollments VALUES (1002, 2, 'B');\nINSERT INTO enrollments VALUES (1003, 2, 'C');\nINSERT INTO enrollments VALUES (1004, 1, NULL);\n\nSELECT COUNT(*) AS n\nFROM enrollments;",
      options: [
        { en: "8 — all three inserts succeed, since every pair differs in its grade", ar: "8 — تنجح الإضافات الثلاث، لأن كل زوج تختلف درجته" },
        { en: "7 — only (1003, 2) is refused; it is already there as a pair", ar: "7 — تُرفض (1003, 2) وحدها؛ فهي موجودة زوجًا من قبل" },
        { en: "6 — (1002, 2) and (1003, 2) are refused, because Physics already has a student", ar: "6 — تُرفض (1002, 2) و(1003, 2)، لأن لـ Physics طالبًا من قبل" },
        { en: "5 — all three are refused: 1002 and 1003 already exist, and the third has a NULL grade", ar: "5 — تُرفض الثلاث: 1002 و1003 موجودان، والثالثة درجتها NULL" }
      ],
      answer: 1,
      solution: {
        code: "Cannot insert record, because it already exists in primary key index\n\nn\n7",
        en: "Run in the lesson's tables: the second insert fails, the other two succeed.",
        ar: "نُفّذت على جداول الدرس: تفشل الإضافة الثانية، وتنجح الأخريان."
      },
      hint: {
        en: "Check each new row against the whole pair, never one part. Is grade in the key?",
        ar: "افحص كل صفّ جديد بالزوج كاملًا، لا بجزء منه. هل grade في المفتاح؟"
      },
      explain: {
        en: "Omar and Physics each appear already, but never together, so (1002, 2) is new. Yousef appears nowhere, and his NULL grade is allowed because <code>grade</code> is not in the key. Only (1003, 2) repeats a pair; its different grade does not help, since grade is not part of the UID. 5 + 2 = 7.",
        ar: "Omar وPhysics كلّ منهما موجود، لكنهما لم يجتمعا قطّ، فـ (1002, 2) جديد. وYousef لا يظهر في أيّ مكان، ودرجته NULL مسموحة لأن <code>grade</code> ليست في المفتاح. ووحده (1003, 2) يكرّر زوجًا؛ ولا تنفعه درجته المختلفة لأن الدرجة ليست جزءًا من المعرّف. 5 + 2 = 7."
      }
    },
    {
      id: "t5l6q13", type: "order", level: "easy", topics: ["t5-uid-reading-order", "t5-composite-uid"],
      q: {
        en: "Put the steps of reading any entity's UID in the lesson's order.",
        ar: "رتّب خطوات قراءة معرّف أيّ كيان بحسب ترتيب الدرس."
      },
      items: [
        { en: "List the <code>#</code> attributes inside the box", ar: "اذكر خصائص <code>#</code> داخل الصندوق" },
        { en: "Follow each bar at the box's edge to its parent", ar: "تتبّع كل قضيب عند حافّة الصندوق إلى أبيه" },
        { en: "Name each parent's own UID as a part", ar: "سمِّ معرّف كل أب جزءًا من المعرّف" },
        { en: "Join every part with \"plus\"", ar: "اجمع الأجزاء كلها بكلمة «plus» (زائد)" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Inside first, then the edge, then put it together.",
        ar: "الداخل أوّلًا، ثم الحافّة، ثم اجمع."
      },
      explain: {
        en: "Inside the box first, so a <code>#</code> attribute is never forgotten; then each bar, followed to the parent whose UID it brings; then the parts joined with \"plus\". The fixed order matters most for a mixed UID, where stopping at the bars misses the <code>#</code>.",
        ar: "داخل الصندوق أوّلًا، كي لا تُنسى خاصية <code>#</code>؛ ثم كل قضيب، متتبَّعًا إلى الأب الذي يجلب معرّفه؛ ثم الأجزاء مجموعة بكلمة «plus». ويهمّ الترتيب الثابت أكثر ما يهمّ في المعرّف المختلط، حيث يُفوِّت التوقّفُ عند القضبان خاصيةَ <code>#</code>."
      }
    },

    /* ---------------------------------------------------- 4 · evolve 2: mixed UID */
    {
      id: "t5l6q14", type: "fill", level: "medium", topics: ["t5-uid-reading-order", "t5-mixed-uid"],
      q: {
        en: "Version 2 of the TV evolve block has <code># Date Watched</code> and a bar on each line at <code>VIEWING RECORD</code>. Complete its UID in the lesson's reading order.",
        ar: "في الإصدار 2 من كتلة تطوّر التلفاز الخاصية <code># Date Watched</code> وقضيب على كل خطّ عند <code>VIEWING RECORD</code>. أكمل معرّفه بترتيب القراءة في الدرس."
      },
      lang: "text",
      code: "VIEWING RECORD  UID = ____1____  +  TV SHOW (ID)  +  ____2____",
      blanks: [
        { accept: ["Date Watched", "# Date Watched", "#Date Watched", "date watched", "Date watched", "DATE WATCHED", "date_watched"], label: { en: "1", ar: "1" } },
        { accept: ["PERSON (ID)", "PERSON(ID)", "PERSON", "Person (ID)", "Person", "person", "PERSON ID", "Person ID"], label: { en: "2", ar: "2" } }
      ],
      solution: {
        code: "VIEWING RECORD  UID = Date Watched  +  TV SHOW (ID)  +  PERSON (ID)",
        en: "Step 1 is the # inside the box; steps 2 and 3 follow the bars.",
        ar: "الخطوة 1 هي # داخل الصندوق؛ والخطوتان 2 و3 تتبعان القضيبين."
      },
      hint: {
        en: "Step 1 looks inside the box. The other bar leads to which parent?",
        ar: "الخطوة 1 تنظر داخل الصندوق. والقضيب الآخر يقود إلى أيّ أب؟"
      },
      explain: {
        en: "<code># Date Watched</code> comes first because it is inside the box; then the two bars, each to its parent's UID. Many people watch on the same date, so the date alone repeats; stopping at the bars misses it, and that is version 1.",
        ar: "تأتي <code># Date Watched</code> أوّلًا لأنها داخل الصندوق؛ ثم القضيبان، كلٌّ إلى معرّف أبيه. وكثيرون يشاهدون في التاريخ نفسه، فالتاريخ وحده يتكرّر؛ والتوقّف عند القضيبين يُفوِّته، وهذا هو الإصدار 1."
      }
    },
    {
      id: "t5l6q15", type: "compare", level: "medium", topics: ["t5-mixed-uid", "t5-uid-often"],
      q: {
        en: "The channel now records every viewing. Huda watches News on 1 November and again on 8 November. Which model is right, and why?",
        ar: "صارت القناة تسجّل كل مشاهدة. شاهدت Huda برنامج News في 1 نوفمبر ثم في 8 نوفمبر. أيّ النموذجين صحيح، ولماذا؟"
      },
      lang: "text",
      codeA: "VIEWING RECORD  * Date Watched, o Rating\n  bar on the TV SHOW line, bar on the PERSON line\n  UID = TV SHOW (ID) + PERSON (ID)",
      codeB: "VIEWING RECORD  # Date Watched, o Rating\n  bar on the TV SHOW line, bar on the PERSON line\n  UID = Date Watched + TV SHOW (ID) + PERSON (ID)",
      options: [
        { en: "A: the slides say the UID comes from the originating relationships, so nothing else may join the bars", ar: "A: تقول الشرائح إن المعرّف يأتي من العلاقات الأصلية، فلا يجوز أن ينضمّ شيء آخر إلى القضبان" },
        { en: "B: but only because Date Watched alone would identify a viewing", ar: "B: لكن فقط لأن Date Watched وحدها تميّز المشاهدة" },
        { en: "B: A allows one record per person per show ever, so the 8 November viewing is refused; the date makes it a second instance", ar: "B: يسمح A بسجلّ واحد لكل شخص لكل برنامج إلى الأبد، فتُرفض مشاهدة 8 نوفمبر؛ والتاريخ يجعلها نسخة ثانية" },
        { en: "Either works: the bars already let Huda appear twice, since PERSON has a crow's foot", ar: "كلاهما يصلح: القضيبان يسمحان أصلًا بظهور Huda مرّتين، لأن لـ PERSON رِجل غراب" }
      ],
      answer: 2,
      hint: {
        en: "Under A, what is the UID of both of Huda's News viewings?",
        ar: "في A، ما معرّف مشاهدتَي Huda لـ News كلتيهما؟"
      },
      explain: {
        en: "In A both viewings share News plus Huda, so the second is refused — right for a single rating, wrong for a log. B adds <code># Date Watched</code> to the bars: a mixed UID. The slides say <em>often</em>, not always. The date alone would not do — many people watch on 1 November; it identifies only together with the bars.",
        ar: "في A تشترك المشاهدتان في News مع Huda، فتُرفض الثانية؛ وهذا صحيح لتقييم واحد، خاطئ لسجلّ مشاهدات. ويضيف B الخاصية <code># Date Watched</code> إلى القضيبين: معرّف مختلط (mixed UID). والشرائح تقول <em>غالبًا</em> لا دائمًا. والتاريخ وحده لا يكفي، فكثيرون يشاهدون في 1 نوفمبر؛ إنه يميّز مع القضيبين فقط."
      }
    },
    {
      id: "t5l6q16", type: "output", level: "medium", topics: ["t5-mixed-uid", "t5-unique-together"],
      q: {
        en: "<code>viewings</code> has <code>PRIMARY KEY (show_id, person_id, date_watched)</code>. Huda (person 1) watched News (show 1) on 1 November, and Huda's 8 November News viewing has just been inserted. What does this query return?",
        ar: "لـ <code>viewings</code> المفتاح <code>PRIMARY KEY (show_id, person_id, date_watched)</code>. شاهدت Huda (الشخص 1) برنامج News (البرنامج 1) في 1 نوفمبر، وأُضيفت للتوّ مشاهدتها لـ News في 8 نوفمبر. ماذا يُعيد هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS n\nFROM viewings\nWHERE show_id = 1 AND person_id = 1;",
      blanks: [
        { accept: ["2"], label: { en: "n", ar: "n" } }
      ],
      solution: { code: "n\n2", en: "2 — 1 November and 8 November.", ar: "2 — 1 نوفمبر و8 نوفمبر." },
      hint: {
        en: "The query names two of the three key parts. Does part of a key find one row or a group?",
        ar: "يذكر الاستعلام جزأين من أجزاء المفتاح الثلاثة. هل يجد جزء المفتاح صفًّا واحدًا أم مجموعة؟"
      },
      explain: {
        en: "2. With a mixed UID, show plus person is only part of the key, and half a composite UID finds a group. Under version 1's two-column key this would always return at most 1 — which is exactly why the second viewing could not be stored. Add <code>AND date_watched = '2026-11-08'</code> and it is at most 1 again.",
        ar: "2. مع المعرّف المختلط يكون البرنامج مع الشخص جزءًا فقط من المفتاح، ونصف المعرّف المركّب يجد مجموعة. ومع مفتاح العمودين في الإصدار 1 يُعيد هذا الاستعلام 1 على الأكثر دائمًا، ولهذا بالضبط لم تُحفظ المشاهدة الثانية. أضف <code>AND date_watched = '2026-11-08'</code> فيعود الناتج 1 على الأكثر."
      }
    },
    {
      id: "t5l6q17", type: "tf", level: "easy", topics: ["t5-mixed-uid", "t5-unique-together"],
      q: {
        en: "With <code>PRIMARY KEY (show_id, person_id, date_watched)</code>, entering Huda's 8 November News viewing a second time, with a different rating, is still refused.",
        ar: "مع <code>PRIMARY KEY (show_id, person_id, date_watched)</code>، إدخال مشاهدة Huda لـ News في 8 نوفمبر مرّة ثانية، بتقييم مختلف، يبقى مرفوضًا."
      },
      truth: true,
      hint: {
        en: "Is <code>rating</code> one of the key's columns?",
        ar: "هل <code>rating</code> من أعمدة المفتاح؟"
      },
      explain: {
        en: "True. Show, person and date are the same, so the key is the same, and alasql answers <code>Cannot insert record, because it already exists in primary key index</code>. A different rating does not help: <code>Rating</code> is not part of the UID. The mixed UID lets a pair meet twice on different days, not twice on the same day.",
        ar: "صحيح. البرنامج والشخص والتاريخ هي نفسها، فالمفتاح نفسه، ويجيب alasql بـ <code>Cannot insert record, because it already exists in primary key index</code>. ولا ينفع التقييم المختلف: <code>Rating</code> ليست جزءًا من المعرّف. فالمعرّف المختلط يسمح للزوج بأن يلتقي مرّتين في يومين مختلفين، لا مرّتين في اليوم نفسه."
      }
    },
    {
      id: "t5l6q18", type: "multi", level: "medium", topics: ["t5-unique-together", "t5-mixed-uid"],
      q: {
        en: "The UID of <code>VIEWING RECORD</code> is <code>Date Watched</code> + <code>TV SHOW</code> + <code>PERSON</code>. Which two rows break it?",
        ar: "معرّف <code>VIEWING RECORD</code> هو <code>Date Watched</code> + <code>TV SHOW</code> + <code>PERSON</code>. أيّ صفّين يخرقانه؟"
      },
      lang: "text",
      code: "   show    person  date_watched  rating\n1  Drama   Mona    2026-11-03    4\n2  Drama   Huda    2026-11-03    2\n3  Drama   Mona    2026-11-10    4\n4  News    Mona    2026-11-03    5\n5  Drama   Mona    2026-11-03    1",
      options: [
        { en: "Row 1", ar: "الصفّ 1" },
        { en: "Row 2", ar: "الصفّ 2" },
        { en: "Row 3", ar: "الصفّ 3" },
        { en: "Row 4", ar: "الصفّ 4" },
        { en: "Row 5", ar: "الصفّ 5" }
      ],
      answer: [0, 4],
      hint: {
        en: "Find two rows that agree on all three parts. Ignore the column that is not in the UID.",
        ar: "ابحث عن صفّين يتّفقان في الأجزاء الثلاثة كلها. وتجاهل العمود الذي ليس في المعرّف."
      },
      explain: {
        en: "Rows 1 and 5 are both Drama, Mona, 3 November; their different ratings do not matter, since Rating is not in the UID. Rows 1 and 3 share show and person but not date; rows 1 and 2 share show and date but not person; rows 1 and 4 share person and date but not show. Check the whole combination, never one part.",
        ar: "الصفّان 1 و5 كلاهما Drama وMona و3 نوفمبر؛ واختلاف تقييمهما لا يهمّ لأن Rating ليست في المعرّف. أمّا 1 و3 فيشتركان في البرنامج والشخص دون التاريخ؛ و1 و2 في البرنامج والتاريخ دون الشخص؛ و1 و4 في الشخص والتاريخ دون البرنامج. افحص التركيب كاملًا، لا جزءًا منه."
      }
    },

    /* ---------------------------------------------------- 5 · composite primary key */
    {
      id: "t5l6q19", type: "complete", level: "medium", topics: ["t5-composite-pk", "t5-bar-to-column"],
      q: {
        en: "<code>CLEANING SCHEDULE</code> has a bar on each line and no <code>#</code> attribute; <code>Start Date</code> and <code>Price</code> are <code>*</code>. Complete the table.",
        ar: "لـ <code>CLEANING SCHEDULE</code> قضيب على كل خطّ ولا خاصية <code>#</code> فيه؛ و<code>Start Date</code> و<code>Price</code> علامتهما <code>*</code>. أكمل الجدول."
      },
      lang: "sql",
      code: "CREATE TABLE cleaning_schedules (\n  company_id NUMBER NOT NULL REFERENCES cleaning_companies(company_id),\n  service_id NUMBER NOT NULL REFERENCES cleaning_services(service_id),\n  start_date DATE   NOT NULL,\n  price      NUMBER NOT NULL,\n  ____\n);",
      options: [
        { code: "PRIMARY KEY (company_id, service_id, start_date, price)" },
        { code: "PRIMARY KEY (company_id, service_id)" },
        { code: "UNIQUE (company_id), UNIQUE (service_id)" },
        { code: "PRIMARY KEY (company_id)" }
      ],
      answer: 1,
      hint: {
        en: "Each bar becomes a key column; each <code>#</code> inside the box becomes a key column. What about a <code>*</code>?",
        ar: "كل قضيب يصير عمودًا في المفتاح؛ وكل <code>#</code> داخل الصندوق يصير عمودًا في المفتاح. وماذا عن <code>*</code>؟"
      },
      explain: {
        en: "Two bars, no <code>#</code>: the key is the two foreign keys. A <code>*</code> attribute is mandatory, not identifying, so putting <code>start_date</code> and <code>price</code> in the key would let Sparkle list windows twice at two prices — the very defect being fixed. Two <code>UNIQUE</code> columns is the part-by-part misreading, and one column is the one-bar model.",
        ar: "قضيبان ولا <code>#</code>: المفتاح هو المفتاحان الأجنبيان. فعلامة <code>*</code> تعني إلزامية لا تمييزًا، وإدخال <code>start_date</code> و<code>price</code> في المفتاح يسمح لـ Sparkle بعرض النوافذ مرّتين بسعرين، وهو العيب نفسه الذي يُصلَح. وعمودا <code>UNIQUE</code> هما القراءة الخاطئة جزءًا جزءًا، والعمود الواحد هو نموذج القضيب الواحد."
      }
    },
    {
      id: "t5l6q20", type: "write", level: "hard", topics: ["t5-composite-pk", "t5-bar-to-column", "t5-mixed-uid"],
      q: {
        en: "<code>tv_shows(show_id)</code> and <code>persons(person_id)</code> exist. Write <code>CREATE TABLE viewings</code> for version 2 of the TV evolve block: a bar on each line, <code># Date Watched</code>, and <code>o Rating</code>, so that a second viewing on another day is accepted and the same viewing entered twice is refused.",
        ar: "الجدولان <code>tv_shows(show_id)</code> و<code>persons(person_id)</code> موجودان. اكتب <code>CREATE TABLE viewings</code> للإصدار 2 من كتلة تطوّر التلفاز: قضيب على كل خطّ، و<code># Date Watched</code>، و<code>o Rating</code>، بحيث تُقبل مشاهدة ثانية في يوم آخر وتُرفض المشاهدة نفسها إذا أُدخلت مرّتين."
      },
      lang: "sql",
      lines: 7,
      checks: [
        { re: "CREATE\\s+TABLE\\s+viewings\\b", flags: "i",
          label: { en: "creates the table viewings", ar: "ينشئ الجدول viewings" } },
        { re: "show_id\\b[^,]*REFERENCES\\s+tv_shows\\s*\\(\\s*show_id\\s*\\)", flags: "i",
          label: { en: "show_id is a foreign key to tv_shows (bar 1)", ar: "show_id مفتاح أجنبي إلى tv_shows (القضيب 1)" } },
        { re: "person_id\\b[^,]*REFERENCES\\s+persons\\s*\\(\\s*person_id\\s*\\)", flags: "i",
          label: { en: "person_id is a foreign key to persons (bar 2)", ar: "person_id مفتاح أجنبي إلى persons (القضيب 2)" } },
        { re: "PRIMARY\\s+KEY\\s*\\((?=[^)]*\\bshow_id\\b)(?=[^)]*\\bperson_id\\b)(?=[^)]*\\bdate_watched\\b)[^)]*\\)", flags: "i",
          label: { en: "one primary key over show_id, person_id and date_watched", ar: "مفتاح أساسي واحد على show_id وperson_id وdate_watched" } }
      ],
      forbid: [
        { re: "\\bUNIQUE\\b", flags: "i",
          label: { en: "the parts are unique only together: no separate UNIQUE columns", ar: "الأجزاء فريدة مجتمعةً فقط: لا أعمدة UNIQUE منفصلة" } },
        { re: "\\b(NUMBER|DATE)\\s+(NOT\\s+NULL\\s+)?PRIMARY\\s+KEY", flags: "i",
          label: { en: "no one-column primary key: that is half a UID", ar: "لا مفتاح أساسي من عمود واحد: ذلك نصف معرّف" } }
      ],
      solution: {
        code: "CREATE TABLE viewings (\n  show_id      NUMBER NOT NULL REFERENCES tv_shows(show_id),\n  person_id    NUMBER NOT NULL REFERENCES persons(person_id),\n  date_watched DATE   NOT NULL,\n  rating       NUMBER,\n  PRIMARY KEY (show_id, person_id, date_watched)\n);",
        en: "Run in alasql: (1, 1, '2026-11-01') and (1, 1, '2026-11-08') are both accepted; (1, 1, '2026-11-08') again is refused.",
        ar: "نُفّذ في alasql: تُقبل (1, 1, '2026-11-01') و(1, 1, '2026-11-08') كلتاهما؛ وتُرفض (1, 1, '2026-11-08') مرّة ثانية."
      },
      hint: {
        en: "Three UID components, so three key columns: two of them are also foreign keys.",
        ar: "ثلاثة أجزاء للمعرّف، فثلاثة أعمدة في المفتاح: اثنان منها مفتاحان أجنبيان أيضًا."
      },
      explain: {
        en: "Each bar becomes a foreign-key column that also joins the primary key, and <code># Date Watched</code> becomes an ordinary key column, so one key covers all three. <code>rating</code> stays nullable for the <code>o</code> and outside the key. Two columns only would refuse Huda's second News viewing; separate <code>UNIQUE</code> columns would refuse almost everything.",
        ar: "كل قضيب يصير عمود مفتاح أجنبي ينضمّ أيضًا إلى المفتاح الأساسي، و<code># Date Watched</code> تصير عمودًا عاديًّا في المفتاح، فيغطّي مفتاح واحد الثلاثة. ويبقى <code>rating</code> يقبل NULL لأجل <code>o</code> وخارج المفتاح. والاكتفاء بعمودين يرفض مشاهدة Huda الثانية لـ News؛ وأعمدة <code>UNIQUE</code> المنفصلة ترفض كل شيء تقريبًا."
      }
    },
    {
      id: "t5l6q21", type: "output", level: "hard", topics: ["t5-duplicate-pair", "t5-composite-pk", "t5-unique-together"],
      q: {
        en: "Lesson 5's keyless <code>enrollments</code> holds (1001, 1, 'A'), (1001, 1, 'D'), (1001, 2, 'B'), (1002, 1, 'C'), (1003, 2, 'A'), (1003, 3, 'A'). Before adding the key, a clerk hunts for duplicates with this query. What does it return, and is it the right hunt?",
        ar: "جدول <code>enrollments</code> الخالي من المفتاح في الدرس 5 يحمل (1001, 1, 'A') و(1001, 1, 'D') و(1001, 2, 'B') و(1002, 1, 'C') و(1003, 2, 'A') و(1003, 3, 'A'). قبل إضافة المفتاح يبحث موظّف عن التكرار بهذا الاستعلام. ماذا يُعيد، وهل هو البحث الصحيح؟"
      },
      lang: "sql",
      code: "SELECT student_id, COUNT(*) AS copies\nFROM enrollments\nGROUP BY student_id\nHAVING COUNT(*) > 1;",
      options: [
        { en: "1001 | 2 only — the right hunt: Sara is the one duplicate", ar: "1001 | 2 فقط — البحث الصحيح: Sara هي التكرار الوحيد" },
        { en: "1001 | 3 and 1003 | 2 — the wrong hunt: Lina takes two different subjects and has no duplicate; group by student_id and subject_id", ar: "1001 | 3 و1003 | 2 — بحث خاطئ: Lina تدرس مادّتين مختلفتين ولا تكرار لها؛ جمِّع على student_id وsubject_id" },
        { en: "1001 | 3 and 1003 | 2 — the right hunt: both students must lose a row before the key can be added", ar: "1001 | 3 و1003 | 2 — البحث الصحيح: يجب حذف صفّ لكلتا الطالبتين قبل إضافة المفتاح" },
        { en: "No rows — the table has no key, so nothing counts as a duplicate", ar: "لا صفوف — الجدول بلا مفتاح، فلا شيء يُعدّ تكرارًا" }
      ],
      answer: 1,
      solution: {
        code: "student_id | copies\n1001       | 3\n1003       | 2\n\n-- grouped by the whole would-be key:\nstudent_id | subject_id | copies\n1001       | 1          | 2",
        en: "Run in alasql on the six rows above.",
        ar: "نُفّذ في alasql على الصفوف الستّة أعلاه."
      },
      hint: {
        en: "A duplicate pair repeats the whole would-be key. What does this query group by?",
        ar: "الزوج المكرّر يكرّر المفتاح المنتظر كلّه. على أيّ شيء يجمّع هذا الاستعلام؟"
      },
      explain: {
        en: "Grouping by half the key finds a group, not a duplicate: Sara has 3 rows and Lina 2, but Lina's are Physics and Arabic — legitimate. Deleting one of hers would destroy a real enrollment. Grouped by <code>student_id, subject_id</code>, only (1001, 1) appears, with 2 copies; that is the row the office must settle before the composite key can be added.",
        ar: "التجميع على نصف المفتاح يجد مجموعة لا تكرارًا: لـ Sara ثلاثة صفوف ولـ Lina صفّان، لكن صفّي Lina هما Physics وArabic، وهما مشروعان. وحذف أحدهما يُتلف تسجيلًا حقيقيًّا. أمّا بالتجميع على <code>student_id, subject_id</code> فلا يظهر إلا (1001, 1) بنسختين؛ وهذا الصفّ الذي يجب أن يحسمه المكتب قبل إضافة المفتاح المركّب."
      }
    },
    {
      id: "t5l6q22", type: "mcq", level: "hard", topics: ["t5-half-uid", "t5-barred-relationship", "t5-composite-pk"],
      q: {
        en: "A designer bars only the <code>CLEANING SERVICE</code> line, and builds <code>PRIMARY KEY (service_id)</code>. Sparkle (1) already offers windows (service 1). What happens when FreshHome (2) is scheduled for windows at 35?",
        ar: "وضع مصمّم قضيبًا على خطّ <code>CLEANING SERVICE</code> وحده، وبنى <code>PRIMARY KEY (service_id)</code>. تقدّم Sparkle (1) تنظيف النوافذ (الخدمة 1) من قبل. ماذا يحدث حين تُجدول FreshHome (2) لتنظيف النوافذ بسعر 35؟"
      },
      options: [
        { en: "It is accepted, because FreshHome's price differs from Sparkle's", ar: "يُقبل، لأن سعر FreshHome يختلف عن سعر Sparkle" },
        { en: "It is accepted, but now FreshHome can offer no other service", ar: "يُقبل، لكن لا تستطيع FreshHome بعدها أن تقدّم خدمة أخرى" },
        { en: "It is refused, because company_id has no foreign key", ar: "يُرفض، لأن company_id بلا مفتاح أجنبي" },
        { en: "It is refused: with the service alone as the UID, each service can be offered by only one company", ar: "يُرفض: حين تكون الخدمة وحدها المعرّف، لا يقدّم الخدمةَ الواحدة إلا شركة واحدة" }
      ],
      answer: 3,
      solution: {
        code: "Cannot insert record, because it already exists in primary key index",
        en: "Run in alasql with the lesson's cleaning tables and a one-column key.",
        ar: "نُفّذ في alasql على جداول التنظيف في الدرس مع مفتاح من عمود واحد."
      },
      hint: {
        en: "This is version 2's defect seen from the other parent. Which value repeats?",
        ar: "هذا عيب الإصدار 2 مرئيًّا من الأب الآخر. أيّ قيمة تتكرّر؟"
      },
      explain: {
        en: "One bar makes the service alone the UID, so windows can appear once in the whole table and FreshHome's row is refused. The M:M — many companies per service — has become a many-to-one. Price is not in the key, so a different price changes nothing; the second bar, <code>PRIMARY KEY (company_id, service_id)</code>, is the fix.",
        ar: "قضيب واحد يجعل الخدمة وحدها المعرّف، فلا تظهر النوافذ إلا مرّة في الجدول كلّه، ويُرفض صفّ FreshHome. لقد صارت علاقة ‎M:M (شركات كثيرة للخدمة الواحدة) علاقة «متعدّد إلى واحد». والسعر ليس في المفتاح، فاختلافه لا يغيّر شيئًا؛ والإصلاح هو القضيب الثاني، <code>PRIMARY KEY (company_id, service_id)</code>."
      }
    },
    {
      id: "t5l6q23", type: "tf", level: "easy", topics: ["t5-barred-relationship", "t5-bar"],
      q: {
        en: "Adding a bar to the <code>STUDENT</code>&ndash;<code>ENROLLMENT</code> line changes its cardinality: the crow's foot is no longer needed at <code>ENROLLMENT</code>.",
        ar: "إضافة قضيب إلى خطّ <code>STUDENT</code>&ndash;<code>ENROLLMENT</code> تغيّر كثرته (cardinality): لم تعد رِجل الغراب لازمة عند <code>ENROLLMENT</code>."
      },
      truth: false,
      hint: {
        en: "Where is the bar drawn — instead of the crow's foot, or beside it?",
        ar: "أين يُرسم القضيب: بدل رِجل الغراب أم بجانبها؟"
      },
      explain: {
        en: "False. The bar is drawn just beyond the crow's foot, which stays: one student still has many enrollments. The bar adds a different fact — this relationship is part of the UID of <code>ENROLLMENT</code>. Optionality, cardinality and identity are three separate marks on the same line.",
        ar: "خطأ. يُرسم القضيب بعد رِجل الغراب مباشرة، وتبقى رِجل الغراب: للطالب الواحد تسجيلات كثيرة. والقضيب يضيف حقيقة أخرى: هذه العلاقة جزء من معرّف <code>ENROLLMENT</code>. فالاختيارية والكثرة والهوية ثلاث علامات منفصلة على الخطّ نفسه."
      }
    },
    {
      id: "t5l6q24", type: "mcq", level: "easy", topics: ["t5-bar-to-column", "t5-composite-pk"],
      q: {
        en: "When the barred school model becomes tables, what does each bar at <code>ENROLLMENT</code> become in <code>enrollments</code>?",
        ar: "حين يصير نموذج المدرسة المقضّب جداول، إلامَ يصير كل قضيب عند <code>ENROLLMENT</code> في <code>enrollments</code>؟"
      },
      options: [
        { en: "A foreign-key column that is also one column of the primary key", ar: "عمود مفتاح أجنبي هو أيضًا أحد أعمدة المفتاح الأساسي" },
        { en: "A column with its own one-column PRIMARY KEY", ar: "عمود له مفتاح أساسي خاصّ به من عمود واحد" },
        { en: "A UNIQUE constraint on that foreign key", ar: "قيد UNIQUE على ذلك المفتاح الأجنبي" },
        { en: "Nothing: bars are only drawing, and the table is unchanged", ar: "لا شيء: القضبان رسم فقط، والجدول لا يتغيّر" }
      ],
      answer: 0,
      hint: {
        en: "The bar says the line is part of the identifier; the line itself was already a foreign key.",
        ar: "القضيب يقول إن الخطّ جزء من المعرّف؛ والخطّ نفسه كان مفتاحًا أجنبيًّا أصلًا."
      },
      explain: {
        en: "Each line was already a foreign key in Lesson 5; the bar adds that column to the primary key, so two bars give <code>PRIMARY KEY (student_id, subject_id)</code>. Lesson 5's table had the same columns and accepted Sara's duplicate Maths row — only the key changed, and the key is what refuses it. A one-column key or a <code>UNIQUE</code> per column is half a UID or the part-by-part misreading.",
        ar: "كل خطّ كان مفتاحًا أجنبيًّا في الدرس 5؛ والقضيب يضيف ذلك العمود إلى المفتاح الأساسي، فيعطي القضيبان <code>PRIMARY KEY (student_id, subject_id)</code>. وجدول الدرس 5 كانت له الأعمدة نفسها وقَبِل صفّ Sara المكرّر في Maths؛ لم يتغيّر إلا المفتاح، والمفتاح هو ما يرفضه. أمّا مفتاح من عمود واحد أو <code>UNIQUE</code> لكل عمود فهو نصف معرّف أو القراءة الخاطئة جزءًا جزءًا."
      }
    }
  ]
};
