const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const T = input.shift();

for (let i = 0; i < T; i++) {
    const H = input.shift();
    const W = input.shift();
    const N = input.shift();
    const floor = (N - 1) % H + 1;
    const number = Math.floor((N - 1) / H) + 1;
    if (number < 10) {
        console.log(Number(`${floor}0${number}`));
    } else {
        console.log(Number(`${floor}${number}`));
    }
}