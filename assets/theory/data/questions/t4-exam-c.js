/* Question bank: T4 chapter test C -- Advanced. The hard corners that cross lesson boundaries:
   OTHER and what it inherits, the rules asked inside every nested box, a second basis hidden one
   level down, the order of a review, and what the tables can and cannot refuse.
   Every SQL output quoted here was run in alasql (the course's own engine). */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-exam-c"] = {
  title: { en: "Chapter Test C — Advanced", ar: "اختبار الفصل ج — المتقدّم" },
  intro: {
    en: "24 questions on the corners where the chapter's ideas meet: an OTHER subtype that changes what a supertype line means, the three rules asked again inside a nested box, a second question hiding one level down, a review done in the wrong order, and tables that accept what the diagram forbids. Most are medium; seven are hard. Allow about 50 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا في الزوايا التي تلتقي فيها أفكار الفصل: نوع فرعي <code>OTHER</code> يغيّر معنى خطّ مرسوم على النوع الأعلى، والقواعد الثلاث تُسأل من جديد داخل صندوق متداخل، وسؤال ثانٍ مختبئ في مستوى أعمق، ومراجعة أُجريت بترتيب خاطئ، وجداول تقبل ما يمنعه المخطّط. أغلبها متوسّط، وسبعة منها صعبة. خصّص لها نحو 50 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== exhaustive, exclusive, never one */
    {
      id: "t4cx01", type: "mcq", level: "easy",
      topics: ["t4-exhaustive", "t4-uncovered-instance", "t4-witness-instance"],
      q: {
        en: "The café's <code>ORDER</code> holds <code>EAT IN</code> (<code>* Table Number</code>) and <code>TO GO</code> (<code>* Pickup Time</code>), and no <code>OTHER</code>. This month it starts delivering. Which instance is a witness against rule two, exhaustive?",
        ar: "يضمّ <code>ORDER</code> في المقهى <code>EAT IN</code> (<code>* Table Number</code>) و<code>TO GO</code> (<code>* Pickup Time</code>)، ولا يضمّ <code>OTHER</code>. وفي هذا الشهر بدأ المقهى التوصيل. أيّ نسخة تشهد على خرق القاعدة الثانية، الشمول (exhaustive)؟"
      },
      options: [
        { en: "An eat-in order that a waiter saved without its table number",
          ar: "طلب أكل في المكان حفظه النادل دون رقم طاولته" },
        { en: "A <code>DRIVER</code> who delivers the orders",
          ar: "<code>DRIVER</code> يوصل الطلبات" },
        { en: "A delivery order to 12 Harbour Street",
          ar: "طلب توصيل إلى 12 شارع الميناء" },
        { en: "A to-go order collected twenty minutes after its pickup time",
          ar: "طلب أخذ استُلم بعد موعد استلامه بعشرين دقيقة" }
      ],
      answer: 2,
      hint: {
        en: "Rule two asks whether every instance of the supertype fits some subtype. The witness must be an order, and it must fit no box.",
        ar: "القاعدة الثانية تسأل: هل تقع كل نسخة من النوع الأعلى في نوع فرعي ما؟ فالشاهد يجب أن يكون طلبًا، وألّا يقع في أيّ صندوق."
      },
      explain: {
        en: "A delivery order is an order, and it is neither eaten in nor taken away: it fits no box, so it proves the set is not exhaustive. The order with no table number is tempting, but it fits <code>EAT IN</code> perfectly; it breaks that box's <code>*</code>, which is a data error, not a hierarchy error. A driver is not an order at all, so it cannot witness anything about <code>ORDER</code>'s subtypes. A witness must be an instance of the box you are judging.",
        ar: "طلب التوصيل طلب، وليس أكلًا في المكان ولا أخذًا: فلا يقع في أيّ صندوق، ولذلك يثبت أن المجموعة غير شاملة. والطلب الذي بلا رقم طاولة مغرٍ، لكنه يقع في <code>EAT IN</code> تمامًا؛ وهو يخرق علامة <code>*</code> في ذلك الصندوق، وهذا خطأ في البيانات لا في التسلسل الهرمي. أمّا السائق فليس طلبًا أصلًا، فلا يشهد على شيء يخصّ أنواع <code>ORDER</code> الفرعية. الشاهد يجب أن يكون نسخة من الصندوق الذي تحكم عليه."
      }
    },

    {
      id: "t4cx02", type: "multi", level: "easy",
      topics: ["t4-mutually-exclusive", "t4-overlapping-subtypes", "t4-nested-subtypes", "t4-subdivision-basis"],
      q: {
        en: "Which of these hierarchies break rule three, mutually exclusive? Brackets show subtypes nested inside a subtype. Choose every one.",
        ar: "أيّ هذه التسلسلات الهرمية تخرق القاعدة الثالثة، التنافي (mutually exclusive)؟ الأقواس تبيّن أنواعًا فرعية متداخلة داخل نوع فرعي. اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>DRINK</code>: <code>COFFEE</code>, <code>TEA</code>, <code>HOT DRINK</code>, <code>OTHER</code>",
          ar: "<code>DRINK</code>: <code>COFFEE</code>، <code>TEA</code>، <code>HOT DRINK</code>، <code>OTHER</code>" },
        { en: "<code>ANIMAL</code>: <code>VERTEBRATE</code> (<code>BIRD</code>, <code>REPTILE</code>, <code>MAMMAL</code>, <code>OTHER</code>), <code>INVERTEBRATE</code>",
          ar: "<code>ANIMAL</code>: <code>VERTEBRATE</code> (<code>BIRD</code>، <code>REPTILE</code>، <code>MAMMAL</code>، <code>OTHER</code>)، <code>INVERTEBRATE</code>" },
        { en: "<code>ORDER</code>: <code>EAT IN</code>, <code>TO GO</code>, <code>PAID BY CARD</code>",
          ar: "<code>ORDER</code>: <code>EAT IN</code>، <code>TO GO</code>، <code>PAID BY CARD</code>" },
        { en: "<code>SNOW SPORT</code>: <code>SKI</code>, <code>SNOWBOARD</code>, <code>CROSS COUNTRY</code>, <code>OTHER</code>",
          ar: "<code>SNOW SPORT</code>: <code>SKI</code>، <code>SNOWBOARD</code>، <code>CROSS COUNTRY</code>، <code>OTHER</code>" },
        { en: "<code>PAYMENT</code>: <code>CASH</code>, <code>CHECK</code>, <code>CARD</code> (<code>CREDIT CARD</code>, <code>DEBIT CARD</code>), <code>OTHER</code>",
          ar: "<code>PAYMENT</code>: <code>CASH</code>، <code>CHECK</code>، <code>CARD</code> (<code>CREDIT CARD</code>، <code>DEBIT CARD</code>)، <code>OTHER</code>" }
      ],
      answer: [0, 2],
      hint: {
        en: "For each set of siblings, look for one instance that fits two of them. A box inside a box is not two siblings.",
        ar: "في كل مجموعة من الإخوة، ابحث عن نسخة واحدة تقع في اثنين منها. والصندوق داخل صندوق ليس أخوين."
      },
      explain: {
        en: "A cappuccino is a <code>COFFEE</code> and a <code>HOT DRINK</code>; an eat-in order paid by card is <code>EAT IN</code> and <code>PAID BY CARD</code>. Each mixes a second question (\"is it hot?\", \"how was it paid?\") into the set. The nested <code>ANIMAL</code> and <code>PAYMENT</code> are tempting, because an eagle is in <code>VERTEBRATE</code> and in <code>BIRD</code>: but those boxes are nested, not side by side, and the eagle sits in exactly one innermost box. Overlap is two siblings; nesting is legal.",
        ar: "الكابتشينو <code>COFFEE</code> و<code>HOT DRINK</code> معًا؛ وطلب الأكل في المكان المدفوع ببطاقة <code>EAT IN</code> و<code>PAID BY CARD</code> معًا. كلٌّ منهما يخلط سؤالًا ثانيًا («هل هو ساخن؟»، «كيف دُفع؟») في المجموعة. أمّا <code>ANIMAL</code> و<code>PAYMENT</code> المتداخلان فمغريان، لأن النسر في <code>VERTEBRATE</code> وفي <code>BIRD</code>: لكن هذين الصندوقين متداخلان لا متجاوران، والنسر يقع في صندوق داخلي واحد بالضبط. التداخل الممنوع (overlap) أخوان؛ والتداخل بالتضمين (nesting) مشروع."
      }
    },

    {
      id: "t4cx03", type: "compare", level: "easy",
      topics: ["t4-single-subtype", "t4-exhaustive", "t4-other-subtype", "t4-snow-sport"],
      q: {
        en: "The ski resort runs skiing, snowboarding and sledging. It records a ski length for skis and a board length for snowboards, and nothing special for sledging. Two drafts, as text. Which statement is right?",
        ar: "يقدّم منتجع التزلّج التزلّج على الزلّاجات والتزلّج على اللوح والتزحلق بالمزلجة. ويسجّل طول الزلّاجة للتزلّج وطول اللوح للتزلّج على اللوح، ولا شيء مميّزًا للتزحلق بالمزلجة. مسوّدتان نصّيتان. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "SNOW SPORT   # Sport ID  * Name\n  SKI        * Ski Length\n  OTHER",
      codeB: "SNOW SPORT   # Sport ID  * Name\n  SKI        * Ski Length\n  SNOWBOARD  * Board Length",
      options: [
        { en: "B is sound: it has two subtypes, so it no longer breaks \"never just one subtype\"",
          ar: "B سليمة: فيها نوعان فرعيان، فلم تعد تخرق قاعدة «لا نوع فرعي وحيدًا أبدًا»" },
        { en: "A is sound: <code>OTHER</code> makes it exhaustive, and snowboards go in <code>OTHER</code>",
          ar: "A سليمة: <code>OTHER</code> يجعلها شاملة، والتزلّج على اللوح يدخل <code>OTHER</code>" },
        { en: "Both are sound, because each has two subtypes",
          ar: "كلتاهما سليمة، لأن في كلٍّ منهما نوعين فرعيين" },
        { en: "Neither: B leaves sledging with no box, and A has no box where a board length can be stored; the model needs <code>SKI</code>, <code>SNOWBOARD</code> and <code>OTHER</code>",
          ar: "ولا واحدة: B تترك التزحلق بالمزلجة بلا صندوق، وA ليس فيها صندوق يُخزَّن فيه طول اللوح؛ النموذج يحتاج <code>SKI</code> و<code>SNOWBOARD</code> و<code>OTHER</code>" }
      ],
      answer: 3,
      hint: {
        en: "Two subtypes satisfy one check. Run the others too: does every sport have a box, and does every fact the resort records have a place?",
        ar: "النوعان الفرعيان يُرضيان فحصًا واحدًا. طبّق الباقي أيضًا: هل لكل رياضة صندوق، وهل لكل حقيقة يسجّلها المنتجع مكان؟"
      },
      explain: {
        en: "B passes check 2 but fails check 3: sledging is a snow sport with no box. A is exhaustive, but a snowboard filed in <code>OTHER</code> has nowhere to keep <code>* Board Length</code>, which the resort records. Adding a second named subtype is not the same as adding one \"to contain the rest\": only <code>OTHER</code> does that. The lecturer's own model has both, and is the repair.",
        ar: "B تجتاز الفحص 2 وتفشل في الفحص 3: التزحلق بالمزلجة رياضة ثلجية بلا صندوق. وA شاملة، لكن التزلّج على اللوح إذا وُضع في <code>OTHER</code> لا يجد مكانًا لـ <code>* Board Length</code> الذي يسجّله المنتجع. وإضافة نوع فرعي مسمّى ثانٍ ليست كإضافة نوع «يحتوي الباقي»: لا يفعل ذلك إلا <code>OTHER</code>. ونموذج المحاضِرة نفسه فيه الاثنان، وهو الإصلاح."
      }
    },

    /* ==================================================== OTHER, and what it inherits */
    {
      id: "t4cx04", type: "tf", level: "easy",
      topics: ["t4-other-subtype", "t4-inherited-relationship", "t4-supertype-relationship"],
      q: {
        en: "The shop's <code>PAYMENT</code> holds <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code> and <code>OTHER</code>, and <code>Each PAYMENT must be received by one and only one STAFF MEMBER</code> is drawn to <code>PAYMENT</code>. A gift voucher payment, filed in <code>OTHER</code>, must therefore be received by a staff member too.",
        ar: "يضمّ <code>PAYMENT</code> في المتجر <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> و<code>OTHER</code>، والعلاقة <code>Each PAYMENT must be received by one and only one STAFF MEMBER</code> مرسومة إلى <code>PAYMENT</code>. إذن فدفعة قسيمة الهدية، الموضوعة في <code>OTHER</code>، يجب أن يستلمها موظف أيضًا."
      },
      truth: true,
      hint: {
        en: "<code>OTHER</code> is drawn inside <code>PAYMENT</code>. What does every box inside a supertype receive from it?",
        ar: "<code>OTHER</code> مرسوم داخل <code>PAYMENT</code>. ماذا يرث كل صندوق داخل نوع أعلى منه؟"
      },
      explain: {
        en: "True. <code>OTHER</code> is a subtype like any other, so it inherits every attribute and every relationship of <code>PAYMENT</code>, the solid end included. It is easy to think of <code>OTHER</code> as an empty leftover with no rules; it lists nothing of its own, but it carries everything the supertype says.",
        ar: "صحيحة. <code>OTHER</code> نوع فرعي كغيره، فيرث كل خاصية وكل علاقة في <code>PAYMENT</code>، ومعها الطرف المتّصل. ومن السهل أن يُظنّ <code>OTHER</code> بقيّةً فارغة بلا قواعد؛ لا يذكر شيئًا خاصًّا به، لكنه يحمل كل ما يقوله النوع الأعلى."
      }
    },

    {
      id: "t4cx05", type: "tf", level: "medium",
      topics: ["t4-other-subtype", "t4-supertype-relationship", "t4-relationship-placement", "t4-wall-covering"],
      q: {
        en: "The decorating store's first draft had <code>PAINT</code>, <code>WALLPAPER</code> and <code>FABRIC</code> inside <code>WALL COVERING</code>. All three are bought from a supplier, so the designer drew <code>Each WALL COVERING must be bought from one and only one SUPPLIER</code> once, to the supertype. Later <code>OTHER</code> is added for the ceramic tile (bought from a supplier) and the oak wood panel (made in the store's own workshop). Adding <code>OTHER</code> cannot make that line wrong, because the line was right when it was drawn.",
        ar: "كانت المسوّدة الأولى لمتجر الديكور تضع <code>PAINT</code> و<code>WALLPAPER</code> و<code>FABRIC</code> داخل <code>WALL COVERING</code>. والثلاثة تُشترى من مورّد، فرسم المصمّم <code>Each WALL COVERING must be bought from one and only one SUPPLIER</code> مرّة واحدة، إلى النوع الأعلى. ثم أُضيف <code>OTHER</code> للبلاط الخزفي (يُشترى من مورّد) وللوح خشب البلّوط (يُصنع في ورشة المتجر نفسه). إضافة <code>OTHER</code> لا يمكن أن تجعل ذلك الخطّ خاطئًا، لأن الخطّ كان صحيحًا حين رُسم."
      },
      truth: false,
      hint: {
        en: "A line on a supertype is a claim about every subtype. Which subtypes does it cover after the change?",
        ar: "الخطّ على النوع الأعلى ادّعاء عن كل نوع فرعي. أيّ الأنواع الفرعية يشمل بعد التغيير؟"
      },
      explain: {
        en: "False. <code>OTHER</code> inherits the line, solid end and all, so the drawing now says the oak panel must be bought from a supplier, and <code>WC5</code> is the witness. A relationship belongs on the supertype only while it is true of every subtype, and adding a subtype, even <code>OTHER</code>, opens that question again. The belief that a line stays right once drawn is the trap: every new box inherits it.",
        ar: "خاطئة. <code>OTHER</code> يرث الخطّ بطرفه المتّصل، فيقول المخطّط الآن إن لوح البلّوط يجب أن يُشترى من مورّد، و<code>WC5</code> هو الشاهد. لا توضع العلاقة على النوع الأعلى إلا ما دامت صحيحة لكل نوع فرعي، وإضافة نوع فرعي، ولو كان <code>OTHER</code>، تفتح هذا السؤال من جديد. والفخّ هو الظنّ أن الخطّ يبقى صحيحًا ما دام قد رُسم: كل صندوق جديد يرثه."
      }
    },

    {
      id: "t4cx06", type: "mcq", level: "hard",
      topics: ["t4-other-subtype", "t4-exhaustive", "t4-specialized-attribute", "t4-hidden-rule"],
      q: {
        en: "To handle the gift vouchers of Lesson 3, a designer gave <code>OTHER</code> the voucher's code. In April the shop starts taking bank transfers, which record nothing special. What is wrong, and what is the repair?",
        ar: "لمعالجة قسائم الهدايا في الدرس 3، أعطى مصمّم <code>OTHER</code> رمز القسيمة. وفي نيسان بدأ المتجر يقبل التحويلات المصرفية، ولا يُسجَّل لها شيء مميّز. ما الخطأ، وما الإصلاح؟"
      },
      lang: "text",
      code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\n  OTHER        * Voucher Code",
      options: [
        { en: "Nothing: <code>OTHER</code> may have attributes, and a transfer simply goes in <code>OTHER</code>",
          ar: "لا شيء: يجوز أن تكون لـ <code>OTHER</code> خصائص، والتحويل يدخل <code>OTHER</code> ببساطة" },
        { en: "Make it <code>o Voucher Code</code>, so a transfer in <code>OTHER</code> may leave it empty",
          ar: "جعلها <code>o Voucher Code</code>، كي يتركها التحويل في <code>OTHER</code> فارغة" },
        { en: "Move <code>* Voucher Code</code> into <code>PAYMENT</code>",
          ar: "نقل <code>* Voucher Code</code> إلى <code>PAYMENT</code>" },
        { en: "The box is really <code>VOUCHER</code>: name it so, keep <code>* Voucher Code</code> there, and add a new <code>OTHER</code> for transfers and whatever comes next",
          ar: "الصندوق في حقيقته <code>VOUCHER</code>: سمِّه كذلك، وأبقِ <code>* Voucher Code</code> فيه، وأضف <code>OTHER</code> جديدًا للتحويلات ولكل ما يأتي بعدها" }
      ],
      answer: 3,
      hint: {
        en: "<code>OTHER</code>'s job is to hold the rest, whatever it is. Can it still do that job if every instance in it must have a voucher code?",
        ar: "وظيفة <code>OTHER</code> أن يحتوي الباقي، أيًّا كان. هل يبقى قادرًا على ذلك إذا وجب أن يكون لكل نسخة فيه رمز قسيمة؟"
      },
      explain: {
        en: "A mandatory attribute on <code>OTHER</code> says every leftover payment has a voucher code, so a bank transfer cannot be filed there: the set is no longer exhaustive. A box with an attribute of its own is a named kind, so name it <code>VOUCHER</code> and give the rest a fresh <code>OTHER</code>. Making it <code>o</code> is the tempting patch, but it hides the rule that a voucher must have its code, exactly as <code>o Card Number</code> did in Lesson 1. On <code>PAYMENT</code> it would be listed for cash and cheques too.",
        ar: "الخاصية الإلزامية على <code>OTHER</code> تقول إن لكل دفعة متبقّية رمز قسيمة، فلا يمكن أن يوضع التحويل المصرفي هناك: لم تعد المجموعة شاملة. والصندوق الذي له خاصية خاصّة به نوع مسمّى، فسمِّه <code>VOUCHER</code> وأعطِ الباقي <code>OTHER</code> جديدًا. وجعلها <code>o</code> هو الترقيع المغري، لكنه يخفي قاعدة أن القسيمة يجب أن تحمل رمزها، تمامًا كما فعلت <code>o Card Number</code> في الدرس 1. وعلى <code>PAYMENT</code> ستُذكر للنقد والشيكات أيضًا."
      }
    },

    /* ==================================================== rule one, and the order of a review */
    {
      id: "t4cx07", type: "fill", level: "medium",
      topics: ["t4-kind-of-test", "t4-related-vs-kind-of", "t4-subtype-relationship", "t4-verdict"],
      q: {
        en: "A student redraws the lecturer's <code>EXAM</code> and puts <code>BONUS QUESTION</code> inside <code>QUIZ</code>, \"because a quiz includes bonus questions\". Write the first two parts of the verdict, then say how many subtypes <code>QUIZ</code> holds once it is repaired. Answer with a box name and two numbers.",
        ar: "يعيد طالب رسم <code>EXAM</code> الخاص بالمحاضِرة ويضع <code>BONUS QUESTION</code> داخل <code>QUIZ</code>، «لأن الاختبار القصير يتضمّن أسئلة إضافية». اكتب أول جزأين من الحكم، ثم قل كم نوعًا فرعيًّا يضمّ <code>QUIZ</code> بعد إصلاحه. أجب باسم صندوق وعددين."
      },
      lang: "text",
      code: "EXAM                 # Number  * Description  * Weight  * Date  * Grade For Written Component\n  QUIZ\n    BONUS QUESTION   * Question Text\n  MIDTERM            * Grade For Oral Presentation\n  FINAL              * Extra Points For Optional Paper\n\nbox:    ____1____\ncheck:  ____2____   (1 to 6)\nafter the repair QUIZ holds ____3____ subtypes",
      blanks: [
        { accept: ["QUIZ", "quiz", "Quiz"], ph: "box" },
        { accept: ["1", "one", "One", "check 1", "Check 1", "١"], ph: "1–6" },
        { accept: ["0", "zero", "Zero", "none", "None", "no", "٠", "صفر"], ph: "n" }
      ],
      hint: {
        en: "Run the checks in order on the box that has something inside it. Say the inwards-out sentence for the inner box aloud first.",
        ar: "طبّق الفحوص بالترتيب على الصندوق الذي في داخله شيء. وقل أولًا جملة القراءة من الداخل إلى الخارج للصندوق الداخلي بصوت عالٍ."
      },
      explain: {
        en: "The box is <code>QUIZ</code>, and it fails check 1: \"every <code>BONUS QUESTION</code> is a <code>QUIZ</code>\" is false, yet the drawing gives each bonus question a weight, a date and a written grade. A quiz <em>includes</em> bonus questions, which is a relationship, drawn as Lesson 2's subtype line from <code>QUIZ</code>. The tempting verdict is check 2, \"a single subtype, add <code>OTHER</code>\", which would make a wrong box look legal. Once it moves out, <code>QUIZ</code> holds no subtypes, and that is fine: the rule forbids exactly one, not none.",
        ar: "الصندوق هو <code>QUIZ</code>، ويفشل في الفحص 1: «كل <code>BONUS QUESTION</code> هو <code>QUIZ</code>» خطأ، ومع ذلك يعطي المخطّط كل سؤال إضافي وزنًا وتاريخًا ودرجة كتابية. الاختبار القصير <em>يتضمّن</em> أسئلة إضافية، وهذه علاقة، تُرسم خطًّا من <code>QUIZ</code> كعلاقة النوع الفرعي في الدرس 2. والحكم المغري هو الفحص 2، «نوع فرعي وحيد، أضف <code>OTHER</code>»، وهو يجعل صندوقًا خاطئًا يبدو مشروعًا. وبعد إخراجه لا يضمّ <code>QUIZ</code> أيّ نوع فرعي، وهذا سليم: القاعدة تمنع نوعًا واحدًا بالضبط، لا انعدامها."
      }
    },

    {
      id: "t4cx08", type: "order", level: "medium",
      topics: ["t4-review-order", "t4-model-review", "t4-repeated-common-attribute", "t4-kind-of-test"],
      q: {
        en: "The resort's draft: <code>SNOW SPORT</code> holds <code>SKI</code> (<code>* Ski Length</code>, <code>* Lift Pass Price</code>), <code>SNOWBOARD</code> (<code>* Board Length</code>, <code>* Lift Pass Price</code>), <code>INSTRUCTOR</code> and <code>BEGINNER</code>. The facts: every sport has a lift pass price; instructors teach sports; the resort also runs sledging, which records nothing special; beginner runs exist for every kind of sport. Put the four repairs in the order a review makes them.",
        ar: "مسوّدة المنتجع: يضمّ <code>SNOW SPORT</code> الأنواع <code>SKI</code> (<code>* Ski Length</code>، <code>* Lift Pass Price</code>) و<code>SNOWBOARD</code> (<code>* Board Length</code>، <code>* Lift Pass Price</code>) و<code>INSTRUCTOR</code> و<code>BEGINNER</code>. والحقائق: لكل رياضة سعر بطاقة مصعد؛ والمدرّبون يدرّسون الرياضات؛ ويقدّم المنتجع أيضًا التزحلق بالمزلجة، ولا يُسجَّل له شيء مميّز؛ ومسارات المبتدئين موجودة لكل نوع من الرياضات. رتّب الإصلاحات الأربعة بالترتيب الذي تجريها به المراجعة."
      },
      items: [
        { en: "Move <code>INSTRUCTOR</code> outside, joined to <code>SNOW SPORT</code> by a line",
          ar: "إخراج <code>INSTRUCTOR</code> إلى الخارج، موصولًا بـ <code>SNOW SPORT</code> بخطّ" },
        { en: "Add <code>OTHER</code>, so sledging has a box",
          ar: "إضافة <code>OTHER</code>، ليكون للتزحلق بالمزلجة صندوق" },
        { en: "Remove <code>BEGINNER</code>; record <code>* Difficulty</code> in <code>SNOW SPORT</code>",
          ar: "حذف <code>BEGINNER</code>؛ وتسجيل <code>* Difficulty</code> في <code>SNOW SPORT</code>" },
        { en: "List <code>* Lift Pass Price</code> once, in <code>SNOW SPORT</code>",
          ar: "ذكر <code>* Lift Pass Price</code> مرّة واحدة، في <code>SNOW SPORT</code>" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Each repair answers one of the six checks. Find which, then use the review order: kind of, more than one, exhaustive, exclusive, listed once, earned.",
        ar: "كل إصلاح يجيب عن فحص من الفحوص الستة. حدّد أيّها، ثم اتّبع ترتيب المراجعة: نوع من، أكثر من واحد، الشمول، التنافي، مذكور مرّة، الاستحقاق."
      },
      explain: {
        en: "Check 1 (an instructor is not a sport), check 3 (sledging), check 4 (a beginner ski run is <code>SKI</code> and <code>BEGINNER</code>), check 5 (the price). The order is not ceremony. With <code>INSTRUCTOR</code> and <code>BEGINNER</code> still inside, the price is in only two of four boxes and check 5 would look like a pass; with sledging still missing, you would lift the price without knowing that <code>OTHER</code> inherits it too. Remove the boxes that do not belong, settle which boxes exist, then tidy what they list.",
        ar: "الفحص 1 (المدرّب ليس رياضة)، ثم الفحص 3 (التزحلق بالمزلجة)، ثم الفحص 4 (مسار تزلّج للمبتدئين هو <code>SKI</code> و<code>BEGINNER</code> معًا)، ثم الفحص 5 (السعر). وليس الترتيب شكليًّا. فما دام <code>INSTRUCTOR</code> و<code>BEGINNER</code> في الداخل، فالسعر في صندوقين فقط من أربعة، وسيبدو الفحص 5 ناجحًا؛ وما دام التزحلق بالمزلجة غائبًا، سترفع السعر دون أن تعرف أن <code>OTHER</code> سيرثه أيضًا. أخرج الصناديق التي لا تنتمي، ثم ثبّت الصناديق الموجودة، ثم رتّب ما تذكره."
      }
    },

    {
      id: "t4cx09", type: "tf", level: "easy",
      topics: ["t4-kind-of-test", "t4-related-vs-kind-of", "t4-foreign-key-chain"],
      q: {
        en: "In the supertype-plus-subtype build, every subtype table's key <code>REFERENCES</code> the supertype table. So if a designer draws <code>CUSTOMER</code> inside <code>PAYMENT</code>, the foreign keys catch it: a box that is not a kind of its supertype cannot be built.",
        ar: "في بناء «جدول النوع الأعلى وجداول الأنواع الفرعية»، مفتاح كل جدول نوع فرعي يشير بـ <code>REFERENCES</code> إلى جدول النوع الأعلى. فإذا رسم مصمّم <code>CUSTOMER</code> داخل <code>PAYMENT</code>، تكشف المفاتيح الأجنبية ذلك: الصندوق الذي ليس نوعًا من نوعه الأعلى لا يمكن بناؤه."
      },
      truth: false,
      hint: {
        en: "Recall Lesson 3's build of the wrong model. Were Linda's rows refused, or stored?",
        ar: "تذكّر بناء النموذج الخاطئ في الدرس 3. هل رُفضت صفوف ليندا أم خُزّنت؟"
      },
      explain: {
        en: "False. The tables build happily: <code>customers</code> is keyed by <code>payment_id</code>, and Linda is stored once per payment. The foreign key only enforces the inwards-out reading for whatever is put in, so it turns the wrong box into wrong rows rather than refusing it. Rule one cannot be written as a constraint at all; only a person asking \"is every customer a payment?\" catches it.",
        ar: "خاطئة. تُبنى الجداول بلا اعتراض: <code>customers</code> مفتاحه <code>payment_id</code>، وتُخزَّن ليندا مرّة لكل دفعة. المفتاح الأجنبي يفرض القراءة من الداخل إلى الخارج لكل ما يُدخل فقط، فيحوّل الصندوق الخاطئ إلى صفوف خاطئة بدل أن يرفضه. ولا يمكن كتابة القاعدة الأولى قيدًا أصلًا؛ لا يكشفها إلا شخص يسأل «هل كل زبون دفعة؟»."
      }
    },

    /* ==================================================== the rules inside every nested box */
    {
      id: "t4cx10", type: "error", level: "medium",
      topics: ["t4-rules-every-level", "t4-overlapping-subtypes", "t4-subdivision-basis", "t4-animal-hierarchy"],
      q: {
        en: "The zoo's model, as text. Every box is a kind of the box around it, and each <code>OTHER</code> keeps its set exhaustive. The zoo's dolphins and fish live in water tanks, and so does its giant octopus. Which line breaks a rule?",
        ar: "نموذج حديقة الحيوان نصًّا. كل صندوق نوع من الصندوق المحيط به، وكل <code>OTHER</code> يحفظ شمول مجموعته. دلافين الحديقة وأسماكها تعيش في أحواض ماء، وكذلك أخطبوطها العملاق. أيّ سطر يخرق قاعدة؟"
      },
      lang: "text",
      code: "ANIMAL          # Animal ID  * Name\n  VERTEBRATE\n    BIRD        * Wingspan\n    REPTILE\n    MAMMAL\n    AQUATIC\n    OTHER\n  INVERTEBRATE",
      answer: 6,
      solution: {
        code: "ANIMAL          # Animal ID  * Name  * Habitat\n  VERTEBRATE\n    BIRD        * Wingspan\n    REPTILE\n    MAMMAL\n    OTHER\n  INVERTEBRATE",
        en: "AQUATIC leaves the hierarchy. Where an animal lives becomes * Habitat on ANIMAL, because the octopus lives in water too.",
        ar: "يخرج AQUATIC من التسلسل الهرمي. ويصير مكان عيش الحيوان * Habitat على ANIMAL، لأن الأخطبوط يعيش في الماء أيضًا."
      },
      hint: {
        en: "Ask rule three inside <code>VERTEBRATE</code>: is there an animal that fits two of its boxes? Think of a dolphin.",
        ar: "اسأل القاعدة الثالثة داخل <code>VERTEBRATE</code>: هل هناك حيوان يقع في صندوقين منها؟ فكّر في الدلفين."
      },
      explain: {
        en: "Line 6. A dolphin is a <code>MAMMAL</code> and an <code>AQUATIC</code>, a fish is an <code>OTHER</code> and an <code>AQUATIC</code>: the set inside <code>VERTEBRATE</code> is not mutually exclusive. \"Which class?\" and \"where does it live?\" are two bases, mixed one level down. Passing the rules inside <code>ANIMAL</code> is not enough; they are asked again inside every box that has subtypes. <code>AQUATIC</code> also has nothing of its own, which points the same way: it should be an attribute.",
        ar: "السطر 6. الدلفين <code>MAMMAL</code> و<code>AQUATIC</code> معًا، والسمكة <code>OTHER</code> و<code>AQUATIC</code> معًا: المجموعة داخل <code>VERTEBRATE</code> غير متنافية. «أيّ صنف؟» و«أين يعيش؟» أساسان مختلفان خُلطا في مستوى أعمق. ولا يكفي اجتياز القواعد داخل <code>ANIMAL</code>؛ فهي تُسأل من جديد داخل كل صندوق فيه أنواع فرعية. وليس لـ <code>AQUATIC</code> شيء خاص به أيضًا، وهذا يشير إلى الاتجاه نفسه: ينبغي أن يكون خاصية."
      }
    },

    {
      id: "t4cx11", type: "mcq", level: "medium",
      topics: ["t4-cross-cutting-attribute", "t4-minimal-repair", "t4-box-alternatives", "t4-animal-hierarchy"],
      q: {
        en: "The same zoo removes <code>AQUATIC</code> and records where each animal lives as an attribute, <code>* Habitat</code> (land, water or air). Remember that the giant octopus, an invertebrate, lives in water too. Where does <code>* Habitat</code> go?",
        ar: "تحذف الحديقة نفسها <code>AQUATIC</code> وتسجّل مكان عيش كل حيوان خاصيةً، <code>* Habitat</code> (برّ أو ماء أو هواء). وتذكّر أن الأخطبوط العملاق، وهو لافقاري، يعيش في الماء أيضًا. أين توضع <code>* Habitat</code>؟"
      },
      options: [
        { en: "In <code>ANIMAL</code>",
          ar: "في <code>ANIMAL</code>" },
        { en: "In <code>VERTEBRATE</code>, where <code>AQUATIC</code> used to be",
          ar: "في <code>VERTEBRATE</code>، حيث كان <code>AQUATIC</code>" },
        { en: "Nowhere: draw <code>AQUATIC</code> again at level 1, beside <code>VERTEBRATE</code> and <code>INVERTEBRATE</code>",
          ar: "في لا مكان: يُرسم <code>AQUATIC</code> من جديد في المستوى 1، بجانب <code>VERTEBRATE</code> و<code>INVERTEBRATE</code>" },
        { en: "In <code>OTHER</code>, which holds the fish",
          ar: "في <code>OTHER</code>، الذي يضمّ الأسماك" }
      ],
      answer: 0,
      hint: {
        en: "A cross-cutting attribute goes once, in the box that encloses every animal it applies to. Which animals have a habitat?",
        ar: "الخاصية العابرة توضع مرّة واحدة، في الصندوق الذي يحيط بكل حيوان تنطبق عليه. أيّ الحيوانات لها موطن؟"
      },
      explain: {
        en: "Every animal, vertebrate or not, has a habitat, so the attribute goes in <code>ANIMAL</code> and is inherited by every box. <code>VERTEBRATE</code> is tempting because that is where the bad box was, but it would leave the octopus with no habitat. Moving <code>AQUATIC</code> up a level only moves the overlap: a dolphin would be <code>VERTEBRATE</code> and <code>AQUATIC</code>. In <code>OTHER</code> it would describe fish and frogs only.",
        ar: "لكل حيوان، فقاريًّا كان أم لا، موطن، فتوضع الخاصية في <code>ANIMAL</code> ويرثها كل صندوق. و<code>VERTEBRATE</code> مغرٍ لأن الصندوق الخاطئ كان هناك، لكنه سيترك الأخطبوط بلا موطن. ورفع <code>AQUATIC</code> مستوى واحدًا ينقل التداخل فقط: سيكون الدلفين <code>VERTEBRATE</code> و<code>AQUATIC</code> معًا. وفي <code>OTHER</code> ستصف الأسماك والضفادع وحدها."
      }
    },

    {
      id: "t4cx12", type: "mcq", level: "medium",
      topics: ["t4-repeated-common-attribute", "t4-listed-once-check", "t4-card-nesting", "t4-false-alarm"],
      q: {
        en: "The shop's nested model, as text. Every card, credit or debit, has an expiry date; cash and cheques have none. A reviewer circles <code>* Expiry Date</code>. What is the right finding?",
        ar: "النموذج المتداخل للمتجر نصًّا. لكل بطاقة، ائتمانية كانت أم مدينة، تاريخ انتهاء؛ ولا تاريخ للنقد ولا للشيكات. يضع مراجع دائرة حول <code>* Expiry Date</code>. ما النتيجة الصحيحة؟"
      },
      lang: "text",
      code: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK          * Cheque Number\n  CARD           * Card Number\n    CREDIT CARD  * Instalments       * Expiry Date\n    DEBIT CARD   o Cashback Amount   * Expiry Date\n  OTHER",
      options: [
        { en: "Check 5 fails inside <code>PAYMENT</code>: lift <code>* Expiry Date</code> into <code>PAYMENT</code>",
          ar: "الفحص 5 يفشل داخل <code>PAYMENT</code>: تُرفع <code>* Expiry Date</code> إلى <code>PAYMENT</code>" },
        { en: "A false alarm, like <code>made by</code> on <code>CHECK</code> and <code>CREDIT CARD</code>: not every subtype of <code>PAYMENT</code> has it",
          ar: "إنذار كاذب، مثل <code>made by</code> على <code>CHECK</code> و<code>CREDIT CARD</code>: ليس لكل نوع فرعي من <code>PAYMENT</code>" },
        { en: "Check 5 fails inside <code>CARD</code>: list <code>* Expiry Date</code> once, in <code>CARD</code>",
          ar: "الفحص 5 يفشل داخل <code>CARD</code>: تُذكر <code>* Expiry Date</code> مرّة واحدة، في <code>CARD</code>" },
        { en: "Check 4 fails: a card with an expiry date fits both <code>CREDIT CARD</code> and <code>DEBIT CARD</code>",
          ar: "الفحص 4 يفشل: البطاقة ذات تاريخ الانتهاء تقع في <code>CREDIT CARD</code> و<code>DEBIT CARD</code> معًا" }
      ],
      answer: 2,
      hint: {
        en: "Check 5 is asked inside every box that has subtypes. Which box has exactly these two as its subtypes?",
        ar: "الفحص 5 يُسأل داخل كل صندوق فيه أنواع فرعية. أيّ صندوق نوعاه الفرعيان هما هذان بالضبط؟"
      },
      explain: {
        en: "Inside <code>CARD</code>, the expiry date is common to all its subtypes, so it is listed once there and inherited by both, exactly as <code>* Card Number</code> is. The false-alarm reading is tempting, because measured against <code>PAYMENT</code> the attribute is not common to all; but it is common to all of <code>CARD</code>'s subtypes, and that is the box to measure against. Lifting it to <code>PAYMENT</code> would give cash an expiry date. Siblings that share an attribute do not overlap.",
        ar: "داخل <code>CARD</code>، تاريخ الانتهاء مشترك بين كل أنواعه الفرعية، فيُذكر هناك مرّة واحدة ويرثه الاثنان، تمامًا كـ <code>* Card Number</code>. وقراءة الإنذار الكاذب مغرية، لأن الخاصية إذا قيست بـ <code>PAYMENT</code> ليست مشتركة بين الجميع؛ لكنها مشتركة بين كل أنواع <code>CARD</code> الفرعية، وهذا هو الصندوق الذي يُقاس عليه. ورفعها إلى <code>PAYMENT</code> يعطي النقد تاريخ انتهاء. والإخوة الذين يشتركون في خاصية لا يتداخلون."
      }
    },

    {
      id: "t4cx13", type: "tf", level: "hard",
      topics: ["t4-rules-every-level", "t4-exhaustive", "t4-inheritance-chain", "t4-card-nesting"],
      q: {
        en: "The shop's nested model has <code>CREDIT CARD</code> and <code>DEBIT CARD</code> inside <code>CARD</code>, and <code>OTHER</code> at level 1 beside <code>CASH</code>, <code>CHECK</code> and <code>CARD</code>. It now accepts prepaid cards: each has a card number and is made by a customer, and is neither credit nor debit. The model needs no change, because the <code>OTHER</code> at level 1 already holds every payment the named boxes do not.",
        ar: "في نموذج المتجر المتداخل <code>CREDIT CARD</code> و<code>DEBIT CARD</code> داخل <code>CARD</code>، و<code>OTHER</code> في المستوى 1 بجانب <code>CASH</code> و<code>CHECK</code> و<code>CARD</code>. وصار المتجر يقبل البطاقات المسبقة الدفع: لكلٍّ منها رقم بطاقة ويدفع بها زبون، وليست ائتمانية ولا مدينة. لا يحتاج النموذج إلى تغيير، لأن <code>OTHER</code> في المستوى 1 يحتوي أصلًا كل دفعة لا تقع في الصناديق المسمّاة."
      },
      truth: false,
      hint: {
        en: "If a prepaid payment is filed in the level-1 <code>OTHER</code>, which box is it no longer inside, and what does it lose by that?",
        ar: "إذا وُضعت الدفعة المسبقة في <code>OTHER</code> في المستوى 1، فداخل أيّ صندوق لم تعد، وماذا تخسر بذلك؟"
      },
      explain: {
        en: "False. A prepaid payment is a card payment, so it belongs inside <code>CARD</code>; filed in the level-1 <code>OTHER</code> it would lose the <code>* Card Number</code> and the <code>made by</code> line it really has. Inside <code>CARD</code>, the set <code>CREDIT CARD</code>, <code>DEBIT CARD</code> is no longer exhaustive, and the prepaid card is the witness. The rules are asked inside every box with subtypes: one <code>OTHER</code> covers only its own siblings. Add <code>OTHER</code> (or <code>PREPAID</code>) inside <code>CARD</code>.",
        ar: "خاطئة. الدفعة المسبقة دفعة ببطاقة، فمكانها داخل <code>CARD</code>؛ وإذا وُضعت في <code>OTHER</code> في المستوى 1 خسرت <code>* Card Number</code> وخطّ <code>made by</code> اللذين لها فعلًا. وداخل <code>CARD</code>، لم تعد المجموعة <code>CREDIT CARD</code> و<code>DEBIT CARD</code> شاملة، والبطاقة المسبقة هي الشاهد. القواعد تُسأل داخل كل صندوق فيه أنواع فرعية: و<code>OTHER</code> الواحد لا يشمل إلا إخوته. أضف <code>OTHER</code> (أو <code>PREPAID</code>) داخل <code>CARD</code>."
      }
    },

    {
      id: "t4cx14", type: "multi", level: "hard",
      topics: ["t4-two-levels", "t4-single-subtype", "t4-inheritance-chain", "t4-subtype-level"],
      q: {
        en: "In the shop's nested model, some credit card payments are made on a company card, which records <code>* Company Name</code>. A designer proposes <code>CORPORATE</code> (<code>* Company Name</code>) inside <code>CREDIT CARD</code>. Which statements are right? Choose every one.",
        ar: "في نموذج المتجر المتداخل، تُدفع بعض دفعات البطاقة الائتمانية ببطاقة شركة، يُسجَّل لها <code>* Company Name</code>. يقترح مصمّم <code>CORPORATE</code> (<code>* Company Name</code>) داخل <code>CREDIT CARD</code>. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "It breaks a rule: subtypes may not go beyond two levels",
          ar: "يخرق قاعدة: لا يجوز أن تتجاوز الأنواع الفرعية مستويين" },
        { en: "<code>CORPORATE</code> cannot sit alone inside <code>CREDIT CARD</code>; another subtype, such as <code>OTHER</code>, must hold the rest",
          ar: "لا يمكن أن يكون <code>CORPORATE</code> وحيدًا داخل <code>CREDIT CARD</code>؛ يجب أن يحتوي نوع فرعي آخر، مثل <code>OTHER</code>، الباقي" },
        { en: "A <code>CORPORATE</code> payment has a date, an amount, a card number, a customer, instalments and a company name",
          ar: "لدفعة <code>CORPORATE</code> تاريخ ومبلغ ورقم بطاقة وزبون وأقساط واسم شركة" },
        { en: "To keep two levels, draw <code>CORPORATE</code> inside <code>CARD</code> instead, beside <code>CREDIT CARD</code> and <code>DEBIT CARD</code>",
          ar: "للبقاء على مستويين، يُرسم <code>CORPORATE</code> داخل <code>CARD</code> بدلًا من ذلك، بجانب <code>CREDIT CARD</code> و<code>DEBIT CARD</code>" },
        { en: "Once it is drawn, the three rules must hold inside <code>CREDIT CARD</code> as well as inside <code>CARD</code> and <code>PAYMENT</code>",
          ar: "بعد رسمه، يجب أن تتحقّق القواعد الثلاث داخل <code>CREDIT CARD</code> كما تتحقّق داخل <code>CARD</code> و<code>PAYMENT</code>" }
      ],
      answer: [1, 2, 4],
      hint: {
        en: "Separate the guideline from the rules, walk the inheritance chain from the inside out, and ask what a corporate credit card payment would be if it sat beside <code>CREDIT CARD</code>.",
        ar: "افصل الإرشاد عن القواعد، وامشِ في سلسلة الوراثة من الداخل إلى الخارج، واسأل: ماذا تكون دفعة البطاقة الائتمانية للشركة لو وُضع <code>CORPORATE</code> بجانب <code>CREDIT CARD</code>؟"
      },
      explain: {
        en: "Two levels is advice for readability; a third level is legal when its box has something of its own, as this one does. Like any set, it needs a second subtype to contain the rest, and the three rules are asked inside <code>CREDIT CARD</code> too. It inherits from <code>CREDIT CARD</code>, <code>CARD</code> and <code>PAYMENT</code>. Moving it beside <code>CREDIT CARD</code> is the tempting shortcut, but a company credit card payment would then be in <code>CORPORATE</code> and in <code>CREDIT CARD</code> at once: rule three broken to save a level.",
        ar: "المستويان نصيحة من أجل سهولة القراءة؛ والمستوى الثالث مشروع إذا كان لصندوقه شيء خاص به، وهذا له. وككل مجموعة، يحتاج إلى نوع فرعي ثانٍ يحتوي الباقي، والقواعد الثلاث تُسأل داخل <code>CREDIT CARD</code> أيضًا. ويرث من <code>CREDIT CARD</code> و<code>CARD</code> و<code>PAYMENT</code>. ونقله بجانب <code>CREDIT CARD</code> هو الاختصار المغري، لكن دفعة بطاقة الشركة الائتمانية ستكون حينئذٍ في <code>CORPORATE</code> وفي <code>CREDIT CARD</code> معًا: خرقٌ للقاعدة الثالثة لتوفير مستوى."
      }
    },

    {
      id: "t4cx15", type: "compare", level: "hard",
      topics: ["t4-subdivision-basis", "t4-nested-subtypes", "t4-overlapping-subtypes", "t4-business-evidence"],
      q: {
        en: "The shop opens a website that takes credit cards only, and every website payment has an order reference. Two designs, as text; indentation shows nesting. Which statement is right?",
        ar: "يفتح المتجر موقعًا لا يقبل إلا البطاقات الائتمانية، ولكل دفعة عبر الموقع مرجع طلب. تصميمان نصّيان؛ والإزاحة تبيّن التداخل. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD    * Card Number\n  ONLINE         * Order Reference",
      codeB: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD    * Card Number\n    ONLINE       * Order Reference\n    OTHER",
      options: [
        { en: "A is right: <code>ONLINE</code> and <code>CREDIT CARD</code> answer different questions, so they can sit side by side",
          ar: "A صحيح: <code>ONLINE</code> و<code>CREDIT CARD</code> يجيبان عن سؤالين مختلفين، فيمكن أن يتجاورا" },
        { en: "Both overlap; the only repair is a <code>* Channel</code> attribute on <code>PAYMENT</code>, as in Lesson 3",
          ar: "كلاهما متداخل؛ والإصلاح الوحيد خاصية <code>* Channel</code> على <code>PAYMENT</code>، كما في الدرس 3" },
        { en: "B is right: every online payment is a credit card payment, so <code>ONLINE</code> is a kind of <code>CREDIT CARD</code>, and inside it one question splits the card payments with no overlap and no gap",
          ar: "B صحيح: كل دفعة عبر الموقع دفعة ببطاقة ائتمانية، فـ <code>ONLINE</code> نوع من <code>CREDIT CARD</code>، وفي داخله يقسم سؤال واحد دفعات البطاقة بلا تداخل ولا ثغرة" },
        { en: "B breaks the two-level guideline",
          ar: "B يخرق إرشاد المستويين" }
      ],
      answer: 2,
      hint: {
        en: "Lesson 3's <code>ONLINE</code> overlapped because a payment of any method could be online. What does this business say about which payments can be online?",
        ar: "تداخل <code>ONLINE</code> في الدرس 3 لأن دفعة بأيّ طريقة قد تكون عبر الموقع. ماذا يقول هذا العمل عن الدفعات التي يمكن أن تكون عبر الموقع؟"
      },
      explain: {
        en: "In A, payment 7 paid by card on the website is a <code>CREDIT CARD</code> and an <code>ONLINE</code>: rule three fails. In B every box passes the subtype decision: an online payment is a kind of card payment, has <code>* Order Reference</code> of its own, answers the one question asked inside <code>CREDIT CARD</code>, and sits at level 2. Lesson 3's <code>* Channel</code> is tempting, but there any method could be online; here only cards can, and a channel attribute would leave the order reference with no box where it is mandatory. The same box can be wrong at one level and right at another: the business decides.",
        ar: "في A، الدفعة 7 المدفوعة ببطاقة عبر الموقع <code>CREDIT CARD</code> و<code>ONLINE</code> معًا: تفشل القاعدة الثالثة. وفي B يجتاز كل صندوق قرار النوع الفرعي: الدفعة عبر الموقع نوع من الدفع بالبطاقة، ولها <code>* Order Reference</code> خاصّة بها، وتجيب عن السؤال الوحيد المطروح داخل <code>CREDIT CARD</code>، وتقع في المستوى 2. و<code>* Channel</code> في الدرس 3 مغرية، لكن أيّ طريقة هناك كانت قد تتمّ عبر الموقع؛ أمّا هنا فلا تتمّ إلا البطاقات، وخاصية القناة تترك مرجع الطلب بلا صندوق يكون فيه إلزاميًّا. الصندوق نفسه قد يكون خاطئًا في مستوى وصحيحًا في آخر: والعمل هو الذي يقرّر."
      }
    },

    {
      id: "t4cx16", type: "mcq", level: "medium",
      topics: ["t4-same-drawing-two-verdicts", "t4-business-evidence", "t4-mutually-exclusive", "t4-diagram-accuracy"],
      q: {
        en: "Two shops hand in the identical model: <code>PAYMENT</code> with <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code> (<code>* Card Number</code>) and <code>OTHER</code>. At the first, each payment is made one way. At the second, a customer may settle a purchase as one payment, part in cash and part by card. What is the verdict at the second shop?",
        ar: "يقدّم متجران النموذج نفسه تمامًا: <code>PAYMENT</code> مع <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> (<code>* Card Number</code>) و<code>OTHER</code>. في الأول تُدفع كل دفعة بطريقة واحدة. وفي الثاني يجوز للزبون أن يسدّد مشترياته دفعةً واحدة، جزء منها نقدًا وجزء ببطاقة. ما الحكم في المتجر الثاني؟"
      },
      options: [
        { en: "Sound: the drawing is the same as the first shop's, so the verdict must be the same",
          ar: "سليم: المخطّط مطابق لمخطّط المتجر الأول، فالحكم يجب أن يكون نفسه" },
        { en: "Check 3 fails: a split payment fits no box, so it belongs in <code>OTHER</code>",
          ar: "الفحص 3 يفشل: الدفعة المجزّأة لا تقع في أيّ صندوق، فمكانها <code>OTHER</code>" },
        { en: "Nothing can be judged until the tables are built and the overlap query has been run",
          ar: "لا يمكن الحكم على شيء حتى تُبنى الجداول ويُشغَّل استعلام التداخل" },
        { en: "Check 4 fails: a split payment is a <code>CASH</code> and a <code>CREDIT CARD</code> at once",
          ar: "الفحص 4 يفشل: الدفعة المجزّأة <code>CASH</code> و<code>CREDIT CARD</code> في آن واحد" }
      ],
      answer: 3,
      hint: {
        en: "Checks 1, 3 and 4 are claims about the business. Which box, or boxes, does the split payment fit?",
        ar: "الفحوص 1 و3 و4 ادّعاءات عن العمل. في أيّ صندوق، أو صناديق، تقع الدفعة المجزّأة؟"
      },
      explain: {
        en: "The split payment is partly cash and partly by card, with a card number: it fits two boxes, so rule three fails, and only at the second shop. The drawing cannot settle exclusivity; the business evidence does. Filing it in <code>OTHER</code> is tempting, but it fits boxes, too many of them, and <code>OTHER</code> would lose its card number. Waiting for the overlap query gets it backwards: the review happens on the diagram, before rows exist, and an empty result would prove nothing anyway.",
        ar: "الدفعة المجزّأة نقد في جزء منها وبطاقة في جزء آخر، ولها رقم بطاقة: فتقع في صندوقين، وتفشل القاعدة الثالثة، في المتجر الثاني وحده. المخطّط لا يحسم التنافي؛ بيّنة العمل هي التي تحسمه. ووضعها في <code>OTHER</code> مغرٍ، لكنها تقع في صناديق، بل في أكثر ممّا ينبغي، و<code>OTHER</code> سيُضيّع رقم بطاقتها. وانتظار استعلام التداخل يقلب الترتيب: المراجعة تتمّ على المخطّط، قبل وجود الصفوف، والنتيجة الفارغة لا تثبت شيئًا على أيّ حال."
      }
    },

    /* ==================================================== what the tables keep, and what they lose */
    {
      id: "t4cx17", type: "output", level: "medium",
      topics: ["t4-name-only-subtypes", "t4-wrong-tool", "t4-box-alternatives"],
      q: {
        en: "Lesson 4's <code>SMALL</code> / <code>LARGE</code> split was built anyway: <code>payments</code> holds payments 1–7 (40, 125, 310, 15, 220, 90, 60); <code>small_payments</code> holds 1, 4, 6 and 7; <code>large_payments</code> holds 2, 3 and 5. Then a typing error is fixed: <code>UPDATE payments SET amount = 120 WHERE payment_id = 6;</code>. What does the owner's report return now?",
        ar: "بُني تقسيم <code>SMALL</code> / <code>LARGE</code> من الدرس 4 رغم كل شيء: يضمّ <code>payments</code> الدفعات 1–7 (40، 125، 310، 15، 220، 90، 60)؛ و<code>small_payments</code> الدفعات 1 و4 و6 و7؛ و<code>large_payments</code> الدفعات 2 و3 و5. ثم صُحّح خطأ في الإدخال: <code>UPDATE payments SET amount = 120 WHERE payment_id = 6;</code>. ماذا يُرجع تقرير المالك الآن؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS large_count, SUM(p.amount) AS large_takings\nFROM large_payments l\nJOIN payments p ON p.payment_id = l.payment_id;",
      options: [
        { en: "<code>large_count</code> 4, <code>large_takings</code> 775", ar: "<code>large_count</code> 4، <code>large_takings</code> 775" },
        { en: "<code>large_count</code> 3, <code>large_takings</code> 655", ar: "<code>large_count</code> 3، <code>large_takings</code> 655" },
        { en: "<code>large_count</code> 3, <code>large_takings</code> 685", ar: "<code>large_count</code> 3، <code>large_takings</code> 685" },
        { en: "An error: payment 6 now breaks the rule of <code>small_payments</code>", ar: "خطأ: الدفعة 6 تخرق الآن قاعدة <code>small_payments</code>" }
      ],
      answer: 1,
      hint: {
        en: "The query reads <code>large_payments</code>. Did the <code>UPDATE</code> touch that table?",
        ar: "الاستعلام يقرأ <code>large_payments</code>. هل لمس أمر <code>UPDATE</code> ذلك الجدول؟"
      },
      explain: {
        en: "Run in alasql: 3 and 655 (payments 2, 3 and 5). Payment 6 is now 120 but still sits in <code>small_payments</code>, and nothing complains; the same question asked of <code>amount &gt;= 100</code> returns 4 and 775. The box membership was a second copy of a fact <code>* Amount</code> already holds, and the copies drifted. That is why name-only subtypes decided by another attribute are the wrong tool, even though they pass all three rules.",
        ar: "نُفّذ في alasql: 3 و655 (الدفعات 2 و3 و5). صارت الدفعة 6 بقيمة 120 لكنها ما زالت في <code>small_payments</code>، ولا شيء يعترض؛ والسؤال نفسه إذا طُرح على <code>amount &gt;= 100</code> يُرجع 4 و775. كانت عضوية الصندوق نسخة ثانية من حقيقة تحملها <code>* Amount</code> أصلًا، فافترقت النسختان. ولهذا فالأنواع الفرعية الاسمية التي تحدّدها خاصية أخرى أداة خاطئة، رغم أنها تجتاز القواعد الثلاث."
      }
    },

    {
      id: "t4cx18", type: "output", level: "hard",
      topics: ["t4-union-all-cost", "t4-separate-entities", "t4-repeated-structure"],
      q: {
        en: "The lab's way 2, a table per subtype, with one more row: payment 8, a second cash payment of 15 on 3 March (payment 4 was the first). On 3 March the shop also took card payment 3 (310). A clerk rebuilds the supertype with <code>UNION</code> instead of <code>UNION ALL</code>. What does the query return?",
        ar: "الطريقة 2 من المختبر، جدول لكل نوع فرعي، مع صفّ إضافي: الدفعة 8، دفعة نقدية ثانية بقيمة 15 في 3 آذار (وكانت الدفعة 4 الأولى). وفي 3 آذار قبض المتجر أيضًا دفعة البطاقة 3 (310). يعيد موظف بناء النوع الأعلى بـ <code>UNION</code> بدل <code>UNION ALL</code>. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS payments, SUM(amount) AS taken\nFROM (SELECT payment_date, amount FROM cash_payments\n      UNION\n      SELECT payment_date, amount FROM check_payments\n      UNION\n      SELECT payment_date, amount FROM card_payments) AS k\nWHERE payment_date = '2026-03-03';",
      options: [
        { en: "<code>payments</code> 3, <code>taken</code> 340", ar: "<code>payments</code> 3، <code>taken</code> 340" },
        { en: "<code>payments</code> 3, <code>taken</code> 325", ar: "<code>payments</code> 3، <code>taken</code> 325" },
        { en: "<code>payments</code> 2, <code>taken</code> 325", ar: "<code>payments</code> 2، <code>taken</code> 325" },
        { en: "<code>payments</code> 2, <code>taken</code> 310", ar: "<code>payments</code> 2، <code>taken</code> 310" }
      ],
      answer: 2,
      hint: {
        en: "<code>UNION</code> removes duplicate rows. Write out the rows for 3 March as the subquery selects them: which columns are there, and which are missing?",
        ar: "<code>UNION</code> يحذف الصفوف المكرّرة. اكتب صفوف 3 آذار كما يختارها الاستعلام الفرعي: أيّ الأعمدة موجودة، وأيّها غائب؟"
      },
      explain: {
        en: "Run in alasql: 2 and 325. The subquery selects only the date and the amount, so payments 4 and 8 are both <code>('2026-03-03', 15)</code>, and <code>UNION</code> merges them into one row; <code>UNION ALL</code> gives the true 3 and 340. Option \"3 and 325\" is tempting, but a row that is merged is gone, from the count and from the sum. In way 2 the supertype exists only in the query, and a query that drops <code>payment_id</code> has dropped the one thing that told two payments apart.",
        ar: "نُفّذ في alasql: 2 و325. الاستعلام الفرعي يختار التاريخ والمبلغ فقط، فتصير الدفعتان 4 و8 كلتاهما <code>('2026-03-03', 15)</code>، ويدمجهما <code>UNION</code> في صفّ واحد؛ أمّا <code>UNION ALL</code> فيعطي القيمة الصحيحة 3 و340. وخيار «3 و325» مغرٍ، لكن الصفّ المدموج يختفي من العدد ومن المجموع معًا. في الطريقة 2 لا يوجد النوع الأعلى إلا في الاستعلام، والاستعلام الذي يُسقط <code>payment_id</code> أسقط الشيء الوحيد الذي يميّز دفعة من أخرى."
      }
    },

    {
      id: "t4cx19", type: "output", level: "easy",
      topics: ["t4-separate-entities", "t4-exactly-one-reading", "t4-mutually-exclusive"],
      q: {
        en: "The lab's way 2 again: <code>cash_payments</code>, <code>check_payments</code> and <code>card_payments</code>, each with its own primary key <code>payment_id</code>. Card payment 3 (310) is stored. A clerk records a new cash payment of 60 and reuses the number 3. The manager then looks up payment 3. What comes back?",
        ar: "الطريقة 2 من المختبر مرّة أخرى: <code>cash_payments</code> و<code>check_payments</code> و<code>card_payments</code>، لكلٍّ منها مفتاحه الأساسي <code>payment_id</code>. دفعة البطاقة 3 (310) مخزّنة. يسجّل موظف دفعة نقدية جديدة بقيمة 60 ويعيد استعمال الرقم 3. ثم يبحث المدير عن الدفعة 3. ماذا يعود؟"
      },
      lang: "sql",
      code: "SELECT payment_id, amount\nFROM (SELECT payment_id, amount FROM cash_payments\n      UNION ALL\n      SELECT payment_id, amount FROM check_payments\n      UNION ALL\n      SELECT payment_id, amount FROM card_payments) AS k\nWHERE payment_id = 3;",
      options: [
        { en: "One row: 3, 310", ar: "صفّ واحد: 3، 310" },
        { en: "Nothing: the cash insert was refused as a duplicate primary key", ar: "لا شيء: رُفض الإدخال النقدي لأن المفتاح الأساسي مكرّر" },
        { en: "Two rows: 3, 60 and 3, 310", ar: "صفّان: 3، 60 و3، 310" },
        { en: "One row: 3, 60", ar: "صفّ واحد: 3، 60" }
      ],
      answer: 2,
      hint: {
        en: "A primary key is unique within its own table. Is there any table here that holds every payment?",
        ar: "المفتاح الأساسي فريد داخل جدوله فقط. هل هنا جدول يضمّ كل الدفعات؟"
      },
      explain: {
        en: "Run in alasql: two rows, (3, 60) and (3, 310). Each key is unique only inside its own table, and no table stands for <code>PAYMENT</code>, so its <code># Payment ID</code> has nowhere to be unique. The duplicate-key refusal is tempting, but it would need a payments table. \"Payment 3\" now names two payments of two kinds, and the outwards-in reading, every payment is exactly one kind, is lost.",
        ar: "نُفّذ في alasql: صفّان، (3، 60) و(3، 310). كل مفتاح فريد داخل جدوله فقط، ولا جدول يمثّل <code>PAYMENT</code>، فلا مكان يكون فيه <code># Payment ID</code> فريدًا. ورفض المفتاح المكرّر مغرٍ، لكنه يحتاج إلى جدول للدفعات. صار «الدفعة 3» اسمًا لدفعتين من نوعين، وضاعت القراءة من الخارج إلى الداخل: كل دفعة نوع واحد بالضبط."
      }
    },

    {
      id: "t4cx20", type: "contrast", level: "hard",
      topics: ["t4-foreign-key-chain", "t4-overlapping-subtypes", "t4-uncovered-instance", "t4-overlap-query"],
      q: {
        en: "The nested model built table per box: <code>payments</code>; <code>cash_payments</code>, <code>check_payments</code> and <code>card_payments</code> (with <code>card_number</code> <code>NOT NULL</code>), each keyed on <code>payment_id</code> <code>REFERENCES payments</code>; <code>credit_payments</code> and <code>debit_payments</code>, keyed on <code>payment_id</code> <code>REFERENCES card_payments</code>. Payments 1–7 are stored as in Lesson 4 (7 is Linda's debit card payment). Run each statement on its own. Is it refused, or accepted?",
        ar: "النموذج المتداخل مبنيًّا جدولًا لكل صندوق: <code>payments</code>؛ و<code>cash_payments</code> و<code>check_payments</code> و<code>card_payments</code> (مع <code>card_number</code> بقيد <code>NOT NULL</code>)، مفتاح كلٍّ منها <code>payment_id</code> بـ <code>REFERENCES payments</code>؛ و<code>credit_payments</code> و<code>debit_payments</code>، مفتاحهما <code>payment_id</code> بـ <code>REFERENCES card_payments</code>. الدفعات 1–7 مخزّنة كما في الدرس 4 (والدفعة 7 دفعة ليندا ببطاقتها المدينة). نفّذ كل عبارة وحدها. هل تُرفض أم تُقبل؟"
      },
      concepts: [
        { en: "Refused by a key or a constraint", ar: "يرفضها مفتاح أو قيد" },
        { en: "Accepted; only a query will find it", ar: "تُقبل؛ ولا يكشفها إلا استعلام" }
      ],
      rows: [
        { s: { en: "<code>INSERT INTO card_payments VALUES (99, '4111 0000 0000 0000', 1);</code> — there is no payment 99", ar: "<code>INSERT INTO card_payments VALUES (99, '4111 0000 0000 0000', 1);</code> — لا توجد دفعة 99" }, a: 0 },
        { s: { en: "<code>INSERT INTO check_payments VALUES (5, 1);</code> — payment 5 is already a card payment", ar: "<code>INSERT INTO check_payments VALUES (5, 1);</code> — الدفعة 5 دفعة بطاقة أصلًا" }, a: 1 },
        { s: { en: "<code>INSERT INTO payments VALUES (8, '2026-03-07', 50);</code> and no subtype row", ar: "<code>INSERT INTO payments VALUES (8, '2026-03-07', 50);</code> بلا أيّ صفّ في جداول الأنواع الفرعية" }, a: 1 },
        { s: { en: "<code>INSERT INTO debit_payments VALUES (1, 0);</code> — payment 1 is cash", ar: "<code>INSERT INTO debit_payments VALUES (1, 0);</code> — الدفعة 1 نقدية" }, a: 0 },
        { s: { en: "<code>INSERT INTO card_payments (payment_id, customer_id) VALUES (8, 1);</code> — no card number", ar: "<code>INSERT INTO card_payments (payment_id, customer_id) VALUES (8, 1);</code> — بلا رقم بطاقة" }, a: 0 },
        { s: { en: "<code>INSERT INTO credit_payments VALUES (7, 2);</code> — payment 7 is already a debit card payment", ar: "<code>INSERT INTO credit_payments VALUES (7, 2);</code> — الدفعة 7 دفعة بطاقة مدينة أصلًا" }, a: 1 }
      ],
      hint: {
        en: "A foreign key looks outwards, at the box around the row. Does any key look sideways, at a sibling's table, or ask whether a subtype row exists at all?",
        ar: "المفتاح الأجنبي ينظر إلى الخارج، إلى الصندوق المحيط بالصفّ. هل ينظر أيّ مفتاح جانبيًّا إلى جدول أخ، أو يسأل هل يوجد صفّ نوع فرعي أصلًا؟"
      },
      explain: {
        en: "Run in alasql. Refused: payment 99 (<code>Foreign key \"99\" not found in table \"payments\"</code>), the debit row for cash payment 1 (<code>... not found in table \"card_payments\"</code>), and the card row with no number (<code>Wrong NULL value in NOT NULL column card_number</code>). Accepted: a payment in two sibling tables, at either level, and a payment in none. The keys enforce the inwards-out reading and each box's <code>*</code>; rules two and three have no key at all, so only the coverage and overlap queries find their witnesses.",
        ar: "نُفّذ في alasql. المرفوض: الدفعة 99 (<code>Foreign key \"99\" not found in table \"payments\"</code>)، وصفّ البطاقة المدينة للدفعة النقدية 1 (<code>... not found in table \"card_payments\"</code>)، وصفّ البطاقة بلا رقم (<code>Wrong NULL value in NOT NULL column card_number</code>). والمقبول: دفعة في جدولي أخوين، في أيّ مستوى، ودفعة في لا جدول. المفاتيح تفرض القراءة من الداخل إلى الخارج وعلامة <code>*</code> في كل صندوق؛ أمّا القاعدتان الثانية والثالثة فلا مفتاح لهما أصلًا، فلا يكشف شهودهما إلا استعلاما الشمول والتداخل."
      }
    },

    {
      id: "t4cx21", type: "complete", level: "medium",
      topics: ["t4-overlap-query", "t4-rules-every-level", "t4-nested-subtypes"],
      q: {
        en: "In the same build, payment 7 has wrongly been stored in <code>credit_payments</code> as well as in <code>debit_payments</code>. Which line completes the overlap query for the boxes inside <code>CARD</code>, so that it returns payment 7 and nothing else?",
        ar: "في البناء نفسه، خُزّنت الدفعة 7 خطأً في <code>credit_payments</code> وفي <code>debit_payments</code> معًا. أيّ سطر يكمل استعلام التداخل للصناديق داخل <code>CARD</code>، بحيث يُرجع الدفعة 7 ولا شيء غيرها؟"
      },
      lang: "sql",
      code: "SELECT payment_id, COUNT(*) AS boxes\nFROM (SELECT payment_id FROM credit_payments\n      UNION ALL\n      ____) AS t\nGROUP BY payment_id\nHAVING COUNT(*) > 1;",
      options: [
        { code: "SELECT payment_id FROM card_payments" },
        { code: "SELECT payment_id FROM cash_payments" },
        { code: "SELECT payment_id FROM debit_payments" },
        { code: "SELECT payment_id FROM payments" }
      ],
      answer: 2,
      solution: {
        code: "SELECT payment_id, COUNT(*) AS boxes\nFROM (SELECT payment_id FROM credit_payments\n      UNION ALL\n      SELECT payment_id FROM debit_payments) AS t\nGROUP BY payment_id\nHAVING COUNT(*) > 1;",
        out: "payment_id | boxes\n7          | 2",
        en: "Stack the keys of the two sibling tables inside CARD, and keep any key that appears more than once.",
        ar: "اجمع مفاتيح جدولي الأخوين داخل CARD، واحتفظ بكل مفتاح يظهر أكثر من مرّة."
      },
      hint: {
        en: "Overlap is between siblings. Which table holds the sibling of <code>CREDIT CARD</code>, and which tables hold the boxes around it?",
        ar: "التداخل يكون بين الإخوة. أيّ جدول يضمّ أخا <code>CREDIT CARD</code>، وأيّ الجداول تضمّ الصناديق المحيطة به؟"
      },
      explain: {
        en: "Run in alasql: with <code>debit_payments</code> the query returns one row, 7 with 2 boxes. With <code>card_payments</code> it returns 3, 5 and 7, because every credit card payment is in <code>card_payments</code> by nesting; the same happens with <code>payments</code>. That is the tempting mistake in SQL form: counting a box and the box around it as an overlap. <code>cash_payments</code> is a sibling of <code>CARD</code>, not of <code>CREDIT CARD</code>, and returns nothing. Overlap is checked among the siblings inside one box.",
        ar: "نُفّذ في alasql: مع <code>debit_payments</code> يُرجع الاستعلام صفًّا واحدًا، 7 في صندوقين. ومع <code>card_payments</code> يُرجع 3 و5 و7، لأن كل دفعة ببطاقة ائتمانية موجودة في <code>card_payments</code> بحكم التداخل؛ والأمر نفسه مع <code>payments</code>. هذا هو الخطأ المغري في صورة SQL: عدّ الصندوق والصندوق المحيط به تداخلًا. و<code>cash_payments</code> أخٌ لـ <code>CARD</code> لا لـ <code>CREDIT CARD</code>، ولا يُرجع شيئًا. التداخل يُفحص بين الإخوة داخل صندوق واحد."
      }
    },

    {
      id: "t4cx22", type: "write", level: "hard",
      topics: ["t4-coverage-query", "t4-rules-every-level", "t4-foreign-key-chain"],
      q: {
        en: "The nested build has one new row: payment 8 (50, 7 March), a prepaid card, is in <code>payments</code> and in <code>card_payments</code>, but in neither <code>credit_payments</code> nor <code>debit_payments</code>. Write the coverage query for the level inside <code>CARD</code>: list the <code>payment_id</code> and <code>card_number</code> of every card payment that is in no subtype table of <code>CARD</code>.",
        ar: "في البناء المتداخل صفّ جديد واحد: الدفعة 8 (50، 7 آذار)، ببطاقة مسبقة الدفع، موجودة في <code>payments</code> وفي <code>card_payments</code>، لكنها ليست في <code>credit_payments</code> ولا في <code>debit_payments</code>. اكتب استعلام الشمول للمستوى الذي داخل <code>CARD</code>: اعرض <code>payment_id</code> و<code>card_number</code> لكل دفعة بطاقة ليست في أيّ جدول نوع فرعي من <code>CARD</code>."
      },
      lang: "sql",
      lines: 7,
      starter: "SELECT\nFROM card_payments c\n",
      checks: [
        { re: "\\b(FROM|JOIN)\\s+card_payments\\b", flags: "i",
          label: { en: "starts from the card payments, the box whose level is checked", ar: "يبدأ من دفعات البطاقة، الصندوق الذي يُفحص مستواه" } },
        { re: "LEFT\\s+(OUTER\\s+)?JOIN\\s+credit_payments\\b", flags: "i",
          label: { en: "LEFT JOINs credit_payments, keeping cards with no credit row", ar: "يربط credit_payments بـ LEFT JOIN، فيُبقي البطاقات التي لا صفّ ائتماني لها" } },
        { re: "LEFT\\s+(OUTER\\s+)?JOIN\\s+debit_payments\\b", flags: "i",
          label: { en: "LEFT JOINs debit_payments, keeping cards with no debit row", ar: "يربط debit_payments بـ LEFT JOIN، فيُبقي البطاقات التي لا صفّ مدينًا لها" } },
        { re: "\\bIS\\s+NULL\\b[\\s\\S]*\\bAND\\b[\\s\\S]*\\bIS\\s+NULL\\b", flags: "i",
          label: { en: "keeps only the rows that matched neither subtype (two IS NULL tests joined by AND)", ar: "لا يُبقي إلا الصفوف التي لم تطابق أيّ نوع فرعي (اختباران IS NULL يربطهما AND)" } }
      ],
      forbid: [
        { re: "\\bNOT\\s+IN\\b", flags: "i",
          label: { en: "use LEFT JOIN, not NOT IN: in this widget's alasql the NOT IN form returns the wrong rows", ar: "استعمل LEFT JOIN لا NOT IN: صيغة NOT IN في alasql في هذه الأداة تُرجع صفوفًا خاطئة" } },
        { re: "\\bFROM\\s+payments\\b(?![\\s\\S]*\\bJOIN\\s+card_payments\\b)", flags: "i",
          label: { en: "starting from payments alone would list the cash and cheque payments too: they are not in CARD", ar: "البدء من payments وحده يعرض الدفعات النقدية والشيكات أيضًا: وهي ليست في CARD" } }
      ],
      hint: {
        en: "Lesson 5's coverage query, one level down: the supertype table is now <code>card_payments</code>, and there are two subtype tables to <code>LEFT JOIN</code>.",
        ar: "استعلام الشمول من الدرس 5، لكن في مستوى أعمق: جدول النوع الأعلى الآن <code>card_payments</code>، وهناك جدولا نوعين فرعيين يُربطان بـ <code>LEFT JOIN</code>."
      },
      explain: {
        en: "Run in alasql, it returns one row: 8 and its card number, the witness that <code>CREDIT CARD</code> and <code>DEBIT CARD</code> are no longer exhaustive. The question is asked of <code>CARD</code>, so the query starts from <code>card_payments</code>; starting from <code>payments</code> would report every cash and cheque payment as uncovered. <code>NOT IN (SELECT ...)</code> looks equivalent, but here it returned 3, 5 and 8. An empty result tomorrow would not prove the set exhaustive; a row proves it is not.",
        ar: "نُفّذ في alasql فأرجع صفًّا واحدًا: 8 ورقم بطاقتها، الشاهد على أن <code>CREDIT CARD</code> و<code>DEBIT CARD</code> لم يعودا شاملين. السؤال مطروح على <code>CARD</code>، فيبدأ الاستعلام من <code>card_payments</code>؛ والبدء من <code>payments</code> يجعل كل دفعة نقدية وكل شيك غير مشمولة. وتبدو <code>NOT IN (SELECT ...)</code> مكافئة، لكنها هنا أرجعت 3 و5 و8. والنتيجة الفارغة غدًا لا تثبت أن المجموعة شاملة؛ أمّا الصفّ فيثبت أنها ليست كذلك."
      },
      solution: {
        code: "SELECT c.payment_id, c.card_number\nFROM card_payments c\nLEFT JOIN credit_payments k ON k.payment_id = c.payment_id\nLEFT JOIN debit_payments d ON d.payment_id = c.payment_id\nWHERE k.payment_id IS NULL AND d.payment_id IS NULL;",
        out: "payment_id | card_number\n8          | 6011 0000 0000 0004",
        en: "One LEFT JOIN per subtype table of CARD, and keep the card rows that found a partner in neither.",
        ar: "LEFT JOIN واحد لكل جدول نوع فرعي من CARD، ثم يُبقى على صفوف البطاقة التي لم تجد شريكًا في أيٍّ منهما."
      }
    },

    {
      id: "t4cx23", type: "match", level: "medium",
      topics: ["t4-model-review", "t4-review-order", "t4-witness-instance"],
      q: {
        en: "Each failed check leaves its own mark on the tables. Match what a developer finds in a build to the check the diagram failed.",
        ar: "كل فحص فاشل يترك أثره الخاص في الجداول. طابِق ما يجده المطوّر في البناء بالفحص الذي فشل فيه المخطّط."
      },
      leftHead: { en: "Found in the tables", ar: "ما يوجد في الجداول" },
      rightHead: { en: "Check failed", ar: "الفحص الفاشل" },
      pairs: [
        { l: { en: "<code>customers</code> keyed by <code>payment_id</code>: Linda has one row per payment", ar: "<code>customers</code> مفتاحه <code>payment_id</code>: لليندا صفّ لكل دفعة" },
          r: { en: "1 — kind of", ar: "1 — نوع من" } },
        { l: { en: "<code>payments</code> and <code>card_payments</code> only: payments 1, 2, 4 and 6 have no partner row", ar: "<code>payments</code> و<code>card_payments</code> فقط: الدفعات 1 و2 و4 و6 بلا صفّ شريك" },
          r: { en: "2 — more than one subtype", ar: "2 — أكثر من نوع فرعي واحد" } },
        { l: { en: "<code>CHECK (exam_type IN ('QUIZ', 'MIDTERM', 'FINAL'))</code> refuses the second college's lab practical", ar: "<code>CHECK (exam_type IN ('QUIZ', 'MIDTERM', 'FINAL'))</code> يرفض الامتحان العملي في الكلية الثانية" },
          r: { en: "3 — exhaustive", ar: "3 — الشمول" } },
        { l: { en: "Payment 5 is in <code>card_payments</code> and in <code>refunded_payments</code>", ar: "الدفعة 5 في <code>card_payments</code> وفي <code>refunded_payments</code>" },
          r: { en: "4 — mutually exclusive", ar: "4 — التنافي" } },
        { l: { en: "<code>paints</code>, <code>wallpapers</code>, <code>fabrics</code> and <code>others</code> each have a <code>price</code> column", ar: "لكلٍّ من <code>paints</code> و<code>wallpapers</code> و<code>fabrics</code> و<code>others</code> عمود <code>price</code>" },
          r: { en: "5 — listed once", ar: "5 — مذكور مرّة واحدة" } },
        { l: { en: "<code>small_payments</code> and <code>large_payments</code>, with no column but the key", ar: "<code>small_payments</code> و<code>large_payments</code>، بلا عمود غير المفتاح" },
          r: { en: "6 — earned", ar: "6 — الاستحقاق" } }
      ],
      hint: {
        en: "Translate each finding back to the drawing: a box that is not a payment, a lone box, a real instance with no box, an instance in two boxes, an attribute drawn in every box, a box with nothing of its own.",
        ar: "أعِد كل اكتشاف إلى المخطّط: صندوق ليس دفعة، وصندوق وحيد، ونسخة حقيقية بلا صندوق، ونسخة في صندوقين، وخاصية مرسومة في كل صندوق، وصندوق لا شيء خاص به."
      },
      explain: {
        en: "Each table shape is the diagram's defect, built. A customer table keyed by payment is <code>CUSTOMER</code> drawn inside <code>PAYMENT</code>; the unpartnered rows are the rest of a single subtype; the refusing <code>CHECK</code> is an incomplete list; the key in two tables is overlap; the repeated column is a common attribute not lifted; key-only tables are name-only subtypes. Finding these on paper is cheaper than finding them in rows, which is why the review comes before the build.",
        ar: "كل شكل من أشكال الجداول هو عيب المخطّط وقد بُني. جدول الزبائن ذو مفتاح الدفعة هو <code>CUSTOMER</code> المرسوم داخل <code>PAYMENT</code>؛ والصفوف بلا شريك هي باقي النوع الفرعي الوحيد؛ وقيد <code>CHECK</code> الرافض قائمة ناقصة؛ والمفتاح في جدولين تداخل؛ والعمود المكرّر خاصية مشتركة لم تُرفع؛ والجداول التي لا تحوي إلا المفتاح أنواع فرعية اسمية. وكشفها على الورق أرخص من كشفها في الصفوف، ولهذا تأتي المراجعة قبل البناء."
      }
    },

    {
      id: "t4cx24", type: "ordercode", level: "medium",
      topics: ["t4-minimal-repair", "t4-refund-overlap"],
      q: {
        en: "Lineup one's <code>REFUNDED</code> model was built table per box: <code>refunded_payments(payment_id, refund_date)</code> holds payment 5, refunded on 5 March. The minimal repair is version 2: a nullable <code>refund_date</code> on <code>payments</code>. Put the statements in the order that makes the repair without losing the refund, then shows it.",
        ar: "بُني نموذج <code>REFUNDED</code> من المجموعة الأولى جدولًا لكل صندوق: يضمّ <code>refunded_payments(payment_id, refund_date)</code> الدفعة 5، المستردّة في 5 آذار. والإصلاح الأصغر هو الإصدار 2: عمود <code>refund_date</code> يقبل NULL في <code>payments</code>. رتّب العبارات بالترتيب الذي يُجري الإصلاح دون أن يُضيّع الاسترداد، ثم يعرضه."
      },
      lang: "sql",
      items: [
        { code: "ALTER TABLE payments ADD COLUMN refund_date DATE;" },
        { code: "UPDATE payments SET refund_date = '2026-03-05'\nWHERE payment_id IN (SELECT payment_id FROM refunded_payments);" },
        { code: "DROP TABLE refunded_payments;" },
        { code: "SELECT payment_id, amount, refund_date\nFROM payments WHERE refund_date IS NOT NULL;" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "A value needs a column to land in, and a table must still exist while you read from it.",
        ar: "القيمة تحتاج إلى عمود تستقرّ فيه، والجدول يجب أن يبقى موجودًا ما دمت تقرأ منه."
      },
      explain: {
        en: "Run in alasql in this order, the query returns 5, 220, 2026-03-05: the refund moved, nothing was lost, and payment 5 is exactly one credit card payment again. Drop before the update and alasql answers <code>Table does not exist: refunded_payments</code>; update before the column exists and alasql reports one row updated but stores nothing, so the final query is empty. Both wrong orders lose the fact, which is the one thing a minimal repair may never do.",
        ar: "نُفّذ في alasql بهذا الترتيب فأرجع الاستعلام 5، 220، 2026-03-05: انتقل الاسترداد، ولم يضِع شيء، وعادت الدفعة 5 دفعة واحدة بالبطاقة الائتمانية بالضبط. والحذف قبل التحديث يجعل alasql يجيب <code>Table does not exist: refunded_payments</code>؛ والتحديث قبل وجود العمود يجعل alasql يقول إنه حدّث صفًّا واحدًا لكنه لا يخزّن شيئًا، فيعود الاستعلام الأخير فارغًا. كلا الترتيبين الخاطئين يُضيّع الحقيقة، وهذا بالذات ما لا يجوز للإصلاح الأصغر أبدًا."
      }
    }

  ]
};
