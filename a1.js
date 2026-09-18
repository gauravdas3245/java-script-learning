function firstFail(marks, passMark = 40) {
    let i;

    for (i = 0; i < marks.length; i++) {
        if (marks[i] < passMark) {
            break;
        }
    }

    if (i < marks.length) {
        return i;
    }

    return -1;
}

console.log(firstFail([65, 72, 33, 80]));