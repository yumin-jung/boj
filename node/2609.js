const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

function GCD (a, b) {
    while (b > 0) {
        const c = a % b;
        a = b;
        b = c;
    }
    return a;
}

input.sort((a, b) => a - b);

const gcd = GCD(input[0], input[1]);

console.log(gcd);
console.log(gcd * (input[0] / gcd) * (input[1] / gcd));