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
// ! rest and default function
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
// ! Anonymous and lambda function
// anonymous function doesn't have a function name and is assigned to a const
let studentName = function (lName, fName) {
    return `${fName} ${lName}`;
};
console.log(studentName("Shakya", "Aaryash"));
// lambda function is fat arrow function 
let studentContact = (phone, address) => {
    return `Phone: ${phone} Address:${address}`;
};
console.log(studentContact(9861616161, 'Kathmandu'));
let teacher = {
    name: 'Deepak',
    age: 40,
    subject: 'SAD',
};
let teachersList = [
    {
        name: 'Shishir',
        age: 34,
        subject: 'WT',
    },
    {
        name: 'Manish',
        age: 45,
        subject: 'SAM',
    }
];
// ! class
class courses {
    // private cName:string
    // private cCode:number
    // constructor(arg_cName:string,arg_cCode:number){
    //   this.cName = arg_cName
    //   this.cCode = arg_cCode
    // }
    // SHORTCUT: directly initializing a var in constructor
    constructor(cName, cCode) {
        this.cName = cName;
        this.cCode = cCode;
    }
    getCourse() {
        return `Course name:${this.cName} Course code:${this.cCode}`;
    }
}
const course1 = new courses('BScCSIT', 12345);
console.log(course1.getCourse());
// ! generics
let teachersListGeneric = [
    {
        name: 'Shishir',
        age: 34,
        subject: 'WT',
    },
    {
        name: 'Manish',
        age: 45,
        subject: 'SAM',
    }
];
// let numbers:Array<number> is generic syntax
// both teachers:Array<teacherInfo> and teachers:teacherInfo[] can be used interchangeably
const getStudentsListGeneric = (teachers) => {
    teachers.forEach(teacher => {
        console.log(`Sir ${teacher.name},age ${teacher.age} teaches ${teacher.subject}`);
    });
};
getStudentsListGeneric(teachersListGeneric);
//# sourceMappingURL=app.js.map