const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
input.sort((a, b) => a - b);

let time = 0;
let res = 0;

for (let i = 0; i < input.length; i++) {
    time += input[i];
    res += time;
}

console.log(res);