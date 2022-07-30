'use strict';

import sentenceSmash from "./sentenceSmash";

describe('Testing challenge', () => {
  const inputs = [""];

  test('Empty string in empty string out', () => {
    expect(sentenceSmash(inputs)).toStrictEqual("");
    expect(fizzbuzz(inputs).length).toStrictEqual(0);
  });
});
