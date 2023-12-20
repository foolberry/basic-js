const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let output = str;
  tempStr = '';
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  str = String(str);
  addition = String(addition);

  if (addition != '') {
    tempStr = (addition + additionSeparator).repeat(additionRepeatTimes);
    tempStr = tempStr.slice(0, tempStr.length - additionSeparator.length);
  }

  output = (str + tempStr + separator).repeat(repeatTimes);
  output =  output.slice(0,  output.length - separator.length);

return output;
}

module.exports = {
  repeater
};
