const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arrCopy initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    console.log(arr)
    if (arr.length === 0) {
      return arr;
    }
    const arrCopy = JSON.parse(JSON.stringify(arr))
    const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    let currControl = controls.filter(control => arrCopy.indexOf(control) !== -1).sort((a,b)=>(arrCopy.indexOf(a)-arrCopy.indexOf(b)))
    if (arrCopy.indexOf(currControl[0]) === -1) {
      return arr;
    }
    if (currControl[0] === '--double-next') {
      if(currControl.length>1 && currControl[1]==='--double-prev'){
        arrCopy[arrCopy.indexOf(currControl[0])] = arrCopy[arrCopy.indexOf(currControl[0]) + 1]
        arrCopy[arrCopy.indexOf(currControl[1])] = arrCopy[arrCopy.indexOf(currControl[1]) - 1]
        return arrCopy;
      }else if(currControl.length>1 && currControl[1]==='--discard-prev'){
        arrCopy[arrCopy.indexOf(currControl[0])] = arrCopy[arrCopy.indexOf(currControl[0]) + 1]
        arrCopy.splice(arrCopy.indexOf(currControl[1])-1, 2)
        return arrCopy;
      }

      if (arrCopy.indexOf(currControl[0]) === arrCopy.length - 1) {
        arrCopy.splice(arrCopy.indexOf(currControl[0]), 1);
        return arrCopy;
      }
      arrCopy[arrCopy.indexOf(currControl[0])] = arrCopy[arrCopy.indexOf(currControl[0]) + 1]
      return arrCopy.filter(Number);
    } else if (currControl[0] === '--double-prev') {
      if (arrCopy.indexOf(currControl[0]) === 0) {
        arrCopy.splice(arrCopy.indexOf(currControl[0]), 1)
        return arrCopy;
      }
      arrCopy[arrCopy.indexOf(currControl[0])] = arrCopy[arrCopy.indexOf(currControl[0]) - 1]
      return arrCopy.filter(Number);
    } else if (currControl[0] === '--discard-prev') {
      if (arrCopy.indexOf(currControl[0]) === 0) {
        arrCopy.splice(arrCopy.indexOf(currControl[0]), 1)
        return arrCopy;
      }
      arrCopy.splice(arrCopy.indexOf(currControl[0]) - 1, 2)
      return arrCopy.filter(Number);
    } else if (currControl[0] === '--discard-next') {
      if (arrCopy.indexOf(currControl[0]) === arrCopy.length - 1) {
        arrCopy.splice(arrCopy.indexOf(currControl[0]), 1);
        return arrCopy;
      }
      arrCopy.splice(arrCopy.indexOf(currControl[0]), 2)
      return arrCopy.filter(Number);
    }
  } catch {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}

module.exports = {
  transform
};
