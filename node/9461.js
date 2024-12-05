const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);

input.shift();

const P = [1, 1, 1];
const max = Math.max(...input);

for (let i = 3; i < max; i++) {
    P.push(P[i - 2] + P[i - 3]);
}

while(input.length) {
    console.log(P[input.shift() - 1]);
}