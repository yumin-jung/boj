const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const s = new Set(input);

for (let i = 1; i <= 30; i++) {
    if (!s.has(i)) {
        console.log(i);
    }
}