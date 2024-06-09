function addInput() {
    const inputsDiv = document.getElementById('inputs');
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('input-group');
    newInputGroup.innerHTML = `
        <input type="number" step="0.01" placeholder="Enter GPA" class="gpa">
        <input type="number" placeholder="Enter Credit Hours" class="credits">
    `;
    inputsDiv.appendChild(newInputGroup);
}

function calculateCGPA() {
    const gpas = document.querySelectorAll('.gpa');
    const credits = document.querySelectorAll('.credits');

    let totalGPA = 0;
    let totalCredits = 0;

    for (let i = 0; i < gpas.length; i++) {
        const gpa = parseFloat(gpas[i].value);
        const credit = parseFloat(credits[i].value);

        if (!isNaN(gpa) && !isNaN(credit)) {
            totalGPA += gpa * credit;
            totalCredits += credit;
        }
    }

    const cgpa = totalGPA / totalCredits;
    document.getElementById('output').innerText = isNaN(cgpa) ? 'Please enter valid inputs' : `Your CGPA is: ${cgpa.toFixed(2)}`;
}