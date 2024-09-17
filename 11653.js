const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

let N = Number(input);
const res = [];

for (let i = 2; i <= N; i++) {
    while (N % i === 0) {
        N /= i;
        res.push(i);
    }
    if (N === 1) {
        break;
    }
}

res.map((e) => console.log(e));