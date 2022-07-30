'use strict';

const { expect } = require('@jest/globals');
const { default: test } = require('node:test');
const sentenceSmash = require('../sentenceSmash');

describe('Testing challenge', () => {
  const inputs = [''];

  test('Empty string in empty string out', () => {
    expect(sentenceSmash.sentenceSmash(inputs)).toStrictEqual('');
    expect(sentenceSmash.sentenceSmash(inputs).length).toStrictEqual(0);
  });

  test('Null in empty string out', () => {
    expect(sentenceSmash.sentenceSmash(null)).toStrictEqual('');
  });


});
