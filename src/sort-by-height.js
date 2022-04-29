const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr) {
  let x =[];
  arr = arr.map((value,index,array) => {
    if (value===-1){
      x.push(index)
      return value;
    }else{
      return value;
    }
  }).filter(v=>v!==-1).sort((a,b)=>a-b)
  x.forEach(value => {
    arr.splice(value,0,-1)
  })
  return arr;
}

module.exports = {
  sortByHeight
};
