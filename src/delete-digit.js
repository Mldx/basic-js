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
  const arr = String(n).split('').map(Number);
  let temp=0;
  arr.forEach((value,index) => {
    let tempNum=Number(arr.filter((el,ind)=>ind!==index).join(''))
    if (temp<tempNum){
      temp=tempNum;
    }
  })
  return temp;
}

module.exports = {
  deleteDigit
};
