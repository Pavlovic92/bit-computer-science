'use strict';

class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;
    }
    addBettingPlace(bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.numberOfPlayers += bettingPlace.listOfPlayers.length;
    }
    fullData() {
        let bettingHouseString = '';
        this.listOfBettingPlaces.forEach((place) => {
            bettingHouseString += '\n\t' + place.bettingPlaceInfo() + place.getPlayers();
        })
        let numberOfBetsOnSerbia = 0;

        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPlayers} bets
    ${bettingHouseString}`;

    }
};

module.exports = { BettingHouse };