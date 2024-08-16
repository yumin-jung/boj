const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const num = input.shift();
const M = Math.max(...input);

console.log(input.reduce((a, c) => a + c, 0) / M * 100 / num);