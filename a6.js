let text = "madam";
let reverse = "";

for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
}

if (text === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}