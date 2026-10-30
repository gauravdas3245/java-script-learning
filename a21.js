
function checkPassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }

        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        }

        if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasDigit
    ) {
        return "Strong";
    }

    if (password.length >= 6 &&
        (hasUpper || hasLower || hasDigit)) {
        return "Medium";
    }

    return "Weak";
}

console.log(checkPassword("Rahul123"));
console.log(checkPassword("hello12"));
console.log(checkPassword("abc"));
