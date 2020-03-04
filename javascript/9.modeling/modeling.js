////////////////// STUDENT ///////////////////

function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.getString = function () {
        return 'Student: ' + this.name + '\n' + 'Age: ' + this.age + '\n' + 'ID: ' + this.id;
    }
}

var Stefan = new Student('Stefan', 27, 366);
var Bojan = new Student('Bojan', 36, 425);


////////////////// SUBJECT ///////////////////

function Subject(name, description) {
    this.name = name;
    this.description = description;
    this.getString = function () {
        return 'Subject: ' + this.name + '\n' + 'Description: ' + this.description;
    }
}

var Web = new Subject('Web', 'HTML, CSS, Bootstrap, SASS, BOM, DOM, etc.');
var PP = new Subject('PP', 'Programming Principles, JavaScript')


////////////////// CLASSROOM ///////////////////

function Classroom(name) {
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.addStudent = function (student) {
        this.students.push(student);
    }
    this.addSubject = function (sub) {
        this.subjects.push(sub);
    }
    this.getString = function () {
        var studentString = '';
        var subjectString = '';
        for (var i = 0; i < this.students.length; i++) {
            studentString += this.students[i].getString() + '\t';
        }

        for (var j = 0; j < this.subjects.length; j++) {
            subjectString += this.subjects[j].getString() + '\t';
        }

        return this.name + ' Classroom subjects: ' + subjectString + 'Classroom students: ' + studentString;
    }

}
var BitClassroom = new Classroom('BIT 008');
BitClassroom.addStudent(Stefan);
BitClassroom.addStudent(Bojan);

BitClassroom.addSubject(Web);
BitClassroom.addSubject(PP);

console.log(BitClassroom.getString());
