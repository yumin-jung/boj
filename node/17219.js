const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const dict = {};
const res = [];

for (let i = 0; i < N; i++) {
    const [s, p] = input[i].split(' ');
    dict[s] = p;
}

for (let i = N; i < N + M; i++) {
    res.push(dict[input[i]]);
}

console.log(res.join('\n'));