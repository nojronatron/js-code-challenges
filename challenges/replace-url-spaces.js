module.exports = function convertUrlSpaces(inputUrl) {
  if (typeof inputUrl !== 'string') {
    return '';
  }
  if (inputUrl.length < 1) {
    return '';
  }
  if (inputUrl.length === 1 && inputUrl === '') {
    return '%20';
  }

  const trimmedUrl = inputUrl.trim();
  let result = '';

  for (let idx = 0; idx < trimmedUrl.length; idx++) {
    const currentChar = trimmedUrl.charAt(idx);
    if (currentChar === ' ') {
      result += '%20';
    } else {
      result += currentChar;
    }
  }
  return result;
};
