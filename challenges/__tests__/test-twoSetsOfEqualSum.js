const { expect } = require("@jest/globals");
const createTwoSetsOfEqualSum = require("../twoSetsOfEqualSum");

describe("Test createTwoSetsOfEqualSum method", () => {
  test("empty input returns empty array", () => {
    expect(createTwoSetsOfEqualSum(undefined).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(undefined)).toStrictEqual([]);
  });
  test("input less than 3 returns empty array", () => {
    expect(createTwoSetsOfEqualSum(0).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(0)).toStrictEqual([]);
    expect(createTwoSetsOfEqualSum(1).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(1)).toStrictEqual([]);
    expect(createTwoSetsOfEqualSum(2).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(2)).toStrictEqual([]);
  });
  test("input 3 returns [3], [2, 1]", () => {
    const result = createTwoSetsOfEqualSum(3);
    expect(createTwoSetsOfEqualSum(3).length).toStrictEqual(2);

    const leftArray = result[0];
    const rightArray = result[1];
    expect(leftArray.length).toStrictEqual(1);
    expect(rightArray.length).toStrictEqual(2);
    expect(leftArray.includes(3)).toBeTruthy();
    expect(rightArray.includes(2)).toBeTruthy();
    expect(rightArray.includes(1)).toBeTruthy();
  });
  test("input 4 returns [4, 1], [2, 3]", () => {
    const result = createTwoSetsOfEqualSum(4);
    expect(result.length).toStrictEqual(2);

    const leftArray = result[0];
    const rightArray = result[1];

    expect(leftArray.length).toStrictEqual(2);
    expect(rightArray.length).toStrictEqual(2);

    expect(leftArray.includes(4)).toBeTruthy();
    expect(leftArray.includes(1)).toBeTruthy();
    expect(rightArray.includes(2)).toBeTruthy();
    expect(rightArray.includes(3)).toBeTruthy();
  });
  test("input 5 returns []", () => {
    expect(createTwoSetsOfEqualSum(5).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(5)).toStrictEqual([]);
  });
  test("input 6 returns []", () => {
    expect(createTwoSetsOfEqualSum(6).length).toStrictEqual(0);
    expect(createTwoSetsOfEqualSum(6)).toStrictEqual([]);
  });
  test("input 7 returns 2D array of sizes 3 and 4", () => {
    const result = createTwoSetsOfEqualSum(7);
    expect(result.length).toStrictEqual(2);

    const leftArray = result[0];
    const rightArray = result[1];

    expect(leftArray.length).toStrictEqual(3);
    expect(rightArray.length).toStrictEqual(4);
  });
});
