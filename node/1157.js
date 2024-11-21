const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase()
    .split('');

if (input.length === 1) {
    console.log(input[0]);
    return;
}

const map = new Map();

for (let i = 0; i < input.length; i++) {
    map.set(input[i], map.get(input[i]) === undefined ? 1 : map.get(input[i]) + 1);
}

const arr = [...map];

arr.sort((a, b) => b[1] - a[1]);

if (arr.length === 1) {
    console.log(arr[0][0]);
} else if (arr[0][1] === arr[1][1]) {
    console.log('?');
} else {
    console.log(arr[0][0]);
}