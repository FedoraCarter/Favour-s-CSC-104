function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compounds = parseFloat(document.getElementById('compounds').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds)) {
        document.getElementById('output').innerText = 'Please enter valid inputs';
        return;
    }

    const amount = principal * Math.pow((1 + rate / compounds), compounds * time);
    const interest = amount - principal;

    document.getElementById('output').innerText = `The compound interest is: ${interest.toFixed(2)}`;
}