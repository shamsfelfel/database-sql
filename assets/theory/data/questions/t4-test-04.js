/* Question bank: T4 lesson 4 test -- Nesting, and Knowing When to Stop. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-test-04"] = {
  title: { en: "Test 4 — Nesting, and Knowing When to Stop", ar: "اختبار 4 — التداخل، ومتى تتوقّف" },
  intro: {
    en: "24 questions on lesson 4: subtypes nested inside subtypes in the lecturer's ANIMAL, the three rules at every level, the debit card and the CARD box, the inheritance chain and its foreign keys, two levels for readability and the card brands, the SMALL / LARGE split that passes every rule and is still wrong, and the four-question subtype decision on the ski resort. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الرابع: الأنواع الفرعية المتداخلة داخل أنواع فرعية في <code>ANIMAL</code> المحاضِرة، والقواعد الثلاث في كل مستوى، وبطاقة الخصم المباشر وصندوق <code>CARD</code>، وسلسلة الوراثة ومفاتيحها الأجنبية، والمستويان من أجل سهولة القراءة وعلامات البطاقات، وتقسيم SMALL / LARGE الذي يجتاز كل القواعد ويبقى خاطئًا، وقرار التقسيم ذو الأسئلة الأربعة على منتجع التزلّج. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · subtypes inside subtypes */
    {
      id: "t4l4q01", type: "tf", level: "easy", topics: ["t4-nested-subtypes", "t4-animal-hierarchy"],
      q: {
        en: "The zoo wants birds as well. Drawing <code>BIRD</code> directly inside <code>ANIMAL</code>, beside <code>VERTEBRATE</code> and <code>INVERTEBRATE</code>, is a correct way to add it.",
        ar: "تريد حديقة الحيوان الطيور أيضًا. رسمُ <code>BIRD</code> داخل <code>ANIMAL</code> مباشرةً، بجانب <code>VERTEBRATE</code> و<code>INVERTEBRATE</code>، طريقةٌ صحيحة لإضافته."
      },
      truth: false,
      hint: {
        en: "Take the eagle. How many of the side-by-side boxes would it sit in?",
        ar: "خذ النسر مثالًا. في كم صندوقًا من الصناديق المتجاورة سيجلس؟"
      },
      explain: {
        en: "False. Every bird is a vertebrate, so beside <code>VERTEBRATE</code> an eagle would be in two sibling boxes at once: rule three broken. A kind of a kind is drawn <em>inside</em> its parent: <code>BIRD</code> goes inside <code>VERTEBRATE</code>, which is inside <code>ANIMAL</code>. Nesting is legal; overlapping siblings are not.",
        ar: "خطأ. كل طائر حيوانٌ فقاري، فلو وُضع <code>BIRD</code> بجانب <code>VERTEBRATE</code> لجلس النسر في صندوقين شقيقين معًا: وهذا خرقٌ للقاعدة الثالثة. «نوعٌ من نوعٍ» يُرسم <em>داخل</em> أصله: يدخل <code>BIRD</code> في <code>VERTEBRATE</code>، الموجود داخل <code>ANIMAL</code>. التداخل (nesting) مشروع؛ أمّا الأشقّاء المتداخلون فلا."
      }
    },
    {
      id: "t4l4q02", type: "mcq", level: "easy", topics: ["t4-subtype-level", "t4-intermediate-supertype", "t4-animal-hierarchy"],
      q: {
        en: "In the lecturer's nested <code>ANIMAL</code>, which statement about the boxes is right?",
        ar: "في <code>ANIMAL</code> المتداخل للمحاضِرة، أيّ عبارة عن الصناديق صحيحة؟"
      },
      options: [
        { en: "<code>REPTILE</code> is a level-1 subtype, because it is a kind of <code>ANIMAL</code>", ar: "<code>REPTILE</code> نوع فرعي في المستوى 1، لأنه نوعٌ من <code>ANIMAL</code>" },
        { en: "<code>INVERTEBRATE</code> is an intermediate supertype, like <code>VERTEBRATE</code>", ar: "<code>INVERTEBRATE</code> نوع أعلى وسيط، مثل <code>VERTEBRATE</code>" },
        { en: "<code>OTHER</code> inside <code>VERTEBRATE</code> is level 1, since every hierarchy has one <code>OTHER</code>", ar: "<code>OTHER</code> داخل <code>VERTEBRATE</code> في المستوى 1، لأن لكل تسلسل <code>OTHER</code> واحدًا" },
        { en: "<code>MAMMAL</code> is level 2, and <code>VERTEBRATE</code> is both a subtype and a supertype", ar: "<code>MAMMAL</code> في المستوى 2، و<code>VERTEBRATE</code> نوع فرعي ونوع أعلى في الوقت نفسه" }
      ],
      answer: 3,
      hint: {
        en: "Count the rings of nesting from the outside. Which box has boxes inside it <em>and</em> a box around it?",
        ar: "عُدّ حلقات التداخل من الخارج. أيّ صندوق فيه صناديق <em>ويحيط</em> به صندوق؟"
      },
      explain: {
        en: "<code>MAMMAL</code> sits inside <code>VERTEBRATE</code>, so it is level 2; <code>VERTEBRATE</code> is a kind of <code>ANIMAL</code> and the supertype of four boxes, an intermediate supertype. A reptile is indeed an animal, which makes level 1 tempting, but levels count rings, not ancestry. <code>INVERTEBRATE</code> has nothing inside it, and <code>OTHER</code> can appear at every level that needs one.",
        ar: "<code>MAMMAL</code> داخل <code>VERTEBRATE</code>، فهو في المستوى 2؛ و<code>VERTEBRATE</code> نوعٌ من <code>ANIMAL</code> ونوع أعلى لأربعة صناديق، أي نوع أعلى وسيط (intermediate supertype). صحيح أن الزاحف حيوان، ولهذا يغري المستوى 1، لكن المستويات تَعُدّ الحلقات لا الأنساب. و<code>INVERTEBRATE</code> لا شيء بداخله، و<code>OTHER</code> يمكن أن يظهر في كل مستوى يحتاج إليه."
      }
    },
    {
      id: "t4l4q03", type: "contrast", level: "medium", topics: ["t4-wrong-tool", "t4-name-only-subtypes", "t4-subtype-decision"],
      q: {
        en: "Each group was proposed as a set of subtypes in this chapter. Does it earn its boxes, or should it be an attribute (or nothing at all)?",
        ar: "اقتُرحت كل مجموعة مما يلي أنواعًا فرعية في هذا الفصل. هل تستحقّ صناديقها، أم يجب أن تكون خاصيةً (أو لا شيء أصلًا)؟"
      },
      concepts: [
        { en: "Earns subtype boxes", ar: "تستحقّ صناديق أنواع فرعية" },
        { en: "An attribute, or nothing", ar: "خاصية، أو لا شيء" }
      ],
      rows: [
        { s: { en: "<code>ORDER</code>: <code>EAT IN</code> (<code>* Table Number</code>) and <code>TO GO</code> (<code>* Pickup Time</code>)", ar: "<code>ORDER</code>: <code>EAT IN</code> (<code>* Table Number</code>) و<code>TO GO</code> (<code>* Pickup Time</code>)" }, a: 0 },
        { s: { en: "<code>PAYMENT</code>: <code>SMALL</code> (under 100) and <code>LARGE</code> (100 or more)", ar: "<code>PAYMENT</code>: <code>SMALL</code> (أقل من 100) و<code>LARGE</code> (100 فأكثر)" }, a: 1 },
        { s: { en: "<code>CARD</code>: <code>CREDIT CARD</code> (<code>* Instalments</code>) and <code>DEBIT CARD</code> (<code>o Cashback Amount</code>)", ar: "<code>CARD</code>: <code>CREDIT CARD</code> (<code>* Instalments</code>) و<code>DEBIT CARD</code> (<code>o Cashback Amount</code>)" }, a: 0 },
        { s: { en: "<code>VISA</code>, <code>MASTERCARD</code> and <code>OTHER</code>, drawn under both card kinds, holding nothing", ar: "<code>VISA</code> و<code>MASTERCARD</code> و<code>OTHER</code>، مرسومة تحت نوعَي البطاقة كليهما، ولا تحمل شيئًا" }, a: 1 },
        { s: { en: "<code>PAINT</code>: <code>MATT</code>, <code>GLOSS</code> and <code>OTHER</code>, with nothing of their own", ar: "<code>PAINT</code>: <code>MATT</code> و<code>GLOSS</code> و<code>OTHER</code>، دون أيّ شيء خاصّ بها" }, a: 1 },
        { s: { en: "<code>SNOW SPORT</code>: <code>SNOWMOBILE</code> with <code>* Vehicle Count</code>, taken out of <code>OTHER</code>", ar: "<code>SNOW SPORT</code>: <code>SNOWMOBILE</code> مع <code>* Vehicle Count</code>، مأخوذًا من <code>OTHER</code>" }, a: 0 }
      ],
      hint: {
        en: "The three rules check how boxes are drawn. Ask instead: does each group have an attribute or relationship only it has?",
        ar: "القواعد الثلاث تفحص طريقة رسم الصناديق. اسأل بدلًا من ذلك: هل لكل مجموعة خاصية أو علاقة لا يملكها غيرها؟"
      },
      explain: {
        en: "The slides give the reason to subdivide: a group with special properties, attributes or relationships only it has. Table number, pickup time, instalments, cashback and vehicle count are such properties. <code>SMALL</code> / <code>LARGE</code> is decided by <code>* Amount</code>; the brands become <code>* Card Brand</code> on <code>CARD</code>; the finishes become <code>* Finish</code> on <code>PAINT</code>. All of these pass the three rules, which is why they tempt.",
        ar: "تعطي الشرائح سبب التقسيم: مجموعةٌ لها خصائص مميِّزة (special properties)، أي خصائص أو علاقات لا يملكها غيرها. رقم الطاولة ووقت الاستلام وعدد الأقساط والمبلغ النقدي المسترجَع وعدد المركبات من هذه الخصائص. أمّا <code>SMALL</code> / <code>LARGE</code> فيقرّرها <code>* Amount</code>؛ والعلامات تصير <code>* Card Brand</code> في <code>CARD</code>؛ والتشطيبات تصير <code>* Finish</code> في <code>PAINT</code>. وكلّها تجتاز القواعد الثلاث، ولهذا تغري."
      }
    },
    {
      id: "t4l4q04", type: "output", level: "easy", topics: ["t4-animal-hierarchy", "t4-rules-every-level"],
      q: {
        en: "The lesson's <code>animals</code> table: Eagle, Tortoise, Camel and Frog are vertebrates (<code>BIRD</code>, <code>REPTILE</code>, <code>MAMMAL</code>, <code>OTHER</code>); Octopus is an invertebrate with no class. What does the query return?",
        ar: "جدول <code>animals</code> في الدرس: Eagle وTortoise وCamel وFrog فقاريات (<code>BIRD</code> و<code>REPTILE</code> و<code>MAMMAL</code> و<code>OTHER</code>)؛ وOctopus لافقاري بلا صنف. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT animal_group,\n       COUNT(*) AS animals,\n       COUNT(vertebrate_class) AS classified\nFROM animals\nGROUP BY animal_group\nORDER BY animal_group;",
      options: [
        { en: "INVERTEBRATE 1 0 · VERTEBRATE 4 4", ar: "INVERTEBRATE 1 0 · VERTEBRATE 4 4" },
        { en: "INVERTEBRATE 1 1 · VERTEBRATE 4 4", ar: "INVERTEBRATE 1 1 · VERTEBRATE 4 4" },
        { en: "INVERTEBRATE 1 0 · VERTEBRATE 4 3", ar: "INVERTEBRATE 1 0 · VERTEBRATE 4 3" },
        { en: "BIRD 1 1 · INVERTEBRATE 1 0 · MAMMAL 1 1 · OTHER 1 1 · REPTILE 1 1", ar: "BIRD 1 1 · INVERTEBRATE 1 0 · MAMMAL 1 1 · OTHER 1 1 · REPTILE 1 1" }
      ],
      answer: 0,
      hint: {
        en: "<code>COUNT(column)</code> skips <code>NULL</code>s. Which group's level-2 column is always empty?",
        ar: "<code>COUNT(column)</code> يتجاهل قيم <code>NULL</code>. أيّ مجموعة يبقى عمود المستوى 2 فيها فارغًا دائمًا؟"
      },
      explain: {
        en: "Run in alasql: two rows, INVERTEBRATE 1 0 and VERTEBRATE 4 4. One column answers each level: every vertebrate has a level-2 class (the frog's is <code>OTHER</code>, not empty), and the octopus has none, because <code>INVERTEBRATE</code> is not subdivided. Grouping is by <code>animal_group</code>, level 1, so the classes never appear as rows.",
        ar: "نُفّذ في alasql: صفّان، INVERTEBRATE 1 0 وVERTEBRATE 4 4. لكل مستوى عمود: لكل فقاري صنفٌ في المستوى 2 (صنف الضفدع <code>OTHER</code> وليس فارغًا)، والأخطبوط بلا صنف لأن <code>INVERTEBRATE</code> غير مقسّم. والتجميع على <code>animal_group</code>، أي المستوى 1، فلا تظهر الأصناف صفوفًا."
      },
      solution: {
        out: "animal_group | animals | classified\nINVERTEBRATE | 1 | 0\nVERTEBRATE   | 4 | 4",
        en: "Run in alasql against the lesson's section 1 table.",
        ar: "نُفّذ في alasql على جدول القسم 1 في الدرس."
      }
    },
    {
      id: "t4l4q05", type: "trace", level: "medium", topics: ["t4-rules-every-level", "t4-nested-subtypes"],
      q: {
        en: "The same <code>animals</code> table, with its table-level <code>CHECK</code>: a <code>VERTEBRATE</code> must have a <code>vertebrate_class</code>, an <code>INVERTEBRATE</code> must not. It holds five rows. The script runs one statement at a time. What happens?",
        ar: "جدول <code>animals</code> نفسه، مع قيد <code>CHECK</code> على مستوى الجدول: يجب أن يكون لـ <code>VERTEBRATE</code> قيمة في <code>vertebrate_class</code>، ويجب ألّا يكون لـ <code>INVERTEBRATE</code>. فيه خمسة صفوف. يُنفَّذ السكربت عبارةً عبارة. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO animals VALUES (6, 'Salmon', 'VERTEBRATE', NULL);\nINSERT INTO animals VALUES (7, 'Snail', 'INVERTEBRATE', 'OTHER');\nINSERT INTO animals VALUES (8, 'Salmon', 'VERTEBRATE', 'OTHER');\nINSERT INTO animals VALUES (9, 'Snail', 'INVERTEBRATE', NULL);\n\nSELECT COUNT(*) AS animals FROM animals;",
      options: [
        { en: "All four inserts succeed; animals = 9", ar: "تنجح الإضافات الأربع؛ animals = 9" },
        { en: "Rows 6 and 7 are refused (Violation of CHECK constraint); rows 8 and 9 succeed; animals = 7", ar: "يُرفض الصفّان 6 و7 (Violation of CHECK constraint)؛ وينجح 8 و9؛ animals = 7" },
        { en: "Only row 7 is refused, since a missing class is just unknown; animals = 8", ar: "يُرفض الصفّ 7 وحده، لأن الصنف المفقود مجرّد قيمة مجهولة؛ animals = 8" },
        { en: "Row 7 succeeds, because <code>'OTHER'</code> is on the class list; only row 6 is refused; animals = 8", ar: "ينجح الصفّ 7، لأن <code>'OTHER'</code> في قائمة الأصناف؛ ويُرفض الصفّ 6 وحده؛ animals = 8" }
      ],
      answer: 1,
      hint: {
        en: "The table-level <code>CHECK</code> asks the level-2 question only inside <code>VERTEBRATE</code>. What must the column be everywhere else?",
        ar: "قيد <code>CHECK</code> على مستوى الجدول يطرح سؤال المستوى 2 داخل <code>VERTEBRATE</code> فقط. ماذا يجب أن يكون العمود في غيره؟"
      },
      explain: {
        en: "Run in alasql. Row 6 is a vertebrate with no class: inside <code>VERTEBRATE</code> the set is exhaustive, and the fish belongs in <code>OTHER</code>, as row 8 does. Row 7 puts a level-2 class on an invertebrate: <code>'OTHER'</code> is on the list, which tempts, but it is <code>VERTEBRATE</code>'s <code>OTHER</code>, outside the box it belongs to. The rules are checked inside each box.",
        ar: "نُفّذ في alasql. الصفّ 6 فقاري بلا صنف: داخل <code>VERTEBRATE</code> المجموعة شاملة، ومكان السمكة <code>OTHER</code> كما في الصفّ 8. والصفّ 7 يضع صنفًا من المستوى 2 على لافقاري: <code>'OTHER'</code> في القائمة فعلًا، وهذا ما يغري، لكنه <code>OTHER</code> الخاصّ بـ <code>VERTEBRATE</code>، خارج الصندوق الذي ينتمي إليه. القواعد تُفحص داخل كل صندوق."
      },
      solution: {
        out: "INSERT 6 → Violation of CHECK constraint\nINSERT 7 → Violation of CHECK constraint\nINSERT 8 → 1\nINSERT 9 → 1\nanimals = 7",
        en: "Run in alasql against the lesson's section 1 table.",
        ar: "نُفّذ في alasql على جدول القسم 1 في الدرس."
      }
    },
    {
      id: "t4l4q06", type: "multi", level: "medium", topics: ["t4-rules-every-level", "t4-innermost-subtype", "t4-intermediate-supertype"],
      q: {
        en: "Checking the nested <code>ANIMAL</code> hierarchy with Lesson 3's three rules. Which statements are right? Choose all that apply.",
        ar: "فحص تسلسل <code>ANIMAL</code> المتداخل بقواعد الدرس الثالث الثلاث. أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The rules are asked once inside <code>ANIMAL</code> and again inside <code>VERTEBRATE</code>", ar: "تُطرح القواعد مرّة داخل <code>ANIMAL</code> ومرّة أخرى داخل <code>VERTEBRATE</code>" },
        { en: "<code>INVERTEBRATE</code> breaks rule two, because it has no subtypes to cover its instances", ar: "<code>INVERTEBRATE</code> يخرق القاعدة الثانية، لأنه لا أنواع فرعية فيه تشمل نسخه" },
        { en: "Every animal belongs to exactly one innermost box: the eagle to <code>BIRD</code>, the octopus to <code>INVERTEBRATE</code>", ar: "كل حيوان ينتمي إلى صندوق أعمق واحد بالضبط: النسر إلى <code>BIRD</code>، والأخطبوط إلى <code>INVERTEBRATE</code>" },
        { en: "Because the eagle is in both <code>VERTEBRATE</code> and <code>BIRD</code>, rule three is broken", ar: "لأن النسر في <code>VERTEBRATE</code> و<code>BIRD</code> معًا، فالقاعدة الثالثة مخروقة" },
        { en: "Inside <code>VERTEBRATE</code>, <code>OTHER</code> takes the fish and the frogs, which keeps that level exhaustive", ar: "داخل <code>VERTEBRATE</code> يأخذ <code>OTHER</code> الأسماك والضفادع، فيبقى ذلك المستوى شاملًا" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Rule three is about sibling boxes side by side. Rules two and three are asked of boxes that have boxes inside them.",
        ar: "القاعدة الثالثة تخصّ الصناديق الشقيقة المتجاورة. والقاعدتان الثانية والثالثة تُطرحان على الصناديق التي في داخلها صناديق."
      },
      explain: {
        en: "The questions are asked once per box with subtypes: inside <code>ANIMAL</code>, then inside <code>VERTEBRATE</code>, where <code>OTHER</code> keeps the set exhaustive. A box with nothing inside, like <code>INVERTEBRATE</code>, has no rule to check. The eagle being in <code>VERTEBRATE</code> and <code>BIRD</code> is nesting, one box inside another, not overlap: it still has exactly one innermost box.",
        ar: "تُطرح الأسئلة مرّة لكل صندوق فيه أنواع فرعية: داخل <code>ANIMAL</code>، ثم داخل <code>VERTEBRATE</code> حيث يُبقي <code>OTHER</code> المجموعة شاملة. والصندوق الذي لا شيء بداخله، مثل <code>INVERTEBRATE</code>، لا قاعدة لفحصها فيه. ووجود النسر في <code>VERTEBRATE</code> و<code>BIRD</code> تداخلٌ، صندوق داخل صندوق، لا تقاطع: يبقى له صندوق أعمق (innermost) واحد بالضبط."
      }
    },

    /* ---------------------------------------------------- 2 · the debit card */
    {
      id: "t4l4q07", type: "compare", level: "easy", topics: ["t4-card-nesting", "t4-nested-subtypes"],
      q: {
        en: "Versions 1 and 2 of the debit-card evolve block, as text. Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر بطاقة الخصم المباشر، نصًّا. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "PAYMENT        # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CREDIT CARD  * Card Number  * Instalments\n  DEBIT CARD   * Card Number  o Cashback Amount\n  OTHER\nCHECK       -- made by -- CUSTOMER\nCREDIT CARD -- made by -- CUSTOMER\nDEBIT CARD  -- made by -- CUSTOMER",
      codeB: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CARD           * Card Number\n    CREDIT CARD  * Instalments\n    DEBIT CARD   o Cashback Amount\n  OTHER\nCHECK -- made by -- CUSTOMER\nCARD  -- made by -- CUSTOMER",
      options: [
        { en: "A is better: it has fewer boxes and one level less to read", ar: "A أفضل: فيه صناديق أقلّ ومستوى أقلّ للقراءة" },
        { en: "B is better: A breaks rule three, because a debit card is also a credit card", ar: "B أفضل: A يخرق القاعدة الثالثة، لأن بطاقة الخصم بطاقةُ ائتمان أيضًا" },
        { en: "B is better: what both cards share, <code>* Card Number</code> and <code>made by</code>, is stated once in <code>CARD</code> and inherited by both", ar: "B أفضل: ما تتشاركه البطاقتان، <code>* Card Number</code> و<code>made by</code>، مذكور مرّة واحدة في <code>CARD</code> وترثه كلتاهما" },
        { en: "They are equally good; B only moves the boxes around", ar: "هما جيّدان بالقدر نفسه؛ B يحرّك الصناديق فقط" }
      ],
      answer: 2,
      hint: {
        en: "Find what A lists twice.",
        ar: "ابحث عمّا يذكره A مرّتين."
      },
      explain: {
        en: "B is the recommended model. A passes all three rules — a debit card is not a credit card — but repeats the card number and the <code>made by</code> line, so a rule about cards has to be stated twice and the copies can drift. B has one box more, which is the price of saying \"both are cards\" once. The cure is Lesson 1's, one level down.",
        ar: "B هو النموذج الموصى به. A يجتاز القواعد الثلاث — فبطاقة الخصم ليست بطاقة ائتمان — لكنه يكرّر رقم البطاقة وخطّ <code>made by</code>، فتُذكر أيّ قاعدة عن البطاقات مرّتين وقد تتباعد النسختان. وفي B صندوق إضافي، وهو ثمن قول «كلتاهما بطاقة» مرّة واحدة. العلاج هو علاج الدرس الأول، في مستوى أدنى."
      }
    },
    {
      id: "t4l4q08", type: "error", level: "medium", topics: ["t4-card-nesting", "t4-inheritance-chain"],
      q: {
        en: "A designer redraws the shop's model with <code>CARD</code>, as text. One line undoes what nesting <code>CARD</code> was for. Which line?",
        ar: "يعيد مصمّم رسم نموذج المتجر مع <code>CARD</code>، نصًّا. سطرٌ واحد يُبطل الغاية من جعل <code>CARD</code> صندوقًا متداخلًا. أيّ سطر؟"
      },
      lang: "text",
      code: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CARD           * Card Number\n    CREDIT CARD  * Instalments\n    DEBIT CARD   * Card Number  o Cashback Amount\n  OTHER\nCHECK -- made by -- CUSTOMER\nCARD  -- made by -- CUSTOMER",
      answer: 6,
      solution: {
        code: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CARD           * Card Number\n    CREDIT CARD  * Instalments\n    DEBIT CARD   o Cashback Amount\n  OTHER\nCHECK -- made by -- CUSTOMER\nCARD  -- made by -- CUSTOMER",
        en: "DEBIT CARD keeps only its own attribute; it inherits * Card Number from CARD.",
        ar: "يحتفظ DEBIT CARD بخاصيته وحدها؛ ويرث * Card Number من CARD."
      },
      hint: {
        en: "Common attributes are listed only in the box that holds them all. Which attribute appears twice?",
        ar: "الخصائص المشتركة تُذكر فقط في الصندوق الذي يجمعها. أيّ خاصية تظهر مرّتين؟"
      },
      explain: {
        en: "Line 6. <code>DEBIT CARD</code> is inside <code>CARD</code>, so it already inherits <code>* Card Number</code>; listing it again brings back the two copies version 2 removed. Line 9 is right: <code>made by</code> attaches once to <code>CARD</code> and reaches both kinds. Line 8 is a separate relationship for cheques, not a repeat.",
        ar: "السطر 6. <code>DEBIT CARD</code> داخل <code>CARD</code>، فهو يرث <code>* Card Number</code> أصلًا؛ وذكرها مرّة أخرى يُعيد النسختين اللتين أزالهما الإصدار 2. والسطر 9 صحيح: <code>made by</code> يتّصل مرّة واحدة بـ <code>CARD</code> ويصل إلى النوعين. أمّا السطر 8 فعلاقة منفصلة للشيكات، وليس تكرارًا."
      }
    },
    {
      id: "t4l4q09", type: "fill", level: "easy", topics: ["t4-inheritance-chain", "t4-innermost-subtype"],
      q: {
        en: "Payment 7, Linda's debit card payment, read in full. Name the box each line comes from.",
        ar: "الدفعة 7، دفعة ليندا ببطاقة الخصم المباشر، مقروءة كاملة. سمِّ الصندوق الذي يأتي منه كل سطر."
      },
      lang: "text",
      code: "# Payment ID      7            from ____1____\n* Card Number     4000 0566 …  from ____2____\nmade by           Linda        from ____3____\no Cashback Amount 20           from ____4____",
      blanks: [
        { accept: ["PAYMENT", "payment", "Payment"] },
        { accept: ["CARD", "card", "Card"] },
        { accept: ["CARD", "card", "Card"] },
        { accept: ["DEBIT CARD", "debit card", "Debit Card", "DEBIT_CARD"], wide: true }
      ],
      hint: {
        en: "Walk the inheritance chain outwards: <code>DEBIT CARD</code>, then the box around it, then the box around that.",
        ar: "امشِ على سلسلة الوراثة نحو الخارج: <code>DEBIT CARD</code>، ثم الصندوق المحيط به، ثم الصندوق المحيط بذاك."
      },
      explain: {
        en: "<code>PAYMENT</code>, <code>CARD</code>, <code>CARD</code>, <code>DEBIT CARD</code>. A nested subtype inherits every attribute and relationship of every box on its chain: the ID, date and amount from <code>PAYMENT</code>, the card number and the customer from <code>CARD</code>. Only the cashback is its own. The customer line is easy to credit to <code>DEBIT CARD</code>, but it is drawn once, on <code>CARD</code>.",
        ar: "<code>PAYMENT</code> و<code>CARD</code> و<code>CARD</code> و<code>DEBIT CARD</code>. يرث النوع الفرعي المتداخل كل خاصية وعلاقة لكل صندوق على سلسلته: المعرّف والتاريخ والمبلغ من <code>PAYMENT</code>، ورقم البطاقة والزبون من <code>CARD</code>. والمبلغ المسترجَع وحده خاصّ به. ومن السهل نسبة خطّ الزبون إلى <code>DEBIT CARD</code>، لكنه مرسوم مرّة واحدة على <code>CARD</code>."
      }
    },
    {
      id: "t4l4q10", type: "tf", level: "easy", topics: ["t4-inheritance-chain", "t4-card-nesting"],
      q: {
        en: "In version 2, a <code>DEBIT CARD</code> payment also has <code>* Instalments</code>, because it sits inside <code>CARD</code> next to <code>CREDIT CARD</code>.",
        ar: "في الإصدار 2، لدفعة <code>DEBIT CARD</code> أيضًا <code>* Instalments</code>، لأنها داخل <code>CARD</code> بجانب <code>CREDIT CARD</code>."
      },
      truth: false,
      hint: {
        en: "Inheritance runs along one direction only. Is <code>CREDIT CARD</code> around <code>DEBIT CARD</code>, or beside it?",
        ar: "الوراثة تسير في اتجاه واحد فقط. هل <code>CREDIT CARD</code> يحيط بـ <code>DEBIT CARD</code> أم يجاوره؟"
      },
      explain: {
        en: "False. A subtype inherits from the boxes <em>around</em> it, <code>CARD</code> and <code>PAYMENT</code>, never from a sibling beside it. <code>* Instalments</code> belongs to <code>CREDIT CARD</code> alone; a debit card has none, which is exactly why the two are separate boxes.",
        ar: "خطأ. يرث النوع الفرعي من الصناديق <em>المحيطة</em> به، <code>CARD</code> و<code>PAYMENT</code>، ولا يرث أبدًا من شقيق بجانبه. <code>* Instalments</code> تخصّ <code>CREDIT CARD</code> وحده؛ وبطاقة الخصم لا أقساط لها، ولهذا بالضبط هما صندوقان منفصلان."
      }
    },
    {
      id: "t4l4q11", type: "output", level: "medium", topics: ["t4-foreign-key-chain", "t4-inheritance-chain"],
      q: {
        en: "Version 2 as a table per box: payments 1–7 in <code>payments</code> (amounts 40, 125, 310, 15, 220, 90, 60), payments 3, 5 and 7 in <code>card_payments</code>, 3 and 5 in <code>credit_payments</code>, 7 in <code>debit_payments</code>. What does the query return?",
        ar: "الإصدار 2 جدولًا لكل صندوق: الدفعات 1–7 في <code>payments</code> (بالمبالغ 40 و125 و310 و15 و220 و90 و60)، والدفعات 3 و5 و7 في <code>card_payments</code>، و3 و5 في <code>credit_payments</code>، و7 في <code>debit_payments</code>. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS card_rows,\n       SUM(p.amount) AS takings\nFROM payments p\nJOIN card_payments c ON c.payment_id = p.payment_id;",
      blanks: [
        { accept: ["3"], label: { en: "card_rows", ar: "card_rows" } },
        { accept: ["590"], label: { en: "takings", ar: "takings" } }
      ],
      hint: {
        en: "The amount lives at the top of the chain, the card at the middle. Which payments have a row in both?",
        ar: "المبلغ في أعلى السلسلة، والبطاقة في وسطها. أيّ الدفعات لها صفّ في الجدولين؟"
      },
      explain: {
        en: "3 and 590: payments 3, 5 and 7, so 310 + 220 + 60. <code>card_payments</code> holds credit and debit payments alike, because <code>CARD</code> encloses both; you do not need to visit <code>credit_payments</code> or <code>debit_payments</code> to ask about all cards. The amount is not stored on <code>card_payments</code>: one join per level climbs to <code>PAYMENT</code> for it.",
        ar: "3 و590: الدفعات 3 و5 و7، أي 310 + 220 + 60. يضمّ <code>card_payments</code> دفعات الائتمان والخصم معًا، لأن <code>CARD</code> يحيط بالنوعين؛ فلا حاجة إلى <code>credit_payments</code> ولا <code>debit_payments</code> للسؤال عن كل البطاقات. والمبلغ غير مخزّن في <code>card_payments</code>: ربطٌ واحد لكل مستوى يصعد إلى <code>PAYMENT</code> ليجلبه."
      },
      solution: {
        out: "card_rows = 3, takings = 590",
        en: "Run in alasql against the lesson's section 2 tables.",
        ar: "نُفّذ في alasql على جداول القسم 2 في الدرس."
      }
    },
    {
      id: "t4l4q12", type: "trace", level: "hard", topics: ["t4-foreign-key-chain", "t4-rules-every-level"],
      q: {
        en: "The same four tables. <code>credit_payments</code> and <code>debit_payments</code> each have <code>payment_id ... REFERENCES card_payments(payment_id)</code>. Payment 6 is a cheque. The script runs one statement at a time. What happens?",
        ar: "الجداول الأربعة نفسها. في كلٍّ من <code>credit_payments</code> و<code>debit_payments</code> العمود <code>payment_id ... REFERENCES card_payments(payment_id)</code>. الدفعة 6 شيك. يُنفَّذ السكربت عبارةً عبارة. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO debit_payments VALUES (6, 0);\nINSERT INTO credit_payments VALUES (7, 2);\n\nSELECT c.payment_id\nFROM card_payments c\nJOIN credit_payments k ON k.payment_id = c.payment_id\nJOIN debit_payments  d ON d.payment_id = c.payment_id;",
      options: [
        { en: "Both inserts are refused; the query returns no rows", ar: "تُرفض الإضافتان؛ ولا يُرجع الاستعلام أيّ صفّ" },
        { en: "Both inserts succeed; the query returns 6 and 7", ar: "تنجح الإضافتان؛ ويُرجع الاستعلام 6 و7" },
        { en: "The first succeeds and the second is refused, since 7 is already a debit card; the query returns no rows", ar: "تنجح الأولى وتُرفض الثانية، لأن 7 بطاقة خصم أصلًا؛ ولا يُرجع الاستعلام أيّ صفّ" },
        { en: "The first is refused (Foreign key \"6\" not found in table \"card_payments\"); the second succeeds; the query returns 7", ar: "تُرفض الأولى (Foreign key \"6\" not found in table \"card_payments\")؛ وتنجح الثانية؛ ويُرجع الاستعلام 7" }
      ],
      answer: 3,
      hint: {
        en: "A foreign key asks one question: does the parent row exist? Does it ask anything about the sibling table?",
        ar: "المفتاح الأجنبي يسأل سؤالًا واحدًا: هل صفّ الأصل موجود؟ هل يسأل شيئًا عن الجدول الشقيق؟"
      },
      explain: {
        en: "Run in alasql. The chain guards the nesting: a cheque has no <code>card_payments</code> row, so it cannot be a debit card. But payment 7 is a card, so <code>credit_payments</code> accepts it, and payment 7 is now credit and debit at once — rule three broken inside <code>CARD</code>. The foreign keys enforce \"is a kind of\", not \"only one of\"; exclusivity needs a type column or a person reading the drawing.",
        ar: "نُفّذ في alasql. السلسلة تحرس التداخل: الشيك لا صفّ له في <code>card_payments</code>، فلا يمكن أن يكون بطاقة خصم. لكن الدفعة 7 بطاقة، فيقبلها <code>credit_payments</code>، وتصبح الدفعة 7 ائتمانًا وخصمًا معًا — خرقًا للقاعدة الثالثة داخل <code>CARD</code>. المفاتيح الأجنبية تفرض «نوعٌ من»، لا «واحدٌ فقط من»؛ والتنافي يحتاج عمود نوع أو شخصًا يقرأ الرسم."
      },
      solution: {
        out: "INSERT (6, 0) → Foreign key \"6\" not found in table \"card_payments\"\nINSERT (7, 2) → 1\npayment_id\n7",
        en: "Run in alasql against the lesson's section 2 tables.",
        ar: "نُفّذ في alasql على جداول القسم 2 في الدرس."
      }
    },
    {
      id: "t4l4q13", type: "ordercode", level: "medium", topics: ["t4-foreign-key-chain", "t4-inheritance-chain"],
      q: {
        en: "The tables of version 2 exist and are empty. Put the statements in an order that stores payment 7 and then reads it in full without an error.",
        ar: "جداول الإصدار 2 موجودة وفارغة. رتّب العبارات ترتيبًا يخزّن الدفعة 7 ثم يقرؤها كاملةً دون خطأ."
      },
      lang: "sql",
      items: [
        { code: "INSERT INTO payments VALUES (7, '2026-03-06', 60);" },
        { code: "INSERT INTO card_payments VALUES (7, '4000 0566 5566 5556', 1);" },
        { code: "INSERT INTO debit_payments VALUES (7, 20);" },
        { code: "SELECT p.amount, d.cashback FROM payments p JOIN card_payments c ON c.payment_id = p.payment_id JOIN debit_payments d ON d.payment_id = c.payment_id;" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "Each table's key points at the table of the box around it. A row cannot point at a row that is not there yet.",
        ar: "مفتاح كل جدول يشير إلى جدول الصندوق المحيط به. ولا يمكن لصفّ أن يشير إلى صفّ غير موجود بعد."
      },
      explain: {
        en: "Outermost first: <code>payments</code>, then <code>card_payments</code>, then <code>debit_payments</code>, then the query, which returns 60 and 20. Run in alasql in the other order, the debit row is refused with Foreign key \"7\" not found in table \"card_payments\". The order of inserts follows the inheritance chain from the supertype inwards.",
        ar: "الأبعد أولًا: <code>payments</code>، ثم <code>card_payments</code>، ثم <code>debit_payments</code>، ثم الاستعلام الذي يُرجع 60 و20. وحين نُفّذ في alasql بالترتيب المعاكس رُفض صفّ الخصم برسالة Foreign key \"7\" not found in table \"card_payments\". ترتيب الإضافة يتبع سلسلة الوراثة من النوع الأعلى نحو الداخل."
      }
    },

    /* ---------------------------------------------------- 3 · two levels, for readability */
    {
      id: "t4l4q14", type: "tf", level: "easy", topics: ["t4-two-levels"],
      q: {
        en: "According to the slides, there is no rule that stops a hierarchy from going beyond two levels; two is what you would usually show, for readability.",
        ar: "بحسب الشرائح، لا توجد قاعدة تمنع التسلسل من تجاوز مستويين؛ والمستويان هما ما تعرضه عادةً، من أجل سهولة القراءة."
      },
      truth: true,
      hint: {
        en: "Is the two-level limit one of the three rules, or something else?",
        ar: "هل حدّ المستويين واحدٌ من القواعد الثلاث، أم شيء آخر؟"
      },
      explain: {
        en: "True. The slide says it in so many words: for ease of reading — \"readability\" — you would usually show only two levels, but there is no rule that would stop you from going beyond two. It is a guideline, not a rule; a third level is legal when its boxes really have something of their own.",
        ar: "صحيح. تقولها الشريحة صراحةً: من أجل سهولة القراءة (readability) تعرض عادةً مستويين فقط، لكن لا توجد قاعدة تمنعك من تجاوزهما. إنها إرشاد لا قاعدة؛ والمستوى الثالث مشروع حين يكون لصناديقه فعلًا شيءٌ خاصّ بها."
      }
    },
    {
      id: "t4l4q15", type: "compare", level: "medium", topics: ["t4-over-nesting", "t4-cross-cutting-attribute", "t4-two-levels"],
      q: {
        en: "Versions 1 and 2 of the card-brand evolve block, as text (the rest of <code>PAYMENT</code> is unchanged). Which statement is right?",
        ar: "الإصداران 1 و2 من كتلة تطوّر علامات البطاقات، نصًّا (باقي <code>PAYMENT</code> بلا تغيير). أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "CARD             * Card Number\n  CREDIT CARD    * Instalments\n    VISA\n    MASTERCARD\n    OTHER\n  DEBIT CARD     o Cashback Amount\n    VISA\n    MASTERCARD\n    OTHER",
      codeB: "CARD             * Card Number  * Card Brand\n  CREDIT CARD    * Instalments\n  DEBIT CARD     o Cashback Amount",
      options: [
        { en: "A is wrong because a third level breaks the rules; B is the only legal drawing", ar: "A خاطئ لأن المستوى الثالث يخرق القواعد؛ وB هو الرسم المشروع الوحيد" },
        { en: "B is better: the brand is a second question that applies to both card kinds, so it is listed once in <code>CARD</code>; A's six boxes hold nothing", ar: "B أفضل: العلامة سؤالٌ ثانٍ ينطبق على نوعَي البطاقة كليهما، فتُذكر مرّة واحدة في <code>CARD</code>؛ وصناديق A الستة لا تحمل شيئًا" },
        { en: "A is better: it shows every brand explicitly, so a new brand is easy to see", ar: "A أفضل: يعرض كل علامة صراحةً، فيسهل رؤية أيّ علامة جديدة" },
        { en: "B is better because <code>* Card Brand</code> belongs in <code>PAYMENT</code>, where every payment can use it", ar: "B أفضل لأن مكان <code>* Card Brand</code> هو <code>PAYMENT</code>، حيث تستطيع كل دفعة استعماله" }
      ],
      answer: 1,
      hint: {
        en: "Does \"which brand?\" refine \"credit or debit?\", or is it a different question? And what does each brand box hold?",
        ar: "هل «أيّ علامة؟» تفصيلٌ لـ«ائتمان أم خصم؟»، أم سؤال مختلف؟ وماذا يحمل كل صندوق علامة؟"
      },
      explain: {
        en: "B. A is legal — every rule holds — but over-nested: six empty boxes, the same three names twice, and a new brand means two new boxes. \"Which brand?\" cuts across credit and debit, so it is a cross-cutting attribute of the box that encloses them, <code>CARD</code>. Not <code>PAYMENT</code>: a cash payment has no brand.",
        ar: "B. الرسم A مشروع — فكل القواعد متحقّقة — لكنه مُفرط في التداخل (over-nesting): ستة صناديق فارغة، والأسماء الثلاثة مرّتين، وأيّ علامة جديدة تعني صندوقين جديدين. «أيّ علامة؟» يعبر الائتمان والخصم، فهو خاصية عابرة (cross-cutting attribute) في الصندوق المحيط بهما، <code>CARD</code>. وليس <code>PAYMENT</code>: الدفعة النقدية لا علامة لها."
      }
    },
    {
      id: "t4l4q16", type: "write", level: "hard", topics: ["t4-foreign-key-chain", "t4-card-nesting"],
      q: {
        en: "<code>payments</code> and <code>card_payments</code> already exist, as in section 2. Write <code>CREATE TABLE debit_payments</code> so that its key, <code>payment_id</code>, can only name a card payment, and it has an optional <code>cashback</code> amount.",
        ar: "الجدولان <code>payments</code> و<code>card_payments</code> موجودان، كما في القسم 2. اكتب <code>CREATE TABLE debit_payments</code> بحيث لا يسمّي مفتاحه <code>payment_id</code> إلا دفعة بطاقة، وفيه مبلغ <code>cashback</code> اختياري."
      },
      lang: "sql",
      lines: 5,
      starter: "CREATE TABLE debit_payments (\n  \n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+debit_payments\\s*\\(", flags: "i",
          label: { en: "creates the table debit_payments", ar: "يُنشئ الجدول debit_payments" } },
        { re: "\\bpayment_id\\s+\\w+[^,]*PRIMARY\\s+KEY", flags: "i",
          label: { en: "payment_id is the primary key: one row per debit payment", ar: "payment_id هو المفتاح الأساسي: صفّ واحد لكل دفعة خصم" } },
        { re: "REFERENCES\\s+card_payments\\s*\\(\\s*payment_id\\s*\\)", flags: "i",
          label: { en: "the key references card_payments: the box around DEBIT CARD", ar: "المفتاح يشير إلى card_payments: الصندوق المحيط بـ DEBIT CARD" } },
        { re: "\\bcashback\\s+\\w+", flags: "i",
          label: { en: "has a cashback column", ar: "فيه العمود cashback" } }
      ],
      forbid: [
        { re: "REFERENCES\\s+payments\\s*\\(", flags: "i",
          label: { en: "referencing payments would let a cash payment be a debit card: skip no level of the chain", ar: "الإشارة إلى payments تسمح لدفعة نقدية بأن تكون بطاقة خصم: لا تتخطَّ أيّ مستوى من السلسلة" } },
        { re: "\\bcashback\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "cashback is o, optional: not every debit payment takes cash back", ar: "cashback من نوع o، اختياري: ليست كل دفعة خصم تسترجع نقدًا" } },
        { re: "\\bcard_number\\b", flags: "i",
          label: { en: "card_number is inherited from CARD; do not repeat it here", ar: "card_number موروث من CARD؛ لا تكرّره هنا" } }
      ],
      solution: {
        code: "CREATE TABLE debit_payments (\n  payment_id NUMBER PRIMARY KEY REFERENCES card_payments(payment_id),\n  cashback   NUMBER\n);",
        en: "Run in alasql: (7, 20) is accepted; (1, 0) is refused (Foreign key \"1\" not found in table \"card_payments\"), because payment 1 is cash.",
        ar: "نُفّذ في alasql: يُقبل (7, 20)؛ ويُرفض (1, 0) برسالة Foreign key \"1\" not found in table \"card_payments\"، لأن الدفعة 1 نقدية."
      },
      hint: {
        en: "The key points one level out, not to the top. Which box encloses <code>DEBIT CARD</code>?",
        ar: "المفتاح يشير إلى المستوى الأقرب نحو الخارج، لا إلى القمّة. أيّ صندوق يحيط بـ <code>DEBIT CARD</code>؟"
      },
      explain: {
        en: "The nesting becomes a chain of foreign keys: <code>debit_payments</code> references <code>card_payments</code>, which references <code>payments</code>. Pointing straight at <code>payments</code> is tempting, since that is where the ID starts, but it skips <code>CARD</code> and lets cash payment 1 become a debit card. The card number stays in <code>card_payments</code>, and <code>cashback</code> is nullable because it is <code>o</code>.",
        ar: "يصير التداخل سلسلةً من المفاتيح الأجنبية: <code>debit_payments</code> يشير إلى <code>card_payments</code>، الذي يشير إلى <code>payments</code>. والإشارة مباشرةً إلى <code>payments</code> مغرية، لأن المعرّف يبدأ هناك، لكنها تتخطّى <code>CARD</code> وتسمح للدفعة النقدية 1 بأن تصير بطاقة خصم. ويبقى رقم البطاقة في <code>card_payments</code>، ويقبل <code>cashback</code> القيمة NULL لأنه <code>o</code>."
      }
    },
    {
      id: "t4l4q17", type: "mcq", level: "hard", topics: ["t4-cross-cutting-attribute", "t4-over-nesting"],
      q: {
        en: "The shop starts taking American Express cards, credit and debit. How much of the model has to change in version 1 (brands as a third level) and in version 2 (<code>* Card Brand</code> in <code>CARD</code>)?",
        ar: "يبدأ المتجر بقبول بطاقات American Express، ائتمانًا وخصمًا. كم يجب أن يتغيّر من النموذج في الإصدار 1 (العلامات مستوى ثالثًا) وفي الإصدار 2 (<code>* Card Brand</code> في <code>CARD</code>)؟"
      },
      options: [
        { en: "Version 1: one new <code>AMEX</code> box inside <code>CARD</code>. Version 2: a new <code>AMEX</code> subtype beside <code>CREDIT CARD</code>", ar: "الإصدار 1: صندوق <code>AMEX</code> جديد داخل <code>CARD</code>. الإصدار 2: نوع فرعي <code>AMEX</code> جديد بجانب <code>CREDIT CARD</code>" },
        { en: "Nothing in either: Amex cards already fall into <code>OTHER</code>, so no change is ever needed", ar: "لا شيء في أيٍّ منهما: بطاقات Amex تقع أصلًا في <code>OTHER</code>، فلا حاجة إلى أيّ تغيير أبدًا" },
        { en: "Version 1: two new boxes, one under each card kind. Version 2: one new allowed value of <code>* Card Brand</code>, no new box", ar: "الإصدار 1: صندوقان جديدان، واحد تحت كل نوع بطاقة. الإصدار 2: قيمة مسموح بها جديدة لـ <code>* Card Brand</code>، دون صندوق جديد" },
        { en: "Version 1: two new boxes. Version 2: a new <code>AMEX</code> attribute in both <code>CREDIT CARD</code> and <code>DEBIT CARD</code>", ar: "الإصدار 1: صندوقان جديدان. الإصدار 2: خاصية <code>AMEX</code> جديدة في <code>CREDIT CARD</code> و<code>DEBIT CARD</code> كليهما" }
      ],
      answer: 2,
      hint: {
        en: "In version 1 the brands appear under each card kind. In version 2, where is the brand recorded, and as what?",
        ar: "في الإصدار 1 تظهر العلامات تحت كل نوع بطاقة. وفي الإصدار 2، أين تُسجَّل العلامة، وبأيّ شكل؟"
      },
      explain: {
        en: "A brand drawn as boxes is drawn once per card kind, so a new brand costs two boxes — two more tables. As one cross-cutting attribute it costs one value: in the lesson's table, <code>'AMEX'</code> is refused by the <code>CHECK</code> until it is added to the list, then it is a new value, not a new table. <code>OTHER</code> can hold Amex for a while, but if the shop wants Amex named, version 2 is where that is cheap.",
        ar: "العلامة المرسومة صناديقَ تُرسم مرّة لكل نوع بطاقة، فتكلّف العلامة الجديدة صندوقين — أي جدولين إضافيين. أمّا خاصيةً عابرة واحدة فتكلّف قيمة واحدة: في جدول الدرس يرفض قيد <code>CHECK</code> القيمة <code>'AMEX'</code> حتى تُضاف إلى القائمة، ثم تصير قيمة جديدة لا جدولًا جديدًا. ويستطيع <code>OTHER</code> أن يحمل Amex مؤقّتًا، لكن إن أراد المتجر تسميتها فالإصدار 2 هو حيث يكون ذلك رخيصًا."
      }
    },

    /* ---------------------------------------------------- 4 · when subtyping is the wrong tool */
    {
      id: "t4l4q18", type: "output", level: "hard", topics: ["t4-wrong-tool", "t4-name-only-subtypes"],
      q: {
        en: "Instead of <code>SMALL</code> and <code>LARGE</code> boxes, the owner gets a query. They now want the line at 150, not 100. Payments 1–7 have amounts 40, 125, 310, 15, 220, 90 and 60. Fill in the result.",
        ar: "بدلًا من صندوقَي <code>SMALL</code> و<code>LARGE</code>، يحصل المالك على استعلام. ويريد الآن أن يكون الحدّ 150 لا 100. مبالغ الدفعات 1–7 هي 40 و125 و310 و15 و220 و90 و60. املأ النتيجة."
      },
      lang: "sql",
      code: "SELECT CASE WHEN amount >= 150 THEN 'LARGE' ELSE 'SMALL' END AS size_band,\n       COUNT(*) AS payments, SUM(amount) AS takings\nFROM payments\nGROUP BY CASE WHEN amount >= 150 THEN 'LARGE' ELSE 'SMALL' END\nORDER BY size_band;",
      blanks: [
        { accept: ["2"], label: { en: "LARGE · payments", ar: "LARGE · payments" } },
        { accept: ["530"], label: { en: "LARGE · takings", ar: "LARGE · takings" } },
        { accept: ["5"], label: { en: "SMALL · payments", ar: "SMALL · payments" } },
        { accept: ["330"], label: { en: "SMALL · takings", ar: "SMALL · takings" } }
      ],
      hint: {
        en: "Payment 2 (125) was large at 100. Where is it now?",
        ar: "الدفعة 2 (125) كانت كبيرة عند حدّ 100. أين هي الآن؟"
      },
      explain: {
        en: "Run in alasql: LARGE 2 530 (310 + 220), SMALL 5 330. Payment 2 crossed from large to small by editing one number in a query. With <code>SMALL</code> and <code>LARGE</code> as boxes — and tables — it would have had to move rows between tables. That is the sign of name-only subtypes: <code>* Amount</code> already decides membership.",
        ar: "نُفّذ في alasql: LARGE 2 530 (310 + 220)، وSMALL 5 330. انتقلت الدفعة 2 من الكبيرة إلى الصغيرة بتعديل رقم واحد في استعلام. ولو كان <code>SMALL</code> و<code>LARGE</code> صندوقين — وجدولين — لوجب نقل صفوف بين الجداول. هذه علامة الأنواع الفرعية الاسمية (name-only subtypes): <code>* Amount</code> يقرّر الانتماء أصلًا."
      },
      solution: {
        out: "size_band | payments | takings\nLARGE     | 2 | 530\nSMALL     | 5 | 330",
        en: "Run in alasql against the lesson's payments table.",
        ar: "نُفّذ في alasql على جدول payments في الدرس."
      }
    },
    {
      id: "t4l4q19", type: "match", level: "medium", topics: ["t4-box-alternatives", "t4-subtype-decision"],
      q: {
        en: "Each proposal is a box someone wanted in the shop's <code>PAYMENT</code>. Match it to what it should become.",
        ar: "كل اقتراح صندوقٌ أراده أحدهم في <code>PAYMENT</code> المتجر. صِله بما يجب أن يصير."
      },
      leftHead: { en: "Proposed box", ar: "الصندوق المقترح" },
      rightHead: { en: "What it becomes", ar: "ما يصير إليه" },
      pairs: [
        { l: { en: "<code>CASHIER</code> inside <code>PAYMENT</code>", ar: "<code>CASHIER</code> داخل <code>PAYMENT</code>" },
          r: { en: "A separate entity joined to <code>PAYMENT</code> by a line", ar: "كيان منفصل يصله بـ <code>PAYMENT</code> خطّ" } },
        { l: { en: "<code>MARCH</code> and <code>APRIL</code> payments", ar: "دفعات <code>MARCH</code> و<code>APRIL</code>" },
          r: { en: "No box and no new attribute: <code>* Payment Date</code> decides it", ar: "لا صندوق ولا خاصية جديدة: <code>* Payment Date</code> يقرّرها" } },
        { l: { en: "<code>ONLINE</code> beside <code>CASH</code>, <code>CHECK</code> and <code>CARD</code>", ar: "<code>ONLINE</code> بجانب <code>CASH</code> و<code>CHECK</code> و<code>CARD</code>" },
          r: { en: "An attribute of the supertype for a second question, the channel", ar: "خاصية في النوع الأعلى لسؤال ثانٍ، قناة الدفع" } },
        { l: { en: "Inside <code>CHECK</code>: <code>POST-DATED</code> (<code>* Cash-in Date</code>) and <code>OTHER</code>", ar: "داخل <code>CHECK</code>: <code>POST-DATED</code> (<code>* Cash-in Date</code>) و<code>OTHER</code>" },
          r: { en: "A nested subtype at level 2", ar: "نوع فرعي متداخل في المستوى 2" } }
      ],
      hint: {
        en: "Run the questions in order: a kind of? something of its own? the same basis? Note where each one stops.",
        ar: "اطرح الأسئلة بالترتيب: نوعٌ من؟ شيءٌ خاصّ به؟ الأساس نفسه؟ ولاحظ أين يتوقّف كلٌّ منها."
      },
      explain: {
        en: "A cashier takes payments — related, not a kind of, so a line. March and April have nothing of their own and the date already decides them, so not even an attribute. Online cuts across cash, cheque and card: a second basis becomes an attribute of <code>PAYMENT</code>. A post-dated cheque is a kind of cheque with its own date, so it earns a level-2 box, with <code>OTHER</code> beside it.",
        ar: "أمين الصندوق يستلم الدفعات — مرتبط بها لا نوعٌ منها، فهو خطّ. ولا شيء خاصّ بدفعات آذار ونيسان، والتاريخ يقرّرها أصلًا، فلا تستحقّ حتى خاصية. والدفع عبر الإنترنت يعبر النقد والشيك والبطاقة: الأساس الثاني يصير خاصية في <code>PAYMENT</code>. أمّا الشيك المؤجَّل فنوعٌ من الشيك له تاريخه الخاصّ، فيستحقّ صندوقًا في المستوى 2، وبجانبه <code>OTHER</code>."
      }
    },
    {
      id: "t4l4q20", type: "tf", level: "medium", topics: ["t4-wrong-tool", "t4-name-only-subtypes"],
      q: {
        en: "If a proposed set of subtypes passes all three rules — each is a kind of the supertype, they are exhaustive, and they are mutually exclusive — it should be drawn.",
        ar: "إذا اجتازت مجموعة أنواع فرعية مقترحة القواعد الثلاث كلّها — كلٌّ منها نوعٌ من النوع الأعلى، وهي شاملة، ومتنافية — فيجب رسمها."
      },
      truth: false,
      hint: {
        en: "<code>SMALL</code> and <code>LARGE</code> pass all three. What do the slides give as the reason to subdivide at all?",
        ar: "<code>SMALL</code> و<code>LARGE</code> يجتازان الثلاث. ما السبب الذي تعطيه الشرائح للتقسيم أصلًا؟"
      },
      explain: {
        en: "False. The three rules check that subtypes are drawn correctly, not that they should exist. The slides subdivide when a group has special properties — attributes or relationships only it has. <code>SMALL</code> / <code>LARGE</code> pass every rule and have nothing of their own; <code>* Amount</code> already says it.",
        ar: "خطأ. القواعد الثلاث تفحص أن الأنواع الفرعية مرسومة بشكل صحيح، لا أنها يجب أن توجد. والشرائح تقسّم حين يكون لمجموعة خصائص مميِّزة — خصائص أو علاقات لا يملكها غيرها. <code>SMALL</code> / <code>LARGE</code> يجتازان كل قاعدة ولا شيء خاصّ بهما؛ <code>* Amount</code> يقول ذلك أصلًا."
      }
    },

    /* ---------------------------------------------------- 5 · knowing when to stop */
    {
      id: "t4l4q21", type: "order", level: "easy", topics: ["t4-subtype-decision"],
      q: {
        en: "Put the four questions of the subtype decision in the order the lesson asks them.",
        ar: "رتّب أسئلة قرار التقسيم الأربعة بالترتيب الذي يطرحها به الدرس."
      },
      items: [
        { en: "Is it a kind of the supertype?", ar: "هل هو نوعٌ من النوع الأعلى؟" },
        { en: "Does it have special properties: an attribute or relationship of its own?", ar: "هل له خصائص مميِّزة: خاصية أو علاقة خاصّة به؟" },
        { en: "Does it answer the same question (basis) as its siblings?", ar: "هل يجيب عن السؤال نفسه (الأساس) الذي يجيب عنه أشقّاؤه؟" },
        { en: "Would it go deeper than two levels?", ar: "هل سيتجاوز مستويين؟" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "The first three come from the slides; the last is the readability guideline. Which question would send <code>INSTRUCTOR</code> away first?",
        ar: "الثلاثة الأولى من الشرائح؛ والأخير إرشاد سهولة القراءة. أيّ سؤال يُبعد <code>INSTRUCTOR</code> أوّلًا؟"
      },
      explain: {
        en: "A kind of? — else a separate entity and a line (<code>INSTRUCTOR</code>). Special properties? — else an attribute or nothing (<code>DOWNHILL</code> / <code>SLALOM</code>). Same basis? — else an attribute of the supertype (<code>BEGINNER</code> / <code>ADVANCED</code>). Deeper than two levels? — then try an attribute; it is a guideline, so the exit says \"try\", not \"forbidden\".",
        ar: "نوعٌ من؟ — وإلّا فكيان منفصل وخطّ (<code>INSTRUCTOR</code>). خصائص مميِّزة؟ — وإلّا فخاصية أو لا شيء (<code>DOWNHILL</code> / <code>SLALOM</code>). الأساس نفسه؟ — وإلّا فخاصية في النوع الأعلى (<code>BEGINNER</code> / <code>ADVANCED</code>). أعمق من مستويين؟ — فجرّب خاصيةً؛ إنه إرشاد، ولهذا يقول المخرج «جرّب» لا «ممنوع»."
      }
    },
    {
      id: "t4l4q22", type: "error", level: "hard", topics: ["t4-subtype-decision", "t4-box-alternatives"],
      q: {
        en: "The ski resort's revised <code>SNOW SPORT</code>, as text. Every box has an attribute of its own, yet one line still should not be a subtype. Which line?",
        ar: "<code>SNOW SPORT</code> المعدَّل لمنتجع التزلّج، نصًّا. لكل صندوق خاصيةٌ خاصّة به، ومع ذلك يبقى سطرٌ واحد لا يجب أن يكون نوعًا فرعيًّا. أيّ سطر؟"
      },
      lang: "text",
      code: "SNOW SPORT       # Sport ID  * Name  * Difficulty\n  SKI            * Ski Length\n  SNOWBOARD      * Board Length\n  CROSS COUNTRY  * Distance\n  SNOWMOBILE     * Vehicle Count\n  NIGHT SESSION  * Floodlight Zone\n  OTHER\nSNOW SPORT -- taught by -- INSTRUCTOR",
      answer: 6,
      solution: {
        code: "SNOW SPORT       # Sport ID  * Name  * Difficulty\n                 o Floodlight Zone\n  SKI            * Ski Length\n  SNOWBOARD      * Board Length\n  CROSS COUNTRY  * Distance\n  SNOWMOBILE     * Vehicle Count\n  OTHER\nSNOW SPORT -- taught by -- INSTRUCTOR",
        en: "NIGHT SESSION leaves the hierarchy; the floodlit zone becomes an optional attribute of SNOW SPORT.",
        ar: "يخرج NIGHT SESSION من التسلسل؛ وتصير منطقة الإضاءة خاصية اختيارية في SNOW SPORT."
      },
      hint: {
        en: "An attribute of its own gets a group past question 2. What question does each box answer?",
        ar: "الخاصية الخاصّة تُمرّر المجموعة من السؤال 2. عن أيّ سؤال يجيب كل صندوق؟"
      },
      explain: {
        en: "Line 6. A night ski run is both <code>SKI</code> and <code>NIGHT SESSION</code>: \"when is it held?\" is a second basis beside \"what kind of sport?\", so it fails question 3 even though it has an attribute. Line 5 passes all four: a kind of snow sport, its own vehicle count, the same basis, level 1. Difficulty and the instructor are already where the lesson put them.",
        ar: "السطر 6. جولة التزلّج الليلية هي <code>SKI</code> و<code>NIGHT SESSION</code> معًا: «متى تُقام؟» أساسٌ ثانٍ بجانب «أيّ نوع من الرياضات؟»، فتخفق في السؤال 3 مع أن لها خاصية. والسطر 5 يجتاز الأربعة: نوعٌ من رياضات الثلج، وله عدد مركباته، وعلى الأساس نفسه، وفي المستوى 1. أمّا الصعوبة والمدرّب فهما حيث وضعهما الدرس أصلًا."
      }
    },
    {
      id: "t4l4q23", type: "multi", level: "hard", topics: ["t4-subtype-decision", "t4-two-levels", "t4-name-only-subtypes"],
      q: {
        en: "The shop's model is <code>PAYMENT</code> with <code>CASH</code>, <code>CHECK</code>, <code>CARD</code> (holding <code>CREDIT CARD</code> and <code>DEBIT CARD</code>) and <code>OTHER</code>. Which proposals should become new subtypes? Choose all that apply.",
        ar: "نموذج المتجر هو <code>PAYMENT</code> وفيه <code>CASH</code> و<code>CHECK</code> و<code>CARD</code> (وفيه <code>CREDIT CARD</code> و<code>DEBIT CARD</code>) و<code>OTHER</code>. أيّ الاقتراحات يجب أن يصير أنواعًا فرعية جديدة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>GIFT VOUCHER</code> (<code>* Voucher Code</code>) at level 1, taken out of <code>OTHER</code>", ar: "<code>GIFT VOUCHER</code> (<code>* Voucher Code</code>) في المستوى 1، مأخوذًا من <code>OTHER</code>" },
        { en: "Inside <code>CREDIT CARD</code>: <code>GOLD</code> and <code>PLATINUM</code>, with nothing of their own", ar: "داخل <code>CREDIT CARD</code>: <code>GOLD</code> و<code>PLATINUM</code>، دون أيّ شيء خاصّ بهما" },
        { en: "Inside <code>CASH</code>: <code>FOREIGN CURRENCY</code> (<code>* Currency</code>, <code>* Exchange Rate</code>) and <code>OTHER</code>", ar: "داخل <code>CASH</code>: <code>FOREIGN CURRENCY</code> (<code>* Currency</code> و<code>* Exchange Rate</code>) و<code>OTHER</code>" },
        { en: "<code>SUPPLIER</code> inside <code>PAYMENT</code>, for the firms the shop pays", ar: "<code>SUPPLIER</code> داخل <code>PAYMENT</code>، للشركات التي يدفع لها المتجر" },
        { en: "<code>REPEAT CUSTOMER</code> beside <code>CASH</code>, <code>CHECK</code> and <code>CARD</code>, with <code>* Visit Count</code>", ar: "<code>REPEAT CUSTOMER</code> بجانب <code>CASH</code> و<code>CHECK</code> و<code>CARD</code>، مع <code>* Visit Count</code>" }
      ],
      answer: [0, 2],
      hint: {
        en: "Run all four questions on each. Watch for a box that would sit beside another, and for one with nothing inside.",
        ar: "اطرح الأسئلة الأربعة على كلٍّ منها. انتبه لصندوق قد يجلس بجانب آخر في الوقت نفسه، ولصندوق لا شيء فيه."
      },
      explain: {
        en: "A gift voucher is a way to pay with its own code, answering \"how was it paid?\", at level 1. Foreign-currency cash is a kind of cash with its own currency and rate, at level 2, with <code>OTHER</code> beside it. <code>GOLD</code> / <code>PLATINUM</code> hold nothing and would be a third level. A supplier is not a payment. A repeat customer can pay by card: a second basis whose visit count belongs to <code>CUSTOMER</code>.",
        ar: "قسيمة الهدية طريقة دفع لها رمزها الخاصّ، تجيب عن «كيف دُفعت؟»، في المستوى 1. والنقد بعملة أجنبية نوعٌ من النقد له عملته وسعر صرفه، في المستوى 2، وبجانبه <code>OTHER</code>. أمّا <code>GOLD</code> / <code>PLATINUM</code> فلا تحملان شيئًا وستكونان مستوى ثالثًا. والمورّد ليس دفعة. والزبون المتكرّر قد يدفع بالبطاقة: أساسٌ ثانٍ، ومكان عدد زياراته <code>CUSTOMER</code>."
      }
    },
    {
      id: "t4l4q24", type: "complete", level: "medium", topics: ["t4-rules-every-level", "t4-nested-subtypes"],
      q: {
        en: "The table-level <code>CHECK</code> on <code>animals</code> ties level 2 to level 1. Which condition completes it, so an invertebrate can never carry a vertebrate class?",
        ar: "قيد <code>CHECK</code> على مستوى الجدول في <code>animals</code> يربط المستوى 2 بالمستوى 1. أيّ شرط يُكمله بحيث لا يحمل اللافقاري صنفًا فقاريًّا أبدًا؟"
      },
      lang: "sql",
      code: "CHECK ((animal_group = 'VERTEBRATE'   AND vertebrate_class IS NOT NULL)\n    OR (animal_group = 'INVERTEBRATE' AND vertebrate_class ____))",
      options: [
        { code: "IS NOT NULL" },
        { code: "IS NULL" },
        { code: "= 'OTHER'" },
        { code: "<> 'BIRD'" }
      ],
      answer: 1,
      hint: {
        en: "<code>INVERTEBRATE</code> has no boxes inside it. What should its level-2 column hold?",
        ar: "<code>INVERTEBRATE</code> لا صناديق في داخله. ماذا يجب أن يحمل عمود المستوى 2 فيه؟"
      },
      explain: {
        en: "<code>IS NULL</code>. The level-2 question is asked only inside <code>VERTEBRATE</code>, so an invertebrate has no answer to it. <code>= 'OTHER'</code> is tempting, but <code>OTHER</code> is <code>VERTEBRATE</code>'s fish-and-frogs box, not a place for octopuses. Run in alasql, the spider with <code>'BIRD'</code> is refused (Violation of CHECK constraint) and the spider with <code>NULL</code> is accepted.",
        ar: "<code>IS NULL</code>. سؤال المستوى 2 يُطرح داخل <code>VERTEBRATE</code> فقط، فلا جواب له عند اللافقاري. و<code>= 'OTHER'</code> مغرٍ، لكن <code>OTHER</code> هو صندوق الأسماك والضفادع في <code>VERTEBRATE</code>، لا مكان للأخطبوط. وحين نُفّذ في alasql رُفض العنكبوت ذو <code>'BIRD'</code> (Violation of CHECK constraint) وقُبل العنكبوت ذو <code>NULL</code>."
      },
      solution: {
        code: "CHECK ((animal_group = 'VERTEBRATE'   AND vertebrate_class IS NOT NULL)\n    OR (animal_group = 'INVERTEBRATE' AND vertebrate_class IS NULL))",
        en: "As in the lesson's section 1 table.",
        ar: "كما في جدول القسم 1 في الدرس."
      }
    }
  ]
};
