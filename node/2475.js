const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log(input.reduce((a, c) => a + c * c, 0) % 10);