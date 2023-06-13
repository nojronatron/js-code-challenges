# js-code-challenges

Code challenges in javascript.

Created to record my activities practicing solving code challenges using effective problem solving techniques.

The code in this repository is not to be evaluated as a source of _best solutions_ for any given challenge. Instead the code is an honest result of my attempts to solve a problem (in a very short period of time) and to not consider the most elegant or shortest-line-count solutions.

## Goals

- Whiteboard a possible solution to the code challenge.
- Generate a module file to contain the developed solution and export at least one function.
- Create unit tests in a separate file that can test the module file.
- Unit tests must pass.
- Include algorithm analysis and other in-line comments wherever it makes sense to.

An additional README file could be created for certain challenges, and would be linked below.

## Links Challenge Code and Unit Tests

- [x] [Two Equal Sum Arrays](./challenges/twoSetsOfEqualSum.js) and its [tests](./challenges/__tests__/test-twoSetsOfEqualSum.js).
- [x] [Sentence Smash](./challenges/sentenceSmash.js) and its [tests](./challenges/__tests__/test-sentenceSmash.js).
- [x] [Validate Sudoku](./challenges/validate-sudoku-solution.js) and its [tests](./challenges/__tests__/test-validateSudokuSolution.js).
- [x] [Sum Array Rows and Columns](./challenges/row-col-sums.js) and its [tests](./challenges/__tests__/test-row-col-sums.js).

## Requires

- Node version 16.14 or newer.
- Jest version 27.5.1 or newer.

## How To Use

1. Fork this repo (optional - there is no opportunity to contribute).
1. Clone to your local.
1. CD to the project and install dependencies with `npm install`
1. Run all tests using `npm test`

Individual tests can be run with `npm test test_name`
