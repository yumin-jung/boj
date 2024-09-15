const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

function isDecimal(n) {
    if (n === 1) {
        return;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return;
    }
    
    return console.log(n);
}

const [M, N] = input;

for (let i = M; i <= N; i++) {
    isDecimal(i)
}