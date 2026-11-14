/* Question bank: T4 chapter test A -- Core. About five questions per lesson, easy and medium. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-exam-a"] = {
  title: { en: "Chapter Test A — Core", ar: "اختبار الفصل A — الأساسيات" },
  intro: {
    en: "24 questions across the whole chapter, about five from each lesson: when one entity is really several, supertype and subtype, inheritance, the three rules, nesting and when to stop, and judging a model. The cases are the chapter's own — the shop's payments, the lecturer's EXAM, WALL COVERING, SNOW SPORT and ANIMAL, and the café. These are the ideas every student must own; none is hard. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الفصل كله، نحو خمسة من كل درس: متى يكون الكيان الواحد عدّة كيانات، والنوع الأعلى (supertype) والنوع الفرعي (subtype)، والوراثة (inheritance)، والقواعد الثلاث، والتداخل (nesting) ومتى نتوقّف، والحكم على النموذج. والحالات هي حالات الفصل نفسها — مدفوعات المتجر، و<code>EXAM</code> عند المحاضِرة، و<code>WALL COVERING</code> و<code>SNOW SPORT</code> و<code>ANIMAL</code>، والمقهى. هذه أفكار يجب أن يمتلكها كل طالب، وليس فيها سؤال صعب. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== lesson 1 · when one entity is really several */
    {
      id: "t4ax01", type: "tf", level: "easy",
      topics: ["t4-special-property", "t4-instances-differ"],
      q: {
        en: "A special property is always an attribute. A relationship, such as being made by a <code>CUSTOMER</code>, belongs to the whole entity even if cash payments do not need it.",
        ar: "السمة الخاصّة (special property) خاصيةٌ دائمًا. أمّا العلاقة، كأن تُدفع الدفعة من <code>CUSTOMER</code>، فتخصّ الكيان كله حتى لو لم تحتج إليها الدفعات النقدية."
      },
      truth: false,
      hint: {
        en: "Recall the slides' exact words: some instances have attributes \"and/or\" what?",
        ar: "تذكّر عبارة الشرائح بالضبط: لبعض النُّسَخ خصائص «و/أو» ماذا؟"
      },
      explain: {
        en: "False. The slides say some instances have attributes <em>and/or relationships</em> that others do not. The customer line is the shop's example: cheques and card payments need it, cash does not. Treating it as a property of every payment is how a cash sale ends up needing a customer.",
        ar: "خطأ. تقول الشرائح إنّ لبعض النُّسَخ خصائص <em>و/أو علاقات</em> ليست لغيرها. وخطّ العميل هو مثال المتجر: تحتاج إليه الشيكات ودفعات البطاقة، ولا تحتاج إليه الدفعة النقدية. ومعاملته سمةً لكل دفعة هي ما يجعل البيع النقدي يتطلّب عميلًا."
      }
    },
    {
      id: "t4ax02", type: "contrast", level: "medium",
      topics: ["t4-one-entity", "t4-separate-entities", "t4-hidden-rule", "t4-repeated-structure"],
      q: {
        en: "Two first drafts of the shop's payments: one <code>PAYMENT</code> entity with a <code>Method</code> attribute, or three separate entities <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>. Which draft does each statement describe?",
        ar: "مسوّدتان أوليان لمدفوعات المتجر: كيان <code>PAYMENT</code> واحد مع خاصية <code>Method</code>، أو ثلاثة كيانات منفصلة <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>. أيّ مسوّدة تصفها كل عبارة؟"
      },
      concepts: [
        { en: "One <code>PAYMENT</code> entity", ar: "كيان <code>PAYMENT</code> واحد" },
        { en: "Three separate entities", ar: "ثلاثة كيانات منفصلة" }
      ],
      rows: [
        { s: { en: "<code>Payment Date</code> is drawn exactly once.", ar: "تُرسم <code>Payment Date</code> مرّة واحدة بالضبط." }, a: 0 },
        { s: { en: "<code>Card Number</code> can be marked <code>*</code> for card payments.", ar: "يمكن تعليم <code>Card Number</code> بـ <code>*</code> لدفعات البطاقة." }, a: 1 },
        { s: { en: "<code>o Card Number</code> applies to cash payments as well.", ar: "تنطبق <code>o Card Number</code> على الدفعات النقدية أيضًا." }, a: 0 },
        { s: { en: "A new attribute every payment has must be added in three places.", ar: "الخاصية الجديدة التي لكل دفعة يجب أن تُضاف في ثلاثة مواضع." }, a: 1 },
        { s: { en: "Nothing in the model says that a cheque and a card payment are both payments.", ar: "لا شيء في النموذج يقول إنّ الشيك ودفعة البطاقة كلاهما دفعة." }, a: 1 },
        { s: { en: "\"Everything taken on 3 March\" reads one place.", ar: "سؤال «كل ما قُبض في 3 مارس» يُقرأ من موضع واحد." }, a: 0 }
      ],
      hint: {
        en: "One draft hides rules behind one set of marks; the other repeats the common part. Sort each statement by which of those two it shows.",
        ar: "مسوّدة تُخفي القواعد خلف مجموعة واحدة من العلامات، والأخرى تكرّر الجزء المشترك. صنّف كل عبارة بحسب أيّ الأمرين تُظهر."
      },
      explain: {
        en: "One entity keeps the common part once, so the date is drawn once and every \"all payments\" question has one home — but its single set of marks makes <code>Card Number</code> optional for everyone, cash included. Three entities give each kind its own marks, but repeat the common attributes and lose the fact that the kinds belong together. Each draft is right about the other's defect; the subtype model keeps both strengths.",
        ar: "الكيان الواحد يحفظ الجزء المشترك مرّة واحدة، فيُرسم التاريخ مرّة ويكون لكل سؤال عن «كل المدفوعات» موضع واحد — لكنّ مجموعة علاماته الوحيدة تجعل <code>Card Number</code> اختياريةً للجميع، النقد معهم. أمّا الكيانات الثلاثة فتعطي كل نوع علاماته، لكنها تكرّر الخصائص المشتركة وتُضيّع أنّ الأنواع تنتمي معًا. كل مسوّدة محقّة في عيب الأخرى، والنموذج ذو الأنواع الفرعية يحفظ مزايا الاثنتين."
      }
    },
    {
      id: "t4ax03", type: "fill", level: "medium",
      topics: ["t4-fourth-method", "t4-change-cost", "t4-repeated-structure", "t4-three-designs"],
      q: {
        en: "Start from the shop's three methods (cash, cheque, credit card), with no wallets yet. The shop adds bank transfers, each with an account number and made by a customer. After the change, how many times is <code>Payment Date</code> drawn in each design? Answer with a number.",
        ar: "ابدأ من طرق المتجر الثلاث (نقد، شيك، بطاقة ائتمان)، دون محافظ بعد. يضيف المتجر التحويلات البنكية، ولكلٍّ منها رقم حساب ويدفعها عميل. بعد التغيير، كم مرّة تُرسم <code>Payment Date</code> في كل تصميم؟ أجب برقم."
      },
      lang: "text",
      code: "one PAYMENT entity with Method:        ____1____\nseparate entities, one per method:     ____2____\nkinds drawn inside PAYMENT (subtypes): ____3____",
      blanks: [
        { accept: ["1", "one", "once"], label: { en: "one entity", ar: "كيان واحد" } },
        { accept: ["4", "four"], label: { en: "separate entities", ar: "كيانات منفصلة" } },
        { accept: ["1", "one", "once"], label: { en: "subtypes", ar: "أنواع فرعية" } }
      ],
      hint: {
        en: "In which designs does a new kind come with its own copy of the common attributes?",
        ar: "في أيّ التصميمات يأتي النوع الجديد بنسخته الخاصّة من الخصائص المشتركة؟"
      },
      explain: {
        en: "1, 4 and 1. Separate entities need a whole new <code>BANK TRANSFER</code> entity with its own date and amount, so the date is now drawn four times. One entity and the subtype model both keep the date once — but one entity pays with another hidden rule (<code>o Account Number</code>), while the subtype model adds a box with <code>* Account Number</code> and a customer line. A good model absorbs a new kind with a small, local change.",
        ar: "1 و4 و1. الكيانات المنفصلة تحتاج إلى كيان <code>BANK TRANSFER</code> جديد كامل بتاريخه ومبلغه، فيصير التاريخ مرسومًا أربع مرّات. ويحفظ الكيان الواحد ونموذج الأنواع الفرعية التاريخ مرّة واحدة — لكنّ الكيان الواحد يدفع الثمن قاعدةً مخفيّة أخرى (<code>o Account Number</code>)، بينما يضيف نموذج الأنواع الفرعية صندوقًا فيه <code>* Account Number</code> وخطّ عميل. النموذج الجيّد يستوعب النوع الجديد بتغيير صغير موضعي."
      }
    },
    {
      id: "t4ax04", type: "mcq", level: "easy",
      topics: ["t4-not-applicable", "t4-special-property", "t4-choice"],
      q: {
        en: "The café keeps all its orders in one <code>orders</code> table. <code>pickup_time</code> is empty in every eat-in order and filled in every take-away order. What should that pattern tell the designer?",
        ar: "يحفظ المقهى كل طلباته في جدول <code>orders</code> واحد. العمود <code>pickup_time</code> فارغ في كل طلب داخلي (eat in) ومملوء في كل طلب سفري (to go). ماذا ينبغي أن يقول هذا النمط للمصمّم؟"
      },
      options: [
        { en: "The eat-in pickup times are unknown and should be collected later", ar: "أوقات الاستلام للطلبات الداخلية مجهولة وينبغي جمعها لاحقًا" },
        { en: "Pickup time is a special property of take-away orders, so <code>ORDER</code> is a candidate for subtypes", ar: "وقت الاستلام سمة خاصّة بالطلبات السفرية، فـ <code>ORDER</code> مرشّح للأنواع الفرعية" },
        { en: "<code>pickup_time</code> should be made <code>NOT NULL</code> so every order has one", ar: "ينبغي جعل <code>pickup_time</code> بقيد <code>NOT NULL</code> ليكون لكل طلب وقت استلام" }
      ],
      answer: 1,
      hint: {
        en: "Is the gap scattered, or does it follow the kind of order exactly?",
        ar: "هل الفراغ مبعثر، أم يتبع نوع الطلب بالضبط؟"
      },
      explain: {
        en: "The emptiness is not applicable, not unknown: an eat-in order has no pickup time and never will. A column empty for a whole kind of row is the table saying \"this belongs to only some of you\" — a special property, the sign to consider subtypes. Making it <code>NOT NULL</code> would force a meaningless value onto every eat-in order.",
        ar: "الفراغ هنا «غير منطبق» (not applicable) لا «مجهول»: فالطلب الداخلي لا وقت استلام له ولن يكون. والعمود الفارغ في نوع كامل من الصفوف هو قول الجدول «هذا يخصّ بعضكم فقط» — سمة خاصّة، وإشارة إلى التفكير في الأنواع الفرعية. وجعله <code>NOT NULL</code> يفرض قيمة بلا معنى على كل طلب داخلي."
      }
    },

    /* ==================================================== lesson 2 · supertype and subtype */
    {
      id: "t4ax05", type: "mcq", level: "easy",
      topics: ["t4-specialized-attribute", "t4-subtype", "t4-common-listed-once"],
      q: {
        en: "The till starts recording the change handed back, which only a cash payment can have, and every cash payment has one (zero if none). Where is <code>Change Given</code> drawn in the shop's recommended model?",
        ar: "يبدأ الصندوق بتسجيل الباقي المُعاد للزبون، ولا يكون إلا للدفعة النقدية، ولكل دفعة نقدية باقٍ (صفر إن لم يوجد). أين تُرسم <code>Change Given</code> في نموذج المتجر الموصى به؟"
      },
      options: [
        { en: "<code>o Change Given</code> in <code>PAYMENT</code>, since card payments have none", ar: "<code>o Change Given</code> في <code>PAYMENT</code>، لأنّ دفعات البطاقة لا باقي لها" },
        { en: "<code>* Change Given</code> in <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>", ar: "<code>* Change Given</code> في <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>" },
        { en: "<code>* Change Given</code> inside <code>CASH</code> only", ar: "<code>* Change Given</code> داخل <code>CASH</code> وحده" }
      ],
      answer: 2,
      hint: {
        en: "Which kinds of payment have this attribute? Draw it where exactly those payments are.",
        ar: "أيّ أنواع الدفعات لها هذه الخاصية؟ ارسمها حيث توجد تلك الدفعات بالضبط."
      },
      explain: {
        en: "Only cash payments have it, and all of them do, so it is a specialized attribute of <code>CASH</code>, mandatory there. Putting it in <code>PAYMENT</code> as <code>o</code> repeats Lesson 1's hidden rule: optional for everyone, really mandatory for one kind. Drawing it in all three subtypes would give cheques and cards change they never receive.",
        ar: "لا تملكها إلا الدفعات النقدية، وكلها تملكها، فهي خاصية متخصّصة (specialized attribute) في <code>CASH</code>، إلزامية هناك. ووضعها في <code>PAYMENT</code> بعلامة <code>o</code> يكرّر القاعدة المخفيّة من الدرس الأول: اختيارية للجميع، وهي إلزامية فعلًا لنوع واحد. ورسمها في الأنواع الثلاثة يعطي الشيكات والبطاقات باقيًا لا يُعطى لها أبدًا."
      }
    },
    {
      id: "t4ax06", type: "multi", level: "medium",
      topics: ["t4-inheritance", "t4-inherited-attribute", "t4-inherited-relationship", "t4-exam-hierarchy"],
      q: {
        en: "The lecturer's recommended <code>EXAM</code>: <code>EXAM</code> lists <code># Number</code>, <code>* Description</code>, <code>* Weight</code>, <code>* Date</code>, <code>* Grade For Written Component</code> and is taken by <code>STUDENT</code>; <code>MIDTERM</code> lists <code>* Grade For Oral Presentation</code>; <code>FINAL</code> lists <code>* Extra Points For Optional Paper</code>; <code>QUIZ</code> includes <code>BONUS QUESTION</code>. Which of these does a <code>MIDTERM</code> have? Choose every one.",
        ar: "نموذج <code>EXAM</code> الموصى به عند المحاضِرة: يذكر <code>EXAM</code> الخصائص <code># Number</code> و<code>* Description</code> و<code>* Weight</code> و<code>* Date</code> و<code>* Grade For Written Component</code>، ويأخذه <code>STUDENT</code>؛ ويذكر <code>MIDTERM</code> الخاصية <code>* Grade For Oral Presentation</code>؛ ويذكر <code>FINAL</code> الخاصية <code>* Extra Points For Optional Paper</code>؛ و<code>QUIZ</code> يتضمّن <code>BONUS QUESTION</code>. أيّ هذه يملكها <code>MIDTERM</code>؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>* Weight</code>", ar: "<code>* Weight</code>" },
        { en: "<code>* Extra Points For Optional Paper</code>", ar: "<code>* Extra Points For Optional Paper</code>" },
        { en: "<code>* Grade For Oral Presentation</code>", ar: "<code>* Grade For Oral Presentation</code>" },
        { en: "Being taken by <code>STUDENT</code>", ar: "أن يأخذه <code>STUDENT</code>" },
        { en: "Including <code>BONUS QUESTION</code>s", ar: "أن يتضمّن <code>BONUS QUESTION</code>" },
        { en: "<code># Number</code>", ar: "<code># Number</code>" }
      ],
      answer: [0, 2, 3, 5],
      hint: {
        en: "Walk outwards from the <code>MIDTERM</code> box only. Which boxes enclose it, and which merely sit beside it?",
        ar: "امشِ إلى الخارج من صندوق <code>MIDTERM</code> فقط. أيّ الصناديق تحيط به، وأيّها يجاوره فحسب؟"
      },
      explain: {
        en: "A <code>MIDTERM</code> has its own oral grade, and inherits every attribute and every relationship of <code>EXAM</code>: the number, the weight and being taken by students. The extra points belong to <code>FINAL</code> and the bonus questions to <code>QUIZ</code> — its siblings. Inheritance runs from the outer box inwards, never sideways.",
        ar: "لـ <code>MIDTERM</code> درجته الشفوية الخاصّة، ويرث كل خاصية وكل علاقة لـ <code>EXAM</code>: الرقم والوزن وأن يأخذه الطلاب. أمّا النقاط الإضافية فلـ <code>FINAL</code>، والأسئلة الإضافية لـ <code>QUIZ</code> — وهما شقيقاه. الوراثة تجري من الصندوق الخارجي إلى الداخل، لا جانبيًّا أبدًا."
      }
    },
    {
      id: "t4ax07", type: "error", level: "medium",
      topics: ["t4-relationship-placement", "t4-supertype-relationship", "t4-subtype-relationship", "t4-wall-covering"],
      q: {
        en: "The decorating store's model, as text. The business: every wall covering is bought from one supplier; only paint is mixed to a colour. Which line wrongly states a rule about wallpaper and fabric?",
        ar: "نموذج متجر الديكور، نصًّا. قواعد العمل: كل كسوة جدار تُشترى من مورّد واحد، والدهان وحده يُمزج بلون. أيّ سطر يقرّر خطأً قاعدةً على ورق الجدران والقماش؟"
      },
      lang: "text",
      code: "WALL COVERING  # Code  * Description  * Price\n  PAINT        * Litres\n  WALLPAPER    * Roll Length\n  FABRIC       * Material\n  OTHER\nEach WALL COVERING must be bought from one and only one SUPPLIER.\nEach WALL COVERING must be mixed to one and only one COLOUR.",
      answer: 7,
      hint: {
        en: "A line drawn to the supertype is inherited by every subtype. Read each line once for <code>FABRIC</code>.",
        ar: "الخطّ المرسوم إلى النوع الأعلى يرثه كل نوع فرعي. اقرأ كل سطر مرّة لـ <code>FABRIC</code>."
      },
      explain: {
        en: "Line 7. Drawn to <code>WALL COVERING</code>, the colour line is inherited by every subtype: \"Each FABRIC must be mixed to one and only one COLOUR\" — false. It belongs to <code>PAINT</code>, as a subtype relationship. Line 6 looks the same but is right: every wall covering has a supplier, so it is a supertype relationship.",
        ar: "السطر 7. لأنّ خطّ اللون مرسوم إلى <code>WALL COVERING</code> يرثه كل نوع فرعي: «Each FABRIC must be mixed to one and only one COLOUR» — وهذا خطأ. مكانه <code>PAINT</code>، علاقةَ نوع فرعي (subtype relationship). والسطر 6 يشبهه لكنه صحيح: لكل كسوة جدار مورّد، فهو علاقة نوع أعلى (supertype relationship)."
      },
      solution: {
        code: "WALL COVERING  # Code  * Description  * Price\n  PAINT        * Litres\n  WALLPAPER    * Roll Length\n  FABRIC       * Material\n  OTHER\nEach WALL COVERING must be bought from one and only one SUPPLIER.\nEach PAINT must be mixed to one and only one COLOUR.",
        en: "Move the colour line from the supertype to <code>PAINT</code>; the supplier line stays.",
        ar: "انقل خطّ اللون من النوع الأعلى إلى <code>PAINT</code>، ويبقى خطّ المورّد مكانه."
      }
    },
    {
      id: "t4ax08", type: "tf", level: "easy",
      topics: ["t4-drawing-subtypes", "t4-specialization", "t4-subtype"],
      q: {
        en: "In an ERD, <code>CHECK</code> is shown as a subtype of <code>PAYMENT</code> by drawing a relationship line between the two boxes.",
        ar: "في مخطّط ERD يُبيَّن أنّ <code>CHECK</code> نوع فرعي من <code>PAYMENT</code> برسم خطّ علاقة بين الصندوقين."
      },
      truth: false,
      hint: {
        en: "The slides say a subtype is a specialization of its supertype, and therefore must be … what?",
        ar: "تقول الشرائح إنّ النوع الفرعي تخصيص (specialization) لنوعه الأعلى، ولذلك يجب أن يكون … ماذا؟"
      },
      explain: {
        en: "False. A subtype is enclosed within its supertype: its box is drawn inside the outer box, with no line between them. A line joins two different entities — a cheque is not related to a payment, it is one. That is why <code>CUSTOMER</code> gets a line and <code>CHECK</code> gets a place inside.",
        ar: "خطأ. النوع الفرعي محاط بنوعه الأعلى: يُرسم صندوقه داخل الصندوق الخارجي، بلا خطّ بينهما. فالخطّ يصل كيانين مختلفين — والشيك ليس مرتبطًا بدفعة، بل هو دفعة. ولهذا يأخذ <code>CUSTOMER</code> خطًّا، ويأخذ <code>CHECK</code> مكانًا في الداخل."
      }
    },
    {
      id: "t4ax09", type: "fill", level: "easy",
      topics: ["t4-reading-both-ways", "t4-exam-hierarchy"],
      q: {
        en: "The lecturer's note reads the <code>EXAM</code> diagram in two directions. Name the direction of each sentence: <code>inwards-out</code> or <code>outwards-in</code>.",
        ar: "تقرأ ملاحظة المحاضِرة مخطّط <code>EXAM</code> في اتجاهين. سمِّ اتجاه كل جملة: <code>inwards-out</code> (من الداخل إلى الخارج) أو <code>outwards-in</code> (من الخارج إلى الداخل)."
      },
      lang: "erdish",
      code: "Every QUIZ, MIDTERM or FINAL is an EXAM.        ____1____\nEvery EXAM is either a QUIZ, a MIDTERM or a FINAL.  ____2____",
      blanks: [
        { accept: ["inwards-out", "inwards out", "inward-out", "inward out", "inwardsout"], label: { en: "sentence 1", ar: "الجملة 1" } },
        { accept: ["outwards-in", "outwards in", "outward-in", "outward in", "outwardsin"], label: { en: "sentence 2", ar: "الجملة 2" } }
      ],
      hint: {
        en: "Which box does each sentence start from: the inner box or the outer one?",
        ar: "من أيّ صندوق تبدأ كل جملة: الداخلي أم الخارجي؟"
      },
      explain: {
        en: "Sentence 1 starts from the inner boxes and walks out: inwards-out, which is inheritance — every midterm has everything an exam has. Sentence 2 starts from the outer box: outwards-in, which says the subtypes account for every exam. The second only holds when the subtypes are exhaustive and mutually exclusive, the rules of Lesson 3.",
        ar: "الجملة 1 تبدأ من الصناديق الداخلية وتمشي إلى الخارج: inwards-out، وهي الوراثة — لكل امتحان نصفي كل ما للامتحان. والجملة 2 تبدأ من الصندوق الخارجي: outwards-in، وتقول إنّ الأنواع الفرعية تحيط بكل امتحان. والثانية لا تصحّ إلا إذا كانت الأنواع الفرعية شاملة (exhaustive) ومتنافية (mutually exclusive)، وهما قاعدتا الدرس الثالث."
      }
    },

    /* ==================================================== lesson 3 · the three rules */
    {
      id: "t4ax10", type: "mcq", level: "medium",
      topics: ["t4-mutually-exclusive", "t4-subdivision-basis", "t4-overlapping-subtypes"],
      q: {
        en: "The shop draws <code>STAFF MEMBER</code> with subtypes <code>MANAGER</code>, <code>CASHIER</code> and <code>PART TIME</code> (<code>* Weekly Hours</code>), and an <code>OTHER</code>. Some cashiers work part time. Which rule does the hierarchy break?",
        ar: "يرسم المتجر <code>STAFF MEMBER</code> بأنواع فرعية <code>MANAGER</code> و<code>CASHIER</code> و<code>PART TIME</code> (<code>* Weekly Hours</code>)، ومعها <code>OTHER</code>. بعض أمناء الصندوق يعملون بدوام جزئي. أيّ قاعدة يكسرها هذا التسلسل؟"
      },
      options: [
        { en: "Rule one: a part-timer is not a kind of staff member", ar: "القاعدة الأولى: العامل بدوام جزئي ليس نوعًا من الموظفين" },
        { en: "Rule two: some staff fit no subtype", ar: "القاعدة الثانية: بعض الموظفين لا يقعون في أيّ نوع فرعي" },
        { en: "Rule three: a part-time cashier fits two subtypes", ar: "القاعدة الثالثة: أمين الصندوق بدوام جزئي يقع في نوعين فرعيين" }
      ],
      answer: 2,
      hint: {
        en: "What question does <code>MANAGER</code> / <code>CASHIER</code> answer, and what question does <code>PART TIME</code> answer?",
        ar: "أيّ سؤال يجيب عنه <code>MANAGER</code> / <code>CASHIER</code>، وأيّ سؤال يجيب عنه <code>PART TIME</code>؟"
      },
      explain: {
        en: "Rule three. \"What is their job?\" and \"how many hours?\" are two bases of subdivision mixed in one set, so a part-time cashier sits in two boxes. Rule two is fine — <code>OTHER</code> takes the rest — and every part-timer is a staff member. Keep one basis for the subtypes; the hours become an attribute such as <code>o Weekly Hours</code> on <code>STAFF MEMBER</code>.",
        ar: "القاعدة الثالثة. «ما وظيفته؟» و«كم ساعة يعمل؟» أساسان للتقسيم (basis of subdivision) اختلطا في مجموعة واحدة، فيقع أمين الصندوق بدوام جزئي في صندوقين. والقاعدة الثانية سليمة — يأخذ <code>OTHER</code> الباقين — وكل عامل بدوام جزئي موظف. احتفظ بأساس واحد للأنواع الفرعية، وتصير الساعات خاصية مثل <code>o Weekly Hours</code> في <code>STAFF MEMBER</code>."
      }
    },
    {
      id: "t4ax11", type: "contrast", level: "medium",
      topics: ["t4-exhaustive", "t4-mutually-exclusive", "t4-other-subtype", "t4-type-column-check"],
      q: {
        en: "Rule two says the subtypes are exhaustive; rule three says they are mutually exclusive. Which rule does each statement concern?",
        ar: "تقول القاعدة الثانية إنّ الأنواع الفرعية شاملة (exhaustive)، والثالثة إنها متنافية (mutually exclusive). بأيّ قاعدة تتعلّق كل عبارة؟"
      },
      concepts: [
        { en: "Exhaustive (rule two)", ar: "الشمول (القاعدة الثانية)" },
        { en: "Mutually exclusive (rule three)", ar: "التنافي (القاعدة الثالثة)" }
      ],
      rows: [
        { s: { en: "The slides add an <code>OTHER</code> subtype to make sure of it.", ar: "تضيف الشرائح نوعًا فرعيًّا <code>OTHER</code> لضمانه." }, a: 0 },
        { s: { en: "A washable wallpaper sits in <code>WALLPAPER</code> and in <code>WASHABLE</code>.", ar: "يقع ورق الجدران القابل للغسل في <code>WALLPAPER</code> وفي <code>WASHABLE</code>." }, a: 1 },
        { s: { en: "A gift-voucher payment has no box among <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>.", ar: "دفعة قسيمة الهدية لا صندوق لها بين <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>." }, a: 0 },
        { s: { en: "Splitting on one basis only keeps it true.", ar: "التقسيم على أساس واحد فقط يحفظه صحيحًا." }, a: 1 },
        { s: { en: "In one table, <code>NOT NULL</code> on the type column enforces it: every row has a type.", ar: "في جدول واحد، يفرضه <code>NOT NULL</code> على عمود النوع: لكل صفّ نوع." }, a: 0 },
        { s: { en: "Adding up the subtype totals gives more than the till took.", ar: "جمع مجاميع الأنواع الفرعية يعطي أكثر ممّا قبضه الصندوق." }, a: 1 }
      ],
      hint: {
        en: "Exhaustive asks \"at least one box?\"; exclusive asks \"at most one box?\".",
        ar: "الشمول يسأل «صندوق واحد على الأقل؟»، والتنافي يسأل «صندوق واحد على الأكثر؟»."
      },
      explain: {
        en: "Exhaustive is about instances with no box: the voucher, fixed by <code>OTHER</code>, enforced in a table by <code>NOT NULL</code>. Mutually exclusive is about instances in two boxes: the washable wallpaper, a payment counted twice so the totals overshoot, prevented by keeping one basis. The tempting slip is to think <code>OTHER</code> repairs overlap — it only gives the uncovered a home.",
        ar: "الشمول يتعلّق بالنُّسَخ التي لا صندوق لها: القسيمة، ويُصلحها <code>OTHER</code>، ويفرضها <code>NOT NULL</code> في الجدول. والتنافي يتعلّق بالنُّسَخ الواقعة في صندوقين: ورق الجدران القابل للغسل، ودفعة تُعدّ مرّتين فتزيد المجاميع، ويمنعه الالتزام بأساس واحد. والزلّة المغرية أن تظنّ أنّ <code>OTHER</code> يُصلح التداخل — وهو لا يفعل إلا إيواء غير المشمول."
      }
    },
    {
      id: "t4ax12", type: "tf", level: "easy",
      topics: ["t4-other-subtype", "t4-overlapping-subtypes"],
      q: {
        en: "<code>PAYMENT</code> has <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code> and <code>ONLINE</code>, and a card payment made on the website fits two of them. Adding an <code>OTHER</code> subtype repairs this.",
        ar: "لـ <code>PAYMENT</code> الأنواع <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> و<code>ONLINE</code>، ودفعة البطاقة عبر الموقع تقع في اثنين منها. إضافة نوع فرعي <code>OTHER</code> تُصلح ذلك."
      },
      truth: false,
      hint: {
        en: "Which of the three questions is <code>OTHER</code> there to answer?",
        ar: "أيّ الأسئلة الثلاثة وُجد <code>OTHER</code> ليجيب عنه؟"
      },
      explain: {
        en: "False. <code>OTHER</code> holds instances that fit no box, so it fixes rule two. This payment fits two boxes — rule three — and an extra box cannot remove an overlap. The repair is one basis for the subtypes (method), with the channel as an attribute of <code>PAYMENT</code>.",
        ar: "خطأ. يحمل <code>OTHER</code> النُّسَخ التي لا صندوق لها، فهو يُصلح القاعدة الثانية. أمّا هذه الدفعة فتقع في صندوقين — القاعدة الثالثة — ولا يزيل صندوقٌ إضافي تداخلًا. والإصلاح أساس واحد للأنواع الفرعية (طريقة الدفع)، والقناة خاصية في <code>PAYMENT</code>."
      }
    },
    {
      id: "t4ax13", type: "error", level: "easy",
      topics: ["t4-kind-of-test", "t4-related-vs-kind-of", "t4-inwards-out-sentence"],
      q: {
        en: "A zoo's model, as text. Every animal is looked after by a keeper. Which line fails the \"is a kind of\" test?",
        ar: "نموذج حديقة حيوان، نصًّا. يرعى كلَّ حيوان حارسٌ (keeper). أيّ سطر يفشل في اختبار «نوع من»؟"
      },
      lang: "text",
      code: "ANIMAL  # Animal ID  * Name\n  VERTEBRATE\n  INVERTEBRATE\n  KEEPER  * Shift",
      answer: 4,
      hint: {
        en: "Say each inner box as a sentence: \"Every ____ is an ANIMAL.\"",
        ar: "قل كل صندوق داخلي جملةً: «Every ____ is an ANIMAL.»"
      },
      explain: {
        en: "Line 4. \"Every KEEPER is an ANIMAL\" is false: a keeper looks after animals. Enclosed, it would inherit <code># Animal ID</code> and <code>* Name</code> as if each keeper were one animal. \"Related to\" is drawn as a line; <code>KEEPER</code> becomes its own entity outside <code>ANIMAL</code>, joined to it by a relationship.",
        ar: "السطر 4. «Every KEEPER is an ANIMAL» خطأ: الحارس يرعى الحيوانات. ولو بقي في الداخل لورث <code># Animal ID</code> و<code>* Name</code> كأنّ كل حارس حيوان واحد. «مرتبط بـ» يُرسم خطًّا، فيصير <code>KEEPER</code> كيانًا مستقلًّا خارج <code>ANIMAL</code> يصله به خطّ علاقة."
      },
      solution: {
        code: "ANIMAL  # Animal ID  * Name\n  VERTEBRATE\n  INVERTEBRATE\nKEEPER  # Keeper ID  * Shift   (outside; looks after ANIMAL)",
        en: "Move <code>KEEPER</code> outside and join it to <code>ANIMAL</code> by a line.",
        ar: "انقل <code>KEEPER</code> إلى الخارج وصِله بـ <code>ANIMAL</code> بخطّ."
      }
    },
    {
      id: "t4ax14", type: "compare", level: "easy",
      topics: ["t4-single-subtype", "t4-other-subtype", "t4-snow-sport"],
      q: {
        en: "Two drafts of the ski resort's model, as text. The resort cares only about ski lengths for now. Which statement is right?",
        ar: "مسوّدتان لنموذج منتجع التزلّج، نصًّا. لا يهتمّ المنتجع الآن إلا بأطوال الزلّاجات. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "SNOW SPORT  # Sport ID  * Name\n  SKI  * Ski Length",
      codeB: "SNOW SPORT  # Sport ID  * Name\n  SKI    * Ski Length\n  OTHER",
      options: [
        { en: "A is acceptable: one subtype is fine when it has an attribute of its own", ar: "A مقبولة: النوع الفرعي الوحيد لا بأس به إذا كانت له خاصية خاصّة" },
        { en: "B is right: there is never just one subtype, so <code>OTHER</code> contains the rest", ar: "B هي الصحيحة: لا يكون النوع الفرعي وحيدًا أبدًا، فيحتوي <code>OTHER</code> البقية" },
        { en: "B breaks rule three, because snowboarding could fit <code>SKI</code> and <code>OTHER</code>", ar: "B تكسر القاعدة الثالثة، لأنّ التزلّج على اللوح قد يقع في <code>SKI</code> و<code>OTHER</code>" },
        { en: "Both are wrong: <code>* Ski Length</code> should be an optional attribute of <code>SNOW SPORT</code>", ar: "كلتاهما خطأ: ينبغي أن تكون <code>* Ski Length</code> خاصية اختيارية في <code>SNOW SPORT</code>" }
      ],
      answer: 1,
      hint: {
        en: "In draft A, where is a snowboarding run? Read A outwards-in.",
        ar: "في المسوّدة A، أين رياضة التزلّج على اللوح؟ اقرأ A من الخارج إلى الداخل."
      },
      explain: {
        en: "The slides: there can never be just one subtype; another subtype should be created to contain the rest. Read outwards-in, A says every snow sport is a ski sport, and snowboarding has no box. <code>OTHER</code> holds only what is not a ski sport, so nothing overlaps. Moving the length up as <code>o</code> would hide the rule that every ski sport has one.",
        ar: "تقول الشرائح: لا يكون هناك نوع فرعي واحد أبدًا، ويجب إنشاء نوع آخر يحتوي البقية. وإذا قُرئت A من الخارج إلى الداخل قالت إنّ كل رياضة ثلجية تزلّجٌ بالزلّاجات، ولا صندوق للتزلّج على اللوح. و<code>OTHER</code> لا يحمل إلا ما ليس تزلّجًا بالزلّاجات، فلا تداخل. ورفع الطول إلى الأعلى بعلامة <code>o</code> يُخفي قاعدة أنّ لكل رياضة تزلّج طولًا."
      }
    },

    /* ==================================================== lesson 4 · nesting, and knowing when to stop */
    {
      id: "t4ax15", type: "fill", level: "easy",
      topics: ["t4-subtype-level", "t4-intermediate-supertype", "t4-animal-hierarchy"],
      q: {
        en: "The lecturer's nested <code>ANIMAL</code>: <code>VERTEBRATE</code> and <code>INVERTEBRATE</code> inside <code>ANIMAL</code>; <code>BIRD</code>, <code>REPTILE</code>, <code>MAMMAL</code> and <code>OTHER</code> inside <code>VERTEBRATE</code>. Fill in the levels (as numbers) and name the box.",
        ar: "تسلسل <code>ANIMAL</code> المتداخل عند المحاضِرة: <code>VERTEBRATE</code> و<code>INVERTEBRATE</code> داخل <code>ANIMAL</code>؛ و<code>BIRD</code> و<code>REPTILE</code> و<code>MAMMAL</code> و<code>OTHER</code> داخل <code>VERTEBRATE</code>. املأ المستويات (أرقامًا) وسمِّ الصندوق."
      },
      lang: "text",
      code: "INVERTEBRATE is a level ____1____ subtype.\nMAMMAL is a level ____2____ subtype.\nThe intermediate supertype is ____3____.",
      blanks: [
        { accept: ["1", "one"], label: { en: "level of INVERTEBRATE", ar: "مستوى INVERTEBRATE" } },
        { accept: ["2", "two"], label: { en: "level of MAMMAL", ar: "مستوى MAMMAL" } },
        { accept: ["VERTEBRATE"], label: { en: "intermediate supertype", ar: "النوع الأعلى الوسيط" } }
      ],
      hint: {
        en: "Count the rings of nesting from the supertype. Which box has a box around it and boxes inside it?",
        ar: "عُدّ حلقات التداخل من النوع الأعلى. أيّ صندوق يحيط به صندوق وفي داخله صناديق؟"
      },
      explain: {
        en: "Boxes drawn directly in <code>ANIMAL</code> are level 1, so <code>INVERTEBRATE</code> is level 1 even though nothing is inside it. <code>MAMMAL</code> sits inside <code>VERTEBRATE</code>: level 2. <code>VERTEBRATE</code> is a kind of animal and the supertype of four boxes — an intermediate supertype.",
        ar: "الصناديق المرسومة مباشرة في <code>ANIMAL</code> في المستوى 1، فـ <code>INVERTEBRATE</code> في المستوى 1 وإن لم يكن في داخله شيء. و<code>MAMMAL</code> داخل <code>VERTEBRATE</code>: المستوى 2. و<code>VERTEBRATE</code> نوع من الحيوان ونوع أعلى لأربعة صناديق — نوع أعلى وسيط (intermediate supertype)."
      }
    },
    {
      id: "t4ax16", type: "compare", level: "medium",
      topics: ["t4-nested-subtypes", "t4-overlapping-subtypes", "t4-innermost-subtype"],
      q: {
        en: "Two ways to add birds to the zoo's model, as text. Which statement is right?",
        ar: "طريقتان لإضافة الطيور إلى نموذج الحديقة، نصًّا. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "ANIMAL  # Animal ID  * Name\n  VERTEBRATE\n  INVERTEBRATE\n  BIRD",
      codeB: "ANIMAL  # Animal ID  * Name\n  VERTEBRATE\n    BIRD\n    OTHER\n  INVERTEBRATE",
      options: [
        { en: "B breaks rule three: an eagle is in <code>VERTEBRATE</code> and in <code>BIRD</code>", ar: "B تكسر القاعدة الثالثة: النسر في <code>VERTEBRATE</code> وفي <code>BIRD</code>" },
        { en: "A is better: it keeps the model at one level, which is easier to read", ar: "A أفضل: تُبقي النموذج في مستوى واحد، وهو أسهل قراءة" },
        { en: "A breaks rule three, because every bird is a vertebrate; B nests <code>BIRD</code> inside <code>VERTEBRATE</code> and fixes it", ar: "A تكسر القاعدة الثالثة، لأنّ كل طائر فقاري؛ وB تجعل <code>BIRD</code> داخل <code>VERTEBRATE</code> فتُصلحها" },
        { en: "A breaks rule one: a bird is not a kind of animal", ar: "A تكسر القاعدة الأولى: الطائر ليس نوعًا من الحيوان" }
      ],
      answer: 2,
      hint: {
        en: "In each draft, how many side-by-side boxes can an eagle sit in?",
        ar: "في كل مسوّدة، في كم صندوقًا متجاورًا يمكن أن يقع النسر؟"
      },
      explain: {
        en: "In A, <code>BIRD</code> sits beside <code>VERTEBRATE</code>, so an eagle is in two sibling boxes — overlapping, rule three. In B, <code>BIRD</code> is a kind of a kind of animal: nested, which is legal, and the eagle sits in exactly one innermost box. Do not confuse nested (one box inside another) with overlapping (one instance in two boxes side by side).",
        ar: "في A يقع <code>BIRD</code> بجانب <code>VERTEBRATE</code>، فيقع النسر في صندوقين شقيقين — تداخل يكسر القاعدة الثالثة. وفي B يكون <code>BIRD</code> نوعًا من نوعٍ من الحيوان: تداخل هرمي (nested) مشروع، ويقع النسر في صندوق أعمق واحد بالضبط. لا تخلط بين التداخل الهرمي (صندوق داخل آخر) والتداخل المتزاحم (نسخة واحدة في صندوقين متجاورين)."
      }
    },
    {
      id: "t4ax17", type: "multi", level: "medium",
      topics: ["t4-inheritance-chain", "t4-rules-every-level", "t4-two-levels", "t4-innermost-subtype"],
      q: {
        en: "Which statements about nested subtypes are right? Choose every one.",
        ar: "أيّ العبارات عن الأنواع الفرعية المتداخلة صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "A nested subtype inherits every attribute and relationship of every box around it", ar: "يرث النوع الفرعي المتداخل كل خاصية وعلاقة لكل صندوق يحيط به" },
        { en: "The slides forbid more than two levels of subtypes", ar: "تمنع الشرائح أكثر من مستويين من الأنواع الفرعية" },
        { en: "The three rules are checked inside every box that has subtypes", ar: "تُفحص القواعد الثلاث داخل كل صندوق له أنواع فرعية" },
        { en: "<code>INVERTEBRATE</code> breaks a rule because it has no subtypes inside it", ar: "يكسر <code>INVERTEBRATE</code> قاعدةً لأنه لا أنواع فرعية في داخله" },
        { en: "Every instance belongs to exactly one innermost subtype", ar: "كل نسخة تنتمي إلى نوع فرعي أعمق واحد بالضبط" },
        { en: "A <code>DEBIT CARD</code> inherits <code>* Instalments</code> from its sibling <code>CREDIT CARD</code>", ar: "يرث <code>DEBIT CARD</code> الخاصية <code>* Instalments</code> من شقيقه <code>CREDIT CARD</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Inheritance follows the boxes around you, not beside you; and the slides' wording on levels is \"usually\".",
        ar: "الوراثة تتبع الصناديق المحيطة بك لا المجاورة لك؛ وعبارة الشرائح عن المستويات هي «عادةً»."
      },
      explain: {
        en: "A nested subtype inherits down the whole chain, and Lesson 3's questions are asked once per box with subtypes inside it, so each instance ends in exactly one innermost box. Two levels is what you would usually show, for readability; the slides say no rule stops you going beyond. A box with nothing inside is fine — only exactly one subtype is wrong — and nothing is inherited from a sibling.",
        ar: "يرث النوع الفرعي المتداخل على طول السلسلة كلها، وتُطرح أسئلة الدرس الثالث مرّة لكل صندوق في داخله أنواع فرعية، فتنتهي كل نسخة في صندوق أعمق واحد بالضبط. ومستويان هو ما تُظهره عادةً من أجل سهولة القراءة، وتقول الشرائح إنه لا قاعدة تمنع تجاوزهما. والصندوق الذي لا شيء في داخله سليم — الخطأ هو النوع الفرعي الوحيد فقط — ولا يُورَث شيء من شقيق."
      }
    },
    {
      id: "t4ax18", type: "mcq", level: "medium",
      topics: ["t4-wrong-tool", "t4-name-only-subtypes", "t4-box-alternatives"],
      q: {
        en: "The café owner wants to compare mornings and evenings, and a designer draws <code>ORDER</code> with <code>MORNING</code> (before noon) and <code>EVENING</code> (noon or later). Neither box has anything of its own, and <code>ORDER</code> already has <code>* Order Time</code>. What should the two boxes become?",
        ar: "يريد صاحب المقهى أن يقارن الصباح بالمساء، فيرسم مصمّم <code>ORDER</code> بنوعين <code>MORNING</code> (قبل الظهر) و<code>EVENING</code> (من الظهر فما بعد). ليس لأيّ الصندوقين شيء خاصّ به، و<code>ORDER</code> فيه أصلًا <code>* Order Time</code>. ماذا ينبغي أن يصير الصندوقان؟"
      },
      options: [
        { en: "Keep them: every order fits exactly one, so all three rules pass", ar: "يبقيان: كل طلب يقع في واحد بالضبط، فتنجح القواعد الثلاث" },
        { en: "A separate <code>TIME OF DAY</code> entity, joined to <code>ORDER</code> by a line", ar: "كيان منفصل <code>TIME OF DAY</code> يصله بـ <code>ORDER</code> خطّ" },
        { en: "Nothing: <code>* Order Time</code> already decides it, and a query can split the orders", ar: "لا شيء: <code>* Order Time</code> يحدّد ذلك أصلًا، والاستعلام يستطيع تقسيم الطلبات" },
        { en: "A third box, <code>OTHER</code>, so the set is exhaustive", ar: "صندوق ثالث <code>OTHER</code> لتكون المجموعة شاملة" }
      ],
      answer: 2,
      hint: {
        en: "The three rules check how subtypes are drawn. What do the slides say is the reason to draw them at all?",
        ar: "القواعد الثلاث تفحص كيف تُرسم الأنواع الفرعية. فما السبب الذي تذكره الشرائح لرسمها أصلًا؟"
      },
      explain: {
        en: "The split passes all three rules, and that is the trap: the rules check the drawing, not whether a box should exist. The slides subdivide only for special properties, and these are name-only subtypes whose membership <code>* Order Time</code> already decides. So no box and no new attribute; the owner's question is a query. <code>OTHER</code> is not needed — the two bands already cover every time.",
        ar: "ينجح التقسيم في القواعد الثلاث، وهنا الفخّ: القواعد تفحص الرسم لا وجوب وجود الصندوق. والشرائح لا تقسّم إلا لسمات خاصّة، وهذان نوعان اسميّان (name-only subtypes) تحدّد <code>* Order Time</code> عضويّتهما أصلًا. فلا صندوق ولا خاصية جديدة، وسؤال المالك استعلام. ولا حاجة إلى <code>OTHER</code> — فالنطاقان يغطّيان كل وقت."
      }
    },
    {
      id: "t4ax19", type: "tf", level: "medium",
      topics: ["t4-over-nesting", "t4-cross-cutting-attribute", "t4-card-nesting"],
      q: {
        en: "Drawing <code>VISA</code>, <code>MASTERCARD</code> and <code>OTHER</code> inside both <code>CREDIT CARD</code> and <code>DEBIT CARD</code> breaks one of the three rules, and that is why the brand becomes <code>* Card Brand</code> on <code>CARD</code>.",
        ar: "رسم <code>VISA</code> و<code>MASTERCARD</code> و<code>OTHER</code> داخل كلٍّ من <code>CREDIT CARD</code> و<code>DEBIT CARD</code> يكسر إحدى القواعد الثلاث، ولهذا تصير العلامة التجارية <code>* Card Brand</code> في <code>CARD</code>."
      },
      truth: false,
      hint: {
        en: "Run the three rules inside <code>CREDIT CARD</code>. Then ask what is wrong if they all pass.",
        ar: "طبّق القواعد الثلاث داخل <code>CREDIT CARD</code>. ثم اسأل ما الخطأ إن نجحت كلها."
      },
      explain: {
        en: "False. Inside each card box, every brand is a kind of card, <code>OTHER</code> covers the rest, and no card has two brands: every rule holds. The drawing is legal and hard to read — over-nesting. Six empty boxes, the same three names drawn twice, show that \"which brand?\" is a second question cutting across credit and debit, so it becomes one cross-cutting attribute.",
        ar: "خطأ. داخل كل صندوق بطاقة، كل علامة نوعٌ من البطاقة، و<code>OTHER</code> يشمل البقية، ولا بطاقة لها علامتان: كل القواعد صامدة. الرسم مشروع لكنه عسير القراءة — إفراط في التداخل (over-nesting). وستة صناديق فارغة، والأسماء الثلاثة نفسها مرسومة مرّتين، تبيّن أنّ «أيّ علامة؟» سؤال ثانٍ يعبر الائتمان والخصم، فيصير خاصية عابرة (cross-cutting attribute) واحدة."
      }
    },

    /* ==================================================== lesson 5 · judging a model */
    {
      id: "t4ax20", type: "mcq", level: "medium",
      topics: ["t4-verdict", "t4-witness-instance", "t4-minimal-repair"],
      q: {
        en: "A college adds <code>RESIT</code> (<code>* Original Date</code>) beside <code>QUIZ</code>, <code>MIDTERM</code> and <code>FINAL</code> inside <code>EXAM</code>. A student who failed the final sits it again in the summer. Which is the right, complete verdict?",
        ar: "تضيف كلّية <code>RESIT</code> (<code>* Original Date</code>) بجانب <code>QUIZ</code> و<code>MIDTERM</code> و<code>FINAL</code> داخل <code>EXAM</code>. وطالب رسب في الامتحان النهائي يعيده في الصيف. ما الحكم الصحيح الكامل؟"
      },
      options: [
        { en: "<code>EXAM</code>, check 4: the summer final is both a <code>FINAL</code> and a <code>RESIT</code>. Remove <code>RESIT</code>; add <code>o Original Date</code> to <code>EXAM</code>.", ar: "<code>EXAM</code>، الفحص 4: النهائي الصيفي <code>FINAL</code> و<code>RESIT</code> معًا. احذف <code>RESIT</code>، وأضف <code>o Original Date</code> إلى <code>EXAM</code>." },
        { en: "<code>EXAM</code>, check 4: the summer final is both a <code>FINAL</code> and a <code>RESIT</code>. Delete <code>RESIT</code>.", ar: "<code>EXAM</code>، الفحص 4: النهائي الصيفي <code>FINAL</code> و<code>RESIT</code> معًا. احذف <code>RESIT</code>." },
        { en: "<code>EXAM</code>, check 3: some exams fit no box. Add <code>OTHER</code>.", ar: "<code>EXAM</code>، الفحص 3: بعض الامتحانات لا صندوق لها. أضف <code>OTHER</code>." },
        { en: "<code>EXAM</code> looks wrong since <code>RESIT</code> was added; please review it.", ar: "يبدو <code>EXAM</code> خاطئًا منذ أُضيف <code>RESIT</code>؛ يُرجى مراجعته." }
      ],
      answer: 0,
      hint: {
        en: "A verdict has four parts: box, check, witness, repair. And a minimal repair loses no fact.",
        ar: "للحكم أربعة أجزاء: الصندوق، والفحص، والشاهد، والإصلاح. والإصلاح الأصغر لا يُضيّع أيّ حقيقة."
      },
      explain: {
        en: "The summer final is the witness: one exam in two boxes, check 4. \"Is it a resit?\" is a second question beside \"what kind of exam?\", so it becomes an optional attribute of the supertype — that keeps the original date. Deleting <code>RESIT</code> names the right check but drops the fact. <code>OTHER</code> answers check 3, which nothing here breaks, and a verdict with no witness settles nothing.",
        ar: "النهائي الصيفي هو الشاهد: امتحان واحد في صندوقين، الفحص 4. وسؤال «هل هو إعادة؟» سؤال ثانٍ بجانب «ما نوع الامتحان؟»، فيصير خاصية اختيارية في النوع الأعلى — وبهذا يُحفظ التاريخ الأصلي. وحذف <code>RESIT</code> يسمّي الفحص الصحيح لكنه يُسقط الحقيقة. و<code>OTHER</code> جواب الفحص 3 الذي لا يُكسر هنا، والحكم بلا شاهد لا يحسم شيئًا."
      }
    },
    {
      id: "t4ax21", type: "error", level: "medium",
      topics: ["t4-repeated-common-attribute", "t4-listed-once-check", "t4-false-alarm"],
      q: {
        en: "The ski resort's model, as text. Every sport has a difficulty; only skiing and snowboarding use rented equipment. Which lines break check 5, \"listed once\"? Choose every one.",
        ar: "نموذج منتجع التزلّج، نصًّا. لكل رياضة درجة صعوبة؛ والتزلّج بالزلّاجات والتزلّج على اللوح وحدهما يستعملان معدّات مستأجرة. أيّ الأسطر تكسر الفحص 5، «مذكورة مرّة واحدة»؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "SNOW SPORT  # Sport ID  * Name\n  SKI            * Ski Length    * Difficulty\n  SNOWBOARD      * Board Length  * Difficulty\n  CROSS COUNTRY  * Distance      * Difficulty\n  OTHER                          * Difficulty\nEach SKI must use one or more EQUIPMENT ITEMs.\nEach SNOWBOARD must use one or more EQUIPMENT ITEMs.",
      answer: [2, 3, 4, 5],
      hint: {
        en: "Check 5 is about what <em>every</em> subtype shares. Count which subtypes have each repeated item.",
        ar: "الفحص 5 يتعلّق بما يشترك فيه <em>كل</em> نوع فرعي. عُدّ أيّ الأنواع الفرعية تملك كل عنصر مكرّر."
      },
      explain: {
        en: "Lines 2–5: <code>* Difficulty</code> is in every subtype, so it is a common attribute and belongs once, in <code>SNOW SPORT</code>, to be inherited. Lines 6–7 are the false alarm: the equipment line is drawn twice, but cross-country and other sports do not use it, so lifting it to the supertype would give it to them all. Repeated is wrong only when it is shared by all.",
        ar: "الأسطر 2–5: <code>* Difficulty</code> في كل نوع فرعي، فهي خاصية مشتركة مكانها مرّة واحدة في <code>SNOW SPORT</code> لتُورَث. والسطران 6–7 إنذار كاذب (false alarm): خطّ المعدّات مرسوم مرّتين، لكنّ التزلّج الريفي والرياضات الأخرى لا تستعمله، ورفعه إلى النوع الأعلى يعطيه لها كلها. التكرار لا يكون خطأً إلا إذا كان مشتركًا بين الجميع."
      },
      solution: {
        code: "SNOW SPORT  # Sport ID  * Name  * Difficulty\n  SKI            * Ski Length\n  SNOWBOARD      * Board Length\n  CROSS COUNTRY  * Distance\n  OTHER\nEach SKI must use one or more EQUIPMENT ITEMs.\nEach SNOWBOARD must use one or more EQUIPMENT ITEMs.",
        en: "Lift <code>* Difficulty</code> into the supertype; leave the two equipment lines where they are.",
        ar: "ارفع <code>* Difficulty</code> إلى النوع الأعلى، واترك خطّي المعدّات مكانهما."
      }
    },
    {
      id: "t4ax22", type: "tf", level: "easy",
      topics: ["t4-review-order", "t4-other-subtype", "t4-model-review"],
      q: {
        en: "In a model review, the <code>OTHER</code> subtype of <code>WALL COVERING</code> fails check 6, \"earned\", because it lists no attribute or relationship of its own.",
        ar: "في مراجعة النموذج، يفشل النوع الفرعي <code>OTHER</code> في <code>WALL COVERING</code> في الفحص 6، «مستحَقّ»، لأنه لا يذكر خاصية ولا علاقة خاصّة به."
      },
      truth: false,
      hint: {
        en: "Check 6 asks about each <em>named</em> subtype. What is <code>OTHER</code>'s job?",
        ar: "الفحص 6 يسأل عن كل نوع فرعي <em>مسمّى</em>. ما وظيفة <code>OTHER</code>؟"
      },
      explain: {
        en: "False. <code>OTHER</code> is exempt from check 6: its job is not to have something of its own but to hold the rest, so that the set is exhaustive. It still inherits <code>* Description</code> and <code>* Price</code> like any subtype. Check 6 catches named boxes with nothing of their own, such as <code>SMALL</code> and <code>LARGE</code>.",
        ar: "خطأ. <code>OTHER</code> مُعفى من الفحص 6: وظيفته ليست أن يملك شيئًا خاصًّا به، بل أن يحمل البقية لتكون المجموعة شاملة. وهو يرث <code>* Description</code> و<code>* Price</code> مثل أيّ نوع فرعي. أمّا الفحص 6 فيلتقط الصناديق المسمّاة التي لا شيء لها، مثل <code>SMALL</code> و<code>LARGE</code>."
      }
    },
    {
      id: "t4ax23", type: "output", level: "medium",
      topics: ["t4-cross-cutting-attribute", "t4-foreign-key-chain", "t4-card-nesting"],
      q: {
        en: "Lesson 4's tables: <code>payments</code> holds payments 1–7 (40, 125, 310, 15, 220, 90, 60). <code>card_payments</code> holds the three card payments with a <code>card_brand</code> column: 3 is a VISA credit card, 5 a MASTERCARD credit card, 7 a VISA debit card. What does the query return?",
        ar: "جداول الدرس الرابع: يحمل <code>payments</code> الدفعات 1–7 (40، 125، 310، 15، 220، 90، 60). ويحمل <code>card_payments</code> دفعات البطاقة الثلاث مع عمود <code>card_brand</code>: الدفعة 3 بطاقة ائتمان VISA، و5 بطاقة ائتمان MASTERCARD، و7 بطاقة خصم VISA. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS payments, SUM(p.amount) AS takings\nFROM payments p\nJOIN card_payments c ON c.payment_id = p.payment_id\nWHERE c.card_brand = 'VISA';",
      blanks: [
        { accept: ["2"], label: { en: "payments", ar: "payments" } },
        { accept: ["370"], label: { en: "takings", ar: "takings" } }
      ],
      hint: {
        en: "The brand is one column on the card table, whatever the kind of card. Which payments are VISA?",
        ar: "العلامة التجارية عمود واحد في جدول البطاقات، أيًّا كان نوع البطاقة. أيّ الدفعات VISA؟"
      },
      explain: {
        en: "2 and 370: credit payment 3 (310) plus debit payment 7 (60). Because the brand is a cross-cutting attribute on <code>CARD</code>, one column answers for credit and debit together. With brand boxes nested under each card kind, the same question would have to read a VISA table under credit and another under debit.",
        ar: "2 و370: دفعة الائتمان 3 (310) ودفعة الخصم 7 (60). ولأنّ العلامة التجارية خاصية عابرة في <code>CARD</code>، يجيب عمود واحد عن الائتمان والخصم معًا. ولو كانت صناديق العلامات متداخلة تحت كل نوع بطاقة، لاحتاج السؤال نفسه إلى قراءة جدول VISA تحت الائتمان وآخر تحت الخصم."
      },
      solution: {
        out: "payments | takings\n2        | 370",
        en: "Run in alasql on Lesson 4's tables: one row, payments = 2, takings = 370.",
        ar: "نُفّذ في alasql على جداول الدرس الرابع: صفّ واحد، payments = 2 وtakings = 370."
      }
    },
    {
      id: "t4ax24", type: "order", level: "easy",
      topics: ["t4-verdict", "t4-witness-instance", "t4-diagram-accuracy"],
      q: {
        en: "A reviewer writes up lineup one's broken panel, where <code>REFUNDED</code> sits beside <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>. Put the four parts of the verdict in the order the lesson writes them.",
        ar: "يكتب مراجِع حكمه على اللوحة المعطوبة في التشكيلة الأولى، حيث يقع <code>REFUNDED</code> بجانب <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>. رتّب أجزاء الحكم الأربعة بالترتيب الذي يكتبها به الدرس."
      },
      items: [
        { en: "Box: <code>PAYMENT</code>", ar: "الصندوق: <code>PAYMENT</code>" },
        { en: "Check: 4, mutually exclusive", ar: "الفحص: 4، التنافي" },
        { en: "Witness: payment 5 is a <code>CREDIT CARD</code> and a <code>REFUNDED</code>", ar: "الشاهد: الدفعة 5 هي <code>CREDIT CARD</code> و<code>REFUNDED</code> معًا" },
        { en: "Repair: replace <code>REFUNDED</code> with <code>o Refund Date</code> on <code>PAYMENT</code>", ar: "الإصلاح: استبدل بـ <code>REFUNDED</code> الخاصية <code>o Refund Date</code> في <code>PAYMENT</code>" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Where is the problem, which rule, how do you prove it, and what do you change?",
        ar: "أين المشكلة، وأيّ قاعدة، وكيف تُثبتها، وماذا تغيّر؟"
      },
      explain: {
        en: "A verdict names the box, the check it fails, one instance that proves it, and the repair. Each part rests on the one before: a witness only proves something once you know which check it is against, and a repair is only minimal once the witness shows what must change. Without a witness, the designer can reply \"every payment fits\" and nobody can settle it.",
        ar: "الحكم يسمّي الصندوق، والفحص الذي يفشل فيه، ونسخة واحدة تُثبت ذلك، والإصلاح. وكل جزء يقوم على ما قبله: الشاهد لا يُثبت شيئًا حتى تعرف أيّ فحص يشهد عليه، والإصلاح لا يكون أصغر إصلاح حتى يبيّن الشاهد ما يجب أن يتغيّر. ومن دون شاهد يستطيع المصمّم أن يردّ «كل دفعة تقع في صندوق» ولا يحسم ذلك أحد."
      }
    }
  ]
};
