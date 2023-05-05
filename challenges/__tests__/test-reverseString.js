const { expect } = require("@jest/globals");
const reverseSentence = require('../reverseSentence');

describe("Test reverseString method", () => {
    test("empty input returns empty string", () => {
        expect(reverseSentence("").length).toStrictEqual(0);
        expect(reverseSentence("")).toStrictEqual("");
    });
    test("single character string is returned as is", () => {
        expect(reverseSentence("a").length).toStrictEqual(1);
        expect(reverseSentence("a")).toStrictEqual("a");
        expect(reverseSentence("A")).toStrictEqual("A");
    });
    test("the car goes fast => tsaf seog rac eht", () => {
      const input = "the car goes fast";
      const expected = "tsaf seog rac eht";
      expect(reverseSentence(input).length).toStrictEqual(17);
      expect(reverseSentence(input)).toStrictEqual(expected);
    });
});
