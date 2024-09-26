// Anonymous type
let student: {name:string,age:number} ={
    name:"Abc",
    age:10,
};
console.log(student.name);
console.log(student["age"]);

// Aliased Object Type
type teacher = {
    name:string,
    exp:number,
};
let Teacher: teacher ={
    name:"Abcd",
    exp:12,
};
console.log(Teacher.name)
console.log(Teacher["exp"]);

// Interfaces
interface Manager {
    name:string,
    numberOfStaff:number,
}
let storeManager:Manager={
    name:"Andy",
    numberOfStaff:30,
};

console.log(storeManager.name);
console.log(storeManager["numberOfStaff"]);
