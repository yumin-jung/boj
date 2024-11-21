const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const N = Number(input);
let cnt = 0;
let num = 665;

while (cnt < N) {
    if (String(++num).includes('666')) {
        cnt++;
    }
}

console.log(num);