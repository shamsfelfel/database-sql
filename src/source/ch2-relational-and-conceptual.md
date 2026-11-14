# Source: chapter 2 — `db ch2.pptx`, 60 slides

*Introduction to Database* — Eng. Noor A. Nashwan, Computer Engineering Dept., UCAS.
Built from Oracle Academy **Database Foundations 2-1, 1-3, 2-2** and **Database Design
2-2, 2-3**.

Almost every slide in this deck is a photograph of a slide, so this file is a
transcription: slide by slide, what it says, plus the speaker notes where the original
`.pptx` carried them (marked **NOTES**). Where a slide is a title card or a photo with
no content it is marked so. **This is the authority for what chapter T2 teaches.**

---

## Slide 1 — title card
Eng. Noor A. Nashwan · Computer Engineering Dept., UCAS · Course: *Introduction to
Database* · Lecture subject: **Relational Database**.

## Slide 2 — Oracle title card
**Database Foundations 2-1 — Relational Databases.**

## Slide 3 — Objectives (DFo 2-1)
- Describe the features of a single table
- Describe the features and rules of a relational database
- Describe the advantages and disadvantages of database types
- Define relational tables and key terms

## Slide 4 — Single Table
A **flat file database** is a type of database that stores data in a single table.
Flat file databases are generally in plain-text form, where each line holds only one
record.

Example table shown:

| | CUSTOMER_ID | FIRST_NAME | LAST_NAME | ADDRESS | CITY |
|---|---|---|---|---|---|
| Record 1 | CN0001 | Rick | Carmen | King Street | Boston |
| Record 2 | CN0002 | Nick | Doris | 6 Rotrat | Boston |
| Record 3 | CN0003 | Mary | Pink | Centrale | Lagos |

**NOTES.** A flat file database is simpler and less expensive to use. It fits the needs
of many small businesses and home users. A flat file has many limitations because it
contains ALL data in ONE table. More disadvantages: no support for multi-user access;
limited to smaller databases; limited functionality; integrity issues; no security; no
backup and recovery; no protection for data in concurrent access.

## Slide 5 — Advantages and Disadvantages of a Flat File Database

| Advantages | Disadvantages |
|---|---|
| Easy to understand | Less security |
| Easy to implement | Data inconsistency |
| Easy to extract information | Data redundancy |
| All records stored in one place | Cumbersome sharing of information |
| Simple sorting and filtering of reports | Slow for huge databases |
| Less hardware and software requirements | |

## Slide 6 — Example of a Flat File Database

| | AUTHOR_ID | AUTHOR_NAME | TITLE |
|---|---|---|---|
| Record 1 | AD0001 | Oscar Wilde | A Vision |
| Record 2 | AD0002 | Leo Tolstoy | War and Peace |
| Record 3 | AD0003 | Oliver Goldsmith | Citizen of the World |
| Record 4 | AD0003 | Oliver Goldsmith | Androcles and the Lion |

> Notice that both the details for the books and authors are stored in this single
> table, and there is a repetition of values.

**This table is the chapter's opening pain.** `AD0003 / Oliver Goldsmith` appears twice.

**NOTES (slide 6 of the original).** A relational database management system (RDBMS)
stores data in tables. Each table is given a name by the user who creates it, usually
one that correlates to the data stored in it — STUDENTS, EMPLOYEES, LOCATIONS. When a
table is created, the user also creates and names columns for the characteristics stored
for each record.

## Slide 7 — Relational Databases
- A relational database presents information in tables with rows and columns.
- Each column represents a particular type of information (a **field**), and each row
  lists one **record**.
- The tables are then related to one another by using a **common field**.
- A unique field called a **key** is used to identify each record in a relational
  database.

## Slide 8 — Relational Database: Example
`STUDENTS(ID, LAST_NAME, DATE_OF_BIRTH, ADDRESS, COURSE_ID)` and
`COURSES(ID, NAME, DURATION)`. `STUDENTS.ID` is labelled **Primary Key**,
`STUDENTS.COURSE_ID` is labelled **Foreign Key**, and the dashed line between
`COURSE_ID` and `COURSES.ID` is labelled **Relationship**.

- Each table is assigned a `PRIMARY_KEY` column which uniquely identifies the entity
  instance.
- A `PRIMARY_KEY` column in one table is designated as a `FOREIGN_KEY` column in a
  related table to form a relationship between the tables.
