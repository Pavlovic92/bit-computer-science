/////////////
'use strict';
/////////////

(function () {
    console.log('Hi!\n');


    ////////////////// PERSON //////////////////

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }


    ////////////////// SEAT //////////////////

    function Seat(number, category) {
        if (typeof number === 'number' && number !== undefined) {
            this.number = number;
        }
        else {
            this.number = Math.floor(10 + 90 * Math.random());

        }

        if (category !== undefined) {
            this.category = category;
        } else {
            this.category = "E";
        }

        this.getData = function () {

            return this.number + ', ' + this.category;
        }
    }


    ////////////////// PASSENGER //////////////////

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return '\t\t' + this.seat.getData() + ', ' + this.person.getData();
        }
    }


    ////////////////// FLIGHT //////////////////



    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];

        this.getNumberOfPassengers = function () {
            return this.listOfPassengers.length;
        }

        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }

        this.getData = function () {
            var flightString = '';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                flightString += "\n" + this.listOfPassengers[i].getData();
            }
            return this.date + ', \t' + this.relation + '\n' + flightString + '\n';
        }
    }


    ////////////////// AIRPORT //////////////////

    function Airport(name) {
        this.name = name;
        this.flights = [];

        this.addFlight = function (flight) {
            this.flights.push(flight);
        }

        this.getData = function () {
            var flightsData = '';
            var numberOfAllPassengers = 0;
            for (var i = 0; i < this.flights.length; i++) {
                flightsData += "\n" + this.flights[i].getData();
                numberOfAllPassengers += this.flights[i].getNumberOfPassengers()
            }

            return 'Airport: ' + this.name + ', total passengers: ' + numberOfAllPassengers + '\n' + flightsData;
        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////
    //Create Person//
    var personInfo = new Person('Stefan', 'Pavlovic');
    var personTwoInfo = new Person('Bojan', 'Zerajic');
    var personThreeInfo = new Person('Haris', 'Taraholic');
    var personFourInfo = new Person('Uros', 'Opacic');

    //Create Seat//
    var seatInfo = new Seat(1, 'B');
    var seatTwoInfo = new Seat(2, 'B');
    var seatThreeInfo = new Seat(5, 'B');
    var seatFourInfo = new Seat(8, 'B');

    //Create Passenger//
    var passengerOne = new Passenger(personInfo, seatInfo);
    var passengerTwo = new Passenger(personTwoInfo, seatTwoInfo);
    var passengerThree = new Passenger(personThreeInfo, seatThreeInfo);
    var passengerFour = new Passenger(personFourInfo, seatFourInfo);


    //Create Flight//
    var bgNewYork = new Flight("Belgrade - New York", "Oct 25 2017");
    bgNewYork.addPassenger(passengerOne);
    bgNewYork.addPassenger(passengerTwo);
    var barcelonaBelgrade = new Flight("Barcelona - Belgrade", "Nov 11 2017");
    barcelonaBelgrade.addPassenger(passengerThree);
    barcelonaBelgrade.addPassenger(passengerFour);

    // Create Airport//
    var dzoni = new Airport('Nikola Tesla');
    dzoni.addFlight(bgNewYork);
    dzoni.addFlight(barcelonaBelgrade);
    console.log(dzoni.getData());


})();//Closing tag of Immediate Function