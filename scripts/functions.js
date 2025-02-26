console.log("functions.js file");

let name = "Mike";
let lastName="Scott";

//concatenation
console.log("Hello " + name + " " + lastName + ", welcome!");
console.log(`Hello ${name} ${lastName} ${1+1}, welcome!`);

// 1. function declaration (create a function)
function sayHello(){
    //body of the function
    console.log("Hello Cohort 56");
}

// 2. call the function (code, console, from the user)
sayHello();
sayHello();

// Example 2, with 1 parameter
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Jeffrey"); 
greet("George");

// Example 3, with 2 parameters
function greet2(name1,name2){
    console.log(`Hello ${name1} and ${name2}, welcome to the system.`);
}

greet2("Erick","Isai");
greet2("George","Jeffrey");

// Challenge 1: Double the Number
// Task:
// - Create a function called `doubleNumber` that takes one number as a parameter.
// - The function should return the number multiplied by 2.
// - Print the result when you call the function with different numbers.

function doubleNumber(num){
    let total = num *2;
    console.log(total);
    let tax = total*.08;
    console.log("Taxes = " + tax);
}

doubleNumber(4); // 8
doubleNumber(10); //20

//Example 4, with prompt

function welcome(){
    let name2 = prompt("Enter your name:");
    let age2 = prompt("Enter the age:")
    console.log(`Welcome ${name2} - ${age2}`);// print the age
}

// Example 5, default parameters 
function add(num1=0,num2=0){
    console.log(`the total is ${num1} + ${num2} = ${num1+num2}`);
    document.write(`<p>The total is ${num1} + ${num2} = ${num1+num2}</p>`);
}

add();
add(57.6,38.4);
add(54.3,100);

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName="Unknown",lastName="Unknown"){
    console.log(`${firstName} + ${lastName}`);
}

combineNames("George", "Robinson");   // Should print: Alice Johnson
combineNames("George")
// Challenge 3: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should return the number of seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

function convertToSeconds(){
    let min = prompt("Enter the minutes");
    let seconds = min*60;
    document.getElementById("results").innerHTML+=`<p>${seconds}s </p>`
    
}
// trigger the function with a button and get the mins from the prompt.



