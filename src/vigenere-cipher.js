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

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

constructor(isDirect = true) {
  this.isDirect = isDirect;
}

encrypt(message, key) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
  let m = message.toUpperCase();
  let k = key.toUpperCase();
  let cipher = '';
  let j = 0;

  for (let i = 0; i < m.length; i++ ) {
      let messageIndex = this.alphabet.indexOf(m[i]);
      if (messageIndex === -1) cipher += m[i];
      else {
        let keyIndex = this.alphabet.indexOf(k[j]);
        cipher += this.alphabet[(messageIndex + keyIndex) % 26];
        j++;
        if (j == k.length) j = 0;
      }
  }
return this.isDirect ? cipher : cipher.split('').reverse().join('');
}
decrypt(encryptedMessage, key) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
  let m = encryptedMessage.toUpperCase();
  let k = key.toUpperCase();
  let message = '';
  let j = 0;

  for (let i = 0; i < m.length; i++ ) {
      let messageIndex = this.alphabet.indexOf(m[i]);
      if (messageIndex === -1) message += m[i];
      else {
        let keyIndex = this.alphabet.indexOf(k[j]);
        if ((messageIndex - keyIndex) >= 0) {
        message += this.alphabet[(messageIndex - keyIndex)];
        }
        else message += this.alphabet[26 + (messageIndex - keyIndex)];
        j++;
        if (j == k.length) j = 0;
      }
  }
return this.isDirect ? message : message.split('').reverse().join('');

}
}

module.exports = {
  VigenereCipheringMachine
};
