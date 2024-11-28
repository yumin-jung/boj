const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const K = input.shift(), N = input.shift();
const cables = input.sort((a, b) => a - b);
let left = 0, right = cables[K - 1];

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = cables.reduce((a, c) => a + Math.floor(c / mid), 0);

    if (num >= N) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(right);