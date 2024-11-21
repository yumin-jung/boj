const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const a1 = input.shift();
const a0 = input.shift();
const c = input.shift();
const n0 = input.shift();

if (a1 * n0 + a0 <= c * n0 && a1 <= c) {
    console.log(1);
} else {
    console.log(0);
}