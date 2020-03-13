'use strict';

class BettingPlace {
    constructor(address) {
        this.listOfPlayers = [];
        this.totalAmount = 0;
        this.address = address;
    }
    bettingPlaceInfo() {

        return `${this.address.getBasicAddress()}, sum of all bets: ${this.totalAmount} eur`;
    }
    addPlayer(player) {
        this.listOfPlayers.push(player);
        this.totalAmount += player.betAmount;
    }
    getPlayers() {
        let playersString = '';
        this.listOfPlayers.forEach((player) => {
            playersString += '\n\t\t' + player.playerInfo();
        })
        return playersString;

    }
}

module.exports = { BettingPlace }