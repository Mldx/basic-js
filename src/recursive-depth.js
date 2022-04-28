const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr,count = 0){
        count=0;
        if (!arr.some(el=>Array.isArray(el)===true)){
            return count+1;
        } else{
            count++;
            count += this.calculateDepth(arr.flat(),count)
        }
        return count;
    }
}

module.exports = {
  DepthCalculator
};
