// https://www.acmicpc.net/problem/5585

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const changesArr = [500, 100, 50, 10, 5, 1];

const getChangesCount = (price) => {
  let changes = 1000 - price;
  let count = 0;

  for (let i = 0; i < changesArr.length; i++) {
    count += Math.floor(changes / changesArr[i]);
    changes %= changesArr[i];
  }

  return count;
};

console.log(getChangesCount(input));
