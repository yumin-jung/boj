const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const len = input.length;

for (let i = 0; i < len - 1; i++) {
    const [a, b, c] = input.shift().split(' ').map(Number).sort((a, b) => a - b);
    console.log(a**2 + b**2 === c**2 ? "right" : 'wrong');
}