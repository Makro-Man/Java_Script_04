'use strict'
//Create Array of Object
let Students = [];
let Person1={yearOfStuding:1,facultyName:'Institute of Administration and Postgraduate Education'};
let Person2={yearOfStuding:2,facultyName:'Institute of Architecture and Design'};
let Person3={yearOfStuding:3,facultyName:'Institute of Civil Engineering and Engineering Systems Institute of Geodesy'};
let Person4={yearOfStuding:4,facultyName:'Institute of Humanities and Social Sciences'};
let Person5={yearOfStuding:4,facultyName:'Vyacheslav Chornovil Institute for Sustainable Development'};
let Person6={yearOfStuding:3,facultyName:'Institute of Economics and Management'};
let Person7={yearOfStuding:2,facultyName:'Institute of Energy and Control Systems'};
let Person8={yearOfStuding:1,facultyName:'Institute of Engineering Mechanics and Transport'};
let Person9={yearOfStuding:5,facultyName:'Institute of Computer Science and Information Technology'};
let Person10={yearOfStuding:5,facultyName:'Institute of Computer Technology, Automation and Metrology'};
Students.push(Person1,Person2,Person3,Person4,Person5,Person6,Person7,Person8,Person9,Person10);
console.log(Students);
console.log('---------------------------------');
//FacultyName
function getFacultyName(obj){
    return obj.facultyName;
}
let facultyName = Students.map(getFacultyName);
console.log(facultyName);
console.log('---------------------------------');
//Summa yearOfStuding
function sum(sumYear, current){
    return sumYear+current.yearOfStuding;
}

let sumYearOfSturding = Students.reduce(sum,0);
console.log(sumYearOfSturding);
console.log('---------------------------------');