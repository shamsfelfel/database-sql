/* Question bank: T5 chapter test B -- Applied. Every question hands the student a business from
   the chapter -- the school, the wholesaler, H.R., the health clubs, the computer lab, the TV
   channel, the cleaning agency -- and asks them to decide: the diamond, the type, the key, the
   ERDish sentence, the intersection entity, the UID, the SQL.
   Every SQL output quoted here was run in alasql (the course's own engine). */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t5-exam-b"] = {
  title: { en: "Chapter Test B — Applied", ar: "اختبار الفصل B — التطبيق" },
  intro: {
    en: "24 questions that make you do the work of the chapter. Each one hands you a business — the school, the wholesaler, H.R., the health clubs, the computer lab, the TV channel or the cleaning agency — and asks you to decide where the diamond goes, name the type, put the foreign key in the right table, write the ERDish sentence, resolve the many-to-many, choose the UID, or write and read the SQL. Most are medium; six are hard. Allow about 45 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا تجعلك تؤدّي عمل الفصل بنفسك. كل سؤال يضع أمامك عملًا من أعمال الفصل — المدرسة، أو تاجر الجملة، أو شؤون الموظفين، أو الأندية الصحية، أو مختبر الحاسوب، أو القناة التلفزيونية، أو شركة التنظيف — ويطلب منك أن تقرّر أين يوضع المعيَّن، وأن تسمّي نوع العلاقة، وأن تضع المفتاح الأجنبي في الجدول الصحيح، وأن تكتب جملة ERDish، وأن تحلّ علاقة متعدّد إلى متعدّد، وأن تختار المعرّف (UID)، أو أن تكتب SQL وتقرأ ناتجه. أغلبها متوسّط، وستة منها صعبة. خصّص لها نحو 45 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== transferability */
    {
      id: "t5bx01", type: "multi", level: "medium",
      topics: ["t5-diamond", "t5-nontransferable", "t5-business-decides"],
      q: {
        en: "Six relationships from the chapter's businesses, each with the rule its owner gives today. Which lines must carry a diamond? Choose every one.",
        ar: "ستّ علاقات من أعمال الفصل، مع كل واحدة القاعدة التي يقرّرها صاحب العمل اليوم. أيّ الخطوط يجب أن يحمل معيَّنًا (diamond)؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "<code>ORDER</code> placed by <code>CUSTOMER</code> — the internet company: once an order is placed by someone, that does not change",
          ar: "<code>ORDER</code> placed by <code>CUSTOMER</code> — شركة الإنترنت: بعد أن يضع أحدهم الطلب لا يتغيّر ذلك" },
        { en: "<code>MOTHERBOARD</code> contained in <code>COMPUTER</code> — when a computer is scrapped, the technician moves its working motherboard into another computer",
          ar: "<code>MOTHERBOARD</code> contained in <code>COMPUTER</code> — حين يُستبعد حاسوب، ينقل الفنّي لوحته الأمّ السليمة إلى حاسوب آخر" },
        { en: "<code>MEMBERSHIP</code> held by <code>PERSON</code> — the second health club never lets a membership pass to another person",
          ar: "<code>MEMBERSHIP</code> held by <code>PERSON</code> — النادي الصحي الثاني لا يسمح أبدًا بأن تنتقل العضوية إلى شخص آخر" },
        { en: "<code>CUSTOMER</code> visited by <code>SALES REPRESENTATIVE</code> — when a representative leaves, her customers are handed to a colleague",
          ar: "<code>CUSTOMER</code> visited by <code>SALES REPRESENTATIVE</code> — حين تغادر مندوبة، يُسلَّم عملاؤها إلى زميل" },
        { en: "<code>RECEIPT</code> issued to <code>STUDENT</code> — a receipt for a certification exam, written up by the bursar",
          ar: "<code>RECEIPT</code> issued to <code>STUDENT</code> — إيصال لامتحان شهادة، يكتبه أمين الصندوق" },
        { en: "<code>STUDENT</code> join <code>STUDY GROUP</code> — at this school every student must be in a group, and may switch groups",
          ar: "<code>STUDENT</code> join <code>STUDY GROUP</code> — في هذه المدرسة يجب أن يكون كل طالب في مجموعة، ويجوز له أن يغيّرها" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "For each line ask only one question: once the link is made, may it move to another instance? Ignore must and may.",
        ar: "اسأل عن كل خطّ سؤالًا واحدًا فقط: بعد أن يُعقد الرابط، هل يجوز أن ينتقل إلى نسخة أخرى؟ ولا تلتفت إلى must وmay."
      },
      explain: {
        en: "The order, the second club's membership and the receipt can never move, so their lines carry the diamond. The motherboard and the customer do move — the owners said so — so those lines stay unmarked, the transferable default. The study group is the tempting one: \"must be in a group\" is optionality, a solid half, and says nothing about whether the student may switch.",
        ar: "الطلب، وعضوية النادي الثاني، والإيصال لا تنتقل أبدًا، فتحمل خطوطها المعيَّن. أمّا اللوحة الأمّ والعميل فينتقلان — هكذا قال صاحبا العمل — فيبقى خطّاهما بلا علامة، وهو الأصل في العلاقة القابلة للنقل (transferable). ومجموعة الدراسة هي الفخّ: «يجب أن يكون في مجموعة» إلزامية (optionality)، أي نصف متّصل، ولا تقول شيئًا عن جواز تغيير المجموعة."
      }
    },

    {
      id: "t5bx02", type: "fill", level: "easy",
      topics: ["t5-diamond-rule", "t5-nontransferable", "t5-relationship-review"],
      q: {
        en: "The internet company: every order is placed by exactly one customer; a registered customer may not have ordered yet, and many order often; once placed, an order never passes to another customer. Write its three business rules.",
        ar: "شركة الإنترنت: كل طلب يضعه عميل واحد بالضبط؛ والعميل المسجَّل قد لا يكون طلب شيئًا بعد، وكثيرون يطلبون مرارًا؛ وبعد وضع الطلب لا ينتقل أبدًا إلى عميل آخر. اكتب قواعد العمل الثلاث."
      },
      lang: "erdish",
      code: "Each ORDER ____1____ placed by ____2____ CUSTOMER.\nEach CUSTOMER ____3____ place ____4____ ORDERs.\nOnce an ORDER has been placed by a CUSTOMER, it ____5____ be transferred to another CUSTOMER.",
      blanks: [
        { accept: ["must be", "Must be", "MUST BE"] },
        { accept: ["one and only one", "One and only one", "ONE AND ONLY ONE"] },
        { accept: ["may", "May", "MAY"] },
        { accept: ["one or more", "One or more", "ONE OR MORE"] },
        { accept: ["cannot", "can not", "Cannot", "CANNOT", "can never", "can't"] }
      ],
      hint: {
        en: "The first two sentences carry optionality and cardinality. The diamond has no slot in them, so it is said as a sentence of its own.",
        ar: "الجملتان الأوليان تحملان الإلزامية والعددية. وليس للمعيَّن مكان فيهما، فيُقال في جملة مستقلّة."
      },
      explain: {
        en: "\"Exactly one customer\" gives <code>must be</code> and <code>one and only one</code>; \"may not have ordered yet\" and \"many\" give <code>may</code> and <code>one or more</code>. The third sentence is the diamond, said aloud the way the slides say the receipt's: it <code>cannot</code> be transferred. Leaving it out would describe the same halves and toes with no diamond — a transferable order.",
        ar: "«عميل واحد بالضبط» تعطي <code>must be</code> و<code>one and only one</code>؛ و«قد لا يكون طلب بعد» و«كثيرًا» تعطيان <code>may</code> و<code>one or more</code>. والجملة الثالثة هي المعيَّن منطوقًا، كما تنطق الشرائح قاعدة الإيصال: <code>cannot</code> be transferred. ولو حُذفت لوصفت الجملتان الأنصاف والأصابع نفسها بلا معيَّن — أي طلبًا قابلًا للنقل."
      }
    },

    {
      id: "t5bx03", type: "write", level: "medium",
      topics: ["t5-transfer-update", "t5-transferable", "t5-sales-rep"],
      q: {
        en: "The wholesaler's <code>customers (customer_id, name, rep_id)</code>: Hana Saleh (rep 21) visits 501, 502 and 504; Karim (22) visits 503 and 505; Nadia (23) has none. Hana leaves, and the manager hands all her customers to Nadia. <code>CUSTOMER</code>–<code>SALES REPRESENTATIVE</code> has no diamond. Write the one statement that makes the transfer.",
        ar: "جدول تاجر الجملة <code>customers (customer_id, name, rep_id)</code>: تزور Hana Saleh (المندوبة 21) العملاء 501 و502 و504؛ ويزور Karim (22) العميلين 503 و505؛ وليس لـ Nadia (23) أحد. تغادر Hana، فيسلّم المدير جميع عملائها إلى Nadia. لا يحمل الخطّ <code>CUSTOMER</code>–<code>SALES REPRESENTATIVE</code> معيَّنًا. اكتب الجملة الواحدة التي تُجري النقل."
      },
      lang: "sql",
      lines: 3,
      checks: [
        { re: "^\\s*UPDATE\\s+customers\\b", flags: "i",
          label: { en: "updates the customers table, where the key lives", ar: "يحدّث جدول customers، حيث يسكن المفتاح" } },
        { re: "SET\\s+rep_id\\s*=\\s*23\\b", flags: "i",
          label: { en: "sets rep_id to Nadia's 23", ar: "يضبط rep_id على رقم Nadia ‏23" } },
        { re: "WHERE\\s+(rep_id\\s*=\\s*21\\b|customer_id\\s+IN\\s*\\(\\s*501\\s*,\\s*502\\s*,\\s*504\\s*\\))", flags: "i",
          label: { en: "touches only Hana's customers", ar: "لا يمسّ إلا عملاء Hana" } }
      ],
      forbid: [
        { re: "\\b(DELETE|INSERT)\\b", flags: "i",
          label: { en: "a transfer keeps the customer rows; it does not delete and re-enter them", ar: "النقل يُبقي صفوف العملاء؛ لا يحذفها ولا يعيد إدخالها" } }
      ],
      solution: {
        code: "UPDATE customers\nSET rep_id = 23\nWHERE rep_id = 21;",
        en: "Run in alasql: 3 rows updated. Counting customers per representative with a LEFT JOIN then gives Hana 0, Karim 2, Nadia 3.",
        ar: "نُفّذ في alasql: حُدّثت 3 صفوف. ثم إن عدّ العملاء لكل مندوب بـ LEFT JOIN يعطي Hana ‏0، وKarim ‏2، وNadia ‏3."
      },
      hint: {
        en: "A transfer keeps the instance and changes only its parent. Which column holds the parent of a customer?",
        ar: "النقل يُبقي النسخة ويغيّر أباها فقط. أيّ عمود يحمل أبا العميل؟"
      },
      explain: {
        en: "No diamond means the link may move, and in tables a move is one <code>UPDATE</code> of the foreign key in the child, <code>customers.rep_id</code>. Al-Noor Bakery stays customer 501, with its name and history; only its representative changes. Deleting the customers and inserting them again would also end with Nadia's id in the rows — but it destroys the instances a transfer is meant to keep.",
        ar: "غياب المعيَّن يعني أن الرابط يجوز أن ينتقل، والنقل في الجداول <code>UPDATE</code> واحد للمفتاح الأجنبي في الابن، <code>customers.rep_id</code>. يبقى Al-Noor Bakery العميل 501 باسمه وتاريخه؛ ولا يتغيّر إلا مندوبه. ولو حُذف العملاء ثم أُدخلوا من جديد لانتهى الأمر برقم Nadia في الصفوف أيضًا — لكنه يُتلف النسخ التي وُجد النقل ليحفظها."
      }
    },

    {
      id: "t5bx04", type: "tf", level: "easy",
      topics: ["t5-cancel-reissue", "t5-wrong-diamond", "t5-keep-history"],
      q: {
        en: "At the second health club, <code>MEMBERSHIP</code> held by <code>PERSON</code> carries a diamond. A clerk registered membership 7 to the wrong person by mistake. The right fix is to update membership 7's person, because the diamond only forbids transfers that members ask for, not corrections.",
        ar: "في النادي الصحي الثاني يحمل الخطّ <code>MEMBERSHIP</code> held by <code>PERSON</code> معيَّنًا. سجّل موظّف العضوية رقم 7 باسم الشخص الخطأ سهوًا. الإصلاح الصحيح هو تحديث صاحب العضوية 7، لأن المعيَّن يمنع فقط النقل الذي يطلبه الأعضاء، لا التصحيح."
      },
      truth: false,
      hint: {
        en: "Recall what the slides say happens to a receipt that was issued in error.",
        ar: "تذكّر ما تقوله الشرائح عن إيصال صدر خطأً."
      },
      explain: {
        en: "False. A diamond says the link never moves, whatever the reason. The slides' receipt shows the way: a wrong instance is cancelled where it is, and another is written up for the right parent. Membership 7 stays with the first person, marked cancelled, and a new membership is issued to the right one — so the record still shows the mistake.",
        ar: "خطأ. المعيَّن يقول إن الرابط لا ينتقل أبدًا، أيًّا كان السبب. وإيصال الشرائح يدلّ على الطريق: النسخة الخاطئة تُلغى في مكانها، وتُكتب نسخة أخرى للأب الصحيح. فتبقى العضوية 7 مع الشخص الأول مؤشَّرًا عليها بالإلغاء، وتصدر عضوية جديدة للشخص الصحيح — فيبقى الخطأ ظاهرًا في السجلّ."
      }
    },

    /* ==================================================== one-to-many */
    {
      id: "t5bx05", type: "mcq", level: "easy",
      topics: ["t5-fk-in-child", "t5-parent-child", "t5-two-how-many"],
      q: {
        en: "The first health club: each <code>MEMBERSHIP</code> must be held by one and only one <code>PERSON</code>; each <code>PERSON</code> may hold one or more <code>MEMBERSHIP</code>s — a gym membership and a swimming membership, say. Which column builds this relationship?",
        ar: "النادي الصحي الأول: كل <code>MEMBERSHIP</code> يجب أن يحملها <code>PERSON</code> واحد فقط لا غير؛ وكل <code>PERSON</code> قد يحمل <code>MEMBERSHIP</code> واحدة أو أكثر — عضوية في الصالة الرياضية وأخرى في المسبح مثلًا. أيّ عمود يبني هذه العلاقة؟"
      },
      options: [
        { en: "<code>persons.membership_id NUMBER NOT NULL</code>", ar: "<code>persons.membership_id NUMBER NOT NULL</code>" },
        { en: "<code>memberships.person_id NUMBER NOT NULL UNIQUE</code>", ar: "<code>memberships.person_id NUMBER NOT NULL UNIQUE</code>" },
        { en: "<code>memberships.person_id NUMBER NOT NULL</code>", ar: "<code>memberships.person_id NUMBER NOT NULL</code>" },
        { en: "A third table, <code>person_memberships</code>, with one row per person and membership", ar: "جدول ثالث <code>person_memberships</code>، فيه صفّ لكل شخص وعضوية" }
      ],
      answer: 2,
      hint: {
        en: "Ask both \"how many?\" questions, find the crow's foot, and remember which table the key of a 1:M goes in.",
        ar: "اطرح سؤالَي «كم؟» كليهما، وحدّد رِجل الغراب، وتذكّر في أيّ جدول يوضع مفتاح علاقة ‎1:M."
      },
      explain: {
        en: "One person, many memberships; one membership, one person: a 1:M with the crow's foot at <code>MEMBERSHIP</code>, the child. The key goes in the child, <code>NOT NULL</code> because the <code>MEMBERSHIP</code> half is solid. <code>UNIQUE</code> would allow one membership per person — a 1:1 — and a key in <code>persons</code> can hold only one membership per row. A third table is for an M:M.",
        ar: "شخص واحد وعضويات كثيرة؛ وعضوية واحدة وشخص واحد: ‎1:M ورِجل الغراب عند <code>MEMBERSHIP</code>، وهي الابن. فيوضع المفتاح في الابن، و<code>NOT NULL</code> لأن النصف عند <code>MEMBERSHIP</code> متّصل. أمّا <code>UNIQUE</code> فيسمح بعضوية واحدة لكل شخص — أي ‎1:1 — والمفتاح في <code>persons</code> لا يحمل إلا عضوية واحدة في كل صفّ. والجدول الثالث لعلاقة ‎M:M."
      }
    },

    {
      id: "t5bx06", type: "write", level: "medium",
      topics: ["t5-fk-in-child", "t5-one-to-many", "t5-transferable"],
      q: {
        en: "H.R.: each <code>EMPLOYEE</code> must hold one and only one <code>JOB</code>; each <code>JOB</code> may be held by one or more <code>EMPLOYEE</code>s, and a new job may be vacant; a person may change jobs. <code>jobs (job_id NUMBER PRIMARY KEY, title VARCHAR(30) NOT NULL)</code> exists. Write <code>CREATE TABLE employees</code> with <code>employee_id</code>, <code>first_name</code>, <code>last_name</code> and <code>job_id</code>.",
        ar: "شؤون الموظفين: كل <code>EMPLOYEE</code> يجب أن يشغل <code>JOB</code> واحدة فقط لا غير؛ وكل <code>JOB</code> قد يشغلها <code>EMPLOYEE</code> واحد أو أكثر، وقد تكون الوظيفة الجديدة شاغرة؛ ويجوز للشخص أن يغيّر وظيفته. الجدول <code>jobs (job_id NUMBER PRIMARY KEY, title VARCHAR(30) NOT NULL)</code> موجود. اكتب <code>CREATE TABLE employees</code> بالأعمدة <code>employee_id</code> و<code>first_name</code> و<code>last_name</code> و<code>job_id</code>."
      },
      lang: "sql",
      lines: 6,
      checks: [
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\(", flags: "i",
          label: { en: "creates the child table, employees", ar: "ينشئ جدول الابن employees" } },
        { re: "employee_id\\s+[^,]*PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*employee_id\\s*\\)", flags: "i",
          label: { en: "employee_id is the primary key", ar: "employee_id هو المفتاح الأساسي" } },
        { re: "job_id\\s+[^,]*NOT\\s+NULL", flags: "i",
          label: { en: "job_id is NOT NULL: the EMPLOYEE half is solid", ar: "job_id بقيد NOT NULL: النصف عند EMPLOYEE متّصل" } },
        { re: "REFERENCES\\s+jobs\\s*\\(\\s*job_id\\s*\\)", flags: "i",
          label: { en: "job_id references jobs(job_id)", ar: "job_id يشير إلى jobs(job_id)" } }
      ],
      forbid: [
        { re: "job_id\\s+[^,]*\\bUNIQUE\\b", flags: "i",
          label: { en: "UNIQUE on job_id would allow one employee per job: a 1:1", ar: "UNIQUE على job_id يسمح بموظف واحد لكل وظيفة: علاقة ‎1:1" } }
      ],
      solution: {
        code: "CREATE TABLE employees (\n  employee_id NUMBER PRIMARY KEY,\n  first_name  VARCHAR(20) NOT NULL,\n  last_name   VARCHAR(20) NOT NULL,\n  job_id      NUMBER NOT NULL REFERENCES jobs(job_id)\n);",
        en: "Run in alasql: two employees in job 1 are accepted, a job_id of 9 is refused (Foreign key \"9\" not found in table \"jobs\"), and UPDATE employees SET job_id = 2 moves Carlos.",
        ar: "نُفّذ في alasql: يُقبل موظفان في الوظيفة 1، ويُرفض job_id قيمته 9 ‏(Foreign key \"9\" not found in table \"jobs\")، وجملة UPDATE employees SET job_id = 2 تنقل Carlos."
      },
      hint: {
        en: "The crow's foot is at the end where the answer is \"many\". That table gets the key; the half next to it decides NOT NULL.",
        ar: "رِجل الغراب عند الطرف الذي جوابه «كثير». ذلك الجدول يأخذ المفتاح، والنصف المجاور له يقرّر NOT NULL."
      },
      explain: {
        en: "A job may be held by many employees, so <code>EMPLOYEE</code> is the child and carries <code>job_id</code>. \"Must hold\" makes the <code>EMPLOYEE</code> half solid, so <code>NOT NULL</code>; the vacant job is the dashed half at <code>JOB</code> and needs no column at all. Do not add <code>UNIQUE</code>: two accountants share one job. And because the line has no diamond, the column may be updated when someone changes jobs.",
        ar: "الوظيفة قد يشغلها موظفون كثيرون، فـ <code>EMPLOYEE</code> هو الابن ويحمل <code>job_id</code>. و«يجب أن يشغل» تجعل النصف عند <code>EMPLOYEE</code> متّصلًا، فيكون <code>NOT NULL</code>؛ أمّا الوظيفة الشاغرة فهي النصف المتقطّع عند <code>JOB</code> ولا تحتاج عمودًا أصلًا. لا تُضف <code>UNIQUE</code>: فمحاسبان يتشاركان وظيفة واحدة. ولأن الخطّ بلا معيَّن، يجوز تحديث العمود حين يغيّر أحدهم وظيفته."
      }
    },

    {
      id: "t5bx07", type: "fill", level: "medium",
      topics: ["t5-many-one-or-more", "t5-many-meaning", "t5-read-backwards"],
      q: {
        en: "This school decides that every teacher on the payroll must be responsible for at least one class, and each class must be allocated to exactly one teacher. Write the two sentences, then say what the \"many\" at <code>CLASS</code> means and which reading the first sentence is.",
        ar: "تقرّر هذه المدرسة أن كل معلّم على كشف الرواتب يجب أن يكون مسؤولًا عن صفّ واحد على الأقل، وأن كل صفّ يجب أن يُسند إلى معلّم واحد بالضبط. اكتب الجملتين، ثم قل ما معنى «المتعدّد» عند <code>CLASS</code>، وأيّ قراءة هي الجملة الأولى."
      },
      lang: "erdish",
      code: "Each CLASS ____1____ allocated to ____2____ TEACHER.\nEach TEACHER ____3____ responsible for ____4____ CLASSes.\n\nThe many at CLASS is: ____5____   (one-or-more / zero-or-more)\nThe first sentence is the ____6____ reading.   (1:M / M:1)",
      blanks: [
        { accept: ["must be", "Must be", "MUST BE"] },
        { accept: ["one and only one", "One and only one", "ONE AND ONLY ONE"] },
        { accept: ["must be", "Must be", "MUST BE"] },
        { accept: ["one or more", "One or more", "ONE OR MORE"] },
        { accept: ["one-or-more", "one or more", "One-or-more", "ONE-OR-MORE"] },
        { accept: ["M:1", "m:1", "M : 1", "many-to-one"] }
      ],
      hint: {
        en: "The minimum of the many is read from the half next to the parent. And a reading is named from the end it starts at.",
        ar: "الحدّ الأدنى للمتعدّد يُقرأ من النصف المجاور للأب. والقراءة تُسمّى بالطرف الذي تبدأ منه."
      },
      explain: {
        en: "\"Must be responsible for at least one\" makes the <code>TEACHER</code> half solid, so the many is one-or-more — not the zero-or-more of Lesson 2's exercise, where a new teacher <em>may</em> have no class. The first sentence starts at <code>CLASS</code>, the many end, so it is the M:1 reading. Note that no foreign key can enforce this minimum: <code>classes.teacher_id</code> forces each class to have a teacher, never each teacher to have a class.",
        ar: "«يجب أن يكون مسؤولًا عن واحد على الأقل» تجعل النصف عند <code>TEACHER</code> متّصلًا، فيكون المتعدّد واحدًا أو أكثر — لا صفرًا أو أكثر كما في تمرين الدرس 2، حيث <em>قد</em> لا يكون للمعلّم الجديد صفّ. والجملة الأولى تبدأ من <code>CLASS</code>، طرف المتعدّد، فهي قراءة ‎M:1. ولاحظ أن أيّ مفتاح أجنبي لا يفرض هذا الحدّ الأدنى: <code>classes.teacher_id</code> يُلزم كل صفّ بمعلّم، ولا يُلزم أبدًا كل معلّم بصفّ."
      }
    },

    {
      id: "t5bx08", type: "output", level: "medium",
      topics: ["t5-parent-without-child", "t5-many-zero-or-more", "t5-four-forms"],
      q: {
        en: "H.R. opens department 30, Marketing, today; nobody is in it yet, and the model says a department <em>may</em> be responsible for employees. <code>departments</code>: 10 Accounting, 15 Sales, 22 Development, 30 Marketing. <code>employees.department_id</code>: Dana 10, Tyler 15, Lawrence 10, Carlos 10, Neil 22. What does this query return?",
        ar: "تفتح شؤون الموظفين اليوم القسم 30، Marketing؛ لا أحد فيه بعد، والنموذج يقول إن القسم <em>قد</em> يكون مسؤولًا عن موظفين. <code>departments</code>: ‏10 Accounting، و15 Sales، و22 Development، و30 Marketing. و<code>employees.department_id</code>: Dana ‏10، وTyler ‏15، وLawrence ‏10، وCarlos ‏10، وNeil ‏22. ماذا يُرجع هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT d.name, COUNT(e.employee_id) AS staff\nFROM departments d\nLEFT JOIN employees e ON e.department_id = d.department_id\nGROUP BY d.name\nORDER BY d.name;",
      options: [
        { en: "Accounting 3 · Development 1 · Sales 1", ar: "Accounting 3 · Development 1 · Sales 1" },
        { en: "Accounting 3 · Development 1 · Marketing 1 · Sales 1", ar: "Accounting 3 · Development 1 · Marketing 1 · Sales 1" },
        { en: "Accounting 3 · Development 1 · Marketing 0 · Sales 1", ar: "Accounting 3 · Development 1 · Marketing 0 · Sales 1" },
        { en: "An error: a department with no employees breaks the foreign key", ar: "خطأ: القسم الذي لا موظفين فيه يكسر المفتاح الأجنبي" }
      ],
      answer: 2,
      solution: {
        out: "name        | staff\nAccounting  | 3\nDevelopment | 1\nMarketing   | 0\nSales       | 1",
        en: "Run in alasql. With an inner JOIN, Marketing disappears; with COUNT(*) instead of COUNT(e.employee_id), it shows 1.",
        ar: "نُفّذ في alasql. ومع JOIN داخلي يختفي Marketing؛ ومع COUNT(*) بدل COUNT(e.employee_id) يظهر 1."
      },
      hint: {
        en: "A LEFT JOIN keeps every department. What does COUNT of a column give when that column is empty?",
        ar: "‏LEFT JOIN يُبقي كل قسم. ماذا يعطي COUNT لعمود حين يكون ذلك العمود فارغًا؟"
      },
      explain: {
        en: "The LEFT JOIN keeps Marketing with an empty employee row, and <code>COUNT(e.employee_id)</code> counts only filled values: 0. That 0 is legal because the many is zero-or-more — the half at <code>DEPARTMENT</code> is dashed. The inner-join answer drops the new department, and the 1 is what <code>COUNT(*)</code> would give, counting the padded row. The foreign key sits in <code>employees</code>; a parent with no children never breaks it.",
        ar: "‏LEFT JOIN يُبقي Marketing مع صفّ موظف فارغ، و<code>COUNT(e.employee_id)</code> لا يعدّ إلا القيم المملوءة: 0. وهذا الصفر مشروع لأن المتعدّد صفر أو أكثر — النصف عند <code>DEPARTMENT</code> متقطّع. أمّا جواب الربط الداخلي فيُسقط القسم الجديد، والرقم 1 هو ما يعطيه <code>COUNT(*)</code> حين يعدّ الصفّ المكمَّل. والمفتاح الأجنبي في <code>employees</code>؛ والأب الذي لا أبناء له لا يكسره أبدًا."
      }
    },

    /* ==================================================== one-to-one */
    {
      id: "t5bx09", type: "mcq", level: "hard",
      topics: ["t5-key-side", "t5-unique-fk", "t5-own-significance"],
      q: {
        en: "The computer lab adds monitors. Each <code>COMPUTER</code> must have one and only one <code>MONITOR</code>. Each <code>MONITOR</code> may be on one and only one <code>COMPUTER</code> — spares wait in the cupboard. Monitors have their own serial numbers and are swapped between desks. Which design is right?",
        ar: "يضيف مختبر الحاسوب شاشات. كل <code>COMPUTER</code> يجب أن تكون له <code>MONITOR</code> واحدة فقط لا غير. وكل <code>MONITOR</code> قد تكون على <code>COMPUTER</code> واحد فقط لا غير — فالشاشات الاحتياطية تنتظر في الخزانة. للشاشات أرقام تسلسلية خاصة بها، وتُبدَّل بين المكاتب. أيّ تصميم صحيح؟"
      },
      options: [
        { en: "<code>monitors.computer_id NUMBER NOT NULL UNIQUE</code>", ar: "<code>monitors.computer_id NUMBER NOT NULL UNIQUE</code>" },
        { en: "<code>computers.monitor_id VARCHAR(12) NOT NULL</code>", ar: "<code>computers.monitor_id VARCHAR(12) NOT NULL</code>" },
        { en: "<code>computers.monitor_id VARCHAR(12) NOT NULL UNIQUE</code>", ar: "<code>computers.monitor_id VARCHAR(12) NOT NULL UNIQUE</code>" },
        { en: "Merge <code>MONITOR</code> into <code>COMPUTER</code> as attributes: a 1:1 is one entity drawn twice", ar: "دمج <code>MONITOR</code> في <code>COMPUTER</code> كخصائص: علاقة ‎1:1 هي كيان واحد مرسوم مرّتين" }
      ],
      answer: 2,
      hint: {
        en: "Find the solid half: the key of a 1:1 goes on that side. Then ask what makes a foreign key one-to-one rather than one-to-many.",
        ar: "ابحث عن النصف المتّصل: مفتاح علاقة ‎1:1 يوضع في جهته. ثم اسأل ما الذي يجعل المفتاح الأجنبي واحدًا إلى واحد لا واحدًا إلى متعدّد."
      },
      explain: {
        en: "The half at <code>COMPUTER</code> is solid (must have), the half at <code>MONITOR</code> dashed (spares), so the key goes in <code>computers</code> and can be <code>NOT NULL</code>. <code>UNIQUE</code> is the second toe: without it one monitor could sit on several computers, a 1:M. The key in <code>monitors</code> declared <code>NOT NULL</code> would forbid the spares in the cupboard. Merging is wrong because a monitor has its own serial number and moves between desks — it is significant on its own.",
        ar: "النصف عند <code>COMPUTER</code> متّصل (يجب أن تكون له)، والنصف عند <code>MONITOR</code> متقطّع (الاحتياطيات)، فيوضع المفتاح في <code>computers</code> ويمكن أن يكون <code>NOT NULL</code>. و<code>UNIQUE</code> هي الإصبع الثانية: بدونها قد تكون شاشة واحدة على عدّة حواسيب، أي ‎1:M. والمفتاح في <code>monitors</code> بقيد <code>NOT NULL</code> يمنع الشاشات الاحتياطية في الخزانة. والدمج خطأ لأن للشاشة رقمًا تسلسليًّا خاصًّا وتنتقل بين المكاتب — فلها أهمية بذاتها."
      }
    },

    {
      id: "t5bx10", type: "trace", level: "hard",
      topics: ["t5-unique-fk", "t5-one-to-one", "t5-transfer-update"],
      q: {
        en: "The previous question's design, built: <code>monitors</code> holds MN-101 to MN-104; <code>computers</code> holds LAB-01 with MN-101, LAB-02 with MN-102, LAB-03 with MN-103, and MN-104 is a spare. The technician runs the statements one at a time; a refused statement does not stop the next. What does the last query return?",
        ar: "تصميم السؤال السابق مبنيًّا: يحمل <code>monitors</code> الشاشات من MN-101 إلى MN-104؛ ويحمل <code>computers</code> الحاسوب LAB-01 مع MN-101، وLAB-02 مع MN-102، وLAB-03 مع MN-103، أمّا MN-104 فاحتياطية. ينفّذ الفنّي الجمل واحدة واحدة؛ والجملة المرفوضة لا توقف ما بعدها. ماذا يُرجع الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "-- computers (computer_id NUMBER PRIMARY KEY, label VARCHAR(20) NOT NULL,\n--   monitor_id VARCHAR(12) NOT NULL UNIQUE REFERENCES monitors(serial_no))\nINSERT INTO computers VALUES (4, 'LAB-04', 'MN-102');\nUPDATE computers SET monitor_id = 'MN-104' WHERE computer_id = 2;\nINSERT INTO computers VALUES (4, 'LAB-04', 'MN-102');\nINSERT INTO computers VALUES (5, 'LAB-05', NULL);\nSELECT label, monitor_id FROM computers ORDER BY computer_id;",
      options: [
        { en: "LAB-01 MN-101 · LAB-02 MN-102 · LAB-03 MN-103 · LAB-04 MN-102", ar: "LAB-01 MN-101 · LAB-02 MN-102 · LAB-03 MN-103 · LAB-04 MN-102" },
        { en: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103 · LAB-04 MN-102", ar: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103 · LAB-04 MN-102" },
        { en: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103", ar: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103" },
        { en: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103 · LAB-04 MN-102 · LAB-05 (empty)", ar: "LAB-01 MN-101 · LAB-02 MN-104 · LAB-03 MN-103 · LAB-04 MN-102 · LAB-05 (فارغ)" }
      ],
      answer: 1,
      solution: {
        out: "label  | monitor_id\nLAB-01 | MN-101\nLAB-02 | MN-104\nLAB-03 | MN-103\nLAB-04 | MN-102",
        en: "Run in alasql. Statement 1 fails with \"Cannot insert record, because it already exists in unique index\"; statement 4 with \"Wrong NULL value in NOT NULL column monitor_id\".",
        ar: "نُفّذ في alasql. تفشل الجملة 1 بالرسالة \"Cannot insert record, because it already exists in unique index\"، والجملة 4 بالرسالة \"Wrong NULL value in NOT NULL column monitor_id\"."
      },
      hint: {
        en: "Trace each statement against UNIQUE and NOT NULL, with the table as it stands at that moment — not as it stood at the start.",
        ar: "تتبّع كل جملة مقابل UNIQUE وNOT NULL، على الجدول كما هو في تلك اللحظة — لا كما كان في البداية."
      },
      explain: {
        en: "The first insert is refused: MN-102 is still on LAB-02, and <code>UNIQUE</code> is the toe at <code>COMPUTER</code>. The update swaps LAB-02 to the spare — a transfer, allowed because the line has no diamond — and frees MN-102, so the same insert now succeeds. LAB-05 with no monitor is refused by <code>NOT NULL</code>, the solid half. The tempting first option forgets that a refused statement changes nothing.",
        ar: "يُرفض الإدخال الأول: MN-102 ما زالت على LAB-02، و<code>UNIQUE</code> هي الإصبع عند <code>COMPUTER</code>. ثم ينقل التحديث LAB-02 إلى الشاشة الاحتياطية — وهذا نقل مسموح لأن الخطّ بلا معيَّن — فتتحرّر MN-102، وينجح الإدخال نفسه هذه المرّة. ويُرفض LAB-05 بلا شاشة بسبب <code>NOT NULL</code>، أي النصف المتّصل. والخيار الأول المغري ينسى أن الجملة المرفوضة لا تغيّر شيئًا."
      }
    },

    {
      id: "t5bx11", type: "match", level: "medium",
      topics: ["t5-relationship-type", "t5-roles", "t5-split-entity", "t5-person-dvd"],
      q: {
        en: "Each business below needs a different model. Match each one with the right decision.",
        ar: "كل عمل مما يلي يحتاج نموذجًا مختلفًا. صِل كل واحد بالقرار الصحيح."
      },
      leftHead: { en: "The business says", ar: "يقول العمل" },
      rightHead: { en: "Model it as", ar: "يُنمذَج على أنه" },
      pairs: [
        { l: { en: "Rana Saad teaches and also studies here; her name and phone must be stored once.",
               ar: "Rana Saad تدرّس هنا وتدرس أيضًا؛ ويجب أن يُخزَّن اسمها وهاتفها مرّة واحدة." },
          r: { en: "<code>PERSON</code> plus a 1:1 to each role, mandatory at the role end",
               ar: "<code>PERSON</code> مع ‎1:1 إلى كل دور، إلزامية عند طرف الدور" } },
        { l: { en: "Each student has one contact record, created and deleted with the student, never used on its own.",
               ar: "لكل طالب سجلّ اتصال واحد، يُنشأ ويُحذف مع الطالب، ولا يُستعمل وحده أبدًا." },
          r: { en: "One entity: phone and email become attributes of <code>STUDENT</code>",
               ar: "كيان واحد: يصير الهاتف والبريد خاصيتين لـ <code>STUDENT</code>" } },
        { l: { en: "A DVD may be co-owned by several family members, and each owns many DVDs.",
               ar: "قد يشترك عدّة أفراد من العائلة في ملكية قرص DVD، ويملك كل منهم أقراصًا كثيرة." },
          r: { en: "M:M, resolved later with an intersection entity",
               ar: "‏M:M، تُحلّ لاحقًا بكيان تقاطع" } },
        { l: { en: "Each DVD belongs to one family member, and a member may own many.",
               ar: "كل قرص DVD يملكه فرد واحد من العائلة، وقد يملك الفرد أقراصًا كثيرة." },
          r: { en: "1:M, with the foreign key in <code>dvds</code>",
               ar: "‏1:M، والمفتاح الأجنبي في <code>dvds</code>" } },
        { l: { en: "Once issued, a receipt never changes student; a wrong one is cancelled.",
               ar: "بعد إصدار الإيصال لا يتغيّر طالبه أبدًا؛ والخاطئ منه يُلغى." },
          r: { en: "A 1:M with a diamond on the line",
               ar: "‏1:M مع معيَّن على الخطّ" } }
      ],
      hint: {
        en: "For each business, first ask the two \"how many?\" questions; then ask whether the second box has any life of its own, and whether the link may move.",
        ar: "اطرح لكل عمل سؤالَي «كم؟» أولًا؛ ثم اسأل هل للصندوق الثاني حياة خاصة به، وهل يجوز أن ينتقل الرابط."
      },
      explain: {
        en: "Roles are the slides' 1:1 mandatory at one end: every teacher is a person, most persons are not teachers. A contact record with no life of its own is a split entity and is merged. Co-owned DVDs are many both ways — an M:M, which a later stage resolves. One owner per DVD is a 1:M with the key in the child. The receipt is a 1:M too; what sets it apart is the diamond, not its type.",
        ar: "الأدوار هي علاقة ‎1:1 الإلزامية من طرف واحد في الشرائح: كل معلّم شخص، وأغلب الأشخاص ليسوا معلّمين. وسجلّ الاتصال الذي لا حياة له بذاته كيان مجزّأ (split entity) فيُدمج. والأقراص المشتركة كثيرة في الاتجاهين — ‎M:M تحلّها مرحلة لاحقة. ومالك واحد لكل قرص ‎1:M والمفتاح في الابن. والإيصال ‎1:M أيضًا؛ وما يميّزه هو المعيَّن، لا نوعه."
      }
    },

    {
      id: "t5bx12", type: "tf", level: "easy",
      topics: ["t5-unique-fk", "t5-one-to-one-draft", "t5-one-to-one"],
      q: {
        en: "At this school each class meets in one classroom, and each classroom hosts only one class. The developer builds <code>classes.room_id NUMBER NOT NULL REFERENCES classrooms(room_id)</code>. This column enforces the school's one-to-one rule.",
        ar: "في هذه المدرسة يجتمع كل صفّ في غرفة صفّية واحدة، ولا تستضيف كل غرفة إلا صفًّا واحدًا. يبني المطوّر <code>classes.room_id NUMBER NOT NULL REFERENCES classrooms(room_id)</code>. هذا العمود يفرض قاعدة الواحد إلى واحد في المدرسة."
      },
      truth: false,
      hint: {
        en: "A plain foreign key gives each class one room. What stops two classes naming the same room?",
        ar: "المفتاح الأجنبي العادي يعطي كل صفّ غرفة واحدة. ما الذي يمنع صفّين من تسمية الغرفة نفسها؟"
      },
      explain: {
        en: "False. One value per row gives each class one room — one direction only. Nothing stops room 12 appearing in many class rows, so the table enforces a 1:M. Declaring the column <code>UNIQUE</code> adds the second toe and makes it a 1:1. (A school whose rooms host several classes a day would want exactly the 1:M this column builds.)",
        ar: "خطأ. قيمة واحدة في كل صفّ تعطي كل صفّ دراسي غرفة واحدة — في اتجاه واحد فقط. ولا شيء يمنع الغرفة 12 من الظهور في صفوف كثيرة، فيفرض الجدول علاقة ‎1:M. وإعلان العمود <code>UNIQUE</code> يضيف الإصبع الثانية ويجعلها ‎1:1. (والمدرسة التي تستضيف غرفها عدّة صفوف في اليوم تحتاج بالضبط علاقة ‎1:M التي يبنيها هذا العمود.)"
      }
    },

    /* ==================================================== many-to-many */
    {
      id: "t5bx13", type: "multi", level: "medium",
      topics: ["t5-pair-test", "t5-hidden-attribute", "t5-learns-from"],
      q: {
        en: "The slides' <code>STUDENT</code> learns from <code>TEACHER</code>, an M:M. The school now wants to keep the facts below. Which of them is the M:M hiding — that is, belongs to neither entity? Choose every one.",
        ar: "علاقة الشرائح <code>STUDENT</code> learns from <code>TEACHER</code>، وهي ‎M:M. تريد المدرسة الآن حفظ الحقائق التالية. أيّها تخفيه علاقة ‎M:M — أي لا ينتمي إلى أيّ من الكيانين؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The date this student first learned from this teacher", ar: "تاريخ أول تعلّم لهذا الطالب على يد هذا المعلّم" },
        { en: "The teacher's hire date", ar: "تاريخ تعيين المعلّم" },
        { en: "The number of sessions this student has had with this teacher", ar: "عدد الحصص التي حضرها هذا الطالب مع هذا المعلّم" },
        { en: "The student's start date at the school", ar: "تاريخ بدء الطالب في المدرسة" },
        { en: "The comment this teacher wrote on this student's report", ar: "الملاحظة التي كتبها هذا المعلّم في تقرير هذا الطالب" },
        { en: "The teacher's phone", ar: "هاتف المعلّم" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Apply the pair test to each fact: one value per what?",
        ar: "طبّق اختبار الزوج على كل حقيقة: قيمة واحدة لكل ماذا؟"
      },
      explain: {
        en: "The first date, the number of sessions and the comment each have one value per student <em>and</em> teacher: Sara can have ten sessions with Rana and two with Khaled. Those are hidden by the M:M. The hire date and the phone are one per teacher, and the start date one per student, so they stay in their entities — putting them on the relationship would repeat them for every pair.",
        ar: "تاريخ أول تعلّم، وعدد الحصص، والملاحظة، لكلٍّ منها قيمة واحدة لكل طالب <em>و</em>معلّم معًا: فقد تحضر Sara عشر حصص مع Rana وحصّتين مع Khaled. هذه تخفيها علاقة ‎M:M. أمّا تاريخ التعيين والهاتف فواحد لكل معلّم، وتاريخ البدء واحد لكل طالب، فتبقى في كياناتها — ووضعها على العلاقة يكرّرها لكل زوج."
      }
    },

    {
      id: "t5bx14", type: "contrast", level: "hard",
      topics: ["t5-redundant", "t5-same-meaning", "t5-relationship-path", "t5-resolved-model"],
      q: {
        en: "Each row is a direct line that a designer wants to keep beside a path of other lines, with what the business means by it. Is the direct line redundant, or does it record its own fact?",
        ar: "كل صفّ خطّ مباشر يريد مصمّم أن يُبقيه بجانب مسار من خطوط أخرى، مع ما يعنيه العمل به. هل الخطّ المباشر زائد (redundant)، أم يسجّل حقيقة خاصة به؟"
      },
      concepts: [
        { en: "Redundant — remove it", ar: "زائد — يُحذف" },
        { en: "Its own fact — keep it", ar: "حقيقة خاصة به — يبقى" }
      ],
      rows: [
        { s: { en: "<code>STUDENT</code> tutored by <code>TEACHER</code>; the tutor is chosen freely from any teacher. Path: <code>STUDENT</code>–<code>STUDY GROUP</code>–<code>TEACHER</code>.",
               ar: "<code>STUDENT</code> tutored by <code>TEACHER</code>؛ ويُختار المرشد بحرّية من أيّ معلّم. المسار: <code>STUDENT</code>–<code>STUDY GROUP</code>–<code>TEACHER</code>." }, a: 1 },
        { s: { en: "<code>STUDENT</code> learns from <code>TEACHER</code>, meaning exactly the teachers of the subjects the student studies. Path: <code>STUDENT</code> studies <code>SUBJECT</code> taught by <code>TEACHER</code>.",
               ar: "<code>STUDENT</code> learns from <code>TEACHER</code>، ويعني بالضبط معلّمي الموادّ التي يدرسها الطالب. المسار: <code>STUDENT</code> studies <code>SUBJECT</code> taught by <code>TEACHER</code>." }, a: 0 },
        { s: { en: "The same <code>STUDENT</code> learns from <code>TEACHER</code>, but it also records extra sessions a student attends with any teacher.",
               ar: "العلاقة نفسها <code>STUDENT</code> learns from <code>TEACHER</code>، لكنها تسجّل أيضًا حصصًا إضافية يحضرها الطالب مع أيّ معلّم." }, a: 1 },
        { s: { en: "<code>TV SHOW</code> watched by <code>PERSON</code>, kept after the model was resolved with <code>VIEWING RECORD</code>.",
               ar: "<code>TV SHOW</code> watched by <code>PERSON</code>، أُبقي بعد حلّ النموذج بـ <code>VIEWING RECORD</code>." }, a: 0 },
        { s: { en: "<code>CLEANING COMPANY</code> provides <code>CLEANING SERVICE</code>, kept beside <code>CLEANING SCHEDULE</code>.",
               ar: "<code>CLEANING COMPANY</code> provides <code>CLEANING SERVICE</code>، أُبقي بجانب <code>CLEANING SCHEDULE</code>." }, a: 0 },
        { s: { en: "<code>SUBJECT</code> taught by <code>TEACHER</code> — the one named teacher in charge of the subject. Path: <code>SUBJECT</code>–<code>ENROLLMENT</code>–<code>STUDENT</code>–learns from–<code>TEACHER</code>.",
               ar: "<code>SUBJECT</code> taught by <code>TEACHER</code> — المعلّم الواحد المسمّى المسؤول عن المادّة. المسار: <code>SUBJECT</code>–<code>ENROLLMENT</code>–<code>STUDENT</code>–learns from–<code>TEACHER</code>." }, a: 1 }
      ],
      hint: {
        en: "Read the direct line in ERDish, then read the path. Only if the business means the same thing by both is the line redundant.",
        ar: "اقرأ الخطّ المباشر بلغة ERDish، ثم اقرأ المسار. لا يكون الخطّ زائدًا إلا إذا عنى العمل بهما الشيء نفسه."
      },
      explain: {
        en: "A second path is never proof on its own; the same-meaning test decides. \"Exactly the teachers of the subjects studied\" can be derived, so that line goes; so does an M:M line left beside the intersection entity that resolved it. A freely chosen tutor, extra sessions, and a subject's one named teacher are facts the path cannot produce — the path from a subject reaches every teacher its students learn from, not the one in charge.",
        ar: "المسار الثاني وحده ليس دليلًا أبدًا؛ اختبار المعنى نفسه هو الذي يقرّر. «معلّمو الموادّ التي يدرسها بالضبط» يمكن اشتقاقهم، فيُحذف ذلك الخطّ؛ وكذلك خطّ ‎M:M الذي بقي بجانب كيان التقاطع الذي حلّه. أمّا المرشد المختار بحرّية، والحصص الإضافية، ومعلّم المادّة الواحد المسمّى، فحقائق لا يُنتجها المسار — فالمسار من المادّة يصل إلى كل معلّم يتعلّم منه طلابها، لا إلى المسؤول عنها."
      }
    },

    {
      id: "t5bx15", type: "mcq", level: "hard",
      topics: ["t5-many-to-many", "t5-intersection-entity", "t5-mm-squeezed", "t5-list-column"],
      q: {
        en: "Lesson 1's school changes its rules: a student may now belong to several study groups at once, a group has many students, and the school wants the date each student joined each group. Today the model has <code>students.group_id</code>. Which model is right?",
        ar: "تغيّر مدرسة الدرس 1 قواعدها: صار يجوز للطالب أن ينتمي إلى عدّة مجموعات دراسة في وقت واحد، وللمجموعة طلاب كثيرون، وتريد المدرسة تاريخ انضمام كل طالب إلى كل مجموعة. في النموذج اليوم <code>students.group_id</code>. أيّ نموذج صحيح؟"
      },
      options: [
        { en: "Keep <code>STUDENT</code> join <code>STUDY GROUP</code> as a 1:M and add <code>* Join Date</code> to <code>STUDENT</code>",
          ar: "إبقاء <code>STUDENT</code> join <code>STUDY GROUP</code> علاقة ‎1:M وإضافة <code>* Join Date</code> إلى <code>STUDENT</code>" },
        { en: "Put crow's feet at both ends and add <code>o Join Date</code> to <code>STUDY GROUP</code>",
          ar: "وضع رِجل غراب عند الطرفين وإضافة <code>o Join Date</code> إلى <code>STUDY GROUP</code>" },
        { en: "Keep <code>students.group_id</code> and store the groups and dates as a list, e.g. <code>'Algebra Circle 2026-09-01, Data Club 2026-10-12'</code>",
          ar: "إبقاء <code>students.group_id</code> وتخزين المجموعات والتواريخ قائمةً، مثل <code>'Algebra Circle 2026-09-01, Data Club 2026-10-12'</code>" },
        { en: "A new entity between them for one student in one group, both crow's feet at it, <code>* Join Date</code> inside it, and a bar on both lines",
          ar: "كيان جديد بينهما لطالب واحد في مجموعة واحدة، ورِجلا الغراب كلتاهما عنده، و<code>* Join Date</code> داخله، وقضيب على الخطّين كليهما" }
      ],
      answer: 3,
      hint: {
        en: "Ask the two \"how many?\" questions again under the new rules. Then apply the pair test to Join Date.",
        ar: "اطرح سؤالَي «كم؟» من جديد تحت القواعد الجديدة. ثم طبّق اختبار الزوج على Join Date."
      },
      explain: {
        en: "\"Several groups\" and \"many students\" make the line M:M, and a join date is one value per student per group — a hidden attribute. Resolving it gives an intersection entity holding <code>Join Date</code>, two 1:Ms with the crow's feet at it, and a UID barred from both parents. Keeping the 1:M is an M:M squeezed into one key; a date in either entity stores one value where the business has one per pair; a list column breaks the single-valued rule.",
        ar: "«عدّة مجموعات» و«طلاب كثيرون» تجعلان الخطّ ‎M:M، وتاريخ الانضمام قيمة واحدة لكل طالب في كل مجموعة — خاصية مخفيّة. وحلّها يعطي كيان تقاطع يحمل <code>Join Date</code>، وعلاقتَي ‎1:M رِجلا الغراب فيهما عنده، ومعرّفًا مقضّبًا من الأبوين كليهما. أمّا إبقاء ‎1:M فهو ‎M:M محشورة في مفتاح واحد؛ والتاريخ في أيّ من الكيانين يخزّن قيمة واحدة حيث للعمل قيمة لكل زوج؛ وعمود القائمة يكسر قاعدة القيمة الواحدة."
      }
    },

    {
      id: "t5bx16", type: "tf", level: "easy",
      topics: ["t5-pair-test", "t5-misplaced-attribute", "t5-tv-show-cleaning"],
      q: {
        en: "The cleaning agency wants each company's phone number. Because <code>CLEANING COMPANY</code> takes part in an M:M with <code>CLEANING SERVICE</code>, <code>Phone</code> belongs to that relationship, not to the company.",
        ar: "تريد شركة التنظيف رقم هاتف كل شركة. ولأن <code>CLEANING COMPANY</code> طرف في علاقة ‎M:M مع <code>CLEANING SERVICE</code>، فإن <code>Phone</code> ينتمي إلى تلك العلاقة، لا إلى الشركة."
      },
      truth: false,
      hint: {
        en: "Taking part in an M:M is not the test. Ask: one phone per what?",
        ar: "المشاركة في ‎M:M ليست هي الاختبار. اسأل: هاتف واحد لكل ماذا؟"
      },
      explain: {
        en: "False. Sparkle has one phone whichever service it offers, so the answer to \"one value per what?\" is the company, and <code>Phone</code> stays in <code>CLEANING COMPANY</code>. Only a fact that needs a company <em>and</em> a service — the price, the start date — is hidden by the M:M. Moving the phone onto the relationship would repeat it for every service Sparkle offers.",
        ar: "خطأ. لـ Sparkle هاتف واحد أيًّا كانت الخدمة التي تقدّمها، فجواب «قيمة واحدة لكل ماذا؟» هو الشركة، ويبقى <code>Phone</code> في <code>CLEANING COMPANY</code>. ولا تخفي ‎M:M إلا الحقيقة التي تحتاج شركة <em>و</em>خدمة معًا — كالسعر وتاريخ البدء. ونقل الهاتف إلى العلاقة يكرّره لكل خدمة تقدّمها Sparkle."
      }
    },

    /* ==================================================== the intersection entity */
    {
      id: "t5bx17", type: "ordercode", level: "medium",
      topics: ["t5-cleaning-schedule", "t5-intersection-fks", "t5-intersection-table"],
      q: {
        en: "Build the resolved cleaning model and fix FreshHome's window price to 38, so that the final listing shows the new price. Put the blocks in an order that runs, with every foreign key referencing a table that already exists.",
        ar: "ابنِ نموذج التنظيف المحلول وعدّل سعر النوافذ لدى FreshHome إلى 38، بحيث تُظهر القائمة النهائية السعر الجديد. رتّب الكتل ترتيبًا يعمل، بحيث يشير كل مفتاح أجنبي إلى جدول موجود من قبل."
      },
      items: [
        { code: "CREATE TABLE cleaning_companies (company_id NUMBER PRIMARY KEY,\n  name VARCHAR(20) NOT NULL);\nCREATE TABLE cleaning_services (service_id NUMBER PRIMARY KEY,\n  name VARCHAR(20) NOT NULL);\nINSERT INTO cleaning_companies VALUES (1, 'Sparkle'), (2, 'FreshHome');\nINSERT INTO cleaning_services VALUES (1, 'Windows'), (2, 'Carpets');" },
        { code: "CREATE TABLE cleaning_schedules (\n  company_id NUMBER NOT NULL REFERENCES cleaning_companies(company_id),\n  service_id NUMBER NOT NULL REFERENCES cleaning_services(service_id),\n  start_date DATE NOT NULL,\n  price NUMBER NOT NULL,\n  PRIMARY KEY (company_id, service_id));" },
        { code: "INSERT INTO cleaning_schedules VALUES\n  (1, 1, '2025-02-01', 40), (2, 1, '2026-01-10', 35), (2, 2, '2026-03-01', 70);" },
        { code: "UPDATE cleaning_schedules SET price = 38\nWHERE company_id = 2 AND service_id = 1;" },
        { code: "SELECT c.name AS company, s.name AS service, cs.price\nFROM cleaning_schedules cs\nJOIN cleaning_companies c ON c.company_id = cs.company_id\nJOIN cleaning_services s ON s.service_id = cs.service_id\nORDER BY c.name, s.name;" }
      ],
      answer: [0, 1, 2, 3, 4],
      solution: {
        code: "company   | service | price\nFreshHome | Carpets | 70\nFreshHome | Windows | 38\nSparkle   | Windows | 40",
        en: "Run in alasql in this order. Creating cleaning_schedules first fails, because its parents do not exist; running the UPDATE before the rows are inserted changes 0 rows and the listing shows 35.",
        ar: "نُفّذ في alasql بهذا الترتيب. إنشاء cleaning_schedules أولًا يفشل لأن أبويه غير موجودين؛ وتنفيذ UPDATE قبل إدخال الصفوف يغيّر 0 صفوف فتُظهر القائمة 35."
      },
      hint: {
        en: "The intersection table is the child of both 1:Ms. A child table needs its parents first, and a row must exist before it can be updated.",
        ar: "جدول التقاطع ابنٌ في علاقتَي ‎1:M كلتيهما. والجدول الابن يحتاج أبويه أولًا، والصفّ يجب أن يوجد قبل أن يُحدَّث."
      },
      explain: {
        en: "The parents come first, because <code>cleaning_schedules</code> carries two foreign keys that reference them. Then the intersection table, then its rows — one per company per service — then the price change, which needs the FreshHome–Windows row to exist. The join reads through the intersection table to both parents, so it goes last.",
        ar: "الأبوان أولًا، لأن <code>cleaning_schedules</code> يحمل مفتاحين أجنبيين يشيران إليهما. ثم جدول التقاطع، ثم صفوفه — صفّ لكل شركة في كل خدمة — ثم تعديل السعر، الذي يحتاج أن يكون صفّ FreshHome–Windows موجودًا. والربط يقرأ عبر جدول التقاطع إلى الأبوين، فيأتي أخيرًا."
      }
    },

    {
      id: "t5bx18", type: "error", level: "easy",
      topics: ["t5-intersection-attribute", "t5-cleaning-schedule", "t5-misplaced-attribute"],
      q: {
        en: "A student wrote the resolved cleaning model as text. The price is what one company charges for one service: Sparkle charges 40 for windows, FreshHome 35. Which line puts an attribute in the wrong entity?",
        ar: "كتب طالب نموذج التنظيف المحلول نصًّا. السعر هو ما تتقاضاه شركة واحدة عن خدمة واحدة: Sparkle تتقاضى 40 عن النوافذ، وFreshHome ‏35. أيّ سطر يضع خاصية في الكيان الخطأ؟"
      },
      lang: "text",
      code: "CLEANING COMPANY   # ID, * Name, * Phone\nCLEANING SERVICE   # ID, * Name, * Price\nCLEANING SCHEDULE  * Start Date\nEach CLEANING SCHEDULE must be for one and only one CLEANING COMPANY.\nEach CLEANING SCHEDULE must be for one and only one CLEANING SERVICE.\nEach CLEANING COMPANY may be on one or more CLEANING SCHEDULEs.",
      answer: 2,
      solution: {
        code: "CLEANING COMPANY   # ID, * Name, * Phone\nCLEANING SERVICE   # ID, * Name\nCLEANING SCHEDULE  * Start Date, * Price\nEach CLEANING SCHEDULE must be for one and only one CLEANING COMPANY.\nEach CLEANING SCHEDULE must be for one and only one CLEANING SERVICE.\nEach CLEANING COMPANY may be on one or more CLEANING SCHEDULEs.",
        en: "Price leaves CLEANING SERVICE and joins Start Date in CLEANING SCHEDULE.",
        ar: "يخرج Price من CLEANING SERVICE وينضمّ إلى Start Date في CLEANING SCHEDULE."
      },
      hint: {
        en: "Windows has two prices in the example. How many values can one attribute of CLEANING SERVICE hold for windows?",
        ar: "للنوافذ سعران في المثال. كم قيمة يمكن أن تحملها خاصية واحدة في CLEANING SERVICE للنوافذ؟"
      },
      explain: {
        en: "Windows costs 40 at Sparkle and 35 at FreshHome, so a <code>Price</code> in <code>CLEANING SERVICE</code> holds one value where the business has one per company per service. That is an intersection attribute, and it belongs in <code>CLEANING SCHEDULE</code> beside <code>Start Date</code>. <code>Phone</code> is one per company and is right where it is; the three sentences are the resolution read correctly.",
        ar: "تكلّف النوافذ 40 لدى Sparkle و35 لدى FreshHome، فالخاصية <code>Price</code> في <code>CLEANING SERVICE</code> تحمل قيمة واحدة حيث للعمل قيمة لكل شركة في كل خدمة. تلك خاصية تقاطع، ومكانها <code>CLEANING SCHEDULE</code> بجانب <code>Start Date</code>. و<code>Phone</code> واحد لكل شركة وهو في مكانه الصحيح؛ والجمل الثلاث هي قراءة الحلّ قراءة صحيحة."
      }
    },

    {
      id: "t5bx19", type: "output", level: "easy",
      topics: ["t5-viewing-record", "t5-intersection-instance", "t5-intersection-table"],
      q: {
        en: "The TV channel's <code>viewing_records (show_id, person_id, rating)</code>: Huda (1) rated News (1) 4 and Drama (2) 2; Ahmad (2) rated News 5; Mona (3) rated Drama 4. The channel asks how many shows each viewer rated, and their average. What does this query return?",
        ar: "جدول القناة <code>viewing_records (show_id, person_id, rating)</code>: قيّمت Huda ‏(1) برنامج News ‏(1) بـ 4 وDrama ‏(2) بـ 2؛ وقيّم Ahmad ‏(2) News بـ 5؛ وقيّمت Mona ‏(3) Drama بـ 4. تسأل القناة كم برنامجًا قيّم كل مشاهد، وما متوسّط تقييمه. ماذا يُرجع هذا الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT p.name, COUNT(*) AS shows, AVG(v.rating) AS avg_rating\nFROM viewing_records v\nJOIN persons p ON p.person_id = v.person_id\nGROUP BY p.name\nORDER BY p.name;",
      options: [
        { en: "Drama 2 3 · News 2 4.5", ar: "Drama 2 3 · News 2 4.5" },
        { en: "Ahmad 1 5 · Huda 2 3 · Mona 1 4", ar: "Ahmad 1 5 · Huda 2 3 · Mona 1 4" },
        { en: "Ahmad 1 5 · Huda 1 4 · Mona 1 4", ar: "Ahmad 1 5 · Huda 1 4 · Mona 1 4" },
        { en: "Ahmad 2 5 · Huda 2 3 · Mona 2 4", ar: "Ahmad 2 5 · Huda 2 3 · Mona 2 4" }
      ],
      answer: 1,
      solution: {
        out: "name  | shows | avg_rating\nAhmad | 1     | 5\nHuda  | 2     | 3\nMona  | 1     | 4",
        en: "Run in alasql.",
        ar: "نُفّذ في alasql."
      },
      hint: {
        en: "One row of viewing_records is one person with one show. Group them by the person.",
        ar: "صفّ واحد من viewing_records هو شخص واحد مع برنامج واحد. جمّعها حسب الشخص."
      },
      explain: {
        en: "Each viewing record is one pair, so counting a person's rows counts the shows they rated: Huda has two (4 and 2, average 3), Ahmad and Mona one each. The Drama/News answer is the lesson's per-show query — the same table grouped from the other parent. Huda counted once forgets that the intersection table holds one row per pair, not one per person.",
        ar: "كل سجلّ مشاهدة زوج واحد، فعدّ صفوف الشخص يعدّ البرامج التي قيّمها: لـ Huda اثنان (4 و2، والمتوسّط 3)، ولكلٍّ من Ahmad وMona واحد. وجواب Drama/News هو استعلام الدرس لكل برنامج — الجدول نفسه مجمّعًا من الأب الآخر. ومن عدّ Huda مرّة واحدة نسي أن جدول التقاطع يحمل صفًّا لكل زوج، لا لكل شخص."
      }
    },

    {
      id: "t5bx20", type: "compare", level: "medium",
      topics: ["t5-intersection-table", "t5-parent-without-child", "t5-cleaning-schedule"],
      q: {
        en: "The agency adds a fourth service, Ovens; no company offers it yet. <code>cleaning_schedules</code> holds Sparkle–Windows, Sparkle–Kitchens, FreshHome–Windows and FreshHome–Carpets. The manager wants every service with the number of companies that offer it, so she can see which ones need a provider. Which statement is right?",
        ar: "تضيف الشركة خدمة رابعة هي Ovens؛ لا تقدّمها أيّ شركة بعد. يحمل <code>cleaning_schedules</code> الأزواج Sparkle–Windows وSparkle–Kitchens وFreshHome–Windows وFreshHome–Carpets. تريد المديرة كل خدمة مع عدد الشركات التي تقدّمها، لترى أيّها يحتاج مزوّدًا. أيّ العبارات صحيحة؟"
      },
      lang: "sql",
      codeA: "SELECT s.name, COUNT(*) AS companies\nFROM cleaning_services s\nJOIN cleaning_schedules cs ON cs.service_id = s.service_id\nGROUP BY s.name\nORDER BY s.name;",
      codeB: "SELECT s.name, COUNT(cs.company_id) AS companies\nFROM cleaning_services s\nLEFT JOIN cleaning_schedules cs ON cs.service_id = s.service_id\nGROUP BY s.name\nORDER BY s.name;",
      options: [
        { en: "A is right: a service no company provides is not part of the model yet", ar: "A هو الصحيح: الخدمة التي لا تقدّمها أيّ شركة ليست جزءًا من النموذج بعد" },
        { en: "B is right: it keeps Ovens and shows 0, which the dashed half at CLEANING SERVICE allows", ar: "B هو الصحيح: يُبقي Ovens ويُظهر 0، وهو ما يسمح به النصف المتقطّع عند CLEANING SERVICE" },
        { en: "They return the same rows, because every service is in cleaning_services", ar: "يُرجعان الصفوف نفسها، لأن كل خدمة موجودة في cleaning_services" },
        { en: "B is right only if it uses COUNT(*), so that every service is counted", ar: "B صحيح فقط إذا استعمل COUNT(*)، كي تُعدّ كل خدمة" }
      ],
      answer: 1,
      solution: {
        out: "A: Carpets 1 · Kitchens 1 · Windows 2\nB: Carpets 1 · Kitchens 1 · Ovens 0 · Windows 2",
        en: "Both run in alasql. B with COUNT(*) instead shows Ovens 1.",
        ar: "نُفّذ الاثنان في alasql. وB مع COUNT(*) بدلًا من ذلك يُظهر Ovens ‏1."
      },
      hint: {
        en: "Ovens has no row in the intersection table. Which join keeps a parent with no children, and what does each COUNT count?",
        ar: "ليس لـ Ovens صفّ في جدول التقاطع. أيّ ربط يُبقي أبًا بلا أبناء، وماذا يعدّ كل COUNT؟"
      },
      explain: {
        en: "The half at <code>CLEANING SERVICE</code> stayed dashed through the resolution: a service may be on no schedule. A's inner join drops Ovens — exactly the row the manager needs. B's LEFT JOIN keeps it, and <code>COUNT(cs.company_id)</code> counts no company: 0. <code>COUNT(*)</code> would count the padded row and show 1, a provider that does not exist.",
        ar: "بقي النصف عند <code>CLEANING SERVICE</code> متقطّعًا بعد الحلّ: قد لا تكون الخدمة في أيّ جدول مواعيد. الربط الداخلي في A يُسقط Ovens — وهو الصفّ الذي تحتاجه المديرة بالضبط. أمّا LEFT JOIN في B فيُبقيه، و<code>COUNT(cs.company_id)</code> لا يعدّ أيّ شركة: 0. و<code>COUNT(*)</code> كان سيعدّ الصفّ المكمَّل ويُظهر 1، أي مزوّدًا غير موجود."
      }
    },

    {
      id: "t5bx21", type: "complete", level: "easy",
      topics: ["t5-intersection-fks", "t5-two-one-to-many", "t5-cleaning-schedule"],
      q: {
        en: "A customer asks which companies clean windows, cheapest first. Using <code>cleaning_companies</code>, <code>cleaning_services</code> and <code>cleaning_schedules (company_id, service_id, start_date, price)</code>, what completes the query?",
        ar: "يسأل زبون أيّ الشركات تنظّف النوافذ، الأرخص أولًا. باستخدام <code>cleaning_companies</code> و<code>cleaning_services</code> و<code>cleaning_schedules (company_id, service_id, start_date, price)</code>، ما الذي يُكمل الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT c.name, cs.price\nFROM cleaning_schedules cs\nJOIN cleaning_companies c ON c.company_id = cs.company_id\n____\nWHERE s.name = 'Windows'\nORDER BY cs.price;",
      options: [
        { code: "JOIN cleaning_services s ON s.service_id = c.company_id" },
        { code: "JOIN cleaning_services s ON s.service_id = cs.service_id" },
        { code: "JOIN cleaning_services s ON s.service_id = cs.company_id" },
        { code: "JOIN cleaning_services s ON s.name = c.name" }
      ],
      answer: 1,
      solution: {
        code: "SELECT c.name, cs.price\nFROM cleaning_schedules cs\nJOIN cleaning_companies c ON c.company_id = cs.company_id\nJOIN cleaning_services s ON s.service_id = cs.service_id\nWHERE s.name = 'Windows'\nORDER BY cs.price;",
        en: "Run in alasql: FreshHome 35, then Sparkle 40. Joining service_id to a company id instead returns Sparkle 40 and Sparkle 90 — Sparkle is company 1, the same number as Windows. Joining on the names returns no rows.",
        ar: "نُفّذ في alasql: FreshHome ‏35، ثم Sparkle ‏40. أمّا ربط service_id برقم شركة فيُرجع Sparkle ‏40 وSparkle ‏90 — لأن Sparkle هي الشركة 1، الرقم نفسه الذي لـ Windows. والربط على الأسماء لا يُرجع أيّ صفّ."
      },
      hint: {
        en: "The intersection table holds two foreign keys. Each parent joins on its own one.",
        ar: "يحمل جدول التقاطع مفتاحين أجنبيين. وكل أب يُربط على مفتاحه هو."
      },
      explain: {
        en: "<code>cleaning_schedules</code> is the child of two 1:Ms, so it joins to <code>cleaning_companies</code> on <code>company_id</code> and to <code>cleaning_services</code> on <code>service_id</code>. The other joins match a service id to a company id, or a service name to a company name: values that are not a relationship. They still run: the two id joins return Sparkle's kitchens as if they were windows, and the name join returns nothing.",
        ar: "<code>cleaning_schedules</code> ابنٌ في علاقتَي ‎1:M، فيُربط بـ <code>cleaning_companies</code> على <code>company_id</code> وبـ <code>cleaning_services</code> على <code>service_id</code>. أمّا الروابط الأخرى فتطابق رقم خدمة برقم شركة، أو اسم خدمة باسم شركة: قيم لا تربطها علاقة. وهي تعمل مع ذلك: فالربطان على الأرقام يُرجعان مطابخ Sparkle كأنها نوافذ، والربط على الأسماء لا يُرجع شيئًا."
      }
    },

    /* ==================================================== barred relationships and UIDs */
    {
      id: "t5bx22", type: "mcq", level: "medium",
      topics: ["t5-mixed-uid", "t5-uid-often", "t5-unique-together"],
      q: {
        en: "The school now lets a student retake a subject in a later term, and each attempt has its own grade. Omar got a C in Maths in term 2026-1 and retakes it in 2026-2. With the two bars as the whole UID, his second Maths enrollment is refused. What should the UID of <code>ENROLLMENT</code> become?",
        ar: "صارت المدرسة تسمح للطالب بإعادة مادّة في فصل لاحق، ولكل محاولة درجتها. نال Omar درجة C في Maths في الفصل 2026-1 ويعيدها في 2026-2. ومع القضيبين وحدهما معرّفًا كاملًا، يُرفض تسجيله الثاني في Maths. ماذا يجب أن يصير معرّف <code>ENROLLMENT</code>؟"
      },
      options: [
        { en: "<code># Term</code> alone", ar: "<code># Term</code> وحده" },
        { en: "<code># Term</code> plus <code>STUDENT</code>, with only the <code>STUDENT</code> line barred", ar: "<code># Term</code> مع <code>STUDENT</code>، والقضيب على خطّ <code>STUDENT</code> وحده" },
        { en: "<code>STUDENT</code> plus <code>SUBJECT</code>, unchanged, with a second attribute <code>o Retake Grade</code>", ar: "<code>STUDENT</code> مع <code>SUBJECT</code> دون تغيير، مع خاصية ثانية <code>o Retake Grade</code>" },
        { en: "<code># Term</code> plus <code>STUDENT</code> plus <code>SUBJECT</code>: both bars and a <code>#</code> attribute", ar: "<code># Term</code> مع <code>STUDENT</code> مع <code>SUBJECT</code>: القضيبان وخاصية <code>#</code>" }
      ],
      answer: 3,
      hint: {
        en: "The slides say the UID often comes from the originating relationships. What do you add when one pair may meet more than once?",
        ar: "تقول الشرائح إن المعرّف يأتي غالبًا من العلاقات الأصلية. ماذا تضيف حين يمكن أن يلتقي الزوج الواحد أكثر من مرّة؟"
      },
      explain: {
        en: "One student in one subject can now be several enrollments, one per term, so the bars alone no longer identify one. Adding <code># Term</code> gives a mixed UID: two attempts in different terms differ, and the same attempt entered twice is still refused. A term alone repeats across all students; student plus term would refuse Sara's Maths and Physics in the same term. A <code>Retake Grade</code> column allows exactly one retake and is a repeating attribute.",
        ar: "صار الطالب الواحد في المادّة الواحدة قد يكون عدّة تسجيلات، واحدًا لكل فصل، فلم يعد القضيبان وحدهما يعرّفان تسجيلًا واحدًا. وإضافة <code># Term</code> تعطي معرّفًا مختلطًا (mixed UID): محاولتان في فصلين مختلفين تختلفان، والمحاولة نفسها إن أُدخلت مرّتين تُرفض. أمّا الفصل وحده فيتكرّر بين جميع الطلاب؛ والطالب مع الفصل يرفض Maths وPhysics لـ Sara في الفصل نفسه. وعمود <code>Retake Grade</code> لا يسمح إلا بإعادة واحدة، وهو خاصية متكرّرة."
      }
    },

    {
      id: "t5bx23", type: "write", level: "hard",
      topics: ["t5-composite-pk", "t5-bar-to-column", "t5-mixed-uid"],
      q: {
        en: "The cleaning agency now keeps every price a company has charged for a service, each with the <code>Start Date</code> from which it applies: Sparkle charged 40 for windows from 2025-02-01 and charges 45 from 2026-09-01. The designer adds <code># Start Date</code> beside the two bars at <code>CLEANING SCHEDULE</code>; <code>* Price</code> is mandatory. <code>cleaning_companies(company_id)</code> and <code>cleaning_services(service_id)</code> exist. Write <code>CREATE TABLE cleaning_schedules</code> with <code>company_id</code>, <code>service_id</code>, <code>start_date</code> and <code>price</code>.",
        ar: "صارت شركة التنظيف تحفظ كل سعر تقاضته شركة عن خدمة، ومع كل سعر <code>Start Date</code> الذي يسري منه: تقاضت Sparkle ‏40 عن النوافذ ابتداءً من 2025-02-01، وتتقاضى 45 ابتداءً من 2026-09-01. يضيف المصمّم <code># Start Date</code> بجانب القضيبين عند <code>CLEANING SCHEDULE</code>؛ و<code>* Price</code> إلزامية. الجدولان <code>cleaning_companies(company_id)</code> و<code>cleaning_services(service_id)</code> موجودان. اكتب <code>CREATE TABLE cleaning_schedules</code> بالأعمدة <code>company_id</code> و<code>service_id</code> و<code>start_date</code> و<code>price</code>."
      },
      lang: "sql",
      lines: 7,
      checks: [
        { re: "CREATE\\s+TABLE\\s+cleaning_schedules\\s*\\(", flags: "i",
          label: { en: "creates cleaning_schedules", ar: "ينشئ cleaning_schedules" } },
        { re: "REFERENCES\\s+cleaning_companies\\s*\\(\\s*company_id\\s*\\)", flags: "i",
          label: { en: "company_id references cleaning_companies: bar 1", ar: "company_id يشير إلى cleaning_companies: القضيب الأول" } },
        { re: "REFERENCES\\s+cleaning_services\\s*\\(\\s*service_id\\s*\\)", flags: "i",
          label: { en: "service_id references cleaning_services: bar 2", ar: "service_id يشير إلى cleaning_services: القضيب الثاني" } },
        { re: "PRIMARY\\s+KEY\\s*\\((?=[^)]*\\bcompany_id\\b)(?=[^)]*\\bservice_id\\b)(?=[^)]*\\bstart_date\\b)[^)]*\\)", flags: "i",
          label: { en: "one primary key over company_id, service_id and start_date", ar: "مفتاح أساسي واحد على company_id وservice_id وstart_date" } },
        { re: "price\\s+[^,]*NOT\\s+NULL", flags: "i",
          label: { en: "price is NOT NULL: * Price", ar: "price بقيد NOT NULL: ‏* Price" } }
      ],
      forbid: [
        { re: "\\bUNIQUE\\b", flags: "i",
          label: { en: "separate UNIQUE columns misread a composite UID: only the combination is unique", ar: "أعمدة UNIQUE المنفصلة قراءة خاطئة للمعرّف المركّب: التركيبة وحدها فريدة" } }
      ],
      solution: {
        code: "CREATE TABLE cleaning_schedules (\n  company_id NUMBER NOT NULL REFERENCES cleaning_companies(company_id),\n  service_id NUMBER NOT NULL REFERENCES cleaning_services(service_id),\n  start_date DATE   NOT NULL,\n  price      NUMBER NOT NULL,\n  PRIMARY KEY (company_id, service_id, start_date)\n);",
        en: "Run in alasql: (1, 1, '2025-02-01', 40) and (1, 1, '2026-09-01', 45) are both accepted; (1, 1, '2026-09-01', 50) is refused with \"Cannot insert record, because it already exists in primary key index\".",
        ar: "نُفّذ في alasql: يُقبل (1, 1, '2025-02-01', 40) و(1, 1, '2026-09-01', 45) كلاهما؛ ويُرفض (1, 1, '2026-09-01', 50) بالرسالة \"Cannot insert record, because it already exists in primary key index\"."
      },
      hint: {
        en: "Every component of the UID becomes a column of one primary key: each bar a foreign key, each # attribute an ordinary column.",
        ar: "كل مكوّن من مكوّنات المعرّف يصير عمودًا في مفتاح أساسي واحد: كل قضيب مفتاح أجنبي، وكل خاصية # عمود عادي."
      },
      explain: {
        en: "Read the UID in order: <code># Start Date</code> inside the box, then the two bars to the company and the service. All three become one composite primary key, so Sparkle's two window prices are two rows, and the same price period entered twice is refused. With only <code>(company_id, service_id)</code>, the 2026 price would be refused — Lesson 6's key, right for one price and wrong for a history. Separate <code>UNIQUE</code> columns would allow one row per company.",
        ar: "اقرأ المعرّف بالترتيب: <code># Start Date</code> داخل الصندوق، ثم القضيبان إلى الشركة والخدمة. تصير الثلاثة مفتاحًا أساسيًّا مركّبًا واحدًا، فيكون سعرا النوافذ لدى Sparkle صفّين، وتُرفض فترة السعر نفسها إن أُدخلت مرّتين. ومع <code>(company_id, service_id)</code> وحدهما يُرفض سعر 2026 — وهو مفتاح الدرس 6، الصحيح لسعر واحد والخاطئ لسجلّ أسعار. وأعمدة <code>UNIQUE</code> المنفصلة لا تسمح إلا بصفّ واحد لكل شركة."
      }
    },

    {
      id: "t5bx24", type: "trace", level: "hard",
      topics: ["t5-composite-pk", "t5-duplicate-pair", "t5-unique-together", "t5-intersection-fks"],
      q: {
        en: "The barred cleaning model as Lesson 6 built it: <code>PRIMARY KEY (company_id, service_id)</code> and a foreign key to each parent. Companies: 1 Sparkle, 2 FreshHome. Services: 1 Windows, 2 Carpets, 3 Kitchens. Schedules: Sparkle–Windows 40, Sparkle–Kitchens 90, FreshHome–Windows 35, FreshHome–Carpets 70. The statements run one at a time; a refused one does not stop the next. What does the last query return?",
        ar: "نموذج التنظيف المقضّب كما بناه الدرس 6: <code>PRIMARY KEY (company_id, service_id)</code> ومفتاح أجنبي إلى كل أب. الشركات: 1 Sparkle، و2 FreshHome. والخدمات: 1 Windows، و2 Carpets، و3 Kitchens. والمواعيد: Sparkle–Windows ‏40، وSparkle–Kitchens ‏90، وFreshHome–Windows ‏35، وFreshHome–Carpets ‏70. تُنفَّذ الجمل واحدة واحدة؛ والمرفوضة لا توقف ما بعدها. ماذا يُرجع الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO cleaning_schedules VALUES (2, 3, '2026-11-01', 85);\nINSERT INTO cleaning_schedules VALUES (1, 1, '2026-09-01', 45);\nINSERT INTO cleaning_schedules VALUES (3, 2, '2026-11-01', 60);\nUPDATE cleaning_schedules SET price = 45\nWHERE company_id = 1 AND service_id = 1;\nSELECT c.name, COUNT(*) AS services, SUM(cs.price) AS price_sum\nFROM cleaning_schedules cs\nJOIN cleaning_companies c ON c.company_id = cs.company_id\nGROUP BY c.name\nORDER BY c.name;",
      options: [
        { en: "FreshHome 3 190 · Sparkle 2 135", ar: "FreshHome 3 190 · Sparkle 2 135" },
        { en: "FreshHome 3 190 · Sparkle 3 180", ar: "FreshHome 3 190 · Sparkle 3 180" },
        { en: "FreshHome 2 105 · Sparkle 2 135", ar: "FreshHome 2 105 · Sparkle 2 135" },
        { en: "FreshHome 3 190 · Sparkle 2 130", ar: "FreshHome 3 190 · Sparkle 2 130" }
      ],
      answer: 0,
      solution: {
        out: "name      | services | price_sum\nFreshHome | 3        | 190\nSparkle   | 2        | 135",
        en: "Run in alasql. Statement 2 fails with \"Cannot insert record, because it already exists in primary key index\"; statement 3 with \"Foreign key \"3\" not found in table \"cleaning_companies\"\".",
        ar: "نُفّذ في alasql. تفشل الجملة 2 بالرسالة \"Cannot insert record, because it already exists in primary key index\"، والجملة 3 بالرسالة \"Foreign key \"3\" not found in table \"cleaning_companies\"\"."
      },
      hint: {
        en: "Check each insert against the whole pair, not one column — and against the parents that exist.",
        ar: "افحص كل إدخال مقابل الزوج كاملًا لا عمودًا واحدًا — ومقابل الآباء الموجودين."
      },
      explain: {
        en: "FreshHome–Kitchens is a new pair, though both parts already appear: accepted, so FreshHome has 3 services, 35 + 70 + 85 = 190. A second Sparkle–Windows row is a duplicate pair and is refused by the composite key; company 3 does not exist, so the foreign key refuses it. The update then changes Sparkle's one window price to 45: 45 + 90 = 135. Under this key, a new price replaces the old one; keeping both needs the <code># Start Date</code> of the previous question.",
        ar: "‏FreshHome–Kitchens زوج جديد مع أن جزأيه ظاهران من قبل: يُقبل، فيصير لـ FreshHome ثلاث خدمات، 35 + 70 + 85 = 190. أمّا صفّ ثانٍ لـ Sparkle–Windows فزوج مكرّر يرفضه المفتاح المركّب؛ والشركة 3 غير موجودة فيرفضها المفتاح الأجنبي. ثم يغيّر التحديث سعر نوافذ Sparkle الوحيد إلى 45: ‏45 + 90 = 135. وتحت هذا المفتاح يحلّ السعر الجديد محلّ القديم؛ وحفظ الاثنين يحتاج <code># Start Date</code> من السؤال السابق."
      }
    }
  ]
};
