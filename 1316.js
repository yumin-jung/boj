const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = Number(input.shift());
let res = 0;

for (let i = 0; i < num; i++) {
    let isGroupWord = true;
    const set = new Set(input[i].split(''));
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] !== input[i][j+1]) {
            if (set.has(input[i][j])) {
                set.delete(input[i][j]);
            } else {
                isGroupWord = false;
            }
        }
    }
    if (isGroupWord) {
        res++;
    }
}

console.log(res);