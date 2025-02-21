const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (Object.keys(date) != 0 || date instanceof Date == false) throw new Error('Invalid date!');

  let intDate = new Date(date);
  let season;
  let month = intDate.getMonth();
  let year = intDate.getYear();
  let day = intDate.getDay();

  switch(month) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break;

  }

  return season;
}

module.exports = {
  getSeason
};
