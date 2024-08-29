const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const reverse = input.split('').map((e) => /[A-Z]/.test(e) ? e.toLowerCase() : e.toUpperCase());
console.log(reverse.join(''));