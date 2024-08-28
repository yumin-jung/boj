const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

let res;

if (!isNaN(input[0])) {
    res = +input[0] + 3;
} else if (!isNaN(input[1])) {
    res = +input[1] + 2;
} else {
    res = +input[2] + 1;
}

if (res % 15 === 0) {
    console.log('FizzBuzz');
} else if (res % 3 === 0) {
    console.log('Fizz');
} else if (res % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(res);
}