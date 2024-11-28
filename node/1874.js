const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

const n = input.shift();
let res = [];
let stack = [];
let pos = 1;

for (let i = 0; i < n; i++) {
    let target = input[i];

    while (pos <= target) {
        stack.push(pos++);
        res.push('+');
    }

    if (stack.pop() !== target) {
        console.log('NO');
        return;
    } else {
        res.push('-');
    }
}

console.log(res.join('\n'));