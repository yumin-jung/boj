const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n');

const cards = new Set(input[1].split(' ').map(Number));
console.log(input[3].split(' ').map(e => cards.has(+e) ? 1 : 0).join(' '));