function validateSudokuSolution(inputPuzzle) {
  //  function accepts a 2D array of 9x9 elements
  //  returns true if the following rules apply:
  //    1. each 3x3 group has numbers 1-9
  //    2. each row group has numbers 1-9
  //    3. each col group has numbers 1-9
  //    4. no duplicate numbers within any group
  //    5. no zeroes within any group
  //  Algorithms is O(n^2) in time and O(n) in space

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
  for (let outer = 0; outer < 9; outer++) {
    //  test this currentrow
    const thisRow = inputPuzzle[outer];
    const rowMap = new Map();
    thisRow.forEach((element) => {
      rowMap.set(element);
    });

    if (rowMap.size < 9 || rowMap.has(0)) {
      return false;
    }

    //  use a Map to collect this column values
    const thisCol = new Map();

    //  traverse each column
    for (let inner = 0; inner < 9; inner++) {
      //  fast fail if any zeroes are detected
      if (inputPuzzle[inner][outer] === 0) {
        return false;
      }

      //  load the column
      const colElementValue = inputPuzzle[inner][outer];
      thisCol.set(colElementValue);

      //  configure each 3x3 group based on row-by-col values
      if (0 <= outer && outer <= 2) {
        if (0 <= inner && inner <= 2) {
          topLeftSubArr.set(inputPuzzle[outer][inner]);
        }
        if (3 <= inner && inner <= 5) {
          topMiddleSubArr.set(inputPuzzle[outer][inner]);
        }
        if (6 <= inner && inner <= 8) {
          topRightSubArr.set(inputPuzzle[outer][inner]);
        }
      }

      if (3 <= outer && outer <= 5) {
        if (0 <= inner && inner <= 2) {
          midLeftSubArr.set(inputPuzzle[outer][inner]);
        }
        if (3 <= inner && inner <= 5) {
          centerSubArr.set(inputPuzzle[outer][inner]);
        }
        if (6 <= inner && inner <= 8) {
          midRightSubArr.set(inputPuzzle[outer][inner]);
        }
      }

      if (6 <= outer && outer <= 8) {
        if (0 <= inner && inner <= 2) {
          bottomLeftSubArr.set(inputPuzzle[outer][inner]);
        }
        if (3 <= inner && inner <= 5) {
          bottomMiddleSubArr.set(inputPuzzle[outer][inner]);
        }
        if (6 <= inner && inner <= 8) {
          bottomRightSubArr.set(inputPuzzle[outer][inner]);
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

module.exports = validateSudokuSolution;
