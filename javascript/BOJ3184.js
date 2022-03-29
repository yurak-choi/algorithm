// https://www.acmicpc.net/problem/3184

const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, col] = inputArr[0].split(' ').map(Number);
const yard = inputArr.slice(1);
let visited = Array.from(Array(row), () => Array(col).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let totalLambs = 0;
let totalWolves = 0;

function dfs(x, y) {
  let lambs = 0;
  let wolves = 0;
  if (yard[y][x] === 'o') lambs++;
  if (yard[y][x] === 'v') wolves++;
  visited[y][x] = true;

  const stack = [[x, y]];
  while (stack.length > 0) {
    const [nowX, nowY] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nextX = dx[i] + nowX;
      const nextY = dy[i] + nowY;

      if (nextX < 0 || nextX >= col || nextY < 0 || nextY >= row) continue;
      if (yard[nextY][nextX] === '#' || visited[nextY][nextX]) continue;

      if (yard[nextY][nextX] === 'o') lambs++;
      if (yard[nextY][nextX] === 'v') wolves++;
      visited[nextY][nextX] = true;
      stack.push([ nextX, nextY ]);
    }
  }
  if (lambs > wolves) totalLambs += lambs
  else totalWolves += wolves;
}

for (let y = 0; y < row; y++) {
  for (let x = 0; x < col; x++) {
    if (yard[y][x] !== '#' && !visited[y][x]) {
      dfs(x, y);
    }
  }
}

console.log(`${totalLambs} ${totalWolves}`);
