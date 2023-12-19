const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let str = n.toString();
    let arr = [];

    if ( n < 10) return false;
    for (let i = 0; i < str.length; i++) {
      let tempStr = '';
      for (let j = 0; j < str.length; j++) {
        if ( i != j) tempStr += str[j];
      }
      arr[i] = tempStr;
    }
return Math.max(...arr);


}

module.exports = {
  deleteDigit
};
