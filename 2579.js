const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

const dp = [0, input[1], input[1] + input[2], Math.max(input[1], input[2]) + input[3]];

for (let i = 4; i <= input[0]; i++) {
    dp.push(Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]));
}

console.log(dp[input[0]]);