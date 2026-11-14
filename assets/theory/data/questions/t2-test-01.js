/* Question bank: T2 lesson 1 test -- One Table Is Not Enough. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-01"] = {
  title: { en: "Test 1 — One Table Is Not Enough", ar: "اختبار 1 — جدول واحد لا يكفي" },
  intro: {
    en: "24 questions on lesson 1: the flat file, its honest advantages and its limits, the repetition it forces, and the update, insert and delete anomalies that follow, and how splitting the table cures them. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الأول: الملف المسطّح، ومزاياه الحقيقية وحدوده، والتكرار الذي يفرضه، وشذوذ التحديث والإضافة والحذف الذي ينتج عنه، وكيف يعالجها تقسيم الجدول. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · the flat file */
    {
      id: "t2l1q01", type: "tf", level: "easy", topics: ["t2-flat-file", "t2-record"],
      q: {
        en: "The department saves its book list as a plain-text file: one book per line, the values on each line separated by commas. This file is a flat file database.",
        ar: "يحفظ القسم قائمة كتبه في ملف نصّي عادي: كتاب واحد في كل سطر، والقيم في السطر مفصولة بفواصل. هذا الملف قاعدة بيانات ملف مسطّح (flat file database)."
      },
      truth: true,
      hint: {
        en: "A flat file is defined by how many tables hold the data, not by the program that stores it.",
        ar: "الملف المسطّح يُعرَّف بعدد الجداول التي تحمل البيانات، لا بالبرنامج الذي يخزّنها."
      },
      explain: {
        en: "True. A flat file database stores all its data in a single table, and it is usually plain text with one record per line. The comma-separated list is exactly that: each line is one record, each comma separates one column from the next. Plain text does not make it \"not a database\" — it is the simplest kind.",
        ar: "صحيح. قاعدة بيانات الملف المسطّح تخزّن كل بياناتها في جدول واحد، وغالبًا ما تكون نصًّا عاديًّا فيه سجلّ واحد في كل سطر. والقائمة المفصولة بالفواصل هي ذلك تمامًا: كل سطر سجلّ، وكل فاصلة تفصل عمودًا عن الذي يليه. كونها نصًّا عاديًّا لا يُخرجها من كونها قاعدة بيانات — بل هي أبسط أنواعها."
      }
    },
    {
      id: "t2l1q02", type: "mcq", level: "easy", topics: ["t2-record", "t2-flat-file"],
      q: {
        en: "The library keeps its loans in this flat file. How many records does it hold, and how many different members?",
        ar: "تحفظ المكتبة إعاراتها في هذا الملف المسطّح. كم سجلًّا (record) يحمل، وكم عضوًا مختلفًا؟"
      },
      lang: "text",
      code: "M01,Sara Hamdan,Gaza,A Vision,2026-03-01\nM02,Omar Saleh,Khan Younis,War and Peace,2026-03-02\nM01,Sara Hamdan,Gaza,Citizen of the World,2026-03-05",
      options: [
        { en: "Three records, three members", ar: "ثلاثة سجلّات، ثلاثة أعضاء" },
        { en: "Two records, two members", ar: "سجلّان، عضوان" },
        { en: "Three records, two members", ar: "ثلاثة سجلّات، عضوان" }
      ],
      answer: 2,
      hint: {
        en: "Each line is one record. Then look at the first value of every line.",
        ar: "كل سطر سجلّ واحد. ثم انظر إلى القيمة الأولى في كل سطر."
      },
      explain: {
        en: "Each line is one record, so there are three — one per loan. But M01 appears on two of them, so only two members exist. Counting rows as members gives \"three members\"; collapsing the repeated member into one row gives \"two records\". A row of LOAN_LIST is a loan, not a member.",
        ar: "كل سطر سجلّ واحد، فهي ثلاثة — سجلّ لكل إعارة. لكن M01 يظهر في سطرين منها، فلا يوجد إلا عضوان. من يعدّ الصفوف أعضاءً يجيب «ثلاثة أعضاء»، ومن يدمج العضو المكرّر في صفّ واحد يجيب «سجلّان». صفّ LOAN_LIST إعارة، لا عضو."
      }
    },

    /* ---------------------------------------------------- 2 · advantages and limits */
    {
      id: "t2l1q03", type: "multi", level: "easy", topics: ["t2-flat-file-advantages"],
      q: {
        en: "Which of these are real advantages of a flat file database? Choose all that apply.",
        ar: "أيّ ممّا يلي مزايا حقيقية لقاعدة بيانات الملف المسطّح؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Easy to implement — one table, made in a minute", ar: "سهولة الإنشاء — جدول واحد يُنشأ في دقيقة" },
        { en: "Each author's name is stored only once", ar: "اسم كل مؤلف يُخزَّن مرّة واحدة فقط" },
        { en: "Simple sorting and filtering of reports", ar: "فرز التقارير وتصفيتها ببساطة" },
        { en: "Several librarians can change it at the same time safely", ar: "يستطيع عدّة أمناء مكتبة تعديله في الوقت نفسه بأمان" },
        { en: "Less hardware and software required", ar: "متطلّبات أقلّ من العتاد والبرمجيات" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "The advantages all come from having one table. Ask of each option: does one table give you this, or take it away?",
        ar: "المزايا كلها تنبع من وجود جدول واحد. اسأل عن كل خيار: هل الجدول الواحد يمنحك هذا أم يحرمك منه؟"
      },
      explain: {
        en: "Easy to implement, simple sorting and filtering, and less hardware and software are on the lecturer's list of advantages. Storing a name once is the opposite of what a flat file does — it repeats the author in every book row. And a flat file has no multi-user access, so several librarians changing it at once is one of its limits, not a strength.",
        ar: "سهولة الإنشاء، وبساطة الفرز والتصفية، وقلّة متطلّبات العتاد والبرمجيات كلها في قائمة المزايا عند المحاضرة. أمّا تخزين الاسم مرّة واحدة فعكس ما يفعله الملف المسطّح — إنه يكرّر المؤلف في صفّ كل كتاب. والملف المسطّح لا يدعم الوصول متعدّد المستخدمين (multi-user access)، فتعديل عدّة أمناء له معًا من حدوده لا من نقاط قوّته."
      }
    },
    {
      id: "t2l1q04", type: "contrast", level: "medium",
      topics: ["t2-flat-file-advantages", "t2-multi-table-advantages"],
      q: {
        en: "Sort each statement: is it an advantage of a flat file, or an advantage of a relational (multiple-table) database?",
        ar: "صنّف كل عبارة: هل هي ميزة للملف المسطّح، أم ميزة لقاعدة البيانات العلائقية متعدّدة الجداول؟"
      },
      concepts: [
        { en: "Flat file", ar: "الملف المسطّح" },
        { en: "Multiple tables", ar: "جداول متعدّدة" }
      ],
      rows: [
        { s: { en: "A spreadsheet or a text file is enough to run it", ar: "يكفي لتشغيله جدول بيانات أو ملف نصّي" }, a: 0 },
        { s: { en: "An author's name is stored once, not once per book", ar: "اسم المؤلف يُخزَّن مرّة واحدة، لا مرّة لكل كتاب" }, a: 1 },
        { s: { en: "Every report is one SELECT with no join", ar: "كل تقرير جملة SELECT واحدة بلا ربط (join)" }, a: 0 },
        { s: { en: "A single copy of a fact cannot disagree with itself", ar: "النسخة الوحيدة من الحقيقة لا تختلف مع نفسها" }, a: 1 },
        { s: { en: "Data integrity is easier, because each column gets a strong data type", ar: "سلامة البيانات أسهل، لأن لكل عمود نوع بيانات صارمًا" }, a: 1 },
        { s: { en: "Anyone can read it and understand it at a glance", ar: "يستطيع أيّ أحد قراءته وفهمه من النظرة الأولى" }, a: 0 }
      ],
      hint: {
        en: "Flat-file advantages are about simplicity and cost. Multi-table advantages are about storing each fact in fewer places.",
        ar: "مزايا الملف المسطّح تدور حول البساطة والتكلفة. ومزايا الجداول المتعدّدة تدور حول تخزين كل حقيقة في أماكن أقلّ."
      },
      explain: {
        en: "The flat file wins on simplicity: easy to understand, one table, one SELECT, little software. The multi-table design wins on correctness: less redundancy, avoidance of inconsistency, efficiency, data integrity and confidentiality. \"No join\" is tempting to give to both, but a join is exactly what splitting the table adds.",
        ar: "يتفوّق الملف المسطّح في البساطة: سهل الفهم، جدول واحد، جملة SELECT واحدة، برمجيات قليلة. وتتفوّق الجداول المتعدّدة في الصحّة: تكرار أقلّ، وتجنّب عدم الاتّساق، والكفاءة، وسلامة البيانات، والسرّية. قد يغريك أن تنسب «بلا ربط» للاثنين، لكن الربط (join) هو بالضبط ما يضيفه تقسيم الجدول."
      }
    },
    {
      id: "t2l1q05", type: "mcq", level: "medium", topics: ["t2-flat-file-choice", "t2-multi-user-access"],
      q: {
        en: "For which of these is a flat file a sound choice?",
        ar: "في أيّ حالة من هذه يكون الملف المسطّح خيارًا سليمًا؟"
      },
      options: [
        { en: "The department's five librarians record loans all day, from different desks", ar: "أمناء المكتبة الخمسة في القسم يسجّلون الإعارات طوال اليوم من مكاتب مختلفة" },
        { en: "A teacher lists the 25 books on their own classroom shelf, alone, on a laptop", ar: "معلّم يدوّن الكتب الخمسة والعشرين على رفّ صفّه، وحده، على حاسوبه المحمول" },
        { en: "The faculty's catalogue must survive a broken disk without losing a loan", ar: "فهرس الكلية يجب أن يصمد أمام تعطّل القرص دون أن تضيع إعارة واحدة" },
        { en: "Every university library's catalogue, millions of books, searched constantly", ar: "فهارس كل مكتبات الجامعة، ملايين الكتب، يُبحث فيها باستمرار" }
      ],
      answer: 1,
      hint: {
        en: "A flat file fits small, single-user needs. Check each case for size, number of users, and recovery.",
        ar: "الملف المسطّح يناسب الاحتياجات الصغيرة لمستخدم واحد. افحص كل حالة من حيث الحجم وعدد المستخدمين والاستعادة."
      },
      explain: {
        en: "A short list kept by one person is where a flat file shines: easy, cheap, little software. Five librarians at once need multi-user access and protection when two change data together; surviving a broken disk needs backup and recovery; millions of books hit \"slow for huge databases\". Calling a flat file always wrong is the mistake — here it is the sensible choice.",
        ar: "القائمة القصيرة التي يحفظها شخص واحد هي حيث يتألّق الملف المسطّح: سهل، رخيص، برمجيات قليلة. أمّا خمسة أمناء في آن واحد فيحتاجون إلى وصول متعدّد المستخدمين وحماية حين يعدّل اثنان البيانات معًا؛ والصمود أمام تعطّل القرص يحتاج إلى النسخ الاحتياطي والاستعادة؛ وملايين الكتب تصطدم بعيب «البطء في قواعد البيانات الضخمة». الخطأ أن تعدّ الملف المسطّح خاطئًا دائمًا — هنا هو الخيار المعقول."
      }
    },
    {
      id: "t2l1q06", type: "tf", level: "medium", topics: ["t2-multi-user-access", "t2-flat-file-disadvantages"],
      q: {
        en: "The loan list is small — about 200 rows. So a flat file is fine even though the department's five librarians all add loans to it during the day.",
        ar: "قائمة الإعارات صغيرة — نحو 200 صفّ. لذلك يصلح الملف المسطّح حتى لو كان أمناء المكتبة الخمسة في القسم يضيفون إليها إعارات طوال اليوم."
      },
      truth: false,
      hint: {
        en: "Size is only one of the flat file's limits. What does it lack when several people work on it?",
        ar: "الحجم واحد فقط من حدود الملف المسطّح. ما الذي ينقصه حين يعمل عليه عدّة أشخاص؟"
      },
      explain: {
        en: "False. Small size removes one disadvantage (slowness), but not the others. A flat file has no multi-user access and no protection when two people change the data at the same time, so five librarians can overwrite each other's work. Judge a flat file on users and recovery, not on row count alone.",
        ar: "خطأ. صِغَر الحجم يزيل عيبًا واحدًا (البطء)، لا بقيّة العيوب. فالملف المسطّح لا يدعم الوصول متعدّد المستخدمين ولا يحمي البيانات حين يعدّلها شخصان في الوقت نفسه، فقد يمحو أحد الأمناء عمل غيره. احكم على الملف المسطّح بعدد مستخدميه وبقدرته على الاستعادة، لا بعدد صفوفه وحده."
      }
    },
    {
      id: "t2l1q07", type: "match", level: "easy",
      topics: ["t2-flat-file-disadvantages", "t2-data-redundancy", "t2-data-inconsistency", "t2-multi-user-access"],
      q: {
        en: "Match each disadvantage of a flat file to what it looks like in the department's library.",
        ar: "صِل كل عيب من عيوب الملف المسطّح بما يبدو عليه في مكتبة القسم."
      },
      leftHead: { en: "Disadvantage", ar: "العيب" },
      rightHead: { en: "In the library", ar: "في المكتبة" },
      pairs: [
        { l: { en: "Data redundancy", ar: "تكرار البيانات (data redundancy)" },
          r: { en: "\"Oliver Goldsmith\" is written in two rows", ar: "«Oliver Goldsmith» مكتوب في صفّين" } },
        { l: { en: "Data inconsistency", ar: "عدم اتّساق البيانات (data inconsistency)" },
          r: { en: "AD0003 has two different names", ar: "للمؤلف AD0003 اسمان مختلفان" } },
        { l: { en: "No multi-user access", ar: "لا وصول متعدّد المستخدمين" },
          r: { en: "Two librarians cannot safely edit the list at once", ar: "لا يستطيع أمينان تعديل القائمة معًا بأمان" } },
        { l: { en: "No backup and recovery", ar: "لا نسخ احتياطي ولا استعادة" },
          r: { en: "A broken disk loses the whole list", ar: "تعطّل القرص يُضيع القائمة كلها" } },
        { l: { en: "Slow for huge databases", ar: "بطء في قواعد البيانات الضخمة" },
          r: { en: "Searching a million-row list takes too long", ar: "البحث في قائمة من مليون صفّ يستغرق وقتًا طويلًا" } }
      ],
      hint: {
        en: "Redundancy is a copy; inconsistency is two copies that disagree.",
        ar: "التكرار نسخة زائدة؛ وعدم الاتّساق نسختان مختلفتان."
      },
      explain: {
        en: "The pair most often swapped is redundancy and inconsistency. Redundancy is the same fact stored twice — harmless while the copies agree. Inconsistency is what happens when they stop agreeing. Redundancy makes inconsistency possible; it is not the same thing.",
        ar: "أكثر زوج يُخلط بينهما هو التكرار وعدم الاتّساق. التكرار هو الحقيقة نفسها مخزّنة مرّتين — ولا ضرر منه ما دامت النسختان متّفقتين. وعدم الاتّساق هو ما يحدث حين تتوقّفان عن الاتّفاق. التكرار يجعل عدم الاتّساق ممكنًا، لكنه ليس هو."
      }
    },

    /* ---------------------------------------------------- 3 · repetition */
    {
      id: "t2l1q08", type: "output", level: "medium", topics: ["t2-data-redundancy"],
      q: {
        en: "BOOK_LIST starts with its usual four rows. The library buys two more Goldsmith books. What number does the final query return?",
        ar: "يبدأ BOOK_LIST بصفوفه الأربعة المعتادة. تشتري المكتبة كتابين آخرين لـ Goldsmith. ما العدد الذي يعيده الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO book_list VALUES ('AD0003', 'Oliver Goldsmith', 'The Deserted Village');\nINSERT INTO book_list VALUES ('AD0003', 'Oliver Goldsmith', 'The Vicar of Wakefield');\n\nSELECT COUNT(*) AS copies\nFROM book_list\nWHERE author_name = 'Oliver Goldsmith';",
      blanks: [{ accept: ["4"], label: { en: "copies", ar: "copies" } }],
      hint: {
        en: "Each row is a book. How many of the rows now carry the name?",
        ar: "كل صفّ كتاب. كم صفًّا يحمل الاسم الآن؟"
      },
      explain: {
        en: "4: the two original Goldsmith rows plus one for each new book. The name is stored once per book, not once per author, so the copies grow with every title he wrote. Answering 1 treats the table as if it listed authors — it lists books.",
        ar: "4: صفّا Goldsmith الأصليّان وصفّ لكل كتاب جديد. الاسم يُخزَّن مرّة لكل كتاب، لا مرّة لكل مؤلف، فتزداد النسخ مع كل عنوان كتبه. من يجيب 1 يعامل الجدول كأنه قائمة مؤلفين — وهو قائمة كتب."
      },
      solution: { out: "4" }
    },
    {
      id: "t2l1q09", type: "fill", level: "easy", topics: ["t2-data-redundancy", "t2-record"],
      q: {
        en: "Complete the sentence that explains why LOAN_LIST repeats Sara Hamdan's city. Use one word in each blank.",
        ar: "أكمل الجملة التي تشرح لماذا يكرّر LOAN_LIST مدينة Sara Hamdan. كلمة واحدة في كل فراغ (بالإنجليزية)."
      },
      lang: "text",
      code: "Each row of LOAN_LIST is about one ____1____,\nso every fact about the ____2____ is copied once per loan.",
      blanks: [
        { accept: ["loan", "Loan", "LOAN"], label: { en: "1", ar: "1" } },
        { accept: ["member", "Member", "MEMBER"], label: { en: "2", ar: "2" } }
      ],
      hint: {
        en: "Ask what one row stands for, then what other thing's facts ride along with it.",
        ar: "اسأل: علامَ يدلّ الصفّ الواحد؟ ثم: حقائق أيّ شيء آخر تُحمَل معه؟"
      },
      explain: {
        en: "A row of LOAN_LIST is one loan. Anything true of the member — name, city — has no row of its own, so it is copied into every loan that member makes. The table's shape forces the copy; it is not carelessness.",
        ar: "صفّ LOAN_LIST إعارة واحدة. وكل ما يصدق على العضو — اسمه ومدينته — ليس له صفّ خاص، فيُنسخ في كل إعارة يقوم بها ذلك العضو. شكل الجدول هو الذي يفرض النسخ؛ وليس الأمر إهمالًا."
      },
      solution: { en: "1 = loan, 2 = member.", ar: "1 = loan (إعارة)، 2 = member (عضو)." }
    },

    /* ---------------------------------------------------- 4 · update anomaly */
    {
      id: "t2l1q10", type: "error", level: "medium",
      topics: ["t2-update-anomaly", "t2-data-inconsistency", "t2-anomaly"],
      q: {
        en: "Sara Hamdan has moved to Rafah. The librarian updated only her latest loan. Which line now contradicts what the library knows about her?",
        ar: "انتقلت Sara Hamdan إلى رفح. عدّل أمين المكتبة إعارتها الأخيرة فقط. أيّ سطر يناقض الآن ما تعرفه المكتبة عنها؟"
      },
      lang: "text",
      code: "M01, Sara Hamdan, Gaza,        A Vision,               2026-03-01\nM02, Omar Saleh,  Khan Younis, War and Peace,          2026-03-02\nM01, Sara Hamdan, Rafah,       Citizen of the World,   2026-03-05\nM02, Omar Saleh,  Khan Younis, Androcles and the Lion, 2026-03-07",
      answer: 1,
      hint: {
        en: "Find every row that stores Sara's city, then the one the update missed.",
        ar: "جِد كل صفّ يخزّن مدينة Sara، ثم الصفّ الذي فاته التعديل."
      },
      explain: {
        en: "Line 1 still says Gaza while line 3 says Rafah: two copies of one fact that disagree — data inconsistency, left behind by an update anomaly. Line 3 is the corrected row, not the error. Omar's rows repeat too, but they agree, so they are redundant without being inconsistent.",
        ar: "السطر 1 ما زال يقول Gaza بينما يقول السطر 3 Rafah: نسختان من حقيقة واحدة مختلفتان — عدم اتّساق في البيانات خلّفه شذوذ التحديث (update anomaly). السطر 3 هو الصفّ المصحَّح لا الخطأ. وصفّا Omar مكرّران أيضًا، لكنهما متّفقان، فهما تكرار بلا عدم اتّساق."
      },
      solution: {
        en: "Line 1: it still stores Gaza. Every copy of Sara's city had to change, not only the newest.",
        ar: "السطر 1: ما زال يخزّن Gaza. كان يجب تغيير كل نسخة من مدينة Sara، لا الأحدث فقط."
      }
    },
    {
      id: "t2l1q11", type: "trace", level: "medium", topics: ["t2-update-anomaly", "t2-data-inconsistency"],
      q: {
        en: "Run this against the original four-row BOOK_LIST. How many rows does the SELECT return?",
        ar: "شغّل هذا على BOOK_LIST الأصلي ذي الصفوف الأربعة. كم صفًّا تعيده جملة SELECT؟"
      },
      lang: "sql",
      code: "UPDATE book_list\nSET author_name = 'Goldsmith, Oliver'\nWHERE title = 'Citizen of the World';\n\nSELECT DISTINCT author_name\nFROM book_list\nWHERE author_id = 'AD0003';",
      blanks: [{ accept: ["2", "two", "Two"], label: { en: "rows", ar: "الصفوف" } }],
      hint: {
        en: "The UPDATE picks rows by title. How many of AD0003's rows have that title?",
        ar: "جملة UPDATE تختار الصفوف بالعنوان. كم صفًّا من صفوف AD0003 يحمل ذلك العنوان؟"
      },
      explain: {
        en: "2: \"Goldsmith, Oliver\" and \"Oliver Goldsmith\". The WHERE on title reached one of his two rows, so one author now has two names. SQL ran it without complaint — nothing in a flat table stops a partial update. Expecting 1 assumes the database keeps the copies in step; it does not.",
        ar: "2: «Goldsmith, Oliver» و«Oliver Goldsmith». شرط WHERE على العنوان وصل إلى صفّ واحد من صفّيه، فصار للمؤلف الواحد اسمان. ونفّذ SQL الجملة بلا اعتراض — لا شيء في الجدول المسطّح يمنع التحديث الجزئي. من يتوقّع 1 يفترض أن قاعدة البيانات تُبقي النسخ متطابقة، وهي لا تفعل."
      },
      solution: { out: "Goldsmith, Oliver\nOliver Goldsmith" }
    },
    {
      id: "t2l1q12", type: "output", level: "hard", topics: ["t2-update-anomaly", "t2-data-inconsistency"],
      q: {
        en: "Starting from the original four rows, the librarian runs this. Which result does the report show?",
        ar: "انطلاقًا من الصفوف الأربعة الأصلية، ينفّذ أمين المكتبة ما يلي. أيّ نتيجة يعرضها التقرير؟"
      },
      lang: "sql",
      code: "UPDATE book_list\nSET author_name = 'Goldsmith, Oliver'\nWHERE title = 'Citizen of the World';\n\nSELECT author_name, COUNT(*) AS books\nFROM book_list\nGROUP BY author_name\nORDER BY author_name;",
      options: [
        { code: "author_name        books\nGoldsmith, Oliver  2\nLeo Tolstoy        1\nOscar Wilde        1" },
        { code: "author_name        books\nGoldsmith, Oliver  1\nLeo Tolstoy        1\nOliver Goldsmith   1\nOscar Wilde        1" },
        { code: "author_name        books\nLeo Tolstoy        1\nOliver Goldsmith   2\nOscar Wilde        1" }
      ],
      answer: 1,
      hint: {
        en: "GROUP BY author_name groups by the text in the column, not by who the person is.",
        ar: "GROUP BY author_name يجمّع حسب النصّ في العمود، لا حسب هويّة الشخص."
      },
      explain: {
        en: "Four groups: the update changed one row, so \"Goldsmith, Oliver\" and \"Oliver Goldsmith\" are two different strings and the report shows one author as two, each with one book. The result with Goldsmith counted twice under the new name assumes the rename reached both rows; the one under the old name assumes the update failed. It did neither.",
        ar: "أربع مجموعات: غيّر التحديث صفًّا واحدًا، فصار «Goldsmith, Oliver» و«Oliver Goldsmith» نصّين مختلفين، ويُظهر التقرير المؤلف الواحد مؤلفَين، لكلٍّ منهما كتاب. النتيجة التي تعدّ لـ Goldsmith كتابين تحت الاسم الجديد تفترض أن التعديل وصل إلى الصفّين؛ والتي تعدّهما تحت الاسم القديم تفترض أن التعديل فشل. لم يحدث هذا ولا ذاك."
      },
      solution: { out: "Goldsmith, Oliver | 1\nLeo Tolstoy | 1\nOliver Goldsmith | 1\nOscar Wilde | 1" }
    },
    {
      id: "t2l1q13", type: "compare", level: "hard", topics: ["t2-update-anomaly", "t2-one-fact-one-place"],
      q: {
        en: "Two librarians rename Goldsmith in the flat BOOK_LIST. Which statement is correct?",
        ar: "يغيّر أمينان اسم Goldsmith في BOOK_LIST المسطّح. أيّ عبارة صحيحة؟"
      },
      lang: "sql",
      codeA: "UPDATE book_list\nSET author_name = 'Goldsmith, Oliver'\nWHERE title = 'Citizen of the World';",
      codeB: "UPDATE book_list\nSET author_name = 'Goldsmith, Oliver'\nWHERE author_id = 'AD0003';",
      options: [
        { en: "A is right: the title identifies the record the librarian meant to change", ar: "A هو الصحيح: العنوان يحدّد السجلّ الذي قصد الأمين تغييره" },
        { en: "B removes the update anomaly from the flat table for good", ar: "B يزيل شذوذ التحديث من الجدول المسطّح نهائيًّا" },
        { en: "B renames both rows today, but the table still allows two names for AD0003; only splitting the table fixes that", ar: "B يغيّر الصفّين اليوم، لكن الجدول ما زال يسمح باسمين لـ AD0003؛ ولا يعالج ذلك إلا تقسيم الجدول" },
        { en: "Both leave AD0003 with two names", ar: "كلاهما يترك لـ AD0003 اسمين" }
      ],
      answer: 2,
      hint: {
        en: "Separate \"this statement worked\" from \"the table can no longer go wrong\".",
        ar: "افصل بين «هذه الجملة نجحت» و«الجدول لم يعد قابلًا للخطأ»."
      },
      explain: {
        en: "B reaches every AD0003 row, so this rename succeeds. But it is a habit the person must remember on every change; the table itself still permits two names, and one forgotten condition brings the inconsistency back. The tempting answer is that B fixes the anomaly — it only avoids it once. A is the anomaly itself. The real fix is the table's shape: the name stored once, in AUTHOR.",
        ar: "B يصل إلى كل صفوف AD0003، فينجح هذا التغيير. لكنه عادة على الشخص أن يتذكّرها في كل تعديل؛ أمّا الجدول نفسه فما زال يسمح باسمين، وشرط واحد منسيّ يعيد عدم الاتّساق. الإجابة المغرية أن B يعالج الشذوذ — وهو لا يفعل إلا تجنّبه مرّة واحدة. وA هو الشذوذ نفسه. العلاج الحقيقي في شكل الجدول: الاسم مخزَّن مرّة واحدة، في AUTHOR."
      }
    },

    /* ---------------------------------------------------- 5 · insert anomaly (evolve t2l1-e1) */
    {
      id: "t2l1q14", type: "mcq", level: "medium", topics: ["t2-insert-anomaly", "t2-anomaly"],
      q: {
        en: "A new member, Lina, joins the library today but has borrowed nothing yet. The only table is LOAN_LIST(MEMBER_ID, MEMBER_NAME, CITY, TITLE, LOAN_DATE). What is the problem?",
        ar: "انضمّت عضوة جديدة، Lina، إلى المكتبة اليوم ولم تستعر شيئًا بعد. الجدول الوحيد هو LOAN_LIST(MEMBER_ID, MEMBER_NAME, CITY, TITLE, LOAN_DATE). ما المشكلة؟"
      },
      options: [
        { en: "An insert anomaly: she cannot be recorded without a loan", ar: "شذوذ إضافة: لا يمكن تسجيلها دون إعارة" },
        { en: "An update anomaly: her city will be stored in several rows", ar: "شذوذ تحديث: ستُخزَّن مدينتها في عدّة صفوف" },
        { en: "A delete anomaly: removing a loan will remove her", ar: "شذوذ حذف: حذف إعارة سيحذفها" },
        { en: "No problem: insert her with an empty TITLE and LOAN_DATE", ar: "لا مشكلة: أضِفها بعنوان وتاريخ إعارة فارغين" }
      ],
      answer: 0,
      hint: {
        en: "What kind of thing is every row of LOAN_LIST? Is there such a thing for Lina yet?",
        ar: "ما نوع الشيء الذي يمثّله كل صفّ في LOAN_LIST؟ وهل يوجد شيء كهذا لـ Lina بعد؟"
      },
      explain: {
        en: "Every row is a loan, so a member can only enter riding on a loan — the insert anomaly: one fact cannot be recorded without an unrelated one. The empty-title patch is the tempting answer, but it is a fake row: it claims to be a loan and is not, and it spoils every count of loans. Update and delete anomalies need rows that already exist.",
        ar: "كل صفّ إعارة، فلا يدخل العضو إلا محمولًا على إعارة — وهذا شذوذ الإضافة (insert anomaly): لا يمكن تسجيل حقيقة دون حقيقة أخرى لا علاقة لها بها. ترقيع العنوان الفارغ هو الإجابة المغرية، لكنه صفّ زائف: يدّعي أنه إعارة وليس كذلك، ويُفسد كل عدّ للإعارات. أمّا شذوذا التحديث والحذف فيحتاجان إلى صفوف موجودة أصلًا."
      }
    },
    {
      id: "t2l1q15", type: "compare", level: "hard", topics: ["t2-insert-anomaly", "t2-one-fact-one-place"],
      q: {
        en: "The library wants to record Jane Austen (AD0004) before her book arrives. Model A is version 2 of the lesson's insert-anomaly evolve block; model B is version 3. Which is better, and why?",
        ar: "تريد المكتبة تسجيل Jane Austen (AD0004) قبل وصول كتابها. النموذج A هو النسخة 2 في مراحل تطوّر شذوذ الإضافة في الدرس؛ والنموذج B هو النسخة 3. أيّهما أفضل، ولماذا؟"
      },
      lang: "text",
      codeA: "BOOK_LIST\nAD0001 | Oscar Wilde      | A Vision\nAD0002 | Leo Tolstoy      | War and Peace\nAD0003 | Oliver Goldsmith | Citizen of the World\nAD0003 | Oliver Goldsmith | Androcles and the Lion\nAD0004 | Jane Austen      | (null)",
      codeB: "AUTHOR                        BOOK\nAD0001 | Oscar Wilde        A Vision               | AD0001\nAD0002 | Leo Tolstoy        War and Peace          | AD0002\nAD0003 | Oliver Goldsmith   Citizen of the World   | AD0003\nAD0004 | Jane Austen        Androcles and the Lion | AD0003",
      options: [
        { en: "A: she is recorded and everything is still in one table, which is simpler", ar: "A: سُجّلت، وكل شيء ما زال في جدول واحد، وهذا أبسط" },
        { en: "They are equally good: both record Jane Austen", ar: "متساويان: كلاهما يسجّل Jane Austen" },
        { en: "B: it no longer needs an AUTHOR_ID to record her", ar: "B: لم يعد يحتاج إلى AUTHOR_ID لتسجيلها" },
        { en: "B: her row is about an author, so BOOK still lists exactly the four books the library owns", ar: "B: صفّها يخصّ مؤلفًا، فيبقى BOOK قائمة بالكتب الأربعة التي تملكها المكتبة بالضبط" }
      ],
      answer: 3,
      hint: {
        en: "Count the books each model claims the library owns.",
        ar: "عُدّ الكتب التي يدّعي كل نموذج أن المكتبة تملكها."
      },
      explain: {
        en: "Both record her, but A does it with a row that claims to be a book and is not: five \"books\" for a library that owns four, and she will be stored twice when her book arrives. B gives her a row in AUTHOR, so BOOK still has four rows. B still uses AUTHOR_ID — that common field is what connects the two tables.",
        ar: "كلاهما يسجّلها، لكن A يفعل ذلك بصفّ يدّعي أنه كتاب وليس كذلك: خمسة «كتب» لمكتبة تملك أربعة، وستُخزَّن مرّتين حين يصل كتابها. أمّا B فيعطيها صفًّا في AUTHOR، فيبقى في BOOK أربعة صفوف. وB ما زال يستخدم AUTHOR_ID — فهذا الحقل المشترك هو ما يربط الجدولين."
      }
    },
    {
      id: "t2l1q16", type: "output", level: "hard", topics: ["t2-insert-anomaly", "t2-data-redundancy"],
      q: {
        en: "Version 2's patch, continued: Jane Austen goes in with an empty title, and later her book arrives and is added the usual way. What does the query return?",
        ar: "استمرار لترقيع النسخة 2: أُدخلت Jane Austen بعنوان فارغ، ثم وصل كتابها لاحقًا وأُضيف بالطريقة المعتادة. ماذا يعيد الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO book_list VALUES ('AD0004', 'Jane Austen', NULL);\n-- weeks later\nINSERT INTO book_list VALUES ('AD0004', 'Jane Austen', 'Pride and Prejudice');\n\nSELECT COUNT(*) AS austen_rows\nFROM book_list\nWHERE author_id = 'AD0004';",
      blanks: [{ accept: ["2"], label: { en: "austen_rows", ar: "austen_rows" } }],
      hint: {
        en: "The new INSERT does not know the placeholder row exists.",
        ar: "جملة INSERT الجديدة لا تعرف بوجود الصفّ المؤقّت."
      },
      explain: {
        en: "2: the placeholder row was never removed, so she is now stored twice — the defect version 2 hides. It also leaves one row that claims to be a book and is not. Version 3 has no such row to clean up: the author is one row of AUTHOR, the book one row of BOOK.",
        ar: "2: لم يُحذف الصفّ المؤقّت قطّ، فصارت مخزّنة مرّتين — وهذا هو العيب الذي تخفيه النسخة 2. ويبقى أيضًا صفّ يدّعي أنه كتاب وليس كذلك. أمّا النسخة 3 فلا صفّ فيها يحتاج إلى تنظيف: المؤلفة صفّ واحد في AUTHOR، والكتاب صفّ واحد في BOOK."
      },
      solution: { out: "2" }
    },
    {
      id: "t2l1q17", type: "tf", level: "easy", topics: ["t2-insert-anomaly"],
      q: {
        en: "In version 1 of the insert-anomaly evolve block — the flat BOOK_LIST as it is — Jane Austen can be recorded honestly as soon as her book is ordered.",
        ar: "في النسخة 1 من مراحل تطوّر شذوذ الإضافة — BOOK_LIST المسطّح كما هو — يمكن تسجيل Jane Austen تسجيلًا صادقًا بمجرّد طلب كتابها."
      },
      truth: false,
      hint: {
        en: "What is the only kind of row version 1 has?",
        ar: "ما النوع الوحيد من الصفوف في النسخة 1؟"
      },
      explain: {
        en: "False. Every row of version 1 is \"a book and its author\", and the book has not arrived, so there is no honest row to write. Ordering a book is not owning it. That is the insert anomaly; version 2 patches it with a fake row and version 3 fixes it with an AUTHOR table.",
        ar: "خطأ. كل صفّ في النسخة 1 هو «كتاب ومؤلفه»، والكتاب لم يصل، فلا يوجد صفّ صادق يُكتب. طلب الكتاب ليس امتلاكه. هذا شذوذ الإضافة؛ والنسخة 2 ترقّعه بصفّ زائف، والنسخة 3 تعالجه بجدول AUTHOR."
      }
    },

    /* ---------------------------------------------------- 6 · delete anomaly */
    {
      id: "t2l1q18", type: "mcq", level: "easy", topics: ["t2-delete-anomaly"],
      q: {
        en: "LOAN_LIST holds Sara's loans of A Vision and Citizen of the World, and Omar's loan of War and Peace. Deleting which loan loses a member from the database entirely?",
        ar: "يحمل LOAN_LIST إعارتَي Sara لكتابَي A Vision وCitizen of the World، وإعارة Omar لكتاب War and Peace. حذف أيّ إعارة يُضيع عضوًا من قاعدة البيانات كليًّا؟"
      },
      options: [
        { en: "Sara's loan of A Vision", ar: "إعارة Sara لكتاب A Vision" },
        { en: "Omar's loan of War and Peace", ar: "إعارة Omar لكتاب War and Peace" },
        { en: "Sara's loan of Citizen of the World", ar: "إعارة Sara لكتاب Citizen of the World" }
      ],
      answer: 1,
      hint: {
        en: "A member survives a deletion only if another row still carries them.",
        ar: "ينجو العضو من الحذف فقط إن بقي صفّ آخر يحمله."
      },
      explain: {
        en: "Omar has one row, so deleting his only loan erases everything known about him — the delete anomaly: one deletion destroys another fact you wanted to keep. Sara has two rows, so either of her loans can go and she remains.",
        ar: "لـ Omar صفّ واحد، فحذف إعارته الوحيدة يمحو كل ما يُعرف عنه — وهذا شذوذ الحذف (delete anomaly): حذف واحد يُتلف حقيقة أخرى أردت الاحتفاظ بها. أمّا Sara فلها صفّان، فيمكن حذف أيّ من إعارتيها وتبقى هي."
      }
    },
    {
      id: "t2l1q19", type: "multi", level: "hard",
      topics: ["t2-delete-anomaly", "t2-data-redundancy", "t2-anomaly"],
      q: {
        en: "Which statements about deleting rows are true? Choose all that apply.",
        ar: "أيّ العبارات الآتية عن حذف الصفوف صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Deleting A Vision from the flat BOOK_LIST also loses Oscar Wilde", ar: "حذف A Vision من BOOK_LIST المسطّح يُضيع Oscar Wilde أيضًا" },
        { en: "Since Goldsmith survives losing one book, repetition is a good protection worth keeping", ar: "بما أن Goldsmith ينجو من فقدان كتاب، فالتكرار حماية جيّدة تستحقّ الإبقاء" },
        { en: "Deleting Androcles and the Lion from the flat BOOK_LIST leaves Goldsmith in the table", ar: "حذف Androcles and the Lion من BOOK_LIST المسطّح يُبقي Goldsmith في الجدول" },
        { en: "After the split, deleting War and Peace from BOOK also deletes Leo Tolstoy from AUTHOR", ar: "بعد التقسيم، حذف War and Peace من BOOK يحذف Leo Tolstoy من AUTHOR أيضًا" }
      ],
      answer: [0, 2],
      hint: {
        en: "In the flat table, count each author's rows. After the split, ask which table the DELETE touches.",
        ar: "في الجدول المسطّح، عُدّ صفوف كل مؤلف. وبعد التقسيم، اسأل: أيّ جدول تمسّه جملة DELETE؟"
      },
      explain: {
        en: "Wilde has one row, so his book takes him with it; Goldsmith has two, so he survives. That survival is luck, not design: the same repetition causes the update anomaly, and his last book would still take him. After the split, the DELETE touches only BOOK, and Tolstoy's row in AUTHOR stays.",
        ar: "لـ Wilde صفّ واحد، فيأخذه كتابه معه؛ ولـ Goldsmith صفّان، فينجو. لكن نجاته حظّ لا تصميم: فالتكرار نفسه يسبّب شذوذ التحديث، وكتابه الأخير سيأخذه معه حتمًا. وبعد التقسيم تمسّ جملة DELETE جدول BOOK وحده، ويبقى صفّ Tolstoy في AUTHOR."
      }
    },

    /* ---------------------------------------------------- 7 · one fact, one place (evolve t2l1-e2) */
    {
      id: "t2l1q20", type: "order", level: "medium",
      topics: ["t2-data-redundancy", "t2-update-anomaly", "t2-data-inconsistency"],
      q: {
        en: "Put the chain in order, from the cause to the wrong report.",
        ar: "رتّب السلسلة، من السبب إلى التقرير الخاطئ."
      },
      items: [
        { en: "One table describes two things: each row is a book, carrying its author", ar: "جدول واحد يصف شيئين: كل صفّ كتاب يحمل مؤلفه" },
        { en: "The author's name is copied into every one of their books' rows", ar: "يُنسخ اسم المؤلف في كل صفّ من صفوف كتبه" },
        { en: "A rename is applied to some of those rows, not all", ar: "يُطبَّق تغيير الاسم على بعض تلك الصفوف لا كلها" },
        { en: "Two stored copies of the author's name disagree", ar: "نسختان مخزّنتان من اسم المؤلف تختلفان" },
        { en: "A report by author name shows one author as two", ar: "تقرير حسب اسم المؤلف يُظهر المؤلف الواحد مؤلفَين" }
      ],
      answer: [0, 1, 2, 3, 4],
      hint: {
        en: "Shape → redundancy → update anomaly → inconsistency → symptom.",
        ar: "الشكل ← التكرار ← شذوذ التحديث ← عدم الاتّساق ← العَرَض."
      },
      explain: {
        en: "The shape forces the copy (redundancy); a partial change to the copies is the update anomaly; the disagreeing copies are the inconsistency; the wrong report is what a user finally sees. Fix the first link — one table per thing — and the rest cannot happen.",
        ar: "الشكل يفرض النسخ (التكرار)؛ والتغيير الجزئي للنسخ هو شذوذ التحديث؛ والنسخ المختلفة هي عدم الاتّساق؛ والتقرير الخاطئ هو ما يراه المستخدم في النهاية. عالج الحلقة الأولى — جدول لكل شيء — فلا يحدث شيء من البقية."
      }
    },
    {
      id: "t2l1q21", type: "write", level: "hard", topics: ["t2-one-fact-one-place"],
      q: {
        en: "Apply \"one fact, one place\" to LOAN_LIST(MEMBER_ID, MEMBER_NAME, CITY, TITLE, LOAN_DATE). Write two CREATE TABLE statements, members and loans, each ending in a semicolon, so that a member's name and city are stored once and the tables share a common field.",
        ar: "طبّق مبدأ «حقيقة واحدة، مكان واحد» على LOAN_LIST(MEMBER_ID, MEMBER_NAME, CITY, TITLE, LOAN_DATE). اكتب جملتَي CREATE TABLE، الأولى members والثانية loans، تنتهي كل منهما بفاصلة منقوطة، بحيث يُخزَّن اسم العضو ومدينته مرّة واحدة ويشترك الجدولان في حقل مشترك."
      },
      lang: "sql",
      lines: 10,
      starter: "CREATE TABLE members (\n\n);\n\nCREATE TABLE loans (\n\n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+members?\\s*\\((?=[^;]*member_id)(?=[^;]*member_name)(?=[^;]*city)", flags: "i",
          label: { en: "members holds member_id, member_name and city", ar: "members يحمل member_id وmember_name وcity" } },
        { re: "CREATE\\s+TABLE\\s+loans?\\s*\\((?=[^;]*member_id)", flags: "i",
          label: { en: "loans carries member_id, the common field", ar: "loans يحمل member_id، الحقل المشترك" } },
        { re: "CREATE\\s+TABLE\\s+loans?\\s*\\((?=[^;]*title)(?=[^;]*loan_date)", flags: "i",
          label: { en: "loans holds title and loan_date", ar: "loans يحمل title وloan_date" } }
      ],
      forbid: [
        { re: "CREATE\\s+TABLE\\s+loans?\\s*\\([^;]*(member_name|city)", flags: "i",
          label: { en: "loans must not repeat the member's name or city — that is the redundancy you are removing", ar: "يجب ألّا يكرّر loans اسم العضو أو مدينته — فهذا هو التكرار الذي تزيله" } }
      ],
      hint: {
        en: "Facts about the member go where there is one row per member. The loan keeps only what belongs to the loan, plus the field that points at its member.",
        ar: "حقائق العضو تذهب حيث يوجد صفّ واحد لكل عضو. والإعارة لا تحتفظ إلا بما يخصّها، مع الحقل الذي يشير إلى عضوها."
      },
      explain: {
        en: "members has one row per member, so Sara's city lives in one place; loans keeps the title and date of each loan plus member_id to say whose it is. Copying member_name into loans brings the redundancy straight back. Now Lina can be a member with no loans, and deleting Omar's loan leaves Omar.",
        ar: "في members صفّ واحد لكل عضو، فتسكن مدينة Sara في مكان واحد؛ وloans يحتفظ بعنوان كل إعارة وتاريخها مع member_id ليقول لمن هي. ونسخ member_name إلى loans يعيد التكرار فورًا. والآن يمكن أن تكون Lina عضوة بلا إعارات، وحذف إعارة Omar يُبقي Omar."
      },
      solution: {
        code: "CREATE TABLE members (\n  member_id   VARCHAR(4),\n  member_name VARCHAR(40),\n  city        VARCHAR(30)\n);\n\nCREATE TABLE loans (\n  member_id VARCHAR(4),\n  title     VARCHAR(60),\n  loan_date DATE\n);",
        en: "The member's facts once in members; each loan in loans, connected by member_id. Lesson 2 names member_id's two roles.",
        ar: "حقائق العضو مرّة واحدة في members؛ وكل إعارة في loans، والربط عبر member_id. والدرس الثاني يسمّي دورَي member_id."
      }
    },
    {
      id: "t2l1q22", type: "complete", level: "medium", topics: ["t2-one-fact-one-place"],
      q: {
        en: "Version 2 of the lesson's last evolve block, in SQL. What completes the books table?",
        ar: "النسخة 2 من آخر مراحل تطوّر في الدرس، بلغة SQL. ما الذي يُكمل جدول books؟"
      },
      lang: "sql",
      code: "CREATE TABLE authors (\n  author_id   VARCHAR(6),\n  author_name VARCHAR(40)\n);\n\nCREATE TABLE books (\n  title VARCHAR(60),\n  ____\n);",
      options: [
        { code: "author_name VARCHAR(40)" },
        { code: "author_id VARCHAR(6), author_name VARCHAR(40)" },
        { code: "author_id VARCHAR(6)" }
      ],
      answer: 2,
      hint: {
        en: "The book must say who wrote it, without storing anything about the author a second time.",
        ar: "يجب أن يقول الكتاب من كتبه، دون أن يخزّن شيئًا عن المؤلف مرّة ثانية."
      },
      explain: {
        en: "A book carries only author_id, the common field; the name lives once in authors. Adding author_name to books — alone or with the id — puts a second copy of the name back, and the update anomaly returns. The name alone is worse still: two authors with the same name could not be told apart.",
        ar: "لا يحمل الكتاب إلا author_id، الحقل المشترك؛ والاسم يسكن مرّة واحدة في authors. إضافة author_name إلى books — وحده أو مع المعرّف — تعيد نسخة ثانية من الاسم، فيعود شذوذ التحديث. والاسم وحده أسوأ: لن يمكن التمييز بين مؤلفَين يحملان الاسم نفسه."
      },
      solution: {
        code: "CREATE TABLE books (\n  title     VARCHAR(60),\n  author_id VARCHAR(6)\n);",
        en: "author_id connects each book to its one author row.",
        ar: "author_id يربط كل كتاب بصفّ مؤلفه الوحيد."
      }
    },
    {
      id: "t2l1q23", type: "mcq", level: "easy", topics: ["t2-multi-table-advantages"],
      q: {
        en: "A librarian notes: \"After the split, each piece of information sits in fewer places, so storing and changing it costs less.\" Which advantage of a multiple-table database is that?",
        ar: "يلاحظ أمين مكتبة: «بعد التقسيم صارت كل معلومة في أماكن أقلّ، فصار تخزينها وتغييرها أقلّ كلفة.» أيّ ميزة من مزايا قاعدة البيانات متعدّدة الجداول هذه؟"
      },
      options: [
        { en: "Confidentiality", ar: "السرّية (confidentiality)" },
        { en: "Efficiency", ar: "الكفاءة (efficiency)" },
        { en: "Less hardware and software required", ar: "متطلّبات أقلّ من العتاد والبرمجيات" },
        { en: "Data integrity", ar: "سلامة البيانات (data integrity)" }
      ],
      answer: 1,
      hint: {
        en: "Recall what the lecturer's notes attach to each of the five advantages.",
        ar: "تذكّر ما تربطه ملاحظات المحاضرة بكل ميزة من المزايا الخمس."
      },
      explain: {
        en: "Efficiency: a piece of information is stored in fewer locations. Data integrity is about strong data types on each column, and confidentiality about centralised storage. \"Less hardware and software\" sounds like saving, but it is an advantage of the flat file, not of the split.",
        ar: "الكفاءة: المعلومة مخزّنة في أماكن أقلّ. أمّا سلامة البيانات فتتعلّق بأنواع البيانات الصارمة لكل عمود، والسرّية بالتخزين المركزي. وعبارة «متطلّبات أقلّ من العتاد والبرمجيات» توحي بالتوفير، لكنها ميزة للملف المسطّح لا للتقسيم."
      }
    },
    {
      id: "t2l1q24", type: "tf", level: "medium", topics: ["t2-one-fact-one-place", "t2-multi-table-advantages"],
      q: {
        en: "In version 2 of the last evolve block (AUTHOR and BOOK related by AUTHOR_ID), renaming Goldsmith still means changing two rows, one for each of his books.",
        ar: "في النسخة 2 من آخر مراحل التطوّر (AUTHOR وBOOK مرتبطان بـ AUTHOR_ID)، ما زال تغيير اسم Goldsmith يعني تعديل صفّين، صفّ لكل كتاب من كتبه."
      },
      truth: false,
      hint: {
        en: "Where does the author's name live after the split? What does a BOOK row carry instead?",
        ar: "أين يسكن اسم المؤلف بعد التقسيم؟ وماذا يحمل صفّ BOOK بدلًا منه؟"
      },
      explain: {
        en: "False. The name lives in one row of AUTHOR, and each BOOK row carries only AUTHOR_ID. A rename is one UPDATE on one row, and both of his books see the new name through the common field. That is less redundancy and avoidance of inconsistency in one move.",
        ar: "خطأ. الاسم يسكن صفًّا واحدًا في AUTHOR، ولا يحمل كل صفّ في BOOK إلا AUTHOR_ID. تغيير الاسم جملة UPDATE واحدة على صفّ واحد، ويرى كتاباه الاسم الجديد عبر الحقل المشترك. هذا تكرار أقلّ وتجنّب لعدم الاتّساق في خطوة واحدة."
      }
    }
  ]
};
