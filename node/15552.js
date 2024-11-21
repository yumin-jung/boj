const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")

const num = input.shift();
let res = '';

for (let i = 0; i < num; i++) {
    res += input[i].split(' ').reduce((a, c) => Number(a) + Number(c), 0) + '\n';
}

console.log(res);