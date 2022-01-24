const getLetterFrequencies = require("./helpers/getLetterFrequencies");
const calculateWordScores = require("./helpers/calculateWordScores");
const sortKeysByValue = require("./helpers/sortKeysByValue");

const words = require("./dict.json");

const frequencies = getLetterFrequencies(words);
const lettersSortedByFrequency = sortKeysByValue(frequencies);

const wordScores = calculateWordScores(words, frequencies);
const wordsSortedByValue = sortKeysByValue(wordScores);

console.log(
  "Letters sorted by frequency: \n",
  lettersSortedByFrequency.join(", "),
  "\n"
);

console.log(
  "Best words: \n",
  // only show the top 20 words
  wordsSortedByValue.slice(0, 20).join(", "),
  "\n"
);
