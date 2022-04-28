const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  arrayL = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    try {
      let len = message.length;
      key = key.padEnd(len, key).toUpperCase().split('');
      message = message.toUpperCase().split('');
      message.forEach((value, index) => {
        if (this.arrayL.indexOf(value) === -1) {
          key.splice(index, 0, ' ');
        }
      });
      key = key.splice(0, len);
      message = message.map((value, index) => {
        if (this.arrayL.indexOf(value) !== -1) {
          let sumIndex = this.arrayL.indexOf(value) + this.arrayL.indexOf(key[index]);
          return this.arrayL[sumIndex > 25 ? sumIndex - 26 : sumIndex]
        } else {
          return value;
        }
      })
      return this.direct === true ? message.join('') : message.reverse().join('')
    } catch {
      throw new Error('Incorrect arguments!')
    }
  }

  decrypt(message, key) {
    try {
      let len = message.length;
      key = key.padEnd(len, key).toUpperCase().split('');
      message = message.toUpperCase().split('');
      message.forEach((value, index) => {
        if (this.arrayL.indexOf(value) === -1) {
          key.splice(index, 0, ' ');
        }
      });
      key = key.splice(0, len);
      message = message.map((value, index) => {
        if (this.arrayL.indexOf(value) !== -1) {
          let sumIndex = this.arrayL.indexOf(value) - this.arrayL.indexOf(key[index]);
          return this.arrayL[sumIndex < 0 ? this.arrayL.indexOf(value) + 26 - this.arrayL.indexOf(key[index]) : this.arrayL.indexOf(value) - this.arrayL.indexOf(key[index])];
        } else {
          return value;
        }
      })
      return this.direct === true ? message.join('') : message.reverse().join('')
    } catch {
      throw new Error('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
