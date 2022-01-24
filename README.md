# wordle-solver

NodeJS program to automate solving of daily Wordle challenges

## How it works:

1. Calculates the frequency of letters in the dictionary (the dict.json file). If a letter shows up multiple times in a word, it only counts once
2. Gives each word a score based on the frequencies of the unique letters that it contains.
3. Sorts the words based on their scores. The logic is that when any of the letters are not part of the actual word, they eliminate the greatest number of possibilities.

### How the solver works:

1. It uses the methodology above to give each word a score and picks one of the words with the highest score.
2. The following dictionary exclusions are added after each attempt:
   - (black) When any of the letters are not part of the correct answer, any words containing them are ignored.
   - (green) If any of the letters are in the correct place then the words that don't have those letters in the same place are ignored.
   - (orange) If any of the letters are part of the final answer but not in the correct place, words not containing that letter as well as words that have that letter in the same incorrect place are ignored.

## Steps

### To analyze the dictionary

1. No dependencies are needed. Just make sure you have NodeJS installed and run

```shell
node index.js
```

### To use the solver

1. Install dependencies with

```shell
npm install
```

2. Run the following and use the terminal to provide the program with the game's feedback

```shell
node solve.js
```
