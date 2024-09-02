const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n')
    .map(Number);
      
function solution(change) {
    let cnt = [0, 0, 0, 0];
    const coins = [25, 10, 5, 1];
    for (let i = 0; i < coins.length; i++) {
        cnt[i] += Math.floor(change / coins[i]);
        change %= coins[i];
    }
    return cnt.join(' ');
}

for (let i = 1; i < input.length; i++) {
    console.log(solution(input[i]));
}