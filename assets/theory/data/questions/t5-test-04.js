/* Question bank: T5 lesson 4 test -- Many-to-Many, and the Attribute It Hides. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-04"] = {
  title: { en: "Test 4 — Many-to-Many", ar: "اختبار 4 — متعدّد إلى متعدّد" },
  intro: {
    en: "24 questions on lesson 4: the two sentences of a many-to-many, STUDENT and SUBJECT, why no foreign key column can hold an M:M, what goes wrong when it is squeezed into a 1:M, where Grade lives, the pair test, TV SHOW and CLEANING SERVICE, and redundant relationships. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الرابع: جملتا علاقة «متعدّد إلى متعدّد»، وSTUDENT وSUBJECT، ولماذا لا يتّسع أيّ عمود مفتاح أجنبي لعلاقة ‎M:M، وما يفسد حين تُحشر في ‎1:M، وأين تسكن Grade، واختبار الزوج، وTV SHOW وCLEANING SERVICE، والعلاقات الزائدة. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · many in both directions */
    {
      id: "t5l4q01", type: "tf", level: "easy", topics: ["t5-many-to-many", "t5-mm-sentences"],
      q: {
        en: "A line with a crow's foot at both ends is only a valid many-to-many if both of its halves are dashed.",
        ar: "الخطّ الذي عند طرفيه رِجل غراب لا يكون علاقة «متعدّد إلى متعدّد» صحيحة إلا إذا كان نصفاه متقطّعين."
      },
      truth: false,
      hint: {
        en: "Which symbols name the type, and which ones only say must or may?",
        ar: "أيّ الرموز يسمّي النوع، وأيّها يقول must أو may فقط؟"
      },
      explain: {
        en: "False. The type is read from the two ends: a crow's foot at both ends is M:M, whatever the halves look like. Each half carries its own optionality, so a line can be solid at <code>STUDENT</code> (each student must learn from a teacher) and still be M:M. The slides' <code>STUDENT</code>&ndash;<code>SUBJECT</code> line is dashed at both ends because that is the business, not because M:M demands it.",
        ar: "خطأ. النوع يُقرأ من الطرفين: رِجل غراب عند الطرفين تعني ‎M:M مهما كان شكل النصفين. كلّ نصف يحمل إلزاميته (optionality) وحده، فقد يكون الخطّ متّصلًا عند <code>STUDENT</code> (كل طالب يجب أن يتعلّم من معلّم) ويبقى ‎M:M. وخطّ <code>STUDENT</code>&ndash;<code>SUBJECT</code> في الشرائح متقطّع عند الطرفين لأن العمل هكذا، لا لأن ‎M:M تشترط ذلك."
      }
    },
    {
      id: "t5l4q02", type: "fill", level: "easy", topics: ["t5-student-subject", "t5-mm-sentences"],
      q: {
        en: "Write the slides' two business rules for the school. A new student may have no subject yet, and a new subject may have no students. Fill each blank.",
        ar: "اكتب قاعدتَي العمل في الشرائح للمدرسة. قد لا يكون للطالب الجديد أيّ مادّة بعد، وقد لا يكون للمادّة الجديدة أيّ طالب. املأ كل فراغ."
      },
      lang: "erdish",
      code: "Each STUDENT ____1____ study ____2____ SUBJECTs.\nEach SUBJECT ____3____ studied by ____4____ STUDENTs.",
      blanks: [
        { accept: ["may"], label: { en: "1", ar: "1" } },
        { accept: ["one or more"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["may be", "may"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" }, wide: true }
      ],
      solution: { en: "1 = may, 2 = one or more, 3 = may be, 4 = one or more.", ar: "1 = may، 2 = one or more، 3 = may be، 4 = one or more." },
      hint: {
        en: "Both ends answer \"how many?\" with the same words, and neither student nor subject has to have the other.",
        ar: "الطرفان يجيبان عن «كم؟» بالكلمات نفسها، ولا يُشترط أن يكون للطالب مادّة ولا للمادّة طالب."
      },
      explain: {
        en: "Each <code>STUDENT</code> <em>may</em> study <em>one or more</em> <code>SUBJECT</code>s; each <code>SUBJECT</code> <em>may be</em> studied by <em>one or more</em> <code>STUDENT</code>s. Both sentences end in \"one or more\", so both ends are a crow's foot: M:M. Both say <em>may</em>, so both halves are dashed.",
        ar: "Each <code>STUDENT</code> <em>may</em> study <em>one or more</em> <code>SUBJECT</code>s؛ وEach <code>SUBJECT</code> <em>may be</em> studied by <em>one or more</em> <code>STUDENT</code>s. تنتهي الجملتان بـ «one or more»، فعند الطرفين رِجل غراب: ‎M:M. وكلتاهما تقول <em>may</em>، فالنصفان متقطّعان."
      }
    },
    {
      id: "t5l4q03", type: "mcq", level: "medium", topics: ["t5-learns-from", "t5-many-to-many"],
      q: {
        en: "The slides' second example: <code>STUDENT</code> <em>learns from</em> <code>TEACHER</code>, <code>TEACHER</code> <em>educates</em> <code>STUDENT</code>. At this school every student must learn from at least one teacher, and a newly hired teacher may educate nobody yet. How is the line drawn?",
        ar: "مثال الشرائح الثاني: <code>STUDENT</code> <em>learns from</em> <code>TEACHER</code>، و<code>TEACHER</code> <em>educates</em> <code>STUDENT</code>. في هذه المدرسة يجب أن يتعلّم كل طالب من معلّم واحد على الأقل، وقد لا يُدرّس المعلّم المعيَّن حديثًا أحدًا بعد. كيف يُرسم الخطّ؟"
      },
      options: [
        { en: "Crow's foot at both ends; solid half at <code>STUDENT</code>, dashed half at <code>TEACHER</code>", ar: "رِجل غراب عند الطرفين؛ نصف متّصل عند <code>STUDENT</code>، ونصف متقطّع عند <code>TEACHER</code>" },
        { en: "Crow's foot at <code>STUDENT</code>, single toe at <code>TEACHER</code>: the solid half makes <code>STUDENT</code> the child of a 1:M", ar: "رِجل غراب عند <code>STUDENT</code> وإصبع واحدة عند <code>TEACHER</code>: النصف المتّصل يجعل <code>STUDENT</code> ابنًا في ‎1:M" },
        { en: "Crow's foot at both ends, dashed at both halves, because an M:M is always optional", ar: "رِجل غراب عند الطرفين، والنصفان متقطّعان، لأن ‎M:M اختيارية دائمًا" },
        { en: "Crow's foot at both ends; dashed half at <code>STUDENT</code>, solid half at <code>TEACHER</code>", ar: "رِجل غراب عند الطرفين؛ نصف متقطّع عند <code>STUDENT</code>، ونصف متّصل عند <code>TEACHER</code>" }
      ],
      answer: 0,
      hint: {
        en: "Answer \"how many?\" from each end for the type, then \"must or may?\" for each half — the half belongs to the entity the sentence starts from.",
        ar: "أجب عن «كم؟» من كل طرف لتعرف النوع، ثم عن «must أم may؟» لكل نصف — والنصف لصيق بالكيان الذي تبدأ منه الجملة."
      },
      explain: {
        en: "A student learns from many teachers and a teacher educates many students, so both ends are crow's feet: M:M. The student <em>must</em> learn from one, so the <code>STUDENT</code> half is solid; the teacher <em>may</em> educate none, so the <code>TEACHER</code> half is dashed. A solid half never turns an M:M into a 1:M, and an M:M has no rule that its halves be dashed. Swapping the halves reads each sentence from the wrong end.",
        ar: "الطالب يتعلّم من معلّمين كثيرين والمعلّم يُدرّس طلابًا كثيرين، فعند الطرفين رِجل غراب: ‎M:M. والطالب <em>يجب</em> أن يتعلّم من واحد، فنصف <code>STUDENT</code> متّصل؛ والمعلّم <em>قد</em> لا يُدرّس أحدًا، فنصف <code>TEACHER</code> متقطّع. النصف المتّصل لا يحوّل ‎M:M إلى ‎1:M أبدًا، ولا قاعدة تفرض أن يكون نصفا ‎M:M متقطّعين. وتبديل النصفين يقرأ كل جملة من الطرف الخطأ."
      }
    },
    {
      id: "t5l4q04", type: "complete", level: "easy", topics: ["t5-tv-show-cleaning", "t5-mm-sentences"],
      q: {
        en: "The slides' TV channel: a person may watch many shows, and a show may be watched by many people. Complete the second ERDish sentence.",
        ar: "قناة التلفاز في الشرائح: قد يشاهد الشخص برامج كثيرة، وقد يشاهد البرنامجَ أشخاص كثيرون. أكمل جملة ERDish الثانية."
      },
      lang: "erdish",
      code: "Each TV SHOW may be watched by one or more PERSONs.\n____",
      options: [
        { code: "Each PERSON must watch one and only one TV SHOW." },
        { code: "Each PERSON may watch one and only one TV SHOW." },
        { code: "Each PERSON may watch one or more TV SHOWs." },
        { code: "Each PERSON must watch one or more TV SHOWs." }
      ],
      answer: 2,
      hint: {
        en: "Read it from <code>PERSON</code>: how many shows, and must a person watch any?",
        ar: "اقرأها من <code>PERSON</code>: كم برنامجًا، وهل يجب على الشخص أن يشاهد شيئًا؟"
      },
      explain: {
        en: "Each <code>PERSON</code> <em>may</em> watch <em>one or more</em> <code>TV SHOW</code>s. The \"one and only one\" options would put a toe at <code>TV SHOW</code> and make the line 1:M — the first sentence alone does not decide the type, both ends do. The <em>must</em> options claim every person has to watch a show, which the business never said.",
        ar: "Each <code>PERSON</code> <em>may</em> watch <em>one or more</em> <code>TV SHOW</code>s. أمّا خيارا «one and only one» فيضعان إصبعًا عند <code>TV SHOW</code> ويجعلان الخطّ ‎1:M — فالجملة الأولى وحدها لا تحدّد النوع، بل الطرفان معًا. وخيارا <em>must</em> يزعمان أن على كل شخص أن يشاهد برنامجًا، ولم يقل العمل ذلك."
      }
    },
    {
      id: "t5l4q05", type: "multi", level: "medium", topics: ["t5-mm-no-column", "t5-student-subject"],
      q: {
        en: "Sara (1001) studies Maths (1) and Physics (2); Maths is studied by Sara and Omar (1002). Which statements about turning this M:M into tables with one foreign key column are true? Select all that apply.",
        ar: "تدرس Sara (1001) مادّتَي Maths (1) وPhysics (2)؛ ويدرس Maths كلٌّ من Sara وOmar (1002). أيّ العبارات صحيحة عن تحويل علاقة ‎M:M هذه إلى جداول بعمود مفتاح أجنبي واحد؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "A <code>students.subject_id</code> column holds one subject per row, but Sara needs two", ar: "عمود <code>students.subject_id</code> يحمل مادّة واحدة في كل صفّ، وSara تحتاج إلى اثنتين" },
        { en: "A <code>subjects.student_id</code> column works, because the key may go in either table of an M:M", ar: "عمود <code>subjects.student_id</code> ينفع، لأن المفتاح في ‎M:M يمكن أن يوضع في أيّ الجدولين" },
        { en: "With crow's feet at both ends, both tables would have to be the child", ar: "مع رِجل غراب عند الطرفين، يجب أن يكون كلا الجدولين هو الابن" },
        { en: "Putting <code>UNIQUE</code> on <code>students.subject_id</code> lets one row hold both of Sara's subjects", ar: "إضافة <code>UNIQUE</code> إلى <code>students.subject_id</code> تسمح لصفّ واحد بحمل مادّتَي Sara" },
        { en: "A <code>subjects.student_id</code> column holds one student per row, but Maths needs two", ar: "عمود <code>subjects.student_id</code> يحمل طالبًا واحدًا في كل صفّ، وMaths يحتاج إلى اثنين" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "In a 1:M the key goes in the child, one parent id per row. Where is the child here?",
        ar: "في ‎1:M يوضع المفتاح في الابن، رقم أب واحد في كل صفّ. أين الابن هنا؟"
      },
      explain: {
        en: "A foreign key column holds one value per row. Each side of an M:M needs many values per row — Sara two subjects, Maths two students — so both tables would have to be the child, and neither can be. The key does not \"go in either table\" of an M:M; it fits in neither. <code>UNIQUE</code> only allows fewer rows, never more values in one row.",
        ar: "عمود المفتاح الأجنبي يحمل قيمة واحدة في كل صفّ. وكل جهة من ‎M:M تحتاج إلى قيم كثيرة في الصفّ — Sara مادّتين، وMaths طالبين — فكلا الجدولين يجب أن يكون الابن، ولا يصلح أيّ منهما. المفتاح في ‎M:M لا «يوضع في أيّ الجدولين»، بل لا يتّسع له أيّ منهما. و<code>UNIQUE</code> لا تفعل إلا تقليل الصفوف، ولا تضع قيمًا أكثر في صفّ واحد أبدًا."
      }
    },

    /* ---------------------------------------------------- 2 · do not squeeze it into a 1:M */
    {
      id: "t5l4q06", type: "trace", level: "hard", topics: ["t5-mm-squeezed", "t5-mm-no-column"],
      q: {
        en: "Version 1 of the lesson, built as tables: <code>students (student_id PRIMARY KEY, first_name, last_name, subject_id)</code> holds Sara (1001, Maths 1), Omar (1002, Maths 1) and Lina (1003, Physics 2). The clerk gives Sara Physics as well, then lists her subjects. What happens?",
        ar: "الإصدار 1 في الدرس مبنيًّا جداول: يحمل <code>students (student_id PRIMARY KEY, first_name, last_name, subject_id)</code> كلًّا من Sara (1001، Maths 1) وOmar (1002، Maths 1) وLina (1003، Physics 2). يُعطي الموظّف Sara مادّة Physics أيضًا، ثم يعرض موادّها. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO students VALUES (1001, 'Sara', 'Hamdan', 2);\n\nSELECT s.first_name, b.name\nFROM students s JOIN subjects b ON b.subject_id = s.subject_id\nWHERE s.student_id = 1001;",
      options: [
        { en: "The insert runs; the listing returns two rows, Sara Maths and Sara Physics", ar: "تُنفَّذ الإضافة؛ وتُعيد القائمة صفّين: Sara Maths وSara Physics" },
        { en: "The insert is refused because student 1001 already exists; the listing returns one row, Sara Maths", ar: "تُرفض الإضافة لأن الطالب 1001 موجود مسبقًا؛ وتُعيد القائمة صفًّا واحدًا: Sara Maths" },
        { en: "The insert replaces Maths with Physics; the listing returns one row, Sara Physics", ar: "تحلّ الإضافة Physics محلّ Maths؛ وتُعيد القائمة صفًّا واحدًا: Sara Physics" },
        { en: "The insert is refused because Physics already belongs to Lina; the listing returns one row, Sara Maths", ar: "تُرفض الإضافة لأن Physics مسجّلة لـ Lina؛ وتُعيد القائمة صفًّا واحدًا: Sara Maths" }
      ],
      answer: 1,
      solution: {
        code: "Cannot insert record, because it already exists in primary key index\n\nfirst_name | name\nSara       | Maths",
        en: "Refused on the primary key; Sara keeps one subject.",
        ar: "تُرفض بسبب المفتاح الأساسي؛ وتبقى لـ Sara مادّة واحدة."
      },
      hint: {
        en: "<code>student_id</code> is the primary key. How many rows may one student have in this table?",
        ar: "<code>student_id</code> هو المفتاح الأساسي. كم صفًّا يجوز أن يكون للطالب الواحد في هذا الجدول؟"
      },
      explain: {
        en: "The insert fails with <code>Cannot insert record, because it already exists in primary key index</code>, so Sara still has only Maths. The table allows one row per student and one subject per row — the toe at <code>SUBJECT</code>. Dropping the key would let the row in, but Sara's name would be stored twice and the update anomaly would return. Nothing stops two students sharing a subject: that end is already many.",
        ar: "تفشل الإضافة برسالة <code>Cannot insert record, because it already exists in primary key index</code>، فتبقى لـ Sara مادّة Maths وحدها. الجدول يسمح بصفّ واحد لكل طالب وبمادّة واحدة في كل صفّ — وهذه هي الإصبع عند <code>SUBJECT</code>. ولو أُسقط المفتاح لدخل الصفّ، لكن اسم Sara سيُخزَّن مرّتين ويعود شذوذ التحديث (update anomaly). ولا شيء يمنع طالبين من مشاركة مادّة: ذلك الطرف متعدّد أصلًا."
      }
    },
    {
      id: "t5l4q07", type: "compare", level: "medium", topics: ["t5-mm-squeezed", "t5-student-subject"],
      q: {
        en: "Versions 1 and 2 of the first evolve block, as text. Sara now studies Maths and Physics. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة التطوّر الأولى، نصًّا. تدرس Sara الآن Maths وPhysics. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT  study / studied by  SUBJECT\n  STUDENT half: dashed    end at STUDENT: crow's foot\n  SUBJECT half: dashed    end at SUBJECT: single toe",
      codeB: "STUDENT  study / studied by  SUBJECT\n  STUDENT half: dashed    end at STUDENT: crow's foot\n  SUBJECT half: dashed    end at SUBJECT: crow's foot",
      options: [
        { en: "A records Sara as one student with two subjects; B needs a second <code>STUDENT</code> for her", ar: "A يسجّل Sara طالبةً واحدة بمادّتين؛ وB يحتاج إلى <code>STUDENT</code> ثانٍ لها" },
        { en: "B fixes A by making the halves solid, so Sara must study at least one subject", ar: "B يصلح A بجعل النصفين متّصلين، فيجب أن تدرس Sara مادّة واحدة على الأقل" },
        { en: "A and B are the same relationship; only B is easier to build with a foreign key", ar: "A وB علاقة واحدة؛ لكن B أسهل في البناء بمفتاح أجنبي" },
        { en: "In A, Sara's second subject is not a legal instance; B's crow's foot at <code>SUBJECT</code> lets her study both as one student", ar: "في A ليست مادّة Sara الثانية حالةً مشروعة؛ ورِجل الغراب في B عند <code>SUBJECT</code> تسمح لها بدراسة المادّتين وهي طالبة واحدة" }
      ],
      answer: 3,
      hint: {
        en: "Only one symbol differs between A and B. Which question does it answer?",
        ar: "رمز واحد فقط يختلف بين A وB. عن أيّ سؤال يجيب؟"
      },
      explain: {
        en: "A's single toe at <code>SUBJECT</code> says each student studies one and only one subject, so Sara's Physics forces a second <code>STUDENT</code> for one girl. B changes only that end, to a crow's foot, and the business fits. The halves are dashed in both, so B fixes cardinality, not optionality. And A is the one that is easy to build — that ease is exactly why drafts squeeze an M:M into a 1:M.",
        ar: "إصبع A الواحدة عند <code>SUBJECT</code> تقول إن كل طالب يدرس مادّة واحدة فقط، فتُجبر Physics الخاصّة بـ Sara على إنشاء <code>STUDENT</code> ثانٍ لفتاة واحدة. أمّا B فيغيّر ذلك الطرف وحده إلى رِجل غراب، فيتّسع النموذج للعمل. والنصفان متقطّعان في الاثنين، فـ B يصلح التعدّدية (cardinality) لا الإلزامية. وA هو السهل في البناء — وهذه السهولة بالضبط هي سبب حشر ‎M:M في ‎1:M في المسوّدات."
      }
    },
    {
      id: "t5l4q08", type: "tf", level: "easy", topics: ["t5-first-version"],
      q: {
        en: "According to the slides, M:M relationships are common in a first version of an ER model, and in later stages of the modelling process all of them are resolved and disappear.",
        ar: "بحسب الشرائح، علاقات ‎M:M شائعة في النسخة الأولى (first version) من نموذج ER، وفي المراحل اللاحقة من عملية النمذجة تُحَلّ جميعها وتختفي."
      },
      truth: true,
      hint: {
        en: "Should you avoid drawing an M:M in a draft, or draw it and deal with it later?",
        ar: "هل تتجنّب رسم ‎M:M في المسوّدة، أم ترسمها وتعالجها لاحقًا؟"
      },
      explain: {
        en: "True. An M:M is the honest record of the business, so it belongs in the first version — squeezing it into a 1:M early only loses facts. In later stages every M:M is resolved; Lesson 5 shows how. Drawing it is right; leaving it in the final model is not.",
        ar: "صواب. علاقة ‎M:M هي التسجيل الأمين للعمل، فمكانها النسخة الأولى — وحشرها مبكرًا في ‎1:M لا يفعل إلا إضاعة الحقائق. وفي المراحل اللاحقة تُحَلّ كل ‎M:M؛ والدرس 5 يبيّن كيف. رسمها صواب؛ وإبقاؤها في النموذج النهائي ليس كذلك."
      }
    },
    {
      id: "t5l4q09", type: "mcq", level: "medium", topics: ["t5-first-version", "t5-mm-no-column"],
      q: {
        en: "Version 2 of the first evolve block — a crow's foot at both ends — is the recommended form for this lesson. What does it still leave open?",
        ar: "الإصدار 2 من كتلة التطوّر الأولى — رِجل غراب عند الطرفين — هو الشكل الموصى به في هذا الدرس. ما الذي لا يزال مفتوحًا فيه؟"
      },
      options: [
        { en: "Sara still cannot study two subjects", ar: "لا تزال Sara عاجزة عن دراسة مادّتين" },
        { en: "A new subject must have at least one student before it can be recorded", ar: "يجب أن يكون للمادّة الجديدة طالب واحد على الأقل قبل أن تُسجَّل" },
        { en: "It cannot yet be built: no foreign key column holds it, so a later stage must resolve it", ar: "لا يمكن بناؤه بعد: لا عمود مفتاح أجنبي يتّسع له، فلا بدّ أن تحلّه مرحلة لاحقة" },
        { en: "The halves must now be solid, because an M:M must be mandatory at both ends", ar: "يجب الآن أن يصبح النصفان متّصلين، لأن ‎M:M يجب أن تكون إلزامية عند الطرفين" }
      ],
      answer: 2,
      hint: {
        en: "Version 2 is the truth about the business. Is it also something a table can store?",
        ar: "الإصدار 2 هو حقيقة العمل. فهل هو أيضًا شيء يستطيع جدول أن يخزّنه؟"
      },
      explain: {
        en: "Version 2 fixes the business — Sara studies both subjects as one student — but an M:M has no foreign key column, so it is a first-version shape that a later stage resolves. Sara's two subjects were the defect version 2 closed. The halves stayed dashed in both versions, so an empty subject was always legal, and no rule says an M:M must be solid.",
        ar: "الإصدار 2 يُصلح تمثيل العمل — تدرس Sara المادّتين وهي طالبة واحدة — لكن ‎M:M لا عمود مفتاح أجنبي لها، فهي شكل من النسخة الأولى تحلّه مرحلة لاحقة. ومادّتا Sara هما العيب الذي أغلقه الإصدار 2. والنصفان بقيا متقطّعين في الإصدارين، فالمادّة الفارغة مشروعة دائمًا، ولا قاعدة تقول إن ‎M:M يجب أن تكون متّصلة."
      }
    },

    /* ---------------------------------------------------- 3 · where does Grade live? */
    {
      id: "t5l4q10", type: "mcq", level: "easy", topics: ["t5-grade-where", "t5-misplaced-attribute"],
      q: {
        en: "A designer puts <code>Grade</code> in <code>SUBJECT</code>. Which question does the slides' model then have no way to answer?",
        ar: "يضع مصمّم <code>Grade</code> في <code>SUBJECT</code>. عن أيّ سؤال لا يبقى لنموذج الشرائح سبيل إلى الإجابة؟"
      },
      options: [
        { en: "Which subjects does Sara study?", ar: "ما الموادّ التي تدرسها Sara؟" },
        { en: "Which student got that grade?", ar: "أيّ طالب حصل على تلك الدرجة؟" },
        { en: "What is the name of the subject?", ar: "ما اسم المادّة؟" },
        { en: "Is <code>Grade</code> mandatory or optional?", ar: "هل <code>Grade</code> إلزامية أم اختيارية؟" }
      ],
      answer: 1,
      hint: {
        en: "A grade means one student in one subject. Which half does <code>SUBJECT</code> know?",
        ar: "الدرجة تعني طالبًا واحدًا في مادّة واحدة. أيّ النصفين يعرفه <code>SUBJECT</code>؟"
      },
      explain: {
        en: "The slides ask exactly this: in <code>SUBJECT</code>, how would we know which <code>STUDENT</code> got that grade? <code>SUBJECT</code> knows the subject half of the meaning only. The study line still answers which subjects Sara studies, and optionality is a separate question that moving the attribute does not settle. Put it in <code>STUDENT</code> instead and the missing half is the subject.",
        ar: "تطرح الشرائح هذا بالضبط: في <code>SUBJECT</code>، كيف نعرف أيّ <code>STUDENT</code> حصل على تلك الدرجة؟ <code>SUBJECT</code> لا يعرف إلا نصف المعنى الخاصّ بالمادّة. أمّا خطّ الدراسة فيبقى يجيب عن الموادّ التي تدرسها Sara، والإلزامية سؤال آخر لا يحسمه نقل الخاصية. ولو وُضعت في <code>STUDENT</code> لكان النصف الناقص هو المادّة."
      }
    },
    {
      id: "t5l4q11", type: "output", level: "medium", topics: ["t5-misplaced-attribute", "t5-grade-where"],
      q: {
        en: "Version 1A from the lesson: <code>students (student_id, first_name, grade)</code> holds Sara (1001, A — her Maths grade), Omar (1002, C) and Lina (1003, A). Sara's Physics B arrives. After this script, which names does the last query return?",
        ar: "الإصدار 1A في الدرس: يحمل <code>students (student_id, first_name, grade)</code> كلًّا من Sara (1001، A — درجتها في Maths) وOmar (1002، C) وLina (1003، A). تصل درجة Sara في Physics، وهي B. بعد هذا النصّ البرمجي، ما الأسماء التي يُعيدها الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "UPDATE students SET grade = 'B' WHERE student_id = 1001;\n\nSELECT first_name\nFROM students\nWHERE grade = 'A'\nORDER BY first_name;",
      blanks: [
        { accept: ["Lina"], label: { en: "names returned", ar: "الأسماء المُعادة" }, wide: true }
      ],
      solution: { code: "first_name\nLina", en: "Only Lina.", ar: "Lina وحدها." },
      hint: {
        en: "One column, one value per student. What did the <code>UPDATE</code> do to the A that was there?",
        ar: "عمود واحد، وقيمة واحدة لكل طالب. ماذا فعل <code>UPDATE</code> بالـ A التي كانت هناك؟"
      },
      explain: {
        en: "Only Lina. The B overwrote Sara's Maths A, because a <code>grade</code> column in <code>students</code> holds one value per student. Sara really did get an A in Maths, yet the table can no longer say so — and it never said which subject either grade was for. The attribute is misplaced: its value belongs to a pair, not to a student.",
        ar: "Lina وحدها. فقد كتبت B فوق A التي نالتها Sara في Maths، لأن عمود <code>grade</code> في <code>students</code> يحمل قيمة واحدة لكل طالب. Sara حصلت فعلًا على A في Maths، لكن الجدول لم يعد قادرًا على قول ذلك — ولم يقل أصلًا لأيّ مادّة كانت أيّ درجة. الخاصية في غير موضعها: قيمتها تخصّ زوجًا، لا طالبًا."
      }
    },
    {
      id: "t5l4q12", type: "compare", level: "hard", topics: ["t5-hidden-attribute", "t5-grade-where", "t5-misplaced-attribute"],
      q: {
        en: "Versions 1 and 2 of the second evolve block, as text. Sara got an A in Maths and a B in Physics. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة التطوّر الثانية، نصًّا. حصلت Sara على A في Maths وعلى B في Physics. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT  # id  * first name  * last name  o grade\nSUBJECT  # id  * name\nEach STUDENT may study one or more SUBJECTs.\nEach SUBJECT may be studied by one or more STUDENTs.",
      codeB: "STUDENT  # id  * first name  * last name\nSUBJECT  # id  * name\nEach STUDENT may study one or more SUBJECTs.\nEach SUBJECT may be studied by one or more STUDENTs.\no grade : an attribute of the STUDENT-SUBJECT relationship",
      options: [
        { en: "A is right once <code>grade</code> is made mandatory, so every student has one", ar: "A صحيح متى جُعلت <code>grade</code> إلزامية، فيكون لكل طالب درجة" },
        { en: "B is finished: it can be built as tables exactly as written", ar: "B مكتمل: يمكن بناؤه جداول كما كُتب تمامًا" },
        { en: "A stores one value per student where the business has one per pair; B names that, but has no box for <code>grade</code> yet", ar: "A يخزّن قيمة واحدة لكل طالب حيث للعمل قيمة لكل زوج؛ وB يسمّي ذلك، لكن لا صندوق لـ <code>grade</code> فيه بعد" },
        { en: "Moving <code>grade</code> to <code>SUBJECT</code> would fix A without B's change", ar: "نقل <code>grade</code> إلى <code>SUBJECT</code> يُصلح A دون تغيير B" }
      ],
      answer: 2,
      hint: {
        en: "Ask of each version: how many grades can Sara have? Then ask whether B has anywhere to store them.",
        ar: "اسأل كل إصدار: كم درجة يمكن أن تكون لـ Sara؟ ثم اسأل هل في B مكان لتخزينها."
      },
      explain: {
        en: "A gives Sara one grade, with no subject — the A and the B cannot both live there, mandatory or not. Moving it to <code>SUBJECT</code> only swaps which half is missing. B is the right diagnosis: <code>grade</code> belongs to the relationship, one value per student per subject. But it is fixed in thought, not in boxes — an M:M has no column to hold it, which is why Lesson 5 is needed.",
        ar: "A يمنح Sara درجة واحدة بلا مادّة — فلا تتّسع لـ A وB معًا، إلزامية كانت أو لا. ونقلها إلى <code>SUBJECT</code> لا يفعل إلا تبديل النصف الناقص. أمّا B فهو التشخيص الصحيح: <code>grade</code> تنتمي إلى العلاقة، قيمة لكل طالب في كل مادّة. لكنه إصلاح في الفكرة لا في الصناديق — فعلاقة ‎M:M لا عمود لها يحمل الخاصية، ولهذا نحتاج إلى الدرس 5."
      }
    },
    {
      id: "t5l4q13", type: "contrast", level: "medium", topics: ["t5-pair-test", "t5-hidden-attribute"],
      q: {
        en: "Apply the pair test — one value per what? Does each fact belong to one entity, or is it hidden by an M:M?",
        ar: "طبّق اختبار الزوج (pair test) — قيمة واحدة لكلّ ماذا؟ هل كل حقيقة تنتمي إلى كيان واحد، أم تخفيها علاقة ‎M:M؟"
      },
      concepts: [
        { en: "Belongs to one entity", ar: "تنتمي إلى كيان واحد" },
        { en: "Hidden by the M:M", ar: "تخفيها علاقة ‎M:M" }
      ],
      rows: [
        { s: { en: "<code>Credit Hours</code> of a <code>SUBJECT</code>", ar: "<code>Credit Hours</code> للمادّة <code>SUBJECT</code>" }, a: 0 },
        { s: { en: "The <code>Grade</code> Sara got in Maths", ar: "الدرجة <code>Grade</code> التي نالتها Sara في Maths" }, a: 1 },
        { s: { en: "The <code>Number Of Absences</code> a student has in a subject", ar: "<code>Number Of Absences</code> للطالب في مادّة" }, a: 1 },
        { s: { en: "The <code>Phone</code> of a <code>CLEANING COMPANY</code>", ar: "<code>Phone</code> لشركة <code>CLEANING COMPANY</code>" }, a: 0 },
        { s: { en: "The <code>Rating</code> a person gives a TV show", ar: "<code>Rating</code> التي يعطيها شخص لبرنامج تلفزيوني" }, a: 1 },
        { s: { en: "The <code>Date Of Birth</code> of a <code>STUDENT</code>", ar: "<code>Date Of Birth</code> للطالب <code>STUDENT</code>" }, a: 0 },
        { s: { en: "The <code>Enrolment Date</code> on which a student joined a subject", ar: "<code>Enrolment Date</code> التي التحق فيها طالب بمادّة" }, a: 1 }
      ],
      hint: {
        en: "Finish the sentence \"one value per …\". Does the answer name one entity or two?",
        ar: "أكمل العبارة «قيمة واحدة لكل …». هل يسمّي الجواب كيانًا واحدًا أم كيانين؟"
      },
      explain: {
        en: "Credit hours, a phone and a date of birth are one value per subject, per company, per student: each sits in its entity. A grade, a number of absences, a rating and an enrolment date are one value per student in a subject, or per person per show — a pair. Whenever the answer names two entities, the M:M between them is hiding that attribute.",
        ar: "الساعات المعتمدة والهاتف وتاريخ الميلاد قيمة واحدة لكل مادّة، ولكل شركة، ولكل طالب: فكلّ منها في كيانه. أمّا الدرجة وعدد الغيابات والتقييم وتاريخ الالتحاق فقيمة واحدة لكل طالب في مادّة، أو لكل شخص في برنامج — أي لزوج. وكلّما سمّى الجواب كيانين، فإن علاقة ‎M:M بينهما تخفي تلك الخاصية."
      }
    },

    /* ---------------------------------------------------- 4 · every M:M is worth asking */
    {
      id: "t5l4q14", type: "match", level: "easy", topics: ["t5-pair-test", "t5-tv-show-cleaning"],
      q: {
        en: "Match each fact the TV channel or the cleaning agency wants to keep with the answer to \"one value per what?\".",
        ar: "طابِق كل حقيقة تريد قناة التلفاز أو وكالة التنظيف حفظها مع جواب «قيمة واحدة لكلّ ماذا؟»."
      },
      leftHead: { en: "Fact", ar: "الحقيقة" },
      rightHead: { en: "One value per…", ar: "قيمة واحدة لكل…" },
      pairs: [
        { l: { en: "<code>Title</code>", ar: "<code>Title</code>" },
          r: { en: "show", ar: "برنامج" } },
        { l: { en: "<code>Rating</code>", ar: "<code>Rating</code>" },
          r: { en: "person and show", ar: "شخص وبرنامج" } },
        { l: { en: "<code>Phone</code>", ar: "<code>Phone</code>" },
          r: { en: "company", ar: "شركة" } },
        { l: { en: "<code>Price</code>", ar: "<code>Price</code>" },
          r: { en: "company and service", ar: "شركة وخدمة" } }
      ],
      hint: {
        en: "Does the fact change when only the show changes, or also when the viewer changes?",
        ar: "هل تتغيّر الحقيقة حين يتغيّر البرنامج وحده، أم تتغيّر كذلك حين يتغيّر المشاهد؟"
      },
      explain: {
        en: "A show has one title and a company one phone, so those sit in <code>TV SHOW</code> and <code>CLEANING COMPANY</code>. A rating changes with the person and with the show; a price with the company and with the service. Those two answers name a pair, so each M:M is hiding one attribute — the lesson's table, row by row.",
        ar: "للبرنامج عنوان واحد وللشركة هاتف واحد، فمكانهما <code>TV SHOW</code> و<code>CLEANING COMPANY</code>. أمّا التقييم فيتغيّر بتغيّر الشخص وبتغيّر البرنامج؛ والسعر بتغيّر الشركة وبتغيّر الخدمة. هذان الجوابان يسمّيان زوجًا، فكل ‎M:M تخفي خاصية — وهذا جدول الدرس صفًّا صفًّا."
      }
    },
    {
      id: "t5l4q15", type: "error", level: "medium", topics: ["t5-tv-show-cleaning", "t5-misplaced-attribute"],
      q: {
        en: "A first version of the TV channel's model. <code>rating</code> is the score one person gives one show. Which line is wrong?",
        ar: "نسخة أولى من نموذج قناة التلفاز. <code>rating</code> هي العلامة التي يعطيها شخص واحد لبرنامج واحد. أيّ سطر خاطئ؟"
      },
      lang: "text",
      code: "1  PERSON   # id  * first name  * last name  * phone\n2  TV SHOW  # id  * title  * channel  o rating\n3  Each TV SHOW may be watched by one or more PERSONs.\n4  Each PERSON may watch one or more TV SHOWs.",
      answer: 2,
      solution: {
        code: "2  TV SHOW  # id  * title  * channel\n   o rating : an attribute of the PERSON-TV SHOW relationship",
        en: "Take <code>rating</code> out of <code>TV SHOW</code>; it belongs to the relationship.",
        ar: "أخرِج <code>rating</code> من <code>TV SHOW</code>؛ فهي تنتمي إلى العلاقة."
      },
      hint: {
        en: "One rating per what? Then look for the line that stores it per something else.",
        ar: "تقييم واحد لكلّ ماذا؟ ثم ابحث عن السطر الذي يخزّنه لكلّ شيء آخر."
      },
      explain: {
        en: "Line 2. In <code>TV SHOW</code>, <code>rating</code> holds one value per show, with no person — yet each viewer gives the show their own score. Lines 3 and 4 are the slides' M:M and are correct; nothing in line 1 depends on a show. The rating is hidden by the M:M, and putting it in either entity loses half of what it means.",
        ar: "السطر 2. في <code>TV SHOW</code> تحمل <code>rating</code> قيمة واحدة لكل برنامج، بلا شخص — مع أن كل مشاهد يعطي البرنامج علامته الخاصّة. السطران 3 و4 هما ‎M:M الشرائح وهما صحيحان؛ ولا شيء في السطر 1 يتعلّق ببرنامج. التقييم تخفيه علاقة ‎M:M، ووضعه في أيّ من الكيانين يُضيّع نصف معناه."
      }
    },
    {
      id: "t5l4q16", type: "multi", level: "hard", topics: ["t5-tv-show-cleaning", "t5-pair-test", "t5-hidden-attribute"],
      q: {
        en: "Each <code>CLEANING COMPANY</code> may provide one or more <code>CLEANING SERVICE</code>s; each <code>CLEANING SERVICE</code> may be provided by one or more companies. Which facts does this M:M hide? Select all that apply.",
        ar: "Each <code>CLEANING COMPANY</code> may provide one or more <code>CLEANING SERVICE</code>s؛ وEach <code>CLEANING SERVICE</code> may be provided by one or more companies. أيّ الحقائق تخفيها علاقة ‎M:M هذه؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The <code>Address</code> of a company's office", ar: "<code>Address</code> مكتب الشركة" },
        { en: "The <code>Price</code> a company charges for a service", ar: "<code>Price</code> الذي تتقاضاه شركة عن خدمة" },
        { en: "The <code>Description</code> of a service, such as window cleaning", ar: "<code>Description</code> الخدمة، مثل تنظيف النوافذ" },
        { en: "The <code>Start Date</code> on which a company began offering a service", ar: "<code>Start Date</code> الذي بدأت فيه شركة تقديم خدمة" },
        { en: "The <code>Number Of Services</code> a company offers", ar: "<code>Number Of Services</code> التي تقدّمها الشركة" }
      ],
      answer: [1, 3],
      hint: {
        en: "For each fact: if you know only the company, is the value fixed? If you know only the service?",
        ar: "لكل حقيقة: إن عرفت الشركة وحدها، هل تتحدّد القيمة؟ وإن عرفت الخدمة وحدها؟"
      },
      explain: {
        en: "Price and start date need both a company and a service: one company prices window cleaning differently from carpet cleaning, and another company prices window cleaning differently again. The address belongs to <code>CLEANING COMPANY</code> and the description to <code>CLEANING SERVICE</code>. The number of services mentions services but is one value per company — and it can be counted from the line, so it is not a hidden attribute.",
        ar: "السعر وتاريخ البدء يحتاجان إلى شركة وخدمة معًا: فشركة تسعّر تنظيف النوافذ بخلاف تنظيف السجّاد، وشركة أخرى تسعّر تنظيف النوافذ بسعر آخر. أمّا العنوان فيخصّ <code>CLEANING COMPANY</code>، والوصف يخصّ <code>CLEANING SERVICE</code>. وعدد الخدمات يذكر الخدمات لكنه قيمة واحدة لكل شركة — بل يمكن عدّه من الخطّ نفسه، فليس خاصية مخفيّة."
      }
    },
    {
      id: "t5l4q17", type: "tf", level: "easy", topics: ["t5-list-column", "t5-hidden-attribute"],
      q: {
        en: "Storing <code>persons.ratings = 'News 4, Drama 2'</code> is an acceptable way to keep each person's ratings until the M:M is resolved.",
        ar: "تخزين <code>persons.ratings = 'News 4, Drama 2'</code> طريقة مقبولة لحفظ تقييمات كل شخص إلى أن تُحَلّ علاقة ‎M:M."
      },
      truth: false,
      hint: {
        en: "Chapter 2: how many values may one attribute hold for one instance?",
        ar: "الفصل 2: كم قيمة يجوز أن تحملها الخاصية الواحدة للحالة الواحدة؟"
      },
      explain: {
        en: "False. A list in one column breaks Chapter 2's single-valued rule, and a question such as \"the average rating of News\" becomes string surgery instead of a query. A hidden attribute needs a row per pair — a row no current table has. The list only looks like a fix because it squeezes the pairs into one cell.",
        ar: "خطأ. القائمة في عمود واحد تكسر قاعدة القيمة الواحدة (single-valued) من الفصل 2، ويصير سؤال مثل «متوسّط تقييم News» عملية تقطيع نصوص بدل أن يكون استعلامًا. الخاصية المخفيّة تحتاج إلى صفّ لكل زوج — صفّ لا يملكه أيّ جدول حالي. وتبدو القائمة حلًّا فقط لأنها تحشر الأزواج في خانة واحدة."
      }
    },

    /* ---------------------------------------------------- 5 · redundant relationships */
    {
      id: "t5l4q18", type: "compare", level: "medium", topics: ["t5-redundant", "t5-relationship-path"],
      q: {
        en: "Versions 1 and 2 of the third evolve block, as text. A student's supervisor is the teacher who supervises the student's study group. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة التطوّر الثالثة، نصًّا. مشرف الطالب هو المعلّم الذي يشرف على مجموعته الدراسية. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT      join / have               STUDY GROUP\nSTUDY GROUP  supervised by / supervise  TEACHER\nSTUDENT      supervised by / supervise  TEACHER",
      codeB: "STUDENT      join / have               STUDY GROUP\nSTUDY GROUP  supervised by / supervise  TEACHER",
      options: [
        { en: "B has lost the fact of who supervises each student", ar: "B فقد حقيقة من يشرف على كل طالب" },
        { en: "A is safer, because the supervisor is stored in two places and one can check the other", ar: "A أكثر أمانًا، لأن المشرف مخزَّن في مكانين فيتحقّق أحدهما من الآخر" },
        { en: "A stores one fact twice, and the copies can disagree; B reads it through the study group, so there is one answer", ar: "A يخزّن حقيقة واحدة مرّتين، وقد تختلف النسختان؛ وB يقرؤها عبر المجموعة الدراسية، فيكون الجواب واحدًا" },
        { en: "B should also drop <code>STUDY GROUP</code>&ndash;<code>TEACHER</code>, since it too joins a student to a teacher", ar: "على B أن يحذف كذلك <code>STUDY GROUP</code>&ndash;<code>TEACHER</code>، لأنها هي أيضًا تربط طالبًا بمعلّم" }
      ],
      answer: 2,
      hint: {
        en: "Follow <em>join</em> then <em>supervised by</em> in B. What do you reach?",
        ar: "اتبع <em>join</em> ثم <em>supervised by</em> في B. إلى ماذا تصل؟"
      },
      explain: {
        en: "The path <em>join</em> then <em>supervised by</em> already gives each student one supervisor, so A's third line is redundant: a second copy that is not checked against the first, and for Omar the two copies disagree. B deletes only that line and loses no fact. The <code>STUDY GROUP</code>&ndash;<code>TEACHER</code> line is part of the path; removing it would lose the fact itself.",
        ar: "المسار <em>join</em> ثم <em>supervised by</em> يعطي كل طالب مشرفًا واحدًا أصلًا، فالسطر الثالث في A زائد: نسخة ثانية لا تُطابَق مع الأولى، وعند Omar تختلف النسختان. أمّا B فيحذف ذلك السطر وحده ولا يفقد أيّ حقيقة. وخطّ <code>STUDY GROUP</code>&ndash;<code>TEACHER</code> جزء من المسار؛ وحذفه يُضيّع الحقيقة نفسها."
      }
    },
    {
      id: "t5l4q19", type: "output", level: "hard", topics: ["t5-redundant"],
      q: {
        en: "Version 1's tables from the lesson: <code>study_groups</code> 1 Algebra Circle (teacher 31), 2 Data Club (32). <code>students</code> (<code>group_id</code>, <code>teacher_id</code>): Sara (1, 31), Omar (1, 32), Lina (2, 32), Yousef (no group, no teacher). The office gives Algebra Circle to Khaled (32) and runs the disagreement query. Which student does it return?",
        ar: "جداول الإصدار 1 في الدرس: في <code>study_groups</code> المجموعة 1 Algebra Circle (المعلّم 31)، و2 Data Club (32). وفي <code>students</code> (<code>group_id</code>، <code>teacher_id</code>): Sara (1، 31)، وOmar (1، 32)، وLina (2، 32)، وYousef (بلا مجموعة ولا معلّم). يُسند المكتب Algebra Circle إلى Khaled (32) ثم يُجري استعلام التعارض. أيّ طالب يُعيده؟"
      },
      lang: "sql",
      code: "UPDATE study_groups SET teacher_id = 32 WHERE group_id = 1;\n\nSELECT s.first_name, g.teacher_id AS group_says, s.teacher_id AS student_says\nFROM students s JOIN study_groups g ON g.group_id = s.group_id\nWHERE s.teacher_id <> g.teacher_id\nORDER BY s.first_name;",
      blanks: [
        { accept: ["Sara"], label: { en: "first_name", ar: "first_name" } }
      ],
      solution: { code: "first_name | group_says | student_says\nSara       | 32         | 31", en: "Sara: the group says 32, her row still says 31.", ar: "Sara: المجموعة تقول 32، وصفّها لا يزال يقول 31." },
      hint: {
        en: "The update touched one copy of the fact. Whose other copy did nobody touch?",
        ar: "التحديث مسّ نسخة واحدة من الحقيقة. نسخةُ مَن الأخرى لم يمسّها أحد؟"
      },
      explain: {
        en: "Sara. Updating the group fixed Omar's disagreement by accident and created a new one for Sara, whose <code>students.teacher_id</code> still says 31. That is the cost of a redundant relationship: every change must be made twice, and forgetting one creates a contradiction. In version 2 there is no <code>students.teacher_id</code>, so one update moves every member of the group at once.",
        ar: "Sara. تحديث المجموعة أصلح تعارض Omar مصادفةً وأنشأ تعارضًا جديدًا لـ Sara، إذ لا يزال <code>students.teacher_id</code> في صفّها يقول 31. هذا ثمن العلاقة الزائدة: كل تغيير يجب أن يُجرى مرّتين، ونسيان أحدهما يولّد تناقضًا. وفي الإصدار 2 لا يوجد <code>students.teacher_id</code>، فتحديث واحد ينقل أعضاء المجموعة كلّهم دفعة واحدة."
      }
    },
    {
      id: "t5l4q20", type: "write", level: "hard", topics: ["t5-relationship-path", "t5-redundant"],
      q: {
        en: "Version 2's tables: <code>study_groups (group_id, name, teacher_id)</code> and <code>students (student_id, first_name, last_name, group_id)</code> — no <code>teacher_id</code> in <code>students</code>. Using the aliases <code>s</code> and <code>g</code>, write a query that lists the first names of the students Rana (teacher 31) supervises, in alphabetical order.",
        ar: "جداول الإصدار 2: <code>study_groups (group_id, name, teacher_id)</code> و<code>students (student_id, first_name, last_name, group_id)</code> — بلا <code>teacher_id</code> في <code>students</code>. مستعملًا الاسمين المستعارين <code>s</code> و<code>g</code>، اكتب استعلامًا يعرض الأسماء الأولى للطلاب الذين تشرف عليهم Rana (المعلّمة 31)، مرتّبةً أبجديًّا."
      },
      lang: "sql",
      lines: 4,
      checks: [
        { re: "FROM\\s+students\\s+(AS\\s+)?s\\b", flags: "i",
          label: { en: "reads students, alias s", ar: "يقرأ students بالاسم المستعار s" } },
        { re: "JOIN\\s+study_groups\\s+(AS\\s+)?g\\b", flags: "i",
          label: { en: "joins study_groups, alias g: the path goes through the group", ar: "يربط study_groups بالاسم المستعار g: المسار يمرّ بالمجموعة" } },
        { re: "ON\\s+(g\\.group_id\\s*=\\s*s\\.group_id|s\\.group_id\\s*=\\s*g\\.group_id)", flags: "i",
          label: { en: "joins on group_id", ar: "يربط على group_id" } },
        { re: "WHERE\\s+g\\.teacher_id\\s*=\\s*31", flags: "i",
          label: { en: "filters on the group's teacher_id = 31", ar: "يرشّح على teacher_id الخاصّ بالمجموعة = 31" } },
        { re: "ORDER\\s+BY\\s+(s\\.)?first_name", flags: "i",
          label: { en: "orders by first_name", ar: "يرتّب حسب first_name" } }
      ],
      forbid: [
        { re: "\\bs\\.teacher_id\\b", flags: "i",
          label: { en: "students has no teacher_id in version 2: the supervisor is read through the path", ar: "لا teacher_id في students في الإصدار 2: المشرف يُقرأ عبر المسار" } }
      ],
      solution: {
        code: "SELECT s.first_name\nFROM students s JOIN study_groups g ON g.group_id = s.group_id\nWHERE g.teacher_id = 31\nORDER BY s.first_name;",
        en: "Returns Omar and Sara, both in Algebra Circle.",
        ar: "يُعيد Omar وSara، وكلاهما في Algebra Circle."
      },
      hint: {
        en: "The supervisor is not in <code>students</code> any more. Which table holds it, and which column gets you there?",
        ar: "المشرف لم يعد في <code>students</code>. أيّ جدول يحمله، وأيّ عمود يوصلك إليه؟"
      },
      explain: {
        en: "Join <code>students</code> to <code>study_groups</code> on <code>group_id</code> and filter on <code>g.teacher_id</code>: that is the relationship path written in SQL, and it returns Omar and Sara. Reaching for <code>s.teacher_id</code> is the redundant line coming back as a column. Through the path the supervisor has one source, so the answer cannot contradict itself.",
        ar: "اربط <code>students</code> بـ <code>study_groups</code> على <code>group_id</code> ورشّح على <code>g.teacher_id</code>: هذا هو مسار العلاقة (relationship path) مكتوبًا بلغة SQL، ويُعيد Omar وSara. أمّا اللجوء إلى <code>s.teacher_id</code> فهو الخطّ الزائد يعود في صورة عمود. وعبر المسار يكون للمشرف مصدر واحد، فلا يمكن أن يناقض الجواب نفسه."
      }
    },
    {
      id: "t5l4q21", type: "ordercode", level: "medium", topics: ["t5-relationship-path"],
      q: {
        en: "Build version 2 of the supervisor model with its foreign keys, then read each student's supervisor through the path. Put the statements in an order that runs.",
        ar: "ابنِ الإصدار 2 من نموذج الإشراف بمفاتيحه الأجنبية، ثم اقرأ مشرف كل طالب عبر المسار. رتّب الأوامر بترتيب يُنفَّذ."
      },
      items: [
        { code: "CREATE TABLE teachers (teacher_id NUMBER PRIMARY KEY,\n  hire_date VARCHAR2(10) NOT NULL);\nINSERT INTO teachers VALUES (31, '2019-09-01');\nINSERT INTO teachers VALUES (32, '2021-02-01');" },
        { code: "CREATE TABLE study_groups (group_id NUMBER PRIMARY KEY,\n  name VARCHAR2(20) NOT NULL,\n  teacher_id NUMBER NOT NULL REFERENCES teachers(teacher_id));" },
        { code: "INSERT INTO study_groups VALUES (1, 'Algebra Circle', 31);\nINSERT INTO study_groups VALUES (2, 'Data Club', 32);" },
        { code: "CREATE TABLE students (student_id NUMBER PRIMARY KEY,\n  first_name VARCHAR2(20) NOT NULL,\n  group_id NUMBER REFERENCES study_groups(group_id));\nINSERT INTO students VALUES (1001, 'Sara', 1);" },
        { code: "SELECT s.first_name, g.teacher_id AS supervisor\nFROM students s JOIN study_groups g ON g.group_id = s.group_id;" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "A foreign key can only point at a table, and a row, that already exists.",
        ar: "المفتاح الأجنبي لا يشير إلا إلى جدول، وإلى صفّ، موجودَين مسبقًا."
      },
      explain: {
        en: "<code>teachers</code> first, because <code>study_groups.teacher_id</code> references it; then the groups, which need teachers 31 and 32; then <code>students</code>, whose <code>group_id</code> references a group that must exist. Only then can the join read the supervisor through the path. Notice that <code>students</code> has no <code>teacher_id</code> at all.",
        ar: "<code>teachers</code> أوّلًا، لأن <code>study_groups.teacher_id</code> يشير إليه؛ ثم المجموعات، وهي تحتاج إلى المعلّمين 31 و32؛ ثم <code>students</code>، و<code>group_id</code> فيه يشير إلى مجموعة يجب أن تكون موجودة. وبعد ذلك فقط يستطيع الربط قراءة المشرف عبر المسار. ولاحظ أن <code>students</code> لا يحوي <code>teacher_id</code> أصلًا."
      }
    },
    {
      id: "t5l4q22", type: "order", level: "medium", topics: ["t5-same-meaning", "t5-redundant"],
      q: {
        en: "A draft has a direct line between two entities that are also connected by a path of other lines. Put the steps of deciding whether the direct line is redundant in order.",
        ar: "في مسوّدة خطّ مباشر بين كيانين يربطهما كذلك مسار من خطوط أخرى. رتّب خطوات الحكم بأن الخطّ المباشر زائد أم لا."
      },
      items: [
        { en: "Notice that the two entities are joined both directly and through a path", ar: "لاحظ أن الكيانين مرتبطان مباشرةً وعبر مسار معًا" },
        { en: "Read the direct line in ERDish", ar: "اقرأ الخطّ المباشر بلغة ERDish" },
        { en: "Read the path in ERDish, one line after the other", ar: "اقرأ المسار بلغة ERDish، خطًّا بعد خطّ" },
        { en: "Ask the business whether both readings mean the same thing", ar: "اسأل العمل هل القراءتان تعنيان الشيء نفسه" },
        { en: "If they do, delete the direct line; if not, keep it", ar: "إن كانتا كذلك فاحذف الخطّ المباشر؛ وإلا فأبقِه" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "A second path is a reason to ask, not an answer. What must you compare before deleting anything?",
        ar: "المسار الثاني سبب للسؤال، لا جواب. ماذا يجب أن تقارن قبل أن تحذف أيّ شيء؟"
      },
      explain: {
        en: "This is the same-meaning test. Spotting a second path only raises the question; you read both in ERDish and compare their meanings, and the business decides. Deleting as soon as you see a second path is the mistake the lesson warns about — the tutor line would go, and with it a real fact.",
        ar: "هذا اختبار المعنى نفسه (same-meaning test). رؤية مسار ثانٍ لا تفعل إلا إثارة السؤال؛ فتقرأ الاثنين بلغة ERDish وتقارن معنييهما، والعمل هو الذي يحكم. أمّا الحذف بمجرّد رؤية مسار ثانٍ فهو الخطأ الذي يحذّر منه الدرس — فسيذهب خطّ الـ tutor، ومعه حقيقة حقيقية."
      }
    },
    {
      id: "t5l4q23", type: "mcq", level: "hard", topics: ["t5-same-meaning", "t5-learns-from", "t5-relationship-path"],
      q: {
        en: "A model has <code>STUDENT</code> <em>studies</em> <code>SUBJECT</code> (M:M), <code>SUBJECT</code> <em>taught by</em> <code>TEACHER</code> (each subject taught by one and only one teacher), and <code>STUDENT</code> <em>learns from</em> <code>TEACHER</code>. Students may also attend extra sessions with any teacher, and <em>learns from</em> records those too. What should the designer do with <em>learns from</em>?",
        ar: "في نموذج: <code>STUDENT</code> <em>studies</em> <code>SUBJECT</code> (‎M:M)، و<code>SUBJECT</code> <em>taught by</em> <code>TEACHER</code> (كل مادّة يدرّسها معلّم واحد فقط)، و<code>STUDENT</code> <em>learns from</em> <code>TEACHER</code>. ويجوز للطلاب أيضًا حضور حصص إضافية مع أيّ معلّم، و<em>learns from</em> تسجّل هذه أيضًا. ماذا يفعل المصمّم بـ <em>learns from</em>؟"
      },
      options: [
        { en: "Remove it: <em>studies</em> then <em>taught by</em> already leads from <code>STUDENT</code> to <code>TEACHER</code>", ar: "يحذفها: <em>studies</em> ثم <em>taught by</em> توصل أصلًا من <code>STUDENT</code> إلى <code>TEACHER</code>" },
        { en: "Keep it: the path gives the teachers of the student's subjects, not the extra sessions, so it records a fact of its own", ar: "يُبقيها: المسار يعطي معلّمي موادّ الطالب، لا الحصص الإضافية، فهي تسجّل حقيقة خاصّة بها" },
        { en: "Remove <em>taught by</em> instead, since <em>learns from</em> already joins students to teachers", ar: "يحذف <em>taught by</em> بدلًا منها، لأن <em>learns from</em> تربط الطلاب بالمعلّمين أصلًا" },
        { en: "Remove it: two relationships may never connect the same two entities", ar: "يحذفها: لا يجوز أبدًا أن تربط علاقتان الكيانين نفسيهما" }
      ],
      answer: 1,
      hint: {
        en: "Read the path in ERDish and read <em>learns from</em>. Can every fact in the second be derived from the first?",
        ar: "اقرأ المسار بلغة ERDish واقرأ <em>learns from</em>. هل يمكن اشتقاق كل حقيقة في الثانية من الأوّل؟"
      },
      explain: {
        en: "Keep it. A teacher met only in an extra session is reached by <em>learns from</em> but by no path through <code>SUBJECT</code>, so the line cannot be derived and is not redundant. Had \"learns from\" meant exactly \"the teachers of the subjects I study\", it would be redundant and should go. Removing <em>taught by</em> loses who teaches each subject, and several lines may join the same two entities when each carries its own meaning.",
        ar: "يُبقيها. المعلّم الذي لا يلتقيه الطالب إلا في حصّة إضافية تصل إليه <em>learns from</em> ولا يصل إليه أيّ مسار عبر <code>SUBJECT</code>، فالخطّ لا يُشتقّ وليس زائدًا. ولو كانت «learns from» تعني بالضبط «معلّمي الموادّ التي أدرسها» لكانت زائدة ووجب حذفها. وحذف <em>taught by</em> يُضيّع من يدرّس كل مادّة، ويجوز أن تربط عدّة خطوط الكيانين نفسيهما ما دام لكلّ منها معناه."
      }
    },
    {
      id: "t5l4q24", type: "tf", level: "easy", topics: ["t5-same-meaning", "t5-redundant"],
      q: {
        en: "The school gives each student a personal tutor, chosen freely from any teacher. Because <code>STUDENT</code> already reaches <code>TEACHER</code> through <code>STUDY GROUP</code>, the line <code>STUDENT</code> <em>tutored by</em> <code>TEACHER</code> is redundant.",
        ar: "تمنح المدرسة كل طالب مرشدًا شخصيًّا (tutor) يُختار بحرّية من أيّ معلّم. ولأن <code>STUDENT</code> يصل أصلًا إلى <code>TEACHER</code> عبر <code>STUDY GROUP</code>، فإن الخطّ <code>STUDENT</code> <em>tutored by</em> <code>TEACHER</code> زائد."
      },
      truth: false,
      hint: {
        en: "Does the path give the tutor, or something else?",
        ar: "هل يعطي المسار المرشد، أم شيئًا آخر؟"
      },
      explain: {
        en: "False. The path gives the group's supervisor; the tutor is a different fact — Omar's tutor can be Khaled while his supervisor is Rana. A relationship is redundant only when the path means the same thing. A second path is not proof of redundancy, and removing this line would lose a real fact.",
        ar: "خطأ. المسار يعطي مشرف المجموعة؛ أمّا المرشد فحقيقة أخرى — فقد يكون مرشد Omar هو Khaled ومشرفه Rana. العلاقة لا تكون زائدة إلا إذا كان المسار يعني الشيء نفسه. والمسار الثاني ليس دليلًا على الزيادة، وحذف هذا الخطّ يُضيّع حقيقة حقيقية."
      }
    }
  ]
};
