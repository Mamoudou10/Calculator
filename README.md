🧮 JavaScript Calculator

A simple calculator built with JavaScript that supports basic arithmetic operations and evaluates expressions one pair of numbers at a time, just like a real calculator.
🚀 Features

    Addition, Subtraction, Multiplication, Division

    Handles one operation at a time (e.g., 12 + 7, then continues with result 19)

    Chained operations (e.g., 12 + 7 - 4 evaluates 12 + 7 = 19, then 19 - 4)

    Error handling for invalid operations like division by zero

🧱 Project Structure

calculator/
├── index.html       # The main HTML interface
├── styles.css       # Styling for the calculator (optional)
└── script.js        # Core calculator logic (input handling, operations)

📦 How It Works

    User enters a number.

    User selects an operator (+, -, *, /).

    User enters a second number.

    Upon selecting another operator or pressing =, the calculator:

        Evaluates the first pair of numbers.

        Displays the result.

        Uses that result as the starting point for the next operation.

Example:

Input:   12 [+] 7 [-] 4 [=]
Result:  ((12 + 7) = 19), then (19 - 4) = 15

💡 Usage

To use the calculator:

    Clone or download the repository.

    Open index.html in any web browser.

    Use the buttons or input keys to perform calculations.

🔧 Functions Overview (script.js)

    inputNumber(number)
    Appends a digit to the current number (either first or second).

    inputOperator(operator)
    If two numbers exist, evaluates the current operation first, then sets the new operator.

    inputEquals()
    Finalizes and evaluates the current operation.

    operate(operator, a, b)
    Takes an operator and two numbers and performs the calculation.

⚠️ Edge Cases Handled

    Prevents division by zero (displays error)

    Handles chained operations correctly

    Resets correctly after displaying a result

📸 Demo (optional)

You can embed a screenshot or link to a live preview (e.g. CodePen, GitHub Pages).
📄 License

This project is free to use for learning purposes.
