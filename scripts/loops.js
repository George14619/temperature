// start point
// condition to stop
// interval

// FOR LOOP
//Challenge 1: 
// create a function that get a num from the prompt 
// and displays on the console the multiplication table

function multTable(){
    //get the num from prompt
    let num = Number(prompt("Enter the number:"));
    let result =0;
    document.write(`<h3> Table of ${num} </h3>`);
    //loop i to 10
    for(let i=0;i<=10;i++){
        result = num * i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`);
    } 
}

// // WHILE LOOP
// let i=0;//start point

// while(i<=10){ // stop condition
//     console.log(i);
//     i++;// interval
// }

// //DO-WHILE LOOP
// let j=0;// start point
// do{
//     console.log(j);
//     j++;// interval
// }while(j<=10); //condition

// while function
function startCountdown(){
    let seconds =10;
    let result ="";
    while (seconds>0){
        result += `<p>Launching in ${seconds} seconds ...</p> `;
        seconds--; // discount one by one
    }
    result += "🚀Liftoff!!!"
    document.getElementById("output").innerHTML=result;
}

//do-while function
function passwordPrompt(){
    let correctPassword="secret123";
    let userInput;
    let result ="Simulating password input ... ";

    do{
        userInput = prompt("Enter your password:");
        result += " User entered: " + userInput;
    }while(userInput !== correctPassword);
    result += "Welcome to the system";

    document.getElementById("output").innerHTML=result;
}

//for loop 
function showProducts(){
    let products = ["Laptop","Phone","Tablet","Smartwatch"];
    let result = "Available products";

    for(let i=0;i<products.length;i++){
        result += `<li>Product ${i+1}: ${products[i]}</li>`;
    }

    document.getElementById("output").innerHTML=result;
}