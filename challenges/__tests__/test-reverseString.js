const { expect } = require("@jest/globals");
const reverseString = require('../reverseString');

describe("Test reverseString method", () => {
    test("empty input returns empty string", () => {
        expect(reverseString("").length).toStrictEqual(0);
        expect(reverseString("")).toStrictEqual("");
    });
    test("single character string is returned as is", () => {
        expect(reverseString("a").length).toStrictEqual(1);
        expect(reverseString("a")).toStrictEqual("a");
        expect(reverseString("A")).toStrictEqual("A");
    });
    test("the car goes fast => tsaf seog rac eht", () => {
      const input = "the car goes fast";
      const expected = "tsaf seog rac eht";
      expect(reverseString(input).length).toStrictEqual(17);
      expect(reverseString(input)).toStrictEqual(expected);
    });
});
