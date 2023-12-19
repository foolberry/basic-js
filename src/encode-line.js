const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = str.split('');
  const obj ={};
  let output ='';
  let count = 1;

  for (let i = 0; i < arr.length; i++) {

    if ( i != arr.length - 1 && arr[i] === arr[i + 1]) {
      count++;
    }
    else {
      if (count === 1) output += arr[i];
      else {
        output += count + arr[i];
        count = 1;
      }
    }
  }

return output;
}

module.exports = {
  encodeLine
};
