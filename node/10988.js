const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

let res = 1;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        res = 0;
    }
}

console.log(res);