// Write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise 
// (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

const palindrome = str => {
  if (!str) return false;
  const arr = str.split(``);
  for (let i = 0; i < str.length; ++i) {
    const backwardIndex = str.length - 1 - i;
    if (arr[i] !== arr[backwardIndex]) return false;
    if (i >= backwardIndex) return true;
  }
}

export default palindrome