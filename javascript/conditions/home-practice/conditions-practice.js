///////////////////////////// PRACTICE TASK 1: /////////////////////////////
//Write a function to find a negative or positive number.

function signOfProduct(num1) {
    if (num1 > 0) {
        text = "The number is not negative.";
    } else {
        text = "The number is negative.";
    }
    return res;
}

var result = signOfProduct(-9);
console.log(result);

///////////////////////////// PRACTICE TASK 2: /////////////////////////////
//Find all the negative numbers in the array.

var array = [3, -7, 2, -2, 10, 11, -5];
var emptyArray = [];

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        emptyArray[emptyArray.length] = array[i];
    }
}

console.log(emptyArray);

///////////////////////////// PRACTICE TASK 3: /////////////////////////////
//Write a conditional statement to find the largest of number.

var num1 = 19,
    num2 = 22,
    num3 = 1,
    num4 = -2,
    num5 = -10,
    num6 = 132;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6) {
    result = num1 + " is the largest number.";
} else if (num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6) {
    result = num2 + " is the largest number."
} else if (num3 > num4 && num3 > num5 && num3 > num6) {
    result = num3 + " is the largest number."
} else if (num4 > num5 && num4 > num6) {
    result = num4 + " is the largest number."
} else if (num5 > num6) {
    result = num5 + " is the largest number."
} else {
    result = num6 + " is the largest number."
}

console.log(result);


///////////////////////////// PRACTICE TASK 4: /////////////////////////////
//Write a conditional statement to print three numbers as sorted number list.

var num1 = 110,
    num2 = 1115,
    num3 = 31555;

if (num1 > num2 && num2 > num3) {
    result = 'First solution: ' + num1 + ' ' + num2 + ' ' + num3;
} else if (num1 > num3 && num3 > num2) {
    result = 'Second solution: ' + num1 + ' ' + num3 + ' ' + num2;
} else if (num2 > num1 && num1 > num3) {
    result = 'Third solution: ' + num2 + ' ' + num1 + ' ' + num3;
} else if (num2 > num3 && num3 > num1) {
    result = 'Forth solution: ' + num2 + ' ' + num3 + ' ' + num1;
} else if (num3 > num1 && num1 > num2) {
    result = 'Fifth solution: ' + num3 + ' ' + num1 + ' ' + num2;
} else {
    result = 'Sixth solution: ' + num3 + ' ' + num2 + ' ' + num1;
}

console.log(result);


///////////////////////////// PRACTICE TASK 4: /////////////////////////////
//Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.

var someNum = 723;
var result = 0;

if (typeof someNum === "number" && someNum % 2 === 0) {
    result = someNum / 2;
} else {
    result = "X";
}

console.log(result);


///////////////////////////// PRACTICE TASK 5: /////////////////////////////
//Write a program that compares two numbers and displays the larger. Display the result in the console.

var num1 = 155,
    num2 = 2131;
var result = "";

if (num1 > num2) {
    result = "Number 1 is greater than Number 2."
} else {
    result = "Number 2 is greater than Number 1."
}

console.log(result);


///////////////////////////// PRACTICE TASK 6: /////////////////////////////
//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.

var num1 = 5,
    num2 = 13,
    result = 0;

if (num2 > num1) {
result = "The result is: " + (num2 - num1);
} else {
    result = "The result is: " + (num1 - num2) * 2;
}

console.log(result);


