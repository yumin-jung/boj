const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

input.sort((a, b) => a - b);

if (input[0] + input[1] <= input[2]) {
    console.log(2 * (input[0] + input[1]) - 1);
} else {
    console.log(input[0] + input[1] + input[2]);
}