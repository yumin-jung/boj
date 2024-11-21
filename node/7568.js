const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const big = [];

for (let _ = 0; _ < N; _++) {
    big.push([input.shift(), input.shift()]);
}

console.log(big.map((e1) => {
    return big.filter((e2) => {
        return e2[0] > e1[0] && e2[1] > e1[1]
    }).length + 1}).join(' '));