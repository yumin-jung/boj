const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

const N = Number(input);
const fib = [0, 1];


for (let i = 0; i <= N - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
}

console.log(fib[N]);