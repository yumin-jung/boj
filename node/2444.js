const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

for (let i = 1; i < Number(input); i++) {
    console.log(' '.repeat(Number(input) - i) + '*'.repeat(2 * i - 1));
}

for (let i = Number(input); i > 0; i--) {
    console.log(' '.repeat(Number(input) - i) + '*'.repeat(2 * i - 1));
}