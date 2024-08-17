const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const M = input.shift();

const arr = [];

for (let _ = 1; _ <= N; _++) {
    arr.push(0);
}

for (let _ = 0; _ < M; _++) {
    const from = input.shift();
    const to = input.shift();
    const num = input.shift();
    for (let b = from - 1; b < to; b++) {
        arr[b] = num;
    }
}

console.log(arr.join(' '));