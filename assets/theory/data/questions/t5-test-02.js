/* Question bank: T5 lesson 2 test -- One-to-Many. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-test-02"] = {
  title: { en: "Test 2 — One-to-Many", ar: "اختبار 2 — واحد إلى متعدّد" },
  intro: {
    en: "24 questions on lesson 2: reading a relationship's type from its two ends, the customer and their sales representative, the parent and the child, what \"many\" means, many-to-one as the same line read backwards, and the two \"how many?\" questions for PERSON and DVD. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثاني: قراءة نوع العلاقة من طرفيها، والزبون ومندوب مبيعاته، والأب والابن، وماذا يعني «المتعدّد»، و«متعدّد إلى واحد» بوصفها الخطّ نفسه مقروءًا بالعكس، وسؤالا «كم؟» لـ PERSON وDVD. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · the type is read from the ends */
    {
      id: "t5l2q01", type: "tf", level: "easy", topics: ["t5-type-from-ends", "t5-relationship-type"],
      q: {
        en: "A line meets <code>EMPLOYEE</code> with a crow's foot and <code>DEPARTMENT</code> with a single toe. If both halves of the line are made dashed, the relationship is no longer one-to-many.",
        ar: "يلتقي خطّ بـ <code>EMPLOYEE</code> برِجل غراب، وبـ <code>DEPARTMENT</code> بإصبع واحدة. إذا جُعل نصفا الخطّ متقطّعين، لم تعد العلاقة «واحدًا إلى متعدّد»."
      },
      truth: false,
      hint: {
        en: "Which symbols decide the type, and which add other facts to it?",
        ar: "أيّ الرموز يقرّر النوع، وأيّها يضيف إليه حقائق أخرى؟"
      },
      explain: {
        en: "False. The type is read from the two ends only: a single toe and a crow's foot make a 1:M, whatever the halves look like. Dashed halves change optionality — an employee may have no department, a department may have no employees — but not the type. Solid and dashed never turn a line into 1:1 or M:M.",
        ar: "خطأ. النوع يُقرأ من الطرفين وحدهما: إصبع واحدة ورِجل غراب تصنعان ‎1:M مهما كان شكل النصفين. النصفان المتقطّعان يغيّران الإلزامية (optionality) — فقد يكون الموظّف بلا قسم، وقد يكون القسم بلا موظّفين — لكنهما لا يغيّران النوع. المتّصل والمتقطّع لا يجعلان الخطّ ‎1:1 ولا ‎M:M أبدًا."
      }
    },
    {
      id: "t5l2q02", type: "match", level: "easy", topics: ["t5-relationship-type", "t5-type-from-ends", "t5-one-to-many"],
      q: {
        en: "Match each thing seen on a relationship line to what it tells you about the relationship's type.",
        ar: "صِل كل ما يُرى على خطّ العلاقة بما يقوله عن نوعها."
      },
      leftHead: { en: "On the line", ar: "على الخط" },
      rightHead: { en: "Type", ar: "النوع" },
      pairs: [
        { l: { en: "A single toe at both ends", ar: "إصبع واحدة عند الطرفين" },
          r: { en: "One-to-one (1:1)", ar: "واحد إلى واحد (‎1:1)" } },
        { l: { en: "A single toe at one end, a crow's foot at the other", ar: "إصبع واحدة عند طرف، ورِجل غراب عند الآخر" },
          r: { en: "One-to-many (1:M)", ar: "واحد إلى متعدّد (‎1:M)" } },
        { l: { en: "A crow's foot at both ends", ar: "رِجل غراب عند الطرفين" },
          r: { en: "Many-to-many (M:M)", ar: "متعدّد إلى متعدّد (‎M:M)" } },
        { l: { en: "A diamond in the middle of the line", ar: "معيَّن في منتصف الخط" },
          r: { en: "Nothing — it answers transferability, not the type", ar: "لا شيء — فهو يجيب عن قابلية النقل، لا عن النوع" } }
      ],
      hint: {
        en: "Only the symbols where the line meets an entity name the type.",
        ar: "الرموز التي يلتقي فيها الخطّ بالكيان هي وحدها التي تسمّي النوع."
      },
      explain: {
        en: "Toe and toe is 1:1, toe and crow's foot is 1:M, crow's foot and crow's foot is M:M. The diamond is drawn on the middle of the line and answers a different question — can the link move? — so a receipt line with a diamond is still 1:M. Read the ends for the type, the halves for optionality, the middle for transferability.",
        ar: "إصبع وإصبع تعني ‎1:1، وإصبع ورِجل غراب تعني ‎1:M، ورِجل غراب ورِجل غراب تعني ‎M:M. أمّا المعيَّن فيُرسم في منتصف الخطّ ويجيب عن سؤال آخر — هل ينتقل الارتباط؟ — لذا يبقى خطّ الإيصال ذو المعيَّن ‎1:M. اقرأ الطرفين للنوع، والنصفين للإلزامية، والمنتصف لقابلية النقل."
      }
    },
    {
      id: "t5l2q03", type: "mcq", level: "easy", topics: ["t5-most-common", "t5-one-to-many"],
      q: {
        en: "<code>STUDENT</code>&ndash;<code>STUDY GROUP</code>, <code>RECEIPT</code>&ndash;<code>STUDENT</code> and <code>EMPLOYEE</code>&ndash;<code>DEPARTMENT</code> each have a crow's foot at one end and a single toe at the other. What do the slides say about this shape?",
        ar: "لكلٍّ من <code>STUDENT</code>&ndash;<code>STUDY GROUP</code> و<code>RECEIPT</code>&ndash;<code>STUDENT</code> و<code>EMPLOYEE</code>&ndash;<code>DEPARTMENT</code> رِجل غراب عند طرف وإصبع واحدة عند الآخر. ماذا تقول الشرائح عن هذا الشكل؟"
      },
      options: [
        { en: "It is one-to-many, and its various forms are the most common relationships in an ER model", ar: "إنه «واحد إلى متعدّد»، وأشكاله المختلفة هي أكثر العلاقات شيوعًا في نموذج ER" },
        { en: "It is one-to-many, but it is rare: most relationships in a model are one-to-one", ar: "إنه «واحد إلى متعدّد»، لكنه نادر: معظم علاقات النموذج «واحد إلى واحد»" },
        { en: "Three different types, because the three lines have different optionality and one has a diamond", ar: "ثلاثة أنواع مختلفة، لأن إلزامية الخطوط الثلاثة مختلفة ولأحدها معيَّن" },
        { en: "It is many-to-many, because each line has a crow's foot", ar: "إنه «متعدّد إلى متعدّد»، لأن في كل خطّ رِجل غراب" }
      ],
      answer: 0,
      hint: {
        en: "Count the crow's feet on each line: one, or two?",
        ar: "عُدّ أرجل الغراب في كل خطّ: واحدة أم اثنتان؟"
      },
      explain: {
        en: "One toe and one crow's foot is 1:M, and the slides say the various types of 1:M are the most common in an ER model. Different halves and a diamond do not make three types — they are other facts on the same shape. One crow's foot is not enough for M:M; that needs one at both ends.",
        ar: "إصبع واحدة ورِجل غراب واحدة تعني ‎1:M، والشرائح تقول إن الأنواع المختلفة من ‎1:M هي الأكثر شيوعًا في نموذج ER. اختلاف النصفين ووجود معيَّن لا يصنعان ثلاثة أنواع — إنها حقائق أخرى على الشكل نفسه. ورِجل غراب واحدة لا تكفي لـ ‎M:M؛ فهذه تحتاج رِجلًا عند كلا الطرفين."
      }
    },

    /* ---------------------------------------------------- 2 · customers and their representative */
    {
      id: "t5l2q04", type: "compare", level: "medium", topics: ["t5-sales-rep", "t5-one-to-many", "t5-many-end"],
      q: {
        en: "Versions 1 and 2 of the wholesaler's evolve block, as text. The manager wants to give Hana Saleh Gaza Books and Blue Sea Cafe as well as Al-Noor Bakery. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر تاجر الجملة، نصًّا. يريد المدير أن يُسند إلى Hana Saleh متجرَي Gaza Books وBlue Sea Cafe إضافةً إلى Al-Noor Bakery. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "CUSTOMER  visited by / assigned to  SALES REPRESENTATIVE\n  CUSTOMER half: solid                end at CUSTOMER: single toe\n  SALES REPRESENTATIVE half: dashed   end at SALES REPRESENTATIVE: single toe",
      codeB: "CUSTOMER  visited by / assigned to  SALES REPRESENTATIVE\n  CUSTOMER half: solid                end at CUSTOMER: crow's foot\n  SALES REPRESENTATIVE half: dashed   end at SALES REPRESENTATIVE: single toe",
      options: [
        { en: "A is enough: the dashed half at <code>SALES REPRESENTATIVE</code> already lets Hana have several customers", ar: "A يكفي: النصف المتقطّع عند <code>SALES REPRESENTATIVE</code> يسمح لـ Hana بعدّة زبائن" },
        { en: "B is better, but it should also put a crow's foot at <code>SALES REPRESENTATIVE</code> so Hana can have many customers", ar: "B أفضل، لكن يجب أن يضع رِجل غراب عند <code>SALES REPRESENTATIVE</code> أيضًا كي يكون لـ Hana زبائن كثيرون" },
        { en: "B is better: A is 1:1, so Hana could have one customer only; B's crow's foot at <code>CUSTOMER</code> makes it 1:M and still gives each customer one representative", ar: "B أفضل: A علاقة ‎1:1 فلا يكون لـ Hana إلا زبون واحد؛ ورِجل الغراب في B عند <code>CUSTOMER</code> تجعلها ‎1:M وتُبقي لكل زبون مندوبًا واحدًا" },
        { en: "Both are 1:M, because the halves are the same in A and B", ar: "كلاهما ‎1:M، لأن النصفين متماثلان في A وB" }
      ],
      answer: 2,
      hint: {
        en: "Find the one symbol that differs, then read the line from <code>SALES REPRESENTATIVE</code>: how many customers?",
        ar: "جِد الرمز الوحيد المختلف، ثم اقرأ الخطّ من <code>SALES REPRESENTATIVE</code>: كم زبونًا؟"
      },
      explain: {
        en: "Only the end at <code>CUSTOMER</code> changed. In A it is a toe, so read from the representative the answer is \"one customer\" — Gaza Books is refused. B's crow's foot says one or more customers per representative, and the toe at the other end keeps one representative per customer. A dashed half says <em>may</em>, never <em>many</em>; and a crow's foot at the representative's end would mean a customer has many representatives — not this business.",
        ar: "لم يتغيّر إلا الطرف عند <code>CUSTOMER</code>. في A هو إصبع، فإذا قرأت من المندوب كان الجواب «زبون واحد» — فيُرفض Gaza Books. ورِجل الغراب في B تقول: زبون واحد أو أكثر لكل مندوب، والإصبع في الطرف الآخر تُبقي مندوبًا واحدًا لكل زبون. النصف المتقطّع يعني <em>قد</em> (may)، لا <em>كثير</em>؛ ورِجل غراب عند طرف المندوب تعني أن للزبون مندوبين كثيرين — وهذا ليس عمل هذه الشركة."
      }
    },
    {
      id: "t5l2q05", type: "error", level: "medium", topics: ["t5-fk-in-child", "t5-parent-child"],
      q: {
        en: "A classmate writes the school's <code>CLASS</code>&ndash;<code>TEACHER</code> model and its key. A class must be allocated to one teacher; a teacher may be responsible for several classes. Which line is wrong?",
        ar: "يكتب زميل نموذج <code>CLASS</code>&ndash;<code>TEACHER</code> في المدرسة ومفتاحه. يجب أن تُسند الشعبة إلى معلّم واحد، وقد يكون المعلّم مسؤولًا عن عدّة شعب. أيّ سطر خطأ؟"
      },
      lang: "text",
      code: "1  CLASS    # class id  * name\n2  TEACHER  # teacher id  * first name  * last name\n3  Each CLASS must be allocated to one and only one TEACHER.\n4  Each TEACHER may be responsible for one or more CLASSes.\n5  Foreign key: teachers.class_id  NUMBER NOT NULL",
      answer: 5,
      solution: {
        en: "Line 5 should be <code>classes.teacher_id NUMBER NOT NULL</code>: the key goes in the child, <code>CLASS</code>.",
        ar: "يجب أن يكون السطر 5 <code>classes.teacher_id NUMBER NOT NULL</code>: المفتاح يذهب إلى الابن، <code>CLASS</code>."
      },
      hint: {
        en: "Which entity is at the crow's foot — and can one row of the other table hold several classes?",
        ar: "أيّ الكيانين عند رِجل الغراب — وهل يستطيع صفّ واحد في الجدول الآخر أن يحمل عدّة شعب؟"
      },
      explain: {
        en: "Line 5. A teacher may have several classes, so <code>CLASS</code> is at the many end: it is the child, and its table gets the key, <code>classes.teacher_id</code>. A <code>class_id</code> column in <code>teachers</code> holds one value per row, so each teacher could have one class only — the 1:M would silently become 1:1. Lines 3 and 4 are the two readings of the right rule.",
        ar: "السطر 5. قد يكون للمعلّم عدّة شعب، فـ <code>CLASS</code> عند الطرف المتعدّد: هو الابن، وجدوله يأخذ المفتاح، <code>classes.teacher_id</code>. أمّا عمود <code>class_id</code> في <code>teachers</code> فيحمل قيمة واحدة في الصفّ، فلا يكون لكل معلّم إلا شعبة واحدة — وتصير ‎1:M خفيةً ‎1:1. والسطران 3 و4 هما قراءتا القاعدة الصحيحة."
      }
    },
    {
      id: "t5l2q06", type: "tf", level: "easy", topics: ["t5-parent-child", "t5-many-end", "t5-sales-rep"],
      q: {
        en: "In the slides' <code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code> model, <code>CUSTOMER</code> is the parent entity, because the customer is the one being served.",
        ar: "في نموذج <code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code> في الشرائح، <code>CUSTOMER</code> هو الكيان الأب، لأن الزبون هو من تُقدَّم له الخدمة."
      },
      truth: false,
      hint: {
        en: "Parent and child are read from the symbols, not from who serves whom. Where is the crow's foot?",
        ar: "الأب والابن يُقرآن من الرموز، لا ممّن يخدم مَن. أين رِجل الغراب؟"
      },
      explain: {
        en: "False. The parent is the entity at the one end (single toe), the child the entity at the many end (crow's foot). The crow's foot is at <code>CUSTOMER</code>, so <code>CUSTOMER</code> is the child and <code>SALES REPRESENTATIVE</code> the parent — which is why <code>customers.rep_id</code> holds the key. Importance or who serves whom has nothing to do with it.",
        ar: "خطأ. الأب هو الكيان عند طرف الواحد (إصبع واحدة)، والابن هو الكيان عند الطرف المتعدّد (رِجل غراب). ورِجل الغراب عند <code>CUSTOMER</code>، فـ <code>CUSTOMER</code> هو الابن و<code>SALES REPRESENTATIVE</code> هو الأب — ولهذا يحمل <code>customers.rep_id</code> المفتاح. ولا علاقة لذلك بالأهمية أو بمن يخدم مَن."
      }
    },
    {
      id: "t5l2q07", type: "output", level: "medium", topics: ["t5-parent-without-child", "t5-many-zero-or-more", "t5-fk-in-child"],
      q: {
        en: "The lesson's tables: <code>sales_reps</code> holds Hana (21), Karim (22) and Nadia (23). <code>customers</code> holds 501, 502 and 504 for rep 21, and 503 and 505 for rep 22. This query uses an inner <code>JOIN</code>, not the lesson's <code>LEFT JOIN</code>. How many rows does it return, and what is Karim's count?",
        ar: "جداول الدرس: يحمل <code>sales_reps</code> كلًّا من Hana (21) وKarim (22) وNadia (23). ويحمل <code>customers</code> الزبائن 501 و502 و504 للمندوب 21، و503 و505 للمندوب 22. يستعمل هذا الاستعلام <code>JOIN</code> داخليًّا، لا <code>LEFT JOIN</code> كما في الدرس. كم صفًّا يُعيد، وكم عدد Karim؟"
      },
      lang: "sql",
      code: "SELECT r.first_name, COUNT(c.customer_id) AS customers\nFROM sales_reps r JOIN customers c ON c.rep_id = r.rep_id\nGROUP BY r.first_name\nORDER BY r.first_name;",
      blanks: [
        { accept: ["2", "two"], label: { en: "rows returned", ar: "عدد الصفوف" } },
        { accept: ["2", "two"], label: { en: "Karim's customers", ar: "customers لـ Karim" } }
      ],
      solution: {
        code: "first_name | customers\nHana       | 3\nKarim      | 2",
        en: "Two rows: Hana 3, Karim 2. Nadia is missing.",
        ar: "صفّان: Hana 3، وKarim 2. وNadia غائبة."
      },
      hint: {
        en: "An inner join keeps only parent rows that some child row points to. Does any customer point to 23?",
        ar: "الربط الداخلي لا يُبقي إلا صفوف الأب التي يشير إليها صفّ ابن. هل يشير أيّ زبون إلى 23؟"
      },
      explain: {
        en: "2 rows, and Karim has 2. Nadia has no customer row pointing at her, so an inner join drops her entirely; the <code>LEFT JOIN</code> keeps her with a count of 0. That 0 is legal only because the slides' many is zero-or-more. The key lives in the child, so a parent with no children leaves no trace unless you join from the parent side.",
        ar: "صفّان، ولـ Karim زبونان. لا يشير أيّ صفّ زبون إلى Nadia، فيُسقطها الربط الداخلي كليًّا؛ أمّا <code>LEFT JOIN</code> فيُبقيها بعدد 0. وهذا الصفر مشروع فقط لأن المتعدّد في الشرائح «صفر أو أكثر». المفتاح في الابن، فالأب الذي لا أبناء له لا يترك أثرًا ما لم تربط من جهة الأب."
      }
    },

    /* ---------------------------------------------------- 3 · what "many" means */
    {
      id: "t5l2q08", type: "compare", level: "medium", topics: ["t5-many-meaning", "t5-many-zero-or-more", "t5-many-one-or-more"],
      q: {
        en: "Versions 1 and 2 of the second wholesaler evolve block, as text. Nadia Rami joins today and has no customer yet. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة التطوّر الثانية لتاجر الجملة، نصًّا. انضمّت Nadia Rami اليوم وليس لها زبون بعد. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "CUSTOMER  visited by / assigned to  SALES REPRESENTATIVE\n  CUSTOMER half: solid                end at CUSTOMER: crow's foot\n  SALES REPRESENTATIVE half: solid    end at SALES REPRESENTATIVE: single toe",
      codeB: "CUSTOMER  visited by / assigned to  SALES REPRESENTATIVE\n  CUSTOMER half: solid                end at CUSTOMER: crow's foot\n  SALES REPRESENTATIVE half: dashed   end at SALES REPRESENTATIVE: single toe",
      options: [
        { en: "B is better: A says each representative <em>must</em> be assigned to one or more customers, so Nadia cannot be recorded; B's dashed half makes the many zero-or-more", ar: "B أفضل: A يقول إن كل مندوب <em>يجب</em> أن يُسند إلى زبون أو أكثر، فلا يمكن تسجيل Nadia؛ والنصف المتقطّع في B يجعل المتعدّد «صفرًا أو أكثر»" },
        { en: "B is better because A is a different type: two solid halves make it one-to-one", ar: "B أفضل لأن A نوع مختلف: النصفان المتّصلان يجعلانها «واحدًا إلى واحد»" },
        { en: "B is better, but the <code>CUSTOMER</code> half should be dashed too, or Nadia still cannot be recorded", ar: "B أفضل، لكن يجب أن يكون نصف <code>CUSTOMER</code> متقطّعًا أيضًا، وإلّا بقيت Nadia غير قابلة للتسجيل" },
        { en: "A is better: a crow's foot means at least one, and A simply says so explicitly", ar: "A أفضل: رِجل الغراب تعني «واحدًا على الأقل»، وA يقول ذلك صراحةً فقط" }
      ],
      answer: 0,
      hint: {
        en: "Start the sentence at <code>SALES REPRESENTATIVE</code>. Which half do you read first — and what does solid say there?",
        ar: "ابدأ الجملة من <code>SALES REPRESENTATIVE</code>. أيّ نصف تقرأ أوّلًا — وماذا يقول المتّصل هناك؟"
      },
      explain: {
        en: "Only the half at the parent changed. Solid there reads \"must be assigned to one or more\": no representative may exist without a customer, so Nadia is blocked. Dashed reads \"may be assigned to\": the many starts at zero. The ends did not move, so both versions are 1:M. The <code>CUSTOMER</code> half governs whether a customer needs a representative — it has nothing to do with Nadia.",
        ar: "لم يتغيّر إلا النصف عند الأب. المتّصل هناك يُقرأ «must be assigned to one or more»: لا يجوز أن يوجد مندوب بلا زبون، فتُمنع Nadia. والمتقطّع يُقرأ «may be assigned to»: المتعدّد يبدأ من صفر. لم يتحرّك الطرفان، فكلا الإصدارين ‎1:M. أمّا نصف <code>CUSTOMER</code> فيحكم هل يحتاج الزبون مندوبًا — ولا شأن له بـ Nadia."
      }
    },
    {
      id: "t5l2q09", type: "multi", level: "hard", topics: ["t5-four-forms", "t5-many-meaning", "t5-type-from-ends"],
      q: {
        en: "Every 1:M can be drawn in four forms, each half solid or dashed. Which statements about the four forms are true? Choose all that apply.",
        ar: "يمكن رسم كل ‎1:M بأربعة أشكال، كل نصف متّصل أو متقطّع. أيّ العبارات عن الأشكال الأربعة صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "All four forms are one-to-many", ar: "الأشكال الأربعة كلّها «واحد إلى متعدّد»" },
        { en: "The half at the child decides whether the foreign key is <code>NOT NULL</code>", ar: "النصف عند الابن يقرّر هل المفتاح الأجنبي <code>NOT NULL</code>" },
        { en: "The half at the parent decides whether \"many\" starts at one or at zero", ar: "النصف عند الأب يقرّر هل يبدأ «المتعدّد» من واحد أو من صفر" },
        { en: "Making both halves solid turns the relationship into one-to-one", ar: "جعل النصفين متّصلين يحوّل العلاقة إلى «واحد إلى واحد»" },
        { en: "A dashed half at the child makes the many zero-or-more", ar: "النصف المتقطّع عند الابن يجعل المتعدّد «صفرًا أو أكثر»" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Each half has a different job. Which one do you read when you start the sentence from the parent?",
        ar: "لكل نصف عمل مختلف. أيّهما تقرأ حين تبدأ الجملة من الأب؟"
      },
      explain: {
        en: "The ends stay toe and crow's foot, so all four are 1:M — two solid halves do not make 1:1. The half at the child answers \"must a child have a parent?\", which becomes <code>NOT NULL</code> or nullable. The half at the parent answers \"must a parent have a child?\", which is where many starts. Swapping the two jobs is the tempting mistake: a dashed child half lets a child be orphaned, it says nothing about how many children a parent has.",
        ar: "يبقى الطرفان إصبعًا ورِجل غراب، فالأربعة كلّها ‎1:M — والنصفان المتّصلان لا يصنعان ‎1:1. النصف عند الابن يجيب «هل يجب أن يكون للابن أب؟»، فيصير <code>NOT NULL</code> أو قابلًا لـ null. والنصف عند الأب يجيب «هل يجب أن يكون للأب ابن؟»، ومنه يبدأ المتعدّد. والخطأ المغري هو تبديل العملين: النصف المتقطّع عند الابن يسمح بابن بلا أب، ولا يقول شيئًا عن عدد أبناء الأب."
      }
    },
    {
      id: "t5l2q10", type: "contrast", level: "medium", topics: ["t5-many-zero-or-more", "t5-many-one-or-more", "t5-many-meaning"],
      q: {
        en: "Each statement describes the many end of a 1:M. Is that many one-or-more or zero-or-more?",
        ar: "كل عبارة تصف الطرف المتعدّد في ‎1:M. هل هذا المتعدّد «واحد أو أكثر» أم «صفر أو أكثر»؟"
      },
      concepts: [
        { en: "One-or-more many", ar: "متعدّد «واحد أو أكثر»" },
        { en: "Zero-or-more many", ar: "متعدّد «صفر أو أكثر»" }
      ],
      rows: [
        { s: { en: "Each <code>STUDY GROUP</code> must have one or more <code>STUDENT</code>s.", ar: "Each <code>STUDY GROUP</code> must have one or more <code>STUDENT</code>s." }, a: 0 },
        { s: { en: "Each <code>SALES REPRESENTATIVE</code> may be assigned to one or more <code>CUSTOMER</code>s.", ar: "Each <code>SALES REPRESENTATIVE</code> may be assigned to one or more <code>CUSTOMER</code>s." }, a: 1 },
        { s: { en: "A new teacher may join before any class is allocated to them.", ar: "قد ينضمّ معلّم جديد قبل أن تُسند إليه أيّ شعبة." }, a: 1 },
        { s: { en: "The half next to the parent is solid.", ar: "النصف المجاور للأب متّصل." }, a: 0 },
        { s: { en: "Nadia's count of 0 in the <code>LEFT JOIN</code> is legal.", ar: "عدد Nadia الصفري في <code>LEFT JOIN</code> مشروع." }, a: 1 },
        { s: { en: "A department cannot be recorded until its first employee is assigned to it.", ar: "لا يمكن تسجيل قسم حتى يُعيَّن فيه أوّل موظّف." }, a: 0 }
      ],
      hint: {
        en: "Read each one from the parent: must it have a child, or may it have none?",
        ar: "اقرأ كلّ واحدة من الأب: هل يجب أن يكون له ابن، أم قد لا يكون له أيّ ابن؟"
      },
      explain: {
        en: "\"Many\" starts at one when the parent <em>must</em> have a child — a solid parent half, as for the study group or a department that cannot exist empty. It starts at zero when the parent <em>may</em> have none — a dashed parent half, as for the slides' representative, a new teacher, or Nadia's 0. The crow's foot is the same in every row; only the parent half tells them apart.",
        ar: "يبدأ «المتعدّد» من واحد حين <em>يجب</em> أن يكون للأب ابن — نصف أب متّصل، كما في مجموعة الدراسة أو قسم لا يجوز أن يوجد فارغًا. ويبدأ من صفر حين <em>قد</em> لا يكون للأب أيّ ابن — نصف أب متقطّع، كما في مندوب الشرائح، والمعلّم الجديد، وصفر Nadia. رِجل الغراب واحدة في كل الصفوف؛ ونصف الأب وحده يفرّق بينها."
      }
    },
    {
      id: "t5l2q11", type: "fill", level: "easy", topics: ["t5-sales-rep", "t5-one-to-many", "t5-many-zero-or-more"],
      q: {
        en: "Write the slides' two business rules for the wholesaler. Fill each blank.",
        ar: "اكتب قاعدتَي العمل في الشرائح لتاجر الجملة. املأ كل فراغ."
      },
      lang: "erdish",
      code: "Each CUSTOMER ____1____ visited by ____2____ SALES REPRESENTATIVE.\nEach SALES REPRESENTATIVE ____3____ assigned to ____4____ CUSTOMERs.",
      blanks: [
        { accept: ["must be", "must"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["may be", "may"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" }, wide: true }
      ],
      solution: { en: "1 = must be, 2 = one and only one, 3 = may be, 4 = one or more.", ar: "1 = must be، 2 = one and only one، 3 = may be، 4 = one or more." },
      hint: {
        en: "A customer always has a representative; a new representative may have no customer yet.",
        ar: "للزبون دائمًا مندوب؛ وقد لا يكون للمندوب الجديد زبون بعد."
      },
      explain: {
        en: "Each <code>CUSTOMER</code> <em>must be</em> visited by <em>one and only one</em> <code>SALES REPRESENTATIVE</code>; each <code>SALES REPRESENTATIVE</code> <em>may be</em> assigned to <em>one or more</em> <code>CUSTOMER</code>s. One and only one in one direction, one or more in the other: 1:M. The <em>may</em> is what makes the many zero-or-more and lets Nadia exist.",
        ar: "Each <code>CUSTOMER</code> <em>must be</em> visited by <em>one and only one</em> <code>SALES REPRESENTATIVE</code>؛ وEach <code>SALES REPRESENTATIVE</code> <em>may be</em> assigned to <em>one or more</em> <code>CUSTOMER</code>s. «واحد وواحد فقط» في اتجاه، و«واحد أو أكثر» في الآخر: ‎1:M. وكلمة <em>may</em> هي التي تجعل المتعدّد «صفرًا أو أكثر» وتسمح بوجود Nadia."
      }
    },
    {
      id: "t5l2q12", type: "trace", level: "hard", topics: ["t5-many-one-or-more", "t5-parent-without-child", "t5-fk-in-child"],
      q: {
        en: "A manager insists every representative must have at least one customer, and believes the foreign key <code>customers.rep_id</code> will enforce it. Starting from the lesson's tables (Nadia, 23, has no customers), the clerk hires Rami Haddad and runs a check. What happens?",
        ar: "يُصرّ مدير على أن لكل مندوب زبونًا واحدًا على الأقل، ويظنّ أن المفتاح الأجنبي <code>customers.rep_id</code> سيفرض ذلك. انطلاقًا من جداول الدرس (Nadia، رقم 23، بلا زبائن)، يوظّف الموظّف Rami Haddad ثم يُجري فحصًا. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO sales_reps VALUES (24, 'Rami', 'Haddad');\n\nSELECT r.rep_id, r.first_name\nFROM sales_reps r LEFT JOIN customers c ON c.rep_id = r.rep_id\nWHERE c.customer_id IS NULL\nORDER BY r.rep_id;",
      options: [
        { en: "The insert is refused, because the foreign key requires every representative to have a customer; the query returns Nadia only", ar: "تُرفض الإضافة، لأن المفتاح الأجنبي يشترط أن يكون لكل مندوب زبون؛ ويُعيد الاستعلام Nadia وحدها" },
        { en: "The insert runs; the query returns two rows: 23 Nadia and 24 Rami", ar: "تُنفَّذ الإضافة؛ ويُعيد الاستعلام صفّين: 23 Nadia و24 Rami" },
        { en: "The insert runs; the query returns no rows, because <code>rep_id</code> is <code>NOT NULL</code>", ar: "تُنفَّذ الإضافة؛ ولا يُعيد الاستعلام أيّ صفّ، لأن <code>rep_id</code> من نوع <code>NOT NULL</code>" },
        { en: "The insert runs; the query returns 24 Rami only, because Nadia was recorded before the rule", ar: "تُنفَّذ الإضافة؛ ويُعيد الاستعلام 24 Rami وحده، لأن Nadia سُجّلت قبل القاعدة" }
      ],
      answer: 1,
      hint: {
        en: "Which table does the foreign key sit in, and which rows can it therefore check?",
        ar: "في أيّ جدول يقع المفتاح الأجنبي، وأيّ الصفوف يستطيع لذلك أن يفحص؟"
      },
      explain: {
        en: "The insert runs, and both Nadia (23) and Rami (24) come back as representatives with no customer. The key sits in the child's table: it can force each customer to name an existing representative, never force a representative to have a customer. <code>NOT NULL</code> on <code>customers.rep_id</code> constrains customer rows, not representative rows. A one-or-more many cannot be enforced by the key — this query is how you find the rows that break it.",
        ar: "تُنفَّذ الإضافة، ويعود كلٌّ من Nadia (23) وRami (24) مندوبَين بلا زبون. المفتاح في جدول الابن: يستطيع أن يُلزم كل زبون بتسمية مندوب موجود، ولا يستطيع أبدًا أن يُلزم المندوب بأن يكون له زبون. و<code>NOT NULL</code> على <code>customers.rep_id</code> يقيّد صفوف الزبائن لا صفوف المندوبين. المتعدّد «واحد أو أكثر» لا يفرضه المفتاح — وهذا الاستعلام هو طريقتك لإيجاد الصفوف التي تخالفه."
      }
    },
    {
      id: "t5l2q13", type: "mcq", level: "hard", topics: ["t5-many-one-or-more", "t5-fk-in-child", "t5-four-forms"],
      q: {
        en: "<code>customers.rep_id</code> is declared <code>NUMBER NOT NULL REFERENCES sales_reps(rep_id)</code>. Which business rule can this column <em>not</em> enforce?",
        ar: "عُرّف <code>customers.rep_id</code> بأنه <code>NUMBER NOT NULL REFERENCES sales_reps(rep_id)</code>. أيّ قاعدة عمل <em>لا</em> يستطيع هذا العمود أن يفرضها؟"
      },
      options: [
        { en: "Each customer must be visited by a representative", ar: "يجب أن يزور كلَّ زبون مندوبٌ" },
        { en: "Each customer is visited by no more than one representative", ar: "لا يزور الزبونَ أكثرُ من مندوب واحد" },
        { en: "A customer's representative must be someone in <code>sales_reps</code>", ar: "يجب أن يكون مندوب الزبون موجودًا في <code>sales_reps</code>" },
        { en: "Each representative must be assigned to at least one customer", ar: "يجب أن يُسند كل مندوب إلى زبون واحد على الأقل" }
      ],
      answer: 3,
      hint: {
        en: "Every check this column makes is made on a <code>customers</code> row. Which rule is about a <code>sales_reps</code> row?",
        ar: "كل فحص يجريه هذا العمود يجري على صفّ في <code>customers</code>. أيّ القواعد تخصّ صفًّا في <code>sales_reps</code>؟"
      },
      explain: {
        en: "A one-or-more many — every representative has at least one customer — is a rule about parent rows, and the key sits in the child. <code>NOT NULL</code> enforces \"must be visited\", the single column enforces \"no more than one\", and <code>REFERENCES</code> enforces \"an existing representative\". Nothing in <code>customers</code> stops a representative from having no row pointing at them.",
        ar: "المتعدّد «واحد أو أكثر» — لكل مندوب زبون واحد على الأقل — قاعدة عن صفوف الأب، والمفتاح في الابن. يفرض <code>NOT NULL</code> «يجب أن يُزار»، ويفرض العمود المفرد «لا أكثر من واحد»، ويفرض <code>REFERENCES</code> «مندوبًا موجودًا». ولا شيء في <code>customers</code> يمنع مندوبًا من ألّا يشير إليه أيّ صفّ."
      }
    },

    /* ---------------------------------------------------- 4 · M:1 is the same line read backwards */
    {
      id: "t5l2q14", type: "tf", level: "medium", topics: ["t5-read-backwards", "t5-one-key-two-readings", "t5-many-to-one"],
      q: {
        en: "One student calls <code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code> many-to-one; another calls it one-to-many. Since both are right, the database needs one foreign key for each reading: <code>customers.rep_id</code> and <code>sales_reps.customer_id</code>.",
        ar: "يسمّي طالب علاقة <code>CUSTOMER</code>&ndash;<code>SALES REPRESENTATIVE</code> «متعدّدًا إلى واحد»، ويسمّيها آخر «واحدًا إلى متعدّد». وبما أن كليهما محقّ، تحتاج قاعدة البيانات مفتاحًا أجنبيًا لكل قراءة: <code>customers.rep_id</code> و<code>sales_reps.customer_id</code>."
      },
      truth: false,
      hint: {
        en: "Are M:1 and 1:M two lines, or one line seen from two ends?",
        ar: "هل ‎M:1 و‎1:M خطّان، أم خطّ واحد يُرى من طرفين؟"
      },
      explain: {
        en: "False. Both students are right because they are describing the same line from different ends — same toe, same crow's foot, same halves. One relationship needs one foreign key, in the child: <code>customers.rep_id</code> answers both \"who visits Gaza Books?\" and \"whom does Hana visit?\". A <code>customer_id</code> in <code>sales_reps</code> would let each representative hold one customer only.",
        ar: "خطأ. كلا الطالبين محقّ لأنهما يصفان الخطّ نفسه من طرفين مختلفين — الإصبع نفسها، ورِجل الغراب نفسها، والنصفان أنفسهما. العلاقة الواحدة تحتاج مفتاحًا أجنبيًا واحدًا في الابن: <code>customers.rep_id</code> يجيب عن «من يزور Gaza Books؟» وعن «من تزور Hana؟» معًا. أمّا <code>customer_id</code> في <code>sales_reps</code> فلا يسمح لكل مندوب إلا بزبون واحد."
      }
    },
    {
      id: "t5l2q15", type: "mcq", level: "easy", topics: ["t5-many-to-one", "t5-read-backwards"],
      q: {
        en: "\"Each <code>EMPLOYEE</code> must be assigned to one and only one <code>DEPARTMENT</code>.\" The crow's foot is at <code>EMPLOYEE</code>. Which reading of the relationship is this sentence?",
        ar: "«Each <code>EMPLOYEE</code> must be assigned to one and only one <code>DEPARTMENT</code>.» ورِجل الغراب عند <code>EMPLOYEE</code>. أيّ قراءة للعلاقة هذه الجملة؟"
      },
      options: [
        { en: "The one-to-one reading, because it says \"one and only one\"", ar: "قراءة «واحد إلى واحد»، لأنها تقول «one and only one»" },
        { en: "The many-to-one reading, from the child towards the parent", ar: "قراءة «متعدّد إلى واحد»، من الابن نحو الأب" },
        { en: "The one-to-many reading, from the parent towards the child", ar: "قراءة «واحد إلى متعدّد»، من الأب نحو الابن" },
        { en: "A separate many-to-one relationship, alongside the one-to-many one", ar: "علاقة «متعدّد إلى واحد» مستقلّة، إلى جانب علاقة «واحد إلى متعدّد»" }
      ],
      answer: 1,
      hint: {
        en: "Which entity does the sentence start from — the one at the crow's foot or the one at the toe?",
        ar: "من أيّ كيان تبدأ الجملة — الذي عند رِجل الغراب أم الذي عند الإصبع؟"
      },
      explain: {
        en: "It starts at <code>EMPLOYEE</code>, the many end, and arrives at the one end: the M:1 reading. \"One and only one\" is only one direction; the other sentence, \"Each <code>DEPARTMENT</code> may be responsible for one or more <code>EMPLOYEE</code>s\", is the 1:M reading. Two sentences, one relationship — never two.",
        ar: "تبدأ من <code>EMPLOYEE</code>، الطرف المتعدّد، وتصل إلى طرف الواحد: قراءة ‎M:1. و«one and only one» اتجاه واحد فقط؛ والجملة الأخرى «Each <code>DEPARTMENT</code> may be responsible for one or more <code>EMPLOYEE</code>s» هي قراءة ‎1:M. جملتان، وعلاقة واحدة — لا علاقتان أبدًا."
      }
    },
    {
      id: "t5l2q16", type: "output", level: "easy", topics: ["t5-one-key-two-readings", "t5-read-backwards"],
      q: {
        en: "The lesson's <code>customers</code> table: 501 Al-Noor Bakery (21), 502 Gaza Books (21), 503 Sunrise Pharmacy (22), 504 Blue Sea Cafe (21), 505 Olive Market (22). Whom does Karim (22) visit? Give the rows in order.",
        ar: "جدول <code>customers</code> في الدرس: 501 Al-Noor Bakery (21)، و502 Gaza Books (21)، و503 Sunrise Pharmacy (22)، و504 Blue Sea Cafe (21)، و505 Olive Market (22). من يزور Karim (22)؟ اكتب الصفوف بالترتيب."
      },
      lang: "sql",
      code: "SELECT name\nFROM customers\nWHERE rep_id = 22\nORDER BY name;",
      blanks: [
        { accept: ["Olive Market"], label: { en: "row 1", ar: "الصف 1" }, wide: true },
        { accept: ["Sunrise Pharmacy"], label: { en: "row 2", ar: "الصف 2" }, wide: true }
      ],
      solution: { code: "name\nOlive Market\nSunrise Pharmacy", en: "Olive Market, then Sunrise Pharmacy.", ar: "Olive Market، ثم Sunrise Pharmacy." },
      hint: {
        en: "Keep the rows whose <code>rep_id</code> is 22, then sort the names alphabetically.",
        ar: "أبقِ الصفوف التي <code>rep_id</code> فيها 22، ثم رتّب الأسماء أبجديًّا."
      },
      explain: {
        en: "Olive Market, then Sunrise Pharmacy. This is the 1:M question — whom does Karim visit? — and it may return many rows. The M:1 question — who visits Olive Market? — reads the same column, <code>customers.rep_id</code>, from the other side and returns one. One key, two readings.",
        ar: "Olive Market ثم Sunrise Pharmacy. هذا سؤال ‎1:M — من يزور Karim؟ — وقد يُعيد صفوفًا كثيرة. أمّا سؤال ‎M:1 — من يزور Olive Market؟ — فيقرأ العمود نفسه، <code>customers.rep_id</code>، من الجهة الأخرى ويُعيد صفًّا واحدًا. مفتاح واحد، وقراءتان."
      }
    },
    {
      id: "t5l2q17", type: "complete", level: "medium", topics: ["t5-read-backwards", "t5-many-zero-or-more", "t5-one-to-many"],
      q: {
        en: "Chapter 3's company: an employee is assigned to exactly one department; a department is responsible for many employees, and a newly opened department may have none yet. Complete the second ERDish sentence.",
        ar: "شركة الفصل 3: يُعيَّن الموظّف في قسم واحد بالضبط؛ والقسم مسؤول عن موظّفين كثيرين، وقد لا يكون في القسم المفتوح حديثًا أيّ موظّف بعد. أكمل جملة ERDish الثانية."
      },
      lang: "erdish",
      code: "Each EMPLOYEE must be assigned to one and only one DEPARTMENT.\n____",
      options: [
        { code: "Each DEPARTMENT must be responsible for one or more EMPLOYEEs." },
        { code: "Each DEPARTMENT may be responsible for one and only one EMPLOYEE." },
        { code: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs." },
        { code: "Each EMPLOYEE may be assigned to one or more DEPARTMENTs." }
      ],
      answer: 2,
      hint: {
        en: "The second sentence starts at the other entity. Then ask the business two things: how many, and is none allowed?",
        ar: "الجملة الثانية تبدأ من الكيان الآخر. ثم اسأل العمل أمرين: كم، وهل يُسمح بلا شيء؟"
      },
      explain: {
        en: "The 1:M reading starts at <code>DEPARTMENT</code>: \"may\" because a new department may have no employees (zero-or-more), \"one or more\" because it is responsible for many. \"must\" would block a new department; \"one and only one\" would make the line 1:1. The last option starts at <code>EMPLOYEE</code> again and contradicts the first sentence.",
        ar: "قراءة ‎1:M تبدأ من <code>DEPARTMENT</code>: «may» لأن القسم الجديد قد لا يكون فيه موظّفون («صفر أو أكثر»)، و«one or more» لأنه مسؤول عن كثيرين. أمّا «must» فتمنع القسم الجديد؛ و«one and only one» تجعل الخطّ ‎1:1. والخيار الأخير يبدأ من <code>EMPLOYEE</code> مرّة أخرى ويناقض الجملة الأولى."
      }
    },

    /* ---------------------------------------------------- 5 · PERSON and DVD */
    {
      id: "t5l2q18", type: "mcq", level: "easy", topics: ["t5-person-dvd", "t5-two-how-many", "t5-parent-child"],
      q: {
        en: "A family says: \"each DVD belongs to exactly one of us, and some of us own many DVDs.\" Where does the crow's foot go on <code>PERSON</code>&ndash;<code>DVD</code>?",
        ar: "تقول عائلة: «كل قرص يخصّ واحدًا منّا بالضبط، وبعضنا يملك أقراصًا كثيرة.» أين توضع رِجل الغراب على <code>PERSON</code>&ndash;<code>DVD</code>؟"
      },
      options: [
        { en: "At <code>PERSON</code>, because a person owns many DVDs", ar: "عند <code>PERSON</code>، لأن الشخص يملك أقراصًا كثيرة" },
        { en: "At both ends, because the word \"many\" appears in the rule", ar: "عند الطرفين، لأن كلمة «كثير» وردت في القاعدة" },
        { en: "Nowhere: \"exactly one\" makes it one-to-one", ar: "لا مكان لها: «واحد بالضبط» تجعلها «واحدًا إلى واحد»" },
        { en: "At <code>DVD</code>; <code>DVD</code> is the child and gets the foreign key", ar: "عند <code>DVD</code>؛ و<code>DVD</code> هو الابن ويأخذ المفتاح الأجنبي" }
      ],
      answer: 3,
      hint: {
        en: "Ask \"how many DVDs can one person own?\" — the answer is drawn at the far end, next to the thing being counted.",
        ar: "اسأل «كم قرصًا يملك الشخص الواحد؟» — والجواب يُرسم عند الطرف البعيد، بجانب الشيء المعدود."
      },
      explain: {
        en: "\"How many DVDs can one person own?\" — many — puts the crow's foot next to <code>DVD</code>, the thing being counted. \"How many persons own one DVD?\" — one — puts a toe at <code>PERSON</code>. So it is 1:M with <code>DVD</code> the child, and <code>dvds.owner_id</code> holds the key. Putting the crow's foot next to the entity that \"has many\" is the classic slip; the symbol sits at the far end.",
        ar: "«كم قرصًا يملك الشخص الواحد؟» — كثيرًا — يضع رِجل الغراب بجانب <code>DVD</code>، الشيء المعدود. و«كم شخصًا يملك القرص الواحد؟» — واحدًا — يضع إصبعًا عند <code>PERSON</code>. فهي ‎1:M و<code>DVD</code> هو الابن، و<code>dvds.owner_id</code> يحمل المفتاح. ووضع رِجل الغراب بجانب الكيان «الذي يملك الكثير» هو الزلّة المعروفة؛ فالرمز يقع عند الطرف البعيد."
      }
    },
    {
      id: "t5l2q19", type: "order", level: "medium", topics: ["t5-two-how-many", "t5-person-dvd", "t5-fk-in-child"],
      q: {
        en: "The family DVD library, from the business to the table. Put the steps in order.",
        ar: "مكتبة أقراص العائلة، من العمل إلى الجدول. رتّب الخطوات."
      },
      items: [
        { en: "Ask the business both questions: how many DVDs can one person own, and how many persons can own one DVD?", ar: "اسأل العمل السؤالين: كم قرصًا يملك الشخص الواحد، وكم شخصًا يملك القرص الواحد؟" },
        { en: "Draw each answer at the far end: a crow's foot at DVD, a single toe at PERSON", ar: "ارسم كل جواب عند الطرف البعيد: رِجل غراب عند DVD، وإصبع واحدة عند PERSON" },
        { en: "Read the type from the two ends: 1:M, with DVD as the child", ar: "اقرأ النوع من الطرفين: ‎1:M، وDVD هو الابن" },
        { en: "Add one column to the child's table: dvds.owner_id", ar: "أضِف عمودًا واحدًا إلى جدول الابن: dvds.owner_id" },
        { en: "Read the half at DVD to decide NOT NULL or nullable — dashed, so nullable", ar: "اقرأ النصف عند DVD لتقرّر NOT NULL أو قابلًا لـ null — متقطّع، فهو قابل لـ null" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "You cannot name a child before you know the type, and you cannot place a column before you know the child.",
        ar: "لا تستطيع أن تسمّي الابن قبل أن تعرف النوع، ولا أن تضع عمودًا قبل أن تعرف الابن."
      },
      explain: {
        en: "The questions come first because they are the business; each answer becomes a symbol at the far end; the two ends give the type and the child; the child's table receives the key; and only once the column exists does its half decide <code>NOT NULL</code>. Thinking it through in this order, early, is what the slides mean by avoiding costly mistakes later.",
        ar: "السؤالان أوّلًا لأنهما العمل؛ وكل جواب يصير رمزًا عند الطرف البعيد؛ والطرفان يعطيان النوع والابن؛ وجدول الابن يستقبل المفتاح؛ وبعد أن يوجد العمود فقط يقرّر نصفُه <code>NOT NULL</code>. والتفكير بهذا الترتيب، مبكّرًا، هو ما تعنيه الشرائح بتجنّب الأخطاء المكلفة لاحقًا."
      }
    },
    {
      id: "t5l2q20", type: "write", level: "hard", topics: ["t5-fk-in-child", "t5-parent-child", "t5-four-forms"],
      q: {
        en: "Each <code>CLASS</code> must be allocated to one and only one <code>TEACHER</code>; each <code>TEACHER</code> may be responsible for one or more <code>CLASS</code>es. The table <code>teachers (teacher_id NUMBER PRIMARY KEY, first_name, last_name)</code> already exists. Write the <code>CREATE TABLE</code> for <code>classes</code> with columns <code>class_id</code>, <code>name</code> and the foreign key.",
        ar: "Each <code>CLASS</code> must be allocated to one and only one <code>TEACHER</code>؛ وEach <code>TEACHER</code> may be responsible for one or more <code>CLASS</code>es. والجدول <code>teachers (teacher_id NUMBER PRIMARY KEY, first_name, last_name)</code> موجود مسبقًا. اكتب أمر <code>CREATE TABLE</code> لجدول <code>classes</code> بالأعمدة <code>class_id</code> و<code>name</code> والمفتاح الأجنبي."
      },
      lang: "sql",
      lines: 5,
      checks: [
        { re: "CREATE\\s+TABLE\\s+classes\\s*\\(", flags: "i",
          label: { en: "creates the child table, classes", ar: "يُنشئ جدول الابن، classes" } },
        { re: "class_id\\s+[^,]*PRIMARY\\s+KEY", flags: "i",
          label: { en: "class_id is the primary key", ar: "class_id هو المفتاح الأساسي" } },
        { re: "teacher_id\\s+NUMBER\\b[^,]*NOT\\s+NULL", flags: "i",
          label: { en: "teacher_id is NOT NULL: the CLASS half is solid", ar: "teacher_id من نوع NOT NULL: نصف CLASS متّصل" } },
        { re: "REFERENCES\\s+teachers\\s*\\(\\s*teacher_id\\s*\\)", flags: "i",
          label: { en: "teacher_id references teachers(teacher_id)", ar: "teacher_id يشير إلى teachers(teacher_id)" } }
      ],
      forbid: [
        { re: "(CREATE|ALTER)\\s+TABLE\\s+teachers\\b", flags: "i",
          label: { en: "the key never goes in the parent: one teachers row cannot hold many classes", ar: "المفتاح لا يذهب إلى الأب أبدًا: صفّ واحد في teachers لا يحمل شعبًا كثيرة" } }
      ],
      solution: {
        code: "CREATE TABLE classes (\n  class_id    VARCHAR2(10) PRIMARY KEY,\n  name        VARCHAR2(30) NOT NULL,\n  teacher_id  NUMBER NOT NULL REFERENCES teachers(teacher_id)\n);",
        en: "The key sits in the child, <code>classes</code>, and is <code>NOT NULL</code> because a class <em>must</em> be allocated.",
        ar: "المفتاح في الابن، <code>classes</code>، وهو <code>NOT NULL</code> لأن الشعبة <em>يجب</em> أن تُسند."
      },
      hint: {
        en: "Which entity is at the crow's foot? Its table gets the column. Then read the half at that entity.",
        ar: "أيّ الكيانين عند رِجل الغراب؟ جدوله يأخذ العمود. ثم اقرأ النصف عند ذلك الكيان."
      },
      explain: {
        en: "A teacher may have many classes, so <code>CLASS</code> is the child and <code>classes.teacher_id</code> is the one column the 1:M needs. The <code>CLASS</code> half is solid (\"must be allocated\"), so the column is <code>NOT NULL</code>. The dashed <code>TEACHER</code> half — a teacher with no class yet — needs no code at all. Altering <code>teachers</code> to hold a class id is the tempting wrong shortcut: one row, one class.",
        ar: "قد يكون للمعلّم شعب كثيرة، فـ <code>CLASS</code> هو الابن و<code>classes.teacher_id</code> هو العمود الوحيد الذي تحتاجه ‎1:M. ونصف <code>CLASS</code> متّصل («must be allocated»)، فالعمود <code>NOT NULL</code>. أمّا نصف <code>TEACHER</code> المتقطّع — معلّم بلا شعبة بعد — فلا يحتاج أيّ شيفرة. وتعديل <code>teachers</code> ليحمل رقم الشعبة هو الطريق المختصر الخاطئ المغري: صفّ واحد، شعبة واحدة."
      }
    },
    {
      id: "t5l2q21", type: "multi", level: "hard", topics: ["t5-two-how-many", "t5-relationship-type", "t5-many-to-one"],
      q: {
        en: "All a designer has been told is: \"Each <code>RECEIPT</code> must be issued to one and only one <code>STUDENT</code>.\" Which relationship types are still possible for <code>RECEIPT</code>&ndash;<code>STUDENT</code>? Choose all that apply.",
        ar: "كلّ ما قيل للمصمّم: «Each <code>RECEIPT</code> must be issued to one and only one <code>STUDENT</code>.» أيّ أنواع العلاقات ما زالت ممكنة لـ <code>RECEIPT</code>&ndash;<code>STUDENT</code>؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "One-to-one (1:1)", ar: "واحد إلى واحد (‎1:1)" },
        { en: "One-to-many (1:M), with <code>RECEIPT</code> as the child", ar: "واحد إلى متعدّد (‎1:M)، و<code>RECEIPT</code> هو الابن" },
        { en: "Many-to-many (M:M)", ar: "متعدّد إلى متعدّد (‎M:M)" },
        { en: "Many-to-one (M:1), as a fourth type distinct from 1:M", ar: "متعدّد إلى واحد (‎M:1)، نوعًا رابعًا مختلفًا عن ‎1:M" }
      ],
      answer: [0, 1],
      hint: {
        en: "The sentence fixes the symbol at one end only. Which end — and what is still unknown?",
        ar: "الجملة تثبّت الرمز عند طرف واحد فقط. أيّ طرف — وما الذي ما زال مجهولًا؟"
      },
      explain: {
        en: "\"One and only one\" puts a single toe at <code>STUDENT</code>, which rules out M:M. The end at <code>RECEIPT</code> is still unknown until someone asks the second question: how many receipts can one student be issued? One gives 1:1, many gives 1:M. M:1 is not a fourth type — it is the 1:M read from the child. One sentence can never tell 1:M from 1:1: always ask both.",
        ar: "«one and only one» تضع إصبعًا واحدة عند <code>STUDENT</code>، فتستبعد ‎M:M. أمّا الطرف عند <code>RECEIPT</code> فيبقى مجهولًا حتى يُطرح السؤال الثاني: كم إيصالًا يمكن أن يصدر للطالب الواحد؟ واحد يعطي ‎1:1، وكثير يعطي ‎1:M. و‎M:1 ليست نوعًا رابعًا — إنها ‎1:M مقروءةً من الابن. الجملة الواحدة لا تفرّق أبدًا بين ‎1:M و‎1:1: اسأل السؤالين دائمًا."
      }
    },
    {
      id: "t5l2q22", type: "mcq", level: "hard", topics: ["t5-person-dvd", "t5-two-how-many", "t5-fk-in-child"],
      q: {
        en: "The library was built as 1:M, with <code>dvds.owner_id NUMBER</code>. A year later the family says some DVDs are co-owned by two of them. What is the right response?",
        ar: "بُنيت المكتبة علاقةَ ‎1:M، بالعمود <code>dvds.owner_id NUMBER</code>. وبعد عام تقول العائلة إن بعض الأقراص يملكها اثنان منهم معًا. ما الاستجابة الصحيحة؟"
      },
      options: [
        { en: "Store both owners in <code>owner_id</code> as text, such as <code>'1,4'</code>", ar: "خزّن المالكَين في <code>owner_id</code> نصًّا، مثل <code>'1,4'</code>" },
        { en: "Add a second column, <code>owner2_id</code>, to <code>dvds</code>", ar: "أضِف عمودًا ثانيًا، <code>owner2_id</code>، إلى <code>dvds</code>" },
        { en: "Recognise that the relationship is now M:M — many in both directions — and redesign the tables", ar: "اعترف بأن العلاقة صارت ‎M:M — كثير في الاتجاهين — وأعِد تصميم الجداول" },
        { en: "Move the key to the parent: add <code>dvd_id</code> to <code>persons</code>", ar: "انقل المفتاح إلى الأب: أضِف <code>dvd_id</code> إلى <code>persons</code>" }
      ],
      answer: 2,
      hint: {
        en: "Ask the second question again with the new business: how many persons can own one DVD?",
        ar: "اطرح السؤال الثاني من جديد بحسب العمل الجديد: كم شخصًا يملك القرص الواحد؟"
      },
      explain: {
        en: "The answer to \"how many persons own one DVD?\" changed from one to many, so a crow's foot appears at <code>PERSON</code> too: the type is now M:M. One column holds one value per row, so no single foreign key can carry it — the tables must be redesigned. A comma list is not a key, <code>owner2_id</code> breaks at three owners, and a key in <code>persons</code> lets each person own one DVD. This is the costly late mistake the slides warn about.",
        ar: "تغيّر جواب «كم شخصًا يملك القرص الواحد؟» من واحد إلى كثير، فتظهر رِجل غراب عند <code>PERSON</code> أيضًا: صار النوع ‎M:M. والعمود يحمل قيمة واحدة في الصفّ، فلا يستطيع مفتاح أجنبي واحد أن يحملها — يجب إعادة تصميم الجداول. القائمة المفصولة بفواصل ليست مفتاحًا، و<code>owner2_id</code> ينكسر عند المالك الثالث، والمفتاح في <code>persons</code> لا يسمح لكل شخص إلا بقرص واحد. هذا هو الخطأ المتأخّر المكلف الذي تحذّر منه الشرائح."
      }
    },
    {
      id: "t5l2q23", type: "trace", level: "medium", topics: ["t5-parent-without-child", "t5-many-zero-or-more", "t5-one-key-two-readings"],
      q: {
        en: "Starting from the lesson's tables, Olive Market (505) is handed from Karim (22) to Nadia (23). Then the lesson's count is run. What does it return?",
        ar: "انطلاقًا من جداول الدرس، يُنقل Olive Market (505) من Karim (22) إلى Nadia (23). ثم يُنفَّذ استعلام العدّ في الدرس. ماذا يُعيد؟"
      },
      lang: "sql",
      code: "UPDATE customers SET rep_id = 23 WHERE customer_id = 505;\n\nSELECT r.first_name, COUNT(c.customer_id) AS customers\nFROM sales_reps r LEFT JOIN customers c ON c.rep_id = r.rep_id\nGROUP BY r.first_name\nORDER BY r.first_name;",
      options: [
        { en: "Hana 3, Karim 2, Nadia 1 — the update adds a row for Nadia and keeps Karim's", ar: "Hana 3، وKarim 2، وNadia 1 — يضيف التحديث صفًّا لـ Nadia ويُبقي صفّ Karim" },
        { en: "Hana 3, Karim 1, Nadia 1", ar: "Hana 3، وKarim 1، وNadia 1" },
        { en: "Hana 3, Karim 1 — Nadia is still missing, because she was hired with no customers", ar: "Hana 3، وKarim 1 — وNadia ما زالت غائبة، لأنها عُيّنت بلا زبائن" },
        { en: "Hana 3, Karim 2, Nadia 0 — the update must also change <code>sales_reps</code>", ar: "Hana 3، وKarim 2، وNadia 0 — يجب أن يغيّر التحديث <code>sales_reps</code> أيضًا" }
      ],
      answer: 1,
      hint: {
        en: "Which table holds the link? One <code>UPDATE</code> of one row changes what both readings see.",
        ar: "أيّ جدول يحمل الارتباط؟ <code>UPDATE</code> واحد لصفّ واحد يغيّر ما تراه القراءتان كلتاهما."
      },
      explain: {
        en: "Hana 3, Karim 1, Nadia 1. The link lives in one place, <code>customers.rep_id</code>, so changing that one value moves Olive Market off Karim's count and onto Nadia's; <code>sales_reps</code> is untouched. The <code>LEFT JOIN</code> lists every representative — Nadia appeared with 0 before and appears with 1 now. Five customers, still counted once each.",
        ar: "Hana 3، وKarim 1، وNadia 1. الارتباط يقيم في مكان واحد، <code>customers.rep_id</code>، فتغيير هذه القيمة الواحدة ينقل Olive Market من عدد Karim إلى عدد Nadia؛ ولا يُمسّ <code>sales_reps</code>. و<code>LEFT JOIN</code> يسرد كل المندوبين — ظهرت Nadia بـ 0 من قبل وتظهر بـ 1 الآن. خمسة زبائن، كلٌّ يُعدّ مرّة واحدة."
      }
    },
    {
      id: "t5l2q24", type: "ordercode", level: "medium", topics: ["t5-fk-in-child", "t5-parent-child", "t5-parent-without-child"],
      q: {
        en: "Build the wholesaler from nothing, in Oracle, where a foreign key must reference a table that already exists and a child row must point at a parent row that already exists. Put the statements in an order that runs.",
        ar: "ابنِ تاجر الجملة من لا شيء، في Oracle، حيث يجب أن يشير المفتاح الأجنبي إلى جدول موجود مسبقًا، وأن يشير صفّ الابن إلى صفّ أب موجود مسبقًا. رتّب الأوامر ترتيبًا يعمل."
      },
      items: [
        { code: "CREATE TABLE sales_reps (rep_id NUMBER PRIMARY KEY, first_name VARCHAR2(20) NOT NULL, last_name VARCHAR2(20) NOT NULL);\nINSERT INTO sales_reps VALUES (21, 'Hana', 'Saleh');\nINSERT INTO sales_reps VALUES (23, 'Nadia', 'Rami');" },
        { code: "CREATE TABLE customers (customer_id NUMBER PRIMARY KEY,\n  name VARCHAR2(30) NOT NULL,\n  rep_id NUMBER NOT NULL REFERENCES sales_reps(rep_id));" },
        { code: "INSERT INTO customers VALUES (501, 'Al-Noor Bakery', 21);\nINSERT INTO customers VALUES (502, 'Gaza Books', 21);" },
        { code: "SELECT r.first_name, COUNT(c.customer_id) AS customers\nFROM sales_reps r LEFT JOIN customers c ON c.rep_id = r.rep_id\nGROUP BY r.first_name;" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "The parent must exist before anything can point at it — both the table and the row.",
        ar: "يجب أن يوجد الأب قبل أن يشير إليه أيّ شيء — الجدول والصفّ كلاهما."
      },
      explain: {
        en: "Parent table and rows first, then the child table whose <code>REFERENCES</code> needs <code>sales_reps</code>, then child rows that point at 21, then the count: Hana 2, Nadia 0. Nadia's row needs no customer, because the key sits in <code>customers</code> and the many is zero-or-more. Creating <code>customers</code> first fails: its key would reference a table that does not exist yet.",
        ar: "جدول الأب وصفوفه أوّلًا، ثم جدول الابن الذي يحتاج <code>REFERENCES</code> فيه إلى <code>sales_reps</code>، ثم صفوف الابن التي تشير إلى 21، ثم العدّ: Hana 2، وNadia 0. صفّ Nadia لا يحتاج زبونًا، لأن المفتاح في <code>customers</code> والمتعدّد «صفر أو أكثر». وإنشاء <code>customers</code> أوّلًا يفشل: فمفتاحه سيشير إلى جدول لم يوجد بعد."
      }
    }

  ]
};
