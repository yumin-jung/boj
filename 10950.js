const input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .split(/\n|\s/)
    .map(Number);

const n = input.shift();

for (let i = 0; i < n; i++) {
    console.log(input.shift() + input.shift());
}