/**
 * Function accepts a sentance as a string and returns
 * the sentance with the letters of each word reversed
 * @param {String} sentance
 * @returns {String} reversed sentance
 */
module.exports = function reverseWords(str) {
  // edge case: undefined input ? return empty string
  if (str === undefined) {
    return '';
  }

  // split string into array of words built-in: O(n)
  const splitArr = str.split(' ');
  let resultStr = '';

  // iterate over array and process each word: O(n)
  splitArr.forEach((item) => {
    let tempStr = '';
    // do not process existing spaces
    if (item === '' || item === ' ') {
      return;
    }
    // iterate over word starting and end character and build a new string
    // O(chars) + O(word)
    for (let idx = item.length - 1; idx >= 0; idx--) {
      const currentChar = item.charAt(idx);
      tempStr += currentChar;
    }
    // expensively overwrite immutable object
    resultStr += tempStr + ' ';
  });

  // remove any starting or training space
  // characters before returning result
  // overall Time O(words + charsInWords) -> O(n+m)
  // Space O(n+1) -> O(n) where n is the number of words
  return resultStr.trim();
};
