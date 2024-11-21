const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

const N = Number(input);
let res = 1;

for (let i = 1; i <= N; i++) {
    res *= i;
}

console.log(res);