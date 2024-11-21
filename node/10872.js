const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

let res = 1;

for (let i = 1; i <= Number(input); i++) {
    res *= i;
}

console.log(res);