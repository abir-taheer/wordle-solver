/**
 * @param {Array<string> | Set<string>} words - words in the dictionary to assign a score
 * @param {Object} frequencies - A map of letters in the alphabet and their frequency in the `words` dictionary
 * @return {Object} - A map of each of the words in `words` as the key and their scores as values
 */
function calculateWordScores(words, frequencies) {
  const scores = {};

  words.forEach((word) => {
    const letters = new Set(word);
    let score = 0;

    letters.forEach((letter) => (score += frequencies[letter]));
    scores[word] = score;
  });

  return scores;
}

module.exports = calculateWordScores;
