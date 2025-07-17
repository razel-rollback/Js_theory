console.log('hello from jsFile');
console.group('My Group');
console.error('This is an error message');
console.warn('This is a warning message');
console.info('This is an info message');
console.debug('This is a debug message');
console.groupEnd();

console.table([
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
]);
console.time('Loop Time');
for (let i = 0; i < 10; i++) {
    // Simulating some work
}
console.timeEnd('Loop Time');


/*
var, let global 
constant
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr) // Spread operator to copy array
arr.push(6);
console.log(arr);
const obj = { name: 'John', age: 30 };
console.log(obj); // Spread operator to copy object
obj.name = 'Doe';
obj.age = 10;
console.log(obj);

const id = Symbol('id');
console.log(id, typeof (id)); // Symbol type
/*
primity : string, number, boolean, null, undefined, symbol
memory in stack
reference : object, array, function
memory in heap like json
*/

// String Challenge
const myString = 'developer';

console.log(myString.charAt(0).toUpperCase() + myString.substring(1)); // String methods
//tama bato????
// day 1 2hr  ty traversy media  href="https://www.youtube.com/watch?v=BI1o2H9z9fo"


// number challenge
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        console.error('Division by zero is not allowed.');
        return null;
    }
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

console.log(`Random number between 1 and 100: ${x}`);
console.log(`Random number between 1 and 50: ${y}`);

console.log(`Sum of ${x} and ${y} is: ${add(x, y)}`);
console.log(`Subtraction of ${x} and ${y} is: ${subtract(x, y)}`);
console.log(`Multiplication of ${x} and ${y} is: ${multiply(x, y)}`);
console.log(`Division of ${x} and ${y} is: ${divide(x, y)}`);
console.log(`Modulus of ${x} and ${y} is: ${modulus(x, y)}`);

//array challenge

//1.
const array = [1, 2, 3, 4, 5];

array.push(6);
array.reverse();
console.log(array);

//2.
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9, 10];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
// Remove duplicates using Set
const uniqueArray = [...new Set(combinedArray)];

console.log(uniqueArray);


