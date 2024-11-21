const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

input.sort((a, b) => a - b);

console.log(input.reduce((a, c) => a + c, 0) / input.length);
console.log(input[2]);