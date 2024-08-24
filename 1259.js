const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

function isPalindrome(str) {
    const arr = str.split('');
    while (arr.length >= 2) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < input.length - 1; i++) {
    console.log(isPalindrome(input[i]) ? 'yes' : 'no');
}