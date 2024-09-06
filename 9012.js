const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
    const stack = [];
    let res = 'YES';
    
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === '(') {
            stack.push(true);
        } else {
            if (!stack.pop()) {
                res = 'NO';
                break;
            }
        }
    }
    
    if (stack.length !== 0) {
        res = 'NO'
    }
    
    console.log(res);
}