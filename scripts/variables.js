console.log("Hello World");
console.log("My name is "+ "George " + "i'm " + 42 + " year's old"); 

// This is a comment
// STRING VARIABLES
let name = "Peter";
let LastName ="Parker";

console.log("Peter");

console.log("Parker");

console.log("Hello " + "Peter " + "Parker.");

console.log("Hello " + name + " " + LastName  + ".");

// CREATING NUMRICAL VARIABLES
let age = 35;
console.log(age);

let grade =9.5;
console.log(grade);

// BOOLEAN VARIABLES (TRUE OR FALSE)
let isAProfessor = true;
let isAStudent = false;
let isAdmin = true;
console.log(isAProfessor);
console.log(isAStudent);
console.log(isAdmin);

/* Many lines of comments
xxxxxxx
xxxxxxx
xxxxxxx
End of this comment */

//addition
let number1 = 50;
let number2 = 5;
let addition = (number1 + number2);
console.log(number1 + number2 );
//50 plus five equal 55
//console.log(number1 + " plus " + number2 + " equals to " + (number1 + number2))
console.log(number1 + " plus " + number2 + " equals to " + addition)

number1 = 10;
number2 = 3;
let subtraction = (number1 - number2);
console.log(number1 + number2 );
console.log(); //number1-number2 =
console.log(number1 + " - " + number2 + " = " + subtraction);

//mutiplication
let mutiplication =(number1 * number2);
console.log(number1 + " * " + number2 + " = " + mutiplication); 

//division
let division =(number1 / number2).toFixed(2);
console.log(number1 + " / " + number2 + " = " + division);

//Let Vs. Var
let y=10;
console.log(y);
console.log(x);
var x=5;

//let school = "SDGKU";
//let school = "School2"

var school = "SDGKU";
var school = "School2"

//use "let" dont use "var" 
// //let: gives you more precise control over the variable's scope.
//let is part of the modern best practices in JavaScript, while var is an older feature

//constant variables
// value cannot be reassigned or changed. 
// It's useful when you want to make sure the value stays the same throughout your code.
const pi=3.1416;
const myName = "George";