'use strict';

class Country {
    constructor(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
}

module.exports = { Country };