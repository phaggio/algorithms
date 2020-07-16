// #58

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
// return the length of last word 
// (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

const lengthOfLastWord = s => {
  if (s === '') return 0;

  let i = s.length - 1;
  while (i !== 0 && s[i] === ' ') {
    i--;
  }

  let count = 0;

  // i should be the index of the last character of the word (non-space)
  for (i; i >= 0; --i) {
    if (s[i] !== ' ') {
      count++;
    } else {
      break;
    }
  }

  return count;

}


export default lengthOfLastWord