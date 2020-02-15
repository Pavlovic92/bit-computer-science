// Delete the comments per task, so you can see the results in the console. //

/////////////////////// PRACTICE ///////////////////////

// var number = 1;
// var maxNumber = 10;

// while (number <= maxNumber) {
//     console.log("number is : " + number);
//     var number = number + 1;
// }


//////////////////////////////////////////////
// var minNumber = 1;
// for (var number = 10; number >= minNumber; number--) {
//     console.log("Number is: " + number);
// }


//////////////////////////////////////////////
// for (var x = 0; x <= 10; x++) {
//     console.log(x * x);
// }

/////////////////////////////////////////////

// var a = [5, "a", true, 6, NaN, 7, 8, undefined, false, 58, 16, 19, "s"];

// for (var i = 0; i < a.length; i += 2) {
//     if (typeof a[i] === 'number') {
//         console.log(a[i]);
//     }
// }

/////////////////////////////////////////////

// var stars = "";
// var d = 3;

// for (i = 0; i < d; i++) {
//     stars += "*\t"
//     console.log(stars);
// }


//////////////////////////////////////////////

//////////////////////////////////// TASK 1: ////////////////////////////////////

// for (number = 0; number < 15; number++) {
//     if (number % 2 === 0) {
//         console.log("Number " + number + " is even.");
//     } else {
//         console.log("Number " + number + " is odd.");
//     }

// }


///////////////////////////////// TASK 2: ////////////////////////////////////////

// var result = 0;

// for (var number = 1; number < 1000; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         result = result + number;
//     }
// }
// console.log(result)


///////////////////////////////// TASK 3: ////////////////////////////////////////

// var result = 0;
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var index = 0; index < array.length; index++) {

//     result = result + array[index];
// }

// console.log(result);


///////////////////////////////// TASK 4: ////////////////////////////////////////

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var res = "";

// for (var i = 0; i < x.length; i++) {
//     res = res + x[i];
// }
// console.log(res);

///////////////////////////////// TASK 5: ////////////////////////////////////////

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

// for (i = 0; i < a.length; i++) {
//     for (n = 0; n < a[i].length; n++) { //Don't use the same name for variables for "for" inside the "for" loop.
//         console.log(a[i][n]);           //Variable inside the second "for" is always backed to it's original value, which is 0 in this case.
//     }
// }

///////////////////////////// TASK 5: Vol. 2 /////////////////////////////////////

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

// var res = "";

// for (i = 0; i < a.length; i++) {
//     for (n = 0; n < a[i].length; n++) { //Don't use the same name for variables for "for" inside the "for" loop.
//         res += a[i][n] + "\t";           //Variable inside the second "for" is always backed to it's original value, which is 0 in this case.
//     }
//     res += "\n"
// } console.log(res);

///////////////////////////TASK 6/////////////////////////////////////////

var star = "";
var num = 13;

var shape = "";

for (var index = 0; index < num; index++) {
    star += "*";
    shape += star+;
}
console.log(shape);