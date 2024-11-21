const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

if (input[0] + input[1] + input[2] !== 180) {
    console.log('Error');
    return;
}

input.sort((e1, e2) => e1 - e2);

const [a, b, c] = input;

if (a === b) {
    console.log(b === c ? 'Equilateral' : 'Isosceles');
} else {
    console.log(b === c ? 'Isosceles' : 'Scalene');
}