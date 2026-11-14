/* Question bank: T3 lesson 4 test -- Diagramming Conventions. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-04"] = {
  title: { en: "Test 4 — Diagramming Conventions", ar: "اختبار 4 — أعراف الرسم" },
  intro: {
    en: "24 questions on lesson 4: why every ERD follows one shared convention, softboxes with singular UPPERCASE names, the # * o marks under the name, relationship lines named in lowercase at both ends, checking a whole ERD against the six-check card, and what each mark becomes in the tables. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الرابع: لماذا يتبع كل مخطّط ERD عُرفًا مشتركًا واحدًا، والصناديق المستديرة بأسمائها المفردة المكتوبة بالأحرف الكبيرة، والعلامات # و* وo تحت الاسم، وخطوط العلاقات المسمّاة بالأحرف الصغيرة عند طرفيها، وفحص مخطّط كامل ببطاقة الفحوص الستّة، وما تصير إليه كل علامة في الجداول. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · signs that everyone reads */
    {
      id: "t3l4q01", type: "mcq", level: "easy", topics: ["t3-shared-convention", "t3-international-signs"],
      q: {
        en: "Two students hand the database administrator two H.R. drafts: one with ovals, arrows and \"(required)\" after Salary, one drawn by the convention. What does the convention give the administrator that the other draft does not?",
        ar: "سلّم طالبان مديرَ قاعدة البيانات مسوّدتين لنظام الموارد البشرية: إحداهما فيها أشكال بيضوية وأسهم وعبارة «(required)» بعد Salary، والأخرى مرسومة وفق العُرف. ماذا يمنح العُرفُ المديرَ ولا تمنحه المسوّدة الأخرى؟"
      },
      options: [
        { en: "A diagram the software can turn into tables automatically", ar: "مخطّطًا يستطيع البرنامج أن يحوّله إلى جداول تلقائيًّا" },
        { en: "The same wording of the business rules from every designer", ar: "الصياغة نفسها لقواعد العمل من كل مصمّم" },
        { en: "A picture they can read without asking its author what each mark means", ar: "صورة يستطيع قراءتها دون أن يسأل مؤلّفها عن معنى كل علامة" },
        { en: "A model that is more correct for the business", ar: "نموذجًا أصحّ بالنسبة إلى العمل" }
      ],
      answer: 2,
      hint: {
        en: "Think of the road signs on the slides: what does a stop sign save the driver from?",
        ar: "تذكّر إشارات الطرق في الشرائح: ممّ تُعفي إشارةُ التوقّف السائقَ؟"
      },
      explain: {
        en: "Like an international sign, a shared convention is decoded the same way by every reader, so the administrator never phones the author. It does not make the model more correct — a conforming ERD can still state a wrong rule — and it does not fix the wording: the slides allow each author's \"accent\". Nothing about it is automatic either; it is an agreement between people.",
        ar: "العُرف المشترك، مثل العلامة الدولية، يفكّه كل قارئ بالطريقة نفسها، فلا يتّصل المدير بالمؤلّف أبدًا. لكنه لا يجعل النموذج أصحّ — فالمخطّط الملتزم بالعُرف قد يقرّر قاعدة خاطئة — ولا يوحّد الصياغة: الشرائح تسمح لكل مؤلّف بـ«لهجته». وليس فيه شيء تلقائي؛ إنه اتّفاق بين الناس."
      }
    },
    {
      id: "t3l4q02", type: "tf", level: "easy", topics: ["t3-international-signs", "t3-shared-convention"],
      q: {
        en: "Two analysts who describe the H.R. scenario in different words, each in their own \"accent\", should end up with ERDs drawn with different marks.",
        ar: "محلّلان يصفان سيناريو الموارد البشرية بكلمات مختلفة، كلٌّ بـ«لهجته»، ينبغي أن ينتهيا إلى مخطّطَي ERD مرسومين بعلامات مختلفة."
      },
      truth: false,
      hint: {
        en: "The slides allow one thing to vary and forbid the other. Which is which?",
        ar: "تسمح الشرائح لشيء واحد بأن يختلف وتمنع الآخر. أيّهما أيّهما؟"
      },
      explain: {
        en: "False. The slides: \"you may say or write things differently because of the way you speak, your accent (لهجة), and so on, but everyone draws ER diagrams according to the same conventions.\" Speech may vary; the softbox, the # * o and the lines may not. Different words describing the same business still give the same picture.",
        ar: "خطأ. تقول الشرائح: «قد تقول الأشياء أو تكتبها بطريقة مختلفة بسبب طريقة كلامك ولهجتك (accent) وما إلى ذلك، لكن الجميع يرسمون مخطّطات ER وفق الأعراف نفسها». الكلام قد يختلف؛ أما الصندوق المستدير و# و* وo والخطوط فلا. والكلمات المختلفة التي تصف العمل نفسه تعطي الصورة نفسها."
      }
    },
    {
      id: "t3l4q03", type: "multi", level: "medium", topics: ["t3-er-diagramming", "t3-shared-convention"],
      q: {
        en: "The slides' objective: construct ER diagram components according to the conventions. Which components does the convention govern? Select all that apply.",
        ar: "هدف الشرائح: بناء مكوّنات مخطّط ER وفق الأعراف. أيّ المكوّنات يحكمها العُرف؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Relationships — the lines and their names", ar: "العلاقات — الخطوط وأسماؤها" },
        { en: "The words the client uses to state the business rules", ar: "الكلمات التي يقرّر بها العميل قواعد العمل" },
        { en: "Entities — their shape and their names", ar: "الكيانات — شكلها وأسماؤها" },
        { en: "The data type of each column in the tables", ar: "نوع البيانات لكل عمود في الجداول" },
        { en: "Attributes — where they are listed and how they are marked", ar: "الخصائص — أين تُدرج وكيف تُعلَّم" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "The lesson took the three components in the slides' order, one section each.",
        ar: "تناول الدرس المكوّنات الثلاثة بترتيب الشرائح، قسمًا لكلٍّ منها."
      },
      explain: {
        en: "ER diagramming is drawing entities, attributes and relationships by the shared conventions — those three, and sections 2, 3 and 4 of the lesson. The client's wording is the \"accent\" the slides allow to differ. Column data types belong to the physical model and the CREATE TABLE, not to the marks on a conceptual ERD.",
        ar: "رسم مخطّطات ER هو رسم الكيانات والخصائص والعلاقات وفق الأعراف المشتركة — هذه الثلاثة، وهي الأقسام 2 و3 و4 من الدرس. أما صياغة العميل فهي «اللهجة» التي تسمح الشرائح باختلافها. وأنواع بيانات الأعمدة تنتمي إلى النموذج المادّي (physical) وإلى CREATE TABLE، لا إلى علامات المخطّط المفاهيمي."
      }
    },
    {
      id: "t3l4q04", type: "match", level: "easy", topics: ["t3-marks-to-sql", "t3-marks-enforced"],
      q: {
        en: "The administrator builds version 2 of the H.R. ERD. Match each mark to what it becomes in SQL.",
        ar: "يبني مدير قاعدة البيانات الإصدار 2 من مخطّط الموارد البشرية. طابِق كل علامة بما تصير إليه في SQL."
      },
      leftHead: { en: "On the ERD", ar: "في المخطّط" },
      rightHead: { en: "In the tables", ar: "في الجداول" },
      pairs: [
        { l: { en: "the softbox EMPLOYEE", ar: "الصندوق المستدير EMPLOYEE" },
          r: { en: "the table employees", ar: "الجدول employees" } },
        { l: { en: "# * Employee ID", ar: "# * Employee ID" },
          r: { en: "employee_id … PRIMARY KEY", ar: "employee_id … PRIMARY KEY" } },
        { l: { en: "* Salary", ar: "* Salary" },
          r: { en: "salary … NOT NULL", ar: "salary … NOT NULL" } },
        { l: { en: "o Commission", ar: "o Commission" },
          r: { en: "commission, a nullable column", ar: "commission، عمود يقبل NULL" } },
        { l: { en: "the crow's foot at EMPLOYEE on the DEPARTMENT line", ar: "قدم الغراب عند EMPLOYEE على خط DEPARTMENT" },
          r: { en: "a foreign key department_id in employees", ar: "مفتاح أجنبي department_id في employees" } }
      ],
      hint: {
        en: "Each mark has exactly one meaning in SQL: # identifies, * forbids empty, o allows it.",
        ar: "لكل علامة معنى واحد فقط في SQL: # تعرّف، و* تمنع الفراغ، وo تسمح به."
      },
      explain: {
        en: "The softbox is a table; # is the PRIMARY KEY; * is NOT NULL; o is a plain, nullable column; and the crow's foot sends the key into the table at its end. That is why a conforming ERD can be built without a single question. The one mark with no SQL meaning — the relationship name — is not in this list.",
        ar: "الصندوق المستدير جدول؛ و# هي PRIMARY KEY؛ و* هي NOT NULL؛ وo عمود عادي يقبل NULL؛ وقدم الغراب ترسل المفتاح إلى الجدول الذي عند طرفها. لهذا يمكن بناء المخطّط الملتزم بالعُرف دون سؤال واحد. والعلامة الوحيدة التي لا معنى لها في SQL — اسم العلاقة — ليست في هذه القائمة."
      }
    },

    /* ---------------------------------------------------- 2 · softboxes, singular, UPPERCASE */
    {
      id: "t3l4q05", type: "mcq", level: "easy", topics: ["t3-entity-name-convention", "t3-softbox"],
      q: {
        en: "The slides' product example needs an entity for the kinds of product. Which label belongs inside its softbox?",
        ar: "يحتاج مثال المنتجات في الشرائح إلى كيان لأنواع المنتجات. أيّ اسم يوضع داخل صندوقه المستدير؟"
      },
      options: [
        { code: "PRODUCT TYPES" },
        { code: "Product Type" },
        { code: "PROD. TYPE" },
        { code: "PRODUCT TYPE" },
        { code: "product_types" }
      ],
      answer: 3,
      hint: {
        en: "Two rules for the name, and one habit the lesson's version 1 broke as well.",
        ar: "قاعدتان للاسم، وعادة ثالثة خالفها الإصدار 1 في الدرس أيضًا."
      },
      explain: {
        en: "PRODUCT TYPE: singular, all capitals, spelled out. PRODUCT TYPES has the capitals but is plural; Product Type is singular but mixed case; PROD. TYPE abbreviates, as version 1's dept. did. product_types is a table name — plural, lowercase — and on an ERD it reads as a physical model.",
        ar: "PRODUCT TYPE: مفرد، بالأحرف الكبيرة كلها، ومكتوب كاملًا. أما PRODUCT TYPES فبالأحرف الكبيرة لكنه جمع؛ وProduct Type مفرد لكن حالة أحرفه مختلطة؛ وPROD. TYPE مختصر، كما فعل dept. في الإصدار 1. وproduct_types اسم جدول — جمع وبأحرف صغيرة — ويُقرأ على المخطّط كأنه نموذج مادّي."
      }
    },
    {
      id: "t3l4q06", type: "compare", level: "medium", topics: ["t3-softbox", "t3-entity-name-convention"],
      q: {
        en: "Two drafts of the same three H.R. entities, described as text. Compare them.",
        ar: "مسوّدتان للكيانات الثلاثة نفسها في الموارد البشرية، موصوفتان نصًّا. قارن بينهما."
      },
      lang: "text",
      codeA: "[square box]   Employees\n[rounded box]  dept.\n[oval]         Job Titles",
      codeB: "[softbox]  EMPLOYEE\n[softbox]  DEPARTMENT\n[softbox]  JOB",
      options: [
        { en: "A is better: the plural Employees shows that the box holds many employees", ar: "A أفضل: الجمع Employees يُظهر أن الصندوق يضمّ موظّفين كثيرين" },
        { en: "B is better: every entity is a softbox and every name says what one instance is, spelled out in capitals", ar: "B أفضل: كل كيان صندوق مستدير، وكل اسم يقول ما هو المثيل الواحد، مكتوبًا كاملًا بالأحرف الكبيرة" },
        { en: "They are the same model: shapes and spelling are a matter of the author's style", ar: "هما النموذج نفسه: الأشكال والإملاء مسألة أسلوب المؤلّف" },
        { en: "B is better, but it should use the table names employees, departments, jobs", ar: "B أفضل، لكن عليه أن يستعمل أسماء الجداول employees وdepartments وjobs" }
      ],
      answer: 1,
      hint: {
        en: "A softbox describes one instance. Which draft lets a reader tell, without asking, which shapes are entities?",
        ar: "الصندوق المستدير يصف مثيلًا واحدًا. أيّ المسوّدتين تسمح للقارئ أن يعرف، دون أن يسأل، أيّ الأشكال كيانات؟"
      },
      explain: {
        en: "B is the lesson's version 2. A is version 1: a private convention, where the oval might be a note, dept. must be guessed, and Employees leaves the reader asking whether it is one employee or the staff list. Calling it style is the misconception the slides answer — the drawing is exactly what may not vary. Table names belong to the tables, not to the ERD.",
        ar: "B هو الإصدار 2 في الدرس. وA هو الإصدار 1: عُرف خاص، قد يكون فيه الشكل البيضوي ملاحظة، ويجب تخمين dept.، ويترك Employees القارئ يسأل: أهو موظّف واحد أم قائمة الموظّفين؟ وتسميته «أسلوبًا» هي الفكرة الخاطئة التي تردّ عليها الشرائح — فالرسم بالضبط هو ما لا يجوز أن يختلف. وأسماء الجداول للجداول، لا للمخطّط."
      }
    },
    {
      id: "t3l4q07", type: "contrast", level: "medium", topics: ["t3-entity-vs-table-name", "t3-singular-box-plural-sentence"],
      q: {
        en: "EMPLOYEE on the ERD, employees in the database. Sort each statement: is it true of the entity name or of the table name?",
        ar: "EMPLOYEE في المخطّط، وemployees في قاعدة البيانات. صنّف كل عبارة: هل تصدق على اسم الكيان أم على اسم الجدول؟"
      },
      concepts: [
        { en: "Entity name on the ERD", ar: "اسم الكيان في المخطّط" },
        { en: "Table name in SQL", ar: "اسم الجدول في SQL" }
      ],
      rows: [
        { s: { en: "Singular, because it describes one instance", ar: "مفرد، لأنه يصف مثيلًا واحدًا" }, a: 0 },
        { s: { en: "Plural, because it holds many rows", ar: "جمع، لأنه يضمّ صفوفًا كثيرة" }, a: 1 },
        { s: { en: "Written all in capitals", ar: "مكتوب كلّه بالأحرف الكبيرة" }, a: 0 },
        { s: { en: "Written in lowercase, as in the T2 lab", ar: "مكتوب بالأحرف الصغيرة، كما في معمل T2" }, a: 1 },
        { s: { en: "Follows \"Each\" in an ERDish sentence", ar: "يأتي بعد «Each» في جملة ERDish" }, a: 0 },
        { s: { en: "Follows FROM in a query", ar: "يأتي بعد FROM في الاستعلام" }, a: 1 }
      ],
      hint: {
        en: "Two conventions for two readers: one for people reading the model, one for the database holding the rows.",
        ar: "عُرفان لقارئين: واحد لمن يقرأ النموذج، وآخر لقاعدة البيانات التي تحفظ الصفوف."
      },
      explain: {
        en: "The entity name is singular and uppercase because every rule about it starts \"Each EMPLOYEE…\". The table is plural and lowercase because it holds many rows, and SQL names it after FROM. Mixing them is the trap: a softbox labelled employees has borrowed the table's name and reads as a physical model.",
        ar: "اسم الكيان مفرد وبالأحرف الكبيرة لأن كل قاعدة عنه تبدأ «Each EMPLOYEE…». والجدول جمع وبالأحرف الصغيرة لأنه يضمّ صفوفًا كثيرة، وتسمّيه SQL بعد FROM. والخلط بينهما هو الفخّ: صندوق مستدير اسمه employees قد استعار اسم الجدول، فيُقرأ نموذجًا مادّيًّا."
      }
    },

    /* ---------------------------------------------------- 3 · attributes: # * o */
    {
      id: "t3l4q08", type: "fill", level: "easy", topics: ["t3-attribute-marks", "t3-hash-uid", "t3-hash-star"],
      q: {
        en: "From the slides' scenario: \"We need to track each employee's first name, last name, hire date and salary. For each employee on commission, we also need to track potential commission. Each employee is allocated a unique employee number.\" Write the mark for each line, as this track writes them.",
        ar: "من سيناريو الشرائح: «نحتاج إلى تتبّع الاسم الأول والاسم الأخير وتاريخ التعيين والراتب لكل موظّف. ولكل موظّف يتقاضى عمولة، نحتاج أيضًا إلى تتبّع العمولة المحتملة. ويُخصَّص لكل موظّف رقم موظّف فريد.» اكتب علامة كل سطر، كما يكتبها هذا المسار."
      },
      lang: "text",
      code: "EMPLOYEE\n____1____ Employee ID\n____2____ Last Name\n____3____ Hire Date\n____4____ Commission",
      blanks: [
        { accept: ["# *", "#*", "# * "], label: { en: "1", ar: "1" } },
        { accept: ["*"], label: { en: "2", ar: "2" } },
        { accept: ["*"], label: { en: "3", ar: "3" } },
        { accept: ["o", "O"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "\"Unique\" points at the identifier; \"for each employee on commission\" says some employees are not.",
        ar: "كلمة «فريد» تشير إلى المعرّف؛ وعبارة «لكل موظّف يتقاضى عمولة» تقول إن بعض الموظّفين لا يتقاضونها."
      },
      explain: {
        en: "1 # * — the unique employee number is the UID, and a UID is always mandatory too. 2 and 3 * — \"each employee's\" last name and hire date, so every instance has a value. 4 o — only employees on commission have one; the lecturer's gloss for potential is محتمل. Leaving any line unmarked is version 1's defect.",
        ar: "1 ‏# * — رقم الموظّف الفريد هو المعرّف الفريد (UID)، والمعرّف إلزامي دائمًا أيضًا. 2 و3 ‏* — الاسم الأخير وتاريخ التعيين «لكل موظّف»، فلكل مثيل قيمة. 4 ‏o — لا يملكها إلا من يتقاضى عمولة؛ وترجمة المحاضِرة لكلمة potential هي «محتمل». وترك أيّ سطر بلا علامة هو عيب الإصدار 1."
      }
    },
    {
      id: "t3l4q09", type: "mcq", level: "easy", topics: ["t3-attribute-marks", "t3-shared-convention"],
      q: {
        en: "A draft lists Salary (required) and Commission (if any) under EMPLOYEE. The rules it states are right. What is wrong with it?",
        ar: "تُدرج مسوّدةٌ تحت EMPLOYEE الخاصيّتين Salary (required) وCommission (if any). القواعد التي تقرّرها صحيحة. فما الخطأ فيها؟"
      },
      options: [
        { en: "Nothing: the meaning is clear in English, so the marks are not needed", ar: "لا شيء: المعنى واضح بالإنجليزية، فلا حاجة إلى العلامات" },
        { en: "Salary should be optional, since it changes over time", ar: "يجب أن يكون Salary اختياريًّا، لأنه يتغيّر مع الوقت" },
        { en: "Attributes should not be listed under the entity name at all", ar: "لا ينبغي إدراج الخصائص تحت اسم الكيان أصلًا" },
        { en: "It writes private words where every reader already knows * Salary and o Commission", ar: "يكتب كلمات خاصة حيث يعرف كل قارئ مسبقًا * Salary وo Commission" }
      ],
      answer: 3,
      hint: {
        en: "A rule stated in the author's own words is a private convention, even when the rule is right.",
        ar: "القاعدة المكتوبة بكلمات المؤلّف الخاصة عُرف خاص، حتى لو كانت القاعدة صحيحة."
      },
      explain: {
        en: "The convention already has a mark for each rule: * for mandatory, o for optional. Words like \"(required)\" are readable only in the author's language and invite variants — \"(needed)\", \"(must)\" — that each reader must decode. The slides do list attributes under the name; and salary changing has nothing to do with whether it may be empty.",
        ar: "للعُرف علامة لكل قاعدة: * للإلزامي وo للاختياري. أما كلمات مثل «(required)» فلا تُقرأ إلا بلغة المؤلّف، وتفتح الباب لصيغ أخرى — «(needed)» و«(must)» — على كل قارئ أن يفكّها. والشرائح تُدرج الخصائص تحت الاسم فعلًا؛ وتغيّر الراتب لا علاقة له بجواز أن يكون فارغًا."
      }
    },
    {
      id: "t3l4q10", type: "tf", level: "medium", topics: ["t3-hash-star", "t3-hash-uid"],
      q: {
        en: "The slide writes # ID while this track writes # * Employee ID, so on the slide's ERD an identifier may be left empty.",
        ar: "تكتب الشريحة ‎# ID‎ بينما يكتب هذا المسار ‎# * Employee ID‎، لذلك يجوز في مخطّط الشريحة أن يُترك المعرّف فارغًا."
      },
      truth: false,
      hint: {
        en: "What can an identifier with no value identify?",
        ar: "ماذا يستطيع أن يعرّف معرّفٌ لا قيمة له؟"
      },
      explain: {
        en: "False. Both say the same thing: a UID is always mandatory, because an identifier with no value identifies nothing. The * in # * only makes that visible. In SQL it is the same column either way — PRIMARY KEY, which never accepts an empty value.",
        ar: "خطأ. كلاهما يقول الشيء نفسه: المعرّف الفريد إلزامي دائمًا، لأن معرّفًا بلا قيمة لا يعرّف شيئًا. والنجمة في ‎# *‎ تجعل ذلك ظاهرًا فحسب. وفي SQL هو العمود نفسه في الحالتين — PRIMARY KEY، الذي لا يقبل قيمة فارغة أبدًا."
      }
    },
    {
      id: "t3l4q11", type: "trace", level: "hard", topics: ["t3-marks-enforced", "t3-hash-uid"],
      q: {
        en: "The lesson's employees table, built from version 2: employee_id NUMBER PRIMARY KEY, every * column NOT NULL, commission nullable. Dana (100) and Tyler (310) are in. The clerk keys in Omar with the wrong id:",
        ar: "جدول employees في الدرس، مبنيّ من الإصدار 2: ‏employee_id NUMBER PRIMARY KEY، وكل عمود عليه * هو NOT NULL، وcommission يقبل NULL. ‏Dana (100) وTyler (310) موجودان. يُدخل الموظّف المسؤول Omar برقم خاطئ:"
      },
      lang: "sql",
      code: "INSERT INTO employees\nVALUES (310, 'Omar', 'Haddad', '2024-05-02', 7000, NULL);",
      options: [
        { en: "Saved: every * column has a value, and commission may be empty", ar: "يُحفظ: لكل عمود عليه * قيمة، وcommission يجوز أن يكون فارغًا" },
        { en: "Refused: Wrong NULL value in NOT NULL column commission", ar: "يُرفض: Wrong NULL value in NOT NULL column commission" },
        { en: "Refused: Cannot insert record, because it already exists in primary key index", ar: "يُرفض: Cannot insert record, because it already exists in primary key index" },
        { en: "Saved, replacing Tyler's row with Omar's", ar: "يُحفظ، ويحلّ صفّ Omar محلّ صفّ Tyler" }
      ],
      answer: 2,
      hint: {
        en: "Check the marks in order: #, then each *, then the o. Which one does 310 meet?",
        ar: "افحص العلامات بالترتيب: ‏#، ثم كل *، ثم o. أيّها يصطدم به الرقم 310؟"
      },
      explain: {
        en: "Run in alasql: Cannot insert record, because it already exists in primary key index. That is the # answering: 310 already identifies Tyler, and a unique identifier cannot identify two people. The * columns are all filled, and the NULL commission is allowed by the o — which is why \"saved\" is tempting. A key never silently replaces a row.",
        ar: "عند التشغيل في alasql: ‏Cannot insert record, because it already exists in primary key index. هذه علامة # تجيب: الرقم 310 يعرّف Tyler سلفًا، والمعرّف الفريد لا يعرّف شخصين. أعمدة * كلها ممتلئة، وقيمة NULL في commission تسمح بها علامة o — ولهذا يُغري خيار «يُحفظ». والمفتاح لا يستبدل صفًّا بصمت أبدًا."
      },
      solution: { out: "Cannot insert record, because it already exists in primary key index" }
    },
    {
      id: "t3l4q12", type: "output", level: "medium", topics: ["t3-marks-enforced", "t3-attribute-marks"],
      q: {
        en: "Same table, Dana (24000) and Tyler (8000) in it. The two inserts are run one at a time, then the query. What does the query return?",
        ar: "الجدول نفسه، وفيه Dana ‏(24000) وTyler ‏(8000). تُنفَّذ عمليّتا الإدراج واحدة واحدة، ثم الاستعلام. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO employees (employee_id, first_name, last_name, hire_date)\nVALUES (316, 'Omar', 'Haddad', '2024-05-02');\n\nINSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)\nVALUES (316, 'Omar', 'Haddad', '2024-05-02', 7000);\n\nSELECT COUNT(*) AS staff, MIN(salary) AS lowest\nFROM employees;",
      blanks: [
        { accept: ["3"], label: { en: "staff", ar: "staff" } },
        { accept: ["7000"], label: { en: "lowest", ar: "lowest" } }
      ],
      hint: {
        en: "Salary carries *. Does the first insert leave anything behind?",
        ar: "يحمل Salary علامة *. هل يترك الإدراج الأول شيئًا وراءه؟"
      },
      explain: {
        en: "3 and 7000, run in alasql. The first insert is refused — Wrong NULL value in NOT NULL column salary — and stores nothing, so 316 is free for the second. The second omits commission and is saved: that is the o. Counting 4 assumes a refused row is half-saved; it is not, and because every row must have a salary, MIN finds Omar's 7000.",
        ar: "‏3 و7000، بالتشغيل في alasql. يُرفض الإدراج الأول — Wrong NULL value in NOT NULL column salary — ولا يُخزَّن شيء، فيبقى 316 متاحًا للثاني. والثاني يُغفل commission ويُحفظ: هذه علامة o. ومن عدّ 4 افترض أن الصفّ المرفوض يُحفظ نصفه؛ وهذا غير صحيح، ولأن لكل صفّ راتبًا لا بدّ منه، يجد MIN قيمة Omar ‏7000."
      },
      solution: { out: "staff | lowest\n3 | 7000" }
    },
    {
      id: "t3l4q13", type: "write", level: "hard", topics: ["t3-marks-enforced", "t3-marks-to-sql", "t3-attribute-marks"],
      q: {
        en: "Build the version 2 EMPLOYEE softbox as a table, mark for mark: # * Employee ID, * First Name, * Last Name, * Hire Date, * Salary, o Commission. Use employee_id, first_name, last_name, hire_date, salary, commission. Leave out the foreign keys.",
        ar: "ابنِ الصندوق المستدير EMPLOYEE من الإصدار 2 جدولًا، علامةً بعلامة: ‎# * Employee ID‎، و‎* First Name‎، و‎* Last Name‎، و‎* Hire Date‎، و‎* Salary‎، و‎o Commission‎. استعمل employee_id وfirst_name وlast_name وhire_date وsalary وcommission. اترك المفاتيح الأجنبية."
      },
      lang: "sql",
      lines: 9,
      starter: "CREATE TABLE employees (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\(", flags: "i", label: { en: "CREATE TABLE employees", ar: "CREATE TABLE employees" } },
        { re: "employee_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "# → employee_id is the PRIMARY KEY", ar: "# ← employee_id هو PRIMARY KEY" } },
        { re: "salary\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "* → salary NOT NULL", ar: "* ← salary NOT NULL" } },
        { re: "hire_date\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "* → hire_date NOT NULL", ar: "* ← hire_date NOT NULL" } },
        { re: "commission\\s+\\w+", flags: "i", label: { en: "o → a commission column", ar: "o ← عمود commission" } }
      ],
      forbid: [
        { re: "commission\\s+\\w+(\\s*\\(\\s*\\d+(\\s*,\\s*\\d+)?\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "commission must stay nullable: it carries o, and Dana earns no commission", ar: "يجب أن يبقى commission قابلًا لـ NULL: عليه علامة o، وDana لا تتقاضى عمولة" } }
      ],
      solution: {
        code: "CREATE TABLE employees (\n  employee_id NUMBER PRIMARY KEY,\n  first_name  VARCHAR(20) NOT NULL,\n  last_name   VARCHAR(20) NOT NULL,\n  hire_date   DATE NOT NULL,\n  salary      NUMBER NOT NULL,\n  commission  NUMBER\n);",
        en: "Checked in alasql: Dana's row with a NULL commission is saved, and an insert without salary is refused with Wrong NULL value in NOT NULL column salary.",
        ar: "تحقّقنا في alasql: يُحفظ صفّ Dana مع commission فارغ، ويُرفض إدراج بلا salary برسالة Wrong NULL value in NOT NULL column salary."
      },
      hint: {
        en: "Read each line's first character: # is one constraint, * another, o none at all.",
        ar: "اقرأ أول رمز في كل سطر: # قيد، و* قيد آخر، وo لا قيد إطلاقًا."
      },
      explain: {
        en: "One mark, one clause: # becomes PRIMARY KEY, each * becomes NOT NULL, and o becomes a plain column. The classic slip is to put NOT NULL on every column \"to be safe\" — then Dana, the president with no commission, cannot be saved, which is exactly the problem the lesson opened section 3 with.",
        ar: "علامة واحدة، عبارة واحدة: ‏# تصير PRIMARY KEY، وكل * تصير NOT NULL، وo تصير عمودًا عاديًّا. والزلّة المعتادة وضع NOT NULL على كل عمود «احتياطًا» — فلا يمكن عندها حفظ Dana، الرئيسة التي لا تتقاضى عمولة، وهي بالضبط المشكلة التي افتتح بها الدرس القسم 3."
      }
    },
    {
      id: "t3l4q14", type: "compare", level: "medium", topics: ["t3-attribute-marks", "t3-hash-uid"],
      q: {
        en: "Two versions of the EMPLOYEE softbox. Two builders will each build a table from one of them. Compare them.",
        ar: "إصداران للصندوق المستدير EMPLOYEE. سيبني كلٌّ من منفّذَين جدولًا من أحدهما. قارن بينهما."
      },
      lang: "text",
      codeA: "EMPLOYEE\nEmployee ID\nFirst Name\nLast Name\nHire Date\nSalary\nCommission",
      codeB: "EMPLOYEE\n# * Employee ID\n* First Name\n* Last Name\n* Hire Date\n* Salary\no Commission",
      options: [
        { en: "A is better: it is shorter, and the builder can work out the rules from the names", ar: "A أفضل: هو أقصر، ويستطيع المنفّذ أن يستنتج القواعد من الأسماء" },
        { en: "They hold the same information: the marks are decoration", ar: "يحملان المعلومات نفسها: العلامات زينة" },
        { en: "B is better: each line carries its rule, so two builders produce the same table", ar: "B أفضل: كل سطر يحمل قاعدته، فيُنتج المنفّذان الجدول نفسه" },
        { en: "B is better only because of the #; the * and o add nothing a builder needs", ar: "B أفضل بسبب # فقط؛ أما * وo فلا تضيفان شيئًا يحتاجه المنفّذ" }
      ],
      answer: 2,
      hint: {
        en: "From A alone: must Salary have a value? May Commission be empty? Will two builders guess alike?",
        ar: "من A وحده: هل يجب أن يكون لـ Salary قيمة؟ وهل يجوز أن يكون Commission فارغًا؟ وهل سيخمّن المنفّذان التخمين نفسه؟"
      },
      explain: {
        en: "A is version 1: the attributes are there but not their rules, so each builder guesses, and two guess differently. B is version 2, the slides' model. The * and o are not decoration — they decide NOT NULL or nullable, and a wrong guess on Commission refuses Dana. # alone settles only the identifier.",
        ar: "A هو الإصدار 1: الخصائص موجودة لكن قواعدها غائبة، فيخمّن كل منفّذ، ويختلف تخمين اثنين. وB هو الإصدار 2، نموذج الشرائح. وليست * وo زينة — فهما تقرّران NOT NULL أو قبول NULL، والتخمين الخاطئ في Commission يرفض Dana. وعلامة # وحدها لا تحسم إلا المعرّف."
      }
    },
    {
      id: "t3l4q15", type: "error", level: "easy", topics: ["t3-attribute-marks", "t3-spot-convention-breaks"],
      q: {
        en: "The scenario: \"We need to track each employee's first name, last name, hire date and salary. For each employee on commission, we also need to track potential commission.\" Which line of this softbox states the wrong rule?",
        ar: "السيناريو: «نحتاج إلى تتبّع الاسم الأول والاسم الأخير وتاريخ التعيين والراتب لكل موظّف. ولكل موظّف يتقاضى عمولة، نحتاج أيضًا إلى تتبّع العمولة المحتملة.» أيّ سطر في هذا الصندوق المستدير يقرّر قاعدة خاطئة؟"
      },
      lang: "text",
      code: "EMPLOYEE\n# * Employee ID\n* First Name\n* Last Name\n* Hire Date\no Salary\no Commission",
      answer: 6,
      solution: {
        code: "EMPLOYEE\n# * Employee ID\n* First Name\n* Last Name\n* Hire Date\n* Salary\no Commission",
        en: "Salary is tracked for each employee, so it is mandatory: * Salary.",
        ar: "يُتتبَّع الراتب لكل موظّف، فهو إلزامي: ‎* Salary‎."
      },
      hint: {
        en: "Which attributes does the scenario want \"for each employee\", and which only for some?",
        ar: "أيّ الخصائص يريدها السيناريو «لكل موظّف»، وأيّها لبعضهم فقط؟"
      },
      explain: {
        en: "Line 6: salary is in the list tracked for each employee, so it is *, not o. Line 7 looks similar but is right — commission is tracked only for employees on commission. Built as drawn, salary would be nullable and Omar's forgotten salary would be saved instead of refused.",
        ar: "السطر 6: الراتب ضمن ما يُتتبَّع لكل موظّف، فعلامته * لا o. والسطر 7 يشبهه لكنه صحيح — فالعمولة لا تُتتبَّع إلا لمن يتقاضاها. ولو بُني كما رُسم لصار salary يقبل NULL، ولحُفظ صفّ Omar الذي نُسي راتبه بدل أن يُرفض."
      }
    },

    /* ---------------------------------------------------- 4 · relationships */
    {
      id: "t3l4q16", type: "mcq", level: "easy", topics: ["t3-lowercase-relationship-name", "t3-relationship-drawing"],
      q: {
        en: "The EMPLOYEE–JOB line: each EMPLOYEE must hold one and only one JOB; each JOB may be held by one or more EMPLOYEEs. How are its names written?",
        ar: "خط EMPLOYEE–JOB: كل EMPLOYEE يجب أن يشغل JOB واحدة فقط؛ وكل JOB قد يشغلها EMPLOYEE واحد أو أكثر. كيف يُكتب اسما الخط؟"
      },
      options: [
        { en: "HOLD in the middle of the line", ar: "HOLD في منتصف الخط" },
        { en: "hold beside EMPLOYEE, held by beside JOB", ar: "hold بجانب EMPLOYEE، وheld by بجانب JOB" },
        { en: "hold beside JOB, held by beside EMPLOYEE", ar: "hold بجانب JOB، وheld by بجانب EMPLOYEE" },
        { en: "Hold beside EMPLOYEE, Held By beside JOB", ar: "Hold بجانب EMPLOYEE، وHeld By بجانب JOB" }
      ],
      answer: 1,
      hint: {
        en: "A name sits close to the entity it is assigned to — the one its sentence starts from.",
        ar: "يقع الاسم قريبًا من الكيان المخصّص له — الكيان الذي تبدأ منه جملته."
      },
      explain: {
        en: "\"Each EMPLOYEE must hold…\" starts at EMPLOYEE, so hold sits beside it; \"Each JOB may be held by…\" puts held by beside JOB. Both lowercase. Swapping the positions is tempting because hold points at the job, but the name belongs to the start of its sentence. HOLD in the middle is version 1's double mistake; Held By is in title case, not lowercase.",
        ar: "«Each EMPLOYEE must hold…» تبدأ من EMPLOYEE، فتقع hold بجانبه؛ و«Each JOB may be held by…» تضع held by بجانب JOB. وكلاهما بأحرف صغيرة. وتبديل الموضعين مغرٍ لأن hold تشير إلى الوظيفة، لكن الاسم ينتمي إلى بداية جملته. أما HOLD في المنتصف فخطأ الإصدار 1 المزدوج؛ وHeld By بأحرف أولى كبيرة، لا صغيرة."
      }
    },
    {
      id: "t3l4q17", type: "compare", level: "hard", topics: ["t3-relationship-drawing", "t3-lowercase-relationship-name"],
      q: {
        en: "Two drawings of EMPLOYEE–DEPARTMENT, as text. Compare them.",
        ar: "رسمان لخط EMPLOYEE–DEPARTMENT، موصوفان نصًّا. قارن بينهما."
      },
      lang: "text",
      codeA: "EMPLOYEE  ------ WORKS IN ----->  DEPARTMENT\n(plain line, arrowhead at DEPARTMENT, one name in the middle)",
      codeB: "EMPLOYEE  [solid, crow's foot] -- [dashed, single toe]  DEPARTMENT\n\"work in\" beside EMPLOYEE · \"responsible for\" beside DEPARTMENT",
      options: [
        { en: "A is enough: the arrow shows which way the employee works, so the rest can be added in the tables", ar: "A يكفي: يُظهر السهم في أيّ اتّجاه يعمل الموظّف، والباقي يُضاف في الجداول" },
        { en: "Both say the same thing; B only spells it out at greater length", ar: "كلاهما يقول الشيء نفسه؛ وB يفصّله تفصيلًا أطول فقط" },
        { en: "B is better only because its names are lowercase", ar: "B أفضل فقط لأن اسميه بالأحرف الصغيرة" },
        { en: "B is better: its halves say must or may, its ends say one or more, and each end has its own lowercase name", ar: "B أفضل: نصفاه يقولان «يجب» أو «قد»، وطرفاه يقولان واحد أو أكثر، ولكل طرف اسمه الخاص بالأحرف الصغيرة" }
      ],
      answer: 3,
      hint: {
        en: "Try to read four ERDish facts off A: must, how many, and the line's name from DEPARTMENT's side.",
        ar: "حاول أن تقرأ أربع حقائق ERDish من A: «يجب»، و«كم»، واسم الخط من جهة DEPARTMENT."
      },
      explain: {
        en: "A is version 1: an arrowhead is not an ERD mark, so no end says one or more, no half says must or may, and from DEPARTMENT the line has no name. B is version 2, from which both sentences can be read. Lowercase is one fix among several, so \"only because\" misses the halves and the ends. Leaving the rules for the tables is backwards: the tables are built from these marks.",
        ar: "A هو الإصدار 1: رأس السهم ليس علامة في ERD، فلا طرف يقول «واحد أو أكثر»، ولا نصف يقول «يجب» أو «قد»، ولا اسم للخط من جهة DEPARTMENT. وB هو الإصدار 2، ومنه تُقرأ الجملتان كلتاهما. والأحرف الصغيرة إصلاح واحد من عدّة إصلاحات، فعبارة «فقط لأن» تُغفل النصفين والطرفين. وترك القواعد للجداول عكسٌ للترتيب: فالجداول تُبنى من هذه العلامات."
      }
    },
    {
      id: "t3l4q18", type: "multi", level: "medium", topics: ["t3-case-tells-words-apart", "t3-entity-vs-table-name"],
      q: {
        en: "On a conforming ERD, which of these are written in UPPERCASE? Select all that apply.",
        ar: "في مخطّط ERD ملتزم بالعُرف، أيّ هذه يُكتب بالأحرف الكبيرة؟ اختر كل ما ينطبق."
      },
      options: [
        { code: "EMPLOYEE" },
        { code: "responsible for" },
        { code: "PRODUCT TYPE" },
        { code: "held by" },
        { code: "DEPARTMENT" },
        { code: "employees" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "In \"Each EMPLOYEE must work in one and only one DEPARTMENT\", the case tells you what kind of word each one is.",
        ar: "في «Each EMPLOYEE must work in one and only one DEPARTMENT»، تخبرك حالة الأحرف بنوع كل كلمة."
      },
      explain: {
        en: "Entity names are UPPERCASE: EMPLOYEE, PRODUCT TYPE, DEPARTMENT. Relationship names — responsible for, held by — are lowercase so they can never be mistaken for entities. employees is a table name; it belongs in SQL, not on the ERD, and is not an uppercase entity name.",
        ar: "أسماء الكيانات بالأحرف الكبيرة: EMPLOYEE وPRODUCT TYPE وDEPARTMENT. وأسماء العلاقات — responsible for وheld by — بالأحرف الصغيرة حتى لا تُحسب كيانات أبدًا. أما employees فاسم جدول، مكانه SQL لا المخطّط، وليس اسم كيان بالأحرف الكبيرة."
      }
    },
    {
      id: "t3l4q19", type: "complete", level: "medium", topics: ["t3-relationship-drawing", "t3-lowercase-relationship-name"],
      q: {
        en: "\"Each ORDER must be placed by one and only one CUSTOMER. Each CUSTOMER must place one or more ORDERs.\" Complete the line, written as [half, end] at each entity.",
        ar: "«Each ORDER must be placed by one and only one CUSTOMER. Each CUSTOMER must place one or more ORDERs.» أكمل الخط، مكتوبًا بصيغة [النصف، الطرف] عند كل كيان."
      },
      lang: "text",
      code: "line   CUSTOMER  [solid, single toe]  --  [____]  ORDER\nnames  \"place\" beside CUSTOMER · \"placed by\" beside ORDER",
      options: [
        { code: "dashed, crow's foot" },
        { code: "solid, crow's foot" },
        { code: "solid, single toe" },
        { code: "solid, arrowhead" }
      ],
      answer: 1,
      solution: {
        code: "line   CUSTOMER  [solid, single toe]  --  [solid, crow's foot]  ORDER\nnames  \"place\" beside CUSTOMER · \"placed by\" beside ORDER",
        en: "Both sentences say must, so both halves are solid; \"one or more ORDERs\" puts the crow's foot at ORDER.",
        ar: "الجملتان كلتاهما تقولان must، فالنصفان متّصلان؛ و«one or more ORDERs» تضع قدم الغراب عند ORDER."
      },
      hint: {
        en: "The half beside an entity comes from its own sentence's must or may; the end at an entity answers how many of it.",
        ar: "النصف المجاور للكيان يأتي من «must» أو «may» في جملته هو؛ والطرف عند الكيان يجيب: كم منه؟"
      },
      explain: {
        en: "solid, crow's foot. The ORDER half is solid because each ORDER must be placed by a customer. The ORDER end is a crow's foot because a customer places one or more orders. The dashed option reads the CUSTOMER sentence as may; the single toe would allow one order per customer; an arrowhead is not an ERD mark at all.",
        ar: "‏solid, crow's foot. نصف ORDER متّصل لأن كل ORDER يجب أن يقدّمه زبون. وطرف ORDER قدم غراب لأن الزبون يقدّم طلبًا واحدًا أو أكثر. وخيار المتقطّع يقرأ جملة CUSTOMER على أنها may؛ والإصبع الواحدة لا تسمح إلا بطلب واحد لكل زبون؛ ورأس السهم ليس علامة في ERD أصلًا."
      }
    },

    /* ---------------------------------------------------- 5 · checking a whole ERD */
    {
      id: "t3l4q20", type: "error", level: "medium", topics: ["t3-spot-convention-breaks", "t3-lowercase-relationship-name"],
      q: {
        en: "Run the six-check card down this text ERD. Which line breaks the convention?",
        ar: "مرّر بطاقة الفحوص الستّة على مخطّط ERD النصّي هذا. أيّ سطر يخالف العُرف؟"
      },
      lang: "text",
      code: "softbox  DEPARTMENT  # * Department ID   * Name\nsoftbox  EMPLOYEE    # * Employee ID   * First Name   * Last Name   o Commission\nsoftbox  JOB         # * Job ID   * Title   * Max Salary   * Min Salary\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  DEPARTMENT\nnames    \"work in\" beside EMPLOYEE · \"responsible for\" beside DEPARTMENT\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  JOB\nnames    \"hold\" in the middle of the line",
      answer: 7,
      solution: {
        code: "softbox  DEPARTMENT  # * Department ID   * Name\nsoftbox  EMPLOYEE    # * Employee ID   * First Name   * Last Name   o Commission\nsoftbox  JOB         # * Job ID   * Title   * Max Salary   * Min Salary\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  DEPARTMENT\nnames    \"work in\" beside EMPLOYEE · \"responsible for\" beside DEPARTMENT\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  JOB\nnames    \"hold\" beside EMPLOYEE · \"held by\" beside JOB",
        en: "Two names, one beside each entity: hold by EMPLOYEE, held by by JOB.",
        ar: "اسمان، واحد بجانب كل كيان: hold عند EMPLOYEE، وheld by عند JOB."
      },
      hint: {
        en: "Check 6: how many names does a line carry, and where?",
        ar: "الفحص 6: كم اسمًا يحمل الخط، وأين؟"
      },
      explain: {
        en: "Line 7 fails check 6: a relationship is named at both ends, each name beside the entity its sentence starts from. One name in the middle leaves JOB's sentence with no name. Being lowercase does not save it. Line 5 shows the right form; lines 1–3 and the halves and ends on 4 and 6 all pass.",
        ar: "السطر 7 يسقط في الفحص 6: العلاقة تُسمّى عند طرفيها، وكل اسم بجانب الكيان الذي تبدأ منه جملته. واسم واحد في المنتصف يترك جملة JOB بلا اسم. وكونه بالأحرف الصغيرة لا ينقذه. والسطر 5 يُظهر الشكل الصحيح؛ والأسطر 1–3 والأنصاف والأطراف في 4 و6 كلها تنجح."
      }
    },
    {
      id: "t3l4q21", type: "error", level: "hard", topics: ["t3-convention-checklist", "t3-spot-convention-breaks"],
      q: {
        en: "This draft breaks the convention on exactly two lines. Select both.",
        ar: "تخالف هذه المسوّدة العُرف في سطرين بالضبط. اختر كليهما."
      },
      lang: "text",
      code: "softbox  EMPLOYEE    # * Employee ID   * First Name   Last Name   o Commission\nsoftbox  DEPARTMENT  # * Department ID   * Name\nsoftbox  JOB         # * Job ID   * Title   * Max Salary   * Min Salary\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, arrowhead]  DEPARTMENT\nnames    \"work in\" beside EMPLOYEE · \"responsible for\" beside DEPARTMENT\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  JOB\nnames    \"hold\" beside EMPLOYEE · \"held by\" beside JOB",
      answer: [1, 4],
      solution: {
        code: "softbox  EMPLOYEE    # * Employee ID   * First Name   * Last Name   o Commission\nsoftbox  DEPARTMENT  # * Department ID   * Name\nsoftbox  JOB         # * Job ID   * Title   * Max Salary   * Min Salary\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  DEPARTMENT\nnames    \"work in\" beside EMPLOYEE · \"responsible for\" beside DEPARTMENT\nline     EMPLOYEE  [solid, crow's foot]  --  [dashed, single toe]  JOB\nnames    \"hold\" beside EMPLOYEE · \"held by\" beside JOB",
        en: "Line 1: * Last Name. Line 4: a single toe at DEPARTMENT, not an arrowhead.",
        ar: "السطر 1: ‎* Last Name‎. والسطر 4: إصبع واحدة عند DEPARTMENT، لا رأس سهم."
      },
      hint: {
        en: "Go down the card in order — shape, name, attributes, halves, ends, names — and look at every mark, not just the first few on a line.",
        ar: "انزل على البطاقة بالترتيب — الشكل، والاسم، والخصائص، والأنصاف، والأطراف، والأسماء — وانظر في كل علامة، لا في أوّل علامات السطر فقط."
      },
      explain: {
        en: "Line 1 fails check 3: Last Name has no mark, hidden among marked attributes; the scenario tracks it for each employee, so *. Line 4 fails check 5: an arrowhead is not an end — every end is a single toe or a crow's foot. Scanning the whole picture misses both; asking one question per mark finds them.",
        ar: "السطر 1 يسقط في الفحص 3: ‏Last Name بلا علامة، مختبئة بين خصائص معلَّمة؛ والسيناريو يتتبّعها لكل موظّف، فعلامتها *. والسطر 4 يسقط في الفحص 5: رأس السهم ليس طرفًا — فكل طرف إمّا إصبع واحدة وإمّا قدم غراب. والنظر إلى الصورة كلها مرّة واحدة يُفوّت الاثنين؛ أما طرح سؤال واحد لكل علامة فيكشفهما."
      }
    },
    {
      id: "t3l4q22", type: "order", level: "medium", topics: ["t3-er-diagramming", "t3-convention-checklist"],
      q: {
        en: "Put the steps for drawing the JOB entity from the slides' scenario into the order each one depends on the one before.",
        ar: "رتّب خطوات رسم الكيان JOB من سيناريو الشرائح بحيث تعتمد كل خطوة على التي قبلها."
      },
      items: [
        { en: "Find the thing of significance in the scenario: \"All employees hold a job\"", ar: "اعثر على الشيء ذي الأهمية في السيناريو: «All employees hold a job»" },
        { en: "Draw a softbox and write its singular, uppercase name: JOB", ar: "ارسم صندوقًا مستديرًا واكتب اسمه المفرد بالأحرف الكبيرة: JOB" },
        { en: "List its attributes under the name: Job ID, Title, Max Salary, Min Salary", ar: "أدرج خصائصه تحت الاسم: Job ID وTitle وMax Salary وMin Salary" },
        { en: "Put a mark before each attribute: # * Job ID, * Title, * Max Salary, * Min Salary", ar: "ضع علامة قبل كل خاصيّة: ‎# * Job ID‎ و‎* Title‎ و‎* Max Salary‎ و‎* Min Salary‎" },
        { en: "Draw the line from EMPLOYEE to JOB with its halves and ends", ar: "ارسم الخط من EMPLOYEE إلى JOB بنصفيه وطرفيه" },
        { en: "Write the lowercase names beside each end: hold, held by", ar: "اكتب الاسمين بالأحرف الصغيرة بجانب كل طرف: hold وheld by" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "You cannot mark an attribute you have not listed, nor name the end of a line you have not drawn.",
        ar: "لا يمكنك أن تعلّم خاصيّة لم تُدرجها، ولا أن تسمّي طرف خط لم ترسمه."
      },
      explain: {
        en: "Entity, then its attributes, then the relationships — the slides' order, and the card's. Each step needs the one before: the attributes go under a name, the marks go on listed attributes, and a name goes beside the end of a drawn line. Drawing lines first is tempting, but a line needs two softboxes to connect.",
        ar: "الكيان، ثم خصائصه، ثم العلاقات — ترتيب الشرائح وترتيب البطاقة. كل خطوة تحتاج إلى التي قبلها: الخصائص تُدرج تحت اسم، والعلامات توضع على خصائص مُدرجة، والاسم يُكتب بجانب طرف خط مرسوم. والبدء بالخطوط مغرٍ، لكن الخط يحتاج إلى صندوقين يصل بينهما."
      }
    },
    {
      id: "t3l4q23", type: "mcq", level: "hard", topics: ["t3-marks-to-sql", "t3-relationship-drawing"],
      q: {
        en: "The administrator builds employees from version 2 and writes department_id NUMBER NOT NULL. Which mark on the ERD is the NOT NULL read from?",
        ar: "يبني مدير قاعدة البيانات الجدول employees من الإصدار 2 ويكتب department_id NUMBER NOT NULL. من أيّ علامة في المخطّط قُرئت NOT NULL؟"
      },
      options: [
        { en: "The crow's foot at EMPLOYEE", ar: "قدم الغراب عند EMPLOYEE" },
        { en: "A * before Department ID inside the EMPLOYEE softbox", ar: "علامة * قبل Department ID داخل الصندوق المستدير EMPLOYEE" },
        { en: "The solid half of the line beside EMPLOYEE", ar: "النصف المتّصل من الخط بجانب EMPLOYEE" },
        { en: "The lowercase name work in", ar: "الاسم بالأحرف الصغيرة work in" }
      ],
      answer: 2,
      hint: {
        en: "One mark chooses which table gets the key; a different mark decides whether it may be empty.",
        ar: "علامة تختار أيّ جدول يأخذ المفتاح؛ وعلامة أخرى تقرّر هل يجوز أن يكون فارغًا."
      },
      explain: {
        en: "The solid EMPLOYEE half says each EMPLOYEE must work in a department, so the key may not be empty. The crow's foot chose the table — employees — not its nullability. There is no Department ID inside EMPLOYEE: a relationship is drawn as a line, never as an attribute. And the name work in becomes no column and no constraint at all.",
        ar: "النصف المتّصل عند EMPLOYEE يقول إن كل EMPLOYEE يجب أن يعمل في قسم، فلا يجوز أن يكون المفتاح فارغًا. أما قدم الغراب فاختارت الجدول — employees — لا قبوله NULL. ولا يوجد Department ID داخل EMPLOYEE: العلاقة تُرسم خطًّا، لا خاصيّة أبدًا. والاسم work in لا يصير عمودًا ولا قيدًا إطلاقًا."
      }
    },
    {
      id: "t3l4q24", type: "output", level: "hard", topics: ["t3-marks-to-sql", "t3-relationship-drawing", "t3-convention-checklist"],
      q: {
        en: "The lesson's three tables, built mark for mark from version 2: five jobs, five employees (Dana AD_PRES, Lawrence AC_MGR, Tyler SA_REP, Mariam SA_REP, Neil IT_PROG). What does the query return?",
        ar: "جداول الدرس الثلاثة، مبنيّة علامةً بعلامة من الإصدار 2: خمس وظائف وخمسة موظّفين (Dana ‏AD_PRES، وLawrence ‏AC_MGR، وTyler ‏SA_REP، وMariam ‏SA_REP، وNeil ‏IT_PROG). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT j.title\nFROM jobs j\nLEFT JOIN employees e ON e.job_id = j.job_id\nWHERE e.employee_id IS NULL;",
      blanks: [
        { accept: ["Stock Clerk"], label: { en: "title", ar: "title" } }
      ],
      hint: {
        en: "Jobs are AD_PRES, AC_MGR, SA_REP, IT_PROG and ST_CLERK. Which one has no row in employees — and which half of the line lets it exist?",
        ar: "الوظائف هي AD_PRES وAC_MGR وSA_REP وIT_PROG وST_CLERK. أيّها لا صفّ له في employees — وأيّ نصف من الخط يسمح بوجودها؟"
      },
      explain: {
        en: "Stock Clerk, run in alasql: the one job nobody holds. The dashed half beside JOB — \"each JOB may be held by\" — is what allows it; a solid half there would make a vacant job a broken rule. It cannot go the other way: the solid EMPLOYEE half made job_id NOT NULL, so no employee is without a job.",
        ar: "‏Stock Clerk، بالتشغيل في alasql: الوظيفة الوحيدة التي لا يشغلها أحد. والنصف المتقطّع بجانب JOB — «each JOB may be held by» — هو ما يسمح بذلك؛ ولو كان النصف هناك متّصلًا لصارت الوظيفة الشاغرة مخالفة للقاعدة. والعكس غير ممكن: فالنصف المتّصل عند EMPLOYEE جعل job_id ‏NOT NULL، فلا موظّف بلا وظيفة."
      },
      solution: { out: "title\nStock Clerk" }
    }
  ]
};
