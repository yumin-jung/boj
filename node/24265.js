const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const N = Number(input);

console.log((N - 1) * N / 2);
console.log(2);