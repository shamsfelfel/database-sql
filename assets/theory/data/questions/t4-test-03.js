/* Question bank: T4 lesson 3 test -- The Three Rules. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-test-03"] = {
  title: { en: "Test 3 — The Three Rules", ar: "اختبار 3 — القواعد الثلاث" },
  intro: {
    en: "24 questions on lesson 3: the \"is a kind of\" test and the customer drawn inside PAYMENT, exhaustive subtypes and the OTHER subtype in WALL COVERING, mutually exclusive subtypes and the ONLINE payment that sat in two boxes, why there is never just one subtype, and all three questions run together on SNOW SPORT and on a type column. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثالث: اختبار «نوع من» والزبون المرسوم داخل PAYMENT، والأنواع الفرعية الشاملة والنوع الفرعي OTHER في WALL COVERING، والأنواع الفرعية المتنافية ودفعة ONLINE التي جلست في صندوقين، ولماذا لا يكون هناك نوع فرعي واحد أبدًا، ثم الأسئلة الثلاثة معًا على SNOW SPORT وعلى عمود النوع. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · rule one: is it a kind of? */
    {
      id: "t4l3q01", type: "tf", level: "easy", topics: ["t4-kind-of-test", "t4-related-vs-kind-of"],
      q: {
        en: "Cheque and card payments are always made by a customer, so it is correct to draw <code>CUSTOMER</code> as a box inside <code>PAYMENT</code>, next to <code>CHECK</code> and <code>CREDIT CARD</code>.",
        ar: "الدفع بالشيك وبالبطاقة يقوم به زبون دائمًا، لذلك من الصحيح أن يُرسم <code>CUSTOMER</code> صندوقًا داخل <code>PAYMENT</code>، بجانب <code>CHECK</code> و<code>CREDIT CARD</code>."
      },
      truth: false,
      hint: {
        en: "Say the inwards-out sentence with <code>CUSTOMER</code> in the first slot.",
        ar: "قل جملة «من الداخل إلى الخارج» وضع <code>CUSTOMER</code> في خانتها الأولى."
      },
      explain: {
        en: "False. \"Every CUSTOMER is a PAYMENT\" is false: a customer <em>makes</em> payments. Being related to a payment is drawn as a line between two entities; only \"a kind of\" is drawn as a box inside a box. Enclosing <code>CUSTOMER</code> would also make it inherit the payment date and amount.",
        ar: "خطأ. جملة «كل CUSTOMER هو PAYMENT» خاطئة: الزبون <em>يقوم</em> بالدفعات ولا يكون دفعة. الارتباط بالدفعة يُرسم خطًّا بين كيانين؛ أمّا «نوع من» فوحده يُرسم صندوقًا داخل صندوق. ولو أُحيط <code>CUSTOMER</code> لورث أيضًا تاريخ الدفع والمبلغ."
      }
    },
    {
      id: "t4l3q02", type: "mcq", level: "easy", topics: ["t4-kind-of-test", "t4-inwards-out-sentence", "t4-wall-covering"],
      q: {
        en: "The decorating store wants to add one more box inside <code>WALL COVERING</code>. Which one passes rule one?",
        ar: "يريد متجر الديكور أن يضيف صندوقًا آخر داخل <code>WALL COVERING</code>. أيّها يجتاز القاعدة الأولى؟"
      },
      options: [
        { en: "<code>SUPPLIER</code>, the firm the store buys its stock from", ar: "<code>SUPPLIER</code>، الشركة التي يشتري منها المتجر بضاعته" },
        { en: "<code>BRUSH</code>, used to put paint on the wall", ar: "<code>BRUSH</code>، الفرشاة التي يُوضع بها الطلاء على الجدار" },
        { en: "<code>TILE</code>, ceramic tiles fixed to a wall", ar: "<code>TILE</code>، البلاط الخزفي الذي يُثبَّت على الجدار" },
        { en: "<code>ROOM</code>, the room a customer is decorating", ar: "<code>ROOM</code>، الغرفة التي يزيّنها الزبون" }
      ],
      answer: 2,
      hint: {
        en: "For each option, is \"Every ___ is a WALL COVERING\" true for every instance?",
        ar: "لكل خيار: هل جملة «كل ___ هو WALL COVERING» صحيحة لكل نسخة؟"
      },
      explain: {
        en: "\"Every TILE is a WALL COVERING\" is true, so <code>TILE</code> may go inside. A brush is tempting because it belongs to decorating, but it applies a covering; it is not one. A supplier supplies coverings and a room receives them: both are related to <code>WALL COVERING</code>, so they are separate entities joined by lines.",
        ar: "جملة «كل TILE هو WALL COVERING» صحيحة، فيجوز أن يدخل <code>TILE</code>. الفرشاة مغرية لأنها من أدوات الديكور، لكنها تضع الكسوة ولا تكون كسوة. والمورّد يورّد الكسوات والغرفة تُكسى بها: كلاهما مرتبط بـ <code>WALL COVERING</code>، فهما كيانان منفصلان يصلهما خطّ."
      }
    },
    {
      id: "t4l3q03", type: "compare", level: "medium", topics: ["t4-related-vs-kind-of", "t4-kind-of-test"],
      q: {
        en: "Versions 1 and 2 of the customer evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر الزبون، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\n  CUSTOMER     * Name",
      codeB: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\nCUSTOMER       # Customer ID  * Name\nCHECK       -- made by / make -- CUSTOMER\nCREDIT CARD -- made by / make -- CUSTOMER",
      options: [
        { en: "A is better: it keeps everything about payments in one box and needs no relationship lines", ar: "A أفضل: يجمع كل ما يخصّ الدفعات في صندوق واحد ولا يحتاج إلى خطوط علاقات" },
        { en: "B is better: in A each customer inherits a payment ID, date and amount, so a customer who pays twice must appear twice; in B the customer is its own entity, joined by lines", ar: "B أفضل: في A يرث كل زبون معرّف دفعة وتاريخًا ومبلغًا، فالزبون الذي يدفع مرّتين يجب أن يظهر مرّتين؛ وفي B الزبون كيان مستقل يصله خطّ" },
        { en: "They say the same thing; A is only drawn more compactly", ar: "يقولان الشيء نفسه؛ A مرسوم بصورة أكثر اختصارًا فقط" },
        { en: "B is better only because A is not exhaustive: cash payments have no customer", ar: "B أفضل لسبب واحد فقط هو أن A غير شامل: الدفعات النقدية لا زبون لها" }
      ],
      answer: 1,
      hint: {
        en: "A box inside a box is a promise about inheritance. What does <code>CUSTOMER</code> inherit in A?",
        ar: "الصندوق داخل الصندوق وعدٌ بالوراثة. ماذا يرث <code>CUSTOMER</code> في A؟"
      },
      explain: {
        en: "B is right. In A, <code>CUSTOMER</code> fails rule one and, being enclosed, inherits <code># Payment ID</code>, <code>* Payment Date</code> and <code>* Amount</code>: the drawing says each customer <em>is</em> one payment, so Linda's second payment needs a second Linda. \"Not the same thing\" is the point: placement carries meaning. The exhaustive option is tempting but mixes rules; the defect in A is rule one.",
        ar: "B هو الصحيح. في A يخفق <code>CUSTOMER</code> في القاعدة الأولى، ولأنه محاط فإنه يرث <code># Payment ID</code> و<code>* Payment Date</code> و<code>* Amount</code>: فيقول الرسم إن كل زبون <em>هو</em> دفعة واحدة، وتحتاج دفعة ليندا الثانية إلى ليندا ثانية. فالرسمان لا يقولان الشيء نفسه: مكان الصندوق له معنى. وخيار الشمول مغرٍ لكنه يخلط القواعد؛ عيب A هو القاعدة الأولى."
      }
    },
    {
      id: "t4l3q04", type: "trace", level: "medium", topics: ["t4-kind-of-test", "t4-related-vs-kind-of"],
      q: {
        en: "Version 1 built as tables: <code>customers</code> is keyed on <code>payment_id</code>, which <code>REFERENCES payments(payment_id)</code>, and holds four rows (Linda for payments 2 and 5, Omar for 3 and 6). Payments 1–6 exist. Sara is a new customer who has not paid yet. What happens?",
        ar: "الإصدار 1 مبنيًّا جداولَ: مفتاح <code>customers</code> هو <code>payment_id</code>، وهو <code>REFERENCES payments(payment_id)</code>، وفيه أربعة صفوف (ليندا للدفعتين 2 و5، وعمر للدفعتين 3 و6). الدفعات 1–6 موجودة. سارة زبونة جديدة لم تدفع بعد. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO customers VALUES (99, 'Sara');\n\nSELECT COUNT(*) AS customer_rows FROM customers;",
      options: [
        { en: "The insert succeeds; customer_rows = 5", ar: "تنجح الإضافة؛ customer_rows = 5" },
        { en: "The insert is refused (Foreign key \"99\" not found in table \"payments\"); customer_rows = 4", ar: "تُرفض الإضافة (Foreign key \"99\" not found in table \"payments\")؛ customer_rows = 4" },
        { en: "The insert succeeds and creates payment 99 automatically; customer_rows = 5", ar: "تنجح الإضافة وتُنشئ الدفعة 99 تلقائيًّا؛ customer_rows = 5" },
        { en: "The insert is refused because Sara has no amount; customer_rows = 2, one per customer", ar: "تُرفض الإضافة لأن سارة بلا مبلغ؛ customer_rows = 2، صفّ لكل زبون" }
      ],
      answer: 1,
      hint: {
        en: "In this build a customer row can exist only as what?",
        ar: "في هذا البناء، بأيّ صفة فقط يمكن أن يوجد صفّ الزبون؟"
      },
      explain: {
        en: "Run in alasql: the insert is refused with <code>Foreign key \"99\" not found in table \"payments\"</code>, and the count stays 4. Because the subtype's key is a foreign key to the supertype, a customer row exists only as a payment: a customer who has not paid cannot be recorded, and the four rows hold only two people. That is rule one's defect, made concrete.",
        ar: "نُفّذ في alasql: تُرفض الإضافة برسالة <code>Foreign key \"99\" not found in table \"payments\"</code>، ويبقى العدد 4. لأن مفتاح النوع الفرعي مفتاح أجنبي إلى النوع الأعلى، فلا يوجد صفّ الزبون إلا بوصفه دفعة: الزبون الذي لم يدفع لا يمكن تسجيله، والصفوف الأربعة لا تضمّ إلا شخصين. هذا عيب القاعدة الأولى وقد صار ملموسًا."
      },
      solution: {
        out: "INSERT → Foreign key \"99\" not found in table \"payments\"\ncustomer_rows = 4",
        en: "Run in alasql against the lesson's version 1 tables.",
        ar: "نُفّذ في alasql على جداول الإصدار 1 في الدرس."
      }
    },
    {
      id: "t4l3q05", type: "output", level: "easy", topics: ["t4-related-vs-kind-of"],
      q: {
        en: "The same version 1 <code>customers</code> table: payments 2 and 5 by Linda, 3 and 6 by Omar. What does the query return?",
        ar: "جدول <code>customers</code> نفسه في الإصدار 1: الدفعتان 2 و5 لليندا، و3 و6 لعمر. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS customer_rows,\n       COUNT(DISTINCT name) AS people\nFROM customers;",
      blanks: [
        { accept: ["4"], label: { en: "customer_rows", ar: "customer_rows" } },
        { accept: ["2"], label: { en: "people", ar: "people" } }
      ],
      hint: {
        en: "In version 1, one customer row exists per what?",
        ar: "في الإصدار 1، يوجد صفّ زبون واحد لكل ماذا؟"
      },
      explain: {
        en: "4 and 2. Each customer row is one payment, so two people take four rows: Linda appears once per payment. That is the false business rule the drawing made by enclosing <code>CUSTOMER</code>. In version 2, <code>customers</code> has its own <code>customer_id</code> and holds two rows.",
        ar: "4 و2. كل صفّ زبون هو دفعة واحدة، فيشغل شخصان أربعة صفوف: تظهر ليندا مرّة لكل دفعة. هذه هي قاعدة العمل الخاطئة التي صنعها الرسم حين أحاط <code>CUSTOMER</code>. وفي الإصدار 2 يكون لـ <code>customers</code> معرّفه الخاص <code>customer_id</code> ويضمّ صفّين."
      },
      solution: {
        out: "customer_rows = 4, people = 2",
        en: "Run in alasql.",
        ar: "نُفّذ في alasql."
      }
    },
    {
      id: "t4l3q06", type: "contrast", level: "medium", topics: ["t4-related-vs-kind-of", "t4-kind-of-test", "t4-inwards-out-sentence"],
      q: {
        en: "The shop's <code>PAYMENT</code> model. Is each of these drawn as a box inside <code>PAYMENT</code>, or as a separate entity joined to it by a line?",
        ar: "نموذج <code>PAYMENT</code> في المتجر. هل يُرسم كلٌّ مما يلي صندوقًا داخل <code>PAYMENT</code>، أم كيانًا منفصلًا يصله به خطّ؟"
      },
      concepts: [
        { en: "A kind of payment: box inside", ar: "نوع من الدفع: صندوق في الداخل" },
        { en: "Related to payments: a line", ar: "مرتبط بالدفعات: خطّ" }
      ],
      rows: [
        { s: { en: "<code>CHECK</code>", ar: "<code>CHECK</code>" }, a: 0 },
        { s: { en: "<code>CUSTOMER</code>, who makes payments", ar: "<code>CUSTOMER</code>، الذي يقوم بالدفعات" }, a: 1 },
        { s: { en: "<code>WALLET</code>, payment by phone wallet", ar: "<code>WALLET</code>، الدفع بمحفظة الهاتف" }, a: 0 },
        { s: { en: "<code>RECEIPT</code>, printed for each payment", ar: "<code>RECEIPT</code>، الإيصال الذي يُطبع لكل دفعة" }, a: 1 },
        { s: { en: "<code>BANK</code>, which a cheque is drawn on", ar: "<code>BANK</code>، المصرف الذي يُسحب عليه الشيك" }, a: 1 },
        { s: { en: "<code>CREDIT CARD</code>", ar: "<code>CREDIT CARD</code>" }, a: 0 }
      ],
      hint: {
        en: "Try \"Every ___ is a PAYMENT\" on each one.",
        ar: "جرّب جملة «كل ___ هو PAYMENT» على كلٍّ منها."
      },
      explain: {
        en: "Cheque, wallet and credit-card payments are payments, so they pass rule one and go inside. A customer makes payments, a receipt is produced by one, and a bank is where a cheque is drawn: each is related to payments, never a kind of payment. \"Related to\" is a line; only \"a kind of\" is a box inside a box.",
        ar: "الدفع بالشيك وبالمحفظة وبالبطاقة كلّها دفعات، فتجتاز القاعدة الأولى وتدخل. أمّا الزبون فيقوم بالدفعات، والإيصال تُنتجه الدفعة، والمصرف هو الذي يُسحب عليه الشيك: كلٌّ منها مرتبط بالدفعات، ولا يكون نوعًا منها. «مرتبط بـ» خطّ؛ و«نوع من» وحده صندوق داخل صندوق."
      }
    },

    /* ---------------------------------------------------- 2 · rule two: exhaustive */
    {
      id: "t4l3q07", type: "tf", level: "easy", topics: ["t4-exhaustive", "t4-kind-of-test"],
      q: {
        en: "If every subtype inside a supertype passes the \"is a kind of\" test, the set of subtypes is exhaustive.",
        ar: "إذا اجتاز كل نوع فرعي داخل النوع الأعلى اختبار «نوع من»، فإن مجموعة الأنواع الفرعية شاملة."
      },
      truth: false,
      hint: {
        en: "Rule one is read inwards-out. Which direction does rule two read?",
        ar: "القاعدة الأولى تُقرأ من الداخل إلى الخارج. في أيّ اتجاه تُقرأ القاعدة الثانية؟"
      },
      explain: {
        en: "False. Version 1 of <code>WALL COVERING</code> shows it: <code>PAINT</code>, <code>WALLPAPER</code> and <code>FABRIC</code> all pass rule one, yet the ceramic tile and the oak panel fit none of them. Rule one asks about each box; rule two asks about each instance of the supertype — does every one have a box?",
        ar: "خطأ. الإصدار 1 من <code>WALL COVERING</code> يبيّن ذلك: <code>PAINT</code> و<code>WALLPAPER</code> و<code>FABRIC</code> تجتاز كلّها القاعدة الأولى، ومع ذلك لا يناسب البلاطُ الخزفي ولا لوحُ البلوط أيًّا منها. القاعدة الأولى تسأل عن كل صندوق؛ والقاعدة الثانية تسأل عن كل نسخة من النوع الأعلى: هل لكلٍّ منها صندوق؟"
      }
    },
    {
      id: "t4l3q08", type: "output", level: "medium", topics: ["t4-uncovered-instance", "t4-wall-covering", "t4-exhaustive"],
      q: {
        en: "Version 1 of <code>WALL COVERING</code> as tables: five products in <code>wall_coverings</code> (WC1 18, WC2 25, WC3 60, WC4 3, WC5 45), with WC1 in <code>paints</code>, WC2 in <code>wallpapers</code> and WC3 in <code>fabrics</code>. What does the query return?",
        ar: "الإصدار 1 من <code>WALL COVERING</code> جداولَ: خمسة منتجات في <code>wall_coverings</code> (WC1 بسعر 18، وWC2 بسعر 25، وWC3 بسعر 60، وWC4 بسعر 3، وWC5 بسعر 45)، وWC1 في <code>paints</code> وWC2 في <code>wallpapers</code> وWC3 في <code>fabrics</code>. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS uncovered, SUM(w.price) AS stock_value\nFROM wall_coverings w\nLEFT JOIN paints     p ON p.code = w.code\nLEFT JOIN wallpapers l ON l.code = w.code\nLEFT JOIN fabrics    f ON f.code = w.code\nWHERE p.code IS NULL AND l.code IS NULL AND f.code IS NULL;",
      blanks: [
        { accept: ["2"], label: { en: "uncovered", ar: "uncovered" } },
        { accept: ["48"], label: { en: "stock_value", ar: "stock_value" } }
      ],
      hint: {
        en: "Which products have no partner row in any of the three subtype tables?",
        ar: "أيّ المنتجات ليس لها صفّ مقابل في أيٍّ من جداول الأنواع الفرعية الثلاثة؟"
      },
      explain: {
        en: "2 and 48: the ceramic tile (3) and the oak panel (45). These are the uncovered instances — wall coverings with no subtype — and they prove version 1 is not exhaustive. In version 2 they belong to <code>OTHER</code>, and once they are in its table the same check finds nothing.",
        ar: "2 و48: البلاط الخزفي (3) ولوح البلوط (45). هاتان هما النسختان غير المشمولتين، أي كسوتا جدار بلا نوع فرعي، وهما دليل على أن الإصدار 1 غير شامل. في الإصدار 2 تنتميان إلى <code>OTHER</code>، وحين تدخلان جدوله لا يجد الفحص نفسه شيئًا."
      },
      solution: {
        out: "uncovered = 2, stock_value = 48",
        en: "Run in alasql against the lesson's section 2 tables.",
        ar: "نُفّذ في alasql على جداول القسم 2 في الدرس."
      }
    },
    {
      id: "t4l3q09", type: "mcq", level: "medium", topics: ["t4-uncovered-instance", "t4-exhaustive", "t4-other-subtype"],
      q: {
        en: "The shop's hierarchy is <code>PAYMENT</code> with <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>. A customer pays 30 with a gift voucher, and the clerk files it under <code>CASH</code>, \"the nearest box\". What is the result?",
        ar: "تسلسل المتجر هو <code>PAYMENT</code> وفيه <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>. يدفع زبون 30 بقسيمة هدية، فيضعها الموظف تحت <code>CASH</code>، «أقرب صندوق». ما النتيجة؟"
      },
      options: [
        { en: "Nothing is wrong: the payment has a box, so the hierarchy is now exhaustive", ar: "لا خطأ: صار للدفعة صندوق، فالتسلسل الآن شامل" },
        { en: "Rule three is broken, because the voucher is now in two subtypes", ar: "خُرقت القاعدة الثالثة، لأن القسيمة صارت في نوعين فرعيين" },
        { en: "Rule one is broken, because a gift voucher is not a kind of payment", ar: "خُرقت القاعدة الأولى، لأن قسيمة الهدية ليست نوعًا من الدفع" },
        { en: "The cash total is now wrong by 30; the real defect is that the subtypes were not exhaustive, and the repair is an <code>OTHER</code> subtype", ar: "صار مجموع النقد خاطئًا بمقدار 30؛ والعيب الحقيقي أن الأنواع الفرعية لم تكن شاملة، والإصلاح نوع فرعي <code>OTHER</code>" }
      ],
      answer: 3,
      hint: {
        en: "Before the clerk acted, which of the three questions had the voucher already failed?",
        ar: "قبل أن يتصرّف الموظف، في أيّ الأسئلة الثلاثة كانت القسيمة قد أخفقت أصلًا؟"
      },
      explain: {
        en: "Filing an uncovered instance in the nearest box hides rule two's failure and falsifies that box: the cash count now includes 30 that was never cash. A voucher payment is a payment, so rule one is fine, and it sits in one box only, so rule three is not the issue. Add <code>OTHER</code> (or a <code>VOUCHER</code> subtype if vouchers have attributes of their own).",
        ar: "وضعُ نسخة غير مشمولة في أقرب صندوق يُخفي إخفاق القاعدة الثانية ويُفسد ذلك الصندوق: صار عدّ النقد يشمل 30 لم تكن نقدًا قطّ. الدفع بالقسيمة دفعٌ، فالقاعدة الأولى سليمة، وهي في صندوق واحد فقط، فليست القاعدة الثالثة هي المشكلة. أضف <code>OTHER</code> (أو نوعًا فرعيًّا <code>VOUCHER</code> إن كانت للقسائم خصائص خاصة بها)."
      }
    },
    {
      id: "t4l3q10", type: "multi", level: "medium", topics: ["t4-other-subtype", "t4-wall-covering"],
      q: {
        en: "Version 2 of <code>WALL COVERING</code>: the supertype lists <code># Code</code>, <code>* Description</code>, <code>* Price</code>; <code>PAINT</code> has <code>* Litres</code>, <code>WALLPAPER</code> has <code>* Roll Length</code>, <code>FABRIC</code> has <code>* Material</code>, and <code>OTHER</code> lists nothing. Which of these does <code>WC4 Ceramic wall tile</code> have? Choose every one.",
        ar: "الإصدار 2 من <code>WALL COVERING</code>: يذكر النوع الأعلى <code># Code</code> و<code>* Description</code> و<code>* Price</code>؛ ولـ <code>PAINT</code> الخاصية <code>* Litres</code>، ولـ <code>WALLPAPER</code> الخاصية <code>* Roll Length</code>، ولـ <code>FABRIC</code> الخاصية <code>* Material</code>، ولا يذكر <code>OTHER</code> شيئًا. أيّ هذه يملكها <code>WC4 Ceramic wall tile</code>؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code># Code</code>", ar: "<code># Code</code>" },
        { en: "<code>* Litres</code>", ar: "<code>* Litres</code>" },
        { en: "<code>* Price</code>", ar: "<code>* Price</code>" },
        { en: "Nothing: <code>OTHER</code> lists no attributes", ar: "لا شيء: <code>OTHER</code> لا يذكر أيّ خاصية" },
        { en: "<code>* Description</code>", ar: "<code>* Description</code>" },
        { en: "<code>* Roll Length</code>", ar: "<code>* Roll Length</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "<code>OTHER</code> is a subtype like any other. From where does a subtype inherit?",
        ar: "<code>OTHER</code> نوع فرعي كسائر الأنواع الفرعية. من أين يرث النوع الفرعي؟"
      },
      explain: {
        en: "The tile has <code># Code</code>, <code>* Description</code> and <code>* Price</code>, inherited from <code>WALL COVERING</code>. An empty <code>OTHER</code> box does not mean empty instances: Lesson 2's inheritance still applies. It does not get <code>* Litres</code> or <code>* Roll Length</code>, which belong to its siblings, not to its supertype.",
        ar: "للبلاط <code># Code</code> و<code>* Description</code> و<code>* Price</code>، موروثةً من <code>WALL COVERING</code>. وصندوق <code>OTHER</code> الفارغ لا يعني نسخًا فارغة: وراثة الدرس الثاني ما زالت سارية. ولا ينال <code>* Litres</code> ولا <code>* Roll Length</code>، لأنهما لإخوته من الأنواع الفرعية لا لنوعه الأعلى."
      }
    },
    {
      id: "t4l3q11", type: "fill", level: "easy", topics: ["t4-other-subtype", "t4-exhaustive", "t4-wall-covering"],
      q: {
        en: "Complete the lecturer's <code>WALL COVERING</code> hierarchy, then name the rule your box makes true.",
        ar: "أكمل تسلسل <code>WALL COVERING</code> كما في شرائح المحاضِرة، ثم سمِّ القاعدة التي يجعلها صندوقك صحيحة."
      },
      lang: "text",
      code: "WALL COVERING   # Code  * Description  * Price\n  PAINT         * Litres\n  WALLPAPER     * Roll Length\n  FABRIC        * Material\n  ____1____\n\nWith that box the subtypes are ____2____:\nevery WALL COVERING fits at least one of them.",
      blanks: [
        { accept: ["OTHER", "other"], label: { en: "1", ar: "1" } },
        { accept: ["exhaustive", "Exhaustive", "EXHAUSTIVE", "شاملة"], label: { en: "2", ar: "2" } }
      ],
      hint: {
        en: "The slides call this box good practice at the conceptual modeling stage.",
        ar: "تسمّي الشرائح هذا الصندوق ممارسةً جيدة في مرحلة النمذجة المفاهيمية."
      },
      explain: {
        en: "<code>OTHER</code>, and exhaustive. The slides: <em>it is good practice to include an OTHER subtype to make sure that your subtypes are exhaustive</em>. It takes the tile, the wood panel and whatever the store stocks next year, without changing the named subtypes.",
        ar: "<code>OTHER</code>، والشمول (exhaustive). تقول الشرائح: <em>من الممارسة الجيدة إضافة نوع فرعي OTHER للتأكّد من أن الأنواع الفرعية شاملة</em>. فهو يأخذ البلاط ولوح الخشب وكل ما سيبيعه المتجر في العام القادم، من غير أن تتغيّر الأنواع الفرعية المسمّاة."
      },
      solution: {
        en: "1 = OTHER, 2 = exhaustive.",
        ar: "1 = OTHER، 2 = exhaustive (شاملة)."
      }
    },

    /* ---------------------------------------------------- 3 · rule three: mutually exclusive */
    {
      id: "t4l3q12", type: "mcq", level: "easy", topics: ["t4-mutually-exclusive", "t4-overlapping-subtypes"],
      q: {
        en: "<code>PAYMENT</code> has <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code> and <code>ONLINE</code> (<code>* Order Reference</code>). On 5 March Omar pays 75 by credit card through the shop's website. Where does payment 7 belong?",
        ar: "في <code>PAYMENT</code> الأنواع <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> و<code>ONLINE</code> (<code>* Order Reference</code>). في 5 آذار يدفع عمر 75 ببطاقة ائتمان عبر موقع المتجر. أين تنتمي الدفعة 7؟"
      },
      options: [
        { en: "In both <code>CREDIT CARD</code> and <code>ONLINE</code>, so the subtypes are not mutually exclusive", ar: "في <code>CREDIT CARD</code> و<code>ONLINE</code> معًا، فالأنواع الفرعية غير متنافية" },
        { en: "Only in <code>ONLINE</code>, because the more specific box wins", ar: "في <code>ONLINE</code> وحده، لأن الصندوق الأدقّ هو الذي يغلب" },
        { en: "In no subtype, so the hierarchy is not exhaustive", ar: "في لا نوع فرعي، فالتسلسل غير شامل" },
        { en: "Only in <code>CREDIT CARD</code>; <code>ONLINE</code> fails rule one", ar: "في <code>CREDIT CARD</code> وحده؛ و<code>ONLINE</code> يخفق في القاعدة الأولى" }
      ],
      answer: 0,
      hint: {
        en: "Ask both questions of payment 7: how did Omar pay, and where?",
        ar: "اسأل الدفعة 7 سؤالين: كيف دفع عمر، وأين دفع؟"
      },
      explain: {
        en: "It is both, and that is the defect: rule three asks whether each instance fits one and only one subtype. Choosing \"the more specific box\" is a clerk's habit, not a rule in the model, and would lose the card number. <code>ONLINE</code> does pass rule one — an online payment is a payment — and the set is exhaustive; only rule three fails.",
        ar: "إنها في الاثنين، وهذا هو العيب: القاعدة الثالثة تسأل هل تناسب كل نسخة نوعًا فرعيًّا واحدًا فقط. واختيار «الصندوق الأدقّ» عادةٌ عند الموظف لا قاعدة في النموذج، ويُضيّع رقم البطاقة. و<code>ONLINE</code> يجتاز القاعدة الأولى، فالدفع عبر الإنترنت دفعٌ، والمجموعة شاملة؛ الذي يخفق هو القاعدة الثالثة وحدها."
      }
    },
    {
      id: "t4l3q13", type: "output", level: "hard", topics: ["t4-overlapping-subtypes", "t4-mutually-exclusive"],
      q: {
        en: "The lesson's section 3 tables: <code>payments</code> holds payments 1–7 (40, 125, 310, 15, 220, 90, 75). Cash 1, 4; cheque 2, 6; card 3, 5, 7; and payment 7 is also in <code>online_payments</code>. What do the two queries return?",
        ar: "جداول القسم 3 في الدرس: يحمل <code>payments</code> الدفعات 1–7 (40، 125، 310، 15، 220، 90، 75). النقد 1 و4؛ والشيك 2 و6؛ والبطاقة 3 و5 و7؛ والدفعة 7 أيضًا في <code>online_payments</code>. ماذا يُرجع الاستعلامان؟"
      },
      lang: "sql",
      code: "SELECT SUM(amount) AS till FROM payments;\n\nSELECT SUM(p.amount) AS by_kinds\nFROM payments p\nJOIN (SELECT payment_id FROM cash_payments\n      UNION ALL SELECT payment_id FROM check_payments\n      UNION ALL SELECT payment_id FROM card_payments\n      UNION ALL SELECT payment_id FROM online_payments) AS k\n  ON k.payment_id = p.payment_id;",
      blanks: [
        { accept: ["875"], label: { en: "till", ar: "till" } },
        { accept: ["950"], label: { en: "by_kinds", ar: "by_kinds" } }
      ],
      hint: {
        en: "The second query adds one amount per subtype row, not per payment. How many subtype rows does payment 7 have?",
        ar: "الاستعلام الثاني يجمع مبلغًا لكل صفّ في جداول الأنواع الفرعية، لا لكل دفعة. كم صفًّا للدفعة 7 في تلك الجداول؟"
      },
      explain: {
        en: "875 and 950. The till adds each payment once. Adding up the kinds counts payment 7's 75 twice, once by card and once online. Exclusive subtypes are exactly what make \"add up the kinds\" equal \"the total\"; overlapping subtypes store one fact in two places.",
        ar: "875 و950. الصندوق يجمع كل دفعة مرّة واحدة. أمّا جمع الأنواع فيعدّ مبلغ الدفعة 7 (75) مرّتين، مرّة بالبطاقة ومرّة عبر الإنترنت. الأنواع الفرعية المتنافية هي بالضبط ما يجعل «مجموع الأنواع» يساوي «المجموع الكلّي»؛ والأنواع المتداخلة تخزّن الحقيقة الواحدة في مكانين."
      },
      solution: {
        out: "till = 875\nby_kinds = 950",
        en: "Run in alasql against the lesson's section 3 tables.",
        ar: "نُفّذ في alasql على جداول القسم 3 في الدرس."
      }
    },
    {
      id: "t4l3q14", type: "error", level: "medium", topics: ["t4-subdivision-basis", "t4-overlapping-subtypes", "t4-mutually-exclusive"],
      q: {
        en: "A teacher extends Lesson 2's <code>EXAM</code> model, as text. Some exams of every kind are now sat on a website. Which line breaks one of the three rules?",
        ar: "يوسّع معلّم نموذج <code>EXAM</code> من الدرس الثاني، نصًّا. صارت بعض الامتحانات من كل نوع تُؤدّى عبر موقع إلكتروني. أيّ سطر يخرق إحدى القواعد الثلاث؟"
      },
      lang: "text",
      code: "EXAM           # Number  * Description  * Weight  * Date\n  QUIZ\n  MIDTERM      * Grade For Oral Presentation\n  FINAL        * Extra Points For Optional Paper\n  ONLINE EXAM  * Platform\nEXAM -- taken by / take -- STUDENT",
      answer: 5,
      solution: {
        code: "EXAM           # Number  * Description  * Weight  * Date\n               o Platform\n  QUIZ\n  MIDTERM      * Grade For Oral Presentation\n  FINAL        * Extra Points For Optional Paper\nEXAM -- taken by / take -- STUDENT",
        en: "ONLINE EXAM leaves the hierarchy; the platform becomes an optional attribute of EXAM.",
        ar: "يخرج ONLINE EXAM من التسلسل؛ وتصير المنصّة خاصية اختيارية في EXAM."
      },
      hint: {
        en: "Can one exam sit in two of these boxes? What question does each box answer?",
        ar: "هل يمكن أن يجلس امتحان واحد في صندوقين من هذه؟ عن أيّ سؤال يجيب كل صندوق؟"
      },
      explain: {
        en: "Line 5. An online midterm is both a <code>MIDTERM</code> and an <code>ONLINE EXAM</code>, so rule three fails. Lines 2–4 answer \"what kind of exam?\"; line 5 answers \"where is it sat?\" — a second basis of subdivision. <code>ONLINE EXAM</code> is still a kind of exam, which is why it looks innocent. Keep one basis; the platform becomes an attribute of <code>EXAM</code>.",
        ar: "السطر 5. الامتحان النصفي عبر الإنترنت هو <code>MIDTERM</code> و<code>ONLINE EXAM</code> معًا، فتخفق القاعدة الثالثة. الأسطر 2–4 تجيب عن «أيّ نوع من الامتحانات؟»، والسطر 5 يجيب عن «أين يُؤدّى؟»: أساس تقسيم (basis of subdivision) ثانٍ. و<code>ONLINE EXAM</code> نوعٌ من الامتحان فعلًا، ولهذا يبدو بريئًا. احتفظ بأساس واحد؛ وتصير المنصّة خاصية في <code>EXAM</code>."
      }
    },
    {
      id: "t4l3q15", type: "match", level: "hard", topics: ["t4-related-vs-kind-of", "t4-other-subtype", "t4-subdivision-basis", "t4-single-subtype"],
      q: {
        en: "Match each defective hierarchy from the lesson to its repair.",
        ar: "صِل كل تسلسل معيب من الدرس بإصلاحه."
      },
      leftHead: { en: "Defect", ar: "العيب" },
      rightHead: { en: "Repair", ar: "الإصلاح" },
      pairs: [
        { l: { en: "<code>CUSTOMER</code> drawn inside <code>PAYMENT</code>", ar: "<code>CUSTOMER</code> مرسوم داخل <code>PAYMENT</code>" },
          r: { en: "Move it out as its own entity and join it with <code>made by</code> lines", ar: "إخراجه كيانًا مستقلًا ووصله بخطوط <code>made by</code>" } },
        { l: { en: "<code>WALL COVERING</code> with only <code>PAINT</code>, <code>WALLPAPER</code>, <code>FABRIC</code>", ar: "<code>WALL COVERING</code> وفيه <code>PAINT</code> و<code>WALLPAPER</code> و<code>FABRIC</code> فقط" },
          r: { en: "Add an <code>OTHER</code> subtype for the tile and the wood panel", ar: "إضافة نوع فرعي <code>OTHER</code> للبلاط ولوح الخشب" } },
        { l: { en: "<code>ONLINE</code> beside <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code>", ar: "<code>ONLINE</code> بجانب <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>" },
          r: { en: "Remove the box and make the channel an attribute of <code>PAYMENT</code>", ar: "حذف الصندوق وجعل قناة الدفع خاصية في <code>PAYMENT</code>" } },
        { l: { en: "<code>PAYMENT</code> with <code>CREDIT CARD</code> as its only subtype", ar: "<code>PAYMENT</code> ونوعه الفرعي الوحيد <code>CREDIT CARD</code>" },
          r: { en: "Create another subtype to contain the rest of the payments", ar: "إنشاء نوع فرعي آخر يحتوي باقي الدفعات" } },
        { l: { en: "<code>BRUSH</code> drawn inside <code>WALL COVERING</code>", ar: "<code>BRUSH</code> مرسوم داخل <code>WALL COVERING</code>" },
          r: { en: "Take it out of the hierarchy: it is used to apply a covering, not a kind of one", ar: "إخراجه من التسلسل: يُستعمل لوضع الكسوة وليس نوعًا منها" } }
      ],
      hint: {
        en: "Name the rule each defect breaks first; the repair follows from the rule.",
        ar: "سمِّ أولًا القاعدة التي يخرقها كل عيب؛ فالإصلاح يتبع القاعدة."
      },
      explain: {
        en: "<code>CUSTOMER</code> and <code>BRUSH</code> both fail rule one, but differently: the customer is related to payments and keeps a line to them; the brush is not part of this hierarchy at all. The three-box <code>WALL COVERING</code> fails rule two, so <code>OTHER</code> fixes it. <code>ONLINE</code> fails rule three, which <code>OTHER</code> cannot fix: a second basis becomes an attribute. A single subtype needs another subtype for the rest.",
        ar: "<code>CUSTOMER</code> و<code>BRUSH</code> يخفقان كلاهما في القاعدة الأولى، لكن بطريقتين: الزبون مرتبط بالدفعات ويبقى له خطّ إليها؛ والفرشاة ليست جزءًا من هذا التسلسل أصلًا. و<code>WALL COVERING</code> بصناديقه الثلاثة يخفق في القاعدة الثانية، فيُصلحه <code>OTHER</code>. أمّا <code>ONLINE</code> فيخفق في القاعدة الثالثة، ولا يُصلحها <code>OTHER</code>: الأساس الثاني يصير خاصية. والنوع الفرعي الوحيد يحتاج نوعًا فرعيًّا آخر للباقي."
      }
    },

    /* ---------------------------------------------------- 4 · never just one subtype */
    {
      id: "t4l3q16", type: "tf", level: "medium", topics: ["t4-single-subtype", "t4-exhaustive"],
      q: {
        en: "A single subtype is acceptable when the other instances have nothing special to record: <code>PAYMENT</code> may contain only <code>CREDIT CARD</code>, and cash and cheque payments simply stay in the supertype.",
        ar: "النوع الفرعي الوحيد مقبول حين لا يكون للنسخ الأخرى ما يميّزها: يجوز أن يحتوي <code>PAYMENT</code> على <code>CREDIT CARD</code> وحده، وتبقى الدفعات النقدية والشيكات في النوع الأعلى فقط."
      },
      truth: false,
      hint: {
        en: "Read the one-subtype drawing outwards-in. What does it say every payment is?",
        ar: "اقرأ رسم النوع الفرعي الوحيد من الخارج إلى الداخل. ماذا يقول عن كل دفعة؟"
      },
      explain: {
        en: "False. The slides: <em>there can never be just one subtype; another subtype should be created to contain the rest</em>. Read outwards-in, the drawing says every payment is a credit card, and four of the six payments have no box. \"Nothing special to record\" is a reason for those payments to share <code>OTHER</code>, not to have no box at all.",
        ar: "خطأ. تقول الشرائح: <em>لا يمكن أبدًا أن يكون هناك نوع فرعي واحد فقط؛ يجب إنشاء نوع فرعي آخر يحتوي الباقي</em>. وحين يُقرأ الرسم من الخارج إلى الداخل يقول إن كل دفعة بطاقةُ ائتمان، وتبقى أربع من الدفعات الست بلا صندوق. و«لا شيء يميّزها» سببٌ لأن تتشارك تلك الدفعات <code>OTHER</code>، لا لأن تبقى بلا صندوق."
      }
    },
    {
      id: "t4l3q17", type: "compare", level: "medium", topics: ["t4-single-subtype", "t4-other-subtype"],
      q: {
        en: "Versions 1 and 2 of the card-only evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر «البطاقة وحدها»، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CREDIT CARD  * Card Number",
      codeB: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CREDIT CARD  * Card Number\n  OTHER",
      options: [
        { en: "A is better: <code>OTHER</code> in B is an empty box that adds nothing", ar: "A أفضل: <code>OTHER</code> في B صندوق فارغ لا يضيف شيئًا" },
        { en: "B is better, but it breaks rule three: a cheque is both an <code>OTHER</code> and a payment", ar: "B أفضل، لكنه يخرق القاعدة الثالثة: الشيك هو <code>OTHER</code> ودفعة معًا" },
        { en: "B is better: every payment is now a <code>CREDIT CARD</code> or an <code>OTHER</code> and never both; if cheques later need attributes of their own, <code>CHECK</code> leaves <code>OTHER</code> for its own box", ar: "B أفضل: كل دفعة الآن <code>CREDIT CARD</code> أو <code>OTHER</code> ولا تكون الاثنين؛ وإن احتاجت الشيكات لاحقًا إلى خصائص خاصة بها خرج <code>CHECK</code> من <code>OTHER</code> إلى صندوقه" },
        { en: "B is better only because a supertype must always have at least three subtypes", ar: "B أفضل لسبب واحد هو أن النوع الأعلى يجب أن يكون له ثلاثة أنواع فرعية على الأقل دائمًا" }
      ],
      answer: 2,
      hint: {
        en: "Where are payments 1, 2, 4 and 6 in A, and in B?",
        ar: "أين الدفعات 1 و2 و4 و6 في A، وأين هي في B؟"
      },
      explain: {
        en: "B is right: two subtypes, exhaustive and mutually exclusive, with cash and cheque payments in <code>OTHER</code>. The empty-box objection forgets that <code>OTHER</code>'s instances inherit everything from <code>PAYMENT</code>; its job is to give the rest a box. Being a payment is not a second subtype, so B does not break rule three; and the rule is \"never just one\", not \"at least three\".",
        ar: "B هو الصحيح: نوعان فرعيان، شاملان ومتنافيان، والدفعات النقدية والشيكات في <code>OTHER</code>. واعتراض «الصندوق الفارغ» ينسى أن نسخ <code>OTHER</code> ترث كل شيء من <code>PAYMENT</code>؛ ووظيفته أن يمنح الباقي صندوقًا. وكون الشيك دفعةً ليس نوعًا فرعيًّا ثانيًا، فلا يخرق B القاعدة الثالثة؛ والقاعدة «ليس نوعًا واحدًا أبدًا»، لا «ثلاثة على الأقل»."
      }
    },
    {
      id: "t4l3q18", type: "output", level: "easy", topics: ["t4-single-subtype", "t4-uncovered-instance"],
      q: {
        en: "Version 1 of the card-only model as tables: the six March payments (40, 125, 310, 15, 220, 90) in <code>payments</code>, and payments 3 and 5 in <code>card_payments</code>. What does the query return?",
        ar: "الإصدار 1 من نموذج «البطاقة وحدها» جداولَ: دفعات آذار الست (40، 125، 310، 15، 220، 90) في <code>payments</code>، والدفعتان 3 و5 في <code>card_payments</code>. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS outside, SUM(p.amount) AS taken\nFROM payments p\nLEFT JOIN card_payments c ON c.payment_id = p.payment_id\nWHERE c.payment_id IS NULL;",
      blanks: [
        { accept: ["4"], label: { en: "outside", ar: "outside" } },
        { accept: ["270"], label: { en: "taken", ar: "taken" } }
      ],
      hint: {
        en: "Which payments have no row in <code>card_payments</code>? Add their amounts.",
        ar: "أيّ الدفعات ليس لها صفّ في <code>card_payments</code>؟ اجمع مبالغها."
      },
      explain: {
        en: "4 and 270: payments 1, 2, 4 and 6 (40 + 125 + 15 + 90). They are payments the single subtype leaves without a box, and nothing in the schema says what they are. Version 2 names them: they are <code>OTHER</code>.",
        ar: "4 و270: الدفعات 1 و2 و4 و6 (40 + 125 + 15 + 90). إنها دفعات يتركها النوع الفرعي الوحيد بلا صندوق، ولا شيء في المخطّط يقول ما هي. والإصدار 2 يسمّيها: إنها <code>OTHER</code>."
      },
      solution: {
        out: "outside = 4, taken = 270",
        en: "Run in alasql against the lesson's section 4 tables.",
        ar: "نُفّذ في alasql على جداول القسم 4 في الدرس."
      }
    },

    /* ---------------------------------------------------- 5 · the three questions together */
    {
      id: "t4l3q19", type: "multi", level: "hard", topics: ["t4-three-questions", "t4-snow-sport"],
      q: {
        en: "The resort's <code>SNOW SPORT</code> has <code>SKI</code>, <code>SNOWBOARD</code>, <code>CROSS COUNTRY</code> and <code>OTHER</code>. Which changes keep all three questions answered \"yes\"? Choose every one.",
        ar: "في <code>SNOW SPORT</code> لدى المنتجع الأنواع <code>SKI</code> و<code>SNOWBOARD</code> و<code>CROSS COUNTRY</code> و<code>OTHER</code>. أيّ التعديلات تُبقي الأسئلة الثلاثة كلّها مُجابة بـ«نعم»؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Add <code>SNOWSHOE</code> with <code>* Trail Length</code>; snowshoe walks leave <code>OTHER</code> for it", ar: "إضافة <code>SNOWSHOE</code> وفيه <code>* Trail Length</code>؛ وتخرج نزهات أحذية الثلج من <code>OTHER</code> إليه" },
        { en: "Add <code>COMPETITION</code> for the sports that are raced", ar: "إضافة <code>COMPETITION</code> للرياضات التي تُقام فيها سباقات" },
        { en: "Add <code>SKI LIFT</code>, because every slope sport uses one", ar: "إضافة <code>SKI LIFT</code>، لأن كل رياضات المنحدرات تستعمل المصعد" },
        { en: "Remove <code>OTHER</code>, because the resort offers only the three named sports today", ar: "حذف <code>OTHER</code>، لأن المنتجع لا يقدّم اليوم إلا الرياضات الثلاث المسمّاة" },
        { en: "Add <code>SLEDGING</code> with <code>* Sledge Type</code>; sledging leaves <code>OTHER</code> for it", ar: "إضافة <code>SLEDGING</code> وفيه <code>* Sledge Type</code>؛ ويخرج التزلّج بالزلّاجة من <code>OTHER</code> إليه" }
      ],
      answer: [0, 4],
      hint: {
        en: "Run the three questions on each change: a kind of? every case covered? one box only?",
        ar: "طبّق الأسئلة الثلاثة على كل تعديل: نوع من؟ كل الحالات مغطّاة؟ صندوق واحد فقط؟"
      },
      explain: {
        en: "<code>SNOWSHOE</code> and <code>SLEDGING</code> are kinds of snow sport, answer the same question (\"what kind of sport?\"), and move instances out of <code>OTHER</code>, which still catches the rest. <code>COMPETITION</code> mixes a second basis, so a raced ski sport sits in two boxes (rule three). A ski lift is used by sports, not a kind of one (rule one). Removing <code>OTHER</code> risks rule two: nobody can list every sport in advance.",
        ar: "<code>SNOWSHOE</code> و<code>SLEDGING</code> نوعان من رياضات الثلج، ويجيبان عن السؤال نفسه («أيّ نوع من الرياضة؟»)، وينقلان نسخًا من <code>OTHER</code> الذي يظلّ يلتقط الباقي. أمّا <code>COMPETITION</code> فيخلط أساسًا ثانيًا، فتجلس رياضة تزلّج تُقام فيها سباقات في صندوقين (القاعدة الثالثة). والمصعد تستعمله الرياضات ولا يكون نوعًا منها (القاعدة الأولى). وحذف <code>OTHER</code> يعرّض القاعدة الثانية للخطر: لا أحد يستطيع أن يعدّد كل الرياضات مسبقًا."
      }
    },
    {
      id: "t4l3q20", type: "trace", level: "medium", topics: ["t4-type-column-check", "t4-other-subtype", "t4-snow-sport"],
      q: {
        en: "The section 5 table: <code>snow_sports</code> has <code>sport_type VARCHAR(13) NOT NULL CHECK (sport_type IN ('SKI','SNOWBOARD','CROSS COUNTRY','OTHER'))</code> and four rows, one of each type. The script runs one statement at a time. What happens?",
        ar: "جدول القسم 5: في <code>snow_sports</code> العمود <code>sport_type VARCHAR(13) NOT NULL CHECK (sport_type IN ('SKI','SNOWBOARD','CROSS COUNTRY','OTHER'))</code> وأربعة صفوف، واحد من كل نوع. يُنفَّذ السكربت عبارةً عبارة. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO snow_sports VALUES (5, 'Snowshoe walk', 'SNOWSHOE');\nINSERT INTO snow_sports VALUES (6, 'Night ski run', NULL);\nINSERT INTO snow_sports VALUES (7, 'Snowshoe walk', 'OTHER');\n\nSELECT COUNT(*) AS sports FROM snow_sports;",
      options: [
        { en: "All three inserts succeed; sports = 7", ar: "تنجح الإضافات الثلاث؛ sports = 7" },
        { en: "Row 5 is refused (Violation of CHECK constraint); rows 6 and 7 succeed; sports = 6", ar: "يُرفض الصفّ 5 (Violation of CHECK constraint)؛ وينجح 6 و7؛ sports = 6" },
        { en: "Row 5 is refused (Violation of CHECK constraint), row 6 is refused (Wrong NULL value in NOT NULL column sport_type), row 7 succeeds; sports = 5", ar: "يُرفض الصفّ 5 (Violation of CHECK constraint)، ويُرفض الصفّ 6 (Wrong NULL value in NOT NULL column sport_type)، وينجح الصفّ 7؛ sports = 5" },
        { en: "Row 7 is also refused, because 'Snowshoe walk' was already rejected once; sports = 4", ar: "يُرفض الصفّ 7 أيضًا، لأن 'Snowshoe walk' رُفض مرّة من قبل؛ sports = 4" }
      ],
      answer: 2,
      hint: {
        en: "Which part of the column enforces \"at least one type\", and which part names the allowed types?",
        ar: "أيّ جزء من العمود يفرض «نوعًا واحدًا على الأقل»، وأيّ جزء يسمّي الأنواع المسموح بها؟"
      },
      explain: {
        en: "Run in alasql: <code>'SNOWSHOE'</code> is not on the <code>CHECK</code> list, the <code>NULL</code> breaks <code>NOT NULL</code> — every sport must have a type, rule two — and <code>'OTHER'</code> is accepted, so 5 rows. The fix for an unlisted sport is not a new value but the one the model already provides. A single column also holds one value, which is rule three.",
        ar: "نُفّذ في alasql: <code>'SNOWSHOE'</code> ليست في قائمة <code>CHECK</code>، و<code>NULL</code> يخرق <code>NOT NULL</code> — فلكل رياضة نوع، وهي القاعدة الثانية — وتُقبل <code>'OTHER'</code>، فيصير العدد 5. وإصلاح الرياضة غير المدرجة ليس قيمة جديدة، بل القيمة التي يوفّرها النموذج أصلًا. والعمود الواحد يحمل قيمة واحدة، وهذه القاعدة الثالثة."
      },
      solution: {
        out: "INSERT 5 → Violation of CHECK constraint\nINSERT 6 → Wrong NULL value in NOT NULL column sport_type\nINSERT 7 → 1\nsports = 5",
        en: "Run in alasql against the lesson's section 5 table.",
        ar: "نُفّذ في alasql على جدول القسم 5 في الدرس."
      }
    },
    {
      id: "t4l3q21", type: "contrast", level: "hard", topics: ["t4-type-column-check", "t4-kind-of-test", "t4-exactly-one-reading"],
      q: {
        en: "A table with a type column, <code>NOT NULL</code> and a <code>CHECK</code> list of the subtypes. Which of these can that column enforce by itself, and which only a person reading the drawing can check?",
        ar: "جدول فيه عمود نوع، مع <code>NOT NULL</code> وقائمة <code>CHECK</code> بالأنواع الفرعية. أيّ هذه يستطيع ذلك العمود أن يفرضه وحده، وأيّها لا يفحصه إلا شخص يقرأ الرسم؟"
      },
      concepts: [
        { en: "The type column enforces it", ar: "يفرضه عمود النوع" },
        { en: "Only a person reading the drawing", ar: "شخص يقرأ الرسم فقط" }
      ],
      rows: [
        { s: { en: "Every snow sport has a type", ar: "لكل رياضة ثلج نوع" }, a: 0 },
        { s: { en: "No snow sport is both a <code>SKI</code> and a <code>SNOWBOARD</code>", ar: "لا رياضة ثلج تكون <code>SKI</code> و<code>SNOWBOARD</code> معًا" }, a: 0 },
        { s: { en: "<code>CUSTOMER</code> does not belong inside <code>PAYMENT</code>", ar: "<code>CUSTOMER</code> لا مكان له داخل <code>PAYMENT</code>" }, a: 1 },
        { s: { en: "A sport's type is one of the listed subtypes, <code>OTHER</code> included", ar: "نوع الرياضة واحد من الأنواع الفرعية المدرجة، و<code>OTHER</code> منها" }, a: 0 },
        { s: { en: "Each box on the list is a kind of snow sport", ar: "كل صندوق في القائمة نوعٌ من رياضات الثلج" }, a: 1 },
        { s: { en: "<code>BRUSH</code> is not a kind of <code>WALL COVERING</code>", ar: "<code>BRUSH</code> ليس نوعًا من <code>WALL COVERING</code>" }, a: 1 }
      ],
      hint: {
        en: "Rules two and three are about how many types each row has. Rule one is about what the types mean.",
        ar: "القاعدتان الثانية والثالثة تتعلّقان بعدد الأنواع لكل صفّ. أمّا القاعدة الأولى فتتعلّق بمعنى الأنواع."
      },
      explain: {
        en: "<code>NOT NULL</code> gives at least one type (rule two), one column holds at most one value (rule three), and the <code>CHECK</code> list fixes the allowed values. Together they make \"every snow sport is exactly one of …\" true in the table. Rule one is about meaning — is a brush a covering, is a customer a payment — and no constraint can ask that.",
        ar: "<code>NOT NULL</code> يضمن نوعًا واحدًا على الأقل (القاعدة الثانية)، والعمود الواحد يحمل قيمة واحدة على الأكثر (القاعدة الثالثة)، وقائمة <code>CHECK</code> تحدّد القيم المسموح بها. ومعًا تجعل جملة «كل رياضة ثلج هي واحد بالضبط من …» صحيحة في الجدول. أمّا القاعدة الأولى فتتعلّق بالمعنى — هل الفرشاة كسوة، وهل الزبون دفعة — ولا يستطيع أيّ قيد أن يسأل ذلك."
      }
    },
    {
      id: "t4l3q22", type: "write", level: "hard", topics: ["t4-type-column-check", "t4-single-subtype", "t4-other-subtype"],
      q: {
        en: "Build version 2 of the card-only model as one table: write <code>CREATE TABLE payments</code> with <code>payment_id</code>, <code>payment_date</code>, <code>amount</code>, and a <code>payment_type</code> column that every payment must have and that accepts only <code>'CARD'</code> or <code>'OTHER'</code>.",
        ar: "ابنِ الإصدار 2 من نموذج «البطاقة وحدها» جدولًا واحدًا: اكتب <code>CREATE TABLE payments</code> بالأعمدة <code>payment_id</code> و<code>payment_date</code> و<code>amount</code>، وعمود <code>payment_type</code> يجب أن يكون لكل دفعة ولا يقبل إلا <code>'CARD'</code> أو <code>'OTHER'</code>."
      },
      lang: "sql",
      lines: 7,
      starter: "CREATE TABLE payments (\n  payment_id   NUMBER PRIMARY KEY,\n  payment_date DATE NOT NULL,\n  amount       NUMBER NOT NULL,\n  \n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+payments\\s*\\(", flags: "i",
          label: { en: "creates the table payments", ar: "يُنشئ الجدول payments" } },
        { re: "\\bpayment_type\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s*(NOT\\s+NULL|CHECK\\s*\\([^)]*\\)\\s*\\)?\\s*NOT\\s+NULL)", flags: "i",
          label: { en: "payment_type is NOT NULL: every payment has a box (rule two)", ar: "payment_type من نوع NOT NULL: لكل دفعة صندوق (القاعدة الثانية)" } },
        { re: "CHECK\\s*\\(\\s*payment_type\\s+IN\\s*\\(", flags: "i",
          label: { en: "a CHECK limits payment_type to a list", ar: "قيد CHECK يحصر payment_type في قائمة" } },
        { re: "IN\\s*\\([^)]*[\"']CARD[\"']", flags: "i",
          label: { en: "the list contains 'CARD'", ar: "القائمة تتضمّن 'CARD'" } },
        { re: "IN\\s*\\([^)]*[\"']OTHER[\"']", flags: "i",
          label: { en: "the list contains 'OTHER': the rest of the payments have a subtype", ar: "القائمة تتضمّن 'OTHER': لباقي الدفعات نوع فرعي" } }
      ],
      forbid: [
        { re: "[\"'](CASH|CHECK|CHEQUE)[\"']", flags: "i",
          label: { en: "version 2 has two subtypes; cash and cheque payments are OTHER, not values of their own", ar: "للإصدار 2 نوعان فرعيان؛ الدفعات النقدية والشيكات هي OTHER، لا قيم مستقلة" } }
      ],
      solution: {
        code: "CREATE TABLE payments (\n  payment_id   NUMBER PRIMARY KEY,\n  payment_date DATE NOT NULL,\n  amount       NUMBER NOT NULL,\n  payment_type VARCHAR(5) NOT NULL CHECK (payment_type IN ('CARD', 'OTHER'))\n);",
        en: "Run in alasql: rows with 'OTHER' and 'CARD' are accepted; 'CASH' is refused (Violation of CHECK constraint); NULL is refused (Wrong NULL value in NOT NULL column payment_type).",
        ar: "نُفّذ في alasql: تُقبل الصفوف ذات 'OTHER' و'CARD'؛ وتُرفض 'CASH' (Violation of CHECK constraint)؛ ويُرفض NULL (Wrong NULL value in NOT NULL column payment_type)."
      },
      hint: {
        en: "Two constraints on one column: one for \"at least one type\", one for the list of subtypes.",
        ar: "قيدان على عمود واحد: أحدهما لـ«نوع واحد على الأقل»، والآخر لقائمة الأنواع الفرعية."
      },
      explain: {
        en: "<code>NOT NULL</code> makes every payment have a type (exhaustive); a single column gives it at most one (exclusive); the <code>CHECK</code> list holds the two subtypes, <code>OTHER</code> included. Listing <code>'CASH'</code> and <code>'CHECK'</code> as well is tempting, but that is Lesson 2's three-subtype model, not version 2: here they share <code>OTHER</code>.",
        ar: "<code>NOT NULL</code> يجعل لكل دفعة نوعًا (الشمول)؛ والعمود الواحد يمنحها نوعًا واحدًا على الأكثر (التنافي)؛ وقائمة <code>CHECK</code> تحمل النوعين الفرعيين، و<code>OTHER</code> منهما. وإدراج <code>'CASH'</code> و<code>'CHECK'</code> أيضًا مغرٍ، لكنه نموذج الأنواع الثلاثة في الدرس الثاني لا الإصدار 2: هنا يتشاركان <code>OTHER</code>."
      }
    },
    {
      id: "t4l3q23", type: "complete", level: "easy", topics: ["t4-exactly-one-reading", "t4-snow-sport", "t4-three-questions"],
      q: {
        en: "Rules two and three together make the outwards-in reading of <code>SNOW SPORT</code> true. Which word completes it?",
        ar: "القاعدتان الثانية والثالثة معًا تجعلان قراءة <code>SNOW SPORT</code> من الخارج إلى الداخل صحيحة. أيّ كلمة تُكملها؟"
      },
      lang: "erdish",
      code: "Every SNOW SPORT is ____ one of SKI, SNOWBOARD, CROSS COUNTRY or OTHER.",
      options: [
        { code: "at least" },
        { code: "at most" },
        { code: "possibly more than" },
        { code: "exactly" }
      ],
      answer: 3,
      hint: {
        en: "One rule gives \"at least one\", the other \"at most one\".",
        ar: "إحدى القاعدتين تعطي «واحدًا على الأقل»، والأخرى «واحدًا على الأكثر»."
      },
      explain: {
        en: "Exactly. Exhaustive means at least one subtype; mutually exclusive means at most one. Choosing \"at least\" keeps only rule two and would allow payment 7's double box; \"at most\" keeps only rule three and would allow the uncovered tile.",
        ar: "«بالضبط» (exactly). الشمول يعني نوعًا فرعيًّا واحدًا على الأقل؛ والتنافي يعني واحدًا على الأكثر. واختيار «على الأقل» يُبقي القاعدة الثانية وحدها ويسمح بصندوقَي الدفعة 7؛ و«على الأكثر» يُبقي القاعدة الثالثة وحدها ويسمح بالبلاط غير المشمول."
      },
      solution: {
        code: "Every SNOW SPORT is exactly one of SKI, SNOWBOARD, CROSS COUNTRY or OTHER.",
        en: "As in the lesson's section 5.",
        ar: "كما في القسم 5 من الدرس."
      }
    },
    {
      id: "t4l3q24", type: "mcq", level: "hard", topics: ["t4-three-questions", "t4-subdivision-basis", "t4-mutually-exclusive"],
      q: {
        en: "A manager wants to spot big payments and draws <code>PAYMENT</code> with <code>CASH</code>, <code>CHECK</code>, <code>CREDIT CARD</code>, <code>LARGE PAYMENT</code> (amount over 200) and <code>OTHER</code>. Run the three questions. What is the verdict?",
        ar: "يريد مدير أن يرصد الدفعات الكبيرة، فيرسم <code>PAYMENT</code> وفيه <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> و<code>LARGE PAYMENT</code> (مبلغ فوق 200) و<code>OTHER</code>. طبّق الأسئلة الثلاثة. ما الحكم؟"
      },
      options: [
        { en: "It fails rule one: a large payment is not a kind of payment", ar: "يخفق في القاعدة الأولى: الدفعة الكبيرة ليست نوعًا من الدفع" },
        { en: "It fails rule three: card payment 3 (310) is both a <code>CREDIT CARD</code> and a <code>LARGE PAYMENT</code>; size is already the <code>* Amount</code> attribute, so the box should go", ar: "يخفق في القاعدة الثالثة: دفعة البطاقة 3 (310) هي <code>CREDIT CARD</code> و<code>LARGE PAYMENT</code> معًا؛ والحجم موجود أصلًا في الخاصية <code>* Amount</code>، فيجب حذف الصندوق" },
        { en: "It fails rule two: small payments under 200 have no box", ar: "يخفق في القاعدة الثانية: الدفعات الصغيرة تحت 200 لا صندوق لها" },
        { en: "It passes: every box is a kind of payment and <code>OTHER</code> makes it exhaustive", ar: "يجتاز: كل صندوق نوع من الدفع و<code>OTHER</code> يجعله شاملًا" }
      ],
      answer: 1,
      hint: {
        en: "Place payment 3 (310, by card). Then ask what question <code>LARGE PAYMENT</code> answers.",
        ar: "ضع الدفعة 3 (310، بالبطاقة) في مكانها. ثم اسأل: عن أيّ سؤال يجيب <code>LARGE PAYMENT</code>؟"
      },
      explain: {
        en: "Rules one and two pass — a large payment is a payment, and <code>OTHER</code> catches the rest — which is why \"it passes\" is tempting. But \"how was it paid?\" and \"how big is it?\" are two bases, so payment 3 sits in two boxes and the totals double-count. A model can pass two questions and fail the third; run all three every time. The size is already in <code>* Amount</code>.",
        ar: "القاعدتان الأولى والثانية سليمتان — الدفعة الكبيرة دفعة، و<code>OTHER</code> يلتقط الباقي — ولهذا يُغري خيار «يجتاز». لكن «كيف دُفعت؟» و«ما حجمها؟» أساسان اثنان، فتجلس الدفعة 3 في صندوقين وتُعدّ مرّتين في المجاميع. قد يجتاز النموذج سؤالين ويخفق في الثالث؛ فطبّق الثلاثة في كل مرّة. والحجم موجود أصلًا في <code>* Amount</code>."
      }
    }

  ]
};
