////////////////////////////////////
// Arguments - to je niz.

// function isEven() {
//     //console.log(arguments);
//     return arguments[0] % 2 === 0; //Za Arguments ne moramo da definisemo parametre unutar funkcije (). Da pristupimo svakoj vrednosti unutar argumenta, pristupamo preko indexa [].
// }

// var res = isEven(4, 5, 6, 7);
// console.log(res);

//////////////////////////////////////////////////////////////////////////////

// var array = [4, 6, 2, 6, 88]

// for (var i = 0; i < array.length; i++) {
//     if (array[i] === 2) {
//         break; //stigni do broja 2, i prekini ispisivanje niza
//     }
//     console.log(array[i]);

// }


// var array = [4, 6, 2, 6, 88]

// for (var i = 0; i < array.length; i++) {
//     if (array[i] === 2) {
//         continue; //stigni do broja 2, preskoci broj 2, nastavi ispisivanje niza
//     }
//     console.log(array[i]);

// }

////////////////////////////////// TASK 1: //////////////////////////////////

// function greaterNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         return "The numbers are equal.";
//     }
// }

// var res = greaterNumber(10, 110);
// console.log(res);


////////////////////////////////// TASK 2 - Version 1: //////////////////////////////////

// function isOdd(num1) {
//     return num1 % 2 !== 0;
// }
// var res = isOdd(9);
// console.log(res);


////////////////////////////////// TASK 2 - Version 2: //////////////////////////////////

// function isOdd(num1) {
//     if (num1 % 2 === 0) {
//         return "Number is even"
//     } else {
//         return "Number is odd"
//     }
// }
// var res = isOdd(9);
// console.log(res);

////////////////////////////////// TASK 3 //////////////////////////////////

// function isThreeDigitLong(num1) {
//     if (num1 > 99 && num1 < 1000) {
//         return "The number is three digit long."
//     } else {
//         return "The number is NOT three digit long."
//     }
// }

// var res = isThreeDigitLong(50);
// console.log(res);


////////////////////////////////// TASK 4 //////////////////////////////////

// function arithmeticMean (num1, num2, num3, num4) {
//     return (num1+num2+num3+num4) / 4;
// }
// var res = arithmeticMean(10, 5, 7, 9);
// console.log(res);


////////////////////////////////// TASK 5 //////////////////////////////////

////////////////////////////////// TASK 6 //////////////////////////////////

////////////////////////////////// TASK 7 //////////////////////////////////

// function calculateDigits(result) {
//     for (var numOfDigits = 0; result > 0; numOfDigits++) {
//         var modulo = result % 10;
//         result = (result - modulo) / 10;
//     } return numOfDigits;
// }

// var res = calculateDigits(231123);
// console.log(res);


////////////////////////////////// TASK 8 //////////////////////////////////

// function numOfAppearances(a, e) {
//     for (var res = 0, i = 0; i < a.length; i++) {
//         if (a[i] === e) {
//             res += 1;
//         }
//     } return res;
// }

// var n = numOfAppearances([2, 7, 7, 4, 7, 8, 7, 7, 1], 7);
// console.log(n);


////////////////////////////////// TASK 9 //////////////////////////////////



// function sumOfOdd(a) {
//     for (var i = 0, res = 0; i < a.length; i++) {
//         if (a[i] % 2 !== 0) {
//             res += a[i];
//         }
//     } return res;
// }

// var n = sumOfOdd([2, 4, 7, 8, 7, 7, 1]);
// console.log(n);


////////////////////////////////// TASK 10 //////////////////////////////////

// function numberOfALetters(n) {
//     for (var i = 0, res = 0; i < n.length; i++) {
//         if (n[i] === 'A' || n[i] === 'a') {
//             res += 1;
//         }
//     } return res;
// }

// var x = numberOfALetters('Abrakadabra');
// console.log(x);


////////////////////////////////// TASK 11 //////////////////////////////////

// function ccc(a, b) {
//     for (var i = 0, res = ""; i < b; i++) {
//         res += a;
//     } return res;
// }

// var x = ccc('abc', 4);
// console.log(x);
