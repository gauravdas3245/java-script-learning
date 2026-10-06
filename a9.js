function processMarks(marks) {
    let gradeA = 0;

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {
            continue;
        }

        if (marks[i] >= 90) {
            console.log(marks[i] + " : Grade A");
            gradeA++;
        } 
        else if (marks[i] >= 80) {
            console.log(marks[i] + " : Grade B");
        } 
        else if (marks[i] >= 70) {
            console.log(marks[i] + " : Grade C");
        } 
        else if (marks[i] >= 60) {
            console.log(marks[i] + " : Grade D");
        } 
        else {
            console.log(marks[i] + " : Grade F");
        }
    }

    return gradeA;
}

let marks = [95, 85, 72, 65, 45, 110, -5, 92];

let result = processMarks(marks);

console.log("Number of students who received Grade A:", result);