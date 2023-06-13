const { expect } = require("@jest/globals");
const sumRowsAndCols = require("../row-col-sums");

// console.log("sumRowsAndCols(undefined) returns", sumRowsAndCols(undefined));

describe("Test rowColSums method", () => {
  test("empty input returns object with empty rowSum and colSum", () => {
    const expectedResult = { rowSum: [], colSum: [] };
    expect(sumRowsAndCols(undefined)).toStrictEqual(expectedResult);
  });
  test("empty array input returns object with empty rowSum and colSum", () => {
    const expectedResult = { rowSum: [], colSum: [] };
    expect(sumRowsAndCols([])).toStrictEqual(expectedResult);
  });
  test("input with 1 row returns 1 row and 1 column", () => {
    expect(sumRowsAndCols([[1, 2, 3]])).toStrictEqual({
      rowSum: [6],
      colSum: [1, 2, 3],
    });
  });
  test("input with 1 column and 3 rows returns rowSum[1,2,3] and colsum[6]", () => {
    expect(sumRowsAndCols([[1], [2], [3]])).toStrictEqual({
      rowSum: [1, 2, 3],
      colSum: [6],
    });
  });
  test("input with 3 rows and 3 columns returns rowSum[6,15,24] and colsum[12,15,18]", () => {
    expect(
      sumRowsAndCols([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual({ rowSum: [6, 15, 24], colSum: [12, 15, 18] });
  });
});
