function sentenceSmash(inputArr) {
  //  accept an array of words and smash them together into a sentence
  //  input sanitization and special character handling not necessary
  //  simply add a space between each word in the input array
  //  Analysis:
  //    Time: O(n) -> every input element is traversed once
  //    Space O(n) -> Returns new String
  let collector = "";

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
      collector = collector + " ";
    }

    counter++;
  }

  return collector;
}

exports.sentenceSmash = sentenceSmash;
