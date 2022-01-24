/**
 * @param {Array<string> | Set<string>} words - The dictionary of words to analyze
 * @return {Object} - The letters of the alphabet mapped to their frequency in the provided dictionary
 */
function getLetterFrequencies(words) {
  const freq = {};

  // initialize all letters as having frequency 0
  for (let i = 97; i < 123; i++) {
    freq[String.fromCharCode(i)] = 0;
  }

  words.forEach((word) => {
    // First add each letter to a set, so it only gets counted once
    // Then increment the frequency of each of the letters in the word
    new Set(word).forEach((letter) => freq[letter]++);
  });

  return freq;
}

module.exports = getLetterFrequencies;
