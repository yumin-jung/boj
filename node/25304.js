const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(/\s|\n/)
    .map(Number);

const money = input.shift();
const n = input.shift();
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += input.shift() * input.shift();
}

console.log(money === sum ? "Yes" : "No");