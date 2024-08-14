const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(/\n|\s/)
    .map(Number);

const num = input.shift();

for (let i = 1; i <= num; i++) {
    console.log(`Case #${i}: ${input.shift() + input.shift()}`);
}