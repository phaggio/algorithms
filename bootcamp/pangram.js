// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.

// Pangram: a sentence that contains every letter in the alphabet.

// Ex:
// Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true

// Input: “Five hexing wizard bots jump quickly”
// Output: true

// Input: “JavaScript is the best”
// Output: false

const isPangram = str => {
  const arr = str.split(``);
  const map = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0,
  };
  let count = 0;
  for (const char of arr) {
    const lowercaseChar = char.toLowerCase();
    if (map[lowercaseChar] === 0) {
      count++;
      map[lowercaseChar]++;
    }
  }
  if (count === 26) return true;
  return false;
}

export default isPangram