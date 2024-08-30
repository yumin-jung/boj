const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const arr = [];

for (let _ = 0; _ < N; _++) {
    arr.push([input.shift(), input.shift()]);
}

arr.sort((a, b) => {
    if (a[1] < b[1]) {
        return a[1] - b[1];
    } else if (a[1] === b[1]) {
        return a[0] - b[0];
    }
})

console.log(arr.map((e) => e.join(' ')).join('\n'));