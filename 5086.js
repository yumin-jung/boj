const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

while (input[0] !== 0 && input[1] !== 0) {
    const a = input.shift();
    const b = input.shift();
    
    if (a <= b && b % a === 0) {
        console.log('factor');
    } else if (a >= b && a % b === 0) {
        console.log('multiple');
    } else {
        console.log('neither');
    }
}