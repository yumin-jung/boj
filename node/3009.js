const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const xSet = new Set();
const ySet = new Set();

for (let _ = 0; _ < 3; _++) {
    const x = input.shift();
    const y = input.shift();
    xSet.has(x) ? xSet.delete(x) : xSet.add(x);
    ySet.has(y) ? ySet.delete(y) : ySet.add(y);
}

console.log([...xSet, ...ySet].join(' '));