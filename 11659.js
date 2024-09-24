const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n');

let sum = [0];
let res = [];

const [N, M] = input[0].split(' ').map(Number);
let n = 0;
const arr = input[1].split(' ').map(Number);

for (let i = 0; i < arr.length; i++) {
    n += arr[i];
    sum.push(n);
}

for (let i = 2; i < M + 2; i++) {
    const [left, right] = input[i].split(' ').map(Number);
    res.push(-1 * sum[left - 1] + sum[right]);
}

console.log(res.join('\n'));