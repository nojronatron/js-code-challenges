// divide an array of numbers into two sets of equal sum
// input: number
// output: an array
// constraints: input must be a number greater than 2
// edge cases: input is undefined, input is less than 3
// examples:
// 3 => [3], [2, 1]
// 4 => [4, 1], [2, 3]
// Analysis: Time O(value of N); Space O(1)

function createTwoSetsOfEqualSum(number) {
  if (!number) {
    return [];
  }

  if (number < 3) {
    return [];
  }

  let arraySum = 0;
  for (let idx = 1; idx <= number; idx++) {
    arraySum += idx;
  }
  if (arraySum % 2 !== 0) {
    return [];
  }
  let targetSum = arraySum / 2;
  const leftArray = [];
  const rightArray = [];
  let leftArraySum = 0;
  for (let idx = number; idx >= 1; idx--) {
    if (leftArraySum + idx <= targetSum) {
      leftArray.push(idx);
      leftArraySum += idx;
    } else {
      rightArray.push(idx);
    }
  }
  return [leftArray, rightArray];
}

module.exports = createTwoSetsOfEqualSum;
