'use strict';

class Person {
    constructor(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

    }
    personInfo() {
        return `${this.name} ${this.surname}, ${2020 - (this.dateOfBirth.getFullYear())} years`;
    }
    fullData() {
        return `${this.name} ${this.surname}  ${this.dateOfBirth}`;
    }

}

module.exports = { Person };