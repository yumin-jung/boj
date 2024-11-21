const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function cantor(n) {
    let res = '-';
    
    if (n === 0) return res;

    for (let i = 0; i < n; i++) {
        res = res + ' '.repeat(res.length) + res;
    }

    return res;
}


console.log(input.map((e) => cantor(e)).join('\n'));