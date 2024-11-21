const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\n/)
    .map(Number);

const fib = [[1, 0], [0, 1]];

for (let i = 0; i <= 40; i++) {
    const len = fib.length;
    fib.push([fib[len - 1][0] + fib[len - 2][0], fib[len - 1][1] + fib[len - 2][1]]);
}

for (let i = 1; i <= input[0]; i++) {
    console.log(`${fib[input[i]][0]} ${fib[input[i]][1]}`);
}