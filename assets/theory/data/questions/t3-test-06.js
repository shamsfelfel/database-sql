/* Question bank: T3 lesson 6 test -- Matrix Diagrams. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-06"] = {
  title: { en: "Test 6 — Matrix Diagrams", ar: "اختبار 6 — مخطّطات المصفوفة" },
  intro: {
    en: "24 questions on lesson 6: why a matrix finds the relationships an eye misses, building the grid and counting its pairs, the diagonal, writing and reading every cell row first, mirror cells, what a matrix cannot tell you, and mapping a filled matrix to an ERD. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس السادس: لماذا تجد المصفوفة العلاقات التي تفوت العين، وبناء الشبكة وعدّ أزواجها، والقُطر، وكتابة كل خلية وقراءتها بدءًا من الصف، والخليتان المتقابلتان (mirror cells)، وما لا تستطيع المصفوفة أن تخبرك به، ونقل المصفوفة الممتلئة إلى مخطّط ERD. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · three entities, or thirteen */
    {
      id: "t3l6q01", type: "mcq", level: "easy", topics: ["t3-matrix-purpose", "t3-matrix-diagram"],
      q: {
        en: "The school sends its full list: thirteen entities, from STUDENT and EXAM to CLUB, CLASSROOM and MAINTENANCE STAFF. Why do the slides tell you to build a matrix diagram now, rather than draw the lines you notice?",
        ar: "ترسل المدرسة قائمتها الكاملة: ثلاثة عشر كيانًا، من STUDENT وEXAM إلى CLUB وCLASSROOM وMAINTENANCE STAFF. لماذا تطلب منك الشرائح أن تبني مخطّط مصفوفة (matrix diagram) الآن، بدل أن ترسم الخطوط التي تلاحظها؟"
      },
      options: [
        { en: "The matrix records whether each relationship is mandatory or optional, which a sketch leaves out", ar: "المصفوفة تسجّل هل كل علاقة إلزامية أم اختيارية، وهذا ما يُغفله الرسم السريع" },
        { en: "The matrix visits every pair of entities once, so a relationship like CLUB–CLASSROOM cannot be missed", ar: "المصفوفة تمرّ على كل زوج من الكيانات مرّة، فلا تفوتك علاقة مثل CLUB–CLASSROOM" },
        { en: "The matrix replaces the ERD: once it is filled, there is nothing left to draw", ar: "المصفوفة تحلّ محلّ مخطّط ERD: متى امتلأت لم يبقَ شيء يُرسم" },
        { en: "The matrix tells you which entities are needed, so you can drop the ones that are not", ar: "المصفوفة تخبرك أيّ الكيانات مطلوبة، فتحذف ما ليس مطلوبًا" }
      ],
      answer: 1,
      hint: {
        en: "The slides: \"a good way to make sure that you haven't …\" — finish the sentence.",
        ar: "تقول الشرائح: «طريقة جيّدة لتتأكّد أنك لم …» — أكمل العبارة."
      },
      explain: {
        en: "The slides: \"a good way to make sure that you haven't missed any relationships.\" Thirteen entities make 78 pairs, too many to hold in your head but easy to tick off in a grid. Mandatory or optional is the tempting answer, yet the slides say matrix diagrams do not show optionality and cardinality. And the matrix does not replace the ERD: its relationships \"are then drawn on the ERD\".",
        ar: "تقول الشرائح: «طريقة جيّدة لتتأكّد أنك لم تُغفل أيّ علاقة». فثلاثة عشر كيانًا تعطي 78 زوجًا، أكثر من أن تحفظها في رأسك، لكن يسهل أن تمرّ عليها واحدًا واحدًا في شبكة. والإلزامي أو الاختياري هو الجواب المغري، غير أن الشرائح تقول إن مخطّطات المصفوفة لا تُظهر الاختيارية (optionality) ولا العدديّة (cardinality). ولا تحلّ المصفوفة محلّ مخطّط ERD: علاقاتها «تُرسم بعد ذلك على مخطّط ERD»."
      }
    },
    {
      id: "t3l6q02", type: "fill", level: "easy", topics: ["t3-entity-pairs", "t3-matrix-build"],
      q: {
        en: "The agency adds HOTEL, so the travel matrix lists TRAVELER, COUNTRY, LANDMARK and HOTEL on both axes. Fill in the counts.",
        ar: "تضيف الوكالة HOTEL، فتسرد مصفوفة السفر TRAVELER وCOUNTRY وLANDMARK وHOTEL على المحورين. املأ الأعداد."
      },
      code: "Cells in the grid:              ____1____\nCells on the diagonal:          ____2____\nDifferent entity pairs to ask:  ____3____",
      blanks: [
        { accept: ["16"], label: { en: "1", ar: "1" } },
        { accept: ["4"], label: { en: "2", ar: "2" } },
        { accept: ["6"], label: { en: "3", ar: "3" } }
      ],
      hint: {
        en: "n entities on each axis give n × n cells. Take away the diagonal, and the rest come in twos.",
        ar: "‏n كيانات على كل محور تعطي n × n خلية. اطرح القُطر، والباقي يأتي مثنى مثنى."
      },
      explain: {
        en: "4 × 4 = 16 cells; 4 sit on the diagonal; the other 12 come in mirror pairs, so 12 ÷ 2 = 6 pairs, the same as 4 × 3 ÷ 2. Answering 12 counts each pair twice, once from each end. The 4 diagonal cells are separate questions: is the entity related to itself?",
        ar: "‏4 × 4 = 16 خلية؛ منها 4 على القُطر؛ والـ 12 الباقية تأتي أزواجًا متقابلة، فهي 12 ÷ 2 = 6 أزواج، وهو نفسه 4 × 3 ÷ 2. ومن أجاب 12 عدّ كل زوج مرّتين، مرّة من كل طرف. أما خلايا القُطر الأربع فأسئلة مستقلّة: هل الكيان مرتبط بنفسه؟"
      }
    },

    /* ---------------------------------------------------- 2 · building the grid */
    {
      id: "t3l6q03", type: "tf", level: "easy", topics: ["t3-matrix-cell", "t3-matrix-build"],
      q: {
        en: "An empty cell in a finished matrix means nobody has thought about that pair yet; it can be filled in later.",
        ar: "الخلية الفارغة في مصفوفة مكتملة تعني أن أحدًا لم يفكّر في ذلك الزوج بعد؛ ويمكن ملؤها لاحقًا."
      },
      truth: false,
      hint: {
        en: "In a finished matrix, every cell has been asked about. What answer does a blank give?",
        ar: "في المصفوفة المكتملة سُئل عن كل خلية. فما الجواب الذي يعطيه الفراغ؟"
      },
      explain: {
        en: "False. An empty cell records a decision: the row entity has no relationship to the column entity. That is the whole point of the grid: every pair is asked about once, and the blanks are answers too, like CUSTOMER–WAREHOUSE in the DFo matrix. A blank that only means \"not looked at yet\" is exactly the missed relationship the matrix exists to prevent.",
        ar: "خطأ. الخلية الفارغة تسجّل قرارًا: كيان الصف ليس له علاقة بكيان العمود. وهذا هو الغرض من الشبكة كلّه: يُسأل عن كل زوج مرّة، والفراغات أجوبة أيضًا، مثل CUSTOMER–WAREHOUSE في مصفوفة DFo. أما الفراغ الذي يعني «لم يُنظر فيه بعد» فهو بعينه العلاقة الفائتة التي وُجدت المصفوفة لتمنعها."
      }
    },
    {
      id: "t3l6q04", type: "mcq", level: "easy", topics: ["t3-travel-agency", "t3-matrix-row-first"],
      q: {
        en: "In the slides' travel matrix, what is written in the cell where the LANDMARK row meets the COUNTRY column?",
        ar: "في مصفوفة السفر في الشرائح، ماذا يُكتب في الخلية التي يلتقي فيها صفّ LANDMARK بعمود COUNTRY؟"
      },
      options: [
        { en: "the location of", ar: "the location of" },
        { en: "visited by", ar: "visited by" },
        { en: "located in", ar: "located in" },
        { en: "Nothing: a landmark is not related to a country", ar: "لا شيء: المَعلَم ليس مرتبطًا بدولة" }
      ],
      answer: 2,
      hint: {
        en: "Read the cell as row entity · name · column entity. Which name makes LANDMARK · ___ · COUNTRY a true phrase?",
        ar: "اقرأ الخلية: كيان الصف · الاسم · كيان العمود. أيّ اسم يجعل LANDMARK · ___ · COUNTRY عبارة صحيحة؟"
      },
      explain: {
        en: "located in: \"LANDMARK located in COUNTRY\". the location of is the right name for this pair, but it belongs in the mirror cell, the COUNTRY row and the LANDMARK column. visited by is TRAVELER's pair, not this one. The cell is not empty: the travel matrix fills every off-diagonal cell.",
        ar: "‏located in: «LANDMARK located in COUNTRY». و the location of اسم صحيح لهذا الزوج، لكن مكانه الخلية المقابلة، صفّ COUNTRY وعمود LANDMARK. و visited by لزوج TRAVELER، لا لهذا الزوج. والخلية ليست فارغة: مصفوفة السفر تملأ كل خلية خارج القُطر."
      }
    },
    {
      id: "t3l6q05", type: "tf", level: "easy", topics: ["t3-matrix-diagonal"],
      q: {
        en: "In the H.R. matrix, the cell where the EMPLOYEE row meets the EMPLOYEE column is filled. That cell is a recursive relationship: the manager loop.",
        ar: "في مصفوفة الموارد البشرية، الخلية التي يلتقي فيها صفّ EMPLOYEE بعمود EMPLOYEE ممتلئة. هذه الخلية علاقة ذاتية (recursive): حلقة المدير."
      },
      truth: true,
      hint: {
        en: "Where on the grid does an entity meet itself?",
        ar: "أين في الشبكة يلتقي الكيان بنفسه؟"
      },
      explain: {
        en: "True. The diagonal is where an entity's row meets its own column, and a filled diagonal cell is a recursive relationship: Lesson 5's manager loop, which becomes employees.manager_id. In the travel matrix the same cells stay empty: no traveler is related to another traveler. Skipping the diagonal is how a recursive relationship goes missing.",
        ar: "صحيح. القُطر هو حيث يلتقي صفّ الكيان بعموده هو، والخلية الممتلئة على القُطر علاقة ذاتية: حلقة المدير في الدرس 5، التي تصير employees.manager_id. وفي مصفوفة السفر تبقى هذه الخلايا فارغة: لا مسافر مرتبط بمسافر آخر. وتخطّي القُطر هو الطريق إلى فقدان علاقة ذاتية."
      }
    },
    {
      id: "t3l6q06", type: "order", level: "easy", topics: ["t3-matrix-build", "t3-matrix-to-erd"],
      q: {
        en: "Put the steps from a list of entities to a finished ERD in order.",
        ar: "رتّب الخطوات من قائمة الكيانات إلى مخطّط ERD مكتمل."
      },
      items: [
        { en: "Write the entities down the left side", ar: "اكتب الكيانات على الجانب الأيسر" },
        { en: "Write the same entities, in the same order, across the top", ar: "اكتب الكيانات نفسها، بالترتيب نفسه، في الأعلى" },
        { en: "Fill each cell row first with a lowercase name, or leave it blank", ar: "املأ كل خلية بدءًا من الصف باسم بأحرف صغيرة، أو اتركها فارغة" },
        { en: "Draw one line per pair of filled mirror cells, each name beside its row entity", ar: "ارسم خطًّا واحدًا لكل زوج من الخلايا المتقابلة الممتلئة، وكل اسم بجانب كيان صفّه" },
        { en: "Set the halves and the ends from the business's answers", ar: "حدّد الأنصاف والأطراف من أجوبة العمل" },
        { en: "Read every line back in ERDish", ar: "اقرأ كل خط من جديد بلغة ERDish" }
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hint: {
        en: "The grid comes first, then the lines, then the marks the grid could not give, then the check.",
        ar: "الشبكة أولًا، ثم الخطوط، ثم العلامات التي لم تعطها الشبكة، ثم التحقّق."
      },
      explain: {
        en: "Side, top, cells; then the mapping: one line per filled pair with each name beside its row entity, then the marks, then read it back. The marks cannot come before the lines, and they cannot come from the matrix at all: they come from asking the business. Reading back in ERDish last is the check that every line says what the business said.",
        ar: "الجانب، فالأعلى، فالخلايا؛ ثم النقل: خط لكل زوج ممتلئ وكل اسم بجانب كيان صفّه، ثم العلامات، ثم القراءة من جديد. ولا تأتي العلامات قبل الخطوط، ولا تأتي من المصفوفة أصلًا: تأتي من سؤال العمل. والقراءة بلغة ERDish في الختام هي التحقّق من أن كل خط يقول ما قاله العمل."
      }
    },
    {
      id: "t3l6q07", type: "match", level: "easy", topics: ["t3-travel-agency", "t3-matrix-row-first", "t3-mirror-cells"],
      q: {
        en: "Match each cell of the slides' travel matrix to the name written in it.",
        ar: "طابِق كل خلية من مصفوفة السفر في الشرائح بالاسم المكتوب فيها."
      },
      leftHead: { en: "Row × column", ar: "الصف × العمود" },
      rightHead: { en: "Name in the cell", ar: "الاسم في الخلية" },
      pairs: [
        { l: { en: "TRAVELER × COUNTRY", ar: "TRAVELER × COUNTRY" }, r: { en: "visit", ar: "visit" } },
        { l: { en: "COUNTRY × TRAVELER", ar: "COUNTRY × TRAVELER" }, r: { en: "visited by", ar: "visited by" } },
        { l: { en: "TRAVELER × LANDMARK", ar: "TRAVELER × LANDMARK" }, r: { en: "have seen", ar: "have seen" } },
        { l: { en: "LANDMARK × TRAVELER", ar: "LANDMARK × TRAVELER" }, r: { en: "seen by", ar: "seen by" } },
        { l: { en: "COUNTRY × LANDMARK", ar: "COUNTRY × LANDMARK" }, r: { en: "the location of", ar: "the location of" } }
      ],
      hint: {
        en: "Say each pair as row entity · name · column entity, and keep the one that is true.",
        ar: "انطق كل زوج: كيان الصف · الاسم · كيان العمود، واحتفظ بما هو صحيح."
      },
      explain: {
        en: "TRAVELER visit COUNTRY, COUNTRY visited by TRAVELER, TRAVELER have seen LANDMARK, LANDMARK seen by TRAVELER, COUNTRY the location of LANDMARK. Each name reads row first. The tempting swap is visit and visited by: put visited by in the TRAVELER row and the cell says a country visits a person.",
        ar: "‏TRAVELER visit COUNTRY، وCOUNTRY visited by TRAVELER، وTRAVELER have seen LANDMARK، وLANDMARK seen by TRAVELER، وCOUNTRY the location of LANDMARK. كل اسم يُقرأ بدءًا من الصف. والتبديل المغري بين visit وvisited by: ضع visited by في صفّ TRAVELER فتقول الخلية إن الدولة تزور الشخص."
      }
    },

    /* ---------------------------------------------------- 3 · one direction only */
    {
      id: "t3l6q08", type: "multi", level: "medium", topics: ["t3-matrix-one-direction", "t3-matrix-row-first"],
      q: {
        en: "Each phrase below was read off the travel matrix. Which readings are correct by the slides' one-direction rule? Choose all that apply.",
        ar: "كل عبارة أدناه قُرئت من مصفوفة السفر. أيّ القراءات صحيحة بقاعدة الاتجاه الواحد في الشرائح؟ اختر كل ما ينطبق."
      },
      options: [
        { code: "COUNTRY visited by TRAVELER" },
        { code: "TRAVELER visited by COUNTRY" },
        { code: "LANDMARK seen by TRAVELER" },
        { code: "TRAVELER seen by LANDMARK" },
        { code: "LANDMARK located in COUNTRY" },
        { code: "COUNTRY located in LANDMARK" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "Find the cell that holds the name, then read its row entity first.",
        ar: "اعثر على الخلية التي تحمل الاسم، ثم اقرأ كيان صفّها أولًا."
      },
      explain: {
        en: "visited by sits in the COUNTRY row, seen by in the LANDMARK row, located in in the LANDMARK row, so each reads with that entity first. \"TRAVELER visited by COUNTRY\" and \"TRAVELER seen by LANDMARK\" are the slides' own examples of incorrect readings: the same cells, read column first. \"COUNTRY located in LANDMARK\" makes the same mistake, and a builder who believed it would give each country a single landmark.",
        ar: "‏visited by في صفّ COUNTRY، وseen by في صفّ LANDMARK، وlocated in في صفّ LANDMARK، فكلٌّ يُقرأ بذلك الكيان أولًا. أما «TRAVELER visited by COUNTRY» و«TRAVELER seen by LANDMARK» فهما مثالا الشرائح نفسها على القراءة الخاطئة: الخلايا نفسها مقروءة من العمود. و«COUNTRY located in LANDMARK» تقع في الخطأ نفسه، والبنّاء الذي يصدّقها يعطي كل دولة مَعلَمًا واحدًا."
      }
    },
    {
      id: "t3l6q09", type: "compare", level: "medium", topics: ["t3-matrix-one-direction", "t3-mirror-cells"],
      q: {
        en: "Versions 1 and 2 of the travel matrix from the lesson's evolve block, each cell listed as row × column: name. Compare them.",
        ar: "الإصداران 1 و2 من مصفوفة السفر في كتلة التطوّر في الدرس، وكل خلية مكتوبة: الصف × العمود: الاسم. قارن بينهما."
      },
      codeA: "TRAVELER × COUNTRY:   visited by\nTRAVELER × LANDMARK:  seen by\nCOUNTRY  × TRAVELER:  visited by\nCOUNTRY  × LANDMARK:  the location of\nLANDMARK × TRAVELER:  seen by\nLANDMARK × COUNTRY:   located in",
      codeB: "TRAVELER × COUNTRY:   visit\nTRAVELER × LANDMARK:  have seen\nCOUNTRY  × TRAVELER:  visited by\nCOUNTRY  × LANDMARK:  the location of\nLANDMARK × TRAVELER:  seen by\nLANDMARK × COUNTRY:   located in",
      options: [
        { en: "They are equivalent: the same cells are filled, so the same three relationships are found", ar: "متكافئان: الخلايا الممتلئة نفسها، فالعلاقات الثلاث نفسها موجودة" },
        { en: "A is better: writing the passive name twice makes the relationship clearer from both ends", ar: "A أفضل: كتابة الاسم المبني للمجهول مرّتين توضّح العلاقة من الطرفين" },
        { en: "B is better because it has fewer filled cells to map", ar: "B أفضل لأن فيها خلايا ممتلئة أقلّ للنقل" },
        { en: "B is better: every cell reads row first, so each pair carries two different names, one for each end", ar: "B أفضل: كل خلية تُقرأ بدءًا من الصف، فيحمل كل زوج اسمين مختلفين، اسمًا لكل طرف" }
      ],
      answer: 3,
      hint: {
        en: "Read A's TRAVELER row the way every other cell is read. What does it say, and which names are now nowhere?",
        ar: "اقرأ صفّ TRAVELER في A كما تُقرأ سائر الخلايا. ماذا يقول، وأيّ الأسماء لم يعد لها مكان؟"
      },
      explain: {
        en: "In A the TRAVELER row was written column first, so read row first it says \"TRAVELER visited by COUNTRY\". Two pairs now show one name twice, and visit and have seen are lost: two relationship ends with no name. \"Equivalent\" is tempting because the same cells are filled, but a cell holds a name, and here half of them are wrong. Write and read in one direction only.",
        ar: "في A كُتب صفّ TRAVELER بدءًا من العمود، فإذا قُرئ بدءًا من الصف قال «TRAVELER visited by COUNTRY». وصار زوجان يحملان اسمًا واحدًا مرّتين، وضاع visit وhave seen: طرفان من علاقتين بلا اسم. ويُغري «متكافئان» لأن الخلايا الممتلئة نفسها، لكن الخلية تحمل اسمًا، ونصف الأسماء هنا خطأ. اكتب واقرأ في اتجاه واحد فقط."
      }
    },
    {
      id: "t3l6q10", type: "error", level: "medium", topics: ["t3-matrix-row-first", "t3-mirror-cells", "t3-travel-agency"],
      q: {
        en: "A student copies the travel matrix cell by cell. Which line is written in the wrong direction?",
        ar: "ينسخ طالب مصفوفة السفر خلية خلية. أيّ سطر مكتوب في الاتجاه الخطأ؟"
      },
      code: "TRAVELER row,  COUNTRY column:   visit\nTRAVELER row,  LANDMARK column:  have seen\nCOUNTRY row,   TRAVELER column:  visited by\nCOUNTRY row,   LANDMARK column:  located in\nLANDMARK row,  TRAVELER column:  seen by\nLANDMARK row,  COUNTRY column:   located in",
      answer: 4,
      solution: {
        code: "TRAVELER row,  COUNTRY column:   visit\nTRAVELER row,  LANDMARK column:  have seen\nCOUNTRY row,   TRAVELER column:  visited by\nCOUNTRY row,   LANDMARK column:  the location of\nLANDMARK row,  TRAVELER column:  seen by\nLANDMARK row,  COUNTRY column:   located in",
        en: "Line 4 reads \"COUNTRY located in LANDMARK\"; row first it must be the location of.",
        ar: "السطر 4 يُقرأ «COUNTRY located in LANDMARK»؛ وبدءًا من الصف يجب أن يكون the location of."
      },
      hint: {
        en: "Mirror cells hold two different names. Is any name written twice?",
        ar: "الخليتان المتقابلتان تحملان اسمين مختلفين. هل كُتب اسم مرّتين؟"
      },
      explain: {
        en: "Line 4. Read row first, it says \"COUNTRY located in LANDMARK\", a country inside a landmark. The giveaway is lines 4 and 6: a mirror pair carrying one name twice. Line 6 is the tempting one to blame because it is the other copy, but \"LANDMARK located in COUNTRY\" reads correctly.",
        ar: "السطر 4. يُقرأ بدءًا من الصف «COUNTRY located in LANDMARK»، أي دولة داخل مَعلَم. والعلامة الكاشفة السطران 4 و6: زوج متقابل يحمل اسمًا واحدًا مرّتين. ويُغري أن تلوم السطر 6 لأنه النسخة الأخرى، لكن «LANDMARK located in COUNTRY» تُقرأ صحيحة."
      }
    },
    {
      id: "t3l6q11", type: "tf", level: "easy", topics: ["t3-mirror-cells", "t3-matrix-to-erd"],
      q: {
        en: "In the travel matrix, the TRAVELER × COUNTRY cell (visit) and the COUNTRY × TRAVELER cell (visited by) are two relationships, so the ERD gets two lines between TRAVELER and COUNTRY.",
        ar: "في مصفوفة السفر، الخلية TRAVELER × COUNTRY ‏(visit) والخلية COUNTRY × TRAVELER ‏(visited by) علاقتان، فيكون في مخطّط ERD خطّان بين TRAVELER وCOUNTRY."
      },
      truth: false,
      hint: {
        en: "Lesson 1: how many names does every relationship have?",
        ar: "الدرس 1: كم اسمًا لكل علاقة؟"
      },
      explain: {
        en: "False. Mirror cells, opposite each other across the diagonal, hold the two names of a single relationship, one for each end, as Lesson 1 said every relationship is named at both ends. One pair of filled mirror cells gives one line, with visit beside TRAVELER and visited by beside COUNTRY. Drawing a line per filled cell draws every relationship twice.",
        ar: "خطأ. الخليتان المتقابلتان، على جانبي القُطر، تحملان اسمي علاقة واحدة، اسمًا لكل طرف، كما قال الدرس 1 إن لكل علاقة اسمًا عند كل طرف. فزوج واحد من الخلايا المتقابلة الممتلئة يعطي خطًّا واحدًا، وvisit بجانب TRAVELER وvisited by بجانب COUNTRY. ومن رسم خطًّا لكل خلية ممتلئة رسم كل علاقة مرّتين."
      }
    },

    /* ---------------------------------------------------- 4 · what the matrix does not say */
    {
      id: "t3l6q12", type: "output", level: "medium", topics: ["t3-matrix-questions", "t3-matrix-limits"],
      q: {
        en: "The agency answered for LANDMARK–COUNTRY: must be located in one and only one COUNTRY, so landmarks.country_id is NOT NULL. The lesson's four countries and four landmarks are in (Petra and Wadi Rum in JO, the Pyramids in EG, the Colosseum in IT). Both inserts run, one at a time, then the query. What does it return?",
        ar: "أجابت الوكالة عن LANDMARK–COUNTRY: ‏must be located in one and only one COUNTRY، فصار landmarks.country_id ‏NOT NULL. والدول الأربع والمعالم الأربعة في الدرس موجودة (Petra وWadi Rum في JO، والأهرامات في EG، والكولوسيوم في IT). تُنفَّذ عمليّتا الإدراج واحدة واحدة، ثم الاستعلام. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "INSERT INTO landmarks VALUES (5, 'Dead Sea', 'JO');\n\nINSERT INTO landmarks (landmark_id, name)\nVALUES (6, 'Mount Fuji');\n\nSELECT COUNT(*) AS landmarks,\n       COUNT(DISTINCT country_id) AS countries\nFROM landmarks;",
      blanks: [
        { accept: ["5"], label: { en: "landmarks", ar: "landmarks" } },
        { accept: ["3"], label: { en: "countries", ar: "countries" } }
      ],
      hint: {
        en: "Which insert leaves country_id empty, and what did must be make of that column?",
        ar: "أيّ إدراج يترك country_id فارغًا، وماذا صنعت must be بذلك العمود؟"
      },
      explain: {
        en: "5 and 3, run in alasql. The Dead Sea is saved in Jordan. Mount Fuji is refused, Wrong NULL value in NOT NULL column country_id, because the agency said must. So Japan still has no landmark, which may be the location of allows. Counting 6 and 4 keeps the refused row. None of this was in the matrix: the cell only said located in.",
        ar: "‏5 و3، بالتشغيل في alasql. يُحفظ البحر الميت في الأردن. ويُرفض Mount Fuji بالرسالة Wrong NULL value in NOT NULL column country_id، لأن الوكالة قالت must. فتبقى اليابان بلا مَعلَم، وهذا ما تسمح به may be the location of. ومن عدّ 6 و4 أبقى الصفّ المرفوض. ولا شيء من هذا كان في المصفوفة: الخلية قالت located in فقط."
      },
      solution: { out: "landmarks | countries\n5 | 3" }
    },
    {
      id: "t3l6q13", type: "contrast", level: "medium", topics: ["t3-matrix-limits", "t3-matrix-questions"],
      q: {
        en: "You have the slides' filled travel matrix. Sort each fact: can you read it from the matrix, or must you ask the business?",
        ar: "بين يديك مصفوفة السفر الممتلئة من الشرائح. صنّف كل معلومة: هل تقرؤها من المصفوفة، أم يجب أن تسأل العمل عنها؟"
      },
      concepts: [
        { en: "Read it from the matrix", ar: "تُقرأ من المصفوفة" },
        { en: "Ask the business", ar: "اسأل العمل" }
      ],
      rows: [
        { s: { en: "LANDMARK is related to COUNTRY", ar: "LANDMARK مرتبط بـ COUNTRY" }, a: 0 },
        { s: { en: "The name beside LANDMARK is located in", ar: "الاسم بجانب LANDMARK هو located in" }, a: 0 },
        { s: { en: "Every landmark must be in a country", ar: "كل مَعلَم يجب أن يكون في دولة" }, a: 1 },
        { s: { en: "A landmark is in one and only one country", ar: "المَعلَم في دولة واحدة فقط" }, a: 1 },
        { s: { en: "A traveler who has visited nowhere yet may be saved", ar: "المسافر الذي لم يزر مكانًا بعد يجوز حفظه" }, a: 1 },
        { s: { en: "No traveler is related to another traveler", ar: "لا مسافر مرتبط بمسافر آخر" }, a: 0 }
      ],
      hint: {
        en: "A cell holds a name or nothing. Is there a square for must, or for one or more?",
        ar: "الخلية تحمل اسمًا أو لا شيء. هل فيها مربّع لـ must، أو لـ one or more؟"
      },
      explain: {
        en: "The matrix answers only \"is there a relationship, and what is it called?\": related, its name, and, from the empty diagonal, no traveler–traveler relationship. Must and may are optionality; one and only one is cardinality; the slides say matrix diagrams show neither. The trap is to think a filled cell means must: it only means the relationship exists.",
        ar: "المصفوفة تجيب فقط عن «هل توجد علاقة، وما اسمها؟»: الارتباط، واسمه، ومن القُطر الفارغ أنه لا علاقة بين مسافر ومسافر. أما must وmay فاختيارية؛ وone and only one عدديّة؛ والشرائح تقول إن مخطّطات المصفوفة لا تُظهر أيًّا منهما. والفخّ أن تظنّ الخلية الممتلئة تعني must: إنها تعني فقط أن العلاقة موجودة."
      }
    },
    {
      id: "t3l6q14", type: "mcq", level: "medium", topics: ["t3-matrix-limits", "t3-matrix-to-erd"],
      q: {
        en: "The only thing you know about TRAVELER and COUNTRY is the filled pair: TRAVELER · visit · COUNTRY and COUNTRY · visited by · TRAVELER. What can you draw from that alone?",
        ar: "كل ما تعرفه عن TRAVELER وCOUNTRY هو الزوج الممتلئ: ‏TRAVELER · visit · COUNTRY وCOUNTRY · visited by · TRAVELER. ماذا تستطيع أن ترسم منه وحده؟"
      },
      options: [
        { en: "A solid line, because a filled cell means the relationship must exist", ar: "خطًّا متّصلًا، لأن الخلية الممتلئة تعني أن العلاقة يجب أن توجد" },
        { en: "One line, visit beside TRAVELER and visited by beside COUNTRY; the halves and the ends wait for the business", ar: "خطًّا واحدًا، وvisit بجانب TRAVELER وvisited by بجانب COUNTRY؛ والأنصاف والأطراف تنتظر العمل" },
        { en: "A line with a crow's foot at each end, because both cells are filled", ar: "خطًّا بقدم غراب عند كل طرف، لأن الخليتين ممتلئتان" },
        { en: "Nothing yet: a line cannot be drawn until optionality and cardinality are known", ar: "لا شيء بعد: لا يُرسم الخط حتى تُعرف الاختيارية والعدديّة" }
      ],
      answer: 1,
      hint: {
        en: "The matrix gives two things: that a relationship exists, and its names. Which parts of the line are those?",
        ar: "المصفوفة تعطي أمرين: أن العلاقة موجودة، واسميها. أيّ أجزاء الخط هذه؟"
      },
      explain: {
        en: "Existence gives the line; the names give the labels, each beside its row entity. Solid and dashed are optionality, the toe and the crow's foot cardinality, and \"matrix diagrams do not show optionality and cardinality\". Reading two filled cells as two crow's feet confuses \"named at both ends\" with \"many at both ends\". For this pair the slides' answers were may and one or more, both ways.",
        ar: "وجود العلاقة يعطي الخط؛ والاسمان يعطيان العنوانين، كلٌّ بجانب كيان صفّه. أما المتّصل والمتقطّع فاختيارية، والإصبع وقدم الغراب عدديّة، و«مخطّطات المصفوفة لا تُظهر الاختيارية والعدديّة». ومن قرأ الخليتين الممتلئتين قدمَي غراب خلط بين «مسمّاة عند الطرفين» و«متعدّدة عند الطرفين». وأجوبة الشرائح لهذا الزوج كانت may وone or more، في الاتجاهين."
      }
    },
    {
      id: "t3l6q15", type: "complete", level: "medium", topics: ["t3-matrix-questions", "t3-travel-agency"],
      q: {
        en: "The agency answers for LANDMARK–COUNTRY: a landmark is always in exactly one country; a country may have no landmark on record yet. The matrix gave the names located in and the location of. Complete the second sentence.",
        ar: "تجيب الوكالة عن LANDMARK–COUNTRY: المَعلَم دائمًا في دولة واحدة بالضبط؛ والدولة قد لا يكون لها مَعلَم مسجّل بعد. وأعطت المصفوفة الاسمين located in وthe location of. أكمل الجملة الثانية."
      },
      lang: "erdish",
      code: "Each LANDMARK must be located in one and only one COUNTRY.\nEach COUNTRY ____ LANDMARKs.",
      options: [
        { code: "must be the location of one or more" },
        { code: "may be located in one or more" },
        { code: "may be the location of one and only one" },
        { code: "may be the location of one or more" }
      ],
      answer: 3,
      solution: {
        code: "Each LANDMARK must be located in one and only one COUNTRY.\nEach COUNTRY may be the location of one or more LANDMARKs.",
        en: "COUNTRY's own name from its row, may from \"no landmark yet\", one or more because a country can hold several.",
        ar: "اسم COUNTRY من صفّه، وmay من «لا مَعلَم بعد»، وone or more لأن الدولة قد تضمّ عدّة معالم."
      },
      hint: {
        en: "Take the name from the COUNTRY row of the matrix, and the rest from the agency's answer about countries.",
        ar: "خذ الاسم من صفّ COUNTRY في المصفوفة، والباقي من جواب الوكالة عن الدول."
      },
      explain: {
        en: "may be the location of one or more, as the lesson wrote it. \"Must\" contradicts \"may have no landmark yet\", the answer Japan's 0 shows in the lesson's query. \"Located in\" is LANDMARK's name, from the other cell. \"One and only one\" would let Jordan keep Petra or Wadi Rum, never both.",
        ar: "‏may be the location of one or more، كما كتبها الدرس. و«must» تناقض «قد لا يكون لها مَعلَم بعد»، وهو الجواب الذي يُظهره صفر اليابان في استعلام الدرس. و«located in» اسم LANDMARK، من الخلية الأخرى. و«one and only one» تجعل الأردن يحتفظ بـ Petra أو Wadi Rum، لا بكليهما."
      }
    },

    /* ---------------------------------------------------- 5 · from matrix to ERD */
    {
      id: "t3l6q16", type: "compare", level: "medium", topics: ["t3-matrix-to-erd", "t3-matrix-purpose"],
      q: {
        en: "Versions 1 and 2 of the agency's ERD from the lesson's second evolve block, written as text. Compare them.",
        ar: "الإصداران 1 و2 من مخطّط ERD للوكالة في كتلة التطوّر الثانية في الدرس، مكتوبين نصًّا. قارن بينهما."
      },
      codeA: "TRAVELER   # Traveler ID  * Name\nCOUNTRY    # Country Code  * Name\nLANDMARK   # Landmark ID  * Name\nTRAVELER (visit) ---- (visited by) COUNTRY",
      codeB: "TRAVELER   # Traveler ID  * Name\nCOUNTRY    # Country Code  * Name\nLANDMARK   # Landmark ID  * Name\nTRAVELER (visit) ---- (visited by) COUNTRY\nTRAVELER (have seen) ---- (seen by) LANDMARK\nLANDMARK (located in) ---- (the location of) COUNTRY",
      options: [
        { en: "A is better: it is simpler, and LANDMARK's attributes are already recorded", ar: "A أفضل: أبسط، وصفات LANDMARK مسجّلة سلفًا" },
        { en: "B is better: it has a line for every filled pair, so it can say where a landmark is and who has seen it", ar: "B أفضل: فيها خط لكل زوج ممتلئ، فتستطيع أن تقول أين المَعلَم ومن رآه" },
        { en: "They are equivalent: LANDMARK–COUNTRY can be reached through TRAVELER", ar: "متكافئان: يمكن الوصول إلى LANDMARK–COUNTRY عبر TRAVELER" },
        { en: "B is better because it now shows optionality and cardinality, which A lacks", ar: "B أفضل لأنها تُظهر الآن الاختيارية والعدديّة، وهي ما ينقص A" }
      ],
      answer: 1,
      hint: {
        en: "The matrix had three filled pairs. Count the lines in each version.",
        ar: "كان في المصفوفة ثلاثة أزواج ممتلئة. عُدّ الخطوط في كل إصدار."
      },
      explain: {
        en: "A was drawn straight from the scenario, before any matrix: LANDMARK has a box and nothing else, so nobody can say which country Petra is in, half of what the agency asked to keep. B maps the matrix: one line per filled pair. Going through TRAVELER fails, because a traveler visits many countries. And neither listing shows optionality or cardinality yet: those come from the business, not the mapping.",
        ar: "رُسم A من السيناريو مباشرة، قبل أيّ مصفوفة: لـ LANDMARK صندوق ولا شيء غيره، فلا يستطيع أحد أن يقول في أيّ دولة Petra، وهذا نصف ما طلبت الوكالة حفظه. أما B فتنقل المصفوفة: خط لكل زوج ممتلئ. والمرور عبر TRAVELER لا ينفع، لأن المسافر يزور دولًا كثيرة. ولا تُظهر أيّ من القائمتين الاختيارية أو العدديّة بعد: فهي تأتي من العمل، لا من النقل."
      }
    },
    {
      id: "t3l6q17", type: "mcq", level: "hard", topics: ["t3-matrix-to-erd", "t3-matrix-diagonal", "t3-entity-pairs"],
      q: {
        en: "A matrix of six entities has ten filled off-diagonal cells and two filled diagonal cells. How many relationship lines does the ERD get?",
        ar: "مصفوفة لستّة كيانات فيها عشر خلايا ممتلئة خارج القُطر، وخليتان ممتلئتان على القُطر. كم خط علاقة يكون في مخطّط ERD؟"
      },
      options: [
        { en: "12", ar: "12" },
        { en: "5", ar: "5" },
        { en: "7", ar: "7" },
        { en: "15", ar: "15" }
      ],
      answer: 2,
      hint: {
        en: "Off the diagonal, cells come in mirror pairs. On it, each cell stands alone.",
        ar: "خارج القُطر تأتي الخلايا أزواجًا متقابلة. وعليه تقف كل خلية وحدها."
      },
      explain: {
        en: "Ten off-diagonal cells are five mirror pairs, so five lines; each filled diagonal cell is one recursive line, so two more: seven. Twelve counts every filled cell and draws each relationship twice. Five forgets the diagonal, the recursive relationships. Fifteen is the number of pairs to ask about, not the number found.",
        ar: "عشر خلايا خارج القُطر هي خمسة أزواج متقابلة، فخمسة خطوط؛ وكل خلية ممتلئة على القُطر خط ذاتي واحد، فخطّان آخران: سبعة. ومن قال اثني عشر عدّ كل خلية ممتلئة فرسم كل علاقة مرّتين. ومن قال خمسة نسي القُطر، أي العلاقات الذاتية. وخمسة عشر عدد الأزواج التي يُسأل عنها، لا عدد ما وُجد."
      }
    },
    {
      id: "t3l6q18", type: "trace", level: "medium", topics: ["t3-order-matrix", "t3-relationship-matrix"],
      q: {
        en: "The DFo ERD built: items.warehouse_id NUMBER NOT NULL, from \"Each ITEM must be stored in one and only one WAREHOUSE\". The lesson's two warehouses and four items are in, all four items in Gaza. Both inserts run, one at a time, then the query. What does it return?",
        ar: "بُني مخطّط DFo: ‏items.warehouse_id NUMBER NOT NULL، من «Each ITEM must be stored in one and only one WAREHOUSE». والمستودعان والأصناف الأربعة في الدرس موجودة، والأصناف الأربعة كلها في Gaza. تُنفَّذ عمليّتا الإدراج واحدة واحدة، ثم الاستعلام. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "INSERT INTO items (item_id, name) VALUES (5, 'Fruit cup');\n\nINSERT INTO items VALUES (6, 'French fries', 2);\n\nSELECT w.city AS warehouse, COUNT(i.item_id) AS items\nFROM warehouses w LEFT JOIN items i ON i.warehouse_id = w.warehouse_id\nGROUP BY w.city\nORDER BY items DESC;",
      options: [
        { en: "Gaza 5, Khan Younis 1", ar: "Gaza 5، Khan Younis 1" },
        { en: "Gaza 4, Khan Younis 0", ar: "Gaza 4، Khan Younis 0" },
        { en: "Gaza 4, Khan Younis 1", ar: "Gaza 4، Khan Younis 1" },
        { en: "Gaza 4, Khan Younis 1, and a third row with no city for the fruit cup", ar: "Gaza 4، Khan Younis 1، وصفّ ثالث بلا مدينة للـ fruit cup" }
      ],
      answer: 2,
      hint: {
        en: "Which half of the ITEM–WAREHOUSE line became NOT NULL, and does the first insert satisfy it?",
        ar: "أيّ نصف من خط ITEM–WAREHOUSE صار NOT NULL، وهل يحقّقه الإدراج الأول؟"
      },
      explain: {
        en: "Run in alasql: Gaza 4, Khan Younis 1. The fruit cup is refused, Wrong NULL value in NOT NULL column warehouse_id: the solid half beside ITEM. The French fries are saved in Khan Younis, so its 0 becomes 1. A third row with no city would need an item with no warehouse, exactly what must forbids. The matrix found the pair; the business supplied the must.",
        ar: "عند التشغيل في alasql: ‏Gaza 4، وKhan Younis 1. يُرفض الـ fruit cup بالرسالة Wrong NULL value in NOT NULL column warehouse_id: النصف المتّصل بجانب ITEM. وتُحفظ الـ French fries في Khan Younis، فيصير صفرها 1. أما الصفّ الثالث بلا مدينة فيحتاج إلى صنف بلا مستودع، وهذا بعينه ما تمنعه must. المصفوفة وجدت الزوج؛ والعمل أعطى must."
      },
      solution: { out: "warehouse | items\nGaza | 4\nKhan Younis | 1" }
    },
    {
      id: "t3l6q19", type: "write", level: "hard", topics: ["t3-matrix-to-erd", "t3-travel-agency", "t3-matrix-questions"],
      q: {
        en: "The agency adds HOTEL: \"Each hotel is in one country. We record the hotels our travelers have stayed in.\" The matrix gives HOTEL · located in · COUNTRY and TRAVELER · stayed in · HOTEL. Write the hotels table the HOTEL–COUNTRY pair builds: hotel_id (a number) as the key, name (up to 30 characters, required), and the column for the country, matching countries.country_id (2 characters).",
        ar: "تضيف الوكالة HOTEL: «كل فندق في دولة واحدة. ونسجّل الفنادق التي أقام فيها مسافرونا». وتعطي المصفوفة HOTEL · located in · COUNTRY وTRAVELER · stayed in · HOTEL. اكتب الجدول hotels الذي يبنيه زوج HOTEL–COUNTRY: ‏hotel_id ‏(رقم) مفتاحًا، وname ‏(حتى 30 حرفًا، إلزامي)، وعمود الدولة، مطابقًا لـ countries.country_id ‏(حرفان)."
      },
      lang: "sql",
      lines: 6,
      starter: "CREATE TABLE hotels (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+hotels\\s*\\(", flags: "i", label: { en: "CREATE TABLE hotels", ar: "CREATE TABLE hotels" } },
        { re: "hotel_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "hotel_id is the PRIMARY KEY", ar: "hotel_id هو PRIMARY KEY" } },
        { re: "name\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "name NOT NULL", ar: "name NOT NULL" } },
        { re: "country_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "each hotel is in one country → country_id NOT NULL", ar: "كل فندق في دولة واحدة ← country_id NOT NULL" } }
      ],
      forbid: [
        { re: "traveler_id", flags: "i", label: { en: "No traveler column: TRAVELER–HOTEL is plural at both ends and cannot be one column (Chapter T5)", ar: "لا عمود للمسافر: علاقة TRAVELER–HOTEL متعدّدة عند الطرفين ولا تكون عمودًا واحدًا (الفصل T5)" } }
      ],
      solution: {
        code: "CREATE TABLE hotels (\n  hotel_id   NUMBER PRIMARY KEY,\n  name       VARCHAR(30) NOT NULL,\n  country_id VARCHAR(2) NOT NULL\n);",
        en: "Checked in alasql: two Jordanian hotels are saved, and INSERT INTO hotels (hotel_id, name) VALUES (3, 'Nile View') is refused with Wrong NULL value in NOT NULL column country_id.",
        ar: "تحقّقتُ منه في alasql: يُحفظ فندقان أردنيّان، ويُرفض INSERT INTO hotels (hotel_id, name) VALUES (3, 'Nile View') بالرسالة Wrong NULL value in NOT NULL column country_id."
      },
      hint: {
        en: "\"In one country\" decides how many country columns and whether they may be empty. Which pair is plural at both ends?",
        ar: "«في دولة واحدة» تحدّد عدد أعمدة الدولة وهل يجوز أن تكون فارغة. وأيّ زوج متعدّد عند الطرفين؟"
      },
      explain: {
        en: "\"Each hotel is in one country\" is the business's answer the matrix could not give: one and only one, must. That makes one country_id column, NOT NULL. The tempting extra is a traveler_id: the cell TRAVELER · stayed in · HOTEL is filled, but a traveler stays in many hotels and a hotel hosts many travelers, so no single column can hold it; Chapter T5 gives it a table of its own.",
        ar: "«كل فندق في دولة واحدة» جواب العمل الذي لم تستطع المصفوفة إعطاءه: ‏one and only one، وmust. فيكون عمود country_id واحدًا، NOT NULL. والإضافة المغرية عمود traveler_id: الخلية TRAVELER · stayed in · HOTEL ممتلئة، لكن المسافر يقيم في فنادق كثيرة والفندق يستضيف مسافرين كثيرين، فلا يتّسع لها عمود واحد؛ والفصل T5 يعطيها جدولًا خاصًّا بها."
      }
    },
    {
      id: "t3l6q20", type: "multi", level: "hard", topics: ["t3-relationship-matrix", "t3-order-matrix", "t3-matrix-to-erd"],
      q: {
        en: "The DFo relationship matrix for CUSTOMER, ITEM, ORDER and WAREHOUSE has six filled cells: place, placed by, issued for, contained on, store, stored in. Which statements about the mapped ERD are correct? Choose all that apply.",
        ar: "مصفوفة العلاقات (relationship matrix) في DFo لـ CUSTOMER وITEM وORDER وWAREHOUSE فيها ستّ خلايا ممتلئة: place وplaced by وissued for وcontained on وstore وstored in. أيّ العبارات عن مخطّط ERD بعد النقل صحيحة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "It has three relationship lines", ar: "فيه ثلاثة خطوط علاقة" },
        { en: "store is written beside WAREHOUSE", ar: "يُكتب store بجانب WAREHOUSE" },
        { en: "It has six relationship lines, one per filled cell", ar: "فيه ستّة خطوط علاقة، خط لكل خلية ممتلئة" },
        { en: "There is no line between CUSTOMER and ITEM", ar: "لا خط بين CUSTOMER وITEM" },
        { en: "place is written beside ORDER, the entity that is placed", ar: "يُكتب place بجانب ORDER، الكيان الذي يُوضَع" },
        { en: "CUSTOMER and ITEM need a line, because customers buy items", ar: "يحتاج CUSTOMER وITEM إلى خط، لأن الزبائن يشترون الأصناف" }
      ],
      answer: [0, 1, 3],
      hint: {
        en: "Pair the six names into mirror cells, find each name's row, and look for the pairs that were left blank.",
        ar: "اجمع الأسماء الستة أزواجًا متقابلة، واعثر على صفّ كل اسم، وابحث عن الأزواج التي تُركت فارغة."
      },
      explain: {
        en: "Six filled cells are three mirror pairs, so three lines. store sits in the WAREHOUSE row, so it goes beside WAREHOUSE; place sits in the CUSTOMER row, so it goes beside CUSTOMER, not ORDER. CUSTOMER–ITEM was left blank, a decision: a customer reaches an item only through an order. Adding that line because \"customers buy items\" is the extra line the matrix ruled out.",
        ar: "ستّ خلايا ممتلئة هي ثلاثة أزواج متقابلة، فثلاثة خطوط. وstore في صفّ WAREHOUSE، فتُكتب بجانب WAREHOUSE؛ وplace في صفّ CUSTOMER، فتُكتب بجانب CUSTOMER لا ORDER. وتُرك CUSTOMER–ITEM فارغًا، وهذا قرار: الزبون يصل إلى الصنف عبر الطلب فقط. ورسم ذلك الخط لأن «الزبائن يشترون الأصناف» هو الخط الزائد الذي استبعدته المصفوفة."
      }
    },
    {
      id: "t3l6q21", type: "fill", level: "medium", topics: ["t3-order-matrix", "t3-matrix-questions"],
      q: {
        en: "The matrix gave CUSTOMER · place · ORDER and ORDER · placed by · CUSTOMER. The business answers: every customer on file has placed at least one order, and every order belongs to exactly one customer. Fill in both sentences.",
        ar: "أعطت المصفوفة CUSTOMER · place · ORDER وORDER · placed by · CUSTOMER. ويجيب العمل: كل زبون مسجّل وضع طلبًا واحدًا على الأقل، وكل طلب لزبون واحد بالضبط. املأ الجملتين."
      },
      lang: "erdish",
      code: "Each CUSTOMER ____1____ place ____2____ ORDERs.\nEach ORDER ____3____ placed by ____4____ CUSTOMER.",
      blanks: [
        { accept: ["must", "MUST"], label: { en: "1", ar: "1" } },
        { accept: ["one or more", "ONE OR MORE", "One or more"], label: { en: "2", ar: "2" }, wide: true },
        { accept: ["must be", "MUST BE", "Must be"], label: { en: "3", ar: "3" } },
        { accept: ["one and only one", "ONE AND ONLY ONE", "One and only one"], label: { en: "4", ar: "4" }, wide: true }
      ],
      hint: {
        en: "\"At least one\" answers two questions at once: whether zero is allowed, and whether more than one is.",
        ar: "«واحد على الأقل» تجيب عن سؤالين معًا: هل الصفر مسموح، وهل الأكثر من واحد مسموح."
      },
      explain: {
        en: "must · one or more · must be · one and only one, as the DFo ERD reads. \"At least one\" is both mandatory (must) and plural (one or more). \"Must place\" needs no \"be\"; \"must be placed by\" does: grammar picks the form. Answering may for the customer reads \"one or more\" as optional, which mixes cardinality up with optionality.",
        ar: "‏must · one or more · must be · one and only one، كما يُقرأ مخطّط DFo. و«واحد على الأقل» إلزامية (must) ومتعدّدة (one or more) معًا. و«must place» لا تحتاج إلى «be»؛ و«must be placed by» تحتاج إليها: القواعد تختار الصيغة. ومن أجاب may للزبون قرأ «one or more» اختيارية، فخلط العدديّة بالاختيارية."
      }
    },
    {
      id: "t3l6q22", type: "error", level: "hard", topics: ["t3-matrix-to-erd", "t3-relationship-matrix", "t3-matrix-row-first"],
      q: {
        en: "A student maps the DFo matrix to an ERD, written as text: each line shows the name written beside each entity. Which line puts the names on the wrong ends?",
        ar: "ينقل طالب مصفوفة DFo إلى مخطّط ERD مكتوب نصًّا: كل سطر يبيّن الاسم المكتوب بجانب كل كيان. أيّ سطر يضع الاسمين عند الطرفين الخطأ؟"
      },
      code: "CUSTOMER   # Customer ID  * Name\nORDER      # Order No  * Order Date\nITEM       # Item ID  * Name\nWAREHOUSE  # Warehouse ID  * City\nCUSTOMER (place) ---- (placed by) ORDER\nORDER (issued for) ---- (contained on) ITEM\nITEM (store) ---- (stored in) WAREHOUSE",
      answer: 7,
      solution: {
        code: "CUSTOMER   # Customer ID  * Name\nORDER      # Order No  * Order Date\nITEM       # Item ID  * Name\nWAREHOUSE  # Warehouse ID  * City\nCUSTOMER (place) ---- (placed by) ORDER\nORDER (issued for) ---- (contained on) ITEM\nITEM (stored in) ---- (store) WAREHOUSE",
        en: "store is in the WAREHOUSE row, so it goes beside WAREHOUSE; stored in goes beside ITEM.",
        ar: "‏store في صفّ WAREHOUSE، فتُكتب بجانب WAREHOUSE؛ وstored in بجانب ITEM."
      },
      hint: {
        en: "Each name goes beside the entity whose row it was in. Read each end as entity · name · other entity.",
        ar: "كل اسم يُكتب بجانب الكيان الذي كان في صفّه. اقرأ كل طرف: الكيان · الاسم · الكيان الآخر."
      },
      explain: {
        en: "Line 7 reads \"ITEM store WAREHOUSE\" and \"WAREHOUSE stored in ITEM\", both backwards. In the matrix, store was in the WAREHOUSE row, so the row entity, entity A of its sentence, carries it. Line 6 may look odd because contained on sounds like ITEM's container, but it was in the ITEM row: \"ITEM contained on ORDER\". Writing a name beside the column entity is one of the lesson's named mistakes.",
        ar: "السطر 7 يُقرأ «ITEM store WAREHOUSE» و«WAREHOUSE stored in ITEM»، وكلاهما مقلوب. ففي المصفوفة كانت store في صفّ WAREHOUSE، فيحملها كيان الصف، وهو الكيان A في جملتها. وقد يبدو السطر 6 غريبًا لأن contained on توحي بوعاء ITEM، لكنها كانت في صفّ ITEM: ‏«ITEM contained on ORDER». وكتابة الاسم بجانب كيان العمود من الأخطاء التي سمّاها الدرس."
      }
    },
    {
      id: "t3l6q23", type: "mcq", level: "hard", topics: ["t3-matrix-cell", "t3-matrix-build"],
      q: {
        en: "In the H.R. matrix for EMPLOYEE, DEPARTMENT, JOB and LOCATION, the DEPARTMENT row holds located in under LOCATION, and the EMPLOYEE row holds work in under DEPARTMENT. Why is the EMPLOYEE × LOCATION cell left blank?",
        ar: "في مصفوفة الموارد البشرية لـ EMPLOYEE وDEPARTMENT وJOB وLOCATION، يحمل صفّ DEPARTMENT ‏located in تحت LOCATION، ويحمل صفّ EMPLOYEE ‏work in تحت DEPARTMENT. لماذا تُترك الخلية EMPLOYEE × LOCATION فارغة؟"
      },
      options: [
        { en: "An employee's location is reached through the department; a direct line would be an extra, redundant line", ar: "موقع الموظّف يُوصَل إليه عبر القسم؛ والخط المباشر يكون خطًّا زائدًا مكرّرًا" },
        { en: "Employees have no location at all in this business", ar: "الموظّفون لا موقع لهم أصلًا في هذا العمل" },
        { en: "Cells in the lower half of the grid are always left blank to avoid duplicates", ar: "خلايا النصف الأسفل من الشبكة تُترك دائمًا فارغة تجنّبًا للتكرار" },
        { en: "The relationship would be optional, and a matrix only records mandatory relationships", ar: "العلاقة ستكون اختيارية، والمصفوفة تسجّل العلاقات الإلزامية فقط" }
      ],
      answer: 0,
      hint: {
        en: "Follow the filled cells from EMPLOYEE. Can you already reach LOCATION?",
        ar: "تتبّع الخلايا الممتلئة من EMPLOYEE. هل تصل إلى LOCATION سلفًا؟"
      },
      explain: {
        en: "EMPLOYEE → work in → DEPARTMENT → located in → LOCATION already answers \"where does this employee work?\". A direct EMPLOYEE–LOCATION line would be the extra line of Lesson 1. A blank is a decision, not a claim that employees are nowhere. Leaving half the grid empty would lose one name of every relationship, and a matrix shows no optionality at all, so it cannot filter by it.",
        ar: "‏EMPLOYEE ← work in ← DEPARTMENT ← located in ← LOCATION تجيب سلفًا عن «أين يعمل هذا الموظّف؟». والخط المباشر EMPLOYEE–LOCATION هو الخط الزائد في الدرس 1. والفراغ قرار، لا ادّعاء أن الموظّفين بلا مكان. وترك نصف الشبكة فارغًا يُضيع اسمًا من كل علاقة، والمصفوفة لا تُظهر الاختيارية أصلًا، فلا تستطيع أن تفرز بها."
      }
    },
    {
      id: "t3l6q24", type: "multi", level: "hard", topics: ["t3-matrix-cell", "t3-matrix-diagonal", "t3-travel-agency"],
      q: {
        en: "The agency adds HOTEL: \"Each hotel is in one country. We record the hotels our travelers have stayed in.\" You add a HOTEL row and column to the travel matrix. Which of the new cells stay blank? Choose all that apply.",
        ar: "تضيف الوكالة HOTEL: «كل فندق في دولة واحدة. ونسجّل الفنادق التي أقام فيها مسافرونا». تضيف صفًّا وعمودًا لـ HOTEL إلى مصفوفة السفر. أيّ الخلايا الجديدة تبقى فارغة؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "HOTEL row, LANDMARK column", ar: "صفّ HOTEL، عمود LANDMARK" },
        { en: "TRAVELER row, HOTEL column", ar: "صفّ TRAVELER، عمود HOTEL" },
        { en: "HOTEL row, HOTEL column", ar: "صفّ HOTEL، عمود HOTEL" },
        { en: "COUNTRY row, HOTEL column", ar: "صفّ COUNTRY، عمود HOTEL" },
        { en: "LANDMARK row, HOTEL column", ar: "صفّ LANDMARK، عمود HOTEL" },
        { en: "HOTEL row, COUNTRY column", ar: "صفّ HOTEL، عمود COUNTRY" }
      ],
      answer: [0, 2, 4],
      hint: {
        en: "The scenario names two relationships for HOTEL. Each fills two cells. What about the diagonal?",
        ar: "يسمّي السيناريو علاقتين لـ HOTEL. كلٌّ منهما تملأ خليتين. وماذا عن القُطر؟"
      },
      explain: {
        en: "The scenario gives HOTEL–COUNTRY (located in / the location of) and TRAVELER–HOTEL (stayed in / host of), four filled cells. Blank: both HOTEL–LANDMARK cells, since the agency said nothing linking hotels to landmarks, and the HOTEL diagonal, since no hotel is related to another. Forgetting that a pair has two cells leads to blanking only one of them; skipping the diagonal leaves it unasked.",
        ar: "يعطي السيناريو HOTEL–COUNTRY ‏(located in / the location of) وTRAVELER–HOTEL ‏(stayed in / host of)، أي أربع خلايا ممتلئة. والفارغ: خليتا HOTEL–LANDMARK كلتاهما، لأن الوكالة لم تقل شيئًا يربط الفنادق بالمعالم، وخلية HOTEL على القُطر، لأنه لا فندق مرتبط بفندق آخر. ومن نسي أن للزوج خليتين ترك واحدة فقط فارغة؛ ومن تخطّى القُطر تركه بلا سؤال."
      }
    }
  ]
};
