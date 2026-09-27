// Student Grade Calculator

let name = "Rahul";
let marks = [78, 65, 82, 90, 71];

// Calculate total marks
let total = 0;

for (let mark of marks) {
    total += mark;
}

// Calculate average
let average = total / marks.length;

// Decide grade
let grade;

if (average >= 90) {
    grade = "A+";
} else if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Display result
console.log("Student Name:", name);
console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);