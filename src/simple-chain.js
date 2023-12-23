const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  elements: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.elements.length;
  },
  addLink(value = "") {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.elements.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.getLength()
        || Number.isInteger(position) == false
        || Number.isNaN(position) == true)
      {
        this.elements = [];
      throw new Error("You can't remove incorrect link!");
      }
    else
      this.elements.splice(position - 1, 1);
  return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.elements.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    for (let i = 0; i < this.getLength() - 1; i++) {
      this.elements[i] += '~~';
    }
    let output = this.elements.join('');
    this.elements = [];
  return output;
  }
};


module.exports = {
  chainMaker
};
