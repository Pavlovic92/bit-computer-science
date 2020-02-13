// Delete the comments per task, so you can see the results in the console. //

/////////////////////////////////// TASK 1, First version: ///////////////////////////////////

///// IF is the result: //////

// var a = 3;
// var b = -7;
// var c = 2;
// var result = a * b * c;

// if (result < 0) {
//     console.log("The sign is -");
// }
// else {
//     console.log("The sign is +")
// }

///// ELSE is the result: //////

// var a = 3;
// var b = 7;
// var c = 2;
// var result = a * b * c;

// if (result < 0) {
//     console.log("The sign is -");
// }
// else {
//     console.log("The sign is +")
// }

/////////////////////////////////// TASK 1, Second version:  ///////////////////////////////////

// var a = 3;
// var b = 7;
// var c = 2;
// var result = a * b * c;

// var res = "";

// if (result < 0) {
//     res = "The sign is -"
// }
// else {
//     res = "The sign is +"
// }

// console.log(res);


/////////////////////////////////// TASK 2, First version: ///////////////////////////////////

// var a, b, c, d, e;
// a = -5;
// b = -2;
// c = -6;
// d = 0;
// e = -1;
// var result = '';
// if (a > b && a > c && a > d && a > e) {
//     result = a;
// }
// if (b > c && b > d && b > e) {
//     result = b;
// }
// if (c > d && c > e) {
//     result = c;
// }

// if (d > e) {
//     result = d;
// } else {
//     result = e;
// }
// console.log(result);


/////////////////////////////////// TASK 2, Second version: ///////////////////////////////////

// var a, b, c, d, e;
// a = -5;
// b = -2;
// c = -6;
// d = 0;
// e = -1;
// var result = '';
// if (a > b && a > c && a > d && a > e) {
//     result = a;
// } else if (b > c && b > d && b > e) {
//     result = b;
// } else if (c > d && c > e) {
//     result = c;
// } else if (d > e) {
//     result = d;
// } else {
//     result = e;
// }
// console.log(result);


/////////////////////////////////// TASK 3: ///////////////////////////////////

// var a = 0;
// var b = -1;
// var c = 4;

// if (a > b && b > c) {
//     console.log(a, b, c);
// } else if (a > c && c > b) {
//     console.log(a, c, b);
// } else if (b > a && a > c) {
//     console.log(b, a, c);
// } else if (b > c && c > a) {
//     console.log(b, c, a);
// } else if (c > a && a > b) {
//     console.log(c, a, b);
// } else if (c > b && b > a) {
//     console.log(c, b, a);
// } else {
//     console.log("I give up!");
// }


/////////////////////////////////// TASK 4: ///////////////////////////////////

// var a = 10;

// if (typeof a === 'number' && a % 2 === 0) {
//     console.log(a / 2); // 10 / 2 = 5
// } else {
//     console.log("x")
// }


/////////////////////////////////// TASK 5: ///////////////////////////////////

// var firstNumber = 190;
// var secondNumber = 15;
// var result = ""

// if (firstNumber > secondNumber) {
//     result = "The first number is higher."
// } else {
//     result = "The second number is higher"
// }

// console.log(result);


/////////////////////////////////// TASK 6: ///////////////////////////////////

// var c = 60;

// var fahrenheit = c / 5 * 9 + 32;
// var celsius = (fahrenheit - 32) / 9 * 5;

// console.log(fahrenheit);
// console.log(celsius);


/////////////////////////////////// TASK 7: ///////////////////////////////////

// var a = 100;
// var number = 13;
// var result = 0;

// if (a > number) {
//     result = (a - number) * 2
// } else {
//     result = number - a;
// }

// console.log(result);


/////////////////////////////////// TASK 8: ///////////////////////////////////

// var firstNumber = 12;
// var secondNumber = 5;
// result = ""

// if (firstNumber === secondNumber) {
//     result = (firstNumber + secondNumber) * 3;
// } else {
//     result = firstNumber + secondNumber
// }
// console.log(result);


/////////////////////////////////// TASK 9: ///////////////////////////////////

/*var firstNumber = 6;
var secondNumber = 50;
var result = ""

if (firstNumber === 50 || secondNumber === 50 || firstNumber + secondNumber === 50) {
    result = "true";
} else {
    result = "-"
}

console.log(result);*/


/////////////////////////////////// TASK 10: ///////////////////////////////////

// var number = 10;
// var result = '';
// if (number >= 20 && number <= 400) {
//     if (number <= 100) {
//         result = "20<=>100";
//     } else {
//         result = "100<=>400"
//     }
// } else {
//     result = "-"
// }

// console.log(result);