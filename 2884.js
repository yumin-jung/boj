const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(' ')
    .map(Number);

if (input[1] < 45) {
    console.log(input[0] - 1 < 0 ? 23 : input[0] - 1, input[1] + 15);
} else {
    console.log(input[0], input[1] - 45);
}