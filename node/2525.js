const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(/\s|\n/)
    .map(Number);

const h = Math.floor((input[1] + input[2]) / 60);
console.log((input[0] + h) % 24, (input[1] + input[2]) % 60);