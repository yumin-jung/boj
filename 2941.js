const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();

const patterns = /c=|c-|dz=|d-|lj|nj|s=|z=/g;

console.log(input.replace(patterns, "a").length);