- This relationship between STUDENTS and COURSES lets you store the data and query it to
  determine the specific courses a student is attending (or has attended).

**NOTES (original slide 9).** The PAYROLL_ID column is a unique key: the system does not
allow two rows with the same payroll_id. The department_id foreign key refers to a row in
the DEPARTMENTS table — Dana Smith works in department 10; to know more about her
department, look for `department_id = 10` in DEPARTMENTS.

## Slide 9 — Advantages of a Relational (Multiple-Table) Database
Less redundancy · Avoidance of inconsistency · Efficiency · Data integrity ·
Confidentiality.

**NOTES.** *Less redundancy*: in a flat file there is much redundancy — author names are
stored many times. *Avoidance of inconsistency*: if the same piece of information is
stored in more than one place, any change must be made everywhere it is stored.
*Efficiency*: a database is usually more efficient, because a piece of information is
stored in fewer locations. *Data integrity*: easier to maintain, because strong data
types are assigned to each column. *Confidentiality*: easier to maintain when storage is
centralised in one location.

## Slide 10 — Relational Tables
A table is a simple structure where data is organized and stored.

`EMPLOYEES(EMPLOYEE_ID, LAST_NAME, FIRST_NAME, DEPARTMENT_ID, PAYROLL_ID, NICKNAME)`

| EMPLOYEE_ID | LAST_NAME | FIRST_NAME | DEPARTMENT_ID | PAYROLL_ID | NICKNAME |
|---|---|---|---|---|---|
| 100 | SMITH | DANA | 10 | 21215 | Dana |
| 310 | ADAMS | TYLER | 15 | 59877 | Ty |
| 210 | CHEN | LAWRENCE | 10 | 1101 | Larry |
| 405 | GOMEZ | CARLOS | 10 | 52 | Chaz |
| 378 | LOUNGANI | NEIL | 22 | 90386 | Neil |

Labelled on the diagram: **columns** across the top, **rows** down the side,
`EMPLOYEE_ID` = Primary Key column (PK), `DEPARTMENT_ID` = Foreign Key column (FK),
`PAYROLL_ID` = Unique Key column (UK).

## Slide 11 — Rules for Relational Database Tables
1. Each table has a distinct name.
2. Each table may contain multiple rows.
3. Each table has a value to uniquely identify the rows.
4. Each column in a table has a unique name.
5. Entries in columns are single values.
6. Entries in columns are of the same kind.
7. Order of rows and columns is insignificant.

## Slide 12 — Key Terms
- **Table** — a basic storage structure
- **Column** — attribute that describes the information in the table
- **Primary Key** — the unique identifier for each row
- **Foreign Key** — a column that refers to a primary key column in another table
- **Row** — data for one table instance
- **Field** — the one value found at the intersection of a row and column

## Slide 13 — title card
**Database Foundations 2-2 — Conceptual and Physical Data Models.**

## Slide 14 — Objectives (DFo 2-2)
Describe a conceptual data model · a logical data model · a physical data model ·
analyze the similarities and differences between conceptual and physical data models.

## Slide 15 — What Is a Conceptual Model?
- Captures the functional and informational needs of a business.
- Is based on current needs, but may reflect future needs.
- Addresses the needs of a business (what is conceptually ideal), but does not address
  its implementation (what is physically possible).

## Slide 16 — What Is a Conceptual Model? (2)
**Identifies:** important entities (objects that become tables in the database);
relationships among entities.
**Does not specify:** attributes (objects that become columns or fields in the
database); unique identifiers (the attribute that becomes the primary key).

## Slide 17 — Database Development Process (DFo 1-3)
Business Information Requirements → **Strategy and Analysis** → Conceptual Data Modeling
→ **Design** → Database Design → **Build** → Database Build.

## Slide 18 — Purpose of Conceptual Modeling
When you design a house, you eventually want to see the house built. Even if you do not
do the actual construction, you need to understand the builder's terms to help them take
your conceptual design and make it a physical reality. When you are able to recognize and
analyze information, you can better understand how things work and potentially make them
better. The database conceptual model can be used for further discussion between
designers, database administrators and application developers.

**NOTES.** A logical data model describes the data in as much detail as possible, without
regard to how it will be physically implemented in the database. It is normally derived
from a conceptual data model. (Optionality and cardinality come later in the course.)

## Slide 19 — What Is a Logical Model?
- Includes all entities and relationships among them.
- Is called an **entity relationship model (ERM)**.
- Is illustrated in an **ERD**.
- Specifies all attributes and UIDs for each entity.
- Determines attribute optionality.
- Determines relationship optionality and cardinality.

