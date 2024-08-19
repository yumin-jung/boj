const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const num = input.length;
const score = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0.0
}

let res = 0;
let credit = 0;

for (let i = 0; i < num; i++) {
    const s = input.shift().split(' ');
    if (s[2] !== 'P') {
        res += Number(s[1]) * score[s[2]];
        credit +=  Number(s[1]);
    }
}

console.log(res / credit);