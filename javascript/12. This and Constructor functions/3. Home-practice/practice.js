///////////////////////// PRACTICE ////////////////////////
/////////////////////// USING THE 'this' VALUE: /////////////////////////////

var hero = {
    name: 'Stefan',
    sayName: function () {
        return 'Hi, I am ' + hero.name + '.'; //Example without 'this' value.
    }
};
console.log(hero.sayName());

////

var hero = {
    name: 'Stefan',
    sayName: function () {
        return 'Hi, I am ' + this.name + '.'; //Example using 'this' value. //-this- is a reference to an Object in which Method is found.
    }
};
console.log(hero.sayName());


////////////////////////////// CONSTRUCTOR FUNCTIONS: //////////////////////////////////

function Student() {
    this.name = 'Stefan'; //'this' is referring to the Object in which this Property is found.
}


console.log(new Student()); //Using the 'new' operator we are creating Constructor Function.

///// Creating new Object and adding values through function parameters /////

function Student(name, age, gender) {
    this.studentName = name;
    this.studentAge = age;
    this.studentGender = gender;
}

console.log(new Student('Stefan', 27, 'male'));


///// Creating new Object and adding values through function parameters + creating Method /////

function Student(name, age, gender) {
    this.studentName = name;
    this.studentAge = age;
    this.studentGender = gender;
    this.studentAddress = function () {
        return this.studentName + ' is ' + this.studentAge + ' years old.'
    }
}

console.log(new Student('Stefan', 27, 'male').studentAddress());


////////// We can create different Objects using the same constructor /////////

function Student(name, lastName, age, gender, address) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
}


var studentOne = new Student('Stefan', 'Pavlovic', 27, 'male', 'Vojvode Vlahovica');
var studentTwo = new Student('Pera', 'Peric', 33, 'male', 'Petra Petrovica')

console.log(studentOne);
console.log(studentTwo);

/////// Selecting only one property ////////

function Student(name, lastName, age, gender, address) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
}


var studentOne = new Student('Stefan', 'Pavlovic', 27, 'male', 'Vojvode Vlahovica');

console.log(studentOne.name);


/////////////////////////// THE GLOBAL OBJECT ///////////////////////////

////// Calling a Constructor Function without 'new' operator ///////

function Car(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

var infoAboutCar = Car('Fiat', 2005, 'white'); //It returns undefined.
console.log(infoAboutCar);


////// Checking if the Object was created with a specific Constructor Function, using 'instanceof' ///////

function Car(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

var infoAboutCar = new Car('Fiat', 2005, 'white');
console.log(infoAboutCar instanceof Car); //The result can be true or false. In this case it is true.
//object instanceof constructor


///////////////////////// Passing Objects ////////////////////////
//When you assign an object to a different variable or pass it to a function, you only pass a reference to that object. 
//Consequently, if you make a change to the reference, you're actually modifying the original object.

var originalObject = {
    name: 'Stefan',
    age: 27,
    gender: 'male'
}

var objectCopy = originalObject;
objectCopy.lastName = 'Pavlovic';

console.log(originalObject);
console.log(objectCopy); //The result will be the same.
//The same thing applies when passing objects to functions. 


///////////////////////// Comparing Objects ////////////////////////
//'false' result
var studentOne = {
    name: 'Stefan',
    age: 27,
    gender: 'male'
}

var studentTwo = {
    name: 'Stefan',
    age: 27,
    gender: 'male'
}

var result;

if (studentOne === studentTwo){
    result = true;
} else {
    result = false;
}

console.log(result); //The result is 'false' because they are pointing out to different references.

//'true' result
var studentOne = {
    name: 'Stefan',
    age: 27,
    gender: 'male'
}

var studentTwo = studentOne;

if (studentOne === studentTwo){
    result = true;
} else {
    result = false;
}

console.log(result); //The result is 'true' because they are pointing out to the same reference.
