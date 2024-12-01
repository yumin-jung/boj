const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

const N = input.shift();
const diff = [];

for (let i = 1; i < N; i++) {
    diff.push(input[i] - input[i - 1]);
}

const d = diff.reduce((a, c) => gcd(a, c), diff[0]);
console.log(diff.reduce((a, c) => a + (c / d) - 1, 0));