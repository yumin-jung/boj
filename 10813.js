const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const M = input.shift();
const arr = [];

for (let x = 1; x <= N; x++) {
    arr.push(x);
}

for (let _ = 0; _ < M; _++) {
    const i = input.shift();
    const j = input.shift();
    [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
}

console.log(arr.join(' '));