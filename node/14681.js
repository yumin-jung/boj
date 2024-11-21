const input = require('fs')
    .readFileSync(0)
    .toString()
    .split("\n")
    .map(Number);

if (input[0] > 0 && input[1] > 0) {
    console.log(1);
} else if (input[0] < 0 && input[1] > 0) {
    console.log(2);
} else if (input[0] < 0 && input[1] < 0) {
    console.log(3);
} else {
    console.log(4);
}