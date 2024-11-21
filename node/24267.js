const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

console.log(`${BigInt(input) * BigInt(input - 1) * BigInt(input - 2) / BigInt(6)}`);
console.log(3);