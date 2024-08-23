const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

const len = input.slice().sort((a, b) => b.length - a.length)[0].length;
const arr = input.map((e) => e.split(''));
let res = '';

for (let i = 0; i < len; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] !== undefined) {
            res += arr[j][i];
        }
    }
}

console.log(res);