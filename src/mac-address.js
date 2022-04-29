const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  return inputString
      .split('')
      .filter(value => value !== '-')
      .every(value=>{
        let code = value.charCodeAt(0)
        return (code >= 48 && code<=57) || (code >= 65 && code<=70);
      })
}
module.exports = {
  isMAC48Address
};
