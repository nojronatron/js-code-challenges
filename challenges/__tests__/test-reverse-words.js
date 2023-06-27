const { expect } = require("@jest/globals");
const reverseWords = require("../reverse-words");

// set up chai testing
describe("Test reverseWords method", () => {
  // test empty input returns empty string
  it("empty input returns empty string", () => {
    expect(reverseWords("")).toStrictEqual("");
  });

  // test undefined input returns empty string
  it("undefined input returns empty string", () => {
    expect(reverseWords(undefined)).toStrictEqual("");
  });

  // test single word with single letter returns same letter
  it("single word with single letter returns same letter", () => {
    expect(reverseWords("a")).toStrictEqual("a");
  });

  // test single word two letters returns reversed letters
  it("single word two letters returns reversed letters", () => {
    expect(reverseWords("ab")).toStrictEqual("ba");
  });

  // test multiple words with single letter each returns same as input
  it("multiple words with single letter each returns same as input", () => {
    expect(reverseWords("a b c")).toStrictEqual("a b c");
  });

  // test multiple words with lots of spaces and large letter count returns reversed words
  it("multiple words with lots of spaces and large letter count returns reversed words", () => {
    expect(reverseWords("  abc  defg  ")).toStrictEqual("cba gfed");
  });

  // test input "My Dog Has Fleas" returns "yM goD saH saelF"
  it('input "My Dog Has Fleas" returns "yM goD saH saelF"', () => {
    expect(reverseWords("My Dog Has Fleas")).toStrictEqual("yM goD saH saelF");
  });
});
