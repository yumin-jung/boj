const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(' ')
    .map(Number);

console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);