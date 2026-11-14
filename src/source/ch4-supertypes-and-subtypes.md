# Source: chapter 4 — `db ch4.pptx`, 17 slides

*Introduction to Database* — Eng. Noor A. Nashwan, Computer Engineering Dept., UCAS.
Built from Oracle Academy **Database Design 4-1 — Supertypes and Subtypes** (DDS4L1).

This is one Oracle lesson, which is why chapter T4 has five lessons rather than six: the
depth comes from practice, not from more topics.

Below is the text of every slide as extracted: runs separated by ` | ` in slide order,
`[NOTES]` is the speaker note. **This is the authority for what chapter T4 teaches.**

---

## SLIDE 1
Database Design | 4-1 | Supertypes | and | Subtypes | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 2
Objectives | This lesson covers the following objectives: | • | • | • | Define and give an example of a | subtype | Define and give an example of a | supertype | State the rules relating to entities and subtypes, give examples of each | and | • | Apply the rules of supertype and | the accuracy of ER diagrams that | Apply the rules of supertype and | subtype by evaluating | represent them | subtype and include | • | them in a diagram when | appropriate | DDS4L1 | Supertypes and Subtypes | 3 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 3
Purpose | • | Supertypes and subtypes occur frequently in the real | world: | – | food order types (eat in, to go) | – | grocery bag types (paper, plastic) | – | payment types (check, cash, credit) | You can typically associate ‘choices’ of something with supertypes and subtypes. | For example, what will be the method of payment – | cash, check or credit card? | Understanding real world examples helps us | understand | • | • | • | how and when to model | them. | DDS4L1 | Supertypes and Subtypes | 4 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 4
payment types (check, cash, credit) | How many entity needs???

## SLIDE 5
Evaluating Entities | • | Often some instances of an | entity have attributes and/or | relationships that other | instances do not have. | Imagine a business | which needs to | track payments from customers | . | Customers | can pay by | cash | , | PAYMENT | CASH | • | CHECK | CREDIT CARD | • | by check | , | or by credit | card | . | DDS4L1 | Supertypes and Subtypes | 5 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 6
Evaluating Entities | • | All payments | have some common | attributes | : payment date, payment | amount, and so on. | But only | credit cards would have a | “card number” attribute. | And for credit | card and check payments, we may need to know which CUSTOMER made the | PAYMENT | CASH | • | CHECK | • | CREDIT CARD | payment, while this | for cash payments. | is | not | needed | DDS4L1 | Supertypes and Subtypes | 6 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 7
Evaluating Entities | • | Should we create a single | PAYMENT entity or three | separate entities CASH, CHECK, | and CREDIT CARD? | And what happens | if in the | PAYMENT | CASH | CHECK | • | future we introduce a | fourth | CREDIT CARD | method | of | payment? | DDS4L1 | Supertypes and Subtypes | 7 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 8
Subdivide | an Entity | • | Sometimes | it makes sense to | subdivide an entity into subtypes. | This may be the case | when a group of instances has special properties | , such as attributes or relationships that | exist only for that group | . | ANIMAL | • | VERTEBRATE | INVERTEBRATE | • | In this case, the entity is called | a | “ | supertype | ” and each | called a “ | subtype | ”. | group | is | ANIMAL SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 8 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 9
entity | supertype | - an entity that is constructed with | attributes | that will be | common to all of the subtypes related to it | entity | subtype | - an entity that is based on a supertype, but is | different | from the | supertype | because of its | specialized attributes | and purpose

## SLIDE 10
Drawing a Subtype | • | Each subtype is a | specialization | of a | supertype | and | therefore must be | enclosed | within an entity | . | The common attributes | and relationships for all subtypes must be listed | only | in the | supertype | , but they are | inherited | in every subtype. | • | • | A | subtype | can and would generally | have attributes | relationships | of | its own | . | SUPERTYPE A | and | • | There can never be just one subtype; | attribute | another subtype should | to contain the rest. | be | created | SUBTYPE B | attribute | OTHER A | attribute | DFo 3-3 | Entities | Copyright © 2015, Oracle and/or its affiliates. All rights reserved. | 10

## SLIDE 11
Supertype Example | • | EXAM is a | supertype | of | STUDENT | EXAM | # number | * description | * weight | * date | * grade for written component | QUIZ, MIDTERM, | FINAL. | and | take | • | The | subtypes | have | taken by | several attributes | common | . | These | common | in | MIDTERM | * grade for oral presentation | BONUS | QUESTION | • | FINAL | * extra points for | optional paper | attributes are listed | the | supertype level | . | at | included in | QUIZ | includes | EXAM SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 10 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] Read the diagram as: Every QUIZ, MIDTERM, or FINAL is an EXAM (and thus has attributes such as description, weight, date, and grade). Conversely: Every EXAM is either a QUIZ, a MIDTERM, or a FINAL. 11

## SLIDE 12
Supertype Example | • | The same applies | relationships. | to | STUDENT | EXAM | # number | * description | * weight | * date | * grade for written component | take | • | Subtypes inherit | attributes and | all | taken by | relationships of the | MIDTERM | * grade for oral presentation | supertype | entity. | BONUS | QUESTION | FINAL | * extra points for | optional paper | included in | QUIZ | includes | EXAM SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 11 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 13
Always More Than One Subtype | • | At the | conceptual modeling | stage | , it is good practice to | include an | OTHER subtype | to | make sure that your subtypes | are | exhaustive | -- that you are | WALL COVERING | PAINT | WALLPAPER | FABRIC | handling every | supertype. | instance | of | the | OTHER | WALLCOVERING SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 13 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 14
Correctly Identifying Subtypes | • | When | modeling | supertypes and | subtypes, you | can use | three | questions | to see if the subtype is | correctly identified: | – | Is this subtype | a kind of | supertype? | – | Have I covered all possible cases? ( | exhaustive | ) | – | Does each instance fit into one and | SNOW | SPORT | SKI | SNOWBOARD | CROSS COUNTRY | OTHER | only one subtype? ( | mutually | exclusive) | SNOWSPORT SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 15 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] SKI تزلج SNOWBOARD التزلج على الجليد CROSS COUNTRY داخل البلد اخرى 14

## SLIDE 15
Nested Subtypes | ANIMAL | • | • | You can nest subtypes. | For | ease of reading | -- “ | readability | ” -- you would usually | show | subtypes with | only two levels | , but there is | VERTEBRATE | BIRD | REPTILE | OTHER | MAMMAL | no rule | that would stop | you | from going | levels. | beyond | two | INVERTEBRATE | NESTED ANIMAL SUPERTYPE | DDS4L1 | Supertypes and Subtypes | 16 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 16
Terminology | Key terms used in this | lesson | included: | • | • | • | • | Exhaustive | Mutually exclusive | Subtype | Supertype | DDS4L1 | Supertypes and Subtypes | 17 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 17
Summary | In this lesson, you should have learned how to: | • | • | • | Define and give an example of a subtype | Define and give an example of a supertype | State the rules relating to entities and subtypes, give examples of each | and | • | Apply the rules of supertype and | the accuracy of ER diagrams that | Apply the rules of supertype and | subtype by evaluating | represent them | subtype and include | • | them in a diagram when | appropriate | DDS4L1 | Supertypes and Subtypes | 18 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
