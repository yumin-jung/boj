const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ');

const reversed = input.map((e) => Number(e.split('').reverse().join("")));

console.log(reversed[0] > reversed[1] ? reversed[0] : reversed[1]);