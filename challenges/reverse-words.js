/**
 * Function accepts a sentance as a string and returns
 * the sentance with the letters of each word reversed
 * @param {String} sentance
 * @returns {String} reversed sentance
 */
module.exports = function reverseWords(str) {
  if (str === undefined) {
    return '';
  }
  const splitArr = str.split(' ');
  let resultStr = '';
  splitArr.forEach((item) => {
    let tempStr = '';
    // do not process existing spaces
    if (item === '' || item === ' ') {
      return;
    }
    for (let idx = item.length - 1; idx >= 0; idx--) {
      const currentChar = item.charAt(idx);
      tempStr += currentChar;
    }
    resultStr += tempStr + ' ';
  });
  return resultStr.trim();
};
