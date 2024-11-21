const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const K = input.shift();

const dp = new Array(N + 1).fill(0).map(_ => new Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
    const W = input.shift();
    const V = input.shift();

    for (let j = 1; j <= K; j++) {
        if (j - W >= 0) {
            dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}

console.log(dp[N][K]);