const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const _ = input.shift(), K = input.shift();

input.sort((a, b) => b - a);
console.log(input[K - 1]);