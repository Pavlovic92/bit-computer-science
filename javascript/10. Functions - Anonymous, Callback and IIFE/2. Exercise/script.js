///////////////////// TASK 1: ///////////////////
/*Write IIFE that replaces the first and the last element of the given array and prints out its elements.  */

// const inputArray = [4, 5, 11, 9];

// const result = (function (input) {
//     let firstIndex = input[0];
//     let lastIndex = input[input.length - 1];


//     input[0] = lastIndex;
//     input[input.length - 1] = firstIndex;

//     console.log(input);

// })(inputArray);


///////////////////// TASK 4: ///////////////////
/* 
Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
    Input: pera peric
    Output: pera.peric@gmail.com 
*/

// function person(name, surname) {

//     return function (domain) {
//         return `${name.toLowerCase()}.${surname.toLowerCase()}${domain}`;
//     }
// }

// console.log(person('Stefan', 'Pavlovic')('@gmail.com'));


///////////////////// TASK 6: ///////////////////
/*
Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
    Output: Your password is cool! 
*/


// function isValidPassword(password, successCallback, errorCallback) {
//     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let isValid = false;
//     let sum = 3 + 1;
//     let error = ''

//     if (password.length < 6) {
//         error = 'Password is too short!'
//     }
//     for (let i = 0; i < password.length; i++) {
//         if (password.length >= 6 && numbers.includes(Number(password[i]))) {
//             isValid = true
//             break
//         }
//     }

//     if (isValid) {
//         successCallback();
//     } else {
//         errorCallback(error);
//     }
// }

// function correctPassword(sum) {
//     console.log('Password valid');
//     console.log(sum);
// }

// function incorrectPassword(err) {
//     console.log('Password invalid, reason:');
//     console.log(err);
// }

// isValidPassword('asdad', correctPassword, incorrectPassword);


///////////////////// TASK 7: ///////////////////.
/* 
Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

// //Callback
function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

// function filterMe(array, callback) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray;
// }

// console.log(filterMe([2, 8, 11, 4, 9, 3], isOdd));


////////////////// New Array Methods - ES6 ///////////////////////
const newArray = [2, 8, 11, 4, 9, 3].map(isOdd);
console.log(newArray);

[1, 2, 3].forEach(function (element) {

})