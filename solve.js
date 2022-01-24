const getLetterFrequencies = require("./helpers/getLetterFrequencies");
const calculateWordScores = require("./helpers/calculateWordScores");
const sortKeysByValue = require("./helpers/sortKeysByValue");
const { Form } = require("enquirer");

let words = require("./dict.json");
const chalk = require("chalk");

// Wrap the code in an async function, so that we can make use of the `await` keyword
async function solve() {
  console.log(); // Just make some whitespace separation

  const correctFeedback = new Set(["Y", "N", "W"]);

  while (words.length > 0) {
    const frequencies = getLetterFrequencies(words);
    const wordScores = calculateWordScores(words, frequencies);
    const wordsSortedByValue = sortKeysByValue(wordScores);

    const bestWord = wordsSortedByValue[0];

    console.log(
      chalk.green("Try the following word: "),
      chalk.bgGrey(bestWord)
    );

    const prompt = new Form({
      name: "letters",
      message:
        "For each of the letters, enter Y (correct), N (incorrect), or W (wrong place). Use arrow keys for navigation. Press enter to submit",
      choices: [...bestWord].map((letter, index) => ({
        // Add 1 because it can't handle the name '0' for some reason
        name: index + 1,
        message: letter,
      })),
    });

    const feedback = Object.values(await prompt.run()).map((val) =>
      val.toUpperCase()
    );

    const feedbackValid = feedback.every((val) => correctFeedback.has(val));

    if (feedback.every((a) => a === "Y")) {
      console.log(chalk.green("Congrats!!!!"));
    }

    if (!feedbackValid) {
      console.log(
        "\n",
        chalk.red(
          "----- The provided input was not valid. Prompting again. -----"
        ),
        "\n"
      );
    } else {
      const excluded = new Set();
      const included = [];
      const final = [];

      feedback.forEach((a, index) => {
        const letter = bestWord[index];
        if (a === "Y") {
          final.push({
            letter,
            index,
          });
        }

        if (a === "N") {
          excluded.add(letter);
        }

        if (a === "W") {
          included.push({
            letter,
            incorrectIndex: index,
          });
        }
      });

      words = words.filter((word) => {
        for (let i = 0; i < word.length; i++) {
          if (excluded.has(word[i])) {
            return false;
          }
        }

        for (let i = 0; i < included.length; i++) {
          const row = included[i];

          if (
            !word.includes(row.letter) ||
            word[row.incorrectIndex] === row.letter
          ) {
            return false;
          }
        }

        return final.every((row) => word[row.index] === row.letter);
      });
    }
  }

  if (!words.length) {
    console.log(
      chalk.red(
        "There aren't any words left in the dictionary. Make sure you didn't make a mistake entering the data."
      )
    );
  }
}

solve();
