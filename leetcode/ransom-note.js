// #383 

// Given an arbitrary ransom note string and another string containing letters 
// from all the magazines, write a function that will return true if the ransom note 
// can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// assume both strings contain only lowercase letters


const canConstruct = (ransomNote, magazine) => {
  if (magazine.length < ransomNote.length) return false;
  if (ransomNote.length === 0) return true;

  const magMap = {};

  for (const char of magazine) {
    magMap[char] === undefined ? magMap[char] = 1 : magMap[char] = magMap[char] + 1;
  }

  for (const char of ransomNote) {
    if (magMap[char] === undefined) return false;
    if (magMap[char] === 0) return false;
    magMap[char] = magMap[char] - 1;
  }

  return true;
}

export default canConstruct

// time O of magazine length
// space extra map of m