const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const N = Number(input);
let num = 2;

for (let _ = 0; _ < N; _++) {
    num = num * 2 - 1;
}

console.log(num**2);