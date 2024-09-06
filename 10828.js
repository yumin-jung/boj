const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift());
const stack = [];

for (let _ = 0; _ < N; _++) {
    const op = input.shift();
    if (op === 'pop') {
        if (stack.length === 0) {
            console.log(-1);
        } else {
            console.log(stack.pop());
        }
    } else if (op === 'size') {
        console.log(stack.length);
    } else if (op === 'empty') {
        console.log(stack.length === 0 ? 1 : 0);
    } else if (op === 'top') {
        if (stack.length === 0) {
            console.log(-1);
        } else {
            console.log(stack[stack.length - 1]);
        }
    } else {
        stack.push(op.split(' ')[1]);
    }
}