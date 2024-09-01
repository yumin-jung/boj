const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const n = input.shift();
let res = 0;
let arr = Array.from(Array(100), () => Array(100).fill(0));

for (t = 1; t <= n; t++) {
    let x = input.shift();
    let y = input.shift();
    for (i = x; i < x + 10; i++) {
        for (j = y; j < y + 10; j++) {
            if (++arr[i][j] === 1) {
                res++;
            }
        }
    }
}

console.log(res);