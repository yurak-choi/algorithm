// https://www.acmicpc.net/problem/4673

const N = 10001;
const selfNumberArray = new Array(N);

const getSum = (n) => {
  let sum = n;

  while (true) {
    if (n === 0) {
      break;
    }
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

for (let i = 1; i < N; i++) {
  const sum = getSum(i);

  if (sum < N) {
    selfNumberArray[sum] = true;
  }
}

for (let i = 1; i < N; i++) {
  if (!selfNumberArray[i]) {
    console.log(i);
  }
}
