const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

let num = 1;
let room = 1;

while (num < Number(input)) {
    num += room * 6;
    room++;
}

console.log(room);