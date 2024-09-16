const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const [N, K] = input;
let cnt = 0;

for (let i = 1; i <= N; i++) {
    if (N % i === 0 && ++cnt === K) {
        console.log(i);
        return;
    }
}

console.log(0);