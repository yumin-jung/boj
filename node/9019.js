const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\n/);

const D = (n) => 2 * n % 10000;
const S = (n) => n === 0 ? 9999 : n - 1;
const L = (n) => Math.floor(n / 1000) + 10 * (n % 1000);
const R = (n) => 1000 * (n % 10) + Math.floor(n / 10);

const bfs = (a, b) => {
    const queue = [[a, '']];
    const visited = {[a]: true};

    while (queue.length) {
        const [n, ops] = queue.shift();

        if (n === b) {
            return ops;
        }

        const d = D(n), s = S(n), l = L(n), r = R(n);

        if (!visited[d]) {
            visited[d] = true;
            queue.push([d, ops + 'D']);
        }

        if (!visited[s]) {
            visited[s] = true;
            queue.push([s, ops + 'S']);
        }

        if (!visited[l]) {
            visited[l] = true;
            queue.push([l, ops + 'L']);
        }

        if (!visited[r]) {
            visited[r] = true;
            queue.push([r, ops + 'R']);
        }
    }
}

const T = input.shift();

for (let line of input) {
    const [from, to] = line.split(' ').map(Number);
    console.log(bfs(from, to));
}