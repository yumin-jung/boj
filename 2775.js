const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const num = input.shift();

for (let i = 0; i < num; i++) {
    const k = input.shift();
    const n = input.shift();
    const arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
    
    for (let j = 1; j <= n; j++) {
        arr[0][j] = j;
    }
    
    for (let j = 1; j <= k; j++) {
        for (let k = 1; k <= n; k++) {
            arr[j][k] = arr[j - 1][k] + arr[j][k - 1];
        }
    }
    
    console.log(arr[k][n]);
}