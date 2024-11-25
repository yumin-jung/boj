const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const a = new Set(input[1].split(' ').map(Number));
const b = new Set(input[2].split(' ').map(Number));
let cnt = 0;

for (const e of a) {
    if (!b.has(e)) {
        cnt++;
    }
}

for (const e of b) {
    if (!a.has(e)) {
        cnt++;
    }
}

console.log(cnt);