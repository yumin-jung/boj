const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift());
const shirts = input.shift().split(' ').map(Number);
const [T, P] = input.shift().split(' ').map(Number);

console.log(shirts.reduce((a, c) => a + Math.floor((c - 1) / T) + 1, 0));
console.log(`${Math.floor(N / P)} ${N % P}`);