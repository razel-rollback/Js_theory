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

const myString = 'developer';

console.log(myString.charAt(0).toUpperCase() + myString.substring(1)); // String methods
//tama bato????
// day 1 2hr  ty traversy media  href="https://www.youtube.com/watch?v=BI1o2H9z9fo"