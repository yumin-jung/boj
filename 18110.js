const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const N = input.shift();

if (N === 0) {
    console.log(0);
    return;
}

console.log(
    Math.round(input
        .sort((a, b) => a - b)
        .slice(Math.round(N * 0.15), N - Math.round(N * 0.15))
        .reduce((a, c) => a + c, 0) / (N - 2 * Math.round(N * 0.15))
));