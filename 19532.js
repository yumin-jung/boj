const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()    
    .trim()
    .split(' ')
    .map(Number);

const a = input.shift();
const b = input.shift();
const c = input.shift();
const d = input.shift();
const e = input.shift();
const f = input.shift();

for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
        if (a * i + b * j === c && d * i + e * j === f) {
            console.log(`${i} ${j}`);
            return;
        }
    }
}