///////////////////////// STARS EXERCISE - SQUARE: //////////////////////
// function firstRow(star, number) {

//     var firstRowStars = '';

//     for (var i = 0; i < number; i++) {
//         firstRowStars += star + '\t';
//     }
//     return firstRowStars + '\n';
// }


// function hollowRow(star, number) {
//     var firstAndLastStar = '';
//     for (var i = 0; i <= number; i++) {
//         if (i === 0 || i === number) {
//             firstAndLastStar += star;
//         } else {
//             firstAndLastStar += ' ' + '\t';
//         }
//     }
//     return firstAndLastStar + '\n';
// }


// function squareStars(star, number) {

//     var fullRow = firstRow(star, number);
//     var result = '';

//     for (var i = 2; number > i; i++) {
//         var middleRow = hollowRow(star, number) + '\n';
//         result += middleRow;
//     }
//     var lastRow = firstRow(star, number);
//     return fullRow + result + lastRow;
// }


// var x = squareStars('*', 10)
// console.log(x);


//////////////////////////////// STARS EXERCISE - X ///////////////////////////

// function writeCross(number) {

//     var result = '';

//     for (var i = 0; i < number; i++) {

//         for (var j = 0; j < number; j++) {
//             if (i === j || (i + j === number - 1)) {
//                 result += '*';
//             } else {
//                 result += ' ';
//             }
//         }
//         result += '\n';
//     }
//     return result;
// }

// var x = writeCross(150);
// console.log(x);


////////////////////////// TASK 1: ////////////////////////////
// function checkString(myString) {
//     if (typeof myString === "string") {
//         var printRes = true;
//     } else {
//         var printRes = false;
//     } 
//       return printRes;
// }

// var result = checkString(12);
// console.log(result);


////////////////////////// TASK 2: ////////////////////////////

// function checkIfBlank(a) {
//     if (typeof a !== "string") {
//         return false;
//     }

//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== " ") {
//             return false;
//         }
//     }

//     return true;
// }
// var result = checkIfBlank("");
// console.log(result);


////////////////////////// TASK 3: ////////////////////////////

// function concatString(a) {
//     var myString = "";
//     for (var i = 0; i < a; i++) {
//         myString += "Ha";
//     }
//     return myString;
// }

// var x = concatString(10);
// console.log(x);


////////////////////////// TASK 4: ////////////////////////////

// function countNumberOfLetters(letter, text) {
//     var res = 0;
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === letter) {
//             res++;
//         }
//     }
//     return res;
// }
// var x = countNumberOfLetters("n", "My random string");
// console.log(x);


////////////////////////// TASK 5: ////////////////////////////

// function findPosition(letter, text) {
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === letter) {
//             return i + 1;
//         }
//     }
//     return -1;
// }
// var result = findPosition("r", "My random number");
// console.log(result);


////////////////////////// TASK 6: ////////////////////////////

// function findLastIndex(string, word) {
//     var result = "";
//     for (var i = string.length; i > 0; i--) {
//         if (string[i] === word) {
//             result = i;
//             break;
//         }

//     }
//     return result;
// }

// var x = findLastIndex("My name is Stefan Pavlovic", "e")
// console.log(x);


/////////////////////////// TASK 7: ///////////////////////////

// function convertStringToArray(string) {
//     // var newArray = [];

//     // for (var i = 0; string.length > i; i++) {
//     //     if (string[i] === " "){
//     //         newArray[i] = null;
//     //     } else {
//     //         newArray[i] = string[i];
//     //     }
//     // }
//     // return newArray;
//   }

// var x = convertStringToArray("My random string");
// console.log(x);


/////////////////////////// TASK 8: ///////////////////////////

// function isPrime(number) {

//     for (var i = 2; number > i; i++) {
//         if (number % i === 0) {
//             return false;
//         }

//     }
//     return true;
// }

// var x = isPrime(17);
// console.log(x);