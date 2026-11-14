# Source: chapter 5 — `db ch5.pdf`, 34 pages

*Introduction to Database* — Eng. Noor A. Nashwan, Computer Engineering Dept., UCAS.
Built from Oracle Academy **Database Design 5-1, 5-2 and 5-3**:
5-1 Relationship Transferability · 5-2 Relationship Types ·
5-3 Resolving Many-to-Many Relationships.

Below is the text of every page as extracted from the PDF. The extractor loses some word
spacing (`giveexamplesofaone-to-one`); read through it. **This is the authority for what
chapter T5 teaches.**

---

## PAGE 1
Database	Design5-1
Relationship	Transferability
Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 2
Objectives
This	lesson	covers	the	following	objectives:
•Describe	and	give	an	example	of	relationship
transferability
Understandthedifferencebetweentransferable	
nontransferablerelationships
• and
•IllustratenontransferablerelationshipsonERDs
DDS5L1
Relationship	Transferability 3Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 3
Purpose
•Once	a	class	has	been	allocated	to	a	teacher,	can	that
class	later	be	transferred	to	another	teacher,	possibly	in
mid-semester?
Usually	yes,	because	if	not,	what	would	we	do	if	the	
original	teacher	becomes	sick?
Somehealthclubsallowmembershipstobetransferred	
fromonepersontoanother,butotherhealthclubs	
don’t.
•
•
•This	business	rule	is	normally	determinedby	what	is
club.most	efficient	and	mostprofitable	for	the
DDS5L1
Relationship	Transferability 4Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 4
Examples.
•A	person	may	change	departments	or	jobs	within	a	
company,	so	the	relationship	is	transferable.
•A	person	places	an	order	from	an	internet	company,	
once	the	order	is	placed	by	someone,	that	
relationship	cannot	change.	non-transferable

## PAGE 5
Relationship	Review
•Let’s	review	a	simple	relationship	between	EMPLOYEE
and	DEPARTMENT .
Optionality:•
–Must
–Must
every	EMPLOYEE	be
every	DEPARTMENT
assigned	to	a	DEPARTMENT?
beresponsible	for	an	employee?
EMPLOYEE
# ID
* First Name
* Last Name
* Hire Date
* SalaryO Commission
DEPARTMENT
# ID
* Name
assigned	to
responsible	for
DDS5L1
Relationship	Transferability 5Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 6
Relationship	Review
•Cardinality:
–How
–How
many	EMPLOYEEs	can	a	DEPARTMENT	be	responsible	for?
many	DEPARTMENTs	cananEMPLOYEE	be	assignedto?
EMPLOYEE
# ID
* First Name
* Last Name
* Hire Date
* SalaryO Commission
DEPARTMENT
# ID
* Name
assigned	to
responsible	for
DDS5L1
Relationship	Transferability 6Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 7
Relationship	Review
•Transferability:
–Can	an	EMPLOYEE	be	transferred	
another	DEPARTMENT?
fromoneDEPARTMENTto
EMPLOYEE
# ID
* First Name
* Last Name
* Hire Date
* SalaryO Commission
DEPARTMENT
# ID
* Name
assigned	to
responsible	for
DDS5L1
Relationship	Transferability 7Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 8
Relationship	Transferability
•Transferable:	A	STUDENT	being	allowed	to	move	from
one	STUDY	GROUP	to	another.
•There	is	a	relationship	betweenSTUDENT	andSTUDY
GROUPthatistransferable.
STUDENT STUDY	GROUPjoin
have
Transferable	Relationship
DDS5L1
Relationship	Transferability 8Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 9
Relationship	Transferability
•Nontransferable:	ASTUDENT	can	be	issued	a	RECEIPT
for	paying	tuition	fees,	taking	a	certification	exam,
purchasing	items	at	the	bookstore.
or
•Once	a	RECEIPT	has	been	issued,	itcannotbe
transferredto	another	STUDENT.
RECEIPT STUDENTissued	to
issued
Nontransferable	Relationship
A	nontransferable	relationship	is
represented	with	the	diamond	on
the	relationship.
DDS5L1
Relationship	Transferability 9Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 10
Relationship	Transferability
•If	it	was	issued	in	error,	it	would	have	to	be	cancelled,
and	another	RECEIPT	would	have	to	be	written	up.
•The	relationship	between
nontransferable.
STUDENT	and	RECEIPTis
RECEIPT STUDENTissued	to
issued
Nontransferable	Relationship
A	nontransferable	relationship	is
represented	with	the	diamond	on
the	relationship.
DDS5L1
Relationship	Transferability 10Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 11
Terminology
Key	terms	used	inthislessonincluded:
•
•
Nontransferable
Transferable
DDS5L1
Relationship	Transferability 12Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 12
Summary
In	this	lesson,	you	should	have	learned	how	to:
•Describe	and	give	an	example	of	relationship
transferability
Understandthedifferencebetweentransferable	
nontransferablerelationships
• and
•IllustratenontransferablerelationshipsonERDs
DDS5L1
Relationship	Transferability 13Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 13
Database5-2
Design
RelationshipTypes
Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 14
Objectives
This	lesson	covers	the	following	objectives:
•Recognize	and
relationship
Recognizeand	
relationship
Recognizeand	
relationship
giveexamplesofaone-to-one
• giveexamplesofaone-to-many
• giveexamplesofamany-to-many
•Recognize	redundant
from	the	ERD
relationships	and	remove	them
DDS5L2
Relationship	Types 3Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 15
Purpose
•
•
•
CanonePERSONownmanyDVDs,oronlyone?
CanoneDVDbeownedbymanyPERSONs?
Aswerefineandimproveourmodel,wewantto
sureourentityrelationshipscorrectlymodelour
businessrules.
make
•Remember,	you	can	avoidfuturecostlymistakesby
thinkingthrough	thedetailsearlyon.
DDS5L2
Relationship	Types 4Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 16
One-to-Many	(1:M)	Relationships
•The	various	types	of	1:M
Relationship	Types
1:M
relationships	are	most
in	an	ER	Model.
You	have	seen	several	
examples	already.
common
•
1:M	Relationship
DDS5L2
Relationship	Types 5Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
“Many”	can	mean	one-or-more	or	zero-or-more,	depending	on	the	optionality
OR	Many-to-one	(M:1)

