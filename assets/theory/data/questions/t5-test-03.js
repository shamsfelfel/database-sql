/* Question bank: T5 lesson 3 test -- One-to-One. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-03"] = {
  title: { en: "Test 3 — One-to-One", ar: "اختبار 3 — واحد إلى واحد" },
  intro: {
    en: "24 questions on lesson 3: the two sentences of a one-to-one, COMPUTER and MOTHERBOARD, the UNIQUE foreign key that keeps a 1:1 from becoming a 1:M, a person acting as TEACHER and as STUDENT, which table gets the key, and the 1:1 that is really one entity drawn twice. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثالث: جملتا علاقة «واحد إلى واحد»، وCOMPUTER وMOTHERBOARD، والمفتاح الأجنبي UNIQUE الذي يمنع ‎1:1 من أن تصير ‎1:M، والشخص الذي يؤدّي دور TEACHER ودور STUDENT، وأيّ جدول يأخذ المفتاح، وعلاقة ‎1:1 التي هي في الحقيقة كيان واحد رُسم مرّتين. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · one and only one, both ways */
    {
      id: "t5l3q01", type: "tf", level: "easy", topics: ["t5-one-to-one", "t5-one-to-one-sentences"],
      q: {
        en: "A relationship can only be one-to-one if both halves of its line are solid.",
        ar: "لا تكون العلاقة «واحدًا إلى واحد» إلا إذا كان نصفا خطّها متّصلين."
      },
      truth: false,
      hint: {
        en: "Which symbols name the type, and which ones say must or may?",
        ar: "أيّ الرموز يسمّي النوع، وأيّها يقول must أو may؟"
      },
      explain: {
        en: "False. The type is read from the two ends: a single toe at both ends is 1:1, whatever the halves look like. The halves carry optionality, independently, so a 1:1 can be solid, dashed or mixed — the role lines are solid at the role and dashed at <code>PERSON</code>. Confusing optionality with cardinality is exactly the slip this tests.",
        ar: "خطأ. النوع يُقرأ من الطرفين: إصبع واحدة عند الطرفين تعني ‎1:1 مهما كان شكل النصفين. أمّا النصفان فيحملان الإلزامية (optionality)، كلٌّ على حدة، فقد تكون ‎1:1 متّصلة أو متقطّعة أو مختلطة — فخطوط الأدوار متّصلة عند الدور ومتقطّعة عند <code>PERSON</code>. والخلط بين الإلزامية والتعدّدية (cardinality) هو بالضبط الزلّة التي يختبرها هذا السؤال."
      }
    },
    {
      id: "t5l3q02", type: "fill", level: "easy", topics: ["t5-computer-motherboard", "t5-one-to-one-sentences"],
      q: {
        en: "Write the slides' two business rules for the computer lab. Fill each blank.",
        ar: "اكتب قاعدتَي العمل في الشرائح لمختبر الحاسوب. املأ كل فراغ."
      },
      lang: "erdish",
      code: "Each COMPUTER ____1____ contain ____2____ MOTHERBOARD.\nEach MOTHERBOARD ____3____ contained in ____4____ COMPUTER.",
      blanks: [
        { accept: ["must"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["must be", "must"], label: { en: "3", ar: "3" } },
        { accept: ["one and only one"], label: { en: "4", ar: "4" }, wide: true }
      ],
      solution: { en: "1 = must, 2 = one and only one, 3 = must be, 4 = one and only one.", ar: "1 = must، 2 = one and only one، 3 = must be، 4 = one and only one." },
      hint: {
        en: "No computer without a motherboard, no motherboard outside a computer — and neither end is many.",
        ar: "لا حاسوب بلا لوحة أمّ، ولا لوحة أمّ خارج حاسوب — ولا طرف منهما متعدّد."
      },
      explain: {
        en: "Each <code>COMPUTER</code> <em>must</em> contain <em>one and only one</em> <code>MOTHERBOARD</code>; each <code>MOTHERBOARD</code> <em>must be</em> contained in <em>one and only one</em> <code>COMPUTER</code>. Both sentences end in \"one and only one\", so both ends are a single toe: 1:1. Both say <em>must</em>, so both halves are solid.",
        ar: "Each <code>COMPUTER</code> <em>must</em> contain <em>one and only one</em> <code>MOTHERBOARD</code>؛ وEach <code>MOTHERBOARD</code> <em>must be</em> contained in <em>one and only one</em> <code>COMPUTER</code>. تنتهي الجملتان بـ «one and only one»، فالطرفان إصبع واحدة: ‎1:1. وكلتاهما تقول <em>must</em>، فالنصفان متّصلان."
      }
    },
    {
      id: "t5l3q03", type: "mcq", level: "medium", topics: ["t5-one-to-one-sentences", "t5-roles"],
      q: {
        en: "A designer has written one sentence: \"Each <code>TEACHER</code> must be the role of one and only one <code>PERSON</code>.\" They label the line 1:1. What is wrong with that?",
        ar: "كتب مصمّم جملة واحدة: «Each <code>TEACHER</code> must be the role of one and only one <code>PERSON</code>.» ثم وسم الخطّ بأنه ‎1:1. ما الخطأ في ذلك؟"
      },
      options: [
        { en: "Nothing: \"one and only one\" in a sentence makes the line 1:1", ar: "لا شيء: «one and only one» في جملةٍ تجعل الخطّ ‎1:1" },
        { en: "The word \"must\" makes it 1:M; a 1:1 sentence says \"may\"", ar: "كلمة «must» تجعلها ‎1:M؛ وجملة ‎1:1 تقول «may»" },
        { en: "The sentence fixes only the end at <code>PERSON</code>; until someone asks how many teachers one person can act as, it could still be 1:M", ar: "الجملة تثبّت الطرف عند <code>PERSON</code> وحده؛ وما لم يُسأل كم معلّمًا يمكن أن يؤدّيه الشخص الواحد، فقد تبقى ‎1:M" },
        { en: "A role is always M:M, because a person can play many roles", ar: "الدور دائمًا ‎M:M، لأن الشخص قد يؤدّي أدوارًا كثيرة" }
      ],
      answer: 2,
      hint: {
        en: "One sentence reads the line in one direction. How many directions does the definition of 1:1 mention?",
        ar: "الجملة الواحدة تقرأ الخطّ في اتجاه واحد. كم اتجاهًا يذكر تعريف ‎1:1؟"
      },
      explain: {
        en: "A 1:1 has one and only one in <em>both</em> directions. This sentence puts a toe at <code>PERSON</code> only; the second sentence — each <code>PERSON</code> may be acting as one and only one <code>TEACHER</code> — is what puts the toe at <code>TEACHER</code>. \"Must\" and \"may\" are optionality, not the type. Several roles are several lines, each its own 1:1, not one M:M.",
        ar: "علاقة ‎1:1 فيها «واحد فقط لا غير» في <em>الاتجاهين</em>. وهذه الجملة تضع إصبعًا عند <code>PERSON</code> وحده؛ والجملة الثانية — Each <code>PERSON</code> may be acting as one and only one <code>TEACHER</code> — هي التي تضع الإصبع عند <code>TEACHER</code>. و«must» و«may» إلزامية لا نوع. والأدوار الكثيرة خطوط كثيرة، كلٌّ منها ‎1:1 مستقلّة، لا ‎M:M واحدة."
      }
    },

    /* ---------------------------------------------------- 2 · keeping it one-to-one (evolve e1) */
    {
      id: "t5l3q04", type: "compare", level: "medium", topics: ["t5-one-to-one-draft", "t5-computer-motherboard"],
      q: {
        en: "Versions 1 and 2 of the computer lab's evolve block, as text. The technician records a new motherboard for <code>LAB-01</code> and forgets to remove the old one. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر مختبر الحاسوب، نصًّا. يسجّل الفنّي لوحة أمّ جديدة لـ <code>LAB-01</code> وينسى حذف القديمة. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "COMPUTER  contain / contained in  MOTHERBOARD\n  COMPUTER half: solid       end at COMPUTER: single toe\n  MOTHERBOARD half: solid    end at MOTHERBOARD: crow's foot",
      codeB: "COMPUTER  contain / contained in  MOTHERBOARD\n  COMPUTER half: solid       end at COMPUTER: single toe\n  MOTHERBOARD half: solid    end at MOTHERBOARD: single toe",
      options: [
        { en: "Both models refuse the mistake, because both halves are solid in A and in B", ar: "النموذجان كلاهما يرفضان الخطأ، لأن النصفين متّصلان في A وفي B" },
        { en: "A refuses it and B allows it: B's toe lets a computer hold any one of several motherboards", ar: "A يرفضه وB يسمح به: إصبع B تسمح للحاسوب بأيّ واحدة من عدّة لوحات" },
        { en: "Neither refuses it; only a diamond on the line could stop a second motherboard", ar: "لا أحد منهما يرفضه؛ فالمعيَّن على الخطّ وحده يمنع لوحة ثانية" },
        { en: "A allows it: its crow's foot lets a computer contain one or more motherboards. B's toe at <code>MOTHERBOARD</code> makes the second one break the rule", ar: "A يسمح به: رِجل الغراب فيه تسمح للحاسوب بلوحة أمّ أو أكثر. وإصبع B عند <code>MOTHERBOARD</code> تجعل اللوحة الثانية مخالفةً للقاعدة" }
      ],
      answer: 3,
      hint: {
        en: "Find the one symbol that differs, and read the line from <code>COMPUTER</code>: how many motherboards?",
        ar: "جِد الرمز الوحيد المختلف، واقرأ الخطّ من <code>COMPUTER</code>: كم لوحة أمّ؟"
      },
      explain: {
        en: "Only the end at <code>MOTHERBOARD</code> changed. In A it is a crow's foot, so the technician's mistake is a legal instance of a 1:M; B's toe allows exactly one motherboard per computer. The solid halves say a computer <em>must</em> have a motherboard — they never say <em>only one</em>. The diamond answers transferability, a different question.",
        ar: "لم يتغيّر إلا الطرف عند <code>MOTHERBOARD</code>. في A هو رِجل غراب، فخطأ الفنّي حالة مشروعة من ‎1:M؛ وإصبع B لا تسمح إلا بلوحة أمّ واحدة لكل حاسوب. النصفان المتّصلان يقولان إن الحاسوب <em>يجب</em> أن تكون له لوحة — ولا يقولان أبدًا <em>واحدة فقط</em>. أمّا المعيَّن فيجيب عن قابلية النقل، وهو سؤال آخر."
      }
    },
    {
      id: "t5l3q05", type: "mcq", level: "medium", topics: ["t5-one-to-one-draft", "t5-computer-motherboard"],
      q: {
        en: "Version 2 of the computer model is the slides' recommended form. Which question does it still leave unanswered?",
        ar: "الإصدار 2 من نموذج الحاسوب هو الشكل الموصى به في الشرائح. أيّ سؤال ما زال يتركه بلا جواب؟"
      },
      options: [
        { en: "Whether a motherboard, once fitted, may later be moved to another computer", ar: "هل يجوز نقل لوحة أمّ، بعد تركيبها، إلى حاسوب آخر لاحقًا" },
        { en: "How many motherboards one computer may contain", ar: "كم لوحة أمّ يجوز أن يحتوي الحاسوب الواحد" },
        { en: "Whether a motherboard may exist outside any computer", ar: "هل يجوز أن توجد لوحة أمّ خارج أيّ حاسوب" },
        { en: "How many computers one motherboard may be contained in", ar: "في كم حاسوبًا يجوز أن تكون اللوحة الأمّ الواحدة" }
      ],
      answer: 0,
      hint: {
        en: "Version 2 answers cardinality at both ends and optionality at both halves. Which symbol is neither?",
        ar: "الإصدار 2 يجيب عن التعدّدية عند الطرفين وعن الإلزامية عند النصفين. أيّ رمز ليس هذا ولا ذاك؟"
      },
      explain: {
        en: "Transferability is drawn as a diamond on the middle of the line, and neither version has one or says anything about it. The toes answer both \"how many?\" questions; the solid halves say a motherboard must be in a computer. Fixing the crow's foot fixed cardinality only — each symbol answers its own question.",
        ar: "قابلية النقل تُرسم معيَّنًا في منتصف الخطّ، ولا يحمله أيّ من الإصدارين ولا يقول عنها شيئًا. الإصبعان يجيبان عن سؤالَي «كم؟»؛ والنصفان المتّصلان يقولان إن اللوحة يجب أن تكون في حاسوب. وإصلاح رِجل الغراب أصلح التعدّدية وحدها — فكل رمز يجيب عن سؤاله."
      }
    },
    {
      id: "t5l3q06", type: "trace", level: "hard", topics: ["t5-unique-fk", "t5-one-to-one-draft"],
      q: {
        en: "The lesson's three computers and three motherboards, but this colleague declared <code>motherboards.computer_id NUMBER NOT NULL</code> <strong>without</strong> <code>UNIQUE</code>. The technician runs the insert, then the lesson's listing. What happens?",
        ar: "حواسيب الدرس الثلاثة ولوحاته الثلاث، لكن هذا الزميل عرّف <code>motherboards.computer_id NUMBER NOT NULL</code> <strong>بلا</strong> <code>UNIQUE</code>. ينفّذ الفنّي الإضافة، ثم قائمة الدرس. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO motherboards VALUES ('MB-9001', 'H610', 1);\n\nSELECT c.label, m.serial_no, m.model\nFROM computers c JOIN motherboards m ON m.computer_id = c.computer_id\nORDER BY c.label;",
      options: [
        { en: "The insert is refused because <code>computer_id</code> is <code>NOT NULL</code>; the listing returns 3 rows", ar: "تُرفض الإضافة لأن <code>computer_id</code> من نوع <code>NOT NULL</code>؛ وتُعيد القائمة 3 صفوف" },
        { en: "The insert runs; the listing returns 4 rows, with <code>LAB-01</code> twice", ar: "تُنفَّذ الإضافة؛ وتُعيد القائمة 4 صفوف، يظهر فيها <code>LAB-01</code> مرّتين" },
        { en: "The insert runs, but the join still returns 3 rows, because a computer can only match one motherboard", ar: "تُنفَّذ الإضافة، لكن الربط يُعيد 3 صفوف، لأن الحاسوب لا يطابق إلا لوحة واحدة" },
        { en: "The insert runs and replaces <code>MB-7731</code>; the listing returns 3 rows with <code>MB-9001</code> for <code>LAB-01</code>", ar: "تُنفَّذ الإضافة وتحلّ محلّ <code>MB-7731</code>؛ وتُعيد القائمة 3 صفوف فيها <code>MB-9001</code> لـ <code>LAB-01</code>" }
      ],
      answer: 1,
      solution: {
        code: "label  | serial_no | model\nLAB-01 | MB-7731   | B450\nLAB-01 | MB-9001   | H610\nLAB-02 | MB-7732   | B450\nLAB-03 | MB-7745   | H610",
        en: "Four rows: the table has quietly become version 1.",
        ar: "أربعة صفوف: صار الجدول بصمتٍ الإصدارَ 1."
      },
      hint: {
        en: "<code>NOT NULL</code> stops an empty value. Which constraint stops a repeated one?",
        ar: "<code>NOT NULL</code> يمنع القيمة الفارغة. أيّ قيد يمنع القيمة المكرّرة؟"
      },
      explain: {
        en: "The insert runs: the value 1 is not null, and nothing forbids it from repeating. The join then returns one row per motherboard, so <code>LAB-01</code> appears twice — 4 rows. Without <code>UNIQUE</code> the column enforces a 1:M, version 1's crow's foot. An insert never replaces a row; with <code>UNIQUE</code> it would have been refused instead.",
        ar: "تُنفَّذ الإضافة: القيمة 1 ليست فارغة، ولا شيء يمنع تكرارها. ثم يُعيد الربط صفًّا لكل لوحة أمّ، فيظهر <code>LAB-01</code> مرّتين — 4 صفوف. بلا <code>UNIQUE</code> يفرض العمود ‎1:M، أي رِجل غراب الإصدار 1. والإضافة لا تحلّ محلّ صفّ أبدًا؛ ومع <code>UNIQUE</code> كانت سترفض بدلًا من ذلك."
      }
    },
    {
      id: "t5l3q07", type: "tf", level: "easy", topics: ["t5-unique-fk", "t5-computer-motherboard"],
      q: {
        en: "With <code>motherboards.computer_id</code> declared <code>NOT NULL UNIQUE</code>, joining <code>computers</code> to <code>motherboards</code> can never return more rows than there are computers.",
        ar: "حين يُعرَّف <code>motherboards.computer_id</code> بأنه <code>NOT NULL UNIQUE</code>، لا يمكن لربط <code>computers</code> بـ <code>motherboards</code> أن يُعيد صفوفًا أكثر من عدد الحواسيب."
      },
      truth: true,
      hint: {
        en: "How many motherboard rows can share one <code>computer_id</code> once it is unique?",
        ar: "كم صفًّا من اللوحات يمكن أن يشترك في <code>computer_id</code> واحد بعد أن يصير فريدًا؟"
      },
      explain: {
        en: "True. <code>UNIQUE</code> lets at most one motherboard row point at each computer, so each computer matches at most one row: the lesson's listing returns exactly 3. The join of a 1:1 never multiplies rows. Remove <code>UNIQUE</code> and the same join can return <code>LAB-01</code> twice — the 1:M of version 1.",
        ar: "صحيح. <code>UNIQUE</code> لا يسمح إلا بصفّ لوحة واحد على الأكثر يشير إلى كل حاسوب، فيطابق كل حاسوب صفًّا واحدًا على الأكثر: تُعيد قائمة الدرس 3 صفوف بالضبط. ربط علاقة ‎1:1 لا يضاعف الصفوف أبدًا. احذف <code>UNIQUE</code> فيُعيد الربط نفسه <code>LAB-01</code> مرّتين — أي ‎1:M الإصدار 1."
      }
    },

    /* ---------------------------------------------------- 3 · one-to-one for roles (evolve e2) */
    {
      id: "t5l3q08", type: "tf", level: "easy", topics: ["t5-person-twice", "t5-roles"],
      q: {
        en: "In version 1 of the role model — <code>TEACHER</code> and <code>STUDENT</code>, each with its own name and phone — a join on ids can show that teacher 31 and student 1005 are the same human being.",
        ar: "في الإصدار 1 من نموذج الأدوار — <code>TEACHER</code> و<code>STUDENT</code>، لكلٍّ منهما اسمه وهاتفه — يستطيع ربطٌ على المعرّفات أن يُظهر أن المعلّم 31 والطالب 1005 إنسان واحد."
      },
      truth: false,
      hint: {
        en: "Is there any line, or any shared column, between the two entities in version 1?",
        ar: "هل بين الكيانين في الإصدار 1 أيّ خطّ، أو أيّ عمود مشترك؟"
      },
      explain: {
        en: "False. Version 1 has no line saying rows 31 and 1005 are one person; the only way to guess is to match on names and hope no two people share one. Version 2 adds <code>PERSON</code>, and both role rows carry <code>person_id</code> 3 — now it is a join on one id. Version 1 also stores Rana's phone twice, the update anomaly.",
        ar: "خطأ. في الإصدار 1 لا يوجد خطّ يقول إن الصفّين 31 و1005 شخص واحد؛ والطريقة الوحيدة للتخمين هي المطابقة على الأسماء والأمل ألّا يتشارك شخصان اسمًا. الإصدار 2 يضيف <code>PERSON</code>، ويحمل صفّا الدورين <code>person_id</code> 3 — فصار الأمر ربطًا على معرّف واحد. والإصدار 1 يخزّن هاتف Rana مرّتين أيضًا، وهذا شذوذ التحديث (update anomaly)."
      }
    },
    {
      id: "t5l3q09", type: "multi", level: "easy", topics: ["t5-role-attributes", "t5-person-twice"],
      q: {
        en: "In version 2 of the role model, which attributes belong to <code>PERSON</code>? Choose all that apply.",
        ar: "في الإصدار 2 من نموذج الأدوار، أيّ الخصائص تنتمي إلى <code>PERSON</code>؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>Phone</code>", ar: "<code>Phone</code>" },
        { en: "<code>Hire Date</code>", ar: "<code>Hire Date</code>" },
        { en: "<code>Last Name</code>", ar: "<code>Last Name</code>" },
        { en: "<code>Start Date</code>", ar: "<code>Start Date</code>" },
        { en: "<code>First Name</code>", ar: "<code>First Name</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Does every person have it, or only those who play a certain role?",
        ar: "هل لكل شخص هذه الخاصية، أم لمن يؤدّي دورًا معيّنًا فقط؟"
      },
      explain: {
        en: "Name and phone describe the human being, so they move to <code>PERSON</code> and are stored once. <code>Hire Date</code> exists only for someone acting as a teacher, and <code>Start Date</code> only for a student: they are role attributes and stay in <code>TEACHER</code> and <code>STUDENT</code>. Putting them in <code>PERSON</code> would leave them empty for most people.",
        ar: "الاسم والهاتف يصفان الإنسان نفسه، فينتقلان إلى <code>PERSON</code> ويُخزَّنان مرّة واحدة. أمّا <code>Hire Date</code> فلا توجد إلا لمن يؤدّي دور المعلّم، و<code>Start Date</code> للطالب وحده: إنهما خاصيتا دور (role attributes) وتبقيان في <code>TEACHER</code> و<code>STUDENT</code>. ووضعهما في <code>PERSON</code> يتركهما فارغتين لمعظم الناس."
      }
    },
    {
      id: "t5l3q10", type: "complete", level: "easy", topics: ["t5-roles", "t5-mandatory-one-end"],
      q: {
        en: "The slides' role model, <code>PERSON</code> acting as <code>STUDENT</code>. Complete the second ERDish sentence.",
        ar: "نموذج الأدوار في الشرائح، <code>PERSON</code> acting as <code>STUDENT</code>. أكمل جملة ERDish الثانية."
      },
      lang: "erdish",
      code: "Each STUDENT must be the role of one and only one PERSON.\n____",
      options: [
        { code: "Each PERSON must be acting as one and only one STUDENT." },
        { code: "Each PERSON may be acting as one or more STUDENTs." },
        { code: "Each PERSON may be acting as one and only one STUDENT." },
        { code: "Each STUDENT may be the role of one and only one PERSON." }
      ],
      answer: 2,
      hint: {
        en: "Start at the other entity. Is every person a student? Can one person be two students?",
        ar: "ابدأ من الكيان الآخر. هل كل شخص طالب؟ وهل يمكن أن يكون الشخص الواحد طالبين؟"
      },
      explain: {
        en: "\"May\" because most persons are not students — Khaled is only a teacher; \"one and only one\" because a person acts as one student at most, which makes the line 1:1. \"Must\" would force every person to enrol; \"one or more\" would make it 1:M. The last option starts at <code>STUDENT</code> again and contradicts the first sentence.",
        ar: "«may» لأن معظم الأشخاص ليسوا طلّابًا — فـ Khaled معلّم فقط؛ و«one and only one» لأن الشخص يؤدّي دور طالب واحد على الأكثر، وهذا ما يجعل الخطّ ‎1:1. أمّا «must» فتُجبر كل شخص على التسجيل؛ و«one or more» تجعلها ‎1:M. والخيار الأخير يبدأ من <code>STUDENT</code> مرّة أخرى ويناقض الجملة الأولى."
      }
    },
    {
      id: "t5l3q11", type: "output", level: "medium", topics: ["t5-mandatory-one-end", "t5-roles"],
      q: {
        en: "The lesson's role tables: <code>persons</code> holds Sara (1), Omar (2), Rana (3), Lina (4) and Khaled (5). <code>teachers</code> points at persons 3 and 5. <code>students</code> points at persons 1, 2, 4 and 3. How many rows does this query return, and what is the first name in the first row?",
        ar: "جداول الأدوار في الدرس: يحمل <code>persons</code> كلًّا من Sara (1) وOmar (2) وRana (3) وLina (4) وKhaled (5). ويشير <code>teachers</code> إلى الشخصين 3 و5. ويشير <code>students</code> إلى الأشخاص 1 و2 و4 و3. كم صفًّا يُعيد هذا الاستعلام، وما الاسم الأوّل في الصفّ الأوّل؟"
      },
      lang: "sql",
      code: "SELECT p.first_name\nFROM persons p LEFT JOIN teachers t ON t.person_id = p.person_id\nWHERE t.teacher_id IS NULL\nORDER BY p.first_name;",
      blanks: [
        { accept: ["3", "three"], label: { en: "rows returned", ar: "عدد الصفوف" } },
        { accept: ["Lina"], label: { en: "first row", ar: "الصفّ الأوّل" } }
      ],
      solution: {
        code: "first_name\nLina\nOmar\nSara",
        en: "Three persons who act as no teacher: Lina, Omar, Sara.",
        ar: "ثلاثة أشخاص لا يؤدّون دور معلّم: Lina وOmar وSara."
      },
      hint: {
        en: "The query keeps the persons no teacher row points at. Which persons are those?",
        ar: "يُبقي الاستعلام الأشخاصَ الذين لا يشير إليهم أيّ صفّ معلّم. مَن هم؟"
      },
      explain: {
        en: "3 rows, Lina first. Only persons 3 and 5 are teachers, so Sara, Omar and Lina come back. These rows are legal because the half at <code>PERSON</code> is dashed: a person <em>may</em> be acting as a teacher. A model solid at both ends would make these three persons a violation — every person forced to teach.",
        ar: "3 صفوف، أوّلها Lina. الشخصان 3 و5 وحدهما معلّمان، فيعود Sara وOmar وLina. وهذه الصفوف مشروعة لأن النصف عند <code>PERSON</code> متقطّع: الشخص <em>قد</em> يؤدّي دور المعلّم. ولو كان النموذج متّصلًا عند الطرفين لكان هؤلاء الثلاثة مخالفة — كل شخص مُجبَر على التدريس."
      }
    },
    {
      id: "t5l3q12", type: "error", level: "medium", topics: ["t5-mandatory-one-end", "t5-roles", "t5-unique-fk"],
      q: {
        en: "A classmate writes the school's <code>PERSON</code>&ndash;<code>STUDENT</code> role model and its key. Most persons in the school are not students. Which line is wrong?",
        ar: "يكتب زميل نموذج الدور <code>PERSON</code>&ndash;<code>STUDENT</code> في المدرسة ومفتاحه. معظم الأشخاص في المدرسة ليسوا طلّابًا. أيّ سطر خطأ؟"
      },
      lang: "text",
      code: "1  PERSON   # id  * first name  * last name  * phone\n2  STUDENT  # id  * start date\n3  Each STUDENT must be the role of one and only one PERSON.\n4  Each PERSON must be acting as one and only one STUDENT.\n5  Foreign key: students.person_id  NUMBER NOT NULL UNIQUE",
      answer: 4,
      solution: {
        en: "Line 4 should read <code>Each PERSON may be acting as one and only one STUDENT.</code> — the half at <code>PERSON</code> is dashed.",
        ar: "يجب أن يكون السطر 4 <code>Each PERSON may be acting as one and only one STUDENT.</code> — فالنصف عند <code>PERSON</code> متقطّع."
      },
      hint: {
        en: "Roles are mandatory at one end. Which end?",
        ar: "الأدوار إلزامية عند طرف واحد. أيّ طرف؟"
      },
      explain: {
        en: "Line 4. \"Must\" makes the <code>PERSON</code> half solid, which forces every person — Khaled the teacher included — to be a student. The slides' roles are mandatory at one end, the role end: line 3 is right. Line 5 is the correct table form: the key on the solid side, <code>NOT NULL</code> for the solid half, <code>UNIQUE</code> for the toe.",
        ar: "السطر 4. كلمة «must» تجعل نصف <code>PERSON</code> متّصلًا، فتُجبر كل شخص — ومنهم المعلّم Khaled — على أن يكون طالبًا. والأدوار في الشرائح إلزامية عند طرف واحد، طرف الدور: فالسطر 3 صحيح. والسطر 5 هو الشكل الصحيح في الجدول: المفتاح في الجهة المتّصلة، و<code>NOT NULL</code> للنصف المتّصل، و<code>UNIQUE</code> للإصبع."
      }
    },
    {
      id: "t5l3q13", type: "multi", level: "hard", topics: ["t5-roles", "t5-person-twice", "t5-unique-fk"],
      q: {
        en: "Rana Saad teaches Maths and has enrolled in an evening course. In version 2 of the role model, built as the lesson's tables, which statements are true? Choose all that apply.",
        ar: "تدرّس Rana Saad الرياضيات وقد سجّلت في دورة مسائية. في الإصدار 2 من نموذج الأدوار، مبنيًّا كجداول الدرس، أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "When she changes her phone, two rows must be updated — one per role", ar: "حين تغيّر هاتفها، يجب تحديث صفّين — صفّ لكل دور" },
        { en: "Her name and phone are stored in exactly one row, in <code>persons</code>", ar: "اسمها وهاتفها مخزّنان في صفّ واحد بالضبط، في <code>persons</code>" },
        { en: "Teacher 31 and student 1005 share the same UID, because they are one person", ar: "المعلّم 31 والطالب 1005 يتشاركان المعرّف الفريد نفسه، لأنهما شخص واحد" },
        { en: "A second <code>teachers</code> row with her <code>person_id</code> is refused by <code>UNIQUE</code>", ar: "صفّ ثانٍ في <code>teachers</code> بقيمة <code>person_id</code> الخاصة بها يرفضه <code>UNIQUE</code>" },
        { en: "Her <code>teachers</code> row and her <code>students</code> row both hold <code>person_id</code> 3", ar: "صفّها في <code>teachers</code> وصفّها في <code>students</code> كلاهما يحمل <code>person_id</code> 3" }
      ],
      answer: [1, 3, 4],
      hint: {
        en: "Where does each fact about Rana live now — the human being, and each part she plays?",
        ar: "أين تقيم الآن كل حقيقة عن Rana — الإنسانة نفسها، وكل دور تؤدّيه؟"
      },
      explain: {
        en: "Her name and phone live once in <code>persons</code>, so a phone change is one update — that is the update anomaly version 2 removes. Each role row carries <code>person_id</code> 3, which is how the join finds her; <code>UNIQUE</code> refuses a second teacher row for her. The roles keep their own UIDs, 31 and 1005: <code>person_id</code> is a foreign key in them, not their identifier.",
        ar: "اسمها وهاتفها يقيمان مرّة واحدة في <code>persons</code>، فتغيير الهاتف تحديث واحد — وهذا هو شذوذ التحديث الذي يزيله الإصدار 2. ويحمل كل صفّ دور <code>person_id</code> 3، وبه يجدها الربط؛ و<code>UNIQUE</code> يرفض صفّ معلّم ثانيًا لها. أمّا الدوران فيحتفظان بمعرّفيهما، 31 و1005: فـ <code>person_id</code> مفتاح أجنبي فيهما، لا معرّفهما."
      }
    },
    {
      id: "t5l3q14", type: "trace", level: "hard", topics: ["t5-unique-fk", "t5-roles", "t5-mandatory-one-end"],
      q: {
        en: "Starting from the lesson's role tables (teachers 31 → person 3 and 32 → person 5; students 1001 → 1, 1002 → 2, 1003 → 4, 1005 → 3), the clerk runs these three statements in order. What does the final query return?",
        ar: "انطلاقًا من جداول الأدوار في الدرس (المعلّمان 31 ← الشخص 3 و32 ← الشخص 5؛ والطلّاب 1001 ← 1 و1002 ← 2 و1003 ← 4 و1005 ← 3)، ينفّذ الموظّف هذه الأوامر الثلاثة بالترتيب. ماذا يُعيد الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO teachers VALUES (33, '2026-11-01', 3);\nINSERT INTO teachers VALUES (33, '2026-11-01', 1);\n\nSELECT p.first_name, t.teacher_id, s.student_id\nFROM persons p\n  JOIN teachers t ON t.person_id = p.person_id\n  JOIN students s ON s.person_id = p.person_id\nORDER BY p.first_name;",
      options: [
        { en: "One row: Rana 31 1005 — both inserts are refused", ar: "صفّ واحد: Rana 31 1005 — تُرفض الإضافتان كلتاهما" },
        { en: "Three rows: Rana 31 1005, Rana 33 1005, Sara 33 1001", ar: "ثلاثة صفوف: Rana 31 1005، وRana 33 1005، وSara 33 1001" },
        { en: "Two rows: Rana 31 1005 and Sara 33 1001", ar: "صفّان: Rana 31 1005، وSara 33 1001" },
        { en: "Two rows: Rana 31 1005 and Rana 33 1005 — the second insert is refused", ar: "صفّان: Rana 31 1005، وRana 33 1005 — وتُرفض الإضافة الثانية" }
      ],
      answer: 2,
      solution: {
        code: "first_name | teacher_id | student_id\nRana       | 31         | 1005\nSara       | 33         | 1001",
        en: "The first insert fails on UNIQUE; the second runs.",
        ar: "تفشل الإضافة الأولى على UNIQUE؛ وتُنفَّذ الثانية."
      },
      hint: {
        en: "Check each insert against <code>teachers.person_id NOT NULL UNIQUE</code>. Then: who is now both a teacher and a student?",
        ar: "افحص كل إضافة مقابل <code>teachers.person_id NOT NULL UNIQUE</code>. ثم: مَن صار الآن معلّمًا وطالبًا معًا؟"
      },
      explain: {
        en: "The first insert names person 3, who already acts as teacher 31: <code>UNIQUE</code> refuses it, so 33 is still free. The second names person 1, Sara, who has no teacher row: it runs. Sara is also student 1001, so the join now finds two people with both roles. <code>UNIQUE</code> is the toe at <code>TEACHER</code>: one teacher per person, not one teacher in total.",
        ar: "الإضافة الأولى تسمّي الشخص 3، الذي يؤدّي دور المعلّم 31 أصلًا: يرفضها <code>UNIQUE</code>، فيبقى الرقم 33 متاحًا. والثانية تسمّي الشخص 1، Sara، التي لا صفّ معلّم لها: فتُنفَّذ. وSara هي الطالبة 1001 أيضًا، فيجد الربط الآن شخصين لهما الدوران. <code>UNIQUE</code> هو الإصبع عند <code>TEACHER</code>: معلّم واحد لكل شخص، لا معلّم واحد في المجموع."
      }
    },

    /* ---------------------------------------------------- 4 · which table gets the key */
    {
      id: "t5l3q15", type: "match", level: "easy", topics: ["t5-key-side", "t5-unique-fk"],
      q: {
        en: "Match each relationship to the foreign key that implements it.",
        ar: "صِل كل علاقة بالمفتاح الأجنبي الذي ينفّذها."
      },
      leftHead: { en: "Relationship", ar: "العلاقة" },
      rightHead: { en: "Foreign key", ar: "المفتاح الأجنبي" },
      pairs: [
        { l: { en: "1:1, solid at <code>TEACHER</code> only", ar: "‎1:1، متّصلة عند <code>TEACHER</code> وحده" },
          r: { en: "In <code>teachers</code>, <code>NOT NULL UNIQUE</code>", ar: "في <code>teachers</code>، <code>NOT NULL UNIQUE</code>" } },
        { l: { en: "1:1, solid at both ends (<code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code>)", ar: "‎1:1، متّصلة عند الطرفين (<code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code>)" },
          r: { en: "In either table, <code>NOT NULL UNIQUE</code>", ar: "في أيّ الجدولين، <code>NOT NULL UNIQUE</code>" } },
        { l: { en: "1:1, dashed at both ends", ar: "‎1:1، متقطّعة عند الطرفين" },
          r: { en: "In either table, nullable <code>UNIQUE</code>", ar: "في أيّ الجدولين، <code>UNIQUE</code> يقبل null" } },
        { l: { en: "1:M, solid at the child (<code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code>)", ar: "‎1:M، متّصلة عند الابن (<code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code>)" },
          r: { en: "In the child's table, <code>NOT NULL</code>, no <code>UNIQUE</code>", ar: "في جدول الابن، <code>NOT NULL</code>، بلا <code>UNIQUE</code>" } }
      ],
      hint: {
        en: "<code>UNIQUE</code> is the second toe; the solid half decides <code>NOT NULL</code> and, in a 1:1, the side.",
        ar: "<code>UNIQUE</code> هو الإصبع الثانية؛ والنصف المتّصل يقرّر <code>NOT NULL</code>، ويقرّر الجهة في ‎1:1."
      },
      explain: {
        en: "A 1:1 has a toe at both ends, so either table could hold the key — the solid half picks the side and makes the column <code>NOT NULL</code>. When both or neither half is solid, either side works. A 1:M has no choice: the key goes in the child, and it must <em>not</em> be unique, or the crow's foot disappears.",
        ar: "لعلاقة ‎1:1 إصبع عند الطرفين، فأيّ الجدولين يمكن أن يحمل المفتاح — والنصف المتّصل يختار الجهة ويجعل العمود <code>NOT NULL</code>. وحين يكون النصفان متّصلين أو متقطّعين معًا، تصلح أيّ جهة. أمّا ‎1:M فلا خيار فيها: المفتاح في الابن، و<em>يجب ألّا</em> يكون فريدًا، وإلّا اختفت رِجل الغراب."
      }
    },
    {
      id: "t5l3q16", type: "mcq", level: "hard", topics: ["t5-key-side", "t5-mandatory-one-end"],
      q: {
        en: "A colleague builds the role model with the key the other way round: <code>persons.teacher_id NUMBER UNIQUE</code>, and no key in <code>teachers</code>. The school has five persons and two teachers. What does this lose?",
        ar: "يبني زميل نموذج الأدوار والمفتاح معكوس: <code>persons.teacher_id NUMBER UNIQUE</code>، ولا مفتاح في <code>teachers</code>. في المدرسة خمسة أشخاص ومعلّمان. ماذا يخسر بذلك؟"
      },
      options: [
        { en: "Nothing: a 1:1 has a toe at both ends, so either table may hold the key", ar: "لا شيء: لعلاقة ‎1:1 إصبع عند الطرفين، فأيّ الجدولين يجوز أن يحمل المفتاح" },
        { en: "It becomes a 1:M, because the key is now in the parent", ar: "تصير ‎1:M، لأن المفتاح صار في الأب" },
        { en: "Each person may now be several teachers", ar: "صار يجوز للشخص الواحد أن يكون عدّة معلّمين" },
        { en: "The column is null in three of five rows, and a <code>teachers</code> row that no person points to is legal — the solid half at <code>TEACHER</code> is enforced by nothing", ar: "العمود فارغ في ثلاثة صفوف من خمسة، وصار صفّ في <code>teachers</code> لا يشير إليه أيّ شخص مشروعًا — فلا شيء يفرض النصف المتّصل عند <code>TEACHER</code>" }
      ],
      answer: 3,
      hint: {
        en: "Both sides are legal for a 1:1 — but only one side lets the column be <code>NOT NULL</code>. Which half is solid?",
        ar: "الجهتان كلتاهما جائزتان في ‎1:1 — لكن جهة واحدة فقط تسمح بأن يكون العمود <code>NOT NULL</code>. أيّ النصفين متّصل؟"
      },
      explain: {
        en: "The key in <code>persons</code> still enforces one teacher per person (it is unique), so the type survives. What is lost is the solid half: most persons teach nobody, so the column cannot be <code>NOT NULL</code>, and nothing stops a teacher who belongs to no person. Put the key on the solid side, <code>teachers.person_id NOT NULL UNIQUE</code>, and the database guarantees each teacher a person. \"Either table\" is true only when both halves are alike.",
        ar: "المفتاح في <code>persons</code> ما زال يفرض معلّمًا واحدًا لكل شخص (فهو فريد)، فالنوع باقٍ. أمّا ما ضاع فهو النصف المتّصل: معظم الأشخاص لا يدرّسون، فلا يمكن أن يكون العمود <code>NOT NULL</code>، ولا شيء يمنع معلّمًا لا ينتمي إلى أيّ شخص. ضع المفتاح في الجهة المتّصلة، <code>teachers.person_id NOT NULL UNIQUE</code>، فتضمن قاعدة البيانات لكل معلّم شخصًا. و«أيّ الجدولين» لا تصحّ إلا حين يتشابه النصفان."
      }
    },
    {
      id: "t5l3q17", type: "write", level: "hard", topics: ["t5-key-side", "t5-unique-fk", "t5-roles"],
      q: {
        en: "Each <code>STUDENT</code> must be the role of one and only one <code>PERSON</code>; each <code>PERSON</code> may be acting as one and only one <code>STUDENT</code>. The table <code>persons (person_id NUMBER PRIMARY KEY, first_name, last_name, phone)</code> already exists. Write the <code>CREATE TABLE</code> for <code>students</code> with columns <code>student_id</code>, <code>start_date</code> and the foreign key.",
        ar: "Each <code>STUDENT</code> must be the role of one and only one <code>PERSON</code>؛ وEach <code>PERSON</code> may be acting as one and only one <code>STUDENT</code>. والجدول <code>persons (person_id NUMBER PRIMARY KEY, first_name, last_name, phone)</code> موجود مسبقًا. اكتب أمر <code>CREATE TABLE</code> لجدول <code>students</code> بالأعمدة <code>student_id</code> و<code>start_date</code> والمفتاح الأجنبي."
      },
      lang: "sql",
      lines: 5,
      checks: [
        { re: "CREATE\\s+TABLE\\s+students\\s*\\(", flags: "i",
          label: { en: "creates the role table, students", ar: "يُنشئ جدول الدور، students" } },
        { re: "student_id\\s+[^,]*PRIMARY\\s+KEY", flags: "i",
          label: { en: "student_id is the primary key", ar: "student_id هو المفتاح الأساسي" } },
        { re: "person_id\\s+NUMBER\\b[^,]*NOT\\s+NULL", flags: "i",
          label: { en: "person_id is NOT NULL: the STUDENT half is solid", ar: "person_id من نوع NOT NULL: نصف STUDENT متّصل" } },
        { re: "person_id\\s+NUMBER\\b[^,]*UNIQUE", flags: "i",
          label: { en: "person_id is UNIQUE: the toe at STUDENT", ar: "person_id من نوع UNIQUE: الإصبع عند STUDENT" } },
        { re: "REFERENCES\\s+persons\\s*\\(\\s*person_id\\s*\\)", flags: "i",
          label: { en: "person_id references persons(person_id)", ar: "person_id يشير إلى persons(person_id)" } }
      ],
      forbid: [
        { re: "(CREATE|ALTER)\\s+TABLE\\s+persons\\b", flags: "i",
          label: { en: "the key goes on the solid side, students — in persons it could never be NOT NULL", ar: "المفتاح يذهب إلى الجهة المتّصلة، students — ففي persons لا يمكن أن يكون NOT NULL أبدًا" } }
      ],
      solution: {
        code: "CREATE TABLE students (\n  student_id  NUMBER PRIMARY KEY,\n  start_date  VARCHAR2(10) NOT NULL,\n  person_id   NUMBER NOT NULL UNIQUE REFERENCES persons(person_id)\n);",
        en: "The key sits on the solid side, <code>students</code>: <code>NOT NULL</code> for the solid half, <code>UNIQUE</code> for the toe at <code>STUDENT</code>.",
        ar: "المفتاح في الجهة المتّصلة، <code>students</code>: <code>NOT NULL</code> للنصف المتّصل، و<code>UNIQUE</code> للإصبع عند <code>STUDENT</code>."
      },
      hint: {
        en: "Which half is solid? Put the key there. Then: which word stops one person from being two students?",
        ar: "أيّ النصفين متّصل؟ ضع المفتاح هناك. ثم: أيّ كلمة تمنع الشخص الواحد من أن يكون طالبين؟"
      },
      explain: {
        en: "The <code>STUDENT</code> half is solid, so the key goes in <code>students</code> and can be <code>NOT NULL</code>. <code>UNIQUE</code> turns what would be a 1:M into the 1:1 the second sentence asks for — leave it out and Rana could be students 1005 and 1006. Adding <code>student_id</code> to <code>persons</code> is the tempting wrong side: it is null for every person who is not a student.",
        ar: "نصف <code>STUDENT</code> متّصل، فالمفتاح يذهب إلى <code>students</code> ويمكن أن يكون <code>NOT NULL</code>. و<code>UNIQUE</code> يحوّل ما كان سيكون ‎1:M إلى ‎1:1 التي تطلبها الجملة الثانية — احذفه فتصير Rana الطالبين 1005 و1006. وإضافة <code>student_id</code> إلى <code>persons</code> هي الجهة الخاطئة المغرية: فهو فارغ لكل شخص ليس طالبًا."
      }
    },
    {
      id: "t5l3q18", type: "order", level: "medium", topics: ["t5-key-side", "t5-one-to-one-sentences", "t5-unique-fk"],
      q: {
        en: "<code>PERSON</code> acting as <code>TEACHER</code>, from the business to the table. Put the steps in order.",
        ar: "<code>PERSON</code> acting as <code>TEACHER</code>، من العمل إلى الجدول. رتّب الخطوات."
      },
      items: [
        { en: "Ask both questions: how many teachers can one person act as, and how many persons is one teacher?", ar: "اطرح السؤالين: كم معلّمًا يمكن أن يؤدّيه الشخص الواحد، وكم شخصًا هو المعلّم الواحد؟" },
        { en: "Both answers are one and only one: draw a single toe at both ends, so the line is 1:1", ar: "الجوابان «واحد فقط لا غير»: ارسم إصبعًا واحدة عند الطرفين، فيكون الخطّ ‎1:1" },
        { en: "Read the halves: solid at TEACHER (must), dashed at PERSON (may)", ar: "اقرأ النصفين: متّصل عند TEACHER (must)، ومتقطّع عند PERSON (may)" },
        { en: "Put the foreign key on the solid side: teachers.person_id NOT NULL", ar: "ضع المفتاح الأجنبي في الجهة المتّصلة: teachers.person_id NOT NULL" },
        { en: "Declare the column UNIQUE, so the table keeps the toe at TEACHER", ar: "أعلِن العمود UNIQUE، كي يحفظ الجدول الإصبع عند TEACHER" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "You cannot pick the key side before you know which half is solid, nor add UNIQUE to a column that does not exist yet.",
        ar: "لا تستطيع أن تختار جهة المفتاح قبل أن تعرف أيّ النصفين متّصل، ولا أن تضيف UNIQUE إلى عمود لم يوجد بعد."
      },
      explain: {
        en: "The two questions are the business; their answers become the toes and name the type. In a 1:1 the toes do not choose the table — the solid half does, so the halves are read next. Only then does the column exist, and <code>UNIQUE</code> is what keeps it 1:1 rather than 1:M.",
        ar: "السؤالان هما العمل؛ وجواباهما يصيران الإصبعين ويسمّيان النوع. وفي ‎1:1 لا يختار الإصبعان الجدول — بل النصف المتّصل، لذا يُقرأ النصفان بعد ذلك. وعندها فقط يوجد العمود، و<code>UNIQUE</code> هو ما يُبقيه ‎1:1 لا ‎1:M."
      }
    },
    {
      id: "t5l3q19", type: "ordercode", level: "medium", topics: ["t5-key-side", "t5-roles", "t5-unique-fk"],
      q: {
        en: "Build the role model from nothing, in Oracle, where a foreign key must reference a table that already exists and a row must point at a row that already exists. Put the statements in an order that runs.",
        ar: "ابنِ نموذج الأدوار من لا شيء، في Oracle، حيث يجب أن يشير المفتاح الأجنبي إلى جدول موجود مسبقًا، وأن يشير الصفّ إلى صفّ موجود مسبقًا. رتّب الأوامر ترتيبًا يعمل."
      },
      items: [
        { code: "CREATE TABLE persons (person_id NUMBER PRIMARY KEY,\n  first_name VARCHAR2(20) NOT NULL, last_name VARCHAR2(20) NOT NULL,\n  phone VARCHAR2(12) NOT NULL);\nINSERT INTO persons VALUES (3, 'Rana', 'Saad', '0599-120120');\nINSERT INTO persons VALUES (5, 'Khaled', 'Odeh', '0599-500500');" },
        { code: "CREATE TABLE teachers (teacher_id NUMBER PRIMARY KEY,\n  hire_date VARCHAR2(10) NOT NULL,\n  person_id NUMBER NOT NULL UNIQUE REFERENCES persons(person_id));" },
        { code: "INSERT INTO teachers VALUES (31, '2019-09-01', 3);\nINSERT INTO teachers VALUES (32, '2021-02-01', 5);" },
        { code: "SELECT p.first_name, t.teacher_id\nFROM persons p JOIN teachers t ON t.person_id = p.person_id;" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "<code>PERSON</code> is the end every role must point at. What must exist before a <code>REFERENCES</code> and before a <code>person_id</code> value?",
        ar: "<code>PERSON</code> هو الطرف الذي يجب أن يشير إليه كل دور. ما الذي يجب أن يوجد قبل <code>REFERENCES</code> وقبل قيمة <code>person_id</code>؟"
      },
      explain: {
        en: "<code>persons</code> first, because <code>teachers</code> references it; persons' rows before teacher rows, because 31 and 32 must point at existing persons 3 and 5; the join last. Creating <code>teachers</code> first fails: its key would reference a table that does not exist yet. The person rows need no teacher — the <code>PERSON</code> half is dashed.",
        ar: "<code>persons</code> أوّلًا، لأن <code>teachers</code> يشير إليه؛ وصفوف الأشخاص قبل صفوف المعلّمين، لأن 31 و32 يجب أن يشيرا إلى الشخصين الموجودين 3 و5؛ والربط أخيرًا. وإنشاء <code>teachers</code> أوّلًا يفشل: فمفتاحه سيشير إلى جدول لم يوجد بعد. ولا تحتاج صفوف الأشخاص معلّمًا — فنصف <code>PERSON</code> متقطّع."
      }
    },
    {
      id: "t5l3q20", type: "mcq", level: "medium", topics: ["t5-few-one-to-one", "t5-split-entity", "t5-one-to-one-sentences"],
      q: {
        en: "A first draft of the school model has fourteen relationships, and nine of them are drawn 1:1. What do the slides lead you to do?",
        ar: "في مسودّة أولى لنموذج المدرسة أربع عشرة علاقة، تسع منها مرسومة ‎1:1. إلامَ تقودك الشرائح؟"
      },
      options: [
        { en: "Nothing: 1:1 is the most common relationship type in an ER model", ar: "لا شيء: ‎1:1 هي أكثر أنواع العلاقات شيوعًا في نموذج ER" },
        { en: "Convert all nine into M:M, since M:M is common in a first version", ar: "تحويل التسع كلّها إلى ‎M:M، لأن ‎M:M شائعة في النسخة الأولى" },
        { en: "Be suspicious: ask each line both \"how many?\" questions again, and check whether its second box has any significance of its own", ar: "الارتياب: اطرح على كل خطّ سؤالَي «كم؟» من جديد، وتحقّق هل للصندوق الثاني أيّ أهمية بذاته" },
        { en: "Merge every 1:1 into one entity, since a 1:1 is always one entity drawn twice", ar: "دمج كل ‎1:1 في كيان واحد، لأن ‎1:1 دائمًا كيان واحد رُسم مرّتين" }
      ],
      answer: 2,
      hint: {
        en: "What do the slides say about how many 1:1s a model usually has — and is a 1:1 a verdict or a question?",
        ar: "ماذا تقول الشرائح عن عدد علاقات ‎1:1 المعتاد في النموذج — وهل ‎1:1 حكم أم سؤال؟"
      },
      explain: {
        en: "The slides say you will usually find just a few 1:1s in a model, and 1:M is the most common type. Nine is a sign that some lines hide a \"many\" nobody asked about, and that some are split entities. But merging every one is wrong too: <code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code> and the roles stay apart. Turning lines into M:M without asking the business is guessing.",
        ar: "تقول الشرائح إنك ستجد عادةً القليل فقط من علاقات ‎1:1 في النموذج، وإن ‎1:M هي الأكثر شيوعًا. فالتسع علامة على أن بعض الخطوط تُخفي «متعدّدًا» لم يسأل عنه أحد، وأن بعضها كيانات مشطورة. لكن دمجها كلّها خطأ أيضًا: <code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code> والأدوار تبقى منفصلة. وتحويل الخطوط إلى ‎M:M بلا سؤال العمل تخمين."
      }
    },
    {
      id: "t5l3q21", type: "mcq", level: "hard", topics: ["t5-few-one-to-one", "t5-one-to-one-sentences", "t5-unique-fk"],
      q: {
        en: "A designer drew <code>CLASS</code>&ndash;<code>CLASSROOM</code> as 1:1 and built <code>classes.room_id NUMBER NOT NULL UNIQUE</code>. Then the school says each room hosts several classes a day. What is the right response?",
        ar: "رسم مصمّم <code>CLASS</code>&ndash;<code>CLASSROOM</code> علاقةَ ‎1:1 وبنى <code>classes.room_id NUMBER NOT NULL UNIQUE</code>. ثم قالت المدرسة إن كل غرفة تستضيف عدّة شعب في اليوم. ما الاستجابة الصحيحة؟"
      },
      options: [
        { en: "Keep the 1:1 and make the <code>CLASS</code> half dashed, so a room may host more classes", ar: "أبقِ ‎1:1 واجعل نصف <code>CLASS</code> متقطّعًا، كي تستضيف الغرفة شعبًا أكثر" },
        { en: "The line is now 1:M: put a crow's foot at <code>CLASS</code> and drop <code>UNIQUE</code> from <code>classes.room_id</code>", ar: "صار الخطّ ‎1:M: ضع رِجل غراب عند <code>CLASS</code> واحذف <code>UNIQUE</code> من <code>classes.room_id</code>" },
        { en: "Merge <code>CLASS</code> and <code>CLASSROOM</code>, since a 1:1 that changes was a split entity", ar: "ادمج <code>CLASS</code> و<code>CLASSROOM</code>، لأن ‎1:1 التي تتغيّر كانت كيانًا مشطورًا" },
        { en: "Move the key to <code>classrooms.class_id</code>, so one room can point at several classes", ar: "انقل المفتاح إلى <code>classrooms.class_id</code>، كي تشير الغرفة الواحدة إلى عدّة شعب" }
      ],
      answer: 1,
      hint: {
        en: "Ask again: how many classes can one room host? Where is that answer drawn, and which constraint draws it in the table?",
        ar: "اسأل من جديد: كم شعبة تستضيف الغرفة الواحدة؟ أين يُرسم هذا الجواب، وأيّ قيد يرسمه في الجدول؟"
      },
      explain: {
        en: "\"Many classes per room\" is a crow's foot next to <code>CLASS</code>, the thing counted: the line is 1:M, and a room is the parent. In the table, <code>UNIQUE</code> was the toe at <code>CLASS</code>; removing it lets many class rows share a room. A dashed half changes may, not many. One column in <code>classrooms</code> holds one class per room. A room is significant on its own, so merging is wrong.",
        ar: "«شعب كثيرة لكل غرفة» رِجل غراب بجانب <code>CLASS</code>، الشيء المعدود: فالخطّ ‎1:M، والغرفة هي الأب. وفي الجدول كان <code>UNIQUE</code> هو الإصبع عند <code>CLASS</code>؛ وحذفه يسمح لصفوف شعب كثيرة بأن تتشارك غرفة. النصف المتقطّع يغيّر «may» لا «many». وعمود واحد في <code>classrooms</code> لا يحمل إلا شعبة واحدة لكل غرفة. والغرفة ذات أهمية بذاتها، فالدمج خطأ."
      }
    },

    /* ---------------------------------------------------- 5 · when a one-to-one means one entity (evolve e3) */
    {
      id: "t5l3q22", type: "compare", level: "medium", topics: ["t5-split-entity", "t5-merge-entities"],
      q: {
        en: "Versions 1 and 2 of the student-contact evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر بيانات اتصال الطالب، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "STUDENT          # id  * first name  * last name\nSTUDENT CONTACT  # id  * phone  * email\nEach STUDENT must have one and only one STUDENT CONTACT.\nEach STUDENT CONTACT must be for one and only one STUDENT.",
      codeB: "STUDENT  # id  * first name  * last name  * phone  * email",
      options: [
        { en: "A is better: a 1:1 keeps phone and email safer in their own entity", ar: "A أفضل: علاقة ‎1:1 تحفظ الهاتف والبريد أكثر في كيان خاصّ بهما" },
        { en: "B loses a business rule: nothing now says each student has one phone", ar: "B يُضيّع قاعدة عمل: لا شيء الآن يقول إن لكل طالب هاتفًا واحدًا" },
        { en: "B is better: <code>STUDENT CONTACT</code> has no significance of its own, so A only adds a second UID and a join; B keeps every fact as a mandatory attribute", ar: "B أفضل: لا أهمية لـ <code>STUDENT CONTACT</code> بذاته، فـ A لا يضيف إلا معرّفًا ثانيًا وربطًا؛ وB يحفظ كل حقيقة خاصيةً إلزامية" },
        { en: "A and B are equally good, because both are mandatory in both directions", ar: "A وB جيّدان بالقدر نفسه، لأن كليهما إلزامي في الاتجاهين" }
      ],
      answer: 2,
      hint: {
        en: "Apply Chapter 2's test for an entity to <code>STUDENT CONTACT</code>: does the business keep it for its own sake?",
        ar: "طبّق اختبار الكيان من الفصل 2 على <code>STUDENT CONTACT</code>: هل يحتفظ به العمل لذاته؟"
      },
      explain: {
        en: "The contact is created with its student, deleted with it and never asked for alone: a split entity. Merging removes the second box, the second UID and the join, and loses nothing — <code>* phone</code> and <code>* email</code> are still mandatory and single-valued. Separate boxes do not make data \"safer\"; they make every phone list a join.",
        ar: "بيانات الاتصال تُنشأ مع طالبها وتُحذف معه ولا تُطلب وحدها أبدًا: كيان مشطور (split entity). والدمج يزيل الصندوق الثاني والمعرّف الثاني والربط، ولا يُضيّع شيئًا — فـ <code>* phone</code> و<code>* email</code> ما زالتا إلزاميتين وأحاديتَي القيمة. والصناديق المنفصلة لا تجعل البيانات «أكثر أمانًا»؛ بل تجعل كل قائمة هواتف ربطًا."
      }
    },
    {
      id: "t5l3q23", type: "contrast", level: "medium", topics: ["t5-own-significance", "t5-split-entity", "t5-merge-entities"],
      q: {
        en: "Each pair below is drawn as a 1:1. Keep two entities, or merge them into one?",
        ar: "كل زوج أدناه مرسوم ‎1:1. أتُبقي كيانين، أم تدمجهما في كيان واحد؟"
      },
      concepts: [
        { en: "Keep two entities", ar: "إبقاء كيانين" },
        { en: "Merge into one", ar: "الدمج في كيان واحد" }
      ],
      rows: [
        { s: { en: "<code>COMPUTER</code> and <code>MOTHERBOARD</code>: the technician tracks each board by its serial number and model.", ar: "<code>COMPUTER</code> و<code>MOTHERBOARD</code>: يتابع الفنّي كل لوحة برقمها التسلسلي وطرازها." }, a: 0 },
        { s: { en: "<code>STUDENT</code> and <code>STUDENT ADDRESS</code>: created together, deleted together, never listed alone.", ar: "<code>STUDENT</code> و<code>STUDENT ADDRESS</code>: يُنشآن معًا، ويُحذفان معًا، ولا يُسرد العنوان وحده أبدًا." }, a: 1 },
        { s: { en: "<code>PERSON</code> and <code>TEACHER</code>: only some persons teach, and a teacher has a hire date.", ar: "<code>PERSON</code> و<code>TEACHER</code>: بعض الأشخاص فقط يدرّسون، وللمعلّم تاريخ تعيين." }, a: 0 },
        { s: { en: "<code>STUDENT</code> and <code>STUDENT PHOTO</code>: one photo per student, mandatory both ways, never used on its own.", ar: "<code>STUDENT</code> و<code>STUDENT PHOTO</code>: صورة واحدة لكل طالب، إلزامية في الاتجاهين، ولا تُستعمل وحدها أبدًا." }, a: 1 },
        { s: { en: "<code>COMPUTER</code> and <code>MONITOR</code>: monitors have serial numbers and are swapped between desks.", ar: "<code>COMPUTER</code> و<code>MONITOR</code>: للشاشات أرقام تسلسلية وتُبدَّل بين المكاتب." }, a: 0 },
        { s: { en: "<code>EMPLOYEE</code> and <code>EMPLOYEE NAME</code>: the second box holds only <code>* first name</code> and <code>* last name</code>.", ar: "<code>EMPLOYEE</code> و<code>EMPLOYEE NAME</code>: لا يحمل الصندوق الثاني إلا <code>* first name</code> و<code>* last name</code>." }, a: 1 }
      ],
      hint: {
        en: "Does the second box have a life, and attributes, of its own — or is it the first box's attributes in a second box?",
        ar: "هل للصندوق الثاني حياة وخصائص خاصّة به — أم هو خصائص الصندوق الأوّل في صندوق ثانٍ؟"
      },
      explain: {
        en: "A 1:1 is a question, not a verdict. Keep two entities when the second is significant on its own — a motherboard or monitor tracked by serial number — or is a role most persons do not play. Merge when the second box is created, deleted and used only with the first: address, photo and name are attributes, not entities.",
        ar: "علاقة ‎1:1 سؤال لا حكم. أبقِ كيانين حين يكون للثاني أهمية بذاته — لوحة أمّ أو شاشة تُتابَع برقمها التسلسلي — أو حين يكون دورًا لا يؤدّيه معظم الأشخاص. وادمج حين يُنشأ الصندوق الثاني ويُحذف ويُستعمل مع الأوّل فقط: العنوان والصورة والاسم خصائص، لا كيانات."
      }
    },
    {
      id: "t5l3q24", type: "tf", level: "easy", topics: ["t5-own-significance", "t5-computer-motherboard", "t5-merge-entities"],
      q: {
        en: "<code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code> is 1:1 and mandatory at both ends, just like <code>STUDENT</code>&ndash;<code>STUDENT CONTACT</code>, so it too should be merged into one entity.",
        ar: "علاقة <code>COMPUTER</code>&ndash;<code>MOTHERBOARD</code> هي ‎1:1 وإلزامية عند الطرفين، تمامًا مثل <code>STUDENT</code>&ndash;<code>STUDENT CONTACT</code>، فيجب دمجها هي أيضًا في كيان واحد."
      },
      truth: false,
      hint: {
        en: "The shape of the line is the same. Ask the entity question about the second box instead.",
        ar: "شكل الخطّ واحد. اطرح بدلًا من ذلك سؤال الكيان عن الصندوق الثاني."
      },
      explain: {
        en: "False. The line's shape does not decide; significance does. A motherboard has its own serial number and model, and the technician tracks it as a thing in itself — when it fails, it is the motherboard that is replaced. That makes it an entity, and the slides keep two. A contact record has nothing of its own, so it merges.",
        ar: "خطأ. شكل الخطّ لا يقرّر؛ الأهمية هي التي تقرّر. للّوحة الأمّ رقم تسلسلي وطراز خاصّان بها، ويتابعها الفنّي شيئًا قائمًا بذاته — فحين تتعطّل، اللوحة هي التي تُستبدل. وهذا يجعلها كيانًا، والشرائح تُبقي كيانين. أمّا سجلّ بيانات الاتصال فلا شيء له بذاته، فيُدمج."
      }
    }

  ]
};
