const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim();

const n = Number(input);
const dp = [1, 3];

for (let i = 2; i < n; i++) {
    dp.push((dp[i - 1] + dp[i - 2] * 2) % 10007);
}

console.log(dp[n - 1]);