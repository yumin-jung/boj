const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map((e) => e.split(''));
let res = N * M;

const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

function whiteCount(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== white[i][j]) {
                count++;
            }
        }
    }
    return count;
}

function blackCount(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== black[i][j]) {
                count++;
            }
        }
    }
    return count;
}

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        if (whiteCount(i, j) < res) {
            res = whiteCount(i, j);
        }
        if (blackCount(i, j) < res) {
            res = blackCount(i, j);
        }
    }
}

console.log(res);