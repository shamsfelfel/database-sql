/* Question bank: T4 lesson 5 test -- Judging a Model. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-test-05"] = {
  title: { en: "Test 5 — Judging a Model", ar: "اختبار 5 — الحكم على نموذج" },
  intro: {
    en: "24 questions on lesson 5: the six checks in their fixed order, the four parts of a verdict and its witness, lineup one and the REFUNDED box, the minimal repair that loses no fact, lineup two with its repeated <code>* Price</code> and its false alarm, why the same drawing can be right at one college and wrong at another, and the overlap and coverage queries that find witnesses in real tables. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الخامس: الفحوص الستّة بترتيبها الثابت، وأجزاء الحكم الأربعة وشاهده، والتشكيلة الأولى وصندوق REFUNDED، وأصغر إصلاح لا يُضيع حقيقة، والتشكيلة الثانية بـ <code>* Price</code> المكرّرة وإنذارها الكاذب، ولماذا يكون الرسم نفسه صحيحًا في كلية وخاطئًا في أخرى، واستعلاما الازدواج والشمول اللذان يجدان الشهود في جداول حقيقية. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · a review has an order */
    {
      id: "t4l5q01", type: "order", level: "easy", topics: ["t4-review-order", "t4-model-review"],
      q: {
        en: "Put the six checks of a model review in the lesson's fixed order.",
        ar: "رتّب فحوص مراجعة النموذج (model review) الستّة بالترتيب الثابت الذي يعتمده الدرس."
      },
      items: [
        { en: "Kind of: is every inner box a kind of the outer one?", ar: "نوعٌ من: هل كل صندوق داخلي نوعٌ من الصندوق الخارجي؟" },
        { en: "More than one: does the box hold two or more subtypes?", ar: "أكثر من واحد: هل يحوي الصندوق نوعين فرعيين أو أكثر؟" },
        { en: "Exhaustive: does every instance fit some subtype?", ar: "شامل (exhaustive): هل تجد كل نسخة نوعًا فرعيًّا تنتمي إليه؟" },
        { en: "Mutually exclusive: does any instance fit two subtypes?", ar: "متنافٍ (mutually exclusive): هل توجد نسخة تنتمي إلى نوعين فرعيين؟" },
        { en: "Listed once: is what every subtype shares listed only in the supertype?", ar: "مذكور مرّة واحدة: هل ما تشترك فيه كل الأنواع الفرعية مذكور في النوع الأعلى وحده؟" },
        { en: "Earned: does each named subtype have something of its own?", ar: "مستحَقّ: هل لكل نوع فرعي مسمّى شيءٌ خاصّ به؟" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "Remove what does not belong, then count what is left, then test instances, then tidy the drawing.",
        ar: "أزِل ما لا ينتمي، ثم عُدّ ما بقي، ثم اختبر النسخ، ثم رتّب الرسم."
      },
      explain: {
        en: "Kind of, more than one, exhaustive, mutually exclusive, listed once, earned. Check 1 comes first because a box that is not a kind of the supertype is not a subtype at all: counting it or asking whether it overlaps means nothing. The instance checks (3 and 4) come before the drawing checks (5 and 6), which are about how the boxes are written, not about the data.",
        ar: "نوعٌ من، أكثر من واحد، شامل، متنافٍ، مذكور مرّة واحدة، مستحَقّ. يأتي الفحص 1 أولًا لأن الصندوق الذي ليس نوعًا من النوع الأعلى ليس نوعًا فرعيًّا أصلًا: فعدُّه أو السؤال عن تداخله بلا معنى. وفحصا النسخ (3 و4) يسبقان فحصَي الرسم (5 و6)، لأن الأخيرين يتعلّقان بطريقة كتابة الصناديق لا بالبيانات."
      }
    },

    {
      id: "t4l5q02", type: "mcq", level: "medium", topics: ["t4-review-order", "t4-model-review"],
      q: {
        en: "A draft of the shop's model puts <code>CASHIER</code> inside <code>PAYMENT</code>, beside <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>, with no <code>OTHER</code>. A reviewer starts the review. What is the first finding?",
        ar: "تضع مسوّدة لنموذج المتجر <code>CASHIER</code> داخل <code>PAYMENT</code>، بجانب <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>، دون <code>OTHER</code>. يبدأ مراجعٌ المراجعة. ما أوّل ما يسجّله؟"
      },
      options: [
        { en: "Check 3: there is no <code>OTHER</code>, so a gift voucher would fit no box", ar: "الفحص 3: لا يوجد <code>OTHER</code>، فقسيمة الهدية لن تجد صندوقًا" },
        { en: "Check 6: <code>CASHIER</code> has no attribute of its own drawn, so it is not earned", ar: "الفحص 6: لم تُرسم لـ <code>CASHIER</code> خاصية خاصّة به، فهو غير مستحَقّ" },
        { en: "Check 1: a cashier takes payments but is not a kind of payment, so <code>CASHIER</code> leaves the box", ar: "الفحص 1: أمين الصندوق يستلم الدفعات لكنه ليس نوعًا من الدفعة، فيخرج <code>CASHIER</code> من الصندوق" },
        { en: "Check 4: a card payment taken by a cashier sits in two boxes", ar: "الفحص 4: دفعة البطاقة التي يستلمها أمين صندوق تجلس في صندوقين" }
      ],
      answer: 2,
      hint: {
        en: "Before you count boxes or test instances, ask whether every box belongs in the hierarchy at all.",
        ar: "قبل أن تعدّ الصناديق أو تختبر النسخ، اسأل: هل ينتمي كل صندوق إلى التسلسل أصلًا؟"
      },
      explain: {
        en: "Check 1 comes first, and it fails: \"every <code>CASHIER</code> is a <code>PAYMENT</code>\" is false. A cashier is related to payments, so it becomes its own entity, joined by a line. The missing <code>OTHER</code> is tempting because it is visible at a glance, but judging coverage while a box that does not belong is still inside counts the wrong set. The card-plus-cashier overlap is a symptom of the same check 1 mistake.",
        ar: "الفحص 1 أولًا، وهو يفشل: عبارة «كل <code>CASHIER</code> هو <code>PAYMENT</code>» خاطئة. أمين الصندوق مرتبط بالدفعات، فيصير كيانًا مستقلًّا يصله خطّ. وغياب <code>OTHER</code> مغرٍ لأنه يُرى من النظرة الأولى، لكن الحكم على الشمول وفي الداخل صندوقٌ لا ينتمي يعني عدّ المجموعة الخطأ. وتداخل البطاقة مع أمين الصندوق عَرَضٌ لخطأ الفحص 1 نفسه."
      }
    },

    {
      id: "t4l5q03", type: "match", level: "easy", topics: ["t4-witness-instance", "t4-review-order"],
      q: {
        en: "Each witness comes from this chapter. Match it to the check it proves broken.",
        ar: "كل شاهد مما يلي من هذا الفصل. صِله بالفحص الذي يُثبت خرقه."
      },
      leftHead: { en: "Witness", ar: "الشاهد" },
      rightHead: { en: "Failed check", ar: "الفحص الفاشل" },
      pairs: [
        { l: { en: "\"Every <code>CUSTOMER</code> is a <code>PAYMENT</code>\" is false", ar: "عبارة «كل <code>CUSTOMER</code> هو <code>PAYMENT</code>» خاطئة" },
          r: { en: "1 · kind of", ar: "1 · نوعٌ من" } },
        { l: { en: "<code>SNOW SPORT</code> holds only <code>SKI</code>", ar: "<code>SNOW SPORT</code> لا يحوي إلا <code>SKI</code>" },
          r: { en: "2 · more than one", ar: "2 · أكثر من واحد" } },
        { l: { en: "WC5, the oak wood panel, fits no box", ar: "WC5، لوح خشب البلّوط، لا يجد صندوقًا" },
          r: { en: "3 · exhaustive", ar: "3 · شامل" } },
        { l: { en: "Payment 5 is a <code>CREDIT CARD</code> and a <code>REFUNDED</code>", ar: "الدفعة 5 هي <code>CREDIT CARD</code> و<code>REFUNDED</code> معًا" },
          r: { en: "4 · mutually exclusive", ar: "4 · متنافٍ" } },
        { l: { en: "<code>* Price</code> drawn in all four subtypes of <code>WALL COVERING</code>", ar: "<code>* Price</code> مرسومة في الأنواع الفرعية الأربعة لـ <code>WALL COVERING</code>" },
          r: { en: "5 · listed once", ar: "5 · مذكور مرّة واحدة" } }
      ],
      hint: {
        en: "Two kinds of witness: an instance (a customer, a product, a payment) or the drawing itself (a box count, a repeated line).",
        ar: "للشاهد نوعان: نسخة (زبون، منتج، دفعة) أو الرسم نفسه (عدد الصناديق، سطر مكرّر)."
      },
      explain: {
        en: "Checks 1, 3 and 4 are proved by an instance: Linda the customer, the oak panel, payment 5. Checks 2 and 5 are about the drawing, so their witness is the drawing: one box where there must be two, one attribute written four times. The tile-and-panel pair is tempting for check 4, but WC5 sits in <em>no</em> box, not in two.",
        ar: "الفحوص 1 و3 و4 تُثبتها نسخة: الزبونة ليندا، ولوح البلّوط، والدفعة 5. والفحصان 2 و5 يتعلّقان بالرسم، فشاهدهما الرسم: صندوق واحد حيث يجب أن يكون اثنان، وخاصية واحدة مكتوبة أربع مرّات. وقد يُغري ربط لوح البلّوط بالفحص 4، لكن WC5 لا يجلس في <em>أيّ</em> صندوق، لا في صندوقين."
      }
    },

    {
      id: "t4l5q04", type: "fill", level: "easy", topics: ["t4-verdict", "t4-refund-overlap"],
      q: {
        en: "Write the verdict on lineup one's panel C, where <code>REFUNDED</code> sits beside <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>. Give the box, the check number, and the payment number of the witness.",
        ar: "اكتب الحكم (verdict) على اللوحة ج من التشكيلة الأولى، حيث يقف <code>REFUNDED</code> بجانب <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>. اذكر الصندوق، ورقم الفحص، ورقم الدفعة الشاهدة."
      },
      lang: "text",
      code: "box       ____1____\ncheck     ____2____, mutually exclusive\nwitness   payment ____3____: a CREDIT CARD and a REFUNDED\nrepair    replace REFUNDED by o Refund Date in PAYMENT",
      blanks: [
        { accept: ["PAYMENT", "payment", "Payment"] },
        { accept: ["4", "four", "Four", "check 4"] },
        { accept: ["5", "five", "Five"] }
      ],
      hint: {
        en: "The box is the one with subtypes inside it. On which date was a payment refunded, and how was it paid?",
        ar: "الصندوق هو الذي يحوي الأنواع الفرعية. أيّ دفعة استُردّت في 5 آذار، وكيف دُفعت؟"
      },
      explain: {
        en: "<code>PAYMENT</code>, check 4, payment 5. Linda paid 220 by credit card and was refunded on 5 March, so payment 5 belongs in two boxes. The box of a verdict is the supertype being judged, not <code>REFUNDED</code>, even though <code>REFUNDED</code> is the box that has to go: the check is asked of the hierarchy as a whole.",
        ar: "<code>PAYMENT</code>، الفحص 4، الدفعة 5. دفعت ليندا 220 ببطاقة ائتمان واستُردّ المبلغ في 5 آذار، فالدفعة 5 تنتمي إلى صندوقين. وصندوق الحكم هو النوع الأعلى قيد الفحص، لا <code>REFUNDED</code>، مع أن <code>REFUNDED</code> هو ما يجب أن يزول: فالفحص يُطرح على التسلسل كلّه."
      }
    },

    {
      id: "t4l5q05", type: "tf", level: "easy", topics: ["t4-verdict", "t4-witness-instance"],
      q: {
        en: "\"<code>WALL COVERING</code> breaks rule two. Add <code>OTHER</code>.\" is a complete verdict.",
        ar: "«<code>WALL COVERING</code> يخرق القاعدة الثانية. أضِف <code>OTHER</code>.» حكمٌ كامل."
      },
      truth: false,
      hint: {
        en: "Count the parts a verdict needs, and look for the one that would let the designer answer \"every product fits\".",
        ar: "عُدّ الأجزاء التي يحتاجها الحكم، وابحث عن الجزء الذي يسمح غيابه للمصمّم بأن يردّ «كل منتج يجد صندوقه»."
      },
      explain: {
        en: "False. It names the box, the rule and the repair, but no witness. Without one instance — the ceramic tile WC4, say — the designer can reply \"every product fits\" and nobody can settle it. A verdict has four parts: box, failed check, witness, repair. If you cannot name the instance, look again before you accuse the model.",
        ar: "خطأ. يذكر الصندوق والقاعدة والإصلاح، لكن بلا شاهد. فمن دون نسخة واحدة — البلاطة الخزفية WC4 مثلًا — يستطيع المصمّم أن يردّ «كل منتج يجد صندوقه» ولا يحسم أحدٌ الأمر. للحكم أربعة أجزاء: الصندوق، والفحص الفاشل، والشاهد، والإصلاح. وإن لم تستطع تسمية النسخة فانظر مرّة أخرى قبل أن تتّهم النموذج."
      }
    },

    /* ---------------------------------------------------- 2 · lineup one, REFUNDED */
    {
      id: "t4l5q06", type: "tf", level: "medium", topics: ["t4-pick-the-broken-model", "t4-diagram-accuracy"],
      q: {
        en: "In lineup one, panel A (the course whose every exam is a quiz, a midterm or a final) fails check 3, because <code>EXAM</code> has no <code>OTHER</code> subtype.",
        ar: "في التشكيلة الأولى، تفشل اللوحة أ (المقرّر الذي كل امتحاناته قصيرة أو نصفية أو نهائية) في الفحص 3، لأن <code>EXAM</code> بلا نوع فرعي <code>OTHER</code>."
      },
      truth: false,
      hint: {
        en: "Read the panel's caption. Does any exam of that course fit no box?",
        ar: "اقرأ تعليق اللوحة. هل يوجد امتحان في ذلك المقرّر لا يجد صندوقًا؟"
      },
      explain: {
        en: "False. Check 3 asks whether every instance fits some subtype, and the caption says every exam is a quiz, a midterm or a final: there is no witness. <code>OTHER</code> is the slides' good practice when you are not sure the list is complete, not a box every hierarchy must have. The broken panel is C, with payment 5 as its witness.",
        ar: "خطأ. يسأل الفحص 3 هل تجد كل نسخة نوعًا فرعيًّا، والتعليق يقول إن كل امتحان قصير أو نصفي أو نهائي: لا شاهد إذن. و<code>OTHER</code> ممارسة جيّدة تنصح بها الشرائح حين لا تكون متأكّدًا من اكتمال القائمة، لا صندوقٌ يجب أن يحويه كل تسلسل. اللوحة المعطوبة هي ج، وشاهدها الدفعة 5."
      }
    },

    {
      id: "t4l5q07", type: "error", level: "easy", topics: ["t4-refund-overlap", "t4-pick-the-broken-model"],
      q: {
        en: "Lineup one's panel C, as text. On 5 March Linda was refunded 220 for payment 5, which she made by credit card. Which line breaks one of the three rules?",
        ar: "اللوحة ج من التشكيلة الأولى، نصًّا. في 5 آذار استردّت ليندا 220 عن الدفعة 5، التي دفعتها ببطاقة ائتمان. أيّ سطر يخرق إحدى القواعد الثلاث؟"
      },
      lang: "text",
      code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\n  REFUNDED     * Refund Date",
      answer: 5,
      solution: {
        code: "PAYMENT        # Payment ID  * Payment Date  * Amount  o Refund Date\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number",
        en: "REFUNDED leaves the hierarchy; its date becomes an optional attribute of PAYMENT.",
        ar: "يخرج REFUNDED من التسلسل؛ ويصير تاريخه خاصية اختيارية في PAYMENT."
      },
      hint: {
        en: "What question does each box answer? A box that answers a different question lets one payment answer both.",
        ar: "عن أيّ سؤال يجيب كل صندوق؟ الصندوق الذي يجيب عن سؤال مختلف يسمح لدفعة واحدة بأن تجيب عن السؤالين."
      },
      explain: {
        en: "Line 5. <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code> answer \"how did they pay?\"; <code>REFUNDED</code> answers \"was it refunded?\". Payment 5 answers both, so it sits in two boxes and rule three (mutually exclusive) fails. Line 4 is tempting because payment 5 is there too, but it is the right box for a card payment; the stray question is on line 5.",
        ar: "السطر 5. <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code> تجيب عن «كيف دفعوا؟»؛ و<code>REFUNDED</code> يجيب عن «هل استُردّت؟». الدفعة 5 تجيب عن السؤالين، فتجلس في صندوقين وتفشل القاعدة الثالثة (التنافي). والسطر 4 مغرٍ لأن الدفعة 5 فيه أيضًا، لكنه الصندوق الصحيح لدفعة بالبطاقة؛ أمّا السؤال الدخيل ففي السطر 5."
      }
    },

    {
      id: "t4l5q08", type: "compare", level: "medium", topics: ["t4-refund-overlap", "t4-minimal-repair"],
      q: {
        en: "Versions 1 and 2 of the refund evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر الاسترداد، نصًّا. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\n  REFUNDED     * Refund Date",
      codeB: "PAYMENT        # Payment ID  * Payment Date  * Amount\n               o Refund Date\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number",
      options: [
        { en: "A is better: refunds are rare, so a separate box keeps the refund date out of most payments", ar: "A أفضل: الاسترداد نادر، فالصندوق المنفصل يُبعد تاريخ الاسترداد عن معظم الدفعات" },
        { en: "B is better: A is not exhaustive, since a refunded cash payment fits no box", ar: "B أفضل: A غير شامل، لأن الدفعة النقدية المستردّة لا تجد صندوقًا" },
        { en: "B is better: in A payment 5 is both a credit card payment and a refunded one; B makes it exactly one <code>CREDIT CARD</code> with a refund date, and loses no fact", ar: "B أفضل: في A الدفعة 5 دفعة بطاقة ائتمان ودفعة مستردّة معًا؛ وB يجعلها <code>CREDIT CARD</code> واحدة لها تاريخ استرداد، دون أن يُضيع أيّ حقيقة" },
        { en: "They store the same facts, so either is acceptable", ar: "يخزّنان الحقائق نفسها، فكلاهما مقبول" }
      ],
      answer: 2,
      hint: {
        en: "Put payment 5 into each model. How many boxes does it sit in?",
        ar: "ضع الدفعة 5 في كل نموذج. في كم صندوقًا تجلس؟"
      },
      explain: {
        en: "B is the recommended model. In A payment 5 fits two boxes, so rule three fails; B moves the refund question into an optional attribute of the supertype, and payment 5 keeps both its card number and its refund date. The \"rare\" argument is tempting, but <code>o</code> already says most payments have no value. A refunded cash payment fits <code>CASH</code> and <code>REFUNDED</code> in A — two boxes, not none.",
        ar: "B هو النموذج الموصى به. في A تنتمي الدفعة 5 إلى صندوقين، فتفشل القاعدة الثالثة؛ وB ينقل سؤال الاسترداد إلى خاصية اختيارية في النوع الأعلى، فتحتفظ الدفعة 5 برقم بطاقتها وتاريخ استردادها معًا. وحجّة «النادر» مغرية، لكن الرمز <code>o</code> يقول أصلًا إن معظم الدفعات بلا قيمة. والدفعة النقدية المستردّة في A تنتمي إلى <code>CASH</code> و<code>REFUNDED</code> — صندوقان، لا صفر."
      }
    },

    {
      id: "t4l5q09", type: "multi", level: "hard", topics: ["t4-minimal-repair", "t4-refund-overlap"],
      q: {
        en: "Four proposals to repair panel C. Which of them lose a fact the model stored about payment 5? Choose every one.",
        ar: "أربعة اقتراحات لإصلاح اللوحة ج. أيّها يُضيع حقيقة كان النموذج يخزّنها عن الدفعة 5؟ اختر كل اقتراح منها."
      },
      options: [
        { en: "Delete <code>REFUNDED</code> and its attribute", ar: "حذف <code>REFUNDED</code> وخاصيته" },
        { en: "Take payment 5 out of <code>CREDIT CARD</code> and keep it in <code>REFUNDED</code> only", ar: "إخراج الدفعة 5 من <code>CREDIT CARD</code> وإبقاؤها في <code>REFUNDED</code> وحده" },
        { en: "Replace <code>REFUNDED</code> by <code>o Refund Date</code> in <code>PAYMENT</code>", ar: "استبدال <code>REFUNDED</code> بـ <code>o Refund Date</code> في <code>PAYMENT</code>" },
        { en: "Replace <code>REFUNDED</code> by a yes/no <code>* Refunded</code> in <code>PAYMENT</code>", ar: "استبدال <code>REFUNDED</code> بخاصية نعم/لا <code>* Refunded</code> في <code>PAYMENT</code>" }
      ],
      answer: [0, 1, 3],
      hint: {
        en: "List what panel C knows about payment 5: date, amount, card number, refund date. Check each proposal against the list.",
        ar: "اكتب ما تعرفه اللوحة ج عن الدفعة 5: التاريخ، والمبلغ، ورقم البطاقة، وتاريخ الاسترداد. وقارن كل اقتراح بهذه القائمة."
      },
      explain: {
        en: "Deleting the box drops the refund date; leaving payment 5 in <code>REFUNDED</code> alone drops its card number; a yes/no flag keeps the fact of the refund but drops its date. All three make check 4 pass, which is why they tempt. Only <code>o Refund Date</code> moves the fact instead of dropping it: that is a minimal repair.",
        ar: "حذف الصندوق يُسقط تاريخ الاسترداد؛ وإبقاء الدفعة 5 في <code>REFUNDED</code> وحده يُسقط رقم بطاقتها؛ وعلامة نعم/لا تحفظ وقوع الاسترداد لكنها تُسقط تاريخه. والثلاثة كلها تُنجح الفحص 4، ولهذا تغري. أمّا <code>o Refund Date</code> وحدها فتنقل الحقيقة بدل أن تُسقطها: وهذا هو أصغر إصلاح (minimal repair)."
      }
    },

    {
      id: "t4l5q10", type: "output", level: "medium", topics: ["t4-minimal-repair", "t4-refund-overlap"],
      q: {
        en: "Version 2 built as one table: the six March payments, with <code>refund_date</code> set only on payment 5 (220, credit card). What does the query return?",
        ar: "الإصدار 2 مبنيًّا جدولًا واحدًا: دفعات آذار الست، و<code>refund_date</code> لها قيمة في الدفعة 5 وحدها (220، بطاقة ائتمان). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT SUM(amount) AS taken,\n       SUM(CASE WHEN refund_date IS NULL THEN amount ELSE 0 END) AS kept\nFROM payments;",
      blanks: [
        { accept: ["800"], label: "taken" },
        { accept: ["580"], label: "kept" }
      ],
      hint: {
        en: "The amounts are 40, 125, 310, 15, 220 and 90. Which one does <code>kept</code> leave out?",
        ar: "المبالغ هي 40 و125 و310 و15 و220 و90. أيّها يستبعده <code>kept</code>؟"
      },
      explain: {
        en: "Run in alasql: taken 800, kept 580. Payment 5 stays one row, a credit card payment with a refund date, so it counts once in <code>taken</code> and drops out of <code>kept</code>. In version 1 it would have one row in the card table and one in the refunded table, and summing by box would count its 220 twice.",
        ar: "نُفّذ في alasql: taken = 800 وkept = 580. تبقى الدفعة 5 صفًّا واحدًا، دفعة بطاقة ائتمان لها تاريخ استرداد، فتُعدّ مرّة واحدة في <code>taken</code> وتسقط من <code>kept</code>. وفي الإصدار 1 لها صفّ في جدول البطاقات وصفّ في جدول المستردّات، والجمع بحسب الصندوق يعدّ مبلغها 220 مرّتين."
      },
      solution: {
        out: "taken | kept\n800   | 580",
        en: "Run in alasql against the lesson's section 2 table.",
        ar: "نُفّذ في alasql على جدول القسم 2 في الدرس."
      }
    },

    {
      id: "t4l5q11", type: "trace", level: "hard", topics: ["t4-minimal-repair", "t4-refund-overlap"],
      q: {
        en: "The same version 2 table, whose <code>method</code> column has <code>CHECK (method IN ('CASH','CHECK','CREDIT CARD'))</code>. The script runs one statement at a time. What does the final <code>SELECT</code> return?",
        ar: "جدول الإصدار 2 نفسه، وفي عموده <code>method</code> القيد <code>CHECK (method IN ('CASH','CHECK','CREDIT CARD'))</code>. يُنفَّذ السكربت عبارةً عبارة. ماذا يُرجع الـ <code>SELECT</code> الأخير؟"
      },
      lang: "sql",
      code: "UPDATE payments SET method = 'REFUNDED' WHERE payment_id = 5;\nUPDATE payments SET refund_date = '2026-03-06' WHERE payment_id = 1;\n\nSELECT method, COUNT(*) AS payments, COUNT(refund_date) AS refunds\nFROM payments\nGROUP BY method\nORDER BY method;",
      options: [
        { en: "CASH 2 1 · CHECK 2 0 · CREDIT CARD 2 1", ar: "CASH 2 1 · CHECK 2 0 · CREDIT CARD 2 1" },
        { en: "CASH 2 1 · CHECK 2 0 · CREDIT CARD 1 0 · REFUNDED 1 1", ar: "CASH 2 1 · CHECK 2 0 · CREDIT CARD 1 0 · REFUNDED 1 1" },
        { en: "CASH 2 0 · CHECK 2 0 · CREDIT CARD 2 1, since a cash payment cannot take a refund date", ar: "CASH 2 0 · CHECK 2 0 · CREDIT CARD 2 1، لأن الدفعة النقدية لا تقبل تاريخ استرداد" },
        { en: "Nothing: the first <code>UPDATE</code> fails, so the script stops and the table is unchanged", ar: "لا شيء: يفشل أوّل <code>UPDATE</code>، فيتوقّف السكربت ولا يتغيّر الجدول" }
      ],
      answer: 0,
      hint: {
        en: "Is <code>'REFUNDED'</code> on the list of methods? And which box of version 2 holds <code>o Refund Date</code>?",
        ar: "هل <code>'REFUNDED'</code> في قائمة طرق الدفع؟ وأيّ صندوق في الإصدار 2 يحمل <code>o Refund Date</code>؟"
      },
      explain: {
        en: "Run in alasql. The first update is refused (<code>Violation of CHECK constraint</code>): version 1's move is impossible, and payment 5 stays a credit card payment with its refund date. The second succeeds, because the refund date lives in <code>PAYMENT</code> and every subtype inherits it, cash included. Statements run one at a time, so one failure does not stop the rest.",
        ar: "نُفّذ في alasql. يُرفض التحديث الأول (<code>Violation of CHECK constraint</code>): حركة الإصدار 1 مستحيلة، وتبقى الدفعة 5 دفعة بطاقة ائتمان بتاريخ استردادها. وينجح الثاني، لأن تاريخ الاسترداد في <code>PAYMENT</code> ويرثه كل نوع فرعي، ومنه النقد. والعبارات تُنفَّذ واحدةً واحدة، ففشل إحداها لا يوقف البقيّة."
      },
      solution: {
        out: "UPDATE 5 → Violation of CHECK constraint\nUPDATE 1 → 1\nmethod      | payments | refunds\nCASH        | 2        | 1\nCHECK       | 2        | 0\nCREDIT CARD | 2        | 1",
        en: "Run in alasql against the lesson's section 2 table.",
        ar: "نُفّذ في alasql على جدول القسم 2 في الدرس."
      }
    },

    /* ---------------------------------------------------- 3 · lineup two, repeated price */
    {
      id: "t4l5q12", type: "error", level: "hard", topics: ["t4-repeated-common-attribute", "t4-false-alarm", "t4-listed-once-check"],
      q: {
        en: "The shop now emails a receipt for every payment, cash included, and cheques and cards still carry a customer. A designer drew it like this. Which lines carry a defect? Choose every one.",
        ar: "صار المتجر يرسل إيصالًا بالبريد الإلكتروني لكل دفعة، ومنها النقدية، وما زال للشيكات والبطاقات زبون. رسمها مصمّم هكذا. أيّ الأسطر فيها خلل؟ اختر كل سطر منها."
      },
      lang: "text",
      code: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH         o Receipt Email\n  CHECK        o Receipt Email\n  CREDIT CARD  * Card Number  o Receipt Email\nCUSTOMER       # Customer ID  * Name\nCHECK       -- made by / make -- CUSTOMER\nCREDIT CARD -- made by / make -- CUSTOMER",
      answer: [2, 3, 4],
      solution: {
        code: "PAYMENT        # Payment ID  * Payment Date  * Amount  o Receipt Email\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number\nCUSTOMER       # Customer ID  * Name\nCHECK       -- made by / make -- CUSTOMER\nCREDIT CARD -- made by / make -- CUSTOMER",
        en: "o Receipt Email is lifted into PAYMENT; the two made by lines stay where they are.",
        ar: "تُرفع o Receipt Email إلى PAYMENT؛ ويبقى خطّا made by حيث هما."
      },
      hint: {
        en: "Two things are drawn more than once. For each, ask: is it common to <em>every</em> subtype, or only to some?",
        ar: "شيئان مرسومان أكثر من مرّة. اسأل عن كلٍّ منهما: هل هو مشترك بين <em>كل</em> الأنواع الفرعية، أم بين بعضها فقط؟"
      },
      explain: {
        en: "Lines 2, 3 and 4 fail check 5: every kind of payment can have a receipt email, so it is listed once, in <code>PAYMENT</code>, and inherited. Lines 6 and 7 are the false alarm: the line is drawn twice, but <code>CASH</code> has no customer, so it is not common to all. Lifting it into <code>PAYMENT</code> would give every cash payment a customer.",
        ar: "الأسطر 2 و3 و4 تفشل في الفحص 5: لكل نوع من الدفعات أن يحمل بريد إيصال، فتُذكر مرّة واحدة في <code>PAYMENT</code> وتُورَث. أمّا السطران 6 و7 فإنذار كاذب (false alarm): الخطّ مرسوم مرّتين، لكن <code>CASH</code> بلا زبون، فليس مشتركًا بين الجميع. ورفعه إلى <code>PAYMENT</code> يعطي كل دفعة نقدية زبونًا."
      }
    },

    {
      id: "t4l5q13", type: "compare", level: "easy", topics: ["t4-repeated-common-attribute", "t4-listed-once-check"],
      q: {
        en: "Versions 1 and 2 of the price evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر السعر، نصًّا. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "WALL COVERING  # Code  * Description\n  PAINT        * Litres       * Price\n  WALLPAPER    * Roll Length  * Price\n  FABRIC       * Material     * Price\n  OTHER        * Price",
      codeB: "WALL COVERING  # Code  * Description  * Price\n  PAINT        * Litres\n  WALLPAPER    * Roll Length\n  FABRIC       * Material\n  OTHER",
      options: [
        { en: "B is better: every product has a price, so it is listed once in the supertype and inherited by every subtype, including any added later", ar: "B أفضل: لكل منتج سعر، فيُذكر مرّة واحدة في النوع الأعلى ويرثه كل نوع فرعي، ومنه أيّ نوع يُضاف لاحقًا" },
        { en: "A is better: each subtype shows all its attributes, so nothing is hidden", ar: "A أفضل: يُظهر كل نوع فرعي كل خصائصه، فلا شيء مخفيّ" },
        { en: "B is better only because A breaks rule two", ar: "B أفضل فقط لأن A يخرق القاعدة الثانية" },
        { en: "B is wrong: its <code>OTHER</code> now holds nothing, so it fails check 6", ar: "B خاطئ: صار <code>OTHER</code> فيه لا يحمل شيئًا، فيفشل في الفحص 6" }
      ],
      answer: 0,
      hint: {
        en: "Both pass the three rules. Look at what is written four times.",
        ar: "كلاهما يجتاز القواعد الثلاث. انظر إلى ما كُتب أربع مرّات."
      },
      explain: {
        en: "B is the lesson's recommended model. A fails check 5: <code>* Price</code> is common to every subtype but listed four times, and the model says nothing about a fifth subtype's price. \"Nothing hidden\" tempts, but inheritance already shows it in every subtype. <code>OTHER</code> is exempt from check 6: its job is to hold the rest.",
        ar: "B هو النموذج الموصى به في الدرس. A يفشل في الفحص 5: <code>* Price</code> مشتركة بين كل الأنواع الفرعية لكنها مذكورة أربع مرّات، والنموذج لا يقول شيئًا عن سعر نوع فرعي خامس. وحجّة «لا شيء مخفيّ» مغرية، لكن الوراثة تُظهرها في كل نوع فرعي أصلًا. و<code>OTHER</code> معفى من الفحص 6: وظيفته أن يحوي البقيّة."
      }
    },

    {
      id: "t4l5q14", type: "tf", level: "easy", topics: ["t4-false-alarm"],
      q: {
        en: "In lineup two's panel B, the <code>made by</code> line is drawn from <code>CHECK</code> and again from <code>CREDIT CARD</code>. Check 5 says to draw it once, from <code>PAYMENT</code>.",
        ar: "في اللوحة ب من التشكيلة الثانية، يُرسم خطّ <code>made by</code> من <code>CHECK</code> ومرّة أخرى من <code>CREDIT CARD</code>. والفحص 5 يقول ارسمه مرّة واحدة من <code>PAYMENT</code>."
      },
      truth: false,
      hint: {
        en: "Check 5 is about what <em>all</em> subtypes share. Does a cash payment have a customer?",
        ar: "الفحص 5 يتعلّق بما تشترك فيه <em>كل</em> الأنواع الفرعية. هل للدفعة النقدية زبون؟"
      },
      explain: {
        en: "False — it is the false alarm of lineup two. The line is shared by two subtypes, not all three: cash payments have no customer. Drawing it from <code>PAYMENT</code> would make every subtype inherit it, so every cash payment would get a customer. Drawn twice is not the defect; drawn twice <em>for every subtype</em> is.",
        ar: "خطأ — هذا هو الإنذار الكاذب في التشكيلة الثانية. يشترك في الخطّ نوعان فرعيان لا ثلاثة: الدفعات النقدية بلا زبون. ورسمه من <code>PAYMENT</code> يجعل كل نوع فرعي يرثه، فتحصل كل دفعة نقدية على زبون. التكرار ليس هو الخلل؛ الخلل هو التكرار <em>في كل نوع فرعي</em>."
      }
    },

    {
      id: "t4l5q15", type: "contrast", level: "medium", topics: ["t4-false-alarm", "t4-repeated-common-attribute", "t4-model-review"],
      q: {
        en: "Each finding comes from a review in this chapter. Is it a real defect, or a false alarm that passes every check?",
        ar: "كل ملاحظة مما يلي من مراجعة في هذا الفصل. هل هي خلل حقيقي، أم إنذار كاذب يجتاز كل الفحوص؟"
      },
      concepts: [
        { en: "Real defect", ar: "خلل حقيقي" },
        { en: "False alarm", ar: "إنذار كاذب" }
      ],
      rows: [
        { s: { en: "<code>* Price</code> drawn in <code>PAINT</code>, <code>WALLPAPER</code>, <code>FABRIC</code> and <code>OTHER</code>", ar: "<code>* Price</code> مرسومة في <code>PAINT</code> و<code>WALLPAPER</code> و<code>FABRIC</code> و<code>OTHER</code>" }, a: 0 },
        { s: { en: "<code>made by</code> drawn from <code>CHECK</code> and from <code>CREDIT CARD</code>, but not from <code>CASH</code>", ar: "<code>made by</code> مرسوم من <code>CHECK</code> ومن <code>CREDIT CARD</code>، لا من <code>CASH</code>" }, a: 1 },
        { s: { en: "<code>OTHER</code> inside <code>SNOW SPORT</code> lists no attribute of its own", ar: "<code>OTHER</code> داخل <code>SNOW SPORT</code> لا يذكر أيّ خاصية خاصّة به" }, a: 1 },
        { s: { en: "<code>ANIMAL</code> → <code>VERTEBRATE</code> → <code>BIRD</code>: the hierarchy has two levels", ar: "<code>ANIMAL</code> ← <code>VERTEBRATE</code> ← <code>BIRD</code>: للتسلسل مستويان" }, a: 1 },
        { s: { en: "<code>* Weight</code> and <code>* Date</code> drawn in <code>QUIZ</code>, <code>MIDTERM</code> and <code>FINAL</code>", ar: "<code>* Weight</code> و<code>* Date</code> مرسومتان في <code>QUIZ</code> و<code>MIDTERM</code> و<code>FINAL</code>" }, a: 0 },
        { s: { en: "<code>REFUNDED</code> drawn beside <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>", ar: "<code>REFUNDED</code> مرسوم بجانب <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>" }, a: 0 },
        { s: { en: "<code>ORDER</code> has only <code>EAT IN</code> and <code>TO GO</code>, at a café that serves only those two ways", ar: "<code>ORDER</code> لا يحوي إلا <code>EAT IN</code> و<code>TO GO</code>، في مقهى لا يقدّم إلا بهاتين الطريقتين" }, a: 1 }
      ],
      hint: {
        en: "Run the six checks on each. Something that merely looks unusual — an empty box, a second level, a line drawn twice — is not yet a failed check.",
        ar: "طبّق الفحوص الستّة على كلٍّ منها. ما يبدو غريبًا فقط — صندوق فارغ، مستوى ثانٍ، خطّ مرسوم مرّتين — ليس بعدُ فحصًا فاشلًا."
      },
      explain: {
        en: "Price, weight and date are common to every subtype and drawn in each: check 5. <code>REFUNDED</code> lets payment 5 sit in two boxes: check 4. The rest pass: <code>made by</code> is shared by some subtypes, not all; <code>OTHER</code> is exempt from check 6; two levels is the readability guideline; and the café's two boxes are exhaustive for that business.",
        ar: "السعر والوزن والتاريخ مشتركة بين كل الأنواع الفرعية ومرسومة في كلٍّ منها: الفحص 5. و<code>REFUNDED</code> يُجلس الدفعة 5 في صندوقين: الفحص 4. والباقي يجتاز: <code>made by</code> مشترك بين بعض الأنواع الفرعية لا كلّها؛ و<code>OTHER</code> معفى من الفحص 6؛ والمستويان هما إرشاد سهولة القراءة؛ وصندوقا المقهى شاملان لذلك العمل."
      }
    },

    {
      id: "t4l5q16", type: "output", level: "medium", topics: ["t4-repeated-common-attribute", "t4-listed-once-check"],
      q: {
        en: "Version 1 of the price block, built table per box: WC1 (paint, 18), WC2 (wallpaper, 25), WC3 (fabric, 60), and WC4 (3) and WC5 (45) in <code>others</code>. A clerk asks for every product under 30 and writes this. What does it return?",
        ar: "الإصدار 1 من كتلة السعر، مبنيًّا جدولًا لكل صندوق: WC1 (دهان، 18)، وWC2 (ورق جدران، 25)، وWC3 (قماش، 60)، وWC4 (3) وWC5 (45) في <code>others</code>. يطلب موظّف كل منتج سعره أقل من 30 فيكتب هذا. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "SELECT code, price FROM paints     WHERE price < 30\nUNION ALL\nSELECT code, price FROM wallpapers WHERE price < 30\nUNION ALL\nSELECT code, price FROM fabrics    WHERE price < 30;",
      options: [
        { en: "WC1 18 · WC2 25 · WC4 3", ar: "WC1 18 · WC2 25 · WC4 3" },
        { en: "An error: the <code>others</code> table is not mentioned", ar: "خطأ: الجدول <code>others</code> غير مذكور" },
        { en: "WC1 18 · WC2 25", ar: "WC1 18 · WC2 25" },
        { en: "WC1 18 · WC2 25 · WC3 60", ar: "WC1 18 · WC2 25 · WC3 60" }
      ],
      answer: 2,
      hint: {
        en: "Each <code>SELECT</code> reads only its own table. Where does the ceramic tile's price live?",
        ar: "كل <code>SELECT</code> يقرأ جدوله وحده. أين يعيش سعر البلاطة الخزفية؟"
      },
      explain: {
        en: "Run in alasql: WC1 18 and WC2 25. The tile, WC4 at 3, is in <code>others</code>, which the clerk forgot, and the database raises no error: it answers the question it was asked. That is version 1's cost — every price question must name every subtype table. In version 2, <code>price</code> is one column of <code>wall_coverings</code>, and there is nothing to forget.",
        ar: "نُفّذ في alasql: WC1 18 وWC2 25. البلاطة WC4 بسعر 3 في <code>others</code>، الذي نسيه الموظّف، ولا تُصدر قاعدة البيانات أيّ خطأ: إنها تجيب عن السؤال الذي طُرح عليها. وهذا ثمن الإصدار 1 — كل سؤال عن السعر يجب أن يسمّي كل جدول نوع فرعي. وفي الإصدار 2 <code>price</code> عمود واحد في <code>wall_coverings</code>، فلا شيء يُنسى."
      },
      solution: {
        out: "code | price\nWC1  | 18\nWC2  | 25",
        en: "Run in alasql against the lesson's section 3 tables.",
        ar: "نُفّذ في alasql على جداول القسم 3 في الدرس."
      }
    },

    /* ---------------------------------------------------- 5 · proving a verdict with data */
    {
      id: "t4l5q17", type: "write", level: "hard", topics: ["t4-overlap-query", "t4-witness-instance"],
      q: {
        en: "The <code>REFUNDED</code> model is built table per box: <code>cash_payments</code>, <code>check_payments</code>, <code>card_payments</code> and <code>refunded_payments</code>, each keyed by <code>payment_id</code>. Write the overlap query: every <code>payment_id</code> found in more than one of these tables, with the number of tables as <code>boxes</code>.",
        ar: "نموذج <code>REFUNDED</code> مبنيّ جدولًا لكل صندوق: <code>cash_payments</code> و<code>check_payments</code> و<code>card_payments</code> و<code>refunded_payments</code>، ومفتاح كلٍّ منها <code>payment_id</code>. اكتب استعلام الازدواج (overlap query): كل <code>payment_id</code> يظهر في أكثر من جدول منها، مع عدد الجداول باسم <code>boxes</code>."
      },
      lang: "sql",
      lines: 7,
      starter: "SELECT payment_id, COUNT(*) AS boxes\nFROM (\n  \n) AS t\n",
      checks: [
        { re: "UNION\\s+ALL", flags: "i",
          label: { en: "stacks the subtype keys with UNION ALL", ar: "يكدّس مفاتيح الأنواع الفرعية بـ UNION ALL" } },
        { re: "\\brefunded_payments\\b", flags: "i",
          label: { en: "includes refunded_payments, the box payment 5 shares with card_payments", ar: "يشمل refunded_payments، الصندوق الذي تتشاركه الدفعة 5 مع card_payments" } },
        { re: "GROUP\\s+BY\\s+(\\w+\\.)?payment_id", flags: "i",
          label: { en: "groups by payment_id", ar: "يجمّع حسب payment_id" } },
        { re: "HAVING\\s+COUNT\\s*\\(\\s*(\\*|(\\w+\\.)?payment_id)\\s*\\)\\s*>\\s*1", flags: "i",
          label: { en: "keeps only keys found more than once", ar: "يُبقي فقط المفاتيح التي تظهر أكثر من مرّة" } }
      ],
      forbid: [
        { re: "UNION(?!\\s+ALL)", flags: "i",
          label: { en: "plain UNION removes duplicate keys, so payment 5 appears once and the witness vanishes", ar: "UNION وحدها تحذف المفاتيح المكرّرة، فتظهر الدفعة 5 مرّة واحدة ويختفي الشاهد" } }
      ],
      solution: {
        code: "SELECT payment_id, COUNT(*) AS boxes\nFROM (SELECT payment_id FROM cash_payments\n      UNION ALL SELECT payment_id FROM check_payments\n      UNION ALL SELECT payment_id FROM card_payments\n      UNION ALL SELECT payment_id FROM refunded_payments) AS t\nGROUP BY payment_id\nHAVING COUNT(*) > 1;",
        en: "Run in alasql on the lesson's section 5 tables: one row, payment_id 5, boxes 2. The same query with plain UNION returns no rows.",
        ar: "نُفّذ في alasql على جداول القسم 5 في الدرس: صفّ واحد، payment_id = 5 وboxes = 2. والاستعلام نفسه بـ UNION وحدها لا يُرجع أيّ صفّ."
      },
      hint: {
        en: "Stack every subtype table's keys into one column, keeping duplicates, then group and keep the groups bigger than one.",
        ar: "كدّس مفاتيح كل جداول الأنواع الفرعية في عمود واحد مع الإبقاء على المكرّر، ثم جمّع واحتفظ بالمجموعات الأكبر من واحد."
      },
      explain: {
        en: "No table-per-box design stops one key from appearing in two subtype tables, so the database accepts payment 5 twice and nothing fails. The overlap query finds it: <code>UNION ALL</code> keeps both copies, <code>GROUP BY</code> brings them together, and <code>HAVING COUNT(*) &gt; 1</code> keeps the witness against rule three. Plain <code>UNION</code> is the tempting shortcut, but it removes exactly the duplicate you are looking for.",
        ar: "لا يمنع أيّ تصميم بجدول لكل صندوق ظهور مفتاح واحد في جدولَي نوعين فرعيين، فتقبل قاعدة البيانات الدفعة 5 مرّتين ولا يفشل شيء. واستعلام الازدواج يجدها: <code>UNION ALL</code> تحفظ النسختين، و<code>GROUP BY</code> تجمعهما، و<code>HAVING COUNT(*) &gt; 1</code> تُبقي الشاهد على خرق القاعدة الثالثة. و<code>UNION</code> وحدها اختصار مغرٍ، لكنها تحذف بالضبط المكرّر الذي تبحث عنه."
      }
    },

    {
      id: "t4l5q18", type: "complete", level: "medium", topics: ["t4-coverage-query"],
      q: {
        en: "The coverage query on the same four subtype tables, with its condition missing. Which condition lists the payments that appear in no subtype table?",
        ar: "استعلام الشمول (coverage query) على جداول الأنواع الفرعية الأربعة نفسها، مع شرطه ناقصًا. أيّ شرط يسرد الدفعات التي لا تظهر في أيّ جدول نوع فرعي؟"
      },
      lang: "sql",
      code: "SELECT p.payment_id, p.payment_date, p.amount\nFROM payments p\nLEFT JOIN cash_payments     a ON a.payment_id = p.payment_id\nLEFT JOIN check_payments    b ON b.payment_id = p.payment_id\nLEFT JOIN card_payments     c ON c.payment_id = p.payment_id\nLEFT JOIN refunded_payments r ON r.payment_id = p.payment_id\nWHERE ____;",
      options: [
        { code: "a.payment_id IS NULL OR b.payment_id IS NULL\n  OR c.payment_id IS NULL OR r.payment_id IS NULL" },
        { code: "p.payment_id IS NULL" },
        { code: "a.payment_id IS NULL AND b.payment_id IS NULL\n  AND c.payment_id IS NULL AND r.payment_id IS NULL" },
        { code: "a.payment_id IS NOT NULL AND b.payment_id IS NOT NULL\n  AND c.payment_id IS NOT NULL AND r.payment_id IS NOT NULL" }
      ],
      answer: 2,
      hint: {
        en: "A <code>LEFT JOIN</code> fills the right side with <code>NULL</code> when nothing matched. \"In no table\" means no match in which of them?",
        ar: "<code>LEFT JOIN</code> يملأ الجانب الأيمن بـ <code>NULL</code> حين لا يوجد تطابق. «في أيّ جدول لا» تعني عدم التطابق في أيٍّ منها؟"
      },
      explain: {
        en: "All four <code>NULL</code>, joined by <code>AND</code>: the payment matched no subtype table, so it is a witness against rule two. With <code>OR</code> every payment qualifies, because each one is missing from at least three tables — run on the exercise data it returns all seven rows. <code>p.payment_id</code> is never <code>NULL</code> on the left side, and four <code>IS NOT NULL</code> would demand a payment in every box.",
        ar: "الأعمدة الأربعة كلها <code>NULL</code>، موصولة بـ <code>AND</code>: لم تطابق الدفعة أيّ جدول نوع فرعي، فهي شاهد على خرق القاعدة الثانية. ومع <code>OR</code> تتأهّل كل دفعة، لأن كلًّا منها غائبة عن ثلاثة جداول على الأقل — وعلى بيانات التمرين يُرجع الصفوف السبعة كلها. و<code>p.payment_id</code> لا يكون <code>NULL</code> أبدًا في الجانب الأيسر، وأربعة <code>IS NOT NULL</code> تطلب دفعة في كل صندوق."
      },
      solution: {
        code: "WHERE a.payment_id IS NULL AND b.payment_id IS NULL\n  AND c.payment_id IS NULL AND r.payment_id IS NULL;",
        en: "Run in alasql on the exercise data: AND returns payment 8 only; OR returns all seven payments.",
        ar: "نُفّذ في alasql على بيانات التمرين: AND يُرجع الدفعة 8 وحدها؛ وOR يُرجع الدفعات السبع كلها."
      }
    },

    {
      id: "t4l5q19", type: "output", level: "medium", topics: ["t4-coverage-query", "t4-witness-instance"],
      q: {
        en: "The exercise's data: the six March payments in their subtype tables (payment 5 in both <code>card_payments</code> and <code>refunded_payments</code>), plus payment 8, a 50 gift voucher stored in <code>payments</code> only. The coverage query of the previous question runs on it. Which payments does it return?",
        ar: "بيانات التمرين: دفعات آذار الست في جداول أنواعها الفرعية (الدفعة 5 في <code>card_payments</code> و<code>refunded_payments</code> معًا)، والدفعة 8، قسيمة هدية بقيمة 50 مخزّنة في <code>payments</code> وحده. يُنفَّذ عليها استعلام الشمول من السؤال السابق. أيّ الدفعات يُرجع؟"
      },
      lang: "sql",
      code: "SELECT p.payment_id, p.payment_date, p.amount\nFROM payments p\nLEFT JOIN cash_payments     a ON a.payment_id = p.payment_id\nLEFT JOIN check_payments    b ON b.payment_id = p.payment_id\nLEFT JOIN card_payments     c ON c.payment_id = p.payment_id\nLEFT JOIN refunded_payments r ON r.payment_id = p.payment_id\nWHERE a.payment_id IS NULL AND b.payment_id IS NULL\n  AND c.payment_id IS NULL AND r.payment_id IS NULL;",
      options: [
        { en: "Payments 5 and 8", ar: "الدفعتان 5 و8" },
        { en: "Payment 8 only", ar: "الدفعة 8 وحدها" },
        { en: "No rows", ar: "لا صفوف" },
        { en: "Payment 5 only", ar: "الدفعة 5 وحدها" }
      ],
      answer: 1,
      hint: {
        en: "This query asks about payments in <em>no</em> subtype table. How many subtype tables is payment 5 in?",
        ar: "هذا الاستعلام يسأل عن الدفعات التي ليست في <em>أيّ</em> جدول نوع فرعي. في كم جدول نوع فرعي تقع الدفعة 5؟"
      },
      explain: {
        en: "Run in alasql: one row, 8 | 2026-03-07 | 50. The voucher fits no box: the witness against rule two, repaired with an <code>OTHER</code> subtype. Payment 5 is a defect too, but of rule three; it is in two tables, so it matched, and only the overlap query finds it. Each query finds the witnesses of one rule.",
        ar: "نُفّذ في alasql: صفّ واحد، 8 | 2026-03-07 | 50. القسيمة لا تجد صندوقًا: إنها الشاهد على خرق القاعدة الثانية، ويُصلَح ذلك بنوع فرعي <code>OTHER</code>. والدفعة 5 خلل أيضًا، لكن في القاعدة الثالثة؛ فهي في جدولين، فطابقت، ولا يجدها إلا استعلام الازدواج. كل استعلام يجد شهود قاعدة واحدة."
      },
      solution: {
        out: "payment_id | payment_date | amount\n8          | 2026-03-07   | 50",
        en: "Run in alasql against the lesson's exercise tables.",
        ar: "نُفّذ في alasql على جداول التمرين في الدرس."
      }
    },

    {
      id: "t4l5q20", type: "mcq", level: "medium", topics: ["t4-empty-result-not-proof", "t4-business-evidence"],
      q: {
        en: "On the six March payments, the coverage query on the <code>REFUNDED</code> build returns no rows. The designer says: \"So <code>PAYMENT</code> is exhaustive.\" What is the right reply?",
        ar: "على دفعات آذار الست، لا يُرجع استعلام الشمول على بناء <code>REFUNDED</code> أيّ صفّ. يقول المصمّم: «إذن <code>PAYMENT</code> شامل.» ما الردّ الصحيح؟"
      },
      options: [
        { en: "Agreed: an empty coverage query proves rule two holds", ar: "موافق: استعلام الشمول الفارغ يُثبت أن القاعدة الثانية متحقّقة" },
        { en: "Wrong query: exhaustiveness is checked by the overlap query", ar: "استعلام خاطئ: الشمول يُفحص باستعلام الازدواج" },
        { en: "Agreed, as long as the query also returns no rows next month", ar: "موافق، بشرط أن يُرجع الاستعلام صفر صفوف في الشهر القادم أيضًا" },
        { en: "No witness has arrived yet; the rule is about every possible payment, so ask the shop whether it ever takes anything else", ar: "لم يصل شاهدٌ بعد؛ القاعدة تخصّ كل دفعة ممكنة، فاسأل المتجر هل يقبل أيّ شيء آخر" }
      ],
      answer: 3,
      hint: {
        en: "Does a query read every payment that could ever exist, or only today's?",
        ar: "هل يقرأ الاستعلام كل دفعة يمكن أن توجد، أم دفعات اليوم فقط؟"
      },
      explain: {
        en: "A witness proves a rule broken; an empty result proves nothing. The rules are about every possible instance, and the data is only today's — on 7 March a gift voucher arrived and fit no box. That is why the review is settled with business evidence, on the diagram, before the first row exists. Another empty month is still not a proof, and the overlap query answers rule three, not rule two.",
        ar: "الشاهد يُثبت خرق القاعدة؛ والنتيجة الفارغة لا تُثبت شيئًا. القواعد تخصّ كل نسخة ممكنة، والبيانات بيانات اليوم فقط — في 7 آذار وصلت قسيمة هدية ولم تجد صندوقًا. ولهذا تُحسم المراجعة ببيّنة العمل (business evidence)، على المخطّط، قبل أن يوجد أوّل صفّ. وشهرٌ فارغ آخر ليس إثباتًا أيضًا، واستعلام الازدواج يجيب عن القاعدة الثالثة لا الثانية."
      }
    },

    /* ---------------------------------------------------- 4 · when the picture cannot decide */
    {
      id: "t4l5q21", type: "tf", level: "easy", topics: ["t4-same-drawing-two-verdicts", "t4-diagram-accuracy"],
      q: {
        en: "Two colleges hand in the identical <code>EXAM</code> diagram — <code>QUIZ</code>, <code>MIDTERM</code>, <code>FINAL</code>, no <code>OTHER</code>. Since the boxes and lines are the same, the verdict must be the same at both.",
        ar: "تسلّم كليّتان مخطّط <code>EXAM</code> نفسه — <code>QUIZ</code> و<code>MIDTERM</code> و<code>FINAL</code>، دون <code>OTHER</code>. وبما أن الصناديق والخطوط واحدة، فيجب أن يكون الحكم واحدًا في الكليّتين."
      },
      truth: false,
      hint: {
        en: "Accuracy is measured against something outside the drawing. The second college also runs a lab practical.",
        ar: "الدقّة تُقاس بشيء خارج الرسم. والكلية الثانية تُجري أيضًا امتحانًا عمليًّا في المختبر."
      },
      explain: {
        en: "False. A diagram is accurate only against a business. At the first college every exam is a quiz, a midterm or a final, so it is sound. At the second the lab practical is an exam that fits no box: check 3 fails, and the practical is the witness. Same drawing, two verdicts.",
        ar: "خطأ. المخطّط دقيق فقط بالنسبة إلى عملٍ بعينه. في الكلية الأولى كل امتحان قصير أو نصفي أو نهائي، فهو سليم. وفي الثانية الامتحان العملي في المختبر لا يجد صندوقًا: يفشل الفحص 3، والامتحان العملي هو الشاهد. رسمٌ واحد، وحكمان."
      }
    },

    {
      id: "t4l5q22", type: "multi", level: "medium", topics: ["t4-business-evidence", "t4-review-order"],
      q: {
        en: "Which checks are claims about the business, so that the reviewer must ask before ruling? Choose every one.",
        ar: "أيّ الفحوص ادّعاءات عن العمل، بحيث يجب أن يسأل المراجِع قبل أن يحكم؟ اختر كل فحص منها."
      },
      options: [
        { en: "Check 1 · kind of", ar: "الفحص 1 · نوعٌ من" },
        { en: "Check 2 · more than one", ar: "الفحص 2 · أكثر من واحد" },
        { en: "Check 3 · exhaustive", ar: "الفحص 3 · شامل" },
        { en: "Check 4 · mutually exclusive", ar: "الفحص 4 · متنافٍ" },
        { en: "Check 5 · listed once", ar: "الفحص 5 · مذكور مرّة واحدة" }
      ],
      answer: [0, 2, 3],
      hint: {
        en: "For each check, imagine the same drawing in two businesses. Could it pass in one and fail in the other?",
        ar: "تخيّل الرسم نفسه في عملين مختلفين لكل فحص. هل يمكن أن ينجح في أحدهما ويفشل في الآخر؟"
      },
      explain: {
        en: "Checks 1, 3 and 4. \"Do you ever give an exam that is not one of these?\" and \"Can a payment be a card payment and something else?\" have answers only the business knows. Checks 2 and 5 are read off the drawing: one subtype is wrong in every business, and an attribute in every box is visible on the page. Check 5 tempts, but it asks what the drawing lists, not what the business does.",
        ar: "الفحوص 1 و3 و4. أسئلة مثل «هل تُجرون امتحانًا ليس من هذه؟» و«هل يمكن لدفعة أن تكون بالبطاقة وشيئًا آخر معًا؟» لا يعرف أجوبتها إلا العمل. أمّا الفحصان 2 و5 فيُقرآن من الرسم: النوع الفرعي الوحيد خطأ في كل عمل، والخاصية الموجودة في كل صندوق ظاهرة على الصفحة. والفحص 5 مغرٍ، لكنه يسأل عمّا يذكره الرسم، لا عمّا يفعله العمل."
      }
    },

    {
      id: "t4l5q23", type: "mcq", level: "hard", topics: ["t4-minimal-repair", "t4-diagram-accuracy", "t4-same-drawing-two-verdicts"],
      q: {
        en: "The second college's lab practical has nothing that other exams lack: a number, a description, a weight, a date and a written grade, like any exam. What is the minimal repair of its <code>EXAM</code> diagram?",
        ar: "ليس للامتحان العملي في الكلية الثانية شيء تفتقده الامتحانات الأخرى: رقم ووصف ووزن وتاريخ ودرجة كتابية، مثل أيّ امتحان. ما أصغر إصلاح لمخطّط <code>EXAM</code> لديها؟"
      },
      options: [
        { en: "Add a <code>PRACTICAL</code> subtype beside <code>QUIZ</code>, <code>MIDTERM</code> and <code>FINAL</code>", ar: "إضافة نوع فرعي <code>PRACTICAL</code> بجانب <code>QUIZ</code> و<code>MIDTERM</code> و<code>FINAL</code>" },
        { en: "Add an <code>OTHER</code> subtype to hold the practical and any exam the college adds later", ar: "إضافة نوع فرعي <code>OTHER</code> يحوي الامتحان العملي وأيّ امتحان تضيفه الكلية لاحقًا" },
        { en: "Store the practical as a <code>FINAL</code>, since it comes at the end of the course", ar: "تخزين الامتحان العملي على أنه <code>FINAL</code>، لأنه يأتي في نهاية المقرّر" },
        { en: "Nothing: the diagram matches the lecturer's slide, so it is accurate", ar: "لا شيء: المخطّط يطابق شريحة المحاضِرة، فهو دقيق" }
      ],
      answer: 1,
      hint: {
        en: "Check 3 has failed. Which of the six checks would a new named box have to pass as well?",
        ar: "الفحص 3 فشل. أيّ فحص من الستّة يجب أن يجتازه أيضًا أيّ صندوق جديد مسمّى؟"
      },
      explain: {
        en: "<code>OTHER</code>. The lesson's repair is \"add <code>PRACTICAL</code> if it has its own attributes, else <code>OTHER</code>\". A named <code>PRACTICAL</code> with nothing of its own would fix check 3 and fail check 6; with a <code>* Lab Room</code> it would earn its box. A practical is not a final, so storing it there lies about the instance. And matching the slide is not accuracy: the diagram must match this college.",
        ar: "<code>OTHER</code>. إصلاح الدرس هو «أضِف <code>PRACTICAL</code> إن كانت له خصائص خاصّة به، وإلّا فـ <code>OTHER</code>». فنوع فرعي مسمّى <code>PRACTICAL</code> بلا شيء خاصّ به يُصلح الفحص 3 ويفشل في الفحص 6؛ ولو كانت له <code>* Lab Room</code> لاستحقّ صندوقه. والامتحان العملي ليس امتحانًا نهائيًّا، فوضعه هناك يكذب بشأن النسخة. ومطابقة الشريحة ليست دقّة: يجب أن يطابق المخطّط هذه الكلية."
      }
    },

    {
      id: "t4l5q24", type: "ordercode", level: "hard", topics: ["t4-review-order", "t4-verdict", "t4-model-review"],
      q: {
        en: "A draft for the café, which serves eat-in, to-go and, since this month, delivery (with a delivery address). <code>ORDER</code> holds <code>EAT IN</code> (<code>* Order Date</code>, <code>* Table Number</code>), <code>TO GO</code> (<code>* Order Date</code>, <code>* Pickup Time</code>) and <code>WAITER</code> (<code>* Name</code>). Put the three verdicts in the order the review writes them.",
        ar: "مسوّدة للمقهى، الذي يقدّم في المكان وسفريًّا، ومنذ هذا الشهر بالتوصيل (مع عنوان توصيل). يحوي <code>ORDER</code> كلًّا من <code>EAT IN</code> (<code>* Order Date</code>، <code>* Table Number</code>) و<code>TO GO</code> (<code>* Order Date</code>، <code>* Pickup Time</code>) و<code>WAITER</code> (<code>* Name</code>). رتّب الأحكام الثلاثة بالترتيب الذي تكتبها به المراجعة."
      },
      lang: "text",
      items: [
        { code: "box      ORDER\ncheck    1, kind of\nwitness  a waiter serves orders; \"every WAITER is an ORDER\" is false\nrepair   move WAITER outside, joined to ORDER by a line" },
        { code: "box      ORDER\ncheck    3, exhaustive\nwitness  the first delivery order fits no box\nrepair   add DELIVERY with * Delivery Address, and OTHER" },
        { code: "box      ORDER\ncheck    5, listed once\nwitness  * Order Date drawn in every subtype\nrepair   lift * Order Date into ORDER" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Follow the six checks in order. Notice also that one finding is only true once another box has left.",
        ar: "اتّبع الفحوص الستّة بالترتيب. ولاحظ أيضًا أن إحدى الملاحظات لا تصحّ إلا بعد أن يخرج صندوق آخر."
      },
      explain: {
        en: "Check 1, then check 3, then check 5. The order is not ceremony: while <code>WAITER</code> is inside, <code>* Order Date</code> is not in <em>every</em> box, so check 5 would wrongly pass. Remove what does not belong, then count, then test instances, then tidy. The delivery order is the witness of a business that changed, not of a drawing that did.",
        ar: "الفحص 1، ثم 3، ثم 5. والترتيب ليس شكليًّا: ما دام <code>WAITER</code> في الداخل فـ <code>* Order Date</code> ليست في <em>كل</em> صندوق، فينجح الفحص 5 خطأً. أزِل ما لا ينتمي، ثم عُدّ، ثم اختبر النسخ، ثم رتّب الرسم. وطلب التوصيل شاهد على عمل تغيّر، لا على رسم تغيّر."
      }
    }

  ]
};
