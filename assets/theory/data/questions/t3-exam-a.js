/* Question bank: T3 chapter test A -- Core. Four questions per lesson, easy and medium. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-exam-a"] = {
  title: { en: "Chapter Test A — Core", ar: "اختبار الفصل A — الأساسيات" },
  intro: {
    en: "24 questions across the whole chapter, four from each lesson: what a relationship is, optionality, cardinality, the diagramming conventions, ERDish, and matrix diagrams. The cases are the chapter's own — H.R., the restaurant, the library and the travel agency. These are the ideas every student must own; none is hard. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الفصل كله، أربعة من كل درس: ما العلاقة، والإلزامية (optionality)، والتعدّدية (cardinality)، وأعراف الرسم، ولغة ERDish، ومخطّطات المصفوفة. والحالات هي حالات الفصل نفسها — الموارد البشرية والمطعم والمكتبة ووكالة السفر. هذه أفكار يجب أن يمتلكها كل طالب، وليس فيها سؤال صعب. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== lesson 1 · what a relationship is */
    {
      id: "t3ax01", type: "fill", level: "easy",
      topics: ["t3-named-both-ends", "t3-name-placement", "t3-lowercase-names"],
      q: {
        en: "The H.R. ERD names the line between <code>DEPARTMENT</code> and <code>LOCATION</code> with <code>located in</code> and <code>address of</code>. Write each name at the end where it belongs.",
        ar: "يسمّي مخطّط الموارد البشرية الخطَّ بين <code>DEPARTMENT</code> و<code>LOCATION</code> بالاسمين <code>located in</code> و<code>address of</code>. اكتب كل اسم عند الطرف الذي ينتمي إليه."
      },
      lang: "text",
      code: "written beside DEPARTMENT:  ____1____\nwritten beside LOCATION:    ____2____",
      blanks: [
        { accept: ["located in"], label: { en: "beside DEPARTMENT", ar: "بجانب DEPARTMENT" } },
        { accept: ["address of", "the address of"], label: { en: "beside LOCATION", ar: "بجانب LOCATION" } }
      ],
      hint: {
        en: "A name sits close to the entity you start from when you say it. Try \"Each DEPARTMENT …\".",
        ar: "يُكتب الاسم قريبًا من الكيان الذي تبدأ منه حين تنطقه. جرّب «Each DEPARTMENT …»."
      },
      explain: {
        en: "Each end carries the name you say when you start from that entity: a department is <code>located in</code> a location, so that name sits beside <code>DEPARTMENT</code>; a location is the <code>address of</code> departments, so that one sits beside <code>LOCATION</code>. Both are lowercase, because capitals are kept for entity names. One line, two names, one per end.",
        ar: "كل طرف يحمل الاسم الذي تقوله حين تبدأ من ذلك الكيان: القسم <code>located in</code> موقعًا، فيُكتب هذا الاسم بجانب <code>DEPARTMENT</code>؛ والموقع هو <code>address of</code> أقسام، فيُكتب بجانب <code>LOCATION</code>. والاسمان بأحرف صغيرة، لأن الأحرف الكبيرة محجوزة لأسماء الكيانات. خطّ واحد واسمان، اسم لكل طرف."
      }
    },
    {
      id: "t3ax02", type: "multi", level: "medium",
      topics: ["t3-business-scenario", "t3-between-entities", "t3-recursive-relationship"],
      q: {
        en: "Each sentence comes from the H.R. scenario. Which of them give the designer a relationship to draw? Choose every one.",
        ar: "كل جملة مأخوذة من سيناريو الموارد البشرية. أيّها يعطي المصمّم علاقةً يرسمها؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "\"Each employee reports to a department.\"", ar: "«Each employee reports to a department.» — كل موظف يتبع قسمًا." },
        { en: "\"We keep track of the job title, max and min salary for each job.\"", ar: "«We keep track of the job title, max and min salary for each job.» — نتابع لكل وظيفة مسمّاها وأعلى راتب وأدناه." },
        { en: "\"All employees hold a job.\"", ar: "«All employees hold a job.» — كل الموظفين يشغلون وظيفة." },
        { en: "\"Each employee is allocated a unique employee number.\"", ar: "«Each employee is allocated a unique employee number.» — لكل موظف رقم موظف فريد." },
        { en: "\"Every employee has one manager … each manager can manage several employees.\"", ar: "«Every employee has one manager … each manager can manage several employees.» — لكل موظف مدير واحد، وكل مدير قد يدير عدّة موظفين." }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "A relationship joins two entities, or an entity and itself. Is the other noun in each sentence an entity, or a fact about one?",
        ar: "العلاقة تربط كيانين، أو كيانًا بنفسه. هل الاسم الآخر في كل جملة كيان، أم حقيقة عن كيان؟"
      },
      explain: {
        en: "\"Reports to a department\" links EMPLOYEE and DEPARTMENT; \"hold a job\" links EMPLOYEE and JOB; and \"has one manager\" links EMPLOYEE to itself, because managers are employees — a recursive relationship. Title and salaries are attributes of JOB, and the employee number is EMPLOYEE's identifier: relationships exist only between entities, never to an attribute. The manager sentence is the one most often missed, because only one noun appears at both ends.",
        ar: "«reports to a department» تربط EMPLOYEE وDEPARTMENT، و«hold a job» تربط EMPLOYEE وJOB، و«has one manager» تربط EMPLOYEE بنفسه لأن المديرين موظفون — علاقة ذاتية (recursive relationship). أمّا المسمّى والرواتب فخصائص لـ JOB، ورقم الموظف معرِّف EMPLOYEE: العلاقات لا تقوم إلا بين كيانات، ولا تقوم أبدًا مع خاصية. وجملة المدير هي الأكثر إغفالًا، لأن الكيان نفسه يظهر عند الطرفين."
      }
    },
    {
      id: "t3ax03", type: "tf", level: "easy",
      topics: ["t3-recursive-relationship", "t3-named-both-ends"],
      q: {
        en: "The manager line leaves <code>EMPLOYEE</code> and comes back to it. Since both ends are the same entity, one name is enough: the line is simply called <code>manages</code>.",
        ar: "خطّ المدير يخرج من <code>EMPLOYEE</code> ويعود إليه. وبما أن الطرفين هما الكيان نفسه، يكفي اسم واحد: يُسمّى الخطّ ببساطة <code>manages</code>."
      },
      truth: false,
      hint: {
        en: "Read the line from each end. Does \"Each EMPLOYEE manages …\" say the same thing from both?",
        ar: "اقرأ الخطّ من كل طرف. هل تقول «Each EMPLOYEE manages …» الشيء نفسه من الطرفين؟"
      },
      explain: {
        en: "False. A recursive relationship is still bi-directional, and each end still has its own name: <code>managed by</code> at one end, <code>manager of</code> at the other. Here the names matter even more than usual, because the entity name alone cannot tell the two readings apart. With only \"manages\", nobody can say which row is the manager.",
        ar: "خطأ. العلاقة الذاتية تبقى ثنائية الاتجاه، ولكل طرف اسمه: <code>managed by</code> عند طرف و<code>manager of</code> عند الآخر. بل إن الاسمين هنا أهمّ من المعتاد، لأن اسم الكيان وحده لا يميّز القراءتين. ومع «manages» وحدها لا يستطيع أحد أن يقول أيّ الصفّين هو المدير."
      }
    },
    {
      id: "t3ax04", type: "mcq", level: "medium",
      topics: ["t3-significance", "t3-business-rule", "t3-relationship"],
      q: {
        en: "A designer adds a line from <code>EMPLOYEE</code> to <code>COUNTRY</code> \"because every employee lives in some country\". Nothing in the H.R. scenario asks to record or look up where employees live. Unsure, the designer offers to draw it dashed \"so it costs nothing\". What is the right response?",
        ar: "يضيف مصمّم خطًّا من <code>EMPLOYEE</code> إلى <code>COUNTRY</code> «لأن كل موظف يعيش في بلد ما». ولا شيء في سيناريو الموارد البشرية يطلب تسجيل مكان سكن الموظفين أو البحث عنه. ولأنه غير متأكّد، يقترح أن يرسمه متقطّعًا «حتى لا يكلّف شيئًا». ما الردّ الصحيح؟"
      },
      options: [
        { en: "Keep it, but solid: it is true that every employee lives in a country", ar: "أبقِه، لكن متّصلًا: صحيح أن كل موظف يعيش في بلد" },
        { en: "Keep it dashed: an optional line refuses nothing, so it does no harm", ar: "أبقِه متقطّعًا: الخطّ الاختياري لا يرفض شيئًا، فلا ضرر منه" },
        { en: "Leave it out: a relationship must be significant to the business, and H.R. has not asked for this one", ar: "احذفه: يجب أن تكون العلاقة ذات أهمية للعمل، والموارد البشرية لم تطلب هذه" },
        { en: "Replace it with a <code>* Country</code> attribute in <code>EMPLOYEE</code>", ar: "استبدل به خاصية <code>* Country</code> في <code>EMPLOYEE</code>" }
      ],
      answer: 2,
      hint: {
        en: "Who decides whether a link belongs on the ERD — the world, or the business?",
        ar: "من يقرّر أن رابطًا ما ينتمي إلى المخطّط — العالم، أم العمل؟"
      },
      explain: {
        en: "A relationship represents something of significance to the business; being true in the world is not enough. Drawing it dashed does not make it free: every line becomes a foreign key column, and this one would be a column nobody fills and nobody trusts. Hiding the country in an attribute is the Chapter 2 defect, and the business has not asked for it either. If H.R. later says it needs the link, the line goes in then — a business rule decides.",
        ar: "العلاقة تمثّل شيئًا ذا أهمية (significance) للعمل؛ ولا يكفي أن تكون صحيحة في الواقع. ورسمها متقطّعة لا يجعلها مجّانية: كل خطّ يصبح عمود مفتاح أجنبي، وهذا سيكون عمودًا لا يملؤه أحد ولا يثق به أحد. وإخفاء البلد في خاصية هو عيب الفصل الثاني، والعمل لم يطلبه أصلًا. وإن قالت الموارد البشرية لاحقًا إنها تحتاج الرابط، يُرسم الخطّ حينها — قاعدة العمل هي التي تقرّر."
      }
    },

    /* ==================================================== lesson 2 · optionality */
    {
      id: "t3ax05", type: "fill", level: "easy",
      topics: ["t3-must-may-wording", "t3-word-from-half", "t3-must-be-or-must"],
      q: {
        en: "Each line says, in brackets, what the half beside its first entity looks like. Write the full optionality word: <code>must</code>, <code>must be</code>, <code>may</code> or <code>may be</code>.",
        ar: "كل سطر يذكر بين قوسين شكل النصف المجاور لكيانه الأول. اكتب كلمة الإلزامية كاملة: <code>must</code> أو <code>must be</code> أو <code>may</code> أو <code>may be</code>."
      },
      lang: "erdish",
      code: "Each DEPARTMENT ____1____ responsible for one or more EMPLOYEEs.   (dashed)\nEach BOOK ____2____ written by one and only one AUTHOR.   (solid)\nEach EMPLOYEE ____3____ mentor one or more EMPLOYEEs.   (dashed)",
      blanks: [
        { accept: ["may be"], label: { en: "1", ar: "1" } },
        { accept: ["must be"], label: { en: "2", ar: "2" } },
        { accept: ["may"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "The half gives must or may. The relationship name that follows decides whether \"be\" is needed to make English.",
        ar: "النصف يعطي must أو may. واسم العلاقة الذي يليها يقرّر هل تلزم «be» لتستقيم الجملة."
      },
      explain: {
        en: "Dashed means may, solid means must. Then the name decides the grammar: \"may be responsible for\", \"must be written by\", but \"may mentor\" — \"may be mentor\" is not a sentence. The meaning of must and must be is the same; only the English changes. The commonest slip is to take the word from the wrong half: always use the half beside the entity the sentence starts from.",
        ar: "المتقطّع يعني may، والمتّصل يعني must. ثم يقرّر الاسم القواعد: «may be responsible for» و«must be written by»، لكن «may mentor» — فـ«may be mentor» ليست جملة. ومعنى must وmust be واحد؛ لا يتغيّر إلا التركيب. وأكثر الزلّات شيوعًا أخذ الكلمة من النصف الخطأ: استعمل دائمًا النصف المجاور للكيان الذي تبدأ منه الجملة."
      }
    },
    {
      id: "t3ax06", type: "mcq", level: "medium",
      topics: ["t3-optionality-per-end", "t3-dashed-line", "t3-optionality-from-scenario"],
      q: {
        en: "The library adds Jane Austen to its authors before any of her books arrives, and wants that to be allowed. What does this fact decide on the <code>BOOK</code> – <code>AUTHOR</code> line?",
        ar: "تضيف المكتبة Jane Austen إلى مؤلفيها قبل وصول أيّ من كتبها، وتريد أن يكون ذلك مسموحًا. ماذا تقرّر هذه الحقيقة على خطّ <code>BOOK</code> – <code>AUTHOR</code>؟"
      },
      options: [
        { en: "The half beside <code>BOOK</code> is dashed: a book may have no author", ar: "النصف المجاور لـ <code>BOOK</code> متقطّع: قد يكون كتاب بلا مؤلف" },
        { en: "The whole line is dashed: the relationship is optional", ar: "الخطّ كله متقطّع: العلاقة اختيارية" },
        { en: "The end at <code>AUTHOR</code> becomes a crow's foot: an author has one or more books", ar: "يصبح الطرف عند <code>AUTHOR</code> قدم غراب: للمؤلف كتاب أو أكثر" },
        { en: "The half beside <code>AUTHOR</code> is dashed: each AUTHOR may be the author of books", ar: "النصف المجاور لـ <code>AUTHOR</code> متقطّع: كل AUTHOR قد يكون مؤلف كتب" }
      ],
      answer: 3,
      hint: {
        en: "Austen is an instance of which entity? That entity's question is the one this fact answers.",
        ar: "Austen نسخة من أيّ كيان؟ سؤال ذلك الكيان هو الذي تجيب عنه هذه الحقيقة."
      },
      explain: {
        en: "An author with zero books answers the optionality question asked of an author, so it settles only the half beside <code>AUTHOR</code>: dashed, may be. It says nothing about books, which still must have an author — optionality is answered one end at a time, never for the whole line. A crow's foot is cardinality, how many, which this fact does not address.",
        ar: "مؤلف بلا كتب يجيب عن سؤال الإلزامية الموجَّه إلى المؤلف، فلا يحسم إلا النصف المجاور لـ <code>AUTHOR</code>: متقطّع، may be. ولا يقول شيئًا عن الكتب، التي ما زال يجب أن يكون لها مؤلف — فالإلزامية يُجاب عنها طرفًا طرفًا، لا للخطّ كله. أمّا قدم الغراب فتعدّدية، أي «كم؟»، وهذه الحقيقة لا تتناولها."
      }
    },
    {
      id: "t3ax07", type: "contrast", level: "medium",
      topics: ["t3-optionality-to-not-null", "t3-must-without-column", "t3-nullable-manager-id"],
      q: {
        en: "The tables are built with each foreign key in the table at the crow's-foot end. Sort each sentence: does it make a foreign key column <code>NOT NULL</code>, or does it put <code>NOT NULL</code> on no column at all?",
        ar: "بُنيت الجداول وكل مفتاح أجنبي في جدول طرف قدم الغراب. صنّف كل جملة: هل تجعل عمود مفتاح أجنبي <code>NOT NULL</code>، أم لا تضع <code>NOT NULL</code> على أيّ عمود؟"
      },
      concepts: [
        { en: "Makes a foreign key column NOT NULL", ar: "تجعل عمود مفتاح أجنبي NOT NULL" },
        { en: "Puts NOT NULL on no column", ar: "لا تضع NOT NULL على أيّ عمود" }
      ],
      rows: [
        { s: { en: "Each EMPLOYEE must work in one and only one DEPARTMENT.", ar: "Each EMPLOYEE must work in one and only one DEPARTMENT." }, a: 0 },
        { s: { en: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs.", ar: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs." }, a: 1 },
        { s: { en: "Each CUSTOMER must place one or more ORDERs.", ar: "Each CUSTOMER must place one or more ORDERs." }, a: 1 },
        { s: { en: "Each LANDMARK must be located in one and only one COUNTRY.", ar: "Each LANDMARK must be located in one and only one COUNTRY." }, a: 0 },
        { s: { en: "Each EMPLOYEE may be managed by one and only one EMPLOYEE.", ar: "Each EMPLOYEE may be managed by one and only one EMPLOYEE." }, a: 1 },
        { s: { en: "Each PRODUCT must be classified by one and only one PRODUCT TYPE.", ar: "Each PRODUCT must be classified by one and only one PRODUCT TYPE." }, a: 0 }
      ],
      hint: {
        en: "Two things must both be true: the sentence says must, and it starts from the entity whose table holds the key.",
        ar: "يجب أن يصحّ أمران معًا: أن تقول الجملة must، وأن تبدأ من الكيان الذي يحمل جدولُه المفتاح."
      },
      explain: {
        en: "<code>NOT NULL</code> lands on a key column only when the must belongs to the entity whose table holds the key — the singular sentence: <code>employees.department_id</code>, <code>landmarks.country_id</code>, <code>products.product_type_id</code>. \"Each CUSTOMER must place one or more ORDERs\" is the tempting one: it says must, but <code>customers</code> has no order column, so the application keeps it. The two may sentences declare nothing; <code>manager_id</code> exists but stays nullable.",
        ar: "لا يقع <code>NOT NULL</code> على عمود مفتاح إلا إذا كان الـ must للكيان الذي يحمل جدولُه المفتاح — أي الجملة المفردة: <code>employees.department_id</code> و<code>landmarks.country_id</code> و<code>products.product_type_id</code>. والجملة المغرية هي «Each CUSTOMER must place one or more ORDERs»: فيها must، لكن <code>customers</code> لا عمود فيه للطلبات، فيحفظها التطبيق. وجملتا may لا تُعلنان شيئًا؛ و<code>manager_id</code> موجود لكنه يبقى قابلًا لـ NULL."
      }
    },
    {
      id: "t3ax08", type: "tf", level: "medium",
      topics: ["t3-recursive-optionality", "t3-nullable-manager-id"],
      q: {
        en: "The slides' scenario says the managing director manages him/herself. So the slides draw the <code>managed by</code> half of the manager line solid: each EMPLOYEE must be managed by one and only one EMPLOYEE.",
        ar: "يقول سيناريو الشرائح إن المدير العام يدير نفسه. لذلك ترسم الشرائح نصف <code>managed by</code> من خطّ المدير متّصلًا: كل EMPLOYEE يجب أن يُدار من EMPLOYEE واحد فقط."
      },
      truth: false,
      hint: {
        en: "Recall the slides' own two sentences for the loop. Which word do both of them use?",
        ar: "تذكّر جملتي الشرائح نفسيهما لهذه الحلقة. أيّ كلمة تستعملها الجملتان كلتاهما؟"
      },
      explain: {
        en: "False. The slides read both ends with may: \"Each EMPLOYEE may be managed by one and only one EMPLOYEE. Each EMPLOYEE may manage one or more EMPLOYEEs.\" Someone sits at the top, and in the lesson's data Dana's <code>manager_id</code> is empty — which only a dashed half allows. A solid half would make <code>manager_id</code> <code>NOT NULL</code> and force the top person to point at herself.",
        ar: "خطأ. تقرأ الشرائح الطرفين بـ may: «Each EMPLOYEE may be managed by one and only one EMPLOYEE. Each EMPLOYEE may manage one or more EMPLOYEEs.» فهناك من يقف في القمّة، وفي بيانات الدرس عمود <code>manager_id</code> لـ Dana فارغ — وهذا لا يسمح به إلا نصف متقطّع. ولو كان النصف متّصلًا لصار <code>manager_id</code> بقيد <code>NOT NULL</code>، ولاضطُرّت من في القمّة أن تشير إلى نفسها."
      }
    },

    /* ==================================================== lesson 3 · cardinality */
    {
      id: "t3ax09", type: "tf", level: "easy",
      topics: ["t3-crows-foot", "t3-symbol-at-far-end"],
      q: {
        en: "On the <code>EMPLOYEE</code> – <code>DEPARTMENT</code> line the crow's foot is where the line meets <code>EMPLOYEE</code>. It says that an employee may work in more than one department.",
        ar: "على خطّ <code>EMPLOYEE</code> – <code>DEPARTMENT</code> تقع قدم الغراب حيث يلتقي الخطّ بـ <code>EMPLOYEE</code>. وهي تعني أن الموظف قد يعمل في أكثر من قسم."
      },
      truth: false,
      hint: {
        en: "A symbol counts the entity it touches. Which sentence ends at EMPLOYEE?",
        ar: "الرمز يعدّ الكيان الذي يلمسه. أيّ جملة تنتهي عند EMPLOYEE؟"
      },
      explain: {
        en: "False. A crow's foot means one or more of the entity it touches, so it belongs to the sentence that ends there: \"Each DEPARTMENT may be responsible for one or more EMPLOYEEs.\" The other reading ends at <code>DEPARTMENT</code>, where there is a single toe: each employee works in one and only one department. Reading the symbol beside the entity you start from is the classic swap.",
        ar: "خطأ. قدم الغراب تعني واحدًا أو أكثر من الكيان الذي تلمسه، فهي للجملة التي تنتهي عنده: «Each DEPARTMENT may be responsible for one or more EMPLOYEEs.» أمّا القراءة الأخرى فتنتهي عند <code>DEPARTMENT</code>، وهناك إصبع واحدة: كل موظف يعمل في قسم واحد فقط. وقراءة الرمز بجانب الكيان الذي تبدأ منه هي الخلط الشائع."
      }
    },
    {
      id: "t3ax10", type: "output", level: "medium",
      topics: ["t3-min-max", "t3-singular-or-plural", "t3-customer-order"],
      q: {
        en: "The restaurant's tables, built from the slides' model: customers 1 Linda, 2 Krishna, 3 Mel; orders 10 and 102 (customer 1), 77 (customer 2), 100 (customer 3). Two more orders arrive, then the query counts each customer's orders and reports the fewest and the most. What does it return?",
        ar: "جداول المطعم مبنيّة من نموذج الشرائح: الزبائن 1 Linda و2 Krishna و3 Mel؛ والطلبات 10 و102 (للزبون 1) و77 (للزبون 2) و100 (للزبون 3). يصل طلبان آخران، ثم يعدّ الاستعلام طلبات كل زبون ويعرض أقلّها وأكثرها. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "INSERT INTO orders VALUES (103, 1);\nINSERT INTO orders VALUES (104, 3);\n\nSELECT MIN(t.n) AS fewest, MAX(t.n) AS most\nFROM (SELECT c.customer_id, COUNT(o.order_no) AS n\n      FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id\n      GROUP BY c.customer_id) AS t;",
      blanks: [
        { accept: ["1"], label: { en: "fewest", ar: "fewest" } },
        { accept: ["3"], label: { en: "most", ar: "most" } }
      ],
      solution: { out: "fewest | most\n1 | 3" },
      hint: {
        en: "After the inserts Linda has three orders, Krishna one, Mel two.",
        ar: "بعد الإضافتين لـ Linda ثلاثة طلبات، ولـ Krishna طلب واحد، ولـ Mel طلبان."
      },
      explain: {
        en: "Linda 3, Krishna 1, Mel 2, so fewest 1 and most 3. The 1 matches the minimum the ERD promises — \"must place\", a solid half, at least one. The 3 is only today's count: the crow's foot says one or more, never three, and next week the most may be ten. Cardinality answers singular or plural; the numbers live in the rows.",
        ar: "‏Linda 3 وKrishna 1 وMel 2، فالأقلّ 1 والأكثر 3. الرقم 1 يوافق الحدّ الأدنى الذي يعد به المخطّط — «must place»، نصف متّصل، واحد على الأقل. أمّا 3 فعدد اليوم فقط: قدم الغراب تقول واحدًا أو أكثر، لا ثلاثة أبدًا، وقد يصير الأكثر عشرة في الأسبوع القادم. التعدّدية تجيب بمفرد أو جمع؛ والأعداد تعيش في الصفوف."
      }
    },
    {
      id: "t3ax11", type: "match", level: "medium",
      topics: ["t3-key-at-crows-foot", "t3-crows-foot"],
      q: {
        en: "Each sentence is the plural reading of a relationship. Match it to the foreign key column that implements the relationship.",
        ar: "كل جملة هي القراءة الجمعية لعلاقة. صِلها بعمود المفتاح الأجنبي الذي ينفّذ العلاقة."
      },
      leftHead: { en: "Plural reading", ar: "القراءة الجمعية" },
      rightHead: { en: "Foreign key column", ar: "عمود المفتاح الأجنبي" },
      pairs: [
        { l: { en: "Each AUTHOR may be the author of one or more BOOKs.", ar: "Each AUTHOR may be the author of one or more BOOKs." },
          r: { en: "<code>books.author_id</code>", ar: "<code>books.author_id</code>" } },
        { l: { en: "Each LOCATION may be the address of one or more DEPARTMENTs.", ar: "Each LOCATION may be the address of one or more DEPARTMENTs." },
          r: { en: "<code>departments.location_id</code>", ar: "<code>departments.location_id</code>" } },
        { l: { en: "Each WAREHOUSE may store one or more ITEMs.", ar: "Each WAREHOUSE may store one or more ITEMs." },
          r: { en: "<code>items.warehouse_id</code>", ar: "<code>items.warehouse_id</code>" } },
        { l: { en: "Each CUSTOMER must place one or more ORDERs.", ar: "Each CUSTOMER must place one or more ORDERs." },
          r: { en: "<code>orders.customer_id</code>", ar: "<code>orders.customer_id</code>" } }
      ],
      hint: {
        en: "The crow's foot is at the entity after \"one or more\". A column holds one value per row — which table can name just one of the other?",
        ar: "قدم الغراب عند الكيان الذي يأتي بعد «one or more». والعمود يحمل قيمة واحدة في كل صفّ — أيّ جدول يستطيع أن يسمّي واحدًا فقط من الآخر؟"
      },
      explain: {
        en: "In each sentence the plural entity — BOOK, DEPARTMENT, ITEM, ORDER — is at the crow's-foot end, and its table carries the key: each row names one author, one location, one warehouse, one customer. The tempting mistake is to put the key at the subject (<code>authors.book_id</code>), but an author with two books would need two values in one cell.",
        ar: "في كل جملة يقع الكيان الجمع — BOOK وDEPARTMENT وITEM وORDER — عند طرف قدم الغراب، وجدوله يحمل المفتاح: كل صفّ يسمّي مؤلفًا واحدًا، وموقعًا واحدًا، ومستودعًا واحدًا، وزبونًا واحدًا. والخطأ المغري وضع المفتاح عند الفاعل (<code>authors.book_id</code>)، لكن المؤلف ذا الكتابين سيحتاج قيمتين في خلية واحدة."
      }
    },
    {
      id: "t3ax12", type: "mcq", level: "medium",
      topics: ["t3-cardinality-from-scenario", "t3-crows-foot", "t3-one-or-more"],
      q: {
        en: "Mariam Odeh is hired as a second Sales Representative, beside Tyler, and H.R. says that is normal. What does this fact decide on the <code>EMPLOYEE</code> – <code>JOB</code> line?",
        ar: "تُعيَّن Mariam Odeh مندوبة مبيعات ثانية بجانب Tyler، وتقول الموارد البشرية إن هذا أمر عادي. ماذا تقرّر هذه الحقيقة على خطّ <code>EMPLOYEE</code> – <code>JOB</code>؟"
      },
      options: [
        { en: "The end at <code>EMPLOYEE</code> is a crow's foot: each JOB may be held by one or more EMPLOYEEs", ar: "الطرف عند <code>EMPLOYEE</code> قدم غراب: كل JOB قد يشغله EMPLOYEE واحد أو أكثر" },
        { en: "The end at <code>JOB</code> is a crow's foot: jobs are the \"many\" side", ar: "الطرف عند <code>JOB</code> قدم غراب: الوظائف هي جانب «الكثير»" },
        { en: "The half beside <code>JOB</code> is solid: a job must be held", ar: "النصف المجاور لـ <code>JOB</code> متّصل: يجب أن تُشغل الوظيفة" },
        { en: "The end at <code>EMPLOYEE</code> is marked 2, the number of holders", ar: "يُعلَّم الطرف عند <code>EMPLOYEE</code> بالرقم 2، عدد الشاغلين" }
      ],
      answer: 0,
      hint: {
        en: "Two holders of one job answers \"how many employees can hold one job?\". Where is that answer drawn?",
        ar: "شاغلان لوظيفة واحدة يجيبان عن «كم موظفًا يمكن أن يشغل وظيفة واحدة؟». أين تُرسم هذه الإجابة؟"
      },
      explain: {
        en: "One job with two holders makes the answer plural, and the symbol is drawn at the entity being counted — employees — so the crow's foot sits at <code>EMPLOYEE</code>. Putting it beside JOB would say an employee holds many jobs and refuse Mariam. The fact is about how many, not must or may, so the halves do not change; and cardinality is never a number.",
        ar: "وظيفة واحدة لها شاغلان تجعل الإجابة جمعًا، والرمز يُرسم عند الكيان المعدود — الموظفين — فتقع قدم الغراب عند <code>EMPLOYEE</code>. ووضعها بجانب JOB يعني أن الموظف يشغل وظائف كثيرة، ويرفض Mariam. والحقيقة عن «كم؟» لا عن must أو may، فلا يتغيّر النصفان؛ والتعدّدية ليست رقمًا أبدًا."
      }
    },

    /* ==================================================== lesson 4 · diagramming conventions */
    {
      id: "t3ax13", type: "error", level: "easy",
      topics: ["t3-entity-name-convention", "t3-spot-convention-breaks", "t3-convention-checklist"],
      q: {
        en: "The restaurant's ERD written as text; <code>[half, end]</code> is written beside the entity it touches. Which line breaks the convention?",
        ar: "مخطّط المطعم مكتوبًا نصًّا؛ و<code>[half, end]</code> مكتوب بجانب الكيان الذي يلمسه. أيّ سطر يخالف العُرف؟"
      },
      lang: "text",
      code: "softbox CUSTOMER   # * Customer ID   * Name\nsoftbox ORDERS     # * Order No\nline CUSTOMER [solid, single toe] -- [solid, crow's foot] ORDER\nnames \"place\" beside CUSTOMER · \"placed by\" beside ORDER",
      answer: 2,
      solution: {
        code: "softbox CUSTOMER   # * Customer ID   * Name\nsoftbox ORDER      # * Order No\nline CUSTOMER [solid, single toe] -- [solid, crow's foot] ORDER\nnames \"place\" beside CUSTOMER · \"placed by\" beside ORDER",
        en: "The entity name is singular: ORDER, not ORDERS.",
        ar: "اسم الكيان مفرد: ORDER لا ORDERS."
      },
      hint: {
        en: "Run the six-check card: shape, entity name, attribute marks, halves, ends, relationship names.",
        ar: "طبّق بطاقة الفحوص الست: الشكل، اسم الكيان، علامات الخصائص، الأنصاف، الأطراف، أسماء العلاقات."
      },
      explain: {
        en: "Line 2 names the entity <code>ORDERS</code>. Entity names are always singular and in capitals, because the box describes one instance; the plural appears only inside a sentence (\"one or more ORDERs\"). The other lines conform: softboxes with marked attributes, both halves solid with a toe at CUSTOMER and a crow's foot at ORDER, and two lowercase names beside their own entities.",
        ar: "السطر 2 يسمّي الكيان <code>ORDERS</code>. وأسماء الكيانات دائمًا مفردة وبأحرف كبيرة، لأن الصندوق يصف نسخة واحدة؛ والجمع لا يظهر إلا داخل جملة («one or more ORDERs»). وبقية الأسطر مطابقة: صناديق مستديرة بخصائص معلَّمة، والنصفان متّصلان مع إصبع واحدة عند CUSTOMER وقدم غراب عند ORDER، واسمان بأحرف صغيرة كلٌّ بجانب كيانه."
      }
    },
    {
      id: "t3ax14", type: "mcq", level: "medium",
      topics: ["t3-entity-name-convention", "t3-singular-box-plural-sentence", "t3-entity-vs-table-name"],
      q: {
        en: "Why does the convention name an entity <code>EMPLOYEE</code> and never <code>EMPLOYEES</code>, even though the company has many employees?",
        ar: "لماذا يسمّي العُرف الكيان <code>EMPLOYEE</code> ولا يسمّيه <code>EMPLOYEES</code> أبدًا، مع أن للشركة موظفين كثيرين؟"
      },
      options: [
        { en: "So that it matches the table built from it, which is also singular", ar: "ليطابق الجدول المبني منه، وهو مفرد أيضًا" },
        { en: "The box describes one instance, and every rule about it starts \"Each EMPLOYEE…\"; a plural is added only inside a sentence", ar: "الصندوق يصف نسخة واحدة، وكل قاعدة عنه تبدأ بـ «Each EMPLOYEE…»؛ والجمع لا يُضاف إلا داخل الجملة" },
        { en: "So that entity names cannot be confused with relationship names", ar: "حتى لا تختلط أسماء الكيانات بأسماء العلاقات" },
        { en: "Because an entity can have only one instance at a time", ar: "لأن الكيان لا يكون له إلا نسخة واحدة في كل مرّة" }
      ],
      answer: 1,
      hint: {
        en: "Start any ERDish sentence. What word comes before the entity name?",
        ar: "ابدأ أيّ جملة ERDish. ما الكلمة التي تسبق اسم الكيان؟"
      },
      explain: {
        en: "An entity name says what one instance is, and every rule reads \"Each EMPLOYEE …\"; when a plural is needed, ERDish adds the <code>s</code> in the sentence and the box stays singular. The table, by contrast, is <code>employees</code> — plural, lowercase — so matching it is the wrong reason. Telling entities from relationship names is the job of the case (UPPERCASE vs lowercase), not of the number. And an entity has many instances.",
        ar: "اسم الكيان يقول ما هي النسخة الواحدة، وكل قاعدة تُقرأ «Each EMPLOYEE …»؛ وحين يلزم الجمع تضيف ERDish حرف <code>s</code> في الجملة ويبقى الصندوق مفردًا. أمّا الجدول فهو <code>employees</code> — جمع وبأحرف صغيرة — فمطابقته سبب خاطئ. والتمييز بين الكيانات وأسماء العلاقات وظيفة حالة الأحرف (كبيرة أو صغيرة)، لا وظيفة الإفراد والجمع. وللكيان نسخ كثيرة."
      }
    },
    {
      id: "t3ax15", type: "compare", level: "medium",
      topics: ["t3-name-placement", "t3-relationship-drawing", "t3-lowercase-relationship-name"],
      q: {
        en: "Two drawings of the restaurant line, as text. The marks are the same; only the names have moved. Compare them.",
        ar: "رسمان لخطّ المطعم، نصًّا. العلامات واحدة؛ لم يتغيّر إلا موضع الاسمين. قارن بينهما."
      },
      lang: "text",
      codeA: "CUSTOMER [solid, single toe] -- [solid, crow's foot] ORDER\nnames: \"placed by\" beside CUSTOMER · \"place\" beside ORDER",
      codeB: "CUSTOMER [solid, single toe] -- [solid, crow's foot] ORDER\nnames: \"place\" beside CUSTOMER · \"placed by\" beside ORDER",
      options: [
        { en: "They say the same thing: a line has two names, and which end each sits at does not matter", ar: "يقولان الشيء نفسه: للخطّ اسمان، ولا يهمّ عند أيّ طرف يقع كلٌّ منهما" },
        { en: "B is right: each name sits beside the entity its sentence starts from — \"Each CUSTOMER must place…\"", ar: "‏B هو الصحيح: كل اسم يقع بجانب الكيان الذي تبدأ منه جملته — «Each CUSTOMER must place…»" },
        { en: "A is right: a name is written at the entity the sentence arrives at, like the crow's foot", ar: "‏A هو الصحيح: يُكتب الاسم عند الكيان الذي تصل إليه الجملة، مثل قدم الغراب" },
        { en: "Both are wrong: a relationship name belongs in the middle of the line", ar: "كلاهما خطأ: اسم العلاقة مكانه منتصف الخطّ" }
      ],
      answer: 1,
      solution: {
        en: "Each CUSTOMER must place one or more ORDERs — place sits beside CUSTOMER. Each ORDER must be placed by one and only one CUSTOMER — placed by sits beside ORDER.",
        ar: "‏Each CUSTOMER must place one or more ORDERs — فيقع place بجانب CUSTOMER. وEach ORDER must be placed by one and only one CUSTOMER — فيقع placed by بجانب ORDER."
      },
      hint: {
        en: "Read A aloud from CUSTOMER: \"Each CUSTOMER must placed by …\". Does it make sense?",
        ar: "اقرأ A بصوت عالٍ بدءًا من CUSTOMER: «Each CUSTOMER must placed by …». هل لها معنى؟"
      },
      explain: {
        en: "The slides: the name is \"the label that appears close to the entity it is assigned to\" — the entity you start from when you say it. In A, starting at CUSTOMER gives \"must placed by\", which turns the rule round. The tempting idea comes from cardinality: the symbol is read at the far entity, but the name, like the half, is read beside the start. A name in the middle belongs to neither end.",
        ar: "تقول الشرائح: الاسم هو «the label that appears close to the entity it is assigned to» — أي الكيان الذي تبدأ منه حين تنطقه. وفي A تعطي البداية من CUSTOMER «must placed by»، فتنقلب القاعدة. والفكرة المغرية آتية من التعدّدية: الرمز يُقرأ عند الكيان البعيد، أمّا الاسم، مثل النصف، فيُقرأ بجانب البداية. والاسم في المنتصف لا ينتمي إلى أيّ طرف."
      }
    },
    {
      id: "t3ax16", type: "tf", level: "easy",
      topics: ["t3-relationship-drawing", "t3-shared-convention"],
      q: {
        en: "On an ERD a relationship line may end in an arrowhead, to show the direction the relationship is read in.",
        ar: "يجوز أن ينتهي خطّ العلاقة في المخطّط برأس سهم، ليبيّن الاتجاه الذي تُقرأ فيه العلاقة."
      },
      truth: false,
      hint: {
        en: "The slides list exactly two shapes a line may end in.",
        ar: "تذكر الشرائح شكلين فقط بالضبط يمكن أن ينتهي بهما الخطّ."
      },
      explain: {
        en: "False. Lines \"terminate in either a single toe or a crow's foot at the end of each entity\" — an arrowhead is a mark from other diagram styles, and it says neither one and only one nor one or more. Nor does a line need a direction: it is bi-directional, read from either end by the name beside that end. A private mark forces the reader to phone the author, which is what the shared convention exists to prevent.",
        ar: "خطأ. الخطوط «terminate in either a single toe or a crow's foot at the end of each entity» — ورأس السهم علامة من أنماط رسم أخرى، ولا يقول one and only one ولا one or more. ولا يحتاج الخطّ اتجاهًا أصلًا: فهو ثنائي الاتجاه، يُقرأ من أيّ طرف بالاسم المجاور لذلك الطرف. والعلامة الخاصة تُلزم القارئ بالاتصال بالمؤلف، وهذا بالضبط ما وُجد العُرف المشترك لمنعه."
      }
    },

    /* ==================================================== lesson 5 · speaking ERDish */
    {
      id: "t3ax17", type: "ordercode", level: "easy",
      topics: ["t3-erdish-six-parts", "t3-business-rule-syntax", "t3-erdish-plural"],
      q: {
        en: "The half beside <code>PRODUCT TYPE</code> is dashed and named <code>classify</code>; the crow's foot is at <code>PRODUCT</code>. Put the fragments in order to make the sentence that starts at <code>PRODUCT TYPE</code>.",
        ar: "النصف المجاور لـ <code>PRODUCT TYPE</code> متقطّع واسمه <code>classify</code>؛ وقدم الغراب عند <code>PRODUCT</code>. رتّب القطع لتكوّن الجملة التي تبدأ من <code>PRODUCT TYPE</code>."
      },
      lang: "erdish",
      items: [
        { code: "Each" },
        { code: "PRODUCT TYPE" },
        { code: "may" },
        { code: "classify" },
        { code: "one or more" },
        { code: "PRODUCTs." }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "EACH · entity A · optionality · name · cardinality · entity B.",
        ar: "‏EACH · الكيان A · الإلزامية · الاسم · التعدّدية · الكيان B."
      },
      explain: {
        en: "\"Each PRODUCT TYPE may classify one or more PRODUCTs.\" — the slides' own sentence. Parts 2–4 come from the PRODUCT TYPE side (the subject, the dashed half, the name beside it); parts 5–6 from the PRODUCT end (the crow's foot, then the entity with a plural s). The usual slip is to put the cardinality before the name.",
        ar: "«Each PRODUCT TYPE may classify one or more PRODUCTs.» — جملة الشرائح نفسها. الأجزاء 2–4 من جهة PRODUCT TYPE (الفاعل، والنصف المتقطّع، والاسم المجاور له)؛ والجزءان 5–6 من طرف PRODUCT (قدم الغراب، ثم الكيان مع s الجمع). والزلّة المعتادة وضع التعدّدية قبل الاسم."
      }
    },
    {
      id: "t3ax18", type: "complete", level: "medium",
      topics: ["t3-two-readings", "t3-what-swaps", "t3-reading-direction"],
      q: {
        en: "<code>DEPARTMENT</code> is on the left, <code>LOCATION</code> on the right. The half beside DEPARTMENT is solid and named <code>located in</code>; the half beside LOCATION is dashed and named <code>address of</code>; the crow's foot is at DEPARTMENT, a single toe at LOCATION. Complete the second reading.",
        ar: "‏<code>DEPARTMENT</code> على اليسار و<code>LOCATION</code> على اليمين. النصف المجاور لـ DEPARTMENT متّصل واسمه <code>located in</code>؛ والنصف المجاور لـ LOCATION متقطّع واسمه <code>address of</code>؛ وقدم الغراب عند DEPARTMENT، والإصبع الواحدة عند LOCATION. أكمل القراءة الثانية."
      },
      lang: "erdish",
      code: "Each DEPARTMENT must be located in one and only one LOCATION.\nEach LOCATION ____ DEPARTMENTs.",
      options: [
        { code: "must be the address of one or more" },
        { code: "may be located in one or more" },
        { code: "may be the address of one or more" },
        { code: "may be the address of one and only one" }
      ],
      answer: 2,
      solution: {
        code: "Each DEPARTMENT must be located in one and only one LOCATION.\nEach LOCATION may be the address of one or more DEPARTMENTs.",
        en: "LOCATION's own dashed half and its own name; the crow's foot at DEPARTMENT, where the sentence ends.",
        ar: "النصف المتقطّع لـ LOCATION واسمه هو؛ وقدم الغراب عند DEPARTMENT حيث تنتهي الجملة."
      },
      hint: {
        en: "Going back, everything swaps: use the half and the name beside the new start, and the symbol at the old start.",
        ar: "عند الرجوع يتبدّل كل شيء: استعمل النصف والاسم المجاورين للبداية الجديدة، والرمز عند البداية القديمة."
      },
      explain: {
        en: "The second reading starts at LOCATION, so part 3 comes from the dashed half beside it (may be) and part 4 is its own name (the address of). Part 5 is read at DEPARTMENT, where the crow's foot is: one or more. Keeping \"must\" or \"located in\" from the first sentence, or taking the toe beside LOCATION, are the three ways to read the line from the wrong side.",
        ar: "القراءة الثانية تبدأ من LOCATION، فيأتي الجزء 3 من النصف المتقطّع المجاور له (may be)، والجزء 4 هو اسمه هو (the address of). ويُقرأ الجزء 5 عند DEPARTMENT حيث قدم الغراب: one or more. وإبقاء «must» أو «located in» من الجملة الأولى، أو أخذ الإصبع المجاورة لـ LOCATION، هي الطرق الثلاث لقراءة الخطّ من الجهة الخطأ."
      }
    },
    {
      id: "t3ax19", type: "multi", level: "medium",
      topics: ["t3-sentence-to-line", "t3-entity-a-entity-b", "t3-two-readings"],
      q: {
        en: "Only one sentence of the restaurant has arrived so far: \"Each ORDER must be placed by one and only one CUSTOMER.\" Which marks of the line does it fix? Choose every one.",
        ar: "لم تصل من المطعم حتى الآن إلا جملة واحدة: «Each ORDER must be placed by one and only one CUSTOMER.» أيّ علامات الخطّ تحدّدها؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "A solid half beside <code>ORDER</code>", ar: "نصف متّصل بجانب <code>ORDER</code>" },
        { en: "A crow's foot at <code>ORDER</code>", ar: "قدم غراب عند <code>ORDER</code>" },
        { en: "The name <code>placed by</code>, written beside <code>ORDER</code>", ar: "الاسم <code>placed by</code>، مكتوبًا بجانب <code>ORDER</code>" },
        { en: "A solid half beside <code>CUSTOMER</code>", ar: "نصف متّصل بجانب <code>CUSTOMER</code>" },
        { en: "A single toe at <code>CUSTOMER</code>", ar: "إصبع واحدة عند <code>CUSTOMER</code>" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "One sentence draws three marks: the half and the name beside entity A, and the symbol at entity B.",
        ar: "الجملة الواحدة ترسم ثلاث علامات: النصف والاسم المجاورين للكيان A، والرمز عند الكيان B."
      },
      explain: {
        en: "Entity A is ORDER: \"must be\" gives the solid half beside it, and \"placed by\" is the name written there. Entity B is CUSTOMER: \"one and only one\" gives the single toe at it. The crow's foot at ORDER and the CUSTOMER half belong to the other sentence, \"Each CUSTOMER must place one or more ORDERs\" — true for this restaurant, but this sentence does not say so. One sentence states half a line.",
        ar: "الكيان A هو ORDER: «must be» تعطي النصف المتّصل بجانبه، و«placed by» هو الاسم المكتوب هناك. والكيان B هو CUSTOMER: «one and only one» تعطي الإصبع الواحدة عنده. أمّا قدم الغراب عند ORDER ونصف CUSTOMER فينتميان إلى الجملة الأخرى، «Each CUSTOMER must place one or more ORDERs» — وهي صحيحة لهذا المطعم، لكن هذه الجملة لا تقولها. الجملة الواحدة تذكر نصف الخطّ."
      }
    },
    {
      id: "t3ax20", type: "compare", level: "medium",
      topics: ["t3-erdish", "t3-erdish-audiences", "t3-industry-terminology"],
      q: {
        en: "The H.R. manager describes a rule in A; the designer writes B and hands it to the database administrator. Compare them.",
        ar: "يصف مدير الموارد البشرية قاعدةً في A؛ ويكتب المصمّم B ويسلّمه إلى مدير قاعدة البيانات. قارن بينهما."
      },
      lang: "erdish",
      codeA: "Our staff belong to departments.",
      codeB: "Each EMPLOYEE must work in one and only one DEPARTMENT.\nEach DEPARTMENT may be responsible for one or more EMPLOYEEs.",
      options: [
        { en: "A is better: it is in the client's own words, so nobody can misread it", ar: "‏A أفضل: هو بكلمات العميل نفسه، فلا يمكن أن يُساء فهمه" },
        { en: "They state the same rule; B only says it more formally", ar: "يذكران القاعدة نفسها؛ وB يقولها بصيغة أكثر رسمية فقط" },
        { en: "B is better: it fixes must or may and one or more at both ends — what the DBA needs for NOT NULL and for which table gets the key", ar: "‏B أفضل: يحدّد must أو may وone or more عند الطرفين — وهو ما يحتاجه مدير قاعدة البيانات لـ NOT NULL ولمعرفة أيّ جدول يأخذ المفتاح" },
        { en: "B is better only because its entity names are in capitals", ar: "‏B أفضل فقط لأن أسماء الكيانات فيه بأحرف كبيرة" }
      ],
      answer: 2,
      solution: {
        en: "A leaves open whether a department may be empty and whether a person may be in two departments; B answers both, and both directions.",
        ar: "‏A يترك مفتوحًا هل يجوز أن يكون القسم فارغًا وهل يجوز أن يكون الشخص في قسمين؛ وB يجيب عن الاثنين، وفي الاتجاهين."
      },
      hint: {
        en: "Can a department have nobody? Can one person be in two? Which text answers?",
        ar: "هل يجوز أن يكون قسم بلا أحد؟ هل يجوز أن يكون شخص في قسمين؟ أيّ النصّين يجيب؟"
      },
      explain: {
        en: "ERDish is the precise language for business rules: you check them with the client in it, and hand them to the DBAs who implement the design. \"Belong to\" sounds clear but answers neither optionality nor cardinality, so the builder must guess. B's \"one and only one\" puts <code>department_id</code> in <code>employees</code>, its \"must\" makes it <code>NOT NULL</code>, and \"may be\" allows an empty department. Capitals help, but they are not the point.",
        ar: "لغة ERDish هي اللغة الدقيقة لقواعد العمل: تراجعها بها مع العميل، وتسلّمها بها إلى مديري قواعد البيانات الذين ينفّذون التصميم. و«belong to» تبدو واضحة لكنها لا تجيب عن الإلزامية ولا عن التعدّدية، فيضطرّ المنفّذ إلى التخمين. أمّا «one and only one» في B فتضع <code>department_id</code> في <code>employees</code>، و«must» تجعله <code>NOT NULL</code>، و«may be» تسمح بقسم فارغ. الأحرف الكبيرة تساعد، لكنها ليست الجوهر."
      }
    },

    /* ==================================================== lesson 6 · matrix diagrams */
    {
      id: "t3ax21", type: "fill", level: "easy",
      topics: ["t3-entity-pairs", "t3-matrix-diagonal", "t3-matrix-purpose"],
      q: {
        en: "Lesson 1's new designer drew fifteen lines between the six H.R. entities. Build their matrix instead: the six entities down the side and across the top. Fill in the counts.",
        ar: "رسم المصمّم الجديد في الدرس 1 خمسة عشر خطًّا بين كيانات الموارد البشرية الستة. ابنِ مصفوفتها بدلًا من ذلك: الكيانات الستة على الجانب وفي الأعلى. املأ الأعداد."
      },
      lang: "text",
      code: "cells in the grid:            ____1____\ncells on the diagonal:        ____2____\nentity pairs to ask about:    ____3____",
      blanks: [
        { accept: ["36"], label: { en: "cells", ar: "الخلايا" } },
        { accept: ["6"], label: { en: "diagonal", ar: "القُطر" } },
        { accept: ["15"], label: { en: "pairs", ar: "الأزواج" } }
      ],
      hint: {
        en: "n entities make n × n cells, n of them on the diagonal, and n × (n − 1) ÷ 2 pairs.",
        ar: "‏n كيانًا تعطي n × n خلية، منها n على القُطر، وn × (n − 1) ÷ 2 زوجًا."
      },
      explain: {
        en: "6 × 6 = 36 cells; 6 on the diagonal; the other 30 come in mirror pairs, so 30 ÷ 2 = 15 entity pairs — the same fifteen the designer drew. The difference is what happens next: the matrix asks about every pair once, fills only the cells the business needs, and leaves the rest blank as a decision. It also asks the six diagonal questions, where a recursive relationship turns up.",
        ar: "‏6 × 6 = 36 خلية؛ 6 على القُطر؛ والـ 30 الباقية تأتي خلايا متقابلة، فهي 30 ÷ 2 = 15 زوجًا — الخمسة عشر نفسها التي رسمها المصمّم. والفرق فيما يأتي بعد ذلك: المصفوفة تسأل عن كل زوج مرّة، ولا تملأ إلا الخلايا التي يحتاجها العمل، وتترك الباقي فارغًا قرارًا. وتسأل أيضًا أسئلة القُطر الستة، حيث تظهر العلاقة الذاتية."
      }
    },
    {
      id: "t3ax22", type: "complete", level: "easy",
      topics: ["t3-matrix-one-direction", "t3-matrix-row-first", "t3-matrix-cell"],
      q: {
        en: "In the H.R. matrix, what is written in the cell where the <code>DEPARTMENT</code> row meets the <code>EMPLOYEE</code> column?",
        ar: "في مصفوفة الموارد البشرية، ماذا يُكتب في الخلية التي يلتقي فيها صفّ <code>DEPARTMENT</code> بعمود <code>EMPLOYEE</code>؟"
      },
      lang: "text",
      code: "DEPARTMENT  ____  EMPLOYEE",
      options: [
        { code: "work in" },
        { code: "responsible for" },
        { code: "located in" },
        { code: "manager of" }
      ],
      answer: 1,
      solution: {
        code: "DEPARTMENT  responsible for  EMPLOYEE",
        en: "Row entity · name · column entity.",
        ar: "كيان الصفّ · الاسم · كيان العمود."
      },
      hint: {
        en: "Read every cell the same way: row entity, then the name, then column entity.",
        ar: "اقرأ كل خلية بالطريقة نفسها: كيان الصفّ، ثم الاسم، ثم كيان العمود."
      },
      explain: {
        en: "Row first: \"DEPARTMENT responsible for EMPLOYEE\". <code>work in</code> is DEPARTMENT's mirror cell — the EMPLOYEE row, DEPARTMENT column — and putting it here reads \"DEPARTMENT work in EMPLOYEE\", the backwards cell the slides warn about. <code>located in</code> belongs to the DEPARTMENT row under LOCATION, and <code>manager of</code> to the EMPLOYEE diagonal.",
        ar: "الصفّ أولًا: «DEPARTMENT responsible for EMPLOYEE». أمّا <code>work in</code> فهي الخلية المقابلة — صفّ EMPLOYEE وعمود DEPARTMENT — ووضعها هنا يُقرأ «DEPARTMENT work in EMPLOYEE»، وهي الخلية المعكوسة التي تحذّر منها الشرائح. و<code>located in</code> تنتمي إلى صفّ DEPARTMENT تحت LOCATION، و<code>manager of</code> إلى قُطر EMPLOYEE."
      }
    },
    {
      id: "t3ax23", type: "multi", level: "medium",
      topics: ["t3-matrix-cell", "t3-matrix-diagonal", "t3-matrix-build"],
      q: {
        en: "The H.R. matrix lists <code>EMPLOYEE</code>, <code>DEPARTMENT</code>, <code>JOB</code> and <code>LOCATION</code> on both axes, filled with the relationships of this chapter. Which of these cells stay blank? Choose every one.",
        ar: "تضع مصفوفة الموارد البشرية <code>EMPLOYEE</code> و<code>DEPARTMENT</code> و<code>JOB</code> و<code>LOCATION</code> على المحورين، مملوءة بعلاقات هذا الفصل. أيّ هذه الخلايا تبقى فارغة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "EMPLOYEE row × LOCATION column", ar: "صفّ EMPLOYEE × عمود LOCATION" },
        { en: "EMPLOYEE row × EMPLOYEE column", ar: "صفّ EMPLOYEE × عمود EMPLOYEE" },
        { en: "JOB row × DEPARTMENT column", ar: "صفّ JOB × عمود DEPARTMENT" },
        { en: "DEPARTMENT row × LOCATION column", ar: "صفّ DEPARTMENT × عمود LOCATION" },
        { en: "JOB row × LOCATION column", ar: "صفّ JOB × عمود LOCATION" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "List the chapter's H.R. relationships: works in, hold, located in, and one more that starts and ends at the same box.",
        ar: "عدّد علاقات الموارد البشرية في الفصل: works in، وhold، وlocated in، وواحدة أخرى تبدأ وتنتهي عند الصندوق نفسه."
      },
      explain: {
        en: "The chapter's H.R. lines are EMPLOYEE–DEPARTMENT, EMPLOYEE–JOB, DEPARTMENT–LOCATION and the manager loop, so the EMPLOYEE diagonal (<code>manager of</code> / <code>managed by</code>) and the DEPARTMENT row under LOCATION (<code>located in</code>) are filled. EMPLOYEE–LOCATION, JOB–DEPARTMENT and JOB–LOCATION stay blank: an employee's location is reached through the department, and a direct line would be Lesson 1's extra line. Skipping the diagonal is how the manager loop gets missed.",
        ar: "خطوط الموارد البشرية في الفصل هي EMPLOYEE–DEPARTMENT وEMPLOYEE–JOB وDEPARTMENT–LOCATION وحلقة المدير، فقُطر EMPLOYEE (<code>manager of</code> / <code>managed by</code>) وصفّ DEPARTMENT تحت LOCATION (<code>located in</code>) مملوءان. أمّا EMPLOYEE–LOCATION وJOB–DEPARTMENT وJOB–LOCATION فتبقى فارغة: موقع الموظف يُعرف عن طريق القسم، والخطّ المباشر سيكون الخطّ الزائد في الدرس 1. وتخطّي القُطر هو الطريق إلى إغفال حلقة المدير."
      }
    },
    {
      id: "t3ax24", type: "mcq", level: "medium",
      topics: ["t3-matrix-limits", "t3-matrix-questions", "t3-mirror-cells"],
      q: {
        en: "The travel matrix has given <code>TRAVELER · visit · COUNTRY</code> and <code>COUNTRY · visited by · TRAVELER</code>. What must the designer still do before this line can be drawn in full on the ERD?",
        ar: "أعطت مصفوفة السفر <code>TRAVELER · visit · COUNTRY</code> و<code>COUNTRY · visited by · TRAVELER</code>. ماذا يجب على المصمّم أن يفعل بعدُ قبل أن يُرسم هذا الخطّ كاملًا في المخطّط؟"
      },
      options: [
        { en: "Nothing: a filled pair already means dashed halves and a crow's foot at each end", ar: "لا شيء: الزوج المملوء يعني أصلًا نصفين متقطّعين وقدم غراب عند كل طرف" },
        { en: "Ask the business, at both ends, must or may, and one and only one or one or more", ar: "أن يسأل العمل، عند الطرفين، must أم may، وone and only one أم one or more" },
        { en: "Ask only about the TRAVELER end, because the pair was found in the TRAVELER row", ar: "أن يسأل عن طرف TRAVELER فقط، لأن الزوج وُجد في صفّ TRAVELER" },
        { en: "Draw two lines, one for <code>visit</code> and one for <code>visited by</code>", ar: "أن يرسم خطّين، واحدًا لـ <code>visit</code> وواحدًا لـ <code>visited by</code>" }
      ],
      answer: 1,
      hint: {
        en: "What does a matrix cell hold — and what does it not?",
        ar: "ماذا تحمل خلية المصفوفة — وماذا لا تحمل؟"
      },
      explain: {
        en: "\"Matrix diagrams do not show optionality and cardinality.\" A filled pair says only that the entities are related and what each end is called; the halves and the ends come from asking the business, once per end. For this pair the answer happens to be may and one or more both ways — but that came from the agency, not from the cells. The two mirror cells are the two names of one line, not two lines.",
        ar: "«Matrix diagrams do not show optionality and cardinality.» الزوج المملوء لا يقول إلا إن الكيانين مرتبطان وما اسم كل طرف؛ أمّا الأنصاف والأطراف فتأتي من سؤال العمل، مرّة لكل طرف. وصادف أن الإجابة لهذا الزوج may وone or more في الاتجاهين — لكنها جاءت من الوكالة لا من الخلايا. والخليتان المتقابلتان هما اسما خطّ واحد، لا خطّان."
      }
    }
  ]
};
