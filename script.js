//your code here
const input = document.getElementById('input');

let expression = '';

const updateInput = () => {
    input.value = expression;
};

// Number buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(`block${i}`).addEventListener('click', () => {
        expression += i;
        updateInput();
    });
}

// Operation buttons
document.getElementById('plus').addEventListener('click', () => {
    expression += '+';
    updateInput();
});

document.getElementById('minus').addEventListener('click', () => {
    expression += '-';
    updateInput();
});

document.getElementById('multiply').addEventListener('click', () => {
    expression += '*';
    updateInput();
});

document.getElementById('divide').addEventListener('click', () => {
    expression += '/';
    updateInput();
});

// Dot button
document.getElementById('dot').addEventListener('click', () => {
    expression += '.';
    updateInput();
});

// Clear button
document.getElementById('clr').addEventListener('click', () => {
    expression = '';
    updateInput();
});

// Equal button
document.getElementById('ans').addEventListener('click', () => {
    try {
        const result = eval(expression);
        expression = result.toString();
    } catch (e) {
        expression = 'Error';
    }
    updateInput();
});
