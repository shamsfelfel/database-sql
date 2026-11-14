# Source: chapter 3 — `db ch3.pptx`, 55 slides

*Introduction to Database* — Eng. Noor A. Nashwan, Computer Engineering Dept., UCAS.
Built from Oracle Academy **Database Design 3-1 … 3-4** and **Database Foundations 2-5 / 3-6**.

Lesson subject: **Identifying Relationships**. Oracle lessons in this deck:
3-1 Identifying Relationships · 3-2 ER Diagramming Conventions ·
3-3 Speaking ERDish & Drawing Relationships · 3-4 Matrix Diagrams.

Below is the text of every slide as it was extracted from the file: runs of text are
separated by ` | ` in slide order, and `[NOTES]` is the speaker note. The lecturer's own
Arabic glosses appear in the notes and should be kept as the Arabic term where they fit.
**This is the authority for what chapter T3 teaches.**

---

## SLIDE 1
Course Name: | Introduction to Database | Lecture Subject | : | Identifying Relationships.
[NOTES] Interpret تفسير 3

## SLIDE 2
Database Design | 3-1 | Identifying | Relationships | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] The answer to these questions may vary from one organization to another, depending on the business rules, but generally, if you are an employee, you would have a job. It is possible however that there will be jobs in the organization that are currently not filled or are obsolete, so will not be held by any employees. 6

## SLIDE 3
Objectives | This lesson covers the following objectives: | • | • | Interpret | and describe relationship cardinality | Relate (connect or join) entities | by | applying | the | rules | of | cardinality | and | optionality | DDS3L1 | Identifying Relationships | 3 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] Cardinality : HOW instances in one entity related to instances in another entity singular or plural مفرد او جمع Again, different organizations may have different business rules that define this relationship. In general, however, each employee will hold one job, and each job may be held by zero or more employees. 7

## SLIDE 4
Relationships in Data Models | Relationships | : | • | Represent | something of significance or importance to | the business | Show | how entities are related | to each other | • | • | • | • | • | • | Exist only between | Are bi-directional | A | r | e | n | a | med | a | t | b | oth | Have optionality | Have cardinality | entities | (or | one | entity | and | itself | ) | ends | DDS3L1 | Identifying Relationships | 6 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 5
Relationships | • | A relationship is a bidirectional, significant | association between two entities | entity and itself. | or between | an | DEPARTMENT | EMPLOYEE | contain | assigned to | DFo 2-5 | Relationships | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 5
[NOTES] Signs علامات 23

## SLIDE 6
What is Optionality in a Relationship? | • | • | • | Relationships are either | mandatory or optional | . | Consider the two entities | EMPLOYEE and JOB | . Based on what you know about instances of the entities, you can determine optionality by answering | two questions | : | Must every employee have a job | ? | • | – | In other words, | an employee? | Must every job | – | In other words, a job? | is this a mandatory or optional relationship | for | • | be assigned to an employee | ? | is this | a | mandatory | or optional relationship | for | DDS3L1 | Identifying Relationships | 7 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] Accent لهجة 24

## SLIDE 7
What is Cardinality in a Relationship? | • | • | Cardinality measures the | quantity of something | . | I | n | a | r | e | l | a | t | i | o | n | s | hip | , | i | t | d | e | t | e | r | m | in | es | t | h | e | d | e | g | r | ee | t | o | w | hi | c | h | o | n | e e | n | t | i | ty | i | s | r | e | l | a | t | ed | t | o | a | n | ot | h | er | b | y | a | n | s | w | e | rin | g | t | h | e | qu | e | s | t | i | o | n | , | “ | H | o | w | m | a | n | y | ? | ” | For example: | – | How many | jobs | can one employee hold | ? | One job only | ? Or | more than one job | ? | – | How many | employees | can hold one specific job | ? One employee only? Or more than one employee? | • | Note: The cardinality of a relationship only answers whether the number is | singular or plural | ; it does not answer with a specific plural number. | • | DDS3L1 | Identifying Relationships | 8 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
[NOTES] Potential محتمل 25

