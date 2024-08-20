const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const num = Number(input);
const numOfFive = Math.floor(num / 5) + Math.floor(num / 25) + Math.floor(num / 125);
console.log(numOfFive);