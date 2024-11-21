const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

input.shift();

console.log(Math.min(...input), Math.max(...input));