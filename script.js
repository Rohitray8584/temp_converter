function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let resultText = '';

    switch (selectedUnit) {
        case 'celsius':
            convertedTemp = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            resultText = `${temperature}°C is ${convertedTemp.fahrenheit.toFixed(2)}°F and ${convertedTemp.kelvin.toFixed(2)}K.`;
            break;

        case 'fahrenheit':
            convertedTemp = {
                celsius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            resultText = `${temperature}°F is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.kelvin.toFixed(2)}K.`;
            break;

        case 'kelvin':
            convertedTemp = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            resultText = `${temperature}K is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.fahrenheit.toFixed(2)}°F.`;
            break;
    }

    document.getElementById('result').innerHTML = resultText;
}
