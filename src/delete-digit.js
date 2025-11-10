const { NotImplementedError } = require('../lib');

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
  let string = String(n)
  let array = string.split('')
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    let number = array.filter((_, j) => j !== i); 
    if (sum < Number(number.join(''))) {
      sum = Number(number.join(''))
    }
  }
  return sum
}

module.exports = {
  deleteDigit
};
