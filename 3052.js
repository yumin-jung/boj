const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const s = new Set();

while (input.length > 0) {
    s.add(input.pop() % 42);
}

console.log(s.size);