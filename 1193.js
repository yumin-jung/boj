const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

let X = Number(input);
let n = 1;

while (true) {
    X -= n;
    if (X <= 0) {
        X += n;
        break;
    }
    n++;
}

if (n % 2 === 1) {
    console.log(`${n - X + 1}/${X}`)
} else {
    console.log(`${X}/${n - X + 1}`)
}