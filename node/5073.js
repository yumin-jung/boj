const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length - 1; i++) {
    const arr = input[i].split(' ').map(Number);
    arr.sort((a, b) => a - b);
    if (arr[0] + arr[1] <= arr[2]) {
        console.log('Invalid');
    } else if (arr[0] === arr[1]){
        console.log(arr[1] === arr[2] ? 'Equilateral' : 'Isosceles');
    } else {
        console.log(arr[1] === arr[2] ? 'Isosceles' : 'Scalene');
    }
}