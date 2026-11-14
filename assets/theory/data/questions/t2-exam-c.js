/* Question bank: T2 chapter test C -- Advanced. The corners where two lessons meet. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-exam-c"] = {
  title: { en: "Chapter Test C — Advanced", ar: "اختبار الفصل C — المستوى المتقدّم" },
  intro: {
    en: "24 questions on the corners where two lessons meet: a key that identifies the wrong thing, a unique rule the business does not keep, a UID that changes or may be empty, a null faked with a zero, a value that stops being derivable, a copy that needs to become an entity. Each one needs more than one lesson to answer. Allow about 45 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الزوايا التي يلتقي فيها درسان: مفتاح يعرّف الشيء الخطأ، وقاعدة تفرّد لا يلتزم بها العمل، ومعرّف فريد يتغيّر أو قد يبقى فارغًا، وقيمة null زُيّفت بصفر، وقيمة لم تعد قابلة للاشتقاق، ونسخة من كتاب يجب أن تصير كيانًا. كل سؤال يحتاج إلى أكثر من درس واحد ليُجاب. خصّص نحو 45 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== tables and keys (lessons 1, 2, 6) */
    {
      id: "t2cx01", type: "mcq", level: "medium",
      topics: ["t2-primary-key", "t2-flat-file", "t2-record"],
      q: {
        en: "The slides' flat BOOK_LIST. Its first column is even called AUTHOR_ID. Which column could be this table's primary key?",
        ar: "جدول BOOK_LIST المسطّح من الشرائح. عموده الأول اسمه AUTHOR_ID أيضًا. أيّ عمود يمكن أن يكون المفتاح الأساسي لهذا الجدول؟"
      },
      lang: "text",
      code: "AUTHOR_ID | AUTHOR_NAME      | TITLE\nAD0001    | Oscar Wilde      | A Vision\nAD0002    | Leo Tolstoy      | War and Peace\nAD0003    | Oliver Goldsmith | Citizen of the World\nAD0003    | Oliver Goldsmith | Androcles and the Lion",
      options: [
        { en: "AUTHOR_ID — its name says it is the identifier", ar: "AUTHOR_ID — اسمه يقول إنه المعرّف" },
        { en: "AUTHOR_NAME — every row has one", ar: "AUTHOR_NAME — لكل صفّ قيمة فيه" },
        { en: "TITLE — each row is about one book, and in this library no two books share a title", ar: "TITLE — كل صفّ يتحدّث عن كتاب واحد، ولا يشترك كتابان في عنوان واحد في هذه المكتبة" },
        { en: "None — a flat file cannot have a primary key", ar: "لا شيء — الملف المسطّح لا يمكن أن يكون له مفتاح أساسي" }
      ],
      answer: 2,
      hint: {
        en: "A primary key must be different in every row. First ask what one row of this table is about.",
        ar: "المفتاح الأساسي يجب أن يختلف في كل صفّ. اسأل أوّلًا: عن أيّ شيء يتحدّث الصفّ الواحد في هذا الجدول؟"
      },
      explain: {
        en: "Each row describes one book, so the key must pick out one book. AUTHOR_ID is tempting because of its name, but AD0003 is in two rows: it identifies the author, not the row. AUTHOR_NAME repeats for the same reason. TITLE is different in every row, which is why Matt's model marks it U. A flat file can have a key; its problem is the repetition, not a missing key.",
        ar: "كل صفّ يصف كتابًا واحدًا، فيجب أن يختار المفتاح كتابًا واحدًا. AUTHOR_ID مغرٍ بسبب اسمه، لكن AD0003 موجود في صفّين: إنه يعرّف المؤلف لا الصفّ. وAUTHOR_NAME يتكرّر للسبب نفسه. أمّا TITLE فيختلف في كل صفّ، ولهذا يعلّمه نموذج مات بالحرف U. الملف المسطّح يمكن أن يكون له مفتاح؛ مشكلته التكرار، لا غياب المفتاح."
      }
    },
    {
      id: "t2cx02", type: "tf", level: "hard",
      topics: ["t2-relational-rules", "t2-composite-uid", "t2-physical-model"],
      q: {
        en: "Matt's physical BOOK_AUTHORS has two columns, BOOKS_Id and AUTHORS_Id. A book may have more than one author, and Goldsmith wrote two books, so values repeat down both columns. So BOOK_AUTHORS breaks the rule \"each table has a value to uniquely identify the rows\".",
        ar: "جدول BOOK_AUTHORS في النموذج الفيزيائي لمات فيه عمودان: BOOKS_Id وAUTHORS_Id. قد يكون للكتاب أكثر من مؤلف، وقد كتب Goldsmith كتابين، فتتكرّر القيم في العمودين كليهما. إذن BOOK_AUTHORS يخالف القاعدة «لكل جدول قيمة تعرّف صفوفه تعريفًا فريدًا»."
      },
      truth: false,
      hint: {
        en: "Look at the constraint the slides name for this table: BOOK_AUTHORS_PK (BOOKS_Id, AUTHORS_Id). Must the identifying value come from one column?",
        ar: "انظر إلى القيد الذي تسمّيه الشرائح لهذا الجدول: BOOK_AUTHORS_PK (BOOKS_Id, AUTHORS_Id). هل يجب أن تأتي القيمة المعرِّفة من عمود واحد؟"
      },
      explain: {
        en: "False. The primary key is the pair (BOOKS_Id, AUTHORS_Id): neither column is unique alone, but the same book with the same author can appear only once. That is a composite UID, and it satisfies rule 3. The repeated values are foreign keys pointing at one stored book and one stored author, so they are not redundancy either.",
        ar: "خطأ. المفتاح الأساسي هو الزوج (BOOKS_Id, AUTHORS_Id): لا عمود منهما فريد وحده، لكن الكتاب نفسه مع المؤلف نفسه لا يظهر إلا مرّة واحدة. هذا معرّف مركّب (composite UID)، وهو يحقّق القاعدة 3. والقيم المتكرّرة مفاتيح أجنبية تشير إلى كتاب مخزَّن مرّة وإلى مؤلف مخزَّن مرّة، فليست تكرارًا للبيانات أيضًا."
      }
    },
    {
      id: "t2cx03", type: "output", level: "hard",
      topics: ["t2-unique-key", "t2-uid-defence", "t2-physical-model"],
      q: {
        en: "books is built from Matt's physical model, BOOKS_Title_UK included, and holds BK001–BK004. The library buys Oscar Wilde's Poems (BK005), then Oliver Goldsmith's Poems (BK006): two different books with the same title. Each INSERT runs on its own. What does the query return?",
        ar: "الجدول books مبنيّ من النموذج الفيزيائي لمات، ومعه BOOKS_Title_UK، وفيه BK001–BK004. تشتري المكتبة كتاب Poems لـ Oscar Wilde (BK005)، ثم كتاب Poems لـ Oliver Goldsmith (BK006): كتابان مختلفان لهما العنوان نفسه. كل INSERT يُشغَّل وحده. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "CREATE TABLE books (\n  id    VARCHAR(15) PRIMARY KEY,\n  title VARCHAR(50) NOT NULL UNIQUE\n);\n-- BK001 A Vision, BK002 War and Peace,\n-- BK003 Citizen of the World, BK004 Androcles and the Lion\n\nINSERT INTO books VALUES ('BK005', 'Poems');\nINSERT INTO books VALUES ('BK006', 'Poems');\n\nSELECT COUNT(*) AS books\nFROM books;",
      blanks: [{ accept: ["5", "five", "Five"], label: { en: "books", ar: "books" } }],
      hint: {
        en: "The two ids are new. What does the U on Title promise, and is the promise still true?",
        ar: "الرقمان التعريفيان جديدان. ماذا يَعِد الحرف U على Title، وهل ما زال الوعد صحيحًا؟"
      },
      explain: {
        en: "5. BK005 goes in; BK006 is refused by the unique index, though it is a real book the library owns. U * Title is a business claim, \"no two books share a title\", and it was true of four books by luck. A constraint the business does not keep turns real data away, exactly like the bad UID that refused the second Omar Saleh. The Id still works, which is why Id, not Title, is the UID. The fix is to ask the business, then drop the U.",
        ar: "5. يدخل BK005؛ ويُرفض BK006 بسبب الفهرس الفريد، مع أنه كتاب حقيقي تملكه المكتبة. U * Title ادّعاء من العمل: «لا يشترك كتابان في عنوان»، وكان صحيحًا في أربعة كتب بالمصادفة. القيد الذي لا يلتزم به العمل يردّ بيانات حقيقية، تمامًا كالمعرّف السيّئ الذي ردّ Omar Saleh الثاني. أمّا Id فما زال يعمل، ولهذا هو المعرّف الفريد لا Title. والإصلاح أن تسأل العمل، ثم تحذف U."
      },
      solution: {
        out: "books\n5",
        en: "Run in alasql: the BK005 INSERT is accepted; the BK006 INSERT fails with \"Cannot insert record, because it already exists in unique index\"; COUNT(*) returns 5.",
        ar: "شُغّل في alasql: قُبل INSERT الخاص بـ BK005؛ وفشل INSERT الخاص بـ BK006 برسالة \"Cannot insert record, because it already exists in unique index\"؛ وأرجع COUNT(*) العدد 5."
      }
    },
    {
      id: "t2cx04", type: "tf", level: "medium",
      topics: ["t2-uid-defence", "t2-optionality-context", "t2-volatile"],
      q: {
        en: "A text-messaging service marks * Cell Phone on SUBSCRIBER, because it cannot serve anyone without one. Every subscriber has a number and no two share one, so Cell Phone passes all three questions that defend a UID.",
        ar: "خدمة رسائل نصّية تعلّم * Cell Phone في SUBSCRIBER، لأنها لا تستطيع خدمة أحد بدونه. لكل مشترك رقم ولا يشترك اثنان في رقم، إذن Cell Phone ينجح في الأسئلة الثلاثة التي يُدافَع بها عن المعرّف الفريد."
      },
      truth: false,
      hint: {
        en: "Being mandatory answers one of the three questions. Say all three, then think about a subscriber who changes number.",
        ar: "كونه إلزاميًا يجيب عن سؤال واحد من الثلاثة. اذكر الأسئلة الثلاثة، ثم فكّر في مشترك يغيّر رقمه."
      },
      explain: {
        en: "False. Here the phone is unique and, being *, always present, so it passes two questions. It fails the third: will the value stay the same? People change numbers, and a UID that changes must be changed everywhere it is used. Lesson 5's \"prefer the non-volatile attribute\" matters most for a UID. An issued subscriber number passes all three.",
        ar: "خطأ. الهاتف هنا فريد، وبما أنه * فهو موجود دائمًا، فينجح في سؤالين. ويسقط في الثالث: هل ستبقى القيمة كما هي؟ الناس يغيّرون أرقامهم، والمعرّف الذي يتغيّر يجب تغييره في كل مكان يُستعمل فيه. قاعدة الدرس 5 «فضّل الخاصية غير المتقلّبة (non-volatile)» أهمّ ما تكون للمعرّف الفريد. أمّا رقم مشترك تصدره الخدمة فينجح في الثلاثة."
      }
    },

    /* ==================================================== null, optional, H.R. (lessons 5, 6) */
    {
      id: "t2cx05", type: "output", level: "medium",
      topics: ["t2-null", "t2-mandatory-optional", "t2-hr-scenario"],
      q: {
        en: "The H.R. ERD marks o Commission. Only Tyler Adams (310) is on commission, 600; the others hold NULL — except Neil Loungani, whose clerk typed 0 because \"the box should not be empty\". What does the query return?",
        ar: "مخطّط الموارد البشرية يعلّم o Commission. لا يعمل بالعمولة إلا Tyler Adams (310)، وعمولته 600؛ والباقون قيمتهم NULL — إلا Neil Loungani، الذي كتب له الموظّف 0 لأن «الخانة يجب ألّا تبقى فارغة». ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "CREATE TABLE employees (\n  employee_id NUMBER       PRIMARY KEY,\n  last_name   VARCHAR(25)  NOT NULL,\n  commission  DECIMAL(8,2)\n);\nINSERT INTO employees VALUES\n  (100, 'SMITH', NULL), (310, 'ADAMS', 600), (210, 'CHEN', NULL),\n  (405, 'GOMEZ', NULL), (378, 'LOUNGANI', 0);\n\nSELECT COUNT(commission) AS on_commission,\n       AVG(commission)   AS avg_commission\nFROM employees;",
      blanks: [
        { accept: ["2", "two", "Two"], label: { en: "on_commission", ar: "on_commission" } },
        { accept: ["300", "300.0", "300.00"], label: { en: "avg_commission", ar: "avg_commission" } }
      ],
      hint: {
        en: "COUNT of a column and AVG both skip nulls. Is 0 a null?",
        ar: "COUNT لعمود وAVG كلاهما يتخطّى قيم null. هل الصفر null؟"
      },
      explain: {
        en: "2 and 300. Null is neither a zero nor a space, so the three NULLs are skipped but Loungani's 0 is counted as a value. The table now says two employees are on commission and their average is 300, when the truth is one employee and 600. The o in the ERD meant \"leave it null\"; faking the empty box made the reports lie.",
        ar: "2 و300. القيمة null ليست صفرًا ولا مسافة، فتُتخطّى قيم NULL الثلاث، أمّا صفر Loungani فيُحسب قيمةً. صار الجدول يقول إن موظفَين يعملان بالعمولة ومتوسّطها 300، والحقيقة موظف واحد و600. الحرف o في المخطّط كان يعني «اتركها null»؛ وتزييف الخانة الفارغة جعل التقارير تكذب."
      },
      solution: {
        out: "on_commission | avg_commission\n2             | 300",
        en: "Run in alasql with commission DECIMAL(8,2): COUNT(commission) = 2, AVG(commission) = 300. Change Loungani's 0 to NULL and the answer becomes 1 and 600.",
        ar: "شُغّل في alasql مع commission DECIMAL(8,2): ‏COUNT(commission) = 2 وAVG(commission) = 300. غيّر صفر Loungani إلى NULL فتصير الإجابة 1 و600."
      }
    },

    /* ==================================================== entity or attribute (lessons 4, 5, 6) */
    {
      id: "t2cx06", type: "contrast", level: "easy",
      topics: ["t2-entity", "t2-attribute", "t2-scenario-to-erd", "t2-business-significance"],
      q: {
        en: "Each item is something the business mentions. In that business, is it an entity of its own, or an attribute of another entity?",
        ar: "كل بند شيء يذكره العمل. في ذلك العمل، هل هو كيان قائم بذاته، أم خاصية لكيان آخر؟"
      },
      concepts: [
        { en: "An entity of its own", ar: "كيان قائم بذاته" },
        { en: "An attribute of another entity", ar: "خاصية لكيان آخر" }
      ],
      rows: [
        { s: { en: "In H.R., a department's location, with street address, postal code, city and state province", ar: "في الموارد البشرية، موقع القسم، بعنوان الشارع والرمز البريدي والمدينة والولاية أو المقاطعة" }, a: 0 },
        { s: { en: "In the library, the city a member lives in, used to address a letter", ar: "في المكتبة، المدينة التي يسكنها العضو، وتُستعمل لعنونة رسالة" }, a: 1 },
        { s: { en: "In H.R., a job, with a title and a minimum and maximum salary", ar: "في الموارد البشرية، الوظيفة، بمسمّاها وأدنى راتب وأعلى راتب" }, a: 0 },
        { s: { en: "In the library, a book's title", ar: "في المكتبة، عنوان الكتاب" }, a: 1 },
        { s: { en: "In H.R., an employee's hire date", ar: "في الموارد البشرية، تاريخ تعيين الموظف" }, a: 1 },
        { s: { en: "In the library, a publisher, with an Id and a name, that publishes many books", ar: "في المكتبة، الناشر، برقم واسم، وينشر كتبًا كثيرة" }, a: 0 }
      ],
      hint: {
        en: "Does the thing have facts of its own, shared by many instances of something else? Or is it one fact about one instance?",
        ar: "هل لهذا الشيء حقائق خاصة به يشترك فيها كثير من نسخ شيء آخر؟ أم هو حقيقة واحدة عن نسخة واحدة؟"
      },
      explain: {
        en: "A noun with facts of its own becomes an entity; a single fact about one instance is an attribute. A member's city just describes the member. A department's location has four facts, and copying them into every department would break goal 2, so H.R. makes LOCATION an entity. JOB and PUBLISHER are the same case; title and hire date are single facts.",
        ar: "الاسم الذي له حقائق خاصة به يصبح كيانًا؛ والحقيقة الواحدة عن نسخة واحدة خاصية. مدينة العضو تصف العضو فقط. أمّا موقع القسم فله أربع حقائق، ونسخها في كل قسم يخالف الهدف 2، فتجعل الموارد البشرية LOCATION كيانًا. وJOB وPUBLISHER الحالة نفسها؛ أمّا العنوان وتاريخ التعيين فحقيقتان مفردتان."
      }
    },
    {
      id: "t2cx07", type: "compare", level: "hard",
      topics: ["t2-single-valued", "t2-business-context", "t2-composite-uid", "t2-entity"],
      q: {
        en: "The library now owns two copies of War and Peace, numbered 1 and 2; every title's copies are numbered from 1. A member returns copy 2 torn, and the librarian must record which copy is torn. Which model can hold this?",
        ar: "صارت المكتبة تملك نسختين من War and Peace، رقمهما 1 و2؛ ونُسخ كل عنوان تُرقَّم بدءًا من 1. أعاد عضو النسخة 2 ممزّقة، ويجب على أمين المكتبة أن يسجّل أيّ نسخة مُزّقت. أيّ نموذج يستطيع أن يحمل ذلك؟"
      },
      lang: "text",
      codeA: "BOOK\n# * Id\nU * Title\no Condition",
      codeB: "BOOK\n# * Id\nU * Title\n\nCOPY\n# * Book Id\n# * Copy No\n* Condition",
      options: [
        { en: "A: Condition is one more optional attribute of BOOK; the torn book simply gets the value 'torn'", ar: "A: Condition خاصية اختيارية أخرى في BOOK؛ والكتاب الممزّق يأخذ القيمة 'torn' فقط" },
        { en: "B: each copy is now something the library must list and tell apart, so COPY is an entity, identified by Book Id with Copy No", ar: "B: كل نسخة صارت شيئًا يجب أن تسرده المكتبة وتميّزه، فـ COPY كيان، يُعرَّف بـ Book Id مع Copy No" },
        { en: "A: a second entity for the same book would store War and Peace twice, breaking the goal that data appears only once", ar: "A: كيان ثانٍ للكتاب نفسه سيخزّن War and Peace مرّتين، فيخالف هدف ظهور البيانات مرّة واحدة" },
        { en: "B, but Copy No alone should be the UID, because it is already a number", ar: "B، لكن Copy No وحده ينبغي أن يكون المعرّف الفريد، لأنه رقم أصلًا" }
      ],
      answer: 1,
      hint: {
        en: "In Matt's model a BOOK is a title, not a copy. How many Conditions would War and Peace need at once?",
        ar: "في نموذج مات، BOOK عنوانٌ لا نسخة. كم قيمة Condition سيحتاج War and Peace في الوقت نفسه؟"
      },
      explain: {
        en: "War and Peace is one BOOK instance with two copies, one torn and one not, so A would need two values in one attribute: not single-valued. Once the business needs facts about each copy, COPY becomes an entity, just as DOG became one for the breeder. B stores no title, so nothing is stored twice. Copy No alone repeats, since every title has a copy 1; with Book Id it is unique.",
        ar: "War and Peace نسخة واحدة من الكيان BOOK لها نسختان ورقيّتان، إحداهما ممزّقة والأخرى لا، فيحتاج A إلى قيمتين في خاصية واحدة: ليست أحادية القيمة (single-valued). وحين يحتاج العمل إلى حقائق عن كل نسخة يصبح COPY كيانًا، كما صار DOG كيانًا عند المربّي. وB لا يخزّن العنوان، فلا شيء يُخزَّن مرّتين. وCopy No وحده يتكرّر، لأن لكل عنوان نسخة رقم 1؛ ومع Book Id يصير فريدًا."
      }
    },
    {
      id: "t2cx08", type: "error", level: "hard",
      topics: ["t2-volatile", "t2-single-valued", "t2-uid-defence", "t2-reading-erd"],
      q: {
        en: "A classmate's H.R. model, one item per line. Three lines each break a different rule from lessons 5 and 6. Which? Choose every one.",
        ar: "نموذج الموارد البشرية لزميل، بند في كل سطر. ثلاثة أسطر، كلٌّ منها يخالف قاعدة مختلفة من الدرسين 5 و6. أيّها؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "EMPLOYEE    # * Employee ID\n  * First Name   * Last Name   * Hire Date   * Salary\n  * Age\n  o Commission\n  * Phone Numbers (home, work, mobile)\nJOB         # * Title\n  * Max Salary   * Min Salary\nDEPARTMENT  # * Department ID   * Name\nEMPLOYEE  manager of / managed by  EMPLOYEE",
      answer: [3, 5, 6],
      hint: {
        en: "Check each line against: one value at a time; prefer what does not change; a UID must stay the same. Commission and the line back to EMPLOYEE are as the slides have them.",
        ar: "افحص كل سطر مقابل: قيمة واحدة في كل وقت؛ فضّل ما لا يتغيّر؛ المعرّف الفريد يجب أن يبقى كما هو. أمّا Commission والخطّ العائد إلى EMPLOYEE فكما في الشرائح."
      },
      explain: {
        en: "Line 3: Age is volatile, wrong for everyone within a year; store a birth date if H.R. needs ages. Line 5: three phone numbers in one attribute break single-valued. Line 6: a job title can be renamed, and a UID must not change, which is why the slides give JOB # Job ID and keep Title as an ordinary * attribute. Line 4 is right, because only some employees are on commission, and line 9 is the recursive relationship.",
        ar: "السطر 3: العمر متقلّب، ويصبح خاطئًا للجميع خلال سنة؛ خزّن تاريخ الميلاد إن احتاجت الموارد البشرية إلى الأعمار. السطر 5: ثلاثة أرقام هواتف في خاصية واحدة تخالف أحادية القيمة. السطر 6: مسمّى الوظيفة قد يُعاد تسميته، والمعرّف الفريد يجب ألّا يتغيّر، ولهذا تعطي الشرائح JOB المعرّف # Job ID وتُبقي Title خاصية * عادية. السطر 4 صحيح، لأن بعض الموظفين فقط يعملون بالعمولة، والسطر 9 هو العلاقة الذاتية (recursive relationship)."
      },
      solution: {
        code: "EMPLOYEE    # * Employee ID\n  * First Name   * Last Name   * Hire Date   * Salary\n  * Birth Date\n  o Commission\n  o Mobile Phone\nJOB         # * Job ID\n  * Title   * Max Salary   * Min Salary\nDEPARTMENT  # * Department ID   * Name\nEMPLOYEE  manager of / managed by  EMPLOYEE",
        en: "Lines 3, 5 and 6: Birth Date replaces Age; one phone attribute holds one number (more numbers would need their own entity); JOB gets an issued # * Job ID and Title becomes an ordinary * attribute.",
        ar: "الأسطر 3 و5 و6: يحلّ Birth Date محلّ Age؛ وخاصية الهاتف تحمل رقمًا واحدًا (والأرقام الأكثر تحتاج إلى كيان خاص بها)؛ ويأخذ JOB معرّفًا صادرًا # * Job ID، ويصبح Title خاصية * عادية."
      }
    },
    {
      id: "t2cx09", type: "mcq", level: "hard",
      topics: ["t2-derivable-data", "t2-er-goals", "t2-volatile"],
      q: {
        en: "The library lends every book for 14 days, so a classmate leaves Due Date out of BOOK TRANSACTION: it is Tran Date + 14, derivable, and goal 3 forbids storing it. Then the faculty member adds: \"A librarian may extend a loan for a member who asks.\" What should Matt do now?",
        ar: "تعير المكتبة كل كتاب 14 يومًا، فيُسقط زميلٌ Due Date من BOOK TRANSACTION: إنه Tran Date + 14، قابل للاشتقاق، والهدف 3 يمنع تخزينه. ثم يضيف عضو هيئة التدريس: «يجوز لأمين المكتبة أن يمدّد الإعارة لعضو يطلب ذلك.» ماذا ينبغي أن يفعل مات الآن؟"
      },
      options: [
        { en: "Still leave it out: a due date can always be worked out from the transaction date", ar: "يبقى خارج النموذج: تاريخ الاستحقاق يمكن دائمًا حسابه من تاريخ المعاملة" },
        { en: "Store Due Date: once a librarian can change it, it can no longer be worked out from data already in the model", ar: "يخزّن Due Date: ما دام أمين المكتبة يستطيع تغييره، فلم يعد ممكنًا حسابه من بيانات موجودة في النموذج" },
        { en: "Leave it out, because a due date that can change is volatile, like Age", ar: "يُسقطه، لأن تاريخ الاستحقاق الذي يمكن أن يتغيّر متقلّب، مثل Age" },
        { en: "Store both Due Date and Days Left, so the desk sees both at a glance", ar: "يخزّن Due Date وDays Left معًا، ليرى مكتب الاستقبال الاثنين بنظرة واحدة" }
      ],
      answer: 1,
      hint: {
        en: "Goal 3 forbids data that is derivable from data already modelled. After an extension, from what could anyone derive the new date?",
        ar: "الهدف 3 يمنع البيانات القابلة للاشتقاق من بيانات منمذجة أصلًا. بعد التمديد، من أيّ شيء يمكن لأحد أن يشتقّ التاريخ الجديد؟"
      },
      explain: {
        en: "Derivable means derivable from data already in the model. With a fixed 14 days it was; once a librarian can extend a loan, the new date is a decision recorded nowhere else, so it must be stored. It is not volatile like Age: it changes only when someone decides, not every day by itself. Days Left really is derivable and volatile, so it breaks goal 3.",
        ar: "قابل للاشتقاق يعني قابلًا للاشتقاق من بيانات موجودة في النموذج. مع 14 يومًا ثابتة كان كذلك؛ أمّا حين يستطيع أمين المكتبة تمديد الإعارة فالتاريخ الجديد قرار غير مسجّل في أيّ مكان آخر، فيجب تخزينه. وليس متقلّبًا مثل Age: لا يتغيّر إلا حين يقرّر أحد، لا كل يوم من تلقاء نفسه. أمّا Days Left فقابل للاشتقاق ومتقلّب حقًّا، فيخالف الهدف 3."
      }
    },
    {
      id: "t2cx10", type: "match", level: "medium",
      topics: ["t2-anomaly", "t2-uid-defence", "t2-mandatory-optional", "t2-volatile", "t2-referential-check", "t2-derivable-data"],
      q: {
        en: "Each symptom was seen somewhere in this chapter. Match it to the design decision that caused it.",
        ar: "كل عَرَض ظهر في مكان ما من هذا الفصل. صِله بقرار التصميم الذي سبّبه."
      },
      leftHead: { en: "What the library or H.R. sees", ar: "ما تراه المكتبة أو الموارد البشرية" },
      rightHead: { en: "The design decision behind it", ar: "قرار التصميم الذي وراءه" },
      pairs: [
        { l: { en: "The second Omar Saleh, from Khan Younis, cannot join", ar: "Omar Saleh الثاني، من Khan Younis، لا يستطيع الانضمام" },
          r: { en: "A UID built from natural attributes that were unique only by luck", ar: "معرّف فريد مبنيّ من خصائص طبيعية كانت فريدة بالمصادفة فقط" } },
        { l: { en: "Lina Khalil, who has no cell phone, cannot join", ar: "Lina Khalil، التي لا تملك هاتفًا محمولًا، لا تستطيع الانضمام" },
          r: { en: "An attribute the business does not always have, marked *", ar: "خاصية لا تتوفّر للعمل دائمًا، معلَّمة بـ *" } },
        { l: { en: "Every member's age is a year out of date", ar: "عمر كل عضو متأخّر سنة" },
          r: { en: "A volatile attribute stored instead of a non-volatile one", ar: "خاصية متقلّبة خُزّنت بدل خاصية غير متقلّبة" } },
        { l: { en: "Leo Tolstoy's author code vanished when War and Peace was deleted", ar: "رمز المؤلف Leo Tolstoy اختفى حين حُذف War and Peace" },
          r: { en: "Facts about two things stored in one table", ar: "حقائق عن شيئين خُزّنت في جدول واحد" } },
        { l: { en: "A loan names member 9, and there is no member 9", ar: "إعارة تذكر العضو 9، ولا يوجد عضو 9" },
          r: { en: "A column that points at another table, declared without REFERENCES", ar: "عمود يشير إلى جدول آخر، عُرّف بلا REFERENCES" } },
        { l: { en: "Accounting's stored head count says 3; there are 4 employees", ar: "عدد الموظفين المخزَّن لقسم Accounting يقول 3؛ وفيه 4 موظفين" },
          r: { en: "A value stored that could have been derived", ar: "قيمة خُزّنت وكان يمكن اشتقاقها" } }
      ],
      hint: {
        en: "For each symptom ask: was a real person refused, did a stored value go stale, or did one change destroy or break another fact?",
        ar: "اسأل عن كل عَرَض: هل رُفض شخص حقيقي، أم صارت قيمة مخزّنة قديمة، أم أن تغييرًا واحدًا أتلف حقيقة أخرى أو كسرها؟"
      },
      explain: {
        en: "Two symptoms are refusals: a UID unique only by luck turns away a real second member, and a wrong * turns away a member without a phone. Two are stale values: a stored age and a stored count both go wrong without anyone touching them. One is the delete anomaly of a single table, and one is a foreign key nobody declared. Every one was fixed in a different lesson.",
        ar: "عَرَضان هما رفض: معرّف فريد بالمصادفة يردّ عضوًا ثانيًا حقيقيًا، وعلامة * خاطئة تردّ عضوًا بلا هاتف. وعَرَضان قيمتان قديمتان: العمر المخزَّن والعدد المخزَّن كلاهما يصبح خاطئًا دون أن يلمسه أحد. وواحد هو شذوذ الحذف (delete anomaly) في الجدول الواحد، وواحد مفتاح أجنبي لم يعرّفه أحد. كلٌّ منها أُصلح في درس مختلف."
      }
    },
    {
      id: "t2cx11", type: "fill", level: "medium",
      topics: ["t2-physical-model", "t2-composite-uid", "t2-foreign-key", "t2-logical-marks"],
      q: {
        en: "In the logical model, BOOK TRANSACTION is identified by # * Tran Date and # * Book Id, and a MEMBER makes it. Fill in the key letters of each column in Matt's physical model: P, F, or both.",
        ar: "في النموذج المنطقي، يُعرَّف BOOK TRANSACTION بـ # * Tran Date و# * Book Id، ويقوم به MEMBER. املأ حروف المفتاح لكل عمود في النموذج الفيزيائي لمات: P أو F أو كليهما."
      },
      lang: "text",
      code: "BOOK_TRANSACTIONS\n  ____1____* Tran_Date   DATE\n             Type        VARCHAR2\n  ____2____* MEMBERS_Id  NUMBER\n  ____3____* BOOKS_Id    VARCHAR2(15)\nBOOK_TRANSACTIONS_PK (Tran_Date, BOOKS_Id)",
      blanks: [
        { accept: ["P", "p"], label: { en: "Tran_Date", ar: "Tran_Date" } },
        { accept: ["F", "f"], label: { en: "MEMBERS_Id", ar: "MEMBERS_Id" } },
        { accept: ["PF", "pf", "Pf", "FP", "fp", "P F", "P,F", "P, F"], label: { en: "BOOKS_Id", ar: "BOOKS_Id" } }
      ],
      hint: {
        en: "P marks a column in the primary key; F marks a column that carries a relationship. Read the PK line, then ask which columns point at another table.",
        ar: "P تعلّم عمودًا في المفتاح الأساسي؛ وF تعلّم عمودًا يحمل علاقة. اقرأ سطر PK، ثم اسأل أيّ الأعمدة يشير إلى جدول آخر."
      },
      explain: {
        en: "Tran_Date is part of the primary key only: P. MEMBERS_Id carries \"a member makes the transaction\", so it is a foreign key, but it is not part of the UID: F. BOOKS_Id is both, part of the composite UID and the column that points at BOOKS, so the slides mark it PF*. One column can carry a key and a relationship at once.",
        ar: "Tran_Date جزء من المفتاح الأساسي فقط: P. وMEMBERS_Id يحمل «العضو يقوم بالمعاملة»، فهو مفتاح أجنبي، لكنه ليس جزءًا من المعرّف الفريد: F. أمّا BOOKS_Id فهو الاثنان، جزء من المعرّف المركّب والعمود الذي يشير إلى BOOKS، فتعلّمه الشرائح PF*. يمكن لعمود واحد أن يحمل مفتاحًا وعلاقة في آن واحد."
      },
      solution: {
        en: "1 = P, 2 = F, 3 = PF — exactly as in the slides: P* Tran_Date, F* MEMBERS_Id, PF* BOOKS_Id.",
        ar: "1 = P، و2 = F، و3 = PF — كما في الشرائح تمامًا: P* Tran_Date وF* MEMBERS_Id وPF* BOOKS_Id."
      }
    },
    {
      id: "t2cx12", type: "fill", level: "easy",
      topics: ["t2-single-values", "t2-single-valued", "t2-multi-valued-fix"],
      q: {
        en: "One rule, seen from the table and from the model. Fill each blank with one word.",
        ar: "قاعدة واحدة، تُرى من جهة الجدول ومن جهة النموذج. املأ كل فراغ بكلمة واحدة."
      },
      lang: "text",
      code: "Lesson 2, rule 5: entries in columns are ____1____ values.\nLesson 5: an attribute is ____2____-valued: one value per instance at any point in time.\nSo Sara's two loans cannot share one attribute of MEMBER;\neach becomes an instance of BOOK ____3____.",
      blanks: [
        { accept: ["single", "Single"], label: { en: "1", ar: "1" } },
        { accept: ["single", "Single"], label: { en: "2", ar: "2" } },
        { accept: ["TRANSACTION", "transaction", "Transaction"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "Both rules use the same word. Where did lesson 5's evolve block move each borrowing?",
        ar: "القاعدتان تستعملان الكلمة نفسها. إلى أين نقلت كتلة التطوّر في الدرس 5 كل استعارة؟"
      },
      explain: {
        en: "single, single, TRANSACTION. A table's field holds one value, and a model's attribute holds one value per instance. They are the same rule at two levels, which is why a list of books in one member field breaks both. The fix is not a longer field: each borrowing becomes its own BOOK TRANSACTION.",
        ar: "single وsingle وTRANSACTION. حقل الجدول يحمل قيمة واحدة، وخاصية النموذج تحمل قيمة واحدة لكل نسخة. إنهما القاعدة نفسها على مستويين، ولهذا فإن قائمة كتب في حقل عضو واحد تخالف الاثنتين. والإصلاح ليس حقلًا أطول: كل استعارة تصبح BOOK TRANSACTION خاصة بها."
      },
      solution: {
        en: "1 = single, 2 = single, 3 = TRANSACTION.",
        ar: "1 = single، و2 = single، و3 = TRANSACTION."
      }
    },
    {
      id: "t2cx13", type: "multi", level: "medium",
      topics: ["t2-order-insignificant", "t2-derivable-data", "t2-goal-capture-once"],
      q: {
        en: "MEMBER has # * Id, the names, * City and * Birth Date; BOOK has # * Id and U * Title; every loan is a BOOK TRANSACTION. Which of these questions cannot be answered until Matt adds a new attribute? Choose every one.",
        ar: "في MEMBER الخصائص # * Id والأسماء و* City و* Birth Date؛ وفي BOOK الخاصيتان # * Id وU * Title؛ وكل إعارة BOOK TRANSACTION. أيّ هذه الأسئلة لا يمكن الإجابة عنه حتى يضيف مات خاصية جديدة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Which member joined the library first?", ar: "أيّ الأعضاء انضمّ إلى المكتبة أوّلًا؟" },
        { en: "How old is Sara today?", ar: "كم عمر Sara اليوم؟" },
        { en: "How many books by Oliver Goldsmith does the library hold?", ar: "كم كتابًا لـ Oliver Goldsmith تملك المكتبة؟" },
        { en: "On what date did the library buy War and Peace?", ar: "في أيّ تاريخ اشترت المكتبة War and Peace؟" },
        { en: "Which members live in Gaza?", ar: "أيّ الأعضاء يسكنون Gaza؟" },
        { en: "Who borrowed Citizen of the World?", ar: "من استعار Citizen of the World؟" }
      ],
      answer: [0, 3],
      hint: {
        en: "Some answers can be derived, some are stored. Remember that the position of a row is not data.",
        ar: "بعض الإجابات يمكن اشتقاقها، وبعضها مخزَّن. وتذكّر أن موضع الصفّ ليس بيانات."
      },
      explain: {
        en: "Joining order is not \"the first row\": row order is insignificant, so a Joined Date must be captured (goal 1). The purchase date is stored nowhere either. Sara's age is derived from her birth date, and the Goldsmith count by counting his books; storing either would break goal 3. City and BOOK TRANSACTION already answer the last two.",
        ar: "ترتيب الانضمام ليس «الصفّ الأول»: ترتيب الصفوف لا أهمية له، فيجب تسجيل Joined Date (الهدف 1). وتاريخ الشراء غير مخزَّن في أيّ مكان أيضًا. أمّا عمر Sara فيُشتقّ من تاريخ ميلادها، وعدد كتب Goldsmith بعدّ كتبه؛ وتخزين أيّ منهما يخالف الهدف 3. وCity وBOOK TRANSACTION يجيبان أصلًا عن السؤالين الأخيرين."
      }
    },
    {
      id: "t2cx14", type: "tf", level: "easy",
      topics: ["t2-record", "t2-order-insignificant", "t2-primary-key"],
      q: {
        en: "In the slides' flat file the rows are labelled Record 1 to Record 4. Every row has a different label, so the record number can serve as the table's primary key.",
        ar: "في الملف المسطّح من الشرائح، الصفوف معنونة Record 1 إلى Record 4. لكل صفّ عنوان مختلف، إذن يمكن أن يكون رقم السجلّ هو المفتاح الأساسي للجدول."
      },
      truth: false,
      hint: {
        en: "Is \"Record 3\" a value stored in the row, or the row's position? What does rule 7 say about position?",
        ar: "هل «Record 3» قيمة مخزّنة في الصفّ، أم موضع الصفّ؟ وماذا تقول القاعدة 7 عن الموضع؟"
      },
      explain: {
        en: "False. The label is the row's position, not a value it stores, and the order of rows is insignificant. Sort by title, or delete Record 2, and \"Record 3\" names a different book. A primary key is a value stored in the row that stays with it wherever the row sits.",
        ar: "خطأ. العنوان هو موضع الصفّ، لا قيمة يخزّنها، وترتيب الصفوف لا أهمية له. رتّب حسب العنوان، أو احذف Record 2، فيصبح «Record 3» اسمًا لكتاب آخر. المفتاح الأساسي قيمة مخزّنة في الصفّ تبقى معه أينما كان موضعه."
      }
    },

    /* ==================================================== models (lessons 3, 5) */
    {
      id: "t2cx15", type: "mcq", level: "medium",
      topics: ["t2-data-type", "t2-implementation-free", "t2-logical-model"],
      q: {
        en: "Lesson 5 says every attribute has a data type: Tran Date is a date, Title a character string. Lesson 3 says the logical model leaves data types to the physical model. Which statement makes both true?",
        ar: "يقول الدرس 5 إن لكل خاصية نوع بيانات: Tran Date تاريخ، وTitle سلسلة حروف. ويقول الدرس 3 إن النموذج المنطقي يترك أنواع البيانات للنموذج الفيزيائي. أيّ عبارة تجعل الاثنين صحيحين؟"
      },
      options: [
        { en: "The logical model knows the kind of value — date, number, character string — but not the product's type and precision, such as VARCHAR2(50); those arrive in the physical model", ar: "النموذج المنطقي يعرف نوع القيمة — تاريخ، رقم، سلسلة حروف — لكنه لا يعرف نوع المنتج ودقّته، مثل VARCHAR2(50)؛ فهذه تأتي في النموذج الفيزيائي" },
        { en: "Lesson 5 is about tables only; an attribute in a logical model has no kind of value at all", ar: "الدرس 5 عن الجداول فقط؛ والخاصية في النموذج المنطقي ليس لها نوع قيمة أصلًا" },
        { en: "The logical model must already say VARCHAR2(50), because a data type is decided together with the attribute", ar: "يجب أن يقول النموذج المنطقي VARCHAR2(50) من البداية، لأن نوع البيانات يُقرَّر مع الخاصية" },
        { en: "Data types belong to the conceptual model, which is why the logical model can leave them out", ar: "أنواع البيانات تنتمي إلى النموذج المفاهيمي، ولهذا يستطيع النموذج المنطقي أن يتركها" }
      ],
      answer: 0,
      hint: {
        en: "\"Implementation-free\" forbids one product's details. Is \"a date\" a product's detail?",
        ar: "«مستقلّ عن التنفيذ» يمنع تفاصيل منتج بعينه. هل «تاريخ» تفصيلة خاصة بمنتج؟"
      },
      explain: {
        en: "An attribute's kind of value — date, number, text, image — is a business fact, and the slides say an ERM records data types as background information. What the logical model refuses is the product's version: VARCHAR2(50), NUMBER precision, Oracle names. Writing VARCHAR2 into it would tie it to one RDBMS. The conceptual model shows no attributes at all, so it cannot hold their types.",
        ar: "نوع قيمة الخاصية — تاريخ، رقم، نص، صورة — حقيقة من العمل، والشرائح تقول إن نموذج ERM يسجّل أنواع البيانات معلوماتٍ خلفية. أمّا ما يرفضه النموذج المنطقي فهو صيغة المنتج: VARCHAR2(50) ودقّة NUMBER وأسماء Oracle. وكتابة VARCHAR2 فيه تربطه بنظام RDBMS واحد. والنموذج المفاهيمي لا يُظهر الخصائص أصلًا، فلا يمكن أن يحمل أنواعها."
      }
    },

    /* ==================================================== UIDs (lessons 2, 5, 6) */
    {
      id: "t2cx16", type: "contrast", level: "medium",
      topics: ["t2-uid-defence", "t2-artificial-uid", "t2-composite-uid"],
      q: {
        en: "Every candidate below is unique in today's data. Sort each: unique by design, or unique only by luck?",
        ar: "كل مرشّح أدناه فريد في بيانات اليوم. صنّف كلًّا منها: فريد بالتصميم، أم فريد بالمصادفة فقط؟"
      },
      concepts: [
        { en: "Unique by design", ar: "فريد بالتصميم" },
        { en: "Unique only by luck", ar: "فريد بالمصادفة فقط" }
      ],
      rows: [
        { s: { en: "Employee ID, which H.R. assigns and never reuses", ar: "Employee ID، الذي تخصّصه الموارد البشرية ولا تعيد استعماله أبدًا" }, a: 0 },
        { s: { en: "An employee's First Name + Last Name + Hire Date", ar: "First Name + Last Name + Hire Date للموظف" }, a: 1 },
        { s: { en: "Tran Date + Book Id, while the library allows one transaction per book per day", ar: "Tran Date + Book Id، ما دامت المكتبة تسمح بمعاملة واحدة لكل كتاب في اليوم" }, a: 0 },
        { s: { en: "An author's Name", ar: "Name للمؤلف" }, a: 1 },
        { s: { en: "The student number a school issues", ar: "رقم الطالب الذي تصدره المدرسة" }, a: 0 },
        { s: { en: "A member's Street Address + City", ar: "Street Address + City للعضو" }, a: 1 }
      ],
      hint: {
        en: "By design means a rule or an issuer guarantees it. By luck means nothing stops tomorrow's data from repeating it.",
        ar: "بالتصميم يعني أن قاعدة أو جهة إصدار تضمنه. وبالمصادفة يعني أن لا شيء يمنع بيانات الغد من تكراره."
      },
      explain: {
        en: "An issued number and a combination backed by a business rule are unique by design: something guarantees them. Names, name-plus-date and an address are unique only until two authors share a name or two members of one family join. A composite UID can be by design, but only while the rule behind it holds.",
        ar: "الرقم الصادر والتركيبة التي تسندها قاعدة عمل فريدان بالتصميم: شيءٌ ما يضمنهما. أمّا الأسماء، والاسم مع التاريخ، والعنوان، فهي فريدة فقط حتى يشترك مؤلفان في اسم أو ينضمّ فردان من عائلة واحدة. المعرّف المركّب قد يكون فريدًا بالتصميم، لكن ما دامت القاعدة التي وراءه قائمة."
      }
    },
    {
      id: "t2cx17", type: "trace", level: "medium",
      topics: ["t2-uid-defence", "t2-update-anomaly", "t2-foreign-key", "t2-name-as-key"],
      q: {
        en: "Two designs of the split library. In both, the author is stored with the typo \"Oliver Goldsmth\", and he has two books. The librarian corrects the spelling. How many rows must change in each design, counting both tables?",
        ar: "تصميمان للمكتبة المقسَّمة. في كليهما خُزّن المؤلف بالخطأ الإملائي «Oliver Goldsmth»، وله كتابان. يصحّح أمين المكتبة الإملاء. كم صفًّا يجب أن يتغيّر في كل تصميم، بعدّ الجدولين معًا؟"
      },
      lang: "text",
      code: "-- Design A: the author's name is the UID\nauthors (name PK)\n  Oscar Wilde | Leo Tolstoy | Oliver Goldsmth\nbooks (book_id PK, title, author_name -> authors.name)\n  BK001 A Vision                Oscar Wilde\n  BK002 War and Peace           Leo Tolstoy\n  BK003 Citizen of the World    Oliver Goldsmth\n  BK004 Androcles and the Lion  Oliver Goldsmth\n\n-- Design B: an issued Id is the UID\nauthors (author_id PK, author_name)\n  AD0001 Oscar Wilde | AD0002 Leo Tolstoy | AD0003 Oliver Goldsmth\nbooks (book_id PK, title, author_id -> authors.author_id)\n  BK003 Citizen of the World    AD0003\n  BK004 Androcles and the Lion  AD0003",
      blanks: [
        { accept: ["3", "three", "Three"], label: { en: "Design A", ar: "التصميم A" } },
        { accept: ["1", "one", "One"], label: { en: "Design B", ar: "التصميم B" } }
      ],
      hint: {
        en: "In each design, which value do the book rows store to point at the author: the name, or something that never changes?",
        ar: "في كل تصميم، أيّ قيمة تخزّنها صفوف الكتب لتشير إلى المؤلف: الاسم، أم شيئًا لا يتغيّر أبدًا؟"
      },
      explain: {
        en: "A: 3 — the author row and both Goldsmith books, because the books point at the name. Miss one and that book points at a name that no longer exists: lesson 1's update anomaly is back inside a relational design. B: 1 — only the author row; the books point at AD0003, which never changes. This is the third defence question at work: a UID must stay the same.",
        ar: "A: ‏3 — صفّ المؤلف وكتابا Goldsmith، لأن الكتب تشير إلى الاسم. انسَ واحدًا فيشير ذلك الكتاب إلى اسم لم يعد موجودًا: عاد شذوذ التحديث (update anomaly) من الدرس 1 داخل تصميم علائقي. B: ‏1 — صفّ المؤلف وحده؛ فالكتب تشير إلى AD0003 الذي لا يتغيّر أبدًا. هذا هو سؤال الدفاع الثالث عمليًّا: المعرّف الفريد يجب أن يبقى كما هو."
      },
      solution: {
        en: "Design A: 3 rows (one in authors, two in books). Design B: 1 row (in authors).",
        ar: "التصميم A: ‏3 صفوف (واحد في authors، واثنان في books). التصميم B: صفّ واحد (في authors)."
      }
    },
    {
      id: "t2cx18", type: "error", level: "medium",
      topics: ["t2-single-valued", "t2-goal-capture-once", "t2-one-instance", "t2-er-goals"],
      q: {
        en: "A classmate's logical model of the library, one item per line. Which lines break a rule of this chapter? Choose every one.",
        ar: "نموذج منطقي للمكتبة كتبه زميل، بند في كل سطر. أيّ الأسطر يخالف قاعدة من قواعد هذا الفصل؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "MEMBER            # * Id   * First Name   * Last Name\n  * Street Address   * City   o State   * ZIP\n  * Books Borrowed\nBOOK              # * Id   U * Title\n  * Author Name\nAUTHOR            # * Id   * Name\nLIBRARY           # * Id   * Name   * Address\nBOOK TRANSACTION  # * Tran Date   # * Book Id   o Type",
      answer: [3, 5, 7],
      hint: {
        en: "Look for a list where one value belongs, a fact that already has a home elsewhere, and an entity the department could list only one of.",
        ar: "ابحث عن قائمة حيث يجب أن تكون قيمة واحدة، وعن حقيقة لها مكان في موضع آخر أصلًا، وعن كيان لا يستطيع القسم أن يسرد منه إلا واحدًا."
      },
      explain: {
        en: "Line 3: Books Borrowed is a list, not single-valued, and it is already recorded by BOOK TRANSACTION. Line 5: the author's name already lives in AUTHOR; copying it into BOOK breaks goal 2. Line 7: the department has one library, and an entity with one instance does not make sense. o State is right, because Gaza addresses have no state.",
        ar: "السطر 3: Books Borrowed قائمة، ليست أحادية القيمة، وهي مسجّلة أصلًا في BOOK TRANSACTION. السطر 5: اسم المؤلف موجود في AUTHOR؛ ونسخه في BOOK يخالف الهدف 2. السطر 7: للقسم مكتبة واحدة، والكيان ذو النسخة الواحدة لا معنى له. أمّا o State فصحيح، لأن عناوين Gaza بلا ولاية."
      },
      solution: {
        code: "MEMBER            # * Id   * First Name   * Last Name\n  * Street Address   * City   o State   * ZIP\nBOOK              # * Id   U * Title\nAUTHOR            # * Id   * Name\nBOOK TRANSACTION  # * Tran Date   # * Book Id   o Type",
        en: "Remove lines 3, 5 and 7: each loan is a BOOK TRANSACTION, the author's name is reached through AUTHOR, and the one library needs no entity.",
        ar: "احذف الأسطر 3 و5 و7: كل إعارة BOOK TRANSACTION، واسم المؤلف يُوصَل إليه عبر AUTHOR، والمكتبة الواحدة لا تحتاج إلى كيان."
      }
    },
    {
      id: "t2cx19", type: "complete", level: "easy",
      topics: ["t2-birth-date-not-age", "t2-mandatory-optional", "t2-uid"],
      q: {
        en: "The library starts a youth reading club, so it must know every member's age. Complete MEMBER.",
        ar: "تبدأ المكتبة نادي قراءة للشباب، فيجب أن تعرف عمر كل عضو. أكمل MEMBER."
      },
      lang: "text",
      code: "MEMBER\n  # * Id\n  * First Name\n  * Last Name\n  ________",
      options: [
        { code: "* Age" },
        { code: "* Birth Date" },
        { code: "# * Birth Date" },
        { code: "o Birth Date" }
      ],
      answer: 1,
      hint: {
        en: "Three decisions: which attribute to store, whether every member must have it, and whether it identifies a member.",
        ar: "ثلاثة قرارات: أيّ خاصية تُخزَّن، وهل يجب أن تكون لكل عضو، وهل تعرّف العضو."
      },
      explain: {
        en: "* Birth Date. The age is derived from the birth date whenever the club asks; a stored Age would be wrong within a year. The club needs every member's age, so it is *, not o. It is not #: Id is already the UID, and two members can share a birthday.",
        ar: "* Birth Date. العمر يُشتقّ من تاريخ الميلاد متى طلبه النادي؛ أمّا Age المخزَّن فيصبح خاطئًا خلال سنة. والنادي يحتاج إلى عمر كل عضو، فهو * لا o. وليس #: فـ Id هو المعرّف الفريد أصلًا، وقد يشترك عضوان في يوم الميلاد."
      },
      solution: {
        code: "MEMBER\n  # * Id\n  * First Name\n  * Last Name\n  * Birth Date",
        en: "* Birth Date: non-volatile, mandatory, and not part of the UID.",
        ar: "* Birth Date: غير متقلّبة، وإلزامية، وليست جزءًا من المعرّف الفريد."
      }
    },
    {
      id: "t2cx20", type: "mcq", level: "easy",
      topics: ["t2-flat-file-advantages", "t2-multi-table-advantages", "t2-common-field"],
      q: {
        en: "Splitting the flat BOOK_LIST into AUTHOR and BOOK removed the redundancy. Which advantage of the flat file did the library give up in exchange?",
        ar: "تقسيم BOOK_LIST المسطّح إلى AUTHOR وBOOK أزال التكرار. أيّ ميزة من مزايا الملف المسطّح تخلّت عنها المكتبة مقابل ذلك؟"
      },
      options: [
        { en: "Security: the split tables are easier for anyone to read", ar: "الأمان: الجداول المقسَّمة أسهل على أيّ أحد أن يقرأها" },
        { en: "Consistency: two tables can now disagree with each other about an author's name", ar: "الاتّساق: صار ممكنًا أن يختلف جدولان على اسم المؤلف" },
        { en: "Sorting and filtering: only a single table can be sorted", ar: "الترتيب والتصفية: لا يمكن ترتيب إلا جدول واحد" },
        { en: "All records in one place: \"who wrote this title?\" now means following a common field from one table to another", ar: "كل السجلّات في مكان واحد: سؤال «من كتب هذا العنوان؟» صار يعني تتبّع حقل مشترك من جدول إلى آخر" }
      ],
      answer: 3,
      hint: {
        en: "Which item on the flat file's list of advantages describes where the data lives?",
        ar: "أيّ بند في قائمة مزايا الملف المسطّح يصف مكان وجود البيانات؟"
      },
      explain: {
        en: "In the flat file the title and the author's name sat on one line; now the answer is split across two tables joined by AUTHOR_ID. That is the real price. Security and consistency are what the relational design gains, not loses: the name is stored once, so it cannot disagree with itself. Every table can still be sorted and filtered.",
        ar: "في الملف المسطّح كان العنوان واسم المؤلف في سطر واحد؛ أمّا الآن فالإجابة مقسومة على جدولين يربطهما AUTHOR_ID. هذا هو الثمن الحقيقي. الأمان والاتّساق ممّا يكسبه التصميم العلائقي لا ممّا يخسره: الاسم مخزَّن مرّة واحدة، فلا يمكن أن يختلف مع نفسه. وكل جدول ما زال يمكن ترتيبه وتصفيته."
      }
    },
    {
      id: "t2cx21", type: "mcq", level: "medium",
      topics: ["t2-composite-uid", "t2-uid-defence", "t2-mandatory-optional", "t2-reading-erd"],
      q: {
        en: "A classmate gives the H.R. LOCATION this UID in place of the slides' # Location ID. What is the strongest objection?",
        ar: "يعطي زميلٌ الكيان LOCATION في الموارد البشرية هذا المعرّف الفريد بدل # Location ID الموجود في الشرائح. ما أقوى اعتراض عليه؟"
      },
      lang: "text",
      code: "LOCATION\n  # * Street Address\n  # * City\n  # o State Province\n  * Postal Code",
      options: [
        { en: "A composite UID may have two parts at most", ar: "المعرّف المركّب لا يجوز أن يزيد على جزأين" },
        { en: "Street Address is a character string, and a UID must be a number", ar: "Street Address سلسلة حروف، والمعرّف الفريد يجب أن يكون رقمًا" },
        { en: "Part of the UID is marked o: a location with no state province would have no complete identifier, and street names can be renamed", ar: "جزء من المعرّف معلَّم بـ o: الموقع الذي لا ولاية له سيبقى بلا معرّف كامل، وأسماء الشوارع قد تتغيّر" },
        { en: "Nothing: the three together are unique for every building today", ar: "لا شيء: الثلاثة معًا فريدة لكل مبنى اليوم" }
      ],
      answer: 2,
      hint: {
        en: "Run the three defence questions on every part of the UID, not just on the combination.",
        ar: "طبّق أسئلة الدفاع الثلاثة على كل جزء من المعرّف، لا على التركيبة وحدها."
      },
      explain: {
        en: "Every part of a UID must have a value, which is why the slides always draw # *. With o State Province, a location in Gaza, where addresses have no state, could not be fully identified. A street can also be renamed, and a UID must not change. A composite UID may have any number of parts, and nothing says it must be a number; unique today is not enough.",
        ar: "كل جزء من المعرّف الفريد يجب أن تكون له قيمة، ولهذا ترسم الشرائح دائمًا # *. ومع o State Province لا يمكن تعريف موقع في Gaza تعريفًا كاملًا، لأن عناوينها بلا ولاية. والشارع قد يُعاد تسميته، والمعرّف يجب ألّا يتغيّر. المعرّف المركّب قد يضمّ أيّ عدد من الأجزاء، ولا شيء يقول إنه يجب أن يكون رقمًا؛ وكونه فريدًا اليوم لا يكفي."
      }
    },
    {
      id: "t2cx22", type: "write", level: "hard",
      topics: ["t2-physical-steps", "t2-composite-uid", "t2-uid-as-primary-key", "t2-foreign-key", "t2-not-null"],
      q: {
        en: "Write book_transactions for the SQL track from Matt's physical model: tran_date (DATE) and books_id (VARCHAR(15)) together form the primary key; members_id (NUMBER) is required and refers to members(id); books_id refers to books(id); type (VARCHAR(10)) is optional. members and books already exist. One CREATE TABLE statement, ending with a semicolon.",
        ar: "اكتب الجدول book_transactions لمسار SQL من النموذج الفيزيائي لمات: tran_date ‏(DATE) وbooks_id ‏(VARCHAR(15)) يكوّنان معًا المفتاح الأساسي؛ وmembers_id ‏(NUMBER) مطلوب ويشير إلى members(id)؛ وbooks_id يشير إلى books(id)؛ وtype ‏(VARCHAR(10)) اختياري. الجدولان members وbooks موجودان أصلًا. جملة CREATE TABLE واحدة، تنتهي بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 9,
      starter: "CREATE TABLE book_transactions (\n\n);\n",
      checks: [
        { re: "PRIMARY\\s+KEY\\s*\\(\\s*(tran_date\\s*,\\s*books_id|books_id\\s*,\\s*tran_date)\\s*\\)", flags: "i",
          label: { en: "one primary key on the pair (tran_date, books_id)", ar: "مفتاح أساسي واحد على الزوج (tran_date, books_id)" } },
        { re: "\\btran_date\\s+DATE\\b", flags: "i",
          label: { en: "tran_date is a DATE", ar: "tran_date من نوع DATE" } },
        { re: "(\\bmembers_id\\b[^,;]*REFERENCES\\s+members\\s*\\(\\s*id\\s*\\)|FOREIGN\\s+KEY\\s*\\(\\s*members_id\\s*\\)\\s*REFERENCES\\s+members\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "members_id references members(id)", ar: "members_id يشير إلى members(id)" } },
        { re: "\\bmembers_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "members_id is NOT NULL", ar: "members_id من نوع NOT NULL" } },
        { re: "(\\bbooks_id\\b[^,;]*REFERENCES\\s+books\\s*\\(\\s*id\\s*\\)|FOREIGN\\s+KEY\\s*\\(\\s*books_id\\s*\\)\\s*REFERENCES\\s+books\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "books_id references books(id)", ar: "books_id يشير إلى books(id)" } }
      ],
      forbid: [
        { re: "\\b(tran_date|books_id)\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bPRIMARY\\s+KEY", flags: "i",
          label: { en: "A table has one primary key: write the pair once, as PRIMARY KEY (tran_date, books_id), not PRIMARY KEY on each column", ar: "للجدول مفتاح أساسي واحد: اكتب الزوج مرّة واحدة، PRIMARY KEY (tran_date, books_id)، لا PRIMARY KEY على كل عمود" } },
        { re: "\\btype\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "Type is o in the logical model: leave it nullable", ar: "Type معلَّمة o في النموذج المنطقي: اتركها قابلة لـ null" } }
      ],
      hint: {
        en: "Lesson 6's composite UID becomes one table-level PRIMARY KEY of two columns. Lesson 3's relationships become REFERENCES. Lesson 5's * becomes NOT NULL.",
        ar: "المعرّف المركّب من الدرس 6 يصبح PRIMARY KEY واحدًا على مستوى الجدول من عمودين. والعلاقات من الدرس 3 تصبح REFERENCES. وعلامة * من الدرس 5 تصبح NOT NULL."
      },
      explain: {
        en: "The composite UID # * Tran Date, # * Book Id is one key, so it is written once, after the columns, as PRIMARY KEY (tran_date, books_id). Writing PRIMARY KEY on each column would claim two separate keys, the misreading lesson 6 warned about. books_id is part of the key and a foreign key, PF* in the slides; members_id is a foreign key only. Type stays nullable because it is o.",
        ar: "المعرّف المركّب # * Tran Date و# * Book Id مفتاح واحد، فيُكتب مرّة واحدة بعد الأعمدة: PRIMARY KEY (tran_date, books_id). وكتابة PRIMARY KEY على كل عمود تدّعي مفتاحين منفصلين، وهي القراءة الخاطئة التي حذّر منها الدرس 6. وbooks_id جزء من المفتاح ومفتاح أجنبي معًا، PF* في الشرائح؛ أمّا members_id فمفتاح أجنبي فقط. ويبقى Type قابلًا لـ null لأنه o."
      },
      solution: {
        code: "CREATE TABLE book_transactions (\n  tran_date  DATE        NOT NULL,\n  type       VARCHAR(10),\n  members_id NUMBER      NOT NULL REFERENCES members(id),\n  books_id   VARCHAR(15) NOT NULL REFERENCES books(id),\n  PRIMARY KEY (tran_date, books_id)\n);",
        en: "Run in alasql after members (1, 2) and books (BK001–BK003): three loans on 1 and 5 March are accepted; a second BK002 loan on 5 March is refused by the primary key; a loan for member 9 is refused with Foreign key \"9\" not found in table \"members\".",
        ar: "شُغّلت في alasql بعد members ‏(1، 2) وbooks ‏(BK001–BK003): قُبلت ثلاث إعارات في 1 و5 March؛ ورُفضت إعارة ثانية لـ BK002 في 5 March بسبب المفتاح الأساسي؛ ورُفضت إعارة للعضو 9 برسالة Foreign key \"9\" not found in table \"members\"."
      }
    },
    {
      id: "t2cx23", type: "match", level: "easy",
      topics: ["t2-data-redundancy", "t2-unique-key", "t2-optionality-context", "t2-dog-question", "t2-birth-date-not-age", "t2-student-number"],
      q: {
        en: "Six examples from the lecturer's slides, from six different lessons. Match each to the rule it teaches.",
        ar: "ستة أمثلة من شرائح المحاضِرة، من ستة دروس مختلفة. صِل كلًّا منها بالقاعدة التي يعلّمها."
      },
      leftHead: { en: "Slide example", ar: "مثال الشريحة" },
      rightHead: { en: "The rule it teaches", ar: "القاعدة التي يعلّمها" },
      pairs: [
        { l: { en: "AD0003 Oliver Goldsmith appears in two rows of the flat file", ar: "AD0003 Oliver Goldsmith يظهر في صفّين من الملف المسطّح" },
          r: { en: "A single table forces one fact to be stored more than once", ar: "الجدول الواحد يفرض تخزين الحقيقة الواحدة أكثر من مرّة" } },
        { l: { en: "PAYROLL_ID in the EMPLOYEES table", ar: "PAYROLL_ID في جدول EMPLOYEES" },
          r: { en: "A column can refuse duplicates without being the primary key", ar: "العمود قد يرفض التكرار دون أن يكون المفتاح الأساسي" } },
        { l: { en: "Email: mandatory for EMPLOYEE in an email application, optional for CUSTOMER in an online catalog", ar: "البريد الإلكتروني: إلزامي لـ EMPLOYEE في تطبيق بريد، واختياري لـ CUSTOMER في كتالوج على الإنترنت" },
          r: { en: "The business decides whether an attribute is mandatory", ar: "العمل هو الذي يقرّر هل الخاصية إلزامية" } },
        { l: { en: "A dog breeder's DOG has the instances TERRIER, POODLE, LABRADOR", ar: "الكيان DOG عند مربّي الكلاب له النسخ TERRIER وPOODLE وLABRADOR" },
          r: { en: "Whether something is an entity or an instance depends on the business", ar: "كون الشيء كيانًا أو نسخة يعتمد على العمل" } },
        { l: { en: "Use birth date instead of age", ar: "استعمل تاريخ الميلاد بدل العمر" },
          r: { en: "Prefer the non-volatile attribute", ar: "فضّل الخاصية غير المتقلّبة" } },
        { l: { en: "Two students can share a name and a date of birth", ar: "قد يشترك طالبان في الاسم وتاريخ الميلاد" },
          r: { en: "Some entities need an artificial UID", ar: "بعض الكيانات تحتاج إلى معرّف فريد اصطناعي" } }
      ],
      hint: {
        en: "Each example was the slides' own illustration of one rule. Ask what would go wrong if the example were ignored.",
        ar: "كل مثال كان توضيح الشرائح نفسها لقاعدة واحدة. اسأل: ما الذي سيفسد لو تجاهلنا المثال؟"
      },
      explain: {
        en: "Goldsmith twice is lesson 1's redundancy; PAYROLL_ID is lesson 2's unique key; the email pair is lesson 5's \"the business decides\"; the breeder is lesson 4's DOG question; birth date is lesson 5's volatile rule; the two students are lesson 6's reason for a student number. One chapter, six rules, each anchored to an example you can retell.",
        ar: "Goldsmith مرّتين هو تكرار الدرس 1؛ وPAYROLL_ID هو المفتاح الفريد في الدرس 2؛ وزوج البريد هو «العمل يقرّر» في الدرس 5؛ والمربّي هو سؤال DOG في الدرس 4؛ وتاريخ الميلاد قاعدة التقلّب في الدرس 5؛ والطالبان هما سبب رقم الطالب في الدرس 6. فصل واحد، ست قواعد، كلٌّ منها مربوطة بمثال تستطيع أن تعيد حكايته."
      }
    },
    {
      id: "t2cx24", type: "multi", level: "medium",
      topics: ["t2-primary-key", "t2-referential-check", "t2-delete-anomaly", "t2-insert-anomaly"],
      q: {
        en: "Matt splits the flat BOOK_LIST into authors(author_id, author_name) and books(book_id, title, author_id), but forgets to declare any key: no PRIMARY KEY, no REFERENCES. Which problems can still happen? Choose every one.",
        ar: "يقسّم مات BOOK_LIST المسطّح إلى authors(author_id, author_name) وbooks(book_id, title, author_id)، لكنه ينسى أن يعرّف أيّ مفتاح: لا PRIMARY KEY ولا REFERENCES. أيّ المشكلات ما زال ممكنًا أن تحدث؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Two rows in authors both say AD0003, one \"Oliver Goldsmith\" and one \"Oliver Goldsmth\"", ar: "صفّان في authors كلاهما AD0003، أحدهما «Oliver Goldsmith» والآخر «Oliver Goldsmth»" },
        { en: "Deleting War and Peace erases the only record of Leo Tolstoy's author code", ar: "حذف War and Peace يمحو السجلّ الوحيد لرمز المؤلف Leo Tolstoy" },
        { en: "A book is saved with author_id AD0009, an author who does not exist", ar: "يُحفظ كتاب برقم مؤلف AD0009، لمؤلف غير موجود" },
        { en: "A new author cannot be stored until one of their books arrives", ar: "لا يمكن تخزين مؤلف جديد حتى يصل أحد كتبه" }
      ],
      answer: [0, 2],
      hint: {
        en: "The split itself cures the three anomalies. Then ask what each missing key was there to guard.",
        ar: "التقسيم نفسه يعالج الشذوذات الثلاثة. ثم اسأل: ماذا كان كل مفتاح مفقود يحرس؟"
      },
      explain: {
        en: "The split is what cures the anomalies: Tolstoy's author row survives the deletion of his book, and an author can be stored before any book arrives. The keys guard the split. Without a primary key, a second AD0003 row can bring back two disagreeing copies of one fact. Without REFERENCES, a book can point at an author who does not exist.",
        ar: "التقسيم هو الذي يعالج الشذوذات: صفّ المؤلف Tolstoy ينجو من حذف كتابه، ويمكن تخزين المؤلف قبل وصول أيّ كتاب. أمّا المفاتيح فتحرس التقسيم. بلا مفتاح أساسي، يمكن لصفّ AD0003 ثانٍ أن يعيد نسختين متعارضتين من حقيقة واحدة. وبلا REFERENCES، يمكن لكتاب أن يشير إلى مؤلف غير موجود."
      }
    }
  ]
};
