// #3

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 


const lengthOfLongestSubstring = str => {
  if (str.length < 2) return str.length;

  let map = new Map();

  let startIndex = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (map.has(char)) {
      // if char exists in map, update startIndex to that character's index + 1
      // or, if the character is from the previous substring, keep the current startIndex
      startIndex = Math.max(map.get(char) + 1, startIndex);
    }

    map.set(char, i); // store key = character and value = its index to the map
    maxLength = Math.max(maxLength, i - startIndex + 1)
  }


  return maxLength;
}


export default lengthOfLongestSubstring