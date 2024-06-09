function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    let output = '';

    if (inputValue === '') {
        output = 'Please enter a value';
    } else {
        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            output = 'Please enter a valid number';
        } else {
            if (inputUnit === 'Celsius') {
                const toFahrenheit = (value * 9 / 5) + 32;
                const toKelvin = value + 273.15;
                output = `${value} °C = ${toFahrenheit.toFixed(2)} °F = ${toKelvin.toFixed(2)} K`;
            } else if (inputUnit === 'Fahrenheit') {
                const toCelsius = (value - 32) * 5 / 9;
                const toKelvin = (value + 459.67) * 5 / 9;
                output = `${value} °F = ${toCelsius.toFixed(2)} °C = ${toKelvin.toFixed(2)} K`;
            } else if (inputUnit === 'Kelvin') {
                const toCelsius = value - 273.15;
                const toFahrenheit = (value * 9 / 5) - 459.67;
                output = `${value} K = ${toCelsius.toFixed(2)} °C = ${toFahrenheit.toFixed(2)} °F`;
            }
        }
    }

    document.getElementById('output').innerText = output;
}