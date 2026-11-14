/* Question bank: T2 chapter test A -- Core. Four questions per lesson, easy and medium. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-exam-a"] = {
  title: { en: "Chapter Test A — Core", ar: "اختبار الفصل A — الأساسيات" },
  intro: {
    en: "24 questions across the whole chapter, about four from each lesson: the flat file and its anomalies, keys and the seven rules, the three models, entities and instances, attributes, and unique identifiers with the H.R. ERD. These are the ideas every student must own; none is hard. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الفصل كله، نحو أربعة من كل درس: الملف المسطّح وشذوذه، والمفاتيح والقواعد السبع، والنماذج الثلاثة، والكيانات ونسخها، والخصائص، والمعرّفات الفريدة مع مخطّط الموارد البشرية (ERD). هذه أفكار يجب أن يمتلكها كل طالب، وليس فيها سؤال صعب. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== lesson 1 · one table is not enough */
    {
      id: "t2ax01", type: "match", level: "easy",
      topics: ["t2-update-anomaly", "t2-insert-anomaly", "t2-delete-anomaly", "t2-data-inconsistency"],
      q: {
        en: "The department's flat BOOK_LIST also carries each book's publisher: BOOK_LIST(TITLE, PUBLISHER_NAME, PUBLISHER_CITY). Match each thing that happens to it with its name.",
        ar: "قائمة الكتب المسطّحة BOOK_LIST في القسم تحمل أيضًا ناشر كل كتاب: BOOK_LIST(TITLE, PUBLISHER_NAME, PUBLISHER_CITY). صِل كل ما يحدث لها باسمه."
      },
      leftHead: { en: "What happens", ar: "ما يحدث" },
      rightHead: { en: "Its name", ar: "اسمه" },
      pairs: [
        { l: { en: "Al-Manara Books moves to Rafah, and the librarian changes the city in only one of its books' rows", ar: "تنتقل Al-Manara Books إلى Rafah، فيغيّر الأمين المدينة في صفّ واحد فقط من صفوف كتبها" },
          r: { en: "Update anomaly", ar: "شذوذ التحديث (update anomaly)" } },
        { l: { en: "A new publisher signs with the library before any of its books arrive, and there is no row to put it in", ar: "يتعاقد ناشر جديد مع المكتبة قبل وصول أيّ من كتبه، ولا يوجد صفّ يوضع فيه" },
          r: { en: "Insert anomaly", ar: "شذوذ الإضافة (insert anomaly)" } },
        { l: { en: "A publisher's only book is withdrawn, and deleting its row erases the only record of that publisher", ar: "يُسحب الكتاب الوحيد لناشر ما، فيمحو حذفُ صفّه السجلَّ الوحيد لذلك الناشر" },
          r: { en: "Delete anomaly", ar: "شذوذ الحذف (delete anomaly)" } },
        { l: { en: "Two rows now give Al-Manara Books two different cities", ar: "صفّان الآن يعطيان Al-Manara Books مدينتين مختلفتين" },
          r: { en: "Data inconsistency", ar: "عدم اتّساق البيانات (data inconsistency)" } }
      ],
      hint: {
        en: "Three anomalies are named after the change that goes wrong: update, insert, delete. The fourth is the state a partial update leaves behind.",
        ar: "ثلاثة أنواع من الشذوذ تُسمّى بالتغيير الذي يفشل: تحديث، إضافة، حذف. والرابع هو الحالة التي يتركها التحديث الجزئي."
      },
      explain: {
        en: "The publisher's facts sit inside book rows, so the same three anomalies as Goldsmith's appear. Changing some copies but not all is the update anomaly, and the contradiction it leaves is data inconsistency — the result, not the change. A publisher with no book has no row (insert); a publisher's last book takes the publisher with it (delete). A PUBLISHER table of its own cures all four.",
        ar: "حقائق الناشر موجودة داخل صفوف الكتب، فتظهر الأنواع الثلاثة نفسها التي رأيناها مع Goldsmith. تغيير بعض النسخ دون بعضها شذوذ تحديث، والتناقض الذي يتركه هو عدم اتّساق البيانات — أي النتيجة لا التغيير. الناشر بلا كتاب لا صفّ له (إضافة)، وآخر كتب الناشر يأخذ الناشر معه (حذف). وجدول PUBLISHER مستقل يعالج الأربعة كلها."
      }
    },
    {
      id: "t2ax02", type: "tf", level: "easy",
      topics: ["t2-update-anomaly", "t2-one-fact-one-place"],
      q: {
        en: "The flat BOOK_LIST is safe from the update anomaly for good, as long as every librarian agrees always to rename an author with <code>WHERE author_id = …</code> rather than <code>WHERE title = …</code>.",
        ar: "قائمة BOOK_LIST المسطّحة تصبح في مأمن من شذوذ التحديث نهائيًّا، ما دام كل أمين مكتبة يتّفق على أن يغيّر اسم المؤلف دائمًا بـ <code>WHERE author_id = …</code> لا بـ <code>WHERE title = …</code>."
      },
      truth: false,
      hint: {
        en: "Ask what the table itself still allows, not what careful people will do.",
        ar: "اسأل عمّا يسمح به الجدول نفسه، لا عمّا سيفعله الأشخاص الحريصون."
      },
      explain: {
        en: "False. The habit works only while everyone remembers it on every change; the table still has room for two names under AD0003, and one forgotten condition brings the inconsistency back. The lesson's rule: fix an anomaly with the table's shape, not with a habit. Storing the name once, in AUTHOR, leaves no second copy to forget.",
        ar: "خطأ. العادة تنجح ما دام الجميع يتذكّرها في كل تغيير؛ أمّا الجدول فما زال يتّسع لاسمين تحت AD0003، وشرط واحد منسيّ يعيد عدم الاتّساق. قاعدة الدرس: عالج الشذوذ بشكل الجدول، لا بعادة. تخزين الاسم مرّة واحدة في AUTHOR لا يترك نسخة ثانية تُنسى."
      }
    },
    {
      id: "t2ax03", type: "mcq", level: "medium",
      topics: ["t2-data-redundancy", "t2-data-inconsistency"],
      q: {
        en: "BOOK_LIST holds \"Oliver Goldsmith\" in two rows, spelt exactly the same in both. Which defect does the table have at this moment?",
        ar: "تحمل BOOK_LIST الاسم «Oliver Goldsmith» في صفّين، مكتوبًا بالضبط بالطريقة نفسها في الاثنين. أيّ عيب في الجدول في هذه اللحظة؟"
      },
      options: [
        { en: "Data inconsistency — the name is stored in two places", ar: "عدم اتّساق البيانات — الاسم مخزّن في مكانين" },
        { en: "None yet — identical copies do no harm", ar: "لا عيب بعد — النسخ المتطابقة لا تضرّ" },
        { en: "Data redundancy — one fact is stored twice, though the copies still agree", ar: "تكرار البيانات — حقيقة واحدة مخزّنة مرّتين، وإن كانت النسختان ما زالتا متّفقتين" },
        { en: "An update anomaly — it has already happened", ar: "شذوذ تحديث — وقد حدث بالفعل" }
      ],
      answer: 2,
      hint: {
        en: "One of these words means \"stored more than once\"; another means \"stored copies that disagree\".",
        ar: "إحدى هذه الكلمات تعني «مخزّن أكثر من مرّة»، وأخرى تعني «نسخ مخزّنة تختلف»."
      },
      explain: {
        en: "Redundancy is the same information stored in more than one place — true now. Inconsistency is two copies that disagree, and these two still agree, so it has not happened yet; nor has an update anomaly, since nothing was changed. \"No harm\" is the tempting trap: redundancy is what makes the later inconsistency possible.",
        ar: "التكرار (redundancy) هو تخزين المعلومة نفسها في أكثر من مكان — وهذا صحيح الآن. أمّا عدم الاتّساق فهو نسختان تختلفان، وهاتان ما زالتا متّفقتين، فلم يحدث بعد؛ ولا شذوذ تحديث، إذ لم يُغيَّر شيء. وخيار «لا ضرر» هو الفخّ: التكرار هو ما يجعل عدم الاتّساق ممكنًا لاحقًا."
      }
    },
    {
      id: "t2ax04", type: "output", level: "easy",
      topics: ["t2-delete-anomaly", "t2-flat-file"],
      q: {
        en: "The flat LOAN_LIST holds lesson 1's three rows: Sara Hamdan (M01) with A Vision and Citizen of the World, Omar Saleh (M02) with War and Peace. Omar returns his book and his loan is deleted. What number does the query return?",
        ar: "تحمل قائمة الإعارات المسطّحة LOAN_LIST صفوف الدرس الأول الثلاثة: Sara Hamdan (M01) مع A Vision وCitizen of the World، وOmar Saleh (M02) مع War and Peace. يعيد Omar كتابه فتُحذف إعارته. ما العدد الذي يعيده الاستعلام؟"
      },
      lang: "sql",
      code: "DELETE FROM loan_list\nWHERE title = 'War and Peace';\n\nSELECT COUNT(*) AS omar_rows\nFROM loan_list\nWHERE member_name = 'Omar Saleh';",
      blanks: [{ accept: ["0"], label: { en: "omar_rows", ar: "omar_rows" } }],
      solution: { out: "0" },
      hint: {
        en: "In LOAN_LIST a member exists only inside his loans. How many loans did Omar have?",
        ar: "في LOAN_LIST لا يوجد العضو إلا داخل إعاراته. كم إعارة كانت لـ Omar؟"
      },
      explain: {
        en: "0. Omar had one loan, so his row was the only place his name and city were written. Deleting the loan deleted the member — the delete anomaly. He is still a member of the library; the table just no longer knows it. A separate MEMBER table would keep him whatever happens to his loans.",
        ar: "0. كانت لـ Omar إعارة واحدة، فكان صفّها المكان الوحيد الذي كُتب فيه اسمه ومدينته. حذفُ الإعارة حذفَ العضو — وهذا شذوذ الحذف. ما زال Omar عضوًا في المكتبة، لكن الجدول لم يعد يعرف ذلك. جدول MEMBER مستقل يُبقيه مهما حدث لإعاراته."
      }
    },

    /* ==================================================== lesson 2 · the relational answer */
    {
      id: "t2ax05", type: "contrast", level: "medium",
      topics: ["t2-primary-key", "t2-unique-key", "t2-pk-fk-uk"],
      q: {
        en: "Both refuse duplicates. Sort each statement: is it about a primary key, or a unique key?",
        ar: "كلاهما يرفض التكرار. صنّف كل عبارة: هل تخصّ المفتاح الأساسي (primary key) أم المفتاح الفريد (unique key)؟"
      },
      concepts: [
        { en: "Primary key", ar: "المفتاح الأساسي" },
        { en: "Unique key", ar: "المفتاح الفريد" }
      ],
      rows: [
        { s: { en: "EMPLOYEE_ID in the lecturer's EMPLOYEES table", ar: "EMPLOYEE_ID في جدول EMPLOYEES عند المحاضِرة" }, a: 0 },
        { s: { en: "PAYROLL_ID in the lecturer's EMPLOYEES table", ar: "PAYROLL_ID في جدول EMPLOYEES عند المحاضِرة" }, a: 1 },
        { s: { en: "It is what a foreign key in another table points at", ar: "هو ما يشير إليه المفتاح الأجنبي في جدول آخر" }, a: 0 },
        { s: { en: "Title in Matt's BOOKS, written BOOKS_Title_UK", ar: "Title في BOOKS عند Matt، ويُكتب BOOKS_Title_UK" }, a: 1 },
        { s: { en: "A table has exactly one of it", ar: "للجدول واحد منه بالضبط" }, a: 0 },
        { s: { en: "Marked U, not #, in the logical model", ar: "يُعلَّم بـ U لا بـ # في النموذج المنطقي" }, a: 1 }
      ],
      hint: {
        en: "Both never repeat. The difference is the job: which one is THE identifier of the row?",
        ar: "كلاهما لا يتكرّر أبدًا. الفرق في الوظيفة: أيّهما هو مُعرّف الصفّ؟"
      },
      explain: {
        en: "A table has one primary key: the identifier of each row, and the column every foreign key points at — EMPLOYEE_ID, BOOKS.Id. A unique key is any other column that must also never repeat, such as PAYROLL_ID or a book's Title, marked U in the logical model. Thinking \"unique means primary\" is the trap: a table can have one primary key and several unique keys.",
        ar: "للجدول مفتاح أساسي واحد: مُعرّف كل صفّ، والعمود الذي يشير إليه كل مفتاح أجنبي — EMPLOYEE_ID وBOOKS.Id. والمفتاح الفريد أيّ عمود آخر يجب ألّا يتكرّر أيضًا، مثل PAYROLL_ID أو Title للكتاب، ويُعلَّم بـ U في النموذج المنطقي. الفخّ أن تظنّ «فريد يعني أساسي»: قد يكون للجدول مفتاح أساسي واحد وعدّة مفاتيح فريدة."
      }
    },
    {
      id: "t2ax06", type: "error", level: "medium",
      topics: ["t2-relational-rules", "t2-single-values"],
      q: {
        en: "A volunteer typed the authors' birth years into AUTHOR. Which lines stop this table from obeying all seven rules? Choose every one.",
        ar: "أدخل متطوّع سنوات ميلاد المؤلفين في AUTHOR. أيّ الأسطر تمنع هذا الجدول من الالتزام بالقواعد السبع كلها؟ اختر كل سطر منها."
      },
      lang: "text",
      code: "AUTHOR_ID | AUTHOR_NAME                    | BORN\nAD0001    | Oscar Wilde                    | 1854\nAD0002    | Leo Tolstoy                    | 1828\nAD0003    | Oliver Goldsmith               | some time in the 1720s\nAD0004    | Jane Austen, Charlotte Bronte  | 1775",
      answer: [4, 5],
      solution: {
        en: "Line 4 breaks rule 6: BORN holds years, and a phrase is not the same kind of entry. Line 5 breaks rule 5: one AUTHOR_NAME field holds two authors. Store a year (or leave it null) for Goldsmith, and give Charlotte Bronte her own row and AUTHOR_ID.",
        ar: "السطر 4 يخالف القاعدة 6: العمود BORN يحمل سنوات، والعبارة ليست من النوع نفسه. السطر 5 يخالف القاعدة 5: حقل AUTHOR_NAME واحد يحمل مؤلفتين. خزّن سنة لـ Goldsmith (أو اتركها null)، وأعطِ Charlotte Bronte صفًّا خاصًّا وAUTHOR_ID خاصًّا بها."
      },
      hint: {
        en: "Rules 5 and 6 are about the field: one value, and the same kind as the rest of its column.",
        ar: "القاعدتان 5 و6 تخصّان الحقل: قيمة واحدة، ومن نوع بقية عموده نفسه."
      },
      explain: {
        en: "Lines 4 and 5. Every entry in BORN must be the same kind — a year — and \"some time in the 1720s\" cannot be sorted or compared with the others (rule 6). \"Jane Austen, Charlotte Bronte\" is two values in one field (rule 5), so a search for Bronte finds nobody and she has no AUTHOR_ID of her own. The header and the other rows obey every rule.",
        ar: "السطران 4 و5. كل مُدخل في BORN يجب أن يكون من النوع نفسه — سنة — و«some time in the 1720s» لا يمكن ترتيبه ولا مقارنته بالبقية (القاعدة 6). و«Jane Austen, Charlotte Bronte» قيمتان في حقل واحد (القاعدة 5)، فالبحث عن Bronte لا يجد أحدًا، وليس لها AUTHOR_ID خاصّ بها. أمّا سطر العناوين وبقية الصفوف فتلتزم بكل القواعد."
      }
    },
    {
      id: "t2ax07", type: "trace", level: "easy",
      topics: ["t2-foreign-key", "t2-common-field"],
      q: {
        en: "The slides' STUDENTS and COURSES, with a few rows. STUDENTS.COURSE_ID is a foreign key to COURSES.ID. Follow it by hand: which course is student 7, Khalil, attending?",
        ar: "الجدولان STUDENTS وCOURSES من الشرائح، مع بعض الصفوف. STUDENTS.COURSE_ID مفتاح أجنبي إلى COURSES.ID. تتبّعه بنفسك: أيّ مقرّر تحضره الطالبة 7، Khalil؟"
      },
      lang: "text",
      code: "STUDENTS\nID | LAST_NAME | COURSE_ID\n5  | Hamdan    | 2\n7  | Khalil    | 3\n9  | Saleh     | 2\n\nCOURSES\nID | NAME      | DURATION\n2  | Databases | 16 weeks\n3  | Networks  | 12 weeks",
      options: [
        { en: "None — COURSES has only two rows, so there is no third course", ar: "لا شيء — في COURSES صفّان فقط، فلا يوجد مقرّر ثالث" },
        { en: "Networks", ar: "Networks" },
        { en: "We cannot tell — STUDENTS does not store the course's name", ar: "لا يمكن أن نعرف — STUDENTS لا يخزّن اسم المقرّر" }
      ],
      answer: 1,
      hint: {
        en: "A foreign key holds the value of a primary key, not a row number.",
        ar: "المفتاح الأجنبي يحمل قيمة مفتاح أساسي، لا رقم صفّ."
      },
      explain: {
        en: "Khalil's COURSE_ID is 3, so look for the COURSES row whose ID is 3: Networks. Reading 3 as \"the third row\" fails because row order means nothing (rule 7); a key is matched by value. And STUDENTS need not store the name — the foreign key is exactly what lets you find it in COURSES.",
        ar: "قيمة COURSE_ID لدى Khalil هي 3، فابحث عن صفّ COURSES الذي ID فيه 3: Networks. قراءة 3 على أنها «الصفّ الثالث» خطأ، لأن ترتيب الصفوف لا معنى له (القاعدة 7)؛ المفتاح يُطابَق بالقيمة. وليس على STUDENTS أن يخزّن الاسم — فالمفتاح الأجنبي هو بالضبط ما يتيح إيجاده في COURSES."
      }
    },
    {
      id: "t2ax08", type: "tf", level: "medium",
      topics: ["t2-foreign-key", "t2-data-redundancy"],
      q: {
        en: "In the split library, AUTHOR_ID is stored in both AUTHOR and BOOK, and AD0003 appears twice in BOOK. That is the same redundancy lesson 1 warned against.",
        ar: "في المكتبة بعد التقسيم، يُخزَّن AUTHOR_ID في AUTHOR وفي BOOK معًا، ويظهر AD0003 مرّتين في BOOK. هذا هو التكرار نفسه الذي حذّر منه الدرس الأول."
      },
      truth: false,
      hint: {
        en: "What fact was copied in lesson 1, and what is copied now?",
        ar: "ما الحقيقة التي كانت تُنسخ في الدرس الأول، وما الذي يُنسخ الآن؟"
      },
      explain: {
        en: "False. Lesson 1 copied a fact — Goldsmith's name — into every book row, so the copies could disagree. Now the name lives once, in AUTHOR; BOOK only holds the short key that points at it. A foreign key is meant to repeat whenever many rows point at one row, and a rename still touches only one row.",
        ar: "خطأ. في الدرس الأول كانت تُنسخ حقيقة — اسم Goldsmith — في كل صفّ من صفوف كتبه، فكان يمكن أن تختلف النسخ. الآن الاسم موجود مرّة واحدة في AUTHOR، وBOOK لا يحمل إلا المفتاح القصير الذي يشير إليه. والمفتاح الأجنبي يتكرّر عمدًا كلما أشارت صفوف كثيرة إلى صفّ واحد، وتغيير الاسم ما زال يمسّ صفًّا واحدًا."
      }
    },

    /* ==================================================== lesson 3 · three models, one database */
    {
      id: "t2ax09", type: "match", level: "easy",
      topics: ["t2-conceptual-model", "t2-logical-model", "t2-physical-model", "t2-development-process"],
      q: {
        en: "Match each item from the library's design to the first place in the development process where it appears.",
        ar: "صِل كل عنصر من تصميم المكتبة بأوّل موضع يظهر فيه في عملية التطوير."
      },
      leftHead: { en: "Item", ar: "العنصر" },
      rightHead: { en: "First appears in", ar: "يظهر أوّلًا في" },
      pairs: [
        { l: { en: "<code>MEMBER borrow / borrowed by BOOK</code>", ar: "<code>MEMBER borrow / borrowed by BOOK</code>" },
          r: { en: "The conceptual model", ar: "النموذج المفاهيمي" } },
        { l: { en: "<code>o State</code> on MEMBER", ar: "<code>o State</code> في MEMBER" },
          r: { en: "The logical model", ar: "النموذج المنطقي" } },
        { l: { en: "<code>Title VARCHAR2(50)</code> and <code>BOOKS_Title_UK</code>", ar: "<code>Title VARCHAR2(50)</code> و<code>BOOKS_Title_UK</code>" },
          r: { en: "The physical model", ar: "النموذج الفيزيائي" } },
        { l: { en: "The books table, created and holding rows", ar: "الجدول books، منشأً وفيه صفوف" },
          r: { en: "The database build", ar: "بناء قاعدة البيانات (database build)" } }
      ],
      hint: {
        en: "Each step adds one layer: entities and relationships, then attributes and marks, then product types and named constraints, then real tables.",
        ar: "كل خطوة تضيف طبقة: الكيانات والعلاقات، ثم الخصائص والعلامات، ثم أنواع المنتج والقيود المسمّاة، ثم الجداول الحقيقية."
      },
      explain: {
        en: "A relationship between entities is conceptual. An optional attribute needs attributes and marks, which first appear in the logical model. A product data type with precision and a named constraint are physical. Only the build phase turns the design into a real table with rows. Putting an attribute in the conceptual model, or a VARCHAR2 in the logical one, is the lesson's commonest slip.",
        ar: "العلاقة بين الكيانات مفاهيمية. والخاصية الاختيارية تحتاج إلى الخصائص والعلامات، وهي تظهر أوّلًا في النموذج المنطقي. ونوع البيانات الخاصّ بالمنتج مع دقّته، والقيد المسمّى، فيزيائيّان. ومرحلة البناء وحدها تحوّل التصميم إلى جدول حقيقي فيه صفوف. ووضع خاصية في النموذج المفاهيمي، أو VARCHAR2 في المنطقي، أشيع زلّة في الدرس."
      }
    },
    {
      id: "t2ax10", type: "tf", level: "medium",
      topics: ["t2-logical-model", "t2-model-comparison"],
      q: {
        en: "The logical model is derived from the conceptual model, yet it may contain entities the conceptual model did not show.",
        ar: "النموذج المنطقي مشتقّ من النموذج المفاهيمي، ومع ذلك قد يحتوي على كيانات لم يُظهرها النموذج المفاهيمي."
      },
      truth: true,
      hint: {
        en: "Count Matt's boxes: four in the conceptual model. How many in the logical one?",
        ar: "عُدّ صناديق Matt: أربعة في النموذج المفاهيمي. وكم في المنطقي؟"
      },
      explain: {
        en: "True. Matt's conceptual model has four entities; his logical model has six. BOOK TRANSACTION and BOOK AUTHOR appeared while the detail was worked out, and the physical model only turned those six into six tables. \"Derived from\" means it builds on the conceptual model, not that it may only copy it.",
        ar: "صحيح. في النموذج المفاهيمي عند Matt أربعة كيانات، وفي المنطقي ستّة. ظهر BOOK TRANSACTION وBOOK AUTHOR أثناء العمل على التفاصيل، ولم يفعل النموذج الفيزيائي إلا أن حوّل الستّة إلى ستّة جداول. و«مشتقّ من» تعني أنه يبني على النموذج المفاهيمي، لا أنه ينسخه فقط."
      }
    },
    {
      id: "t2ax11", type: "error", level: "medium",
      topics: ["t2-conceptual-scope", "t2-conceptual-model"],
      q: {
        en: "A classmate's page is titled \"Library — conceptual model\". Which lines do not belong on a conceptual model? Choose every one.",
        ar: "صفحة زميل عنوانها «Library — conceptual model». أيّ الأسطر لا مكان لها في نموذج مفاهيمي؟ اختر كل سطر منها."
      },
      lang: "text",
      code: "MEMBER\nBOOK\nAUTHOR\nMEMBER  borrow / borrowed by  BOOK\nBOOK    # * Id    U * Title\nBOOK    written by / writer of  AUTHOR\nAUTHOR.Id is NUMBER",
      answer: [5, 7],
      solution: {
        en: "Line 5 belongs to the logical model: attributes, a UID and the marks #, * and U. Line 7 belongs to the physical model: NUMBER is a product data type. The entities and the two named relationships stay.",
        ar: "السطر 5 مكانه النموذج المنطقي: خصائص ومعرّف فريد والعلامات # و* وU. والسطر 7 مكانه النموذج الفيزيائي: NUMBER نوع بيانات خاصّ بالمنتج. أمّا الكيانات والعلاقتان المسمّاتان فتبقى."
      },
      hint: {
        en: "A conceptual model identifies entities and relationships. What does it not specify?",
        ar: "النموذج المفاهيمي يحدّد الكيانات والعلاقات. فما الذي لا يحدّده؟"
      },
      explain: {
        en: "Lines 5 and 7. The slides say a conceptual model identifies entities and relationships and does not specify attributes or unique identifiers — so line 5, with Id, Title and their marks, is too early. A data type such as NUMBER is two steps too early: it is physical. Lines 1–4 and 6 are exactly what a conceptual model holds.",
        ar: "السطران 5 و7. تقول الشرائح إن النموذج المفاهيمي يحدّد الكيانات والعلاقات ولا يحدّد الخصائص ولا المعرّفات الفريدة — فالسطر 5، بما فيه من Id وTitle وعلاماتهما، جاء مبكّرًا. ونوع البيانات مثل NUMBER جاء مبكّرًا بخطوتين: فهو فيزيائي. والأسطر 1–4 و6 هي بالضبط ما يحمله النموذج المفاهيمي."
      }
    },
    {
      id: "t2ax12", type: "mcq", level: "easy",
      topics: ["t2-process-phases", "t2-development-process"],
      q: {
        en: "In the database development process, in which phase is the first <code>CREATE TABLE</code> run?",
        ar: "في عملية تطوير قاعدة البيانات، في أيّ مرحلة تُنفَّذ أوّل جملة <code>CREATE TABLE</code>؟"
      },
      options: [
        { en: "Strategy and analysis — as soon as the request arrives", ar: "الاستراتيجية والتحليل — فور وصول الطلب" },
        { en: "Design — the physical model is one step from CREATE TABLE", ar: "التصميم (Design) — فالنموذج الفيزيائي على بُعد خطوة من CREATE TABLE" },
        { en: "Build", ar: "البناء (Build)" }
      ],
      answer: 2,
      hint: {
        en: "Three phases, each handing a product to the next. Which product is a running database?",
        ar: "ثلاث مراحل، كلٌّ منها تسلّم ناتجًا للتي بعدها. أيّ ناتج هو قاعدة بيانات تعمل؟"
      },
      explain: {
        en: "Build. Strategy and analysis produce the conceptual model; design produces the database design, logical then physical; only build turns that design into a database. Design is the tempting answer because the physical model is so close to SQL — but it is still a plan. Matt's classmate who ran CREATE TABLE on day one skipped two phases.",
        ar: "البناء. الاستراتيجية والتحليل تُنتجان النموذج المفاهيمي؛ والتصميم يُنتج تصميم قاعدة البيانات، المنطقي ثم الفيزيائي؛ والبناء وحده يحوّل ذلك التصميم إلى قاعدة بيانات. التصميم هو الإجابة المغرية لأن النموذج الفيزيائي قريب جدًّا من SQL — لكنه ما زال خطّة. وزميل Matt الذي نفّذ CREATE TABLE في اليوم الأول تخطّى مرحلتين."
      }
    },

    /* ==================================================== lesson 4 · entities and instances */
    {
      id: "t2ax13", type: "fill", level: "easy",
      topics: ["t2-entity", "t2-instance", "t2-instance-as-row"],
      q: {
        en: "Fill the three blanks with single words.",
        ar: "املأ الفراغات الثلاثة بكلمة واحدة في كل منها."
      },
      lang: "text",
      code: "MEMBER is an ____1____ of the library model, and becomes the table members.\nSara Hamdan is one ____2____ of MEMBER, and becomes one ____3____ of members.",
      blanks: [
        { accept: ["entity", "Entity", "ENTITY", "كيان", "الكيان"], label: { en: "1", ar: "1" } },
        { accept: ["instance", "Instance", "INSTANCE", "occurrence", "نسخة", "النسخة"], label: { en: "2", ar: "2" } },
        { accept: ["row", "Row", "ROW", "record", "Record", "صف", "صفّ", "سجل", "سجلّ"], label: { en: "3", ar: "3" } }
      ],
      solution: { en: "1 = entity, 2 = instance, 3 = row.", ar: "1 = entity (كيان)، 2 = instance (نسخة)، 3 = row (صفّ)." },
      hint: {
        en: "The model draws the set once; each member is one occurrence of it, stored once in the table.",
        ar: "النموذج يرسم المجموعة مرّة واحدة؛ وكل عضو حدوث واحد منها، يُخزَّن مرّة واحدة في الجدول."
      },
      explain: {
        en: "MEMBER is the entity — a set of similar things the library lists — and it becomes one table. Sara Hamdan is a single occurrence of it, an instance, and becomes one row. That is why Lina Khalil joining adds a row and never changes the model.",
        ar: "MEMBER هو الكيان — مجموعة من الأشياء المتشابهة تسردها المكتبة — ويصبح جدولًا واحدًا. وSara Hamdan حدوث واحد منه، أي نسخة (instance)، وتصبح صفًّا واحدًا. لهذا فانضمام Lina Khalil يضيف صفًّا ولا يغيّر النموذج أبدًا."
      }
    },
    {
      id: "t2ax14", type: "tf", level: "easy",
      topics: ["t2-intangible", "t2-entity-vs-instance"],
      q: {
        en: "JOB is an intangible entity, and Electrician is one of its instances.",
        ar: "JOB كيان غير ملموس (intangible)، وElectrician إحدى نسخه."
      },
      truth: true,
      hint: {
        en: "Can you touch \"Electrician\"? And is it a set, or one item in a set?",
        ar: "هل يمكنك لمس «Electrician»؟ وهل هو مجموعة، أم عنصر واحد في مجموعة؟"
      },
      explain: {
        en: "True. JOB is a set the business lists — Electrician, IT Technician — so it is an entity, and Electrician is one instance. A job is an idea, not an object you can hand someone, so the entity is intangible, like SKILL LEVEL. Intangible entities are entities in exactly the same sense as tangible ones.",
        ar: "صحيح. JOB مجموعة يسردها العمل — Electrician وIT Technician — فهو كيان، وElectrician نسخة واحدة منه. والوظيفة فكرة لا شيء تناوله لأحد، فالكيان غير ملموس، مثل SKILL LEVEL. والكيانات غير الملموسة كيانات بالمعنى نفسه تمامًا الذي للملموسة."
      }
    },
    {
      id: "t2ax15", type: "mcq", level: "medium",
      topics: ["t2-one-instance", "t2-business-context"],
      q: {
        en: "One school's own database has an entity SCHOOL. The education ministry's database, which covers every school in Gaza, also has an entity SCHOOL. Which judgement is right?",
        ar: "قاعدة بيانات مدرسة واحدة فيها كيان SCHOOL. وقاعدة بيانات وزارة التعليم، التي تغطّي كل مدارس Gaza، فيها أيضًا كيان SCHOOL. أيّ حكم صحيح؟"
      },
      options: [
        { en: "Right in both — a school is tangible and important to both", ar: "صحيح في الاثنين — فالمدرسة ملموسة ومهمّة لكليهما" },
        { en: "Wrong in the school's model, where it has one instance; right in the ministry's, which lists many schools", ar: "خطأ في نموذج المدرسة، حيث له نسخة واحدة؛ وصحيح في نموذج الوزارة، التي تسرد مدارس كثيرة" },
        { en: "Wrong in both — a school is an instance, never an entity", ar: "خطأ في الاثنين — المدرسة نسخة، ولا تكون كيانًا أبدًا" },
        { en: "Right in the school's model only — the ministry is not a school", ar: "صحيح في نموذج المدرسة فقط — فالوزارة ليست مدرسة" }
      ],
      answer: 1,
      hint: {
        en: "Remember LIBRARY in Matt's model — and the DOG question: who is making the list?",
        ar: "تذكّر LIBRARY في نموذج Matt — وسؤال DOG: من الذي يضع القائمة؟"
      },
      explain: {
        en: "For the single school, SCHOOL would hold one instance forever — the LIBRARY mistake: an entity with one instance makes no sense; the school is the business, not a box. The ministry lists many schools, so there SCHOOL is a proper entity. \"Tangible and important\" is not enough, and \"never an entity\" ignores that the business context decides.",
        ar: "في المدرسة الواحدة سيحمل SCHOOL نسخة واحدة إلى الأبد — وهو خطأ LIBRARY: لا معنى لكيان له نسخة واحدة؛ المدرسة هي العمل نفسه لا صندوق فيه. أمّا الوزارة فتسرد مدارس كثيرة، فـ SCHOOL هناك كيان سليم. كونه «ملموسًا ومهمًّا» لا يكفي، و«لا يكون كيانًا أبدًا» يتجاهل أن سياق العمل هو الذي يقرّر."
      }
    },
    {
      id: "t2ax16", type: "complete", level: "medium",
      topics: ["t2-entity-vs-instance", "t2-instance"],
      q: {
        en: "Part of the slides' table of entities and their instances. What fills the gap?",
        ar: "جزء من جدول الشرائح للكيانات ونسخها. ما الذي يملأ الفراغ؟"
      },
      lang: "text",
      code: "ENTITY         INSTANCES\nPRODUCT        Nike Air Jordan, Gibson Les Paul Custom\nPRODUCT TYPE   Shoe, ____\nSKILL LEVEL    Beginner, Expert",
      options: [
        { code: "FIFA 26" },
        { code: "Intermediate" },
        { code: "Video Game" }
      ],
      answer: 2,
      solution: {
        code: "PRODUCT TYPE   Shoe, Video Game",
        en: "Video Game, like Shoe, is a kind of product: an instance of PRODUCT TYPE.",
        ar: "Video Game، مثل Shoe، نوعٌ من المنتجات: نسخة من PRODUCT TYPE."
      },
      hint: {
        en: "Shoe is not one shoe you can buy; it is a kind of product. Which option is also a kind?",
        ar: "Shoe ليس حذاءً واحدًا تشتريه؛ إنه نوع من المنتجات. أيّ خيار هو نوع أيضًا؟"
      },
      explain: {
        en: "Video Game. PRODUCT TYPE lists kinds of product, so its instances are categories such as Shoe and Video Game. FIFA 26 is tempting because it is a video game — but it is one product you can buy, an instance of PRODUCT, beside Nike Air Jordan. Intermediate is a skill level, an instance of a different entity.",
        ar: "Video Game. يسرد PRODUCT TYPE أنواع المنتجات، فنسخه فئات مثل Shoe وVideo Game. وFIFA 26 مغرٍ لأنه لعبة فيديو — لكنه منتج واحد تشتريه، أي نسخة من PRODUCT بجانب Nike Air Jordan. وIntermediate مستوى مهارة، نسخة من كيان آخر."
      }
    },

    /* ==================================================== lesson 5 · attributes and their values */
    {
      id: "t2ax17", type: "contrast", level: "medium",
      topics: ["t2-mandatory-optional", "t2-optionality-context"],
      q: {
        en: "Sort each attribute, in the business named: mandatory (*) or optional (o)?",
        ar: "صنّف كل خاصية، في العمل المذكور: إلزامية (*) أم اختيارية (o)؟"
      },
      concepts: [
        { en: "Mandatory  *", ar: "إلزامية  *" },
        { en: "Optional  o", ar: "اختيارية  o" }
      ],
      rows: [
        { s: { en: "Last Name of a library MEMBER", ar: "Last Name لعضو المكتبة MEMBER" }, a: 0 },
        { s: { en: "State of a library MEMBER — Gaza addresses have none", ar: "State لعضو المكتبة MEMBER — عناوين Gaza ليس فيها ولاية" }, a: 1 },
        { s: { en: "Commission of an EMPLOYEE in the H.R. scenario", ar: "Commission للموظف EMPLOYEE في سيناريو الموارد البشرية" }, a: 1 },
        { s: { en: "Email of an EMPLOYEE in an email application", ar: "Email للموظف EMPLOYEE في تطبيق بريد إلكتروني" }, a: 0 },
        { s: { en: "Email of a CUSTOMER in an online catalog", ar: "Email للزبون CUSTOMER في كتالوج إلكتروني" }, a: 1 },
        { s: { en: "Tran Date of a BOOK TRANSACTION", ar: "Tran Date لـ BOOK TRANSACTION" }, a: 0 }
      ],
      hint: {
        en: "Ask what this business cannot work without, not what is nice to have.",
        ar: "اسأل عمّا لا يستطيع هذا العمل الاستغناء عنه، لا عمّا يحسن وجوده."
      },
      explain: {
        en: "The library must always be able to name a member and date a borrowing, so Last Name and Tran Date are *. State is o because many members have none, and Commission because only employees on commission have one. Email shows that the business decides: required by an email application, optional for a catalog's customers. Marking an attribute the same way everywhere is the trap.",
        ar: "يجب أن تستطيع المكتبة دائمًا تسمية العضو وتأريخ الإعارة، فـ Last Name وTran Date إلزاميّتان (*). وState اختيارية (o) لأن أعضاء كثيرين بلا ولاية، وCommission لأن الموظفين بالعمولة وحدهم لهم عمولة. وEmail يُظهر أن العمل هو الذي يقرّر: مطلوب في تطبيق البريد، واختياري لزبائن الكتالوج. والفخّ أن تعلّم الخاصية بالطريقة نفسها في كل مكان."
      }
    },
    {
      id: "t2ax18", type: "mcq", level: "easy",
      topics: ["t2-attribute-value", "t2-attribute"],
      q: {
        en: "The lecturer's FRUIT entity has the attributes name, type, region and date picked. What is <code>Orange, citrus, west coast, 10-APR-2005</code>?",
        ar: "للكيان FRUIT عند المحاضِرة الخصائص name وtype وregion وdate picked. ما هو <code>Orange, citrus, west coast, 10-APR-2005</code>؟"
      },
      options: [
        { en: "Four more attributes of FRUIT", ar: "أربع خصائص أخرى للكيان FRUIT" },
        { en: "Four instances of FRUIT", ar: "أربع نسخ من FRUIT" },
        { en: "One instance of FRUIT, with its value for each attribute", ar: "نسخة واحدة من FRUIT، مع قيمتها لكل خاصية" }
      ],
      answer: 2,
      hint: {
        en: "An attribute is a question asked of every fruit. Are these questions, or one fruit's answers?",
        ar: "الخاصية سؤال يُطرح على كل فاكهة. فهل هذه أسئلة، أم إجابات فاكهة واحدة؟"
      },
      explain: {
        en: "It is one orange, described: Orange is its name, citrus its type, west coast its region, 10-APR-2005 its date picked. Four values do not make four instances — they are one instance's answers to four attributes. And they are not attributes: an apple would have different values for the same four questions.",
        ar: "إنها برتقالة واحدة موصوفة: Orange اسمها، وcitrus نوعها، وwest coast منطقتها، و10-APR-2005 تاريخ قطفها. أربع قيم لا تعني أربع نسخ — بل هي إجابات نسخة واحدة عن أربع خصائص. وليست خصائص: فالتفاحة سيكون لها قيم مختلفة للأسئلة الأربعة نفسها."
      }
    },
    {
      id: "t2ax19", type: "tf", level: "medium",
      topics: ["t2-volatile", "t2-birth-date-not-age", "t2-single-valued"],
      q: {
        en: "Days Since Joined has exactly one value for each member at any moment, so it is a good attribute for MEMBER.",
        ar: "للخاصية Days Since Joined قيمة واحدة بالضبط لكل عضو في أيّ لحظة، فهي خاصية جيّدة للكيان MEMBER."
      },
      truth: false,
      hint: {
        en: "Being single-valued is one test. What happens to this value tomorrow?",
        ar: "كونها أحادية القيمة اختبار واحد. ماذا يحدث لهذه القيمة غدًا؟"
      },
      explain: {
        en: "False. It is single-valued, but volatile: every stored value is wrong by tomorrow, and keeping it right means updating every member every day. Given a choice, store the non-volatile attribute — Join Date — and work the days out from it when needed, exactly as birth date replaces age.",
        ar: "خطأ. هي أحادية القيمة، لكنها متقلّبة (volatile): كل قيمة مخزّنة تصبح خاطئة غدًا، وإبقاؤها صحيحة يعني تحديث كل عضو كل يوم. إذا كان لك الخيار فخزّن الخاصية غير المتقلّبة — Join Date — واحسب الأيام منها عند الحاجة، تمامًا كما يحلّ تاريخ الميلاد محلّ العمر."
      }
    },
    {
      id: "t2ax20", type: "multi", level: "medium",
      topics: ["t2-single-valued", "t2-value-over-time"],
      q: {
        en: "Which of these field values break the rule that an attribute is single-valued? Choose every one.",
        ar: "أيّ قيم الحقول التالية تخالف قاعدة أن الخاصية أحادية القيمة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Cell Phone: <code>0599111222, 0599333444</code>", ar: "Cell Phone: <code>0599111222, 0599333444</code>" },
        { en: "Author Name: <code>Goldsmith, Oliver</code>", ar: "Author Name: <code>Goldsmith, Oliver</code>" },
        { en: "Books Borrowed: <code>A Vision, Citizen of the World</code>", ar: "Books Borrowed: <code>A Vision, Citizen of the World</code>" },
        { en: "City: <code>Rafah</code> — Sara's city, which was Gaza last year", ar: "City: <code>Rafah</code> — مدينة Sara، وكانت Gaza في العام الماضي" },
        { en: "Title: <code>Androcles and the Lion</code>", ar: "Title: <code>Androcles and the Lion</code>" }
      ],
      answer: [0, 2],
      hint: {
        en: "Count the values, not the commas — and remember the rule says \"at any point in time\".",
        ar: "عُدّ القيم لا الفواصل — وتذكّر أن القاعدة تقول «في أيّ لحظة»."
      },
      explain: {
        en: "Two phone numbers and two titles are two values squeezed into one field: each should be its own value — the borrowings are instances of BOOK TRANSACTION. \"Goldsmith, Oliver\" has a comma but is one name, and \"Androcles and the Lion\" is one title. Sara's city changed over time, but it holds one value at any moment, which is all single-valued asks.",
        ar: "رقما هاتف وعنوانا كتابين قيمتان محشورتان في حقل واحد: يجب أن تكون كلٌّ منها قيمة مستقلة — والإعارات نسخ من BOOK TRANSACTION. أمّا «Goldsmith, Oliver» ففيه فاصلة لكنه اسم واحد، و«Androcles and the Lion» عنوان واحد. ومدينة Sara تغيّرت مع الزمن، لكنها تحمل قيمة واحدة في أيّ لحظة، وهذا كل ما تطلبه أحادية القيمة."
      }
    },

    /* ==================================================== lesson 6 · unique identifiers and your first ERD */
    {
      id: "t2ax21", type: "compare", level: "medium",
      topics: ["t2-uid-defence", "t2-artificial-uid"],
      q: {
        en: "Two ways to identify the library's PUBLISHER. The library has two publishers today, Riwaq Press and Al-Manara Books. Which statement is right?",
        ar: "طريقتان لتعريف الكيان PUBLISHER في المكتبة. للمكتبة اليوم ناشران، Riwaq Press وAl-Manara Books. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "PUBLISHER\n# * Name",
      codeB: "PUBLISHER\n# * Id\n* Name",
      options: [
        { en: "A is enough: Name is mandatory, and the two names are already different", ar: "A يكفي: Name إلزامية، والاسمان مختلفان أصلًا" },
        { en: "B is better: Id is issued by the library, unique by design and never changes; a name could be shared or changed", ar: "B أفضل: Id تصدره المكتبة، فريد بالتصميم ولا يتغيّر؛ أمّا الاسم فقد يتكرّر أو يتغيّر" },
        { en: "They are equally good: each has exactly one attribute marked #", ar: "هما بالجودة نفسها: لكلٍّ منهما خاصية واحدة معلَّمة بـ #" },
        { en: "B is better, because a UID must always be a number", ar: "B أفضل، لأن المعرّف الفريد يجب أن يكون رقمًا دائمًا" }
      ],
      answer: 1,
      hint: {
        en: "Run the three defence questions: unique by design? always present? never changes?",
        ar: "طبّق أسئلة الدفاع الثلاثة: فريد بالتصميم؟ موجود دائمًا؟ لا يتغيّر أبدًا؟"
      },
      explain: {
        en: "B. Two names that differ today are unique by luck, not by design, and a publisher may rename itself, which would change its UID. An Id the library issues passes all three questions — and it is the library's own logical model. Nothing says a UID must be a number; what matters is that it is unique, present and stable.",
        ar: "B. اسمان مختلفان اليوم فريدان بالمصادفة لا بالتصميم، وقد يغيّر الناشر اسمه فيتغيّر معرّفه. أمّا Id الذي تصدره المكتبة فيجتاز الأسئلة الثلاثة — وهو ما في النموذج المنطقي للمكتبة نفسها. ولا شيء يقول إن المعرّف يجب أن يكون رقمًا؛ المهمّ أن يكون فريدًا وموجودًا وثابتًا."
      }
    },
    {
      id: "t2ax22", type: "multi", level: "easy",
      topics: ["t2-reading-erd", "t2-uid"],
      q: {
        en: "Four boxes of the H.R. ERD, written as text. Which statements does it support? Choose every one.",
        ar: "أربعة صناديق من مخطّط الموارد البشرية (ERD)، مكتوبة نصًّا. أيّ العبارات يدعمها؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "EMPLOYEE    # Employee ID   * First Name   * Last Name   * Hire Date   * Salary   o Commission\nDEPARTMENT  # Department ID   * Name\nJOB         # Job ID   * Title   * Max Salary   * Min Salary\nLOCATION    # Location ID   * Street Address   * Postal Code   * City   * State Province",
      options: [
        { en: "An EMPLOYEE is identified by Employee ID", ar: "يُعرَّف EMPLOYEE بـ Employee ID" },
        { en: "An employee may be recorded with no salary", ar: "يمكن تسجيل موظف بلا راتب" },
        { en: "An employee may be recorded with no commission", ar: "يمكن تسجيل موظف بلا عمولة" },
        { en: "A JOB is identified by its Title", ar: "يُعرَّف JOB بعنوانه Title" },
        { en: "Every DEPARTMENT must have a name", ar: "يجب أن يكون لكل DEPARTMENT اسم" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "# is the UID, * must have a value, o may be null.",
        ar: "# هو المعرّف الفريد، و* يجب أن تكون لها قيمة، وo يمكن أن تكون null."
      },
      explain: {
        en: "# Employee ID is EMPLOYEE's UID; o Commission may be null, because only employees on commission have one; * Name means every department has a name. Salary is *, so it is required. JOB's UID is the line marked #, Job ID — Title is a mandatory attribute, not the identifier. Reading a * as # is the slip to avoid.",
        ar: "# Employee ID هو معرّف EMPLOYEE؛ وo Commission يمكن أن تكون null لأن الموظفين بالعمولة وحدهم لهم عمولة؛ و* Name تعني أن لكل قسم اسمًا. أمّا Salary فمعلَّمة بـ *، فهي مطلوبة. ومعرّف JOB هو السطر المعلَّم بـ #، أي Job ID — وTitle خاصية إلزامية لا المعرّف. قراءة * على أنها # هي الزلّة التي يجب تجنّبها."
      }
    },
    {
      id: "t2ax23", type: "match", level: "medium",
      topics: ["t2-scenario-to-erd", "t2-recursive-relationship", "t2-relationship", "t2-hr-scenario"],
      q: {
        en: "Match each sentence of the H.R. manager's scenario to where it lives in the ERD.",
        ar: "صِل كل جملة من سيناريو مدير الموارد البشرية بمكانها في المخطّط (ERD)."
      },
      leftHead: { en: "The scenario says", ar: "يقول السيناريو" },
      rightHead: { en: "In the ERD", ar: "في المخطّط" },
      pairs: [
        { l: { en: "\"Each employee is assigned a unique employee number.\"", ar: "«Each employee is assigned a unique employee number.»" },
          r: { en: "<code># Employee ID</code> in EMPLOYEE", ar: "<code># Employee ID</code> في EMPLOYEE" } },
        { l: { en: "\"For each employee on commission, we also need to track his/her potential commission.\"", ar: "«For each employee on commission, we also need to track his/her potential commission.»" },
          r: { en: "<code>o Commission</code> in EMPLOYEE", ar: "<code>o Commission</code> في EMPLOYEE" } },
        { l: { en: "\"We need to know each employee's manager.\"", ar: "«We need to know each employee's manager.»" },
          r: { en: "The line <code>manager of / managed by</code> from EMPLOYEE back to EMPLOYEE", ar: "الخطّ <code>manager of / managed by</code> من EMPLOYEE إلى EMPLOYEE نفسه" } },
        { l: { en: "\"We need to know the department responsible for each employee.\"", ar: "«We need to know the department responsible for each employee.»" },
          r: { en: "The line <code>works in / responsible for</code> between EMPLOYEE and DEPARTMENT", ar: "الخطّ <code>works in / responsible for</code> بين EMPLOYEE وDEPARTMENT" } }
      ],
      hint: {
        en: "\"Unique number\" becomes #; \"for each employee on commission\" means not every employee; a link between things becomes a line.",
        ar: "«رقم فريد» يصبح #؛ و«لكل موظف بالعمولة» تعني ليس كل موظف؛ والصلة بين الأشياء تصبح خطًّا."
      },
      explain: {
        en: "A unique number the business issues is the UID, marked #. A fact only some employees have is an optional attribute, o. The manager is already an EMPLOYEE, so the manager is a recursive relationship, not a Manager Name attribute. And the department is its own entity, linked by a relationship named at both ends.",
        ar: "الرقم الفريد الذي يصدره العمل هو المعرّف الفريد، ويُعلَّم بـ #. والحقيقة التي لبعض الموظفين فقط خاصية اختيارية، o. والمدير موظف موجود أصلًا في EMPLOYEE، فهو علاقة ذاتية (recursive relationship) لا خاصية Manager Name. والقسم كيان مستقلّ، يرتبط بعلاقة مسمّاة من طرفيها."
      }
    },
    {
      id: "t2ax24", type: "order", level: "easy",
      topics: ["t2-reading-erd"],
      q: {
        en: "Read the H.R. ERD the way the lesson does, in three passes. Put the passes in order.",
        ar: "اقرأ مخطّط الموارد البشرية (ERD) كما يقرؤه الدرس، في ثلاث مرّات. رتّب المرّات."
      },
      items: [
        { en: "Boxes: find the entities, each a singular noun", ar: "الصناديق: جد الكيانات، كلٌّ منها اسم مفرد" },
        { en: "Marks: in each box, # is the UID, * must have a value, o may be null", ar: "العلامات: في كل صندوق، # هو المعرّف الفريد، و* يجب أن تكون لها قيمة، وo يمكن أن تكون null" },
        { en: "Lines: read each relationship name from the entity it sits beside", ar: "الخطوط: اقرأ اسم كل علاقة من الكيان الذي يجاوره" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Marks live inside boxes, and lines join boxes. What must you have found first?",
        ar: "العلامات تعيش داخل الصناديق، والخطوط تصل بين الصناديق. فما الذي يجب أن تجده أوّلًا؟"
      },
      explain: {
        en: "Boxes, then marks, then lines. The marks describe the attributes inside each entity, so you need the entities first; a line names how two entities relate, so it makes sense once you know both and what they hold. Read each line from the entity beside its name: an employee works in a department; a department is responsible for employees.",
        ar: "الصناديق، ثم العلامات، ثم الخطوط. العلامات تصف الخصائص داخل كل كيان، فتحتاج إلى الكيانات أوّلًا؛ والخطّ يسمّي كيف يرتبط كيانان، فيتّضح معناه بعد أن تعرف الاثنين وما يحملانه. اقرأ كل خطّ من الكيان المجاور لاسمه: موظف works in قسمًا؛ وقسم responsible for موظفين."
      }
    }
  ]
};
