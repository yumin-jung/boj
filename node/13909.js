const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim();

console.log(Math.floor(Math.sqrt(Number(input))));