/////////////
'use strict';
/////////////

(function () {


    //////////////////// PRODUCT //////////////////////    
    function Product(name) {
        this.name = name;

        this.id = function () {
            return Math.floor(Math.random() * 90000) + 10000;
        }

        this.price = function () {
            return Math.floor(Math.random() * 100000) / 100;
        }

        this.getInfo = function () {

            var firstAndLastLetter = '' + this.name[0] + this.name[this.name.length - 1].toUpperCase();

            return '"' + this.name + '"' + ' -> ' + firstAndLastLetter + this.id() + ', ' + this.name + ', ' + this.price();
        }
    }

    var bananaExpirationDate = new Date('03/10/2020');

    var Banana = new Product('Banana', bananaExpirationDate);
    console.log(Banana.getInfo());


    //console.log(Banana.getInfo());

    ////////////////// SHOPPING BAG /////////////////

    function ShoppingBag() {
        this.product = [];

        this.todaysDate = new Date();

        if (this.todaysDate < bananaExpirationDate) {
            this.addProduct = function (product) {
                this.product.push(product)


            }
        }
    }

    var createShoppingBag = new ShoppingBag();

    createShoppingBag.addProduct(Banana);












})(); //Closing tag of anonymous immediately-invoked function                                                            