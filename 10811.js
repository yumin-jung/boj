const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const M = input.shift();

let arr = [];

for (let x = 1; x <= N; x++) {
    arr.push(x);
}

for (let _ = 0; _ < M; _++) {
    const i = input.shift() - 1;
    const j = input.shift() - 1;
    const front = arr.slice(0, i);
    const reversed = arr.slice(i, j + 1).reverse();
    const back = arr.slice(j + 1, N);
    arr = [...front, ...reversed, ...back];
}

console.log(arr.join(' '));