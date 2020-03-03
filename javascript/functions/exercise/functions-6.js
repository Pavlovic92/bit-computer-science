'use strict';
/////////////////////////// TASK 1: ///////////////////////////
//Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

// var res = (function (randomString) {
//     var check = function (char) {
//         var string = char.toUpperCase();

//         if (string === "A" || string === "E" || string === "I" || string === "O" || string === "U") {
//             return true;
//         }
//         return false;
//     }
//     ///////////////////////////////////////////////
//     var counter = 0;
//     for (var i = 0; i < randomString.length; i++) {
//         if (check(randomString[i])) {
//             counter++;
//         }
//     }
//     return counter;

// })
//     ("String Objects Provide Convenient Methods For Text Manipulation.");

// console.log(res);


/////////////////////////// TASK 2: ///////////////////////////

//Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

// var result = (function (characters, numbers) {
//     var newCharacters = [];
//     for (var i = 0; i < characters.length; i++) {
//         newCharacters.push(characters[i]);
//         newCharacters.push(numbers[i]);
//     }
//     return newCharacters;
// })
//     (['a', 'b', 'c'], [1, 2, 3]);

// console.log(result);

/////////////////////////// TASK 3: ///////////////////////////
//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var result = (function (numbers, k) {
    var newNumbers = [];
    newNumbers = numbers.slice(k)
    for (var i = 0; i < k; i++) {
        newNumbers.push(numbers[i]);
    }
    return newNumbers
})

console.log(result);


/////////////////////////// TASK 4: ///////////////////////////
