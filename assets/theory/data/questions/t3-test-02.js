/* Question bank: T3 lesson 2 test -- Optionality: must or may. */
window.DBTBanks = window.DBTBanks || {};
window.DBTBanks["t3-test-02"] = {
  title: { en: "Test 2 — Optionality: must or may", ar: "اختبار 2 — الإلزامية: «يجب» أم «قد»" },
  intro: {
    en: "24 questions on lesson 2: the two optionality questions, answering each end on its own half, solid and dashed, saying it with must (be) and may (be), deciding the restaurant from its scenario, the manager line that is may at both ends, and which foreign key column a solid half makes NOT NULL. Allow about 30 minutes. Every question has a hint, an answer and an explanation, hidden until you ask for them.",
    ar: "24 سؤالًا على الدرس الثاني: سؤالا الإلزامية، والإجابة عن كل طرف في نصفه، والمتّصل والمتقطّع، وقولها بـ must (be) وmay (be)، وحسم المطعم من سيناريوهه، وخط المدير الذي هو «قد» عند طرفيه، وأيّ عمود مفتاح أجنبي يجعله النصف المتّصل NOT NULL. خصّص نحو 30 دقيقة. لكل سؤال تلميح وإجابة وشرح، مخفيّة حتى تطلبها."
  },
  questions: [

    /* ---------------------------------------------------- 1 · must, or may? */
    {
      id: "t3l2q01", type: "tf", level: "easy", topics: ["t3-optionality-questions", "t3-optionality-per-end", "t3-optionality"],
      q: {
        en: "The H.R. business says every employee must have a job. It follows that every job must have an employee.",
        ar: "يقول عمل الموارد البشرية إن كل موظّف يجب أن تكون له وظيفة. ويترتّب على ذلك أن كل وظيفة يجب أن يكون لها موظّف."
      },
      truth: false,
      hint: {
        en: "How many optionality questions does one relationship have, and is each asked about the same entity?",
        ar: "كم سؤالًا عن الإلزامية للعلاقة الواحدة، وهل يُطرح كلٌّ منهما عن الكيان نفسه؟"
      },
      explain: {
        en: "False. The two questions are independent: \"must every employee have a job?\" is asked of an employee, \"must every job be assigned to an employee?\" of a job. The lecturer's answer differs: an employee generally has a job, but some jobs are vacant or obsolete, such as Stock Clerk. Answer each end separately.",
        ar: "خطأ. السؤالان مستقلّان: «هل يجب أن تكون لكل موظّف وظيفة؟» يُطرح عن الموظّف، و«هل يجب أن تُسنَد كل وظيفة إلى موظّف؟» يُطرح عن الوظيفة. وجواب المحاضر مختلف بينهما: للموظّف وظيفة في العادة، لكن بعض الوظائف شاغرة أو ملغاة، مثل أمين المخزن. أجب عن كل طرف وحده."
      }
    },
    {
      id: "t3l2q02", type: "mcq", level: "easy", topics: ["t3-optionality-questions", "t3-vacant-job"],
      q: {
        en: "H.R. wants to record the Stock Clerk job before anyone is hired for it. Which question decides whether the model allows that?",
        ar: "تريد الموارد البشرية تسجيل وظيفة أمين المخزن (Stock Clerk) قبل أن يُعيَّن فيها أحد. أيّ سؤال يقرّر هل يسمح النموذج بذلك؟"
      },
      options: [
        { en: "Must every employee have a job?", ar: "هل يجب أن تكون لكل موظّف وظيفة؟" },
        { en: "How many employees can one job have?", ar: "كم موظّفًا يمكن أن تكون للوظيفة الواحدة؟" },
        { en: "Must every job be assigned to an employee?", ar: "هل يجب أن تُسنَد كل وظيفة إلى موظّف؟" },
        { en: "Is JOB significant enough to be an entity?", ar: "هل JOB ذات أهمية كافية لتكون كيانًا؟" }
      ],
      answer: 2,
      hint: {
        en: "The vacant job is an instance of which entity? Ask the optionality question about that instance.",
        ar: "الوظيفة الشاغرة نسخة (instance) من أيّ كيان؟ اطرح سؤال الإلزامية عن تلك النسخة."
      },
      explain: {
        en: "A vacant job is a JOB instance with zero employees, so the question asked of a job settles it: if every job must be assigned, Stock Clerk is refused. The employee question is the other end and says nothing about jobs. \"How many\" is cardinality, Lesson 3's question, not optionality.",
        ar: "الوظيفة الشاغرة نسخة من JOB بلا أيّ موظّف، فالسؤال المطروح عن الوظيفة هو الذي يحسمها: إن وجب إسناد كل وظيفة رُفض أمين المخزن. أما سؤال الموظّف فهو الطرف الآخر ولا يقول شيئًا عن الوظائف. و«كم» سؤال التعدّدية (cardinality)، سؤال الدرس 3، لا الإلزامية."
      }
    },
    {
      id: "t3l2q03", type: "multi", level: "medium", topics: ["t3-optional-end", "t3-mandatory-end", "t3-optionality"],
      q: {
        en: "Each fact comes from the lesson's H.R. data. Which of them show that some end of a relationship is optional? Select all that apply.",
        ar: "كل حقيقة مأخوذة من بيانات الموارد البشرية في الدرس. أيّها يُظهر أن طرفًا ما من علاقةٍ اختياري؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "The Stock Clerk job exists and nobody holds it", ar: "وظيفة أمين المخزن موجودة ولا يشغلها أحد" },
        { en: "Dana, at the top, has no manager", ar: "Dana، في القمّة، ليس لها مدير" },
        { en: "Every employee row has a job_id", ar: "لكل صفّ موظّف قيمة في job_id" },
        { en: "Tyler manages nobody", ar: "Tyler لا يدير أحدًا" },
        { en: "Accounting has three employees, not one", ar: "في المحاسبة ثلاثة موظّفين، لا واحد" }
      ],
      answer: [0, 1, 3],
      hint: {
        en: "Optional means an instance may have zero matching records. Look for an instance with none.",
        ar: "الاختياري يعني أن النسخة قد لا يكون لها أيّ سجلّ مطابق. ابحث عن نسخة ليس لها شيء."
      },
      explain: {
        en: "A vacant job, a top manager with no manager, and an employee who manages nobody are each an instance with zero matching records: optional ends (held by, managed by, manager of). A job_id in every row is the mandatory EMPLOYEE end. Three employees instead of one is about how many — cardinality — and proves nothing about must or may.",
        ar: "الوظيفة الشاغرة، والمديرة التي في القمّة بلا مدير، والموظّف الذي لا يدير أحدًا: كلٌّ منها نسخة بلا أيّ سجلّ مطابق، أي أطراف اختيارية (held by وmanaged by وmanager of). أما وجود job_id في كل صفّ فهو طرف EMPLOYEE الإلزامي. وثلاثة موظّفين بدل واحد يتعلّق بـ«كم» — أي التعدّدية — ولا يُثبت شيئًا عن «يجب» أو «قد»."
      }
    },

    /* ---------------------------------------------------- 2 · one end at a time */
    {
      id: "t3l2q04", type: "compare", level: "medium", topics: ["t3-optionality-per-end", "t3-which-half", "t3-vacant-job", "t3-dashed-line"],
      q: {
        en: "Two drafts of EMPLOYEE–JOB for the H.R. business, where an employee must hold a job and some jobs are vacant. Each half is written beside the entity it touches. Compare them.",
        ar: "مسوّدتان لـ EMPLOYEE–JOB لعمل الموارد البشرية، حيث يجب أن يشغل الموظّف وظيفة وبعض الوظائف شاغرة. كل نصف مكتوب بجانب الكيان الذي يلامسه. قارن بينهما."
      },
      lang: "text",
      codeA: "EMPLOYEE  [solid] hold  |  held by [solid]   JOB",
      codeB: "EMPLOYEE  [solid] hold  |  held by [dashed]  JOB",
      options: [
        { en: "B is right: the JOB half is answered on its own, so Stock Clerk can be recorded while every employee still needs a job", ar: "B صحيحة: نصف JOB يُجاب عنه وحده، فيمكن تسجيل أمين المخزن مع بقاء كل موظّف ملزمًا بوظيفة" },
        { en: "A is safer: a line that is mandatory everywhere keeps the most bad data out", ar: "A أكثر أمانًا: الخط الإلزامي في كل مكان يمنع أكبر قدر من البيانات السيئة" },
        { en: "B is right, but it also lets an employee be saved without a job", ar: "B صحيحة، لكنها تسمح أيضًا بحفظ موظّف بلا وظيفة" },
        { en: "B's dashed half means a job can be held by many employees", ar: "النصف المتقطّع في B يعني أن الوظيفة قد يشغلها موظّفون كثيرون" }
      ],
      answer: 0,
      hint: {
        en: "Each half belongs to the entity it touches. Which half did the business answer with may?",
        ar: "كل نصف يخصّ الكيان الذي يلامسه. أيّ نصف أجاب عنه العمل بـ«قد»؟"
      },
      explain: {
        en: "A is the lesson's version 1: one answer drawn on the whole line invents the rule \"every job must be held\", and Stock Clerk is refused. B changes only the JOB half; the EMPLOYEE half stays solid, so Omar still cannot be saved without a job. \"Many\" is cardinality, drawn at the line's end — a dashed half means may, not many.",
        ar: "A هي الإصدار 1 في الدرس: جواب واحد مرسوم على الخط كلّه يخترع قاعدة «كل وظيفة يجب أن تُشغَل»، فيُرفض أمين المخزن. أما B فتغيّر نصف JOB وحده؛ ويبقى نصف EMPLOYEE متّصلًا، فلا يزال Omar لا يُحفَظ بلا وظيفة. و«كثير» تعدّدية تُرسم عند نهاية الخط — النصف المتقطّع يعني «قد»، لا «كثير»."
      }
    },
    {
      id: "t3l2q05", type: "tf", level: "easy", topics: ["t3-optionality-per-end", "t3-solid-line"],
      q: {
        en: "Version 2 of EMPLOYEE–JOB fixes the vacant-job problem by relaxing the employee's rule: Omar Haddad can now be saved with no job.",
        ar: "يحلّ الإصدار 2 من EMPLOYEE–JOB مشكلة الوظيفة الشاغرة بتخفيف قاعدة الموظّف: صار يمكن حفظ Omar Haddad بلا وظيفة."
      },
      truth: false,
      hint: {
        en: "Which half did version 2 change, and which one did it leave alone?",
        ar: "أيّ نصف غيّره الإصدار 2، وأيّهما تركه كما هو؟"
      },
      explain: {
        en: "False. Version 2 changes only the half next to JOB, from solid to dashed. The half next to EMPLOYEE stays solid, so employees.job_id is still NOT NULL and Omar is still refused without a job. The two ends are independent: fixing one does not loosen the other.",
        ar: "خطأ. يغيّر الإصدار 2 النصف المجاور لـ JOB وحده، من متّصل إلى متقطّع. ويبقى النصف المجاور لـ EMPLOYEE متّصلًا، فيظلّ employees.job_id بقيد NOT NULL ويظلّ Omar مرفوضًا بلا وظيفة. الطرفان مستقلّان: إصلاح أحدهما لا يُرخي الآخر."
      }
    },
    {
      id: "t3l2q06", type: "output", level: "easy", topics: ["t3-vacant-job", "t3-dashed-line"],
      q: {
        en: "The lesson's jobs table has six jobs; its employees table has Dana (AD_PRES), Tyler (SA_REP), Lawrence (AC_MGR), Carlos (AC_ACCOUNT) and Neil (IT_PROG). What does the query return?",
        ar: "في جدول jobs في الدرس ست وظائف؛ وفي جدول employees كلٌّ من Dana (AD_PRES) وTyler (SA_REP) وLawrence (AC_MGR) وCarlos (AC_ACCOUNT) وNeil (IT_PROG). ماذا يُرجع الاستعلام؟"
      },
      lang: "sql",
      code: "SELECT job_id\nFROM jobs\nWHERE job_id NOT IN (SELECT job_id FROM employees)\nORDER BY job_id;",
      blanks: [{ accept: ["ST_CLERK", "st_clerk"], label: { en: "job_id", ar: "job_id" } }],
      hint: {
        en: "Which of the six jobs does no employee row point to?",
        ar: "أيّ الوظائف الست لا يشير إليها أيّ صفّ موظّف؟"
      },
      explain: {
        en: "ST_CLERK — the vacant Stock Clerk job. The dashed JOB half is what lets this row exist: jobs has no rule about being used. Under version 1, with a solid JOB half, this same row would be a broken rule instead of a fact the business wanted to keep.",
        ar: "ST_CLERK — وظيفة أمين المخزن الشاغرة. النصف المتقطّع عند JOB هو ما يسمح بوجود هذا الصفّ: فليس في jobs أيّ قاعدة تُلزم باستعماله. وفي الإصدار 1، بنصف JOB متّصل، كان هذا الصفّ نفسه سيكون قاعدةً مكسورة لا حقيقةً أراد العمل الاحتفاظ بها."
      },
      solution: { out: "ST_CLERK" }
    },
    {
      id: "t3l2q07", type: "match", level: "easy", topics: ["t3-which-half", "t3-word-from-half", "t3-solid-line", "t3-dashed-line"],
      q: {
        en: "Each sentence starts at one entity. Match it to the half of the line it describes.",
        ar: "كل جملة تبدأ من كيان واحد. صِلها بنصف الخط الذي تصفه."
      },
      leftHead: { en: "Sentence", ar: "الجملة" },
      rightHead: { en: "Half", ar: "النصف" },
      pairs: [
        { l: { en: "Each JOB may be held by one or more EMPLOYEEs.", ar: "Each JOB may be held by one or more EMPLOYEEs." },
          r: { en: "dashed, beside JOB", ar: "متقطّع، بجانب JOB" } },
        { l: { en: "Each EMPLOYEE must hold one and only one JOB.", ar: "Each EMPLOYEE must hold one and only one JOB." },
          r: { en: "solid, beside EMPLOYEE", ar: "متّصل، بجانب EMPLOYEE" } },
        { l: { en: "Each BOOK must be written by one and only one AUTHOR.", ar: "Each BOOK must be written by one and only one AUTHOR." },
          r: { en: "solid, beside BOOK", ar: "متّصل، بجانب BOOK" } },
        { l: { en: "Each AUTHOR may be the author of one or more BOOKs.", ar: "Each AUTHOR may be the author of one or more BOOKs." },
          r: { en: "dashed, beside AUTHOR", ar: "متقطّع، بجانب AUTHOR" } }
      ],
      hint: {
        en: "The first entity in the sentence tells you which half; the word must or may tells you its pattern.",
        ar: "الكيان الأول في الجملة يدلّك على النصف؛ وكلمة must أو may تدلّك على نمطه."
      },
      explain: {
        en: "A sentence fixes exactly one half: the one beside the entity it starts from. must comes from a solid half, may from a dashed one. So the JOB sentence describes the dashed half beside JOB, not the EMPLOYEE half — putting the dashed half next to the wrong entity is the lesson's commonest drawing slip.",
        ar: "الجملة تحسم نصفًا واحدًا بالضبط: النصف المجاور للكيان الذي تبدأ منه. must تأتي من نصف متّصل، وmay من نصف متقطّع. فجملة JOB تصف النصف المتقطّع بجانب JOB، لا نصف EMPLOYEE — ووضع النصف المتقطّع بجانب الكيان الخطأ أكثر أخطاء الرسم شيوعًا في الدرس."
      }
    },

    /* ---------------------------------------------------- 3 · must be, or may be */
    {
      id: "t3l2q08", type: "fill", level: "easy", topics: ["t3-must-may-wording", "t3-word-from-half"],
      q: {
        en: "Each line describes one half, given in brackets. Write the full optionality word: must, must be, may or may be.",
        ar: "كل سطر يصف نصفًا واحدًا، مذكورًا بين القوسين. اكتب كلمة الإلزامية كاملة: must أو must be أو may أو may be."
      },
      lang: "erdish",
      code: "Each DEPARTMENT  ____1____ responsible for one or more EMPLOYEEs.   (dashed)\nEach ORDER       ____2____ placed by one and only one CUSTOMER.       (solid)\nEach COUNTRY     ____3____ visited by one or more TRAVELERs.          (dashed)\nEach EMPLOYEE    ____4____ work in one and only one DEPARTMENT.       (solid)",
      blanks: [
        { accept: ["may be"], label: { en: "1", ar: "1" } },
        { accept: ["must be"], label: { en: "2", ar: "2" } },
        { accept: ["may be"], label: { en: "3", ar: "3" } },
        { accept: ["must"], label: { en: "4", ar: "4" } }
      ],
      hint: {
        en: "The half gives must or may. Then read the name that follows: does it need be in front of it?",
        ar: "النصف يعطيك must أو may. ثم اقرأ الاسم الذي يليها: هل يحتاج إلى be قبله؟"
      },
      explain: {
        en: "1 may be responsible for, 2 must be placed by, 3 may be visited by, 4 must work in. The half decides must or may; the relationship name decides whether be follows. \"must placed by\" and \"must be work in\" are not sentences.",
        ar: "1 may be responsible for، و2 must be placed by، و3 may be visited by، و4 must work in. النصف يقرّر must أو may؛ واسم العلاقة يقرّر هل تليها be. و«must placed by» و«must be work in» ليستا جملتين صحيحتين."
      }
    },
    {
      id: "t3l2q09", type: "complete", level: "easy", topics: ["t3-must-may-wording", "t3-solid-line"],
      q: {
        en: "In the slides' example, the half beside PRODUCT is solid. Complete the sentence.",
        ar: "في مثال الشرائح، النصف المجاور لـ PRODUCT متّصل. أكمل الجملة."
      },
      lang: "erdish",
      code: "Each PRODUCT ____ classified by one and only one PRODUCT TYPE.",
      options: [
        { code: "must" },
        { code: "may be" },
        { code: "must be" },
        { code: "may" }
      ],
      answer: 2,
      solution: {
        code: "Each PRODUCT must be classified by one and only one PRODUCT TYPE.\nEach PRODUCT TYPE may classify one or more PRODUCTs.",
        en: "Solid beside PRODUCT gives must; the name classified by needs be. The other half, beside PRODUCT TYPE, is dashed.",
        ar: "المتّصل بجانب PRODUCT يعطي must؛ والاسم classified by يحتاج إلى be. أما النصف الآخر، بجانب PRODUCT TYPE، فمتقطّع."
      },
      hint: {
        en: "Two decisions: the half picks the word, and the name after the gap picks whether be is needed.",
        ar: "قراران: النصف يختار الكلمة، والاسم الذي بعد الفراغ يختار هل نحتاج إلى be."
      },
      explain: {
        en: "must be. A solid half means mandatory, so must; classified by is a passive name, so be goes in front of it. Plain \"must\" leaves \"must classified by\", which is not a sentence; may and may be belong to a dashed half.",
        ar: "must be. النصف المتّصل يعني إلزاميًّا، فالكلمة must؛ وclassified by اسم بصيغة المبني للمجهول، فتسبقه be. أما must وحدها فتترك «must classified by» وهي ليست جملة؛ وmay وmay be تخصّان النصف المتقطّع."
      }
    },

    /* ---------------------------------------------------- 4 · the restaurant */
    {
      id: "t3l2q10", type: "error", level: "hard", topics: ["t3-which-half", "t3-optionality-from-scenario", "t3-recursive-optionality"],
      q: {
        en: "A classmate's draft, as text; each half is written beside the entity it touches. The business rules are this lesson's: vacant jobs exist, new departments may be empty, and every order has the customer who owns and pays for it. Which line has a wrong half?",
        ar: "مسوّدة زميل، مكتوبة نصًّا؛ وكل نصف مكتوب بجانب الكيان الذي يلامسه. وقواعد العمل هي قواعد هذا الدرس: توجد وظائف شاغرة، والأقسام الجديدة قد تكون فارغة، ولكل طلب زبون يملكه ويدفع ثمنه. أيّ سطر فيه نصف خطأ؟"
      },
      lang: "text",
      code: "EMPLOYEE  [solid]  hold        |  held by          [dashed]  JOB\nEMPLOYEE  [solid]  works in    |  responsible for  [dashed]  DEPARTMENT\nCUSTOMER  [solid]  place       |  placed by        [dashed]  ORDER\nEMPLOYEE  [dashed] managed by  |  manager of       [dashed]  EMPLOYEE",
      answer: 3,
      solution: {
        code: "EMPLOYEE  [solid]  hold        |  held by          [dashed]  JOB\nEMPLOYEE  [solid]  works in    |  responsible for  [dashed]  DEPARTMENT\nCUSTOMER  [solid]  place       |  placed by        [solid]   ORDER\nEMPLOYEE  [dashed] managed by  |  manager of       [dashed]  EMPLOYEE",
        en: "The half beside ORDER becomes solid: each ORDER must be placed by one and only one CUSTOMER.",
        ar: "النصف المجاور لـ ORDER يصير متّصلًا: Each ORDER must be placed by one and only one CUSTOMER."
      },
      hint: {
        en: "For each line, read the half beside each entity and ask the scenario whether that entity's instances can stand alone.",
        ar: "في كل سطر، اقرأ النصف المجاور لكل كيان، واسأل السيناريو هل يمكن لنُسَخ ذلك الكيان أن تقف وحدها."
      },
      explain: {
        en: "Line 3: the dashed half beside ORDER lets an order like 105 be saved with no customer, against the scenario. The CUSTOMER half is already solid, which tempts you to pass the line — but the two halves are separate rules. Line 4 looks loose, yet may at both ends is exactly the slides' manager line.",
        ar: "السطر 3: النصف المتقطّع بجانب ORDER يسمح بحفظ طلب مثل 105 بلا زبون، خلافًا للسيناريو. ونصف CUSTOMER متّصل أصلًا، وهذا ما يغري بتمرير السطر — لكن النصفين قاعدتان منفصلتان. أما السطر 4 فيبدو متساهلًا، غير أن «قد» عند الطرفين هي بالضبط خط المدير في الشرائح."
      }
    },
    {
      id: "t3l2q11", type: "contrast", level: "medium", topics: ["t3-mandatory-end", "t3-optional-end", "t3-solid-line", "t3-dashed-line"],
      q: {
        en: "Sort each statement: does it describe a mandatory end or an optional end?",
        ar: "صنّف كل عبارة: هل تصف طرفًا إلزاميًّا أم طرفًا اختياريًّا؟"
      },
      concepts: [
        { en: "Mandatory end", ar: "طرف إلزامي" },
        { en: "Optional end", ar: "طرف اختياري" }
      ],
      rows: [
        { s: { en: "Every instance has at least one matching record, always", ar: "لكل نسخة سجلّ مطابق واحد على الأقلّ، دائمًا" }, a: 0 },
        { s: { en: "An instance may have zero matching records", ar: "قد لا يكون للنسخة أيّ سجلّ مطابق" }, a: 1 },
        { s: { en: "Drawn as a dashed (dotted) half", ar: "يُرسم نصفًا متقطّعًا (منقّطًا)" }, a: 1 },
        { s: { en: "Read aloud with must or must be", ar: "يُقرأ بـ must أو must be" }, a: 0 },
        { s: { en: "The EMPLOYEE end of EMPLOYEE–JOB, where employees.job_id is NOT NULL", ar: "طرف EMPLOYEE في EMPLOYEE–JOB، حيث employees.job_id بقيد NOT NULL" }, a: 0 },
        { s: { en: "The JOB end, which lets Stock Clerk stay vacant", ar: "طرف JOB، الذي يسمح لأمين المخزن بأن يبقى شاغرًا" }, a: 1 },
        { s: { en: "Both ends of the manager line", ar: "طرفا خط المدير كلاهما" }, a: 1 }
      ],
      hint: {
        en: "Ask of each statement: must the instance take part, or only may it?",
        ar: "اسأل عن كل عبارة: هل يجب أن تشارك النسخة، أم يجوز لها فقط؟"
      },
      explain: {
        en: "Mandatory: at least one matching record always, a solid half, must (be), a NOT NULL key like employees.job_id. Optional: zero records allowed, a dashed half, may (be) — the vacant job and both ends of the manager line. Neither is the safe default; each is a business rule.",
        ar: "الإلزامي: سجلّ مطابق واحد على الأقلّ دائمًا، ونصف متّصل، وmust (be)، ومفتاح NOT NULL مثل employees.job_id. والاختياري: يُسمح بلا سجلّات، ونصف متقطّع، وmay (be) — الوظيفة الشاغرة وطرفا خط المدير. ولا أحدهما هو الخيار الآمن؛ كلٌّ منهما قاعدة عمل."
      }
    },
    {
      id: "t3l2q12", type: "ordercode", level: "medium", topics: ["t3-must-without-column", "t3-optionality-to-not-null"],
      q: {
        en: "The restaurant's version 3 is built. A new customer, number 4, arrives with order 106; the application saves a customer only together with their first order. Put the statements in an order that runs without error.",
        ar: "بُني الإصدار 3 للمطعم. يصل زبون جديد، رقمه 4، ومعه الطلب 106؛ والتطبيق لا يحفظ زبونًا إلا مع طلبه الأول. رتّب العبارات ترتيبًا يُنفَّذ بلا خطأ."
      },
      lang: "sql",
      items: [
        { code: "CREATE TABLE customers (customer_id NUMBER PRIMARY KEY, name VARCHAR(20) NOT NULL);" },
        { code: "CREATE TABLE orders (order_no NUMBER PRIMARY KEY, customer_id NUMBER NOT NULL REFERENCES customers(customer_id));" },
        { code: "INSERT INTO customers VALUES (4, 'Sami');" },
        { code: "INSERT INTO orders VALUES (106, 4);" }
      ],
      answer: [0, 1, 2, 3],
      hint: {
        en: "A foreign key can only point at a table, and a row, that already exists.",
        ar: "المفتاح الأجنبي لا يشير إلا إلى جدول، وإلى صفّ، موجودَين من قبل."
      },
      explain: {
        en: "customers before orders, because orders refers to it; the customer row before the order row, because customer_id is NOT NULL and must point at a real customer — alasql refuses the order first with Foreign key \"4\" not found. The CUSTOMER half's must has no column of its own: it is kept by saving the pair together.",
        ar: "customers قبل orders لأن orders تشير إليه؛ وصفّ الزبون قبل صفّ الطلب لأن customer_id بقيد NOT NULL ويجب أن يشير إلى زبون حقيقي — فإن جاء الطلب أوّلًا رفضه alasql برسالة Foreign key \"4\" not found. أما «يجب» عند نصف CUSTOMER فليس لها عمود خاص: يحفظها حفظُ الاثنين معًا."
      }
    },
    {
      id: "t3l2q13", type: "mcq", level: "medium", topics: ["t3-optionality-from-scenario", "t3-dashed-not-safe"],
      q: {
        en: "Version 2 of the restaurant makes the ORDER half solid and leaves the CUSTOMER half dashed. What does it still leave open, compared with the slides' scenario?",
        ar: "يجعل الإصدار 2 للمطعم نصف ORDER متّصلًا ويترك نصف CUSTOMER متقطّعًا. ما الذي لا يزال مفتوحًا فيه، مقارنةً بسيناريو الشرائح؟"
      },
      options: [
        { en: "An order like 105 can still be saved with no customer", ar: "لا يزال يمكن حفظ طلب مثل 105 بلا زبون" },
        { en: "A customer can only ever place one order", ar: "لا يستطيع الزبون أن يضع إلا طلبًا واحدًا" },
        { en: "Nothing: once every order has an owner, the model is complete", ar: "لا شيء: ما دام لكل طلب مالك فالنموذج مكتمل" },
        { en: "It stores customers who have never placed an order", ar: "يخزّن زبائن لم يضعوا أيّ طلب قطّ" }
      ],
      answer: 3,
      hint: {
        en: "Version 2 fixed one half. Read the other half aloud with may, and ask how the counter learns of a customer.",
        ar: "أصلح الإصدار 2 نصفًا واحدًا. اقرأ النصف الآخر بصوت عالٍ بـ may، واسأل كيف يعرف الشبّاك بالزبون."
      },
      explain: {
        en: "\"Each CUSTOMER may place one or more ORDERs\" allows customers with no orders, yet at a walk-up counter a customer only exists once they order. Version 3 makes that half solid too. Order 105 was version 1's defect, already fixed; one order per customer is cardinality, which optionality never decides.",
        ar: "«Each CUSTOMER may place one or more ORDERs» تسمح بزبائن بلا طلبات، مع أن الزبون عند شبّاك الطلبات لا يوجد إلا حين يطلب. والإصدار 3 يجعل هذا النصف متّصلًا أيضًا. أما الطلب 105 فكان عيب الإصدار 1 وقد أُصلح؛ وطلب واحد لكل زبون تعدّدية، والإلزامية لا تقرّرها أبدًا."
      }
    },
    {
      id: "t3l2q14", type: "tf", level: "easy", topics: ["t3-dashed-not-safe"],
      q: {
        en: "When the business is unclear, drawing every half dashed is the safe choice: an optional relationship never causes a problem, because nothing is refused.",
        ar: "حين لا يكون العمل واضحًا، فإن رسم كل الأنصاف متقطّعة هو الخيار الآمن: العلاقة الاختيارية لا تسبّب مشكلة أبدًا، لأنه لا يُرفض شيء."
      },
      truth: false,
      hint: {
        en: "Remember order 105 in the restaurant's version 1.",
        ar: "تذكّر الطلب 105 في الإصدار 1 للمطعم."
      },
      explain: {
        en: "False. Dashed is a business rule like solid, not the absence of one. A wrong may lets forbidden data in — order 105 was saved with no customer, cooked, and never billed — just as a wrong must keeps good data out. When the business is unclear, ask it.",
        ar: "خطأ. المتقطّع قاعدة عمل مثل المتّصل، لا غيابٌ للقواعد. فـ«قد» الخاطئة تُدخل بيانات ممنوعة — حُفظ الطلب 105 بلا زبون، وطُبخ، ولم يُفوتَر قطّ — كما أن «يجب» الخاطئة تمنع بيانات سليمة. وحين لا يكون العمل واضحًا، اسأله."
      }
    },
    {
      id: "t3l2q15", type: "output", level: "medium", topics: ["t3-dashed-not-safe", "t3-optionality-to-not-null"],
      q: {
        en: "Version 1 of the restaurant as tables: customers 1 Linda, 2 Krishna, 3 Mel; orders 10 and 102 (customer 1), 77 (customer 2), 100 (customer 3), and 105 saved with customer_id left empty. How many bills does the evening run produce?",
        ar: "الإصدار 1 للمطعم في جداول: الزبائن 1 Linda و2 Krishna و3 Mel؛ والطلبات 10 و102 (للزبون 1) و77 (للزبون 2) و100 (للزبون 3)، و105 محفوظ وcustomer_id فيه فارغ. كم فاتورة يُخرج تشغيل المساء؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS bills\nFROM orders o JOIN customers c ON o.customer_id = c.customer_id;",
      blanks: [{ accept: ["4"], label: { en: "bills", ar: "bills" } }],
      hint: {
        en: "Can a row whose customer_id is empty find a partner in customers?",
        ar: "هل يجد صفّ قيمة customer_id فيه فارغة شريكًا في customers؟"
      },
      explain: {
        en: "4. Five orders, four bills: order 105 has no customer_id, matches no customer, and silently drops out of the join. That is the dashed ORDER half at work. A solid half would have made orders.customer_id NOT NULL, and 105 could never have been saved.",
        ar: "4. خمسة طلبات وأربع فواتير: الطلب 105 بلا customer_id، فلا يطابق أيّ زبون، ويسقط من الربط (join) بصمت. هذا عمل نصف ORDER المتقطّع. ولو كان النصف متّصلًا لصار orders.customer_id بقيد NOT NULL، ولما أمكن حفظ 105 أصلًا."
      },
      solution: { out: "4" }
    },
    {
      id: "t3l2q16", type: "mcq", level: "medium", topics: ["t3-business-decides-optionality", "t3-optionality-from-scenario"],
      q: {
        en: "A second restaurant takes phone orders from callers who never give a name, and it still wants to record those orders. How should the half beside ORDER be drawn for this business?",
        ar: "مطعم ثانٍ يأخذ طلبات هاتفية من متّصلين لا يذكرون أسماءهم أبدًا، ويريد مع ذلك تسجيل تلك الطلبات. كيف يُرسم النصف المجاور لـ ORDER لهذا العمل؟"
      },
      options: [
        { en: "Solid, as in the slides: an ORDER must always be placed by a CUSTOMER", ar: "متّصلًا، كما في الشرائح: يجب دائمًا أن يضع ORDER زبونٌ CUSTOMER" },
        { en: "Dashed: this business's orders may have no customer, so orders.customer_id allows null", ar: "متقطّعًا: طلبات هذا العمل قد تكون بلا زبون، فيقبل orders.customer_id القيمة null" },
        { en: "Dashed at both halves, because one optional end makes the whole line optional", ar: "متقطّعًا عند النصفين، لأن طرفًا اختياريًّا واحدًا يجعل الخط كلّه اختياريًّا" },
        { en: "Drop the line: an order without a customer means ORDER and CUSTOMER are not related", ar: "احذف الخط: الطلب بلا زبون يعني أن ORDER وCUSTOMER غير مرتبطين" }
      ],
      answer: 1,
      hint: {
        en: "Who decides optionality: the slides' example, or the business you are modelling?",
        ar: "من يقرّر الإلزامية: مثال الشرائح، أم العمل الذي تنمذجه؟"
      },
      explain: {
        en: "Dashed beside ORDER. The same two entities can carry different halves in another business; the designer asks, then draws what the business answered. Copying the slides' solid half would refuse every anonymous order. The CUSTOMER half is a separate question, and the relationship still matters for the orders that do have a customer.",
        ar: "متقطّعًا بجانب ORDER. فقد يحمل الكيانان نفساهما أنصافًا مختلفة في عمل آخر؛ والمصمّم يسأل، ثم يرسم ما أجاب به العمل. ونسخ النصف المتّصل من الشرائح سيرفض كل طلب مجهول. أما نصف CUSTOMER فسؤال منفصل، والعلاقة تبقى مهمّة للطلبات التي لها زبون فعلًا."
      }
    },

    /* ---------------------------------------------------- 5 · the manager line */
    {
      id: "t3l2q17", type: "mcq", level: "medium", topics: ["t3-recursive-optionality"],
      q: {
        en: "A designer draws the recursive manager line solid at both halves. Which consequence follows?",
        ar: "يرسم مصمّم خط المدير الذاتي متّصلًا عند نصفيه. أيّ نتيجة تترتّب على ذلك؟"
      },
      options: [
        { en: "Nothing changes: a relationship from EMPLOYEE to itself has no optionality", ar: "لا يتغيّر شيء: العلاقة من EMPLOYEE إلى نفسه لا إلزامية لها" },
        { en: "Every employee would have to be a manager, so the line needs a separate MANAGER entity", ar: "كل موظّف سيلزمه أن يكون مديرًا، فيحتاج الخط إلى كيان MANAGER منفصل" },
        { en: "Every employee must manage someone, though Tyler manages nobody, and someone must manage Dana at the top", ar: "كل موظّف يجب أن يدير أحدًا، مع أن Tyler لا يدير أحدًا، ويجب أن يدير أحدٌ Dana التي في القمّة" },
        { en: "Only Dana is affected, because the top of the tree is the only exception", ar: "Dana وحدها تتأثّر، لأن قمّة الشجرة هي الاستثناء الوحيد" }
      ],
      answer: 2,
      hint: {
        en: "Read both halves aloud with must, then test each sentence against Tyler and against Dana.",
        ar: "اقرأ النصفين بصوت عالٍ بـ must، ثم اختبر كل جملة على Tyler وعلى Dana."
      },
      explain: {
        en: "\"Must manage\" fails for Tyler, Neil and Carlos, who manage nobody; \"must be managed by\" needs a manager above everyone, so the tree has no top. The slides read both ends with may. A recursive line has two halves like any other, and both ends are still EMPLOYEE — no MANAGER entity.",
        ar: "«must manage» تسقط عند Tyler وNeil وCarlos الذين لا يديرون أحدًا؛ و«must be managed by» تحتاج إلى مدير فوق كل أحد، فلا تكون للشجرة قمّة. والشرائح تقرأ الطرفين بـ may. للخط الذاتي نصفان كأيّ خط آخر، وطرفاه كلاهما EMPLOYEE — بلا كيان MANAGER."
      }
    },
    {
      id: "t3l2q18", type: "output", level: "medium", topics: ["t3-recursive-optionality", "t3-nullable-manager-id"],
      q: {
        en: "The lesson's employees: Dana 100 (no manager), Tyler 310, Lawrence 210 and Neil 378 managed by 100, Carlos 405 managed by 210. The query counts the may at the manager of end. What does it return?",
        ar: "موظّفو الدرس: Dana 100 (بلا مدير)، وTyler 310 وLawrence 210 وNeil 378 يديرهم 100، وCarlos 405 يديره 210. يعدّ الاستعلام «قد» عند طرف manager of. ماذا يُرجع؟"
      },
      lang: "sql",
      code: "SELECT COUNT(*) AS n\nFROM employees\nWHERE employee_id NOT IN\n      (SELECT manager_id FROM employees WHERE manager_id IS NOT NULL);",
      blanks: [{ accept: ["3"], label: { en: "n", ar: "n" } }],
      hint: {
        en: "Which employee ids never appear in anybody's manager_id?",
        ar: "أيّ أرقام موظّفين لا تظهر أبدًا في manager_id لأيّ أحد؟"
      },
      explain: {
        en: "3: Tyler, Neil and Carlos manage nobody. Only 100 and 210 appear as manager_id. That is the dashed half at the manager of end, in rows — and it needs no column. The other end's may is the one empty manager_id, Dana's.",
        ar: "3: Tyler وNeil وCarlos لا يديرون أحدًا. فلا يظهر في manager_id إلا 100 و210. هذا هو النصف المتقطّع عند طرف manager of، في صورة صفوف — ولا يحتاج إلى أيّ عمود. أما «قد» الطرف الآخر فهي قيمة manager_id الفارغة الوحيدة، قيمة Dana."
      },
      solution: { out: "3" }
    },
    {
      id: "t3l2q19", type: "trace", level: "hard", topics: ["t3-nullable-manager-id", "t3-optionality-to-not-null"],
      q: {
        en: "The lesson's employees table: job_id VARCHAR(10) NOT NULL, manager_id NUMBER with no constraint. A new programmer is hired before anyone is chosen to manage her. What happens?",
        ar: "جدول employees في الدرس: job_id VARCHAR(10) NOT NULL، وmanager_id NUMBER بلا قيد. تُعيَّن مبرمجة جديدة قبل أن يُختار من يديرها. ماذا يحدث؟"
      },
      lang: "sql",
      code: "INSERT INTO employees VALUES (421, 'Rana', 'Khalil', 'IT_PROG', NULL);",
      options: [
        { en: "Refused: Wrong NULL value in NOT NULL column manager_id", ar: "يُرفض: Wrong NULL value in NOT NULL column manager_id" },
        { en: "Saved: the managed by half is dashed, so manager_id may be empty", ar: "يُحفَظ: نصف managed by متقطّع، فقد يبقى manager_id فارغًا" },
        { en: "Refused: only the top of the tree may have an empty manager_id", ar: "يُرفض: لا يجوز أن يكون manager_id فارغًا إلا لقمّة الشجرة" },
        { en: "Saved, but only because IT_PROG already has an employee", ar: "يُحفَظ، لكن فقط لأن IT_PROG فيها موظّف من قبل" }
      ],
      answer: 1,
      hint: {
        en: "Which column carries NOT NULL here, and which half of which line put it there?",
        ar: "أيّ عمود يحمل NOT NULL هنا، وأيّ نصف من أيّ خط وضعه هناك؟"
      },
      explain: {
        en: "Saved — alasql returns 1. Only job_id is NOT NULL, from the solid EMPLOYEE half of EMPLOYEE–JOB, and Rana supplies IT_PROG. manager_id is nullable because the managed by half is dashed; the column knows nothing about \"top of the tree\". Leave job_id empty instead and the insert fails with Wrong NULL value in NOT NULL column job_id.",
        ar: "يُحفَظ — يُرجع alasql القيمة 1. فـ job_id وحده بقيد NOT NULL، آتيًا من نصف EMPLOYEE المتّصل في EMPLOYEE–JOB، وRana تُعطي IT_PROG. أما manager_id فيقبل null لأن نصف managed by متقطّع؛ والعمود لا يعرف شيئًا عن «قمّة الشجرة». ولو تُرك job_id فارغًا لفشل الإدخال برسالة Wrong NULL value in NOT NULL column job_id."
      },
      solution: { out: "1" }
    },

    /* ---------------------------------------------------- 6 · from the half to the column */
    {
      id: "t3l2q20", type: "multi", level: "hard", topics: ["t3-optionality-to-not-null", "t3-must-without-column"],
      q: {
        en: "Which of these rules does a NOT NULL constraint on a foreign key column enforce? Select all that apply.",
        ar: "أيّ هذه القواعد يفرضها قيد NOT NULL على عمود مفتاح أجنبي؟ اختر كل ما ينطبق."
      },
      options: [
        { en: "Each ORDER must be placed by one and only one CUSTOMER.", ar: "Each ORDER must be placed by one and only one CUSTOMER." },
        { en: "Each CUSTOMER must place one or more ORDERs.", ar: "Each CUSTOMER must place one or more ORDERs." },
        { en: "Each BOOK must be written by one and only one AUTHOR.", ar: "Each BOOK must be written by one and only one AUTHOR." },
        { en: "Each EMPLOYEE must work in one and only one DEPARTMENT.", ar: "Each EMPLOYEE must work in one and only one DEPARTMENT." },
        { en: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs.", ar: "Each DEPARTMENT may be responsible for one or more EMPLOYEEs." }
      ],
      answer: [0, 2, 3],
      hint: {
        en: "The key sits in the table at the crow's-foot end. Does the sentence start from that entity, and does it say must?",
        ar: "المفتاح يقع في جدول طرف قدم الغراب. هل تبدأ الجملة من ذلك الكيان، وهل تقول must؟"
      },
      explain: {
        en: "orders.customer_id, books.author_id and employees.department_id are the key columns, and each sits under a solid half: NOT NULL. \"Each CUSTOMER must place\" is a must too, which makes it tempting, but customers has no order column — that rule stays on the ERD and the application keeps it. The DEPARTMENT may needs nothing: an empty department is already legal.",
        ar: "orders.customer_id وbooks.author_id وemployees.department_id هي أعمدة المفاتيح، وكلٌّ منها تحت نصف متّصل: NOT NULL. و«Each CUSTOMER must place» فيها must أيضًا، وهذا ما يغري باختيارها، لكن ليس في customers عمود للطلبات — فتبقى تلك القاعدة على مخطّط ERD ويحفظها التطبيق. أما «قد» عند DEPARTMENT فلا تحتاج شيئًا: القسم الفارغ مسموح أصلًا."
      }
    },
    {
      id: "t3l2q21", type: "tf", level: "medium", topics: ["t3-optionality-to-not-null", "t3-must-without-column"],
      q: {
        en: "\"Each DEPARTMENT may be responsible for one or more EMPLOYEEs.\" To implement this dashed half, the departments table needs a nullable column that lists its employees.",
        ar: "«Each DEPARTMENT may be responsible for one or more EMPLOYEEs.» لتطبيق هذا النصف المتقطّع، يحتاج جدول departments إلى عمود يقبل null يسرد موظّفيه."
      },
      truth: false,
      hint: {
        en: "Which table holds the key of EMPLOYEE–DEPARTMENT, and is a department row with no employees already legal?",
        ar: "أيّ جدول يحمل مفتاح EMPLOYEE–DEPARTMENT، وهل صفّ قسم بلا موظّفين مسموح أصلًا؟"
      },
      explain: {
        en: "False. The key lives in employees (department_id), so only the EMPLOYEE half touches a column, and it is solid: NOT NULL. The dashed DEPARTMENT half needs no declaration at all — a departments row nobody points to is simply allowed. A list of employees inside one column is not how a relationship is stored.",
        ar: "خطأ. المفتاح يعيش في employees (department_id)، فلا يلامس عمودًا إلا نصف EMPLOYEE، وهو متّصل: NOT NULL. أما نصف DEPARTMENT المتقطّع فلا يحتاج أيّ تصريح — فصفّ قسم لا يشير إليه أحد مسموح ببساطة. وسرد الموظّفين داخل عمود واحد ليس طريقة تخزين العلاقة."
      }
    },
    {
      id: "t3l2q22", type: "write", level: "hard", topics: ["t3-optionality-to-not-null", "t3-nullable-manager-id"],
      q: {
        en: "Write the CREATE TABLE for employees (employee_id, first_name, last_name, job_id, department_id, manager_id) so that each key column follows this lesson's halves: an employee must hold a job, must work in a department, and may be managed by an employee.",
        ar: "اكتب CREATE TABLE لجدول employees (employee_id وfirst_name وlast_name وjob_id وdepartment_id وmanager_id) بحيث يتبع كل عمود مفتاح أنصاف هذا الدرس: يجب أن يشغل الموظّف وظيفة، ويجب أن يعمل في قسم، وقد يديره موظّف."
      },
      lang: "sql",
      lines: 8,
      starter: "CREATE TABLE employees (\n  \n);",
      checks: [
        { re: "CREATE\\s+TABLE\\s+employees\\s*\\(", flags: "i", label: { en: "CREATE TABLE employees", ar: "CREATE TABLE employees" } },
        { re: "employee_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+PRIMARY\\s+KEY", flags: "i", label: { en: "employee_id is the primary key", ar: "employee_id هو المفتاح الأساسي" } },
        { re: "job_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "job_id NOT NULL: the solid EMPLOYEE half of hold", ar: "job_id بقيد NOT NULL: نصف EMPLOYEE المتّصل في hold" } },
        { re: "department_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "department_id NOT NULL: the solid EMPLOYEE half of works in", ar: "department_id بقيد NOT NULL: نصف EMPLOYEE المتّصل في works in" } },
        { re: "manager_id\\s+\\w+", flags: "i", label: { en: "a manager_id column", ar: "عمود manager_id" } }
      ],
      forbid: [
        { re: "manager_id\\s+\\w+(\\s*\\(\\s*\\d+\\s*\\))?\\s+NOT\\s+NULL", flags: "i", label: { en: "manager_id must allow null: the managed by half is dashed", ar: "يجب أن يقبل manager_id القيمة null: نصف managed by متقطّع" } }
      ],
      solution: {
        code: "CREATE TABLE employees (\n  employee_id   NUMBER PRIMARY KEY,\n  first_name    VARCHAR(20) NOT NULL,\n  last_name     VARCHAR(20) NOT NULL,\n  job_id        VARCHAR(10) NOT NULL,\n  department_id NUMBER NOT NULL,\n  manager_id    NUMBER\n);",
        en: "Two solid EMPLOYEE halves give two NOT NULL keys; the dashed managed by half leaves manager_id nullable, so Dana can be saved at the top.",
        ar: "نصفا EMPLOYEE المتّصلان يعطيان مفتاحين بقيد NOT NULL؛ ونصف managed by المتقطّع يترك manager_id يقبل null، فتُحفَظ Dana في القمّة."
      },
      hint: {
        en: "Find the half beside EMPLOYEE on each of the three lines: solid means NOT NULL, dashed means leave it open.",
        ar: "ابحث عن النصف المجاور لـ EMPLOYEE في كلٍّ من الخطوط الثلاثة: المتّصل يعني NOT NULL، والمتقطّع يعني اتركه مفتوحًا."
      },
      explain: {
        en: "All three keys sit in employees, so the halves beside EMPLOYEE decide them. hold and works in are must: job_id and department_id are NOT NULL. managed by is may: manager_id stays nullable. Adding NOT NULL there \"to be strict\" refuses Dana, unless she is made to manage herself.",
        ar: "المفاتيح الثلاثة كلّها في employees، فالأنصاف المجاورة لـ EMPLOYEE هي التي تقرّرها. hold وworks in بـ must: فـ job_id وdepartment_id بقيد NOT NULL. وmanaged by بـ may: فيبقى manager_id يقبل null. وإضافة NOT NULL هناك «للتشدّد» ترفض Dana، إلا إذا جُعلت تدير نفسها."
      }
    },
    {
      id: "t3l2q23", type: "compare", level: "hard", topics: ["t3-business-decides-optionality", "t3-optionality-per-end", "t3-which-half"],
      q: {
        en: "A temp agency says: \"Every job we advertise is filled the day it is posted, but our staff sit on the bench between jobs.\" Which draft of EMPLOYEE–JOB fits this agency?",
        ar: "تقول وكالة توظيف مؤقّت: «كل وظيفة نعلن عنها تُشغَل في يوم نشرها، لكن موظّفينا ينتظرون بلا عمل بين وظيفة وأخرى.» أيّ مسوّدة لـ EMPLOYEE–JOB تناسب هذه الوكالة؟"
      },
      lang: "text",
      codeA: "EMPLOYEE  [solid]  hold  |  held by [dashed]  JOB",
      codeB: "EMPLOYEE  [dashed] hold  |  held by [solid]   JOB",
      options: [
        { en: "A: it is the lesson's recommended version 2, so it is right for any H.R. business", ar: "A: إنها الإصدار 2 الموصى به في الدرس، فهي صحيحة لأيّ عمل موارد بشرية" },
        { en: "B: a benched employee may hold no job, and every job must be held; employees.job_id allows null", ar: "B: الموظّف المنتظِر قد لا يشغل وظيفة، وكل وظيفة يجب أن تُشغَل؛ ويقبل employees.job_id القيمة null" },
        { en: "B, but job_id stays NOT NULL, because the solid half is still on the line", ar: "B، لكن job_id يبقى بقيد NOT NULL، لأن النصف المتّصل لا يزال على الخط" },
        { en: "Neither: if jobs are always filled, both halves must be solid", ar: "لا هذه ولا تلك: إذا كانت الوظائف تُشغَل دائمًا فيجب أن يكون النصفان متّصلين" }
      ],
      answer: 1,
      hint: {
        en: "Ask the two questions of this agency, one per entity, and put each answer beside its own entity.",
        ar: "اطرح السؤالين على هذه الوكالة، سؤالًا لكل كيان، وضع كل جواب بجانب كيانه."
      },
      explain: {
        en: "B, the exact reverse of version 2: \"Each EMPLOYEE may hold one and only one JOB. Each JOB must be held by one or more EMPLOYEEs.\" Same entities, same names, opposite halves — the business decides. The key is in employees, under the now-dashed EMPLOYEE half, so job_id allows null; the solid JOB half has no column to land on.",
        ar: "B، وهي عكس الإصدار 2 تمامًا: «Each EMPLOYEE may hold one and only one JOB. Each JOB must be held by one or more EMPLOYEEs.» الكيانات نفسها، والأسماء نفسها، والأنصاف معكوسة — العمل هو الذي يقرّر. والمفتاح في employees، تحت نصف EMPLOYEE الذي صار متقطّعًا، فيقبل job_id القيمة null؛ أما نصف JOB المتّصل فلا عمود ينزل عليه."
      }
    },
    {
      id: "t3l2q24", type: "mcq", level: "hard", topics: ["t3-optional-end", "t3-dashed-line", "t3-optionality"],
      q: {
        en: "Looking at version 2 of EMPLOYEE–JOB, a student explains: \"The half beside JOB is dashed because one job can be held by many employees.\" What is wrong with the explanation?",
        ar: "ينظر طالب إلى الإصدار 2 من EMPLOYEE–JOB ويشرح: «النصف المجاور لـ JOB متقطّع لأن الوظيفة الواحدة قد يشغلها موظّفون كثيرون.» ما الخطأ في هذا الشرح؟"
      },
      options: [
        { en: "Nothing: dashed is how a diagram shows \"many\"", ar: "لا شيء: المتقطّع هو طريقة المخطّط في إظهار «كثير»" },
        { en: "The dashed half is beside EMPLOYEE, not JOB", ar: "النصف المتقطّع بجانب EMPLOYEE، لا JOB" },
        { en: "It mixes the two: dashed means a job may have no employee at all; \"many\" is cardinality, drawn at the end of the line", ar: "يخلط بين الأمرين: المتقطّع يعني أن الوظيفة قد لا يكون لها أيّ موظّف؛ و«كثير» تعدّدية تُرسم عند نهاية الخط" },
        { en: "A job can be held by only one employee, so the half should be solid", ar: "لا يشغل الوظيفة إلا موظّف واحد، فيجب أن يكون النصف متّصلًا" }
      ],
      answer: 2,
      hint: {
        en: "Optionality answers must or may. Which question answers one or many?",
        ar: "الإلزامية تجيب عن «يجب» أو «قد». فأيّ سؤال يجيب عن «واحد» أو «كثير»؟"
      },
      explain: {
        en: "The JOB half is dashed because Stock Clerk can exist with zero employees — that is optionality, must or may. Whether one job has one or many employees is cardinality, Lesson 3's single toe or crow's foot at the line's end. A job held by many employees could still be mandatory; the two questions are answered separately.",
        ar: "نصف JOB متقطّع لأن أمين المخزن قد يوجد بلا أيّ موظّف — وهذه إلزامية، «يجب» أو «قد». أما هل للوظيفة موظّف واحد أو كثيرون فتلك تعدّدية، إصبع واحدة أو قدم غراب عند نهاية الخط في الدرس 3. والوظيفة التي يشغلها كثيرون قد تكون إلزامية مع ذلك؛ فالسؤالان يُجاب عنهما منفصلين."
      }
    }
  ]
};
