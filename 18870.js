const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const set = new Set(input);
const sorted = new Map([...set].sort((a, b) => a - b).map((e, i) => [e, i]));
const res = [];

for (let i = 0; i < N; i++) {
    res.push(sorted.get(input[i]));
}

console.log(res.join(' '));