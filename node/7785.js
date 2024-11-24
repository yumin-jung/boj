const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const n = Number(input[0]);
const s = new Set();

for (let i = 1; i <= n; i++) {
    const [name, status] = input[i].split(' ');

    if (status === 'enter') {
        s.add(name);
    } else {
        s.delete(name);
    }
}

console.log([...s].sort().reverse().join('\n'));