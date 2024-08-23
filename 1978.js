const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/);

function isPrime (num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

input.shift();

console.log(input.filter((e) => isPrime(e)).length);