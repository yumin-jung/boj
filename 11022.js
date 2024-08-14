const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split(/\n|\s/)
    .map(Number);

const num = input.shift();

for (let i = 1; i <= num; i++) {
    const a = input.shift();
    const b = input.shift();
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}