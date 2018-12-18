'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');

let greeting = greet.sayHello('john');

console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2
