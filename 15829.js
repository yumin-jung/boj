const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = Number(input.shift());
const arr = input.shift();
let r = 1;
let res = 0;

for (let i = 0; i < num; i++) {
    res += (arr[i].charCodeAt() - 96) * r 
    res %= 1234567891;
    r *= 31;
    r %= 1234567891;
}

console.log(res);