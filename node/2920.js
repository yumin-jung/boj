const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const asc = input.split(' ').map(Number).sort((a, b) => a - b).join(' ');
const desc = input.split(' ').map(Number).sort((a, b) => b - a).join(' ');

if (input === asc) {
    console.log('ascending');
} else if (input === desc) {
    console.log('descending');
} else {
    console.log('mixed');
}