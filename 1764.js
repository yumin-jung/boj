const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, _] = input.shift().split(' ').map(Number);
const map = new Map();

for (let _ = 0; _ < N; _++) {
    map.set(input.shift(), true);
}

const res = input.filter((e) => {
    return map.get(e);
});

res.sort();

console.log(res.length + '\n' + res.join('\n'));