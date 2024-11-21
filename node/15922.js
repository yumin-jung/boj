const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();

let x1 = input.shift();
let y1 = input.shift();
let res = 0;

for (let i = 1; i < N; i++) {
    let x2 = input.shift();
    let y2 = input.shift();

    if (x1 <= y2 && y2 <= y1) {
        continue;
    } else if (x1 <= x2 && x2 <= y1 && !(x1 <= y2 && y2 <= y1)) {
        y1 = y2;
    } else {
        res += Math.abs(y1 - x1);
        x1 = x2;
        y1 = y2;
    }
}

console.log(res + Math.abs(y1 - x1));