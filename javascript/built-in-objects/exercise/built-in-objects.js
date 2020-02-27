
////////////////////////TASK 1/////////////////////////////

// function duplicateArray(array) {
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         b.push(array[i]);
//         b.push(array[i]);

//     }
//     return b;
// }

// console.log(duplicateArray([2, 4, 7, 11, -2, 1]));

////////////////////////TASK 2 /////////////////////////////

// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

// function removeDuplicates(array) {
//     array.sort(function (a, b) { return a - b });
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 1]) {
//             continue;
//         }
//         b.push(array[i]);
//     }
//     return b;
// }
// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

////////////////////////TASK 3 /////////////////////////////

// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function isNumberOfElementsOdd(array) {
//     var result = false;
//     if (array.length % 2 === 1) {
//         result = true;
//     }
//     return result;
//}
// console.log(isNumberOfElementsOdd([1, 2, 9, 2, 5]));

// b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function lessThanMiddle(array) {
//     if (!isNumberOfElementsOdd(array)) {
//         return "Error!";
//     }

//     var indexOfMiddleElement = (array.length - 1) / 2;
//     var res = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < array[indexOfMiddleElement]) {
//             res++;
//         }
//     }
//     return res;
// }
// console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
