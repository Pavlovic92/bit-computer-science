/////////////
'use strict';
/////////////

(function () {
    console.log('Hi!\n');
})();

////////////////// PERSON //////////////////

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
        return 'Name of the Person: ' + this.name + '\nSurname of the Person: ' + this.surname;
    }
}

var personInfo = new Person('Stefan', 'Pavlovic');
//console.log(personInfo.getData());


////////////////// SEAT //////////////////

function Seat(number, category) {
    this.number = number;
    this.category = category;
    this.getData = function () {
        return 'Seat number: ' + this.number + '\nSeat category: ' + this.category;
    }
}

var seatInfo = new Seat(1, 'b');
//console.log(seatInfo.getData());


////////////////// PASSENGER //////////////////

function Passenger() {

}

var passengerInfo = new Passenger();
console.log(passengerInfo);


////////////////// FLIGHT //////////////////

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
}


////////////////// AIRPORT //////////////////