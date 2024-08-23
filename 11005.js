const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()    
    .trim()
    .split(' ')
    .map(Number);

console.log(input[0].toString(input[1]).toUpperCase());