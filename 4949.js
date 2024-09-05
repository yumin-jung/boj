const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace(/[^\[\]\(\)]/g, '').split(''));

let res = [];

for (let i = 0; i < input.length - 1; i++) {
    let stack = [];
    let isBalanced = false;
    
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] ==='(' || input[i][j] === '[') {
            stack.push(input[i][j]);
        } else if (input[i][j] ===')' || input[i][j] === ']') {
            const check = stack.pop() + input[i][j];
            if (check === '()' || check === '[]') {
                continue;
            } else {
                res.push('no');
                isBalanced = true;
                break;
            }
        }
    }
    
    if (!isBalanced) {
        res.push(stack.length === 0 ? 'yes' : 'no');
    }
}

console.log(res.join('\n'));