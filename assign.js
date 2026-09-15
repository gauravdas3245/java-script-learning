// 3.	Write a JavaScript function `getResult(marks, passMark = 40)` that returns:
// "A" for marks >= 80
//  "B" for marks >= 60 and below 80
// "C" for marks >= passMark and below 60
// "F" for marks below passMark
// Use a function declaration, a default parameter, if/else-if/else, and `return`.
// Example: `getResult(72)` should return "B".


function getResult(marks, passMark = 40) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60 && marks < 80) {
        return "B";
    } else if (marks >= passMark && marks < 60) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getResult(72));



// 3.	Write a function `calculateTotal(numbers)` that uses a `for` loop to add all numbers in an array and returns the total.
//  Then create a function `getStatus(total, target = 100)` that returns "Target Reached" when total >= target and "Target Not Reached" otherwise.
// Use `return` rather than printing the result from inside the functions.
//  Example: `calculateTotal([20, 35, 50])` returns `105`; `getStatus(105)` returns "Target Reached"


function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
function getStatus(total, target = 100) {
    if (total >= target) {
        return "Target Reached";
    } else {
        return "Target Not Reached";
    }
}
let total = calculateTotal([20, 35, 50]);
let status = getStatus(total);
console.log(total);
console.log(status); 