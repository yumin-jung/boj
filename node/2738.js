const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const A = [], B = [];
const res = [];

for (let _ = 0; _ < N; _++) {
    A.push(input.shift().split(' ').map(Number));
}

for (let _ = 0; _ < N; _++) {
    B.push(input.shift().split(' ').map(Number));
}

for (let i = 0; i < N; i++) {
    res.push(A[i].map((e, j) => e + B[i][j]));
}

console.log(res.map((e) => e.join(' ')).join('\n'));