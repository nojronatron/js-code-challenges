'use strict';

function sentenceSmash(inputArr) {
  let collector = '';
  if (inputArr === null || inputArr.length < 1) {
    return collector;
  }
  if (inputArr.length === 1) {
    return inputArr[0];
  }
  let counter = 0;
  let lastIndex = inputArr.length - 1;
  while (counter <= lastIndex) {
    collector = collector + inputArr[counter];
    if (counter < lastIndex) {
      collector = collector + ' ';
    }
  }
  return collector;
}

exports.sentenceSmash = sentenceSmash;
