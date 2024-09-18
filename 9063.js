const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const x = [];
const y = [];

for (let _ = 0; _ < N; _++) {
    x.push(input.shift());
    y.push(input.shift());
}

x.sort((a, b) => a - b);
y.sort((a, b) => a - b);

console.log((x[x.length - 1] - x[0]) * (y[y.length - 1] - y[0]));