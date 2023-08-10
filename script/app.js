"use strict";
// arrays and enum
var subjects;
(function (subjects) {
    subjects[subjects["SAD"] = 0] = "SAD";
    subjects[subjects["SAM"] = 1] = "SAM";
    subjects[subjects["WT"] = 2] = "WT";
})(subjects || (subjects = {}));
let student = {
    name: "Aaryash",
    age: 20,
    address: "Lagan",
    subject: subjects[subjects.WT],
};
let studentsList = [
    {
        name: "Aditya",
        age: 25,
        address: "Kalanki",
        subject: subjects[subjects.SAM],
    },
    {
        name: "Benup",
        age: 22,
        address: "Patan",
        subject: subjects[subjects.SAD],
    },
];
studentsList.push(student);
function getStudentsList(students) {
    students.forEach((student) => {
        console.log(`${student.name} live in ${student.address} and studies ${student.subject}`);
    });
}
getStudentsList(studentsList);
// Rest parameter - allow to pass a variable number of arguments of same type
function getNumbers(...nums) {
    nums.forEach((num) => {
        console.log("number: " + num);
    });
}
getNumbers(1, 2, 3, 4);
getNumbers(33, 44);
// Default parameter - assign default value to parameter if arg isn't passed
function GetInfo(info = "happy") {
    console.log(info);
}
GetInfo("sad");
GetInfo();
//# sourceMappingURL=app.js.map