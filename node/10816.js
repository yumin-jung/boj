const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift());
const nums = input.shift().split(' ');
const M = Number(input.shift());
const targets = input.shift().split(' ');
const map = new Map();
const res = [];

for (let i = 0; i < N; i++) {
    map.set(nums[i], map.get(nums[i]) === undefined ? 1 : map.get(nums[i]) + 1);
}

for (let i = 0; i < M; i++) {
    res.push(map.get(targets[i]) === undefined ? 0 : map.get(targets[i]));
}

console.log(res.join(' '));