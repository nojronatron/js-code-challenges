const { expect } = require("@jest/globals");
const sentenceSmash = require("../sentenceSmash");

describe("Testing challenge", () => {
  test("Empty string in empty string out", () => {
    const inputs = [""];
    expect(sentenceSmash.sentenceSmash(inputs)).toStrictEqual("");
    expect(sentenceSmash.sentenceSmash(inputs).length).toStrictEqual(0);
  });

  test("Null in empty string out", () => {
    expect(sentenceSmash.sentenceSmash(null)).toStrictEqual("");
  });

  test("The,fox,in,red,socks,jumps,over,the,rocks is returned as a full sentence", () => {
    const input = [
      "The",
      "fox",
      "in",
      "red",
      "socks",
      "jumps",
      "over",
      "the",
      "rocks",
    ];
    expect(sentenceSmash.sentenceSmash(input)).toStrictEqual(
      "The fox in red socks jumps over the rocks"
    );
  });
});