**NOTES.** Physical modeling deals with the conversion of the logical data model to a
relational database model. Each relational model can have one or more physical models,
one for each RDBMS you deploy to. (Views, indexes and other database objects come later.)

## Slide 20 — What Is a Physical Model?
- Is an extension to a logical data model: defines table definitions, data types and
  precision; identifies views, indexes and other database objects.
- Describes how the objects should be implemented in a specific database.
- Shows all table structures, including columns, primary keys and foreign keys.

## Slide 21 — Steps to Create a Physical Data Model
Model entities as tables → model relationships as foreign keys → model attributes as
columns → modify the physical data model based on physical constraints and requirements.

**NOTES (slide 21 of the original).** The conceptual model is concerned with the
real-world view and understanding of data. The physical model specifies how it will be
executed in a particular database management instance.

## Slide 22 — Conceptual and Physical Models
- The art of planning, developing and communicating produces a desired outcome.
- **Data modeling** is the process of capturing the important concepts and rules that
  shape a business and depicting them visually in a diagram.
- This diagram becomes the blueprint for designing the physical thing.
- The client's dream (conceptual model) becomes a physical reality (physical model).

## Slide 23 — Conceptual/Logical Model: Case Scenario
Faculty: *"Matt, I would like you to create a simplified library database to store the
book details in our department."*
Matt: *"Sure. I will start by identifying the entities and attributes and their
relationships."*

**NOTES.** The diagram was created using Oracle SQL Data Modeling tool, covered in
Section 4 of the course material.

## Slide 24 — Case Scenario: Creating a Conceptual Model
A conceptual data model documents important entities and how they relate to each other.

Entities and relationships drawn (no attributes):
- `MEMBER` — *borrow* / *borrowed by* — `BOOK`
- `BOOK` — *written by* / *writer of* — `AUTHOR`
- `BOOK` — *published by* / *publish* — `PUBLISHER`

## Slide 25 — Case Scenario: Creating a Logical Model
A logical data model documents the information requirements of the business. Now with
attributes, UIDs and an intersection entity:

- `BOOK TRANSACTION` — `# * Tran Date`, `o Type`
- `BOOK` — `# * Id`, `U * Title`
- `AUTHOR` — `# * Id`, `* Name`
- `MEMBER` — `# * Id`, `* First name`, `* Last name`, `* Street Address`, `* City`,
  `o State`, `* ZIP`
- `PUBLISHER` — `# * Id`, `* Name`
- `BOOK AUTHOR` — the intersection entity between BOOK and AUTHOR
  (*written by* / *writer*)

Relationships: BOOK TRANSACTION *be included in* BOOK · MEMBER *make* BOOK TRANSACTION ·
BOOK *published by* PUBLISHER.

## Slide 26 — Physical Model: Case Scenario
Faculty: *"Matt, I want to know the specifications for all tables and columns required in
the simplified library database."*
Matt: *"Sure. I will convert the entities and their attributes into tables and columns."*

## Slide 27 — Case Scenario: Creating a Physical Model
**Modeling performed:** Entities → Tables. Attributes → Columns. Relationships →
Foreign keys.

```
BOOK_AUTHORS     PF* BOOKS_Id VARCHAR2(15), PF* AUTHORS_Id NUMBER
                 BOOK_AUTHORS_PK (BOOKS_Id, AUTHORS_Id)
                 BOOK_AUTHORS_BOOKS_FK (BOOKS_Id), BOOK_AUTHORS_AUTHORS_FK (AUTHORS_Id)
BOOKS            P* Id VARCHAR2(15), U* Title VARCHAR2(50), F PUBLISHERS_Id NUMBER
                 BOOKS_PK (Id), BOOKS_Title_UK (Title), BOOKS_PUBLISHERS_FK (PUBLISHERS_Id)
BOOK_TRANSACTIONS P* Tran_Date DATE, Type VARCHAR2, F* MEMBERS_Id NUMBER,
                 PF* BOOKS_Id VARCHAR2(15)
                 BOOK_TRANSACTIONS_PK (Tran_Date, BOOKS_Id)
                 BOOK_TRANSACTIONS_BOOKS_FK (BOOKS_Id), ..._MEMBERS_FK (MEMBERS_Id)
MEMBERS          P* Id NUMBER, * First_Name, * Last_Name, * Street_Address, * City,
                 State, * ZIP  -- all VARCHAR2;  MEMBERS_PK (Id)
PUBLISHERS       P Id NUMBER, * Name VARCHAR2(50);  PUBLISHERS_PK (Id)
AUTHORS          P Id NUMBER, * Name VARCHAR2(30);  AUTHORS_PK (Id)
```

