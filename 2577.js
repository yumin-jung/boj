const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const num = '' + input[0] * input[1] * input[2];

for (let i = 0; i <= 9; i++) {
    console.log(num.split('').filter((e) => e === '' + i).length);
}