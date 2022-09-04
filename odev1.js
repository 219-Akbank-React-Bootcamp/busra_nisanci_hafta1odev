const arr = ["reNo", "BmW", "mercedes"];

Array.prototype.includesCi = function (param) {
  for (let i = 0; i < this.length; i++) {
    if (param.toLowerCase() === this[i].toLowerCase()) {
      return true;
    }
  }
  return false;
};
let res = arr.includesCi("bmw");

console.log(res);
