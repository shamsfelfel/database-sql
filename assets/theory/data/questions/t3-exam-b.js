/* Question bank: T3 chapter test B -- Applied. Read a business brief, then decide the
   marks, write the ERDish, place the key and write the SQL. Every SQL answer here was
   run in alasql. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-exam-b"] = {
  title: { en: "Chapter Test B — Applied", ar: "اختبار الفصل B — التطبيق" },
  intro: {
    en: "24 questions that make you do the chapter's work. Each one gives you a business brief from the chapter's cases — H.R. and its locations, the restaurant, the warehouse, the library, the travel agency — and asks you to settle the halves and the ends, write the ERDish sentences, decide which table carries the key, and write or read the SQL. Allow about 40 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا تجعلك تؤدّي عمل الفصل بنفسك. كل سؤال يعطيك وصفًا من العمل (business brief) مأخوذًا من حالات الفصل — الموارد البشرية ومواقعها، والمطعم، والمستودع، والمكتبة، ووكالة السفر — ويطلب منك أن تحسم الأنصاف والأطراف، وتكتب جمل ERDish، وتقرّر أيّ جدول يحمل المفتاح، وتكتب SQL أو تقرأه. خصّص نحو 40 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== deciding the marks from a brief */
    {
      id: "t3bx01", type: "mcq", level: "easy",
      topics: ["t3-business-decides-optionality", "t3-optionality-from-scenario", "t3-dashed-line"],
      q: {
        en: "A consultancy uses the H.R. model, with one difference: \"New staff join a bench pool and are placed in a department only when a project starts. Nobody is ever in two departments at once.\" Which sentence, read from <code>EMPLOYEE</code>, fits this business?",
        ar: "شركة استشارات تستعمل نموذج الموارد البشرية، مع فرق واحد: «ينضمّ الموظفون الجدد إلى مجموعة انتظار، ولا يوضعون في قسم إلا حين يبدأ مشروع. ولا يكون أحد في قسمين في الوقت نفسه.» أيّ جملة، مقروءة من <code>EMPLOYEE</code>، تناسب هذا العمل؟"
      },
      options: [
        { en: "Each EMPLOYEE must work in one and only one DEPARTMENT.", ar: "Each EMPLOYEE must work in one and only one DEPARTMENT." },
        { en: "Each EMPLOYEE may work in one or more DEPARTMENTs.", ar: "Each EMPLOYEE may work in one or more DEPARTMENTs." },
        { en: "Each EMPLOYEE may work in one and only one DEPARTMENT.", ar: "Each EMPLOYEE may work in one and only one DEPARTMENT." },
        { en: "Each DEPARTMENT may be responsible for one and only one EMPLOYEE.", ar: "Each DEPARTMENT may be responsible for one and only one EMPLOYEE." }
      ],
      answer: 2,
      hint: {
        en: "Two separate facts in the brief: one answers must or may, the other answers one or many. Apply each to the EMPLOYEE reading.",
        ar: "في الوصف حقيقتان منفصلتان: واحدة تجيب must أم may، والأخرى تجيب واحد أم أكثر. طبّق كلًّا منهما على القراءة من EMPLOYEE."
      },
      explain: {
        en: "The bench pool means an employee can have no department, so the half beside EMPLOYEE is dashed: may. \"Never in two at once\" keeps the single toe at DEPARTMENT: one and only one. \"May … one or more\" is the classic mix-up of optionality with cardinality — being allowed none does not make it plural. The sentence from DEPARTMENT is a different reading, and this business has not changed it.",
        ar: "مجموعة الانتظار تعني أن الموظف قد لا يكون له قسم، فالنصف المجاور لـ EMPLOYEE متقطّع: may. و«لا يكون في قسمين في الوقت نفسه» تُبقي الإصبع الواحدة عند DEPARTMENT: ‏one and only one. أمّا «may … one or more» فهي الخلط المعروف بين الإلزامية (optionality) والتعدّدية (cardinality) — أن يُسمح بلا شيء لا يجعل العدد جمعًا. والجملة من DEPARTMENT قراءة أخرى، ولم يغيّرها هذا العمل."
      }
    },
    {
      id: "t3bx02", type: "fill", level: "easy",
      topics: ["t3-erdish-six-parts", "t3-business-rule-syntax", "t3-optionality-from-scenario"],
      q: {
        en: "H.R. explains its offices: \"Every department is located at one location. Several departments can share one building, and we sign the lease on a new location before any department moves in.\" Complete both readings of the line.",
        ar: "تشرح الموارد البشرية مكاتبها: «كل قسم يقع في موقع واحد. وقد تتشارك عدّة أقسام مبنًى واحدًا، ونوقّع عقد إيجار الموقع الجديد قبل أن ينتقل إليه أيّ قسم.» أكمل قراءتَي الخطّ كلتيهما."
      },
      lang: "erdish",
      code: "Each DEPARTMENT ____1____ located in ____2____ LOCATION.\nEach LOCATION ____3____ the address of ____4____ DEPARTMENTs.",
      blanks: [
        { accept: ["must be"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one", "one (and only one)"], label: { en: "2", ar: "2" } },
        { accept: ["may be"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "Find the brief's sentence about each entity's own end: is it always so (must), or can it be zero (may)? Then how many of the other.",
        ar: "ابحث في الوصف عن الجملة التي تخصّ طرف كل كيان: هل هي دائمًا كذلك (must)، أم قد تكون صفرًا (may)؟ ثم كم من الآخر."
      },
      explain: {
        en: "\"Every department is located at one location\" gives must be and one and only one. \"Several departments can share one building\" gives one or more DEPARTMENTs, and \"a new location before any department moves in\" gives may be for LOCATION. Each fact settles one mark at one end; the tempting slip is to let \"every department\" make the LOCATION half solid too.",
        ar: "«كل قسم يقع في موقع واحد» تعطي must be وone and only one. و«قد تتشارك عدّة أقسام مبنًى واحدًا» تعطي one or more DEPARTMENTs، و«موقع جديد قبل أن ينتقل إليه أيّ قسم» تعطي may be لـ LOCATION. كل حقيقة تحسم علامة واحدة عند طرف واحد؛ والزلّة المغرية أن تجعل «كل قسم» النصفَ المجاور لـ LOCATION متّصلًا أيضًا."
      }
    },
    {
      id: "t3bx03", type: "tf", level: "easy",
      topics: ["t3-optionality-per-end", "t3-which-half", "t3-business-decides-optionality"],
      q: {
        en: "The shop says: \"Every product we sell belongs to one product type. We set up a new product type before its first product arrives.\" A designer draws the half beside <code>PRODUCT TYPE</code> solid, because \"every product has a type\". That is correct.",
        ar: "يقول المتجر: «كل منتج نبيعه ينتمي إلى نوع منتج واحد. وننشئ نوع المنتج الجديد قبل وصول أول منتج منه.» يرسم مصمّم النصف المجاور لـ <code>PRODUCT TYPE</code> متّصلًا، لأن «كل منتج له نوع». وهذا صحيح."
      },
      truth: false,
      hint: {
        en: "\"Every product has a type\" is a question asked of which entity? Which half belongs to that entity?",
        ar: "«كل منتج له نوع» سؤال موجَّه إلى أيّ كيان؟ وأيّ نصف يخصّ ذلك الكيان؟"
      },
      explain: {
        en: "False. \"Every product has a type\" answers the PRODUCT question, so it makes the half beside PRODUCT solid: each PRODUCT must be classified by one and only one PRODUCT TYPE. The PRODUCT TYPE half is answered by the second sentence: a type can exist before any product, so it is dashed — each PRODUCT TYPE may classify one or more PRODUCTs, exactly as the slides draw it. Each half takes its rule from its own entity.",
        ar: "خطأ. «كل منتج له نوع» تجيب عن سؤال PRODUCT، فتجعل النصف المجاور لـ PRODUCT متّصلًا: each PRODUCT must be classified by one and only one PRODUCT TYPE. أمّا نصف PRODUCT TYPE فتجيب عنه الجملة الثانية: قد يوجد النوع قبل أيّ منتج، فهو متقطّع — each PRODUCT TYPE may classify one or more PRODUCTs، كما ترسمه الشرائح تمامًا. كل نصف يأخذ قاعدته من كيانه هو."
      }
    },

    /* ==================================================== reading a table back into rules */
    {
      id: "t3bx04", type: "multi", level: "medium",
      topics: ["t3-key-at-crows-foot", "t3-optionality-to-not-null", "t3-must-without-column"],
      q: {
        en: "The restaurant's supplier built this table from the DFo model, and nothing else: no comment, no ERD. Which business rules does the table itself prove? Choose every one.",
        ar: "بنى مورّد المطعم هذا الجدول من نموذج DFo، ولا شيء غيره: لا تعليق ولا مخطّط. أيّ قواعد العمل يثبتها الجدول نفسه؟ اختر كل ما ينطبق."
      },
      lang: "sql",
      code: "CREATE TABLE items (\n  item_id      NUMBER      PRIMARY KEY,\n  name         VARCHAR(20) NOT NULL,\n  warehouse_id NUMBER      NOT NULL\n               REFERENCES warehouses(warehouse_id)\n);",
      options: [
        { en: "Every item must be stored in a warehouse.", ar: "كل صنف يجب أن يُخزَّن في مستودع." },
        { en: "An item is stored in one and only one warehouse.", ar: "الصنف يُخزَّن في مستودع واحد فقط." },
        { en: "Every warehouse must store at least one item.", ar: "كل مستودع يجب أن يخزّن صنفًا واحدًا على الأقل." },
        { en: "A warehouse may store several items.", ar: "قد يخزّن المستودع عدّة أصناف." },
        { en: "A warehouse can store only one item, because <code>warehouse_id</code> holds one value.", ar: "لا يخزّن المستودع إلا صنفًا واحدًا، لأن <code>warehouse_id</code> يحمل قيمة واحدة." }
      ],
      answer: [0, 1, 3],
      hint: {
        en: "Read each part of the column: NOT NULL, one column, no UNIQUE. Then ask what the warehouses table could possibly say.",
        ar: "اقرأ كل جزء من العمود: NOT NULL، وعمود واحد، ولا UNIQUE. ثم اسأل ماذا يمكن أن يقول جدول warehouses أصلًا."
      },
      explain: {
        en: "<code>NOT NULL</code> proves must; one column proves one and only one warehouse per item; and with no <code>UNIQUE</code>, many item rows may carry the same <code>warehouse_id</code>, so a warehouse may store several. That one value per row is per item, not per warehouse — the tempting misreading. Whether every warehouse must have an item is the half at the single-toe end, which has no column: run it, and Rafah is saved with no items at all.",
        ar: "‏<code>NOT NULL</code> يثبت must؛ والعمود الواحد يثبت مستودعًا واحدًا فقط لكل صنف؛ ومع غياب <code>UNIQUE</code> قد تحمل صفوف أصناف كثيرة <code>warehouse_id</code> نفسه، فقد يخزّن المستودع عدّة أصناف. والقيمة الواحدة في كل صفّ هي لكل صنف لا لكل مستودع — وهذه هي القراءة الخاطئة المغرية. أمّا هل يجب أن يكون لكل مستودع صنف، فهو النصف عند طرف الإصبع الواحدة، ولا عمود له: جرّب، وستُحفظ Rafah بلا أيّ صنف."
      }
    },

    /* ==================================================== writing the tables */
    {
      id: "t3bx05", type: "write", level: "hard",
      topics: ["t3-self-referencing-column", "t3-nullable-manager-id", "t3-recursive-optionality"],
      q: {
        en: "The restaurant starts a referral card: \"When a new customer tells us which customer sent them, we record that one customer. Most customers came on their own. One customer may send us several friends.\" Write <code>CREATE TABLE customers</code> with <code>customer_id</code> (a number) as the key, <code>name</code> (up to 20 characters, required) and <code>referred_by</code>, the column this relationship needs.",
        ar: "يبدأ المطعم بطاقة إحالة: «حين يخبرنا زبون جديد بالزبون الذي أرسله، نسجّل ذلك الزبون الواحد. ومعظم الزبائن جاؤوا من تلقاء أنفسهم. وقد يرسل إلينا زبونٌ واحد عدّةَ أصدقاء.» اكتب <code>CREATE TABLE customers</code> فيه <code>customer_id</code> ‏(رقم) مفتاحًا، و<code>name</code> ‏(حتى 20 حرفًا، إلزامي)، و<code>referred_by</code>، العمود الذي تحتاجه هذه العلاقة."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE customers (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+customers\\s*\\(", flags: "i", label: { en: "CREATE TABLE customers", ar: "CREATE TABLE customers" } },
        { re: "customer_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "customer_id is the PRIMARY KEY", ar: "customer_id هو PRIMARY KEY" } },
        { re: "name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "name NOT NULL", ar: "name NOT NULL" } },
        { re: "referred_by[\\s\\S]*REFERENCES\\s+customers\\s*\\(\\s*customer_id\\s*\\)", flags: "i", label: { en: "referred_by REFERENCES customers(customer_id) — the line loops back to its own table", ar: "referred_by REFERENCES customers(customer_id) — الخطّ يعود إلى جدوله نفسه" } }
      ],
      forbid: [
        { re: "referred_by[^,]*NOT\\s+NULL", flags: "i", label: { en: "No NOT NULL on referred_by: most customers came on their own, and the very first one has nobody to point at", ar: "لا NOT NULL على referred_by: معظم الزبائن جاؤوا وحدهم، وأوّلهم لا يجد من يشير إليه" } },
        { re: "CREATE\\s+TABLE\\s+(referrers|referrals)", flags: "i", label: { en: "No second table: the one who refers is also a customer", ar: "لا جدول ثانيًا: من يُحيل هو أيضًا زبون" } }
      ],
      solution: {
        code: "CREATE TABLE customers (\n  customer_id NUMBER      PRIMARY KEY,\n  name        VARCHAR(20) NOT NULL,\n  referred_by NUMBER      REFERENCES customers(customer_id)\n);",
        en: "Run in alasql: Linda goes in with no referred_by; Krishna (referred_by 1) then goes in; Krishna inserted before Linda is refused with Foreign key \"1\" not found in table \"customers\". With NOT NULL on referred_by, Linda herself is refused: Wrong NULL value in NOT NULL column referred_by.",
        ar: "بالتشغيل في alasql: تدخل Linda بلا referred_by، ثم يدخل Krishna ‏(referred_by 1)؛ وإدخال Krishna قبل Linda يُرفض بالرسالة Foreign key \"1\" not found in table \"customers\". ومع NOT NULL على referred_by تُرفض Linda نفسها: Wrong NULL value in NOT NULL column referred_by."
      },
      hint: {
        en: "Who is the referrer — a new kind of thing, or a customer? Then: \"most customers came on their own\" answers must or may.",
        ar: "من هو المُحيل — شيء من نوع جديد، أم زبون؟ ثم: «معظم الزبائن جاؤوا من تلقاء أنفسهم» تجيب must أم may."
      },
      explain: {
        en: "The referrer is a customer, so this is a recursive relationship, like the manager loop: the key points into its own table. Each new customer has at most one referrer, so one column; a customer may send several, so no <code>UNIQUE</code>. \"Most came on their own\" makes the half dashed — each CUSTOMER may be referred by one and only one CUSTOMER — so the column stays nullable. The tempting <code>NOT NULL</code> would refuse the very first customer.",
        ar: "المُحيل زبون، فهذه علاقة ذاتية (recursive relationship) مثل حلقة المدير: المفتاح يشير إلى جدوله نفسه. لكل زبون جديد مُحيل واحد على الأكثر، فعمود واحد؛ وقد يرسل الزبون عدّة أصدقاء، فلا <code>UNIQUE</code>. و«معظمهم جاؤوا وحدهم» تجعل النصف متقطّعًا — each CUSTOMER may be referred by one and only one CUSTOMER — فيبقى العمود قابلًا لـ NULL. أمّا <code>NOT NULL</code> المغري فيرفض أول زبون على الإطلاق."
      }
    },
    {
      id: "t3bx06", type: "write", level: "medium",
      topics: ["t3-optionality-to-not-null", "t3-key-at-crows-foot", "t3-marks-to-sql"],
      q: {
        en: "Same H.R. brief as before: \"Every department is located at one location. Several departments can share one building; a new location is leased before any department moves in.\" <code>locations(location_id NUMBER PRIMARY KEY, city)</code> exists. Write <code>CREATE TABLE departments</code> with <code>department_id</code> (a number) as the key, <code>name</code> (up to 20 characters, required) and the column the line needs.",
        ar: "وصف الموارد البشرية نفسه: «كل قسم يقع في موقع واحد. وقد تتشارك عدّة أقسام مبنًى واحدًا؛ ويُستأجر الموقع الجديد قبل أن ينتقل إليه أيّ قسم.» الجدول <code>locations(location_id NUMBER PRIMARY KEY, city)</code> موجود. اكتب <code>CREATE TABLE departments</code> فيه <code>department_id</code> ‏(رقم) مفتاحًا، و<code>name</code> ‏(حتى 20 حرفًا، إلزامي)، والعمود الذي يحتاجه الخطّ."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE departments (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+departments\\s*\\(", flags: "i", label: { en: "CREATE TABLE departments", ar: "CREATE TABLE departments" } },
        { re: "department_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "department_id is the PRIMARY KEY", ar: "department_id هو PRIMARY KEY" } },
        { re: "location_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "solid DEPARTMENT half → location_id NOT NULL", ar: "نصف DEPARTMENT المتّصل ← location_id NOT NULL" } },
        { re: "REFERENCES\\s+locations\\s*\\(\\s*location_id\\s*\\)", flags: "i", label: { en: "REFERENCES locations(location_id)", ar: "REFERENCES locations(location_id)" } }
      ],
      forbid: [
        { re: "location_id[^,]*UNIQUE", flags: "i", label: { en: "No UNIQUE: several departments share one location (the crow's foot at DEPARTMENT)", ar: "لا UNIQUE: عدّة أقسام تتشارك موقعًا واحدًا (قدم الغراب عند DEPARTMENT)" } }
      ],
      solution: {
        code: "CREATE TABLE departments (\n  department_id NUMBER      PRIMARY KEY,\n  name          VARCHAR(20) NOT NULL,\n  location_id   NUMBER      NOT NULL\n                REFERENCES locations(location_id)\n);",
        en: "Run in alasql with locations 1400 Gaza, 1500 Khan Younis, 1700 Rafah: Accounting and Sales both go into 1400; Shipping into 1900 is refused (Foreign key \"1900\" not found in table \"locations\"), and Shipping with no location is refused (Wrong NULL value in NOT NULL column location_id). Rafah stays on file with no department.",
        ar: "بالتشغيل في alasql مع المواقع 1400 Gaza و1500 Khan Younis و1700 Rafah: يدخل Accounting وSales كلاهما في 1400؛ ويُرفض Shipping في 1900 ‏(Foreign key \"1900\" not found in table \"locations\")، ويُرفض Shipping بلا موقع (Wrong NULL value in NOT NULL column location_id). وتبقى Rafah مسجّلة بلا أيّ قسم."
      },
      hint: {
        en: "The crow's foot is where the key goes; the half at that same end decides NOT NULL.",
        ar: "قدم الغراب هي مكان المفتاح؛ والنصف عند الطرف نفسه يقرّر NOT NULL."
      },
      explain: {
        en: "Several departments share one location, so the crow's foot is at DEPARTMENT and <code>departments</code> carries <code>location_id</code>. The DEPARTMENT half is solid, so the column is <code>NOT NULL</code>; <code>REFERENCES</code> makes sure the location exists. The empty new location is the dashed LOCATION half, and needs nothing at all. A <code>UNIQUE</code> on the key would forbid Accounting and Sales sharing the Gaza building.",
        ar: "عدّة أقسام تتشارك موقعًا واحدًا، فقدم الغراب عند DEPARTMENT، والجدول <code>departments</code> يحمل <code>location_id</code>. ونصف DEPARTMENT متّصل، فالعمود <code>NOT NULL</code>؛ و<code>REFERENCES</code> يضمن أن الموقع موجود. أمّا الموقع الجديد الفارغ فهو نصف LOCATION المتقطّع، ولا يحتاج شيئًا. ولو وُضع <code>UNIQUE</code> على المفتاح لمُنع Accounting وSales من تشارك مبنى غزة."
      }
    },

    /* ==================================================== running the rules */
    {
      id: "t3bx07", type: "output", level: "medium",
      topics: ["t3-travel-agency", "t3-optionality-to-not-null", "t3-matrix-to-erd"],
      q: {
        en: "The travel agency built its line as <code>landmarks.country_id VARCHAR(2) NOT NULL REFERENCES countries(country_id)</code>. Countries JO, EG, IT and JP are on file; landmarks 1–4 are Petra and Wadi Rum (JO), the Pyramids of Giza (EG) and the Colosseum (IT). The four inserts are run one at a time, then the query. Fill in the results.",
        ar: "بنت وكالة السفر خطّها بالعمود <code>landmarks.country_id VARCHAR(2) NOT NULL REFERENCES countries(country_id)</code>. الدول JO وEG وIT وJP مسجّلة؛ والمعالم 1–4 هي Petra وWadi Rum ‏(JO)، وأهرامات الجيزة (EG)، والكولوسيوم (IT). تُنفَّذ الإضافات الأربع واحدة واحدة، ثم الاستعلام. املأ النتائج."
      },
      lang: "sql",
      code: "INSERT INTO landmarks VALUES (5, 'Valley of the Kings', 'EG');\nINSERT INTO landmarks VALUES (6, 'Eiffel Tower', 'FR');\nINSERT INTO landmarks (landmark_id, name) VALUES (7, 'Mount Fuji');\nINSERT INTO landmarks VALUES (8, 'Mount Fuji', 'JP');\n\nSELECT COUNT(*) AS n FROM landmarks;",
      blanks: [
        { accept: ["2", "two"], label: { en: "how many inserts are refused", ar: "كم إضافة تُرفض" } },
        { accept: ["6", "six"], label: { en: "n", ar: "n" } }
      ],
      solution: { out: "n\n6" },
      hint: {
        en: "One insert names a country that is not on file; one leaves the country out. Which part of the column refuses each?",
        ar: "إضافة تسمّي دولة غير مسجّلة؛ وأخرى تُغفل الدولة. أيّ جزء من العمود يرفض كلًّا منهما؟"
      },
      explain: {
        en: "Run in alasql: the Eiffel Tower is refused (Foreign key \"FR\" not found in table \"countries\") and the first Mount Fuji is refused (Wrong NULL value in NOT NULL column country_id), so 4 + 2 = 6 rows. Two parts, two rules: <code>REFERENCES</code> says the country must exist, <code>NOT NULL</code> says there must be one. To record the Eiffel Tower, France goes into <code>countries</code> first — the parent before the child.",
        ar: "بالتشغيل في alasql: يُرفض برج إيفل (Foreign key \"FR\" not found in table \"countries\")، ويُرفض Mount Fuji الأول (Wrong NULL value in NOT NULL column country_id)، فيكون 4 + 2 = 6 صفوف. جزءان وقاعدتان: <code>REFERENCES</code> تقول إن الدولة يجب أن تكون موجودة، و<code>NOT NULL</code> تقول إنه يجب أن تكون هناك دولة. ولتسجيل برج إيفل تُضاف فرنسا إلى <code>countries</code> أولًا — الأب قبل الابن."
      }
    },
    {
      id: "t3bx08", type: "trace", level: "medium",
      topics: ["t3-order-matrix", "t3-optional-end", "t3-mandatory-end"],
      q: {
        en: "The DFo warehouse line, built: <code>items.warehouse_id NUMBER NOT NULL REFERENCES warehouses(warehouse_id)</code>. Warehouses 1 (Gaza) and 2 (Khan Younis) exist; items 1–4 are all in warehouse 1. The statements run one at a time. Which are refused?",
        ar: "خطّ المستودع من DFo بعد بنائه: <code>items.warehouse_id NUMBER NOT NULL REFERENCES warehouses(warehouse_id)</code>. المستودعان 1 ‏(Gaza) و2 ‏(Khan Younis) موجودان؛ والأصناف 1–4 كلها في المستودع 1. تُنفَّذ العبارات واحدة واحدة. أيّها يُرفض؟"
      },
      lang: "sql",
      code: "INSERT INTO warehouses VALUES (3, 'Rafah');\nINSERT INTO items VALUES (5, 'Fruit cup', 4);\nINSERT INTO items (item_id, name) VALUES (6, 'Large soda');\nINSERT INTO items VALUES (7, 'French fries', 3);",
      options: [
        { en: "1, 2 and 3: Rafah is saved with no item, which the line does not allow", ar: "1 و2 و3: تُحفظ Rafah بلا صنف، والخطّ لا يسمح بذلك" },
        { en: "2 and 3: one names a warehouse that does not exist, one names none", ar: "2 و3: واحدة تسمّي مستودعًا غير موجود، والأخرى لا تسمّي أيّ مستودع" },
        { en: "Only 2: leaving <code>warehouse_id</code> out just stores an empty value", ar: "2 فقط: إغفال <code>warehouse_id</code> لا يفعل إلا أن يخزّن قيمة فارغة" },
        { en: "2, 3 and 4: Rafah holds no items yet, so nothing can be put in it", ar: "2 و3 و4: Rafah لا تحمل أصنافًا بعد، فلا يمكن وضع شيء فيها" }
      ],
      answer: 1,
      solution: {
        en: "Run in alasql: 1 succeeds; 2 fails with Foreign key \"4\" not found in table \"warehouses\"; 3 fails with Wrong NULL value in NOT NULL column warehouse_id; 4 succeeds, and Rafah now stores French fries.",
        ar: "بالتشغيل في alasql: تنجح 1؛ وتفشل 2 بالرسالة Foreign key \"4\" not found in table \"warehouses\"؛ وتفشل 3 بالرسالة Wrong NULL value in NOT NULL column warehouse_id؛ وتنجح 4، فتخزّن Rafah الآن French fries."
      },
      hint: {
        en: "The key sits in items. Which statements touch that column, and which two rules does the column carry?",
        ar: "المفتاح في items. أيّ العبارات تمسّ هذا العمود، وما القاعدتان اللتان يحملهما العمود؟"
      },
      explain: {
        en: "Statement 2 breaks <code>REFERENCES</code> (there is no warehouse 4) and statement 3 breaks <code>NOT NULL</code>, the solid ITEM half. Statement 1 is the WAREHOUSE half — \"may store\" — and an empty warehouse is allowed; even a \"must\" there would have no column to refuse it. Statement 4 only needs warehouse 3 to exist, which it does after statement 1.",
        ar: "العبارة 2 تخالف <code>REFERENCES</code> (لا مستودع رقم 4)، والعبارة 3 تخالف <code>NOT NULL</code>، أي نصف ITEM المتّصل. أمّا العبارة 1 فهي نصف WAREHOUSE — «may store» — والمستودع الفارغ مسموح؛ بل حتى لو كان هناك «must» لما وُجد عمود يرفضه. والعبارة 4 لا تحتاج إلا أن يكون المستودع 3 موجودًا، وهو موجود بعد العبارة 1."
      }
    },

    /* ==================================================== checking a model against the brief */
    {
      id: "t3bx09", type: "error", level: "medium",
      topics: ["t3-cardinality-from-scenario", "t3-one-and-only-one", "t3-book-author"],
      q: {
        en: "The library's brief: \"Each book is written by one author; we add an author when we order their first book. Every book we catalogue is published by one publisher. Some publishers publish dozens of our books, and we list a publisher as soon as we order from them.\" Which line of the model contradicts the brief?",
        ar: "وصف المكتبة: «كل كتاب يكتبه مؤلف واحد؛ ونضيف المؤلف حين نطلب أول كتاب له. وكل كتاب نفهرسه ينشره ناشر واحد. وبعض الناشرين ينشرون عشرات من كتبنا، ونسجّل الناشر بمجرّد أن نطلب منه.» أيّ سطر في النموذج يناقض الوصف؟"
      },
      lang: "erdish",
      code: "BOOK       # * Book ID   * Title\nAUTHOR     # * Author ID   * Name\nPUBLISHER  # * Publisher ID   * Name\nEach BOOK must be written by one and only one AUTHOR.\nEach AUTHOR may be the author of one or more BOOKs.\nEach BOOK must be published by one and only one PUBLISHER.\nEach PUBLISHER may be the publisher of one and only one BOOK.",
      answer: 7,
      solution: {
        code: "BOOK       # * Book ID   * Title\nAUTHOR     # * Author ID   * Name\nPUBLISHER  # * Publisher ID   * Name\nEach BOOK must be written by one and only one AUTHOR.\nEach AUTHOR may be the author of one or more BOOKs.\nEach BOOK must be published by one and only one PUBLISHER.\nEach PUBLISHER may be the publisher of one or more BOOKs.",
        en: "\"Dozens of our books\" is plural: the end at BOOK is a crow's foot.",
        ar: "«عشرات من كتبنا» جمع: الطرف عند BOOK قدم غراب."
      },
      hint: {
        en: "Check every mark in lines 4–7 against one sentence of the brief. Which sentence says how many books one publisher has?",
        ar: "طابق كل علامة في الأسطر 4–7 مع جملة من الوصف. أيّ جملة تقول كم كتابًا للناشر الواحد؟"
      },
      explain: {
        en: "Line 7 gives a publisher one and only one book, but \"some publishers publish dozens of our books\" puts a crow's foot at BOOK. Its may is right: a publisher is listed before any of its books arrives. Line 5 is the slides' own sentence, and \"we add an author when we order their first book\" keeps it a may, since the book has not arrived yet. Getting the half right does not make the end right — they are separate questions.",
        ar: "السطر 7 يعطي الناشر كتابًا واحدًا فقط، لكن «بعض الناشرين ينشرون عشرات من كتبنا» تضع قدم غراب عند BOOK. أمّا may فيه فصحيحة: يُسجَّل الناشر قبل وصول أيّ من كتبه. والسطر 5 جملة الشرائح نفسها، و«نضيف المؤلف حين نطلب أول كتاب له» تُبقيها may، لأن الكتاب لم يصل بعد. وصحّة النصف لا تعني صحّة الطرف — فهما سؤالان منفصلان."
      }
    },
    {
      id: "t3bx10", type: "compare", level: "medium",
      topics: ["t3-symbol-at-far-end", "t3-which-half", "t3-sentence-to-line"],
      q: {
        en: "The H.R. location brief: every department is at one location; several departments can share one; a new location may have no department yet. Two drafts of the line, as text; <code>[half, end]</code> is written beside the entity it touches. Which draft fits the brief?",
        ar: "وصف مواقع الموارد البشرية: كل قسم في موقع واحد؛ وقد تتشارك عدّة أقسام موقعًا واحدًا؛ وقد لا يكون في الموقع الجديد قسم بعد. مسوّدتان للخطّ، نصًّا؛ و<code>[half, end]</code> مكتوب بجانب الكيان الذي يلمسه. أيّ المسوّدتين تناسب الوصف؟"
      },
      lang: "text",
      codeA: "DEPARTMENT [solid, crow's foot] -- [dashed, single toe] LOCATION\nnames: \"located in\" beside DEPARTMENT · \"address of\" beside LOCATION",
      codeB: "DEPARTMENT [solid, single toe] -- [dashed, crow's foot] LOCATION\nnames: \"located in\" beside DEPARTMENT · \"address of\" beside LOCATION",
      options: [
        { en: "B: a department is at one location, so the single toe belongs beside DEPARTMENT", ar: "‏B: القسم في موقع واحد، فالإصبع الواحدة مكانها بجانب DEPARTMENT" },
        { en: "Both: the halves are the same, and the end symbols only show which way to read", ar: "كلتاهما: الأنصاف واحدة، ورموز الأطراف لا تبيّن إلا اتجاه القراءة" },
        { en: "Neither: a location may be empty, so the LOCATION end must also be a crow's foot", ar: "ولا واحدة: قد يكون الموقع فارغًا، فيجب أن يكون طرف LOCATION قدم غراب أيضًا" },
        { en: "A: the crow's foot sits at DEPARTMENT, because one location can be the address of several departments", ar: "‏A: قدم الغراب عند DEPARTMENT، لأن الموقع الواحد قد يكون عنوانًا لعدّة أقسام" }
      ],
      answer: 3,
      solution: {
        en: "A reads: Each DEPARTMENT must be located in one and only one LOCATION; each LOCATION may be the address of one or more DEPARTMENTs. B reads: each DEPARTMENT must be located in one or more LOCATIONs — the opposite of the brief.",
        ar: "‏A يُقرأ: Each DEPARTMENT must be located in one and only one LOCATION؛ وeach LOCATION may be the address of one or more DEPARTMENTs. أمّا B فيُقرأ: each DEPARTMENT must be located in one or more LOCATIONs — عكس الوصف."
      },
      hint: {
        en: "Say draft B aloud from DEPARTMENT. The end symbol you need is the one where the sentence arrives.",
        ar: "اقرأ المسوّدة B بصوت عالٍ بدءًا من DEPARTMENT. الرمز الذي تحتاجه هو الذي عند وصول الجملة."
      },
      explain: {
        en: "An end symbol counts the entity it touches, so it is read where the sentence ends. \"A department is at one location\" puts the single toe at LOCATION; \"several departments share one\" puts the crow's foot at DEPARTMENT — draft A. B puts the toe beside the start, which is the classic swap, and it reads \"one or more LOCATIONs\". An optional end is the half, not the symbol, so an empty location changes nothing at the ends.",
        ar: "رمز الطرف يعدّ الكيان الذي يلمسه، فيُقرأ حيث تنتهي الجملة. «القسم في موقع واحد» تضع الإصبع الواحدة عند LOCATION؛ و«عدّة أقسام تتشارك موقعًا» تضع قدم الغراب عند DEPARTMENT — المسوّدة A. أمّا B فتضع الإصبع بجانب البداية، وهو الخلط المعروف، فتُقرأ «one or more LOCATIONs». والطرف الاختياري هو النصف لا الرمز، فالموقع الفارغ لا يغيّر شيئًا في الأطراف."
      }
    },
    {
      id: "t3bx11", type: "complete", level: "easy",
      topics: ["t3-two-readings", "t3-what-swaps", "t3-optional-end"],
      q: {
        en: "The supplier explains: \"Every item we stock is stored in one warehouse. A warehouse holds hundreds of items, but we rent a new one before any stock is moved in.\" The first reading is written. Complete the second.",
        ar: "يشرح المورّد: «كل صنف لدينا يُخزَّن في مستودع واحد. والمستودع يحمل مئات الأصناف، لكننا نستأجر المستودع الجديد قبل أن تُنقل إليه أيّ بضاعة.» القراءة الأولى مكتوبة. أكمل الثانية."
      },
      lang: "erdish",
      code: "Each ITEM must be stored in one and only one WAREHOUSE.\nEach WAREHOUSE ____ ITEMs.",
      options: [
        { code: "may store one or more" },
        { code: "must store one or more" },
        { code: "may store one and only one" },
        { code: "may be stored in one or more" }
      ],
      answer: 0,
      solution: {
        code: "Each ITEM must be stored in one and only one WAREHOUSE.\nEach WAREHOUSE may store one or more ITEMs.",
        en: "WAREHOUSE's own half (dashed: a new warehouse is empty), its own name (store), and the crow's foot at ITEM (hundreds).",
        ar: "نصف WAREHOUSE نفسه (متقطّع: المستودع الجديد فارغ)، واسمه هو (store)، وقدم الغراب عند ITEM (مئات)."
      },
      hint: {
        en: "Three parts change when you read back: the optionality, the name and the cardinality. Take each from the brief.",
        ar: "ثلاثة أجزاء تتغيّر حين تقرأ عائدًا: الإلزامية والاسم والتعدّدية. خذ كلًّا منها من الوصف."
      },
      explain: {
        en: "\"We rent a new one before any stock is moved in\" makes the WAREHOUSE half dashed: may. \"Hundreds of items\" is plural: one or more. The name changes too — store, not stored in, which is the ITEM end's name. \"Must store\" carries the must over from the first sentence, the commonest slip when reading a line back.",
        ar: "«نستأجر المستودع الجديد قبل أن تُنقل إليه أيّ بضاعة» تجعل نصف WAREHOUSE متقطّعًا: may. و«مئات الأصناف» جمع: one or more. ويتغيّر الاسم أيضًا — store لا stored in، فهذا اسم طرف ITEM. أمّا «must store» فتنقل must من الجملة الأولى، وهي أكثر الزلّات شيوعًا حين يُقرأ الخطّ عائدًا."
      }
    },
    {
      id: "t3bx12", type: "match", level: "easy",
      topics: ["t3-mandatory-end", "t3-single-toe", "t3-dashed-line", "t3-crows-foot"],
      q: {
        en: "Each sentence comes from the library's brief about <code>BOOK</code> and <code>PUBLISHER</code>. Match it to the one mark on the line it decides.",
        ar: "كل جملة مأخوذة من وصف المكتبة عن <code>BOOK</code> و<code>PUBLISHER</code>. صِلها بالعلامة الواحدة التي تحسمها على الخطّ."
      },
      leftHead: { en: "From the brief", ar: "من الوصف" },
      rightHead: { en: "Mark on the line", ar: "العلامة على الخطّ" },
      pairs: [
        { l: { en: "\"Every book we catalogue has a publisher.\"", ar: "«كل كتاب نفهرسه له ناشر.»" },
          r: { en: "solid half beside BOOK", ar: "نصف متّصل بجانب BOOK" } },
        { l: { en: "\"No book of ours has two publishers.\"", ar: "«لا يوجد عندنا كتاب له ناشران.»" },
          r: { en: "single toe at PUBLISHER", ar: "إصبع واحدة عند PUBLISHER" } },
        { l: { en: "\"We list a publisher before any of its books arrives.\"", ar: "«نسجّل الناشر قبل وصول أيّ من كتبه.»" },
          r: { en: "dashed half beside PUBLISHER", ar: "نصف متقطّع بجانب PUBLISHER" } },
        { l: { en: "\"Penguin has published dozens of our books.\"", ar: "«نشرت Penguin عشرات من كتبنا.»" },
          r: { en: "crow's foot at BOOK", ar: "قدم غراب عند BOOK" } }
      ],
      hint: {
        en: "A must/may fact sits on the half beside the entity it is about; a how-many fact sits at the entity being counted.",
        ar: "حقيقة must/may تقع على النصف المجاور للكيان الذي تتحدّث عنه؛ وحقيقة «كم؟» تقع عند الكيان المعدود."
      },
      explain: {
        en: "Two facts are about every book: having a publisher is the BOOK half (solid), and having only one is counted at PUBLISHER (single toe). Two are about a publisher: being listed with no books is the PUBLISHER half (dashed), and having dozens is counted at BOOK (crow's foot). A half is read beside its subject; a symbol beside the entity it counts.",
        ar: "حقيقتان عن كل كتاب: أن يكون له ناشر هو نصف BOOK (متّصل)، وأن يكون له ناشر واحد فقط يُعدّ عند PUBLISHER (إصبع واحدة). وحقيقتان عن الناشر: أن يُسجَّل بلا كتب هو نصف PUBLISHER (متقطّع)، وأن تكون له عشرات الكتب يُعدّ عند BOOK (قدم غراب). النصف يُقرأ بجانب فاعله، والرمز بجانب الكيان الذي يعدّه."
      }
    },
    {
      id: "t3bx13", type: "contrast", level: "medium",
      topics: ["t3-between-entities", "t3-business-scenario", "t3-significance"],
      q: {
        en: "You are turning the chapter's briefs into an ERD. Sort each sentence: does it give you a relationship line to draw, or an attribute to list in a softbox?",
        ar: "تحوّل أوصاف الفصل إلى مخطّط ERD. صنّف كل جملة: هل تعطيك خطّ علاقة ترسمه، أم خاصية تكتبها داخل صندوق؟"
      },
      concepts: [
        { en: "A relationship line", ar: "خطّ علاقة" },
        { en: "An attribute in a softbox", ar: "خاصية داخل صندوق" }
      ],
      rows: [
        { s: { en: "\"Each item is stored in one warehouse.\"", ar: "«كل صنف يُخزَّن في مستودع واحد.»" }, a: 0 },
        { s: { en: "\"We record the city of each warehouse.\"", ar: "«نسجّل مدينة كل مستودع.»" }, a: 1 },
        { s: { en: "\"For each book we note its publisher, and for each publisher we keep an address and a phone number.\"", ar: "«نسجّل لكل كتاب ناشره، ونحفظ لكل ناشر عنوانًا ورقم هاتف.»" }, a: 0 },
        { s: { en: "\"For each employee on commission, we track the potential commission.\"", ar: "«لكل موظف يعمل بالعمولة، نتابع العمولة المحتملة.»" }, a: 1 },
        { s: { en: "\"A new customer may tell us which customer sent them.\"", ar: "«قد يخبرنا الزبون الجديد بالزبون الذي أرسله.»" }, a: 0 },
        { s: { en: "\"Every job has a minimum and a maximum salary.\"", ar: "«لكل وظيفة حدّ أدنى وحدّ أعلى للراتب.»" }, a: 1 },
        { s: { en: "\"Each landmark is in a country already on our list.\"", ar: "«كل معلم في دولة مسجّلة لدينا مسبقًا.»" }, a: 0 }
      ],
      hint: {
        en: "Is the other noun something the business lists and describes in its own right — an entity — or a single fact about the first one?",
        ar: "هل الاسم الآخر شيء يسجّله العمل ويصفه لذاته — أي كيان — أم حقيقة واحدة عن الأوّل؟"
      },
      explain: {
        en: "A relationship joins two entities, or an entity and itself. Warehouse, country and the referring customer are entities, so those sentences are lines; city, commission and salary limits are single facts, so they are attributes. The publisher sentence is the trap: \"we note its publisher\" sounds like a value, but a publisher with its own address and phone is an entity, and storing its name in BOOK would hide the line.",
        ar: "العلاقة تربط كيانين، أو كيانًا بنفسه. المستودع والدولة والزبون المُحيل كيانات، فتلك الجمل خطوط؛ أمّا المدينة والعمولة وحدّا الراتب فحقائق مفردة، فهي خصائص. وجملة الناشر هي الفخّ: «نسجّل ناشره» تبدو قيمة، لكن الناشر الذي له عنوانه وهاتفه كيان، وتخزين اسمه داخل BOOK يُخفي الخطّ."
      }
    },
    {
      id: "t3bx14", type: "ordercode", level: "medium",
      topics: ["t3-recursive-relationship", "t3-self-referencing-column", "t3-recursive-may-both"],
      q: {
        en: "The referral table is built: <code>customers(customer_id, name, referred_by REFERENCES customers(customer_id))</code>, nullable. Linda came on her own; Krishna was sent by Linda, Sami by Krishna, Rania by Sami. Put the statements in the only order in which every one succeeds.",
        ar: "بُني جدول الإحالة: <code>customers(customer_id, name, referred_by REFERENCES customers(customer_id))</code>، قابلًا لـ NULL. جاءت Linda من تلقاء نفسها؛ وأرسلت Linda ‏Krishna، وأرسل Krishna ‏Sami، وأرسل Sami ‏Rania. رتّب العبارات بالترتيب الوحيد الذي تنجح فيه كلها."
      },
      lang: "sql",
      items: [
        { code: "CREATE TABLE customers (customer_id NUMBER PRIMARY KEY, name VARCHAR(20) NOT NULL, referred_by NUMBER REFERENCES customers(customer_id));" },
        { code: "INSERT INTO customers (customer_id, name) VALUES (1, 'Linda');" },
        { code: "INSERT INTO customers VALUES (2, 'Krishna', 1);" },
        { code: "INSERT INTO customers VALUES (4, 'Sami', 2);" },
        { code: "INSERT INTO customers VALUES (5, 'Rania', 4);" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "A row can only point at a row that already exists — even in its own table. Who points at nobody?",
        ar: "لا يشير الصفّ إلا إلى صفّ موجود مسبقًا — حتى في جدوله نفسه. من الذي لا يشير إلى أحد؟"
      },
      explain: {
        en: "Run in alasql: the table first, then Linda, whose <code>referred_by</code> is empty — the dashed half at work — then each customer after the one who sent them. Krishna inserted before Linda is refused with Foreign key \"1\" not found in table \"customers\". A recursive key obeys the same parent-before-child rule as any other; the parent is just in the same table.",
        ar: "بالتشغيل في alasql: الجدول أولًا، ثم Linda التي يبقى <code>referred_by</code> لها فارغًا — وهذا عمل النصف المتقطّع — ثم كل زبون بعد الزبون الذي أرسله. وإدخال Krishna قبل Linda يُرفض بالرسالة Foreign key \"1\" not found in table \"customers\". والمفتاح الذاتي يخضع لقاعدة «الأب قبل الابن» نفسها؛ كل ما في الأمر أن الأب في الجدول نفسه."
      }
    },
    {
      id: "t3bx15", type: "mcq", level: "hard",
      topics: ["t3-both-ends-plural", "t3-cardinality-from-scenario", "t3-travel-agency"],
      q: {
        en: "The agency's line is \"Each LANDMARK must be located in one and only one COUNTRY\", built as <code>landmarks.country_id NOT NULL</code>. Now it adds Victoria Falls, which lies on the border of Zambia and Zimbabwe, and wants it recorded in both countries. What does this business fact do to the model?",
        ar: "خطّ الوكالة هو «Each LANDMARK must be located in one and only one COUNTRY»، مبنيًّا بالعمود <code>landmarks.country_id NOT NULL</code>. والآن تضيف شلالات فيكتوريا، الواقعة على حدود زامبيا وزيمبابوي، وتريد تسجيلها في الدولتين. ماذا تفعل هذه الحقيقة بالنموذج؟"
      },
      options: [
        { en: "Nothing on the ERD: insert Victoria Falls twice, once with ZM and once with ZW", ar: "لا شيء في المخطّط: أدخل شلالات فيكتوريا مرّتين، مرّة مع ZM ومرّة مع ZW" },
        { en: "The half beside LANDMARK becomes dashed, so <code>country_id</code> can be left empty for it", ar: "يصبح النصف المجاور لـ LANDMARK متقطّعًا، فيمكن ترك <code>country_id</code> فارغًا لها" },
        { en: "The end at COUNTRY becomes a crow's foot; the line is now plural at both ends, and one <code>country_id</code> column can no longer hold it", ar: "يصبح الطرف عند COUNTRY قدم غراب؛ فيصير الخطّ جمعًا عند الطرفين، ولا يعود عمود <code>country_id</code> واحد يتّسع له" },
        { en: "Keep the single toe and store <code>'ZM,ZW'</code> in <code>country_id</code>", ar: "أبقِ الإصبع الواحدة وخزّن <code>'ZM,ZW'</code> في <code>country_id</code>" }
      ],
      answer: 2,
      hint: {
        en: "How many countries can one landmark now have? Which end counts countries — and what does a column hold per row?",
        ar: "كم دولة يمكن أن يكون للمعلم الواحد الآن؟ وأيّ طرف يعدّ الدول — وماذا يحمل العمود في كل صفّ؟"
      },
      explain: {
        en: "One landmark in two countries is a cardinality answer: the end at COUNTRY becomes one or more. A country already had one or more landmarks, so both ends are plural, and no single column can carry the line — that model is Chapter T5's subject. Inserting it twice gives two rows, two ids, one waterfall; <code>'ZM,ZW'</code> is not a country and fails <code>REFERENCES</code>. Making the half dashed answers \"must or may\", which nobody asked.",
        ar: "معلم واحد في دولتين جواب عن التعدّدية: يصبح الطرف عند COUNTRY ‏one or more. وكان للدولة أصلًا معلم أو أكثر، فيصير الطرفان جمعًا، ولا يتّسع للخطّ عمود واحد — وهذا النموذج موضوع الفصل T5. أمّا إدخالها مرّتين فيعطي صفّين ورقمين لشلال واحد؛ و<code>'ZM,ZW'</code> ليست دولة، فترفضها <code>REFERENCES</code>. وجعل النصف متقطّعًا يجيب عن «must أم may»، ولم يسأل عنه أحد."
      }
    },
    {
      id: "t3bx16", type: "fill", level: "medium",
      topics: ["t3-erdish-audiences", "t3-must-be-or-must", "t3-key-at-crows-foot"],
      q: {
        en: "You inherit this table with no ERD, plus one note from the shop: \"we set up a product type before its first product arrives.\" Write the two ERDish sentences for the DBA, using the slides' names <code>classified by</code> and <code>classify</code>.",
        ar: "ورثتَ هذا الجدول بلا مخطّط، ومعه ملاحظة واحدة من المتجر: «ننشئ نوع المنتج قبل وصول أول منتج منه.» اكتب جملتَي ERDish لمسؤول قاعدة البيانات، مستعملًا اسمي الشرائح <code>classified by</code> و<code>classify</code>."
      },
      lang: "erdish",
      code: "-- CREATE TABLE products (product_id NUMBER PRIMARY KEY, name VARCHAR(30) NOT NULL,\n--   product_type_id NUMBER NOT NULL REFERENCES product_types(product_type_id));\nEach PRODUCT ____1____ classified by ____2____ PRODUCT TYPE.\nEach PRODUCT TYPE ____3____ classify ____4____ PRODUCTs.",
      blanks: [
        { accept: ["must be"], label: { en: "1", ar: "1" } },
        { accept: ["one and only one", "one (and only one)"], label: { en: "2", ar: "2" } },
        { accept: ["may"], label: { en: "3", ar: "3" } },
        { accept: ["one or more"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "The table proves the PRODUCT sentence completely. For the other one, the end comes from the table and the half from the note.",
        ar: "الجدول يثبت جملة PRODUCT كاملة. أمّا الأخرى فطرفها من الجدول ونصفها من الملاحظة."
      },
      explain: {
        en: "One column per product gives one and only one; <code>NOT NULL</code> gives must be. Many products may share a <code>product_type_id</code>, so the type classifies one or more. Whether a type may have no products is invisible in the table — a key cannot sit at the single-toe end — so it comes from the shop's note: may. And it is \"may classify\", not \"may be classify\": the name decides whether \"be\" is needed.",
        ar: "عمود واحد لكل منتج يعطي one and only one؛ و<code>NOT NULL</code> يعطي must be. وقد تتشارك منتجات كثيرة <code>product_type_id</code> واحدًا، فالنوع يصنّف one or more. أمّا هل يجوز أن يكون النوع بلا منتجات فلا يظهر في الجدول — فالمفتاح لا يقع عند طرف الإصبع الواحدة — فيأتي من ملاحظة المتجر: may. وهي «may classify» لا «may be classify»: الاسم هو الذي يقرّر هل تلزم «be»."
      }
    },
    {
      id: "t3bx17", type: "tf", level: "easy",
      topics: ["t3-must-without-column", "t3-key-at-crows-foot"],
      q: {
        en: "Suppose a second library says: \"we only list a publisher once at least one of its books is on our shelves.\" Then the PUBLISHER half is solid, and the DBA enforces it by adding <code>book_id NOT NULL</code> to the <code>publishers</code> table.",
        ar: "لنفترض أن مكتبة ثانية تقول: «لا نسجّل الناشر إلا بعد أن يصبح أحد كتبه على رفوفنا على الأقل.» عندئذٍ يكون نصف PUBLISHER متّصلًا، ويفرضه مسؤول قاعدة البيانات بإضافة <code>book_id NOT NULL</code> إلى الجدول <code>publishers</code>."
      },
      truth: false,
      hint: {
        en: "The half is solid, yes. But which table carries the key of this line, and how many books does one publisher have?",
        ar: "النصف متّصل، نعم. لكن أيّ جدول يحمل مفتاح هذا الخطّ، وكم كتابًا للناشر الواحد؟"
      },
      explain: {
        en: "False. The half is solid — each PUBLISHER must be the publisher of one or more BOOKs — but the crow's foot is at BOOK, so the key is <code>books.publisher_id</code>. A <code>publishers.book_id</code> column could name only one of a publisher's dozens of books. The must at the single-toe end has no column to stand on; the application keeps it, for example by saving a publisher only together with its first book.",
        ar: "خطأ. النصف متّصل — each PUBLISHER must be the publisher of one or more BOOKs — لكن قدم الغراب عند BOOK، فالمفتاح هو <code>books.publisher_id</code>. وعمود <code>publishers.book_id</code> لا يستطيع أن يسمّي إلا كتابًا واحدًا من عشرات كتب الناشر. والـ must عند طرف الإصبع الواحدة لا عمود يقف عليه؛ والتطبيق هو الذي يحفظه، مثلًا بألّا يحفظ الناشر إلا مع أول كتاب له."
      }
    },
    {
      id: "t3bx18", type: "output", level: "hard",
      topics: ["t3-recursive-cardinality", "t3-recursive-may-both", "t3-erdish-recursive"],
      q: {
        en: "The referral table holds Linda (1, came on her own), Krishna (2, sent by 1), Mel (3, sent by 1), Sami (4, sent by 2) and Rania (5, sent by 4). The query counts, for every customer, the friends they sent. Fill in the results.",
        ar: "يحمل جدول الإحالة Linda ‏(1، جاءت وحدها)، وKrishna ‏(2، أرسلته 1)، وMel ‏(3، أرسلته 1)، وSami ‏(4، أرسله 2)، وRania ‏(5، أرسلها 4). يعدّ الاستعلام لكل زبون الأصدقاءَ الذين أرسلهم. املأ النتائج."
      },
      lang: "sql",
      code: "SELECT c.name, COUNT(f.customer_id) AS sent\nFROM customers c\nLEFT JOIN customers f ON f.referred_by = c.customer_id\nGROUP BY c.name\nORDER BY sent DESC, c.name;",
      blanks: [
        { accept: ["5", "five"], label: { en: "rows returned", ar: "عدد الصفوف" } },
        { accept: ["2", "two"], label: { en: "Linda's sent", ar: "قيمة sent لـ Linda" } },
        { accept: ["2", "two"], label: { en: "rows with sent = 0", ar: "صفوف sent فيها = 0" } }
      ],
      solution: { out: "name | sent\nLinda | 2\nKrishna | 1\nSami | 1\nMel | 0\nRania | 0" },
      hint: {
        en: "The LEFT JOIN keeps every customer, even one nobody points at. Count how often each id appears in referred_by.",
        ar: "‏LEFT JOIN يُبقي كل زبون، حتى من لا يشير إليه أحد. عُدّ كم مرّة يظهر كل رقم في referred_by."
      },
      explain: {
        en: "Run in alasql: Linda 2, Krishna 1, Sami 1, Mel 0, Rania 0 — five rows, two zeros. The zeros are the second dashed half: each CUSTOMER may refer one or more CUSTOMERs, so referring nobody is fine. Linda's 2 is the crow's foot: one customer may refer one or more. An inner JOIN would drop Mel and Rania, and hide the half of the rule that allows them.",
        ar: "بالتشغيل في alasql: ‏Linda 2 وKrishna 1 وSami 1 وMel 0 وRania 0 — خمسة صفوف، فيها صفران. والصفران هما النصف المتقطّع الثاني: each CUSTOMER may refer one or more CUSTOMERs، فلا بأس ألّا يُحيل الزبون أحدًا. والرقم 2 لـ Linda هو قدم الغراب: قد يُحيل الزبون الواحد زبونًا أو أكثر. ولو استُعمل JOIN داخلي لسقط Mel وRania، ولاختفى نصف القاعدة الذي يسمح بهما."
      }
    },
    {
      id: "t3bx19", type: "compare", level: "hard",
      topics: ["t3-key-at-crows-foot", "t3-optionality-to-not-null", "t3-dashed-not-safe"],
      q: {
        en: "The library's brief: every book is published by one publisher; a publisher may have dozens of our books, or none yet. Two administrators built the line. Compare them.",
        ar: "وصف المكتبة: كل كتاب ينشره ناشر واحد؛ وقد يكون للناشر عشرات من كتبنا، أو لا شيء بعد. بنى مسؤولان الخطّ. قارن بينهما."
      },
      lang: "sql",
      codeA: "CREATE TABLE books (\n  book_id      VARCHAR(5)  PRIMARY KEY,\n  title        VARCHAR(40) NOT NULL,\n  publisher_id NUMBER REFERENCES publishers(publisher_id)\n);",
      codeB: "CREATE TABLE publishers (\n  publisher_id NUMBER      PRIMARY KEY,\n  name         VARCHAR(30) NOT NULL,\n  book_id      VARCHAR(5)  REFERENCES books(book_id)\n);",
      options: [
        { en: "A has the key at the right end, but it is missing <code>NOT NULL</code>: the BOOK half is solid", ar: "‏A يضع المفتاح عند الطرف الصحيح، لكن ينقصه <code>NOT NULL</code>: نصف BOOK متّصل" },
        { en: "B is right: it lets a publisher exist with no book, which is the dashed half", ar: "‏B هو الصحيح: يسمح بوجود ناشر بلا كتاب، وهذا هو النصف المتقطّع" },
        { en: "They are equivalent: a foreign key links the two tables whichever side it is on", ar: "هما متكافئان: المفتاح الأجنبي يربط الجدولين أيًّا كان الجانب الذي يقع فيه" },
        { en: "A is complete as written: <code>publisher_id</code> is nullable because the PUBLISHER half is dashed", ar: "‏A مكتمل كما هو: <code>publisher_id</code> قابل لـ NULL لأن نصف PUBLISHER متقطّع" }
      ],
      answer: 0,
      solution: {
        code: "CREATE TABLE books (\n  book_id      VARCHAR(5)  PRIMARY KEY,\n  title        VARCHAR(40) NOT NULL,\n  publisher_id NUMBER      NOT NULL\n               REFERENCES publishers(publisher_id)\n);",
        en: "Run in alasql: in A as written, a book with no publisher is saved. In B, Penguin's second book needs a second row with publisher_id 1, and it is refused: Cannot insert record, because it already exists in primary key index.",
        ar: "بالتشغيل في alasql: في A كما هو يُحفظ كتاب بلا ناشر. وفي B يحتاج الكتاب الثاني لـ Penguin صفًّا ثانيًا فيه publisher_id 1، فيُرفض: Cannot insert record, because it already exists in primary key index."
      },
      hint: {
        en: "Two questions per table: is the key at the crow's foot, and does the half at that same end match NOT NULL?",
        ar: "سؤالان لكل جدول: هل المفتاح عند قدم الغراب، وهل يطابق النصفُ عند الطرف نفسه NOT NULL؟"
      },
      explain: {
        en: "The crow's foot is at BOOK, so the key belongs in <code>books</code> — A is the right shape. But NOT NULL is read from the half at the key's own end, the BOOK half, which is solid; A lets a book in with no publisher. B puts the key at the single toe, so a publisher can name one book only. The dashed PUBLISHER half needs no column at all — reading it onto <code>publisher_id</code> is the tempting wrong half.",
        ar: "قدم الغراب عند BOOK، فمكان المفتاح <code>books</code> — وA هو الشكل الصحيح. لكن NOT NULL يُقرأ من النصف عند طرف المفتاح نفسه، أي نصف BOOK، وهو متّصل؛ وA يسمح بدخول كتاب بلا ناشر. أمّا B فيضع المفتاح عند الإصبع الواحدة، فلا يستطيع الناشر أن يسمّي إلا كتابًا واحدًا. ونصف PUBLISHER المتقطّع لا يحتاج عمودًا أصلًا — وقراءته على <code>publisher_id</code> هي النصف الخطأ المغري."
      }
    },
    {
      id: "t3bx20", type: "mcq", level: "easy",
      topics: ["t3-manager-is-employee", "t3-recursive-relationship", "t3-between-entities"],
      q: {
        en: "The restaurant's referral brief: \"A new customer may tell us which customer sent them. One customer may send several friends.\" How should the designer model it?",
        ar: "وصف الإحالة في المطعم: «قد يخبرنا الزبون الجديد بالزبون الذي أرسله. وقد يرسل الزبون الواحد عدّة أصدقاء.» كيف ينبغي أن ينمذجه المصمّم؟"
      },
      options: [
        { en: "Add a second entity, REFERRER, and a line from CUSTOMER to it", ar: "يضيف كيانًا ثانيًا، REFERRER، وخطًّا من CUSTOMER إليه" },
        { en: "Draw a line from CUSTOMER back to CUSTOMER, named at both ends", ar: "يرسم خطًّا من CUSTOMER عائدًا إلى CUSTOMER، مسمًّى عند طرفيه" },
        { en: "Add an attribute <code>o Referrer Name</code> to CUSTOMER", ar: "يضيف الخاصية <code>o Referrer Name</code> إلى CUSTOMER" },
        { en: "Draw a line between CUSTOMER and ORDER, since referrals bring orders", ar: "يرسم خطًّا بين CUSTOMER وORDER، لأن الإحالات تجلب طلبات" }
      ],
      answer: 1,
      hint: {
        en: "The person who sends a friend — what are they, in this business? Recall where the slides put managers.",
        ar: "الشخص الذي يرسل صديقًا — ما هو في هذا العمل؟ تذكّر أين وضعت الشرائح المديرين."
      },
      explain: {
        en: "The referrer is a customer too, just as \"managers are also employees\", so both are listed in one entity and the line joins CUSTOMER to itself: a recursive relationship. A REFERRER entity would store Krishna twice once he refers someone. A referrer-name attribute hides the line inside a value that no key can check, and orders are not what the brief is about.",
        ar: "المُحيل هو نفسه زبون، كما أن «managers are also employees»، فيُسجَّل الاثنان في كيان واحد، ويربط الخطّ CUSTOMER بنفسه: علاقة ذاتية (recursive relationship). أمّا كيان REFERRER فسيخزّن Krishna مرّتين حين يُحيل أحدًا. وخاصية اسم المُحيل تُخفي الخطّ داخل قيمة لا يتحقّق منها أيّ مفتاح، والطلبات ليست موضوع هذا الوصف."
      }
    },
    {
      id: "t3bx21", type: "tf", level: "easy",
      topics: ["t3-erdish-plural", "t3-one-or-more", "t3-singular-or-plural"],
      q: {
        en: "To tell the DBA about shared buildings, a student writes: \"Each LOCATION may be the address of many DEPARTMENTs.\" This is a correct ERDish sentence.",
        ar: "ليخبر طالبٌ مسؤولَ قاعدة البيانات بالمباني المشتركة، كتب: «Each LOCATION may be the address of many DEPARTMENTs.» هذه جملة ERDish صحيحة."
      },
      truth: false,
      hint: {
        en: "ERDish has exactly two cardinality phrases. Which ones?",
        ar: "في ERDish عبارتان فقط للتعدّدية. ما هما؟"
      },
      explain: {
        en: "False. The cardinality part of an ERDish sentence is either \"one and only one\" (single toe) or \"one or more\" (crow's foot); nothing else. The sentence is \"Each LOCATION may be the address of one or more DEPARTMENTs.\" \"Many\" sounds the same in everyday English, but it is exactly the vague wording ERDish exists to remove — and a DBA cannot draw it.",
        ar: "خطأ. جزء التعدّدية في جملة ERDish إمّا «one and only one» (إصبع واحدة) وإمّا «one or more» (قدم غراب)؛ لا شيء غيرهما. والجملة هي «Each LOCATION may be the address of one or more DEPARTMENTs.» قد تبدو «many» مثلها في الكلام اليومي، لكنها بالضبط الصياغة المبهمة التي وُجدت ERDish لإزالتها — ولا يستطيع مسؤول قاعدة البيانات أن يرسمها."
      }
    },
    {
      id: "t3bx22", type: "multi", level: "hard",
      topics: ["t3-customer-order", "t3-optionality-per-end", "t3-must-without-column"],
      q: {
        en: "A second branch of the restaurant changes two things: \"We take phone orders and do not always get a name; such an order is recorded with no customer. And we add a customer to our list only when they place an order.\" Which statements about its model are true? Choose every one.",
        ar: "يغيّر فرع ثانٍ للمطعم أمرين: «نأخذ طلبات بالهاتف ولا نحصل دائمًا على اسم؛ فيُسجَّل مثل هذا الطلب بلا زبون. ولا نضيف الزبون إلى قائمتنا إلا حين يضع طلبًا.» أيّ العبارات عن نموذجه صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The half beside ORDER is dashed: each ORDER may be placed by one and only one CUSTOMER.", ar: "النصف المجاور لـ ORDER متقطّع: each ORDER may be placed by one and only one CUSTOMER." },
        { en: "The half beside CUSTOMER stays solid: each CUSTOMER must place one or more ORDERs.", ar: "النصف المجاور لـ CUSTOMER يبقى متّصلًا: each CUSTOMER must place one or more ORDERs." },
        { en: "<code>orders.customer_id</code> loses its <code>NOT NULL</code>, but keeps <code>REFERENCES</code>.", ar: "يفقد <code>orders.customer_id</code> قيد <code>NOT NULL</code>، لكنه يُبقي <code>REFERENCES</code>." },
        { en: "<code>customers</code> gets an <code>order_no NOT NULL</code> column, to enforce the solid CUSTOMER half.", ar: "يحصل <code>customers</code> على عمود <code>order_no NOT NULL</code>، لفرض نصف CUSTOMER المتّصل." },
        { en: "Since some orders have no customer, the crow's foot moves to CUSTOMER.", ar: "بما أن بعض الطلبات بلا زبون، تنتقل قدم الغراب إلى CUSTOMER." }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Each of the two new sentences is about one entity only. Then remember which half a key column can carry.",
        ar: "كل جملة من الجملتين الجديدتين تخصّ كيانًا واحدًا فقط. ثم تذكّر أيّ نصف يستطيع عمود المفتاح أن يحمله."
      },
      explain: {
        en: "Phone orders answer the ORDER question, so only that half turns dashed and the key becomes nullable — a named customer must still exist. \"Only when they place an order\" keeps the CUSTOMER half solid, but that half is at the single-toe end and has no column: an <code>order_no</code> in customers could hold only one of Linda's orders. No order has two customers, so the ends do not move — optionality and cardinality are separate questions.",
        ar: "طلبات الهاتف تجيب عن سؤال ORDER، فلا يصير متقطّعًا إلا نصفه، ويصبح المفتاح قابلًا لـ NULL — ويبقى واجبًا أن يكون الزبون المسمّى موجودًا. و«لا نضيفه إلا حين يضع طلبًا» تُبقي نصف CUSTOMER متّصلًا، لكن هذا النصف عند طرف الإصبع الواحدة ولا عمود له: عمود <code>order_no</code> في customers لا يحمل إلا طلبًا واحدًا من طلبات Linda. ولا طلب له زبونان، فلا تتحرّك الأطراف — الإلزامية والتعدّدية سؤالان منفصلان."
      }
    },
    {
      id: "t3bx23", type: "error", level: "hard",
      topics: ["t3-key-at-crows-foot", "t3-nullable-manager-id", "t3-optionality-to-not-null"],
      q: {
        en: "The H.R. brief: \"Each department is at one location; a location may house several departments, or none yet. Each employee works in one department. Every employee has one manager, except the managing director, who has none.\" An administrator lists the key columns, one per line. Which lines contradict the brief? Choose both.",
        ar: "وصف الموارد البشرية: «كل قسم في موقع واحد؛ وقد يضمّ الموقع عدّة أقسام، أو لا شيء بعد. وكل موظف يعمل في قسم واحد. ولكل موظف مدير واحد، ما عدا المدير العام الذي لا مدير له.» يسرد مسؤولٌ أعمدةَ المفاتيح، عمودًا في كل سطر. أيّ الأسطر تناقض الوصف؟ اختر الاثنين."
      },
      lang: "text",
      code: "locations.location_id     NUMBER PRIMARY KEY\nlocations.department_id   NUMBER REFERENCES departments(department_id)\ndepartments.department_id NUMBER PRIMARY KEY\ndepartments.location_id   NUMBER NOT NULL REFERENCES locations(location_id)\nemployees.employee_id     NUMBER PRIMARY KEY\nemployees.department_id   NUMBER NOT NULL REFERENCES departments(department_id)\nemployees.manager_id      NUMBER NOT NULL REFERENCES employees(employee_id)",
      answer: [2, 7],
      solution: {
        code: "locations.location_id     NUMBER PRIMARY KEY\ndepartments.department_id NUMBER PRIMARY KEY\ndepartments.location_id   NUMBER NOT NULL REFERENCES locations(location_id)\nemployees.employee_id     NUMBER PRIMARY KEY\nemployees.department_id   NUMBER NOT NULL REFERENCES departments(department_id)\nemployees.manager_id      NUMBER REFERENCES employees(employee_id)",
        en: "Drop locations.department_id — the line is already carried at its crow's foot; and drop NOT NULL from manager_id.",
        ar: "احذف locations.department_id — فالخطّ محمول أصلًا عند قدم غرابه؛ واحذف NOT NULL من manager_id."
      },
      hint: {
        en: "One column sits at a single-toe end. Another puts NOT NULL on a half the brief says can be empty.",
        ar: "عمود يقع عند طرف إصبع واحدة. وآخر يضع NOT NULL على نصف يقول الوصف إنه قد يكون فارغًا."
      },
      explain: {
        en: "Line 2 puts a key at the single-toe end: a location housing Accounting and Sales could name only one of them, and line 4 already carries the line. Line 7 makes the dashed half solid; tried in alasql, the managing director is refused with Wrong NULL value in NOT NULL column manager_id. Lines 4 and 6 are right: each sits at a crow's foot, and its own half is solid.",
        ar: "السطر 2 يضع مفتاحًا عند طرف الإصبع الواحدة: الموقع الذي يضمّ Accounting وSales لا يستطيع أن يسمّي إلا واحدًا منهما، والسطر 4 يحمل الخطّ أصلًا. والسطر 7 يجعل النصف المتقطّع متّصلًا؛ وبالتجربة في alasql يُرفض المدير العام بالرسالة Wrong NULL value in NOT NULL column manager_id. أمّا السطران 4 و6 فصحيحان: كلٌّ منهما عند قدم غراب، ونصفه هو متّصل."
      }
    },
    {
      id: "t3bx24", type: "complete", level: "medium",
      topics: ["t3-matrix-questions", "t3-marks-to-sql", "t3-travel-agency"],
      q: {
        en: "The agency answers the questions its matrix could not: \"Every landmark we record is in exactly one country, and it must be a country already on our list. Jordan alone has Petra and Wadi Rum.\" Complete the last column of <code>landmarks</code>.",
        ar: "تجيب الوكالة عن الأسئلة التي لم تستطع مصفوفتها الإجابة عنها: «كل معلم نسجّله يقع في دولة واحدة بالضبط، ويجب أن تكون دولة مسجّلة في قائمتنا. والأردن وحده فيه Petra وWadi Rum.» أكمل العمود الأخير من <code>landmarks</code>."
      },
      lang: "sql",
      code: "CREATE TABLE landmarks (\n  landmark_id NUMBER      PRIMARY KEY,\n  name        VARCHAR(30) NOT NULL,\n  ____\n);",
      options: [
        { code: "country_name VARCHAR(30) NOT NULL" },
        { code: "country_id   VARCHAR(2) REFERENCES countries(country_id)" },
        { code: "country_id   VARCHAR(2) NOT NULL UNIQUE REFERENCES countries(country_id)" },
        { code: "country_id   VARCHAR(2) NOT NULL REFERENCES countries(country_id)" }
      ],
      answer: 3,
      solution: {
        code: "CREATE TABLE landmarks (\n  landmark_id NUMBER      PRIMARY KEY,\n  name        VARCHAR(30) NOT NULL,\n  country_id  VARCHAR(2)  NOT NULL REFERENCES countries(country_id)\n);",
        en: "Run in alasql: with this column Petra and Wadi Rum both go in under JO. With UNIQUE added, Wadi Rum is refused: Cannot insert record, because it already exists in unique index.",
        ar: "بالتشغيل في alasql: مع هذا العمود تدخل Petra وWadi Rum كلتاهما تحت JO. ومع إضافة UNIQUE تُرفض Wadi Rum: Cannot insert record, because it already exists in unique index."
      },
      hint: {
        en: "Three facts: exactly one (how many columns), must (NOT NULL), already on our list (REFERENCES). And one more: two landmarks in Jordan.",
        ar: "ثلاث حقائق: واحدة بالضبط (كم عمودًا)، وmust ‏(NOT NULL)، ومسجّلة في قائمتنا (REFERENCES). وحقيقة رابعة: معلمان في الأردن."
      },
      explain: {
        en: "\"Exactly one country\" gives one column; \"every landmark\" gives <code>NOT NULL</code>; \"already on our list\" gives <code>REFERENCES</code>. <code>UNIQUE</code> would make the end at LANDMARK singular too — one landmark per country — and refuse Wadi Rum. A copied country name looks harmless but hides the relationship: \"Jordon\" would go in, and nothing could check it.",
        ar: "«دولة واحدة بالضبط» تعطي عمودًا واحدًا؛ و«كل معلم» تعطي <code>NOT NULL</code>؛ و«مسجّلة في قائمتنا» تعطي <code>REFERENCES</code>. أمّا <code>UNIQUE</code> فيجعل الطرف عند LANDMARK مفردًا أيضًا — معلم واحد لكل دولة — فيرفض Wadi Rum. واسم الدولة المنسوخ يبدو بلا ضرر لكنه يُخفي العلاقة: ستدخل «Jordon» ولا شيء يستطيع التحقّق منها."
      }
    }
  ]
};
