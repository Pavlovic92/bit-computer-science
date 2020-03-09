'use strict';

(function () {

    ////////////////////////////////// COUNTRY ////////////////////////////////
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    var ContinentObject = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA',
        AUSTRALIA: 'AU'
    });

    var serbia = new Country('Serbia', '1.1', ContinentObject.EUROPE)
    //console.log(createCountry.continent);


    ////////////////////////////////// PERSON ////////////////////////////////

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth)
    }

    var stefan = new Person('Stefan', 'Stefanovic', '12.15.1994');

    Person.prototype.getPersonData = function () {
        return this.name + ' ' + this.surname + ', ' + this.dateOfBirth;
    };

    console.log(stefan.getPersonData());

    ////////////////////////////////// PLAYER ////////////////////////////////

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }


    var stefanPlayer = new Player(stefan, 100, serbia)

    // console.log(stefanPlayer.person.name)
    ////////////////////////////////// ADDRESS ////////////////////////////////

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    Address.prototype.getAddressData = function () { }
    var stefanAddress = new Address(serbia, "Belgrade", 11000, "Kneza Milosa", 82)

    // console.log(stefanAddress)

    ////////////////////////////////// BETTING PLACE ////////////////////////////////
    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    var BgPlace = new BettingPlace(stefanAddress);
    //console.log(BgPlace);


    ////////////////////////////////// BETTING HOUSE ////////////////////////////////

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;
    }

    var Mozzart = new BettingHouse('Football World Cup')
    //console.log(Mozzart);







})();