## Slide 28 — Summary (DFo 2-2)
Describe a conceptual model · a logical model · a physical model · analyze the
similarities and differences between conceptual and physical data models.

## Slide 29 — title card
**Database Design 2-2 — Entities, Instances, Attributes, and Identifiers.**

## Slide 30 — Objectives (DDS 2-2)
- Define and give an example of an entity
- Distinguish between an entity and an instance of an entity
- Name and describe attributes for a given entity
- Distinguish between an attribute and its value
- Distinguish between mandatory and optional attributes, and between volatile and
  nonvolatile attributes
- Select and justify a unique identifier (UID) for an entity

**NOTES.** What kinds of information would we need to know, or work with, in each of
these jobs: IT programmer/consultant, bank manager, restaurant cashier, artist, parent?

## Slide 31 — Purpose of Entities
- Knowing how to organize and classify data makes it possible to draw useful conclusions
  about seemingly random facts.
- Our technology-rich world produces vast quantities of facts in need of structure and
  order.
- It is important to learn about entities because they are the things about which we
  store data.
- For example: a school needs to store data about (as a minimum) STUDENTs, TEACHERs,
  COURSEs, ROOMs, GRADEs.

## Slide 32 — Purpose of Attributes
- Attributes provide more specific information about an entity.
- Attributes help you distinguish between one instance and another by providing greater
  detail for the entity.
- For example: in a restaurant, you need to list the individual items on a customer's
  order so that you can calculate the bill. When building several sales reports, you must
  be able to identify a specific report from the list of reports.

## Slide 33 — Purpose of Unique Identifiers
- It is important to learn about unique identifiers because they distinguish one instance
  of an entity from another.
- For example: in a classroom, you need to distinguish between one student and another.
  When classifying your CD collection, you need to distinguish between one CD and
  another. When listing transactions on a financial statement, you need to distinguish
  between one transaction and another.

## Slide 34 — Entity Defined
An entity is:
- "Something" of significance to the business about which data must be known
- A name for a set of similar things that you can list
- Usually a noun
- Examples: objects, events, people
- Entities have **instances**.
- An **instance** is a single occurrence of an entity.

**NOTES.** Example: the entity FRUIT has instances orange, apple, peach, kiwi, cherry,
lime, lemon, etc.

## Slide 35 — Entities and Instances

| Entities | Instances |
|---|---|
| PERSON | Mahatma Gandhi, George Washington |
| PRODUCT | Nike Air Jordan, Gibson Les Paul Custom |
| PRODUCT TYPE | Shoe, Video Game |
| JOB | Electrician, IT Technician |
| SKILL LEVEL | Beginner, Expert |
| CONCERT | U2 at the Palladium, Beyoncé at the Greek Theatre L.A. |
| ANIMAL | Dog, Cat |
| CAR | Volkswagen Beetle, Toyota Corolla |

**NOTES.** Nontangible: incapable of being perceived by the senses. Tangible: perceptible
to the senses, especially the sense of touch.

## Slide 36 — Entities and Instances (2)
- A Dalmatian, a Siamese cat, a cow and a pig are instances of ANIMAL.
- A convertible, a sedan and a station wagon are instances of CAR.
- Some entities have many instances and some have only a few.
- Entities can be: **tangible**, like PERSON or PRODUCT; **intangible**, like SKILL
  LEVEL; **an event**, like CONCERT.

**NOTES.** It would not make sense to have an entity with only one instance.

## Slide 37 — Entities and Instances (3) — the DOG question
- Is DOG an instance or an entity?
- **It depends:**
  - If we consider many different kinds of animals, it makes sense to think of the
    entity ANIMAL to include instances DOG, CAT, HORSE and so on.
  - But what if we run a dog-breeding business? We will need to keep data on many
    different breeds of dog, but not on other species of animal.
  - For a dog-breeder, it is more natural to think of an entity DOG to include instances
    TERRIER, POODLE, LABRADOR and so on.

**NOTES.** Assume that all entities have at least one attribute (exceptions come later).
Usually there are many attributes for an entity, but we are interested only in those of
importance to the business. Example: the entity FRUIT has attributes name, type, region
and date picked; an instance would be *Orange, citrus, west coast, 10-APR-2005*.

