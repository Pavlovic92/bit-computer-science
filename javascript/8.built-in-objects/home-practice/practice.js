////////////////////////////// STRING METHODS: //////////////////////////////

/////// toUpperCase() and toLowerCase() ///////

// var str = new String ('Hello World!');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


////// charAt() ///////

// var str = new String ('Hello World!');
// console.log(str.charAt(6));
// console.log(str[6]);


////// indexOf() ///////

// var str = new String('I am on the top of the World!');
// console.log(str.indexOf('t'));
// console.log(str.indexOf('t', 2));
// console.log(str.lastIndexOf('e')); //It reads from left to right.

// console.log(str.indexOf('am')); //We can also search for a whole string, not only characters. 
// console.log(str.indexOf('Am')); //The search is case sensitive.

// console.log(str.toLowerCase().indexOf('world!')); //For a case-insensitive search, you can transform the string to lowercase first and then search.


////// slice() and split() ///////

// var str = new String('Hello, how are you today?')
// console.log( str.slice(0, 5)); //Return a piece of the string when you specify start and end positions.

// console.log(str.split(' ')); //Return: [ 'Hello,', 'how', 'are', 'you', 'today?' ]
// console.log(str.split('')); //Return: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 't', 'o', 'd', 'a', 'y', '?']
// console.log(str.split('')[4]); //Return: o
// console.log(str.split('Hello, ')); //Return: [ '', 'how are you today?' ]



////////////////////////////// ARRAY: //////////////////////////////

var practiceArray = new Array (1, 2, "Hello", true, null, undefined); //When using the Array() constructor, you can also pass values that will be assigned to the new array's elements
console.log(practiceArray); 

var practiceArray = new Array (3); //An exception to this is when you pass a single number to the constructor. In this case, the number is considered to be the length of the array.
console.log(practiceArray);

