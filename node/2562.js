const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const max = Math.max(...input);

console.log(Math.max(...input));
console.log(input.indexOf(max) + 1);