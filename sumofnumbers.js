const testNumList = [1, 2, 3, 4];
// const _ = require('underscore');

function sumFor(numList) {
  let sum = 0;
  for (const num of numList) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testNumList));

function sumWhile(numList) {
  let sum = 0;
  let i = 0;
  while (i < numList.length) {
    sum += numList[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testNumList));

function sumRecursion(numList, index) {
  if (index >= numList.length) {
    return 0;
  }
  return numList[index] + sumRecursion(numList, index + 1);
}

console.log(sumRecursion(testNumList, 0));

function sumTheSimpleWay(numList) {
  return _.reduce(numList, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNumList));
