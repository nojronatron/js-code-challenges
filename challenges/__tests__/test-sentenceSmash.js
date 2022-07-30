'use strict';

const sentenceSmash = require('../sentenceSmash');

describe('Testing challenge', () => {
  const inputs = [''];

  test('Empty string in empty string out', () => {
    expect(sentenceSmash(inputs)).toStrictEqual('');
    expect(sentenceSmash(inputs).length).toStrictEqual(1);
  });
});
