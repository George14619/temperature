console.log("Conditionals");

//if-statement
//if(condition){ y/n ?
// code to be executed if the condition is true
// } 

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 25;

if(student1==student2){
    console.log("The values are the same");
}

//if-else statement
//if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let isTrue = false;

if(isTrue==true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp = 92;

if(waterTemp >=100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

//Challenge 1: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age=30;

if(age>21){
    console.log("you are an adult" );
}else{
    console.log("you are underage")
}

//else-if statements
//if(condition){
// code to run if condition is true
// }else if(condition){
// code to run if condition is true
// }else{
// code to run if conditions wre false
// }

age = prompt("Enter your age");

if(age<13){
    console.log("You are a child");
}else if(age<21){
    console.log("You are a teenager");
}else if(age<64){
    console.log("You are an adult");
}else{
    console.log("You are a senior");
}

//Challenge 2: Movie ticket price calculator

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}


function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    
    if(tmp<15){
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt"; 
    }

    p.innerHTML="You should wear : " + outfit;
}