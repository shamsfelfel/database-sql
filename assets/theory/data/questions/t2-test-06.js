/* Question bank: T2 lesson 6 test -- Unique Identifiers and Your First ERD. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-06"] = {
  title: { en: "Test 6 — Unique Identifiers and Your First ERD", ar: "اختبار 6 — المعرّفات الفريدة وأول مخطط ERD لك" },
  intro: {
    en: "24 questions on lesson 6: what a unique identifier does and how it becomes the primary key; single-attribute and composite UIDs; why people need an artificial UID; defending a UID against other unique attributes; the four goals of ER modelling; and reading the H.R. ERD, its recursive relationship included. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس السادس: ما يفعله المعرّف الفريد (unique identifier) وكيف يصبح المفتاح الأساسي؛ والمعرّف ذو الخاصية الواحدة والمعرّف المركّب (composite)؛ ولماذا يحتاج الأشخاص إلى معرّف اصطناعي (artificial)؛ والدفاع عن المعرّف أمام الخصائص الفريدة الأخرى؛ والأهداف الأربعة لنمذجة الكيانات والعلاقات؛ وقراءة مخطط ERD للموارد البشرية بما فيه العلاقة الذاتية (recursive relationship). خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · which one? */
    {
      id: "t2l6q01", type: "tf", level: "easy",
      topics: ["t2-uid", "t2-uid-pick-one"],
      q: {
        en: "Every attribute of MEMBER describes a member, so every attribute can also be used to pick out exactly one member.",
        ar: "كل خاصية من خصائص MEMBER تصف العضو، فكل خاصية تصلح أيضًا لاختيار عضو واحد بعينه."
      },
      truth: false,
      hint: {
        en: "Think of the two Omar Salehs. Which of their attributes tell them apart?",
        ar: "تذكّر العضوين Omar Saleh. أيّ خصائصهما تميّز أحدهما من الآخر؟"
      },
      explain: {
        en: "False. Attributes describe an instance; they do not always pick it out. Both Omar Salehs share first name, last name and city, so a search on any of them returns two members. Only the unique identifier, Id, distinguishes one instance from every other.",
        ar: "خطأ. الخصائص تصف النسخة، لكنها لا تعيّنها دائمًا. فالعضوان Omar Saleh يشتركان في الاسم الأول واسم العائلة والمدينة، فيُرجع البحث بأيّ منها عضوين. وحده المعرّف الفريد، Id، يميّز نسخة واحدة من كل النسخ الأخرى."
      }
    },
    {
      id: "t2l6q02", type: "output", level: "easy",
      topics: ["t2-uid-pick-one", "t2-uid-as-primary-key"],
      q: {
        en: "members holds Sara Hamdan (1, Gaza), Omar Saleh (2, Khan Younis), Lina Khalil (3, Gaza) and Omar Saleh (4, Khan Younis); id is the primary key. What do the two queries return?",
        ar: "يحوي الجدول members كلًّا من Sara Hamdan (1، Gaza) وOmar Saleh (2، Khan Younis) وLina Khalil (3، Gaza) وOmar Saleh (4، Khan Younis)؛ والعمود id هو المفتاح الأساسي. ماذا يُرجع الاستعلامان؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS by_name\nFROM members\nWHERE first_name = 'Omar' AND last_name = 'Saleh' AND city = 'Khan Younis';\n\nSELECT COUNT(*) AS by_id\nFROM members\nWHERE id = 4;",
      blanks: [
        { accept: ["2"], label: { en: "by_name", ar: "by_name" } },
        { accept: ["1"], label: { en: "by_id", ar: "by_id" } }
      ],
      hint: {
        en: "Adding more conditions narrows a search only if the rows differ in them. Can two rows share the primary key?",
        ar: "إضافة شروط تضيّق البحث فقط إذا اختلفت الصفوف فيها. هل يمكن أن يشترك صفّان في المفتاح الأساسي؟"
      },
      explain: {
        en: "2 and 1. All three conditions match both Omars, because they differ in nothing but id. A search by the UID can never return two instances: the UID became the primary key, and the database refuses a second row with id 4. That is the whole point of a UID.",
        ar: "2 ثم 1. الشروط الثلاثة تنطبق على العضوين Omar كليهما، لأنهما لا يختلفان إلا في id. والبحث بالمعرّف الفريد لا يمكن أن يُرجع نسختين: فقد صار المعرّف الفريد مفتاحًا أساسيًّا، وترفض قاعدة البيانات صفًّا ثانيًا فيه id يساوي 4. وهذا هو الغرض كلّه من المعرّف الفريد."
      },
      solution: { out: "by_name\n2\n\nby_id\n1" }
    },
    {
      id: "t2l6q03", type: "complete", level: "easy",
      topics: ["t2-uid", "t2-hr-scenario", "t2-artificial-uid"],
      q: {
        en: "The H.R. scenario says: \"Each employee is assigned a unique employee number.\" Complete the first line of EMPLOYEE.",
        ar: "يقول سيناريو الموارد البشرية: «Each employee is assigned a unique employee number». أكمل السطر الأول من EMPLOYEE."
      },
      lang: "text",
      code: "EMPLOYEE\n  ________\n  * First Name   * Last Name   * Hire Date   * Salary   o Commission",
      options: [
        { code: "* Employee ID" },
        { code: "U * Employee ID" },
        { code: "# * Employee ID" },
        { code: "# o Employee ID" }
      ],
      answer: 2,
      hint: {
        en: "Which mark says \"this is the identifier\", and does every employee have a number?",
        ar: "أيّ علامة تقول «هذا هو المعرّف»؟ وهل لكل موظّف رقم؟"
      },
      explain: {
        en: "# * Employee ID. The # makes it the UID and the * says every employee has one: a UID is always drawn # *. U marks a unique attribute that is not the identifier, so it is the tempting near-miss. # o would allow an employee nobody can identify.",
        ar: "# * Employee ID. العلامة # تجعلها المعرّف الفريد، والعلامة * تقول إن لكل موظّف رقمًا: فالمعرّف الفريد يُرسم دائمًا # *. أمّا U فتعلّم خاصية فريدة ليست هي المعرّف، ولذلك تغري لأنها قريبة من الصواب. والصيغة # o تسمح بموظّف لا يمكن تعيينه."
      },
      solution: {
        code: "EMPLOYEE\n  # * Employee ID\n  * First Name   * Last Name   * Hire Date   * Salary   o Commission",
        en: "\"Unique employee number\" becomes #; every employee has one, so it is also *.",
        ar: "«Unique employee number» تصبح #؛ ولكل موظّف رقم، فهي * أيضًا."
      }
    },

    /* ---------------------------------------------------- 2 · one attribute, or a combination */
    {
      id: "t2l6q04", type: "contrast", level: "medium",
      topics: ["t2-single-attribute-uid", "t2-composite-uid"],
      q: {
        en: "Sort each UID: single-attribute or composite?",
        ar: "صنّف كل معرّف فريد: ذو خاصية واحدة أم مركّب؟"
      },
      concepts: [
        { en: "Single-attribute UID", ar: "معرّف ذو خاصية واحدة" },
        { en: "Composite UID", ar: "معرّف مركّب" }
      ],
      rows: [
        { s: { en: "MEMBER: # * Id", ar: "MEMBER: # * Id" }, a: 0 },
        { s: { en: "BOOK TRANSACTION: # * Tran Date, plus the book", ar: "BOOK TRANSACTION: # * Tran Date، ومعها الكتاب" }, a: 1 },
        { s: { en: "DEPARTMENT: # * Department ID", ar: "DEPARTMENT: # * Department ID" }, a: 0 },
        { s: { en: "STUDENT: # * First Name, # * Last Name, # * Birth Date", ar: "STUDENT: # * First Name و# * Last Name و# * Birth Date" }, a: 1 },
        { s: { en: "A student's issued student number", ar: "رقم الطالب الذي تصدره المدرسة" }, a: 0 },
        { s: { en: "MEMBER: # * First Name, # * Last Name, # * City", ar: "MEMBER: # * First Name و# * Last Name و# * City" }, a: 1 }
      ],
      hint: {
        en: "Count the # marks. Whether the UID is a good one is a different question.",
        ar: "عُدّ علامات #. أمّا هل المعرّف جيّد أم لا فسؤال آخر."
      },
      explain: {
        en: "One # is a single-attribute UID; several # marks are one composite UID. STUDENT's three natural attributes and MEMBER's name-plus-city are composite even though both fail as UIDs: being a bad UID does not change its kind. BOOK TRANSACTION's date joins with the book to make a composite UID.",
        ar: "علامة # واحدة تعني معرّفًا ذا خاصية واحدة؛ وعدّة علامات # تعني معرّفًا مركّبًا واحدًا. فالخصائص الطبيعية الثلاث للكيان STUDENT، والاسم مع المدينة للكيان MEMBER، معرّفان مركّبان مع أنّ كليهما يفشل: فرداءة المعرّف لا تغيّر نوعه. ويتّحد تاريخ BOOK TRANSACTION مع الكتاب ليكوّنا معرّفًا مركّبًا."
      }
    },
    {
      id: "t2l6q05", type: "trace", level: "medium",
      topics: ["t2-composite-uid", "t2-uid-as-primary-key"],
      q: {
        en: "book_transactions has the primary key (tran_date, books_id) and holds three rows: 1 March BK001, 5 March BK002 and 5 March BK003. Four INSERTs are tried one after another. Which one is refused?",
        ar: "للجدول book_transactions المفتاح الأساسي (tran_date, books_id)، وفيه ثلاثة صفوف: 1 March BK001، و5 March BK002، و5 March BK003. جُرّبت أربع جمل INSERT واحدة بعد الأخرى. أيّها تُرفض؟"
      },
      lang: "sql",
      code: "INSERT INTO book_transactions VALUES ('2026-03-01', 'borrow', 3, 'BK002');\nINSERT INTO book_transactions VALUES ('2026-03-06', 'return', 2, 'BK002');\nINSERT INTO book_transactions VALUES ('2026-03-05', 'return', 1, 'BK003');\nINSERT INTO book_transactions VALUES ('2026-03-05', 'borrow', 3, 'BK001');",
      options: [
        { en: "The one for BK002 on 1 March — 1 March is already used", ar: "جملة BK002 في 1 March — فتاريخ 1 March مستعمل من قبل" },
        { en: "The one for BK002 on 6 March — BK002 is already in the table", ar: "جملة BK002 في 6 March — فالكتاب BK002 موجود في الجدول من قبل" },
        { en: "The one for BK003 on 5 March — that date and that book are already together", ar: "جملة BK003 في 5 March — فهذا التاريخ وهذا الكتاب موجودان معًا من قبل" },
        { en: "The one for BK001 on 5 March — two transactions on 5 March already exist", ar: "جملة BK001 في 5 March — ففي 5 March معاملتان من قبل" }
      ],
      answer: 2,
      hint: {
        en: "Neither column is unique alone. Look for a row whose pair of values is already there.",
        ar: "لا عمود منهما فريد وحده. ابحث عن صفّ زوج قيمه موجود من قبل."
      },
      explain: {
        en: "Only 5 March with BK003 is refused (\"already exists in primary key index\"): that exact pair is in the table. The other three repeat a date or a book, but never both. Reading the two # marks as two separate keys is the tempting mistake; together they make one composite UID, and one business rule: one transaction per book per day.",
        ar: "تُرفض فقط جملة 5 March مع BK003 («already exists in primary key index»): فهذا الزوج بعينه موجود في الجدول. والجمل الثلاث الأخرى تكرّر تاريخًا أو كتابًا، لكن لا تكرّرهما معًا. والخطأ المغري أن تُقرأ علامتا # مفتاحين منفصلين؛ بل هما معًا معرّف مركّب واحد، وقاعدة عمل واحدة: معاملة واحدة لكل كتاب في كل يوم."
      },
      solution: { out: "Statements 1, 2 and 4 are accepted; statement 3 fails: Cannot insert record, because it already exists in primary key index. The table ends with 6 rows." }
    },
    {
      id: "t2l6q06", type: "tf", level: "easy",
      topics: ["t2-composite-uid"],
      q: {
        en: "BOOK TRANSACTION's box shows # * Tran Date and # * Book Id. So the entity has two UIDs, and a transaction can be found by either one alone.",
        ar: "يُظهر صندوق BOOK TRANSACTION السطرين # * Tran Date و# * Book Id. إذن للكيان معرّفان فريدان، ويمكن إيجاد المعاملة بأيّ منهما وحده."
      },
      truth: false,
      hint: {
        en: "On 5 March two different books were borrowed. Does the date alone find one transaction?",
        ar: "في 5 March استُعير كتابان مختلفان. هل يجد التاريخ وحده معاملة واحدة؟"
      },
      explain: {
        en: "False. Every attribute marked # is part of the same UID. Tran Date alone matches both 5 March transactions, and Book Id alone matches every day the book was borrowed. Only the pair is unique: one composite UID.",
        ar: "خطأ. كل خاصية عليها # جزء من المعرّف الفريد نفسه. فالتاريخ وحده ينطبق على معاملتَي 5 March كلتيهما، ورقم الكتاب وحده ينطبق على كل يوم استُعير فيه الكتاب. الزوج وحده فريد: معرّف مركّب واحد."
      }
    },

    /* ---------------------------------------------------- 3 · when nothing natural works */
    {
      id: "t2l6q07", type: "compare", level: "hard",
      topics: ["t2-artificial-uid", "t2-composite-uid", "t2-uid-defence"],
      q: {
        en: "Versions 2 and 3 of the evolve block on MEMBER's UID. Version B passes on today's members. Which statement is right?",
        ar: "النسختان 2 و3 من كتلة التطوّر الخاصة بمعرّف MEMBER. النسخة B تنجح مع أعضاء اليوم. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBER\n  # * First Name   # * Last Name   # * City",
      codeB: "MEMBER\n  # * First Name   # * Last Name   # * City   # * Birth Date",
      options: [
        { en: "B is right: it is unique for every member, so the model is finished", ar: "B صحيحة: فهي فريدة لكل عضو، فالنموذج مكتمل" },
        { en: "B fixes A's collision, but only by luck: another Omar Saleh with the same birthday could enrol, and Sara's UID changes if she moves", ar: "B تُصلح تصادم A، لكن بالحظ فقط: فقد ينتسب Omar Saleh آخر بتاريخ الميلاد نفسه، ويتغيّر معرّف Sara إن انتقلت" },
        { en: "A is better: three attributes are easier to type than four, and both are equally unique", ar: "A أفضل: فثلاث خصائص أسهل في الكتابة من أربع، وكلتاهما فريدة بالقدر نفسه" },
        { en: "Both are wrong because a UID may never contain more than one attribute", ar: "كلتاهما خطأ لأن المعرّف الفريد لا يجوز أن يضمّ أكثر من خاصية" }
      ],
      answer: 1,
      hint: {
        en: "Unique today is not the same as unique by design. And what is in the UID that can change?",
        ar: "الفرادة اليوم ليست كالفرادة بالتصميم. وما الذي في المعرّف قابل للتغيّر؟"
      },
      explain: {
        en: "B separates today's two Omars, but nothing stops a third one born the same day in the same town; and City inside a UID means the identifier changes when a member moves. A fails already, since both Omars live in Khan Younis. A composite UID is allowed, so that option is wrong too. Version 4's issued Id is unique by design and never changes.",
        ar: "تفصل B بين العضوين Omar الحاليَّين، لكن لا شيء يمنع ثالثًا وُلد في اليوم نفسه في البلدة نفسها؛ ووجود City داخل المعرّف يعني أن المعرّف يتغيّر حين ينتقل العضو. أمّا A ففاشلة من الآن، لأن العضوين يسكنان Khan Younis. والمعرّف المركّب مسموح، فذلك الخيار خطأ أيضًا. والرقم Id الذي تصدره المكتبة في النسخة 4 فريد بالتصميم ولا يتغيّر أبدًا."
      }
    },
    {
      id: "t2l6q08", type: "multi", level: "medium",
      topics: ["t2-artificial-uid", "t2-uid-defence"],
      q: {
        en: "Version 4 replaced the natural combination with # * Id. Which are real reasons Id is the better UID? Choose every one.",
        ar: "استبدلت النسخة 4 بالتركيبة الطبيعية السطرَ # * Id. أيّ هذه أسباب حقيقية لكون Id معرّفًا أفضل؟ اختر كل سبب صحيح."
      },
      options: [
        { en: "The library never issues the same number twice, so it is unique by design", ar: "لا تصدر المكتبة الرقم نفسه مرّتين، فهو فريد بالتصميم" },
        { en: "A UID must always be a number", ar: "يجب أن يكون المعرّف الفريد رقمًا دائمًا" },
        { en: "It does not change when a member moves to another city", ar: "لا يتغيّر حين ينتقل العضو إلى مدينة أخرى" },
        { en: "The natural attributes in version 3 were optional", ar: "كانت الخصائص الطبيعية في النسخة 3 اختيارية" },
        { en: "It is one short attribute instead of four", ar: "هو خاصية واحدة قصيرة بدل أربع" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Check each option against the version-4 note, and against the marks version 3 actually used.",
        ar: "قارن كل خيار بملاحظة النسخة 4، وبالعلامات التي استعملتها النسخة 3 فعلًا."
      },
      explain: {
        en: "Unique by design, stable when a member moves, and one short attribute: these are the lesson's reasons. Nothing says a UID must be a number; BOOK's BK002 is a character string. And version 3's attributes were all # *, so they were mandatory; its problem was uniqueness by luck.",
        ar: "فريد بالتصميم، وثابت حين ينتقل العضو، وخاصية واحدة قصيرة: هذه أسباب الدرس. ولا شيء يقول إن المعرّف يجب أن يكون رقمًا؛ فالمعرّف BK002 للكتاب سلسلة محارف. وكانت خصائص النسخة 3 كلها # *، أي إلزامية؛ بل كانت مشكلتها أنها فريدة بالحظ."
      }
    },
    {
      id: "t2l6q09", type: "mcq", level: "medium",
      topics: ["t2-student-number", "t2-artificial-uid"],
      q: {
        en: "A classmate says: \"In our class no two students share a name and a birth date, so First Name + Last Name + Birth Date is a fine UID for STUDENT.\" What is the flaw?",
        ar: "يقول زميل: «لا يشترك طالبان في صفّنا في الاسم وتاريخ الميلاد، إذن First Name + Last Name + Birth Date معرّف فريد مناسب للكيان STUDENT». ما الخلل؟"
      },
      options: [
        { en: "A UID may contain only one attribute", ar: "المعرّف الفريد لا يضمّ إلا خاصية واحدة" },
        { en: "Birth Date is volatile, so it can never be part of a UID", ar: "Birth Date متقلّبة، فلا يمكن أن تكون جزءًا من معرّف" },
        { en: "It is unique in this class by luck; it is possible for two students to share all three, so the school issues a student number", ar: "هي فريدة في هذا الصف بالحظ؛ فمن الممكن أن يشترك طالبان في الثلاث، ولذلك تصدر المدرسة رقم طالب" },
        { en: "Nothing: if the combination is unique today, it is a valid UID", ar: "لا شيء: إذا كانت التركيبة فريدة اليوم فهي معرّف صحيح" }
      ],
      answer: 2,
      hint: {
        en: "The lecturer's argument is about what is possible, not about who is in the room this year.",
        ar: "حجّة المحاضر تتعلّق بما هو ممكن، لا بمن في الصف هذه السنة."
      },
      explain: {
        en: "For almost any combination of student attributes, it is at least possible that two students share it; that is why STUDENT gets an artificial student number. A composite UID is allowed, so the size of the combination is not the flaw. Birth Date is non-volatile; lesson 5 stored it precisely because it does not change.",
        ar: "في كل تركيبة تقريبًا من خصائص الطالب، من الممكن على الأقل أن يشترك فيها طالبان؛ ولهذا يُعطى STUDENT رقم طالب اصطناعيًّا. والمعرّف المركّب مسموح، فحجم التركيبة ليس هو الخلل. وBirth Date غير متقلّبة؛ وقد خزّنها الدرس 5 بالضبط لأنها لا تتغيّر."
      }
    },

    /* ---------------------------------------------------- 4 · defending a UID */
    {
      id: "t2l6q10", type: "match", level: "medium",
      topics: ["t2-uid-defence", "t2-composite-uid", "t2-artificial-uid"],
      q: {
        en: "Each candidate UID from the lesson fails. Match it to the reason it fails.",
        ar: "كل مرشّح من مرشّحي المعرّف الفريد في الدرس يفشل. صِل كل مرشّح بسبب فشله."
      },
      leftHead: { en: "Candidate UID", ar: "المعرّف المرشّح" },
      rightHead: { en: "Why it fails", ar: "سبب الفشل" },
      pairs: [
        { l: { en: "BOOK TRANSACTION: Tran Date alone", ar: "BOOK TRANSACTION: Tran Date وحدها" }, r: { en: "Two books were borrowed on 5 March", ar: "استُعير كتابان في 5 March" } },
        { l: { en: "MEMBER: First Name + Last Name + City", ar: "MEMBER: First Name + Last Name + City" }, r: { en: "Both Omar Salehs live in Khan Younis", ar: "العضوان Omar Saleh يسكنان Khan Younis" } },
        { l: { en: "MEMBER: Cell Phone", ar: "MEMBER: Cell Phone" }, r: { en: "It is optional; Lina has none", ar: "هي اختيارية؛ وLina لا هاتف لها" } },
        { l: { en: "BOOK: Title", ar: "BOOK: Title" }, r: { en: "A misspelt value gets corrected", ar: "تُصحَّح القيمة إذا كُتبت خطأً" } },
        { l: { en: "AUTHOR: Name", ar: "AUTHOR: Name" }, r: { en: "Two authors can share one", ar: "قد يشترك مؤلّفان فيه" } }
      ],
      hint: {
        en: "Run each candidate through the three questions: unique by design? always present? never changes?",
        ar: "مرّر كل مرشّح على الأسئلة الثلاثة: فريد بالتصميم؟ موجود دائمًا؟ لا يتغيّر أبدًا؟"
      },
      explain: {
        en: "Tran Date and name-plus-city fail uniqueness on real rows; AUTHOR's Name fails it in principle, like the two Omars. Cell Phone fails \"always present\": it is o. Title is unique by the library's rule, so it is the tempting one, but it fails \"never changes\". A UID must pass all three questions.",
        ar: "Tran Date والاسم مع المدينة يفشلان في الفرادة على صفوف حقيقية؛ واسم المؤلّف يفشل فيها مبدئيًّا، كالعضوين Omar. وCell Phone تفشل في «موجود دائمًا»: فهي o. أمّا Title ففريدة بقاعدة المكتبة، ولذلك هي المغرية، لكنها تفشل في «لا يتغيّر أبدًا». يجب أن يجتاز المعرّف الفريد الأسئلة الثلاثة كلها."
      }
    },
    {
      id: "t2l6q11", type: "fill", level: "easy",
      topics: ["t2-uid-defence", "t2-uid"],
      q: {
        en: "Fill the three blanks with single words: the three questions that defend a UID.",
        ar: "املأ الفراغات الثلاثة بكلمات مفردة (بالإنجليزية): الأسئلة الثلاثة التي يُدافَع بها عن المعرّف الفريد."
      },
      lang: "text",
      code: "1. Is it unique for every instance, by ____1____, not by luck?\n2. Does every instance have a ____2____?   (the UID is drawn # *)\n3. Will the value never ____3____?",
      blanks: [
        { accept: ["design"], label: { en: "1", ar: "1" } },
        { accept: ["value"], label: { en: "2", ar: "2" } },
        { accept: ["change", "changes"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "Section 4's table had three rows: unique, always has a value, never changes.",
        ar: "كان لجدول القسم 4 ثلاثة صفوف: فريد، وله قيمة دائمًا، ولا يتغيّر أبدًا."
      },
      explain: {
        en: "1 = design, 2 = value, 3 = change. Unique by design rules out names; always having a value rules out optional attributes such as Cell Phone; never changing rules out volatile ones such as a title that may be corrected. Lesson 5 said to prefer the non-volatile attribute; a UID needs that most of all.",
        ar: "1 = design، و2 = value، و3 = change. الفرادة بالتصميم تستبعد الأسماء؛ ووجود قيمة دائمًا يستبعد الخصائص الاختيارية مثل Cell Phone؛ وعدم التغيّر يستبعد المتقلّبة مثل عنوان قد يُصحَّح. قال الدرس 5 أن نفضّل الخاصية غير المتقلّبة؛ والمعرّف الفريد أحوج إلى ذلك من غيره."
      }
    },
    {
      id: "t2l6q12", type: "mcq", level: "medium",
      topics: ["t2-uid-vs-unique", "t2-uid-defence"],
      q: {
        en: "BOOK has # * Id and U * Title. Both refuse duplicates. Why is Id, and not Title, the UID?",
        ar: "للكيان BOOK السطران # * Id وU * Title. كلاهما يرفض التكرار. لماذا Id هو المعرّف الفريد، لا Title؟"
      },
      options: [
        { en: "Title is optional, so some books would have no UID", ar: "Title اختيارية، فبعض الكتب سيبقى بلا معرّف" },
        { en: "A UID must be numeric, and Title is text", ar: "يجب أن يكون المعرّف رقميًّا، وTitle نصّ" },
        { en: "Title is not really unique; U only means \"usually unique\"", ar: "Title ليست فريدة حقًّا؛ فالعلامة U تعني «فريدة غالبًا» فقط" },
        { en: "A title may be corrected, and every transaction points at the UID; Id never needs to change", ar: "قد يُصحَّح العنوان، وكل معاملة تشير إلى المعرّف؛ أمّا Id فلا داعي لتغييره أبدًا" }
      ],
      answer: 3,
      hint: {
        en: "Both pass the first two defence questions. Which one fails the third, and who would feel it?",
        ar: "كلاهما يجتاز أوّل سؤالين من أسئلة الدفاع. أيّهما يفشل في الثالث، ومن سيتأثّر بذلك؟"
      },
      explain: {
        en: "Title is unique (U) and mandatory (*), but a misspelt title gets corrected. Other tables store the UID: every row of book_transactions holds books_id, so a UID that changes drags every transaction with it. Id is a character string (BK002), so \"must be numeric\" is false. Title keeps its U and becomes a UNIQUE key.",
        ar: "Title فريدة (U) وإلزامية (*)، لكن العنوان المكتوب خطأً يُصحَّح. والجداول الأخرى تخزّن المعرّف: فكل صفّ في book_transactions يحمل books_id، فالمعرّف الذي يتغيّر يجرّ معه كل معاملة. وId سلسلة محارف (BK002)، فعبارة «يجب أن يكون رقميًّا» خطأ. وتحتفظ Title بعلامة U وتصبح مفتاحًا فريدًا (UNIQUE)."
      }
    },
    {
      id: "t2l6q13", type: "tf", level: "easy",
      topics: ["t2-uid-vs-unique", "t2-uid-as-primary-key"],
      q: {
        en: "When BOOK becomes a table, Id becomes the PRIMARY KEY and Title, still unique, becomes a UNIQUE key.",
        ar: "حين يصبح BOOK جدولًا، يصبح Id المفتاح الأساسي (PRIMARY KEY)، وتصبح Title، وهي ما زالت فريدة، مفتاحًا فريدًا (UNIQUE)."
      },
      truth: true,
      hint: {
        en: "Losing the UID contest does not make Title stop being unique.",
        ar: "خسارة Title أمام Id في اختيار المعرّف لا تجعلها تكفّ عن أن تكون فريدة."
      },
      explain: {
        en: "True. The UID becomes the primary key; any other unique attribute keeps its U and becomes a UNIQUE key, lesson 2's UK. Both refuse duplicates: adding BK005 'War and Peace' is refused with \"already exists in unique index\". The difference is that other tables point at the primary key.",
        ar: "صحيح. يصبح المعرّف الفريد المفتاح الأساسي؛ وكل خاصية فريدة أخرى تحتفظ بعلامة U وتصبح مفتاحًا فريدًا، أي UK في الدرس 2. وكلاهما يرفض التكرار: فإضافة BK005 'War and Peace' تُرفض برسالة «already exists in unique index». والفرق أن الجداول الأخرى تشير إلى المفتاح الأساسي."
      }
    },

    /* ---------------------------------------------------- 5 · the four goals */
    {
      id: "t2l6q14", type: "match", level: "easy",
      topics: ["t2-er-goals", "t2-goal-capture-once", "t2-derivable-data", "t2-predictable-place"],
      q: {
        en: "Each H.R. fragment breaks one goal of ER modelling. Match them.",
        ar: "كل جزء من نموذج الموارد البشرية يخالف هدفًا واحدًا من أهداف نمذجة الكيانات والعلاقات. صِل بينها."
      },
      leftHead: { en: "Fragment", ar: "الجزء" },
      rightHead: { en: "Goal broken", ar: "الهدف المخالَف" },
      pairs: [
        { l: { en: "EMPLOYEE has no Commission, though the scenario asks for it", ar: "لا Commission في EMPLOYEE، مع أن السيناريو يطلبها" }, r: { en: "1 — capture all required data", ar: "1 — التقاط كل البيانات المطلوبة" } },
        { l: { en: "Department Name sits in both EMPLOYEE and DEPARTMENT", ar: "Department Name موجودة في EMPLOYEE وفي DEPARTMENT معًا" }, r: { en: "2 — data appears only once", ar: "2 — تظهر البيانات مرّة واحدة فقط" } },
        { l: { en: "DEPARTMENT stores Employee Count", ar: "يخزّن DEPARTMENT الخاصية Employee Count" }, r: { en: "3 — no derivable data", ar: "3 — لا بيانات قابلة للاشتقاق" } },
        { l: { en: "JOB stores the location of the department", ar: "يخزّن JOB موقع القسم" }, r: { en: "4 — a predictable, logical place", ar: "4 — مكان منطقي يمكن توقّعه" } }
      ],
      hint: {
        en: "Missing, twice, could be worked out, in the wrong box: one each.",
        ar: "ناقص، مكرّر، يمكن حسابه، في الصندوق الخطأ: واحد لكل هدف."
      },
      explain: {
        en: "A required fact with no home breaks goal 1. A fact stored twice breaks goal 2 and will one day disagree with itself. A count of rows can be derived, so storing it breaks goal 3. A location describes a department, so nobody would look for it under JOB: goal 4.",
        ar: "الحقيقة المطلوبة التي لا مكان لها تخالف الهدف 1. والحقيقة المخزّنة مرّتين تخالف الهدف 2 وستناقض نفسها يومًا ما. وعدد الصفوف يمكن اشتقاقه، فتخزينه يخالف الهدف 3. والموقع يصف القسم، فلن يبحث عنه أحد تحت JOB: الهدف 4."
      }
    },
    {
      id: "t2l6q15", type: "compare", level: "medium",
      topics: ["t2-goal-capture-once", "t2-derivable-data", "t2-er-goals"],
      q: {
        en: "Versions 1 and 2 of the H.R. evolve block in section 5. Which statement is right?",
        ar: "النسختان 1 و2 من كتلة التطوّر الخاصة بالموارد البشرية في القسم 5. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "EMPLOYEE\n  # * Employee ID   * First Name   * Last Name   * Hire Date   * Salary",
      codeB: "EMPLOYEE\n  # * Employee ID   * First Name   * Last Name   * Hire Date   * Salary\n  o Commission      * Years of Service           * Department Name\nDEPARTMENT\n  # * Department ID   * Name   * Employee Count",
      options: [
        { en: "A is correct: it is clean, and nothing in it is repeated or derivable", ar: "A صحيحة: فهي نظيفة، ولا شيء فيها مكرّر أو قابل للاشتقاق" },
        { en: "B is correct: it captures everything the scenario asks for, so all four goals are met", ar: "B صحيحة: فهي تلتقط كل ما يطلبه السيناريو، فتتحقّق الأهداف الأربعة" },
        { en: "Neither: A breaks goal 1 (no Commission); B fixes that but breaks goal 2 (Department Name twice) and goal 3 (Years of Service, Employee Count)", ar: "ولا واحدة: A تخالف الهدف 1 (لا Commission)؛ وB تُصلح ذلك لكنها تخالف الهدف 2 (Department Name مرّتين) والهدف 3 (Years of Service وEmployee Count)" },
        { en: "Neither: both break goal 4, because Salary belongs in DEPARTMENT", ar: "ولا واحدة: كلتاهما تخالف الهدف 4، لأن Salary مكانها DEPARTMENT" }
      ],
      answer: 2,
      hint: {
        en: "Check A against the scenario's sentence about commission. Then look for anything in B stored twice or computable.",
        ar: "قارن A بجملة السيناريو عن العمولة. ثم ابحث في B عن شيء مخزّن مرّتين أو يمكن حسابه."
      },
      explain: {
        en: "A is clean and incomplete: \"for each employee on commission\" has nowhere to go. B adds Commission, then stores the department's name in two entities and two values that can be worked out from Hire Date and from counting employees. Capturing everything is only goal 1; version 3 meets all four by removing the extras.",
        ar: "A نظيفة وناقصة: فجملة «for each employee on commission» لا مكان لها. وB تضيف Commission، ثم تخزّن اسم القسم في كيانين، وقيمتين يمكن حسابهما من Hire Date ومن عدّ الموظّفين. التقاط كل شيء هو الهدف 1 فقط؛ والنسخة 3 تحقّق الأربعة بحذف الزوائد."
      }
    },
    {
      id: "t2l6q16", type: "output", level: "hard",
      topics: ["t2-derivable-data", "t2-goal-capture-once"],
      q: {
        en: "Version 2 was built: departments stores employee_count (Sales, department 15, holds 1, typed when Tyler Adams was its only employee). Tyler now transfers to Development. What does the SELECT return?",
        ar: "بُنيت النسخة 2: يخزّن الجدول departments العمود employee_count (للقسم Sales، رقم 15، القيمة 1، كُتبت حين كان Tyler Adams موظّفه الوحيد). والآن ينتقل Tyler إلى Development. ماذا يُرجع SELECT؟"
      },
      lang: "sql",
      code: "UPDATE employees SET department_id = 22 WHERE employee_id = 310;\n\nSELECT employee_count AS stored,\n       (SELECT COUNT(*) FROM employees WHERE department_id = 15) AS counted\nFROM departments\nWHERE department_id = 15;",
      blanks: [
        { accept: ["1"], label: { en: "stored", ar: "stored" } },
        { accept: ["0"], label: { en: "counted", ar: "counted" } }
      ],
      hint: {
        en: "The UPDATE touched one table. Which one did it not touch?",
        ar: "عدّلت جملة UPDATE جدولًا واحدًا. أيّ جدول لم تلمسه؟"
      },
      explain: {
        en: "stored = 1, counted = 0. The transfer changed employees, and nobody was told that a second table also had to change, so the stored count still says 1. The derived count cannot be wrong, because it is worked out from the rows themselves. Goal 3 removes the column and the mistake with it.",
        ar: "stored = 1 وcounted = 0. غيّر النقلُ الجدولَ employees، ولم يُخبَر أحد أن جدولًا ثانيًا يجب أن يتغيّر أيضًا، فما زال العدد المخزّن يقول 1. أمّا العدد المشتقّ فلا يمكن أن يخطئ، لأنه يُحسب من الصفوف نفسها. والهدف 3 يحذف العمود ويحذف الخطأ معه."
      },
      solution: { out: "stored | counted\n1      | 0" }
    },
    {
      id: "t2l6q17", type: "multi", level: "medium",
      topics: ["t2-derivable-data"],
      q: {
        en: "Which of these should NOT be stored, because they can be derived from data already in the model? Choose every one.",
        ar: "أيّ هذه يجب ألّا يُخزَّن، لأنه يمكن اشتقاقه من بيانات موجودة في النموذج؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "EMPLOYEE's Hire Date", ar: "Hire Date للكيان EMPLOYEE" },
        { en: "EMPLOYEE's Years of Service", ar: "Years of Service للكيان EMPLOYEE" },
        { en: "EMPLOYEE's Commission", ar: "Commission للكيان EMPLOYEE" },
        { en: "MEMBER's Books On Loan Count", ar: "Books On Loan Count للكيان MEMBER" },
        { en: "DEPARTMENT's Employee Count", ar: "Employee Count للكيان DEPARTMENT" },
        { en: "MEMBER's Birth Date", ar: "Birth Date للكيان MEMBER" }
      ],
      answer: [1, 3, 4],
      hint: {
        en: "For each one ask: is there another stored fact, or a set of rows, it can be worked out from?",
        ar: "اسأل عن كل واحد: هل توجد حقيقة مخزّنة أخرى، أو مجموعة صفوف، يمكن حسابه منها؟"
      },
      explain: {
        en: "Years of Service comes from Hire Date; Books On Loan Count from counting BOOK TRANSACTIONs; Employee Count from counting employees. Hire Date and Birth Date are the stored sources the derivations need, so removing them would lose data. Commission is optional, not derivable: it cannot be calculated from salary.",
        ar: "Years of Service تأتي من Hire Date؛ وBooks On Loan Count من عدّ BOOK TRANSACTION؛ وEmployee Count من عدّ الموظّفين. أمّا Hire Date وBirth Date فهما المصدران المخزّنان اللذان يحتاجهما الحساب، فحذفهما يُضيّع بيانات. وCommission اختيارية لا مشتقّة: فلا يمكن حسابها من الراتب."
      }
    },
    {
      id: "t2l6q18", type: "mcq", level: "hard",
      topics: ["t2-predictable-place", "t2-goal-capture-once", "t2-reading-erd"],
      q: {
        en: "The H.R. ERD has * Max Salary and * Min Salary. Where do they belong?",
        ar: "في مخطط ERD للموارد البشرية الخاصيتان * Max Salary و* Min Salary. أين مكانهما؟"
      },
      options: [
        { en: "In EMPLOYEE, next to Salary, so the limits are close to the value they limit", ar: "في EMPLOYEE، بجانب Salary، لتكون الحدود قريبة من القيمة التي تحدّها" },
        { en: "In JOB: the salary range describes the job, and every employee in that job shares it", ar: "في JOB: فنطاق الراتب يصف الوظيفة، ويشترك فيه كل موظّف في تلك الوظيفة" },
        { en: "In DEPARTMENT, because each department sets its own pay", ar: "في DEPARTMENT، لأن كل قسم يحدّد رواتبه" },
        { en: "Nowhere: they can be derived as the highest and lowest salaries currently paid", ar: "في لا مكان: فيمكن اشتقاقهما بوصفهما أعلى راتب وأدنى راتب مدفوعين حاليًّا" }
      ],
      answer: 1,
      hint: {
        en: "Whose fact is it? And is a limit the same as today's highest value?",
        ar: "حقيقةُ مَن هي؟ وهل الحدّ الأعلى هو نفسه أعلى قيمة اليوم؟"
      },
      explain: {
        en: "The range is a fact about the job, so it lives once in JOB: goals 2 and 4. In EMPLOYEE it would repeat for every employee with that job. The derivation option is the subtle trap: a limit is a rule the business sets, not the highest salary someone happens to earn, so it cannot be worked out from the rows.",
        ar: "النطاق حقيقة عن الوظيفة، فمكانه مرّة واحدة في JOB: الهدفان 2 و4. ولو وُضع في EMPLOYEE لتكرّر لكل موظّف في تلك الوظيفة. وخيار الاشتقاق هو الفخّ الدقيق: فالحدّ قاعدة يضعها العمل، لا أعلى راتب يصادف أن يتقاضاه أحد، فلا يمكن حسابه من الصفوف."
      }
    },

    /* ---------------------------------------------------- 6 · the H.R. ERD */
    {
      id: "t2l6q19", type: "order", level: "medium",
      topics: ["t2-scenario-to-erd", "t2-hr-scenario"],
      q: {
        en: "Turn the H.R. scenario into boxes. Put the steps in the order the lesson takes them, each building on the one before.",
        ar: "حوّل سيناريو الموارد البشرية إلى صناديق. رتّب الخطوات كما يأخذها الدرس، كل خطوة تبني على التي قبلها."
      },
      items: [
        { en: "Find the nouns that have facts of their own: they become entities", ar: "ابحث عن الأسماء التي لها حقائق خاصة بها: فهي تصبح كيانات" },
        { en: "Put each fact into its entity as an attribute, * or o", ar: "ضع كل حقيقة في كيانها خاصيةً، * أو o" },
        { en: "Mark the \"unique number\" in each entity with #", ar: "علّم «الرقم الفريد» في كل كيان بالعلامة #" },
        { en: "Draw a line for each link between entities and name it at both ends", ar: "ارسم خطًّا لكل رابط بين الكيانات وسمِّه عند طرفيه" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "You cannot mark an attribute # before it exists, nor draw a line before there are boxes.",
        ar: "لا يمكنك أن تعلّم خاصية بالعلامة # قبل أن توجد، ولا أن ترسم خطًّا قبل أن توجد الصناديق."
      },
      explain: {
        en: "Entities first, because attributes need a box to live in; then the facts as attributes; then the UID is picked out among them; then relationships join boxes that already exist. Drawing lines first is tempting because the links are in the prose, but a line between two things you have not yet named has nothing to connect.",
        ar: "الكيانات أولًا، لأن الخصائص تحتاج إلى صندوق تعيش فيه؛ ثم الحقائق خصائصَ؛ ثم يُختار المعرّف الفريد من بينها؛ ثم تصل العلاقات بين صناديق موجودة. ورسم الخطوط أولًا مغرٍ لأن الروابط مذكورة في النص، لكن خطًّا بين شيئين لم تسمّهما بعد لا يصل شيئًا."
      }
    },
    {
      id: "t2l6q20", type: "error", level: "hard",
      topics: ["t2-er-goals", "t2-recursive-relationship", "t2-derivable-data", "t2-predictable-place"],
      q: {
        en: "A classmate's H.R. model, one item per line. Three lines break a goal of ER modelling. Choose all three.",
        ar: "نموذج زميل للموارد البشرية، بندٌ في كل سطر. ثلاثة أسطر تخالف هدفًا من أهداف نمذجة الكيانات والعلاقات. اختر الثلاثة."
      },
      lang: "text",
      code: "EMPLOYEE  # * Employee ID\n  * First Name   * Last Name\n  * Hire Date   * Salary   o Commission\n  * Years of Service\n  o Manager Name\n  * Department Location\nDEPARTMENT  # * Department ID   * Name\nEach EMPLOYEE works in a DEPARTMENT; each DEPARTMENT is responsible for EMPLOYEEs.",
      answer: [4, 5, 6],
      hint: {
        en: "For each attribute line ask: can it be worked out, is it already stored somewhere, and is this the box anyone would look in?",
        ar: "اسأل عن كل سطر خاصية: هل يمكن حسابها؟ هل هي مخزّنة في مكان آخر؟ وهل هذا هو الصندوق الذي سيبحث فيه أيّ أحد؟"
      },
      explain: {
        en: "Line 4: Years of Service is derivable from Hire Date (goal 3). Line 5: the manager is already an EMPLOYEE, so the name is stored twice (goal 2); use the recursive relationship manager of / managed by. Line 6: a location describes the department, and copied into every employee it also repeats (goals 4 and 2). Line 3's o Commission is correct: only some employees earn one.",
        ar: "السطر 4: Years of Service قابلة للاشتقاق من Hire Date (الهدف 3). السطر 5: المدير موظّف موجود في EMPLOYEE، فيُخزَّن اسمه مرّتين (الهدف 2)؛ والصواب العلاقة الذاتية manager of / managed by. السطر 6: الموقع يصف القسم، ونسخه في كل موظّف تكرار أيضًا (الهدفان 4 و2). أمّا o Commission في السطر 3 فصحيحة: فبعض الموظّفين فقط يتقاضونها."
      },
      solution: {
        en: "Lines 4, 5 and 6. Remove Years of Service; replace Manager Name with a line from EMPLOYEE to itself; move the location to DEPARTMENT (in the full ERD, to LOCATION).",
        ar: "الأسطر 4 و5 و6. احذف Years of Service؛ واستبدل بالخاصية Manager Name خطًّا من EMPLOYEE إلى نفسه؛ وانقل الموقع إلى DEPARTMENT (وفي المخطط الكامل إلى LOCATION)."
      }
    },
    {
      id: "t2l6q21", type: "compare", level: "hard",
      topics: ["t2-scenario-to-erd", "t2-recursive-relationship", "t2-relationship"],
      q: {
        en: "Versions 2 and 3 of the evolve block in section 6. What does version 3 fix that version 2 still leaves open?",
        ar: "النسختان 2 و3 من كتلة التطوّر في القسم 6. ما الذي تُصلحه النسخة 3 ممّا تتركه النسخة 2 مفتوحًا؟"
      },
      lang: "text",
      codeA: "EMPLOYEE    # * Employee ID  * First Name  * Last Name  * Job\n            * Hire Date  * Salary  o Commission  o Manager Name\nDEPARTMENT  # * Department ID  * Name  * Location\nEMPLOYEE works in / responsible for DEPARTMENT",
      codeB: "EMPLOYEE    # * Employee ID  * First Name  * Last Name\n            * Hire Date  * Salary  o Commission\nJOB         # * Job ID  * Title  * Max Salary  * Min Salary\nDEPARTMENT  # * Department ID  * Name\nLOCATION    # * Location ID  * Street Address  * City  ...\nEMPLOYEE works in / responsible for DEPARTMENT\nEMPLOYEE manager of / managed by EMPLOYEE\n(plus EMPLOYEE–JOB, DEPARTMENT–LOCATION and beyond)",
      options: [
        { en: "B stores the department once; in A each employee still carries the department's name", ar: "B تخزّن القسم مرّة واحدة؛ وفي A ما زال كل موظّف يحمل اسم القسم" },
        { en: "B makes Commission mandatory, which A had forgotten", ar: "B تجعل Commission إلزامية، وهو ما نسيته A" },
        { en: "B adds a separate MANAGER entity so managers are no longer employees", ar: "B تضيف كيانًا منفصلًا MANAGER فلا يعود المديرون موظّفين" },
        { en: "B gives Job and Location their own entities and replaces Manager Name with a line from EMPLOYEE back to EMPLOYEE", ar: "B تعطي Job وLocation كيانين خاصّين، وتستبدل بالخاصية Manager Name خطًّا من EMPLOYEE إلى EMPLOYEE نفسه" }
      ],
      answer: 3,
      hint: {
        en: "Look at the three attributes in A that each describe something else. Where did each one go in B?",
        ar: "انظر إلى الخصائص الثلاث في A التي تصف كلٌّ منها شيئًا آخر. أين ذهبت كلٌّ منها في B؟"
      },
      explain: {
        en: "A job and a location have facts of their own, so they become JOB and LOCATION; a manager is already an EMPLOYEE, so the manager becomes the recursive relationship. Storing the department once was version 2's fix, already in A. A MANAGER entity would duplicate employees, and Commission stays o in both.",
        ar: "للوظيفة وللموقع حقائق خاصة بهما، فيصبحان JOB وLOCATION؛ والمدير موظّف موجود في EMPLOYEE، فيصبح علاقة ذاتية. أمّا تخزين القسم مرّة واحدة فكان إصلاح النسخة 2، وهو موجود في A أصلًا. والكيان MANAGER سيكرّر الموظّفين، وCommission تبقى o في الاثنتين."
      }
    },
    {
      id: "t2l6q22", type: "tf", level: "easy",
      topics: ["t2-recursive-relationship", "t2-relationship"],
      q: {
        en: "A relationship can link an entity to itself. In the H.R. ERD, the line from EMPLOYEE back to EMPLOYEE records each employee's manager.",
        ar: "يمكن للعلاقة أن تربط الكيان بنفسه. في مخطط ERD للموارد البشرية، يسجّل الخط من EMPLOYEE إلى EMPLOYEE مدير كل موظّف."
      },
      truth: true,
      hint: {
        en: "Is a manager a different kind of thing from an employee?",
        ar: "هل المدير نوع مختلف من الأشياء عن الموظّف؟"
      },
      explain: {
        en: "True. That is a recursive relationship, named at both ends: manager of / managed by. It answers the scenario's \"each employee's manager and all of the employees that are managed by each manager\" without storing any name twice.",
        ar: "صحيح. هذه علاقة ذاتية (recursive relationship)، مسمّاة عند طرفيها: manager of / managed by. وهي تجيب عن جملة السيناريو «each employee's manager and all of the employees that are managed by each manager» دون أن تخزّن أيّ اسم مرّتين."
      }
    },
    {
      id: "t2l6q23", type: "trace", level: "medium",
      topics: ["t2-recursive-relationship", "t2-reading-erd", "t2-uid-as-primary-key"],
      q: {
        en: "employees: Dana Smith (100, no manager), Tyler Adams (310, manager 100), Lawrence Chen (210, manager 100), Carlos Gomez (405, manager 210), Neil Loungani (378, manager 100). What does the query return?",
        ar: "الجدول employees: Dana Smith (100، بلا مدير)، وTyler Adams (310، مديره 100)، وLawrence Chen (210، مديره 100)، وCarlos Gomez (405، مديره 210)، وNeil Loungani (378، مديره 100). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT first_name, last_name\nFROM employees\nWHERE employee_id = (SELECT manager_id\n                     FROM employees\n                     WHERE employee_id = 405);",
      options: [
        { en: "Carlos Gomez", ar: "Carlos Gomez" },
        { en: "Dana Smith", ar: "Dana Smith" },
        { en: "Lawrence Chen", ar: "Lawrence Chen" },
        { en: "No rows", ar: "لا صفوف" }
      ],
      answer: 2,
      hint: {
        en: "Work from the inside out: whose manager_id is asked for, and what is it?",
        ar: "اعمل من الداخل إلى الخارج: مدير مَن مطلوب، وما قيمة manager_id له؟"
      },
      explain: {
        en: "Lawrence Chen. The inner query reads Carlos's manager_id, 210; the outer query finds the employee whose UID is 210. Choosing Carlos stops at the inner query; choosing Dana goes one step too far up. The manager's name is never stored on Carlos's row: it is found through the UID.",
        ar: "Lawrence Chen. يقرأ الاستعلام الداخلي قيمة manager_id لدى Carlos، وهي 210؛ ثم يجد الاستعلام الخارجي الموظّف الذي معرّفه 210. ومن اختار Carlos توقّف عند الاستعلام الداخلي؛ ومن اختار Dana صعد درجة زائدة. ولا يُخزَّن اسم المدير في صفّ Carlos: بل يُعثر عليه عبر المعرّف الفريد."
      },
      solution: { out: "first_name | last_name\nLawrence   | Chen" }
    },
    {
      id: "t2l6q24", type: "write", level: "hard",
      topics: ["t2-uid-as-primary-key", "t2-recursive-relationship", "t2-reading-erd", "t2-goal-capture-once"],
      q: {
        en: "Build EMPLOYEE from the H.R. ERD: # * Employee ID, * First Name, * Last Name, * Hire Date, * Salary, o Commission, and the recursive relationship. Write one CREATE TABLE employees statement: employee_id the primary key, every * NOT NULL, commission nullable, and a manager_id column for the relationship. End it with a semicolon.",
        ar: "ابنِ EMPLOYEE من مخطط ERD للموارد البشرية: # * Employee ID و* First Name و* Last Name و* Hire Date و* Salary وo Commission، والعلاقة الذاتية. اكتب جملة CREATE TABLE employees واحدة: employee_id هو المفتاح الأساسي، وكل * تصبح NOT NULL، وcommission قابلة لـ null، وعمود manager_id للعلاقة. أنهِها بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 10,
      starter: "CREATE TABLE employees (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\([^;]*(\\bemployee_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*employee_id\\s*\\))", flags: "i",
          label: { en: "employee_id is the primary key", ar: "employee_id هو المفتاح الأساسي" } },
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\([^;]*first_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL[^;]*last_name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "first_name and last_name are NOT NULL", ar: "first_name وlast_name هما NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\([^;]*hire_date\\s+DATE\\s+NOT\\s+NULL[^;]*\\bsalary\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "hire_date is DATE NOT NULL and salary is NOT NULL", ar: "hire_date هو DATE NOT NULL وsalary هو NOT NULL" } },
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\([^;]*\\bcommission\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s*(,|\\))", flags: "i",
          label: { en: "commission is left nullable", ar: "commission تُترك قابلة لـ null" } },
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\([^;]*\\bmanager_id\\s+\\w+", flags: "i",
          label: { en: "a manager_id column records the manager", ar: "عمود manager_id يسجّل المدير" } }
      ],
      forbid: [
        { re: "\\bmanager_name\\b", flags: "i",
          label: { en: "The manager is already an employee: store manager_id, not the manager's name", ar: "المدير موظّف موجود أصلًا: خزّن manager_id، لا اسم المدير" } },
        { re: "\\bcommission\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "Commission is o: only employees on commission have one", ar: "Commission اختيارية (o): لا يتقاضاها إلا الموظّفون الذين يعملون بالعمولة" } }
      ],
      hint: {
        en: "The UID becomes the primary key, * becomes NOT NULL, o stays nullable, and the recursive line becomes a column holding another row's employee_id.",
        ar: "يصبح المعرّف الفريد المفتاح الأساسي، و* تصبح NOT NULL، وo تبقى قابلة لـ null، والخط الذاتي يصبح عمودًا يحمل employee_id لصفّ آخر."
      },
      explain: {
        en: "Each attribute becomes a column, the UID becomes the primary key, and only commission is left nullable. The recursive relationship becomes manager_id, holding another row's employee_id, so the manager's name is stored once, in the manager's own row. A manager_name column would break goal 2. Whether manager_id must be filled, and how it is checked, is chapter T3.",
        ar: "كل خاصية تصبح عمودًا، والمعرّف الفريد يصبح المفتاح الأساسي، ولا يُترك قابلًا لـ null إلا commission. وتصبح العلاقة الذاتية العمود manager_id، الذي يحمل employee_id لصفّ آخر، فيُخزَّن اسم المدير مرّة واحدة، في صفّه هو. والعمود manager_name يخالف الهدف 2. أمّا هل يجب ملء manager_id، وكيف يُتحقّق منه، فموضوع الفصل T3."
      },
      solution: {
        code: "CREATE TABLE employees (\n  employee_id   NUMBER      PRIMARY KEY,\n  first_name    VARCHAR(20) NOT NULL,\n  last_name     VARCHAR(20) NOT NULL,\n  hire_date     DATE        NOT NULL,\n  salary        NUMBER      NOT NULL,\n  commission    NUMBER,\n  manager_id    NUMBER\n);",
        en: "Run it, then insert Dana Smith (100, '2015-03-01', 9000, NULL, NULL) and Lawrence Chen (210, '2017-01-09', 6200, NULL, 100): SELECT first_name, last_name FROM employees WHERE manager_id = 100 returns Lawrence | Chen.",
        ar: "شغّلها، ثم أدخل Dana Smith (100، '2015-03-01'، 9000، NULL، NULL) وLawrence Chen (210، '2017-01-09'، 6200، NULL، 100): فيُرجع SELECT first_name, last_name FROM employees WHERE manager_id = 100 الصف Lawrence | Chen."
      }
    }
  ]
};
