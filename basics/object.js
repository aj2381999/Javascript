//basics
// console.log('node');

//let vs var - var is available throughout the function but let is available within the scope{}

// let name = 'Ajay';
// let age = '24';
// let gender = 'Male';

//Defining Object
let person = {
    name : 'Ajay',
    age: 24,
    gender: 'Male',
    sibling:{
        brother: 'Aravind',
        sister:'Dhivya'
    }
}

console.log(person);

// object can be called by two types 
// 1.dot Notation
console.log(person.name);
// 2.bracket notation
console.log(person['gender']);
//key cannot be changed but the value can be changed

console.log(person.sibling.sister);






