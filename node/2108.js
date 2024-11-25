const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);

input.shift();

const len = input.length;
const sum = input.reduce((a, c) => a + c, 0);
const sorted = input.sort((a, b) => a - b);
const map = new Map();

for (let i = 0; i < len; i++) {
    map.set(input[i], map.get(input[i]) ? map.get(input[i]) + 1 : 1);
}

const arr = [...map];
arr.sort((a, b) => a[0] - b[0]);
arr.sort((a, b) => b[1] - a[1]);

console.log(Math.round(sum/len) === 0 ? 0 : Math.round(sum/len));
console.log(sorted[Math.floor(len / 2)]);

if (input.length === 1) {
    console.log(arr[0][0]);
} else if (arr[0][1] === arr[1][1]) {
    console.log(arr[1][0]);
} else {
    console.log(arr[0][0])
}

console.log(Math.max(...sorted) - Math.min(...sorted));
