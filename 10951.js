const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = input.length;

for (let i = 0; i < num; i++) {
    const numbers = input.shift().split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
}