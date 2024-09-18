const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

console.log(4 * Number(input));