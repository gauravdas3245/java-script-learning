function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Error: Cannot divide by zero";
            }
            return a / b;

        default:
            return "Invalid operation";
    }
}

let result = calculate(20, 5, "*");

console.log("Result:", result);