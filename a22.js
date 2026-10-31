
function getStudentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Rahul",
                course: "BCA",
                semester: 1
            });
        }, 2000);
    });
}

async function displayStudent() {
    console.log("Fetching student data...");

    let student = await getStudentData();

    console.log("Student Name:", student.name);
    console.log("Course:", student.course);
    console.log("Semester:", student.semester);
}

displayStudent();
