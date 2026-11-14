/* Question bank: T2 chapter test B -- Applied. A scenario in, a model or a statement out. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-exam-b"] = {
  title: { en: "Chapter Test B — Applied", ar: "اختبار الفصل B — التطبيق" },
  intro: {
    en: "24 questions that make you do the work: split a sheet that stores facts twice, give a table its keys, decide which model a request needs, find the entities in a business's own words, mark each attribute, choose and defend a UID, and turn the H.R. ERD into CREATE TABLE statements. Most start from a scenario, the library's or the H.R. department's. Allow about 40 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا تجعلك تقوم بالعمل بنفسك: تقسّم ورقة تخزّن الحقائق مرّتين، وتعطي الجدول مفاتيحه، وتقرّر أيّ نموذج يحتاجه الطلب، وتستخرج الكيانات من كلام صاحب العمل نفسه، وتعلّم كل خاصية، وتختار معرّفًا فريدًا وتدافع عنه، وتحوّل مخطّط الموارد البشرية (ERD) إلى جمل CREATE TABLE. يبدأ معظمها من سيناريو، سيناريو المكتبة أو سيناريو قسم الموارد البشرية. خصّص نحو 40 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== lesson 1 · one table is not enough */
    {
      id: "t2bx01", type: "mcq", level: "hard",
      topics: ["t2-one-fact-one-place", "t2-data-redundancy", "t2-multi-table-advantages"],
      q: {
        en: "The front desk's sheet has grown into LOAN_SHEET(MEMBER_ID, MEMBER_NAME, CITY, BOOK_ID, TITLE, AUTHOR_NAME, LOAN_DATE). Sara has borrowed both of Goldsmith's books. Which set of tables stores every fact exactly once?",
        ar: "كبرت ورقة مكتب الاستقبال فصارت LOAN_SHEET(MEMBER_ID, MEMBER_NAME, CITY, BOOK_ID, TITLE, AUTHOR_NAME, LOAN_DATE). وقد استعارت Sara كتابَي Goldsmith كليهما. أيّ مجموعة من الجداول تخزّن كل حقيقة مرّة واحدة بالضبط؟"
      },
      options: [
        { en: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY) and LOAN(MEMBER_ID, BOOK_ID, TITLE, AUTHOR_NAME, LOAN_DATE)",
          ar: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY) وLOAN(MEMBER_ID, BOOK_ID, TITLE, AUTHOR_NAME, LOAN_DATE)" },
        { en: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY), BOOK(BOOK_ID, TITLE, AUTHOR_NAME) and LOAN(MEMBER_ID, BOOK_ID, LOAN_DATE)",
          ar: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY) وBOOK(BOOK_ID, TITLE, AUTHOR_NAME) وLOAN(MEMBER_ID, BOOK_ID, LOAN_DATE)" },
        { en: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY), AUTHOR(AUTHOR_ID, AUTHOR_NAME), BOOK(BOOK_ID, TITLE, AUTHOR_ID) and LOAN(MEMBER_ID, BOOK_ID, LOAN_DATE)",
          ar: "MEMBER(MEMBER_ID, MEMBER_NAME, CITY) وAUTHOR(AUTHOR_ID, AUTHOR_NAME) وBOOK(BOOK_ID, TITLE, AUTHOR_ID) وLOAN(MEMBER_ID, BOOK_ID, LOAN_DATE)" },
        { en: "Seven tables, one for each column of the sheet, so that no column shares a table with another",
          ar: "سبعة جداول، واحد لكل عمود في الورقة، فلا يشارك عمودٌ عمودًا آخر في جدول" }
      ],
      answer: 2,
      hint: {
        en: "Ask of each table: what is one row about? Then look for any name or title that would be written again when the same author or book turns up in a second row.",
        ar: "اسأل عن كل جدول: عن أيّ شيء يتحدّث الصفّ الواحد؟ ثم ابحث عن أيّ اسم أو عنوان سيُكتب من جديد حين يظهر المؤلف نفسه أو الكتاب نفسه في صفّ ثانٍ."
      },
      explain: {
        en: "The sheet describes four things — members, authors, books and loans — so it needs four tables joined by common fields. The two-table split still copies the title and author into every loan. The three-table split is the tempting one: it looks finished, yet BOOK still writes \"Oliver Goldsmith\" once per book, lesson 1's original redundancy. One table per column is not a split at all: nothing would say which city belongs to which member.",
        ar: "الورقة تصف أربعة أشياء — الأعضاء والمؤلفين والكتب والإعارات — فتحتاج إلى أربعة جداول تربطها حقول مشتركة. التقسيم إلى جدولين ما زال ينسخ العنوان والمؤلف في كل إعارة. أمّا التقسيم إلى ثلاثة فهو المغري: يبدو مكتملًا، لكن BOOK ما زال يكتب «Oliver Goldsmith» مرّة لكل كتاب، وهو التكرار الأصلي في الدرس 1. وجدول لكل عمود ليس تقسيمًا أصلًا: لن يبقى ما يقول أيّ مدينة تخصّ أيّ عضو."
      }
    },
    {
      id: "t2bx02", type: "contrast", level: "medium",
      topics: ["t2-flat-file-choice", "t2-multi-user-access", "t2-flat-file-disadvantages"],
      q: {
        en: "Six people ask whether they need more than a flat file. Sort each case.",
        ar: "ستة أشخاص يسألون هل يحتاجون إلى أكثر من ملف مسطّح. صنّف كل حالة."
      },
      concepts: [
        { en: "A flat file is enough", ar: "الملف المسطّح يكفي" },
        { en: "It needs a relational database", ar: "يحتاج إلى قاعدة بيانات علائقية" }
      ],
      rows: [
        { s: { en: "A student lists the 60 CDs in their own collection, alone, on one laptop", ar: "طالب يسجّل الأقراص الستين في مجموعته الخاصة، وحده، على حاسوب محمول واحد" }, a: 0 },
        { s: { en: "The department's five librarians all record loans at the same time during the day", ar: "أمناء المكتبة الخمسة في القسم يسجّلون الإعارات كلهم في الوقت نفسه خلال اليوم" }, a: 1 },
        { s: { en: "A home user keeps family recipes, sorted by name and filtered by dish", ar: "مستخدم في البيت يحفظ وصفات العائلة، مرتّبة بالاسم ومصفّاة حسب الطبق" }, a: 0 },
        { s: { en: "The H.R. department stores salaries that only some staff may see", ar: "قسم الموارد البشرية يخزّن رواتب لا يحقّ إلا لبعض الموظفين رؤيتها" }, a: 1 },
        { s: { en: "The loan records must be restored if the disk breaks", ar: "سجلّات الإعارة يجب أن تُستعاد إذا تعطّل القرص" }, a: 1 },
        { s: { en: "A small shop's owner prints one price list, sorted by price, from one table", ar: "صاحب دكّان صغير يطبع قائمة أسعار واحدة، مرتّبة بالسعر، من جدول واحد" }, a: 0 }
      ],
      hint: {
        en: "The flat file's advantages fit small, single-user lists. Look in each case for several users at once, security, or backup and recovery.",
        ar: "مزايا الملف المسطّح تناسب القوائم الصغيرة ذات المستخدم الواحد. ابحث في كل حالة عن عدّة مستخدمين في آن واحد، أو عن الأمان، أو عن النسخ الاحتياطي والاستعادة."
      },
      explain: {
        en: "A flat file is easy, cheap and simple to sort, which suits a private CD list, a recipe file or one price list. It has no multi-user access, little security and no backup and recovery, so the librarians, the salaries and the must-survive records all need a database. Size is not the test: the loan list is small, but five people write to it at once.",
        ar: "الملف المسطّح سهل ورخيص وترتيبه بسيط، وهذا يناسب قائمة أقراص خاصة أو ملف وصفات أو قائمة أسعار واحدة. لكنه بلا وصول متعدّد المستخدمين (multi-user access)، وأمانه قليل، وبلا نسخ احتياطي واستعادة، فالأمناء والرواتب والسجلّات التي يجب أن تنجو كلها تحتاج إلى قاعدة بيانات. والحجم ليس هو المعيار: قائمة الإعارات صغيرة، لكن خمسة أشخاص يكتبون فيها معًا."
      }
    },
    {
      id: "t2bx03", type: "output", level: "easy",
      topics: ["t2-delete-anomaly", "t2-one-fact-one-place"],
      q: {
        en: "The library now has the split design: authors(author_id, author_name) with AD0001–AD0004, and books(book_id, title, author_id) with BK001–BK004. The only copy of War and Peace is lost. What does the query return?",
        ar: "صار للمكتبة التصميم المقسَّم: authors(author_id, author_name) فيه AD0001–AD0004، وbooks(book_id, title, author_id) فيه BK001–BK004. ضاعت النسخة الوحيدة من War and Peace. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "DELETE FROM books\nWHERE title = 'War and Peace';\n\nSELECT author_name\nFROM authors\nWHERE author_id = 'AD0002';",
      blanks: [{ accept: ["Leo Tolstoy", "leo tolstoy"], label: { en: "author_name", ar: "author_name" } }],
      hint: {
        en: "Which table did the DELETE touch, and which table does the SELECT read?",
        ar: "أيّ جدول لمسه الأمر DELETE، وأيّ جدول يقرأ منه SELECT؟"
      },
      explain: {
        en: "Leo Tolstoy. The DELETE removed one row of books; the author lives in his own row of authors, which nothing touched. In the flat BOOK_LIST the same loss erased AD0002 completely — the delete anomaly. Giving each thing its own table is what makes deleting a book a fact about books only.",
        ar: "Leo Tolstoy. حذف DELETE صفًّا واحدًا من books؛ أمّا المؤلف فيعيش في صفّه الخاص في authors، ولم يلمسه شيء. في BOOK_LIST المسطّحة محا الفقدُ نفسه AD0002 كليًّا — وهذا شذوذ الحذف (delete anomaly). إعطاء كل شيء جدوله الخاص هو ما يجعل حذف كتاب حقيقة عن الكتب وحدها."
      },
      solution: {
        out: "author_name\nLeo Tolstoy",
        en: "Run in alasql against the four authors and four books: the DELETE reports 1 row, and the SELECT returns one row, Leo Tolstoy.",
        ar: "شُغّل في alasql على المؤلفين الأربعة والكتب الأربعة: يحذف DELETE صفًّا واحدًا، ويُرجع SELECT صفًّا واحدًا هو Leo Tolstoy."
      }
    },

    /* ==================================================== lesson 2 · the relational answer */
    {
      id: "t2bx04", type: "match", level: "easy",
      topics: ["t2-pk-fk-uk", "t2-primary-key", "t2-foreign-key", "t2-unique-key"],
      q: {
        en: "The library's new loans table: every loan gets a loan number; it records the member and the book; the desk prints a receipt whose number is never reused; and it keeps the date. Match each column to the part it plays.",
        ar: "جدول الإعارات الجديد في المكتبة: كل إعارة تأخذ رقم إعارة؛ ويسجّل العضو والكتاب؛ ويطبع المكتب إيصالًا لا يُعاد استعمال رقمه أبدًا؛ ويحفظ التاريخ. صِل كل عمود بالدور الذي يؤدّيه."
      },
      leftHead: { en: "Column of loans", ar: "عمود في loans" },
      rightHead: { en: "Its part", ar: "دوره" },
      pairs: [
        { l: { en: "<code>loan_id</code>", ar: "<code>loan_id</code>" },
          r: { en: "Primary key: picks out exactly one loan", ar: "مفتاح أساسي (primary key): يحدّد إعارة واحدة بالضبط" } },
        { l: { en: "<code>member_id</code>", ar: "<code>member_id</code>" },
          r: { en: "Foreign key: must match a row of members", ar: "مفتاح أجنبي (foreign key): يجب أن يطابق صفًّا في members" } },
        { l: { en: "<code>book_id</code>", ar: "<code>book_id</code>" },
          r: { en: "Foreign key: must match a row of books", ar: "مفتاح أجنبي: يجب أن يطابق صفًّا في books" } },
        { l: { en: "<code>receipt_no</code>", ar: "<code>receipt_no</code>" },
          r: { en: "Unique key: never repeated, but not the row's identifier", ar: "مفتاح فريد (unique key): لا يتكرّر أبدًا، لكنه ليس معرّف الصفّ" } },
        { l: { en: "<code>loan_date</code>", ar: "<code>loan_date</code>" },
          r: { en: "No key: many loans share a date", ar: "ليس مفتاحًا: كثير من الإعارات تشترك في تاريخ" } }
      ],
      hint: {
        en: "One column identifies the row. Columns that point at another table's primary key are foreign keys. A column that must be unique but is not the identifier is the third kind.",
        ar: "عمود واحد يعرّف الصفّ. والأعمدة التي تشير إلى المفتاح الأساسي لجدول آخر مفاتيح أجنبية. والعمود الذي يجب أن يكون فريدًا وليس هو المعرّف هو النوع الثالث."
      },
      explain: {
        en: "loan_id is the primary key. member_id and book_id each hold another table's primary key, so each is a foreign key. receipt_no plays the part PAYROLL_ID plays in the slides' EMPLOYEES: unique, refused if repeated, but not the key the table is identified by. loan_date is an ordinary column — two loans on 5 March are normal.",
        ar: "loan_id هو المفتاح الأساسي. وكلٌّ من member_id وbook_id يحمل المفتاح الأساسي لجدول آخر، فكلٌّ منهما مفتاح أجنبي. أمّا receipt_no فيؤدّي الدور الذي يؤدّيه PAYROLL_ID في جدول EMPLOYEES في الشرائح: فريد، ويُرفض إن تكرّر، لكنه ليس المفتاح الذي يُعرَّف به الجدول. وloan_date عمود عادي — إعارتان في 5 March أمر طبيعي."
      }
    },
    {
      id: "t2bx05", type: "ordercode", level: "medium",
      topics: ["t2-foreign-key", "t2-referential-check", "t2-reading-erd"],
      q: {
        en: "Matt builds the location chain of the H.R. ERD: an EMPLOYEE works in a DEPARTMENT, located in a LOCATION, situated in a COUNTRY, part of a REGION. Each foreign key is already written. Put the five statements in the only order that runs from an empty database.",
        ar: "يبني Matt سلسلة المواقع في مخطّط الموارد البشرية: EMPLOYEE يعمل في DEPARTMENT، الموجود في LOCATION، الواقع في COUNTRY، الذي هو جزء من REGION. كل مفتاح أجنبي مكتوب مسبقًا. رتّب الجمل الخمس بالترتيب الوحيد الذي يعمل بدءًا من قاعدة بيانات فارغة."
      },
      lang: "sql",
      items: [
        { code: "CREATE TABLE regions (region_id NUMBER PRIMARY KEY, region_name VARCHAR(25) NOT NULL);" },
        { code: "CREATE TABLE countries (country_id CHAR(2) PRIMARY KEY, country_name VARCHAR(40) NOT NULL, region_id NUMBER REFERENCES regions(region_id));" },
        { code: "CREATE TABLE locations (location_id NUMBER PRIMARY KEY, city VARCHAR(30) NOT NULL, country_id CHAR(2) REFERENCES countries(country_id));" },
        { code: "CREATE TABLE departments (department_id NUMBER PRIMARY KEY, name VARCHAR(30) NOT NULL, location_id NUMBER REFERENCES locations(location_id));" },
        { code: "CREATE TABLE employees (employee_id NUMBER PRIMARY KEY, last_name VARCHAR(25) NOT NULL, department_id NUMBER REFERENCES departments(department_id));" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "A REFERENCES clause can only point at a table that already exists. Find the table that refers to nothing.",
        ar: "عبارة REFERENCES لا تستطيع أن تشير إلا إلى جدول موجود مسبقًا. ابحث عن الجدول الذي لا يشير إلى أيّ شيء."
      },
      explain: {
        en: "regions refers to nothing, so it comes first; each later table refers only to the one before it. Run countries before regions and alasql fails at once, because the referenced table is not there. The rule to carry: create the table a foreign key points at before the table that holds the foreign key.",
        ar: "الجدول regions لا يشير إلى شيء، فيأتي أوّلًا؛ وكل جدول بعده يشير فقط إلى الذي قبله. شغّل countries قبل regions فيفشل alasql فورًا، لأن الجدول المشار إليه غير موجود. القاعدة التي تحملها معك: أنشئ الجدول الذي يشير إليه المفتاح الأجنبي قبل الجدول الذي يحمل ذلك المفتاح."
      },
      solution: {
        en: "Run in alasql in this order, all five succeed; run countries first and it fails because regions does not exist yet.",
        ar: "شُغّلت في alasql بهذا الترتيب فنجحت الخمس كلها؛ وتشغيل countries أوّلًا يفشل لأن regions غير موجود بعد."
      }
    },
    {
      id: "t2bx06", type: "tf", level: "easy",
      topics: ["t2-unique-key", "t2-uid-vs-unique"],
      q: {
        en: "The library decides that every member must also give a national ID number, and no two members may share one. member_id is already the primary key, so the members table has no way left to refuse a repeated national ID.",
        ar: "تقرّر المكتبة أن يقدّم كل عضو أيضًا رقم هوية وطنية، ولا يجوز لعضوين أن يشتركا فيه. وmember_id هو المفتاح الأساسي أصلًا، لذا لم تبقَ لجدول members وسيلة لرفض رقم هوية مكرّر."
      },
      truth: false,
      hint: {
        en: "Recall the third kind of key in the slides' EMPLOYEES table, the one on PAYROLL_ID.",
        ar: "تذكّر النوع الثالث من المفاتيح في جدول EMPLOYEES في الشرائح، المفتاح على PAYROLL_ID."
      },
      explain: {
        en: "False. A table has one primary key, but it can have unique keys as well. Declare national_id UNIQUE NOT NULL and a repeated number is refused, just as EMPLOYEES refuses a repeated PAYROLL_ID. member_id stays the identifier; the national ID is a second rule of uniqueness beside it.",
        ar: "خطأ. للجدول مفتاح أساسي واحد، لكن يمكن أن تكون له مفاتيح فريدة (unique keys) أيضًا. عرّف national_id بأنه UNIQUE NOT NULL فيُرفض الرقم المكرّر، تمامًا كما يرفض EMPLOYEES رقم PAYROLL_ID مكرّرًا. يبقى member_id هو المعرّف، ورقم الهوية قاعدة تفرّد ثانية إلى جانبه."
      }
    },

    /* ==================================================== lesson 3 · three models */
    {
      id: "t2bx07", type: "mcq", level: "medium",
      topics: ["t2-conceptual-scope", "t2-conceptual-model", "t2-logical-model"],
      q: {
        en: "Matt shows the H.R. manager his conceptual model: EMPLOYEE, DEPARTMENT, JOB, LOCATION, COUNTRY and REGION, with the lines between them. The manager asks: \"Where is the salary? I told you we track it.\" What is the right answer?",
        ar: "يعرض Matt على مدير الموارد البشرية نموذجه المفاهيمي: EMPLOYEE وDEPARTMENT وJOB وLOCATION وCOUNTRY وREGION، والخطوط بينها. فيسأل المدير: «أين الراتب؟ أخبرتك أننا نتابعه.» ما الإجابة الصحيحة؟"
      },
      options: [
        { en: "It was missed: a conceptual model must list every attribute the business tracks", ar: "لقد سقط سهوًا: النموذج المفاهيمي يجب أن يسرد كل خاصية يتابعها العمل" },
        { en: "It comes in the logical model: a conceptual model shows entities and relationships, and does not specify attributes", ar: "يأتي في النموذج المنطقي: النموذج المفاهيمي يُظهر الكيانات والعلاقات، ولا يحدّد الخصائص" },
        { en: "It appears only in the physical model, as a NUMBER column; the logical model has no attributes either", ar: "لا يظهر إلا في النموذج المادي، عمودًا من نوع NUMBER؛ والنموذج المنطقي بلا خصائص أيضًا" },
        { en: "Salary should be drawn as an entity of its own on the conceptual model, linked to EMPLOYEE", ar: "يجب أن يُرسم الراتب كيانًا مستقلًّا في النموذج المفاهيمي، مرتبطًا بـ EMPLOYEE" }
      ],
      answer: 1,
      hint: {
        en: "Recall the slide that lists what a conceptual model identifies and what it does not specify.",
        ar: "تذكّر الشريحة التي تذكر ما يحدّده النموذج المفاهيمي وما لا يحدّده."
      },
      explain: {
        en: "The conceptual model identifies entities and relationships only; attributes and UIDs are specified in the logical model, which is where * Salary appears. Nothing was missed, so goal 1 is not broken. The physical model does not introduce salary either — it only gives the attribute a column and a type. Salary is a fact about an employee, an attribute, not a thing with facts of its own.",
        ar: "النموذج المفاهيمي يحدّد الكيانات والعلاقات فقط؛ أمّا الخصائص والمعرّفات الفريدة فتُحدَّد في النموذج المنطقي، وهناك يظهر * Salary. لم يسقط شيء، فالهدف 1 غير مكسور. والنموذج المادي لا يقدّم الراتب لأوّل مرّة أيضًا — بل يعطي الخاصية عمودًا ونوعًا فقط. والراتب حقيقة عن موظّف، أي خاصية، لا شيء له حقائقه الخاصة."
      }
    },
    {
      id: "t2bx08", type: "write", level: "medium",
      topics: ["t2-physical-steps", "t2-logical-marks", "t2-uid-as-primary-key"],
      q: {
        en: "The H.R. ERD's JOB box reads: # Job ID, * Title, * Max Salary, * Min Salary. Write its physical model for the SQL track: one CREATE TABLE jobs statement with the columns job_id, title, max_salary and min_salary, job_id the primary key and every * attribute NOT NULL. End it with a semicolon.",
        ar: "صندوق JOB في مخطّط الموارد البشرية: # Job ID و* Title و* Max Salary و* Min Salary. اكتب نموذجه المادي لمسار SQL: جملة CREATE TABLE jobs واحدة بالأعمدة job_id وtitle وmax_salary وmin_salary، يكون فيها job_id المفتاح الأساسي، وكل خاصية * من نوع NOT NULL. أنهِها بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 7,
      starter: "CREATE TABLE jobs (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+jobs\\s*\\([^;]*(\\bjob_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*job_id\\s*\\))", flags: "i",
          label: { en: "job_id is the primary key", ar: "job_id هو المفتاح الأساسي" } },
        { re: "CREATE\\s+TABLE\\s+jobs\\s*\\([^;]*\\btitle\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "title is NOT NULL", ar: "title من نوع NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+jobs\\s*\\([^;]*\\bmax_salary\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "max_salary is NOT NULL", ar: "max_salary من نوع NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+jobs\\s*\\([^;]*\\bmin_salary\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "min_salary is NOT NULL", ar: "min_salary من نوع NOT NULL" } }
      ],
      forbid: [
        { re: "\\b(max|min)_salary\\s+(VARCHAR2?|CHAR)\\b", flags: "i",
          label: { en: "A salary is a number: give max_salary and min_salary a numeric type", ar: "الراتب رقم: أعطِ max_salary وmin_salary نوعًا رقميًّا" } }
      ],
      hint: {
        en: "The slides' steps: the entity becomes a table, each attribute a column with a data type, the # line the primary key, and each * a NOT NULL.",
        ar: "خطوات الشرائح: الكيان يصبح جدولًا، وكل خاصية عمودًا له نوع بيانات، وسطر # يصبح المفتاح الأساسي، وكل * تصبح NOT NULL."
      },
      explain: {
        en: "The physical model keeps every promise the logical box makes: # becomes PRIMARY KEY, and each * becomes NOT NULL, so a job cannot be stored without its title or its salary range. Salaries are numbers, so they get a numeric type — with VARCHAR, sorting or comparing them would treat them as text. The ERD stays the same whichever RDBMS you choose; only this statement changes.",
        ar: "النموذج المادي يحفظ كل وعد يقطعه الصندوق المنطقي: # تصبح PRIMARY KEY، وكل * تصبح NOT NULL، فلا يُخزَّن عمل بلا مسمّاه أو بلا نطاق راتبه. والرواتب أرقام، فتأخذ نوعًا رقميًّا — فمع VARCHAR سيعامل الترتيب والمقارنة الرواتب كنصّ. يبقى المخطّط نفسه أيًّا كان نظام إدارة قواعد البيانات (RDBMS) الذي تختاره؛ وهذه الجملة وحدها هي التي تتغيّر."
      },
      solution: {
        code: "CREATE TABLE jobs (\n  job_id     VARCHAR(10) PRIMARY KEY,\n  title      VARCHAR(35) NOT NULL,\n  max_salary NUMBER      NOT NULL,\n  min_salary NUMBER      NOT NULL\n);",
        en: "Run in alasql, then INSERT INTO jobs VALUES ('ACC', 'Accountant', 9000, 4000) is accepted and SELECT * FROM jobs returns ACC | Accountant | 9000 | 4000.",
        ar: "شُغّلت في alasql، ثم قُبل INSERT INTO jobs VALUES ('ACC', 'Accountant', 9000, 4000)، وأرجع SELECT * FROM jobs الصف ACC | Accountant | 9000 | 4000."
      }
    },
    {
      id: "t2bx09", type: "order", level: "easy",
      topics: ["t2-development-process", "t2-process-phases", "t2-model-comparison"],
      q: {
        en: "Matt's folder for the H.R. project holds five pages. Put them in the order the development process produces them.",
        ar: "في ملف Matt لمشروع الموارد البشرية خمس أوراق. رتّبها بالترتيب الذي تنتجها به عملية التطوير."
      },
      items: [
        { en: "The manager's three paragraphs about employees, departments and managers", ar: "فقرات المدير الثلاث عن الموظفين والأقسام والمديرين" },
        { en: "Boxes for EMPLOYEE, DEPARTMENT, JOB and LOCATION, with named lines between them and no attributes", ar: "صناديق لـ EMPLOYEE وDEPARTMENT وJOB وLOCATION، بينها خطوط مسمّاة، وبلا خصائص" },
        { en: "The same boxes with # Employee ID, * Salary and o Commission marked inside", ar: "الصناديق نفسها، وفيها # Employee ID و* Salary وo Commission معلَّمة" },
        { en: "employees(employee_id NUMBER PRIMARY KEY, salary NUMBER(8,2) NOT NULL, …), written for Oracle", ar: "employees(employee_id NUMBER PRIMARY KEY, salary NUMBER(8,2) NOT NULL, …)، مكتوبة لـ Oracle" },
        { en: "The CREATE TABLE statements run, and the first employees inserted", ar: "جمل CREATE TABLE وقد شُغّلت، وأُدخل الموظفون الأوائل" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "Requirements, then conceptual, logical and physical models, then the build. Ask of each page which of those it is.",
        ar: "المتطلّبات، ثم النماذج المفاهيمي فالمنطقي فالمادي، ثم البناء. اسأل عن كل ورقة: أيّها هي؟"
      },
      explain: {
        en: "The business information requirements come first. Entities and lines with no attributes are the conceptual model; adding #, * and o makes it logical; data types for one product make it physical; running the statements is the build. Each page adds to the one before, which is why the order cannot change.",
        ar: "تأتي متطلّبات معلومات العمل أوّلًا. والكيانات والخطوط بلا خصائص هي النموذج المفاهيمي؛ وإضافة # و* وo تجعله منطقيًّا؛ وأنواع البيانات لمنتج واحد تجعله ماديًّا؛ وتشغيل الجمل هو البناء. كل ورقة تضيف إلى ما قبلها، ولهذا لا يمكن أن يتغيّر الترتيب."
      }
    },

    /* ==================================================== lesson 4 · entities and instances */
    {
      id: "t2bx10", type: "multi", level: "medium",
      topics: ["t2-entity", "t2-business-significance", "t2-one-instance", "t2-entity-noun"],
      q: {
        en: "A restaurant owner says: \"Customers place orders. Each order lists items from our menu, so we can calculate the bill. A waiter takes each order. Our menus are printed on cream-coloured card. The restaurant is called Al-Bahr.\" Which should be entities in the restaurant's model? Choose every one.",
        ar: "يقول صاحب مطعم: «الزبائن يقدّمون طلبات. كل طلب يسرد أصنافًا من قائمتنا، لنحسب الفاتورة. ويأخذ كلَّ طلب نادلٌ. قوائمنا مطبوعة على ورق مقوّى بلون كريمي. واسم المطعم Al-Bahr.» أيّها يجب أن يكون كيانًا في نموذج المطعم؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "CUSTOMER", ar: "CUSTOMER" },
        { en: "RESTAURANT", ar: "RESTAURANT" },
        { en: "ORDER", ar: "ORDER" },
        { en: "MENU ITEM", ar: "MENU ITEM" },
        { en: "CARD COLOUR", ar: "CARD COLOUR" },
        { en: "WAITER", ar: "WAITER" }
      ],
      answer: [0, 2, 3, 5],
      hint: {
        en: "An entity is something the business must keep data about, and a set you can list. Ask of each: does the restaurant need data on it, and would the list have more than one item?",
        ar: "الكيان شيء يجب أن يحفظ العمل بيانات عنه، ومجموعة يمكنك سردها. اسأل عن كلٍّ منها: هل يحتاج المطعم إلى بيانات عنه، وهل ستضمّ قائمته أكثر من عنصر واحد؟"
      },
      explain: {
        en: "Customers, orders, menu items and waiters are each a list the restaurant must keep data about, so each is an entity. The restaurant itself is the business, with only one instance — like the library in lesson 4. The card's colour is a noun, but nothing the business needs to know depends on it. Not every noun becomes an entity.",
        ar: "الزبائن والطلبات وأصناف القائمة والنُّدُل كلٌّ منها قائمة يجب أن يحفظ المطعم بيانات عنها، فكلٌّ منها كيان. أمّا المطعم نفسه فهو العمل، وله نسخة (instance) واحدة فقط — مثل المكتبة في الدرس 4. ولون الورق اسم، لكن لا شيء يحتاج العمل إلى معرفته يتوقّف عليه. ليس كل اسم يصبح كيانًا."
      }
    },
    {
      id: "t2bx11", type: "mcq", level: "easy",
      topics: ["t2-event-entity", "t2-entity-kinds", "t2-single-valued"],
      q: {
        en: "The library starts a weekly reading circle. It must know when each session took place, which book was discussed and which members came. How should Matt model the sessions?",
        ar: "تبدأ المكتبة حلقة قراءة أسبوعية. ويجب أن تعرف متى عُقدت كل جلسة، وأيّ كتاب نوقش، وأيّ الأعضاء حضروا. كيف ينبغي أن ينمذج Matt الجلسات؟"
      },
      options: [
        { en: "As an attribute of MEMBER that holds the dates of every session the member came to", ar: "خاصيةً في MEMBER تحمل تواريخ كل الجلسات التي حضرها العضو" },
        { en: "Not at all: a meeting cannot be touched, so it cannot be an entity", ar: "لا ينمذجها أبدًا: الاجتماع لا يُلمس، فلا يمكن أن يكون كيانًا" },
        { en: "As one more instance of BOOK TRANSACTION", ar: "نسخةً إضافية من BOOK TRANSACTION" },
        { en: "As an entity, READING SESSION — an event, with one instance per meeting", ar: "كيانًا اسمه READING SESSION — حدثًا، له نسخة واحدة لكل اجتماع" }
      ],
      answer: 3,
      hint: {
        en: "The slides name three kinds of entity. Which kind is CONCERT, and does a weekly meeting look like it?",
        ar: "تذكر الشرائح ثلاثة أنواع من الكيانات. من أيّ نوع CONCERT، وهل يشبهه اجتماع أسبوعي؟"
      },
      explain: {
        en: "Each session is a happening with its own facts — a date and a book — so READING SESSION is an event entity, like CONCERT, with a new instance every week. A list of dates inside MEMBER breaks the single-valued rule. \"Cannot be touched\" confuses intangible with insignificant: events are entities too. A session is not a borrowing, so it is not a BOOK TRANSACTION.",
        ar: "كل جلسة حدث له حقائقه الخاصة — تاريخ وكتاب — فـ READING SESSION كيان حدث (event)، مثل CONCERT، بنسخة جديدة كل أسبوع. وقائمة تواريخ داخل MEMBER تخالف قاعدة القيمة الواحدة (single-valued). و«لا يُلمس» خلط بين غير الملموس وعديم الأهمية: الأحداث كيانات أيضًا. والجلسة ليست استعارة، فليست BOOK TRANSACTION."
      }
    },

    /* ==================================================== lesson 5 · attributes */
    {
      id: "t2bx12", type: "fill", level: "easy",
      topics: ["t2-mandatory-optional", "t2-optionality-context", "t2-logical-marks"],
      q: {
        en: "The library sets three new rules: overdue notices go by SMS to every member; members may leave their email blank; and every member's birth date is needed to decide junior membership. Mark each attribute with * or o.",
        ar: "تضع المكتبة ثلاث قواعد جديدة: إشعارات التأخير تُرسل برسالة نصية (SMS) إلى كل عضو؛ ويجوز للأعضاء ترك البريد الإلكتروني فارغًا؛ وتاريخ ميلاد كل عضو مطلوب لتحديد عضوية الصغار. علّم كل خاصية بـ * أو o."
      },
      lang: "text",
      code: "MEMBER\n  # * Id\n  ____1____ Phone\n  ____2____ Email\n  ____3____ Birth Date",
      blanks: [
        { accept: ["*"], label: { en: "Phone", ar: "Phone" } },
        { accept: ["o", "O"], label: { en: "Email", ar: "Email" } },
        { accept: ["*"], label: { en: "Birth Date", ar: "Birth Date" } }
      ],
      hint: {
        en: "* means every instance must have a value; o means the value may be left null. Read each rule for \"every member\" or \"may\".",
        ar: "* تعني أن كل نسخة يجب أن تكون لها قيمة؛ وo تعني أن القيمة يجوز أن تُترك null. اقرأ كل قاعدة بحثًا عن «كل عضو» أو «يجوز»."
      },
      explain: {
        en: "Phone is *: an SMS cannot reach a member with no number. Email is o: the rule lets it be null. Birth Date is *: the library needs it for every member. Mandatory or optional is a business decision, not a property of the word — in a mobile application the slides make the cell phone mandatory too.",
        ar: "Phone إلزامية (*): لا تصل الرسالة النصية إلى عضو بلا رقم. وEmail اختيارية (o): القاعدة تسمح بأن تكون null. وBirth Date إلزامية: المكتبة تحتاج إليها لكل عضو. الإلزامي والاختياري قرار من العمل، لا صفة في الكلمة — ففي تطبيقات الهاتف المحمول تجعل الشرائح رقم الهاتف إلزاميًّا أيضًا."
      }
    },
    {
      id: "t2bx13", type: "contrast", level: "medium",
      topics: ["t2-predictable-place", "t2-attribute", "t2-event-entity"],
      q: {
        en: "Matt is placing attributes in the library model. Sort each one: does it belong in BOOK or in BOOK TRANSACTION?",
        ar: "يضع Matt الخصائص في نموذج المكتبة. صنّف كلًّا منها: هل مكانها BOOK أم BOOK TRANSACTION؟"
      },
      concepts: [
        { en: "An attribute of BOOK", ar: "خاصية في BOOK" },
        { en: "An attribute of BOOK TRANSACTION", ar: "خاصية في BOOK TRANSACTION" }
      ],
      rows: [
        { s: { en: "Title", ar: "العنوان (Title)" }, a: 0 },
        { s: { en: "The date the book was lent", ar: "تاريخ إعارة الكتاب" }, a: 1 },
        { s: { en: "Number of pages", ar: "عدد الصفحات" }, a: 0 },
        { s: { en: "Whether it was a borrow or a return", ar: "هل كانت استعارة أم إرجاعًا" }, a: 1 },
        { s: { en: "The year the book was published", ar: "سنة نشر الكتاب" }, a: 0 },
        { s: { en: "The date the book is due back from this borrowing", ar: "تاريخ وجوب إرجاع الكتاب في هذه الاستعارة" }, a: 1 }
      ],
      hint: {
        en: "Ask: is this true of the book whoever borrows it, or does it have a new value every time the book is borrowed?",
        ar: "اسأل: هل هذا صحيح عن الكتاب أيًّا كان مستعيره، أم أن له قيمة جديدة في كل مرّة يُستعار فيها الكتاب؟"
      },
      explain: {
        en: "Title, pages and year of publication are true of the book once, so they live in BOOK. Lending date, type and due date change with every borrowing, so they belong to the event, BOOK TRANSACTION. Put a lending date in BOOK and it can hold only one value, so the second borrowing overwrites the first. One fact, one predictable place — goal 4.",
        ar: "العنوان وعدد الصفحات وسنة النشر صحيحة عن الكتاب مرّة واحدة، فمكانها BOOK. أمّا تاريخ الإعارة ونوعها وتاريخ الإرجاع فتتغيّر مع كل استعارة، فهي للحدث BOOK TRANSACTION. ضع تاريخ الإعارة في BOOK فلن يتّسع إلا لقيمة واحدة، فتمحو الاستعارة الثانية الأولى. حقيقة واحدة في مكان واحد متوقَّع — الهدف 4."
      }
    },
    {
      id: "t2bx14", type: "output", level: "medium",
      topics: ["t2-data-type-choice", "t2-data-type", "t2-attribute-as-column"],
      q: {
        en: "A classmate gave ZIP the type NUMBER, because \"a ZIP is made of digits\". Lina Khalil joins from Gaza, ZIP 00970. What does the query return in zip?",
        ar: "أعطى زميلٌ الخاصية ZIP النوع NUMBER، لأن «الرمز البريدي مكوّن من أرقام». تنضمّ Lina Khalil من Gaza، ورمزها البريدي 00970. ماذا يُرجع الاستعلام في zip؟"
      },
      lang: "sql",
      code: "CREATE TABLE members_draft (\n  id         NUMBER PRIMARY KEY,\n  first_name VARCHAR(20),\n  zip        NUMBER\n);\n\nINSERT INTO members_draft VALUES (3, 'Lina', '00970');\n\nSELECT zip\nFROM members_draft\nWHERE id = 3;",
      blanks: [{ accept: ["970"], label: { en: "zip", ar: "zip" } }],
      hint: {
        en: "A data type states how values are stored. What happens to leading zeros when a value is stored as a number?",
        ar: "نوع البيانات يحدّد طريقة تخزين القيم. ماذا يحدث للأصفار في البداية حين تُخزَّن القيمة رقمًا؟"
      },
      explain: {
        en: "970. Stored as a number, 00970 is just the number 970, and the leading zeros are gone. A ZIP is written in digits but never added or averaged; it is a code, so it is a character string, as in the lab's members table. Choose the type from what the business does with the value, not from what its characters look like.",
        ar: "970. حين يُخزَّن 00970 رقمًا يصير مجرّد العدد 970، وتضيع الأصفار في بدايته. الرمز البريدي يُكتب بالأرقام لكنه لا يُجمع ولا يُحسب متوسّطه أبدًا؛ إنه رمز، فهو سلسلة حروف (character string)، كما في جدول members في المختبر. اختر النوع ممّا يفعله العمل بالقيمة، لا من شكل حروفها."
      },
      solution: {
        out: "zip\n970",
        en: "Run in alasql: the INSERT is accepted and the SELECT returns 970. With zip VARCHAR(10) the same INSERT keeps '00970'.",
        ar: "شُغّل في alasql: قُبل INSERT، وأرجع SELECT القيمة 970. ومع zip VARCHAR(10) يحتفظ INSERT نفسه بـ '00970'."
      }
    },

    /* ==================================================== lesson 6 · UIDs and the first ERD */
    {
      id: "t2bx15", type: "write", level: "hard",
      topics: ["t2-artificial-uid", "t2-student-number", "t2-birth-date-not-age", "t2-not-null", "t2-mandatory-optional"],
      q: {
        en: "A school says: \"We need each student's first name, last name and age, and the age must always be right without anyone updating it. Some students give us a cell phone number; most do not. Two students can share a name and even a birthday, so we give each one a student number.\" Write one CREATE TABLE students statement: student_no the primary key, first_name and last_name required, a column that keeps the age right, and cell_phone. End it with a semicolon.",
        ar: "تقول مدرسة: «نحتاج إلى الاسم الأول لكل طالب واسم عائلته وعمره، ويجب أن يبقى العمر صحيحًا دائمًا دون أن يحدّثه أحد. بعض الطلاب يعطوننا رقم هاتف محمول، وأكثرهم لا يفعل. وقد يشترك طالبان في الاسم بل وفي يوم الميلاد، لذا نعطي كلًّا منهم رقم طالب.» اكتب جملة CREATE TABLE students واحدة: student_no هو المفتاح الأساسي، وfirst_name وlast_name مطلوبان، وعمود يُبقي العمر صحيحًا، وcell_phone. أنهِها بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 8,
      starter: "CREATE TABLE students (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+students\\s*\\([^;]*(\\bstudent_no\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*student_no\\s*\\))", flags: "i",
          label: { en: "student_no is the primary key", ar: "student_no هو المفتاح الأساسي" } },
        { re: "CREATE\\s+TABLE\\s+students\\s*\\([^;]*\\bfirst_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL[^;]*\\blast_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "first_name and last_name are NOT NULL", ar: "first_name وlast_name من نوع NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+students\\s*\\([^;]*\\b\\w+\\s+DATE\\s+NOT\\s+NULL", flags: "i",
          label: { en: "a required DATE column (the birth date) stands in for the age", ar: "عمود DATE مطلوب (تاريخ الميلاد) يحلّ محلّ العمر" } },
        { re: "CREATE\\s+TABLE\\s+students\\s*\\([^;]*\\bcell_phone\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s*(,|\\))", flags: "i",
          label: { en: "cell_phone is left nullable", ar: "cell_phone تُترك قابلة لـ null" } }
      ],
      forbid: [
        { re: "\\bage\\s+\\w+", flags: "i",
          label: { en: "Age is volatile and derivable: store the birth date and work the age out", ar: "العمر متقلّب ويمكن اشتقاقه: خزّن تاريخ الميلاد واحسب العمر منه" } },
        { re: "\\bcell_phone\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "Most students have no cell phone: it is optional", ar: "أكثر الطلاب بلا هاتف محمول: فهو اختياري" } }
      ],
      hint: {
        en: "Three lessons meet here: the artificial UID becomes the primary key, \"most do not\" means o, and lesson 5 says which attribute to store when the business asks for an age.",
        ar: "تلتقي هنا ثلاثة دروس: المعرّف الاصطناعي يصبح المفتاح الأساسي، و«أكثرهم لا يفعل» تعني o، والدرس 5 يقول أيّ خاصية تُخزَّن حين يطلب العمل العمر."
      },
      explain: {
        en: "No natural combination is guaranteed unique, so the student number — an artificial UID — is the primary key. An age column would be wrong a year later for every student; a birth date never changes, and the age is worked out from it whenever it is asked for. The cell phone is optional, so it stays nullable. A NOT NULL on it would turn most students away at the door.",
        ar: "لا توجد تركيبة طبيعية مضمونة التفرّد، فرقم الطالب — وهو معرّف اصطناعي (artificial UID) — هو المفتاح الأساسي. عمود العمر سيكون خاطئًا بعد سنة لكل طالب؛ أمّا تاريخ الميلاد فلا يتغيّر، ويُحسب العمر منه متى طُلب. والهاتف المحمول اختياري، فيبقى قابلًا لـ null. وNOT NULL عليه سيردّ أكثر الطلاب عند الباب."
      },
      solution: {
        code: "CREATE TABLE students (\n  student_no NUMBER      PRIMARY KEY,\n  first_name VARCHAR(20) NOT NULL,\n  last_name  VARCHAR(20) NOT NULL,\n  birth_date DATE        NOT NULL,\n  cell_phone VARCHAR(15)\n);",
        en: "Run in alasql: two students both named Huda Nasser, born 2008-09-14, go in as 1 and 2 — one with a phone, one with NULL — while a row with a NULL first_name is refused.",
        ar: "شُغّلت في alasql: دخلت طالبتان كلتاهما Huda Nasser ومولودتان في 2008-09-14 برقمَي 1 و2 — إحداهما بهاتف والأخرى بـ NULL — بينما رُفض صفّ قيمة first_name فيه NULL."
      }
    },
    {
      id: "t2bx16", type: "mcq", level: "medium",
      topics: ["t2-composite-uid", "t2-uid-defence", "t2-single-attribute-uid"],
      q: {
        en: "A college timetables lectures in rooms across its buildings A, B and C. Every building numbers its rooms from 101, so there is a room 101 in A and another in B. ROOM has Building, Room Number and Capacity. Using only these attributes, which UID works?",
        ar: "كلّية تجدول محاضراتها في قاعات موزّعة على مبانيها A وB وC. وكل مبنى يرقّم قاعاته بدءًا من 101، فهناك قاعة 101 في A وأخرى في B. للكيان ROOM الخصائص Building وRoom Number وCapacity. باستعمال هذه الخصائص وحدها، أيّ معرّف فريد يصلح؟"
      },
      options: [
        { en: "# Room Number — it is the number printed on the timetable", ar: "# Room Number — فهو الرقم المطبوع في الجدول" },
        { en: "# Capacity — every room has one", ar: "# Capacity — فلكل قاعة سعة" },
        { en: "# Building — it is mandatory and never changes", ar: "# Building — فهو إلزامي ولا يتغيّر" },
        { en: "# Building and # Room Number together — a composite UID, unique by the college's numbering rule", ar: "# Building و# Room Number معًا — معرّف مركّب، فريد بقاعدة الترقيم في الكلّية" }
      ],
      answer: 3,
      hint: {
        en: "Defend each candidate: is it unique for every room by rule, not by luck? If no single attribute is, try a combination.",
        ar: "دافع عن كل مرشّح: هل هو فريد لكل قاعة بقاعدة، لا بالمصادفة؟ إن لم تكن أيّ خاصية وحدها كذلك، فجرّب تركيبة."
      },
      explain: {
        en: "Room Number repeats across buildings, so alone it is not unique — the tempting answer, because the timetable prints it. Many rooms share a capacity, and every building holds many rooms. But the college's own rule guarantees that no building has two rooms with the same number, so the pair is unique: a composite UID, each part marked #.",
        ar: "Room Number يتكرّر بين المباني، فهو وحده غير فريد — وهو الإجابة المغرية لأن الجدول يطبعه. وقاعات كثيرة تشترك في السعة، وكل مبنى يضمّ قاعات كثيرة. لكن قاعدة الكلّية نفسها تضمن ألّا يكون في مبنى واحد قاعتان بالرقم نفسه، فالزوج فريد: معرّف مركّب (composite UID)، كل جزء منه معلَّم بـ #."
      }
    },
    {
      id: "t2bx17", type: "error", level: "hard",
      topics: ["t2-hr-scenario", "t2-scenario-to-erd", "t2-mandatory-optional", "t2-uid"],
      q: {
        en: "The H.R. manager said: \"We need to track each employee's first name, last name, hire date and salary. For each employee on commission, we also need to track his/her potential commission. Each department has a unique number.\" A classmate marked the boxes, one item per line. Which lines contradict what the manager said? Choose every one.",
        ar: "قال مدير الموارد البشرية: «نحتاج إلى متابعة الاسم الأول لكل موظف واسم عائلته وتاريخ تعيينه وراتبه. ولكل موظف يعمل بالعمولة نحتاج أيضًا إلى متابعة عمولته المحتملة. ولكل قسم رقم فريد.» علّم زميلٌ الصناديق، بندًا في كل سطر. أيّ الأسطر تناقض ما قاله المدير؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "EMPLOYEE\n  # * Employee ID\n  * First Name   * Last Name\n  o Hire Date\n  * Salary\n  * Commission\nDEPARTMENT\n  # * Name",
      answer: [4, 6, 8],
      hint: {
        en: "Read each mark against the manager's words: \"each employee\" means *, \"for each employee on commission\" means only some, and \"a unique number\" names the UID.",
        ar: "اقرأ كل علامة مقابل كلام المدير: «كل موظف» تعني *، و«لكل موظف يعمل بالعمولة» تعني بعضهم فقط، و«رقم فريد» تسمّي المعرّف الفريد."
      },
      explain: {
        en: "Line 4: the hire date is tracked for every employee, so it is * Hire Date. Line 6: only employees on commission have one, so it is o Commission — as * it forces a made-up value on everyone else. Line 8: the department is identified by its number, so DEPARTMENT needs # * Department ID, and Name becomes a plain * attribute. A name can be changed or shared; the number is the UID the business gave.",
        ar: "السطر 4: تاريخ التعيين يُتابَع لكل موظف، فهو * Hire Date. السطر 6: لا عمولة إلا لمن يعمل بالعمولة، فهي o Commission — ولو كانت * لفرضت قيمة مختلَقة على الباقين. السطر 8: القسم يُعرَّف برقمه، فيحتاج DEPARTMENT إلى # * Department ID، ويصبح Name خاصية * عادية. الاسم قد يتغيّر أو يتكرّر؛ أمّا الرقم فهو المعرّف الذي أعطاه العمل."
      },
      solution: {
        code: "EMPLOYEE\n  # * Employee ID\n  * First Name   * Last Name\n  * Hire Date\n  * Salary\n  o Commission\nDEPARTMENT\n  # * Department ID\n  * Name",
        en: "Lines 4, 6 and 8: Hire Date becomes *, Commission becomes o, and DEPARTMENT gets # * Department ID with Name as an ordinary * attribute.",
        ar: "الأسطر 4 و6 و8: تصبح Hire Date إلزامية (*)، وتصبح Commission اختيارية (o)، ويأخذ DEPARTMENT المعرّف # * Department ID، ويبقى Name خاصية * عادية."
      }
    },
    {
      id: "t2bx18", type: "complete", level: "medium",
      topics: ["t2-derivable-data", "t2-er-goals"],
      q: {
        en: "The faculty member wants a report of how many books each author has written. A classmate proposes adding * Book Count to AUTHOR. Matt says the model already holds the answer. What completes his query on books(book_id, title, author_id)?",
        ar: "يريد عضو هيئة التدريس تقريرًا بعدد الكتب التي كتبها كل مؤلف. يقترح زميل إضافة * Book Count إلى AUTHOR. ويقول Matt إن النموذج يحمل الإجابة أصلًا. ما الذي يكمل استعلامه على books(book_id, title, author_id)؟"
      },
      lang: "sql",
      code: "SELECT author_id, ________ AS books_written\nFROM books\nGROUP BY author_id;",
      options: [
        { code: "book_count" },
        { code: "SUM(author_id)" },
        { code: "COUNT(*)" },
        { code: "MAX(title)" }
      ],
      answer: 2,
      hint: {
        en: "Goal 3: model no data that can be derived from data already modelled. Which expression derives a count from the rows themselves?",
        ar: "الهدف 3: لا تنمذج بيانات يمكن اشتقاقها من بيانات منمذجة أصلًا. أيّ تعبير يشتقّ العدد من الصفوف نفسها؟"
      },
      explain: {
        en: "COUNT(*) counts each author's rows in books, so the number is worked out fresh every time and can never be out of date. book_count is the classmate's column, which does not exist — and if it did, someone would have to remember to update it with every new book. SUM adds up the codes, which is meaningless; MAX returns a title, not a number.",
        ar: "COUNT(*) يعدّ صفوف كل مؤلف في books، فيُحسب العدد من جديد في كل مرّة ولا يمكن أن يتقادم. أمّا book_count فهو عمود الزميل، وهو غير موجود — ولو وُجد لوجب أن يتذكّر أحدٌ تحديثه مع كل كتاب جديد. وSUM يجمع الرموز، وهذا بلا معنى؛ وMAX يُرجع عنوانًا لا عددًا."
      },
      solution: {
        out: "author_id | books_written\nAD0001    | 1\nAD0002    | 1\nAD0003    | 2",
        en: "Run in alasql on the four books: AD0001 1, AD0002 1, AD0003 2. Jane Austen (AD0004) has no book yet, so she has no row in books to count.",
        ar: "شُغّل في alasql على الكتب الأربعة: AD0001 ‏1، وAD0002 ‏1، وAD0003 ‏2. أمّا Jane Austen (AD0004) فلا كتاب لها بعد، فلا صفّ لها في books يُعَدّ."
      }
    },
    {
      id: "t2bx19", type: "trace", level: "hard",
      topics: ["t2-foreign-key", "t2-unique-key", "t2-primary-key", "t2-referential-check"],
      q: {
        en: "departments holds 10 Accounting, 15 Sales and 22 Development. employees holds the slides' five rows: 100 SMITH (10, payroll 21215), 310 ADAMS (15, 59877), 210 CHEN (10, 1101), 405 GOMEZ (10, 52), 378 LOUNGANI (22, 90386). employee_id is the primary key, department_id REFERENCES departments, payroll_id is UNIQUE. Four new hires are entered, each INSERT run on its own. What number does the final query return?",
        ar: "يحمل departments الأقسام 10 Accounting و15 Sales و22 Development. ويحمل employees صفوف الشرائح الخمسة: 100 SMITH (10، رقم الرواتب 21215)، و310 ADAMS (15، 59877)، و210 CHEN (10، 1101)، و405 GOMEZ (10، 52)، و378 LOUNGANI (22، 90386). العمود employee_id هو المفتاح الأساسي، وdepartment_id يشير بـ REFERENCES إلى departments، وpayroll_id من نوع UNIQUE. أُدخل أربعة موظفين جدد، وكل INSERT شُغّل وحده. ما العدد الذي يُرجعه الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "-- employees (employee_id, last_name, department_id, payroll_id)\nINSERT INTO employees VALUES (420, 'HAMDAN', 30, 60001);\nINSERT INTO employees VALUES (430, 'SALEH', 15, 1101);\nINSERT INTO employees VALUES (310, 'KHALIL', 22, 60002);\nINSERT INTO employees VALUES (440, 'SMITH', 22, 60003);\n\nSELECT COUNT(*) AS staff\nFROM employees;",
      blanks: [{ accept: ["6", "six", "Six"], label: { en: "staff", ar: "staff" } }],
      hint: {
        en: "Check each INSERT against all three keys: does the department exist, is the payroll number new, is the employee number new? A repeated last name breaks no key.",
        ar: "افحص كل INSERT مقابل المفاتيح الثلاثة: هل القسم موجود، وهل رقم الرواتب جديد، وهل رقم الموظف جديد؟ واسم العائلة المكرّر لا يخالف أيّ مفتاح."
      },
      explain: {
        en: "6. HAMDAN is refused by the foreign key: there is no department 30. SALEH is refused by the unique key: 1101 is already CHEN's payroll number. KHALIL is refused by the primary key: 310 is ADAMS. The second SMITH goes in — a shared name breaks no key. So 5 + 1 = 6. Each key guards a different promise, and each one catches its own mistake.",
        ar: "6. يُرفض HAMDAN بسبب المفتاح الأجنبي: لا يوجد قسم 30. ويُرفض SALEH بسبب المفتاح الفريد: 1101 هو رقم رواتب CHEN أصلًا. ويُرفض KHALIL بسبب المفتاح الأساسي: 310 هو ADAMS. أمّا SMITH الثاني فيدخل — فالاسم المشترك لا يخالف أيّ مفتاح. إذن 5 + 1 = 6. كل مفتاح يحرس وعدًا مختلفًا، وكلٌّ منها يمسك خطأه هو."
      },
      solution: {
        out: "staff\n6",
        en: "Run in alasql: 420 fails with Foreign key \"30\" not found; 430 fails with \"already exists in unique index\"; 310 fails with \"already exists in primary key index\"; 440 is accepted; COUNT(*) returns 6.",
        ar: "شُغّل في alasql: فشل 420 برسالة Foreign key \"30\" not found؛ وفشل 430 برسالة \"already exists in unique index\"؛ وفشل 310 برسالة \"already exists in primary key index\"؛ وقُبل 440؛ وأرجع COUNT(*) العدد 6."
      }
    },
    {
      id: "t2bx20", type: "tf", level: "easy",
      topics: ["t2-reading-erd", "t2-goal-capture-once", "t2-predictable-place"],
      q: {
        en: "Accounting and Sales move into the same building. In the lecturer's H.R. ERD, the building's street address is then stored once, in one LOCATION, and both departments are linked to it.",
        ar: "ينتقل قسما Accounting وSales إلى المبنى نفسه. في مخطّط الموارد البشرية الذي وضعه المحاضر، يُخزَّن عنوان شارع المبنى عندئذ مرّة واحدة، في LOCATION واحد، ويرتبط به القسمان كلاهما."
      },
      truth: true,
      hint: {
        en: "Find * Street Address in the ERD. Which box is it in, and what is the line between DEPARTMENT and that box called?",
        ar: "ابحث عن * Street Address في المخطّط. في أيّ صندوق هو، وما اسم الخط بين DEPARTMENT وذلك الصندوق؟"
      },
      explain: {
        en: "True. Street Address is an attribute of LOCATION, and each DEPARTMENT is located in a LOCATION. Two departments in one building share one LOCATION instance, so the address is written once. This is exactly what version 3 of lesson 6's H.R. evolve block added: had the address been an attribute of DEPARTMENT, it would be stored twice and could disagree with itself.",
        ar: "صحيح. Street Address خاصية في LOCATION، وكل DEPARTMENT موجود في (located in) LOCATION. والقسمان في مبنى واحد يشتركان في نسخة واحدة من LOCATION، فيُكتب العنوان مرّة واحدة. وهذا بالضبط ما أضافته النسخة 3 في كتلة تطوّر الموارد البشرية في الدرس 6: لو كان العنوان خاصية في DEPARTMENT لخُزّن مرّتين، ولأمكن أن يناقض نفسه."
      }
    },
    {
      id: "t2bx21", type: "compare", level: "hard",
      topics: ["t2-composite-uid", "t2-artificial-uid", "t2-uid-defence"],
      q: {
        en: "The library now lets a member borrow a book and return it on the same day: Sara borrows BK001 at 9:00 on 1 March and returns it at 14:00. Each borrow and each return is one BOOK TRANSACTION. Which UID should Matt use now?",
        ar: "صارت المكتبة تسمح للعضو أن يستعير كتابًا ويعيده في اليوم نفسه: تستعير Sara الكتاب BK001 الساعة 9:00 في 1 March وتعيده الساعة 14:00. كل استعارة وكل إرجاع BOOK TRANSACTION واحدة. أيّ معرّف فريد ينبغي أن يستعمله Matt الآن؟"
      },
      lang: "text",
      codeA: "BOOK TRANSACTION\n# * Tran Date\n# * Book Id\no Type",
      codeB: "BOOK TRANSACTION\n# * Tran Id\n* Tran Date\n* Book Id\no Type",
      options: [
        { en: "A: it is the UID in the slides' model, so it stays right whatever the library's rules", ar: "A: إنه المعرّف في نموذج الشرائح، فيبقى صحيحًا مهما كانت قواعد المكتبة" },
        { en: "B: the borrow and the return share a date and a book, so A would refuse the return; an artificial Tran Id is unique by design", ar: "B: الاستعارة والإرجاع يشتركان في التاريخ والكتاب، فسيرفض A الإرجاع؛ أمّا Tran Id الاصطناعي ففريد بالتصميم" },
        { en: "A: two transactions for one book on one day are a mistake the UID should catch", ar: "A: معاملتان لكتاب واحد في يوم واحد خطأ يجب أن يمسكه المعرّف" },
        { en: "Neither: a UID may never include a date", ar: "لا هذا ولا ذاك: المعرّف الفريد لا يجوز أبدًا أن يتضمّن تاريخًا" }
      ],
      answer: 1,
      hint: {
        en: "A composite UID is also a business rule. Say A's rule in words, then ask whether the library still keeps it.",
        ar: "المعرّف المركّب قاعدة عمل أيضًا. قل قاعدة A بالكلمات، ثم اسأل هل ما زالت المكتبة تلتزم بها."
      },
      explain: {
        en: "A says \"one transaction per book per day\". That was the library's rule when the slides were drawn; the new rule allows two, so A would refuse Sara's honest return. A UID must be unique by rule, and the rule has changed. An artificial Tran Id is unique whatever happens, which is why B is right now. A date can be part of a UID — it was in A — as long as the rule behind it holds.",
        ar: "يقول A: «معاملة واحدة لكل كتاب في كل يوم». كانت تلك قاعدة المكتبة حين رُسمت الشرائح؛ أمّا القاعدة الجديدة فتسمح باثنتين، فسيرفض A إرجاع Sara الصادق. المعرّف الفريد يجب أن يكون فريدًا بقاعدة، والقاعدة تغيّرت. وTran Id الاصطناعي فريد مهما حدث، ولهذا B هو الصحيح الآن. ويمكن أن يكون التاريخ جزءًا من المعرّف — كان كذلك في A — ما دامت القاعدة التي وراءه قائمة."
      }
    },
    {
      id: "t2bx22", type: "match", level: "easy",
      topics: ["t2-data-type", "t2-data-type-choice"],
      q: {
        en: "A shoe store keeps CUSTOMER and its orders. Match each attribute to the data type of its values.",
        ar: "متجر أحذية يحفظ CUSTOMER وطلباته. صِل كل خاصية بنوع بيانات قيمها."
      },
      leftHead: { en: "Attribute", ar: "الخاصية" },
      rightHead: { en: "Data type", ar: "نوع البيانات" },
      pairs: [
        { l: { en: "Family name", ar: "اسم العائلة (family name)" },
          r: { en: "Character string", ar: "سلسلة حروف (character string)" } },
        { l: { en: "Shoe size", ar: "مقاس الحذاء (shoe size)" },
          r: { en: "Number", ar: "رقم (number)" } },
        { l: { en: "Order date", ar: "تاريخ الطلب (order date)" },
          r: { en: "Date", ar: "تاريخ (date)" } },
        { l: { en: "Product photograph", ar: "صورة المنتج (product photograph)" },
          r: { en: "Image", ar: "صورة (image)" } }
      ],
      hint: {
        en: "Ask what the store does with each value: spell it, compare its size, count days from it, or show it.",
        ar: "اسأل ماذا يفعل المتجر بكل قيمة: يتهجّاها، أم يقارن مقاسها، أم يعدّ الأيام منها، أم يعرضها."
      },
      explain: {
        en: "Every attribute stores one piece of data of one specific type. A name is text; a shoe size is compared and sorted as a number; an order date supports date arithmetic such as \"orders older than 30 days\"; a photograph is an image. Picking the type is part of modelling the attribute, not an afterthought for the DBA.",
        ar: "كل خاصية تخزّن معلومة واحدة من نوع محدّد واحد. الاسم نصّ؛ ومقاس الحذاء يُقارن ويُرتَّب كرقم؛ وتاريخ الطلب يسمح بحساب التواريخ مثل «الطلبات الأقدم من 30 يومًا»؛ والصورة image. واختيار النوع جزء من نمذجة الخاصية، لا أمر ثانوي يُترك لمدير قاعدة البيانات."
      }
    },
    {
      id: "t2bx23", type: "multi", level: "hard",
      topics: ["t2-single-valued", "t2-multi-valued-fix", "t2-predictable-place", "t2-derivable-data"],
      q: {
        en: "The H.R. manager adds six requirements. Which of them can be modelled correctly as one new attribute of EMPLOYEE? Choose every one.",
        ar: "يضيف مدير الموارد البشرية ستّة متطلّبات. أيّها يمكن نمذجته نمذجة صحيحة خاصيةً جديدة واحدة في EMPLOYEE؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Each employee's work email address", ar: "البريد الإلكتروني الوظيفي لكل موظف" },
        { en: "Every training course each employee has completed, with its date — some have done five", ar: "كل دورة تدريبية أنهاها كل موظف، مع تاريخها — وبعضهم أنهى خمسًا" },
        { en: "Each employee's nickname, as in the slides' EMPLOYEES table", ar: "الاسم المستعار لكل موظف، كما في جدول EMPLOYEES في الشرائح" },
        { en: "The lowest and highest salary of each employee's job", ar: "أدنى راتب وأعلى راتب للعمل الذي يشغله كل موظف" },
        { en: "How many years each employee has worked here", ar: "عدد السنوات التي عملها كل موظف هنا" },
        { en: "The phone number of each employee's department", ar: "رقم هاتف القسم الذي يعمل فيه كل موظف" }
      ],
      answer: [0, 2],
      hint: {
        en: "For each one ask three questions: does an employee have one value at a time, is it a fact about the employee rather than about something else, and can it be worked out from what is already stored?",
        ar: "اسأل عن كلٍّ منها ثلاثة أسئلة: هل للموظف قيمة واحدة في كل وقت، وهل هي حقيقة عن الموظف لا عن شيء آخر، وهل يمكن حسابها ممّا هو مخزّن أصلًا؟"
      },
      explain: {
        en: "Email and nickname are single values that describe the employee, so each is one attribute. Training courses are many per employee, so they need their own entity, as borrowings did in lesson 5. The salary range is a fact about the JOB, and the phone number about the DEPARTMENT; copied into every employee they break goals 2 and 4. Years of service is derivable from Hire Date, so goal 3 says do not store it.",
        ar: "البريد الإلكتروني والاسم المستعار قيمتان مفردتان تصفان الموظف، فكلٌّ منهما خاصية واحدة. أمّا الدورات التدريبية فكثيرة لكل موظف، فتحتاج إلى كيان خاص بها، كما احتاجت الاستعارات في الدرس 5. ونطاق الراتب حقيقة عن JOB، ورقم الهاتف حقيقة عن DEPARTMENT؛ ونسخهما في كل موظف يخالف الهدفين 2 و4. وسنوات الخدمة يمكن اشتقاقها من Hire Date، فالهدف 3 يقول لا تخزّنها."
      }
    },
    {
      id: "t2bx24", type: "fill", level: "medium",
      topics: ["t2-goal-capture-once", "t2-update-anomaly", "t2-er-goals"],
      q: {
        en: "Accounting has 40 employees. It moves to a location that is already recorded in the model. How many rows must change in each version of the H.R. model? Answer with numbers.",
        ar: "في قسم Accounting أربعون موظفًا. وينتقل القسم إلى موقع مسجّل أصلًا في النموذج. كم صفًّا يجب أن يتغيّر في كل نسخة من نموذج الموارد البشرية؟ أجب بالأرقام."
      },
      lang: "text",
      code: "Version 1 — department name and location typed into every EMPLOYEE:   ____1____ rows change\nVersion 3 — the lecturer's ERD, DEPARTMENT located in LOCATION:       ____2____ row changes",
      blanks: [
        { accept: ["40", "forty", "Forty"], label: { en: "Version 1", ar: "النسخة 1" } },
        { accept: ["1", "one", "One"], label: { en: "Version 3", ar: "النسخة 3" } }
      ],
      hint: {
        en: "In version 1, where is Accounting's location written? In version 3, which single instance says where Accounting is?",
        ar: "في النسخة 1، أين يُكتب موقع Accounting؟ وفي النسخة 3، أيّ نسخة واحدة تقول أين يوجد Accounting؟"
      },
      explain: {
        en: "Version 1 copies the location into each of the 40 Accounting employees, so all 40 rows change, and missing one is lesson 1's update anomaly. In version 3 Accounting is one DEPARTMENT instance linked to a LOCATION, so one row changes and the employees are untouched. This is goal 2, data appears only once, measured in rows.",
        ar: "النسخة 1 تنسخ الموقع في كلٍّ من موظفي Accounting الأربعين، فتتغيّر الصفوف الأربعون كلها، ونسيان واحد منها هو شذوذ التحديث (update anomaly) من الدرس 1. وفي النسخة 3 يكون Accounting نسخة واحدة من DEPARTMENT مرتبطة بـ LOCATION، فيتغيّر صفّ واحد ولا يُمسّ الموظفون. هذا هو الهدف 2، أن تظهر البيانات مرّة واحدة فقط، مقيسًا بالصفوف."
      }
    }
  ]
};
