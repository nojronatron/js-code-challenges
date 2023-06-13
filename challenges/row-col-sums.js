module.exports = function sumRowsAndCols(numberArray) {
  if (numberArray == undefined || numberArray.length == 0) {
    return { rowSum: [], colSum: [] };
  }

  const rowSum = [0, 0, 0];
  const colSum = [0, 0, 0];

  // implement solution here

  const result = {
    rowSum: rowSum,
    colSum: colSum,
  };

  return result;
};
