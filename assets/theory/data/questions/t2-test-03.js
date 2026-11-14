/* Question bank: T2 lesson 3 test -- Three Models, One Database. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-03"] = {
  title: { en: "Test 3 — Three Models, One Database", ar: "اختبار 3 — ثلاثة نماذج، قاعدة بيانات واحدة" },
  intro: {
    en: "24 questions on lesson 3: the database development process and its three phases; what the conceptual model identifies and leaves out; what the logical model adds and how to read #, *, o and U; the four steps to a physical model; which model goes to which reader; and what \"implementation-free\" buys a design. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثالث: عملية تطوير قاعدة البيانات ومراحلها الثلاث؛ وما يحدّده النموذج المفاهيمي وما يتركه؛ وما يضيفه النموذج المنطقي وكيف تُقرأ # و* وo وU؛ والخطوات الأربع نحو النموذج الفيزيائي؛ وأيّ نموذج يذهب إلى أيّ قارئ؛ وما الذي يكسبه التصميم حين يكون «مستقلًّا عن التنفيذ» (implementation-free). خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · from a request to a running database */
    {
      id: "t2l3q01", type: "order", level: "easy",
      topics: ["t2-development-process", "t2-process-phases"],
      q: {
        en: "The faculty member's request has just arrived. Put the database development process in order, from what goes in to what finally runs.",
        ar: "وصل للتوّ طلب عضو هيئة التدريس. رتّب عملية تطوير قاعدة البيانات، من المُدخَل الأول حتى ما يعمل في النهاية."
      },
      items: [
        { en: "Business Information Requirements", ar: "متطلّبات معلومات العمل (Business Information Requirements)" },
        { en: "Strategy and Analysis", ar: "الاستراتيجية والتحليل (Strategy and Analysis)" },
        { en: "Conceptual Data Modeling", ar: "النمذجة المفاهيمية للبيانات (Conceptual Data Modeling)" },
        { en: "Design", ar: "التصميم (Design)" },
        { en: "Database Design", ar: "تصميم قاعدة البيانات (Database Design)" },
        { en: "Build", ar: "البناء (Build)" },
        { en: "Database Build", ar: "بناء قاعدة البيانات (Database Build)" }
      ],
      answer: [0, 1, 2, 3, 4, 5, 6],
      hint: {
        en: "Three of these are phases; each phase is followed by what it produces.",
        ar: "ثلاثة من هذه مراحل؛ وتأتي بعد كل مرحلة ما تنتجه."
      },
      explain: {
        en: "Requirements go in; strategy and analysis turn them into the conceptual data model; design turns that into the database design; build turns the design into the database. The usual slip is to put Conceptual Data Modeling after Design, as if the client's picture came out of the technical work. It comes first, and SQL is written only in the last phase.",
        ar: "تدخل المتطلّبات أولًا؛ ثم تحوّلها الاستراتيجية والتحليل إلى النموذج المفاهيمي للبيانات؛ ثم يحوّله التصميم إلى تصميم قاعدة البيانات؛ ثم يحوّل البناء هذا التصميم إلى قاعدة البيانات. الخطأ الشائع أن توضع النمذجة المفاهيمية بعد التصميم، كأنّ صورة العميل تخرج من العمل التقني. بل هي تأتي أولًا، ولا يُكتب SQL إلا في المرحلة الأخيرة."
      }
    },
    {
      id: "t2l3q02", type: "mcq", level: "easy",
      topics: ["t2-process-phases", "t2-development-process"],
      q: {
        en: "Matt's classmate created books(book_id, title) the day the request came. A week later nobody can say which member has War and Peace. In which phase should \"members borrow books\" have been caught?",
        ar: "أنشأ زميل مات الجدول books(book_id, title) في يوم وصول الطلب. وبعد أسبوع لا يستطيع أحد أن يقول أيّ عضو لديه War and Peace. في أيّ مرحلة كان يجب التقاط «الأعضاء يستعيرون الكتب»؟"
      },
      options: [
        { en: "Build, by writing a better SELECT", ar: "البناء، بكتابة SELECT أفضل" },
        { en: "Strategy and analysis, while the conceptual model was drawn", ar: "الاستراتيجية والتحليل، أثناء رسم النموذج المفاهيمي" },
        { en: "Design, when data types are chosen", ar: "التصميم، عند اختيار أنواع البيانات" },
        { en: "After the build, by adding columns as questions arrive", ar: "بعد البناء، بإضافة أعمدة كلما وصل سؤال" }
      ],
      answer: 1,
      hint: {
        en: "Which phase reads the business's information requirements first?",
        ar: "أيّ مرحلة تقرأ متطلّبات معلومات العمل أولًا؟"
      },
      explain: {
        en: "\"A member borrows a book\" is a relationship, and relationships are found during strategy and analysis, where the conceptual model is drawn. No SELECT can return a member the table has no place for, so the build phase cannot rescue it. Patching columns in later is exactly the habit the process exists to prevent: on paper the change costs an eraser.",
        ar: "«العضو يستعير كتابًا» علاقة، والعلاقات تُكتشف في مرحلة الاستراتيجية والتحليل، حيث يُرسم النموذج المفاهيمي. لا يستطيع أيّ SELECT أن يُرجع عضوًا لا مكان له في الجدول، فمرحلة البناء لا تنقذ الموقف. وترقيع الأعمدة لاحقًا هو بالضبط العادة التي وُجدت العملية لمنعها: على الورق يكلّف التغيير ممحاة فقط."
      }
    },
    {
      id: "t2l3q03", type: "output", level: "easy",
      topics: ["t2-development-process"],
      q: {
        en: "The classmate's table holds BK001 A Vision and BK002 War and Peace. The faculty member's question is put to it. What does the database answer?",
        ar: "يحمل جدول الزميل BK001 A Vision وBK002 War and Peace. يُطرح عليه سؤال عضو هيئة التدريس. بماذا تجيب قاعدة البيانات؟"
      },
      lang: "sql",
      code: "CREATE TABLE books (book_id VARCHAR(5) PRIMARY KEY, title VARCHAR(60));\n\nSELECT member_id, title\nFROM books;",
      options: [
        { en: "Two rows, with member_id empty in both", ar: "صفّان، وmember_id فارغ في كليهما" },
        { en: "No rows, because nobody has borrowed anything yet", ar: "لا صفوف، لأن أحدًا لم يستعر شيئًا بعد" },
        { en: "An error: Column does not exist: member_id", ar: "خطأ: Column does not exist: member_id" },
        { en: "Two rows showing the book_id in place of member_id", ar: "صفّان يظهر فيهما book_id مكان member_id" }
      ],
      answer: 2,
      hint: {
        en: "Can a query read a column the table was never given?",
        ar: "هل يستطيع استعلام أن يقرأ عمودًا لم يُعطَ للجدول أصلًا؟"
      },
      explain: {
        en: "The query fails with \"Column does not exist: member_id\": the table has no such column, so there is nothing to show, not even an empty one. Expecting empty values confuses a missing column with a column holding NULL. No query fixes this; the table itself must change, because the question belonged to the first box of the process.",
        ar: "يفشل الاستعلام برسالة «Column does not exist: member_id»: ليس في الجدول عمود بهذا الاسم، فلا شيء يُعرض، ولا حتى عمود فارغ. من يتوقّع قيمًا فارغة يخلط بين عمود غير موجود وعمود يحمل NULL. لا يصلح هذا أيّ استعلام؛ يجب أن يتغيّر الجدول نفسه، لأن السؤال كان مكانه الصندوق الأول من العملية."
      },
      solution: { out: "Column does not exist: member_id" }
    },

    /* ---------------------------------------------------- 2 · the conceptual model */
    {
      id: "t2l3q04", type: "tf", level: "easy",
      topics: ["t2-conceptual-model"],
      q: {
        en: "The faculty member says the library may lend DVDs next year. The conceptual model may already show a DVD entity, although no DVD is lent today.",
        ar: "يقول عضو هيئة التدريس إن المكتبة قد تُعير أقراص DVD في العام القادم. يجوز للنموذج المفاهيمي أن يُظهر منذ الآن كيانًا للأقراص، مع أنه لا يُعار أيّ قرص اليوم."
      },
      truth: true,
      hint: {
        en: "Recall the three things the slides say a conceptual model captures, and what its needs are based on.",
        ar: "تذكّر الأمور الثلاثة التي تقول الشرائح إن النموذج المفاهيمي يلتقطها، وعلى أيّ احتياجات يقوم."
      },
      explain: {
        en: "True. A conceptual model is based on current needs but may reflect future ones. It describes what is conceptually ideal for the business, not what is physically possible today, so a planned need can be drawn now, on paper, long before any table exists.",
        ar: "صحيح. يقوم النموذج المفاهيمي على الاحتياجات الحالية، لكنه قد يعكس احتياجات مستقبلية. فهو يصف ما هو مثاليّ من حيث المفهوم للعمل، لا ما هو ممكن فيزيائيًّا اليوم، ولذلك يمكن رسم حاجة مخطَّط لها الآن على الورق، قبل وجود أيّ جدول بوقت طويل."
      }
    },
    {
      id: "t2l3q05", type: "multi", level: "medium",
      topics: ["t2-conceptual-scope", "t2-conceptual-model"],
      q: {
        en: "Matt is drawing the library's conceptual model for the faculty member. Which of these belong on it? Choose every one.",
        ar: "يرسم مات النموذج المفاهيمي للمكتبة من أجل عضو هيئة التدريس. أيّ هذه ينتمي إليه؟ اختر كلّ ما ينطبق."
      },
      options: [
        { en: "The entity PUBLISHER", ar: "الكيان PUBLISHER" },
        { en: "# * Id on MEMBER", ar: "# * Id في MEMBER" },
        { en: "The relationship MEMBER borrow / borrowed by BOOK", ar: "العلاقة MEMBER borrow / borrowed by BOOK" },
        { en: "o State on MEMBER", ar: "o State في MEMBER" },
        { en: "The entity AUTHOR", ar: "الكيان AUTHOR" },
        { en: "Title VARCHAR2(50)", ar: "Title VARCHAR2(50)" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "A conceptual model identifies two kinds of thing, and does not specify two others.",
        ar: "النموذج المفاهيمي يحدّد نوعين من الأشياء، ولا يحدّد نوعين آخرين."
      },
      explain: {
        en: "A conceptual model identifies important entities (PUBLISHER, AUTHOR) and the relationships among them (borrow / borrowed by). It does not specify attributes such as o State, nor unique identifiers such as # * Id; both arrive in the logical model. Title VARCHAR2(50) is a product data type, two models further down, in the physical one. The UID is the tempting one, because telling members apart feels basic; it is still logical-model work.",
        ar: "النموذج المفاهيمي يحدّد الكيانات المهمّة (PUBLISHER وAUTHOR) والعلاقات بينها (borrow / borrowed by). ولا يحدّد الخصائص مثل o State، ولا المعرّفات الفريدة مثل # * Id؛ فكلاهما يصل في النموذج المنطقي. أمّا Title VARCHAR2(50) فنوع بيانات خاصّ بمنتج، وهو أبعد بنموذجين، في النموذج الفيزيائي. المعرّف الفريد هو الخيار المغري، لأن التمييز بين الأعضاء يبدو أمرًا أساسيًّا؛ لكنه يبقى من عمل النموذج المنطقي."
      }
    },
    {
      id: "t2l3q06", type: "compare", level: "medium",
      topics: ["t2-conceptual-model", "t2-conceptual-scope", "t2-model-audience"],
      q: {
        en: "Two pages Matt could take to the faculty member, who has one question: \"is this our library?\" Which statement is right?",
        ar: "صفحتان يمكن أن يحملهما مات إلى عضو هيئة التدريس، الذي لديه سؤال واحد: «هل هذه مكتبتنا؟» أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBERS   Id NUMBER, First_Name VARCHAR2, City VARCHAR2 ...\nBOOKS     Id VARCHAR2(15), Title VARCHAR2(50) ...\nAUTHORS   Id NUMBER, Name VARCHAR2(30)",
      codeB: "MEMBER -- borrow / borrowed by     -- BOOK\nBOOK   -- written by / writer of   -- AUTHOR\nBOOK   -- published by / publish   -- PUBLISHER",
      options: [
        { en: "A is better: it has more detail, so it answers more of the faculty member's questions", ar: "A أفضل: فيه تفاصيل أكثر، فيجيب عن أسئلة أكثر لعضو هيئة التدريس" },
        { en: "They say the same thing; B is only drawn more simply", ar: "يقولان الشيء نفسه؛ B مرسوم بشكل أبسط فقط" },
        { en: "B is better, but it is incomplete until each entity lists its attributes", ar: "B أفضل، لكنه ناقص حتى يذكر كل كيان خصائصه" },
        { en: "B is better: it shows who borrows and who writes, and it has PUBLISHER; A has no relationships at all", ar: "B أفضل: يُظهر من يستعير ومن يكتب، وفيه PUBLISHER؛ أمّا A فلا علاقات فيه أصلًا" }
      ],
      answer: 3,
      hint: {
        en: "Look for the thing the faculty member can actually check. Then count the entities on each page.",
        ar: "ابحث عن الشيء الذي يستطيع عضو هيئة التدريس فعلًا أن يتحقّق منه. ثم عُدّ الكيانات في كل صفحة."
      },
      explain: {
        en: "A answers questions nobody has asked yet, such as how long a title is, and skips the ones the client can check: who borrows what, who wrote what; the publisher is missing entirely. B is the conceptual model: four entities and three named relationships, in the business's words. Leaving attributes out is not a gap in B; a conceptual model does not specify them. More detail is not more useful to a reader checking the big picture.",
        ar: "A يجيب عن أسئلة لم يطرحها أحد بعد، مثل طول العنوان، ويتجاوز ما يستطيع العميل التحقّق منه: من يستعير ماذا، ومن كتب ماذا؛ والناشر غائب تمامًا. أمّا B فهو النموذج المفاهيمي: أربعة كيانات وثلاث علاقات مسمّاة، بلغة العمل. وغياب الخصائص ليس نقصًا في B؛ فالنموذج المفاهيمي لا يحدّدها. والتفاصيل الأكثر لا تفيد قارئًا يريد التحقّق من الصورة الكبيرة."
      }
    },
    {
      id: "t2l3q07", type: "mcq", level: "medium",
      topics: ["t2-conceptual-scope", "t2-logical-model"],
      q: {
        en: "The faculty member has approved the conceptual model. Which question is it still unable to answer, and leaves for the logical model?",
        ar: "وافق عضو هيئة التدريس على النموذج المفاهيمي. أيّ سؤال ما زال عاجزًا عن الإجابة عنه، ويتركه للنموذج المنطقي؟"
      },
      options: [
        { en: "Do members borrow books?", ar: "هل يستعير الأعضاء الكتب؟" },
        { en: "How do we tell the two Omar Salehs apart?", ar: "كيف نميّز بين عضوَي Omar Saleh؟" },
        { en: "How many characters may a title hold?", ar: "كم حرفًا يتّسع العنوان؟" },
        { en: "Is a book published by a publisher?", ar: "هل يُنشر الكتاب عند ناشر؟" }
      ],
      answer: 1,
      hint: {
        en: "Two of these are already on the conceptual diagram. Of the other two, only one is decided without choosing a product.",
        ar: "اثنان من هذه موجودان أصلًا في المخطّط المفاهيمي. ومن الاثنين الباقيين، واحد فقط يُحسم دون اختيار منتج."
      },
      explain: {
        en: "Telling two members apart is a unique identifier, and the logical model is where every UID is specified. Borrowing and publishing are relationships, already answered conceptually. The length of a title is tempting because it is also missing, but it is a data type with precision, which the logical model refuses too; it waits for the physical model.",
        ar: "التمييز بين عضوين هو معرّف فريد، والنموذج المنطقي هو حيث يُحدَّد كل معرّف فريد. أمّا الاستعارة والنشر فعلاقتان أُجيب عنهما في النموذج المفاهيمي. وطول العنوان خيار مغرٍ لأنه غائب أيضًا، لكنه نوع بيانات بدقّة محدّدة، وهذا يرفضه النموذج المنطقي كذلك؛ فهو ينتظر النموذج الفيزيائي."
      }
    },

    /* ---------------------------------------------------- 3 · the logical model and its marks */
    {
      id: "t2l3q08", type: "match", level: "easy",
      topics: ["t2-logical-marks", "t2-logical-model"],
      q: {
        en: "Match each mark in Matt's logical model to the promise it makes and what it becomes in the table.",
        ar: "صِل كل علامة في نموذج مات المنطقي بالوعد الذي تقطعه وبما تصبحه في الجدول."
      },
      leftHead: { en: "Mark", ar: "العلامة" },
      rightHead: { en: "Promise → in SQL", ar: "الوعد ← في SQL" },
      pairs: [
        { l: { en: "# on MEMBER's Id", ar: "# على Id في MEMBER" },
          r: { en: "part of the unique identifier → PRIMARY KEY", ar: "جزء من المعرّف الفريد ← PRIMARY KEY" } },
        { l: { en: "* on City", ar: "* على City" },
          r: { en: "must have a value → NOT NULL", ar: "يجب أن تكون لها قيمة ← NOT NULL" } },
        { l: { en: "o on State", ar: "o على State" },
          r: { en: "may be left empty → a nullable column", ar: "يجوز أن تبقى فارغة ← عمود يقبل NULL" } },
        { l: { en: "U on BOOK's Title", ar: "U على Title في BOOK" },
          r: { en: "no two instances share it → UNIQUE", ar: "لا تتشاركها حالتان ← UNIQUE" } }
      ],
      hint: {
        en: "Two marks are about whether a value must be there; two are about whether it may repeat.",
        ar: "علامتان تتعلّقان بوجوب وجود القيمة؛ واثنتان بجواز تكرارها."
      },
      explain: {
        en: "# marks the unique identifier and becomes the primary key; * is mandatory and becomes NOT NULL; o is optional and leaves the column nullable; U is unique and becomes UNIQUE. The pair most often swapped is # and U: both forbid repeats, but # names the identifier while U guards another column, like a book's title.",
        ar: "# تعلّم المعرّف الفريد وتصبح المفتاح الأساسي؛ و* إلزامية وتصبح NOT NULL؛ وo اختيارية فتترك العمود يقبل NULL؛ وU فريدة وتصبح UNIQUE. أكثر زوج يُخلط هو # وU: كلاهما يمنع التكرار، لكن # تسمّي المعرّف بينما تحرس U عمودًا آخر، مثل عنوان الكتاب."
      }
    },
    {
      id: "t2l3q09", type: "trace", level: "medium",
      topics: ["t2-logical-marks"],
      q: {
        en: "MEMBER was built from the logical model: * City, o State, * ZIP. Sara is already in the table. Each INSERT below is run on its own, in order. Who is in members at the end?",
        ar: "بُني MEMBER من النموذج المنطقي: * City وo State و* ZIP. Sara موجودة في الجدول مسبقًا. تُنفَّذ كل جملة INSERT أدناه وحدها، بالترتيب. من يكون في members في النهاية؟"
      },
      lang: "sql",
      code: "-- members (id, first_name, last_name, street_address, city, state, zip)\nINSERT INTO members VALUES (2, 'Omar', 'Saleh', 'Jalal St', NULL, NULL, '00970');\nINSERT INTO members VALUES (2, 'Omar', 'Saleh', 'Jalal St', 'Khan Younis', NULL, '00970');\nINSERT INTO members VALUES (3, 'Huda', 'Nasser', 'Salah St', 'Rafah', 'South', NULL);",
      options: [
        { en: "Sara only: Omar has no state the second time either", ar: "Sara فقط: فـ Omar بلا ولاية في المرّة الثانية أيضًا" },
        { en: "Sara and Omar", ar: "Sara وOmar" },
        { en: "Sara, Omar and Huda", ar: "Sara وOmar وHuda" },
        { en: "Sara and Huda", ar: "Sara وHuda" }
      ],
      answer: 1,
      hint: {
        en: "For each line, find the NULLs, then look up the mark on that column.",
        ar: "في كل سطر، جِد قيم NULL، ثم انظر إلى العلامة على ذلك العمود."
      },
      explain: {
        en: "Sara and Omar. The first INSERT is refused: \"Wrong NULL value in NOT NULL column city\", because City is marked *. The second gives a city and leaves State NULL, which o allows, so Omar is saved. Huda is refused for the missing ZIP, marked *. Blaming State reads o as if it were *.",
        ar: "Sara وOmar. تُرفض جملة INSERT الأولى: «Wrong NULL value in NOT NULL column city»، لأن City معلَّمة بـ *. والثانية تعطي مدينة وتترك State بقيمة NULL، وهذا تسمح به o، فيُحفظ Omar. وتُرفض Huda لغياب ZIP المعلَّم بـ *. ومن يلوم State يقرأ o كأنها *."
      },
      solution: { out: "id | first_name | city\n1  | Sara       | Gaza\n2  | Omar       | Khan Younis" }
    },
    {
      id: "t2l3q10", type: "tf", level: "medium",
      topics: ["t2-erm", "t2-erd"],
      q: {
        en: "\"Entity relationship model\" and \"entity relationship diagram\" are two names for the same thing.",
        ar: "«نموذج الكيانات والعلاقات» (ERM) و«مخطّط الكيانات والعلاقات» (ERD) اسمان لشيء واحد."
      },
      truth: false,
      hint: {
        en: "One is a list with background; the other is a drawing.",
        ar: "أحدهما قائمة مع خلفية؛ والآخر رسم."
      },
      explain: {
        en: "False. The ERM is the logical model itself: a list of all entities, attributes and relationships of importance, with background such as descriptions, data types and constraints. The ERD is a drawing used to represent it. The slides say the logical model \"is called an ERM\" and \"is illustrated in an ERD\": the model does not need the diagram, but the diagram makes its decisions visible at a glance.",
        ar: "خطأ. نموذج الكيانات والعلاقات (ERM) هو النموذج المنطقي نفسه: قائمة بكل الكيانات والخصائص والعلاقات المهمّة، مع خلفية مثل الأوصاف وأنواع البيانات والقيود. أمّا مخطّط الكيانات والعلاقات (ERD) فرسم يُستخدم لتمثيله. تقول الشرائح إن النموذج المنطقي «يُسمّى ERM» و«يُوضَّح في ERD»: النموذج لا يحتاج إلى المخطّط، لكن المخطّط يجعل قراراته مرئية بنظرة واحدة."
      }
    },
    {
      id: "t2l3q11", type: "mcq", level: "easy",
      topics: ["t2-logical-model"],
      q: {
        en: "The librarian asks: \"Must a member give a state? Can a book have no title?\" What does the logical model add that lets Matt answer?",
        ar: "يسأل أمين المكتبة: «هل يجب أن يذكر العضو ولايته؟ هل يمكن أن يكون كتاب بلا عنوان؟» ما الذي يضيفه النموذج المنطقي فيتيح لمات أن يجيب؟"
      },
      options: [
        { en: "Every attribute and unique identifier, and which ones are mandatory", ar: "كل الخصائص والمعرّفات الفريدة، وأيّها إلزامي" },
        { en: "The entities and the relationships among them", ar: "الكيانات والعلاقات بينها" },
        { en: "Data types and precision, such as VARCHAR2(50)", ar: "أنواع البيانات ودقّتها، مثل VARCHAR2(50)" },
        { en: "Named constraints, such as BOOKS_PK", ar: "قيود مسمّاة، مثل BOOKS_PK" }
      ],
      answer: 0,
      hint: {
        en: "Both questions are about whether a value must be present.",
        ar: "السؤالان كلاهما عن وجوب وجود قيمة."
      },
      explain: {
        en: "The logical model specifies all attributes and UIDs for each entity and decides attribute optionality: o State says a state may be left out, * Title says a title must be given. Entities and relationships were already in the conceptual model. Types, precision and constraint names come one step later, in the physical model.",
        ar: "النموذج المنطقي يحدّد كل الخصائص والمعرّفات الفريدة لكل كيان، ويقرّر إلزامية الخصائص: o State تقول إن الولاية يجوز أن تُترك، و* Title تقول إن العنوان يجب أن يُعطى. أمّا الكيانات والعلاقات فكانت موجودة في النموذج المفاهيمي. والأنواع والدقّة وأسماء القيود تأتي خطوة لاحقة، في النموذج الفيزيائي."
      }
    },
    {
      id: "t2l3q12", type: "error", level: "hard",
      topics: ["t2-logical-model", "t2-implementation-free", "t2-logical-marks"],
      q: {
        en: "A classmate's page is titled \"Library — logical model\". Which lines do not belong in a logical model? Choose every one.",
        ar: "صفحة لزميل عنوانها «المكتبة — النموذج المنطقي». أيّ الأسطر لا تنتمي إلى نموذج منطقي؟ اختر كلّ ما ينطبق."
      },
      lang: "text",
      code: "BOOK      # * Id\nBOOK      U * Title\nAUTHOR    * Name   VARCHAR2(30)\nMEMBER    o State\nBOOK      -- published by / publish --  PUBLISHER\nMEMBERS   index on Last_Name",
      answer: [3, 6],
      hint: {
        en: "Ask of each line: would it read differently in another database product?",
        ar: "اسأل عن كل سطر: هل يُقرأ بشكل مختلف في منتج قواعد بيانات آخر؟"
      },
      explain: {
        en: "Line 3 gives a product data type with precision, VARCHAR2(30), and line 6 asks for an index; the slides list both as physical-model work. Everything else is logical: a UID, a unique mandatory attribute, an optional attribute, and a named relationship, which the logical model keeps from the conceptual one. Line 5 is the tempting one, but the logical model includes all relationships; it does not drop them.",
        ar: "السطر 3 يعطي نوع بيانات خاصًّا بمنتج مع دقّته، VARCHAR2(30)، والسطر 6 يطلب فهرسًا؛ والشرائح تعدّ كليهما من عمل النموذج الفيزيائي. أمّا الباقي فمنطقي: معرّف فريد، وخاصية إلزامية فريدة، وخاصية اختيارية، وعلاقة مسمّاة يحتفظ بها النموذج المنطقي من المفاهيمي. السطر 5 هو المغري، لكن النموذج المنطقي يضمّ كل العلاقات؛ ولا يُسقطها."
      },
      solution: {
        en: "Lines 3 and 6: a data type with precision and an index are physical.",
        ar: "السطران 3 و6: نوع البيانات بدقّته والفهرس من النموذج الفيزيائي."
      }
    },

    /* ---------------------------------------------------- 4 · the physical model */
    {
      id: "t2l3q13", type: "order", level: "medium",
      topics: ["t2-physical-steps", "t2-physical-model"],
      q: {
        en: "The faculty member wants \"the specifications for all tables and columns\". Put the slides' steps for creating the physical model in order.",
        ar: "يريد عضو هيئة التدريس «مواصفات كل الجداول والأعمدة». رتّب خطوات إنشاء النموذج الفيزيائي كما في الشرائح."
      },
      items: [
        { en: "Model entities as tables: BOOK becomes BOOKS", ar: "نمذجة الكيانات جداولَ: يصبح BOOK الجدول BOOKS" },
        { en: "Model relationships as foreign keys: \"published by\" becomes BOOKS.PUBLISHERS_Id", ar: "نمذجة العلاقات مفاتيحَ أجنبية: تصبح «published by» العمود BOOKS.PUBLISHERS_Id" },
        { en: "Model attributes as columns: U * Title becomes Title VARCHAR2(50)", ar: "نمذجة الخصائص أعمدةً: تصبح U * Title العمود Title VARCHAR2(50)" },
        { en: "Modify the model for physical constraints and requirements", ar: "تعديل النموذج وفق القيود والمتطلّبات الفيزيائية" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "A foreign key needs both tables to exist; the adjustment for the product comes last.",
        ar: "المفتاح الأجنبي يحتاج إلى وجود الجدولين؛ والتعديل الخاصّ بالمنتج يأتي أخيرًا."
      },
      explain: {
        en: "Entities first, because a table must exist before anything can point at it; then relationships as foreign keys between those tables; then attributes as columns; and last, adjust the whole model for the physical constraints and requirements of the product. Starting with columns feels natural, since it is what CREATE TABLE lists, but the slides build the frame of tables and links first.",
        ar: "الكيانات أولًا، لأن الجدول يجب أن يوجد قبل أن يشير إليه شيء؛ ثم العلاقات مفاتيحَ أجنبية بين هذه الجداول؛ ثم الخصائص أعمدةً؛ وأخيرًا تعديل النموذج كله وفق القيود والمتطلّبات الفيزيائية للمنتج. البدء بالأعمدة يبدو طبيعيًّا لأنها ما تسرده CREATE TABLE، لكن الشرائح تبني هيكل الجداول والروابط أولًا."
      }
    },
    {
      id: "t2l3q14", type: "fill", level: "medium",
      topics: ["t2-physical-model", "t2-logical-marks", "t2-physical-steps"],
      q: {
        en: "The logical BOOK is # * Id and U * Title, and BOOK is published by PUBLISHER. Fill the three blanks so the physical BOOKS keeps every one of those promises.",
        ar: "BOOK المنطقي هو # * Id وU * Title، وBOOK يُنشر عند PUBLISHER. املأ الفراغات الثلاثة كي يحفظ BOOKS الفيزيائي كل هذه الوعود."
      },
      lang: "sql",
      code: "CREATE TABLE books (\n  id            VARCHAR2(15) ____1____,\n  title         VARCHAR2(50) NOT NULL ____2____,\n  publishers_id NUMBER       ____3____ publishers(id)\n);",
      blanks: [
        { accept: ["PRIMARY KEY", "primary key", "Primary Key"], label: { en: "1", ar: "1" } },
        { accept: ["UNIQUE", "unique", "Unique"], label: { en: "2", ar: "2" } },
        { accept: ["REFERENCES", "references", "References"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "# becomes one constraint, U another, and a relationship becomes a foreign key.",
        ar: "# تصبح قيدًا، وU قيدًا آخر، والعلاقة تصبح مفتاحًا أجنبيًّا."
      },
      explain: {
        en: "# * Id becomes PRIMARY KEY; U * Title becomes NOT NULL UNIQUE, so a second \"War and Peace\" is refused; \"published by\" becomes a foreign key, REFERENCES publishers(id). Writing UNIQUE in blank 1 would stop repeats but would not make id the identifier. Note that blank 3 has no NOT NULL beside it: PUBLISHERS_Id carries F but no *, so a book may be stored before its publisher is known.",
        ar: "تصبح # * Id قيد PRIMARY KEY؛ وتصبح U * Title القيدين NOT NULL UNIQUE، فيُرفض «War and Peace» ثانٍ؛ وتصبح «published by» مفتاحًا أجنبيًّا: REFERENCES publishers(id). كتابة UNIQUE في الفراغ 1 تمنع التكرار لكنها لا تجعل id هو المعرّف. ولاحظ أن الفراغ 3 ليس بجانبه NOT NULL: يحمل PUBLISHERS_Id العلامة F دون *، فيجوز حفظ كتاب قبل أن يُعرف ناشره."
      },
      solution: { en: "1 = PRIMARY KEY, 2 = UNIQUE, 3 = REFERENCES.", ar: "1 = PRIMARY KEY، 2 = UNIQUE، 3 = REFERENCES." }
    },
    {
      id: "t2l3q15", type: "output", level: "medium",
      topics: ["t2-physical-model", "t2-physical-steps"],
      q: {
        en: "Matt's physical PUBLISHERS holds 1 and 2; BOOKS holds BK001–BK004, each with publisher 1 or 2. Each INSERT is run on its own, in order. What number does the final query return?",
        ar: "يحمل PUBLISHERS الفيزيائي لدى مات الناشرين 1 و2؛ ويحمل BOOKS الكتب BK001–BK004، لكلّ منها الناشر 1 أو 2. تُنفَّذ كل جملة INSERT وحدها، بالترتيب. ما العدد الذي يُرجعه الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO books VALUES ('BK005', 'Emma', 7);\nINSERT INTO books VALUES ('BK005', 'Emma', NULL);\nINSERT INTO books VALUES ('BK006', 'Emma', 1);\n\nSELECT COUNT(*) FROM books;",
      blanks: [{ accept: ["5", "five", "Five"], label: { en: "COUNT(*)", ar: "COUNT(*)" } }],
      hint: {
        en: "Check each INSERT against the foreign key, then against the U on Title.",
        ar: "افحص كل جملة INSERT مقابل المفتاح الأجنبي، ثم مقابل U على Title."
      },
      explain: {
        en: "5. The first INSERT is refused: \"Foreign key \"7\" not found in table \"publishers\"\". The second is saved, because publishers_id has no NOT NULL and a NULL points at nothing to check. The third is refused by the unique key on title: \"already exists in unique index\". Answering 4 forgets that a foreign key without * accepts NULL; answering 6 forgets that U was kept from the logical model.",
        ar: "5. تُرفض الجملة الأولى: «Foreign key \"7\" not found in table \"publishers\"». وتُحفظ الثانية، لأن publishers_id ليس عليه NOT NULL، وقيمة NULL لا تشير إلى شيء يُفحص. وتُرفض الثالثة بسبب المفتاح الفريد على title: «already exists in unique index». من يجيب 4 ينسى أن المفتاح الأجنبي بلا * يقبل NULL؛ ومن يجيب 6 ينسى أن U حُفظت من النموذج المنطقي."
      },
      solution: { out: "5" }
    },
    {
      id: "t2l3q16", type: "contrast", level: "medium",
      topics: ["t2-model-comparison", "t2-conceptual-model", "t2-physical-model"],
      q: {
        en: "Sort each statement: is it true of the conceptual model, or of the physical model?",
        ar: "صنّف كل عبارة: هل تصدق على النموذج المفاهيمي، أم على النموذج الفيزيائي؟"
      },
      concepts: [
        { en: "Conceptual model", ar: "النموذج المفاهيمي" },
        { en: "Physical model", ar: "النموذج الفيزيائي" }
      ],
      rows: [
        { s: { en: "The client's dream, in the slides' house comparison", ar: "حلم العميل، في تشبيه البيت في الشرائح" }, a: 0 },
        { s: { en: "Written for one specific database product", ar: "مكتوب لمنتج قواعد بيانات واحد بعينه" }, a: 1 },
        { s: { en: "Identifies views, indexes and other database objects", ar: "يحدّد العروض والفهارس وكائنات قاعدة البيانات الأخرى" }, a: 1 },
        { s: { en: "May show a need the business only plans for next year", ar: "قد يُظهر حاجة لا يخطّط لها العمل إلا للعام القادم" }, a: 0 },
        { s: { en: "Names constraints such as BOOKS_PUBLISHERS_FK", ar: "يسمّي قيودًا مثل BOOKS_PUBLISHERS_FK" }, a: 1 },
        { s: { en: "Shows entities and relationships, but no attributes", ar: "يُظهر الكيانات والعلاقات، دون أيّ خصائص" }, a: 0 },
        { s: { en: "Shows every table with its columns, primary keys and foreign keys", ar: "يُظهر كل جدول بأعمدته ومفاتيحه الأساسية والأجنبية" }, a: 1 }
      ],
      hint: {
        en: "One talks to the client about what is ideal; the other tells one product exactly what to build.",
        ar: "أحدهما يخاطب العميل بما هو مثاليّ؛ والآخر يقول لمنتج واحد بالضبط ما يُبنى."
      },
      explain: {
        en: "The conceptual model is the client's dream: entities and relationships only, based on current needs and open to future ones. The physical model is the plan that makes it real for one RDBMS: tables, columns, keys, types, named constraints, views and indexes. The rule to carry away: the further down the process, the more detail and the narrower the audience.",
        ar: "النموذج المفاهيمي هو حلم العميل: كيانات وعلاقات فقط، يقوم على الاحتياجات الحالية ويتّسع للمستقبلية. أمّا النموذج الفيزيائي فهو الخطّة التي تجعله حقيقة على RDBMS واحد: جداول وأعمدة ومفاتيح وأنواع وقيود مسمّاة وعروض وفهارس. القاعدة التي تحملها معك: كلما نزلت في العملية زادت التفاصيل وضاق جمهور القرّاء."
      }
    },

    /* ---------------------------------------------------- 5 · one library, drawn three times */
    {
      id: "t2l3q17", type: "mcq", level: "easy",
      topics: ["t2-model-audience", "t2-data-modeling"],
      q: {
        en: "The slides compare data modeling to a house: the client describes a dream, the builder needs exact measurements. The DBA who will create the tables asks Matt for \"the design\". Which model should he hand over?",
        ar: "تشبّه الشرائح نمذجة البيانات (data modeling) ببناء بيت: العميل يصف حلمًا، والبنّاء يحتاج إلى قياسات دقيقة. يطلب مدير قاعدة البيانات (DBA) الذي سينشئ الجداول «التصميم» من مات. أيّ نموذج يسلّمه؟"
      },
      options: [
        { en: "The conceptual model: it is the one everybody can read", ar: "النموذج المفاهيمي: فهو الذي يقرؤه الجميع" },
        { en: "The logical model: it has every attribute", ar: "النموذج المنطقي: ففيه كل الخصائص" },
        { en: "The faculty member's original request", ar: "طلب عضو هيئة التدريس الأصلي" },
        { en: "The physical model: tables, types and named constraints for the product", ar: "النموذج الفيزيائي: الجداول والأنواع والقيود المسمّاة للمنتج" }
      ],
      answer: 3,
      hint: {
        en: "Who in the house comparison needs exact measurements?",
        ar: "من في تشبيه البيت يحتاج إلى قياسات دقيقة؟"
      },
      explain: {
        en: "The DBA is the builder: they need types, precision, foreign key columns and constraint names, and only the physical model has them. The logical model is tempting because it has every attribute, but it refuses to say how long a title is or whether Id is text or a number. The conceptual model is for the client, who checks the big picture.",
        ar: "مدير قاعدة البيانات هو البنّاء: يحتاج إلى الأنواع والدقّة وأعمدة المفاتيح الأجنبية وأسماء القيود، ولا يملكها إلا النموذج الفيزيائي. النموذج المنطقي مغرٍ لأن فيه كل الخصائص، لكنه يرفض أن يقول كم يبلغ طول العنوان أو هل Id نصّ أم رقم. أمّا النموذج المفاهيمي فللعميل، الذي يتحقّق من الصورة الكبيرة."
      }
    },
    {
      id: "t2l3q18", type: "compare", level: "hard",
      topics: ["t2-model-comparison", "t2-physical-steps", "t2-logical-model"],
      q: {
        en: "Versions 2 and 3 of BOOK from the lesson. Which statement about them is correct?",
        ar: "النسختان 2 و3 من BOOK في الدرس. أيّ العبارات عنهما صحيحة؟"
      },
      lang: "text",
      codeA: "BOOK\n  # * Id\n  U * Title",
      codeB: "BOOKS\n  P * Id             VARCHAR2(15)\n  U * Title          VARCHAR2(50)\n  F   PUBLISHERS_Id  NUMBER\n  BOOKS_PK (Id)   BOOKS_Title_UK (Title)   BOOKS_PUBLISHERS_FK (PUBLISHERS_Id)",
      options: [
        { en: "A has no link to PUBLISHER, so the logical model forgot \"published by\"; B adds it", ar: "A ليس فيه رابط إلى PUBLISHER، أي أن النموذج المنطقي نسي «published by»؛ وB يضيفه" },
        { en: "B adds a unique identifier that A did not have", ar: "B يضيف معرّفًا فريدًا لم يكن في A" },
        { en: "B adds types, the column that carries \"published by\", and named constraints, at the price of being written for Oracle", ar: "B يضيف الأنواع، والعمود الذي يحمل «published by»، وقيودًا مسمّاة، وثمن ذلك أنه مكتوب لـ Oracle" },
        { en: "B is the better version to show the faculty member, because nothing in it is left to decide", ar: "B هو النسخة الأفضل لعرضها على عضو هيئة التدريس، لأن لا شيء فيه متروك للحسم" }
      ],
      answer: 2,
      hint: {
        en: "In the logical model a relationship is a line between boxes, not a line inside one.",
        ar: "في النموذج المنطقي العلاقة خطّ بين صندوقين، لا سطر داخل أحدهما."
      },
      explain: {
        en: "Version 3 answers what version 2 refused: VARCHAR2(15), VARCHAR2(50), the foreign key column PUBLISHERS_Id, and BOOKS_PK, BOOKS_Title_UK, BOOKS_PUBLISHERS_FK. The relationship was never missing from A: it is a line to PUBLISHER on the diagram, and step 2 turns it into a column. The UID was already there as #; P only names it as the primary key. Finished is not the same as right for the reader: the faculty member cannot judge types.",
        ar: "النسخة 3 تجيب عمّا رفضته النسخة 2: VARCHAR2(15) وVARCHAR2(50)، وعمود المفتاح الأجنبي PUBLISHERS_Id، والقيود BOOKS_PK وBOOKS_Title_UK وBOOKS_PUBLISHERS_FK. والعلاقة لم تكن غائبة عن A: فهي خطّ إلى PUBLISHER في المخطّط، والخطوة 2 تحوّلها إلى عمود. والمعرّف الفريد كان موجودًا بالعلامة #؛ وP تسمّيه مفتاحًا أساسيًّا فقط. والاكتمال لا يعني أنه المناسب للقارئ: فعضو هيئة التدريس لا يستطيع الحكم على الأنواع."
      }
    },
    {
      id: "t2l3q19", type: "mcq", level: "hard",
      topics: ["t2-model-comparison", "t2-physical-steps"],
      q: {
        en: "The conceptual model says MEMBER borrow / borrowed by BOOK. In Matt's physical model, what carries that sentence?",
        ar: "يقول النموذج المفاهيمي MEMBER borrow / borrowed by BOOK. في نموذج مات الفيزيائي، ما الذي يحمل هذه الجملة؟"
      },
      options: [
        { en: "A members_id column added to BOOKS, as \"published by\" became PUBLISHERS_Id", ar: "عمود members_id يُضاف إلى BOOKS، كما أصبحت «published by» العمود PUBLISHERS_Id" },
        { en: "The table BOOK_TRANSACTIONS, with a foreign key to MEMBERS and one to BOOKS", ar: "الجدول BOOK_TRANSACTIONS، بمفتاح أجنبي إلى MEMBERS وآخر إلى BOOKS" },
        { en: "Nothing: a physical model holds only tables, and relationships stay on the diagram", ar: "لا شيء: النموذج الفيزيائي يحمل الجداول فقط، والعلاقات تبقى على المخطّط" },
        { en: "A borrowed column in MEMBERS listing the titles each member holds", ar: "عمود borrowed في MEMBERS يسرد العناوين التي يحملها كل عضو" }
      ],
      answer: 1,
      hint: {
        en: "A member borrows many books over time, and a book is borrowed by many members. Where did the logical model put each loan?",
        ar: "العضو يستعير كتبًا كثيرة مع الوقت، والكتاب يستعيره أعضاء كثيرون. أين وضع النموذج المنطقي كل إعارة؟"
      },
      explain: {
        en: "The logical model worked the detail out into BOOK TRANSACTION, and the physical model turned it into BOOK_TRANSACTIONS with MEMBERS_Id and BOOKS_Id as foreign keys; a join through it answers \"who borrowed what\". Copying the \"published by\" pattern is tempting, but one column in BOOKS holds one member per book, forever. A list of titles in one column breaks the single-value rule of lesson 2. A relationship never disappears in the physical model.",
        ar: "فصّل النموذج المنطقي الأمر إلى BOOK TRANSACTION، وحوّله النموذج الفيزيائي إلى BOOK_TRANSACTIONS بمفتاحين أجنبيين MEMBERS_Id وBOOKS_Id؛ والربط (join) عبره يجيب عن «من استعار ماذا». تقليد نمط «published by» مغرٍ، لكن عمودًا واحدًا في BOOKS يحمل عضوًا واحدًا لكل كتاب إلى الأبد. وقائمة عناوين في عمود واحد تكسر قاعدة القيمة الواحدة من الدرس 2. والعلاقة لا تختفي أبدًا في النموذج الفيزيائي."
      }
    },
    {
      id: "t2l3q20", type: "output", level: "medium",
      topics: ["t2-model-comparison", "t2-development-process"],
      q: {
        en: "The built library from the lesson: Sara Hamdan and Omar Saleh in members, the four books, and three loans in book_transactions. The classmate's question from section 1 is asked again. What first_name comes back?",
        ar: "المكتبة المبنيّة من الدرس: Sara Hamdan وOmar Saleh في members، والكتب الأربعة، وثلاث إعارات في book_transactions. يُطرح سؤال الزميل من القسم 1 من جديد. ما قيمة first_name التي تعود؟"
      },
      lang: "sql",
      code: "SELECT m.first_name, m.last_name\nFROM book_transactions t\nJOIN members m ON t.members_id = m.id\nJOIN books b ON t.books_id = b.id\nWHERE b.title = 'War and Peace';",
      blanks: [{ accept: ["Omar", "omar", "OMAR"], label: { en: "first_name", ar: "first_name" } }],
      hint: {
        en: "Follow the loan row for BK002 to its members_id, then to that member.",
        ar: "تتبّع صفّ الإعارة الخاصّ بـ BK002 حتى members_id، ثم حتى ذلك العضو."
      },
      explain: {
        en: "Omar (Saleh). The loan of BK002 on 2026-03-05 carries members_id 2, and member 2 is Omar. Sara is tempting because she has two of the three loans, but hers are A Vision and Citizen of the World. The same question that failed on books(book_id, title) is answered here, because the model was right before the table existed.",
        ar: "Omar (Saleh). إعارة BK002 بتاريخ 2026-03-05 تحمل members_id بقيمة 2، والعضو 2 هو Omar. Sara خيار مغرٍ لأن لها إعارتين من ثلاث، لكنهما A Vision وCitizen of the World. والسؤال نفسه الذي فشل على books(book_id, title) يُجاب هنا، لأن النموذج كان صحيحًا قبل أن يوجد الجدول."
      },
      solution: { out: "first_name | last_name\nOmar       | Saleh" }
    },

    /* ---------------------------------------------------- 6 · implementation-free */
    {
      id: "t2l3q21", type: "tf", level: "easy",
      topics: ["t2-implementation-free", "t2-physical-per-rdbms"],
      q: {
        en: "Two years later the department moves the library to a different RDBMS. Matt must redraw his conceptual and logical models as well as the physical one.",
        ar: "بعد عامين ينقل القسم المكتبة إلى RDBMS آخر. على مات أن يعيد رسم نموذجيه المفاهيمي والمنطقي إضافة إلى الفيزيائي."
      },
      truth: false,
      hint: {
        en: "Which of the three models says anything a different product would read differently?",
        ar: "أيّ النماذج الثلاثة يقول شيئًا يقرؤه منتج آخر بشكل مختلف؟"
      },
      explain: {
        en: "False. The conceptual and logical models are implementation-free: they represent the library's data requirements regardless of the database used. Each RDBMS gets its own physical model, so the move means writing one new physical model. The hard part, agreed with the client, is untouched.",
        ar: "خطأ. النموذجان المفاهيمي والمنطقي مستقلّان عن التنفيذ: يمثّلان متطلّبات بيانات المكتبة بغضّ النظر عن قاعدة البيانات المستخدمة. ولكل RDBMS نموذجه الفيزيائي، فالانتقال يعني كتابة نموذج فيزيائي جديد واحد. أمّا الجزء الصعب، المتّفق عليه مع العميل، فلا يُمسّ."
      }
    },
    {
      id: "t2l3q22", type: "compare", level: "hard",
      topics: ["t2-implementation-free", "t2-physical-per-rdbms", "t2-logical-model"],
      q: {
        en: "Two ways Matt could keep his BOOK design. The department is about to move to another RDBMS. Which statement is right?",
        ar: "طريقتان يمكن أن يحفظ بهما مات تصميم BOOK. القسم على وشك الانتقال إلى RDBMS آخر. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "BOOK                       (logical model)\n  # * Id      VARCHAR2(15)\n  U * Title   VARCHAR2(50)",
      codeB: "BOOK                       (logical model, any product)\n  # * Id\n  U * Title\nBOOKS (physical, Oracle)        BOOKS (physical, another RDBMS)\n  Id    VARCHAR2(15)              id    VARCHAR(15)\n  Title VARCHAR2(50)              title VARCHAR(50)",
      options: [
        { en: "A is better: one model with the types inside is less to keep up to date", ar: "A أفضل: نموذج واحد فيه الأنواع أقلّ عبئًا في التحديث" },
        { en: "B is better: the move adds one physical model and leaves the logical model as the client approved it", ar: "B أفضل: الانتقال يضيف نموذجًا فيزيائيًّا واحدًا ويترك النموذج المنطقي كما وافق عليه العميل" },
        { en: "B is wrong: one logical model may have only one physical model", ar: "B خطأ: النموذج المنطقي الواحد لا يجوز أن يكون له إلا نموذج فيزيائي واحد" },
        { en: "They are equal, because VARCHAR and VARCHAR2 mean the same", ar: "هما متساويان، لأن VARCHAR وVARCHAR2 بمعنى واحد" }
      ],
      answer: 1,
      hint: {
        en: "Count how many models each version must redraw after the move.",
        ar: "عُدّ كم نموذجًا يجب أن تعيد كل نسخة رسمه بعد الانتقال."
      },
      explain: {
        en: "A ties the logical model to Oracle, so after the move it is wrong too and two models must be redrawn; the faculty member also ends up reviewing types they cannot judge. B keeps the product's spelling in the physical models only; the slides say each relational model can have one or more physical models, one per RDBMS. Whether the types happen to match is beside the point: the logical model should not name them.",
        ar: "A يربط النموذج المنطقي بـ Oracle، فيصبح خاطئًا هو أيضًا بعد الانتقال ويجب إعادة رسم نموذجين؛ كما ينتهي عضو هيئة التدريس إلى مراجعة أنواع لا يستطيع الحكم عليها. أمّا B فيُبقي تهجئة المنتج في النماذج الفيزيائية وحدها؛ والشرائح تقول إن لكل نموذج علائقي نموذجًا فيزيائيًّا واحدًا أو أكثر، واحدًا لكل RDBMS. وتطابق الأنواع مصادفةً ليس هو المسألة: النموذج المنطقي لا ينبغي أن يسمّيها أصلًا."
      }
    },
    {
      id: "t2l3q23", type: "multi", level: "hard",
      topics: ["t2-implementation-free", "t2-erd"],
      q: {
        en: "The library has not chosen any database product yet. Which of these can Matt already write down? Choose every one.",
        ar: "لم تختر المكتبة أيّ منتج قواعد بيانات بعد. أيّ هذه يستطيع مات أن يدوّنه منذ الآن؟ اختر كلّ ما ينطبق."
      },
      options: [
        { en: "Each book has exactly one title, and no two books share it", ar: "لكل كتاب عنوان واحد بالضبط، ولا يتشارك كتابان العنوان نفسه" },
        { en: "Title is VARCHAR2(50)", ar: "Title من النوع VARCHAR2(50)" },
        { en: "A member may be recorded without a state", ar: "يجوز تسجيل عضو دون ولاية" },
        { en: "Create an index on MEMBERS.Last_Name", ar: "أنشئ فهرسًا على MEMBERS.Last_Name" },
        { en: "The whole ERD, with # * Id on every entity", ar: "مخطّط الكيانات والعلاقات (ERD) كاملًا، مع # * Id على كل كيان" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "An ERD represents the data requirements regardless of the type of database used, and even in the absence of one.",
        ar: "مخطّط الكيانات والعلاقات يمثّل متطلّبات البيانات بغضّ النظر عن نوع قاعدة البيانات المستخدمة، بل حتى في غياب أيّ قاعدة."
      },
      explain: {
        en: "U * Title, o State and the whole ERD with its UIDs are implementation-free: true in any product, and needing none. VARCHAR2 is Oracle's spelling, and indexes are listed among the physical model's objects, so both wait for the product. The ERD option is the one students skip, thinking a diagram with identifiers is already \"technical\"; it is the logical model, and the logical model is implementation-free.",
        ar: "U * Title وo State والمخطّط كاملًا بمعرّفاته الفريدة كلّها مستقلّة عن التنفيذ: صحيحة في أيّ منتج، ولا تحتاج إلى أيّ منتج. أمّا VARCHAR2 فتهجئة Oracle، والفهارس مذكورة بين كائنات النموذج الفيزيائي، فكلاهما ينتظر اختيار المنتج. خيار المخطّط هو الذي يتجاوزه الطلاب، ظنًّا أن مخطّطًا فيه معرّفات قد صار «تقنيًّا»؛ لكنه النموذج المنطقي، والنموذج المنطقي مستقلّ عن التنفيذ."
      }
    },
    {
      id: "t2l3q24", type: "write", level: "hard",
      topics: ["t2-physical-per-rdbms", "t2-physical-steps", "t2-logical-marks"],
      q: {
        en: "Write the SQL track's physical model of this logical model, using VARCHAR rather than Oracle's VARCHAR2. PUBLISHER: # * Id, * Name. BOOK: # * Id, U * Title, and each BOOK may be published by a PUBLISHER. Write CREATE TABLE publishers (id, name) and CREATE TABLE books (id, title, publishers_id), each ending in a semicolon.",
        ar: "اكتب النموذج الفيزيائي لمسار SQL لهذا النموذج المنطقي، مستخدمًا VARCHAR بدلًا من VARCHAR2 الخاصّ بـ Oracle. PUBLISHER: # * Id و* Name. وBOOK: # * Id وU * Title، ويجوز أن يُنشر كل BOOK عند PUBLISHER. اكتب CREATE TABLE publishers (id, name) وCREATE TABLE books (id, title, publishers_id)، وأنهِ كلًّا منهما بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 12,
      starter: "CREATE TABLE publishers (\n\n);\n\nCREATE TABLE books (\n\n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+publishers\\s*\\([^;]*(\\bid\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "id is the primary key of publishers", ar: "id هو المفتاح الأساسي لـ publishers" } },
        { re: "CREATE\\s+TABLE\\s+publishers\\s*\\([^;]*name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "* Name became NOT NULL", ar: "* Name أصبحت NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+books\\s*\\([^;]*(\\bid\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "id is the primary key of books", ar: "id هو المفتاح الأساسي لـ books" } },
        { re: "CREATE\\s+TABLE\\s+books\\s*\\([^;]*title\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+(NOT\\s+NULL\\s+UNIQUE|UNIQUE\\s+NOT\\s+NULL)", flags: "i",
          label: { en: "U * Title became NOT NULL UNIQUE", ar: "U * Title أصبحت NOT NULL UNIQUE" } },
        { re: "CREATE\\s+TABLE\\s+books\\s*\\([^;]*publishers_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+REFERENCES\\s+publishers\\s*\\(\\s*id\\s*\\)", flags: "i",
          label: { en: "publishers_id references publishers(id)", ar: "publishers_id يشير إلى publishers(id)" } }
      ],
      forbid: [
        { re: "publishers_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+(REFERENCES\\s+publishers\\s*\\(\\s*id\\s*\\)\\s*)?NOT\\s+NULL", flags: "i",
          label: { en: "publishers_id must stay nullable: a BOOK may be published by a PUBLISHER, so the relationship is optional", ar: "يجب أن يبقى publishers_id قابلًا لـ NULL: يجوز أن يُنشر BOOK عند PUBLISHER، فالعلاقة اختيارية" } },
        { re: "VARCHAR2", flags: "i",
          label: { en: "This physical model is for the SQL track's product: write VARCHAR, not Oracle's VARCHAR2", ar: "هذا النموذج الفيزيائي لمنتج مسار SQL: اكتب VARCHAR لا VARCHAR2 الخاصّ بـ Oracle" } }
      ],
      hint: {
        en: "Follow the four steps: each entity a table, the relationship a foreign key, each attribute a column with its mark kept.",
        ar: "اتّبع الخطوات الأربع: كل كيان جدول، والعلاقة مفتاح أجنبي، وكل خاصية عمود يحتفظ بعلامته."
      },
      explain: {
        en: "Each entity becomes a table and each attribute a column; # becomes PRIMARY KEY, * becomes NOT NULL, U becomes UNIQUE, and \"published by\" becomes publishers_id REFERENCES publishers(id). Run it: a duplicate title and a NULL title are both refused, a missing publisher is accepted. Adding NOT NULL to publishers_id is the tempting extra, but \"may\" makes the relationship optional. The spelling changed from Oracle's; the promises did not.",
        ar: "كل كيان يصبح جدولًا وكل خاصية عمودًا؛ وتصبح # قيد PRIMARY KEY، و* قيد NOT NULL، وU قيد UNIQUE، وتصبح «published by» العمود publishers_id REFERENCES publishers(id). نفّذه: يُرفض العنوان المكرّر والعنوان الفارغ (NULL)، ويُقبل الكتاب الذي لا ناشر له. إضافة NOT NULL إلى publishers_id زيادة مغرية، لكن «يجوز» تجعل العلاقة اختيارية. تغيّرت التهجئة عن تهجئة Oracle؛ ولم تتغيّر الوعود."
      },
      solution: {
        code: "CREATE TABLE publishers (\n  id   NUMBER      PRIMARY KEY,\n  name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE books (\n  id            VARCHAR(15) PRIMARY KEY,\n  title         VARCHAR(50) NOT NULL UNIQUE,\n  publishers_id NUMBER      REFERENCES publishers(id)\n);",
        en: "Two tables, one foreign key, every mark kept, and VARCHAR in place of VARCHAR2.",
        ar: "جدولان، ومفتاح أجنبي واحد، وكل علامة محفوظة، وVARCHAR مكان VARCHAR2."
      }
    }
  ]
};
