const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const n1 = Number(input.shift())

input.shift();

const graph = [...Array(n1 + 1)].map(() => []);
const visited = [...Array(n1 + 1)].fill(false);

const dfs = (from) => {
    for (let to of graph[from]) {
        if (!visited[to]) {
            visited[to] = true;
            dfs(to);
        }
    }
}

for (const pair of input) {
    const [a, b] = pair.split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

visited[1] = true;
dfs(1);

console.log(visited.filter(e => e).length - 1);