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

// function search_word(text, word){

//     var x = 0, y=0;

//     for (i=0;i< text.length;i++)
//         {
//         if(text[i] == word[0])
//             {
//             for(j=i;j< i+word.length;j++)
//                {
//                 if(text[j]==word[j-i])
//                   {
//                     y++;
//                   }
//                 if (y==word.length){
//                     x++;
//                 }
//             }
//             y=0;
//         }
//     }
//    return "'"+word+"' was found "+x+" times.";
// }

// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

//////////////////////////// Task 9 //////////////////////////////////

// function afterMonkeyA(afterString) {
//     var trueString = '';

//     for (var i = 0; i < afterString.length; i++) {

//         if ('@' === afterString[i]) {
//             for (var j = i; j < afterString.length; j++) {
//                 trueString += afterString[j];
//             }
//         }
//     }
//     var finalString = '';
//     for (var n = 0; n < 3; n++) {
//         finalString += afterString[n];
//     }
//     return finalString + '...' + trueString;
// }

// var x = afterMonkeyA("myemailaddress@bgit.rs");

// console.log(x);

//////////////////////////// Task 10 //////////////////////////////////

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
var b=0;
var result = 0;
for (var i = 0; i<array.length; i++){
    var a = array[i]
    for(var j = 0; j < array.length; j++){
        if(a < array[j]){
            b++
            result = " " + b + a
        }
    }
}

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
var b=0;
var result = 0;
for(var j = 0; j < array.length; j++){
    var a = array[j]
    if (a < array[j]){
        b++
        result = " " + b + a
    }
}


console.log(result);















