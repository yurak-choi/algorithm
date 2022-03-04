// https://www.acmicpc.net/problem/4949

const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const open = ['(', '['];
const close = [')', ']'];

const result = inputArr.slice(0, inputArr.length - 1).map(input => {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (open.includes(input[i])) {
      stack.push(input[i]);
    } else if (close.includes(input[i])) {
      if (stack.pop() !== open[close.indexOf(input[i])]) {
        stack.push(input[i]);
        break;
      }
    }
  }

  if (stack.length === 0) {
    return 'yes';
  } else {
    return 'no';
  }
});

console.log(result.join('\n'));
