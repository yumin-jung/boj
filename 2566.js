const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const max = Math.max(...input);
console.log(max);

for (let i = 0; i < input.length; i++) {
    if (input[i] === max) {
        console.log(`${Math.floor(i / 9) + 1} ${i % 9 + 1}`);
        return;
    }
}