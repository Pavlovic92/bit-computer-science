//////////////////////// PRACTICE //////////////////////

//////// Creating an Object with some Properties /////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
}

console.log(student);


//////// Creating an Object with Method Property /////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
    info: function () { //Method is a Property with Function.
        return 2 + 1;

    }
}

console.log(student);


//////// Creating an Object with Method Property and accessing Object's Property /////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
    info: function () { //Method is a Property with Function.
        return (student.name + ' ' + student.lastName + ' is ' + student.age + ' years old.');

    }
}

console.log(student.info());


//////// Creating an Object inside an Object //////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
    moreInfo: { //An object inside an Object.
        shoesNum: 43,
        shoesColor: "Brown"
    }
}

console.log(student);
console.log(student.moreInfo.shoesColor);



//////// Adding the Property to an Object //////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
    moreInfo: { //An object inside an Object.
        shoesNum: 43,
        shoesColor: "Brown"
    }
}

console.log(student.height = 180 + "cm");
console.log(student);


//////// Deleting Property from an Object //////////

var student = {
    name: "Stefan",
    lastName: "Pavlovic",
    age: 27,
    address: "Vojvode Vlahovica",
    city: "Belgrade",
    gender: "Male",
    moreInfo: { //An object inside an Object.
        shoesNum: 43,
        shoesColor: "Brown"
    }
}

console.log(delete student.name, delete student.lastName);
console.log(student);



