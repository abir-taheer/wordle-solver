/**
 * @param {Object} object - An object where keys are mapped to numerical values
 * @return {Array<string>} - An array with the keys of the object sorted by their respective values, descending
 */
function sortKeysByValue(object) {
  return Object.keys(object).sort((a, b) => object[b] - object[a]);
}

module.exports = sortKeysByValue;
