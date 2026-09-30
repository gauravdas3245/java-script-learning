function reverseString(text) {
    let reverse = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverse = reverse + text[i];
    }

    return reverse;
}

console.log(reverseString("Gaurav"));