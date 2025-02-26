console.log("Hello World!");
console.log("My name is " + "Leo " + "I'm " + 30 + " years old");

// This is a comment
// STRING VARIABLES
let name = "Peter";
let lastName = "Parker";

console.log(name);
console.log(lastName);

// CREATING NUMERICAL VARIABLES
let age = 35;
console.log(age);

let grade = 9.5;
console.log(grade);

// BOOLEAN VARIABLES(true or false)
let isAProfessor = true;
let isAStudent = false;
let isAdmin = true;

console.log(isAdmin);

/* Many lines of comments
xxxxxx
xxxxxx
xxxxxx
End of this comment */

let number1 = 8.3;
let number2 = 4;
let addition = (number1 + number2);
// 50 plus five equal 55
//console.log(number1 + " plus " + number2 + " equals to " + (number1 + number2));
console.log(number1 + " plus " + number2 + " equals to " + addition); // addition

number1 = 7;
number2 = 3;
let substration = (number1 - number2);
console.log(number1 + " - " + number2 + " = " + substration); //number1 - number2 = substration

let multiplication = (number1 * number2);
console.log(number1 + " * " + number2 + " = " + multiplication); // multiplication

let division = (number1 / number2).toFixed(2);
console.log(number1 + " / " + number2 + " = " + division); // division

// LET VS VAR
let y = 10;
console.log(y);

console.log(x);
var x = 5;

//let school = "SDGKU";
//let school = "School2";

var school = "SDGKU";
var school = "School2";
console.log(school);

//let: gives you more precise control over the variable's scope.
//let is part of the modern best practices in JavaScript, while var is an older feature

//CONSTANT VARIABLES
const pi = 3.1416;
const myName = "Leo";
console.log(pi);
console.log(myName);
// const value cannot be reassigned or changed. 
// It's useful when you want to make sure the value stays the same throughout your code.