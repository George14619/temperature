console.log("Convert Celsius to Fahrenheit");

function convertTemperature(){
    console.log("I am a Function");
    let celsius= prompt("Enter Temp into Celsius");
    console.log(celsius);
    let fahrenheit =(celsius * 9/5) + 32;
    console.log(fahrenheit);

    // show the console log with a better message
    console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);
    document.getElementById("result").innerHTML = `The conversion of Celsius ${celsius} to Farenheit is ${fahrenheit}`;
}

//let temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
//console.log(temperatureInCelsius + temperatureInFahrenheit); document.getElementById("result").innerText = temperatureInCelsius + temperatureInFahrenheit;
