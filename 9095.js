const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

const dp = [0, 1, 2, 4];

for (let i = 4; i < 11; i++) {
    dp.push(dp[i - 1] + dp[i - 2] + dp[i - 3]);
}

for (let i = 1; i < input[0] + 1; i++) {
    console.log(dp[input[i]]);
}