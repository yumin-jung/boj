const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);

for (let _ = 0; _ < M; _++) {
    const [from, to] = input.shift().split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

for (let i = 0; i < N + 1; i++) {
    graph[i].sort((a, b) => a - b);
}

let res = [];
let visited = new Array(N + 1).fill(false);

const dfs = (from) => {
    if (visited[from]) return;

    visited[from] = true;
    res.push(from);

    for (const to of graph[from]) {
        if (!visited[to]) {
            dfs(to);
        }
    }
}

const bfs = (from) => {
    const queue = [from];

    while (queue.length) {
        const node = queue.shift();
        
        if (visited[node]) continue;
        
        visited[node] = true;
        res.push(node);

        for (const v of graph[node]) {
            if (!visited[v]) {
                queue.push(v);
            }
        }
    }
}

dfs(V);
console.log(res.join(' '));

res = [];
visited = new Array(N + 1).fill(false);
bfs(V);
console.log(res.join(' '));