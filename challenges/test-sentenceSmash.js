'use strict';

import sentenceSmash from "./sentenceSmash";

describe('Testing challenge', () => {
  const inputs = [""];

  test('It should print out an empty string', () => {
    expect(sentenceSmash(inputs)).toStrictEqual("");
    expect(fizzbuzz(inputs).length).toStrictEqual(0);
  });
});
