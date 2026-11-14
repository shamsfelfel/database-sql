/* Question bank: T2 lesson 5 test -- Attributes and Their Values. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-05"] = {
  title: { en: "Test 5 — Attributes and Their Values", ar: "اختبار 5 — الخصائص وقيمها" },
  intro: {
    en: "24 questions on lesson 5: the five jobs an attribute does and why you model only what the business tracks; an attribute against its value; data types; the single-value rule and how to repair a list squeezed into one attribute; mandatory, optional and null; and why you store birth date, not age. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الخامس: الوظائف الخمس التي تؤدّيها الخاصية (attribute) ولماذا لا تنمذج إلا ما يتتبّعه العمل؛ والخاصية مقابل قيمتها (value)؛ وأنواع البيانات (data types)؛ وقاعدة القيمة الواحدة وكيف تُصلح قائمةً حُشرت في خاصية واحدة؛ والإلزامية (mandatory) والاختيارية (optional) والقيمة null؛ ولماذا نخزّن تاريخ الميلاد لا العمر. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · what an attribute does */
    {
      id: "t2l5q01", type: "match", level: "easy",
      topics: ["t2-attribute-jobs", "t2-attribute"],
      q: {
        en: "The lesson's diagram gave BOOK five attributes, one for each job an attribute can do. Match each job to the attribute of BOOK that does it.",
        ar: "أعطى مخطّط الدرس الكيان BOOK خمس خصائص، واحدة لكل وظيفة يمكن أن تؤدّيها الخاصية. صِل كل وظيفة بخاصية BOOK التي تؤدّيها."
      },
      leftHead: { en: "Job", ar: "الوظيفة" },
      rightHead: { en: "Attribute of BOOK", ar: "خاصية BOOK" },
      pairs: [
        { l: { en: "describes — what is it?", ar: "تَصِف (describes) — ما هو؟" }, r: { en: "Title", ar: "Title" } },
        { l: { en: "quantifies — how many?", ar: "تُكمِّم (quantifies) — كم؟" }, r: { en: "Page Count", ar: "Page Count" } },
        { l: { en: "qualifies — in what state?", ar: "تُقيِّم (qualifies) — في أيّ حال؟" }, r: { en: "Condition", ar: "Condition" } },
        { l: { en: "classifies — what kind?", ar: "تُصنِّف (classifies) — من أيّ نوع؟" }, r: { en: "Genre", ar: "Genre" } },
        { l: { en: "specifies — exactly which?", ar: "تُحدِّد (specifies) — أيّها بالضبط؟" }, r: { en: "Edition", ar: "Edition" } }
      ],
      hint: {
        en: "Turn each job into its question, then ask which attribute War and Peace answers with 1225, worn, novel or 2nd.",
        ar: "حوّل كل وظيفة إلى سؤالها، ثم اسأل: أيّ خاصية يجيب عنها War and Peace بـ 1225 أو worn أو novel أو 2nd؟"
      },
      explain: {
        en: "Each job is a question asked of every book: Page Count answers how many (1225), Condition what state (worn), Genre what kind (novel), Edition exactly which (2nd), and Title what it is. The pair most often swapped is classify against specify: a genre puts a book in a group, an edition picks out one version of it.",
        ar: "كل وظيفة سؤال يُطرح على كل كتاب: Page Count تجيب عن «كم» (1225)، وCondition عن «في أيّ حال» (worn)، وGenre عن «من أيّ نوع» (novel)، وEdition عن «أيّها بالضبط» (2nd)، وTitle عن «ما هو». والزوج الأكثر خلطًا هو التصنيف مقابل التحديد: النوع الأدبي يضع الكتاب في مجموعة، والطبعة تعيّن نسخة واحدة منه."
      }
    },
    {
      id: "t2l5q02", type: "compare", level: "medium",
      topics: ["t2-attribute-relevance", "t2-attribute-as-column"],
      q: {
        en: "Two versions of MEMBER from the lesson's first evolve block. Which statement is right?",
        ar: "نسختان من MEMBER من أول كتلة تطوّر في الدرس. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBER\n  First Name   Last Name   Street Address   City   State   ZIP\n  Shoe Size    Hair Colour   Favourite Food",
      codeB: "MEMBER\n  First Name   Last Name   Street Address   City   State   ZIP",
      options: [
        { en: "A is better: it records more true facts about each member, and more data never hurts", ar: "A أفضل: فهو يسجّل حقائق صحيحة أكثر عن كل عضو، والبيانات الأكثر لا تضرّ" },
        { en: "B is better: every attribute answers a question the library really asks; shoe size, hair colour and favourite food are data someone must collect and keep for nothing", ar: "B أفضل: كل خاصية فيه تجيب عن سؤال تطرحه المكتبة فعلًا؛ أمّا مقاس الحذاء ولون الشعر والطعام المفضّل فبيانات يجب أن يجمعها أحد ويحافظ عليها بلا فائدة" },
        { en: "They are equivalent: extra attributes become columns that are simply left empty", ar: "هما متكافئان: الخصائص الزائدة تصبح أعمدة تُترك فارغة فقط" },
        { en: "B is better because an entity may have at most six attributes", ar: "B أفضل لأن الكيان لا يجوز أن يملك أكثر من ست خصائص" }
      ],
      answer: 1,
      hint: {
        en: "The slides' shoe store and grocery store see the same person. What decides which attributes each one models?",
        ar: "متجر الأحذية والبقالة في الشرائح يريان الشخص نفسه. ما الذي يقرّر الخصائص التي ينمذجها كلٌّ منهما؟"
      },
      explain: {
        en: "You model only the attributes the business wants to track. Version A's extra three are true facts, which is what makes it tempting, but the library never asks a question they answer; each would cost a column in every row and someone's time to fill. There is no limit on the number of attributes: a shoe store would rightly keep Shoe Size.",
        ar: "لا تنمذج إلا الخصائص التي يريد العمل تتبّعها. الخصائص الثلاث الزائدة في A حقائق صحيحة، وهذا ما يجعله مغريًا، لكن المكتبة لا تطرح أيّ سؤال تجيب عنه؛ وكلٌّ منها يكلّف عمودًا في كل صف ووقتًا من أحدٍ لملئه. ولا حدّ لعدد الخصائص: متجر الأحذية يحتفظ بحقّ بالخاصية Shoe Size."
      }
    },
    {
      id: "t2l5q03", type: "tf", level: "easy",
      topics: ["t2-attribute-relevance", "t2-attribute"],
      q: {
        en: "A shoe store and a grocery store can both have the same person as a CUSTOMER, and still give CUSTOMER different lists of attributes. Both models are correct.",
        ar: "قد يكون الشخص نفسه زبونًا (CUSTOMER) في متجر أحذية وفي بقالة، ومع ذلك يعطي كلٌّ منهما الكيان CUSTOMER قائمة خصائص مختلفة. والنموذجان كلاهما صحيح."
      },
      truth: true,
      hint: {
        en: "Is an attribute a fact about the person, or a piece of data a particular business needs?",
        ar: "هل الخاصية حقيقة عن الشخص، أم معلومة يحتاج إليها عمل بعينه؟"
      },
      explain: {
        en: "True. An attribute must be of significance to the business. The shoe store tracks shoe size; the grocery store does not, though the person's feet are the same. Neither list is wrong: each is right for its own business. The mistake is to think an entity has one fixed, complete list of attributes.",
        ar: "صحيح. يجب أن تكون الخاصية ذات أهمية للعمل. متجر الأحذية يتتبّع مقاس الحذاء، والبقالة لا تفعل، مع أن قدمَي الشخص واحدة. ولا قائمة منهما خاطئة: كلٌّ صحيحة لعملها. والخطأ أن تظنّ أن للكيان قائمة خصائص واحدة ثابتة وكاملة."
      }
    },
    {
      id: "t2l5q04", type: "mcq", level: "easy",
      topics: ["t2-attribute", "t2-attribute-as-column"],
      q: {
        en: "Version 1 of MEMBER was an empty box: the entity, with no attributes. What can the library NOT do with it?",
        ar: "كانت النسخة 1 من MEMBER صندوقًا فارغًا: الكيان بلا خصائص. ما الذي لا تستطيع المكتبة فعله بها؟"
      },
      options: [
        { en: "Know that MEMBER is something the library keeps data about", ar: "أن تعرف أن MEMBER شيء تحتفظ المكتبة ببيانات عنه" },
        { en: "Send Sara Hamdan a reminder letter, because nothing records her address", ar: "أن ترسل إلى Sara Hamdan رسالة تذكير، لأنه لا شيء يسجّل عنوانها" },
        { en: "Have more than one member, because an empty entity holds one instance", ar: "أن يكون لديها أكثر من عضو، لأن الكيان الفارغ يحمل نسخة واحدة" },
        { en: "Draw MEMBER in the model at all; an entity must be drawn with its attributes or not at all", ar: "أن ترسم MEMBER في النموذج أصلًا؛ فالكيان يُرسم مع خصائصه أو لا يُرسم" }
      ],
      answer: 1,
      hint: {
        en: "An entity says what the business keeps data about. What are attributes?",
        ar: "الكيان يقول عمّ يحتفظ العمل ببيانات. فما الخصائص؟"
      },
      explain: {
        en: "Attributes are the data. With an empty box the library knows MEMBER is significant and can even count members, but it cannot write to a single one of them: no name, no street, no city. The number of instances has nothing to do with attributes, and an entity can be drawn before its attributes are known; lesson 4 did exactly that.",
        ar: "الخصائص هي البيانات. مع صندوق فارغ تعرف المكتبة أن MEMBER ذو أهمية، بل تستطيع أن تعدّ الأعضاء، لكنها لا تستطيع أن تكتب إلى أيّ واحد منهم: لا اسم ولا شارع ولا مدينة. ولا علاقة لعدد النُسخ بالخصائص، ويمكن رسم الكيان قبل معرفة خصائصه؛ وهذا تمامًا ما فعله الدرس 4."
      }
    },

    /* ---------------------------------------------------- 2 · an attribute and its value */
    {
      id: "t2l5q05", type: "contrast", level: "medium",
      topics: ["t2-attribute-value", "t2-attribute-as-column"],
      q: {
        en: "Sort each item: is it an attribute, or a value?",
        ar: "صنّف كل بند: هل هو خاصية (attribute) أم قيمة (value)؟"
      },
      concepts: [
        { en: "Attribute", ar: "الخاصية" },
        { en: "Value", ar: "القيمة" }
      ],
      rows: [
        { s: { en: "City, on MEMBER", ar: "City، في MEMBER" }, a: 0 },
        { s: { en: "Gaza, for Sara Hamdan", ar: "Gaza، لـ Sara Hamdan" }, a: 1 },
        { s: { en: "date picked, on FRUIT", ar: "date picked، في FRUIT" }, a: 0 },
        { s: { en: "citrus, for one orange", ar: "citrus، لبرتقالة واحدة" }, a: 1 },
        { s: { en: "Becomes a column heading", ar: "يصبح عنوان عمود" }, a: 0 },
        { s: { en: "Sits in one field, where a row meets a column", ar: "يقع في حقل واحد، حيث يلتقي صفّ بعمود" }, a: 1 },
        { s: { en: "Written inside the softbox", ar: "يُكتب داخل الصندوق المستدير الزوايا (softbox)" }, a: 0 }
      ],
      hint: {
        en: "One is the question asked of every instance; the other is one instance's answer.",
        ar: "أحدهما السؤال الذي يُطرح على كل نسخة؛ والآخر جواب نسخة واحدة."
      },
      explain: {
        en: "An attribute is the same for every instance: City, date picked. It is drawn in the softbox and becomes a column heading. A value belongs to one instance: Gaza is Sara's city, citrus is one orange's type, and it lives in one field of a row. \"citrus\" is the tempting one, because it sounds like a category, but it is the answer to the attribute type.",
        ar: "الخاصية واحدة لكل النُسخ: City وdate picked. تُرسم في الصندوق وتصبح عنوان عمود. أمّا القيمة فتخصّ نسخة واحدة: Gaza مدينة Sara، وcitrus نوع برتقالة واحدة، وتقع في حقل واحد من صف. والبند المغري هو citrus لأنه يبدو كفئة، لكنه جواب عن الخاصية type."
      }
    },
    {
      id: "t2l5q06", type: "error", level: "medium",
      topics: ["t2-attribute-value", "t2-attribute"],
      q: {
        en: "A classmate wrote out MEMBER's softbox, one item per line. Which lines hold a value where an attribute belongs? Choose every one.",
        ar: "كتب زميل محتوى صندوق MEMBER، بندًا في كل سطر. أيّ الأسطر يحمل قيمة في مكان الخاصية؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "MEMBER\n  * First Name\n  * Hamdan\n  * Street Address\n  * Khan Younis\n  o State\n  * 00970",
      answer: [3, 5, 7],
      hint: {
        en: "For each line ask: would Omar Saleh answer this line too, or is it already someone's answer?",
        ar: "اسأل عن كل سطر: هل سيجيب Omar Saleh عن هذا السطر أيضًا، أم إنه جواب شخصٍ ما أصلًا؟"
      },
      explain: {
        en: "Line 3 is Sara's last name, line 5 is Omar's city and line 7 is a ZIP code: each is one member's answer, so the box would need new lines for every member who joins. They should read Last Name, City and ZIP. Line 6 is the tempting one: State is often empty, but an empty value does not stop State being an attribute.",
        ar: "السطر 3 هو اسم عائلة Sara، والسطر 5 مدينة Omar، والسطر 7 رمز بريدي: كلٌّ منها جواب عضو واحد، فيحتاج الصندوق أسطرًا جديدة لكل عضو ينضمّ. والصواب Last Name وCity وZIP. والسطر 6 هو المغري: State كثيرًا ما تكون فارغة، لكن خلوّ القيمة لا يمنع State من أن تكون خاصية."
      },
      solution: {
        en: "Lines 3, 5 and 7. Repaired: * First Name, * Last Name, * Street Address, * City, o State, * ZIP.",
        ar: "الأسطر 3 و5 و7. بعد الإصلاح: * First Name و* Last Name و* Street Address و* City وo State و* ZIP."
      }
    },
    {
      id: "t2l5q07", type: "output", level: "easy",
      topics: ["t2-attribute-value", "t2-attribute-as-column"],
      q: {
        en: "members holds Sara (Gaza) and Omar (Khan Younis). Lina Khalil joins; she also lives in Gaza. What does the query return?",
        ar: "يحمل الجدول members العضوين Sara (Gaza) وOmar (Khan Younis). تنضمّ Lina Khalil، وهي أيضًا تسكن Gaza. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO members VALUES (3, 'Lina', 'Khalil', 'Al-Wehda St', 'Gaza', NULL, '00970');\n\nSELECT COUNT(*) AS members, COUNT(DISTINCT city) AS cities\nFROM members;",
      blanks: [
        { accept: ["3"], label: { en: "members", ar: "members" } },
        { accept: ["2"], label: { en: "cities", ar: "cities" } }
      ],
      hint: {
        en: "Lina is a new row, not a new column. How many different values does the city column hold now?",
        ar: "Lina صفّ جديد لا عمود جديد. كم قيمة مختلفة يحمل العمود city الآن؟"
      },
      explain: {
        en: "3 members, 2 cities. Lina adds one row and one more value of the same attribute, City; the model did not change. Gaza now appears twice as a value, so there are still only two distinct cities. The classmate's model, with Gaza as an attribute, would have needed no new column for Lina, but one for Omar's Khan Younis, which shows it was modelling the wrong thing.",
        ar: "3 أعضاء ومدينتان. أضافت Lina صفًّا واحدًا وقيمة أخرى للخاصية نفسها City؛ ولم يتغيّر النموذج. تظهر Gaza الآن قيمةً مرتين، فلا يزال عدد المدن المختلفة اثنتين. أمّا نموذج الزميل الذي جعل Gaza خاصية فما كان ليحتاج عمودًا جديدًا لـ Lina، لكنه احتاج عمودًا لـ Khan Younis مدينة Omar، وهذا يبيّن أنه كان ينمذج الشيء الخطأ."
      },
      solution: { out: "members | cities\n3       | 2" }
    },

    /* ---------------------------------------------------- 3 · every value has a data type */
    {
      id: "t2l5q08", type: "mcq", level: "easy",
      topics: ["t2-data-type", "t2-data-type-choice"],
      q: {
        en: "The slides list attributes for EMPLOYMENT CONTRACT: start date and salary. What data types should they have?",
        ar: "تسرد الشرائح خصائص الكيان EMPLOYMENT CONTRACT: start date وsalary. ما نوع البيانات المناسب لكلٍّ منهما؟"
      },
      options: [
        { en: "start date: a character string; salary: a character string", ar: "start date: سلسلة محارف؛ salary: سلسلة محارف" },
        { en: "start date: a number; salary: a number", ar: "start date: رقم؛ salary: رقم" },
        { en: "start date: a date; salary: a character string", ar: "start date: تاريخ؛ salary: سلسلة محارف" },
        { en: "start date: a date; salary: a number", ar: "start date: تاريخ؛ salary: رقم" }
      ],
      answer: 3,
      hint: {
        en: "A data type states the operations that make sense. Would you add salaries? Would you ask which contract started first?",
        ar: "نوع البيانات يحدّد العمليات المعقولة. هل ستجمع الرواتب؟ وهل ستسأل أيّ العقود بدأ أولًا؟"
      },
      explain: {
        en: "A salary is summed, averaged and compared, so it is a number; the slides use it as their example of one. A start date is compared and sorted as a date. Storing either as a character string is the trap: \"10000\" would sort before \"9000\", and \"12-01-2025\" after \"01-05-2026\". Every attribute stores one piece of data of one specific type.",
        ar: "الراتب يُجمع ويُحسب متوسّطه ويُقارن، فهو رقم؛ وتستخدمه الشرائح مثالًا على ذلك. وتاريخ البدء يُقارن ويُرتّب بوصفه تاريخًا. وتخزين أيّ منهما سلسلة محارف هو الفخّ: «10000» ستسبق «9000» في الترتيب، و«12-01-2025» ستأتي بعد «01-05-2026». كل خاصية تخزّن معلومة واحدة من نوع واحد محدّد."
      }
    },
    {
      id: "t2l5q09", type: "trace", level: "medium",
      topics: ["t2-data-type-choice", "t2-data-type"],
      q: {
        en: "books stores each page count twice: pages_text as characters, pages as a number (A Vision 256, War and Peace 1225, Citizen of the World 96, Androcles and the Lion 128). The query sorts by pages_text, smallest first. Which book comes first?",
        ar: "يخزّن الجدول books عدد صفحات كل كتاب مرتين: pages_text محارفَ، وpages رقمًا (A Vision 256، وWar and Peace 1225، وCitizen of the World 96، وAndrocles and the Lion 128). يرتّب الاستعلام حسب pages_text من الأصغر. أيّ كتاب يأتي أولًا؟"
      },
      lang: "sql",
      code: "SELECT title\nFROM books\nORDER BY pages_text;",
      options: [
        { en: "Citizen of the World — 96 is the smallest page count", ar: "Citizen of the World — فـ 96 أصغر عدد صفحات" },
        { en: "War and Peace — as characters, \"1225\" starts with 1 and comes before \"128\"", ar: "War and Peace — بوصفها محارف، «1225» تبدأ بـ 1 وتسبق «128»" },
        { en: "Androcles and the Lion — \"128\" is the smallest string starting with 1", ar: "Androcles and the Lion — «128» أصغر سلسلة تبدأ بـ 1" },
        { en: "An error: a character column cannot be sorted", ar: "خطأ: لا يمكن ترتيب عمود محارف" }
      ],
      answer: 1,
      hint: {
        en: "Character strings are compared one character at a time, from the left, like words in a dictionary.",
        ar: "تُقارن سلاسل المحارف حرفًا حرفًا من اليسار، كما تُرتّب الكلمات في المعجم."
      },
      explain: {
        en: "War and Peace. As text, \"1225\" and \"128\" both start with \"12\", and \"2\" comes before \"8\", so the longest book sorts first; the full order is War and Peace, Androcles and the Lion, A Vision, Citizen of the World. Choosing 96 is reading the values as numbers, which is exactly what the column does not do. The data type decides what sorting means; page count must be a number.",
        ar: "War and Peace. بوصفها نصًّا تبدأ «1225» و«128» كلتاهما بـ «12»، و«2» تسبق «8»، فيأتي أطول كتاب أولًا؛ والترتيب الكامل: War and Peace ثم Androcles and the Lion ثم A Vision ثم Citizen of the World. واختيار 96 هو قراءة القيم أرقامًا، وهذا بالضبط ما لا يفعله العمود. نوع البيانات يقرّر معنى الترتيب؛ وعدد الصفحات يجب أن يكون رقمًا."
      },
      solution: { out: "title\nWar and Peace\nAndrocles and the Lion\nA Vision\nCitizen of the World" }
    },
    {
      id: "t2l5q10", type: "multi", level: "medium",
      topics: ["t2-data-type-choice", "t2-data-type"],
      q: {
        en: "Which of these attributes should be stored as a character string? Choose every one.",
        ar: "أيّ هذه الخصائص يجب تخزينها سلسلة محارف؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "CUSTOMER's family name", ar: "family name للكيان CUSTOMER" },
        { en: "CAR's catalog price", ar: "catalog price للكيان CAR" },
        { en: "MEMBER's ZIP, such as 00970", ar: "ZIP للكيان MEMBER، مثل 00970" },
        { en: "ORDER's ship date", ar: "ship date للكيان ORDER" },
        { en: "CUSTOMER's email", ar: "email للكيان CUSTOMER" },
        { en: "BOOK's page count", ar: "page count للكيان BOOK" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Digits alone do not make a number. Ask what operations you will do on each value.",
        ar: "الأرقام وحدها لا تجعل القيمة رقمًا. اسأل: ما العمليات التي ستُجريها على كل قيمة؟"
      },
      explain: {
        en: "Family name and email are text. ZIP is the trap: it is all digits, but nobody adds ZIP codes, and as a number 00970 would lose its leading zeros and become 970. Catalog price and page count are calculated and sorted, so they are numbers; ship date is a date, so you can ask which orders shipped first.",
        ar: "family name وemail نصّان. أمّا ZIP فهو الفخّ: كلّه أرقام، لكن أحدًا لا يجمع الرموز البريدية، وبوصفه رقمًا تفقد 00970 أصفارها الأولى فتصبح 970. وcatalog price وpage count تُحسبان وتُرتّبان فهما رقمان؛ وship date تاريخ، لتسأل أيّ الطلبات شُحن أولًا."
      }
    },

    /* ---------------------------------------------------- 4 · one value at a time */
    {
      id: "t2l5q11", type: "tf", level: "easy",
      topics: ["t2-value-over-time", "t2-single-valued"],
      q: {
        en: "Sara moves from Gaza to Rafah, so her City changes. That means City is not a single-valued attribute.",
        ar: "تنتقل Sara من Gaza إلى Rafah، فتتغيّر مدينتها City. وهذا يعني أن City ليست خاصية أحادية القيمة."
      },
      truth: false,
      hint: {
        en: "Read the rule again: one value per instance, at any point in ...?",
        ar: "اقرأ القاعدة مرة أخرى: قيمة واحدة لكل نسخة، في أيّ ...؟"
      },
      explain: {
        en: "False. Single-valued means one value at any point in time, not one value forever. Before the move Sara's City is Gaza; after it, Rafah; never both at once. The slides' CAR makes the same point: its colour changes when it is repainted, and it still has only one colour at a time.",
        ar: "خطأ. أحادية القيمة تعني قيمة واحدة في أيّ لحظة، لا قيمة واحدة إلى الأبد. قبل الانتقال مدينة Sara هي Gaza، وبعده Rafah، ولا تكون الاثنتين معًا أبدًا. وسيارة الشرائح (CAR) تقول الشيء نفسه: يتغيّر لونها إذا أُعيد طلاؤها، ويبقى لها لون واحد في كل وقت."
      }
    },
    {
      id: "t2l5q12", type: "compare", level: "hard",
      topics: ["t2-single-valued", "t2-multi-valued-fix"],
      q: {
        en: "The two versions of the second evolve block. Which statement is right?",
        ar: "نسختا كتلة التطوّر الثانية. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBER\n  # * Id   * First Name   o Books Borrowed\n\nSara:  Books Borrowed = 'A Vision, Citizen of the World'",
      codeB: "MEMBER                     BOOK TRANSACTION\n  # * Id                     # * Tran Date\n  * First Name               o Type\n\nSara's borrowings:  2026-03-01 borrow BK001\n                    2026-03-05 borrow BK003",
      options: [
        { en: "A is better: one attribute keeps all of Sara's books in one place, with no second entity", ar: "A أفضل: خاصية واحدة تُبقي كل كتب Sara في مكان واحد، دون كيان ثانٍ" },
        { en: "A would be fine if the titles were separated by semicolons instead of commas", ar: "A سيكون سليمًا لو فُصلت العناوين بفواصل منقوطة بدل الفواصل" },
        { en: "B is better: each borrowing is its own instance, so every attribute holds one value and each borrowing gets its own date", ar: "B أفضل: كل استعارة نسخة مستقلّة، فتحمل كل خاصية قيمة واحدة وتنال كل استعارة تاريخها الخاص" },
        { en: "B is better only because it splits MEMBER into smaller entities that are faster to search", ar: "B أفضل فقط لأنه يقسم MEMBER إلى كيانات أصغر أسرع في البحث" }
      ],
      answer: 2,
      hint: {
        en: "How many values does Sara's Books Borrowed hold? And where in A could you write when each book was borrowed?",
        ar: "كم قيمة تحمل Books Borrowed عند Sara؟ وأين في A يمكن أن تكتب متى استُعير كل كتاب؟"
      },
      explain: {
        en: "Books Borrowed in A holds two values in one field, which breaks the single-value rule whatever separator is used; one title cannot be found, counted or removed without picking the text apart, and there is nowhere for a date. B turns the many values into many instances of BOOK TRANSACTION, an entity the model already had. MEMBER was not split: B adds no attribute to it.",
        ar: "تحمل Books Borrowed في A قيمتين في حقل واحد، وهذا يخرق قاعدة القيمة الواحدة أيًّا كان الفاصل؛ فلا يمكن إيجاد عنوان واحد أو عدّه أو حذفه دون تفكيك النص، ولا مكان للتاريخ. أمّا B فيحوّل القيم الكثيرة إلى نُسخ كثيرة من BOOK TRANSACTION، وهو كيان موجود أصلًا في النموذج. ولم يُقسَم MEMBER: لم يُضف إليه B أيّ خاصية."
      }
    },
    {
      id: "t2l5q13", type: "output", level: "medium",
      topics: ["t2-single-valued", "t2-multi-valued-fix"],
      q: {
        en: "This is version 1 as a table: Sara's books_borrowed is 'A Vision, Citizen of the World' and Omar's is 'War and Peace'. Sara really does have A Vision. What does the query return?",
        ar: "هذه النسخة 1 جدولًا: قيمة books_borrowed عند Sara هي 'A Vision, Citizen of the World' وعند Omar هي 'War and Peace'. وSara معها فعلًا A Vision. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS holders\nFROM members\nWHERE books_borrowed = 'A Vision';",
      blanks: [{ accept: ["0", "zero", "Zero"], label: { en: "holders", ar: "holders" } }],
      hint: {
        en: "= compares the whole field. What is the whole of Sara's field?",
        ar: "المعامل = يقارن الحقل كاملًا. ما محتوى حقل Sara كاملًا؟"
      },
      explain: {
        en: "0. Sara's field is the whole string 'A Vision, Citizen of the World', which is not equal to 'A Vision', so the search finds nobody even though the answer is in the table. The same query for 'War and Peace' returns 1, because Omar's field happens to hold one value. A list in one attribute works only by luck; version 2 makes it a plain WHERE on one value per row.",
        ar: "0. حقل Sara هو السلسلة كاملة 'A Vision, Citizen of the World'، وهي لا تساوي 'A Vision'، فلا يجد البحث أحدًا مع أن الجواب موجود في الجدول. والاستعلام نفسه عن 'War and Peace' يُرجع 1، لأن حقل Omar صادف أن حمل قيمة واحدة. القائمة في خاصية واحدة لا تعمل إلا بالمصادفة؛ والنسخة 2 تجعلها WHERE بسيطة على قيمة واحدة في كل صف."
      },
      solution: { out: "holders\n0" }
    },
    {
      id: "t2l5q14", type: "mcq", level: "hard",
      topics: ["t2-multi-valued-fix", "t2-single-valued"],
      q: {
        en: "Version 2 of the second evolve block moved each borrowing into BOOK TRANSACTION. What does version 2 still leave open?",
        ar: "نقلت النسخة 2 من كتلة التطوّر الثانية كل استعارة إلى BOOK TRANSACTION. ما الذي لا تزال النسخة 2 تتركه مفتوحًا؟"
      },
      options: [
        { en: "Tran Date can still hold several dates for one borrowing", ar: "لا تزال Tran Date قادرة على حمل عدة تواريخ لاستعارة واحدة" },
        { en: "How a BOOK TRANSACTION is linked to its MEMBER and its BOOK — that is chapter T3", ar: "كيف تُربط BOOK TRANSACTION بعضوها MEMBER وكتابها BOOK — وذلك هو الفصل T3" },
        { en: "Whether BOOK TRANSACTION is an entity at all, since a borrowing cannot be touched", ar: "هل BOOK TRANSACTION كيان أصلًا، ما دامت الاستعارة لا تُلمس" },
        { en: "Nothing: the attribute lists alone already say which member borrowed which book", ar: "لا شيء: قوائم الخصائص وحدها تقول أيّ عضو استعار أيّ كتاب" }
      ],
      answer: 1,
      hint: {
        en: "Look at the two softboxes. Which attribute of BOOK TRANSACTION says whose borrowing it is?",
        ar: "انظر إلى الصندوقين. أيّ خاصية في BOOK TRANSACTION تقول لمن هذه الاستعارة؟"
      },
      explain: {
        en: "Neither softbox says which member or which book a transaction belongs to; the lesson names that as the open question and leaves it to chapter T3's relationships. Every attribute in version 2 is single-valued, so Tran Date is not the problem. BOOK TRANSACTION is an event entity, settled in lesson 4: intangible things can be entities.",
        ar: "لا يقول أيّ من الصندوقين لأيّ عضو أو لأيّ كتاب تعود المعاملة؛ ويسمّي الدرس ذلك سؤالًا مفتوحًا ويتركه لعلاقات (relationships) الفصل T3. وكل خاصية في النسخة 2 أحادية القيمة، فليست Tran Date هي المشكلة. وBOOK TRANSACTION كيان حدث (event) حُسم أمره في الدرس 4: الأشياء غير الملموسة يمكن أن تكون كيانات."
      }
    },

    /* ---------------------------------------------------- 5 · mandatory or optional */
    {
      id: "t2l5q15", type: "fill", level: "easy",
      topics: ["t2-mandatory-optional", "t2-null"],
      q: {
        en: "Fill the three blanks with single words.",
        ar: "املأ الفراغات الثلاثة بكلمة واحدة لكلٍّ منها."
      },
      lang: "text",
      code: "* First Name   marks a ____1____ attribute: it must contain a value.\no Cell Phone   marks an ____2____ attribute: it may be left ____3____.",
      blanks: [
        { accept: ["mandatory", "Mandatory", "MANDATORY", "required"], label: { en: "1", ar: "1" } },
        { accept: ["optional", "Optional", "OPTIONAL"], label: { en: "2", ar: "2" } },
        { accept: ["null", "Null", "NULL", "empty"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "Lesson 3 gave the two marks; the lesson's definition of optional ends in one word for \"no value\".",
        ar: "أعطى الدرس 3 العلامتين؛ وتعريف الاختيارية في الدرس ينتهي بكلمة واحدة تعني «لا قيمة»."
      },
      explain: {
        en: "1 = mandatory, 2 = optional, 3 = null. A mandatory attribute must contain a value for every instance; an optional one may contain a value or be left null. In the table, * becomes NOT NULL and o leaves the column nullable.",
        ar: "1 = mandatory، و2 = optional، و3 = null. الخاصية الإلزامية يجب أن تحمل قيمة في كل نسخة؛ والاختيارية قد تحمل قيمة أو تُترك null. وفي الجدول تصبح * قيد NOT NULL، وتترك o العمود قابلًا لـ null."
      },
      solution: { en: "1 = mandatory, 2 = optional, 3 = null.", ar: "1 = mandatory، 2 = optional، 3 = null." }
    },
    {
      id: "t2l5q16", type: "complete", level: "medium",
      topics: ["t2-mandatory-optional", "t2-optionality-context"],
      q: {
        en: "Complete version 3 of the third evolve block, so that Lina Khalil, who has no cell phone, can join, and a member with no name cannot.",
        ar: "أكمل النسخة 3 من كتلة التطوّر الثالثة، بحيث تستطيع Lina Khalil، التي لا تملك هاتفًا محمولًا، أن تنضمّ، ولا يستطيع عضو بلا اسم أن ينضمّ."
      },
      lang: "text",
      code: "MEMBER\n  # * Id   ________   * City   o State   o Cell Phone",
      options: [
        { code: "o First Name   o Last Name" },
        { code: "* First Name   * Last Name" },
        { code: "* First Name   o Last Name" },
        { code: "o First Name   * Last Name" }
      ],
      answer: 1,
      hint: {
        en: "Ask what the library cannot work without: can it find, or write to, a member whose last name is missing?",
        ar: "اسأل عمّا لا تستطيع المكتبة العمل دونه: هل تستطيع أن تجد عضوًا ينقصه اسم العائلة، أو أن تراسله؟"
      },
      explain: {
        en: "Both names are mandatory: the library must always be able to name and reach a member, and version 2's member with no last name was saved and never found again. Making only one of them mandatory still lets that happen. Cell Phone and State stay optional, because real members such as Lina, and every Gaza address, have no value for them.",
        ar: "الاسمان كلاهما إلزاميان: يجب أن تستطيع المكتبة دائمًا تسمية العضو والوصول إليه، والعضو الذي لا اسم عائلة له في النسخة 2 حُفظ ثم لم يُعثر عليه أبدًا. وجعل أحدهما وحده إلزاميًّا يُبقي ذلك ممكنًا. وتبقى Cell Phone وState اختياريتين، لأن أعضاء حقيقيين مثل Lina، وكل عنوان في Gaza، لا قيمة لهم فيهما."
      }
    },
    {
      id: "t2l5q17", type: "output", level: "hard",
      topics: ["t2-null", "t2-not-null"],
      q: {
        en: "Four members: Sara gave her phone, Omar gave none (NULL), a clerk typed 0 for Lina because the form refused a blank, and Huda gave none (NULL). What does the query return?",
        ar: "أربعة أعضاء: أعطت Sara هاتفها، ولم يعطِ Omar شيئًا (NULL)، وكتب موظّف 0 لـ Lina لأن النموذج رفض الحقل الفارغ، ولم تعطِ Huda شيئًا (NULL). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO members VALUES (1, 'Sara', 'Hamdan', '0599111222'), (2, 'Omar', 'Saleh', NULL),\n                           (3, 'Lina', 'Khalil', '0'), (4, 'Huda', 'Nasser', NULL);\n\nSELECT COUNT(*) AS all_members, COUNT(cell_phone) AS with_phone\nFROM members;",
      blanks: [
        { accept: ["4"], label: { en: "all_members", ar: "all_members" } },
        { accept: ["2"], label: { en: "with_phone", ar: "with_phone" } }
      ],
      hint: {
        en: "COUNT(column) skips null. Is a 0 a missing value, or a value?",
        ar: "COUNT(column) يتخطّى null. هل الصفر قيمة مفقودة أم قيمة؟"
      },
      explain: {
        en: "4 and 2. COUNT(*) counts every row. COUNT(cell_phone) skips only the two nulls, Omar's and Huda's; Lina's 0 is a value, so the database says she has a phone. Answering 1 treats the zero as missing, which is the mistake: null is neither a zero nor a space. Faking a missing value makes the data lie.",
        ar: "4 و2. يعدّ COUNT(*) كل الصفوف. أمّا COUNT(cell_phone) فلا يتخطّى إلا قيمتَي null، قيمة Omar وقيمة Huda؛ وصفر Lina قيمة، فتقول قاعدة البيانات إن لها هاتفًا. والإجابة 1 تعامل الصفر على أنه مفقود، وهذا هو الخطأ: null ليست صفرًا ولا مسافة. وتزييف القيمة المفقودة يجعل البيانات تكذب."
      },
      solution: { out: "all_members | with_phone\n4           | 2" }
    },
    {
      id: "t2l5q18", type: "mcq", level: "medium",
      topics: ["t2-optionality-context", "t2-mandatory-optional"],
      q: {
        en: "An email application keeps an EMPLOYEE entity; an online catalog keeps a CUSTOMER entity. Both have an Email attribute. How should each mark it?",
        ar: "تطبيق بريد إلكتروني يحتفظ بالكيان EMPLOYEE؛ وكتالوج على الإنترنت يحتفظ بالكيان CUSTOMER. لكلٍّ منهما الخاصية Email. كيف يَسِمها كلٌّ منهما؟"
      },
      options: [
        { en: "* Email in both: an email address is always mandatory", ar: "* Email في الاثنين: عنوان البريد إلزامي دائمًا" },
        { en: "o Email in both: contact details are always optional", ar: "o Email في الاثنين: بيانات الاتصال اختيارية دائمًا" },
        { en: "* Email for the catalog's CUSTOMER, o Email for the email application's EMPLOYEE", ar: "* Email للزبون CUSTOMER في الكتالوج، وo Email للموظّف EMPLOYEE في تطبيق البريد" },
        { en: "* Email for the email application's EMPLOYEE, o Email for the catalog's CUSTOMER", ar: "* Email للموظّف EMPLOYEE في تطبيق البريد، وo Email للزبون CUSTOMER في الكتالوج" }
      ],
      answer: 3,
      hint: {
        en: "Optionality is not a property of the word Email. Which business cannot work without it?",
        ar: "الاختيارية ليست صفة لكلمة Email. أيّ العملين لا يستطيع العمل دونها؟"
      },
      explain: {
        en: "This is the slides' own example. An email application cannot serve an employee who has no email address, so it is mandatory there; an online catalog can still sell to a customer without one, so it is optional. Any answer that gives the same mark in both treats optionality as a fact about the attribute, when the business decides.",
        ar: "هذا مثال الشرائح نفسه. تطبيق البريد لا يستطيع خدمة موظّف بلا عنوان بريد، فهو إلزامي هناك؛ والكتالوج يستطيع أن يبيع لزبون بلا عنوان، فهو اختياري. وأيّ إجابة تعطي العلامة نفسها في الحالتين تعامل الاختيارية على أنها حقيقة عن الخاصية، بينما العمل هو من يقرّر."
      }
    },
    {
      id: "t2l5q19", type: "tf", level: "easy",
      topics: ["t2-null"],
      q: {
        en: "For a numeric attribute such as Fine Owed, null and 0 mean the same thing.",
        ar: "في خاصية رقمية مثل Fine Owed، القيمة null والصفر يعنيان الشيء نفسه."
      },
      truth: false,
      hint: {
        en: "Recall the definition of null: unavailable, unassigned, unknown or empty.",
        ar: "تذكّر تعريف null: غير متاحة، أو غير مُسندة، أو مجهولة، أو فارغة."
      },
      explain: {
        en: "False. 0 is a value: the member owes nothing. Null says no value is available: the fine is unknown or has not been worked out. Null is neither a zero nor a space, and the database treats them differently, as COUNT(column) showed by skipping nulls and counting zeros.",
        ar: "خطأ. الصفر قيمة: العضو لا يدين بشيء. أمّا null فتقول إنه لا قيمة متاحة: الغرامة مجهولة أو لم تُحسب بعد. null ليست صفرًا ولا مسافة، وقاعدة البيانات تعاملهما بشكل مختلف، كما أظهر COUNT(column) حين تخطّى null وعدّ الأصفار."
      }
    },

    /* ---------------------------------------------------- 6 · volatile or non-volatile */
    {
      id: "t2l5q20", type: "contrast", level: "medium",
      topics: ["t2-volatile", "t2-birth-date-not-age"],
      q: {
        en: "Sort each attribute: volatile or non-volatile?",
        ar: "صنّف كل خاصية: متقلّبة (volatile) أم غير متقلّبة (non-volatile)؟"
      },
      concepts: [
        { en: "Volatile", ar: "متقلّبة" },
        { en: "Non-volatile", ar: "غير متقلّبة" }
      ],
      rows: [
        { s: { en: "MEMBER's Age", ar: "Age للكيان MEMBER" }, a: 0 },
        { s: { en: "MEMBER's Birth Date", ar: "Birth Date للكيان MEMBER" }, a: 1 },
        { s: { en: "ORDER's Order Date", ar: "Order Date للكيان ORDER" }, a: 1 },
        { s: { en: "ORDER's Days Since Ordered", ar: "Days Since Ordered للكيان ORDER" }, a: 0 },
        { s: { en: "BOOK's Years Since Published", ar: "Years Since Published للكيان BOOK" }, a: 0 },
        { s: { en: "BOOK's Publication Date", ar: "Publication Date للكيان BOOK" }, a: 1 }
      ],
      hint: {
        en: "Would the value be wrong next year if nobody touched it?",
        ar: "هل تصبح القيمة خاطئة في العام القادم إن لم يلمسها أحد؟"
      },
      explain: {
        en: "Age, days since ordered and years since published go stale by themselves, so they are volatile: every row needs updating on a schedule. Birth date, order date and publication date are written once and rarely, if ever, change. Each volatile one can be deduced from its non-volatile partner, so given the choice you store the date.",
        ar: "العمر وعدد الأيام منذ الطلب وعدد السنوات منذ النشر تتقادم من تلقاء نفسها، فهي متقلّبة: يحتاج كل صف إلى تحديث دوري. أمّا تاريخ الميلاد وتاريخ الطلب وتاريخ النشر فتُكتب مرة واحدة ونادرًا ما تتغيّر، إن تغيّرت. وكل متقلّبة يمكن استنتاجها من نظيرتها غير المتقلّبة، فإن خُيّرت خزّنت التاريخ."
      }
    },
    {
      id: "t2l5q21", type: "compare", level: "medium",
      topics: ["t2-birth-date-not-age", "t2-volatile"],
      q: {
        en: "The two versions of the fourth evolve block. The library has a million members. Which statement is right?",
        ar: "نسختا كتلة التطوّر الرابعة. للمكتبة مليون عضو. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBER\n  # * Id   * First Name   * Last Name   * Age",
      codeB: "MEMBER\n  # * Id   * First Name   * Last Name   * Birth Date",
      options: [
        { en: "A is better: age is what people actually ask for, so store it directly", ar: "A أفضل: العمر هو ما يسأل عنه الناس فعلًا، فخزّنه مباشرة" },
        { en: "B is better: birth date is written once, and age can always be deduced from it; A needs a million updates every year", ar: "B أفضل: تاريخ الميلاد يُكتب مرة واحدة، والعمر يمكن استنتاجه منه دائمًا؛ أمّا A فيحتاج مليون تحديث كل عام" },
        { en: "B is better because Age is multi-valued: a member has many ages over a lifetime", ar: "B أفضل لأن Age متعدّدة القيم: للعضو أعمار كثيرة على مدى حياته" },
        { en: "They are equivalent: both store one mandatory value per member", ar: "هما متكافئان: كلاهما يخزّن قيمة إلزامية واحدة لكل عضو" }
      ],
      answer: 1,
      hint: {
        en: "Both are single-valued and both are mandatory. What is different about how long each value stays right?",
        ar: "كلتاهما أحادية القيمة وكلتاهما إلزامية. ما الفرق في المدّة التي تبقى فيها كل قيمة صحيحة؟"
      },
      explain: {
        en: "Age is volatile: each value is right for at most a year, so A needs every one of a million rows updated every year, and any row that is missed quietly lies. Birth Date is non-volatile, and nothing is lost because age can be worked out from it. Age is still single-valued, one value at a time, so the multi-valued answer names the wrong rule.",
        ar: "العمر متقلّب: كل قيمة صحيحة سنةً على الأكثر، فيحتاج A إلى تحديث كل صف من المليون كل عام، وأيّ صف يُنسى يكذب بصمت. أمّا Birth Date فغير متقلّبة، ولا يضيع شيء لأن العمر يُستنتج منها. والعمر يبقى أحادي القيمة، قيمة واحدة في كل وقت، فالإجابة عن تعدّد القيم تسمّي القاعدة الخطأ."
      }
    },
    {
      id: "t2l5q22", type: "trace", level: "hard",
      topics: ["t2-birth-date-not-age", "t2-volatile", "t2-data-type"],
      q: {
        en: "This table kept both: age as typed in 2025, and birth_date (Sara 18, 2007-04-12; Omar 17, 2008-11-30; Lina 19, 2006-01-05). What does the query return?",
        ar: "احتفظ هذا الجدول بالاثنين: age كما كُتب في 2025، وbirth_date (Sara 18، 2007-04-12؛ Omar 17، 2008-11-30؛ Lina 19، 2006-01-05). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT first_name, 2026 - YEAR(birth_date) - age AS behind\nFROM members\nORDER BY id;",
      options: [
        { en: "Sara 0, Omar 0, Lina 0 — the stored ages are correct", ar: "Sara 0، Omar 0، Lina 0 — الأعمار المخزّنة صحيحة" },
        { en: "Sara 1, Omar 1, Lina 1 — every stored age is a year behind", ar: "Sara 1، Omar 1، Lina 1 — كل عمر مخزّن متأخّر سنة" },
        { en: "Sara 1, Omar 0, Lina 0 — only Sara has had a birthday", ar: "Sara 1، Omar 0، Lina 0 — Sara وحدها مرّ عيد ميلادها" },
        { en: "An error: you cannot subtract from a date", ar: "خطأ: لا يمكن الطرح من تاريخ" }
      ],
      answer: 1,
      hint: {
        en: "Work out 2026 minus each birth year, then subtract the age typed a year earlier.",
        ar: "احسب 2026 ناقص سنة ميلاد كلٍّ منهم، ثم اطرح العمر الذي كُتب قبل سنة."
      },
      explain: {
        en: "1 for all three: 2026 − 2007 − 18, 2026 − 2008 − 17 and 2026 − 2006 − 19. Nobody typed a wrong age; every one simply went stale a year later, which is what volatile means. YEAR() pulls a number out of the date, so the subtraction is fine. Drop age and keep birth_date: the computed age is always current.",
        ar: "1 للثلاثة: 2026 − 2007 − 18، و2026 − 2008 − 17، و2026 − 2006 − 19. لم يكتب أحد عمرًا خاطئًا؛ كلّها تقادمت بعد سنة فقط، وهذا معنى المتقلّبة. والدالة YEAR() تستخرج رقمًا من التاريخ، فالطرح سليم. احذف age وأبقِ birth_date: العمر المحسوب حديث دائمًا."
      },
      solution: { out: "first_name | behind\nSara       | 1\nOmar       | 1\nLina       | 1" }
    },

    /* ---------------------------------------------------- across the lesson */
    {
      id: "t2l5q23", type: "write", level: "hard",
      topics: ["t2-not-null", "t2-mandatory-optional", "t2-birth-date-not-age", "t2-attribute-as-column"],
      q: {
        en: "Build MEMBER from this entity: # * Id, * First Name, * Last Name, * City, o State, * Birth Date. Write one CREATE TABLE members statement with an id primary key, the right columns NOT NULL, and a DATE column for the birth date. End it with a semicolon.",
        ar: "ابنِ MEMBER من هذا الكيان: # * Id و* First Name و* Last Name و* City وo State و* Birth Date. اكتب جملة CREATE TABLE members واحدة، فيها id مفتاحًا أساسيًّا، والأعمدة الصحيحة NOT NULL، وعمود من النوع DATE لتاريخ الميلاد. أنهِها بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 9,
      starter: "CREATE TABLE members (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*(\\bid\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "id is the primary key", ar: "id هو المفتاح الأساسي" } },
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*first_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL[^;]*last_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "first_name and last_name are NOT NULL", ar: "first_name وlast_name هما NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*\\bcity\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "city is NOT NULL", ar: "city هو NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*\\bstate\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s*(,|\\))", flags: "i",
          label: { en: "state is left nullable", ar: "state يُترك قابلًا لـ null" } },
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*birth_date\\s+DATE\\s+NOT\\s+NULL", flags: "i",
          label: { en: "birth_date is DATE NOT NULL", ar: "birth_date هو DATE NOT NULL" } }
      ],
      forbid: [
        { re: "\\bage\\s+(NUMBER|INT|INTEGER|NUMERIC|DECIMAL)\\b", flags: "i",
          label: { en: "Age is volatile: store birth_date and work the age out from it", ar: "العمر متقلّب: خزّن birth_date واحسب العمر منه" } },
        { re: "\\bstate\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "State is o: Gaza addresses have none, so it must stay nullable", ar: "State اختيارية (o): عناوين Gaza لا ولاية لها، فيجب أن تبقى قابلة لـ null" } }
      ],
      hint: {
        en: "Every * becomes NOT NULL; the one o stays nullable. Birth Date is a date, not a character string.",
        ar: "كل * تصبح NOT NULL؛ والعلامة o الوحيدة تبقى قابلة لـ null. وBirth Date تاريخ، لا سلسلة محارف."
      },
      explain: {
        en: "Each attribute becomes a column; * becomes NOT NULL and o is left nullable, so a member with no state is accepted and one with no city is refused (\"Wrong NULL value in NOT NULL column city\"). Birth date gets the DATE type, so it sorts and calculates as a date. There is no age column: it is volatile, and 2026 - YEAR(birth_date) works it out. Making state NOT NULL repeats evolve version 1's mistake.",
        ar: "كل خاصية تصبح عمودًا؛ و* تصبح NOT NULL وo تُترك قابلة لـ null، فيُقبل عضو بلا ولاية ويُرفض عضو بلا مدينة («Wrong NULL value in NOT NULL column city»). ويأخذ تاريخ الميلاد النوع DATE، فيُرتّب ويُحسب تاريخًا. ولا عمود للعمر: فهو متقلّب، و2026 - YEAR(birth_date) يحسبه. وجعل state بقيد NOT NULL يكرّر خطأ النسخة 1 في كتلة التطوّر."
      },
      solution: {
        code: "CREATE TABLE members (\n  id         NUMBER      PRIMARY KEY,\n  first_name VARCHAR(20) NOT NULL,\n  last_name  VARCHAR(20) NOT NULL,\n  city       VARCHAR(20) NOT NULL,\n  state      VARCHAR(20),\n  birth_date DATE        NOT NULL\n);",
        en: "Run it, then INSERT INTO members VALUES (3, 'Lina', 'Khalil', 'Gaza', NULL, '2006-01-05') is accepted, and SELECT first_name, 2026 - YEAR(birth_date) AS age_in_2026 FROM members returns Lina | 20.",
        ar: "شغّلها، فتُقبل INSERT INTO members VALUES (3, 'Lina', 'Khalil', 'Gaza', NULL, '2006-01-05')، ويُرجع SELECT first_name, 2026 - YEAR(birth_date) AS age_in_2026 FROM members الصف Lina | 20."
      }
    },
    {
      id: "t2l5q24", type: "error", level: "hard",
      topics: ["t2-attribute-value", "t2-single-valued", "t2-volatile", "t2-multi-valued-fix"],
      q: {
        en: "A classmate drew AUTHOR, one item per line. Three lines each break a different rule from this lesson. Choose all three.",
        ar: "رسم زميل الكيان AUTHOR، بندًا في كل سطر. ثلاثة أسطر يخرق كلٌّ منها قاعدة مختلفة من هذا الدرس. اختر الثلاثة."
      },
      lang: "text",
      code: "AUTHOR\n  * Name\n  o Email\n  * Oscar Wilde\n  o Titles Written   'A Vision, War and Peace'\n  * Years Since First Book\n  o Country",
      answer: [4, 5, 6],
      hint: {
        en: "One line is an answer, not a question; one holds more than one value; one goes stale by itself.",
        ar: "سطر هو جواب لا سؤال؛ وسطر يحمل أكثر من قيمة؛ وسطر يتقادم من تلقاء نفسه."
      },
      explain: {
        en: "Line 4, Oscar Wilde, is one author's value of Name, not an attribute. Line 5 packs a list into one attribute; titles belong to BOOK, one instance each. Line 6 is volatile and goes wrong every year; store a non-volatile date of the first book instead. Line 3 is the tempting one: Email being optional is a business decision, not a defect.",
        ar: "السطر 4، Oscar Wilde، قيمة الخاصية Name لمؤلف واحد، لا خاصية. والسطر 5 يحشر قائمة في خاصية واحدة؛ والعناوين مكانها BOOK، نسخة لكل عنوان. والسطر 6 متقلّب ويصبح خاطئًا كل عام؛ خزّن بدلًا منه تاريخًا غير متقلّب لأول كتاب. والسطر 3 هو المغري: كون Email اختيارية قرار عمل، لا عيب."
      },
      solution: {
        en: "Lines 4, 5 and 6. Repaired: * Name, o Email, o First Book Date, o Country; each title is an instance of BOOK.",
        ar: "الأسطر 4 و5 و6. بعد الإصلاح: * Name وo Email وo First Book Date وo Country؛ وكل عنوان نسخة من BOOK."
      }
    }
  ]
};
