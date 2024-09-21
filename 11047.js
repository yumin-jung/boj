const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

let N = input.shift() - 1;
let K = input.shift();
let res = 0;

while (K !== 0) {
    if (K < input[N]) {
        N--;
    } else {
        K -= input[N];
        res++;
    }
}

console.log(res);