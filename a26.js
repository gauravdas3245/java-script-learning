
function sortStudents(students) {
    return students.sort(function(a, b) {
        return a.marks - b.marks;
    });
}

const students = [
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 90 },
    { name: "Riya", marks: 60 }
];

const result = sortStudents(students);

result.forEach(function(student) {
    console.log(student.name, student.marks);
});
