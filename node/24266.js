const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const N = BigInt(input);

console.log(`${N * N * N}`);
console.log(3);