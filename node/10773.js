const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const N = input.shift();
let stack = [];

for (let i = 0; i < N; i++) {
    if (input[i] !== 0) {
        stack.push(input[i]);
    } else {
        stack.pop();
    }
}

console.log(stack.reduce((a, c) => a + c, 0));