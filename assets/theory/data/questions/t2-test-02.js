/* Question bank: T2 lesson 2 test -- The Relational Answer. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-02"] = {
  title: { en: "Test 2 — The Relational Answer", ar: "اختبار 2 — الجواب العلائقي" },
  intro: {
    en: "24 questions on lesson 2: tables, columns, rows and fields; the primary, foreign and unique key and what each one refuses; the seven rules a table must obey to be relational; and why the order of rows and columns means nothing. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثاني: الجداول والأعمدة والصفوف والحقول؛ والمفتاح الأساسي والأجنبي والفريد وما يرفضه كلّ منها؛ والقواعد السبع التي يجب أن يلتزم بها الجدول ليكون علائقيًّا؛ ولماذا لا يعني ترتيب الصفوف والأعمدة شيئًا. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · tables, columns, rows, fields */
    {
      id: "t2l2q01", type: "match", level: "easy",
      topics: ["t2-relational-database", "t2-table-row-column", "t2-field"],
      q: {
        en: "A librarian says \"fix the Tolstoy entry\". Match each part of the library database to what it is in AUTHOR.",
        ar: "يقول أمين المكتبة «أصلِح مُدخَل Tolstoy». صِل كل جزء من أجزاء قاعدة بيانات المكتبة بما يقابله في AUTHOR."
      },
      leftHead: { en: "Part", ar: "الجزء" },
      rightHead: { en: "In the library", ar: "في المكتبة" },
      pairs: [
        { l: { en: "Table", ar: "الجدول (table)" },
          r: { en: "AUTHOR, with all its rows and columns", ar: "AUTHOR بكل صفوفه وأعمدته" } },
        { l: { en: "Column", ar: "العمود (column)" },
          r: { en: "AUTHOR_NAME: every author's name", ar: "AUTHOR_NAME: اسم كل مؤلف" } },
        { l: { en: "Row", ar: "الصفّ (row)" },
          r: { en: "The whole line AD0002 · Leo Tolstoy", ar: "السطر كاملًا AD0002 · Leo Tolstoy" } },
        { l: { en: "Field", ar: "الحقل (field)" },
          r: { en: "\"Leo Tolstoy\" alone, in row AD0002", ar: "«Leo Tolstoy» وحده، في الصفّ AD0002" } },
        { l: { en: "Common field", ar: "الحقل المشترك (common field)" },
          r: { en: "AUTHOR_ID, which BOOK carries too", ar: "AUTHOR_ID، الذي يحمله BOOK أيضًا" } }
      ],
      hint: {
        en: "A column runs down, a row runs across, and a field is where one of each meets.",
        ar: "العمود يمتدّ عموديًّا، والصفّ أفقيًّا، والحقل هو موضع التقاء واحد من كلٍّ منهما."
      },
      explain: {
        en: "The table is the whole named grid; a column is one kind of information for every row; a row is one author; a field is the one value where a row meets a column. The pair most often confused is column and field: AUTHOR_NAME is a column, \"Leo Tolstoy\" is one field inside it. The common field is the column two tables share, and it is what makes the database relational.",
        ar: "الجدول هو الشبكة المسمّاة كلها؛ والعمود نوع واحد من المعلومات لكل صفّ؛ والصفّ مؤلف واحد؛ والحقل هو القيمة الواحدة حيث يلتقي صفّ بعمود. أكثر زوج يُخلَط هو العمود والحقل: AUTHOR_NAME عمود، و«Leo Tolstoy» حقل واحد بداخله. والحقل المشترك هو العمود الذي يتشاركه جدولان، وهو ما يجعل قاعدة البيانات علائقية."
      }
    },
    {
      id: "t2l2q02", type: "tf", level: "easy", topics: ["t2-field", "t2-table-row-column"],
      q: {
        en: "Using the lesson's key-terms meaning, AUTHOR_NAME in the AUTHOR table is a field.",
        ar: "بحسب معنى المصطلحات الأساسية في الدرس، فإن AUTHOR_NAME في جدول AUTHOR حقل (field)."
      },
      truth: false,
      hint: {
        en: "Does AUTHOR_NAME hold one value, or one value per row?",
        ar: "هل يحمل AUTHOR_NAME قيمة واحدة، أم قيمة لكل صفّ؟"
      },
      explain: {
        en: "False. AUTHOR_NAME is a column: it holds one name for every row. A field is the single value where one row meets one column, such as \"Jane Austen\" in row AD0004. The slides do say once that a column represents a field, which is why the mix-up is tempting; the lesson keeps \"field\" for the one value.",
        ar: "خطأ. AUTHOR_NAME عمود: يحمل اسمًا لكل صفّ. أمّا الحقل فهو القيمة الواحدة حيث يلتقي صفّ واحد بعمود واحد، مثل «Jane Austen» في الصفّ AD0004. صحيح أن الشرائح تقول مرّة إن العمود يمثّل حقلًا، ولهذا يغري الخلط؛ لكن الدرس يحتفظ بكلمة «حقل» للقيمة الواحدة."
      }
    },
    {
      id: "t2l2q03", type: "output", level: "easy", topics: ["t2-field", "t2-table-row-column"],
      q: {
        en: "The lecturer's EMPLOYEES table, with the five rows from the lesson. FROM names the table, SELECT the column, WHERE the row. What single field comes back?",
        ar: "جدول EMPLOYEES من المحاضرة، بصفوفه الخمسة كما في الدرس. FROM يسمّي الجدول، وSELECT العمود، وWHERE الصفّ. ما الحقل الواحد الذي يعود؟"
      },
      lang: "sql",
      code: "SELECT nickname\nFROM employees\nWHERE employee_id = 405;",
      blanks: [{ accept: ["Chaz", "chaz", "CHAZ"], label: { en: "nickname", ar: "nickname" } }],
      hint: {
        en: "Find the row whose EMPLOYEE_ID is 405, then read across to NICKNAME.",
        ar: "جِد الصفّ الذي قيمة EMPLOYEE_ID فيه 405، ثم اقرأ أفقيًّا حتى NICKNAME."
      },
      explain: {
        en: "Chaz: the field where row 405 (Carlos Gomez) meets column NICKNAME. WHERE picks the row by its primary key and SELECT picks the column, so exactly one value is left. Answering CARLOS reads the FIRST_NAME column instead — the right row, the wrong column.",
        ar: "Chaz: الحقل حيث يلتقي الصفّ 405 (Carlos Gomez) بالعمود NICKNAME. يختار WHERE الصفّ بمفتاحه الأساسي ويختار SELECT العمود، فلا يبقى إلا قيمة واحدة. من يجيب CARLOS يقرأ العمود FIRST_NAME بدلًا منه — الصفّ الصحيح والعمود الخطأ."
      },
      solution: { out: "Chaz" }
    },

    /* ---------------------------------------------------- 2 · the primary key */
    {
      id: "t2l2q04", type: "mcq", level: "easy", topics: ["t2-primary-key", "t2-name-as-key"],
      q: {
        en: "Version 1 of MEMBER stores only NAME and CITY, and two rows read \"Omar Saleh, Khan Younis\". What is the defect that version 2 fixes by adding MEMBER_ID?",
        ar: "النسخة 1 من MEMBER تخزّن NAME وCITY فقط، وفيها صفّان كلاهما «Omar Saleh, Khan Younis». ما العيب الذي تعالجه النسخة 2 بإضافة MEMBER_ID؟"
      },
      options: [
        { en: "The name is stored twice, which is redundancy", ar: "الاسم مخزَّن مرّتين، وهذا تكرار" },
        { en: "Nothing in a row tells the two members apart, so neither can be picked out alone", ar: "لا شيء في الصفّ يميّز العضوين، فلا يمكن اختيار أحدهما وحده" },
        { en: "Two members are not allowed to share a name", ar: "لا يُسمح لعضوين بأن يحملا الاسم نفسه" },
        { en: "CITY should have been the key", ar: "كان يجب أن يكون CITY هو المفتاح" }
      ],
      answer: 1,
      hint: {
        en: "Think about the librarian who must delete just one of them.",
        ar: "فكّر في أمين المكتبة الذي عليه أن يحذف واحدًا منهما فقط."
      },
      explain: {
        en: "The two rows are identical, so \"delete Omar Saleh\" removes both and a loan cannot say which Omar borrowed. Calling it redundancy is tempting, but these are two real members, not one fact copied — the names are meant to repeat. Version 2 does not forbid the shared name; it adds a value that is different in every row. City repeats even more than name.",
        ar: "الصفّان متطابقان، فأمر «احذف Omar Saleh» يحذفهما معًا، ولا تستطيع الإعارة أن تقول أيّ Omar استعار. تسميته تكرارًا مغرية، لكنهما عضوان حقيقيّان لا حقيقة واحدة منسوخة — والاسم من حقّه أن يتكرّر. النسخة 2 لا تمنع الاسم المشترك؛ بل تضيف قيمة تختلف في كل صفّ. والمدينة تتكرّر أكثر من الاسم."
      }
    },
    {
      id: "t2l2q05", type: "compare", level: "medium", topics: ["t2-primary-key", "t2-name-as-key"],
      q: {
        en: "MEMBER holds M01 Sara Hamdan, M02 Omar Saleh and M03 Omar Saleh. The Omar who joined second, M03, cancels. Compare the two deletes.",
        ar: "يحمل MEMBER الصفوف M01 Sara Hamdan وM02 Omar Saleh وM03 Omar Saleh. ألغى Omar الذي انضمّ ثانيًا، M03، اشتراكه. قارن بين جملتَي الحذف."
      },
      lang: "sql",
      codeA: "DELETE FROM members\nWHERE first_name = 'Omar'\n  AND last_name  = 'Saleh';",
      codeB: "DELETE FROM members\nWHERE member_id = 'M03';",
      options: [
        { en: "A is safer: matching first and last name together is precise enough", ar: "A أكثر أمانًا: مطابقة الاسم الأول واسم العائلة معًا دقيقة بما يكفي" },
        { en: "B removes exactly one row; A removes both Omars and leaves one member", ar: "B يحذف صفًّا واحدًا بالضبط؛ وA يحذف العضوين المسمَّيين Omar فلا يبقى إلا عضو واحد" },
        { en: "Both remove one row, because the primary key stops A from touching two rows", ar: "كلاهما يحذف صفًّا واحدًا، لأن المفتاح الأساسي يمنع A من لمس صفّين" },
        { en: "B fails, because M03 has the same name as M02", ar: "B يفشل، لأن M03 يحمل اسم M02 نفسه" }
      ],
      answer: 1,
      hint: {
        en: "Count how many rows match each WHERE.",
        ar: "عُدّ الصفوف التي يطابقها كل شرط WHERE."
      },
      explain: {
        en: "A matches every row named Omar Saleh — two of them — so only Sara remains. B matches the one row whose primary key is M03, and two members remain. A primary key does not limit which rows a statement touches; it gives you a value that can name one row. Run on the lesson's table, A leaves 1 row and B leaves 2.",
        ar: "A يطابق كل صفّ اسمه Omar Saleh — وهما صفّان — فلا تبقى إلا Sara. وB يطابق الصفّ الوحيد الذي مفتاحه الأساسي M03، فيبقى عضوان. المفتاح الأساسي لا يحدّ من الصفوف التي تلمسها الجملة؛ بل يعطيك قيمة تسمّي صفًّا واحدًا. عند التشغيل على جدول الدرس يبقى بعد A صفّ واحد، وبعد B صفّان."
      },
      solution: { out: "A: 1 row left (Sara). B: 2 rows left (Sara and M02 Omar)." }
    },
    {
      id: "t2l2q06", type: "tf", level: "medium", topics: ["t2-primary-key", "t2-name-as-key"],
      q: {
        en: "Once member_id is declared PRIMARY KEY, the database refuses a new row for a third Omar Saleh, even with a new member_id.",
        ar: "بعد إعلان member_id مفتاحًا أساسيًّا (PRIMARY KEY)، ترفض قاعدة البيانات صفًّا جديدًا لعضو ثالث اسمه Omar Saleh، حتى لو كان له member_id جديد."
      },
      truth: false,
      hint: {
        en: "Which column does the PRIMARY KEY guard?",
        ar: "أيّ عمود يحرسه PRIMARY KEY؟"
      },
      explain: {
        en: "False. A primary key refuses only a repeated key value. A third Omar Saleh with M05 is accepted — the lesson's own warning is that the key does not stop two rows named Omar Saleh. That is the point: people may share a name; they may not share an identifier.",
        ar: "خطأ. المفتاح الأساسي لا يرفض إلا تكرار قيمة المفتاح. عضو ثالث اسمه Omar Saleh بالمعرّف M05 يُقبَل — وتحذير الدرس نفسه أن المفتاح لا يمنع صفّين باسم Omar Saleh. وهذا هو المقصود: قد يشترك الناس في الاسم، ولا يشتركون في المعرّف."
      }
    },
    {
      id: "t2l2q07", type: "multi", level: "medium", topics: ["t2-name-as-key", "t2-primary-key"],
      q: {
        en: "The front desk proposes a primary key for MEMBER(MEMBER_ID, FIRST_NAME, LAST_NAME, CITY, JOINED). Which proposals are poor choices? Choose all that apply.",
        ar: "يقترح مكتب الاستقبال مفتاحًا أساسيًّا لـ MEMBER(MEMBER_ID, FIRST_NAME, LAST_NAME, CITY, JOINED). أيّ الاقتراحات اختيارات ضعيفة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "LAST_NAME — surnames are fairly rare", ar: "LAST_NAME — أسماء العائلات نادرة نسبيًّا" },
        { en: "MEMBER_ID", ar: "MEMBER_ID" },
        { en: "JOINED — each member joins on some date", ar: "JOINED — كل عضو ينضمّ في تاريخ ما" },
        { en: "CITY", ar: "CITY" },
        { en: "FIRST_NAME and LAST_NAME together", ar: "FIRST_NAME وLAST_NAME معًا" }
      ],
      answer: [0, 2, 3, 4],
      hint: {
        en: "A key must be different in every row that could ever exist, not just in today's rows.",
        ar: "يجب أن يختلف المفتاح في كل صفّ يمكن أن يوجد يومًا، لا في صفوف اليوم فقط."
      },
      explain: {
        en: "Only MEMBER_ID is made to be different in every row. The two Omar Salehs already break LAST_NAME and the full name together; two members can join on the same day, as the Omars did; and many members share a city. Combining first and last name is the tempting one — it feels precise, yet the lesson's opening problem is exactly two people with the same full name.",
        ar: "MEMBER_ID وحده مصنوع ليختلف في كل صفّ. العضوان Omar Saleh يكسران LAST_NAME والاسم الكامل معًا؛ ويمكن أن ينضمّ عضوان في اليوم نفسه، كما فعل العضوان Omar؛ ويشترك كثير من الأعضاء في المدينة. الجمع بين الاسم الأول واسم العائلة هو الخيار المغري — يبدو دقيقًا، لكن مشكلة الدرس الافتتاحية هي بالضبط شخصان بالاسم الكامل نفسه."
      }
    },

    /* ---------------------------------------------------- 3 · the foreign key */
    {
      id: "t2l2q08", type: "mcq", level: "easy",
      topics: ["t2-common-field", "t2-foreign-key", "t2-relational-database"],
      q: {
        en: "The slides show STUDENTS(ID, LAST_NAME, DATE_OF_BIRTH, ADDRESS, COURSE_ID) and COURSES(ID, NAME, DURATION). Which column is the relationship between the two tables?",
        ar: "تعرض الشرائح STUDENTS(ID, LAST_NAME, DATE_OF_BIRTH, ADDRESS, COURSE_ID) وCOURSES(ID, NAME, DURATION). أيّ عمود هو العلاقة بين الجدولين؟"
      },
      options: [
        { en: "COURSES.ID", ar: "COURSES.ID" },
        { en: "STUDENTS.ID", ar: "STUDENTS.ID" },
        { en: "COURSES.NAME", ar: "COURSES.NAME" },
        { en: "STUDENTS.COURSE_ID", ar: "STUDENTS.COURSE_ID" }
      ],
      answer: 3,
      hint: {
        en: "Look for the column in one table that holds the other table's primary key.",
        ar: "ابحث عن العمود في أحد الجدولين الذي يحمل المفتاح الأساسي للجدول الآخر."
      },
      explain: {
        en: "STUDENTS.COURSE_ID is a foreign key to COURSES.ID, and that one column is the relationship: it is how you ask which course a student attends. COURSES.ID is tempting because it is the other end of the link, but it is only COURSES' own primary key; it would exist even if no student table did.",
        ar: "STUDENTS.COURSE_ID مفتاح أجنبي يشير إلى COURSES.ID، وهذا العمود الواحد هو العلاقة: به تسأل أيّ مقرّر يحضره الطالب. COURSES.ID مغرٍ لأنه الطرف الآخر من الرابط، لكنه مجرّد المفتاح الأساسي لـ COURSES؛ وسيوجد حتى لو لم يوجد جدول طلاب."
      }
    },
    {
      id: "t2l2q09", type: "output", level: "hard",
      topics: ["t2-referential-check", "t2-foreign-key"],
      q: {
        en: "Version 1 of the foreign-key evolve block: books.author_id is a plain column with no REFERENCES. The usual four authors and four books are loaded. The librarian's slip goes in, then a list of books with their authors is run. How many rows does it return?",
        ar: "النسخة 1 من مراحل تطوّر المفتاح الأجنبي: books.author_id عمود عادي بلا REFERENCES. حُمّل المؤلفون الأربعة والكتب الأربعة المعتادة. يدخل خطأ أمين المكتبة، ثم يُشغَّل استعلام يسرد الكتب مع مؤلفيها. كم صفًّا يعيد؟"
      },
      lang: "sql",
      code: "INSERT INTO books VALUES ('BK005', 'Emma', 'AD0009');\n\nSELECT b.title, a.author_name\nFROM books b\nJOIN authors a ON b.author_id = a.author_id;",
      blanks: [{ accept: ["4", "four", "Four"], label: { en: "rows", ar: "الصفوف" } }],
      hint: {
        en: "Does the INSERT succeed here? Then: which author row could Emma be joined to?",
        ar: "هل تنجح جملة INSERT هنا؟ ثم: بأيّ صفّ مؤلف يمكن أن يُربط Emma؟"
      },
      explain: {
        en: "4. Without a foreign key the insert succeeds — to the table, AD0009 is just text — so books now has five rows. But no author AD0009 exists, so the join finds no partner for Emma and silently leaves her out. Answering 5 assumes every book reaches the list; answering \"error\" describes version 2, where REFERENCES refuses the slip before it is saved.",
        ar: "4. بلا مفتاح أجنبي تنجح الإضافة — فـ AD0009 بالنسبة للجدول مجرّد نصّ — فيصبح في books خمسة صفوف. لكن لا يوجد مؤلف AD0009، فلا يجد الربط شريكًا لـ Emma ويُسقطه بصمت. من يجيب 5 يفترض أن كل كتاب يصل إلى القائمة؛ ومن يجيب «خطأ» يصف النسخة 2، حيث يرفض REFERENCES الخطأ قبل حفظه."
      },
      solution: { out: "4 rows: A Vision, War and Peace, Citizen of the World, Androcles and the Lion — no Emma." }
    },
    {
      id: "t2l2q10", type: "compare", level: "hard",
      topics: ["t2-referential-check", "t2-foreign-key", "t2-common-field"],
      q: {
        en: "The two versions of books from the foreign-key evolve block. Which statement about them is correct?",
        ar: "نسختا books من مراحل تطوّر المفتاح الأجنبي. أيّ عبارة عنهما صحيحة؟"
      },
      lang: "sql",
      codeA: "CREATE TABLE books (\n  book_id   VARCHAR(5) PRIMARY KEY,\n  title     VARCHAR(60),\n  author_id VARCHAR(6)\n);",
      codeB: "CREATE TABLE books (\n  book_id   VARCHAR(5) PRIMARY KEY,\n  title     VARCHAR(60),\n  author_id VARCHAR(6) REFERENCES authors(author_id)\n);",
      options: [
        { en: "Only B relates books to authors; in A the two tables have no common field", ar: "B وحده يربط books بـ authors؛ وفي A لا يوجد حقل مشترك بين الجدولين" },
        { en: "B creates an author row automatically when a new author_id is typed", ar: "B ينشئ صفّ مؤلف تلقائيًّا عند كتابة author_id جديد" },
        { en: "Both have the common field; only B promises every author_id points at a real author", ar: "كلاهما فيه الحقل المشترك؛ لكن B وحده يَعِد بأن كل author_id يشير إلى مؤلف حقيقي" },
        { en: "B also stops two books from having the same author_id", ar: "B يمنع أيضًا كتابين من أن يحملا author_id نفسه" }
      ],
      answer: 2,
      hint: {
        en: "Separate \"the column is there\" from \"the column is checked\".",
        ar: "افصل بين «العمود موجود» و«العمود مفحوص»."
      },
      explain: {
        en: "A already has author_id, so the tables share a common field and a join works — as long as nobody mistypes. B adds the promise: a value not found in authors, like AD0009, is refused. A foreign key never invents the row it points at, and it may repeat freely: Goldsmith's two books both hold AD0003.",
        ar: "في A يوجد author_id أصلًا، فيتشارك الجدولان حقلًا مشتركًا ويعمل الربط — ما دام أحد لا يخطئ في الكتابة. ويضيف B الوعد: أيّ قيمة غير موجودة في authors، مثل AD0009، تُرفض. المفتاح الأجنبي لا يخترع الصفّ الذي يشير إليه أبدًا، ويجوز أن يتكرّر بحرّية: كتابا Goldsmith كلاهما يحمل AD0003."
      }
    },
    {
      id: "t2l2q11", type: "tf", level: "easy", topics: ["t2-foreign-key", "t2-pk-fk-uk"],
      q: {
        en: "In BOOK, AUTHOR_ID holds AD0003 in two rows. That breaks the foreign key, because a key must be different in every row.",
        ar: "في BOOK، يحمل AUTHOR_ID القيمة AD0003 في صفّين. هذا يكسر المفتاح الأجنبي، لأن المفتاح يجب أن يختلف في كل صفّ."
      },
      truth: false,
      hint: {
        en: "How many books may one author write?",
        ar: "كم كتابًا يمكن أن يكتب المؤلف الواحد؟"
      },
      explain: {
        en: "False. A foreign key may repeat whenever many rows point at one: Goldsmith wrote two of the books, so both carry AD0003. \"Never repeats\" is true of the primary key and the unique key only. Repeating a short key is not redundancy — it is how two books share his one stored name.",
        ar: "خطأ. يجوز أن يتكرّر المفتاح الأجنبي كلما أشارت صفوف كثيرة إلى صفّ واحد: كتب Goldsmith كتابين، فكلاهما يحمل AD0003. «لا يتكرّر أبدًا» تصدق على المفتاح الأساسي والمفتاح الفريد فقط. وتكرار مفتاح قصير ليس تكرارًا للبيانات — بل هو الطريقة التي يتشارك بها الكتابان اسمه المخزَّن مرّة واحدة."
      }
    },
    {
      id: "t2l2q12", type: "error", level: "hard",
      topics: ["t2-referential-check", "t2-primary-key"],
      q: {
        en: "books has book_id as PRIMARY KEY and author_id REFERENCES authors(author_id). It holds BK001–BK004 and authors holds AD0001–AD0004. Each line is run on its own. Which lines does the database refuse? Choose every one.",
        ar: "في books العمود book_id مفتاح أساسي (PRIMARY KEY) وauthor_id يشير بـ REFERENCES إلى authors(author_id). يحمل books الصفوف BK001–BK004 ويحمل authors المؤلفين AD0001–AD0004. كل سطر يُشغَّل وحده. أيّ الأسطر ترفضها قاعدة البيانات؟ اختر كلًّا منها."
      },
      lang: "sql",
      code: "INSERT INTO books VALUES ('BK005', 'Emma', 'AD0004');\nINSERT INTO books VALUES ('BK003', 'The Happy Prince', 'AD0001');\nINSERT INTO books VALUES ('BK006', 'Anna Karenina', 'AD0020');\nINSERT INTO books VALUES ('BK007', 'The Deserted Village', 'AD0003');",
      answer: [2, 3],
      hint: {
        en: "Check two things on every line: is the book_id new, and does the author_id exist?",
        ar: "افحص أمرين في كل سطر: هل book_id جديد، وهل author_id موجود؟"
      },
      explain: {
        en: "Line 2 reuses BK003, so the primary key refuses it. Line 3 points at AD0020, which is not in authors, so the foreign key refuses it. Line 4 is fine although AD0003 already has two books — a foreign key may repeat. Each key guards one thing: the primary key its own column's uniqueness, the foreign key the existence of the row it points at.",
        ar: "السطر 2 يعيد استخدام BK003، فيرفضه المفتاح الأساسي. والسطر 3 يشير إلى AD0020، وهو غير موجود في authors، فيرفضه المفتاح الأجنبي. والسطر 4 سليم مع أن لـ AD0003 كتابين من قبل — فالمفتاح الأجنبي يجوز أن يتكرّر. كل مفتاح يحرس شيئًا واحدًا: الأساسي تفرّد عموده، والأجنبي وجود الصفّ الذي يشير إليه."
      },
      solution: {
        en: "Lines 2 and 3: a repeated primary key, and a foreign key that points nowhere.",
        ar: "السطران 2 و3: مفتاح أساسي مكرّر، ومفتاح أجنبي لا يشير إلى شيء."
      }
    },

    /* ---------------------------------------------------- 4 · the unique key */
    {
      id: "t2l2q13", type: "contrast", level: "medium",
      topics: ["t2-pk-fk-uk", "t2-primary-key", "t2-foreign-key"],
      q: {
        en: "Sort each statement: is it true of a primary key, or of a foreign key?",
        ar: "صنّف كل عبارة: هل تصدق على المفتاح الأساسي، أم على المفتاح الأجنبي؟"
      },
      concepts: [
        { en: "Primary key", ar: "المفتاح الأساسي" },
        { en: "Foreign key", ar: "المفتاح الأجنبي" }
      ],
      rows: [
        { s: { en: "Identifies each row of its own table", ar: "يحدّد كل صفّ في جدوله هو" }, a: 0 },
        { s: { en: "Refers to a row in another table", ar: "يشير إلى صفّ في جدول آخر" }, a: 1 },
        { s: { en: "Many rows may hold the same value", ar: "يجوز أن تحمل صفوف كثيرة القيمة نفسها" }, a: 1 },
        { s: { en: "EMPLOYEES.DEPARTMENT_ID", ar: "EMPLOYEES.DEPARTMENT_ID" }, a: 1 },
        { s: { en: "STUDENTS.ID", ar: "STUDENTS.ID" }, a: 0 },
        { s: { en: "Its value is refused if no matching row exists elsewhere", ar: "تُرفض قيمته إن لم يوجد صفّ مطابق في مكان آخر" }, a: 1 },
        { s: { en: "A table has exactly one of it", ar: "للجدول واحد فقط منه" }, a: 0 }
      ],
      hint: {
        en: "One looks inward at its own rows; the other looks outward at someone else's.",
        ar: "أحدهما ينظر إلى الداخل نحو صفوف جدوله؛ والآخر ينظر إلى الخارج نحو صفوف جدول آخر."
      },
      explain: {
        en: "The primary key looks inward: one per table, never repeated, naming each of its own rows (STUDENTS.ID). The foreign key looks outward: it holds another table's primary key, may repeat (three employees in department 10), and is refused when it points nowhere. A table can have several foreign keys but only one primary key.",
        ar: "المفتاح الأساسي ينظر إلى الداخل: واحد لكل جدول، لا يتكرّر، ويسمّي كل صفّ من صفوف جدوله (STUDENTS.ID). والمفتاح الأجنبي ينظر إلى الخارج: يحمل المفتاح الأساسي لجدول آخر، ويجوز أن يتكرّر (ثلاثة موظفين في القسم 10)، ويُرفض حين لا يشير إلى شيء. قد يكون للجدول عدّة مفاتيح أجنبية، لكن له مفتاحًا أساسيًّا واحدًا فقط."
      }
    },
    {
      id: "t2l2q14", type: "match", level: "easy", topics: ["t2-pk-fk-uk", "t2-unique-key"],
      q: {
        en: "Match each column of the lecturer's EMPLOYEES table to what it is.",
        ar: "صِل كل عمود من أعمدة جدول EMPLOYEES في المحاضرة بما هو عليه."
      },
      leftHead: { en: "Column", ar: "العمود" },
      rightHead: { en: "What it is", ar: "ما هو" },
      pairs: [
        { l: { en: "EMPLOYEE_ID", ar: "EMPLOYEE_ID" },
          r: { en: "Primary key: identifies each employee", ar: "مفتاح أساسي: يحدّد كل موظف" } },
        { l: { en: "DEPARTMENT_ID", ar: "DEPARTMENT_ID" },
          r: { en: "Foreign key: points at a DEPARTMENTS row", ar: "مفتاح أجنبي: يشير إلى صفّ في DEPARTMENTS" } },
        { l: { en: "PAYROLL_ID", ar: "PAYROLL_ID" },
          r: { en: "Unique key: never repeats, but is not the identifier", ar: "مفتاح فريد: لا يتكرّر، لكنه ليس المعرّف" } },
        { l: { en: "NICKNAME", ar: "NICKNAME" },
          r: { en: "Not a key: just one more piece of information", ar: "ليس مفتاحًا: مجرّد معلومة أخرى" } }
      ],
      hint: {
        en: "Which of them repeats in the data? Of the ones that never repeat, which is the identifier?",
        ar: "أيّها يتكرّر في البيانات؟ ومن بين التي لا تتكرّر، أيّها هو المعرّف؟"
      },
      explain: {
        en: "DEPARTMENT_ID repeats (10 appears three times), which marks it as the foreign key. EMPLOYEE_ID and PAYROLL_ID both never repeat; EMPLOYEE_ID is the one chosen as the identifier, so PAYROLL_ID is the unique key. NICKNAME happens to differ in all five rows today, but nothing promises it will — a nickname, like a name, is no key.",
        ar: "DEPARTMENT_ID يتكرّر (القيمة 10 تظهر ثلاث مرّات)، وهذا علامة المفتاح الأجنبي. أمّا EMPLOYEE_ID وPAYROLL_ID فكلاهما لا يتكرّر؛ وEMPLOYEE_ID هو المختار معرّفًا، فيكون PAYROLL_ID المفتاح الفريد. وNICKNAME يختلف في الصفوف الخمسة اليوم مصادفةً، لكن لا شيء يضمن ذلك — فاللقب، كالاسم، ليس مفتاحًا."
      }
    },
    {
      id: "t2l2q15", type: "complete", level: "medium", topics: ["t2-unique-key"],
      q: {
        en: "In Matt's model a BOOK is a title, not a copy. What completes the title column so that a second \"War and Peace\" is refused even under a new book_id?",
        ar: "في نموذج مات، الكتاب (BOOK) عنوان لا نسخة. ما الذي يُكمل عمود title بحيث يُرفض «War and Peace» ثانٍ حتى لو كان له book_id جديد؟"
      },
      lang: "sql",
      code: "CREATE TABLE books (\n  book_id   VARCHAR(5)  PRIMARY KEY,\n  title     VARCHAR(60) ____,\n  author_id VARCHAR(6)  REFERENCES authors(author_id)\n);",
      options: [
        { code: "PRIMARY KEY" },
        { code: "UNIQUE" },
        { code: "REFERENCES books(title)" }
      ],
      answer: 1,
      hint: {
        en: "The table already has its identifier. You need another column that must also never repeat.",
        ar: "للجدول معرّفه من قبل. تحتاج إلى عمود آخر يجب ألّا يتكرّر هو أيضًا."
      },
      explain: {
        en: "UNIQUE makes title a unique key: the system will not allow two rows with the same value, and the duplicate is refused with \"already exists in unique index\". PRIMARY KEY is tempting, but a table has one primary key and book_id already holds that job. REFERENCES would make title a foreign key — a pointer, which is the opposite of a guarantee of no repeats.",
        ar: "UNIQUE يجعل title مفتاحًا فريدًا: لا يسمح النظام بصفّين لهما القيمة نفسها، فيُرفض المكرَّر برسالة «already exists in unique index». PRIMARY KEY مغرٍ، لكن للجدول مفتاحًا أساسيًّا واحدًا، وbook_id يشغل هذه الوظيفة. وREFERENCES يجعل title مفتاحًا أجنبيًّا — أي مؤشّرًا، وهذا عكس ضمان عدم التكرار."
      },
      solution: {
        code: "title     VARCHAR(60) UNIQUE,",
        en: "One primary key per table; every other no-repeat column is a unique key.",
        ar: "مفتاح أساسي واحد لكل جدول؛ وكل عمود آخر لا يتكرّر هو مفتاح فريد."
      }
    },
    {
      id: "t2l2q16", type: "mcq", level: "hard", topics: ["t2-unique-key", "t2-pk-fk-uk"],
      q: {
        en: "books has book_id PRIMARY KEY and author_id REFERENCES authors, but title has no UNIQUE. A second librarian adds ('BK005', 'War and Peace', 'AD0002'). What happens, and why does it matter?",
        ar: "في books العمود book_id مفتاح أساسي وauthor_id يشير إلى authors، لكن title بلا UNIQUE. يضيف أمين ثانٍ ('BK005', 'War and Peace', 'AD0002'). ماذا يحدث، ولماذا يهمّ ذلك؟"
      },
      options: [
        { en: "Refused by the primary key, because the row repeats an existing book", ar: "يرفضه المفتاح الأساسي، لأن الصفّ يكرّر كتابًا موجودًا" },
        { en: "Refused by the foreign key, because AD0002 already has a book", ar: "يرفضه المفتاح الأجنبي، لأن لـ AD0002 كتابًا من قبل" },
        { en: "Saved, and harmless: the two rows have different keys, so they are different books", ar: "يُحفظ، ولا ضرر: للصفّين مفتاحان مختلفان، فهما كتابان مختلفان" },
        { en: "Saved: the library now lists one title twice, and lesson 1's redundancy is back", ar: "يُحفظ: صارت المكتبة تسرد عنوانًا واحدًا مرّتين، وعاد تكرار الدرس الأول" }
      ],
      answer: 3,
      hint: {
        en: "Check each declared key against the new row. Then ask what BOOK means in Matt's model.",
        ar: "افحص كل مفتاح معلَن مقابل الصفّ الجديد. ثم اسأل: ماذا يعني BOOK في نموذج مات؟"
      },
      explain: {
        en: "BK005 is new, so the primary key is satisfied; AD0002 exists, so the foreign key is satisfied — and it may repeat. The row is saved, and \"War and Peace\" now appears twice (run it: the count of that title is 2). Calling them different books is the trap: in Matt's model a BOOK is a title, so this is one fact stored twice. Only a unique key on title stops it.",
        ar: "BK005 جديد، فالمفتاح الأساسي راضٍ؛ وAD0002 موجود، فالمفتاح الأجنبي راضٍ — ويجوز أن يتكرّر. يُحفظ الصفّ، ويظهر «War and Peace» الآن مرّتين (شغّله: عدد هذا العنوان 2). اعتبارهما كتابين مختلفين هو الفخّ: الكتاب في نموذج مات عنوان، فهذه حقيقة واحدة مخزّنة مرّتين. ولا يمنع ذلك إلا مفتاح فريد على title."
      }
    },
    {
      id: "t2l2q17", type: "ordercode", level: "medium", topics: ["t2-foreign-key", "t2-referential-check"],
      q: {
        en: "Each loan records a book, and each book its author. Put the three CREATE TABLE statements in the only order that runs without an error from an empty database.",
        ar: "كل إعارة تسجّل كتابًا، وكل كتاب يسجّل مؤلفه. رتّب جمل CREATE TABLE الثلاث بالترتيب الوحيد الذي يعمل دون خطأ انطلاقًا من قاعدة بيانات فارغة."
      },
      lang: "sql",
      items: [
        { code: "CREATE TABLE authors (author_id VARCHAR(6) PRIMARY KEY, author_name VARCHAR(40));" },
        { code: "CREATE TABLE books (book_id VARCHAR(5) PRIMARY KEY, title VARCHAR(60), author_id VARCHAR(6) REFERENCES authors(author_id));" },
        { code: "CREATE TABLE loans (loan_id INT PRIMARY KEY, book_id VARCHAR(5) REFERENCES books(book_id), loan_date DATE);" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "A foreign key must refer to a primary key that already exists.",
        ar: "يجب أن يشير المفتاح الأجنبي إلى مفتاح أساسي موجود من قبل."
      },
      explain: {
        en: "books REFERENCES authors, and loans REFERENCES books, so each table needs the one it points at to exist first: authors, then books, then loans. Every other order fails at the first CREATE whose referenced table is missing — run them and see. The rule to carry away: the table holding the primary key comes before the table holding the foreign key that points at it.",
        ar: "books يشير بـ REFERENCES إلى authors، وloans يشير إلى books، فكل جدول يحتاج أن يوجد الجدول الذي يشير إليه أولًا: authors، ثم books، ثم loans. وكل ترتيب آخر يفشل عند أول جملة CREATE يكون جدولها المُشار إليه غير موجود — شغّلها وانظر. القاعدة التي تحملها معك: الجدول الذي يحمل المفتاح الأساسي يأتي قبل الجدول الذي يحمل المفتاح الأجنبي المشير إليه."
      }
    },

    /* ---------------------------------------------------- 5 · the seven rules */
    {
      id: "t2l2q18", type: "multi", level: "medium",
      topics: ["t2-relational-rules", "t2-unique-column-names", "t2-single-values"],
      q: {
        en: "The front desk's member sheet (version 1 of the seven-rules evolve block). Which of the seven rules does it break? Choose all that apply.",
        ar: "جدول الأعضاء من مكتب الاستقبال (النسخة 1 من مراحل تطوّر القواعد السبع). أيّ القواعد السبع يكسر؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "MEMBER\nMEMBER_ID | NAME | NAME   | CITY        | JOINED\nM01       | Sara | Hamdan | Gaza        | 2025-09-01\nM02       | Omar | Saleh  | Khan Younis | 2025-09-03\nM03       | Lina | Odeh   | Gaza, Rafah | last spring\nM02       | Huda | Nasser | Rafah       | 2026-01-10",
      options: [
        { en: "Rule 1 — each table has a distinct name", ar: "القاعدة 1 — لكل جدول اسم مميّز" },
        { en: "Rule 3 — a value to uniquely identify the rows", ar: "القاعدة 3 — قيمة تحدّد الصفوف تحديدًا فريدًا" },
        { en: "Rule 4 — each column has a unique name", ar: "القاعدة 4 — لكل عمود اسم فريد" },
        { en: "Rule 5 — entries in columns are single values", ar: "القاعدة 5 — القيم في الأعمدة مفردة" },
        { en: "Rule 6 — entries in columns are of the same kind", ar: "القاعدة 6 — القيم في العمود من النوع نفسه" },
        { en: "Rule 7 — order of rows and columns is insignificant", ar: "القاعدة 7 — ترتيب الصفوف والأعمدة غير مهمّ" }
      ],
      answer: [1, 2, 3, 4],
      hint: {
        en: "Walk the sheet once per rule: the IDs, the headers, each field, each column's kind.",
        ar: "مُرّ على الجدول مرّة لكل قاعدة: المعرّفات، والعناوين، وكل حقل، ونوع كل عمود."
      },
      explain: {
        en: "M02 is used twice (rule 3); two columns are called NAME (rule 4); \"Gaza, Rafah\" puts two values in one field (rule 5); \"last spring\" is a phrase in a date column (rule 6). Rule 1 holds — there is one MEMBER. Rule 7 is about meaning, not about how this sheet happens to be sorted, so nothing here breaks it. Rows and columns make a grid; only the rules make it relational.",
        ar: "M02 مستخدم مرّتين (القاعدة 3)؛ وعمودان اسمهما NAME (القاعدة 4)؛ و«Gaza, Rafah» تضع قيمتين في حقل واحد (القاعدة 5)؛ و«last spring» عبارة في عمود تواريخ (القاعدة 6). القاعدة 1 سليمة — فهناك MEMBER واحد. والقاعدة 7 تتعلّق بالمعنى، لا بطريقة ترتيب هذا الجدول، فلا شيء هنا يكسرها. الصفوف والأعمدة تصنع شبكة؛ والقواعد وحدها تجعلها علائقية."
      }
    },
    {
      id: "t2l2q19", type: "fill", level: "medium", topics: ["t2-relational-rules", "t2-single-values"],
      q: {
        en: "Version 2 of MEMBER in SQL. Rule 3 becomes a constraint and rule 6 becomes a data type. Fill both blanks.",
        ar: "النسخة 2 من MEMBER بلغة SQL. القاعدة 3 تصبح قيدًا، والقاعدة 6 تصبح نوع بيانات. املأ الفراغين."
      },
      lang: "sql",
      code: "CREATE TABLE members (\n  member_id  VARCHAR(3) ____1____,\n  first_name VARCHAR(20),\n  last_name  VARCHAR(20),\n  city       VARCHAR(30),\n  joined     ____2____\n);",
      blanks: [
        { accept: ["PRIMARY KEY", "primary key", "Primary Key"], label: { en: "1", ar: "1" } },
        { accept: ["DATE", "date", "Date"], label: { en: "2", ar: "2" } }
      ],
      hint: {
        en: "Rule 3: a value to identify each row. Rule 6: one kind of entry per column — what kind is JOINED?",
        ar: "القاعدة 3: قيمة تحدّد كل صفّ. القاعدة 6: نوع واحد من القيم في كل عمود — ما نوع JOINED؟"
      },
      explain: {
        en: "PRIMARY KEY on member_id makes the database itself refuse a second M02, so Huda must get M04. DATE on joined means the column holds dates and only dates, so \"last spring\" cannot be stored and Lina's real join date goes in instead. UNIQUE in blank 1 would stop repeats but would not make member_id the row's identifier; VARCHAR in blank 2 would let the phrase back in.",
        ar: "PRIMARY KEY على member_id يجعل قاعدة البيانات نفسها ترفض M02 ثانيًا، فيجب أن تأخذ Huda المعرّف M04. وDATE على joined يعني أن العمود يحمل تواريخ فقط، فلا يمكن تخزين «last spring» ويُخزَّن تاريخ انضمام Lina الحقيقي بدلًا منها. UNIQUE في الفراغ 1 يمنع التكرار لكنه لا يجعل member_id معرّف الصفّ؛ وVARCHAR في الفراغ 2 يعيد العبارة من جديد."
      },
      solution: { en: "1 = PRIMARY KEY, 2 = DATE.", ar: "1 = PRIMARY KEY، 2 = DATE." }
    },
    {
      id: "t2l2q20", type: "trace", level: "medium", topics: ["t2-unique-column-names", "t2-relational-rules"],
      q: {
        en: "The front desk's sheet, loaded as it is into the page's small SQL engine, which does not enforce rule 4. What does the name column show for M02?",
        ar: "جدول مكتب الاستقبال كما هو، محمّلًا في محرّك SQL الصغير في الصفحة، وهو لا يفرض القاعدة 4. ماذا يُظهر العمود name للعضو M02؟"
      },
      lang: "sql",
      code: "CREATE TABLE members_sheet (\n  member_id VARCHAR(3),\n  name      VARCHAR(20),\n  name      VARCHAR(20),\n  city      VARCHAR(30)\n);\n\nINSERT INTO members_sheet VALUES ('M02', 'Omar', 'Saleh', 'Khan Younis');\n\nSELECT * FROM members_sheet;",
      blanks: [{ accept: ["Saleh", "saleh", "SALEH"], label: { en: "name", ar: "name" } }],
      hint: {
        en: "Two columns, one name. How many of them can SELECT * show?",
        ar: "عمودان باسم واحد. كم منهما يستطيع SELECT * أن يُظهر؟"
      },
      explain: {
        en: "Saleh. The result has only three columns — member_id, name, city — and the second value written under name overwrote the first, so \"Omar\" is lost without any error. That is why rule 4 exists: a column is found by its name, and two columns with one name means one of them cannot be addressed. FIRST_NAME and LAST_NAME fix it.",
        ar: "Saleh. للنتيجة ثلاثة أعمدة فقط — member_id وname وcity — والقيمة الثانية المكتوبة تحت name محت الأولى، فضاع «Omar» دون أيّ خطأ. لهذا وُجدت القاعدة 4: العمود يُعثَر عليه باسمه، وعمودان باسم واحد يعني أن أحدهما لا يمكن الوصول إليه. والحلّ FIRST_NAME وLAST_NAME."
      },
      solution: { out: "member_id | name  | city\nM02       | Saleh | Khan Younis" }
    },
    {
      id: "t2l2q21", type: "tf", level: "easy", topics: ["t2-single-values", "t2-relational-rules"],
      q: {
        en: "Lina's CITY field holds \"Gaza, Rafah\". Both are cities, so the field obeys every rule about entries in columns.",
        ar: "حقل CITY الخاص بـ Lina يحمل «Gaza, Rafah». كلتاهما مدينة، فالحقل يلتزم بكل القواعد الخاصة بالقيم في الأعمدة."
      },
      truth: false,
      hint: {
        en: "There are two rules about entries: one about their kind, one about how many.",
        ar: "هناك قاعدتان عن القيم: واحدة عن نوعها، وأخرى عن عددها."
      },
      explain: {
        en: "False. Rule 6 holds — both values are cities, the right kind. But rule 5 says entries are single values, and this field holds two. A search for members in Rafah will not find Lina unless it hunts inside the text. Squeezing two values into one field is one of the lesson's named mistakes.",
        ar: "خطأ. القاعدة 6 سليمة — فالقيمتان مدينتان، من النوع الصحيح. لكن القاعدة 5 تقول إن القيم مفردة، وهذا الحقل يحمل قيمتين. البحث عن أعضاء رفح لن يجد Lina إلا إذا فتّش داخل النصّ. وحشر قيمتين في حقل واحد من الأخطاء التي سمّاها الدرس."
      }
    },

    /* ---------------------------------------------------- 6 · order is insignificant */
    {
      id: "t2l2q22", type: "output", level: "medium", topics: ["t2-order-insignificant"],
      q: {
        en: "books holds its usual four rows, stored as BK001 to BK004, with Citizen of the World (BK003) as the third. What is the book_id of the third row this query returns?",
        ar: "يحمل books صفوفه الأربعة المعتادة، مخزّنة من BK001 إلى BK004، وCitizen of the World (BK003) ثالثها. ما book_id الصفّ الثالث الذي يعيده هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT book_id, title\nFROM books\nORDER BY author_id DESC, title;",
      blanks: [{ accept: ["BK002", "bk002"], label: { en: "book_id", ar: "book_id" } }],
      hint: {
        en: "Sort by author first, last author first; within one author, by title A to Z.",
        ar: "رتّب حسب المؤلف أولًا، من آخر مؤلف إلى أوّله؛ وداخل المؤلف الواحد، حسب العنوان من A إلى Z."
      },
      explain: {
        en: "BK002, War and Peace. AD0003's two books come first (Androcles, then Citizen), then AD0002, then AD0001. The \"third row\" of the stored table and of this result are different books, which is rule 7: position carries no meaning. BK003 is still Citizen of the World — it moved to second place, and only its key stayed the same.",
        ar: "BK002، أي War and Peace. يأتي كتابا AD0003 أولًا (Androcles ثم Citizen)، ثم AD0002، ثم AD0001. «الصفّ الثالث» في الجدول المخزَّن وفي هذه النتيجة كتابان مختلفان، وهذه هي القاعدة 7: الموضع لا يحمل معنى. ما زال BK003 هو Citizen of the World — انتقل إلى المركز الثاني، ولم يبقَ ثابتًا إلا مفتاحه."
      },
      solution: { out: "BK004 Androcles and the Lion\nBK003 Citizen of the World\nBK002 War and Peace\nBK001 A Vision" }
    },
    {
      id: "t2l2q23", type: "mcq", level: "hard", topics: ["t2-order-insignificant", "t2-primary-key"],
      q: {
        en: "A report says: \"Sara joined the library first — she is in the first row of MEMBER.\" Which judgement is right?",
        ar: "يقول تقرير: «Sara أوّل من انضمّ إلى المكتبة — فهي في الصفّ الأول من MEMBER.» أيّ حكم صحيح؟"
      },
      options: [
        { en: "Right, as long as nobody has sorted the table since the rows were entered", ar: "صحيح، ما دام أحد لم يرتّب الجدول منذ إدخال الصفوف" },
        { en: "Wrong: row order means nothing; compare the JOINED dates, for example with ORDER BY joined", ar: "خطأ: ترتيب الصفوف لا يعني شيئًا؛ قارن تواريخ JOINED، مثلًا بـ ORDER BY joined" },
        { en: "Right, because her key M01 is the smallest member_id", ar: "صحيح، لأن مفتاحها M01 هو أصغر member_id" },
        { en: "Wrong: the first row of a table is always empty", ar: "خطأ: الصفّ الأول في الجدول فارغ دائمًا" }
      ],
      answer: 1,
      hint: {
        en: "Which column actually stores the fact \"when did this member join\"?",
        ar: "أيّ عمود يخزّن فعلًا حقيقة «متى انضمّ هذا العضو»؟"
      },
      explain: {
        en: "Rule 7: a table is a set of rows, not a numbered list, so \"first row\" states no fact. When a member joined is stored in JOINED; a report that needs an order asks for one with ORDER BY. \"Unless someone sorted it\" is the tempting answer, but any query may return rows in any order. The key does not help either: it identifies a row, it does not record when it arrived.",
        ar: "القاعدة 7: الجدول مجموعة صفوف لا قائمة مرقّمة، فـ «الصفّ الأول» لا يقرّر أيّ حقيقة. موعد انضمام العضو مخزَّن في JOINED؛ والتقرير الذي يحتاج ترتيبًا يطلبه بـ ORDER BY. «إلا إذا رتّبه أحد» هو الجواب المغري، لكن أيّ استعلام قد يعيد الصفوف بأيّ ترتيب. ولا يفيد المفتاح أيضًا: هو يحدّد الصفّ، ولا يسجّل متى وصل."
      }
    },

    /* ---------------------------------------------------- putting the keys together */
    {
      id: "t2l2q24", type: "write", level: "hard",
      topics: ["t2-primary-key", "t2-foreign-key", "t2-relational-rules"],
      q: {
        en: "Give lesson 1's split tables their keys. Write CREATE TABLE members (member_id, member_name, city) and CREATE TABLE loans (loan_id, member_id, title, loan_date), each ending in a semicolon. Sara has two loans, so choose LOAN's primary key with care, and make loans.member_id refuse a member who does not exist.",
        ar: "أعطِ جدولَي الدرس الأول المقسومين مفاتيحهما. اكتب CREATE TABLE members (member_id, member_name, city) وCREATE TABLE loans (loan_id, member_id, title, loan_date)، تنتهي كل منهما بفاصلة منقوطة. لـ Sara إعارتان، فاختر المفتاح الأساسي لـ LOAN بعناية، واجعل loans.member_id يرفض عضوًا غير موجود."
      },
      lang: "sql",
      lines: 12,
      starter: "CREATE TABLE members (\n\n);\n\nCREATE TABLE loans (\n\n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+members\\s*\\([^;]*(member_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*member_id\\s*\\))", flags: "i",
          label: { en: "member_id is the primary key of members", ar: "member_id هو المفتاح الأساسي لـ members" } },
        { re: "CREATE\\s+TABLE\\s+loans\\s*\\([^;]*(loan_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*loan_id\\s*\\))", flags: "i",
          label: { en: "loan_id is the primary key of loans", ar: "loan_id هو المفتاح الأساسي لـ loans" } },
        { re: "CREATE\\s+TABLE\\s+loans\\s*\\([^;]*REFERENCES\\s+members\\s*\\(\\s*member_id\\s*\\)", flags: "i",
          label: { en: "loans.member_id references members(member_id)", ar: "loans.member_id يشير إلى members(member_id)" } },
        { re: "CREATE\\s+TABLE\\s+loans\\s*\\((?=[^;]*title)(?=[^;]*loan_date)", flags: "i",
          label: { en: "loans holds title and loan_date", ar: "loans يحمل title وloan_date" } }
      ],
      forbid: [
        { re: "CREATE\\s+TABLE\\s+loans\\s*\\([^;]*(member_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*member_id\\s*\\))", flags: "i",
          label: { en: "member_id cannot be the primary key of loans — it repeats for every loan Sara makes", ar: "لا يمكن أن يكون member_id المفتاح الأساسي لـ loans — فهو يتكرّر مع كل إعارة تقوم بها Sara" } }
      ],
      hint: {
        en: "In loans, member_id points outward and repeats; rule 3 still needs a column that never repeats.",
        ar: "في loans، member_id يشير إلى الخارج ويتكرّر؛ والقاعدة 3 ما زالت تحتاج عمودًا لا يتكرّر."
      },
      explain: {
        en: "member_id is members' primary key. In loans it is a foreign key, and it repeats — Sara's two loans both carry M01 — so it cannot also be loans' primary key; that is the tempting mistake. No other column of LOAN is unique either, so rule 3 asks for a new one, loan_id. Run the solution and both of Sara's loans are saved, while a loan for M09 is refused.",
        ar: "member_id هو المفتاح الأساسي لـ members. وفي loans هو مفتاح أجنبي، ويتكرّر — فإعارتا Sara كلتاهما تحملان M01 — فلا يمكن أن يكون أيضًا المفتاح الأساسي لـ loans؛ وهذا هو الخطأ المغري. ولا يوجد عمود آخر فريد في LOAN، فتطلب القاعدة 3 عمودًا جديدًا هو loan_id. شغّل الحلّ فتُحفظ إعارتا Sara، وتُرفض إعارة للعضو M09."
      },
      solution: {
        code: "CREATE TABLE members (\n  member_id   VARCHAR(3)  PRIMARY KEY,\n  member_name VARCHAR(40),\n  city        VARCHAR(30)\n);\nCREATE TABLE loans (\n  loan_id   INT         PRIMARY KEY,\n  member_id VARCHAR(3)  REFERENCES members(member_id),\n  title     VARCHAR(60),\n  loan_date DATE\n);",
        en: "One identifier per table; the foreign key is the relationship, and it may repeat.",
        ar: "معرّف واحد لكل جدول؛ والمفتاح الأجنبي هو العلاقة، ويجوز أن يتكرّر."
      }
    }
  ]
};
