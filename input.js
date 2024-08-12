const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split()
    .map(Number);

if (input[0] < 60) {
    console.log("F");
} else if (input[0] < 70) {
    console.log("D");
} else if (input[0] < 80) {
    console.log("C");
} else if (input[0] < 90) {
    console.log("B");
} else {
    console.log("A");
}