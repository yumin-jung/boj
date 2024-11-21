const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const v = input.pop();

input.shift();

console.log(input.filter((e) => e === v).length);