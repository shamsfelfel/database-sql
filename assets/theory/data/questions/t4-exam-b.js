/* Question bank: T4 chapter test B -- Applied. A business scenario in every question: pick or
   build the model, place the attribute or the line, write the ERDish, write the SQL.
   Every SQL output quoted here was run in alasql (the course's own engine). */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t4-exam-b"] = {
  title: { en: "Chapter Test B — Applied", ar: "اختبار الفصل B — التطبيق" },
  intro: {
    en: "24 questions that make you do the work of the chapter. Each one hands you a business — the shop, the café, the decorating store, the ski resort, the college or the zoo — and asks you to choose the model, put an attribute or a line in the right box, write the ERDish sentence, build the tables or query them. Most are medium; six are hard. Allow about 45 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا تجعلك تؤدّي عمل الفصل بنفسك. كل سؤال يضع أمامك عملًا تجاريًّا — المتجر، أو المقهى، أو متجر الديكور، أو منتجع التزلّج، أو الكلية، أو حديقة الحيوان — ويطلب منك أن تختار النموذج، وأن تضع الخاصية أو الخطّ في الصندوق الصحيح، وأن تكتب جملة ERDish، وأن تبني الجداول أو تستعلم منها. أغلبها متوسّط، وستة منها صعبة. خصّص لها نحو 45 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ==================================================== choosing the model */
    {
      id: "t4bx01", type: "mcq", level: "easy",
      topics: ["t4-subtype-decision", "t4-specialized-attribute", "t4-other-subtype"],
      q: {
        en: "The ski resort's <code>SNOW SPORT</code> holds <code>SKI</code> (<code>* Ski Length</code>), <code>SNOWBOARD</code> (<code>* Board Length</code>), <code>CROSS COUNTRY</code> (<code>* Distance</code>) and <code>OTHER</code>. Its snowshoe walks have sat in <code>OTHER</code> until now, but from this season every walk has a <code>Trail Grade</code> that no other sport has. What is the right change?",
        ar: "يضمّ <code>SNOW SPORT</code> في منتجع التزلّج <code>SKI</code> (<code>* Ski Length</code>) و<code>SNOWBOARD</code> (<code>* Board Length</code>) و<code>CROSS COUNTRY</code> (<code>* Distance</code>) و<code>OTHER</code>. كانت جولات المشي بأحذية الثلج في <code>OTHER</code> حتى الآن، لكن ابتداءً من هذا الموسم صار لكل جولة <code>Trail Grade</code> لا يملكه أيّ نشاط آخر. ما التغيير الصحيح؟"
      },
      options: [
        { en: "Add <code>o Trail Grade</code> to <code>SNOW SPORT</code>, and leave the walks in <code>OTHER</code>",
          ar: "إضافة <code>o Trail Grade</code> إلى <code>SNOW SPORT</code>، وإبقاء الجولات في <code>OTHER</code>" },
        { en: "Add <code>SNOWSHOE</code> inside <code>SNOW SPORT</code>, beside <code>SKI</code>, with <code>* Trail Grade</code>; the walks leave <code>OTHER</code>",
          ar: "إضافة <code>SNOWSHOE</code> داخل <code>SNOW SPORT</code> بجانب <code>SKI</code>، وفيه <code>* Trail Grade</code>؛ وتخرج الجولات من <code>OTHER</code>" },
        { en: "Add <code>SNOWSHOE</code> inside <code>OTHER</code>, with <code>* Trail Grade</code>",
          ar: "إضافة <code>SNOWSHOE</code> داخل <code>OTHER</code>، وفيه <code>* Trail Grade</code>" },
        { en: "Draw <code>SNOWSHOE</code> as a new entity beside <code>SNOW SPORT</code>, with its own <code># Sport ID</code>, <code>* Name</code> and <code>* Trail Grade</code>",
          ar: "رسم <code>SNOWSHOE</code> كيانًا جديدًا بجانب <code>SNOW SPORT</code>، له <code># Sport ID</code> و<code>* Name</code> و<code>* Trail Grade</code> خاصّة به" }
      ],
      answer: 1,
      hint: {
        en: "Run the four questions of the subtype decision: a kind of? something of its own? the same basis as its siblings? how deep?",
        ar: "طبّق أسئلة قرار النوع الفرعي الأربعة: هل هو نوع من؟ هل له شيء خاص به؟ هل يجيب عن سؤال إخوته نفسه؟ وعلى أيّ عمق؟"
      },
      explain: {
        en: "A snowshoe walk is a kind of snow sport, has an attribute of its own, answers \"what kind of sport?\" like <code>SKI</code>, and sits at level 1: it earns a box beside its siblings, and <code>OTHER</code> keeps only what is still unnamed. <code>o Trail Grade</code> on the supertype is tempting because it adds no box, but it makes the grade optional for every sport and mandatory for none — a hidden rule. A separate entity repeats the ID and the name and forgets that a walk is a snow sport.",
        ar: "جولة المشي بأحذية الثلج نوع من الرياضات الثلجية، ولها خاصية خاصّة بها، وتجيب عن «أيّ نوع من الرياضة؟» مثل <code>SKI</code>، وتقع في المستوى 1: فهي تستحقّ صندوقًا بجانب إخوتها، ولا يبقى في <code>OTHER</code> إلا ما لم يُسمَّ بعد. وإضافة <code>o Trail Grade</code> إلى النوع الأعلى مغرية لأنها لا تضيف صندوقًا، لكنها تجعل الدرجة اختيارية لكل رياضة وإلزامية لا لأيّ منها — قاعدة مخفيّة. أمّا الكيان المنفصل فيكرّر الرقم والاسم وينسى أن الجولة رياضة ثلجية."
      }
    },

    {
      id: "t4bx02", type: "contrast", level: "medium",
      topics: ["t4-relationship-placement", "t4-common-listed-once", "t4-specialized-attribute", "t4-subtype-relationship"],
      q: {
        en: "The café now serves eat-in, to-go and delivery orders. Its owner says: every order has an order time and an amount and is taken by one staff member; any order may use a discount code; an eat-in order has a table number; a delivery order has an address and is delivered by one driver. Where is each item drawn?",
        ar: "صار المقهى يقدّم طلبات للأكل في المكان وللأخذ وللتوصيل. يقول صاحبه: لكل طلب وقت ومبلغ، ويستلمه موظف واحد؛ ويجوز لأيّ طلب أن يستعمل رمز خصم؛ ولطلب الأكل في المكان رقم طاولة؛ ولطلب التوصيل عنوان، ويوصله سائق واحد. أين يُرسم كل بند؟"
      },
      concepts: [
        { en: "On <code>ORDER</code>, the supertype", ar: "على <code>ORDER</code>، النوع الأعلى" },
        { en: "On a subtype", ar: "على نوع فرعي" }
      ],
      rows: [
        { s: { en: "<code>* Order Time</code>", ar: "<code>* Order Time</code>" }, a: 0 },
        { s: { en: "The line to <code>DRIVER</code>", ar: "الخطّ إلى <code>DRIVER</code>" }, a: 1 },
        { s: { en: "The line to <code>STAFF MEMBER</code>", ar: "الخطّ إلى <code>STAFF MEMBER</code>" }, a: 0 },
        { s: { en: "<code>* Table Number</code>", ar: "<code>* Table Number</code>" }, a: 1 },
        { s: { en: "<code>o Discount Code</code>", ar: "<code>o Discount Code</code>" }, a: 0 },
        { s: { en: "<code>* Delivery Address</code>", ar: "<code>* Delivery Address</code>" }, a: 1 }
      ],
      hint: {
        en: "For each item ask: is it true of every order, whatever its kind? A relationship is placed by the same test as an attribute.",
        ar: "اسأل عن كل بند: هل يصدق على كل طلب أيًّا كان نوعه؟ والعلاقة تُوضع بالاختبار نفسه الذي توضع به الخاصية."
      },
      explain: {
        en: "Order time, the staff member and the discount code belong to every order, so they are drawn once on <code>ORDER</code> and inherited by every subtype. The discount code is optional, but optional for all — that is still common. The table number, the address and the driver belong to one kind each, so they sit inside <code>EAT IN</code> or <code>DELIVERY</code>. Drawing the driver line on <code>ORDER</code> would hand a driver to every eat-in order by inheritance.",
        ar: "وقت الطلب والموظف ورمز الخصم تخصّ كل طلب، فتُرسم مرّة واحدة على <code>ORDER</code> وترثها كل الأنواع الفرعية. ورمز الخصم اختياري، لكنه اختياري للجميع — فهو مشترك أيضًا. أمّا رقم الطاولة والعنوان والسائق فيخصّ كلٌّ منها نوعًا واحدًا، فتوضع داخل <code>EAT IN</code> أو <code>DELIVERY</code>. ورسم خطّ السائق على <code>ORDER</code> يعطي كل طلب أكل في المكان سائقًا بالوراثة."
      }
    },

    {
      id: "t4bx03", type: "fill", level: "easy",
      topics: ["t4-subtype-relationship", "t4-inherited-relationship"],
      q: {
        en: "The same café. Each delivery is delivered by exactly one driver; a newly hired driver may not have delivered anything yet, and most deliver many. The <code>taken by</code> line to <code>STAFF MEMBER</code> is drawn once, to <code>ORDER</code>, solid at <code>ORDER</code>. Complete the ERDish.",
        ar: "المقهى نفسه. كل توصيلة يوصلها سائق واحد بالضبط؛ وقد لا يكون السائق المعيَّن حديثًا قد أوصل شيئًا بعد، وأغلب السائقين يوصلون كثيرًا. وخطّ <code>taken by</code> إلى <code>STAFF MEMBER</code> مرسوم مرّة واحدة إلى <code>ORDER</code>، متّصلًا عند <code>ORDER</code>. أكمل جمل ERDish."
      },
      lang: "erdish",
      code: "Each DELIVERY ____1____ delivered by ____2____ DRIVER.\nEach DRIVER ____3____ deliver ____4____ DELIVERIES.\nEach TO GO ____5____ taken by one and only one STAFF MEMBER.",
      blanks: [
        { accept: ["must be", "MUST BE", "Must be"] },
        { accept: ["one and only one", "ONE AND ONLY ONE", "One and only one"] },
        { accept: ["may", "MAY", "May"] },
        { accept: ["one or more", "ONE OR MORE", "One or more"] },
        { accept: ["must be", "MUST BE", "Must be"] }
      ],
      hint: {
        en: "Optionality comes from the end you start reading at; cardinality from the far end. For the last sentence, ask where the line is drawn and who inherits it.",
        ar: "الاختيارية تُقرأ من الطرف الذي تبدأ منه، والعدد (cardinality) من الطرف الآخر. وفي الجملة الأخيرة اسأل: أين رُسم الخطّ، ومن يرثه؟"
      },
      explain: {
        en: "A delivery cannot exist without its driver: <em>must be</em>, <em>one and only one</em>. A driver may have none yet: <em>may</em>, and at the other end a crow's foot: <em>one or more</em>. The last sentence is not drawn anywhere — it is inherited: the line is on <code>ORDER</code>, every <code>TO GO</code> is an <code>ORDER</code>, so the solid half comes with it and the answer is <em>must be</em>.",
        ar: "لا توجد توصيلة بلا سائقها: <em>must be</em> و<em>one and only one</em>. وقد لا يكون للسائق توصيلات بعد: <em>may</em>، وفي الطرف الآخر قدم غراب: <em>one or more</em>. أمّا الجملة الأخيرة فليست مرسومة في أيّ مكان — إنها موروثة: الخطّ على <code>ORDER</code>، وكل <code>TO GO</code> هو <code>ORDER</code>، فيأتي النصف المتّصل معه، والجواب <em>must be</em>."
      }
    },

    /* ==================================================== building the tables */
    {
      id: "t4bx04", type: "write", level: "medium",
      topics: ["t4-inheritance", "t4-subtype-relationship", "t4-specialized-attribute"],
      q: {
        en: "The café builds its model as a supertype table plus subtype tables. <code>orders(order_id, order_time, amount)</code> and <code>drivers(driver_id, name)</code> exist. Write <code>CREATE TABLE deliveries</code> for the subtype <code>DELIVERY</code>, which has <code>* Delivery Address</code> and <em>Each DELIVERY must be delivered by one and only one DRIVER</em>. Use <code>order_id</code>, <code>delivery_address</code> (<code>VARCHAR(60)</code>) and <code>driver_id</code>, and declare each key on its own column.",
        ar: "يبني المقهى نموذجه جدولًا للنوع الأعلى وجداول للأنواع الفرعية. الجدولان <code>orders(order_id, order_time, amount)</code> و<code>drivers(driver_id, name)</code> موجودان. اكتب <code>CREATE TABLE deliveries</code> للنوع الفرعي <code>DELIVERY</code>، وله <code>* Delivery Address</code>، و<em>Each DELIVERY must be delivered by one and only one DRIVER</em>. استعمل <code>order_id</code> و<code>delivery_address</code> (<code>VARCHAR(60)</code>) و<code>driver_id</code>، وصرّح بكل مفتاح على عموده."
      },
      lang: "sql",
      lines: 7,
      starter: "CREATE TABLE deliveries (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+deliveries\\s*\\(", flags: "i",
          label: { en: "creates the table deliveries", ar: "يُنشئ الجدول deliveries" } },
        { re: "(\\border_id\\s+\\w+[^,;]*\\bPRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*order_id\\s*\\))", flags: "i",
          label: { en: "order_id is the primary key: a delivery at most once", ar: "order_id هو المفتاح الأساسي: التوصيلة مرّة واحدة على الأكثر" } },
        { re: "REFERENCES\\s+orders\\s*\\(\\s*order_id\\s*\\)", flags: "i",
          label: { en: "order_id references orders: every delivery is an order", ar: "order_id يشير إلى orders: كل توصيلة طلب" } },
        { re: "\\bdelivery_address\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "delivery_address is NOT NULL, because it is *", ar: "delivery_address من نوع NOT NULL لأنها *" } },
        { re: "\\bdriver_id\\s+\\w+[^,;]*(NOT\\s+NULL[^,;]*REFERENCES\\s+drivers\\s*\\(\\s*driver_id\\s*\\)|REFERENCES\\s+drivers\\s*\\(\\s*driver_id\\s*\\)[^,;]*NOT\\s+NULL)", flags: "i",
          label: { en: "driver_id is NOT NULL and references drivers: the solid half at DELIVERY", ar: "driver_id من نوع NOT NULL ويشير إلى drivers: النصف المتّصل عند DELIVERY" } }
      ],
      forbid: [
        { re: "\\b(order_time|amount)\\b", flags: "i",
          label: { en: "order_time and amount are inherited: they live in orders only", ar: "order_time وamount موروثتان: مكانهما orders وحده" } }
      ],
      hint: {
        en: "The subtype table holds only what is the subtype's own, plus one key that does two jobs. The driver line ends on <code>DELIVERY</code>, so its key lives here.",
        ar: "لا يحمل جدول النوع الفرعي إلا ما يخصّه، ومعه مفتاح واحد يؤدّي عملين. وخطّ السائق ينتهي عند <code>DELIVERY</code>، فمفتاحه هنا."
      },
      explain: {
        en: "<code>order_id</code> as primary key makes an order a delivery at most once; as a foreign key to <code>orders</code> it makes every delivery an order — inwards-out, enforced. The address is the subtype's own <code>*</code>, so <code>NOT NULL</code>. The driver line is a subtype relationship, solid at <code>DELIVERY</code>, so <code>driver_id</code> is <code>NOT NULL REFERENCES drivers</code>, here and in no other table. Copying <code>amount</code> in would draw a common attribute twice.",
        ar: "<code>order_id</code> مفتاحًا أساسيًّا يجعل الطلب توصيلةً مرّة واحدة على الأكثر؛ ومفتاحًا أجنبيًّا إلى <code>orders</code> يجعل كل توصيلة طلبًا — القراءة من الداخل إلى الخارج، مفروضة. والعنوان <code>*</code> خاص بالنوع الفرعي، فهو <code>NOT NULL</code>. وخطّ السائق علاقة نوع فرعي، متّصل عند <code>DELIVERY</code>، فيكون <code>driver_id</code> بقيد <code>NOT NULL REFERENCES drivers</code>، هنا لا في أيّ جدول آخر. ونسخ <code>amount</code> إليه يرسم خاصية مشتركة مرّتين."
      },
      solution: {
        code: "CREATE TABLE deliveries (\n  order_id         NUMBER      PRIMARY KEY REFERENCES orders(order_id),\n  delivery_address VARCHAR(60) NOT NULL,\n  driver_id        NUMBER      NOT NULL REFERENCES drivers(driver_id)\n);",
        en: "Run in alasql beside orders and drivers: (6, '12 Harbour Road', 1) is accepted; an order_id not in orders is refused (Foreign key \"8\" not found in table \"orders\"), so is an unknown driver (Foreign key \"3\" not found in table \"drivers\"), and a row with no driver (Wrong NULL value in NOT NULL column driver_id).",
        ar: "نُفّذ في alasql بجانب orders وdrivers: الصفّ (6, '12 Harbour Road', 1) مقبول؛ ويُرفض order_id غير موجود في orders (Foreign key \"8\" not found in table \"orders\")، وكذلك سائق مجهول (Foreign key \"3\" not found in table \"drivers\")، وصفّ بلا سائق (Wrong NULL value in NOT NULL column driver_id)."
      }
    },

    {
      id: "t4bx05", type: "write", level: "hard",
      topics: ["t4-type-attribute", "t4-type-column-check", "t4-hidden-rule"],
      q: {
        en: "Before deliveries, the café served two ways: <code>EAT IN</code> (<code>* Table Number</code>) and <code>TO GO</code> (<code>* Pickup Time</code>). Build it as <em>one</em> table. Write <code>CREATE TABLE orders</code> with <code>order_id</code> (<code>NUMBER</code>, primary key), <code>order_time</code> (<code>VARCHAR(5)</code>), <code>amount</code> (<code>NUMBER</code>), <code>order_type</code> (<code>VARCHAR(6)</code>: <code>'EAT IN'</code> or <code>'TO GO'</code>), <code>table_number</code> (<code>NUMBER</code>) and <code>pickup_time</code> (<code>VARCHAR(5)</code>). Every order has a time, an amount and a type; an eat-in order must have a table number and no pickup time; a to-go order the reverse.",
        ar: "قبل التوصيل كان المقهى يقدّم طريقتين: <code>EAT IN</code> (<code>* Table Number</code>) و<code>TO GO</code> (<code>* Pickup Time</code>). ابنه <em>جدولًا واحدًا</em>. اكتب <code>CREATE TABLE orders</code> بالأعمدة <code>order_id</code> (<code>NUMBER</code>، المفتاح الأساسي) و<code>order_time</code> (<code>VARCHAR(5)</code>) و<code>amount</code> (<code>NUMBER</code>) و<code>order_type</code> (<code>VARCHAR(6)</code>: <code>'EAT IN'</code> أو <code>'TO GO'</code>) و<code>table_number</code> (<code>NUMBER</code>) و<code>pickup_time</code> (<code>VARCHAR(5)</code>). لكل طلب وقت ومبلغ ونوع؛ ويجب أن يكون لطلب الأكل في المكان رقم طاولة ولا وقت استلام؛ وطلب الأخذ بالعكس."
      },
      lang: "sql",
      lines: 12,
      starter: "CREATE TABLE orders (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+orders\\s*\\(", flags: "i",
          label: { en: "creates the table orders", ar: "يُنشئ الجدول orders" } },
        { re: "\\border_type\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?[^,;]*\\bNOT\\s+NULL", flags: "i",
          label: { en: "order_type is NOT NULL: every order is at least one kind", ar: "order_type من نوع NOT NULL: كل طلب من نوع واحد على الأقل" } },
        { re: "IN\\s*\\(\\s*[\"'](EAT IN|TO GO)[\"']\\s*,\\s*[\"'](EAT IN|TO GO)[\"']\\s*\\)", flags: "i",
          label: { en: "a CHECK lists the two kinds", ar: "قيد CHECK يسرد النوعين" } },
        { re: "\\btable_number\\s+IS\\s+NOT\\s+NULL", flags: "i",
          label: { en: "an eat-in order must have its table number (tied to order_type in a CHECK)", ar: "طلب الأكل في المكان يجب أن يحمل رقم طاولته (مربوطًا بـ order_type في CHECK)" } },
        { re: "\\bpickup_time\\s+IS\\s+NOT\\s+NULL", flags: "i",
          label: { en: "a to-go order must have its pickup time (tied to order_type in a CHECK)", ar: "طلب الأخذ يجب أن يحمل وقت استلامه (مربوطًا بـ order_type في CHECK)" } }
      ],
      forbid: [
        { re: "\\btable_number\\s+NUMBER\\s+NOT\\s+NULL", flags: "i",
          label: { en: "table_number cannot be NOT NULL: a to-go order has none", ar: "لا يمكن أن يكون table_number من نوع NOT NULL: طلب الأخذ بلا طاولة" } },
        { re: "\\bpickup_time\\s+VARCHAR\\s*\\(\\s*\\d+\\s*\\)\\s+NOT\\s+NULL", flags: "i",
          label: { en: "pickup_time cannot be NOT NULL: an eat-in order has none", ar: "لا يمكن أن يكون pickup_time من نوع NOT NULL: طلب الأكل في المكان بلا وقت استلام" } }
      ],
      hint: {
        en: "Each subtype's <code>*</code> is mandatory for one kind and absent for the other, so it cannot sit on its column alone. Write one condition per subtype box and join them with <code>OR</code> in a table-level <code>CHECK</code>.",
        ar: "علامة <code>*</code> في كل نوع فرعي إلزامية لنوع وغائبة عن الآخر، فلا يمكن أن توضع على عمودها وحده. اكتب شرطًا لكل صندوق نوع فرعي واربطها بـ <code>OR</code> في قيد <code>CHECK</code> على مستوى الجدول."
      },
      explain: {
        en: "<code>NOT NULL</code> on <code>order_type</code> plus the <code>IN</code> list give every order exactly one kind — rules two and three for a single row. The two subtype attributes must stay nullable, because each is empty for the other kind; their rules move into a table-level <code>CHECK</code> that says, per kind, what it must have and must not have. Putting <code>NOT NULL</code> on <code>table_number</code> is the tempting shortcut: it would refuse every to-go order.",
        ar: "<code>NOT NULL</code> على <code>order_type</code> مع قائمة <code>IN</code> يعطيان كل طلب نوعًا واحدًا بالضبط — القاعدتان الثانية والثالثة لصفّ واحد. ويجب أن تبقى خاصيتا النوعين الفرعيين قابلتين لـ NULL، لأن كلًّا منهما فارغة في النوع الآخر؛ فتنتقل قاعدتاهما إلى قيد <code>CHECK</code> على مستوى الجدول يقول لكل نوع ما يجب أن يحمله وما يجب ألّا يحمله. ووضع <code>NOT NULL</code> على <code>table_number</code> هو الاختصار المغري: سيرفض كل طلب أخذ."
      },
      solution: {
        code: "CREATE TABLE orders (\n  order_id     NUMBER     PRIMARY KEY,\n  order_time   VARCHAR(5) NOT NULL,\n  amount       NUMBER     NOT NULL,\n  order_type   VARCHAR(6) NOT NULL\n               CHECK (order_type IN ('EAT IN', 'TO GO')),\n  table_number NUMBER,\n  pickup_time  VARCHAR(5),\n  CHECK ( (order_type = 'EAT IN' AND table_number IS NOT NULL AND pickup_time IS NULL)\n       OR (order_type = 'TO GO'  AND pickup_time IS NOT NULL AND table_number IS NULL))\n);",
        en: "Run in alasql: an eat-in order with a table and a to-go order with a pickup time are accepted; an eat-in order with no table, a to-go order with a table, and a 'DELIVERY' order are each refused with Violation of CHECK constraint. (Leave unused columns out of the INSERT column list: this engine treats a typed NULL in a NUMBER column as a value.)",
        ar: "نُفّذ في alasql: يُقبل طلب أكل في المكان برقم طاولة وطلب أخذ بوقت استلام؛ ويُرفض كلٌّ من طلب أكل في المكان بلا طاولة، وطلب أخذ برقم طاولة، وطلب من نوع 'DELIVERY'، برسالة Violation of CHECK constraint. (اترك الأعمدة غير المستعملة خارج قائمة أعمدة INSERT: هذا المحرّك يعامل NULL المكتوبة في عمود NUMBER على أنها قيمة.)"
      }
    },

    /* ==================================================== placing lines */
    {
      id: "t4bx06", type: "mcq", level: "easy",
      topics: ["t4-relationship-placement", "t4-inherited-relationship", "t4-subtype-relationship"],
      q: {
        en: "The shop's bank wants more detail. Every cheque is drawn on one <code>BANK</code>; every credit card is issued by one <code>BANK</code>; a cash payment has no bank. <code>PAYMENT</code> holds <code>CASH</code>, <code>CHECK</code> and <code>CREDIT CARD</code>. How is <code>BANK</code> drawn?",
        ar: "يريد بنك المتجر تفاصيل أكثر. كل شيك مسحوب على <code>BANK</code> واحد؛ وكل بطاقة ائتمان يصدرها <code>BANK</code> واحد؛ والدفعة النقدية بلا بنك. يضمّ <code>PAYMENT</code> الأنواع <code>CASH</code> و<code>CHECK</code> و<code>CREDIT CARD</code>. كيف يُرسم <code>BANK</code>؟"
      },
      options: [
        { en: "One line from <code>PAYMENT</code> to <code>BANK</code>, solid at <code>PAYMENT</code>",
          ar: "خطّ واحد من <code>PAYMENT</code> إلى <code>BANK</code>، متّصل عند <code>PAYMENT</code>" },
        { en: "<code>BANK</code> as a subtype inside <code>PAYMENT</code>, beside <code>CHECK</code>",
          ar: "<code>BANK</code> نوعًا فرعيًّا داخل <code>PAYMENT</code>، بجانب <code>CHECK</code>" },
        { en: "A separate entity, with one line from <code>CHECK</code> and one from <code>CREDIT CARD</code>, each solid at the payment's end",
          ar: "كيان منفصل، بخطّ من <code>CHECK</code> وخطّ من <code>CREDIT CARD</code>، كلٌّ منهما متّصل عند طرف الدفعة" },
        { en: "One line from <code>PAYMENT</code> to <code>BANK</code>, dashed at <code>PAYMENT</code>, so that cash may have no bank",
          ar: "خطّ واحد من <code>PAYMENT</code> إلى <code>BANK</code>، متقطّع عند <code>PAYMENT</code>، ليجوز ألّا يكون للنقد بنك" }
      ],
      answer: 2,
      hint: {
        en: "A line on the supertype is inherited by every subtype, solid or dashed half included. Is the bank true of every payment?",
        ar: "الخطّ على النوع الأعلى يرثه كل نوع فرعي، بنصفه المتّصل أو المتقطّع. هل البنك صحيح لكل دفعة؟"
      },
      explain: {
        en: "The bank belongs to cheques and cards only, so it is two subtype relationships, exactly like the customer line. A solid line on <code>PAYMENT</code> gives every cash payment a bank by inheritance. Making it dashed is the tempting fix, but it loses the rule — a cheque could then have no bank, which the business forbids. A bank is not a kind of payment, so it cannot be a box inside.",
        ar: "البنك يخصّ الشيكات والبطاقات وحدها، فهو علاقتا نوع فرعي، تمامًا مثل خطّ الزبون. والخطّ المتّصل على <code>PAYMENT</code> يعطي كل دفعة نقدية بنكًا بالوراثة. وجعله متقطّعًا هو الإصلاح المغري، لكنه يُضيّع القاعدة — إذ يصير ممكنًا أن يكون شيك بلا بنك، وهذا ما يمنعه العمل. والبنك ليس نوعًا من الدفعات، فلا يكون صندوقًا داخلها."
      }
    },

    {
      id: "t4bx07", type: "error", level: "medium",
      topics: ["t4-common-listed-once", "t4-wall-covering", "t4-specialized-attribute"],
      q: {
        en: "The decorating store's diagram: <code>WALL COVERING</code> <code># Code * Description * Price</code>; <code>PAINT</code> <code>* Litres</code>; <code>FABRIC</code> <code>* Material</code>. A developer built it as a supertype table plus subtype tables. Which lines do not build what the diagram draws? Choose every one.",
        ar: "رسم متجر الديكور: <code>WALL COVERING</code> <code># Code * Description * Price</code>؛ و<code>PAINT</code> <code>* Litres</code>؛ و<code>FABRIC</code> <code>* Material</code>. بناه مطوّر جدولًا للنوع الأعلى وجداول للأنواع الفرعية. أيّ الأسطر لا تبني ما يرسمه المخطّط؟ اختر كل سطر منها."
      },
      lang: "sql",
      code: "CREATE TABLE wall_coverings (\n  code        VARCHAR(5)  PRIMARY KEY,\n  description VARCHAR(40) NOT NULL,\n  price       NUMBER      NOT NULL);\nCREATE TABLE paints (\n  code   VARCHAR(5) PRIMARY KEY REFERENCES wall_coverings(code),\n  litres NUMBER);\nCREATE TABLE fabrics (\n  code     VARCHAR(5)  PRIMARY KEY REFERENCES wall_coverings(code),\n  material VARCHAR(20) NOT NULL,\n  price    NUMBER      NOT NULL);",
      answer: [7, 11],
      solution: {
        code: "CREATE TABLE wall_coverings (\n  code        VARCHAR(5)  PRIMARY KEY,\n  description VARCHAR(40) NOT NULL,\n  price       NUMBER      NOT NULL);\nCREATE TABLE paints (\n  code   VARCHAR(5) PRIMARY KEY REFERENCES wall_coverings(code),\n  litres NUMBER     NOT NULL);\nCREATE TABLE fabrics (\n  code     VARCHAR(5)  PRIMARY KEY REFERENCES wall_coverings(code),\n  material VARCHAR(20) NOT NULL);",
        en: "litres gains NOT NULL; price leaves fabrics, because it is already in wall_coverings.",
        ar: "يصير litres بقيد NOT NULL؛ ويخرج price من fabrics، لأنه موجود أصلًا في wall_coverings."
      },
      hint: {
        en: "Read every mark: a <code>*</code> becomes <code>NOT NULL</code>. And ask of every column in a subtype table: is it that subtype's own?",
        ar: "اقرأ كل علامة: <code>*</code> تصير <code>NOT NULL</code>. واسأل عن كل عمود في جدول نوع فرعي: هل هو خاص بذلك النوع؟"
      },
      explain: {
        en: "Line 7: <code>* Litres</code> is mandatory for every paint, but <code>litres NUMBER</code> lets a paint have none. Line 11: <code>* Price</code> is listed once, in the supertype, and fabrics inherit it through the join on <code>code</code>; a second <code>price</code> column lets a fabric carry two prices that disagree. The two <code>REFERENCES</code> lines are right — they are how a subtype table inherits.",
        ar: "السطر 7: <code>* Litres</code> إلزامية لكل دهان، لكن <code>litres NUMBER</code> يسمح بدهان بلا لترات. والسطر 11: <code>* Price</code> مذكورة مرّة واحدة في النوع الأعلى، ويرثها القماش عبر الربط على <code>code</code>؛ وعمود <code>price</code> ثانٍ يسمح لقطعة قماش بسعرين مختلفين. أمّا سطرا <code>REFERENCES</code> فصحيحان — بهما يرث جدول النوع الفرعي."
      }
    },

    {
      id: "t4bx08", type: "mcq", level: "hard",
      topics: ["t4-card-nesting", "t4-inheritance-chain", "t4-relationship-placement", "t4-minimal-repair"],
      q: {
        en: "The shop's nested model is below. It now sells gift cards: a gift card payment has a card number and an <code>* Expiry Date</code>, and anyone may spend one — the shop never records who. What is the right change?",
        ar: "نموذج المتجر المتداخل أدناه. صار المتجر يبيع بطاقات الهدايا: لدفعة بطاقة الهدية رقم بطاقة و<code>* Expiry Date</code>، ويجوز لأيّ شخص أن ينفقها — ولا يسجّل المتجر من أنفقها. ما التغيير الصحيح؟"
      },
      lang: "text",
      code: "PAYMENT          # Payment ID  * Payment Date  * Amount\n  CASH\n  CHECK\n  CARD           * Card Number\n    CREDIT CARD  * Instalments\n    DEBIT CARD   o Cashback Amount\n  OTHER\nEach CHECK must be made by one and only one CUSTOMER.\nEach CARD must be made by one and only one CUSTOMER.",
      options: [
        { en: "<code>GIFT CARD</code> inside <code>CARD</code> with <code>* Expiry Date</code>; nothing else changes",
          ar: "<code>GIFT CARD</code> داخل <code>CARD</code> وفيه <code>* Expiry Date</code>؛ ولا يتغيّر شيء آخر" },
        { en: "<code>GIFT CARD</code> inside <code>CARD</code> with <code>* Expiry Date</code>, and the <code>made by</code> line moves from <code>CARD</code> to <code>CREDIT CARD</code> and <code>DEBIT CARD</code>",
          ar: "<code>GIFT CARD</code> داخل <code>CARD</code> وفيه <code>* Expiry Date</code>، وينتقل خطّ <code>made by</code> من <code>CARD</code> إلى <code>CREDIT CARD</code> و<code>DEBIT CARD</code>" },
        { en: "<code>GIFT CARD</code> inside <code>CARD</code> with <code>* Expiry Date</code>, and the line on <code>CARD</code> becomes <em>may be made by</em>",
          ar: "<code>GIFT CARD</code> داخل <code>CARD</code> وفيه <code>* Expiry Date</code>، ويصير الخطّ على <code>CARD</code> <em>may be made by</em>" },
        { en: "Gift card payments go in <code>OTHER</code>, and <code>PAYMENT</code> gains <code>o Expiry Date</code>",
          ar: "تذهب دفعات بطاقات الهدايا إلى <code>OTHER</code>، ويكسب <code>PAYMENT</code> الخاصية <code>o Expiry Date</code>" }
      ],
      answer: 1,
      hint: {
        en: "A gift card is a card, so it inherits everything on <code>CARD</code>. Is everything on <code>CARD</code> still true of every card?",
        ar: "بطاقة الهدية بطاقة، فترث كل ما على <code>CARD</code>. هل كل ما على <code>CARD</code> ما زال صحيحًا لكل بطاقة؟"
      },
      explain: {
        en: "Inside <code>CARD</code> a gift card inherits <code>* Card Number</code>, which is right, and the <code>made by</code> line, which is false: <em>Each GIFT CARD must be made by one and only one CUSTOMER</em>. The line is now shared by some cards, not all, so it moves down to the two that have it — two lines is not repetition here. Making it dashed is tempting, but it hides the rule for credit and debit cards. <code>OTHER</code> with <code>o Expiry Date</code> loses the card number and hides that every gift card must expire.",
        ar: "داخل <code>CARD</code> ترث بطاقة الهدية <code>* Card Number</code>، وهذا صحيح، وترث خطّ <code>made by</code>، وهذا خطأ: <em>Each GIFT CARD must be made by one and only one CUSTOMER</em>. صار الخطّ مشتركًا بين بعض البطاقات لا كلّها، فينزل إلى الاثنتين اللتين تحملانه — وخطّان هنا ليسا تكرارًا. وجعله متقطّعًا مغرٍ، لكنه يُخفي القاعدة عن بطاقات الائتمان والخصم. ووضعها في <code>OTHER</code> مع <code>o Expiry Date</code> يُضيّع رقم البطاقة ويُخفي أن كل بطاقة هدية يجب أن تنتهي صلاحيتها."
      }
    },

    /* ==================================================== querying the tables */
    {
      id: "t4bx09", type: "output", level: "medium",
      topics: ["t4-fourth-method", "t4-change-cost", "t4-exhaustive"],
      q: {
        en: "The café's tables: <code>orders</code> holds orders 1–7 with amounts 12, 7, 23, 9, 31, 18, 26 (126 in all). <code>eat_ins</code> holds 1, 3 and 5; <code>to_gos</code> holds 2 and 4. On Friday deliveries started: orders 6 and 7 went into a new <code>deliveries</code> table. The manager still runs last month's report. What does it return?",
        ar: "جداول المقهى: يضمّ <code>orders</code> الطلبات 1–7 بالمبالغ 12 و7 و23 و9 و31 و18 و26 (126 في المجموع). ويضمّ <code>eat_ins</code> الطلبات 1 و3 و5، و<code>to_gos</code> الطلبين 2 و4. يوم الجمعة بدأ التوصيل: دخل الطلبان 6 و7 جدولًا جديدًا اسمه <code>deliveries</code>. وما زال المدير يشغّل تقرير الشهر الماضي. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "SELECT 'EAT IN' AS kind, COUNT(*) AS n, SUM(o.amount) AS taken\nFROM orders o JOIN eat_ins e ON e.order_id = o.order_id\nUNION ALL\nSELECT 'TO GO', COUNT(*), SUM(o.amount)\nFROM orders o JOIN to_gos t ON t.order_id = o.order_id;",
      options: [
        { en: "One row: 7 orders, 126",
          ar: "صفّ واحد: 7 طلبات، 126" },
        { en: "EAT IN 3 66 · TO GO 2 16 · DELIVERY 2 44 — 126 in all",
          ar: "EAT IN 3 66 · TO GO 2 16 · DELIVERY 2 44 — 126 في المجموع" },
        { en: "EAT IN 5 110 · TO GO 2 16 — 126 in all",
          ar: "EAT IN 5 110 · TO GO 2 16 — 126 في المجموع" },
        { en: "EAT IN 3 66 · TO GO 2 16 — 82 in all, 44 short of the till",
          ar: "EAT IN 3 66 · TO GO 2 16 — 82 في المجموع، تنقص 44 عن الصندوق" }
      ],
      answer: 3,
      hint: {
        en: "Each branch reads exactly one subtype table. Which table does neither branch name?",
        ar: "كل فرع يقرأ جدول نوع فرعي واحدًا بالضبط. أيّ جدول لا يذكره أيّ من الفرعين؟"
      },
      explain: {
        en: "Run in alasql: <code>EAT IN 3 66</code> and <code>TO GO 2 16</code>. Orders 6 and 7 (18 + 26 = 44) sit in <code>deliveries</code>, which no branch reads, so the report is short and nothing complains. A <code>DELIVERY</code> row is tempting, but a query only reads the tables it names. The cure is the supertype: <code>SELECT COUNT(*), SUM(amount) FROM orders</code> returns 7 and 126 whatever kinds are added later.",
        ar: "نُفّذ في alasql: <code>EAT IN 3 66</code> و<code>TO GO 2 16</code>. الطلبان 6 و7 (18 + 26 = 44) في <code>deliveries</code>، ولا يقرؤه أيّ فرع، فيأتي التقرير ناقصًا ولا يشتكي شيء. وصفّ <code>DELIVERY</code> مغرٍ، لكن الاستعلام لا يقرأ إلا الجداول التي يذكرها. والعلاج هو النوع الأعلى: <code>SELECT COUNT(*), SUM(amount) FROM orders</code> يُرجع 7 و126 أيًّا كانت الأنواع التي تُضاف لاحقًا."
      },
      solution: {
        out: "kind   | n | taken\nEAT IN | 3 | 66\nTO GO  | 2 | 16",
        en: "Run in alasql on the café's way-3 tables.",
        ar: "نُفّذ في alasql على جداول المقهى بالطريقة الثالثة."
      }
    },

    {
      id: "t4bx10", type: "trace", level: "medium",
      topics: ["t4-type-column-check", "t4-hidden-rule", "t4-exactly-one-reading"],
      q: {
        en: "The one-table <code>orders</code> of the café, with its table-level <code>CHECK</code>, starts empty. The script runs one statement at a time; a refused statement does not stop the next. Which orders does the table hold at the end?",
        ar: "جدول <code>orders</code> الواحد في المقهى، بقيد <code>CHECK</code> على مستوى الجدول، فارغ في البداية. ينفَّذ السكربت عبارةً عبارة؛ والعبارة المرفوضة لا توقف التي بعدها. أيّ الطلبات يضمّها الجدول في النهاية؟"
      },
      lang: "sql",
      code: "CREATE TABLE orders (\n  order_id NUMBER PRIMARY KEY, order_time VARCHAR(5) NOT NULL,\n  amount NUMBER NOT NULL,\n  order_type VARCHAR(6) NOT NULL CHECK (order_type IN ('EAT IN', 'TO GO')),\n  table_number NUMBER, pickup_time VARCHAR(5),\n  CHECK ( (order_type = 'EAT IN' AND table_number IS NOT NULL AND pickup_time IS NULL)\n       OR (order_type = 'TO GO' AND pickup_time IS NOT NULL AND table_number IS NULL)));\nINSERT INTO orders (order_id, order_time, amount, order_type, table_number) VALUES (1, '08:15', 12, 'EAT IN', 4);\nINSERT INTO orders (order_id, order_time, amount, order_type, pickup_time) VALUES (2, '09:40', 7, 'TO GO', '09:50');\nINSERT INTO orders (order_id, order_time, amount, order_type) VALUES (3, '12:05', 23, 'EAT IN');\nINSERT INTO orders (order_id, order_time, amount, order_type, table_number, pickup_time) VALUES (4, '12:30', 9, 'TO GO', 2, '12:45');\nINSERT INTO orders (order_id, order_time, amount, order_type, pickup_time) VALUES (5, '18:10', 31, 'DELIVERY', '18:40');\nINSERT INTO orders (order_id, order_time, amount, order_type, table_number) VALUES (6, '19:00', 18, 'EAT IN', 7);",
      options: [
        { en: "Orders 1, 2, 3, 4 and 6", ar: "الطلبات 1 و2 و3 و4 و6" },
        { en: "Orders 1, 2, 4 and 6", ar: "الطلبات 1 و2 و4 و6" },
        { en: "Orders 1, 2 and 6", ar: "الطلبات 1 و2 و6" },
        { en: "All six orders", ar: "الطلبات الستة كلها" }
      ],
      answer: 2,
      hint: {
        en: "For each insert, find its <code>order_type</code>, then read that type's line of the last <code>CHECK</code>: what must it have, and what must it not have?",
        ar: "لكل إدخال، جد قيمة <code>order_type</code>، ثم اقرأ سطر ذلك النوع في آخر <code>CHECK</code>: ما الذي يجب أن يحمله، وما الذي يجب ألّا يحمله؟"
      },
      explain: {
        en: "Run in alasql: three rows, 1, 2 and 6. Order 3 is an eat-in order with no table; order 4 is a to-go order that also carries a table number — tempting, because its pickup time is there, but the rule also says what a to-go order must <em>not</em> have; order 5 names a kind outside the list. Each is refused with <code>Violation of CHECK constraint</code>. One table can keep the subtypes' rules only by stating them per kind in a <code>CHECK</code>.",
        ar: "نُفّذ في alasql: ثلاثة صفوف، 1 و2 و6. الطلب 3 طلب أكل في المكان بلا طاولة؛ والطلب 4 طلب أخذ يحمل رقم طاولة أيضًا — وهو مغرٍ لأن وقت استلامه موجود، لكن القاعدة تقول أيضًا ما يجب <em>ألّا</em> يحمله طلب الأخذ؛ والطلب 5 يسمّي نوعًا خارج القائمة. يُرفض كلٌّ منها برسالة <code>Violation of CHECK constraint</code>. لا يحفظ الجدول الواحد قواعد الأنواع الفرعية إلا إذا نصّ عليها نوعًا نوعًا في <code>CHECK</code>."
      }
    },

    /* ==================================================== repairing a proposal */
    {
      id: "t4bx11", type: "mcq", level: "medium",
      topics: ["t4-mutually-exclusive", "t4-subdivision-basis", "t4-box-alternatives", "t4-animal-hierarchy"],
      q: {
        en: "The zoo's <code>ANIMAL</code> holds <code>VERTEBRATE</code> and <code>INVERTEBRATE</code>. Some animals, of any kind, are on loan from another zoo; for those the keepers record the lending zoo and a return date. A designer proposes <code>ON LOAN</code> inside <code>ANIMAL</code>, beside the other two, with <code>* Return Date</code> and a line to <code>ZOO</code>. What is the best model?",
        ar: "يضمّ <code>ANIMAL</code> في حديقة الحيوان <code>VERTEBRATE</code> و<code>INVERTEBRATE</code>. بعض الحيوانات، من أيّ نوع، معارة من حديقة أخرى؛ ويسجّل الحرّاس لها الحديقة المُعيرة وتاريخ الإرجاع. يقترح مصمّم <code>ON LOAN</code> داخل <code>ANIMAL</code> بجانب الاثنين، وفيه <code>* Return Date</code> وخطّ إلى <code>ZOO</code>. ما أفضل نموذج؟"
      },
      options: [
        { en: "Keep <code>ON LOAN</code>: it has an attribute and a relationship of its own, so it earns its box",
          ar: "إبقاء <code>ON LOAN</code>: له خاصية وعلاقة خاصّتان به، فهو يستحقّ صندوقه" },
        { en: "Draw <code>ON LOAN</code> inside both <code>VERTEBRATE</code> and <code>INVERTEBRATE</code>, one copy each",
          ar: "رسم <code>ON LOAN</code> داخل <code>VERTEBRATE</code> و<code>INVERTEBRATE</code> كليهما، نسخة في كلٍّ منهما" },
        { en: "Remove <code>ON LOAN</code>; give <code>ANIMAL</code> <code>o Return Date</code> and an optional line, <em>Each ANIMAL may be lent by one and only one ZOO</em>",
          ar: "حذف <code>ON LOAN</code>؛ وإعطاء <code>ANIMAL</code> الخاصية <code>o Return Date</code> وخطًّا اختياريًّا: <em>Each ANIMAL may be lent by one and only one ZOO</em>" },
        { en: "Keep <code>ON LOAN</code> and add <code>OTHER</code> inside <code>ANIMAL</code> for the animals the zoo owns",
          ar: "إبقاء <code>ON LOAN</code> وإضافة <code>OTHER</code> داخل <code>ANIMAL</code> للحيوانات التي تملكها الحديقة" }
      ],
      answer: 2,
      hint: {
        en: "Find one animal that would sit in two boxes. Which question does <code>ON LOAN</code> answer, and which do its siblings answer?",
        ar: "جد حيوانًا واحدًا يقع في صندوقين. عن أيّ سؤال يجيب <code>ON LOAN</code>، وعن أيّ سؤال يجيب إخوته؟"
      },
      explain: {
        en: "A loaned eagle is a <code>VERTEBRATE</code> and <code>ON LOAN</code>, so rule three fails: \"is it a vertebrate?\" and \"is it on loan?\" are two bases. Having something of its own does not rescue it — check 4 comes before check 6. The repair keeps every fact: the date and the line move to <code>ANIMAL</code>, optional because most animals are the zoo's own. Copies inside each kind are a cross-cutting question drawn twice, and <code>OTHER</code> fixes rule two, not rule three.",
        ar: "النسر المُعار <code>VERTEBRATE</code> و<code>ON LOAN</code> معًا، فتفشل القاعدة الثالثة: «هل هو فقاري؟» و«هل هو مُعار؟» أساسان مختلفان. ولا ينقذه أن له شيئًا خاصًّا به — فالفحص 4 يسبق الفحص 6. والإصلاح يحفظ كل حقيقة: ينتقل التاريخ والخطّ إلى <code>ANIMAL</code>، اختياريّين لأن أغلب الحيوانات ملك الحديقة. ونسخه داخل كل نوع سؤال عابر مرسوم مرّتين، و<code>OTHER</code> يُصلح القاعدة الثانية لا الثالثة."
      }
    },

    {
      id: "t4bx12", type: "multi", level: "medium",
      topics: ["t4-exam-hierarchy", "t4-subtype-relationship", "t4-inherited-relationship", "t4-specialized-attribute"],
      q: {
        en: "The college uses the lecturer's <code>EXAM</code> (<code>QUIZ</code>, <code>MIDTERM</code>, <code>FINAL</code>; <code>take</code> drawn to <code>EXAM</code>). It adds a lab practical: every practical has a <code>* Lab Room</code> and is supervised by one <code>TECHNICIAN</code>; no other exam has either. Which statements describe the right model? Choose every one.",
        ar: "تستعمل الكلية <code>EXAM</code> الذي وضعه المحاضر (<code>QUIZ</code> و<code>MIDTERM</code> و<code>FINAL</code>؛ و<code>take</code> مرسوم إلى <code>EXAM</code>). وتضيف امتحانًا عمليًّا في المختبر: لكل امتحان عملي <code>* Lab Room</code>، ويشرف عليه <code>TECHNICIAN</code> واحد؛ ولا يملك أيّ امتحان آخر أيًّا منهما. أيّ العبارات تصف النموذج الصحيح؟ اختر كل عبارة منها."
      },
      options: [
        { en: "<code>PRACTICAL</code> is a subtype of <code>EXAM</code>, holding <code>* Lab Room</code>",
          ar: "<code>PRACTICAL</code> نوع فرعي من <code>EXAM</code>، فيه <code>* Lab Room</code>" },
        { en: "The <code>supervised by</code> line ends on <code>PRACTICAL</code>'s box",
          ar: "ينتهي خطّ <code>supervised by</code> عند صندوق <code>PRACTICAL</code>" },
        { en: "A <code>PRACTICAL</code> is taken by students with no new line, because <code>take</code> is on <code>EXAM</code>",
          ar: "يأخذ الطلاب <code>PRACTICAL</code> دون خطّ جديد، لأن <code>take</code> على <code>EXAM</code>" },
        { en: "<code>EXAM</code> gains <code>o Lab Room</code>, so no new box is needed",
          ar: "يكسب <code>EXAM</code> الخاصية <code>o Lab Room</code>، فلا حاجة إلى صندوق جديد" },
        { en: "The <code>supervised by</code> line ends on <code>EXAM</code>, so that every kind of exam can have a technician",
          ar: "ينتهي خطّ <code>supervised by</code> عند <code>EXAM</code>، ليكون لكل نوع من الامتحانات فنّي" },
        { en: "A <code>PRACTICAL</code> inherits <code>* Grade For Oral Presentation</code>, since it is graded like a midterm",
          ar: "يرث <code>PRACTICAL</code> الخاصية <code>* Grade For Oral Presentation</code>، لأنه يُقيَّم مثل امتحان منتصف الفصل" }
      ],
      answer: [0, 1, 2],
      hint: {
        en: "Place each fact by asking who has it: every exam, or practicals only. Then ask what a practical gets from the box around it — and from its siblings.",
        ar: "ضع كل حقيقة بسؤال: من يملكها؟ كل امتحان، أم الامتحانات العملية وحدها؟ ثم اسأل: ماذا يأخذ الامتحان العملي من الصندوق المحيط به — ومن إخوته؟"
      },
      explain: {
        en: "The practical is a kind of exam with something of its own, so it earns a box, and its technician is a subtype relationship drawn to that box. It is taken by students through inheritance from <code>EXAM</code>. <code>o Lab Room</code> on <code>EXAM</code> is tempting, but it makes the room optional for all and mandatory for none; a line on <code>EXAM</code> would give quizzes technicians. Nothing is inherited sideways from <code>MIDTERM</code>.",
        ar: "الامتحان العملي نوع من الامتحانات له شيء خاص به، فيستحقّ صندوقًا، وفنّيّه علاقة نوع فرعي تُرسم إلى ذلك الصندوق. ويأخذه الطلاب بالوراثة من <code>EXAM</code>. ووضع <code>o Lab Room</code> على <code>EXAM</code> مغرٍ، لكنه يجعل القاعة اختيارية للجميع وإلزامية لا لأحد؛ والخطّ على <code>EXAM</code> يعطي الاختبارات القصيرة فنّيّين. ولا يُورث شيء جانبيًّا من <code>MIDTERM</code>."
      }
    },

    {
      id: "t4bx13", type: "compare", level: "medium",
      topics: ["t4-type-column-check", "t4-exactly-one-reading", "t4-snow-sport"],
      q: {
        en: "Two builds of the resort's <code>SNOW SPORT</code>. The resort's rule: every sport is exactly one of <code>SKI</code>, <code>SNOWBOARD</code>, <code>CROSS COUNTRY</code> or <code>OTHER</code>. A clerk stores sport 1 (Nursery slope) as a ski sport, then tries to store sport 1 again as a snowboard sport (Halfpipe), and then sport 2, Sledging. Which statement is right?",
        ar: "طريقتان لبناء <code>SNOW SPORT</code> في المنتجع. قاعدة المنتجع: كل رياضة واحدة بالضبط من <code>SKI</code> أو <code>SNOWBOARD</code> أو <code>CROSS COUNTRY</code> أو <code>OTHER</code>. يخزّن موظف الرياضة 1 (Nursery slope) رياضةَ تزلّج، ثم يحاول تخزين الرياضة 1 مرّة أخرى رياضةَ تزلّج على اللوح (Halfpipe)، ثم الرياضة 2، Sledging. أيّ العبارات صحيحة؟"
      },
      lang: "sql",
      codeA: "CREATE TABLE snow_sports (\n  sport_id   NUMBER      PRIMARY KEY,\n  name       VARCHAR(30) NOT NULL,\n  sport_type VARCHAR(13) NOT NULL\n             CHECK (sport_type IN ('SKI', 'SNOWBOARD',\n                                   'CROSS COUNTRY', 'OTHER'))\n);",
      codeB: "CREATE TABLE skis          (sport_id NUMBER PRIMARY KEY,\n                            name VARCHAR(30) NOT NULL);\nCREATE TABLE snowboards    (sport_id NUMBER PRIMARY KEY,\n                            name VARCHAR(30) NOT NULL);\nCREATE TABLE cross_country (sport_id NUMBER PRIMARY KEY,\n                            name VARCHAR(30) NOT NULL);\nCREATE TABLE other_sports  (sport_id NUMBER PRIMARY KEY,\n                            name VARCHAR(30) NOT NULL);",
      options: [
        { en: "B is safer: each table holds one kind only, so no sport can ever be two kinds",
          ar: "B أكثر أمانًا: كل جدول يحمل نوعًا واحدًا فقط، فلا يمكن أبدًا أن تكون رياضة من نوعين" },
        { en: "A refuses the second sport 1; B stores sport 1 in <code>skis</code> and in <code>snowboards</code>. Only A keeps \"exactly one kind\"",
          ar: "A يرفض الرياضة 1 الثانية؛ وB يخزّن الرياضة 1 في <code>skis</code> وفي <code>snowboards</code>. A وحده يحفظ «نوعًا واحدًا بالضبط»" },
        { en: "A cannot store sledging at all, because <code>'SLEDGING'</code> is not in its list",
          ar: "A لا يستطيع تخزين التزلّج بالمزلجة أصلًا، لأن <code>'SLEDGING'</code> ليست في قائمته" },
        { en: "Both keep the rule equally; they differ only in the number of tables",
          ar: "كلاهما يحفظ القاعدة بالقدر نفسه؛ ولا يختلفان إلا في عدد الجداول" }
      ],
      answer: 1,
      hint: {
        en: "A primary key is unique inside its own table. In which build does one table hold every sport?",
        ar: "المفتاح الأساسي فريد داخل جدوله وحده. في أيّ البناءين يحمل جدولٌ واحد كل الرياضات؟"
      },
      explain: {
        en: "Run in alasql: in A, the second sport 1 is refused by the primary key, and one column holds one type — mutually exclusive by construction. In B the same <code>sport_id</code> goes into <code>skis</code> and <code>snowboards</code> and both rows stand. B looks safer because each table is one kind, but nothing looks across tables. Sledging is no problem for A: <code>'SLEDGING'</code> is refused, and the model's own answer, <code>'OTHER'</code>, is accepted.",
        ar: "نُفّذ في alasql: في A يرفض المفتاح الأساسي الرياضة 1 الثانية، والعمود الواحد يحمل نوعًا واحدًا — تنافٍ بحكم البناء. وفي B يدخل <code>sport_id</code> نفسه في <code>skis</code> وفي <code>snowboards</code> ويبقى الصفّان. يبدو B أكثر أمانًا لأن كل جدول نوع واحد، لكن لا شيء ينظر عبر الجداول. والتزلّج بالمزلجة لا يشكّل مشكلة لـ A: تُرفض <code>'SLEDGING'</code>، ويُقبل جواب النموذج نفسه، <code>'OTHER'</code>."
      }
    },

    {
      id: "t4bx14", type: "compare", level: "hard",
      topics: ["t4-exhaustive", "t4-listed-once-check", "t4-supertype-relationship", "t4-wall-covering"],
      q: {
        en: "The decorating store now stocks paint, wallpaper, fabric, ceramic tiles (each with a tile size) and oak wood panels (nothing special). Every product, of any kind, is bought from one supplier. Two designers model it. Which statement is right?",
        ar: "صار متجر الديكور يبيع الدهان وورق الجدران والقماش والبلاط الخزفي (ولكلٍّ منه مقاس) وألواح خشب البلّوط (بلا شيء مميّز). وكل منتج، من أيّ نوع، يُشترى من مورّد واحد. نمذجه مصمّمان. أيّ العبارات صحيحة؟"
      },
      lang: "text",
      codeA: "WALL COVERING  # Code  * Description  * Price\n  PAINT        * Litres\n  WALLPAPER    * Roll Length\n  FABRIC       * Material\n  TILE         * Tile Size\n  OTHER\nEach WALL COVERING must be bought from one and only one SUPPLIER.",
      codeB: "WALL COVERING  # Code  * Description  * Price\n  PAINT        * Litres\n  WALLPAPER    * Roll Length\n  FABRIC       * Material\n  TILE         * Tile Size\nEach PAINT must be bought from one and only one SUPPLIER.\nEach WALLPAPER must be bought from one and only one SUPPLIER.\nEach FABRIC must be bought from one and only one SUPPLIER.\nEach TILE must be bought from one and only one SUPPLIER.",
      options: [
        { en: "Both are right; they state the same rules in two layouts",
          ar: "كلاهما صحيح؛ ينصّان على القواعد نفسها بترتيبين مختلفين" },
        { en: "B is right: each kind shows its own supplier rule, which A hides in the supertype",
          ar: "B صحيح: كل نوع يُظهر قاعدة مورّده الخاصة، وA يخفيها في النوع الأعلى" },
        { en: "A is wrong: its <code>OTHER</code> has nothing of its own, so it fails the \"earned\" check",
          ar: "A خاطئ: <code>OTHER</code> فيه لا شيء خاص به، فيفشل في فحص «الاستحقاق»" },
        { en: "A is right. B has no box for the oak panel, and draws four times a line that every subtype shares",
          ar: "A صحيح. B ليس فيه صندوق للوح البلّوط، ويرسم أربع مرّات خطًّا تشترك فيه كل الأنواع الفرعية" }
      ],
      answer: 3,
      hint: {
        en: "Two checks: does every product the store sells have a box? And is something every subtype shares drawn more than once?",
        ar: "فحصان: هل لكل منتج يبيعه المتجر صندوق؟ وهل رُسم شيء تشترك فيه كل الأنواع الفرعية أكثر من مرّة؟"
      },
      explain: {
        en: "The oak panel is B's witness against check 3: a wall covering with no box. B's four supplier lines fail check 5: a relationship every subtype has is drawn once, on the supertype, as in A — and B's oak panel would have no supplier at all. A hides nothing: by inheritance, each <code>TILE</code> must be bought from one supplier. <code>OTHER</code> is exempt from \"earned\": its job is to hold the rest.",
        ar: "لوح البلّوط شاهد (witness) على فشل B في الفحص 3: غطاء جدران بلا صندوق. وخطوط المورّد الأربعة في B تفشل في الفحص 5: العلاقة التي يملكها كل نوع فرعي تُرسم مرّة واحدة على النوع الأعلى، كما في A — بل إن لوح البلّوط في B بلا مورّد أصلًا. وA لا يخفي شيئًا: بالوراثة، كل <code>TILE</code> يجب أن يُشترى من مورّد واحد. و<code>OTHER</code> معفى من «الاستحقاق»: عمله أن يحمل الباقي."
      }
    },

    {
      id: "t4bx15", type: "match", level: "medium",
      topics: ["t4-box-alternatives", "t4-subtype-decision", "t4-name-only-subtypes", "t4-related-vs-kind-of"],
      q: {
        en: "Four requests for the café's <code>ORDER</code> (<code>EAT IN</code>, <code>TO GO</code>, <code>DELIVERY</code>, <code>OTHER</code>; <code>* Order Time</code> on <code>ORDER</code>). Match each request to what it should become.",
        ar: "أربعة طلبات لـ <code>ORDER</code> في المقهى (<code>EAT IN</code> و<code>TO GO</code> و<code>DELIVERY</code> و<code>OTHER</code>؛ و<code>* Order Time</code> على <code>ORDER</code>). صِل كل طلب بما يجب أن يصير إليه."
      },
      leftHead: { en: "Request", ar: "الطلب" },
      rightHead: { en: "Becomes", ar: "يصير" },
      pairs: [
        { l: { en: "<code>BRUNCH</code> orders: any order placed between 10:00 and 12:00",
               ar: "طلبات <code>BRUNCH</code>: أيّ طلب بين 10:00 و12:00" },
          r: { en: "Nothing new: <code>* Order Time</code> already decides it; ask it in a query",
               ar: "لا شيء جديد: <code>* Order Time</code> يحدّده أصلًا؛ يُسأل عنه في استعلام" } },
        { l: { en: "<code>CATERING</code> orders, each with an event date and a guest count",
               ar: "طلبات <code>CATERING</code>، لكلٍّ منها تاريخ مناسبة وعدد ضيوف" },
          r: { en: "A new subtype inside <code>ORDER</code>",
               ar: "نوع فرعي جديد داخل <code>ORDER</code>" } },
        { l: { en: "Orders of any kind paid through the loyalty app",
               ar: "طلبات من أيّ نوع دُفعت عبر تطبيق الولاء" },
          r: { en: "An attribute of <code>ORDER</code>: a second question, not a kind",
               ar: "خاصية في <code>ORDER</code>: سؤال ثانٍ، لا نوع" } },
        { l: { en: "<code>WAITER</code>, who serves eat-in orders",
               ar: "<code>WAITER</code>، الذي يخدم طلبات الأكل في المكان" },
          r: { en: "A separate entity, joined to <code>EAT IN</code> by a line",
               ar: "كيان منفصل، يتّصل بـ <code>EAT IN</code> بخطّ" } }
      ],
      hint: {
        en: "Run the subtype decision on each: a kind of an order? something of its own? the same question as eat-in, to-go and delivery?",
        ar: "طبّق قرار النوع الفرعي على كلٍّ منها: هل هو نوع من الطلبات؟ هل له شيء خاص؟ هل يجيب عن سؤال الأكل في المكان والأخذ والتوصيل نفسه؟"
      },
      explain: {
        en: "Brunch has nothing of its own and is decided by the order time, like Lesson 4's SMALL and LARGE. Catering is a way of serving with two attributes of its own: a subtype beside its siblings. The loyalty app answers \"how was it paid?\", not \"how was it served?\" — a box would overlap with every kind. A waiter serves orders and is not one, so the box fails \"is a kind of\" and becomes an entity, joined to the subtype the waiter serves.",
        ar: "الفطور المتأخر لا شيء خاص به ويحدّده وقت الطلب، مثل SMALL وLARGE في الدرس 4. والتموين طريقة خدمة لها خاصيتان خاصّتان بها: نوع فرعي بجانب إخوته. وتطبيق الولاء يجيب عن «كيف دُفع؟» لا عن «كيف قُدّم؟» — وصندوق له يتداخل مع كل نوع. والنادل يخدم الطلبات ولا يكون طلبًا، فيفشل في اختبار «نوع من» ويصير كيانًا يتّصل بالنوع الفرعي الذي يخدمه."
      }
    },

    {
      id: "t4bx16", type: "fill", level: "easy",
      topics: ["t4-subtype-in-full", "t4-inherited-attribute", "t4-inherited-relationship"],
      q: {
        en: "The café's model, as text. Read a <code>DELIVERY</code> in full, then fill in the numbers.",
        ar: "نموذج المقهى، نصًّا. اقرأ <code>DELIVERY</code> كاملًا، ثم املأ الأعداد."
      },
      lang: "text",
      code: "ORDER         # Order Number  * Order Time  * Amount  o Discount Code\n  EAT IN      * Table Number\n  TO GO       * Pickup Time\n  DELIVERY    * Delivery Address\n  OTHER\nEach ORDER must be taken by one and only one STAFF MEMBER.\nEach DELIVERY must be delivered by one and only one DRIVER.\n\nA DELIVERY has ____1____ attributes in all, ____2____ of them marked o,\nand is related to ____3____ other entities.",
      blanks: [
        { accept: ["5", "five", "Five"] },
        { accept: ["1", "one", "One"] },
        { accept: ["2", "two", "Two"] }
      ],
      hint: {
        en: "Walk outwards: its own box first, then the box around it. Marks and lines come along unchanged.",
        ar: "امشِ إلى الخارج: صندوقه أوّلًا، ثم الصندوق المحيط به. والعلامات والخطوط تأتي معه دون تغيير."
      },
      explain: {
        en: "Five attributes: four inherited from <code>ORDER</code> (<code># Order Number</code>, <code>* Order Time</code>, <code>* Amount</code>, <code>o Discount Code</code>) and its own <code>* Delivery Address</code>. One is optional, the discount code, and it stays optional on the way in. Two entities: <code>STAFF MEMBER</code> by inheritance and <code>DRIVER</code> on its own box. <code>* Table Number</code> and <code>* Pickup Time</code> belong to siblings and do not count.",
        ar: "خمس خصائص: أربع موروثة من <code>ORDER</code> (<code># Order Number</code> و<code>* Order Time</code> و<code>* Amount</code> و<code>o Discount Code</code>) وخاصيته <code>* Delivery Address</code>. واحدة منها اختيارية، رمز الخصم، وتبقى اختيارية بعد الوراثة. وكيانان: <code>STAFF MEMBER</code> بالوراثة، و<code>DRIVER</code> على صندوقه هو. أمّا <code>* Table Number</code> و<code>* Pickup Time</code> فلإخوته ولا تُعدّان."
      }
    },

    {
      id: "t4bx17", type: "tf", level: "easy",
      topics: ["t4-mutually-exclusive", "t4-subdivision-basis", "t4-snow-sport"],
      q: {
        en: "The resort also wants to know whether each sport is held on-piste or off-piste. Drawing <code>ON PISTE</code> and <code>OFF PISTE</code> inside <code>SNOW SPORT</code>, beside <code>SKI</code>, <code>SNOWBOARD</code>, <code>CROSS COUNTRY</code> and <code>OTHER</code>, keeps the subtypes mutually exclusive, because every sport is exactly one of on-piste or off-piste.",
        ar: "يريد المنتجع أيضًا أن يعرف هل تُمارَس كل رياضة على المسار المجهّز أم خارجه. رسم <code>ON PISTE</code> و<code>OFF PISTE</code> داخل <code>SNOW SPORT</code>، بجانب <code>SKI</code> و<code>SNOWBOARD</code> و<code>CROSS COUNTRY</code> و<code>OTHER</code>، يُبقي الأنواع الفرعية متنافية، لأن كل رياضة واحدة بالضبط من «على المسار» أو «خارجه»."
      },
      truth: false,
      hint: {
        en: "Exclusive among themselves is not enough. Take off-piste ski touring: how many boxes does it fit?",
        ar: "أن تكون متنافية فيما بينها لا يكفي. خذ التزلّج خارج المسار: في كم صندوقًا يقع؟"
      },
      explain: {
        en: "False. On-piste and off-piste do exclude each other, which is what makes the claim tempting — but they sit beside the sport kinds. Off-piste ski touring is a <code>SKI</code> and an <code>OFF PISTE</code>: one sport, two boxes. \"Which equipment?\" and \"where?\" are two bases; the second becomes an attribute of <code>SNOW SPORT</code>, such as <code>* Terrain</code>.",
        ar: "خطأ. «على المسار» و«خارجه» ينفي أحدهما الآخر، وهذا ما يجعل العبارة مغرية — لكنهما موضوعان بجانب أنواع الرياضة. فالتزلّج خارج المسار <code>SKI</code> و<code>OFF PISTE</code> معًا: رياضة واحدة في صندوقين. «بأيّ معدّات؟» و«أين؟» أساسان مختلفان؛ والثاني يصير خاصية في <code>SNOW SPORT</code>، مثل <code>* Terrain</code>."
      }
    },

    {
      id: "t4bx18", type: "tf", level: "easy",
      topics: ["t4-common-listed-once", "t4-listed-once-check", "t4-animal-hierarchy"],
      q: {
        en: "The zoo's keepers now record a leg count for every animal, vertebrate or not. So that both kinds show it, <code>* Leg Count</code> should be listed in <code>VERTEBRATE</code> and again in <code>INVERTEBRATE</code>.",
        ar: "صار حرّاس حديقة الحيوان يسجّلون عدد أرجل كل حيوان، فقاريًّا كان أم لا. ولكي يظهر في النوعين، يجب أن تُذكر <code>* Leg Count</code> في <code>VERTEBRATE</code> ومرّة أخرى في <code>INVERTEBRATE</code>."
      },
      truth: false,
      hint: {
        en: "Every animal has it. Where does an attribute that every subtype shares belong?",
        ar: "كل حيوان يملكها. أين تُوضع خاصية تشترك فيها كل الأنواع الفرعية؟"
      },
      explain: {
        en: "False. An attribute common to every subtype is listed once, in the supertype — <code>* Leg Count</code> in <code>ANIMAL</code> — and inherited by <code>VERTEBRATE</code>, <code>INVERTEBRATE</code> and everything nested inside them. Listing it twice \"so both show it\" fails check 5, and a third kind added later would silently lack it.",
        ar: "خطأ. الخاصية المشتركة بين كل الأنواع الفرعية تُذكر مرّة واحدة في النوع الأعلى — <code>* Leg Count</code> في <code>ANIMAL</code> — ويرثها <code>VERTEBRATE</code> و<code>INVERTEBRATE</code> وكل ما تداخل فيهما. وذكرها مرّتين «ليظهر في النوعين» يفشل في الفحص 5، ونوع ثالث يُضاف لاحقًا سيفتقدها دون أن يلاحظ أحد."
      }
    },

    {
      id: "t4bx19", type: "tf", level: "medium",
      topics: ["t4-foreign-key-chain", "t4-overlapping-subtypes", "t4-overlap-query"],
      q: {
        en: "The café builds <code>orders</code> plus <code>eat_ins</code> and <code>to_gos</code>. In each subtype table <code>order_id</code> is the <code>PRIMARY KEY</code> and <code>REFERENCES orders(order_id)</code>. These keys stop one order being stored as both an eat-in and a to-go order.",
        ar: "يبني المقهى <code>orders</code> ومعه <code>eat_ins</code> و<code>to_gos</code>. وفي كل جدول نوع فرعي يكون <code>order_id</code> هو <code>PRIMARY KEY</code> و<code>REFERENCES orders(order_id)</code>. هذه المفاتيح تمنع تخزين طلب واحد طلبَ أكلٍ في المكان وطلبَ أخذٍ معًا."
      },
      truth: false,
      hint: {
        en: "Each key looks at one subtype table and one supertype row. Does any constraint look at both subtype tables at once?",
        ar: "كل مفتاح ينظر إلى جدول نوع فرعي واحد وإلى صفّ واحد في النوع الأعلى. هل ينظر أيّ قيد إلى جدولي النوعين الفرعيين معًا؟"
      },
      explain: {
        en: "False. Run in alasql: order 1 goes into <code>eat_ins</code> and into <code>to_gos</code>, and both rows stand. The primary key makes an order an eat-in at most once; the foreign key makes every eat-in an order. Neither looks across the two subtype tables, so rule three is kept by an overlap query, or by a single type column.",
        ar: "خطأ. نُفّذ في alasql: يدخل الطلب 1 في <code>eat_ins</code> وفي <code>to_gos</code>، ويبقى الصفّان. المفتاح الأساسي يجعل الطلب طلبَ أكل في المكان مرّة واحدة على الأكثر، والمفتاح الأجنبي يجعل كل طلب أكل في المكان طلبًا. ولا ينظر أيّ منهما عبر جدولي النوعين، فتُحفظ القاعدة الثالثة باستعلام تداخل (overlap query)، أو بعمود نوع واحد."
      }
    },

    {
      id: "t4bx20", type: "complete", level: "easy",
      topics: ["t4-inheritance", "t4-subtype-in-full"],
      q: {
        en: "The café's way-3 tables hold orders 1–7; <code>to_gos</code> holds orders 2 and 4. The manager wants every to-go order with its amount and pickup time, and nothing else. What completes the query?",
        ar: "تضمّ جداول المقهى بالطريقة الثالثة الطلبات 1–7؛ ويضمّ <code>to_gos</code> الطلبين 2 و4. يريد المدير كل طلب أخذ بمبلغه ووقت استلامه، ولا شيء غير ذلك. ما الذي يُكمل الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT o.order_id, o.amount, t.pickup_time\nFROM orders o\n____\nORDER BY o.order_id;",
      options: [
        { code: "JOIN to_gos t ON t.order_id = o.order_id" },
        { code: "LEFT JOIN to_gos t ON t.order_id = o.order_id" },
        { code: "JOIN to_gos t ON t.order_id = o.order_id WHERE o.order_type = 'TO GO'" },
        { code: "JOIN eat_ins t ON t.order_id = o.order_id" }
      ],
      answer: 0,
      hint: {
        en: "The amount is inherited, so it is in <code>orders</code>; the pickup time is the subtype's own. Which join keeps only the orders that have a subtype row?",
        ar: "المبلغ موروث، فهو في <code>orders</code>؛ ووقت الاستلام خاص بالنوع الفرعي. أيّ ربط يُبقي الطلبات التي لها صفّ في النوع الفرعي فقط؟"
      },
      explain: {
        en: "Run in alasql, the inner join returns orders 2 (7, 09:50) and 4 (9, 12:45): joining to the subtype table is the filter. <code>LEFT JOIN</code> is tempting but returns all seven orders, five with no pickup time. In this build <code>orders</code> has no <code>order_type</code> column — the kind is which subtype table holds the row — and <code>eat_ins</code> has no pickup time.",
        ar: "نُفّذ في alasql: يُرجع الربط الداخلي الطلبين 2 (7، 09:50) و4 (9، 12:45): الربط بجدول النوع الفرعي هو المرشِّح نفسه. و<code>LEFT JOIN</code> مغرٍ لكنه يُرجع الطلبات السبعة كلها، خمسة منها بلا وقت استلام. وفي هذا البناء ليس في <code>orders</code> عمود <code>order_type</code> — فنوع الصفّ هو الجدول الفرعي الذي يحمله — وليس في <code>eat_ins</code> وقت استلام."
      },
      solution: {
        code: "SELECT o.order_id, o.amount, t.pickup_time\nFROM orders o\nJOIN to_gos t ON t.order_id = o.order_id\nORDER BY o.order_id;",
        en: "order_id 2, amount 7, pickup_time 09:50; order_id 4, amount 9, pickup_time 12:45.",
        ar: "order_id 2، amount 7، pickup_time 09:50؛ وorder_id 4، amount 9، pickup_time 12:45."
      }
    },

    {
      id: "t4bx21", type: "write", level: "easy",
      topics: ["t4-inherited-relationship", "t4-supertype-relationship", "t4-snow-sport"],
      q: {
        en: "At the resort, some sports, such as sledging, have no instructor, and others are taught by several. The line to <code>INSTRUCTOR</code> is drawn once, to <code>SNOW SPORT</code>, and named <code>taught by</code> at that end. Write the ERDish sentence a <code>SNOWBOARD</code> inherits, read from the snowboard's end.",
        ar: "في المنتجع، بعض الرياضات، كالتزلّج بالمزلجة، بلا مدرّب، وبعضها يدرّسه عدّة مدرّبين. والخطّ إلى <code>INSTRUCTOR</code> مرسوم مرّة واحدة إلى <code>SNOW SPORT</code>، واسمه عند ذلك الطرف <code>taught by</code>. اكتب جملة ERDish التي يرثها <code>SNOWBOARD</code>، مقروءة من طرف التزلّج على اللوح."
      },
      lang: "erdish",
      lines: 2,
      checks: [
        { re: "^\\s*Each\\s+SNOWBOARD\\b", flags: "i",
          label: { en: "starts with Each SNOWBOARD", ar: "تبدأ بـ Each SNOWBOARD" } },
        { re: "\\bmay\\s+be\\s+taught\\s+by\\b", flags: "i",
          label: { en: "may be taught by: the half at SNOW SPORT is dashed", ar: "may be taught by: النصف عند SNOW SPORT متقطّع" } },
        { re: "\\bone\\s+or\\s+more\\s+INSTRUCTORS?\\b", flags: "i",
          label: { en: "one or more INSTRUCTORs: a crow's foot at INSTRUCTOR", ar: "one or more INSTRUCTORs: قدم غراب عند INSTRUCTOR" } }
      ],
      forbid: [
        { re: "\\bmust\\b", flags: "i",
          label: { en: "must is wrong: a sport may have no instructor", ar: "must خطأ: قد تكون الرياضة بلا مدرّب" } }
      ],
      hint: {
        en: "Write the sentence for <code>SNOW SPORT</code> first, from the business, then put the subtype in the first slot: everything else comes along unchanged.",
        ar: "اكتب الجملة لـ <code>SNOW SPORT</code> أوّلًا من وصف العمل، ثم ضع النوع الفرعي في الخانة الأولى: وكل ما عداه يأتي معه دون تغيير."
      },
      explain: {
        en: "The line is on the supertype, so every subtype inherits it with its marks: <em>Each SNOWBOARD may be taught by one or more INSTRUCTORs.</em> <em>May</em>, because a sport can have no instructor — true of snowboarding even if every snowboard course today has one; <em>one or more</em>, because some have several. The inherited sentence is never drawn on <code>SNOWBOARD</code>'s box.",
        ar: "الخطّ على النوع الأعلى، فيرثه كل نوع فرعي بعلاماته: <em>Each SNOWBOARD may be taught by one or more INSTRUCTORs.</em> ‏<em>May</em> لأن الرياضة قد تكون بلا مدرّب — وهذا صحيح للتزلّج على اللوح حتى لو كان لكل دورة منه اليوم مدرّب؛ و<em>one or more</em> لأن لبعضها عدّة مدرّبين. والجملة الموروثة لا تُرسم أبدًا على صندوق <code>SNOWBOARD</code>."
      },
      solution: {
        code: "Each SNOWBOARD may be taught by one or more INSTRUCTORs.",
        en: "The SNOW SPORT sentence with SNOWBOARD in the first slot.",
        ar: "جملة SNOW SPORT وفي خانتها الأولى SNOWBOARD."
      }
    },

    {
      id: "t4bx22", type: "write", level: "hard",
      topics: ["t4-subtype-in-full", "t4-subtype-relationship", "t4-inheritance"],
      q: {
        en: "The café's way-3 tables: <code>orders(order_id, order_time, amount)</code>, <code>deliveries(order_id, delivery_address, driver_id)</code> and <code>drivers(driver_id, name)</code>. Write one query that lists every delivery with its <code>order_id</code>, <code>amount</code>, <code>delivery_address</code> and the driver's <code>name</code>, in <code>order_id</code> order.",
        ar: "جداول المقهى بالطريقة الثالثة: <code>orders(order_id, order_time, amount)</code> و<code>deliveries(order_id, delivery_address, driver_id)</code> و<code>drivers(driver_id, name)</code>. اكتب استعلامًا واحدًا يسرد كل توصيلة بـ <code>order_id</code> و<code>amount</code> و<code>delivery_address</code> واسم السائق <code>name</code>، مرتّبة بحسب <code>order_id</code>."
      },
      lang: "sql",
      lines: 6,
      checks: [
        { re: "^\\s*SELECT\\b(?=[^;]*\\bamount\\b)(?=[^;]*\\bdelivery_address\\b)(?=[^;]*\\bname\\b)", flags: "i",
          label: { en: "selects amount, delivery_address and name", ar: "يختار amount وdelivery_address وname" } },
        { re: "\\bJOIN\\b[\\s\\S]*\\bJOIN\\b", flags: "i",
          label: { en: "joins three tables", ar: "يربط ثلاثة جداول" } },
        { re: "\\b(\\w+\\.)?order_id\\s*=\\s*(\\w+\\.)?order_id\\b", flags: "i",
          label: { en: "orders and deliveries joined on order_id: the inheritance", ar: "orders وdeliveries مربوطان على order_id: الوراثة" } },
        { re: "\\b(\\w+\\.)?driver_id\\s*=\\s*(\\w+\\.)?driver_id\\b", flags: "i",
          label: { en: "deliveries and drivers joined on driver_id: the subtype's own line", ar: "deliveries وdrivers مربوطان على driver_id: خطّ النوع الفرعي الخاص" } },
        { re: "ORDER\\s+BY\\s+(\\w+\\.)?order_id\\b", flags: "i",
          label: { en: "ordered by order_id", ar: "مرتّب بحسب order_id" } }
      ],
      forbid: [
        { re: "\\bLEFT\\s+JOIN\\b", flags: "i",
          label: { en: "an outer join brings back orders that are not deliveries", ar: "الربط الخارجي يعيد طلبات ليست توصيلات" } }
      ],
      hint: {
        en: "Walk the diagram: the supertype for the amount, the subtype for the address, then the entity the subtype is related to. One join per step.",
        ar: "امشِ على المخطّط: النوع الأعلى للمبلغ، والنوع الفرعي للعنوان، ثم الكيان الذي يرتبط به النوع الفرعي. ربط واحد لكل خطوة."
      },
      explain: {
        en: "The amount is inherited, so it comes from <code>orders</code>; the address is <code>DELIVERY</code>'s own; the driver hangs off <code>DELIVERY</code>, so the second join goes from <code>deliveries</code>, not from <code>orders</code>. Inner joins are the filter: only orders with a <code>deliveries</code> row come back. On the café's data: order 6, 18, 12 Harbour Road, Sami; order 7, 26, 3 Mill Lane, Huda.",
        ar: "المبلغ موروث فيأتي من <code>orders</code>؛ والعنوان خاص بـ <code>DELIVERY</code>؛ والسائق معلّق بـ <code>DELIVERY</code>، فالربط الثاني ينطلق من <code>deliveries</code> لا من <code>orders</code>. والربط الداخلي هو المرشِّح: لا يعود إلا الطلب الذي له صفّ في <code>deliveries</code>. وعلى بيانات المقهى: الطلب 6، 18، 12 Harbour Road، Sami؛ والطلب 7، 26، 3 Mill Lane، Huda."
      },
      solution: {
        code: "SELECT o.order_id, o.amount, d.delivery_address, r.name\nFROM orders o\nJOIN deliveries d ON d.order_id = o.order_id\nJOIN drivers r ON r.driver_id = d.driver_id\nORDER BY o.order_id;",
        en: "Run in alasql: 6 | 18 | 12 Harbour Road | Sami, and 7 | 26 | 3 Mill Lane | Huda.",
        ar: "نُفّذ في alasql: 6 | 18 | 12 Harbour Road | Sami، و7 | 26 | 3 Mill Lane | Huda."
      }
    },

    /* ==================================================== judging and repairing */
    {
      id: "t4bx23", type: "mcq", level: "hard",
      topics: ["t4-verdict", "t4-witness-instance", "t4-minimal-repair", "t4-cross-cutting-attribute"],
      q: {
        en: "The zoo's draft is below. The keepers' facts: the eagle is endangered, and so is the giant octopus; every endangered animal, vertebrate or not, has a protection status. Which verdict is right and complete?",
        ar: "مسوّدة حديقة الحيوان أدناه. حقائق الحرّاس: النسر مهدّد بالانقراض، وكذلك الأخطبوط العملاق؛ ولكل حيوان مهدّد، فقاريًّا كان أم لا، حالة حماية. أيّ حكم صحيح وكامل؟"
      },
      lang: "text",
      code: "ANIMAL            # Animal ID  * Name  * Arrival Date\n  VERTEBRATE\n    BIRD          * Wingspan\n    REPTILE\n    MAMMAL\n    ENDANGERED    * Protection Status\n    OTHER\n  INVERTEBRATE",
      options: [
        { en: "<code>VERTEBRATE</code>, check 4; witness: the eagle; repair: draw <code>ENDANGERED</code> inside each of <code>BIRD</code>, <code>REPTILE</code>, <code>MAMMAL</code> and <code>OTHER</code>",
          ar: "<code>VERTEBRATE</code>، الفحص 4؛ الشاهد: النسر؛ الإصلاح: رسم <code>ENDANGERED</code> داخل كلٍّ من <code>BIRD</code> و<code>REPTILE</code> و<code>MAMMAL</code> و<code>OTHER</code>" },
        { en: "<code>VERTEBRATE</code>, check 4; witness: the eagle is a <code>BIRD</code> and <code>ENDANGERED</code>; repair: remove <code>ENDANGERED</code> and add <code>o Protection Status</code> to <code>VERTEBRATE</code>",
          ar: "<code>VERTEBRATE</code>، الفحص 4؛ الشاهد: النسر <code>BIRD</code> و<code>ENDANGERED</code>؛ الإصلاح: حذف <code>ENDANGERED</code> وإضافة <code>o Protection Status</code> إلى <code>VERTEBRATE</code>" },
        { en: "<code>VERTEBRATE</code>, check 4; witness: the eagle is a <code>BIRD</code> and <code>ENDANGERED</code>; repair: remove <code>ENDANGERED</code> and add <code>o Protection Status</code> to <code>ANIMAL</code>",
          ar: "<code>VERTEBRATE</code>، الفحص 4؛ الشاهد: النسر <code>BIRD</code> و<code>ENDANGERED</code>؛ الإصلاح: حذف <code>ENDANGERED</code> وإضافة <code>o Protection Status</code> إلى <code>ANIMAL</code>" },
        { en: "<code>INVERTEBRATE</code>, check 3; witness: the octopus has no box to be endangered in; repair: add <code>ENDANGERED</code> and <code>OTHER</code> inside <code>INVERTEBRATE</code>",
          ar: "<code>INVERTEBRATE</code>، الفحص 3؛ الشاهد: الأخطبوط بلا صندوق يكون فيه مهدّدًا؛ الإصلاح: إضافة <code>ENDANGERED</code> و<code>OTHER</code> داخل <code>INVERTEBRATE</code>" }
      ],
      answer: 2,
      hint: {
        en: "Name the check and the witness first. Then, for the repair, ask which animals can have a protection status — the box that encloses all of them is where it goes.",
        ar: "سمِّ الفحص والشاهد أوّلًا. ثم اسأل عن الإصلاح: أيّ الحيوانات يمكن أن تكون لها حالة حماية؟ الصندوق الذي يحيط بها كلّها هو مكانها."
      },
      explain: {
        en: "\"Is it endangered?\" is a second basis beside \"which class?\", so the eagle sits in two boxes: check 4 at <code>VERTEBRATE</code>. The minimal repair turns the second question into an attribute, and the octopus decides where: it is endangered too, so the status belongs on <code>ANIMAL</code>, optional because most animals have none. On <code>VERTEBRATE</code> it is tempting, and the octopus would lose it. Copies in every class over-nest a cross-cutting question.",
        ar: "«هل هو مهدّد؟» أساس ثانٍ بجانب «أيّ صنف؟»، فيقع النسر في صندوقين: الفحص 4 عند <code>VERTEBRATE</code>. والإصلاح الأصغر يحوّل السؤال الثاني إلى خاصية، والأخطبوط يحدّد مكانها: إنه مهدّد أيضًا، فتوضع الحالة على <code>ANIMAL</code>، اختيارية لأن أغلب الحيوانات بلا حالة. ووضعها على <code>VERTEBRATE</code> مغرٍ، لكن الأخطبوط سيفقدها. ونسخها في كل صنف إفراط في التداخل (over-nesting) لسؤال عابر."
      }
    },

    {
      id: "t4bx24", type: "multi", level: "hard",
      topics: ["t4-review-order", "t4-kind-of-test", "t4-exhaustive", "t4-repeated-common-attribute"],
      q: {
        en: "A new designer's draft of the shop's model. The owner's facts: customers make cheque and card payments; every payment has an amount; the shop sometimes takes gift vouchers, which record nothing special; a cash payment records the change given. Which checks does the <code>PAYMENT</code> box fail? Choose every one.",
        ar: "مسوّدة مصمّم جديد لنموذج المتجر. حقائق المالك: الزبائن يدفعون بالشيكات والبطاقات؛ ولكل دفعة مبلغ؛ ويقبل المتجر أحيانًا قسائم هدايا لا يُسجَّل لها شيء مميّز؛ وتُسجّل للدفعة النقدية قيمة الباقي المُعاد. أيّ الفحوص يفشل فيها صندوق <code>PAYMENT</code>؟ اختر كل فحص منها."
      },
      lang: "text",
      code: "PAYMENT         # Payment ID  * Payment Date\n  CASH          * Amount  * Change Given\n  CHECK         * Amount  * Cheque Number\n  CREDIT CARD   * Amount  * Card Number\n  CUSTOMER      # Customer ID  * Name",
      options: [
        { en: "Check 1 — kind of", ar: "الفحص 1 — نوع من" },
        { en: "Check 2 — more than one subtype", ar: "الفحص 2 — أكثر من نوع فرعي واحد" },
        { en: "Check 3 — exhaustive", ar: "الفحص 3 — الشمول (exhaustive)" },
        { en: "Check 4 — mutually exclusive", ar: "الفحص 4 — التنافي (mutually exclusive)" },
        { en: "Check 5 — listed once", ar: "الفحص 5 — مذكور مرّة واحدة" },
        { en: "Check 6 — earned", ar: "الفحص 6 — الاستحقاق" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Run the six checks in order, and find a witness for each failure: a box that is not a payment, a payment with no box, an attribute drawn in every subtype.",
        ar: "طبّق الفحوص الستة بالترتيب، وجد شاهدًا لكل فشل: صندوقًا ليس دفعة، ودفعة بلا صندوق، وخاصية مرسومة في كل نوع فرعي."
      },
      explain: {
        en: "Check 1: \"every CUSTOMER is a PAYMENT\" is false — Linda makes payments; move her outside, joined to <code>CHECK</code> and <code>CREDIT CARD</code>. Check 3: a gift voucher payment has no box; add <code>OTHER</code>. Check 5: <code>* Amount</code> is in every subtype; lift it into <code>PAYMENT</code>. With <code>CUSTOMER</code> removed three subtypes remain (check 2), no payment fits two (check 4), and each named one has something of its own (check 6).",
        ar: "الفحص 1: «كل CUSTOMER هو PAYMENT» خطأ — ليندا تقوم بالدفعات؛ فتخرج إلى الخارج وتتّصل بـ <code>CHECK</code> و<code>CREDIT CARD</code>. والفحص 3: دفعة قسيمة الهدية بلا صندوق؛ فيُضاف <code>OTHER</code>. والفحص 5: <code>* Amount</code> في كل نوع فرعي؛ فتُرفع إلى <code>PAYMENT</code>. وبعد إخراج <code>CUSTOMER</code> تبقى ثلاثة أنواع فرعية (الفحص 2)، ولا تقع دفعة في صندوقين (الفحص 4)، ولكل نوع مسمّى شيء خاص به (الفحص 6)."
      }
    }

  ]
};
