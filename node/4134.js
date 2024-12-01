const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num % 2 === 0) {
        return num === 2 ? true : false;
    }

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

input.shift();

for (let n of input) {
    while (!isPrime(n++)) {}
    console.log(n - 1);
}