const [a, b, c, d] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./dev/input.txt")
    .toString()
    .trim()
    .split(/\s|\n/)
    .map(Number);

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

const denom = lcm(b, d);
const num = denom / b * a + denom / d * c;
const div = gcd(denom, num);

console.log(`${num / div} ${denom / div}`);