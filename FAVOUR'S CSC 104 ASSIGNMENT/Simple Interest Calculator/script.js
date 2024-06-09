function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('output').innerText = 'Please enter valid inputs';
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('output').innerText = `The simple interest is: ${interest.toFixed(2)}`;
}