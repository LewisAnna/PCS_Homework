// 1a
const isUpperCase = (letter) => letter === letter.toUpperCase() ;

const array1 = ['A', 'B', 'C'];

console.log(array1.every(isUpperCase));
// 1b
const isLowerCase = (letter) => letter === letter.toLowerCase() ;

const array1 = ['a', 'B', 'C'];

console.log(array1.every(isUpperCase));
//2a
const isUpperCase = (letter) => letter === letter.toUpperCase() ;

const array1 = ['A', 'b', 'C'];

console.log(array1.some(isUpperCase));
//2b
const isLowerCase = (letter) => letter === letter.toLowerCase() ;

const array1 = ['A', 'b', 'C'];

console.log(array1.some(isLowerCase));
