const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const s = new Set();
let res = 0;

for (let i = 1; i <= N; i++) {
    s.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
    if (s.has(input[i])) {
        res += 1;
    }
}

console.log(res);