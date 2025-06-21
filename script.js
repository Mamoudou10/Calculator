// Calculator state variables
let currentNumber = '';
let previousNumber = null;
let currentOperator = null;
let waitingForSecondNumber = false;
let displayValue = '0';

// Get display element
const display = document.getElementById('display');

// Update display function
function updateDisplay() {
    display.textContent = displayValue;
}

// Append number to current input
function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) {
        return; // Prevent multiple decimal points
    }
    
    if (waitingForSecondNumber) {
        currentNumber = number;
        waitingForSecondNumber = false;
    } else {
        currentNumber += number;
    }
    
    displayValue = currentNumber;
    updateDisplay();
}

// Set operator and handle chaining
function setOperator(operator) {
    if (currentNumber === '' && previousNumber === null) {
        return; // No number to operate on
    }
    
    if (currentNumber !== '') {
        // If we have a current number, evaluate the previous operation if it exists
        if (previousNumber !== null && currentOperator !== null) {
            const result = operate(previousNumber, parseFloat(currentNumber), currentOperator);
            if (typeof result === 'string') {
                // Error occurred
                displayValue = result;
                updateDisplay();
                return;
            }
            previousNumber = result;
            displayValue = result.toString();
        } else {
            // First operation, just store the number
            previousNumber = parseFloat(currentNumber);
        }
        
        currentOperator = operator;
        currentNumber = '';
        waitingForSecondNumber = true;
        updateDisplay();
    } else if (previousNumber !== null) {
        // User is changing the operator
        currentOperator = operator;
    }
}

// Calculate final result
function calculate() {
    if (currentNumber === '' || previousNumber === null || currentOperator === null) {
        return; // Not enough data to calculate
    }
    
    const result = operate(previousNumber, parseFloat(currentNumber), currentOperator);
    if (typeof result === 'string') {
        // Error occurred
        displayValue = result;
    } else {
        displayValue = result.toString();
        previousNumber = result;
    }
    
    currentNumber = '';
    currentOperator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

// Clear display and reset calculator state
function clearDisplay() {
    currentNumber = '';
    previousNumber = null;
    currentOperator = null;
    waitingForSecondNumber = false;
    displayValue = '0';
    updateDisplay();
}

// Arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Main operate function
function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

// Initialize display
updateDisplay();

