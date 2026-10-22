function countLongWords(sentence, minLength = 4) {
    let words = sentence.split(" ");
    let count = 0;

    for (let word of words) {
        if (word.length > minLength) {
            count++;
        }
    }

    return count;
}

console.log(countLongWords(" I love learning JavaScript daily"));