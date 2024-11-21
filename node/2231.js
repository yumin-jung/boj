const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

for (let i = 1; i < Number(input); i++) {
    if (i.toString().split('').reduce((a, c) => a + Number(c), 0)
       + i === Number(input)) {
        console.log(i);
        return;
    }
}

console.log(0);