const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ');

let num = [];
let arr = [];
let res = "<";

for (let i = 0; i < input.length; i++) {
    num.push(Number(input[i]));
}

for(let i = 1; i <= num[0]; i++){
    arr.push(i);
}

for (let j = 0; j < num[0]; j++) {
    let n = num[1] - 1; 
    while (n-- > 0) { 
        let tmp = arr.shift(); 
        arr.push(tmp); 
    }
    res += arr.shift();

    if(arr.length == 0) {
        res += ">";
    } else {
        res += ", ";
    }
}

console.log(res);