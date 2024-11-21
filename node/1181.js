const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

let res = input.slice(1);
res = [...new Set(res)];
res = res.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');

console.log(res);