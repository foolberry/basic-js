const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const arrSorted =[];
  j = 0;
  const arrFiltered = arr.filter(item => item > 0);
  arrFiltered.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) arrSorted.push(arr[i]);
    else {
      arrSorted.push(arrFiltered[j])
      j++;
    }
  }

return arrSorted;
}
module.exports = {
  sortByHeight
};
