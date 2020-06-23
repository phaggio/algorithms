// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

// Ex:
// Input: “the quick brown fox jumps over the calm kitten quietly”
// Output: "b"

// Input: “this hat is the greatest!”
// Output: "g"

// Input: “what a wonderful day it has been!”
// Output: "o"

const firstOccurrence = str => {
  if (!str || typeof str !== 'string') return undefined;
  const freq = {};
  const strArr = str.split(``);
  for (const char of strArr) {
    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  for (const char of strArr) {
    if (freq[char] === 1) { return char }
  }

  return undefined;

}

export default firstOccurrence

// bigO 2n