function convertTemperature() {
    let tempInput = document.getElementById("temperature").value;
    let scale = document.getElementById("scale").value;
    let resultElement = document.getElementById("result");

    if (tempInput === "") {
        resultElement.textContent = "Please enter a temperature.";
        resultElement.className = "";
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedTemp;

    if (scale === "C") {
        convertedTemp = (temperature * 9/5) + 32;
        resultElement.textContent = `${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        resultElement.textContent = `${convertedTemp.toFixed(2)} °C`;
    }

    
    resultElement.className = "";

    
    if (convertedTemp <= 10) {
        resultElement.classList.add("cold");
    } else if (convertedTemp > 10 && convertedTemp <= 30) {
        resultElement.classList.add("warm");
    } else {
        resultElement.classList.add("hot");
    }
}

