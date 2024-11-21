const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function isPerfect(n) {
    const div = [1];
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            div.push(i);
        }
    }
    
    if (div.reduce((a, c) => a + c, 0) === n) {
        const print = div.join(' + ');
        console.log(`${n} = ` + print);
    } else {
        console.log(`${n} is NOT perfect.`);
    }
}

input.pop();

input.map((e) => {
    isPerfect(e);
})