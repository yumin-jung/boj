const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split('\n');

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

for (let i = 1; i <= input[0]; i++) {
    const [num1, num2] = input[i].split(' ').map(Number);
    console.log(lcm(num1, num2));
}