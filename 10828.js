const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift());
const stack = [];
const res = [];

for (let _ = 0; _ < N; _++) {
    const op = input.shift();
    if (op === 'pop') {
        if (stack.length === 0) {
            res.push(-1);
        } else {
            res.push(stack.pop());
        }
    } else if (op === 'size') {
        res.push(stack.length);
    } else if (op === 'empty') {
        res.push(stack.length === 0 ? 1 : 0);
    } else if (op === 'top') {
        if (stack.length === 0) {
            res.push(-1);
        } else {
            res.push(stack[stack.length - 1]);
        }
    } else {
        stack.push(op.split(' ')[1]);
    }
}

console.log(res.join('\n'));