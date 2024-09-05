const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const N = Number(input);

for (let i = Math.floor(N / 5); i >= 0; i--) {
    if ((N - i * 5) % 3 === 0) {
        console.log(i + (N - i * 5) / 3);
        return;
    }
}

console.log(-1);