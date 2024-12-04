const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const T = Number(input.shift());

for (let _ = 0; _ < T; _++) {
    const map = new Map();
    const n = Number(input.shift());
    for (let _ = 0; _ < n; _++) {
        const [_, category] = input.shift().split(' ');
        map.set(category, (map.get(category) ?? 0) + 1);
    }
    console.log([...map].reduce((a, c) => a * (c[1] + 1), 1) - 1);
}