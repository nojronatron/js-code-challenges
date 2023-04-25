export default function validateSudokuSolution(inputPuzzle) {
  //  function accepts a 2D array of 9x9 elements
  //  returns true if the following rules apply:
  //    1. each 3x3 group has numbers 1-9
  //    2. each row group has numbers 1-9
  //    3. each col group has numbers 1-9
  //    4. no duplicate numbers within any group
  //    5. no zeroes within any group
  if (typeof inputPuzzle !== "object") {
    return false;
  }

  if (inputPuzzle.length < 9) {
    return false;
  }

  const topLeftSubArr = new Map();
  const topMiddleSubArr = new Map();
  const topRightSubArr = new Map();
  const midLeftSubArr = new Map();
  const centerSubArr = new Map();
  const midRightSubArr = new Map();
  const bottomLeftSubArr = new Map();
  const bottomMiddleSubArr = new Map();
  const bottomRightSubArr = new Map();

  //  traverse each row
  for (let row = 0; row < 9; row++) {
    //  test this row
    const thisRow = new Map(inputPuzzle[row]);
    if (thisRow.size < 9 || thisRow.has(0)) {
      return false;
    }

    //  use a Map to collect this column values
    const thisCol = new Map();

    //  traverse each col
    for (let col = 0; col < 9; col++) {
      //  fast fail if any zeroes are detected
      if (inputPuzzle[row][col] === 0) {
        return false;
      }

      //  load the column
      thisCol.set(inputPuzzle[row][col]);

      //  configure each 3x3 group based on row-by-col values
      if (0 <= row && row <= 2) {
        if (0 <= col && col <= 2) {
          topLeftSubArr.set(inputPuzzle[row][col]);
        }
        if (3 <= col && col <= 5) {
          topMiddleSubArr.set(inputPuzzle[row][col]);
        }
        if (6 <= col && col <= 8) {
          topRightSubArr.set(inputPuzzle[row][col]);
        }
      }

      if (3 <= row && row <= 5) {
        if (0 <= col && col <= 2) {
          midLeftSubArr.set(inputPuzzle[row][col]);
        }
        if (3 <= col && col <= 5) {
          centerSubArr.set(inputPuzzle[row][col]);
        }
        if (6 <= col && col <= 8) {
          midRightSubArr.set(inputPuzzle[row][col]);
        }
      }

      if (6 <= row && row <= 8) {
        if (0 <= col && col <= 2) {
          bottomLeftSubArr.set(inputPuzzle[row][col]);
        }
        if (3 <= col && col <= 5) {
          bottomMiddleSubArr.set(inputPuzzle[row][col]);
        }
        if (6 <= col && col <= 8) {
          bottomRightSubArr.set(inputPuzzle[row][col]);
        }
      }
    }
    if (thisCol.size < 9) {
      return false;
    }
  }

  if (
    topLeftSubArr.size < 9 ||
    topMiddleSubArr.size < 9 ||
    topRightSubArr.size < 9 ||
    midLeftSubArr.size < 9 ||
    centerSubArr.size < 9 ||
    bottomLeftSubArr.size < 9 ||
    bottomMiddleSubArr.size < 9 ||
    bottomRightSubArr.size < 9
  ) {
    return false;
  }

  return true;
}
