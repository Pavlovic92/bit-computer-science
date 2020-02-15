// var star = "";
// var num = 13;

// var shape = "";

// for (var index = 0; index < num; index++) {
//     star += "* ";
//     shape += star + "\n";
// }
// console.log(shape);


/////////////////// PRACTICE 1: ////////////////////////////

// var array = [3, 4, 5];
// var result = "";

// for (var i = 0; i < array.length; i++) {
//     result = result + array[i] + "\n";

// }
// console.log(result);


/////////////////// PRACTICE 2: ////////////////////////////

// var array = [3, 4, 5];
// var copy = [];


// for (var i = 0; i < array.length; i++) {
//     copy[i] = array[i] * 2;
// }
// console.log(copy);


/////////////////// PRACTICE 3: ////////////////////////////

// var array = [3, 4, false, 5, "tito", 1];
// var copy = [];


// for (var i = 0; i < array.length; i++) {
//     var result = typeof array[i] === "number"
//     if (result) {
//         copy[copy.length] = array[i] * 2;
//     }
// }
// console.log(copy);


/////////////////// PRACTICE 4: ////////////////////////////

// var array = [1, 15, 4, 3, 6, 10, 11];
// var result = [];

// for (i = 0; i < array.length; i++) {
//     if (array[i] < 7) {
//         result[result.length] = array[i];
//     }
// }
// console.log(result);

/////////////////// PRACTICE 5: ////////////////////////////

// var array = [1, "ses", "ba", 15, 4, false, 3, 6, 10, 11];
// var result = [];
// var sum = 0;

// for (i = 0; i < array.length; i++) {
//     var type = typeof array[i] === "number";
//     if (type && array[i] < 6) {
//         result[result.length] = array[i];
//     }
// }
// for (var j = 0; j < result.length; j++) {
//     sum = sum + result[j]
// }


// console.log(sum);

/////////////////// PRACTICE 5: ////////////////////////////

// var first = [3, 4, false];
// var second = [2, 5, 8];
// var res = [];

// for (var i = 0; i < first.length; i++) {
//     res[res.length] = first[i] 
//     res[res.length] = second[i]
// }
// console.log(res);

/////////////////// PRACTICE 6: ////////////////////////////

// var first = [3, 4, false];
// var second = [2, 5, 8];
// var res = [];

// for (var i = 0; i < first.length; i++) {
//     res[i] = first[i]   
// }

// for (var j = 0; j < first.length; j++) {
//     res[res.length] = second[j]
// }


// console.log(res);


/////////////////// PRACTICE 7: ////////////////////////////


// var first = [3, 4, false];
// var second = [2, 5, 8];
// var res = [];
// for (var i = 0; i < first.length; i++) {
//     res[i] = first[i]
//     res[i + first.length] = second[i]
// }


// console.log(res);

/////////////////// PRACTICE 8: ////////////////////////////

// var trial = "";
// var n = 3;


// for (var j = 0; j < n; j++) {

//     for (var i = 0; i < n; i++) {
//         trial += "*\t";
//     }
//     trial += "\n";
// }


// console.log(trial);




