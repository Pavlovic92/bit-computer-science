/////////////
'use strict';
/////////////

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

//console.log(Stefan.getString());


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

//console.log(Web.getString());


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
            studentString += '\n' + this.students[i].getString() + '\n';
        }

        for (var j = 0; j < this.subjects.length; j++) {
            subjectString += '\n' + this.subjects[j].getString() + '\n';
        }

        return 'Name of the group: ' + this.name + '\n' + subjectString + '\n' + studentString;
    }

}

//Classroom
var BitClassroom = new Classroom('BIT 008');

//Forwarding the info about the Student to the Classroom
BitClassroom.addStudent(Stefan);
BitClassroom.addStudent(Bojan);

//Forwarding the info about the Subject to the Classroom
BitClassroom.addSubject(Web);
BitClassroom.addSubject(PP);

//
console.log(BitClassroom.getString());