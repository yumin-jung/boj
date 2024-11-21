const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/);

const num = Number(input.shift());

for (let i = 0; i < num; i++) {
    const R = Number(input.shift());
    console.log(input.shift().split('').map((e) => e.repeat(R)).join(''));
}