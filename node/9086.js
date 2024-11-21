const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = Number(input.shift());

for (let i = 0; i < num; i++) {
    console.log(input[i][0] + input[i][input[i].length - 1]);
}