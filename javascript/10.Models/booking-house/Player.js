'use strict';

class Player {
    constructor(person, betAmount, coun) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = (coun.name[0] + coun.name[1]).toUpperCase();
        this.money = this.betAmount * coun.odds;
    }
    playerInfo() {
        return `${this.country}, ${this.money} eur, ${this.person.personInfo()}`;
    }
}

module.exports = { Player };