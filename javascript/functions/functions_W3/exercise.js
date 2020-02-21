///////////////////////////////// task 4 ///////////////////////



// function invertNumber(number) {
//     var newString = '' + number;
//     var invertString = '';
//     var result;
//     for (i = newString.length - 1; i >= 0; i--) {
//         invertString += newString[i];
//     }
//     result = parseInt(invertString);
//     return result;
// }
// var q = invertNumber(12345);
// console.log(q);

////////////////////////////////////// task 5 ///////////////////////////////////

// function cropArray(array, n) {
//     var p = array.length - n;
//     var b = [];
//     for (var i = p; i < array.length; i++) {
//         b[b.length] = array[i];
//     }
//     return b;
// }
// var w = cropArray([10, 9, 8, 7, 9, 5, 6, 2, 1], 5);
// console.log(w);

/////////////////////////////////// task 6 ////////////////////////////////////////

// function arrayRepeat(repeat, element) {
//     var newArray = [];
//     if (element === undefined) {
//         element = null;
//     }
//     for (var i = 0; i < repeat; i++) {
//         newArray[newArray.length] = element;
//     }
//     return newArray;
// }

// var result = arrayRepeat(10);
// console.log(result);

/////////////////////////////// task 7 //////////////////////////////////////

// function perfectNumber(number) {
//     var sum = 0;

//     for (var i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     if (sum === number) {
//         return number + " is a perfect number.";
//     }
//     return number + " is NOT a perfect number.";
// }
// var x = perfectNumber(28);
// console.log(x);


//////////////////////////// Task 8 //////////////////////////////////

function createArray(givenString) {
    var arrayWords = [];

    while (j < arrayWords.length) {
        for (var i = 0; i < givenString.length; i++) {
            if (" " !== givenString[i]) {
                arrayWords[j][i] = givenString[i];
            }
        }
    }
}






function createAWord() {

}























































