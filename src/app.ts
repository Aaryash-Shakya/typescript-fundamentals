// arrays and enum

enum subjects {SAD,SAM,WT}

let student = {
  name: "Aaryash",
  age: 20,
  address: "Lagan",
  subject: subjects[subjects.WT]
};

let studentsList = [
  {
    name: "Aditya",
    age: 25,
    address: "Kalanki",
    subject: subjects[subjects.SAM]
  },
  {
    name: "Benup",
    age: 22,
    address: "Patan",
    subject: subjects[subjects.SAD]
  },
];

studentsList.push(student)

studentsList.forEach((s) => {
  console.log(`${s.name} live in ${s.address} and studies ${s.subject}`);
});