## PAGE 17
Many-to-One	and	One-to-Many
Relationships
•Many-to-one	and	one-to-many	relationships	(M:1	and
1:M)	have	cardinality	of	one	or	more	in	one	direction
and	one	and	only	one	in
CUSTOMER
visited	by
the	other	direction.
SALES	
REPRENSENTATIVE
assigned	to
•Business	rules:
–Each	CUSTOMER must	be
REPRESENTATIVE.
visited	by	one	and	only	one	SALES
–Each	SALES may	be	assigned	to	one	orREPRESENTATIVE
more	CUSTOMERs.
DFo	3-6
Relationships Copyright	©	2015,	Oracle	and/or	its	affiliates.	All	rights	reserved.11

## PAGE 18
Many-to-Many	(M:M)Relationships
•The	various	types	of	M:M
relationships	are	common,
particularly	in	a	first	version
of	an	ER	model.
Relationship	Types
M:M
•In	later	stages	of
process,	all	M:M
will	be	resolved,
disappear .
the	modeling
relationships
and
STUDENT TEACHERlearns	from
educates
M:M	Relationships
DDS5L2
Relationship	Types 6Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 19
One-to-One	RelationshipsFor	Roles
Relationship	Types
1:1•Usually	you	will	find	just
a	few	of	the	various
types	of	1:1	relationships
in	every	ER	model.
•Mandatory	at	one	end
the	1:1	relationship
of
acting	as TEACHERPERSON
commonly	occurs	when
roles	are	modeled.
role	of
acting	as STUDENT
role	of
1:1	Relationships
DDS5L2
Relationship	Types 7Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 20
One-to-One	Relationships
•One-to-one	relationships	(1:1)	have	cardinalityofone
and	only	oneinboth	directions.
COMPUTER MOTHERBOARD
contain
contained	in
•Business	rules:
–EachCOMPUTER 
MOTHERBOARD.
must	contain	oneand	only	one
–Each	MOTHERBOARD must	be	contained	in	one	and
COMPUTER.
only	one
DFo	3-6
Relationships Copyright	©	2015,	Oracle	and/or	its	affiliates.	All	rights	reserved.13

## PAGE 21
Terminology
Key	terms	used	in	this	lessonincluded:
•
•
•
•
Many-to-many	(M:M)
One-to-many	(1:M)
One-to-one
Redundant
(1:1)
DDS5L2
Relationship	Types 11Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 22
Summary
In	this	lesson,	you	should	havelearned	how	to:
•Recognize	and
relationship
Recognizeand	
relationship
Recognizeand	
relationship
giveexamplesofaone-to-one
• giveexamplesofaone-to-many
• giveexamplesofamany-to-many
•Recognize	redundant
from	the	ERD
relationships	and	remove	them
DDS5L2
Relationship	Types 12Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 23
Database	Design5-3
ResolvingMany-to-ManyRelationships
Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 24
Objectives
This	lesson	covers	the	following	objectives:
•Identify	attributes	which	belong	to	many-to-many
relationships
Demonstratethe	stepstoresolveamany-to-many	
relationshipusinganintersectionentity
•
•Identifythe	UID	of	an	intersection	entityandrepresent
itintheentityrelationshipdiagram
DDS5L3
Resolving	Many-to-Many	Relationships 3Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 25
Purpose
•This	lesson	will	help	you	complete	your	model	-you
may	need	to	create	new	entities	or	new	relationships
based	on	the	business	needs.
It	will	also	help	you	define	the	scope	of	your	data	model•
-youonlymodelwhatisofimportancetothebusiness.
DDS5L3
Resolving	Many-to-Many	Relationships 4Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 26
Relationship	Hiding	an	Attribute
•In	a	school,	a	STUDENT	may	study	one	or	more
SUBJECTs.
•Each	SUBJECT	may
STUDENTs
bestudiedby	one	ormore
STUDENT
# ID
* First Name
* Last Name
SUBJECT
# ID
* Namestudies
studied	by
STUDENT	and	SUBJECT
DDS5L3
Resolving	Many-to-Many	Relationships 5Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
Example

