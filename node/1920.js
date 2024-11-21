const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = input.shift();
const arr = [];

for (let _ = 0; _ < N; _++) {
    arr.push(input.shift());
}

arr.sort((a, b) => a - b);

const M = input.shift();
let res = [];

for (let _ = 0; _ < M; _++) {
    const target = input.shift();
    let left = 0, right = arr.length - 1, mid;
    let isExist = false;
    
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            isExist = true;
            break;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (isExist) {
        res.push(1);
    } else {
        res.push(0);
    }
}

console.log(res.join('\n'));