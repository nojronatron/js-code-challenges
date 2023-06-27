const { expect } = require("@jest/globals");
const reverseWords = require("../reverse-words");

// set up chai testing
describe("Test reverseWords method", () => {
  // test input "My Dog Has Fleas" returns "yM goD saH saelF"
  it('input "My Dog Has Fleas" returns "yM goD saH saelF"', () => {
    expect(reverseWords("My Dog Has Fleas")).toStrictEqual("yM goD saH saelF");
  });
});
