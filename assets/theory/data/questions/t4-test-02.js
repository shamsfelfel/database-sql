/* Question bank: T4 lesson 2 test -- Supertype and Subtype. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-test-02"] = {
  title: { en: "Test 2 — Supertype and Subtype", ar: "اختبار 2 — النوع الأعلى والنوع الفرعي" },
  intro: {
    en: "24 questions on lesson 2: what the supertype holds and why it is listed only there, how a subtype is drawn and what makes it special, inheritance of attributes and of relationships, the EXAM hierarchy and its three versions, the customer line that was drawn on the wrong box, and reading a hierarchy in both directions. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثاني: ما يحمله النوع الأعلى ولماذا يُذكر فيه وحده، وكيف يُرسم النوع الفرعي وما الذي يميّزه، ووراثة الخصائص ووراثة العلاقات، وتسلسل EXAM وإصداراته الثلاثة، وخطّ الزبون الذي رُسم على الصندوق الخطأ، وقراءة التسلسل في الاتجاهين. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · what every payment has */
    {
      id: "t4l2q01", type: "tf", level: "easy", topics: ["t4-supertype", "t4-common-listed-once"],
      q: {
        en: "Every cheque has a payment date, so a careful designer lists <code>* Payment Date</code> in <code>PAYMENT</code> and again inside <code>CHECK</code>, to be safe.",
        ar: "لكل شيك تاريخ دفع، لذلك يذكر المصمّم الحريص <code>* Payment Date</code> في <code>PAYMENT</code> ثم مرّة أخرى داخل <code>CHECK</code>، من باب الاحتياط."
      },
      truth: false,
      hint: {
        en: "The slides say where the common attributes are listed, and use one word to say how many places.",
        ar: "تقول الشرائح أين تُذكر الخصائص المشتركة، وتستعمل كلمة واحدة لتحدّد في كم موضع."
      },
      explain: {
        en: "False. Common attributes are listed <em>only</em> in the supertype, and every subtype inherits them. Drawing the date inside <code>CHECK</code> as well adds nothing a cheque did not already have; it brings back the repeated structure of Lesson 1's three separate entities. \"To be safe\" is the misconception: inheritance is what makes it safe.",
        ar: "خطأ. الخصائص المشتركة تُذكر في النوع الأعلى (supertype) <em>وحده</em>، وكل نوع فرعي يرثها. ورسم التاريخ داخل <code>CHECK</code> أيضًا لا يضيف للشيك شيئًا لم يكن يملكه؛ بل يعيد البنية المكرّرة التي رأيناها في الكيانات الثلاثة المنفصلة في الدرس الأول. و«من باب الاحتياط» هو سوء الفهم بعينه: الوراثة هي ما يجعل الأمر مضمونًا."
      }
    },
    {
      id: "t4l2q02", type: "output", level: "easy", topics: ["t4-supertype", "t4-common-listed-once"],
      q: {
        en: "The lesson's supertype-plus-subtype tables: <code>payments</code> holds the six payments with their dates and amounts; the kinds live in <code>cash_payments</code>, <code>check_payments</code> and <code>card_payments</code>. On 4 March there were cheque 6 (90) and card payment 5 (220). What does the query return?",
        ar: "جداول الدرس بصيغة «نوع أعلى مع أنواع فرعية»: يحمل <code>payments</code> الدفعات الست بتواريخها ومبالغها، والأنواع في <code>cash_payments</code> و<code>check_payments</code> و<code>card_payments</code>. في 4 مارس كان هناك الشيك 6 (90) ودفعة البطاقة 5 (220). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS payments, SUM(amount) AS taken\nFROM payments\nWHERE payment_date = '2026-03-04';",
      blanks: [
        { accept: ["2"], label: { en: "payments", ar: "payments" } },
        { accept: ["310"], label: { en: "taken", ar: "taken" } }
      ],
      hint: {
        en: "Which table holds the amount of every payment, whatever its kind?",
        ar: "أيّ جدول يحمل مبلغ كل دفعة، أيًّا كان نوعها؟"
      },
      explain: {
        en: "2 and 310. The amount is common, so it lives once, in the supertype's table, and a question about all payments reads that one table without asking what kind each payment is. Lesson 1's three separate tables needed one branch per kind for the same answer.",
        ar: "2 و310. المبلغ خاصية مشتركة، فيسكن مرّة واحدة في جدول النوع الأعلى، والسؤال عن كل المدفوعات يقرأ ذلك الجدول وحده دون أن يسأل عن نوع كل دفعة. أمّا الجداول الثلاثة المنفصلة في الدرس الأول فاحتاجت إلى فرع لكل نوع للإجابة نفسها."
      },
      solution: {
        out: "payments | taken\n2        | 310",
        en: "Run in alasql on the lesson's tables: one row, payments = 2, taken = 310.",
        ar: "نُفّذ في alasql على جداول الدرس: صفّ واحد، payments = 2 وtaken = 310."
      }
    },
    {
      id: "t4l2q03", type: "contrast", level: "easy", topics: ["t4-common-listed-once", "t4-specialized-attribute", "t4-supertype"],
      q: {
        en: "The shop's <code>PAYMENT</code> hierarchy. Where is each attribute drawn?",
        ar: "تسلسل <code>PAYMENT</code> في المتجر. أين تُرسم كل خاصية؟"
      },
      concepts: [
        { en: "In the supertype <code>PAYMENT</code>", ar: "في النوع الأعلى <code>PAYMENT</code>" },
        { en: "Inside one subtype", ar: "داخل نوع فرعي واحد" }
      ],
      rows: [
        { s: { en: "<code>* Amount</code>", ar: "<code>* Amount</code>" }, a: 0 },
        { s: { en: "<code>* Card Number</code>", ar: "<code>* Card Number</code>" }, a: 1 },
        { s: { en: "<code>* Receipt Number</code>, printed on every payment", ar: "<code>* Receipt Number</code>، يُطبع على كل دفعة" }, a: 0 },
        { s: { en: "<code>* Bank Name</code> of a cheque", ar: "<code>* Bank Name</code> للشيك" }, a: 1 },
        { s: { en: "<code># Payment ID</code>", ar: "<code># Payment ID</code>" }, a: 0 },
        { s: { en: "<code>* Expiry Date</code> of the card", ar: "<code>* Expiry Date</code> للبطاقة" }, a: 1 }
      ],
      hint: {
        en: "Ask of each attribute: does a cash payment have it too?",
        ar: "اسأل عن كل خاصية: هل للدفعة النقدية مثلها أيضًا؟"
      },
      explain: {
        en: "ID, amount and receipt number belong to every payment, so they are listed once in <code>PAYMENT</code>. Card number and expiry date belong to <code>CREDIT CARD</code>, bank name to <code>CHECK</code>: specialized attributes. The tempting slip is the receipt number — it is new, but \"every payment\" makes it common, so it goes up, not into three boxes.",
        ar: "الرقم والمبلغ ورقم الإيصال لكل دفعة، فتُذكر مرّة واحدة في <code>PAYMENT</code>. ورقم البطاقة وتاريخ انتهائها لـ <code>CREDIT CARD</code>، واسم البنك لـ <code>CHECK</code>: خصائص متخصّصة (specialized attributes). والزلّة المغرية هي رقم الإيصال — فهو جديد، لكن عبارة «كل دفعة» تجعله مشتركًا، فمكانه الأعلى لا ثلاثة صناديق."
      }
    },

    /* ---------------------------------------------------- 2 · what makes a subtype */
    {
      id: "t4l2q04", type: "mcq", level: "easy", topics: ["t4-drawing-subtypes", "t4-subtype", "t4-specialization"],
      q: {
        en: "How is <code>CHECK</code> drawn as a subtype of <code>PAYMENT</code>?",
        ar: "كيف يُرسم <code>CHECK</code> نوعًا فرعيًا من <code>PAYMENT</code>؟"
      },
      options: [
        { en: "As its own softbox beside <code>PAYMENT</code>, joined to it by a relationship line named \"is a\"", ar: "صندوقًا مستقلًا بجانب <code>PAYMENT</code>، موصولًا به بخطّ علاقة اسمه «is a»" },
        { en: "As a softbox enclosed inside <code>PAYMENT</code>'s softbox, its name in capitals, its own attributes below it", ar: "صندوقًا مرسومًا داخل صندوق <code>PAYMENT</code>، اسمه بأحرف كبيرة، وخصائصه الخاصّة تحته" },
        { en: "As a value of an attribute <code>* Method</code> listed in <code>PAYMENT</code>", ar: "قيمةً لخاصية <code>* Method</code> مذكورة في <code>PAYMENT</code>" },
        { en: "As a separate softbox that repeats <code>PAYMENT</code>'s ID, date and amount", ar: "صندوقًا منفصلًا يكرّر رقم <code>PAYMENT</code> وتاريخه ومبلغه" }
      ],
      answer: 1,
      hint: {
        en: "The slides: each subtype is a specialization of a supertype and therefore must be … within it.",
        ar: "تقول الشرائح: كل نوع فرعي تخصيصٌ لنوع أعلى، ولذلك يجب أن يكون … داخله."
      },
      explain: {
        en: "A subtype is enclosed within its supertype. The line is tempting, but a line is a relationship between two different entities, and a cheque is not related to a payment — it is one. A method value cannot hold the cheque's own attributes, and a separate box repeating the common part is Lesson 1's three-entity design.",
        ar: "النوع الفرعي يُرسم محاطًا بنوعه الأعلى. الخطّ مغرٍ، لكن الخطّ علاقة بين كيانين مختلفين، والشيك ليس مرتبطًا بدفعة — بل هو دفعة. وقيمة في <code>Method</code> لا تستطيع أن تحمل خصائص الشيك الخاصّة، والصندوق المنفصل الذي يكرّر الجزء المشترك هو تصميم الكيانات الثلاثة في الدرس الأول."
      }
    },
    {
      id: "t4l2q05", type: "match", level: "easy", topics: ["t4-supertype", "t4-subtype", "t4-specialized-attribute", "t4-inherited-attribute", "t4-subtype-relationship", "t4-inherited-relationship"],
      q: {
        en: "Match each term to an example of it from the lesson.",
        ar: "صِل كل مصطلح بمثال عليه من الدرس."
      },
      leftHead: { en: "Term", ar: "المصطلح" },
      rightHead: { en: "Example", ar: "المثال" },
      pairs: [
        { l: { en: "Supertype", ar: "نوع أعلى (supertype)" },
          r: { en: "<code>EXAM</code>, holding number, description, weight, date and written grade", ar: "<code>EXAM</code>، ويحمل الرقم والوصف والوزن والتاريخ والدرجة الكتابية" } },
        { l: { en: "Subtype", ar: "نوع فرعي (subtype)" },
          r: { en: "<code>CREDIT CARD</code>, enclosed inside <code>PAYMENT</code>", ar: "<code>CREDIT CARD</code>، محاطًا بـ <code>PAYMENT</code>" } },
        { l: { en: "Specialized attribute", ar: "خاصية متخصّصة (specialized attribute)" },
          r: { en: "<code>* Grade For Oral Presentation</code> in <code>MIDTERM</code>", ar: "<code>* Grade For Oral Presentation</code> في <code>MIDTERM</code>" } },
        { l: { en: "Inherited attribute", ar: "خاصية موروثة (inherited attribute)" },
          r: { en: "The amount of a cheque", ar: "مبلغ الشيك" } },
        { l: { en: "Subtype relationship", ar: "علاقة نوع فرعي (subtype relationship)" },
          r: { en: "<code>QUIZ</code> includes <code>BONUS QUESTION</code>", ar: "<code>QUIZ</code> يتضمّن <code>BONUS QUESTION</code>" } },
        { l: { en: "Inherited relationship", ar: "علاقة موروثة (inherited relationship)" },
          r: { en: "A <code>FINAL</code> is taken by students", ar: "الامتحان <code>FINAL</code> يأخذه الطلاب" } }
      ],
      hint: {
        en: "Ask of each example: is it drawn where it is used, or is it drawn on the outer box and handed inwards?",
        ar: "اسأل عن كل مثال: هل رُسم حيث يُستعمل، أم رُسم على الصندوق الخارجي وانتقل إلى الداخل؟"
      },
      explain: {
        en: "The amount is drawn in <code>PAYMENT</code>, and a cheque has it by inheritance. <code>take</code> is drawn to <code>EXAM</code>, and a final has it by inheritance. The oral grade and the bonus questions are drawn inside one subtype because only that kind has them. Inheritance covers attributes and relationships alike.",
        ar: "المبلغ مرسوم في <code>PAYMENT</code>، والشيك يملكه بالوراثة. والعلاقة <code>take</code> مرسومة إلى <code>EXAM</code>، والامتحان النهائي يملكها بالوراثة. أمّا الدرجة الشفوية والأسئلة الإضافية فمرسومتان داخل نوع فرعي واحد لأن ذلك النوع وحده يملكهما. والوراثة تشمل الخصائص والعلاقات على السواء."
      }
    },
    {
      id: "t4l2q06", type: "mcq", level: "medium", topics: ["t4-specialized-attribute", "t4-subtype"],
      q: {
        en: "The bank wants payment 3's card number, and a colleague says: \"Move <code>Card Number</code> up into <code>PAYMENT</code>, so it is easy to find.\" What would the model then say?",
        ar: "يطلب البنك رقم بطاقة الدفعة 3، فيقول زميل: «انقل <code>Card Number</code> إلى <code>PAYMENT</code> ليسهل إيجاده». ماذا سيقول النموذج عندئذ؟"
      },
      options: [
        { en: "Nothing new: only <code>CREDIT CARD</code> would use the attribute, so the others ignore it", ar: "لا جديد: <code>CREDIT CARD</code> وحده سيستعمل الخاصية، والبقية تتجاهلها" },
        { en: "That every cash payment and every cheque has a card number too — or, marked <code>o</code>, that a card payment may have none: Lesson 1's single entity again", ar: "أن لكل دفعة نقدية ولكل شيك رقم بطاقة أيضًا — أو، إن عُلّمت بـ <code>o</code>، أن دفعة البطاقة قد تكون بلا رقم: الكيان الواحد في الدرس الأول من جديد" },
        { en: "That <code>CREDIT CARD</code> is no longer a subtype, because a subtype must have at least one attribute", ar: "أن <code>CREDIT CARD</code> لم يعد نوعًا فرعيًا، لأن النوع الفرعي يجب أن يملك خاصية واحدة على الأقلّ" },
        { en: "That the card number is now inherited sideways, from <code>CREDIT CARD</code> to <code>CHECK</code>", ar: "أن رقم البطاقة صار يُورَث جانبيًا، من <code>CREDIT CARD</code> إلى <code>CHECK</code>" }
      ],
      answer: 1,
      hint: {
        en: "Whatever is drawn in the outer box, which subtypes receive it?",
        ar: "كل ما يُرسم في الصندوق الخارجي، أيّ الأنواع الفرعية تتلقّاه؟"
      },
      explain: {
        en: "An attribute in the supertype is inherited by every subtype, so cash and cheques would get a card number. Marked <code>*</code> that is false; marked <code>o</code> it hides the rule that every card payment has one. Nothing is \"ignored\" by a subtype, and inheritance never runs sideways. The card number stays inside <code>CREDIT CARD</code>: it is what makes that subtype special.",
        ar: "الخاصية في النوع الأعلى يرثها كل نوع فرعي، فيصير للدفعة النقدية وللشيك رقم بطاقة. فإن عُلّمت بـ <code>*</code> كان ذلك كاذبًا، وإن عُلّمت بـ <code>o</code> أخفت قاعدة أن لكل دفعة بطاقة رقمًا. ولا «يتجاهل» النوع الفرعي شيئًا، ولا تجري الوراثة جانبيًا أبدًا. يبقى رقم البطاقة داخل <code>CREDIT CARD</code>: فهو ما يجعل هذا النوع الفرعي مميّزًا."
      }
    },
    {
      id: "t4l2q07", type: "output", level: "easy", topics: ["t4-specialized-attribute", "t4-subtype"],
      q: {
        en: "In the supertype-plus-subtype build, <code>card_payments</code> holds payments 3 and 5, and <code>card_number</code> is <code>NOT NULL</code>. The two cash payments and two cheques are in their own tables. What does the query return?",
        ar: "في البناء بصيغة «نوع أعلى مع أنواع فرعية»، يحمل <code>card_payments</code> الدفعتين 3 و5، و<code>card_number</code> من نوع <code>NOT NULL</code>. والدفعتان النقديتان والشيكان في جداولها الخاصّة. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS empty_cards\nFROM card_payments\nWHERE card_number IS NULL;",
      blanks: [{ accept: ["0"], label: { en: "empty_cards", ar: "empty_cards" } }],
      hint: {
        en: "Which rows ever enter this table?",
        ar: "أيّ الصفوف تدخل هذا الجدول أصلًا؟"
      },
      explain: {
        en: "0. Only card payments enter <code>card_payments</code>, and each has its number, so the column can be <code>NOT NULL</code>. In Lesson 1's single table the same question returned 4, because cash and cheque rows had to carry an empty card number. A specialized attribute lives where every row has it.",
        ar: "0. لا يدخل <code>card_payments</code> إلا دفعات البطاقة، ولكلٍّ منها رقمها، فيمكن أن يكون العمود <code>NOT NULL</code>. أمّا في الجدول الواحد في الدرس الأول فأعاد السؤال نفسه 4، لأن صفوف النقد والشيكات اضطُرّت إلى حمل رقم بطاقة فارغ. الخاصية المتخصّصة تسكن حيث يملكها كل صفّ."
      },
      solution: {
        out: "empty_cards\n0",
        en: "Run in alasql on the lesson's tables: one row, empty_cards = 0.",
        ar: "نُفّذ في alasql على جداول الدرس: صفّ واحد، empty_cards = 0."
      }
    },

    /* ---------------------------------------------------- 3 · inheritance */
    {
      id: "t4l2q08", type: "multi", level: "medium", topics: ["t4-inheritance", "t4-inherited-attribute", "t4-subtype-in-full"],
      q: {
        en: "Lesson 1's recommended model: <code>PAYMENT</code> with <code># Payment ID</code>, <code>* Payment Date</code>, <code>* Amount</code>; <code>CREDIT CARD</code> with <code>* Card Number</code>; a customer line from <code>CHECK</code> and one from <code>CREDIT CARD</code>. Which of these does a <code>CHECK</code> have? Choose every one.",
        ar: "النموذج الموصى به في الدرس الأول: <code>PAYMENT</code> فيه <code># Payment ID</code> و<code>* Payment Date</code> و<code>* Amount</code>؛ و<code>CREDIT CARD</code> فيه <code>* Card Number</code>؛ وخطّ زبون من <code>CHECK</code> وآخر من <code>CREDIT CARD</code>. أيّ هذه يملكها <code>CHECK</code>؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code># Payment ID</code>", ar: "<code># Payment ID</code>" },
        { en: "<code>* Amount</code>", ar: "<code>* Amount</code>" },
        { en: "<code>* Card Number</code>", ar: "<code>* Card Number</code>" },
        { en: "Must be made by one and only one <code>CUSTOMER</code>", ar: "يجب أن يقوم به زبون <code>CUSTOMER</code> واحد فقط" },
        { en: "<code>* Payment Date</code>", ar: "<code>* Payment Date</code>" },
        { en: "Nothing: its box lists no attributes", ar: "لا شيء: صندوقه لا يذكر أيّ خاصية" }
      ],
      answer: [0, 1, 3, 4],
      hint: {
        en: "Walk outwards: the subtype's own box, then every box around it. Never sideways.",
        ar: "سِر إلى الخارج: صندوق النوع الفرعي نفسه، ثم كل صندوق يحيط به. ولا تَسِر جانبيًا أبدًا."
      },
      explain: {
        en: "ID, date and amount are inherited from <code>PAYMENT</code>; the customer line is <code>CHECK</code>'s own relationship. The card number belongs to its sibling <code>CREDIT CARD</code>, and inheritance runs from the outer box inwards, never sideways. An empty-looking box is the classic trap: a subtype is read with everything around it.",
        ar: "الرقم والتاريخ والمبلغ موروثة من <code>PAYMENT</code>؛ وخطّ الزبون علاقة خاصّة بـ <code>CHECK</code>. أمّا رقم البطاقة فلأخيه <code>CREDIT CARD</code>، والوراثة تجري من الصندوق الخارجي إلى الداخل، لا جانبيًا أبدًا. والصندوق الذي يبدو فارغًا هو الفخّ المعروف: النوع الفرعي يُقرأ مع كل ما يحيط به."
      }
    },
    {
      id: "t4l2q09", type: "fill", level: "medium", topics: ["t4-inherited-attribute", "t4-inheritance"],
      q: {
        en: "<code>PAYMENT</code> lists <code>* Amount</code> and an optional remark <code>o Note</code>. Write a <code>CREDIT CARD</code> out in full, with each attribute's mark.",
        ar: "يذكر <code>PAYMENT</code> الخاصية <code>* Amount</code> وملاحظةً اختيارية <code>o Note</code>. اكتب <code>CREDIT CARD</code> كاملًا، مع علامة كل خاصية."
      },
      lang: "text",
      code: "PAYMENT      # Payment ID  * Payment Date  * Amount  o Note\n  CREDIT CARD  * Card Number\n\nCREDIT CARD, in full:\n  # Payment ID\n  * Payment Date\n  ____1____ Amount\n  ____2____ Note\n  ____3____ Card Number",
      blanks: [
        { accept: ["*"], label: { en: "1", ar: "1" }, ph: "* / o" },
        { accept: ["o", "O"], label: { en: "2", ar: "2" }, ph: "* / o" },
        { accept: ["*"], label: { en: "3", ar: "3" }, ph: "* / o" }
      ],
      solution: { en: "1 = *, 2 = o, 3 = *.", ar: "1 = *، 2 = o، 3 = *." },
      hint: {
        en: "Does an attribute change its rule on its way into a subtype?",
        ar: "هل تتغيّر قاعدة الخاصية في طريقها إلى النوع الفرعي؟"
      },
      explain: {
        en: "An inherited attribute keeps its mark: the amount is mandatory for every payment, so for every card payment; the note is optional for every payment, so for card payments too. The card number is the subtype's own, and mandatory because every card payment has one. Being drawn in a subtype does not make an attribute stricter or looser.",
        ar: "الخاصية الموروثة تحتفظ بعلامتها: المبلغ إلزامي لكل دفعة، فهو إلزامي لكل دفعة بطاقة؛ والملاحظة اختيارية لكل دفعة، فهي اختيارية لدفعات البطاقة أيضًا. أمّا رقم البطاقة فخاصية النوع الفرعي نفسه، وإلزامي لأن لكل دفعة بطاقة رقمًا. والانتقال إلى النوع الفرعي لا يجعل الخاصية أشدّ ولا أخفّ."
      }
    },
    {
      id: "t4l2q10", type: "output", level: "medium", topics: ["t4-inheritance", "t4-subtype-in-full", "t4-inherited-attribute"],
      q: {
        en: "<code>card_payments</code> has no <code>amount</code> column. The two card payments are 3 (310) and 5 (220). What does the query return?",
        ar: "ليس في <code>card_payments</code> عمود <code>amount</code>. ودفعتا البطاقة هما 3 (310) و5 (220). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT SUM(p.amount) AS card_total\nFROM payments p\nJOIN card_payments c ON c.payment_id = p.payment_id;",
      blanks: [{ accept: ["530"], label: { en: "card_total", ar: "card_total" } }],
      hint: {
        en: "Inheritance in tables is a join on the shared key. Which rows of payments does the join keep?",
        ar: "الوراثة في الجداول ربطٌ (join) على المفتاح المشترك. أيّ صفوف payments يُبقيها الربط؟"
      },
      explain: {
        en: "530. Each card row is completed by the <code>payments</code> row with the same <code>payment_id</code>, which gives it back its inherited amount. The join keeps only payments 3 and 5. A card payment has an amount even though its own table does not list one — exactly as the diagram's <code>CREDIT CARD</code> box does not.",
        ar: "530. كل صفّ بطاقة يكتمل بصفّ <code>payments</code> الذي له <code>payment_id</code> نفسه، فيعيد إليه مبلغه الموروث. ولا يُبقي الربط إلا الدفعتين 3 و5. لدفعة البطاقة مبلغ مع أن جدولها لا يذكره — تمامًا كما لا يذكره صندوق <code>CREDIT CARD</code> في الرسم."
      },
      solution: {
        out: "card_total\n530",
        en: "Run in alasql on the lesson's tables: one row, card_total = 530.",
        ar: "نُفّذ في alasql على جداول الدرس: صفّ واحد، card_total = 530."
      }
    },
    {
      id: "t4l2q11", type: "tf", level: "easy", topics: ["t4-inheritance", "t4-subtype-in-full"],
      q: {
        en: "<code>CHECK</code> and <code>CREDIT CARD</code> are drawn side by side inside <code>PAYMENT</code>, so a cheque inherits <code>* Card Number</code> from <code>CREDIT CARD</code>.",
        ar: "<code>CHECK</code> و<code>CREDIT CARD</code> مرسومان جنبًا إلى جنب داخل <code>PAYMENT</code>، فيرث الشيك <code>* Card Number</code> من <code>CREDIT CARD</code>."
      },
      truth: false,
      hint: {
        en: "Inheritance runs in one direction only. Which?",
        ar: "الوراثة تجري في اتجاه واحد فقط. أيّ اتجاه؟"
      },
      explain: {
        en: "False. A subtype inherits from the box that encloses it, never from a sibling beside it. <code>CHECK</code> gets everything in <code>PAYMENT</code> and nothing from <code>CREDIT CARD</code>. If cheques had a card number, cash and cheques would not be different kinds at all.",
        ar: "خطأ. النوع الفرعي يرث من الصندوق الذي يحيط به، لا من أخٍ بجانبه أبدًا. يأخذ <code>CHECK</code> كل ما في <code>PAYMENT</code> ولا شيء من <code>CREDIT CARD</code>. ولو كان للشيكات رقم بطاقة، لما كانت الشيكات والبطاقات نوعين مختلفين أصلًا."
      }
    },

    /* ---------------------------------------------------- 4 · the EXAM hierarchy (evolve e1) */
    {
      id: "t4l2q12", type: "ordercode", level: "medium", topics: ["t4-exam-hierarchy", "t4-common-listed-once", "t4-supertype-relationship"],
      q: {
        en: "Three drafts of the <code>EXAM</code> model, as text. Put them in order, from the first draft to the recommended model, each one fixing a defect of the one before.",
        ar: "ثلاث مسوّدات لنموذج <code>EXAM</code>، نصًّا. رتّبها من المسوّدة الأولى إلى النموذج الموصى به، بحيث تُصلح كلٌّ منها عيبًا في التي قبلها."
      },
      lang: "text",
      items: [
        { code: "EXAM\n  QUIZ     # Number * Description * Weight * Date * Grade For Written Component\n  MIDTERM  # Number * Description * Weight * Date * Grade For Written Component * Grade For Oral Presentation\n  FINAL    # Number * Description * Weight * Date * Grade For Written Component * Extra Points For Optional Paper\nQUIZ, MIDTERM, FINAL -- each taken by -- STUDENT  (three lines)" },
        { code: "EXAM     # Number * Description * Weight * Date * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nQUIZ, MIDTERM, FINAL -- each taken by -- STUDENT  (three lines)" },
        { code: "EXAM     # Number * Description * Weight * Date * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nEXAM -- taken by -- STUDENT  (one line)" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "First the common attributes move up, then the common relationship.",
        ar: "أولًا ترتفع الخصائص المشتركة، ثم العلاقة المشتركة."
      },
      explain: {
        en: "The first draft nests the boxes but lists the five common attributes three times and leaves <code>EXAM</code> empty, so nothing is inherited. The second lifts the attributes into <code>EXAM</code> but still draws <code>take</code> three times. The third lifts the relationship too: every kind of exam is taken by students, so one line on <code>EXAM</code> says it for all three.",
        ar: "المسوّدة الأولى تُدخل الصناديق بعضها في بعض لكنها تذكر الخصائص المشتركة الخمس ثلاث مرّات وتترك <code>EXAM</code> فارغًا، فلا يُورَث شيء. والثانية ترفع الخصائص إلى <code>EXAM</code> لكنها ما زالت ترسم <code>take</code> ثلاث مرّات. والثالثة ترفع العلاقة أيضًا: كل نوع من الامتحانات يأخذه الطلاب، فخطّ واحد على <code>EXAM</code> يقول ذلك عن الثلاثة."
      }
    },
    {
      id: "t4l2q13", type: "compare", level: "medium", topics: ["t4-exam-hierarchy", "t4-common-listed-once", "t4-supertype"],
      q: {
        en: "Versions 1 and 2 of the <code>EXAM</code> evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر <code>EXAM</code>، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "EXAM\n  QUIZ     # Number * Description * Weight * Date * Grade For Written Component\n  MIDTERM  # Number * Description * Weight * Date * Grade For Written Component\n           * Grade For Oral Presentation\n  FINAL    # Number * Description * Weight * Date * Grade For Written Component\n           * Extra Points For Optional Paper\nQUIZ, MIDTERM and FINAL are each taken by STUDENT",
      codeB: "EXAM     # Number * Description * Weight * Date * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nQUIZ, MIDTERM and FINAL are each taken by STUDENT",
      options: [
        { en: "A is better: every subtype shows all its attributes, so nobody has to look outside its box", ar: "A أفضل: كل نوع فرعي يُظهر كل خصائصه، فلا يحتاج أحد إلى النظر خارج صندوقه" },
        { en: "B is better and finished: every defect of A is gone", ar: "B أفضل ومكتمل: زال كل عيب في A" },
        { en: "B is better: the common attributes are listed once, in <code>EXAM</code>, and inherited by all three; but <code>take</code> is still drawn three times", ar: "B أفضل: الخصائص المشتركة مذكورة مرّة واحدة في <code>EXAM</code> وترثها الأنواع الثلاثة؛ لكن <code>take</code> ما زالت مرسومة ثلاث مرّات" },
        { en: "B loses data: a quiz now has no attributes at all", ar: "B يُضيّع بيانات: لم تعد للاختبار القصير أيّ خاصية" }
      ],
      answer: 2,
      hint: {
        en: "Name A's defect, check whether B closes it, then look at the last line of each.",
        ar: "سمِّ عيب A، وتحقّق هل يُغلقه B، ثم انظر إلى السطر الأخير في كلٍّ منهما."
      },
      explain: {
        en: "A's defect is repeated structure inside the hierarchy: the boxes are nested, but nothing is inherited because nothing was put in <code>EXAM</code>. B lists the common part once and every subtype inherits it — a quiz still has all five attributes. But B leaves the common relationship drawn three times, which version 3 fixes. \"No need to look outside the box\" is the habit inheritance replaces.",
        ar: "عيب A بنية مكرّرة داخل التسلسل: الصناديق متداخلة، لكن لا شيء يُورَث لأن لا شيء وُضع في <code>EXAM</code>. أمّا B فيذكر الجزء المشترك مرّة واحدة ويرثه كل نوع فرعي — فما زالت للاختبار القصير خصائصه الخمس. لكن B يترك العلاقة المشتركة مرسومة ثلاث مرّات، وهذا ما يُصلحه الإصدار 3. و«لا حاجة إلى النظر خارج الصندوق» هي العادة التي تحلّ الوراثة محلّها."
      }
    },
    {
      id: "t4l2q14", type: "compare", level: "hard", topics: ["t4-exam-hierarchy", "t4-supertype-relationship", "t4-inherited-relationship"],
      q: {
        en: "Versions 2 and 3 of the <code>EXAM</code> evolve block, as text. Which statement is right?",
        ar: "الإصداران 2 و3 من كتلة تطوّر <code>EXAM</code>، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "EXAM     # Number * Description * Weight * Date * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nQUIZ    -- taken by / take -- STUDENT\nMIDTERM -- taken by / take -- STUDENT\nFINAL   -- taken by / take -- STUDENT\nQUIZ    -- includes / included in -- BONUS QUESTION",
      codeB: "EXAM     # Number * Description * Weight * Date * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nEXAM    -- taken by / take -- STUDENT\nQUIZ    -- includes / included in -- BONUS QUESTION",
      options: [
        { en: "A is better: it says explicitly that each kind is taken, which B leaves out", ar: "A أفضل: يقول صراحةً إن كل نوع يُؤخذ، وهذا ما يُغفله B" },
        { en: "B is better: the same business rule, said once on <code>EXAM</code> and inherited by every subtype; in tables it is one key pointing at <code>exams</code> instead of three", ar: "B أفضل: قاعدة العمل نفسها، مقولة مرّة واحدة على <code>EXAM</code> وموروثة في كل نوع فرعي؛ وفي الجداول هي مفتاح واحد يشير إلى <code>exams</code> بدل ثلاثة" },
        { en: "B is better, and it should also move the <code>BONUS QUESTION</code> line to <code>EXAM</code> for consistency", ar: "B أفضل، وينبغي أن ينقل خطّ <code>BONUS QUESTION</code> أيضًا إلى <code>EXAM</code> للاتّساق" },
        { en: "They say different things: in B only <code>EXAM</code> itself is taken by students, not its subtypes", ar: "يقولان شيئين مختلفين: في B يأخذ الطلاب <code>EXAM</code> نفسه فقط، لا أنواعه الفرعية" }
      ],
      answer: 1,
      hint: {
        en: "Subtypes inherit all attributes and all … of the supertype. Then ask which lines are true of every kind.",
        ar: "الأنواع الفرعية ترث كل الخصائص وكل … النوع الأعلى. ثم اسأل أيّ الخطوط صحيحة لكل نوع."
      },
      explain: {
        en: "A relationship true of every kind is a common relationship, and like a common attribute it belongs to the supertype: subtypes inherit all relationships. So B says what A says, once. Reading B as \"only <code>EXAM</code> is taken\" is the mistake inheritance forbids. The bonus line must stay on <code>QUIZ</code>: only quizzes include bonus questions, and lifting it would give them to midterms and finals.",
        ar: "العلاقة الصحيحة لكل نوع علاقة مشتركة، ومكانها كالخاصية المشتركة النوعُ الأعلى: فالأنواع الفرعية ترث كل العلاقات. فيقول B ما يقوله A، مرّة واحدة. وقراءة B على أنه «<code>EXAM</code> وحده يُؤخذ» هي الخطأ الذي تمنعه الوراثة. أمّا خطّ الأسئلة الإضافية فيجب أن يبقى على <code>QUIZ</code>: الاختبارات القصيرة وحدها تتضمّن أسئلة إضافية، ورفعه يمنحها للامتحانات النصفية والنهائية."
      }
    },
    {
      id: "t4l2q15", type: "mcq", level: "medium", topics: ["t4-subtype-relationship", "t4-relationship-placement", "t4-exam-hierarchy"],
      q: {
        en: "A designer tidying version 3 of <code>EXAM</code> moves the <code>BONUS QUESTION</code> line from <code>QUIZ</code> to <code>EXAM</code>, \"like <code>take</code>\". What does the model now say that the course never did?",
        ar: "يرتّب مصمّمٌ الإصدار 3 من <code>EXAM</code> فينقل خطّ <code>BONUS QUESTION</code> من <code>QUIZ</code> إلى <code>EXAM</code>، «كما فُعل بـ <code>take</code>». ماذا يقول النموذج الآن ممّا لم يقله المقرّر قطّ؟"
      },
      options: [
        { en: "That a quiz no longer includes bonus questions", ar: "أن الاختبار القصير لم يعد يتضمّن أسئلة إضافية" },
        { en: "That students no longer take quizzes", ar: "أن الطلاب لم يعودوا يأخذون الاختبارات القصيرة" },
        { en: "That a midterm and a final can include bonus questions too", ar: "أن الامتحان النصفي والنهائي يمكن أن يتضمّنا أسئلة إضافية أيضًا" },
        { en: "Nothing: a line on the supertype holds only for the subtypes that need it", ar: "لا شيء: الخطّ على النوع الأعلى لا ينطبق إلا على الأنواع الفرعية التي تحتاج إليه" }
      ],
      answer: 2,
      hint: {
        en: "<code>take</code> moved up because it was true of every kind. Is this one?",
        ar: "ارتفعت <code>take</code> لأنها صحيحة لكل نوع. هل هذه كذلك؟"
      },
      explain: {
        en: "A line drawn to <code>EXAM</code> is inherited by every subtype, so <code>MIDTERM</code> and <code>FINAL</code> now include bonus questions as well. Quizzes still do — they inherit it too — so nothing was lost; something false was added. \"Holds only where needed\" is the misconception: inheritance hands a supertype relationship to everyone. Lift only what is common.",
        ar: "الخطّ المرسوم إلى <code>EXAM</code> يرثه كل نوع فرعي، فصار <code>MIDTERM</code> و<code>FINAL</code> يتضمّنان أسئلة إضافية أيضًا. وما زالت الاختبارات القصيرة تتضمّنها — فهي ترثها كذلك — فلم يضِع شيء، بل أُضيف شيء كاذب. و«ينطبق حيث يُحتاج إليه فقط» هو سوء الفهم: الوراثة تمنح علاقة النوع الأعلى للجميع. لا ترفع إلا المشترك."
      }
    },
    {
      id: "t4l2q16", type: "error", level: "hard", topics: ["t4-exam-hierarchy", "t4-specialized-attribute", "t4-inherited-attribute"],
      q: {
        en: "A student's <code>EXAM</code> model, as text. The course: every exam has a number, a description, a weight, a date and a written grade; only a midterm has an oral-presentation grade; only a final has extra points for an optional paper; students take exams; quizzes include bonus questions. Which line is wrong?",
        ar: "نموذج <code>EXAM</code> لطالب، نصًّا. المقرّر: لكل امتحان رقم ووصف ووزن وتاريخ ودرجة كتابية؛ والامتحان النصفي وحده له درجة عرض شفوي؛ والنهائي وحده له نقاط إضافية لورقة اختيارية؛ والطلاب يأخذون الامتحانات؛ والاختبارات القصيرة تتضمّن أسئلة إضافية. أيّ سطر خطأ؟"
      },
      lang: "text",
      code: "EXAM     # Number  * Description  * Weight  * Date\n         * Grade For Written Component\n         * Grade For Oral Presentation\n  QUIZ\n  MIDTERM\n  FINAL  * Extra Points For Optional Paper\nEXAM -- taken by / take -- STUDENT\nQUIZ -- includes / included in -- BONUS QUESTION",
      answer: 3,
      hint: {
        en: "For each line in <code>EXAM</code>'s box, ask whether a quiz has it.",
        ar: "اسأل عن كل سطر في صندوق <code>EXAM</code>: هل للاختبار القصير مثله؟"
      },
      explain: {
        en: "Line 3. Listed in <code>EXAM</code> and marked <code>*</code>, the oral grade is inherited by every quiz and every final: the model says each of them must have one. It is <code>MIDTERM</code>'s specialized attribute and belongs inside its box. Line 7 is tempting because it is drawn to the supertype, but every exam is taken by students, so it is right there. Lines 5 and 4 look empty and are fine.",
        ar: "السطر 3. حين تُذكر الدرجة الشفوية في <code>EXAM</code> بعلامة <code>*</code>، يرثها كل اختبار قصير وكل امتحان نهائي: فيقول النموذج إن لكلٍّ منها درجة شفوية إلزامًا. إنها خاصية متخصّصة لـ <code>MIDTERM</code> ومكانها داخل صندوقه. والسطر 7 مغرٍ لأنه مرسوم إلى النوع الأعلى، لكن الطلاب يأخذون كل امتحان، فمكانه صحيح. والسطران 4 و5 يبدوان فارغين وهما سليمان."
      },
      solution: {
        code: "EXAM     # Number  * Description  * Weight  * Date\n         * Grade For Written Component\n  QUIZ\n  MIDTERM  * Grade For Oral Presentation\n  FINAL    * Extra Points For Optional Paper\nEXAM -- taken by / take -- STUDENT\nQUIZ -- includes / included in -- BONUS QUESTION",
        en: "The lecturer's model: the oral grade moves inside MIDTERM.",
        ar: "نموذج المحاضِرة: تنتقل الدرجة الشفوية إلى داخل MIDTERM."
      }
    },
    {
      id: "t4l2q17", type: "complete", level: "medium", topics: ["t4-subtype-relationship", "t4-exam-hierarchy"],
      q: {
        en: "The lesson builds <code>exams</code> for the supertype and <code>quizzes</code> for one subtype, keyed on <code>exam_id</code>. In the diagram, <code>BONUS QUESTION</code>'s line ends on <code>QUIZ</code>. What completes the foreign key?",
        ar: "يبني الدرس <code>exams</code> للنوع الأعلى و<code>quizzes</code> لأحد الأنواع الفرعية، ومفتاحهما <code>exam_id</code>. وفي الرسم ينتهي خطّ <code>BONUS QUESTION</code> عند <code>QUIZ</code>. ما الذي يُكمل المفتاح الأجنبي؟"
      },
      lang: "sql",
      code: "CREATE TABLE bonus_questions (\n  bq_number     NUMBER PRIMARY KEY,\n  question_text VARCHAR(200) NOT NULL,\n  quiz_id       NUMBER NOT NULL REFERENCES ____\n);",
      options: [
        { code: "exams(exam_id)" },
        { code: "quizzes(exam_id)" },
        { code: "students(student_id)" },
        { code: "bonus_questions(bq_number)" }
      ],
      answer: 1,
      hint: {
        en: "Where a line ends decides where its foreign key points.",
        ar: "حيث ينتهي الخطّ يتحدّد إلى أين يشير مفتاحه الأجنبي."
      },
      explain: {
        en: "<code>quizzes(exam_id)</code>. The line ends on <code>QUIZ</code>, a subtype relationship, so the key points at the quizzes' table, and a bonus question cannot be attached to a final. Pointing at <code>exams</code> is tempting — every quiz is an exam — but it would let any exam have bonus questions, the very rule the diagram keeps on <code>QUIZ</code>.",
        ar: "<code>quizzes(exam_id)</code>. ينتهي الخطّ عند <code>QUIZ</code>، فهو علاقة نوع فرعي، فيشير المفتاح إلى جدول الاختبارات القصيرة، ولا يمكن ربط سؤال إضافي بامتحان نهائي. والإشارة إلى <code>exams</code> مغرية — فكل اختبار قصير امتحان — لكنها تسمح لأيّ امتحان بأن يملك أسئلة إضافية، وهي القاعدة نفسها التي يُبقيها الرسم على <code>QUIZ</code>."
      },
      solution: {
        code: "CREATE TABLE bonus_questions (\n  bq_number     NUMBER PRIMARY KEY,\n  question_text VARCHAR(200) NOT NULL,\n  quiz_id       NUMBER NOT NULL REFERENCES quizzes(exam_id)\n);",
        en: "As in the lesson's section 4.",
        ar: "كما في القسم 4 من الدرس."
      }
    },

    /* ---------------------------------------------------- 5 · the customer line on the wrong box (evolve e2) */
    {
      id: "t4l2q18", type: "trace", level: "hard", topics: ["t4-inherited-relationship", "t4-relationship-placement"],
      q: {
        en: "Version 1 of the customer evolve block, built: <code>payments</code> has <code>customer_id NUMBER NOT NULL REFERENCES customers</code>, and holds the four non-cash payments. The script runs one statement at a time. What happens?",
        ar: "الإصدار 1 من كتلة تطوّر الزبون، مبنيًّا: في <code>payments</code> العمود <code>customer_id NUMBER NOT NULL REFERENCES customers</code>، وفيه الدفعات الأربع غير النقدية. يُنفَّذ السكربت عبارةً عبارة. ماذا يحدث؟"
      },
      lang: "sql",
      code: "-- a card payment by customer 1\nINSERT INTO payments VALUES (7, '2026-03-05', 60, 1);\n-- a cash sale, 25\nINSERT INTO payments (payment_id, payment_date, amount)\nVALUES (8, '2026-03-05', 25);\n\nSELECT COUNT(*) AS recorded FROM payments;",
      options: [
        { en: "Both inserts succeed; recorded = 6", ar: "تنجح الإضافتان؛ recorded = 6" },
        { en: "The cash insert is refused (Wrong NULL value in NOT NULL column customer_id); recorded = 5", ar: "تُرفض الإضافة النقدية (Wrong NULL value in NOT NULL column customer_id)؛ recorded = 5" },
        { en: "Both inserts are refused, because payment 7 is not in a subtype table; recorded = 4", ar: "تُرفض الإضافتان، لأن الدفعة 7 ليست في جدول نوع فرعي؛ recorded = 4" },
        { en: "The cash insert succeeds with an empty customer, because cash has no customer; recorded = 6", ar: "تنجح الإضافة النقدية بزبون فارغ، لأن النقد لا زبون له؛ recorded = 6" }
      ],
      answer: 1,
      hint: {
        en: "Does the table know which payments are cash? What did the model tell it about every payment?",
        ar: "هل يعرف الجدول أيّ الدفعات نقدية؟ وماذا قال له النموذج عن كل دفعة؟"
      },
      explain: {
        en: "The card payment goes in; the cash sale is refused, so 5 rows. The table did exactly what the model said: the customer line was drawn on <code>PAYMENT</code> with a solid end, so <code>CASH</code> inherited \"must be made by one customer\". The defect is in the drawing, not the table. In version 2 <code>customer_id</code> lives only in <code>check_payments</code> and <code>card_payments</code>.",
        ar: "تدخل دفعة البطاقة، وتُرفض البيعة النقدية، فيبقى 5 صفوف. فعل الجدول بالضبط ما قاله النموذج: رُسم خطّ الزبون على <code>PAYMENT</code> بطرف متّصل، فورث <code>CASH</code> قاعدة «يجب أن يقوم بها زبون واحد». العيب في الرسم لا في الجدول. وفي الإصدار 2 يسكن <code>customer_id</code> في <code>check_payments</code> و<code>card_payments</code> وحدهما."
      },
      solution: {
        out: "INSERT 7: 1 row\nINSERT 8: Wrong NULL value in NOT NULL column customer_id\nrecorded\n5",
        en: "Run in alasql on the lesson's version-1 table.",
        ar: "نُفّذ في alasql على جدول الإصدار 1 من الدرس."
      }
    },
    {
      id: "t4l2q19", type: "error", level: "medium", topics: ["t4-inherited-relationship", "t4-relationship-placement", "t4-supertype-relationship"],
      q: {
        en: "The shop's model, as text. The business: every payment is received by one staff member; cheques and card payments are made by a customer; cash payments are not. Which line is wrong?",
        ar: "نموذج المتجر، نصًّا. العمل: كل دفعة يستلمها موظّف واحد؛ والشيكات ودفعات البطاقة يقوم بها زبون؛ أمّا الدفعات النقدية فلا. أيّ سطر خطأ؟"
      },
      lang: "erdish",
      code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK        * Bank Name\n  CREDIT CARD  * Card Number\nEach PAYMENT must be received by one and only one STAFF MEMBER.\nEach PAYMENT must be made by one and only one CUSTOMER.",
      answer: 6,
      hint: {
        en: "A line drawn to the supertype is inherited by which subtypes?",
        ar: "الخطّ المرسوم إلى النوع الأعلى، أيّ الأنواع الفرعية ترثه؟"
      },
      explain: {
        en: "Line 6. Drawn to <code>PAYMENT</code>, the customer line is inherited by <code>CASH</code>: each cash payment must be made by a customer, which the business never said. Line 5 has the same shape and is tempting, but every payment is received by a staff member, so it is a correct supertype relationship. The test is the same for both: true of every kind, or of some?",
        ar: "السطر 6. حين يُرسم خطّ الزبون إلى <code>PAYMENT</code> يرثه <code>CASH</code>: فيجب أن يقوم زبون بكل دفعة نقدية، وهذا ما لم يقله العمل. والسطر 5 له الشكل نفسه وهو مغرٍ، لكن كل دفعة يستلمها موظّف، فهو علاقة نوع أعلى صحيحة. والاختبار واحد للسطرين: هل هو صحيح لكل نوع، أم لبعضها؟"
      },
      solution: {
        code: "Each PAYMENT     must be received by one and only one STAFF MEMBER.\nEach CHECK       must be made by one and only one CUSTOMER.\nEach CREDIT CARD must be made by one and only one CUSTOMER.",
        en: "Replace line 6 with two subtype relationships, one from CHECK and one from CREDIT CARD.",
        ar: "استبدل بالسطر 6 علاقتَي نوع فرعي، واحدة من CHECK وأخرى من CREDIT CARD."
      }
    },
    {
      id: "t4l2q20", type: "multi", level: "hard", topics: ["t4-inherited-relationship", "t4-inheritance"],
      q: {
        en: "Version 1 of the customer evolve block: one line, <code>Each PAYMENT must be made by one and only one CUSTOMER</code>, with <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code> inside <code>PAYMENT</code>. Which statements does this model say? Choose every one.",
        ar: "الإصدار 1 من كتلة تطوّر الزبون: خطّ واحد، <code>Each PAYMENT must be made by one and only one CUSTOMER</code>، و<code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> داخل <code>PAYMENT</code>. أيّ العبارات يقولها هذا النموذج؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>Each CHECK must be made by one and only one CUSTOMER.</code>", ar: "<code>Each CHECK must be made by one and only one CUSTOMER.</code>" },
        { en: "<code>Each CASH may be made by one and only one CUSTOMER.</code>", ar: "<code>Each CASH may be made by one and only one CUSTOMER.</code>" },
        { en: "<code>Each CASH must be made by one and only one CUSTOMER.</code>", ar: "<code>Each CASH must be made by one and only one CUSTOMER.</code>" },
        { en: "A cash sale can be recorded without naming a customer.", ar: "يمكن تسجيل بيعة نقدية دون ذكر زبون." },
        { en: "<code>Each CREDIT CARD must be made by one and only one CUSTOMER.</code>", ar: "<code>Each CREDIT CARD must be made by one and only one CUSTOMER.</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Subtypes inherit <em>all</em> relationships of the supertype — and the solid end comes with the line.",
        ar: "الأنواع الفرعية ترث <em>كل</em> علاقات النوع الأعلى — والطرف المتّصل يأتي مع الخطّ."
      },
      explain: {
        en: "All three subtypes inherit the line, solid end included, so each must be made by a customer — cash too. \"May\" for cash is what the shop wants, but nothing in this drawing says it: an inherited relationship keeps its optionality exactly as the inherited attribute keeps its mark. That is why version 2 draws two lines, from <code>CHECK</code> and <code>CREDIT CARD</code>, and none on <code>PAYMENT</code>.",
        ar: "الأنواع الفرعية الثلاثة ترث الخطّ، بطرفه المتّصل، فيجب أن يقوم زبون بكلٍّ منها — والنقد أيضًا. و«may» للنقد هي ما يريده المتجر، لكن لا شيء في هذا الرسم يقولها: العلاقة الموروثة تحتفظ باختياريتها (optionality) كما تحتفظ الخاصية الموروثة بعلامتها. لذلك يرسم الإصدار 2 خطّين، من <code>CHECK</code> و<code>CREDIT CARD</code>، ولا شيء على <code>PAYMENT</code>."
      }
    },
    {
      id: "t4l2q21", type: "contrast", level: "medium", topics: ["t4-supertype-relationship", "t4-subtype-relationship", "t4-relationship-placement"],
      q: {
        en: "Each relationship below, from the lesson's three hierarchies. Is it drawn to the supertype, or to one or more subtypes?",
        ar: "كل علاقة أدناه من تسلسلات الدرس الثلاثة. هل تُرسم إلى النوع الأعلى، أم إلى نوع فرعي أو أكثر؟"
      },
      concepts: [
        { en: "Supertype relationship — drawn to the outer box", ar: "علاقة نوع أعلى (supertype relationship) — تُرسم إلى الصندوق الخارجي" },
        { en: "Subtype relationship — drawn to a subtype's box", ar: "علاقة نوع فرعي (subtype relationship) — تُرسم إلى صندوق نوع فرعي" }
      ],
      rows: [
        { s: { en: "Every payment is received by one <code>STAFF MEMBER</code>", ar: "كل دفعة يستلمها موظّف <code>STAFF MEMBER</code> واحد" }, a: 0 },
        { s: { en: "Cheques and card payments are made by a <code>CUSTOMER</code>", ar: "الشيكات ودفعات البطاقة يقوم بها زبون <code>CUSTOMER</code>" }, a: 1 },
        { s: { en: "Students take quizzes, midterms and finals", ar: "الطلاب يأخذون الاختبارات القصيرة والنصفية والنهائية" }, a: 0 },
        { s: { en: "Quizzes include <code>BONUS QUESTION</code>s", ar: "الاختبارات القصيرة تتضمّن <code>BONUS QUESTION</code>" }, a: 1 },
        { s: { en: "Every loan item, book or DVD, is shelved in one <code>BRANCH</code>", ar: "كل مادّة إعارة، كتابًا أو DVD، توضع في فرع <code>BRANCH</code> واحد" }, a: 0 },
        { s: { en: "Only DVDs are coded for a <code>REGION</code>", ar: "أقراص DVD وحدها تُرمَّز بمنطقة <code>REGION</code>" }, a: 1 }
      ],
      hint: {
        en: "True of every kind, or of some kinds only?",
        ar: "هل هي صحيحة لكل نوع، أم لبعض الأنواع فقط؟"
      },
      explain: {
        en: "A relationship true of every kind goes once, on the supertype, and inheritance gives it to all: staff member, take, branch. One true of some kinds goes on each of those subtypes: customer (on <code>CHECK</code> and <code>CREDIT CARD</code>), bonus questions, region. The tempting one is the customer — two lines look like repetition, but they belong to two subtypes, not to all.",
        ar: "العلاقة الصحيحة لكل نوع تُرسم مرّة واحدة على النوع الأعلى، والوراثة تمنحها للجميع: الموظّف، وtake، والفرع. والصحيحة لبعض الأنواع تُرسم على كلٍّ من تلك الأنواع الفرعية: الزبون (على <code>CHECK</code> و<code>CREDIT CARD</code>)، والأسئلة الإضافية، والمنطقة. والمغري هو الزبون — يبدو الخطّان تكرارًا، لكنهما لنوعين فرعيين، لا للجميع."
      }
    },

    /* ---------------------------------------------------- tables: a subtype in SQL */
    {
      id: "t4l2q22", type: "write", level: "hard", topics: ["t4-subtype", "t4-specialized-attribute", "t4-inheritance", "t4-exam-hierarchy"],
      q: {
        en: "The lesson's <code>exams</code> table holds the supertype: <code>exam_id</code>, <code>description</code>, <code>weight</code>, <code>exam_date</code>, <code>written_grade</code>. Write <code>CREATE TABLE midterms</code> for the subtype <code>MIDTERM</code>, in the same style as <code>quizzes</code>: its key, and its one specialized attribute as <code>oral_grade</code> (NUMBER).",
        ar: "يحمل جدول <code>exams</code> في الدرس النوعَ الأعلى: <code>exam_id</code> و<code>description</code> و<code>weight</code> و<code>exam_date</code> و<code>written_grade</code>. اكتب <code>CREATE TABLE midterms</code> للنوع الفرعي <code>MIDTERM</code>، على نمط <code>quizzes</code>: مفتاحه، وخاصيته المتخصّصة الوحيدة باسم <code>oral_grade</code> (NUMBER)."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE midterms (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+midterms\\s*\\(", flags: "i",
          label: { en: "creates the table midterms", ar: "يُنشئ الجدول midterms" } },
        { re: "\\bexam_id\\s+\\w+[^,;]*\\bPRIMARY\\s+KEY", flags: "i",
          label: { en: "exam_id is the primary key", ar: "exam_id هو المفتاح الأساسي" } },
        { re: "REFERENCES\\s+exams\\s*\\(\\s*exam_id\\s*\\)", flags: "i",
          label: { en: "exam_id references exams(exam_id): every midterm is an exam", ar: "exam_id يشير إلى exams(exam_id): كل امتحان نصفي امتحان" } },
        { re: "\\boral_grade\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "oral_grade is NOT NULL: the attribute is * in MIDTERM", ar: "oral_grade من نوع NOT NULL: الخاصية * في MIDTERM" } }
      ],
      forbid: [
        { re: "\\b(weight|exam_date|written_grade|description)\\b", flags: "i",
          label: { en: "the common attributes are inherited from exams; copying them here is version 1 of EXAM again", ar: "الخصائص المشتركة موروثة من exams؛ ونسخها هنا هو الإصدار 1 من EXAM من جديد" } }
      ],
      hint: {
        en: "A subtype's table holds only what is special to it, and its key is also a foreign key to the supertype's table.",
        ar: "جدول النوع الفرعي لا يحمل إلا ما يخصّه، ومفتاحه هو أيضًا مفتاح أجنبي إلى جدول النوع الأعلى."
      },
      explain: {
        en: "The midterm's weight, date and written grade are inherited: a join on <code>exam_id</code> gives them back, so they are not typed again. Its own oral grade is <code>NOT NULL</code> because it is <code>*</code> inside <code>MIDTERM</code> — a rule a single <code>exams</code> table could only make optional. The key doubling as a foreign key enforces \"every midterm is an exam\".",
        ar: "وزن الامتحان النصفي وتاريخه ودرجته الكتابية موروثة: ربطٌ على <code>exam_id</code> يعيدها، فلا تُكتب مرّة أخرى. أمّا درجته الشفوية فهي <code>NOT NULL</code> لأنها <code>*</code> داخل <code>MIDTERM</code> — وهي قاعدة لا يستطيع جدول <code>exams</code> واحد إلا أن يجعلها اختيارية. والمفتاح الذي هو مفتاح أجنبي أيضًا يفرض أن «كل امتحان نصفي امتحان»."
      },
      solution: {
        code: "CREATE TABLE midterms (\n  exam_id    NUMBER PRIMARY KEY REFERENCES exams(exam_id),\n  oral_grade NUMBER NOT NULL\n);",
        en: "Run in alasql after exams: a midterm row for an existing exam is accepted; one with no oral_grade is refused (Wrong NULL value in NOT NULL column oral_grade); one for exam 9, which does not exist, is refused (Foreign key \"9\" not found in table \"exams\").",
        ar: "نُفّذ في alasql بعد exams: يُقبل صفّ امتحان نصفي لامتحان موجود؛ ويُرفض صفّ بلا oral_grade (Wrong NULL value in NOT NULL column oral_grade)؛ ويُرفض صفّ للامتحان 9 غير الموجود (Foreign key \"9\" not found in table \"exams\")."
      }
    },

    /* ---------------------------------------------------- 6 · reading both ways */
    {
      id: "t4l2q23", type: "output", level: "hard", topics: ["t4-reading-both-ways", "t4-subtype-in-full"],
      q: {
        en: "The lesson's supertype-plus-subtype tables, where each of the six payments sits in exactly one subtype table. A clerk inserts payment 7 into <code>payments</code> only, and forgets its kind. What does the second statement return?",
        ar: "جداول الدرس بصيغة «نوع أعلى مع أنواع فرعية»، حيث تقع كل دفعة من الست في جدول نوع فرعي واحد بالضبط. يُدخل موظّف الدفعة 7 في <code>payments</code> وحده، وينسى نوعها. ماذا تُرجع العبارة الثانية؟"
      },
      lang: "sql",
      code: "INSERT INTO payments VALUES (7, '2026-03-05', 60);\n\nSELECT COUNT(*) AS no_kind\nFROM payments p\nLEFT JOIN cash_payments  cs ON cs.payment_id = p.payment_id\nLEFT JOIN check_payments ch ON ch.payment_id = p.payment_id\nLEFT JOIN card_payments  cc ON cc.payment_id = p.payment_id\nWHERE cs.payment_id IS NULL\n  AND ch.payment_id IS NULL\n  AND cc.payment_id IS NULL;",
      blanks: [{ accept: ["1"], label: { en: "no_kind", ar: "no_kind" } }],
      hint: {
        en: "The foreign keys point from the subtype tables to payments. Does anything point the other way?",
        ar: "المفاتيح الأجنبية تشير من جداول الأنواع الفرعية إلى payments. هل يشير شيء في الاتجاه الآخر؟"
      },
      explain: {
        en: "1. The insert succeeds: the foreign keys enforce only the inwards-out reading (every card payment is a payment). The outwards-in reading — every <code>PAYMENT</code> is a <code>CASH</code>, a <code>CHECK</code> or a <code>CREDIT CARD</code> — is not a key; it is this query, and payment 7 breaks it. Whether the subtypes must cover every case is one of Lesson 3's rules.",
        ar: "1. تنجح الإضافة: المفاتيح الأجنبية تفرض القراءة من الداخل إلى الخارج وحدها (كل دفعة بطاقة دفعة). أمّا القراءة من الخارج إلى الداخل — كل <code>PAYMENT</code> هو <code>CASH</code> أو <code>CHECK</code> أو <code>CREDIT CARD</code> — فليست مفتاحًا؛ بل هي هذا الاستعلام، والدفعة 7 تخالفها. وهل يجب أن تغطّي الأنواع الفرعية كل حالة؟ تلك إحدى قواعد الدرس 3."
      },
      solution: {
        out: "no_kind\n1",
        en: "Run in alasql on the lesson's tables: the INSERT returns 1 row; the SELECT returns no_kind = 1.",
        ar: "نُفّذ في alasql على جداول الدرس: تُرجع الإضافة صفًّا واحدًا، ويُرجع الاستعلام no_kind = 1."
      }
    },
    {
      id: "t4l2q24", type: "tf", level: "easy", topics: ["t4-reading-both-ways", "t4-inheritance"],
      q: {
        en: "Reading the <code>EXAM</code> drawing inwards-out: every <code>MIDTERM</code> is an <code>EXAM</code>, so every midterm has a weight and a date, and is taken by students.",
        ar: "قراءة رسم <code>EXAM</code> من الداخل إلى الخارج: كل <code>MIDTERM</code> هو <code>EXAM</code>، فلكل امتحان نصفي وزن وتاريخ، ويأخذه الطلاب."
      },
      truth: true,
      hint: {
        en: "If a midterm is an exam, what does it have that every exam has?",
        ar: "إذا كان الامتحان النصفي امتحانًا، فما الذي يملكه ممّا يملكه كل امتحان؟"
      },
      explain: {
        en: "True. The inwards-out reading is inheritance: a midterm is an exam, so it has the weight, the date and the <code>take</code> relationship, plus its own oral grade. The other direction, every exam is a quiz, a midterm or a final, says the subtypes account for every exam — a different claim, which Lesson 3's rules decide.",
        ar: "صحيح. القراءة من الداخل إلى الخارج هي الوراثة: الامتحان النصفي امتحان، فله الوزن والتاريخ والعلاقة <code>take</code>، إضافةً إلى درجته الشفوية الخاصّة. أمّا الاتجاه الآخر، أن كل امتحان هو اختبار قصير أو نصفي أو نهائي، فيقول إن الأنواع الفرعية تغطّي كل امتحان — وهي دعوى أخرى تحسمها قواعد الدرس 3."
      }
    }
  ]
};
