const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((value, index, array) => {
    value.forEach((val, i, arr) => {
      if (index === 0) {
        sum += val;
      } else if (array[index - 1][i] !== 0) {
        sum += val;
      }
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
