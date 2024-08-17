const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

input.shift();
const X = input.shift();

console.log(input.filter((e) => e < X).join(' '));