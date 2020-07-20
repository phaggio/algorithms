// Write a function that accepts a string (`str`) and returns the longest word in the string

const longestWord = str => {
  if (!str || str === null) return null;

  const arr = str.split(` `);

  let word = arr[0]
  let currLongest = word.length;

  for (let i = 1; i < arr.length; ++i) {
    let nextWord = arr[i];
    if (nextWord.length > currLongest) {
      word = nextWord;
      currLongest = nextWord.length;
    } else if (nextWord.length === currLongest) {
      word = null;
    }
  }

  return word;
};

export default longestWord