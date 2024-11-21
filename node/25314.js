const input = require('fs')
    .readFileSync("/dev/stdin")
    .toString()
    .split()
    .map(Number);

let res = "";

for (let _ = 0; _ < Math.floor(input[0] / 4); _++) {
    res += "long ";
}

console.log(res + "int");