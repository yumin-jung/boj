const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split()
    .map(Number);

for (let i = 1; i <= input[0]; i++) {
    console.log('*'.repeat(i));
}