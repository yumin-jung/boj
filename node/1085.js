const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const res = [];

res.push(input[0]);
res.push(input[2] - input[0]);
res.push(input[1]);
res.push(input[3] - input[1]);

console.log(Math.min(...res));