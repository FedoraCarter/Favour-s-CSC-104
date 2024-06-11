function convertCurrency() {
    const nairaValue = document.getElementById('inputValue').value;
    const exchangeRate = 0.0009; // Example exchange rate, you can update this with the current rate
    let output = '';

    if (nairaValue === '') {
        output = 'Please enter an amount in Naira';
    } else {
        const naira = parseFloat(nairaValue);
        if (isNaN(naira)) {
            output = 'Please enter a valid number';
        } else {
            const dollars = naira * exchangeRate;
            output = `${naira.toFixed(2)} NGN = ${dollars.toFixed(2)} USD`;
        }
    }

    document.getElementById('output').innerText = output;
}