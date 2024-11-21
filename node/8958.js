const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = Number(input.shift());

for (let _ = 0; _ < num; _++) {
    const seq = input.shift();
    let cur = seq[0];
    let score = 0;
    let res = 0;
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === 'O') {
            res += ++score;
        } else {
            score = 0;
        }
    }
    console.log(res);
}