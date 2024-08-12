const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);

if (input[0] < input[1]) {
    console.log("<");
} else if (input[0] > input[1]) {
    console.log(">");
} else {
    console.log("==");
}