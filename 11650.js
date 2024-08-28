const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const num = input.shift();
const arr = [];

for (let _ = 0; _ < num; _++) {
    arr.push([input.shift(), input.shift()]);
}

arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]).join(' ');

console.log(arr.map((e) => e.join(' ')).join('\n'));