## Slide 38 — What is an Attribute?
- Like an entity, an attribute represents something of significance to the business.
- An attribute is a specific piece of information that helps: **describe** an entity ·
  **quantify** · **qualify** · **classify** · **specify** an entity.
- An attribute has a single value.

**NOTES.** Data type: a classification identifying one of various types of data, stating
the possible values for that type, the operations that can be done on it, and the way the
values are stored. Single-valued: can only have one value at any point for each instance
in the entity.

## Slide 39 — Attributes and data types
Attributes have values. An attribute value can be a number, a character string, a date,
an image, a sound, etc. These are called **data types** or **formats**. Every attribute
stores one piece of data of one specific data type.

| Entities | Attributes |
|---|---|
| CUSTOMER | family name, date of birth, shoe size, town of residence, email |
| CAR | model, weight, catalog price |
| ORDER | order date, ship date |
| JOB | title, description |
| TRANSACTION | amount, transaction date |
| EMPLOYMENT CONTRACT | start date, salary |

**NOTES.** The only attributes we need to model are those the business wants to track —
you may track shoe size for a shoe store but not for a grocery store. Every attribute has
a data type: "name" is a character string, "salary" is a number, "photograph" is an
image. An attribute must be **single-valued**: an instance can have only one value for
each attribute at any point in time. The value may change over time. The entity CAR may
have attributes "model" and "colour": only one value each at one time for each individual
car; the model stays the same over the car's lifetime, its colour can change.

## Slide 40 — Attributes (single-valued)
What is the data type of each attribute in CUSTOMER? For example: family name is a
character string. Attributes are single-valued: each attribute can have only one value
(at any point in time) for each instance of the entity.

*(The table is repeated with `age` in place of `date of birth` — the set-up for the next
slide.)*

## Slide 41 — Attributes (volatile / nonvolatile)
- Some attributes (such as **age**) have values that constantly change. These are called
  **volatile** attributes.
- Other attributes (such as **order date**) will rarely change, if ever. These are
  **nonvolatile** attributes.
- If given a choice, select the nonvolatile attribute.
- For example, use **birth date** instead of **age**.

**NOTES.** Volatile: highly changeable. One reason for preferring nonvolatile attributes
is that volatile attributes need updating frequently — age must be updated every year.
How long would that take with 1 million customers? If we need a customer's age we can
deduce it from the birth date.

## Slide 42 — Attributes (mandatory / optional)
- Some attributes must contain a value — these are **mandatory** attributes. For example,
  in most businesses that track personal information, name is required.
- Other attributes may either contain a value or be left **null** — these are **optional**
  attributes. For example, cell phone number is often optional except in mobile or
  wireless applications.

**NOTES.** Mandatory: required. Null: a value that is unavailable, unassigned, unknown or
empty; it is neither a zero nor a space. Optional: not required.

## Slide 43 — Attributes (context decides)
Example: email address could be a **mandatory** attribute for EMPLOYEE in an email
application, but an **optional** attribute for CUSTOMER in an online catalog.

## Slide 44 — Attributes (class exercise)
If we were to model a Human Resource system, we would have an entity to store data for
each worker called EMPLOYEE. What attributes does EMPLOYEE have? Give one or two examples
of the values each EMPLOYEE attribute might contain.

**NOTES.** Possible answers: First Name, Last name, Address, Salary, Social Security
Number.

## Slide 45 — Identifiers
- An EMPLOYEE has a **unique identifier (UID)**.
- A UID is either a single attribute or a combination of multiple attributes that
  distinguishes one employee from another.
- How do you find a specific employee that works for the company?
- What information uniquely identifies one EMPLOYEE?

**NOTES.** What combination of traits uniquely identifies a single STUDENT? The student's
name? No — there could be two students with the same name. Date of birth? No — there
could be two students born on the same day. For almost any combination of student
attributes, it is at least possible that two students have the same combination of
values. This is why for entities such as STUDENT we create an artificial student number
or student ID.

## Slide 46 — Identifiers (2)
- Think about all the students in the classroom.
- Each student is described by several traits or attributes.
- Which attribute or attributes allow you to pick a single student from the rest of the
  class?
- That is the student's UID.

## Slides 47–48 — Terminology (DDS 2-2)
Attribute · Data type · Entity · Instance · Mandatory · Intangible · Null · Optional ·
Single valued · Tangible · Unique identifier (UID) · Volatile.

