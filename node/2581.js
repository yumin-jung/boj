const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function isDecimal(n) {
    if (n === 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

const res = [];

for (let i = input[0]; i <= input[1]; i++) {
    if (isDecimal(i)) {
        res.push(i);
    }
}

if (res.length === 0) {
    console.log(-1);
} else {
    console.log(res.reduce((a, c) => a + c, 0));
    console.log(res[0]);
}