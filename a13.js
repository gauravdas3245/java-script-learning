function countPassed(marks, passMark = 40) {
    let count = 0;

    for (let mark of marks) {
        if (mark >= passMark) {
            count++;
        }
    }

    return count;
}

let marks = [35, 67, 28, 80, 45, 90];

console.log("Students passed:", countPassed(marks));