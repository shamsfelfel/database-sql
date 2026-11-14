/* Question bank: T4 lesson 1 test -- When One Entity Is Really Several. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-test-01"] = {
  title: { en: "Test 1 — When One Entity Is Really Several", ar: "اختبار 1 — حين يكون الكيان الواحد عدّة كيانات" },
  intro: {
    en: "24 questions on lesson 1: common attributes and special properties, \"not applicable\" versus \"unknown\", the single PAYMENT entity and the rules it hides, three separate entities and the structure they repeat, kinds drawn inside one entity, what a fourth payment method costs each design, and when a choice in the business is a reason to subdivide. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الأول: الخصائص المشتركة والسمات الخاصّة، و«غير منطبقة» مقابل «مجهولة»، والكيان الواحد PAYMENT والقواعد التي يُخفيها، والكيانات الثلاثة المنفصلة والبنية التي تكرّرها، والأنواع المرسومة داخل كيان واحد، وما تكلّفه طريقةُ دفعٍ رابعة كلَّ تصميم، ومتى يكون الخيار في العمل سببًا للتقسيم. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · some payments are not like the others */
    {
      id: "t4l1q01", type: "tf", level: "easy", topics: ["t4-not-applicable", "t4-special-property"],
      q: {
        en: "Payment 1 was paid in cash and its card number is empty. Like a member who has not given a phone number yet, the value is simply missing and may be filled in later.",
        ar: "الدفعة 1 مدفوعة نقدًا ورقم بطاقتها فارغ. فهي كالعضو الذي لم يعطِ رقم هاتفه بعد: القيمة ناقصة فحسب، وقد تُملأ لاحقًا."
      },
      truth: false,
      hint: {
        en: "Could any later fact about payment 1 ever give it a card number?",
        ar: "هل يمكن لأيّ حقيقة لاحقة عن الدفعة 1 أن تمنحها رقم بطاقة يومًا؟"
      },
      explain: {
        en: "False. The phone number is unknown: it exists and we have not been told it. A cash payment's card number is not applicable: the attribute does not belong to that kind of payment, so its emptiness is a rule, not a gap in what we know. That difference is the first sign that cash and card payments are different kinds of thing.",
        ar: "خطأ. رقم الهاتف مجهول: موجود لكن لم يُخبرنا به أحد. أمّا رقم البطاقة في دفعة نقدية فغير منطبق (not applicable): الخاصية لا تنتمي إلى هذا النوع من الدفعات أصلًا، ففراغها قاعدة لا نقص في معرفتنا. وهذا الفرق أول علامة على أن الدفعة النقدية ودفعة البطاقة نوعان مختلفان من الأشياء."
      }
    },
    {
      id: "t4l1q02", type: "contrast", level: "easy", topics: ["t4-common-attribute", "t4-special-property"],
      q: {
        en: "Each item is a fact the shop keeps about its payments. Is it a common attribute, or a special property of only some payments?",
        ar: "كل بند حقيقة يحفظها المتجر عن مدفوعاته. هل هو خاصية مشتركة، أم سمة خاصّة ببعض المدفوعات فقط؟"
      },
      concepts: [
        { en: "Common attribute — every payment has it", ar: "خاصية مشتركة (common attribute) — لكل دفعة" },
        { en: "Special property — only some kinds have it", ar: "سمة خاصّة (special property) — لبعض الأنواع فقط" }
      ],
      rows: [
        { s: { en: "<code>Payment Date</code>", ar: "<code>Payment Date</code>" }, a: 0 },
        { s: { en: "<code>Card Number</code>", ar: "<code>Card Number</code>" }, a: 1 },
        { s: { en: "<code>Amount</code>", ar: "<code>Amount</code>" }, a: 0 },
        { s: { en: "Being made by a <code>CUSTOMER</code>", ar: "أن يقوم بها زبون <code>CUSTOMER</code>" }, a: 1 },
        { s: { en: "<code>Payment ID</code>", ar: "<code>Payment ID</code>" }, a: 0 },
        { s: { en: "<code>Wallet ID</code>, once mobile wallets arrive", ar: "<code>Wallet ID</code>، بعد وصول المحافظ الإلكترونية" }, a: 1 }
      ],
      hint: {
        en: "Ask of each fact: does a cash payment have it too?",
        ar: "اسأل عن كل حقيقة: هل للدفعة النقدية مثلها أيضًا؟"
      },
      explain: {
        en: "Date, amount and ID belong to every payment, whatever its method. Card number belongs only to card payments, wallet ID only to wallet payments, and the customer only to cheque, card and wallet payments. The one people miss is the customer: a special property can be a relationship, not only an attribute — the slides say \"attributes and/or relationships\".",
        ar: "التاريخ والمبلغ والرقم لكل دفعة، أيًّا كانت طريقتها. أمّا رقم البطاقة فلدفعات البطاقة وحدها، ورقم المحفظة لدفعات المحفظة وحدها، والزبون لدفعات الشيك والبطاقة والمحفظة فقط. والبند الذي يفوت كثيرين هو الزبون: السمة الخاصّة قد تكون علاقة لا خاصية فقط — فالشرائح تقول «خصائص و/أو علاقات»."
      }
    },
    {
      id: "t4l1q03", type: "multi", level: "medium", topics: ["t4-instances-differ", "t4-special-property", "t4-not-applicable"],
      q: {
        en: "The shop's six payments as instances. Which statements are right? Choose every one.",
        ar: "مدفوعات المتجر الست بوصفها نُسَخًا (instances). أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "ID | Date       | Amount | Method      | Card Number         | Customer\n1  | 2026-03-02 |  40    | cash        |                     |\n2  | 2026-03-02 | 125    | check       |                     | Linda\n3  | 2026-03-03 | 310    | credit card | 4111 1111 1111 1111 | Omar\n4  | 2026-03-03 |  15    | cash        |                     |\n5  | 2026-03-04 | 220    | credit card | 5500 0000 0000 0004 | Linda\n6  | 2026-03-04 |  90    | check       |                     | Omar",
      options: [
        { en: "The empty cells are not scattered: they line up exactly with the method", ar: "الخلايا الفارغة ليست مبعثرة: إنها تتبع الطريقة بالضبط" },
        { en: "Amount is a special property, because its value differs from row to row", ar: "Amount سمة خاصّة، لأن قيمتها تختلف من صفّ إلى صفّ" },
        { en: "Card Number is a special property of credit card payments only", ar: "Card Number سمة خاصّة بدفعات البطاقة الائتمانية وحدها" },
        { en: "Being made by a CUSTOMER is a special property of cheque and card payments", ar: "أن يقوم بالدفعة زبون CUSTOMER سمةٌ خاصّة بدفعات الشيك والبطاقة" },
        { en: "Payment 4's card number is unknown, and may be filled in once the cashier finds it", ar: "رقم بطاقة الدفعة 4 مجهول، وقد يُملأ حين يجده أمين الصندوق" },
        { en: "The customer column cannot be a special property, because a special property is always an attribute", ar: "عمود الزبون لا يمكن أن يكون سمة خاصّة، لأن السمة الخاصّة دائمًا خاصية" }
      ],
      answer: [0, 2, 3],
      hint: {
        en: "A special property is an attribute or relationship that some kinds have and others lack — not a value that changes.",
        ar: "السمة الخاصّة خاصية أو علاقة تملكها بعض الأنواع وتفتقدها أخرى — لا قيمة تتغيّر."
      },
      explain: {
        en: "Every row has an amount, so Amount is common; different values are just different instances. Card Number exists only for card rows, and the customer only for cheque and card rows, so both are special — one an attribute, one a relationship. Payment 4 is cash, so its card number is not applicable, never \"to be found\". The gaps following the method is the whole signal.",
        ar: "لكل صفّ مبلغ، فـ Amount مشتركة؛ واختلاف القيم يعني فقط اختلاف النُّسَخ. أمّا Card Number فلا توجد إلا لصفوف البطاقة، والزبون لا يوجد إلا لصفوف الشيك والبطاقة، فكلاهما خاصّ — الأول خاصية والثاني علاقة. والدفعة 4 نقدية، فرقم بطاقتها غير منطبق، لا «سيُعثر عليه». وتَتبُّع الفراغات للطريقة هو الإشارة كلها."
      }
    },
    {
      id: "t4l1q04", type: "output", level: "easy", topics: ["t4-instances-differ", "t4-not-applicable"],
      q: {
        en: "The six payments are stored in one payments table: cash 1 and 4, cheques 2 and 6, card payments 3 and 5. card_number is filled only for card payments. What number does the query return?",
        ar: "خُزّنت المدفوعات الست في جدول واحد payments: النقدية 1 و4، والشيكات 2 و6، ودفعات البطاقة 3 و5. ولا يُملأ card_number إلا لدفعات البطاقة. ما العدد الذي يُرجعه الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS no_card\nFROM payments\nWHERE card_number IS NULL;",
      blanks: [{ accept: ["4"], label: { en: "no_card", ar: "no_card" } }],
      hint: {
        en: "Which kinds of payment have no card at all, and how many of each are there?",
        ar: "أيّ أنواع المدفوعات لا بطاقة لها أصلًا، وكم دفعة من كل نوع؟"
      },
      explain: {
        en: "4: the two cash payments and the two cheques. None of the four is a missing value; each is a payment of a kind that has no card. In one table this rule shows up only as empty cells, and a column that is empty for whole kinds of row is the table's way of saying \"this belongs to only some of you\".",
        ar: "4: الدفعتان النقديتان والشيكان. لا واحدة من الأربع قيمة ناقصة؛ كلٌّ منها دفعة من نوع لا بطاقة له. في الجدول الواحد لا تظهر هذه القاعدة إلا خلايا فارغة، والعمود الفارغ لأنواع كاملة من الصفوف هو طريقة الجدول في قول «هذا لبعضكم فقط»."
      },
      solution: {
        out: "no_card\n4",
        en: "Run in alasql on the lesson's six payments: one row, no_card = 4.",
        ar: "شُغّل في alasql على المدفوعات الست في الدرس: صفّ واحد، no_card = 4."
      }
    },

    /* ---------------------------------------------------- 2 · option one: a single PAYMENT entity */
    {
      id: "t4l1q05", type: "mcq", level: "easy", topics: ["t4-one-entity", "t4-common-attribute"],
      q: {
        en: "Version 1 of the first evolve block draws PAYMENT with # Payment ID, * Payment Date and * Amount, and nothing else. The accountant asks for payment 3's card number. What is this version's defect?",
        ar: "الإصدار 1 من أول مراحل التطوّر يرسم PAYMENT بـ # Payment ID و* Payment Date و* Amount، ولا شيء غيرها. يطلب المحاسب رقم بطاقة الدفعة 3. ما عيب هذا الإصدار؟"
      },
      options: [
        { en: "Hidden rules: it lets a card payment have no card number", ar: "قواعد مخفيّة: يسمح لدفعة البطاقة بأن تكون بلا رقم بطاقة" },
        { en: "Repeated structure: the date and the amount are drawn several times", ar: "بنية مكرّرة: التاريخ والمبلغ مرسومان أكثر من مرّة" },
        { en: "Lost data: there is no attribute for the card number and no relationship to the cheque's customer, so they cannot be stored", ar: "بيانات ضائعة: لا خاصية لرقم البطاقة ولا علاقة بزبون الشيك، فلا يمكن تخزينهما" },
        { en: "None: the amount is all the shop needs to settle the dispute", ar: "لا عيب: المبلغ هو كل ما يحتاج إليه المتجر لحلّ النزاع" }
      ],
      answer: 2,
      hint: {
        en: "Before asking which rules the model enforces, ask whether the fact can be recorded at all.",
        ar: "قبل أن تسأل أيّ القواعد يفرضها النموذج، اسأل: هل يمكن تسجيل الحقيقة أصلًا؟"
      },
      explain: {
        en: "Version 1 holds only what every payment has, so the two facts the accountant needs have nowhere to go: that is lost data. \"Hidden rules\" is tempting, but it is version 2's defect — you can only hide a rule about an attribute you have drawn. Repeated structure belongs to the three-entity design.",
        ar: "الإصدار 1 لا يحمل إلا ما لكل دفعة، فالحقيقتان اللتان يحتاج إليهما المحاسب لا مكان لهما: هذه بيانات ضائعة. و«القواعد المخفيّة» إجابة مغرية، لكنها عيب الإصدار 2 — فلا تُخفى قاعدة عن خاصية إلا بعد رسمها. أمّا البنية المكرّرة فعيب تصميم الكيانات الثلاثة."
      }
    },
    {
      id: "t4l1q06", type: "compare", level: "medium", topics: ["t4-one-entity", "t4-type-attribute", "t4-hidden-rule"],
      q: {
        en: "The two versions of the first evolve block, as text. Which statement is right?",
        ar: "إصدارا أول مراحل التطوّر، مكتوبين نصًّا. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT\n# Payment ID\n* Payment Date\n* Amount",
      codeB: "PAYMENT\n# Payment ID\n* Payment Date\n* Amount\n* Method\no Card Number\n\nEach PAYMENT may be made by one and only one CUSTOMER.",
      options: [
        { en: "A is better: it has no optional attribute, so every rule it shows is enforced", ar: "A أفضل: لا خاصية اختيارية فيه، فكل قاعدة يُظهرها مفروضة" },
        { en: "B is better, and nothing is left to fix: every fact now has a place", ar: "B أفضل، ولم يبقَ شيء لإصلاحه: لكل حقيقة الآن مكان" },
        { en: "B is better: it can store the card number and the cheque's customer, but it cannot say which payments must have them", ar: "B أفضل: يستطيع تخزين رقم البطاقة وزبون الشيك، لكنه لا يستطيع أن يقول أيّ الدفعات يجب أن تملكهما" },
        { en: "They are equally weak: both are one entity, so both hide exactly the same rules", ar: "هما بالضعف نفسه: كلاهما كيان واحد، فكلاهما يُخفي القواعد نفسها بالضبط" }
      ],
      answer: 2,
      hint: {
        en: "Name A's defect, then check whether B closes it — and what B's o and \"may\" now say about card payments and cheques.",
        ar: "سمِّ عيب A، ثم تحقّق هل يُغلقه B — وماذا تقول الآن علامة o وكلمة «may» في B عن دفعات البطاقة والشيكات."
      },
      explain: {
        en: "A loses data; B keeps the data and loses the rules. B must mark Card Number o and the PAYMENT end \"may\", because cash has neither — so the diagram also allows a card payment with no number and a cheque with no customer. A is \"strict\" only because it cannot store the facts at all. This is the best one entity can do.",
        ar: "A يُضيع البيانات؛ وB يحفظ البيانات ويُضيع القواعد. على B أن يعلّم Card Number بـ o وطرف PAYMENT بـ «may»، لأن النقدية ليس لها أيّ منهما — فيسمح المخطّط أيضًا بدفعة بطاقة بلا رقم وبشيك بلا زبون. و«صرامة» A ليست إلا عجزًا عن تخزين الحقائق أصلًا. هذا أفضل ما يستطيعه كيان واحد."
      },
      solution: {
        en: "B, with its defect named: hidden rules. The repair comes in section 4 — kinds drawn inside PAYMENT.",
        ar: "B، مع تسمية عيبه: قواعد مخفيّة. والإصلاح في القسم 4 — أنواع مرسومة داخل PAYMENT."
      }
    },
    {
      id: "t4l1q07", type: "error", level: "medium", topics: ["t4-hidden-rule", "t4-one-entity", "t4-special-property"],
      q: {
        en: "The shop's single-entity model, as text. The accountant's rule: a cheque payment must name the customer who paid it. Which line lets the model break that rule?",
        ar: "نموذج المتجر ذو الكيان الواحد، مكتوبًا نصًّا. قاعدة المحاسب: يجب أن تذكر دفعة الشيك الزبون الذي دفعها. أيّ سطر يسمح للنموذج بمخالفة هذه القاعدة؟"
      },
      lang: "text",
      code: "PAYMENT   # Payment ID\n          * Payment Date\n          * Amount\n          * Method   (cash / check / credit card)\n          o Card Number\nEach PAYMENT  may be made by one and only one CUSTOMER.\nEach CUSTOMER may make one or more PAYMENTs.",
      answer: 6,
      hint: {
        en: "The rule is about what each cheque must have. Read the relationship from the PAYMENT end.",
        ar: "القاعدة عمّا يجب أن يملكه كل شيك. اقرأ العلاقة من طرف PAYMENT."
      },
      explain: {
        en: "Line 6 says every PAYMENT \"may\" be made by a customer — a dashed half at PAYMENT — so a cheque with no customer is legal. Line 7 is tempting, but it reads the line from the CUSTOMER end and is true. Line 5 hides a different rule, the card number. And one entity cannot simply say \"must\": cash payments have no customer.",
        ar: "السطر 6 يقول إن كل PAYMENT «may» أن يقوم بها زبون — نصف متقطّع عند PAYMENT — فالشيك بلا زبون مقبول. والسطر 7 مغرٍ، لكنه يقرأ الخط من طرف CUSTOMER وهو صحيح. والسطر 5 يُخفي قاعدة أخرى، قاعدة رقم البطاقة. ولا يستطيع الكيان الواحد أن يقول «must» ببساطة: فالدفعات النقدية لا زبون لها."
      },
      solution: {
        code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH         (inside PAYMENT)\n  CHECK        (inside PAYMENT)\n  CREDIT CARD  (inside PAYMENT)  * Card Number\nEach CHECK       must be made by one and only one CUSTOMER.\nEach CREDIT CARD must be made by one and only one CUSTOMER.",
        en: "No single-entity fix exists. Drawn with kinds inside PAYMENT, the line can start at CHECK and be solid there.",
        ar: "لا إصلاح داخل الكيان الواحد. وحين تُرسم الأنواع داخل PAYMENT يمكن أن يبدأ الخط من CHECK ويكون صلبًا عنده."
      }
    },
    {
      id: "t4l1q08", type: "output", level: "medium", topics: ["t4-hidden-rule", "t4-type-attribute"],
      q: {
        en: "Version 2 as one payments table: card_number and customer_id are nullable, method is NOT NULL. It holds the six payments (two of them credit card). On 5 March a clerk types a card payment and forgets the number. What does the SELECT return?",
        ar: "الإصدار 2 جدولًا واحدًا payments: card_number وcustomer_id يقبلان null، وmethod من نوع NOT NULL. فيه المدفوعات الست (اثنتان منها بطاقة ائتمانية). في 5 March يُدخل موظف دفعة بطاقة وينسى الرقم. ماذا يُرجع SELECT؟"
      },
      lang: "sql",
      code: "INSERT INTO payments (payment_id, payment_date, amount, method, customer_id)\nVALUES (7, '2026-03-05', 60, 'credit card', 1);\n\nSELECT COUNT(*) AS card_payments\nFROM payments\nWHERE method = 'credit card';",
      blanks: [{ accept: ["3"], label: { en: "card_payments", ar: "card_payments" } }],
      hint: {
        en: "Is there anything in this table's definition that ties card_number to the value of method?",
        ar: "هل في تعريف هذا الجدول ما يربط card_number بقيمة method؟"
      },
      explain: {
        en: "3. The INSERT succeeds: card_number is nullable for every row, because cash and cheques need it to be, and nothing links that column to method = 'credit card'. The model never said the row was wrong, so the table cannot refuse it. The type attribute names the kind; it does not give the kind its own rules.",
        ar: "3. ينجح INSERT: فـ card_number يقبل null لكل صفّ، لأن النقدية والشيكات تحتاج إلى ذلك، ولا شيء يربط هذا العمود بـ method = 'credit card'. لم يقل النموذج قطّ إن الصفّ خاطئ، فلا يستطيع الجدول رفضه. خاصية النوع تسمّي النوع، لكنها لا تعطيه قواعده الخاصّة."
      },
      solution: {
        out: "card_payments\n3",
        en: "Run in alasql: the INSERT reports 1 row; the SELECT returns card_payments = 3, payment 7 among them with no card number.",
        ar: "شُغّل في alasql: يُبلغ INSERT عن صفّ واحد؛ ويُرجع SELECT القيمة card_payments = 3، ومنها الدفعة 7 بلا رقم بطاقة."
      }
    },
    {
      id: "t4l1q09", type: "tf", level: "easy", topics: ["t4-type-attribute", "t4-hidden-rule"],
      q: {
        en: "Adding * Method (cash / check / credit card) to the single PAYMENT entity lets the diagram show that a credit card payment must have a card number.",
        ar: "إضافة * Method ‏(cash / check / credit card) إلى الكيان الواحد PAYMENT تجعل المخطّط يُظهر أن دفعة البطاقة الائتمانية يجب أن يكون لها رقم بطاقة."
      },
      truth: false,
      hint: {
        en: "How many marks can Card Number carry in one entity?",
        ar: "كم علامة يمكن أن تحمل Card Number في كيان واحد؟"
      },
      explain: {
        en: "False. Method says which kind a payment is, but Card Number still has one mark for all payments, and it must be o because cash has none. One entity cannot say \"mandatory for these, absent for those\", so the rule stays hidden — true of the business, enforced by nothing.",
        ar: "خطأ. تقول Method أيّ نوع هي الدفعة، لكن Card Number تبقى بعلامة واحدة لكل المدفوعات، ويجب أن تكون o لأن النقدية لا رقم لها. لا يستطيع الكيان الواحد أن يقول «إلزامية لهذه، غائبة عن تلك»، فتبقى القاعدة مخفيّة (hidden rule) — صحيحة في العمل، ولا شيء يفرضها."
      }
    },

    /* ---------------------------------------------------- 3 · option two: three separate entities */
    {
      id: "t4l1q10", type: "mcq", level: "easy", topics: ["t4-separate-entities", "t4-repeated-structure"],
      q: {
        en: "The second designer replaces PAYMENT with three separate entities, CASH, CHECK and CREDIT CARD. What does the model no longer know?",
        ar: "يستبدل المصمّم الثاني بـ PAYMENT ثلاثة كيانات منفصلة: CASH وCHECK وCREDIT CARD. ما الذي لم يعد النموذج يعرفه؟"
      },
      options: [
        { en: "That all three are payments, with one home for what they share", ar: "أن الثلاثة كلها مدفوعات، لها موطن واحد لما تشترك فيه" },
        { en: "That a card payment must have a card number", ar: "أن دفعة البطاقة يجب أن يكون لها رقم بطاقة" },
        { en: "Which customer paid a cheque", ar: "أيّ زبون دفع الشيك" },
        { en: "The amount of a cash payment", ar: "مبلغ الدفعة النقدية" }
      ],
      answer: 0,
      hint: {
        en: "Three entities fixed version 2's defect. What did they give up to do it?",
        ar: "الكيانات الثلاثة أصلحت عيب الإصدار 2. ما الذي تخلّت عنه لتفعل ذلك؟"
      },
      explain: {
        en: "Each box now carries its own marks, so the card rule and the cheque's customer are both visible, and every box has its own amount. What is gone is the common part: nothing says the three are payments, so date and amount are drawn three times and \"all payments\" has no single home.",
        ar: "صار لكل صندوق علاماته، فقاعدة البطاقة وزبون الشيك ظاهران كلاهما، ولكل صندوق مبلغه. أمّا ما ضاع فهو الجزء المشترك: لا شيء يقول إن الثلاثة مدفوعات، فيُرسم التاريخ والمبلغ ثلاث مرّات، ولا يبقى لـ «كل المدفوعات» موطن واحد."
      }
    },
    {
      id: "t4l1q11", type: "complete", level: "medium", topics: ["t4-union-all-cost", "t4-separate-entities"],
      q: {
        en: "The three-table design: cash_payments, check_payments and card_payments, each with payment_id, payment_date and amount. The manager wants everything taken on 2 March. What completes the query?",
        ar: "تصميم الجداول الثلاثة: cash_payments وcheck_payments وcard_payments، لكلٍّ منها payment_id وpayment_date وamount. يريد المدير كل ما قُبض في 2 March. ما الذي يُكمل الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT 'cash' AS method, payment_id, amount FROM cash_payments  WHERE payment_date = '2026-03-02'\nUNION ALL\nSELECT 'check',          payment_id, amount FROM check_payments WHERE payment_date = '2026-03-02'\nUNION ALL\n____;",
      options: [
        { code: "SELECT 'credit card', payment_id, amount FROM card_payments WHERE payment_date = '2026-03-02'" },
        { code: "SELECT 'credit card', payment_id, amount FROM card_payments" },
        { code: "SELECT 'credit card', payment_id, amount FROM payments WHERE payment_date = '2026-03-02'" },
        { code: "SELECT 'credit card', payment_id, card_number FROM card_payments WHERE payment_date = '2026-03-02'" }
      ],
      answer: 0,
      hint: {
        en: "The third branch is the same question as the first two, asked of the third table.",
        ar: "الفرع الثالث هو السؤال نفسه في الفرعين الأولين، موجّهًا إلى الجدول الثالث."
      },
      explain: {
        en: "Each table must be asked the same thing, condition included. Without the WHERE, every card payment of every day joins the answer. There is no payments table in this design — that is exactly what was given up. And card_number in the amount column mixes two facts. The condition is written three times: repeated structure, now in the queries.",
        ar: "يجب أن يُسأل كل جدول السؤال نفسه، بشرطه. فمن دون WHERE تدخل الجواب كلُّ دفعات البطاقة في كل الأيام. ولا يوجد جدول payments في هذا التصميم — وهذا بالضبط ما تُخلّي عنه. ووضع card_number في عمود المبلغ يخلط حقيقتين. والشرط مكتوب ثلاث مرّات: بنية مكرّرة، صارت الآن في الاستعلامات."
      },
      solution: {
        code: "SELECT 'cash' AS method, payment_id, amount FROM cash_payments  WHERE payment_date = '2026-03-02'\nUNION ALL\nSELECT 'check',          payment_id, amount FROM check_payments WHERE payment_date = '2026-03-02'\nUNION ALL\nSELECT 'credit card',    payment_id, amount FROM card_payments  WHERE payment_date = '2026-03-02';",
        out: "method | payment_id | amount\ncash   | 1          | 40\ncheck  | 2          | 125",
        en: "Run in alasql: two rows. The card branch returns nothing on 2 March, but it must still be there — next week it may not be empty.",
        ar: "شُغّل في alasql: صفّان. فرع البطاقة لا يُرجع شيئًا في 2 March، لكن يجب أن يبقى — فقد لا يكون فارغًا الأسبوع القادم."
      }
    },
    {
      id: "t4l1q12", type: "output", level: "hard", topics: ["t4-union-all-cost", "t4-repeated-structure"],
      q: {
        en: "The three tables hold the lesson's rows: on 4 March, cheque 6 (90) and card payment 5 (220); no cash. A clerk writes the day's total from memory and forgets one table. What does the query return?",
        ar: "تحمل الجداول الثلاثة صفوف الدرس: في 4 March، الشيك 6 ‏(90) ودفعة البطاقة 5 ‏(220)؛ ولا نقد. يكتب موظف مجموع اليوم من ذاكرته وينسى جدولًا. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT SUM(amount) AS day_total\nFROM (SELECT amount FROM cash_payments  WHERE payment_date = '2026-03-04'\n      UNION ALL\n      SELECT amount FROM check_payments WHERE payment_date = '2026-03-04') AS t;",
      blanks: [{ accept: ["90"], label: { en: "day_total", ar: "day_total" } }],
      hint: {
        en: "Add only what the query actually reads. Does it complain about what it does not read?",
        ar: "اجمع ما يقرؤه الاستعلام فعلًا فقط. هل يشتكي ممّا لا يقرؤه؟"
      },
      explain: {
        en: "90 — only cheque 6. The true total is 310, but card_payments is never read, and nothing in the database knows it should have been: the three tables are not linked as \"payments\". No error, just a short total. That is the cost of separate entities: every \"all payments\" question must remember every kind, every time.",
        ar: "90 — الشيك 6 وحده. المجموع الحقيقي 310، لكن card_payments لا يُقرأ أبدًا، ولا شيء في قاعدة البيانات يعرف أنه كان يجب أن يُقرأ: فالجداول الثلاثة غير مرتبطة بوصفها «مدفوعات». لا خطأ، بل مجموع ناقص فقط. هذه كلفة الكيانات المنفصلة: كل سؤال عن «كل المدفوعات» يجب أن يتذكّر كل نوع، في كل مرّة."
      },
      solution: {
        out: "day_total\n90",
        en: "Run in alasql: 90. With the card_payments branch added it returns 310.",
        ar: "شُغّل في alasql: 90. ومع إضافة فرع card_payments يُرجع 310."
      }
    },

    /* ---------------------------------------------------- 4 · something in between */
    {
      id: "t4l1q13", type: "match", level: "easy", topics: ["t4-three-designs", "t4-hidden-rule", "t4-repeated-structure", "t4-subdivide"],
      q: {
        en: "Four drafts of the payment model from the lesson's two evolve blocks. Match each draft to its verdict.",
        ar: "أربع مسوّدات لنموذج المدفوعات من مراحل التطوّر في الدرس. صِل كل مسوّدة بحكمها."
      },
      leftHead: { en: "Draft", ar: "المسوّدة" },
      rightHead: { en: "Verdict", ar: "الحكم" },
      pairs: [
        { l: { en: "One <code>PAYMENT</code> with only ID, date and amount", ar: "<code>PAYMENT</code> واحد بالرقم والتاريخ والمبلغ فقط" },
          r: { en: "Lost data: the card number and the cheque's customer have nowhere to go", ar: "بيانات ضائعة: لا مكان لرقم البطاقة ولا لزبون الشيك" } },
        { l: { en: "One <code>PAYMENT</code> with <code>* Method</code>, <code>o Card Number</code> and a dashed half to <code>CUSTOMER</code>", ar: "<code>PAYMENT</code> واحد فيه <code>* Method</code> و<code>o Card Number</code> ونصف متقطّع إلى <code>CUSTOMER</code>" },
          r: { en: "Hidden rules: a card payment with no number is legal", ar: "قواعد مخفيّة: دفعة البطاقة بلا رقم مقبولة" } },
        { l: { en: "<code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code> as three separate boxes", ar: "<code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> ثلاثة صناديق منفصلة" },
          r: { en: "Repeated structure: date and amount drawn three times", ar: "بنية مكرّرة: التاريخ والمبلغ مرسومان ثلاث مرّات" } },
        { l: { en: "<code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code> as boxes inside <code>PAYMENT</code>", ar: "<code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> صناديق داخل <code>PAYMENT</code>" },
          r: { en: "Both fixed: common part once, each kind's rules visible", ar: "إصلاح الأمرين: الجزء المشترك مرّة واحدة، وقواعد كل نوع ظاهرة" } }
      ],
      hint: {
        en: "Each draft fixes the defect of the one before it. Start with the one that cannot store a card number.",
        ar: "كل مسوّدة تُصلح عيب التي قبلها. ابدأ بالتي لا تستطيع تخزين رقم البطاقة."
      },
      explain: {
        en: "Common attributes only: lost data. Every extra made optional: the data fits, the rules disappear. Three separate entities: the rules come back, the common part is copied. Kinds inside one entity: the common part is drawn once in PAYMENT and each kind holds only its own — the recommended model, which lesson 2 calls supertype and subtypes.",
        ar: "الخصائص المشتركة وحدها: بيانات ضائعة. كل إضافة اختيارية: تتّسع البيانات وتختفي القواعد. ثلاثة كيانات منفصلة: تعود القواعد ويُنسخ الجزء المشترك. أنواع داخل كيان واحد: يُرسم الجزء المشترك مرّة واحدة في PAYMENT ولا يحمل كل نوع إلا ما يخصّه — النموذج الموصى به، الذي يسمّيه الدرس 2 نوعًا أعلى (supertype) وأنواعًا فرعية (subtypes)."
      }
    },
    {
      id: "t4l1q14", type: "compare", level: "hard", topics: ["t4-three-designs", "t4-subdivide", "t4-separate-entities"],
      q: {
        en: "Versions 2 and 3 of the second evolve block, as text. Both show every rule the accountant needs. Which statement is right?",
        ar: "الإصداران 2 و3 من مراحل التطوّر الثانية، مكتوبين نصًّا. كلاهما يُظهر كل قاعدة يحتاج إليها المحاسب. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "CASH         # Payment ID  * Payment Date  * Amount\nCHECK        # Payment ID  * Payment Date  * Amount\nCREDIT CARD  # Payment ID  * Payment Date  * Amount  * Card Number\nEach CHECK       must be made by one and only one CUSTOMER.\nEach CREDIT CARD must be made by one and only one CUSTOMER.",
      codeB: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH         (inside PAYMENT)\n  CHECK        (inside PAYMENT)\n  CREDIT CARD  (inside PAYMENT)  * Card Number\nEach CHECK       must be made by one and only one CUSTOMER.\nEach CREDIT CARD must be made by one and only one CUSTOMER.",
      options: [
        { en: "A is better: B buries the card rule inside PAYMENT, where it no longer applies", ar: "A أفضل: B يدفن قاعدة البطاقة داخل PAYMENT، حيث لا تعود تنطبق" },
        { en: "B is better: the same rules, but the common attributes are drawn once and the model says all three kinds are payments", ar: "B أفضل: القواعد نفسها، لكن الخصائص المشتركة مرسومة مرّة واحدة، والنموذج يقول إن الأنواع الثلاثة كلها مدفوعات" },
        { en: "They are equivalent: same facts and same rules, so the choice is a matter of taste", ar: "هما متكافئان: الحقائق نفسها والقواعد نفسها، فالاختيار مسألة ذوق" },
        { en: "B is better because it needs fewer lines to CUSTOMER", ar: "B أفضل لأنه يحتاج إلى خطوط أقلّ إلى CUSTOMER" }
      ],
      answer: 1,
      hint: {
        en: "The rules are the same. Count how often Payment Date is drawn, and ask which model can answer \"all payments on 3 March\" from one place.",
        ar: "القواعد واحدة. عُدّ كم مرّة رُسمت Payment Date، واسأل أيّ النموذجين يستطيع الإجابة عن «كل المدفوعات في 3 March» من مكان واحد."
      },
      explain: {
        en: "B. * Card Number sits inside CREDIT CARD, so B shows the card rule exactly as A does, and both draw two customer lines. The difference is the common part: A draws it three times and never says the kinds belong together; B draws it once in PAYMENT. \"Equivalent\" is the tempting answer — the rules match, but A pays in repetition and in every \"all payments\" question.",
        ar: "B. تقع * Card Number داخل CREDIT CARD، فيُظهر B قاعدة البطاقة تمامًا كما يُظهرها A، وكلاهما يرسم خطَّي زبون. الفرق في الجزء المشترك: A يرسمه ثلاث مرّات ولا يقول أبدًا إن الأنواع تنتمي إلى بعضها؛ وB يرسمه مرّة واحدة في PAYMENT. و«متكافئان» هي الإجابة المغرية — القواعد متطابقة، لكن A يدفع الثمن تكرارًا وفي كل سؤال عن «كل المدفوعات»."
      },
      solution: {
        en: "B — version 3, the recommended model.",
        ar: "B — الإصدار 3، النموذج الموصى به."
      }
    },
    {
      id: "t4l1q15", type: "fill", level: "medium", topics: ["t4-subdivide", "t4-three-designs"],
      q: {
        en: "Version 3 of the second evolve block, as text. Fill each blank with the mark or the ERDish word the business needs: every payment has a date, every card payment has a card number, every cheque is made by a customer.",
        ar: "الإصدار 3 من مراحل التطوّر الثانية، مكتوبًا نصًّا. املأ كل فراغ بالعلامة أو بكلمة ERDish التي يحتاج إليها العمل: لكل دفعة تاريخ، ولكل دفعة بطاقة رقم بطاقة، وكل شيك يقوم به زبون."
      },
      lang: "erdish",
      code: "PAYMENT\n  # Payment ID\n  ____1____ Payment Date\n  * Amount\n  CASH\n  CHECK\n  CREDIT CARD\n    ____2____ Card Number\nEach CHECK ____3____ be made by one and only one CUSTOMER.",
      blanks: [
        { accept: ["*"], label: { en: "1", ar: "1" }, ph: "* / o" },
        { accept: ["*"], label: { en: "2", ar: "2" }, ph: "* / o" },
        { accept: ["must", "MUST", "Must"], label: { en: "3", ar: "3" }, ph: "must / may" }
      ],
      solution: { en: "1 = *, 2 = *, 3 = must.", ar: "1 = *، 2 = *، 3 = must." },
      hint: {
        en: "Inside its own box, each kind's marks only have to be true for that kind.",
        ar: "داخل صندوقه الخاص، لا يلزم أن تصدق علامات كل نوع إلا على ذلك النوع."
      },
      explain: {
        en: "Every payment has a date, so Payment Date is * in PAYMENT. Card Number is * because it is drawn inside CREDIT CARD, where every instance has one — in version 1 it had to be o. The cheque's line starts at CHECK, so it can be \"must\". Subdividing lets each rule be stated where it is true.",
        ar: "لكل دفعة تاريخ، فـ Payment Date معلَّمة بـ * في PAYMENT. وCard Number معلَّمة بـ * لأنها مرسومة داخل CREDIT CARD، حيث لكل نسخة رقم — وكان يجب أن تكون o في الإصدار 1. وخط الشيك يبدأ من CHECK، فيمكن أن يكون «must». التقسيم (subdivide) يسمح بأن تُقال كل قاعدة حيث تصدق."
      }
    },
    {
      id: "t4l1q16", type: "tf", level: "medium", topics: ["t4-three-designs", "t4-subdivide"],
      q: {
        en: "Once the payments are drawn as kinds inside one PAYMENT entity, the tables are decided too: a payments table plus one table for each kind.",
        ar: "بمجرّد أن تُرسم المدفوعات أنواعًا داخل كيان واحد PAYMENT، تكون الجداول قد تقرّرت أيضًا: جدول payments وجدول لكل نوع."
      },
      truth: false,
      hint: {
        en: "Is version 3 a conceptual model or a set of tables?",
        ar: "هل الإصدار 3 نموذج مفاهيمي أم مجموعة جداول؟"
      },
      explain: {
        en: "False. Version 3 is a conceptual model: it says which facts and rules exist, not how they are stored. It can become one payments table with a type column, a table per kind, or a payments table plus a table per kind. The chapter lab builds all three; the diagram tells you which rules each must keep.",
        ar: "خطأ. الإصدار 3 نموذج مفاهيمي (conceptual model): يقول أيّ الحقائق والقواعد موجودة، لا كيف تُخزَّن. يمكن أن يصبح جدولًا واحدًا payments بعمود للنوع، أو جدولًا لكل نوع، أو جدول payments مع جدول لكل نوع. ومختبر الفصل يبني الثلاثة؛ والمخطّط هو ما يخبرك أيّ القواعد يجب أن يحفظها كلٌّ منها."
      }
    },
    {
      id: "t4l1q17", type: "error", level: "hard", topics: ["t4-special-property", "t4-subdivide", "t4-hidden-rule"],
      q: {
        en: "A student redraws the payments with kinds inside PAYMENT. The slides' business: for cheques and card payments we need the customer who paid; for cash payments it is not needed. Which line breaks that?",
        ar: "يعيد طالب رسم المدفوعات بأنواع داخل PAYMENT. والعمل في الشرائح: للشيكات ودفعات البطاقة نحتاج إلى الزبون الذي دفع؛ وللدفعات النقدية لا حاجة إليه. أيّ سطر يخالف ذلك؟"
      },
      lang: "text",
      code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH         (inside PAYMENT)\n  CHECK        (inside PAYMENT)\n  CREDIT CARD  (inside PAYMENT)  * Card Number\nPAYMENT -- made by / make -- CUSTOMER   (solid at PAYMENT, crow's foot at PAYMENT)",
      answer: 5,
      hint: {
        en: "Whatever is attached to the outer box applies to every kind inside it — cash included.",
        ar: "كل ما يتّصل بالصندوق الخارجي ينطبق على كل نوع داخله — والنقد منه."
      },
      explain: {
        en: "Line 5 hangs the customer relationship on PAYMENT, solid there, so every payment — cash too — must now have a customer. Being made by a customer is a special property of cheques and card payments, a relationship rather than an attribute, so the line must start at CHECK and at CREDIT CARD. Line 2 is tempting, but an empty CASH box is fine: cash simply has nothing of its own.",
        ar: "السطر 5 يعلّق علاقة الزبون على PAYMENT، صلبةً عنده، فصار على كل دفعة — والنقدية منها — أن يكون لها زبون. وأن يقوم بالدفعة زبون سمةٌ خاصّة بالشيكات ودفعات البطاقة، علاقةٌ لا خاصية، فيجب أن يبدأ الخط من CHECK ومن CREDIT CARD. والسطر 2 مغرٍ، لكن صندوق CASH الفارغ سليم: فالنقد ببساطة لا شيء له يخصّه."
      },
      solution: {
        code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH         (inside PAYMENT)\n  CHECK        (inside PAYMENT)\n  CREDIT CARD  (inside PAYMENT)  * Card Number\nCHECK       -- made by / make -- CUSTOMER   (solid at CHECK)\nCREDIT CARD -- made by / make -- CUSTOMER   (solid at CREDIT CARD)",
        en: "Two lines, one from each kind that has a customer; CASH has none.",
        ar: "خطّان، واحد من كل نوع له زبون؛ وCASH بلا خط."
      }
    },

    /* ---------------------------------------------------- 5 · a fourth method arrives */
    {
      id: "t4l1q18", type: "trace", level: "medium", topics: ["t4-fourth-method", "t4-change-cost", "t4-repeated-structure"],
      q: {
        en: "The three-entity model before April. Mobile-wallet payments arrive: each has a wallet ID and is made by a customer. Make the change in this model by hand. Afterwards, how many times is Payment Date drawn, and how many lines run to CUSTOMER?",
        ar: "نموذج الكيانات الثلاثة قبل April. تصل دفعات المحفظة الإلكترونية: لكلٍّ منها رقم محفظة ويقوم بها زبون. أجرِ التغيير على هذا النموذج بنفسك. بعد ذلك، كم مرّة تُرسم Payment Date، وكم خطًّا يصل إلى CUSTOMER؟"
      },
      lang: "text",
      code: "CASH         # Payment ID  * Payment Date  * Amount\nCHECK        # Payment ID  * Payment Date  * Amount\nCREDIT CARD  # Payment ID  * Payment Date  * Amount  * Card Number\nCHECK       -- made by / make -- CUSTOMER\nCREDIT CARD -- made by / make -- CUSTOMER",
      options: [
        { en: "Payment Date once; three lines to CUSTOMER", ar: "Payment Date مرّة واحدة؛ وثلاثة خطوط إلى CUSTOMER" },
        { en: "Payment Date three times; three lines to CUSTOMER", ar: "Payment Date ثلاث مرّات؛ وثلاثة خطوط إلى CUSTOMER" },
        { en: "Payment Date four times; two lines to CUSTOMER", ar: "Payment Date أربع مرّات؛ وخطّان إلى CUSTOMER" },
        { en: "Payment Date four times; three lines to CUSTOMER", ar: "Payment Date أربع مرّات؛ وثلاثة خطوط إلى CUSTOMER" }
      ],
      answer: 3,
      hint: {
        en: "In this model a new kind is a whole new entity. What must that entity carry by itself?",
        ar: "في هذا النموذج النوع الجديد كيان جديد كامل. ماذا يجب أن يحمل هذا الكيان بنفسه؟"
      },
      explain: {
        en: "WALLET must be a whole entity with its own ID, date, amount and wallet ID, so the date is now drawn four times, and it needs its own customer line, a third. \"Once\" is version 3's answer, where the date stays in PAYMENT. Each new kind makes the repetition worse, and every \"all payments\" query needs a fourth branch.",
        ar: "يجب أن يكون WALLET كيانًا كاملًا برقمه وتاريخه ومبلغه ورقم محفظته، فيُرسم التاريخ الآن أربع مرّات، ويحتاج إلى خط زبون خاص به، هو الثالث. و«مرّة واحدة» جواب الإصدار 3، حيث يبقى التاريخ في PAYMENT. كل نوع جديد يزيد التكرار سوءًا، وكل استعلام عن «كل المدفوعات» يحتاج إلى فرع رابع."
      }
    },
    {
      id: "t4l1q19", type: "multi", level: "hard", topics: ["t4-fourth-method", "t4-change-cost", "t4-one-entity"],
      q: {
        en: "Wallets arrive and the shop keeps the single-entity design (version 1 of the second evolve block). What changes? Choose every one.",
        ar: "تصل المحافظ ويُبقي المتجر تصميم الكيان الواحد (الإصدار 1 من مراحل التطوّر الثانية). ما الذي يتغيّر؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "PAYMENT gains o Wallet ID", ar: "يكتسب PAYMENT الخاصية o Wallet ID" },
        { en: "A WALLET entity is added with its own date and amount", ar: "يُضاف كيان WALLET بتاريخه ومبلغه الخاصّين" },
        { en: "Method gains a fourth value", ar: "تكتسب Method قيمة رابعة" },
        { en: "Every \"all payments\" query needs a new UNION ALL branch", ar: "كل استعلام عن «كل المدفوعات» يحتاج إلى فرع UNION ALL جديد" },
        { en: "The query that hunts rows breaking the hidden rules needs another condition", ar: "الاستعلام الذي يبحث عن الصفوف المخالفة للقواعد المخفيّة يحتاج إلى شرط آخر" },
        { en: "A second relationship line to CUSTOMER is drawn", ar: "يُرسم خط علاقة ثانٍ إلى CUSTOMER" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "In one entity, a new kind is just a new value of Method plus whatever it alone needs. Which options belong to the three-entity design instead?",
        ar: "في الكيان الواحد، النوع الجديد مجرّد قيمة جديدة لـ Method مع ما يحتاج إليه وحده. أيّ الخيارات تخصّ تصميم الكيانات الثلاثة بدلًا من ذلك؟"
      },
      explain: {
        en: "Version 1 gains o Wallet ID and a fourth Method value, and its hand-written hidden-rules query needs another line, because o Wallet ID is one more rule nothing enforces. A WALLET entity and a new UNION ALL branch are the three-entity design's costs. No new customer line: wallets use the one PAYMENT already has, dashed for everyone.",
        ar: "يكتسب الإصدار 1 الخاصية o Wallet ID وقيمة رابعة لـ Method، ويحتاج استعلامه المكتوب يدويًّا للقواعد المخفيّة إلى سطر آخر، لأن o Wallet ID قاعدة أخرى لا يفرضها شيء. أمّا كيان WALLET وفرع UNION ALL الجديد فكلفتا تصميم الكيانات الثلاثة. ولا خط زبون جديد: فالمحافظ تستعمل الخط الذي لدى PAYMENT أصلًا، متقطّعًا للجميع."
      }
    },
    {
      id: "t4l1q20", type: "write", level: "hard", topics: ["t4-fourth-method", "t4-separate-entities", "t4-repeated-structure"],
      q: {
        en: "The shop keeps the three-table design and adds wallets. Write CREATE TABLE wallet_payments: payment_id (NUMBER, the primary key), payment_date (DATE), amount (NUMBER), wallet_id (VARCHAR(20)) and customer_id (NUMBER). Every wallet payment has all of them.",
        ar: "يُبقي المتجر تصميم الجداول الثلاثة ويضيف المحافظ. اكتب CREATE TABLE wallet_payments: ‏payment_id ‏(NUMBER، المفتاح الأساسي)، وpayment_date ‏(DATE)، وamount ‏(NUMBER)، وwallet_id ‏(VARCHAR(20))، وcustomer_id ‏(NUMBER). ولكل دفعة محفظة كل هذه القيم."
      },
      lang: "sql",
      lines: 8,
      starter: "CREATE TABLE wallet_payments (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+wallet_payments\\s*\\(", flags: "i",
          label: { en: "creates the table wallet_payments", ar: "يُنشئ الجدول wallet_payments" } },
        { re: "\\bpayment_date\\s+DATE\\b[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "payment_date is a DATE and NOT NULL — again", ar: "payment_date من نوع DATE وNOT NULL — مرّة أخرى" } },
        { re: "\\bamount\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "amount is NOT NULL — again", ar: "amount من نوع NOT NULL — مرّة أخرى" } },
        { re: "\\bwallet_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "wallet_id is NOT NULL: mandatory for this kind", ar: "wallet_id من نوع NOT NULL: إلزامية لهذا النوع" } },
        { re: "\\bcustomer_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "customer_id is NOT NULL: every wallet payment has its customer", ar: "customer_id من نوع NOT NULL: لكل دفعة محفظة زبونها" } }
      ],
      forbid: [
        { re: "\\bcard_number\\b", flags: "i",
          label: { en: "card_number belongs to card payments only; a wallet payment has none", ar: "card_number لدفعات البطاقة وحدها؛ ودفعة المحفظة لا رقم بطاقة لها" } }
      ],
      hint: {
        en: "Copy the shape of card_payments from section 3, and put the wallet's own column where the card's was.",
        ar: "انسخ شكل card_payments من القسم 3، وضع عمود المحفظة الخاص مكان عمود البطاقة."
      },
      explain: {
        en: "In its own table, wallet_id can be NOT NULL — the rule a single table could only hide. But look at what else you typed: payment_date and amount, NOT NULL, for the fourth time. That is the price of separate entities, paid again with every new kind, plus a fourth UNION ALL branch in every \"all payments\" query. Version 3 would add only what is new to wallets.",
        ar: "في جدوله الخاص يمكن أن يكون wallet_id من نوع NOT NULL — القاعدة التي لم يكن الجدول الواحد يستطيع إلا إخفاءها. لكن انظر إلى ما كتبته غيرها: payment_date وamount، بـ NOT NULL، للمرّة الرابعة. هذا ثمن الكيانات المنفصلة، يُدفع من جديد مع كل نوع جديد، ومعه فرع UNION ALL رابع في كل استعلام عن «كل المدفوعات». أمّا الإصدار 3 فلا يضيف إلا ما هو جديد على المحافظ."
      },
      solution: {
        code: "CREATE TABLE wallet_payments (\n  payment_id   NUMBER      PRIMARY KEY,\n  payment_date DATE        NOT NULL,\n  amount       NUMBER      NOT NULL,\n  wallet_id    VARCHAR(20) NOT NULL,\n  customer_id  NUMBER      NOT NULL\n);",
        en: "Run in alasql beside the three tables: a full wallet row is accepted; a row with no wallet_id is refused (Wrong NULL value in NOT NULL column wallet_id), and so is a row with no customer_id.",
        ar: "شُغّل في alasql بجانب الجداول الثلاثة: قُبل صفّ محفظة كامل؛ ورُفض صفّ بلا wallet_id ‏(Wrong NULL value in NOT NULL column wallet_id)، وكذلك صفّ بلا customer_id."
      }
    },
    {
      id: "t4l1q21", type: "mcq", level: "hard", topics: ["t4-change-cost", "t4-hidden-rule", "t4-fourth-method"],
      q: {
        en: "A designer argues: \"For wallets, the single PAYMENT entity wins. It gains one attribute and one Method value — the smallest change of the three.\" What is wrong with the argument?",
        ar: "يحتجّ مصمّم: «للمحافظ، يفوز الكيان الواحد PAYMENT. فهو يكتسب خاصية واحدة وقيمة واحدة لـ Method — أصغر تغيير بين الثلاثة.» ما الخطأ في هذه الحجّة؟"
      },
      options: [
        { en: "Nothing: the fewest things touched is what makes a change good", ar: "لا شيء: أقلّ عدد من الأشياء الملموسة هو ما يجعل التغيير جيّدًا" },
        { en: "The change is small, but o Wallet ID is mandatory for wallets and absent for the rest: one more hidden rule nothing enforces", ar: "التغيير صغير، لكن o Wallet ID إلزامية للمحافظ وغائبة عن البقية: قاعدة مخفيّة أخرى لا يفرضها شيء" },
        { en: "The single entity must also add a WALLET entity with its own date and amount", ar: "على الكيان الواحد أيضًا أن يضيف كيان WALLET بتاريخه ومبلغه" },
        { en: "The single entity's existing \"3 March\" query will silently miss wallet payments", ar: "استعلام «3 March» الموجود في الكيان الواحد سيُسقط دفعات المحفظة بصمت" }
      ],
      answer: 1,
      hint: {
        en: "Count not only what is added, but what gets worse.",
        ar: "لا تعدّ ما يُضاف فقط، بل ما يزداد سوءًا أيضًا."
      },
      explain: {
        en: "The lesson's table has two columns, what the diagram gains and what gets worse. Version 1's gain is small, but what gets worse is another optional attribute that is really mandatory for one kind. The new entity and the query that misses wallets are the three-entity design's costs: one PAYMENT table still holds every payment. Version 3 adds one inner box with * Wallet ID and loses nothing.",
        ar: "لجدول الدرس عمودان: ما يكسبه المخطّط وما يزداد سوءًا. مكسب الإصدار 1 صغير، لكن ما يزداد سوءًا خاصية اختيارية أخرى هي في الحقيقة إلزامية لنوع واحد. أمّا الكيان الجديد والاستعلام الذي يُسقط المحافظ فكلفتا تصميم الكيانات الثلاثة: فالجدول الواحد PAYMENT ما زال يحمل كل دفعة. والإصدار 3 يضيف صندوقًا داخليًّا واحدًا فيه * Wallet ID ولا يخسر شيئًا."
      }
    },

    /* ---------------------------------------------------- 6 · spotting a choice */
    {
      id: "t4l1q22", type: "order", level: "medium", topics: ["t4-choice", "t4-subdivide", "t4-when-to-subdivide"],
      q: {
        en: "The café student starts again with ORDER. Put her steps in order, from noticing the choice to the finished model.",
        ar: "تبدأ طالبة المقهى من جديد مع ORDER. رتّب خطواتها، من ملاحظة الخيار إلى النموذج النهائي."
      },
      items: [
        { en: "Notice that the business asks \"which kind?\" for every order: eat in or to go", ar: "تلاحظ أن العمل يسأل «أيّ نوع؟» عن كل طلب: أكل في المكان أم سفري" },
        { en: "List the facts kept about each kind of order", ar: "تسرد الحقائق المحفوظة عن كل نوع من الطلبات" },
        { en: "Sort them into common attributes and special properties", ar: "تفرزها إلى خصائص مشتركة وسمات خاصّة" },
        { en: "Since special properties exist, keep the common attributes in ORDER", ar: "ما دامت هناك سمات خاصّة، تُبقي الخصائص المشتركة في ORDER" },
        { en: "Draw each kind as a box inside ORDER, holding only its own properties", ar: "ترسم كل نوع صندوقًا داخل ORDER، لا يحمل إلا سماته الخاصّة" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "A choice raises the question; the special properties decide it; only then is anything drawn.",
        ar: "الخيار يطرح السؤال؛ والسمات الخاصّة تحسمه؛ وبعدها فقط يُرسم شيء."
      },
      explain: {
        en: "The choice is only the signal to ask. Listing and sorting the facts is the test: if no kind had special properties, she would stop there with a Kind attribute. Because table number belongs to eat-in and pickup time to take-away, she subdivides — common part in ORDER first, then each kind inside it.",
        ar: "الخيار إشارة للسؤال فقط. أمّا سرد الحقائق وفرزها فهو الاختبار: لو لم تكن لأيّ نوع سمات خاصّة لتوقّفت هناك بخاصية Kind. ولأن رقم الطاولة للأكل في المكان ووقت الاستلام للسفري، فهي تقسّم — الجزء المشترك في ORDER أوّلًا، ثم كل نوع داخله."
      }
    },
    {
      id: "t4l1q23", type: "mcq", level: "easy", topics: ["t4-choice"],
      q: {
        en: "A student models a café and draws ORDER with o Table Number, because take-away orders have no table. What in the business should have warned her that this was the payment problem again?",
        ar: "تُنمذج طالبة مقهى وترسم ORDER بالخاصية o Table Number، لأن طلبات السفري لا طاولة لها. ما الذي كان يجب أن ينبّهها في العمل إلى أن هذه مشكلة المدفوعات من جديد؟"
      },
      options: [
        { en: "ORDER has more than four attributes", ar: "لـ ORDER أكثر من أربع خصائص" },
        { en: "Table Number is a number, not a name", ar: "Table Number رقم لا اسم" },
        { en: "Every order has an order time", ar: "لكل طلب وقت طلب" },
        { en: "The business picks one of two kinds for every order: eat in or to go", ar: "يختار العمل لكل طلب واحدًا من نوعين: أكل في المكان أم سفري" }
      ],
      answer: 3,
      hint: {
        en: "The slides link one everyday word with supertypes and subtypes.",
        ar: "تربط الشرائح كلمة يومية واحدة بالأنواع العليا والفرعية."
      },
      explain: {
        en: "The slides: \"you can typically associate choices of something with supertypes and subtypes\" — food orders (eat in, to go) is their own example. A choice is the signal to ask whether each kind has attributes or relationships of its own. The number of attributes, or a shared order time, says nothing about kinds.",
        ar: "تقول الشرائح: «يمكنك عادةً أن تربط الخيارات (choices) في شيء ما بالأنواع العليا والفرعية» — وطلبات الطعام (أكل في المكان، سفري) مثالها هي. الخيار إشارة لتسأل هل لكل نوع خصائص أو علاقات خاصّة به. أمّا عدد الخصائص، أو وقت طلب مشترك، فلا يقول شيئًا عن الأنواع."
      }
    },
    {
      id: "t4l1q24", type: "contrast", level: "medium", topics: ["t4-when-to-subdivide", "t4-choice", "t4-type-attribute"],
      q: {
        en: "Each business offers a choice. Is it a reason to subdivide the entity, or does a type attribute already say everything?",
        ar: "كل عمل يقدّم خيارًا. هل هو سبب لتقسيم الكيان، أم أن خاصية النوع تقول كل شيء أصلًا؟"
      },
      concepts: [
        { en: "Subdivide: the kinds have special properties", ar: "قسّم: للأنواع سمات خاصّة" },
        { en: "A type attribute is enough: the kinds differ only in name", ar: "خاصية النوع تكفي: الأنواع لا تختلف إلا في الاسم" }
      ],
      rows: [
        { s: { en: "Café orders: eat-in orders have a table number, take-away orders a pickup time", ar: "طلبات المقهى: لطلبات الأكل في المكان رقم طاولة، ولطلبات السفري وقت استلام" }, a: 0 },
        { s: { en: "Grocery bags, paper or plastic; the shop records the same facts for both", ar: "أكياس البقالة، ورقية أو بلاستيكية؛ ويسجّل المتجر الحقائق نفسها لكليهما" }, a: 1 },
        { s: { en: "The shop's payments: only cards have a card number; only cheques and cards have a customer", ar: "مدفوعات المتجر: للبطاقات وحدها رقم بطاقة؛ وللشيكات والبطاقات وحدها زبون" }, a: 0 },
        { s: { en: "Another shop takes cash or cheques and records only the date and the amount for both", ar: "متجر آخر يقبل النقد أو الشيكات ولا يسجّل لكليهما إلا التاريخ والمبلغ" }, a: 1 },
        { s: { en: "Mobile-wallet payments arrive, each with a wallet ID and a customer", ar: "تصل دفعات المحفظة الإلكترونية، لكلٍّ منها رقم محفظة وزبون" }, a: 0 },
        { s: { en: "Café orders where both kinds record only an order time and the kind", ar: "طلبات مقهى لا يسجّل نوعاها إلا وقت الطلب والنوع" }, a: 1 }
      ],
      hint: {
        en: "Use the test from section 1: would some column be empty for a whole kind of row?",
        ar: "استعمل اختبار القسم 1: هل سيكون عمودٌ ما فارغًا لنوع كامل من الصفوف؟"
      },
      explain: {
        en: "The slides say \"sometimes\" it makes sense to subdivide, and name the reason: a group with special properties. Table number, card number, the customer line and wallet ID each belong to only some kinds, so those entities are subdivided. Where every kind records the same facts, a Method- or Kind-style attribute already says everything — subdividing every choice is a mistake the lesson warns about.",
        ar: "تقول الشرائح إن التقسيم يكون منطقيًّا «أحيانًا»، وتسمّي السبب: مجموعة لها سمات خاصّة. رقم الطاولة ورقم البطاقة وخط الزبون ورقم المحفظة كلٌّ منها لبعض الأنواع فقط، فتُقسَّم تلك الكيانات. وحيث يسجّل كل نوع الحقائق نفسها، تقول خاصية من نمط Method أو Kind كل شيء أصلًا — وتقسيم كل خيار خطأ حذّر منه الدرس."
      }
    }
  ]
};
