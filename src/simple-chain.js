const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.temp.length;
  },
  addLink(value) {
    if (this['temp'] === undefined) {
      this['temp'] = [];
    }
    if (value === undefined) {
      this.temp.push(`()`);
    } else {
      this.temp.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0 && position < this.temp.length && position > 0) {
      this.temp.splice(position - 1, 1)
      return this;
    } else {
      delete this.temp;
      throw new Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    if (this['temp'] === undefined) {
      this['temp'] = [];
    }
    this.temp.reverse();
    return this;
  },
  finishChain() {
    let x = this.temp.join('~~');
    delete this.temp;
    return x;
  }
};

module.exports = {
  chainMaker
};
