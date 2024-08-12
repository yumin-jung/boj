const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

console.log(input[0] * (input[1] % 10));
console.log(input[0] * (input[1] % 100 - input[1] % 10) / 10);
console.log(input[0] * (input[1] - input[1] % 100) / 100);
console.log(input[0] * input[1]);