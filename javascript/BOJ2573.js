// https://www.acmicpc.net/problem/2573

const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, col] = inputArr[0].split(' ').map(Number);
let arr = inputArr.slice(1, inputArr.length).map(input => input.split(' ').map(Number));
let visitedArr = Array.from(Array(row), () => Array(col).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const main = () => {
  let year = 0;
  let icebergCount = 0;

  while ((icebergCount = getIcebergCount()) < 2) {
    if (icebergCount === 0) {
      year = 0;
      break;
    }
    year++;
    visitedArr = Array.from(Array(row), () => Array(col).fill(false));
    let minusArr = Array.from(Array(row), () => Array(col).fill(0));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (arr[i][j] > 0) {
          minusArr[i][j] = getMinusHeight(i, j);
        }
      }
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        arr[i][j] -= minusArr[i][j];
      }
    }
  }
  console.log(year);
}

const getIcebergCount = () => {
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visitedArr[i][j] && arr[i][j] > 0) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}

const dfs = (y, x) => {
  visitedArr[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const nextX = dx[i] + x;
    const nextY = dy[i] + y;

    if (nextX >= 0 && nextX < col && nextY >= 0 && nextY < row) {
      if (!visitedArr[nextY][nextX] && arr[nextY][nextX] > 0) {
        dfs(nextY, nextX);
      }
    }
  }
}

const getMinusHeight = (y, x) => {
  let height = 0;
  for (let i = 0; i < 4; i++) {
    const nextX = dx[i] + x;
    const nextY = dy[i] + y;

    if (nextX >= 0 && nextX < col && nextY >= 0 && nextY < row) {
      if (arr[nextY][nextX] <= 0) {
        height++;
      }
    }
  }
  return height;
}

main();
