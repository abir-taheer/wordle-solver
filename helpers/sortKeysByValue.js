/**
 * @param {Object} object - An object where keys are mapped to numerical values
 */
function sortKeysByValue(object) {
  return Object.keys(object).sort((a, b) => object[b] - object[a]);
}

module.exports = sortKeysByValue;
