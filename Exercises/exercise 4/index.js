//----Type Coercion----//

// When using the '+' operator - it performs both addition and string concatenation.

//=== Number ==//
console.log(5 + 3);
console.log(5 + '3');
console.log('5' + 3);
console.log('5' + '3');

//=== Boolean ==/
console.log(true + true);
console.log(true + false);
console.log(true + 5);
console.log(false + 5);
console.log(true + '5');
console.log('5' + true);

//=== Null ==/
console.log(null + 5);
console.log(5 + null);
console.log(null + null);
console.log(null + '5');

//=== Undefined ==/
console.log(undefined + 5);
console.log(5 + undefined);
console.log(undefined + undefined);
console.log(undefined + '5');
console.log(null + undefined);

//=== NaN ==/
console.log(NaN + 5);
console.log(NaN + '5');
console.log(NaN + true);

//=== Arrays ==/
console.log([] + []);
console.log([] + 1);
console.log(1 + []);
console.log([1, 2] + [3, 4]);
console.log([1] + 2);
console.log(2 + [1]);

//=== Objects ==/
console.log({} + {});
console.log({} + 1);
console.log(1 + {});

//=== Strings ==/
console.log('Hello ' + 'World');
console.log('Age: ' + 20);
console.log(20 + ' years');
console.log('1' + 2 + 3);
console.log(1 + 2 + '3');
console.log('1' + (2 + 3));

//=== BigInt ==/
console.log(1n + 2n);
// console.log(1n + 2); // TypeError

//=== Symbol ==/
// console.log(Symbol() + 1); // TypeError

//=== Date ==/
console.log(new Date() + 1);

//=== Function ==/
function hello() {}
console.log(hello + '!');

//=== Equality ===//

console.log(5 == '5');
console.log(5 === '5');

console.log(null == undefined);
console.log(null === undefined);

console.log(false == 0);
console.log(false === 0);

console.log('' == 0);
console.log('' === 0);

console.log([] == false);
console.log([] === false);
