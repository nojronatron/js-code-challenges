/*
overall Time effeciency is O(n) where n is the length of the string
overall Space effeciency is O(n) where n is the length of the string
*/
String.prototype.toAlternatingCase = function () {
  // function must be pure so create a new string to return
  let result = '';

  for (let idx = 0; idx < this.length; idx++) {
    // String.at() allows indexing characters of a string
    // use locale-based case mapping for upper and lower case
    if (this.at(idx) === this.at(idx).toLocaleUpperCase()) {
      // append to result string
      result += this.at(idx).toLocaleLowerCase();
    } else {
      // only append to result string if not upper case
      result += this.at(idx).toLocaleUpperCase();
    }
    // originally I tested for lower case and then used
    // a catch-all to append unedited characters to result
    // but it is not necessary to do, so I removed it
  }

  return result;
};
