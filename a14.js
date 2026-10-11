function getPassingAverage(marks, passMark = 40) {
    let total = 0;
    let count = 0;

    for (let mark of marks) {
        if (mark >= passMark) {
            total += mark;
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return total / count;
}

let marks = [35, 60, 80, 25, 90];

console.log("Passing students' average:",getPassingAverage(marks));