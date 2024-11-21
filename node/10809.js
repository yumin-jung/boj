const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const alpha = 'abcdefghijklmnopqrstuvwxyz';
let res = [];

for (let i = 0; i < alpha.length; i++) {
    res.push(input.indexOf(alpha[i]));
}

console.log(res.join(' '));