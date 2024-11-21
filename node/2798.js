const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const N = Number(input.shift());
const M = Number(input.shift());
let diff = Number.POSITIVE_INFINITY;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = input[i] + input[j] + input[k];
            if (M - sum === 0) {
                console.log(M);
                return;
            } else if (M - sum > 0 && M - sum < diff) {
                diff = M - sum;
            }
        }
    }
}

console.log(M - diff);