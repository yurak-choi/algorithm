// https://www.acmicpc.net/problem/1065

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const getHansuCount = (num) => {
  const integerNum = Number(num);

  if (integerNum < 100) {
    return integerNum;
  }

  let count = 99;

  for (let i = 100; i <= integerNum; i++) {
    const hundred = Math.floor(i / 100);
    const ten = Math.floor(i / 10) % 10;
    const one = i % 10;

    if (hundred - ten === ten - one) {
      count++;
    }
  }
  return count;
};

console.log(getHansuCount(input));
