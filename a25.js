
const validateEmail = function(email) {
    let atPosition = email.indexOf("@");
    let dotPosition = email.lastIndexOf(".");

    if (atPosition <= 0) {
        return false;
    }

    if (dotPosition <= atPosition + 1) {
        return false;
    }

    if (dotPosition === email.length - 1) {
        return false;
    }

    return true;
};

console.log(validateEmail("rahul@gmail.com"));
console.log(validateEmail("rahulgmail.com"));
console.log(validateEmail("rahul@"));
