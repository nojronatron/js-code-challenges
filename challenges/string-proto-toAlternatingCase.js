String.prototype.toAlternatingCase = function () {
  let result = '';
  for (let idx = 0; idx < this.length; idx++) {
    if (this.at(idx) === this.at(idx).toUpperCase()) {
      result += this.at(idx).toLocaleLowerCase();
    } else {
      result += this.at(idx).toLocaleUpperCase();
    }
  }
  return result;
};
