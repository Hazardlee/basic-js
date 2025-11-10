const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  const result = domains.map(domain => domain.split('.').reverse());
  for (let i = 0;i < result.length;i++) {
    let key = ''
    for (let j=0;j < result[i].length;j++) {
      key += `.${result[i][j]}`
      obj[key] = (obj[key] || 0) + 1
    }
  } return obj
}

module.exports = {
  getDNSStats
};
