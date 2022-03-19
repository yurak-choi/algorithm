// https://www.acmicpc.net/problem/6597

const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result;

function postOrder(preOrder, inOrder) {
  const length = preOrder.length;

  if (!length) {
    return;
  }

  const root = preOrder[0];
  const rootIndex = inOrder.indexOf(root);

  postOrder(preOrder.substring(1, rootIndex + 1), inOrder.substring(0, rootIndex));
  postOrder(preOrder.substring(rootIndex + 1, length), inOrder.substring(rootIndex + 1, length));

  result.push(root);
}

for (let i = 0; i < inputArr.length; i++) {
  const [preOrder, inOrder] = inputArr[i].split(' ');
  result = [];

  postOrder(preOrder, inOrder);

  console.log(result.join(''));
}
