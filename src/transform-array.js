const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (Array.isArray(arr) == false)
  throw new Error(`'arr' parameter must be an instance of the Array!`);

const transformedArray =[];
let j = 0;

for (let i = 0; i < arr.length; i++) {
      // j++;
      switch (arr[i]) {
        case '--double-prev':
          if (j > 0 & transformedArray[j - 1] != '--removed') {
            transformedArray[j] = arr[j - 1];
            j++;
          }
          break;
        case '--double-next':
          if (i < arr.length - 1) transformedArray[j] = arr[i + 1];
          j++;
          break;
        case '--discard-prev':
          if (j > 0) transformedArray[j - 1] = '--removed';
          break;
        case '--discard-next':
          transformedArray[j] = '--removed';
          i++;
          j++;
          break;
        default:
          transformedArray[j] = arr[i];
          j++;
      }
}
console.log (transformedArray)
const output = transformedArray.filter(item => {
  return item != '--removed';
})

return output;



}

module.exports = {
  transform
};
