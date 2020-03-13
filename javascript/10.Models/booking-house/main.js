"use strict";
/////////////

const { Country } = require('./Country');
const { Person } = require('./Person');
const { Player } = require('./Player');
const { Address } = require('./Address');
const { BettingPlace } = require('./Betting-place');
const { BettingHouse } = require('./Betting-house');

// Continents:
const CONTINENTS = Object.freeze({
    EUROPE: 'EU',
    ASIA: 'AS',
    AFRICA: 'AF',
    SOUTH_AMERICA: 'SA',
    NORTH_AMERICA: 'NA',
    AUSTRALIA: 'AU'
});

// create Country: 
const rs = new Country('Serbia', 1.2, CONTINENTS.EUROPE);

// create Person:
const bojan = new Person('Bojan', 'Zerajic', '1984-01-21');
const ksenija = new Person('Ksenija', 'Mijanovic', '1993-05-13');
const stefan = new Person('Stefan', 'Pavlovic', '1992-10-21');
const uros = new Person('Uros', 'Opacic', '1994-01-30');

// create Player:
const bojanKockar = new Player(bojan, 300, rs);
const ksenijaKockar = new Player(ksenija, 500, rs);
const stefanKockar = new Player(stefan, 800, rs);
const urosKockar = new Player(uros, 450, rs);

//create Address:
const knezaMilosa = new Address(rs, 'Beograd', 11000, 'Kneza Milosa', 82);
const sarajevska = new Address(rs, 'Beograd', 11000, 'Sarajevska', 14);

//create Betting Place:
const uplatnoMestoJedan = new BettingPlace(knezaMilosa);
const uplatnoMestoDva = new BettingPlace(sarajevska);

uplatnoMestoJedan.addPlayer(bojanKockar);
uplatnoMestoJedan.addPlayer(ksenijaKockar);
uplatnoMestoDva.addPlayer(stefanKockar);
uplatnoMestoDva.addPlayer(urosKockar);

uplatnoMestoJedan.getPlayers();

//create Betting House:
const soccerBetKladionica = new BettingHouse('Basketball World Cup Winner');
soccerBetKladionica.addBettingPlace(uplatnoMestoJedan);
soccerBetKladionica.addBettingPlace(uplatnoMestoDva);

console.log(soccerBetKladionica.fullData());






