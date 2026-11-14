/* Question bank: T5 lesson 1 test -- Transferability. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-01"] = {
  title: { en: "Test 1 — Transferability", ar: "اختبار 1 — قابلية النقل" },
  intro: {
    en: "24 questions on lesson 1: what a transfer is and what it is not, the three questions about a line and where each is drawn, the transferable study group, the receipt and its diamond, cancel and reissue, and why the business — not the entity names — decides. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الأول: ما النقل وما ليس نقلًا، والأسئلة الثلاثة عن الخط وأين يُرسم جواب كلٍّ منها، ومجموعة الدراسة القابلة للنقل، والإيصال ومعيَّنه، والإلغاء وإعادة الإصدار، ولماذا يقرّر العملُ — لا أسماءُ الكيانات — قابليةَ النقل. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · can the link move? */
    {
      id: "t5l1q01", type: "tf", level: "easy", topics: ["t5-transfer", "t5-transferability"],
      q: {
        en: "Mr Saleh falls sick. The school closes class <code>M10A</code> and opens a new class <code>M10B</code> for Ms Rana with the same students. That is a transfer of the class–teacher link.",
        ar: "مرض الأستاذ صالح. فأغلقت المدرسة الشعبة <code>M10A</code> وفتحت شعبة جديدة <code>M10B</code> للأستاذة رنا بالطلاب أنفسهم. هذا نقلٌ (transfer) لارتباط الشعبة بالمعلّم."
      },
      truth: false,
      hint: {
        en: "After a transfer, is it still the same instance?",
        ar: "بعد النقل، هل تبقى النسخة (instance) نفسها؟"
      },
      explain: {
        en: "False. A transfer keeps the instance and changes only its parent: <code>M10A</code> would stay <code>M10A</code>, with its students and marks, and only its teacher would change. Closing one class and opening another creates a different instance — that is what a school is forced into when the model wrongly says the link can never move.",
        ar: "خطأ. النقل يُبقي النسخة ويغيّر أباها فقط: تبقى <code>M10A</code> هي <code>M10A</code> بطلابها وعلاماتها، ولا يتغيّر إلا معلّمها. أمّا إغلاق شعبة وفتح أخرى فيُنشئ نسخة مختلفة — وهذا ما تُضطرّ إليه المدرسة حين يقول النموذج خطأً إن الارتباط لا ينتقل أبدًا."
      }
    },
    {
      id: "t5l1q02", type: "output", level: "easy", topics: ["t5-transfer-update", "t5-transfer"],
      q: {
        en: "<code>classes</code> holds <code>('M10A', 'Year 10 Maths', 3)</code> and <code>('S10A', 'Year 10 Science', 7)</code> as <code>(class_id, name, teacher_id)</code>. <code>enrolments</code> holds students 1001, 1002 and 1003 in <code>M10A</code> (marks 78, 85, 91) and student 1004 in <code>S10A</code>. Ms Rana is teacher 7. What does the query return?",
        ar: "يحمل <code>classes</code> الصفّين <code>('M10A', 'Year 10 Maths', 3)</code> و<code>('S10A', 'Year 10 Science', 7)</code> بالترتيب <code>(class_id, name, teacher_id)</code>. ويحمل <code>enrolments</code> الطلاب 1001 و1002 و1003 في <code>M10A</code> (بالعلامات 78 و85 و91) والطالب 1004 في <code>S10A</code>. والأستاذة رنا هي المعلّمة 7. ماذا يُعيد الاستعلام؟"
      },
      lang: "sql",
      code: "UPDATE classes\nSET    teacher_id = 7\nWHERE  class_id = 'M10A';\n\nSELECT c.teacher_id, COUNT(e.student_id) AS students, SUM(e.mark) AS marks\nFROM classes c JOIN enrolments e ON e.class_id = c.class_id\nWHERE c.class_id = 'M10A'\nGROUP BY c.teacher_id;",
      blanks: [
        { accept: ["7"], label: { en: "teacher_id", ar: "teacher_id" } },
        { accept: ["3"], label: { en: "students", ar: "students" } },
        { accept: ["254"], label: { en: "marks", ar: "marks" } }
      ],
      hint: {
        en: "The update touched one column of one row. Did any enrolment row change?",
        ar: "لمس التحديث عمودًا واحدًا في صفّ واحد. هل تغيّر أيّ صفّ في enrolments؟"
      },
      explain: {
        en: "7, 3 and 254. The transfer is one <code>UPDATE</code> of the foreign key: <code>M10A</code> keeps its primary key, so every enrolment still points at it, with the same marks (78 + 85 + 91). Only the parent changed, from 3 to 7. That is what \"the same class, with a new teacher\" looks like in tables.",
        ar: "7 و3 و254. النقل أمر <code>UPDATE</code> واحد على المفتاح الأجنبي: تحتفظ <code>M10A</code> بمفتاحها الأساسي، فيبقى كل تسجيل مشيرًا إليها بالعلامات نفسها (78 + 85 + 91). لم يتغيّر إلا الأب، من 3 إلى 7. هكذا تبدو «الشعبة نفسها بمعلّم جديد» في الجداول."
      },
      solution: {
        out: "teacher_id | students | marks\n7          | 3        | 254",
        en: "Run in alasql on these tables: one row, teacher_id = 7, students = 3, marks = 254.",
        ar: "نُفّذ في alasql على هذه الجداول: صفّ واحد، teacher_id = 7 وstudents = 3 وmarks = 254."
      }
    },
    {
      id: "t5l1q03", type: "mcq", level: "medium", topics: ["t5-transferable", "t5-transferability", "t5-wrong-diamond"],
      q: {
        en: "Suppose a designer drew <code>CLASS</code>–<code>TEACHER</code> as nontransferable. Mid-semester Mr Saleh falls sick. What does the model leave the school able to do?",
        ar: "افترض أن مصمّمًا رسم <code>CLASS</code>–<code>TEACHER</code> غير قابلة للنقل. وفي منتصف الفصل مرض الأستاذ صالح. ماذا يترك النموذج للمدرسة أن تفعل؟"
      },
      options: [
        { en: "Update <code>M10A</code>'s teacher to Ms Rana, as long as the class stays mandatory", ar: "أن تحدّث معلّم <code>M10A</code> إلى الأستاذة رنا، ما دامت الشعبة إلزامية" },
        { en: "Close <code>M10A</code> and open a new class for Ms Rana", ar: "أن تُغلق <code>M10A</code> وتفتح شعبة جديدة للأستاذة رنا" },
        { en: "Give <code>M10A</code> two teachers, Mr Saleh and Ms Rana, at the same time", ar: "أن تعطي <code>M10A</code> معلّمَين، صالح ورنا، في الوقت نفسه" },
        { en: "Nothing changes: a diamond only matters for receipts", ar: "لا شيء يتغيّر: المعيَّن لا يهمّ إلا في الإيصالات" }
      ],
      answer: 1,
      hint: {
        en: "Nontransferable means the link, once made, never moves. What is left when the link cannot move?",
        ar: "غير قابلة للنقل تعني أن الارتباط بعد إنشائه لا ينتقل أبدًا. فماذا يبقى حين لا يمكن نقل الارتباط؟"
      },
      explain: {
        en: "If the link cannot move, the only way to a new teacher is a new instance: close the class and open another, losing \"same class, same marks\". That is why the slides say a class is usually transferable — \"what would we do if the original teacher became sick?\" Optionality has nothing to say about moving, and two teachers at once would change cardinality, not transferability.",
        ar: "إن لم يكن الارتباط قابلًا للنقل، فالطريق الوحيد إلى معلّم جديد نسخةٌ جديدة: إغلاق الشعبة وفتح أخرى، فتضيع «الشعبة نفسها والعلامات نفسها». ولهذا تقول الشرائح إن الشعبة غالبًا قابلة للنقل — «وإلّا فماذا نفعل إن مرض المعلّم الأصلي؟». والإلزامية لا تقول شيئًا عن النقل، ومعلّمان معًا يغيّران التعدّدية لا قابلية النقل."
      }
    },

    /* ---------------------------------------------------- 2 · the third question about a line */
    {
      id: "t5l1q04", type: "match", level: "easy", topics: ["t5-where-drawn", "t5-relationship-review"],
      q: {
        en: "The <code>EMPLOYEE</code>–<code>DEPARTMENT</code> line. Match each thing drawn on it to what it tells H.R.",
        ar: "خط <code>EMPLOYEE</code>–<code>DEPARTMENT</code>. صِل كل ما هو مرسوم عليه بما يقوله لقسم الموارد البشرية."
      },
      leftHead: { en: "On the line", ar: "على الخط" },
      rightHead: { en: "It tells you", ar: "يقول لك" },
      pairs: [
        { l: { en: "Solid half at <code>EMPLOYEE</code>", ar: "نصف متّصل عند <code>EMPLOYEE</code>" },
          r: { en: "Every employee must be assigned to a department", ar: "كل موظّف يجب أن يُعيَّن في قسم" } },
        { l: { en: "Crow's foot at <code>EMPLOYEE</code>", ar: "رِجل غراب عند <code>EMPLOYEE</code>" },
          r: { en: "A department may be responsible for many employees", ar: "القسم قد يكون مسؤولًا عن موظّفين كثيرين" } },
        { l: { en: "Single toe at <code>DEPARTMENT</code>", ar: "إصبع واحدة عند <code>DEPARTMENT</code>" },
          r: { en: "An employee is in one department at a time", ar: "الموظّف في قسم واحد في كل وقت" } },
        { l: { en: "Nothing in the middle", ar: "لا شيء في المنتصف" },
          r: { en: "Carlos may move from Accounting to Development", ar: "قد ينتقل Carlos من المحاسبة إلى التطوير" } }
      ],
      hint: {
        en: "Halves answer must/may, ends answer how many, the middle answers can it move.",
        ar: "النصفان يجيبان يجب/قد، والطرفان يجيبان كم، والمنتصف يجيب هل ينتقل."
      },
      explain: {
        en: "Each question has its own place. Optionality is on the halves (the solid <code>EMPLOYEE</code> half: must). Cardinality is at the ends (the crow's foot: many employees per department; the single toe: one department per employee). Transferability is in the middle, and an empty middle means transferable. The trap is reading \"one department\" as \"never a different one\": the toe says one at a time.",
        ar: "لكل سؤال مكانه. الإلزامية على النصفين (نصف <code>EMPLOYEE</code> المتّصل: يجب). والتعدّدية عند الطرفين (رِجل الغراب: موظّفون كثيرون لكل قسم؛ والإصبع الواحدة: قسم واحد لكل موظّف). وقابلية النقل في المنتصف، والمنتصف الفارغ يعني قابلة للنقل. والفخّ قراءة «قسم واحد» على أنها «لا قسم آخر أبدًا»: الإصبع تقول واحدًا في كل وقت."
      }
    },
    {
      id: "t5l1q05", type: "multi", level: "medium", topics: ["t5-relationship-review", "t5-where-drawn"],
      q: {
        en: "Carlos Gomez asks to move from Accounting to Development. All H.R. has is the sentence below. Which statements are right? Choose every one.",
        ar: "يطلب Carlos Gomez الانتقال من المحاسبة إلى التطوير. وكل ما لدى الموارد البشرية الجملةُ أدناه. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      lang: "erdish",
      code: "Each EMPLOYEE must be assigned to one and only one DEPARTMENT.",
      options: [
        { en: "\"must\" answers optionality: Carlos cannot be left with no department", ar: "«must» تجيب عن الإلزامية: لا يجوز أن يبقى Carlos بلا قسم" },
        { en: "\"one and only one\" means Carlos can never be in a different department", ar: "«one and only one» تعني أن Carlos لا يمكن أن يكون في قسم آخر أبدًا" },
        { en: "The sentence does not say whether the link may move; the middle of the line does", ar: "الجملة لا تقول هل ينتقل الارتباط؛ منتصف الخط هو الذي يقول" },
        { en: "\"one and only one\" answers cardinality: one department at a time", ar: "«one and only one» تجيب عن التعدّدية: قسم واحد في كل وقت" },
        { en: "Because the sentence uses \"must\", the relationship is nontransferable", ar: "بما أن الجملة تستعمل «must»، فالعلاقة غير قابلة للنقل" }
      ],
      answer: [0, 2, 3],
      hint: {
        en: "Which of the three review questions has a slot in the ERDish sentence, and which does not?",
        ar: "أيّ أسئلة المراجعة الثلاثة لها خانة في جملة ERDish، وأيّها ليس لها؟"
      },
      explain: {
        en: "The sentence answers two questions: <em>must</em> is optionality and <em>one and only one</em> is cardinality — one at a time. Transferability has no slot in it; it is read from the middle of the line, and the slides say people may change departments, so the line has no diamond. Reading \"must\" or \"only one\" as \"never moves\" is the mistake the lesson warns about.",
        ar: "تجيب الجملة عن سؤالين: <em>must</em> هي الإلزامية و<em>one and only one</em> هي التعدّدية — واحد في كل وقت. أمّا قابلية النقل فلا خانة لها فيها؛ تُقرأ من منتصف الخط، والشرائح تقول إن الناس قد يغيّرون أقسامهم، فلا معيَّن على الخط. وقراءة «must» أو «only one» على أنها «لا ينتقل أبدًا» هي الخطأ الذي يحذّر منه الدرس."
      }
    },
    {
      id: "t5l1q06", type: "tf", level: "easy", topics: ["t5-diamond", "t5-where-drawn"],
      q: {
        en: "It is the receipt that cannot move, so the diamond is drawn inside the <code>RECEIPT</code> softbox, beside its UID.",
        ar: "الإيصال هو الذي لا ينتقل، لذلك يُرسم المعيَّن داخل صندوق <code>RECEIPT</code>، بجانب معرّفه الفريد (UID)."
      },
      truth: false,
      hint: {
        en: "Is transferability a property of one entity, or of the link between two?",
        ar: "هل قابلية النقل صفةٌ لكيان واحد، أم للارتباط بين اثنين؟"
      },
      explain: {
        en: "False. The slides: \"a nontransferable relationship is represented with the diamond on the relationship.\" What cannot change is the link between a receipt and its student, so the mark goes in the middle of the line. It replaces nothing: the halves and the toes stay as they were.",
        ar: "خطأ. تقول الشرائح: «تُمثَّل العلاقة غير القابلة للنقل بالمعيَّن على العلاقة». فما لا يتغيّر هو الارتباط بين الإيصال وطالبه، لذلك تُوضع العلامة في منتصف الخط. ولا تحلّ محلّ شيء: يبقى النصفان والأصابع كما هي."
      }
    },

    /* ---------------------------------------------------- 3 · transferable: the study group */
    {
      id: "t5l1q07", type: "tf", level: "easy", topics: ["t5-default-transferable"],
      q: {
        en: "Every relationship drawn in Chapter 3, none of which had a diamond, was transferable — even though nobody said so.",
        ar: "كل علاقة رُسمت في الفصل 3، ولم يكن على أيٍّ منها معيَّن، كانت قابلة للنقل — مع أن أحدًا لم يقل ذلك."
      },
      truth: true,
      hint: {
        en: "Which of the two kinds gets a symbol?",
        ar: "أيّ النوعين يأخذ رمزًا؟"
      },
      explain: {
        en: "True. Only the nontransferable case has a symbol, so a line without a diamond reads as transferable. Transferable is the default: you add a mark only where the business forbids the move.",
        ar: "صحيح. لا يأخذ رمزًا إلا غيرُ القابل للنقل، فالخط بلا معيَّن يُقرأ قابلًا للنقل. القابلية للنقل هي الأصل: لا تضيف علامة إلا حيث يمنع العملُ النقل."
      }
    },
    {
      id: "t5l1q08", type: "output", level: "medium", topics: ["t5-study-group", "t5-transfer-update"],
      q: {
        en: "The lesson's tables: <code>students</code> holds Sara (1001) and Omar (1002) in group 1, Algebra Circle; Lina (1003) in group 2, Data Club; Yousef (1004) with no group. Sara moves. What does the query return?",
        ar: "جداول الدرس: يحمل <code>students</code> Sara (1001) وOmar (1002) في المجموعة 1، Algebra Circle؛ وLina (1003) في المجموعة 2، Data Club؛ وYousef (1004) بلا مجموعة. تنتقل Sara. ماذا يُعيد الاستعلام؟"
      },
      lang: "sql",
      code: "UPDATE students\nSET    group_id = 2\nWHERE  student_id = 1001;\n\nSELECT COUNT(*) AS students,\n       SUM(CASE WHEN group_id = 2 THEN 1 ELSE 0 END) AS data_club\nFROM students;",
      blanks: [
        { accept: ["4"], label: { en: "students", ar: "students" } },
        { accept: ["2"], label: { en: "data_club", ar: "data_club" } }
      ],
      hint: {
        en: "Does a transfer add or remove a row?",
        ar: "هل يضيف النقل صفًّا أو يحذفه؟"
      },
      explain: {
        en: "4 and 2. Sara moved; her row did not — there are still four students, and the Data Club now has Lina and Sara. Nobody deleted Sara and entered her again. Yousef still counts as a student with no group: that is the dashed half, a different question from whether Sara may move.",
        ar: "4 و2. انتقلت Sara، ولم يتغيّر صفّها — ما زال هناك أربعة طلاب، وصار في Data Club كلٌّ من Lina وSara. لم يحذف أحدٌ Sara ويُدخلها من جديد. وما زال Yousef طالبًا بلا مجموعة: هذا هو النصف المتقطّع، وهو سؤال غير سؤال جواز انتقال Sara."
      },
      solution: {
        out: "students | data_club\n4        | 2",
        en: "Run in alasql on the lesson's tables: one row, students = 4, data_club = 2.",
        ar: "نُفّذ في alasql على جداول الدرس: صفّ واحد، students = 4 وdata_club = 2."
      }
    },
    {
      id: "t5l1q09", type: "mcq", level: "easy", topics: ["t5-study-group", "t5-default-transferable", "t5-where-drawn"],
      q: {
        en: "On the <code>STUDENT</code>–<code>STUDY GROUP</code> line, Yousef may have no group and Sara may switch groups. Which reading of the line is right?",
        ar: "على خط <code>STUDENT</code>–<code>STUDY GROUP</code>، قد لا يكون لـ Yousef مجموعة، وقد تبدّل Sara مجموعتها. أيّ قراءة للخط صحيحة؟"
      },
      options: [
        { en: "Both facts come from the missing diamond", ar: "الحقيقتان كلتاهما من غياب المعيَّن" },
        { en: "Yousef's empty group comes from the missing diamond; Sara's move from the dashed half", ar: "فراغ مجموعة Yousef من غياب المعيَّن؛ وانتقال Sara من النصف المتقطّع" },
        { en: "Sara's move comes from the crow's foot at <code>STUDENT</code>", ar: "انتقال Sara من رِجل الغراب عند <code>STUDENT</code>" },
        { en: "Yousef's empty group comes from the dashed <code>STUDENT</code> half; Sara's move from the empty middle", ar: "فراغ مجموعة Yousef من نصف <code>STUDENT</code> المتقطّع؛ وانتقال Sara من المنتصف الفارغ" }
      ],
      answer: 3,
      hint: {
        en: "Optionality and transferability are separate questions, drawn in separate places.",
        ar: "الإلزامية وقابلية النقل سؤالان منفصلان، يُرسمان في مكانين منفصلين."
      },
      explain: {
        en: "\"May belong to no group\" is optionality, read from the dashed half; \"may move to another group\" is transferability, read from the empty middle. The crow's foot only says a group may have many students. Crediting both facts to the missing diamond is the confusion the lesson warns about: the diamond changes neither halves nor ends.",
        ar: "«قد لا ينتمي إلى مجموعة» إلزاميةٌ تُقرأ من النصف المتقطّع؛ و«قد ينتقل إلى مجموعة أخرى» قابليةُ نقل تُقرأ من المنتصف الفارغ. ورِجل الغراب لا تقول إلا إن المجموعة قد تضمّ طلابًا كثيرين. ونسبة الحقيقتين إلى غياب المعيَّن هي الخلط الذي يحذّر منه الدرس: المعيَّن لا يغيّر النصفين ولا الطرفين."
      }
    },

    /* ---------------------------------------------------- 4 · nontransferable: the receipt and the diamond */
    {
      id: "t5l1q10", type: "compare", level: "medium", topics: ["t5-diamond", "t5-receipt", "t5-nontransferable"],
      q: {
        en: "Versions 1 and 2 of the receipt evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر الإيصال، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "RECEIPT  issued to / issued  STUDENT\n  RECEIPT half: solid    end at RECEIPT: crow's foot\n  STUDENT half: dashed   end at STUDENT: single toe\n  middle: nothing",
      codeB: "RECEIPT  issued to / issued  STUDENT\n  RECEIPT half: solid    end at RECEIPT: crow's foot\n  STUDENT half: dashed   end at STUDENT: single toe\n  middle: diamond",
      options: [
        { en: "A is enough: the solid <code>RECEIPT</code> half already ties each receipt to its student for good", ar: "A يكفي: نصف <code>RECEIPT</code> المتّصل يربط كل إيصال بطالبه نهائيًّا" },
        { en: "B is better: A allows a receipt to be re-pointed to another student, as the clerk did with 5003; B forbids it and changes nothing else", ar: "B أفضل: A يسمح بإعادة توجيه الإيصال إلى طالب آخر، كما فعل الموظّف بالإيصال 5003؛ وB يمنع ذلك ولا يغيّر شيئًا آخر" },
        { en: "B is better because the diamond also stops a student from having more than one receipt", ar: "B أفضل لأن المعيَّن يمنع أيضًا أن يكون للطالب أكثر من إيصال" },
        { en: "B is better, but it should also make the <code>STUDENT</code> half solid, or the diamond means nothing", ar: "B أفضل، لكن يجب أن يجعل نصف <code>STUDENT</code> متّصلًا أيضًا، وإلّا فلا معنى للمعيَّن" }
      ],
      answer: 1,
      hint: {
        en: "List what differs between A and B — then ask which business rule that one difference carries.",
        ar: "عدّد ما يختلف بين A وB — ثم اسأل أيّ قاعدة عمل يحملها هذا الفرق الوحيد."
      },
      explain: {
        en: "The two lines differ only in the middle. A's halves and ends are right, but its empty middle says a receipt may be moved — exactly what happened to receipt 5003. B adds the diamond, so once issued, a receipt stays with its student. The solid half only says a receipt must have a student now, not that it keeps the same one; the crow's foot still allows many receipts per student.",
        ar: "لا يختلف الخطّان إلا في المنتصف. نصفا A وطرفاه صحيحة، لكن منتصفه الفارغ يقول إن الإيصال قد يُنقل — وهذا بالضبط ما حدث للإيصال 5003. ويضيف B المعيَّن، فيبقى الإيصال بعد إصداره مع طالبه. والنصف المتّصل لا يقول إلا إن للإيصال طالبًا الآن، لا إنه يحتفظ بالطالب نفسه؛ ورِجل الغراب ما زالت تسمح بإيصالات كثيرة للطالب الواحد."
      }
    },
    {
      id: "t5l1q11", type: "fill", level: "easy", topics: ["t5-diamond-rule", "t5-receipt"],
      q: {
        en: "Say the slides' receipt model aloud, diamond included. Fill each blank.",
        ar: "قُل نموذج الإيصال في الشرائح بصوت عالٍ، ومعه المعيَّن. املأ كل فراغ."
      },
      lang: "erdish",
      code: "Each RECEIPT ____1____ issued to ____2____ STUDENT.\nEach STUDENT may be issued one or more RECEIPTs.\nOnce a RECEIPT has been issued, it cannot be ____3____ to another STUDENT.",
      blanks: [
        { accept: ["must be", "must"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["transferred", "moved"], label: { en: "3", ar: "3" } }
      ],
      solution: { en: "1 = must be, 2 = one and only one, 3 = transferred.", ar: "1 = must be، 2 = one and only one، 3 = transferred." },
      hint: {
        en: "The first two blanks are Chapter 3's slots; the diamond needs a sentence of its own.",
        ar: "الفراغان الأوّلان خانتا الفصل 3؛ والمعيَّن يحتاج إلى جملة خاصّة به."
      },
      explain: {
        en: "The solid <code>RECEIPT</code> half gives \"must be\" and the single toe at <code>STUDENT</code> gives \"one and only one\". The ERDish sentence has no slot for transferability, so the diamond is said as a business rule of its own: once issued, it cannot be transferred to another student.",
        ar: "نصف <code>RECEIPT</code> المتّصل يعطي «must be»، والإصبع الواحدة عند <code>STUDENT</code> تعطي «one and only one». وجملة ERDish لا خانة فيها لقابلية النقل، لذلك يُقال المعيَّن قاعدةَ عمل مستقلّة: بعد إصدار الإيصال لا يمكن نقله إلى طالب آخر."
      }
    },
    {
      id: "t5l1q12", type: "trace", level: "medium", topics: ["t5-receipt", "t5-nontransferable", "t5-transfer-update"],
      q: {
        en: "The lesson's <code>receipts</code> table, before any correction: 5001 Sara (1001) 300, 5002 Omar (1002) 300, 5003 Omar (1002) 40. <code>student_id</code> is <code>NUMBER NOT NULL</code>. The diagram has a diamond on this line. The clerk runs the script. What happens?",
        ar: "جدول <code>receipts</code> في الدرس قبل أيّ تصحيح: 5001 لـ Sara (1001) بـ 300، و5002 لـ Omar (1002) بـ 300، و5003 لـ Omar (1002) بـ 40. والعمود <code>student_id</code> من نوع <code>NUMBER NOT NULL</code>. وفي المخطّط معيَّن على هذا الخط. ينفّذ الموظّف النصّ. ماذا يحدث؟"
      },
      lang: "sql",
      code: "UPDATE receipts\nSET    student_id = 1003\nWHERE  receipt_no = 5003;\n\nSELECT COUNT(*) AS receipts,\n       SUM(CASE WHEN student_id = 1002 THEN amount ELSE 0 END) AS omar,\n       SUM(CASE WHEN student_id = 1003 THEN amount ELSE 0 END) AS lina\nFROM receipts;",
      options: [
        { en: "The update is refused because the relationship is nontransferable; receipts = 3, omar = 340, lina = 0", ar: "يُرفض التحديث لأن العلاقة غير قابلة للنقل؛ receipts = 3 وomar = 340 وlina = 0" },
        { en: "The update runs without error; receipts = 3, omar = 300, lina = 40", ar: "يُنفَّذ التحديث بلا خطأ؛ receipts = 3 وomar = 300 وlina = 40" },
        { en: "The update creates a new receipt for Lina and keeps Omar's; receipts = 4, omar = 340, lina = 40", ar: "يُنشئ التحديث إيصالًا جديدًا لـ Lina ويُبقي إيصال Omar؛ receipts = 4 وomar = 340 وlina = 40" },
        { en: "The update is refused by <code>NOT NULL</code>; receipts = 3, omar = 340, lina = 0", ar: "يرفض <code>NOT NULL</code> التحديث؛ receipts = 3 وomar = 340 وlina = 0" }
      ],
      answer: 1,
      hint: {
        en: "Which keyword in <code>CREATE TABLE</code> would stand for the diamond?",
        ar: "أيّ كلمة مفتاحية في <code>CREATE TABLE</code> تمثّل المعيَّن؟"
      },
      explain: {
        en: "The update runs: <code>CREATE TABLE</code> has no keyword for a diamond, so <code>student_id</code> accepts it like any column. Receipt 5003 now says Lina, Omar's total drops to 300, and nothing shows that anything changed. <code>NOT NULL</code> only stops an empty value, and an <code>UPDATE</code> never adds a row. The diamond has to be kept by the application: set on <code>INSERT</code>, never updated.",
        ar: "يُنفَّذ التحديث: ليس في <code>CREATE TABLE</code> كلمة مفتاحية للمعيَّن، فيقبله <code>student_id</code> كأيّ عمود. صار الإيصال 5003 يقول Lina، ونزل مجموع Omar إلى 300، ولا شيء يُظهر أن شيئًا تغيّر. و<code>NOT NULL</code> لا يمنع إلا القيمة الفارغة، و<code>UPDATE</code> لا يضيف صفًّا أبدًا. فالمعيَّن يحفظه التطبيق: يُملأ عند <code>INSERT</code> ولا يُحدَّث أبدًا."
      },
      solution: {
        out: "receipts | omar | lina\n3        | 300  | 40",
        en: "Run in alasql on the lesson's tables: the update affects 1 row, then receipts = 3, omar = 300, lina = 40.",
        ar: "نُفّذ في alasql على جداول الدرس: يمسّ التحديث صفًّا واحدًا، ثم receipts = 3 وomar = 300 وlina = 40."
      }
    },
    {
      id: "t5l1q13", type: "mcq", level: "medium", topics: ["t5-diamond", "t5-nontransferable"],
      q: {
        en: "The <code>RECEIPT</code>–<code>STUDENT</code> line has a diamond. What keeps that rule in the database?",
        ar: "على خط <code>RECEIPT</code>–<code>STUDENT</code> معيَّن. ما الذي يحفظ هذه القاعدة في قاعدة البيانات؟"
      },
      options: [
        { en: "<code>NOT NULL</code> on <code>receipts.student_id</code>", ar: "<code>NOT NULL</code> على <code>receipts.student_id</code>" },
        { en: "<code>REFERENCES students(student_id)</code> on <code>receipts.student_id</code>", ar: "<code>REFERENCES students(student_id)</code> على <code>receipts.student_id</code>" },
        { en: "The application: it fills <code>student_id</code> once, on <code>INSERT</code>, and never offers an update of it", ar: "التطبيق: يملأ <code>student_id</code> مرّة واحدة عند <code>INSERT</code>، ولا يعرض تحديثه أبدًا" },
        { en: "<code>UNIQUE</code> on <code>receipts.student_id</code>", ar: "<code>UNIQUE</code> على <code>receipts.student_id</code>" }
      ],
      answer: 2,
      hint: {
        en: "Each constraint on the list belongs to some other part of the line. Which part?",
        ar: "كل قيد في القائمة يخصّ جزءًا آخر من الخط. أيّ جزء؟"
      },
      explain: {
        en: "<code>NOT NULL</code> comes from the solid half and <code>REFERENCES</code> makes the column a foreign key; both still allow an update to another existing student. <code>UNIQUE</code> would wrongly allow one receipt per student, breaking the crow's foot. SQL has no keyword for the diamond, so the application keeps it: set on <code>INSERT</code>, correct by cancel and reissue.",
        ar: "<code>NOT NULL</code> يأتي من النصف المتّصل، و<code>REFERENCES</code> يجعل العمود مفتاحًا أجنبيًّا؛ وكلاهما يسمح بالتحديث إلى طالب آخر موجود. و<code>UNIQUE</code> يسمح خطأً بإيصال واحد لكل طالب، فيكسر رِجل الغراب. وليس في SQL كلمة مفتاحية للمعيَّن، فيحفظه التطبيق: يُملأ عند <code>INSERT</code>، ويُصحَّح بالإلغاء وإعادة الإصدار."
      }
    },

    /* ---------------------------------------------------- 5 · mistakes are cancelled, not moved */
    {
      id: "t5l1q14", type: "error", level: "medium", topics: ["t5-cancel-reissue", "t5-keep-history"],
      q: {
        en: "Receipt 5001 (tuition fees, 300) was issued to Sara (1001), but Lina (1003) paid it. The bursar writes down the correction. Which step breaks the diamond?",
        ar: "صدر الإيصال 5001 (رسوم دراسية، 300) لـ Sara (1001)، لكن Lina (1003) هي التي دفعت. يكتب أمين الصندوق خطوات التصحيح. أيّ خطوة تكسر المعيَّن؟"
      },
      lang: "text",
      code: "1  Find receipt 5001: Sara (1001), 300, Tuition fees\n2  Check with the cashier: Lina (1003) paid it\n3  Change receipt 5001's student from 1001 to 1003\n4  Write up receipt 5005 for Lina: 300, Tuition fees\n5  Give Lina the new paper receipt",
      answer: 3,
      hint: {
        en: "Which step changes whom an issued receipt is linked to?",
        ar: "أيّ خطوة تغيّر الطالب المرتبط بإيصال صادر؟"
      },
      explain: {
        en: "Step 3 moves an issued receipt to another student — the one thing the diamond forbids. The slides: if it was issued in error, it must be cancelled and another receipt written up. So step 3 should mark 5001 cancelled, leaving it with Sara. Step 4 is not a mistake: writing up a new receipt is the reissue half of the correction.",
        ar: "الخطوة 3 تنقل إيصالًا صادرًا إلى طالب آخر — وهو الشيء الوحيد الذي يمنعه المعيَّن. تقول الشرائح: إن صدر خطأً فيجب إلغاؤه وكتابة إيصال آخر. فالخطوة 3 يجب أن تعلّم 5001 ملغى، وتُبقيه مع Sara. أمّا الخطوة 4 فليست خطأً: كتابة إيصال جديد هي نصف «إعادة الإصدار» من التصحيح."
      },
      solution: {
        code: "1  Find receipt 5001: Sara (1001), 300, Tuition fees\n2  Check with the cashier: Lina (1003) paid it\n3  Mark receipt 5001 CANCELLED; it stays with Sara\n4  Write up receipt 5005 for Lina: 300, Tuition fees\n5  Give Lina the new paper receipt",
        en: "Cancel where it stands, then reissue.",
        ar: "ألغِه حيث هو، ثم أعِد الإصدار."
      }
    },
    {
      id: "t5l1q15", type: "ordercode", level: "medium", topics: ["t5-cancel-reissue", "t5-receipt"],
      q: {
        en: "Build the receipt example from nothing and cancel receipt 5003, in Oracle, where a foreign key must reference a table that already exists. Put the statements in an order that runs.",
        ar: "ابنِ مثال الإيصال من لا شيء وألغِ الإيصال 5003، في Oracle، حيث يجب أن يشير المفتاح الأجنبي إلى جدول موجود مسبقًا. رتّب الأوامر ترتيبًا يعمل."
      },
      items: [
        { code: "CREATE TABLE students (student_id NUMBER PRIMARY KEY, first_name VARCHAR2(20) NOT NULL, last_name VARCHAR2(20) NOT NULL);\nINSERT INTO students VALUES (1002, 'Omar', 'Khalil');" },
        { code: "CREATE TABLE receipts (receipt_no NUMBER PRIMARY KEY,\n  student_id NUMBER NOT NULL REFERENCES students(student_id),\n  amount NUMBER NOT NULL, status VARCHAR2(10) NOT NULL);" },
        { code: "INSERT INTO receipts VALUES (5003, 1002, 40, 'ISSUED');" },
        { code: "UPDATE receipts SET status = 'CANCELLED' WHERE receipt_no = 5003;" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "A foreign key needs its parent table and its parent row; a cancellation needs a receipt to cancel.",
        ar: "المفتاح الأجنبي يحتاج إلى جدول أبيه وصفّ أبيه؛ والإلغاء يحتاج إلى إيصال يُلغى."
      },
      explain: {
        en: "<code>receipts</code> references <code>students</code>, so students come first; receipt 5003 needs student 1002 to exist, and it can be cancelled only once it has been issued. Notice what the last statement updates: <code>status</code>, an attribute of the receipt, never <code>student_id</code>, the link the diamond locks.",
        ar: "يشير <code>receipts</code> إلى <code>students</code>، فالطلاب أولًا؛ والإيصال 5003 يحتاج إلى وجود الطالب 1002، ولا يُلغى إلا بعد أن يصدر. ولاحظ ما يحدّثه الأمر الأخير: <code>status</code>، خاصية من خصائص الإيصال، لا <code>student_id</code> أبدًا، وهو الارتباط الذي يقفله المعيَّن."
      }
    },
    {
      id: "t5l1q16", type: "multi", level: "hard", topics: ["t5-keep-history", "t5-cancel-reissue"],
      q: {
        en: "Section 5's correction has run: receipt 5003 (Omar, 40) is marked <code>CANCELLED</code> and receipt 5004 (Lina, 40) is issued. 5001 (Sara, 300) and 5002 (Omar, 300) are untouched. Which statements are right? Choose every one.",
        ar: "نُفّذ تصحيح القسم 5: عُلِّم الإيصال 5003 (Omar، 40) <code>CANCELLED</code>، وصدر الإيصال 5004 (Lina، 40). ولم يُمسّ 5001 (Sara، 300) ولا 5002 (Omar، 300). أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>receipts</code> now has four rows, and 5003's <code>student_id</code> is still 1002", ar: "صار في <code>receipts</code> أربعة صفوف، وما زال <code>student_id</code> للإيصال 5003 هو 1002" },
        { en: "Summing every receipt per student, with no filter on <code>status</code>, credits Omar with 340", ar: "جمع كل الإيصالات لكل طالب، بلا تصفية على <code>status</code>، ينسب إلى Omar مبلغ 340" },
        { en: "The cleaner fix would have been to delete 5003, since 5004 replaces it", ar: "كان الإصلاح الأنظف حذف 5003، ما دام 5004 يحلّ محلّه" },
        { en: "Omar's paper receipt 5003 still matches a row, and that row says it was cancelled", ar: "ما زال إيصال Omar الورقي 5003 يطابق صفًّا، وهذا الصفّ يقول إنه أُلغي" },
        { en: "Setting <code>status</code> to <code>CANCELLED</code> broke the diamond, but the slides allow it for mistakes", ar: "تعيين <code>status</code> إلى <code>CANCELLED</code> كسر المعيَّن، لكن الشرائح تسمح بذلك للأخطاء" }
      ],
      answer: [0, 1, 3],
      hint: {
        en: "Cancel and reissue never moves and never deletes. What does that leave in the table, and what must a total now look at?",
        ar: "الإلغاء وإعادة الإصدار لا ينقل ولا يحذف أبدًا. فماذا يبقى في الجدول، وإلى ماذا يجب أن ينظر المجموع الآن؟"
      },
      explain: {
        en: "Four rows; 5003 still points to Omar and says cancelled, so every paper receipt anyone holds matches a row and the mistake stays visible. The price is that totals must filter on <code>status = 'ISSUED'</code>: without it Omar is credited 300 + 40 = 340. Deleting 5003 would leave Omar holding a receipt the database has never heard of. The status update does not touch the diamond: it locks only <code>student_id</code>.",
        ar: "أربعة صفوف؛ وما زال 5003 يشير إلى Omar ويقول إنه ملغى، فكل إيصال ورقي يحمله أحد يطابق صفًّا، ويبقى الخطأ ظاهرًا. والثمن أن المجاميع يجب أن تصفّي على <code>status = 'ISSUED'</code>: وبدونها يُنسب إلى Omar مبلغ 300 + 40 = 340. وحذف 5003 يترك Omar يحمل إيصالًا لم تسمع به قاعدة البيانات قطّ. وتحديث الحالة لا يمسّ المعيَّن: فهو لا يقفل إلا <code>student_id</code>."
      },
      solution: {
        out: "first_name | paid (no filter) | paid (ISSUED only)\nLina       | 40               | 40\nOmar       | 340              | 300\nSara       | 300              | 300",
        en: "Run in alasql on the lesson's tables after the correction: 4 rows; 5003 is (1002, CANCELLED); totals as shown.",
        ar: "نُفّذ في alasql على جداول الدرس بعد التصحيح: 4 صفوف؛ و5003 هو (1002، CANCELLED)؛ والمجاميع كما تظهر."
      }
    },
    {
      id: "t5l1q17", type: "write", level: "hard", topics: ["t5-cancel-reissue", "t5-transfer-update", "t5-keep-history"],
      q: {
        en: "Start from the lesson's <code>receipts</code> table before any correction: <code>(receipt_no, student_id, issue_date, amount, paid_for, status)</code>. Receipt 5002 (tuition fees, 300) was written to Omar (1002), but Sara (1001) paid it. Write the statements that correct it without breaking the diamond. Use receipt number 5006 and the date <code>'2026-11-14'</code>.",
        ar: "ابدأ من جدول <code>receipts</code> في الدرس قبل أيّ تصحيح: <code>(receipt_no, student_id, issue_date, amount, paid_for, status)</code>. كُتب الإيصال 5002 (رسوم دراسية، 300) لـ Omar (1002)، لكن Sara (1001) هي التي دفعت. اكتب الأوامر التي تصحّحه دون أن تكسر المعيَّن. استعمل رقم الإيصال 5006 والتاريخ <code>'2026-11-14'</code>."
      },
      lang: "sql",
      lines: 6,
      checks: [
        { re: "UPDATE\\s+receipts\\s+SET\\s+status\\s*=\\s*[\"']CANCELLED[\"']", flags: "i",
          label: { en: "sets the status of a receipt to CANCELLED", ar: "يعيّن حالة إيصال إلى CANCELLED" } },
        { re: "WHERE\\s+receipt_no\\s*=\\s*5002", flags: "i",
          label: { en: "cancels receipt 5002, where it stands", ar: "يُلغي الإيصال 5002 حيث هو" } },
        { re: "INSERT\\s+INTO\\s+receipts\\b", flags: "i",
          label: { en: "writes up a new receipt", ar: "يكتب إيصالًا جديدًا" } },
        { re: "\\(\\s*5006\\s*,\\s*1001\\s*,\\s*[\"']2026-11-14[\"']\\s*,\\s*300\\s*,\\s*[\"']Tuition fees[\"']\\s*,\\s*[\"']ISSUED[\"']\\s*\\)", flags: "i",
          label: { en: "receipt 5006 is issued to Sara (1001) for 300, tuition fees", ar: "يصدر الإيصال 5006 لـ Sara (1001) بـ 300، رسوم دراسية" } }
      ],
      forbid: [
        { re: "SET\\s+[^;]*\\bstudent_id\\s*=", flags: "i",
          label: { en: "updating student_id moves an issued receipt: exactly what the diamond forbids", ar: "تحديث student_id ينقل إيصالًا صادرًا: وهذا بالضبط ما يمنعه المعيَّن" } },
        { re: "\\bDELETE\\b", flags: "i",
          label: { en: "deleting 5002 leaves Omar holding a receipt the database has never heard of", ar: "حذف 5002 يترك Omar يحمل إيصالًا لم تسمع به قاعدة البيانات" } }
      ],
      hint: {
        en: "Two statements: one changes an attribute of the wrong receipt, the other creates the right one.",
        ar: "أمران: أحدهما يغيّر خاصية في الإيصال الخطأ، والآخر يُنشئ الإيصال الصحيح."
      },
      explain: {
        en: "Receipt 5002 stays with Omar, now <code>CANCELLED</code>; 5006 is Sara's. <code>UPDATE receipts SET student_id = 1001 WHERE receipt_no = 5002</code> would also run without error — and that is exactly the statement the diamond forbids, because it rewrites whom a receipt was issued to. Updating <code>status</code> is fine: the diamond locks the link, not the receipt's other attributes.",
        ar: "يبقى الإيصال 5002 مع Omar، وقد صار <code>CANCELLED</code>؛ و5006 لـ Sara. والأمر <code>UPDATE receipts SET student_id = 1001 WHERE receipt_no = 5002</code> يُنفَّذ أيضًا بلا خطأ — وهو بالضبط الأمر الذي يمنعه المعيَّن، لأنه يعيد كتابة من صدر له الإيصال. أمّا تحديث <code>status</code> فلا بأس به: المعيَّن يقفل الارتباط، لا خصائص الإيصال الأخرى."
      },
      solution: {
        code: "UPDATE receipts\nSET status = 'CANCELLED'\nWHERE receipt_no = 5002;\nINSERT INTO receipts\nVALUES (5006, 1001, '2026-11-14', 300, 'Tuition fees', 'ISSUED');",
        en: "Run in alasql on the lesson's tables: four rows; 5002 is (1002, CANCELLED), 5006 is (1001, 300, ISSUED).",
        ar: "نُفّذ في alasql على جداول الدرس: أربعة صفوف؛ 5002 هو (1002، CANCELLED)، و5006 هو (1001، 300، ISSUED)."
      }
    },

    /* ---------------------------------------------------- 6 · the business decides */
    {
      id: "t5l1q18", type: "order", level: "easy", topics: ["t5-business-decides", "t5-diamond"],
      q: {
        en: "A designer reaches a new relationship line. Put the steps for its transferability in order, from the question to the code.",
        ar: "وصل مصمّم إلى خط علاقة جديد. رتّب خطوات قابلية نقله، من السؤال إلى الشيفرة."
      },
      items: [
        { en: "Ask the business: once linked, may this instance move to another parent?", ar: "اسأل العمل: بعد الارتباط، هل يجوز أن تنتقل هذه النسخة إلى أبٍ آخر؟" },
        { en: "Write the answer down as a business rule", ar: "اكتب الجواب قاعدةَ عمل" },
        { en: "Draw it: a diamond in the middle of the line if the move is forbidden, nothing if it is allowed", ar: "ارسمه: معيَّن في منتصف الخط إن كان النقل ممنوعًا، ولا شيء إن كان مسموحًا" },
        { en: "Tell the application: offer an UPDATE of the foreign key, or set it on INSERT only", ar: "أخبر التطبيق: اعرض تحديث (UPDATE) المفتاح الأجنبي، أو املأه عند الإضافة (INSERT) فقط" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Transferability is a business rule. Where does a business rule come from, and what does the diagram then pass on?",
        ar: "قابلية النقل قاعدة عمل. من أين تأتي قاعدة العمل، وماذا ينقل المخطّط بعد ذلك؟"
      },
      explain: {
        en: "The answer comes from the business, not from the entity names, so asking comes first. The rule is recorded, then drawn — a diamond only where the business forbids the move. Last, the diagram tells whoever writes the application which foreign keys may be updated, because SQL itself will not enforce the diamond.",
        ar: "الجواب يأتي من العمل، لا من أسماء الكيانات، لذلك يأتي السؤال أولًا. ثم تُسجَّل القاعدة، ثم تُرسم — معيَّن حيث يمنع العملُ النقل فقط. وأخيرًا يقول المخطّط لمن يكتب التطبيق أيّ المفاتيح الأجنبية يجوز تحديثها، لأن SQL نفسها لن تفرض المعيَّن."
      }
    },
    {
      id: "t5l1q19", type: "contrast", level: "medium", topics: ["t5-transferable", "t5-nontransferable", "t5-business-decides"],
      q: {
        en: "The slides' relationships, each with its business. Transferable or nontransferable?",
        ar: "علاقات الشرائح، كلٌّ مع عمله. قابلة للنقل أم غير قابلة للنقل؟"
      },
      concepts: [
        { en: "Transferable — no diamond", ar: "قابلة للنقل (transferable) — بلا معيَّن" },
        { en: "Nontransferable — diamond", ar: "غير قابلة للنقل (nontransferable) — بمعيَّن" }
      ],
      rows: [
        { s: { en: "A class allocated to a teacher who may fall sick mid-semester", ar: "شعبة مُسندة إلى معلّم قد يمرض في منتصف الفصل" }, a: 0 },
        { s: { en: "An order placed by a person with an internet company", ar: "طلب يضعه شخص لدى شركة على الإنترنت" }, a: 1 },
        { s: { en: "An employee and the job they hold within the company", ar: "موظّف والوظيفة التي يشغلها داخل الشركة" }, a: 0 },
        { s: { en: "A receipt issued to a student for a certification exam", ar: "إيصال صادر لطالب عن امتحان شهادة" }, a: 1 },
        { s: { en: "A student in a study group", ar: "طالب في مجموعة دراسة" }, a: 0 },
        { s: { en: "A membership at a club that never lets one change hands", ar: "عضوية في نادٍ لا يسمح أبدًا بانتقالها من يد إلى يد" }, a: 1 }
      ],
      hint: {
        en: "For each, ask: once linked, may it move — and who says so?",
        ar: "اسأل عن كلٍّ: بعد الارتباط، هل يجوز أن ينتقل — ومن يقول ذلك؟"
      },
      explain: {
        en: "Classes, jobs and study groups move: a teacher falls sick, people change jobs, students switch groups, so those lines carry no diamond. An order, once placed, and a receipt, once issued, stay where they are. The membership row is decided by this club's rule — another club might allow it, and its line would have no diamond.",
        ar: "الشعب والوظائف ومجموعات الدراسة تنتقل: المعلّم يمرض، والناس يغيّرون وظائفهم، والطلاب يبدّلون مجموعاتهم، فلا معيَّن على تلك الخطوط. أمّا الطلب بعد وضعه، والإيصال بعد إصداره، فيبقيان حيث هما. وبند العضوية تقرّره قاعدة هذا النادي — فقد يسمح نادٍ آخر بالنقل، فلا يحمل خطّه معيَّنًا."
      }
    },
    {
      id: "t5l1q20", type: "complete", level: "medium", topics: ["t5-business-decides", "t5-diamond-rule"],
      q: {
        en: "The second health club never lets a membership pass to another person. Complete its business rules.",
        ar: "النادي الصحّي الثاني لا يسمح أبدًا بانتقال العضوية إلى شخص آخر. أكمل قواعد عمله."
      },
      lang: "erdish",
      code: "Each MEMBERSHIP must be held by one and only one PERSON.\nEach PERSON may hold one or more MEMBERSHIPs.\n____",
      options: [
        { code: "Each PERSON may hold only one MEMBERSHIP." },
        { code: "Once a MEMBERSHIP is held by a PERSON, it cannot be transferred to another PERSON." },
        { code: "Each MEMBERSHIP may be held by one and only one PERSON." },
        { code: "A MEMBERSHIP may be transferred to another PERSON." }
      ],
      answer: 1,
      hint: {
        en: "The first two lines already settle optionality and cardinality. What is left to say?",
        ar: "السطران الأوّلان يحسمان الإلزامية والتعدّدية. فماذا بقي أن يُقال؟"
      },
      explain: {
        en: "The missing rule is the diamond, said aloud: once held, a membership cannot be transferred. \"May be transferred\" is the first club's rule. \"Only one MEMBERSHIP\" would change cardinality and \"may be held\" would change optionality — neither says anything about moving, and both contradict the lines above.",
        ar: "القاعدة الناقصة هي المعيَّن مقولًا بصوت عالٍ: بعد أن تُحمل العضوية لا يمكن نقلها. و«may be transferred» قاعدة النادي الأول. و«only one MEMBERSHIP» تغيّر التعدّدية، و«may be held» تغيّر الإلزامية — ولا تقول أيٌّ منهما شيئًا عن النقل، وكلتاهما تناقض السطرين أعلاه."
      }
    },
    {
      id: "t5l1q21", type: "compare", level: "hard", topics: ["t5-wrong-diamond", "t5-default-transferable", "t5-business-decides"],
      q: {
        en: "Versions 1 and 2 of the school-model evolve block, as text. Students may change study groups; a receipt, once issued, never changes student. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر نموذج المدرسة، نصًّا. يجوز للطلاب تغيير مجموعات الدراسة؛ والإيصال بعد إصداره لا يتغيّر طالبه أبدًا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT  join / have          STUDY GROUP  [diamond]\nRECEIPT  issued to / issued   STUDENT      [diamond]",
      codeB: "STUDENT  join / have          STUDY GROUP  [no diamond]\nRECEIPT  issued to / issued   STUDENT      [diamond]",
      options: [
        { en: "A is better: a diamond on every line is the safe default, and a move can always be added later", ar: "A أفضل: المعيَّن على كل خط هو الأصل الآمن، ويمكن دائمًا إضافة النقل لاحقًا" },
        { en: "B is better, but it leaves the receipt movable, because only one line has a diamond", ar: "B أفضل، لكنه يترك الإيصال قابلًا للنقل، لأن خطًّا واحدًا فقط عليه معيَّن" },
        { en: "B is better: A forbids Sara's legitimate move, so staff would delete her and enter her again; B marks only the move the business forbids", ar: "B أفضل: A يمنع انتقال Sara المشروع، فيحذفها الموظّفون ويُدخلونها من جديد؛ وB لا يعلّم إلا النقل الذي يمنعه العمل" },
        { en: "They mean the same: a diamond on <code>STUDENT</code>–<code>STUDY GROUP</code> only matters if the line is one-to-one", ar: "هما بالمعنى نفسه: المعيَّن على <code>STUDENT</code>–<code>STUDY GROUP</code> لا يهمّ إلا إن كان الخط واحدًا لواحد" }
      ],
      answer: 2,
      hint: {
        en: "Name A's defect in terms of what happens to Sara, then check that B keeps the receipt's diamond.",
        ar: "سمِّ عيب A بما يحدث لـ Sara، ثم تحقّق أن B يُبقي معيَّن الإيصال."
      },
      explain: {
        en: "A's defect is an invented restriction: the diamond on the group line forbids a move the business allows, and people work around it by deleting Sara and entering her again. B removes only that diamond; the receipt line keeps its own, so receipts are still locked. A wrong diamond costs as much as a missing one — neither is \"safe\". The diamond has nothing to do with one-to-one.",
        ar: "عيب A قيدٌ مخترَع: المعيَّن على خط المجموعة يمنع نقلًا يسمح به العمل، فيتحايل الناس عليه بحذف Sara وإدخالها من جديد. ولا يزيل B إلا ذلك المعيَّن؛ ويبقى خط الإيصال بمعيَّنه، فتظلّ الإيصالات مقفلة. والمعيَّن الخاطئ يكلّف بقدر المعيَّن الغائب — ولا أحدهما «آمن». ولا علاقة للمعيَّن بالواحد لواحد."
      }
    },
    {
      id: "t5l1q22", type: "error", level: "hard", topics: ["t5-wrong-diamond", "t5-business-decides"],
      q: {
        en: "A classmate's model, as text. The business: students may move between study groups; a receipt, once issued, never changes student; a class may be handed to another teacher; <em>this</em> health club lets a member hand a membership to another person; an order, once placed, stays with that person. Which line is wrong?",
        ar: "نموذج زميل، نصًّا. العمل: يجوز للطلاب الانتقال بين مجموعات الدراسة؛ والإيصال بعد إصداره لا يتغيّر طالبه أبدًا؛ والشعبة قد تُسلَّم إلى معلّم آخر؛ و<em>هذا</em> النادي الصحّي يسمح للعضو بأن يعطي عضويته لشخص آخر؛ والطلب بعد وضعه يبقى مع ذلك الشخص. أيّ سطر خطأ؟"
      },
      lang: "text",
      code: "STUDENT     join / have                     STUDY GROUP  [no diamond]\nRECEIPT     issued to / issued              STUDENT      [diamond]\nCLASS       allocated to / responsible for  TEACHER      [no diamond]\nMEMBERSHIP  held by / hold                  PERSON       [diamond]\nORDER       placed by / place               PERSON       [diamond]",
      answer: 4,
      hint: {
        en: "Check each line against this business, not against the example you remember for those entities.",
        ar: "قارن كل سطر بهذا العمل، لا بالمثال الذي تتذكّره لهذه الكيانات."
      },
      explain: {
        en: "Line 4. This club allows memberships to change hands, so the line is transferable and must carry no diamond. It is tempting because the lesson's second club drew one — but the same entities can take either answer; the club decides by what is most efficient and profitable for it. Line 5 is right: an order, once placed, is nontransferable in the slides.",
        ar: "السطر 4. هذا النادي يسمح بانتقال العضوية من يد إلى يد، فالخط قابل للنقل ويجب ألّا يحمل معيَّنًا. وهو مغرٍ لأن النادي الثاني في الدرس رسم معيَّنًا — لكن الكيانات نفسها قد تأخذ أيّ الجوابين؛ يقرّر النادي بما هو أكفأ وأربح له. والسطر 5 صحيح: الطلب بعد وضعه غير قابل للنقل في الشرائح."
      },
      solution: {
        code: "STUDENT     join / have                     STUDY GROUP  [no diamond]\nRECEIPT     issued to / issued              STUDENT      [diamond]\nCLASS       allocated to / responsible for  TEACHER      [no diamond]\nMEMBERSHIP  held by / hold                  PERSON       [no diamond]\nORDER       placed by / place               PERSON       [diamond]",
        en: "Remove the diamond from the membership line, for this club.",
        ar: "أزِل المعيَّن عن خط العضوية، لهذا النادي."
      }
    },
    {
      id: "t5l1q23", type: "mcq", level: "hard", topics: ["t5-business-decides", "t5-diamond"],
      q: {
        en: "Two health clubs model <code>MEMBERSHIP</code> held by <code>PERSON</code>. The first lets a member hand a membership to someone else; the second never does. How do their two ERDs differ?",
        ar: "ناديان صحّيان ينمذجان <code>MEMBERSHIP</code> held by <code>PERSON</code>. الأول يسمح للعضو بأن يعطي عضويته لغيره؛ والثاني لا يسمح أبدًا. بماذا يختلف مخطّطاهما؟"
      },
      options: [
        { en: "The second club's <code>MEMBERSHIP</code> half becomes dashed", ar: "يصير نصف <code>MEMBERSHIP</code> عند النادي الثاني متقطّعًا" },
        { en: "They cannot differ: transferability follows from the entities, so one of the clubs is modelling it wrong", ar: "لا يمكن أن يختلفا: قابلية النقل تتبع الكيانات، فأحد الناديين ينمذجها خطأً" },
        { en: "The second club's line loses its crow's foot, since a membership stays with one person", ar: "يفقد خطّ النادي الثاني رِجل الغراب، ما دامت العضوية تبقى مع شخص واحد" },
        { en: "They are identical — halves, ends and names — except for one diamond in the middle of the second club's line", ar: "هما متطابقان — النصفان والطرفان والأسماء — إلا معيَّنًا واحدًا في منتصف خطّ النادي الثاني" }
      ],
      answer: 3,
      hint: {
        en: "Which of the three review questions do the clubs answer differently?",
        ar: "أيّ أسئلة المراجعة الثلاثة يجيب عنها الناديان بشكل مختلف؟"
      },
      explain: {
        en: "Both clubs agree that each membership must be held by one and only one person and that a person may hold many, so the halves and ends match. They differ only on transferability, and that lives in the middle. It is a business rule, chosen by what is most efficient and profitable for each club — so both models are right for their own club.",
        ar: "يتّفق الناديان على أن كل عضوية يجب أن يحملها شخص واحد فقط لا غير، وأن الشخص قد يحمل عضويات كثيرة، فيتطابق النصفان والطرفان. ولا يختلفان إلا في قابلية النقل، ومكانها المنتصف. وهي قاعدة عمل يختارها كل نادٍ بما هو أكفأ وأربح له — فالنموذجان كلاهما صحيح لناديه."
      }
    },
    {
      id: "t5l1q24", type: "mcq", level: "hard", topics: ["t5-wrong-diamond", "t5-transferable", "t5-transfer"],
      q: {
        en: "A designer says: \"A diamond on <code>EMPLOYEE</code>–<code>DEPARTMENT</code> can do no harm — it only protects the data.\" H.R. builds the application from that model. What happens when Carlos needs to move to Development?",
        ar: "يقول مصمّم: «المعيَّن على <code>EMPLOYEE</code>–<code>DEPARTMENT</code> لا يضرّ — إنه يحمي البيانات فقط». وبنى قسم الموارد البشرية التطبيق من ذلك النموذج. ماذا يحدث حين يحتاج Carlos إلى الانتقال إلى التطوير؟"
      },
      options: [
        { en: "Nothing: the move is an attribute change, which a diamond does not lock", ar: "لا شيء: الانتقال تغييرُ خاصية، والمعيَّن لا يقفل الخصائص" },
        { en: "The application offers no transfer, so H.R. must end Carlos as employee 405 and enter him again as a new employee", ar: "لا يعرض التطبيق أيّ نقل، فيضطرّ قسم الموارد البشرية إلى إنهاء Carlos بوصفه الموظّف 405 وإدخاله من جديد موظّفًا جديدًا" },
        { en: "The database refuses the <code>UPDATE</code> of <code>department_id</code> with an error", ar: "ترفض قاعدة البيانات تحديث <code>department_id</code> بخطأ" },
        { en: "Carlos is placed in both departments, since one-and-only-one no longer applies", ar: "يوضع Carlos في القسمين كليهما، إذ لم تعد «واحد فقط لا غير» سارية" }
      ],
      answer: 1,
      hint: {
        en: "If the link may never move, what is the only way to give Carlos a new department? And who keeps the diamond?",
        ar: "إن كان الارتباط لا ينتقل أبدًا، فما الطريق الوحيد لإعطاء Carlos قسمًا جديدًا؟ ومن الذي يحفظ المعيَّن؟"
      },
      explain: {
        en: "A diamond means the link may never move, so the application never offers an update of <code>department_id</code>; the only route left is a new instance, losing Carlos's identity as employee 405. That is the cost of a wrong diamond: people work around it. SQL would not raise an error — it has no keyword for a diamond — and the department is the link, not an attribute. The slides say people may change departments, so this line is transferable.",
        ar: "المعيَّن يعني أن الارتباط لا ينتقل أبدًا، فلا يعرض التطبيق تحديث <code>department_id</code>؛ ولا يبقى إلا نسخة جديدة، فتضيع هويّة Carlos بوصفه الموظّف 405. هذا ثمن المعيَّن الخاطئ: يتحايل الناس عليه. ولن تُصدر SQL خطأً — فليس فيها كلمة مفتاحية للمعيَّن — والقسم هو الارتباط لا خاصية. والشرائح تقول إن الناس قد يغيّرون أقسامهم، فهذا الخط قابل للنقل."
      }
    }
  ]
};
