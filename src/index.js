/* eslint-disable */

const { original, unOriginal } = require('./dodgy');

console.log(original(2));

const foo = unOriginal('bar');

eval(foo);
eval(`console.log('happy days')`);
