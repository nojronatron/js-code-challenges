const { expect } = require('@jest/globals');
const validateSudokuSolution = require('../validate-sudoku-solution');

describe('Test validator', () => {
  const basicPassingPuzzle = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];

  const basicFailingPuzzle = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];

  const zeroesFailingPuzzle = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 0, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 0],
  ];

  const notEnoughRows = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
  ];

  const notEnoughCols = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [5, 6, 7, 8, 9, 1, 2, 3],
    [8, 9, 1, 2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7, 8, 9, 1],
    [6, 7, 8, 9, 1, 2, 3, 4],
    [9, 1, 2, 3, 4, 5, 6, 7],
  ];

  const tooManyRows = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const tooManyCols = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    [4, 5, 6, 7, 8, 9, 1, 2, 3, 4],
    [7, 8, 9, 1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
    [5, 6, 7, 8, 9, 1, 2, 3, 4, 5],
    [8, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
    [6, 7, 8, 9, 1, 2, 3, 4, 5, 6],
    [9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const puzzleHasZeroes = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 0, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 0, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];

  test('basic valid puzzle returns true', () => {
    expect(validateSudokuSolution(basicPassingPuzzle)).toBeTruthy();
  });

  test('basic invalid puzzle returns false', () => {
    expect(validateSudokuSolution(basicFailingPuzzle)).toBeFalsy();
  });

  test('basic puzzle with zeros returns false', () => {
    expect(validateSudokuSolution(puzzleHasZeroes)).toBeFalsy();
    expect(validateSudokuSolution(zeroesFailingPuzzle)).toBeFalsy();
  });

  test('puzzle type not an object returns false', () => {
    expect(validateSudokuSolution('string')).toBeFalsy();
  });

  test('puzzle rows count not 9 returns false', () => {
    expect(validateSudokuSolution(notEnoughRows)).toBeFalsy();
    expect(validateSudokuSolution(tooManyRows)).toBeFalsy();
  });

  test('puzzle columns less than 9 returns false', () => {
    expect(validateSudokuSolution(notEnoughCols)).toBeFalsy();
  });

  test('valid puzzle with extra columns could still return true', () => {
    expect(validateSudokuSolution(tooManyCols)).toBeTruthy();
  });
});
