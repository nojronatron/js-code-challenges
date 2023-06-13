/**
 * Function accepts a 2D array of numbers and returns
 * an object with the sum of each row and column
 * @param {Array} numberArray
 * @returns {Object} { rowSum: [Number, ...], colSum: [Number, ...] }
 */
module.exports = function sumRowsAndCols(numberArray) {
  if (numberArray == undefined || numberArray.length == 0) {
    return { rowSum: [], colSum: [] };
  }

  // when creating an array based on the length of
  // another array, use the length of the other array
  // to avoid hardcoding the length of the array
  // NOTE: The fill() function will cause the algorithmic
  //       complexity to increase from O(n) to O(n^2)
  const rowSum = new Array(numberArray.length).fill(0);
  const colSum = new Array(numberArray[0].length).fill(0);

  // overall Time complexity is O(nm) where n=rows and m=columns
  // overall Space complexity is O(n+m) where n=rows and m=columns
  for (let rowIdx = 0; rowIdx < numberArray.length; rowIdx++) {
    for (let colIdx = 0; colIdx < numberArray[rowIdx].length; colIdx++) {
      const cellVal = numberArray[rowIdx][colIdx];
      const rowSumVal = rowSum[rowIdx] + cellVal;
      const colSumVal = colSum[colIdx] + cellVal;
      rowSum[rowIdx] = rowSumVal;
      colSum[colIdx] = colSumVal;
    }
  }

  const result = {
    rowSum: rowSum,
    colSum: colSum,
  };

  return result;
};
