//document.write(`
    //<p> 2 x 0 = 0</p>
    //<p> 2 x 1 = 2</p>
    //<p> 2 x 2 = 4</p>
    //<p> 2 x 3 = 0</p>
    //<p> 2 x 4 = 0</p>
    //<p> 2 x 5 = 0</p>
    //<p> 2 x 6 = 0</p>
    //<p> 2 x 7 = 0</p>
    //<p> 2 x 8 = 0</p>
    //<p> 2 x 9 = 0</p>
    //<p> 2 x 10 = 0</p>
    //`)

    //for(let i=0;i<11;i++){
    ///    document.write(`<p> 2 * ${i} = ${i*2} </p>`)
//}

//for(let i=2; i<21; i+=2){
//    document.write(`<p> 2 * ${i} = ${i*2} </p>`)
//}
//let num=5
//let result=0;
////or(let i=1;i<10;i++){
   // result = num * i;
    //document.write(`<p> ${num} * ${i} = ${result} </p>`)
//}

//nuiltTable();

//While Loop
//let i=0;//start point
//while(i<=10){//stop condition
//    console.log(i);
//    i++;//inerval
//}

//Do-while loop
//let j=0;
//do{
//    console.log(j);
//    j++;
//}while(j<=10);


//while function
function startCountdown(){
    let seconds =10;
    let result ="";
    while (seconds>0){
        result += `<p>Launching in ${seconds} seconds ...</p>`
        seconds--; //discount one by one
    }
    result += "liftoff!!!"
    document.getElementById("output").innerHTML=result;
}

//do-while function
function passwordPromt(){
    let correctPassword="secret123"
    let userInput;
    let result = "Simulating password input ..."

    do{
        userInput = prompt("Enter your password");
        result += "User entered:" + userInput;
    }while(userInput !== correctPassword);
    document.getElementById("output").innerHTML=result
}


//for loop
function showProducts(){
    let showProducts =["Laptop", "Phone", "Tablet", "Smartwatch"];
    let result = "Available products";

    for(let i=0;i<Products.lenght;++){
        result += `<li>Product ${i+1}: ${Products}`;
    }

    document.getElementById("output").innerHTML.results;
}