## SLIDE 8
Optionality and Cardinality | Examples: | • | • | • | Each | Each | Each | EMPLOYEE | must | hold | one and only one | JOB | JOB | may b | e | held by | one or more | EMPLOYEEs | PRODUCT must be classified by | one and only | one | PRODUCT TYPE | E | ac | h | P | R | OD | U | C | T | P | R | OD | U | C | T | s | • | TYPE | may | classify | one | or | more | DDS3L1 | Identifying Relationships | 9 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 9
Relationships | • | Relationships represents an association between two | or more entities. | The relationship line on the diagram is either solid | (mandatory) or | dashed | (optional). | • | • | These lines terminate | in either a "single toe" (one | instance) | or | a "crow's | foot | (one or more instance)." | DFo 2-5 | Relationships | 6 | Copyright © 2017, Oracle and/or its affiliates. All rights reserved.

## SLIDE 10
Relationships | • | A relationship is a bidirectional, significant | association between | two entities | entity and itself. | or | between | an | DEPARTMENT | EMPLOYEE | contain | assigned to | DFo 2-5 | Relationships | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 5 | The relationship line on the diagram is either | solid | (mandatory) or | dashed | (optional). | • | These lines terminate | in either a " | single | toe" (one | instance) | or | a " | crow's | foot | ( | one or more instance | )."

## SLIDE 11
Business Scenario 1 | • | What are the relationships in the following business | scenario? | “I | n | o | u | r | r | e | s | t | a | u | r | a | n | t, | a | c | u | s | t | omer | w | a | l | k | s | u | p | t | o | t | h | e | c | o | u | n | t | er | a | n | d | pl | ac | es | t | h | e | i | r | o | r | d | e | r | . | A | c | u | s | t | omer | c | a | n | o | r | d | er | f | or | hi | m | or | h | e | r | se | l | f | o | nl | y | , | or | f | or | him | / | h | e | r | se | l | f | a | n | d | ot | h | e | r | s | . | F | or | ex | a | m | pl | e, a | mot | h | er | o | r | d | e | r | s | f | or | h | e | r | se | l | f | a | n | d | h | er | c | hil | d | r | e | n | . | We consider | the mother to be the customer | who owns the order | and is responsible for payment. Over a period | • | • | of time, a customer | wants.” | can | place | as | many orders | as he | DDS3L1 | Identifying Relationships | 11 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 12
Business Scenario 1 | CUSTOMER | Linda | • | CUSTOMER places ORDERs: | optionality and cardinality | O | p | t | i | o | n | a | lit | y | = | M | u | s | t | or | m | a | y | ? | Each ORDER | must | be | placed by one ( | and only | one | ) CUSTOMER. | Each CUSTOMER | must | place | one or more | ORDERs. | Krishna | Mel | ORDER | • | • | - Apple pie | • | DDS3L1 | Identifying Relationships | 12 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | Order No. 10 | - Vegetarian platter | - Orange juice | Order No. 102 | Order No. 77 | - Hamburger | - Salad | - Fruit cup | Order No. 100 | - French fries | - Large soda

## SLIDE 13
Business Scenario 1 | CUSTOMER | Linda | • | • | Cardinality = | How many | ? | E | ac | h | O | R | D | E | R | m | u | s | t | b | e | pl | a | c | ed | b | y | o | n | e | a | n | d | o | nl | y | o | n | e | C | U | S | T | OM | E | R | . | Krishna | Mel | ORDER | • | Each CUSTOMER must | place | one | or | more | ORDERs. | - Apple pie | DDS3L1 | Identifying Relationships | 13 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | Order No. 10 | - Vegetarian platter | - Orange juice | Order No. 102 | Order No. 77 | - Hamburger | - Salad | - Fruit cup | Order No. 100 | - French fries | - Large soda

## SLIDE 14
Business Scenario 2 | • | • | A relationship can join one entity to itself. | Examine the following scenario: | – | “We need to keep track of our employees and their managers. | Every | employee has one manager | , including the managing | director who manages | him/herself. | Each | manager | can | manage | several | employees | .” | DDS3L1 | Identifying Relationships | 14 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 15
Business Scenario 2 | • | Since managers are also employees, | both | are | listed | in | the | same entity: EMPLOYEE. | RELATIONSHIP | Each | EMPLOYEE | may | EMPLOYEE | be managed | by | one and only one | Each | EMPLOYEE | may | manage | one | or | more | EMPLOYEEs | DDS3L1 | Identifying Relationships | 15 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 16
Components of a Relationship | • | The components of the relationship include the | following: | – | Name: | The label that appears close to the entity it is assigned to. Make sure that all relationship names are in lowercase | – | Cardinality: | The minimum and maximum number | in the relationship. | • | One and only one matching record | • | One or more matching records | – | Optionality: | Whether the relationship must exist | • | Optional (zero matching records) | • | Mandatory (at least one matching record in each entity) | of | values | DFo 2-5 | Relationships | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 10

