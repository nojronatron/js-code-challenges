/**
 * Function accepts a sentance as a string and returns
 * the sentance with the letters of each word reversed
 * @param {String} sentance
 * @returns {String} reversed sentance
 */
module.exports = function reverseWords(str) {
  let splitArr = str.split(" ");
  let resultStr = "";
  splitArr.forEach((item) => {
    let tempStr = "";
    for (let idx = item.length - 1; idx >= 0; idx--) {
      tempStr += item.charAt(idx);
    }
    resultStr += tempStr + " ";
  });
  return resultStr.trim();
};
