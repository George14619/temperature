function convertTemperatureRange() {
    let startValue = parseInt(document.getElementById("start").value);
    let endValue = parseInt(document.getElementById("end").value);
    let scale = document.getElementById("scale").value;
    
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    
    if (isNaN(startValue) || isNaN(endValue)) {
        resultsDiv.innerHTML = "<p>Please enter valid numbers.</p>";
        return;
    }
    
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;
        let output;
        if (scale === "C") {
            convertedTemp = (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
            output = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
        } else {
            convertedTemp = (temp - 32) * 5/9; // Convert Fahrenheit to Celsius
            output = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
        }
        resultsDiv.innerHTML += `<p>${output}</p>`;
    }
}