## SLIDE 17
Components of a Relationship | • | When reading the business rule sentence, | following wording: | – | Optional: | Use "may be" or "may." | – | Mandatory: | Use "must be" or "must." | – | Line: | Use "one and only one." | – | Crow's feet: | Use "one or more." | Business rule | syntax | is as follows: | use | the | • | Each entity1 | {must be or may be}  relationship | name | {one or more or one and only one} | entity2. | DFo 2-5 | Relationships | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 11

## SLIDE 18
Components of | – | Name | – | Cardinality | – | Optionality | a | Relationship | One | Mandatory | DEPARTMENT | EMPLOYEE | contain | assigned to | Optional | Many | (crow's foot) | DFo 2-5 | Relationships | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 12

## SLIDE 19
Terminology | Key terms used | in | this | lesson | included: | • | • | • | Cardinality | Optionality | Relationship | DDS3L1 | Identifying Relationships | 16 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 20
Summary | In this lesson, you should have learned how to: | • | • | • | Interpret and describe relationship optionality | Interpret and describe relationship cardinality | Relate (connect or join) entities | by | applying | the | rules | of | cardinality | and | optionality | DDS3L1 | Identifying Relationships | 17 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 21
Database Design | 3-2 | ER | Diagramming | Conventions | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 22
Objectives | This lesson covers the following objectives: | • | Construct ER diagram components that represent | entities, attributes and relationships | according | to | diagramming | conventions | DDS3L2 | ER Diagramming Conventions | 3 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 23
Purpose | • | People speak different languages throughout the | world, but some | signs | are | understood | these signs. | globally | . | • | Guess | the | meaning | of | International Signs | 1 | 2 | 3 | 4 | 5 | 7 | 6 | DDS3L2 | ER Diagramming Conventions | 4 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 24
Shared Convention | A Shared | Convention | • | It is efficient to communicate | information in a way that can | easily understood by many | people. | ER diagramming is like that -- | may say or write things | be | • | you | differently | because of the way | you speak, your accent, and so | on, but everyone draws ER | diagrams according | conventions. | to | the | same | DDS3L2 | ER Diagramming Conventions | 6 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 25
HR System: EMPLOYEEs, JOBs, and | DEPARTMENTs | • | “We need to store data about each of our company’s | employees. We need to | track each employee's | first | name, last name, hire date and salary. For each | employee on | commission | , we also need to track | potential commission.” | “ | E | ac | h | em | pl | o | y | ee | i | s | a | ll | o | ca | t | ed | a | uniqu | e | em | pl | o | y | ee | nu | m | b | e | r | . | ” | “Our company is divided into | departments | . Each | his/her | • | • | employee reports to | accounting, sales, or | a department | - for example, | development.” | DDS3L2 | ER Diagramming Conventions | 7 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 26
HR | S | y | st | e | m | : | E | M | P | L | O | Y | EEs | , | JO | B | s | , | DEPARTMENTs | and | • | “We need to know the | department responsible | EMPLOYEE | # ID | * First Name | * Last Name | * Hire Date | * Salary | O | Commission | DEPARTMENT | # ID | * Name | for each employee. | department has a | unique number.” | “All employees hold | Each | works in | responsible | for | • | a | assigned | job | , and | we keep track | of the job title, max and | min salary for each job. | Every job has a unique | job id.” | JOB | # Job ID | * Title | * Max Salary | * Min Salary | assigned to | DDS3L2 | ER Diagramming Conventions | 8 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 27
ER Drawing Conventions | • | Entities are | represented by | softboxes. | E | n | t | i | ty | n | a | mes | g | o | i | n | t | h | e | soft | b | o | x | es. | E | n | t | i | ty | n | a | mes | a | r | e | a | l | w | a | y | s | s | in | g | ul | a | r | EMPLOYEE | • | • | JOB | and | written | with | all | capital | letters | . | DEPARTMENT | DDS3L2 | ER Diagramming Conventions | 9 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 28
Drawing Conventions | • | Attributes | are listed | the entity names. | under | DEPARTMENT | # ID | * Name | EMPLOYEE | # ID | * First Name | * Last Name | * Hire Date | * Salary | O | Commission | • | Mandatory | attributes | are | marked with an asterisk: | “*” | Optional | attributes are marked with a circle: | “o” | Unique identifiers | are | • | JOB | # Job ID | * Title | * Max Salary | * Min Salary | • | marked with a hash | sign: | “#” | DDS3L2 | ER Diagramming Conventions | 10 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 29
Drawing Conventions | • | Relationships | are lines | that connect entities. | These lines are either | solid or dashed | . | Single Toe | • | EMPLOYEE | # ID | * First Name | * Last Name | * Hire Date | * Salary | O | Commission | DEPARTMENT | # ID | * Name | works in | responsible | for | • | These lines terminate | in | either a “ | single toe | ” or a | “ | crow’s foot | ” at the end | Crow’s Foot | assigned | of each entity. | Y | ou | w | il | l | l | e | a | r | n | t | h | e | s | p | e | c | ific d | e | t | a | il | s | a | b | o | u | t | r | e | l | a | t | i | o | n | s | hip li | n | es | i | n | t | h | e | n | e | x | t | l | esso | n | . | JOB | # Job ID | * Title | * Max Salary | * Min Salary | • | assigned to | DDS3L2 | ER Diagramming Conventions | 11 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 30
Terminology | Key terms used in this | lesson | included: | • | • | • | • | Softbox | ER Diagramming | Crow’s Foot | Single | Toe | DDS3L2 | ER Diagramming Conventions | 12 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 31
Summary | In this lesson, you should have learned how to: | • | Construct ER diagram components that represent | entities and attributes | conventions | according | to | diagramming | DDS3L2 | ER Diagramming Conventions | 13 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 32
Database | 3-3 | Design | Speaking | ERDish | & | Drawing | Relationships | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 33
Objectives | This lesson covers the following objectives: | • | State relationships between entities in precise words | (ERDish) | • | Draw | and | label | relationships | correctly | on | an | ERD | DDS3L3 | Speaking ERDish & Drawing Relationships | 3 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 34
Purpose | • | Most businesses use industry-specific terminology ( | words | which have a special meaning within that business | ) in | order to communicate information. | Data modeling uses industry-specific terminology as well, which we will call | ERDish | for the purposes of this class. ERDish— | the vocabulary | used | to clearly communicate | the | business rules that are captured on an ERD—will give you | a common language both when collecting the business | rules from your client and communicating them to the | • | • | Database Administrators | who | will | implement your design. | DDS3L3 | Speaking ERDish & Drawing Relationships | 4 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 35
ERD Language | • | ERDish is | the language | we use to | state | relationships | between entities in an ERD. | Y | ou | h | a | v | e | a | l | r | e | a | d | y | b | een | s | p | e | a | k | in | g | a | n | d | w | ri | t | in | g | i | t | , | w | h | en | y | ou | id | e | n | t | ifi | ed | r | e | l | a | t | i | o | n | s | hi | p | s | a | n | d | s | p | e | c | ifi | ed | o | p | t | i | o | n | a | lit | y | a | n | d | c | a | r | din | a | lit | y | . | • | • | We are simply breaking down each ERDish | sentence | into | its | components. | Breaking Down ERDish | work in | EMPLOYEE | DEPARTMENT | responsible | for | DDS3L3 | Speaking ERDish & Drawing Relationships | 5 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 36
The Components of ERDish | • | • | • | • | • | • | EACH | Entity A | O | P | TI | ON | AL | IT | Y | ( | m | u | s | t | b | e/m | a | y | b | e) | REL | A | TI | ON | SH | I | P | N | AME | CARDINALITY | (one | and | only | one/one | or | more) | Entity | B | DDS3L3 | Speaking ERDish & Drawing Relationships | 6 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 37
The Components of ERDish | • | Since each relationship has | two sides | , we read the | relationship from | left to right | (or | top to bottom | , | first | depending on the | ERD | layout). | Breaking Down ERDish | 1. | 2. | 3. | EACH | Entity A OPTIONALITY | (must be/may be) | RELATIONSHIP | NAME | C | ARD | IN | A | L | I | T | Y | ( | o | ne | and only one/one | or more) | Entity B | work in | EMPLOYEE | DEPARTMENT | 4. | 1. | 2. | 3. | 4. | 5. | 6. | EACH | EMPLOYEE | (entity A) | MUST | ( | optionality | , solid line) | WORK IN | (relationship name) | ONE | (AND ONLY ONE) | (cardinality, single toe) | DEPARTMENT | (entity B) | 5. | 6. | DDS3L3 | Speaking ERDish & Drawing Relationships | 7 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 38
The Components of ERDish | • | Now we read the | relationship from | right to left | . | Breaking Down ERDish | 1. | 2. | 3. | EACH | Entity B OPTIONALITY | (must be/may be) | RELATIONSHIP | NAME | C | ARD | IN | A | L | I | T | Y | ( | o | ne | and only one/one | or more) | Entity A | EMPLOYEE | DEPARTMENT | responsible | for | 4. | 1. | 2. | 3. | 4. | 5. | 6. | EACH | DEPARTMENT | (entity B) | MAY BE | (optionality, dotted line) | RESPONSIBLE FOR | (relationship name) | ONE OR MORE | (cardinality, crow’s foot) | EMPLOYEE | (entity A) | 5. | 6. | DDS3L3 | Speaking ERDish & Drawing Relationships | 8 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 39
The Components of ERDish | • | Now | bring | it all together. | work in | EMPLOYEE | DEPARTMENT | responsible | for | 1. EACH | 2. EMPLOYEE | 1. EACH | 2. DEPARTMENT | (entity B) | 3. MAY BE | (optionality, dotted line) | 4. RESPONSIBLE FOR | (relationship name) | 5. ONE OR MORE | (cardinality, crow’s foot) | 6. EMPLOYEE | (entity B) | (entity A) | 3. MUST | (optionality, solid line) | 4. WORK IN | (relationship name) | 5. ONE AND ONLY ONE | (cardinality, | single toe) | 6. DEPARTMENT | (entity B) | DDS3L3 | Speaking ERDish & Drawing Relationships | 9 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 40
ERDish Example | Because a relationship | h | a | s | t | w | o | s | i | d | e | s | , | f | i | r | s | t | r | e | a | d | o | n | e | s | i | d | e | f | r | o | m | l | e | f | t | t | o | ri | g | h | t | . | BOOK | AUTHOR | written by | 1 | . | E | A | C | H | 2. | 3. | 4. | 5. | 6. | BOOK | (entity A) | MUST BE | (optionality, solid line) | WRITTEN BY | (relationship name) | ONE (AND ONLY ONE) | (cardinality, single toe) | AUTHOR | (entity B) | BOOK | AUTHOR | Next, read the | rel | a | t | i | o | n | s | h | i | p | f | r | o | m | ri | g | h | t | to | l | e | f | t. | the author of | 1. | 2. | 3. | 4. | 5. | 6. | EACH | AUTHOR | (entity B) | MAY BE | (optionality, dotted line) | THE AUTHOR OF | (relationship name) | ONE OR MORE | (cardinality, crow's foot) | BOOK | (entity A) | DFo 2-6 | Entity Relationship Modeling (ERDs) | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 19

## SLIDE 41
Case | Scenario | written by | BOOK | AUTHOR | BOOK | AUTHOR | the author of | 1. | 2. | 3. | 4. | 5. | EACH | BOOK | (entity A) | MUST BE | (optionality, solid line) | WRITTEN BY | (relationship name) | ONE AND ONLY ONE | (cardinality, | single toe) | AUTHOR | (entity B) | 1. | 2. | 3. | 4. | 5. | EACH | AUTHOR | (entity B) | MAY BE | (optionality, dotted line) | THE AUTHOR OF | (relationship name) | ONE OR MORE | (cardinality, crow's | foot) | BOOK | (entity A) | 6. | 6. | BOOK | AUTHOR | written by | the author of | DFo 2-6 | Entity Relationship Modeling (ERDs) | Copyright © 2017, Oracle and/or its affiliates. All rights reserved. | 20

## SLIDE 42
Terminology | Key terms | used | in | this | lesson | included: | • | ERDish | DDS3L3 | Speaking ERDish & Drawing Relationships | 10 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 43
Summary | In this lesson, you should have learned how to: | • | State relationships between entities in precise words | (ERDish) | • | Draw | and | label | relationships | correctly | on | an | ERD | DDS3L3 | Speaking ERDish & Drawing Relationships | 11 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 44
Database | 3-4 | Design | Matrix | Diagrams | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 45
Objectives | This lesson covers the following objectives: | • | • | Identify relationships using a matrix diagram | Draw | an | ERD | from | a | matrix | diagram | DDS3L4 | Matrix Diagrams | 3 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 46
Purpose | • | It is useful to | know more than | one way to | discover | relationships. | DDS3L4 | Matrix Diagrams | 4 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | T | E | A | CH | E | R | C | O | U | R | SE | CLASS | It may be simple enough to identify relationships given three entities. | T | E | A | CH | E | R | C | O | U | R | S | E | S | T | U | D | E | NT | C | L | A | S | S | E | X | A | M | S | E | M | E | S | T | ER C | A | F | ETE | R | I | A | G | R | A | DE | C | L | U | B | C | L | A | SS | R | OO | M | S | CH | OO | L | S | CH | OOL | E | Q | U | I | PM | E | NT | … | e | t | c. | M | AI | N | TE | N | A | NCE | S | T | A | FF | But what about finding relationships when you have thirteen or more entities?

## SLIDE 47
Purpose | • | Using a matrix | diagram, | especially when | you are dealing | with many | entities, | is a | good way to | make sure that | you | haven’t | missed | any | relationships | . | DDS3L4 | Matrix Diagrams | 5 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | T | E | A | CH | E | R | C | O | U | R | SE | CLASS | It may be simple enough to identify relationships given three entities. | T | E | A | CH | E | R | C | O | U | R | S | E | S | T | U | D | E | NT | C | L | A | S | S | E | X | A | M | S | E | M | E | S | T | ER C | A | F | ETE | R | I | A | G | R | A | DE | C | L | U | B | C | L | A | SS | R | OO | M | S | CH | OO | L | S | CH | OOL | E | Q | U | I | PM | E | NT | … | e | t | c. | M | AI | N | TE | N | A | NCE | S | T | A | FF | But what about finding relationships when you have thirteen or more entities?

## SLIDE 48
Business Scenario | • | "I work for a travel agency. | I keep a record of the | countries | that our | customers | have visited and | the | landmarks | they’ve | seen in | each country | . It | helps us customize tours | for them." | We can use the matrix diagram to uncover relationships. | TRAVELER | COUNTRY | LANDMARK | • | MATRIX DIAGRAM | DDS3L4 | Matrix Diagrams | 6 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | TRAVELER | COUNTRY | LANDMARK | TRAVELER | COUNTRY | LANDMARK

## SLIDE 49
Matrix Diagrams | • | To avoid | confusion | , be | consistent | in | writing to | direction. | and | reading | from | the | matrix | only | in | one | correct: | COUNTRY visited by TRAVELER | correct: | LANDMARK seen by TRAVELER | incorrect: | TRAVELER visited by COUNTRY | incorrect: | TRAVELER seen by LANDMARK | DDS3L4 | Matrix Diagrams | 7 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved. | TRAVELER | COUNTRY | LANDMARK | TRAVELER | visit | have seen | COUNTRY | visited by | the location of | LANDMARK | seen by | located in

## SLIDE 50
Matrix Diagrams | • | Relationships | discovered | via | the | matrix | diagram are then | drawn on the | ERD. | M | a | t | ri | x | di | ag | r | a | ms | d | o | n | ot | s | h | o | w | o | p | t | i | o | n | a | lit | y | a | n | d | c | a | r | din | a | lit | y | . | • | DDS3L4 | Matrix Diagrams | 8 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 51
Matrix Diagrams | • | Each | COUNTRY | may be visited by | one or more | TRAVELERs. | Each | TRAVELER | may visit one or | • | more | COUNTRY. | DDS3L4 | Matrix Diagrams | 9 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 52
Relationship Matrix: | Collecting Information | A relationship matrix can be used to | collect | initial | information | entities. | about | the | relationships | among | a | set | of | DFo 3-6 | Relationships | Copyright © 2015, Oracle and/or its affiliates. All rights reserved. | 17 | CUSTOMER | ITEM | ORDER | WAREHOUSE | CUSTOMER | place | ITEM | contained on | stored in | ORDER | placed by | issued for | WAREHOUSE | store

## SLIDE 53
Relationship Matrix: Mapping the Contents | Map | the contents | of | the relationship matrix | to | an | ERD. | ORDER | ITEM | issued for | contained on | stored in | placed by | store | place | CUSTOMER | WAREHOUSE | DFo 3-6 | Relationships | Copyright © 2015, Oracle and/or its affiliates. All rights reserved. | 18

## SLIDE 54
Terminology | Key terms used in | this | lesson | included: | • | Matrix | diagram | DDS3L4 | Matrix Diagrams | 10 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.

## SLIDE 55
Summary | In this lesson, you should have learned how to: | • | • | Identify relationships using a matrix diagram | Draw | an | ERD | from | a | matrix | diagram | DDS3L4 | Matrix Diagrams | 11 | Copyright © 2019, Oracle and/or its affiliates. All rights reserved.
