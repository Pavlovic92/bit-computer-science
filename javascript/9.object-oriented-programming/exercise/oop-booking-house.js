/////////////
'use strict';
/////////////

(function () {
    const ContinentObject = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA',
        AUSTRALIA: 'AU'
    });


    ////////////////////////////////// COUNTRY ////////////////////////////////
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    //Create country:
    const serbia = new Country('SR', 10, ContinentObject.EUROPE);

    ////////////////////////////////// PERSON ////////////////////////////////
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth)
    }
    ////Person prototype:
    Person.prototype.getFullName = function () {
        return this.name + ' ' + this.surname;
    };

    Person.prototype.getPersonData = function () {
        return `${this.getFullName()}, ${this.dateOfBirth.toLocaleDateString()}`

    };


    Person.prototype.getAge = function () {
        return Math.floor((new Date() - this.dateOfBirth) / 1000 / 60 / 60 / 24 / 365);
    };

    //Create person:
    const stefan = new Person('Stefan', 'Stefanovic', '12.15.1994');
    const veljko = new Person('Veljko', 'Ciric', '01.19.1987');


    ////////////////////////////////// PLAYER ////////////////////////////////
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    ////Player prototype:
    Player.prototype.getPlayerData = function () {
        return `${this.country.name}, ${(this.country.odds * this.betAmount)} eur, ${this.person.getFullName()}, ${this.person.getAge()} years`
    }

    //Create player
    const stefanPlayer = new Player(stefan, 100, serbia);
    const veljkoPlayer = new Player(veljko, 150, serbia);


    ////////////////////////////////// ADDRESS ////////////////////////////////

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    Address.prototype.getAddressData = function () {
        return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}, ${this.country.name}`;
    }

    //Create address:
    const stefanAddress = new Address(serbia, "Belgrade", 11000, "Kneza Milosa", 82);
    const veljkoAddress = new Address(serbia, "New Belgrade", 11070, "Arsenija Carnojevica", 113);


    ////////////////////////////////// BETTING PLACE ////////////////////////////////
    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.this.numberOfPlayers = 0;
    }
    ////Betting Place prototype:
    BettingPlace.prototype.addPlayersToTheList = function (player) {
        this.listOfPlayers.push(player);
        numberOfPlayers++;
    }

    BettingPlace.prototype.getBettingPlaceData = function () {
        return this.street + this.postalCode + this.city
    }

    //Create Betting Place:
    const BelgradePlace = new BettingPlace(stefanAddress);
    const BelgradePlace = new BettingPlace(veljkoAddress);
    //////////To .push()
    BelgradePlace.addPlayersToTheList(stefanPlayer);
    BelgradePlace.addPlayersToTheList(veljkoPlayer);




    ////////////////////////////////// BETTING HOUSE ////////////////////////////////
    // function BettingHouse(competition) {
    //     this.competition = competition;
    //     this.listOfBettingPlaces = [];

    // }

    // const Mozzart = new BettingHouse('Football World Cup');


    ////////////////////////////////////////////////////////////////////////////////////


})();