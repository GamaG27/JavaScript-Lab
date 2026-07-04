//-----Data Types-----//

// String - A text of characters enclosed in single or double quotes

let message = 'This is a string';

// Number - An integer or floating point number

let age = 2;
let price = 23.44;

// Bigint - An integer with arbitrary precision

let big_number = 1234567890123456789012345n;
//let big_number = BigInt(1234567890123456789012345);

// Boolean - A data type representing a binary set true or false

let is_learning = true;
//let is_learning = false;

// Undefined - A primitive variable with no assigned value

let not_assigned;

// Null - A primitive value representing object absence (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

let value = null;

// Symbol - A data type whose instances are unique and immutable.

const symbol = Symbol();

// Object - A collection of key-value pairs of data

/* Object */
const my_name = { firstName: 'Damian', lastName: 'Rodriguez' };

/* Array Object */
const household_items = ['washing machine', 'microwave', 'fridge'];

/* Date Object */
const date = new Date('2023-02-25');

console.log(typeof message);
console.log(typeof age);
console.log(typeof price);
console.log(typeof big_number);
console.log(typeof is_learning);
console.log(typeof not_assigned);
console.log(typeof symbol);
console.log(typeof my_name);
console.log(typeof household_items);
console.log(typeof date);

// This is a long-standing bug in JavaScript, null is a primitive, but typeof returns "object".
console.log(typeof value);
