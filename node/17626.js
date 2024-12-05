const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim();

const n = Number(input);
const dp = new Array(n + 1).fill(0);

dp[1] = 1;

for (let i = 2; i <= n; i++) {
    let min = 4;
    for (let j = 1; j**2 <= i; j++) {
        min = Math.min(min, dp[i - j**2]);
    }
    dp[i] = min + 1;
}

console.log(dp[n]);