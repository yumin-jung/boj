const [N, K] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let res = 1;

for (let i = N; i > N - K; i--) {
    res *= i;
}

for (let i = K; i >= 1; i--) {
    res /= i;
}

console.log(res);