## Slide 49 — Summary (DDS 2-2)
As the objectives on slide 30.

**NOTES.** The ERD (Entity Relationship Diagram) is a tool for discussion, especially when
designing a system. It gives you and the customer something to react to, validate and
correct. Other examples that illustrate the point: getting a haircut based on a picture in
a magazine (have you ever forgotten the picture?); having a dress made from a picture;
describing a gift to your parents who have never seen the item. Pictures help!

## Slide 50 — title card
**Database Design 2-3 — Entity Relationship Modeling and ERDs.**

## Slide 51 — Objectives (DDS 2-3)
- Define the meaning of "implementation-free" as it relates to data models and database
  design implementation
- List the four goals of entity relationship modeling
- Identify an entity relationship diagram (ERD)

**NOTES.** Entity relationship diagram (ERD): a drawing used to represent a data model.
Students will need to know what an ERD looks like — they will be drawing ERDs in the next
section and throughout the course. This is where you become architects and draw your
clients' "dream" models.

## Slide 52 — Purpose
An entity relationship diagram (ERD) is a consistent tool that can be used to represent
the data requirements of a business **regardless of the type of database that is used,
and even in the absence of one!**

**NOTES.** An Entity Relationship Diagram (ERD) is a picture, a representation of the
model or a part of the model.

## Slide 53 — What is an Entity Relationship Model?
An Entity Relationship Model:
- Is a list of all entities and attributes as well as all relationships between the
  entities that are of importance.
- Provides background information such as entity descriptions, data types and
  constraints.
- Note: the model does not require a diagram, but the diagram is typically a very useful
  tool.

## Slide 54 — Goals of ER Modeling
There are four goals of ER modeling:
1. **Capture all required data**
2. **Ensure that data appears only once**
3. **Model no data that is derivable from other data already modeled**
4. **Locate data in a predictable, logical place**

## Slide 55 — Goals of ER Modeling (why)
- Imagine your school record — from your earliest days in school, data about you was
  captured.
- Your absences, discipline history, classes taken and grades earned are probably part of
  your record.
- This data needs to be stored in a logical way, to allow accessing and updating records
  to be carried out easily and efficiently.
- Following the goals of ER Modeling helps to achieve this.

## Slides 56–57 — H.R. Department Business Scenario
> I manage the Human Resources Department for a large company. We need to store data
> about each of our company's employees. We need to track each employee's first name, last
> name, job or position, hire date and salary. For each employee on commission, we also
> need to track his/her potential commission. Each employee is assigned a unique employee
> number.

> Our company is divided into departments. Each employee reports to a department — for
> example, accounting, sales or development. We need to know the department responsible
> for each employee and the department location. Each department has a unique number.

> Some of the employees are managers. We need to know each employee's manager and all of
> the employees that are managed by each manager.

**NOTES (slide 57).** An ERD is the design plan for a database, just as a set of
blueprints is the design plan for a house. Untrained individuals cannot accurately read or
communicate the details of the plans, but the details are important in the building phase
of the project. You will learn how to draw and interpret all of the symbols on the ERD in
the lessons that follow.

## Slide 58 — H.R. Department ERD
This is the diagram the chapter builds towards. Read it carefully:

```
EMPLOYEE                    DEPARTMENT              LOCATION
# Employee ID               # Department ID         # Location ID
* First Name                * Name                  * Street Address
* Last Name                                         * Postal Code
* Hire Date                                         * City
* Salary                                            * State Province
o Commission

EMPLOYEE  --(works in / responsible for)--  DEPARTMENT
          crow's foot at EMPLOYEE, single toe at DEPARTMENT, dashed
DEPARTMENT --(located in / address of)--    LOCATION      dashed
EMPLOYEE  --(manager of / managed by)--     EMPLOYEE      recursive, dashed
EMPLOYEE  --(assigned / assigned to)--      JOB           dashed
LOCATION  --(situated / site of)--          COUNTRY       dashed
COUNTRY   --(part of / comprised of)--      REGION        dashed

JOB                 COUNTRY             REGION
# Job ID            # Country ID        # Region ID
* Title             * Country Name      * Region Name
* Max Salary
* Min Salary
```

## Slide 59 — Terminology (DDS 2-3)
Entity relationship diagram (ERD) · Implementation-free.

## Slide 60 — Summary (DDS 2-3)
As the objectives on slide 51.
