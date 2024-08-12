// Get the input box element
const inputBox = document.getElementById('inputbox');

// Get all buttons
const buttons = document.querySelectorAll('button');

// Variable to store the current input
let currentInput = '';

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'AC') {
            // Clear the input box
            currentInput = '';
            inputBox.value = '0';
        } else if (buttonText === 'DEL') {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput || '0';
        } else if (buttonText === '=') {
            try {
                // Evaluate the expression
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch (error) {
                inputBox.value = 'Error';
            }
        } else {
            // Append the clicked button's text to the input
            currentInput += buttonText;
            inputBox.value = currentInput;
        }
    });
});