## PAGE 27
Relationship	Hiding	an	Attribute
•When	a	student	enrolls	for	a	subject,	we	want	to	be
able	to	record	the	gradethey	attain	for	that	subject.
Which	entity	would	the	attribute	“Grade”	belong	to?
Ifweput“Grade”intheSTUDENTentity,howwouldwe	
knowwhichSUBJECTit	isfor?
•
•
•If	we	put	“Grade”	in	the	SUBJECT	entity,	howwouldwe
knowwhichSTUDENT	got
STUDENT
thatgrade?
SUBJECT
# ID
* Name
# ID
* First Name
* Last Name
studies
studied	by
DDS5L3
Resolving	Many-to-Many	Relationships 6Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 28
Resolution	of	a	M:M	Relationship
•A	third	entity	is	needed	to	resolve	theM:Mrelationship.
Thisiscalledan	"intersection"entity.
DDS5L3
Resolving	Many-to-Many	Relationships 7Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 29
Intersection	Entity
•An	intersection	entity	–
ENROLLMENT	–has	been
added,	including	the
“Grade”	attribute.
The	original	M:M	
relationship	has	become	
two1:M	relationships.
What	would	be	the	UID
ENROLLMENTO Grade
for
• STUDENT
# ID
* First Name
* Last Name
SUBJECT
# ID
* Name
enrols	for subject	of
•
of	the	intersectionentity?
DDS5L3
Resolving	Many-to-Many	Relationships 8Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
for

## PAGE 30
Barred	Relationships
•The	unique	identifier	(UID)	of
the	intersection	entity	often
comes	from	the	originating
relationships	and	is
represented	by	the	bars.
ENROLLMENTO Grade
for
•In	this	case,	the
relationships	from	the
originating	entities	to
the	intersection	entity
are	called	"barred"
relationships.
STUDENT
# ID
* First Name
* Last Name
SUBJECT
# ID
* Name
enrols	for subject	of
Barred	Relationships
DDS5L3
Resolving	Many-to-Many	Relationships 9Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
for
UID	is	a	combination	
Composite	UIDs

## PAGE 31
M:M	ResolutionExampleTV	Shows
TV	SHOW
•Each	TV	show	may
be	watched	by	one
or	more	persons.
Each	person	may
watched	by PERSONTV	SHOW
watch
• Resolution	of	M:M
watch	oneormore VIEWING
RECORD
TVshows.
on
TV	SHOW PERSON
DDS5L3
Resolving	Many-to-Many	Relationships 10Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
forfor
on

## PAGE 32
M:M	Resolution	ExampleCleaning	Services
•Each	company	may
provide	one	or	more
cleaning	services.
Each	cleaning	service
CLEANING	SERVICES
provide
provided	by
CLEANING
COMPANY
CLEANING
SERVICE
•
may	be	provided
one	or	more
companies.
by Resolution	of	M:M
for forCLEANING
SCHEDULE
on
CLEANING
SERVICE
CLEANING
COMPANY
DDS5L3
Resolving	Many-to-Many	Relationships 11Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
on

## PAGE 33
Terminology
Key	terms	used	in	thislessonincluded:
•
•
Barred	relationship
Intersectionentity
DDS5L3
Resolving	Many-to-Many	Relationships 12Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.

## PAGE 34
Summary
In	this	lesson,	you	should	have	learned	how	to:
•Identify	attributes	which	belong	to	many-to-many
relationships
Demonstratethe	stepstoresolveamany-to-many	
relationshipusinganintersectionentity
•
•Identifythe	UID	of	an	intersection	entityandrepresent
itintheentityrelationshipdiagram
DDS5L3
Resolving	Many-to-Many	Relationships 13Copyright	©	2019,	Oracle	and/or	its	affiliates.	All	rights	reserved.
