const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const queue = [];
const res = [];
const N = Number(input[0]);

for(let i = 1; i <= N; i++){
    let cmd = input[i].split(' ');
    switch(cmd[0]) {
        case 'push':
            queue.push(cmd[1]);
            break;
        case 'pop':
            res.push(queue.shift() || -1);
            break;
        case 'size':
            res.push(queue.length);
            break;
        case 'empty':
            res.push(queue[0] ? 0 : 1);
            break;
        case 'front':
            res.push(queue[0] || -1);
            break;
        case 'back':
            res.push(queue[queue.length - 1] || -1);
            break;
    }
}

console.log(res.join('\n'));