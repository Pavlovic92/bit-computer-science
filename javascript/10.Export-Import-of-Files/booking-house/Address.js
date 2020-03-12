'use strict';

class Address {
    constructor(country, city, postalCode, street, number) {
        this.country = (country.name[0] + country.name[1]).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    fullAddress() {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
    getBasicAddress() {
        return `${this.street}, ${this.postalCode} ${this.city}`;
    }
}

module.exports = { Address };