/* Question bank: T2 lesson 4 test -- Entities and Instances. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t2-test-04"] = {
  title: { en: "Test 4 — Entities and Instances", ar: "اختبار 4 — الكيانات والنُسخ" },
  intro: {
    en: "24 questions on lesson 4: what makes a thing an entity, and which nouns do not qualify; the difference between an entity and one of its instances; why an entity with only one instance makes no sense; tangible, intangible and event entities; and why DOG is an entity for one business and an instance for another. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الرابع: ما الذي يجعل الشيء كيانًا (entity)، وأيّ الأسماء لا تستحقّ ذلك؛ والفرق بين الكيان وإحدى نُسخه (instances)؛ ولماذا لا معنى لكيان ليس له إلا نسخة واحدة؛ والكيانات الملموسة (tangible) وغير الملموسة (intangible) والأحداث (events)؛ ولماذا يكون DOG كيانًا عند عمل ونسخةً عند عمل آخر. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · the things the library must know about */
    {
      id: "t2l4q01", type: "mcq", level: "easy",
      topics: ["t2-purpose-of-entities", "t2-entity"],
      q: {
        en: "Version 1 of the librarian's page was a heap of true sentences: \"Sara Hamdan borrowed A Vision on 1 March. Oscar Wilde wrote A Vision…\". Version 2 sorted every name into MEMBER, BOOK, AUTHOR, PUBLISHER and BOOK TRANSACTION. What did version 2 fix?",
        ar: "كان الإصدار 1 من صفحة أمين المكتبة كومةً من الجمل الصحيحة: «Sara Hamdan borrowed A Vision on 1 March. Oscar Wilde wrote A Vision…». ثم وزّع الإصدار 2 كل اسم على MEMBER وBOOK وAUTHOR وPUBLISHER وBOOK TRANSACTION. ما الذي أصلحه الإصدار 2؟"
      },
      options: [
        { en: "Some sentences in version 1 were false, and version 2 corrected them", ar: "بعض جمل الإصدار 1 كانت خاطئة، فصحّحها الإصدار 2" },
        { en: "It records what each member's address and phone number are", ar: "صار يسجّل عنوان كل عضو ورقم هاتفه" },
        { en: "Nothing was grouped; now each name sits in a list of similar things, so \"how many members?\" is the length of one list", ar: "لم يكن شيء مجمّعًا؛ والآن يقع كل اسم في قائمة من الأشياء المتشابهة، فيصير «كم عضوًا لدينا؟» هو طول قائمة واحدة" },
        { en: "It removed the borrowings, because a borrowing cannot be stored", ar: "حذف الاستعارات، لأن الاستعارة لا يمكن تخزينها" }
      ],
      answer: 2,
      hint: {
        en: "Every sentence on the page was true. What made the faculty member's question hard to answer?",
        ar: "كل جملة في الصفحة كانت صحيحة. فما الذي جعل سؤال عضو هيئة التدريس صعب الإجابة؟"
      },
      explain: {
        en: "Version 1's defect was not falsehood but disorder: names of members and authors were mixed, so counting members meant reading every line. Organizing facts into entities, sets of similar things you can list, turns a reading job into a count. What to record about each member is still open; that is attributes, lesson 5. And BOOK TRANSACTION was kept, not removed.",
        ar: "لم يكن عيب الإصدار 1 خطأً في الجمل بل فوضى: اختلطت أسماء الأعضاء بأسماء المؤلفين، فصار عدّ الأعضاء يعني قراءة كل سطر. تنظيم الحقائق في كيانات، أي مجموعات من الأشياء المتشابهة يمكن سردها في قائمة، يحوّل مهمة القراءة إلى عدّ. أمّا ما نسجّله عن كل عضو فما زال مفتوحًا؛ تلك هي الخصائص في الدرس 5. ثم إن BOOK TRANSACTION بقي ولم يُحذف."
      }
    },
    {
      id: "t2l4q02", type: "multi", level: "medium",
      topics: ["t2-entity-noun", "t2-business-significance", "t2-entity"],
      q: {
        en: "The librarian adds a note: \"Every member may borrow books. Each book has an author and a publisher. The note is written on yellow paper. Sara Hamdan returned Citizen of the World late.\" Which of these should be entities in the library model? Choose every one.",
        ar: "يضيف أمين المكتبة ملاحظة: «Every member may borrow books. Each book has an author and a publisher. The note is written on yellow paper. Sara Hamdan returned Citizen of the World late.» أيّ هذه يجب أن تكون كيانات في نموذج المكتبة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "MEMBER", ar: "MEMBER" },
        { en: "PAPER — it is a noun in the note", ar: "PAPER — فهو اسم في الملاحظة" },
        { en: "PUBLISHER", ar: "PUBLISHER" },
        { en: "SARA HAMDAN — she appears by name", ar: "SARA HAMDAN — فهي مذكورة باسمها" },
        { en: "AUTHOR", ar: "AUTHOR" },
        { en: "BORROW — it is what members do", ar: "BORROW — فهو ما يفعله الأعضاء" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Underline the nouns, then ask of each: is it a set of similar things the library must keep data about?",
        ar: "ضع خطًّا تحت الأسماء، ثم اسأل عن كل منها: هل هو مجموعة من الأشياء المتشابهة يجب أن تحتفظ المكتبة ببيانات عنها؟"
      },
      explain: {
        en: "MEMBER, AUTHOR and PUBLISHER are sets the library must know about. PAPER is a noun, but the library keeps no data about the paper its notes are written on: a noun is an entity only if it is of significance to the business. Sara Hamdan is one instance of MEMBER, not a set. \"Borrow\" is a verb; it will become a relationship, not an entity.",
        ar: "MEMBER وAUTHOR وPUBLISHER مجموعات يجب أن تعرف المكتبة عنها. أمّا PAPER فاسم، لكن المكتبة لا تحتفظ ببيانات عن الورق الذي تُكتب عليه ملاحظاتها: لا يكون الاسم كيانًا إلا إذا كان ذا أهمية للعمل (of significance to the business). وSara Hamdan نسخة واحدة من MEMBER، لا مجموعة. و«borrow» فعل؛ سيصبح علاقة لا كيانًا."
      }
    },
    {
      id: "t2l4q03", type: "tf", level: "easy",
      topics: ["t2-entity-noun", "t2-business-significance"],
      q: {
        en: "An entity is usually a noun, so every noun in a business's description should become an entity.",
        ar: "الكيان في الغالب اسم، لذلك يجب أن يصبح كل اسم في وصف العمل كيانًا."
      },
      truth: false,
      hint: {
        en: "The definition has two halves. \"Usually a noun\" is one; what is the other?",
        ar: "للتعريف نصفان. «في الغالب اسم» أحدهما؛ فما الآخر؟"
      },
      explain: {
        en: "False. Being a noun is how you spot candidates; being of significance to the business is what makes one an entity. The reading-room clock and the page the note is written on are nouns, but the library keeps no data about them. Turning every noun into a box is one of the mistakes the lesson warns about.",
        ar: "خطأ. كون الشيء اسمًا هو طريقة لالتقاط المرشّحين؛ أمّا ما يجعله كيانًا فهو أن يكون ذا أهمية للعمل. ساعة قاعة المطالعة والصفحة التي كُتبت عليها الملاحظة اسمان، لكن المكتبة لا تحتفظ ببيانات عنهما. وتحويل كل اسم إلى صندوق من الأخطاء التي يحذّر منها الدرس."
      }
    },
    {
      id: "t2l4q04", type: "output", level: "easy",
      topics: ["t2-instance-as-row", "t2-purpose-of-entities"],
      q: {
        en: "MEMBER became the table members, holding Sara Hamdan (1) and Omar Saleh (2). Each INSERT below is run on its own, in order. What does the final query return?",
        ar: "أصبح MEMBER الجدول members، وفيه Sara Hamdan ‏(1) وOmar Saleh ‏(2). تُنفَّذ كل جملة INSERT أدناه وحدها، بالترتيب. ماذا يُرجع الاستعلام الأخير؟"
      },
      lang: "sql",
      code: "INSERT INTO members VALUES (3, 'Lina', 'Khalil');\nINSERT INTO members VALUES (2, 'Lina', 'Khalil');\n\nSELECT COUNT(*) AS members\nFROM members;",
      blanks: [{ accept: ["3", "three", "Three"], label: { en: "members", ar: "members" } }],
      hint: {
        en: "Each new member is one more row. Can two rows claim the same id?",
        ar: "كل عضو جديد صفّ إضافي. هل يمكن لصفّين أن يدّعيا الرقم نفسه؟"
      },
      explain: {
        en: "3. Lina Khalil is a new instance of MEMBER, so she is one new row; the entity did not change. The second INSERT is refused: \"Cannot insert record, because it already exists in primary key index\", since id 2 is already Omar's. Answering 4 forgets that two rows cannot claim to be the same instance. The faculty member's question is now one line of SQL.",
        ar: "3. Lina Khalil نسخة جديدة من MEMBER، فهي صفّ جديد واحد؛ ولم يتغيّر الكيان. وتُرفض جملة INSERT الثانية: «Cannot insert record, because it already exists in primary key index»، لأن الرقم 2 لـ Omar. الإجابة 4 تنسى أن صفّين لا يمكن أن يدّعيا أنهما النسخة نفسها. وصار سؤال عضو هيئة التدريس سطرًا واحدًا من SQL."
      },
      solution: { out: "members\n3" }
    },

    /* ---------------------------------------------------- 2 · an entity and its instances */
    {
      id: "t2l4q05", type: "match", level: "easy",
      topics: ["t2-instance", "t2-entity-vs-instance"],
      q: {
        en: "Match each entity from the slides to one of its instances.",
        ar: "صِل كل كيان من الشرائح بإحدى نُسخه."
      },
      leftHead: { en: "Entity", ar: "الكيان" },
      rightHead: { en: "Instance", ar: "النسخة" },
      pairs: [
        { l: { en: "PERSON", ar: "PERSON" }, r: { en: "Mahatma Gandhi", ar: "Mahatma Gandhi" } },
        { l: { en: "PRODUCT TYPE", ar: "PRODUCT TYPE" }, r: { en: "Video Game", ar: "Video Game" } },
        { l: { en: "PRODUCT", ar: "PRODUCT" }, r: { en: "Gibson Les Paul Custom", ar: "Gibson Les Paul Custom" } },
        { l: { en: "JOB", ar: "JOB" }, r: { en: "IT Technician", ar: "IT Technician" } },
        { l: { en: "CONCERT", ar: "CONCERT" }, r: { en: "U2 at the Palladium", ar: "U2 at the Palladium" } }
      ],
      hint: {
        en: "Read each pair backwards: \"… is an instance of …\". PRODUCT and PRODUCT TYPE are the pair to watch.",
        ar: "اقرأ كل زوج بالعكس: «… نسخة من …». انتبه إلى الزوج PRODUCT وPRODUCT TYPE."
      },
      explain: {
        en: "Each instance is a single occurrence of its entity: Gandhi is one PERSON, U2 at the Palladium one CONCERT. The trap is PRODUCT against PRODUCT TYPE: a Gibson Les Paul Custom is one particular product you can hold; Video Game is a category of products, so it is an instance of PRODUCT TYPE.",
        ar: "كل نسخة حدوثٌ واحد لكيانها: Gandhi شخص واحد من PERSON، وU2 at the Palladium حفلة واحدة من CONCERT. والفخّ هو PRODUCT مقابل PRODUCT TYPE: جيتار Gibson Les Paul Custom منتج بعينه يمكنك أن تمسكه؛ أمّا Video Game فصنف من المنتجات، فهو نسخة من PRODUCT TYPE."
      }
    },
    {
      id: "t2l4q06", type: "compare", level: "medium",
      topics: ["t2-entity-vs-instance", "t2-instance-as-row", "t2-instance"],
      q: {
        en: "A classmate drew model A; Matt drew model B. Lina Khalil joins the library next week. Which statement is right?",
        ar: "رسم أحد الزملاء النموذج A، ورسم مات النموذج B. ستنضمّ Lina Khalil إلى المكتبة الأسبوع القادم. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "SARA HAMDAN\nOMAR SALEH\nBOOK",
      codeB: "MEMBER\nBOOK",
      options: [
        { en: "A is better: it shows exactly who the members are", ar: "A أفضل: فهو يُظهر بالضبط من هم الأعضاء" },
        { en: "B is better: MEMBER is drawn once, and Lina becomes one more row, not one more box", ar: "B أفضل: يُرسم MEMBER مرة واحدة، وتصبح Lina صفًّا إضافيًّا لا صندوقًا إضافيًّا" },
        { en: "They are equivalent; A is just more detailed", ar: "هما متكافئان؛ A أكثر تفصيلًا فقط" },
        { en: "B is better only because it has fewer boxes, which makes it easier to read", ar: "B أفضل فقط لأن صناديقه أقلّ، فيسهل قراؤه" }
      ],
      answer: 1,
      hint: {
        en: "What must each diagram do when Lina joins?",
        ar: "ماذا يجب أن يفعل كل مخطط حين تنضمّ Lina؟"
      },
      explain: {
        en: "A draws instances as boxes, so it must be redrawn every time someone joins: a model that changes with the data is modelling the wrong thing. B draws the entity once; Sara, Omar and Lina live in the database as rows of members. A looks more informative, but it is not more detailed, it is the wrong level. Fewer boxes is a side effect, not the reason.",
        ar: "يرسم A النُسخ صناديق، فيجب إعادة رسمه كلما انضمّ أحد: النموذج الذي يتغيّر مع البيانات يمثّل الشيء الخطأ. أمّا B فيرسم الكيان مرة واحدة؛ ويعيش Sara وOmar وLina في قاعدة البيانات صفوفًا في members. يبدو A أغنى بالمعلومات، لكنه ليس أكثر تفصيلًا، بل في المستوى الخطأ. وقلّة الصناديق نتيجة جانبية، لا السبب."
      }
    },
    {
      id: "t2l4q07", type: "error", level: "medium",
      topics: ["t2-entity-vs-instance", "t2-instance"],
      q: {
        en: "A classmate lists the entities of the library model, one per line. Which lines name an instance, not an entity? Choose every one.",
        ar: "يسرد أحد الزملاء كيانات نموذج المكتبة، كيانًا في كل سطر. أيّ الأسطر يسمّي نسخةً لا كيانًا؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "MEMBER\nBOOK\nWAR AND PEACE\nAUTHOR\nRIWAQ PRESS\nBOOK TRANSACTION",
      answer: [3, 5],
      hint: {
        en: "For each line ask: can I make a list under this name, or is it one item on someone else's list?",
        ar: "اسأل عن كل سطر: هل أستطيع أن أصنع قائمة تحت هذا الاسم، أم هو عنصر واحد في قائمة غيره؟"
      },
      explain: {
        en: "Line 3, War and Peace, is one instance of BOOK; line 5, Riwaq Press, is one instance of PUBLISHER. Written in capitals they look like entity names, but neither names a set. Line 6 is the tempting one: a borrowing cannot be touched, yet BOOK TRANSACTION is a set of events the library lists, so it is an entity.",
        ar: "السطر 3، War and Peace، نسخة واحدة من BOOK؛ والسطر 5، Riwaq Press، نسخة واحدة من PUBLISHER. كُتبا بحروف كبيرة فبدوا كأسماء كيانات، لكن أيًّا منهما لا يسمّي مجموعة. والسطر 6 هو المغري: الاستعارة لا تُلمس، لكن BOOK TRANSACTION مجموعة من الأحداث تسردها المكتبة، فهو كيان."
      },
      solution: {
        en: "Lines 3 and 5. The repaired list is MEMBER, BOOK, AUTHOR, PUBLISHER, BOOK TRANSACTION.",
        ar: "السطران 3 و5. القائمة المصحّحة: MEMBER وBOOK وAUTHOR وPUBLISHER وBOOK TRANSACTION."
      }
    },
    {
      id: "t2l4q08", type: "tf", level: "easy",
      topics: ["t2-instance", "t2-instance-as-row"],
      q: {
        en: "When Lina Khalil joins the library, the entity MEMBER must be changed to include her.",
        ar: "حين تنضمّ Lina Khalil إلى المكتبة، يجب تغيير الكيان MEMBER ليشملها."
      },
      truth: false,
      hint: {
        en: "Is Lina a new set, or a new occurrence in a set that already exists?",
        ar: "هل Lina مجموعة جديدة، أم حدوث جديد في مجموعة موجودة أصلًا؟"
      },
      explain: {
        en: "False. Lina is a new instance, a single occurrence of MEMBER. The entity stays exactly as it was; in the database she is one INSERT, one more row in the same table. If a new member forced a change to the model, the model would be drawing instances instead of the entity.",
        ar: "خطأ. Lina نسخة جديدة، أي حدوث واحد لـ MEMBER. يبقى الكيان كما هو تمامًا؛ وهي في قاعدة البيانات جملة INSERT واحدة، صفّ إضافي في الجدول نفسه. لو أجبر عضوٌ جديد النموذجَ على التغيّر، لكان النموذج يرسم النُسخ بدل الكيان."
      }
    },
    {
      id: "t2l4q09", type: "contrast", level: "medium",
      topics: ["t2-entity-vs-instance", "t2-instance-as-row", "t2-entity", "t2-instance"],
      q: {
        en: "Sort each statement: is it true of an entity, or of an instance?",
        ar: "صنّف كل عبارة: هل تصدق على الكيان، أم على النسخة؟"
      },
      concepts: [
        { en: "Entity", ar: "الكيان" },
        { en: "Instance", ar: "النسخة" }
      ],
      rows: [
        { s: { en: "FRUIT", ar: "FRUIT" }, a: 0 },
        { s: { en: "Kiwi, on the greengrocer's list", ar: "Kiwi، في قائمة بائع الخضار" }, a: 1 },
        { s: { en: "Becomes a table, such as members", ar: "يصبح جدولًا، مثل members" }, a: 0 },
        { s: { en: "Becomes one row of a table", ar: "تصبح صفًّا واحدًا في جدول" }, a: 1 },
        { s: { en: "Drawn once, as a box in the model", ar: "يُرسم مرة واحدة، صندوقًا في النموذج" }, a: 0 },
        { s: { en: "Added to the database with an INSERT", ar: "تُضاف إلى قاعدة البيانات بجملة INSERT" }, a: 1 },
        { s: { en: "A name for a set of similar things you can list", ar: "اسم لمجموعة من الأشياء المتشابهة يمكن سردها في قائمة" }, a: 0 }
      ],
      hint: {
        en: "One is the list; the other is one line on it.",
        ar: "أحدهما هو القائمة؛ والآخر سطر واحد فيها."
      },
      explain: {
        en: "An entity is the set: FRUIT, MEMBER. It is drawn once, named, and becomes a table. An instance is a single occurrence: kiwi, Sara Hamdan. It is never drawn in the model; it arrives as an INSERT and lives as a row. The rule to carry away: the model holds entities, the table holds instances.",
        ar: "الكيان هو المجموعة: FRUIT وMEMBER. يُرسم مرة واحدة، ويُسمّى، ويصبح جدولًا. والنسخة حدوث واحد: kiwi وSara Hamdan. لا تُرسم في النموذج أبدًا؛ تصل بجملة INSERT وتعيش صفًّا. القاعدة التي تحملها معك: النموذج يحمل الكيانات، والجدول يحمل النُسخ."
      }
    },

    /* ---------------------------------------------------- 3 · many instances, a few -- never just one */
    {
      id: "t2l4q10", type: "compare", level: "hard",
      topics: ["t2-one-instance", "t2-instance-count"],
      q: {
        en: "Matt's two versions of the library's entity list. Which statement is right?",
        ar: "إصدارا مات لقائمة كيانات المكتبة. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "MEMBER   BOOK   AUTHOR   PUBLISHER   BOOK TRANSACTION   LIBRARY\n\nLIBRARY instances:  School Library",
      codeB: "The school library  (the business this model is about)\n\nMEMBER   BOOK   AUTHOR   PUBLISHER   BOOK TRANSACTION",
      options: [
        { en: "A is better: every member and book belongs to the library, so the model needs a LIBRARY to point at", ar: "A أفضل: كل عضو وكتاب ينتمي إلى المكتبة، فيحتاج النموذج إلى LIBRARY يشير إليه" },
        { en: "B is better, and for the same reason PUBLISHER should go too: it has only two instances", ar: "B أفضل، وللسبب نفسه يجب أن يُحذف PUBLISHER أيضًا: فله نسختان فقط" },
        { en: "B is better: LIBRARY has one instance and always will, so it is the setting of the model, not a list in it", ar: "B أفضل: لـ LIBRARY نسخة واحدة وستبقى كذلك، فهي إطار النموذج لا قائمة فيه" },
        { en: "B is better because a library is a building, and a building cannot be an entity", ar: "B أفضل لأن المكتبة مبنى، والمبنى لا يمكن أن يكون كيانًا" }
      ],
      answer: 2,
      hint: {
        en: "Ask the faculty member's question of each entity: \"list them for me\". How long is each list?",
        ar: "اطرح سؤال عضو هيئة التدريس على كل كيان: «اسرد لي إيّاها». كم طول كل قائمة؟"
      },
      explain: {
        en: "It would not make sense to have an entity with only one instance: LIBRARY has nothing to list, count or tell apart, and a pointer to it would say the same thing in every row. The library is the business the model is about, so it becomes the title. PUBLISHER is the tempting overreach: some entities have only a few instances, and that is fine. A building is tangible; that is not the problem.",
        ar: "لا معنى لكيان ليس له إلا نسخة واحدة: فليس في LIBRARY ما يُسرد أو يُعدّ أو يُميَّز، والإشارة إليه ستقول الشيء نفسه في كل صفّ. المكتبة هي العمل الذي يدور حوله النموذج، فتصبح عنوانه. أمّا PUBLISHER فهو المبالغة المغرية: بعض الكيانات لها نُسخ قليلة فقط، ولا بأس بذلك. والمبنى ملموس؛ ليست تلك هي المشكلة."
      }
    },
    {
      id: "t2l4q11", type: "mcq", level: "medium",
      topics: ["t2-one-instance", "t2-business-significance"],
      q: {
        en: "A school keeps data on STUDENT, TEACHER, COURSE, ROOM and GRADE. A classmate adds BUILDING; the school has one building and will only ever have one. What is the right verdict?",
        ar: "تحتفظ مدرسة ببيانات عن STUDENT وTEACHER وCOURSE وROOM وGRADE. يضيف أحد الزملاء BUILDING؛ وللمدرسة مبنى واحد ولن يكون لها غيره. ما الحكم الصحيح؟"
      },
      options: [
        { en: "Keep it: a building is tangible, so it qualifies as an entity", ar: "أبقِه: المبنى ملموس، فهو مؤهَّل ليكون كيانًا" },
        { en: "Keep it: the rooms are in it, so it must be stored with ROOM", ar: "أبقِه: الغرف فيه، فيجب أن يُخزَّن مع ROOM" },
        { en: "Drop it: \"building\" is a noun, and nouns become attributes", ar: "احذفه: «building» اسم، والأسماء تصبح خصائص" },
        { en: "Drop it: a set that can only ever hold one thing is not a list, so BUILDING is not an entity here", ar: "احذفه: المجموعة التي لا تحمل إلا شيئًا واحدًا ليست قائمة، فـ BUILDING ليس كيانًا هنا" }
      ],
      answer: 3,
      hint: {
        en: "This is the LIBRARY mistake in a school.",
        ar: "هذا خطأ LIBRARY نفسه في مدرسة."
      },
      explain: {
        en: "One building means BUILDING has one instance, and an entity with only one instance makes no sense. Being tangible does not rescue it: tangibility is a kind of entity, not a test for being one. ROOM is the set the school actually lists. Nouns do not automatically become attributes; entities are usually nouns.",
        ar: "مبنى واحد يعني أن لـ BUILDING نسخة واحدة، ولا معنى لكيان ليس له إلا نسخة واحدة. وكونه ملموسًا لا ينقذه: الملموسية نوع من أنواع الكيانات، لا اختبار لكون الشيء كيانًا. ROOM هي المجموعة التي تسردها المدرسة فعلًا. ولا تصبح الأسماء خصائص تلقائيًّا؛ فالكيانات في الغالب أسماء."
      }
    },
    {
      id: "t2l4q12", type: "tf", level: "medium",
      topics: ["t2-instance-count", "t2-one-instance"],
      q: {
        en: "The library has thousands of books but only two publishers, Riwaq Press and Al-Manara Books. PUBLISHER has too few instances to be an entity.",
        ar: "في المكتبة آلاف الكتب لكن ناشران فقط، Riwaq Press وAl-Manara Books. لـ PUBLISHER نُسخ أقلّ من أن يكون كيانًا."
      },
      truth: false,
      hint: {
        en: "The slides set a lower limit. Is it \"many\", or something smaller?",
        ar: "تضع الشرائح حدًّا أدنى. هل هو «كثير»، أم شيء أصغر؟"
      },
      explain: {
        en: "False. Some entities have many instances and some have only a few; both are fine. The limit is one: an entity with only one instance makes no sense, because there is nothing to list. Two publishers is a short list, but it is a list, and a new publisher can join it tomorrow.",
        ar: "خطأ. لبعض الكيانات نُسخ كثيرة ولبعضها نُسخ قليلة فقط؛ وكلاهما مقبول. الحدّ هو الواحد: لا معنى لكيان ليس له إلا نسخة واحدة، إذ لا شيء يُسرد. ناشران قائمة قصيرة، لكنها قائمة، ويمكن أن ينضمّ إليها ناشر جديد غدًا."
      }
    },
    {
      id: "t2l4q13", type: "trace", level: "hard",
      topics: ["t2-one-instance", "t2-instance-as-row"],
      q: {
        en: "Suppose Matt had kept LIBRARY and given books a library_id that points at it. The four books are inserted, then the query is run. What does it return?",
        ar: "افترض أن مات أبقى LIBRARY وأعطى books عمود library_id يشير إليه. أُدخلت الكتب الأربعة، ثم نُفّذ الاستعلام. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "CREATE TABLE books (id VARCHAR(15) PRIMARY KEY, title VARCHAR(50) NOT NULL UNIQUE, library_id NUMBER NOT NULL);\nINSERT INTO books VALUES ('BK001', 'A Vision', 1), ('BK002', 'War and Peace', 1),\n                         ('BK003', 'Citizen of the World', 1), ('BK004', 'Androcles and the Lion', 1);\n\nSELECT library_id, COUNT(*) AS books\nFROM books\nGROUP BY library_id;",
      options: [
        { en: "Four rows, one per book, each with library_id 1", ar: "أربعة صفوف، صفّ لكل كتاب، في كلٍّ منها library_id يساوي 1" },
        { en: "One row: library_id 1, books 4", ar: "صفّ واحد: library_id يساوي 1، وbooks يساوي 4" },
        { en: "An error: library_id cannot repeat the same value", ar: "خطأ: لا يمكن أن يكرّر library_id القيمة نفسها" },
        { en: "No rows, because there is no library table to join", ar: "لا صفوف، لأنه لا يوجد جدول library للربط" }
      ],
      answer: 1,
      hint: {
        en: "How many different values can library_id ever hold, when there is only one library?",
        ar: "كم قيمة مختلفة يمكن أن يحملها library_id، والمكتبة واحدة فقط؟"
      },
      explain: {
        en: "One row, 1 | 4: every book has library_id 1, so grouping by it collapses everything into one group. That is the point of the lesson's evolve block: a column that points at a one-instance entity holds the same value in every row and never tells two rows apart, the redundancy of lesson 1 by design. Nothing forbids the repeat, which is why no error appears; GROUP BY needs no join.",
        ar: "صفّ واحد، 1 | 4: لكل كتاب library_id يساوي 1، فيجمع التجميع كل شيء في مجموعة واحدة. وهذه هي فكرة كتلة التطوير في الدرس: العمود الذي يشير إلى كيان ذي نسخة واحدة يحمل القيمة نفسها في كل صفّ ولا يميّز صفًّا من صفّ، وهو تكرار الدرس 1 عن قصد. ولا شيء يمنع التكرار، لذلك لا يظهر خطأ؛ ولا يحتاج GROUP BY إلى ربط."
      },
      solution: { out: "library_id | books\n1          | 4" }
    },

    /* ---------------------------------------------------- 4 · tangible or intangible (events: q15) */
    {
      id: "t2l4q14", type: "contrast", level: "medium",
      topics: ["t2-entity-kinds", "t2-tangible", "t2-intangible"],
      q: {
        en: "Sort each entity: is it tangible or intangible?",
        ar: "صنّف كل كيان: هل هو ملموس أم غير ملموس؟"
      },
      concepts: [
        { en: "Tangible", ar: "ملموس" },
        { en: "Intangible", ar: "غير ملموس" }
      ],
      rows: [
        { s: { en: "PRODUCT (Nike Air Jordan)", ar: "PRODUCT (Nike Air Jordan)" }, a: 0 },
        { s: { en: "PRODUCT TYPE (Shoe)", ar: "PRODUCT TYPE (Shoe)" }, a: 1 },
        { s: { en: "JOB (Electrician)", ar: "JOB (Electrician)" }, a: 1 },
        { s: { en: "MEMBER (Sara Hamdan)", ar: "MEMBER (Sara Hamdan)" }, a: 0 },
        { s: { en: "SKILL LEVEL (Expert)", ar: "SKILL LEVEL (Expert)" }, a: 1 }
      ],
      hint: {
        en: "Can you hand an instance of it to someone?",
        ar: "هل تستطيع أن تناول نسخة منه لأحد؟"
      },
      explain: {
        en: "Tangible instances can be touched: a pair of shoes, a person. Intangible ones are ideas a business still lists: Shoe as a category, Electrician, Expert. PRODUCT and PRODUCT TYPE are the pair to separate &mdash; the shoe on the shelf is tangible, the category \"Shoe\" is not. The third kind, an event, is the next question. All three become tables the same way.",
        ar: "النُسخ الملموسة يمكن لمسها: زوج أحذية، شخص. والنُسخ غير الملموسة أفكار يسردها العمل مع ذلك: Shoe بوصفه صنفًا، وElectrician، وExpert. والزوج الذي يجب الفصل بينه هو PRODUCT وPRODUCT TYPE &mdash; الحذاء على الرفّ ملموس، أمّا الصنف «Shoe» فلا. أمّا النوع الثالث، وهو الحدث، فهو موضوع السؤال التالي. والأنواع الثلاثة تصبح جداول بالطريقة نفسها."
      }
    },
    {
      id: "t2l4q15", type: "mcq", level: "easy",
      topics: ["t2-event-entity", "t2-entity-kinds"],
      q: {
        en: "Which of the library's five entities is an event?",
        ar: "أيّ كيانات المكتبة الخمسة حدث؟"
      },
      options: [
        { en: "BOOK TRANSACTION", ar: "BOOK TRANSACTION" },
        { en: "MEMBER", ar: "MEMBER" },
        { en: "BOOK", ar: "BOOK" },
        { en: "AUTHOR", ar: "AUTHOR" }
      ],
      answer: 0,
      hint: {
        en: "Which one's instances each take place on a date?",
        ar: "أيّها تقع كل نسخة منه في تاريخ؟"
      },
      explain: {
        en: "Each instance of BOOK TRANSACTION is a happening: Sara borrowing A Vision on 1 March. That is why lesson 3's logical model gave it # * Tran Date: an event is pinned down by when it happened. MEMBER, BOOK and AUTHOR are tangible; you could shake hands with Leo Tolstoy, at least in principle. BOOK is the near miss, because a borrowing involves a book, but the borrowing and the book are different sets.",
        ar: "كل نسخة من BOOK TRANSACTION واقعة تحدث: استعارة Sara لكتاب A Vision في 1 March. لهذا أعطاه النموذج المنطقي في الدرس 3 الخاصية # * Tran Date: فالحدث يُحدَّد بوقت وقوعه. أمّا MEMBER وBOOK وAUTHOR فملموسة؛ يمكنك أن تصافح Leo Tolstoy، مبدئيًّا على الأقل. وBOOK هو الخيار القريب، لأن الاستعارة تتضمّن كتابًا، لكن الاستعارة والكتاب مجموعتان مختلفتان."
      }
    },
    {
      id: "t2l4q16", type: "tf", level: "medium",
      topics: ["t2-intangible", "t2-entity-kinds", "t2-instance-as-row"],
      q: {
        en: "SKILL LEVEL is intangible, so in the database it needs a different structure from a tangible entity such as MEMBER.",
        ar: "SKILL LEVEL غير ملموس، لذلك يحتاج في قاعدة البيانات إلى بنية مختلفة عن كيان ملموس مثل MEMBER."
      },
      truth: false,
      hint: {
        en: "What does the database see: a kind of entity, or a set of instances?",
        ar: "ماذا ترى قاعدة البيانات: نوع الكيان، أم مجموعة من النُسخ؟"
      },
      explain: {
        en: "False. To the database all three kinds are the same: a table, one row per instance. skill_levels would hold Beginner and Expert as rows exactly as members holds Sara and Omar. Tangible, intangible and event describe what the instances are in the world; they do not change how the entity is stored, and they are never a reason to reject one.",
        ar: "خطأ. الأنواع الثلاثة واحدة في نظر قاعدة البيانات: جدول، وصفّ لكل نسخة. سيحمل skill_levels القيمتين Beginner وExpert صفوفًا تمامًا كما يحمل members الاسمين Sara وOmar. الملموس وغير الملموس والحدث تصف ما هي النُسخ في العالم؛ لا تغيّر طريقة تخزين الكيان، ولا تكون سببًا لرفضه أبدًا."
      }
    },
    {
      id: "t2l4q17", type: "output", level: "medium",
      topics: ["t2-event-entity", "t2-instance-as-row"],
      q: {
        en: "book_transactions holds the lesson's four rows: Sara (member 1) borrows BK001 on 1 March, Omar (2) borrows BK002 on 5 March, Sara borrows BK003 on 5 March, Sara returns BK001 on 12 March. Then Sara borrows again. What does the query return?",
        ar: "يحمل book_transactions صفوف الدرس الأربعة: Sara (العضو 1) تستعير BK001 في 1 March، وOmar ‏(2) يستعير BK002 في 5 March، وSara تستعير BK003 في 5 March، وSara تعيد BK001 في 12 March. ثم تستعير Sara مرة أخرى. ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "INSERT INTO book_transactions VALUES ('2026-03-14', 'borrow', 1, 'BK004');\n\nSELECT COUNT(*) AS transactions\nFROM book_transactions\nWHERE members_id = 1;",
      blanks: [{ accept: ["4", "four", "Four"], label: { en: "transactions", ar: "transactions" } }],
      hint: {
        en: "Count Sara's rows, not Sara.",
        ar: "عُدّ صفوف Sara، لا Sara نفسها."
      },
      explain: {
        en: "4. Sara is one instance of MEMBER, but she has taken part in four instances of BOOK TRANSACTION: three borrowings and a return. Answering 1 counts the member instead of the events; answering 3 forgets the return, which is also a transaction. An event entity grows every day the library is open.",
        ar: "4. Sara نسخة واحدة من MEMBER، لكنها شاركت في أربع نُسخ من BOOK TRANSACTION: ثلاث استعارات وإعادة واحدة. الإجابة 1 تعدّ العضو بدل الأحداث؛ والإجابة 3 تنسى الإعادة، وهي معاملة أيضًا. والكيان الحدث ينمو كل يوم تفتح فيه المكتبة."
      },
      solution: { out: "transactions\n4" }
    },
    {
      id: "t2l4q18", type: "complete", level: "easy",
      topics: ["t2-entity", "t2-entity-vs-instance", "t2-purpose-of-entities"],
      q: {
        en: "Complete version 2 of Matt's entity list, so that it holds the five sets the library must keep data about.",
        ar: "أكمل الإصدار 2 من قائمة كيانات مات، لتحمل المجموعات الخمس التي يجب أن تحتفظ المكتبة ببيانات عنها."
      },
      lang: "text",
      code: "MEMBER   BOOK   AUTHOR   ________   BOOK TRANSACTION",
      options: [
        { code: "RIWAQ PRESS" },
        { code: "BORROW" },
        { code: "PUBLISHER" },
        { code: "LIBRARY" }
      ],
      answer: 2,
      hint: {
        en: "Who published A Vision and War and Peace? Name the set, not the company.",
        ar: "من نشر A Vision وWar and Peace؟ سمِّ المجموعة، لا الشركة."
      },
      explain: {
        en: "PUBLISHER is the set; Riwaq Press is one instance of it, so writing the company's name is the instance-as-box mistake. BORROW is a verb, and borrowing is already captured as the event BOOK TRANSACTION and, later, as relationships. LIBRARY is the business itself, with only one instance.",
        ar: "PUBLISHER هو المجموعة؛ وRiwaq Press نسخة واحدة منه، فكتابة اسم الشركة هي خطأ رسم النسخة صندوقًا. وBORROW فعل، والاستعارة ممثَّلة أصلًا بالحدث BOOK TRANSACTION، ثم لاحقًا بالعلاقات. وLIBRARY هو العمل نفسه، وليس له إلا نسخة واحدة."
      }
    },

    /* ---------------------------------------------------- 5 · is DOG an entity or an instance? */
    {
      id: "t2l4q19", type: "compare", level: "hard",
      topics: ["t2-dog-question", "t2-business-context", "t2-one-instance"],
      q: {
        en: "A dog breeder keeps data on many breeds of dog and on no other species. Two models are proposed. Which statement is right?",
        ar: "مربّي كلاب يحتفظ ببيانات عن سلالات كثيرة من الكلاب ولا يحتفظ بشيء عن أيّ نوع آخر من الحيوانات. اقتُرح نموذجان. أيّ عبارة صحيحة؟"
      },
      lang: "text",
      codeA: "ANIMAL\n  instances:  Dog",
      codeB: "DOG\n  instances:  Terrier, Poodle, Labrador, ...",
      options: [
        { en: "A is better: ANIMAL is more general, so the model is ready if the breeder ever adds cats", ar: "A أفضل: ANIMAL أعمّ، فيكون النموذج جاهزًا إن أضاف المربّي القطط يومًا" },
        { en: "B is better: in A, ANIMAL has one instance and the breeds have no set to belong to; B's entity is the list the breeder actually keeps", ar: "B أفضل: في A ليس لـ ANIMAL إلا نسخة واحدة ولا مجموعة تنتمي إليها السلالات؛ أمّا كيان B فهو القائمة التي يحتفظ بها المربّي فعلًا" },
        { en: "A is right and B is wrong: on the slides, Dog is an instance of ANIMAL", ar: "A صحيح وB خطأ: في الشرائح، Dog نسخة من ANIMAL" },
        { en: "B is better because dogs are tangible and ANIMAL is intangible", ar: "B أفضل لأن الكلاب ملموسة وANIMAL غير ملموس" }
      ],
      answer: 1,
      hint: {
        en: "List the instances of A's entity for this business. Then ask where Poodle would go.",
        ar: "اسرد نُسخ كيان A لهذا العمل. ثم اسأل أين سيذهب Poodle."
      },
      explain: {
        en: "For the breeder, A's ANIMAL holds one instance, Dog: the LIBRARY mistake again, and the breeds have nowhere to live. B makes DOG the entity, with many instances. Quoting the slides' ANIMAL table is the trap: that table is right for a business that deals with many kinds of animal; the slides' own answer to \"entity or instance?\" is \"it depends\". Modelling for a cat that may never come is not generality, it is a one-instance set.",
        ar: "عند المربّي يحمل ANIMAL في A نسخة واحدة، Dog: إنه خطأ LIBRARY مرة أخرى، ولا مكان تعيش فيه السلالات. أمّا B فيجعل DOG هو الكيان، وله نُسخ كثيرة. والفخّ هو الاستشهاد بجدول ANIMAL في الشرائح: ذلك الجدول صحيح لعمل يتعامل مع أنواع كثيرة من الحيوانات؛ وجواب الشرائح نفسها عن «كيان أم نسخة؟» هو «يعتمد». والنمذجة لقطّ قد لا يأتي أبدًا ليست تعميمًا، بل مجموعة ذات نسخة واحدة."
      }
    },
    {
      id: "t2l4q20", type: "mcq", level: "medium",
      topics: ["t2-business-context", "t2-dog-question"],
      q: {
        en: "A riding school keeps horses only, and keeps data on each breed it uses: Arabian, Thoroughbred, Shetland pony. A city zoo keeps many species: horse, lion, camel. Which is right?",
        ar: "مدرسة فروسية لا تقتني إلا الخيول، وتحتفظ ببيانات عن كل سلالة تستخدمها: Arabian وThoroughbred وShetland pony. وحديقة حيوان في المدينة تقتني أنواعًا كثيرة: horse وlion وcamel. أيّ العبارات صحيحة؟"
      },
      options: [
        { en: "HORSE is an entity for both: a horse is a real animal you can touch", ar: "HORSE كيان عند كليهما: فالحصان حيوان حقيقي يمكن لمسه" },
        { en: "HORSE is an instance for both: the slides list animals as instances of ANIMAL", ar: "HORSE نسخة عند كليهما: فالشرائح تسرد الحيوانات نُسخًا من ANIMAL" },
        { en: "HORSE is the entity for the riding school, and horse is an instance of ANIMAL for the zoo", ar: "HORSE هو الكيان عند مدرسة الفروسية، والحصان نسخة من ANIMAL عند حديقة الحيوان" },
        { en: "HORSE is the entity for the zoo, and an instance of BREED for the riding school", ar: "HORSE هو الكيان عند حديقة الحيوان، ونسخة من BREED عند مدرسة الفروسية" }
      ],
      answer: 2,
      hint: {
        en: "This is the DOG question with a different animal. What does each business need to list?",
        ar: "هذا سؤال DOG بحيوان آخر. ماذا يحتاج كل عمل أن يسرد؟"
      },
      explain: {
        en: "The business context decides. The riding school lists breeds of horse, so HORSE is the set and Arabian is one instance. The zoo lists species, so horse is one instance of ANIMAL. Both \"for both\" answers ignore the business; tangibility decides the kind of entity, not whether it is one. The last option swaps the two businesses round.",
        ar: "سياق العمل هو الذي يقرّر. مدرسة الفروسية تسرد سلالات الخيول، فيكون HORSE هو المجموعة وArabian نسخة واحدة منها. وحديقة الحيوان تسرد الأنواع، فيكون الحصان نسخة واحدة من ANIMAL. والإجابتان «عند كليهما» تتجاهلان العمل؛ فالملموسية تحدّد نوع الكيان، لا كونه كيانًا. والخيار الأخير يقلب العملين."
      }
    },
    {
      id: "t2l4q21", type: "fill", level: "easy",
      topics: ["t2-dog-question", "t2-business-context"],
      q: {
        en: "Fill both blanks with entity or instance.",
        ar: "املأ الفراغين بإحدى الكلمتين entity أو instance."
      },
      lang: "text",
      code: "For an animal shelter, Dog is an ____1____ of ANIMAL.\nFor a dog breeder, DOG is an ____2____, with Terrier, Poodle and Labrador in it.",
      blanks: [
        { accept: ["instance", "Instance", "INSTANCE", "an instance"], label: { en: "1", ar: "1" } },
        { accept: ["entity", "Entity", "ENTITY", "an entity"], label: { en: "2", ar: "2" } }
      ],
      hint: {
        en: "In each sentence, which is the list and which is one item on it?",
        ar: "في كل جملة، ما القائمة وما العنصر الواحد فيها؟"
      },
      explain: {
        en: "1 = instance, 2 = entity. The shelter lists kinds of animal, so Dog is one occurrence of ANIMAL. The breeder lists breeds, so DOG is the set. The word moved up a level, and neither model is wrong for its own business.",
        ar: "1 = instance، و2 = entity. المأوى يسرد أنواع الحيوانات، فيكون Dog حدوثًا واحدًا لـ ANIMAL. والمربّي يسرد السلالات، فيكون DOG هو المجموعة. انتقلت الكلمة مستوى إلى الأعلى، ولا أيّ من النموذجين خطأ لعمله."
      },
      solution: { en: "1 = instance, 2 = entity.", ar: "1 = instance، 2 = entity." }
    },
    {
      id: "t2l4q22", type: "multi", level: "hard",
      topics: ["t2-dog-question", "t2-business-context", "t2-instance-as-row"],
      q: {
        en: "The shelter and the breeder both say, \"We need to keep data about dogs.\" Which statements are true? Choose every one.",
        ar: "يقول المأوى والمربّي كلاهما: «We need to keep data about dogs.» أيّ العبارات صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "In the shelter's database, 'Dog' is a value in a row of animals", ar: "في قاعدة بيانات المأوى، 'Dog' قيمة في صفّ من animals" },
        { en: "The breeder's model should still put ANIMAL above DOG, to be safe", ar: "يجب أن يضع نموذج المربّي ANIMAL فوق DOG مع ذلك، احتياطًا" },
        { en: "In the breeder's database, dogs is the table name and Poodle is a row", ar: "في قاعدة بيانات المربّي، dogs هو اسم الجدول وPoodle صفّ" },
        { en: "The shelter's model is wrong, because DOG should always be an entity", ar: "نموذج المأوى خطأ، لأن DOG يجب أن يكون كيانًا دائمًا" },
        { en: "The choice is made in the conceptual model, from the business's needs; CREATE TABLE only follows it", ar: "يُتّخذ القرار في النموذج المفاهيمي، من حاجات العمل؛ وCREATE TABLE يتبعه فقط" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Same word, different place. Where does each business put it, and who decided?",
        ar: "الكلمة نفسها، في مكان مختلف. أين يضعها كل عمل، ومن قرّر ذلك؟"
      },
      explain: {
        en: "For the shelter, Dog is a value in a row of animals; for the breeder, dogs is the table and the breeds are its rows. That decision is made in the conceptual model and the SQL follows. \"Always\" is the wrong word: neither model is wrong for its own business. Putting ANIMAL above DOG for the breeder gives ANIMAL a single instance, the mistake of section 3.",
        ar: "عند المأوى، Dog قيمة في صفّ من animals؛ وعند المربّي، dogs هو الجدول والسلالات صفوفه. هذا القرار يُتّخذ في النموذج المفاهيمي، وSQL يتبعه. وكلمة «دائمًا» هي الخطأ: لا أيّ من النموذجين خطأ لعمله. ووضع ANIMAL فوق DOG عند المربّي يعطي ANIMAL نسخة واحدة، وهو خطأ القسم 3."
      }
    },
    {
      id: "t2l4q23", type: "write", level: "hard",
      topics: ["t2-business-context", "t2-instance-as-row", "t2-dog-question"],
      q: {
        en: "Build the breeder's database. Create a table dogs with an id that is the primary key and a mandatory breed, then insert Terrier, Poodle and Labrador as ids 1, 2 and 3. End each statement with a semicolon.",
        ar: "ابنِ قاعدة بيانات المربّي. أنشئ جدولًا dogs فيه id هو المفتاح الأساسي وbreed إلزامي، ثم أدخل Terrier وPoodle وLabrador بالأرقام 1 و2 و3. أنهِ كل جملة بفاصلة منقوطة."
      },
      lang: "sql",
      lines: 10,
      starter: "CREATE TABLE dogs (\n\n);\n",
      checks: [
        { re: "CREATE\\s+TABLE\\s+dogs\\s*\\(", flags: "i",
          label: { en: "one table, dogs, for the entity DOG", ar: "جدول واحد، dogs، للكيان DOG" } },
        { re: "CREATE\\s+TABLE\\s+dogs\\s*\\([^;]*(\\bid\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\))", flags: "i",
          label: { en: "id is the primary key", ar: "id هو المفتاح الأساسي" } },
        { re: "CREATE\\s+TABLE\\s+dogs\\s*\\([^;]*breed\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i",
          label: { en: "breed is NOT NULL", ar: "breed هو NOT NULL" } },
        { re: "INSERT\\s+INTO\\s+dogs[^;]*[\"']Terrier[\"'][^;]*;|INSERT\\s+INTO\\s+dogs[^;]*;[\\s\\S]*[\"']Terrier[\"']", flags: "i",
          label: { en: "Terrier is inserted as a row", ar: "أُدخل Terrier صفًّا" } },
        { re: "[\"']Poodle[\"'][\\s\\S]*[\"']Labrador[\"']|[\"']Labrador[\"'][\\s\\S]*[\"']Poodle[\"']", flags: "i",
          label: { en: "Poodle and Labrador are inserted as rows", ar: "أُدخل Poodle وLabrador صفّين" } }
      ],
      forbid: [
        { re: "CREATE\\s+TABLE\\s+(terriers?|poodles?|labradors?)\\b", flags: "i",
          label: { en: "A breed is an instance: it is a row of dogs, not a table of its own", ar: "السلالة نسخة: هي صفّ في dogs، لا جدول مستقلّ" } },
        { re: "CREATE\\s+TABLE\\s+animals?\\b", flags: "i",
          label: { en: "The breeder keeps no other species: an animals table would hold one row, Dog", ar: "لا يحتفظ المربّي بأيّ نوع آخر: جدول animals سيحمل صفًّا واحدًا، Dog" } }
      ],
      hint: {
        en: "One entity, one table. Each breed is an instance, so each breed is one row.",
        ar: "كيان واحد، جدول واحد. كل سلالة نسخة، فكل سلالة صفّ واحد."
      },
      explain: {
        en: "DOG becomes one table, dogs, and Terrier, Poodle and Labrador become three rows; a new breed is one more INSERT, never a new table. A table per breed is the instance-as-box mistake in SQL. An animals table is the shelter's design applied to the breeder: it would hold Dog and nothing else. Run it and SELECT id, breed FROM dogs ORDER BY id returns the three breeds.",
        ar: "يصبح DOG جدولًا واحدًا، dogs، ويصبح Terrier وPoodle وLabrador ثلاثة صفوف؛ والسلالة الجديدة جملة INSERT إضافية، لا جدول جديد أبدًا. وجدول لكل سلالة هو خطأ رسم النسخة صندوقًا، في SQL. وجدول animals هو تصميم المأوى مطبَّقًا على المربّي: لن يحمل إلا Dog. نفّذه، وسيُرجع SELECT id, breed FROM dogs ORDER BY id السلالات الثلاث."
      },
      solution: {
        code: "CREATE TABLE dogs (\n  id    NUMBER      PRIMARY KEY,\n  breed VARCHAR(20) NOT NULL\n);\n\nINSERT INTO dogs VALUES (1, 'Terrier'), (2, 'Poodle'), (3, 'Labrador');",
        en: "One table for the entity, one row per instance.",
        ar: "جدول واحد للكيان، وصفّ واحد لكل نسخة."
      }
    },

    /* ---------------------------------------------------- the whole lesson */
    {
      id: "t2l4q24", type: "error", level: "hard",
      topics: ["t2-one-instance", "t2-business-significance", "t2-event-entity", "t2-instance-count"],
      q: {
        en: "Matt's draft of the library's entities, each with some instances. Which lines should not be entities in this model? Choose every one.",
        ar: "مسوّدة مات لكيانات المكتبة، ومع كلٍّ منها بعض نُسخه. أيّ الأسطر لا يجب أن تكون كيانات في هذا النموذج؟ اختر كل ما ينطبق."
      },
      lang: "text",
      code: "MEMBER            Sara Hamdan, Omar Saleh, Lina Khalil\nPUBLISHER         Riwaq Press, Al-Manara Books\nLIBRARY           School Library\nBOOK TRANSACTION  Sara borrows A Vision on 1 March, ...\nAUTHOR            Oscar Wilde, Leo Tolstoy, Oliver Goldsmith\nCLOCK             the reading-room clock",
      answer: [3, 6],
      hint: {
        en: "Test each line twice: does the library need data about it, and is there more than one thing to list?",
        ar: "اختبر كل سطر مرتين: هل تحتاج المكتبة إلى بيانات عنه، وهل فيه أكثر من شيء واحد يُسرد؟"
      },
      explain: {
        en: "Line 3: LIBRARY has one instance, and an entity with only one instance makes no sense; it is the business the model is about. Line 6: CLOCK is a noun, but the library keeps no data about it, and it has one instance too. The tempting lines are 2, with only a few instances, which is fine, and 4, an event you cannot touch, which is still an entity.",
        ar: "السطر 3: لـ LIBRARY نسخة واحدة، ولا معنى لكيان ليس له إلا نسخة واحدة؛ فهي العمل الذي يدور حوله النموذج. السطر 6: CLOCK اسم، لكن المكتبة لا تحتفظ ببيانات عنه، وله نسخة واحدة أيضًا. والسطران المغريان هما 2، وله نُسخ قليلة فقط، ولا بأس بذلك، و4، وهو حدث لا يُلمس، لكنه كيان مع ذلك."
      },
      solution: {
        en: "Lines 3 and 6: a one-instance set, and a noun the library keeps no data about.",
        ar: "السطران 3 و6: مجموعة ذات نسخة واحدة، واسم لا تحتفظ المكتبة ببيانات عنه."
      }
    }
  ]
};
