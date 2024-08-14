const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')

const nums = input[1].split(' ').sort((a, b) => a - b);
console.log(nums.length === 1 ? nums[0] * nums[0] : nums[0] * nums[nums.length - 1]);