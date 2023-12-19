const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = domains.map(item => {
    return item.split('.').reverse();
  })

  let temp = '';
  let key = '';
  const obj ={};

  arr.forEach(element => {
    element.forEach((item, index, array) => {
      if (index == 0) {
        temp = '';
        key = `.${item}`;
        if (key in obj) obj[key]++;
        else obj[key] = 1;
      }
      else  {
        temp += `.${array[index - 1]}`;
        key = `${temp}.${item}`;
        if (key in obj) obj[key]++;
        else obj[key] = 1;
      }
    })
  });

return obj;
}

module.exports = {
  getDNSStats
};
