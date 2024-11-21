const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n');

while (input[0][0] !== '0') {
    const numbers = input.shift().split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
}