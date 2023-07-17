// function replaces all spaces in a string with '%20'
module.exports = function convertUrlSpaces(inputUrl) {
  // check for a non-string input type and return an empty string if true
  if (typeof inputUrl !== 'string') {
    return '';
  }
  // check for an empty string and return an empty string if true
  if (inputUrl.length < 1) {
    return '';
  }
  // check for a single character space character and return '%20' if true
  if (inputUrl.length === 1 && inputUrl === ' ') {
    return '%20';
  }

  // trim the input string to remove leading and trailing whitespace
  const trimmedUrl = inputUrl.trim();
  let result = '';

  // iterate over the string and write each character to the result string
  for (let idx = 0; idx < trimmedUrl.length; idx++) {
    const currentChar = trimmedUrl.charAt(idx);

    if (currentChar === ' ') {
      // replace a space with a '%20'
      result += '%20';
    } else {
      // copy the current character to the result string
      result += currentChar;
    }
  }

  // return the result string to the caller and exit
  return result;
};
