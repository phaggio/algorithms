// #14

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


const longestCommonPrefix = strs => {
  if (!strs || strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let longestPrefix = strs[0];

  for (let i = 1; i < strs.length; ++i) {

    if (longestPrefix.length >= strs[i].length) {
      let commonPrefix = '';
      for (let j = 0; j < strs[i].length; ++j) {
        if (longestPrefix[j] === strs[i][j]) {
          commonPrefix += strs[i][j];
        } else {
          break;
        }
      }
      longestPrefix = commonPrefix;
    } else {
      let commonPrefix = '';
      for (let j = 0; j < longestPrefix.length; ++j) {
        if (longestPrefix[j] === strs[i][j]) {
          commonPrefix += strs[i][j];
        } else {
          break;
        }
      }
      longestPrefix = commonPrefix;
    }

    if (longestPrefix === '') break;
  }

  return longestPrefix;

}


export default longestCommonPrefix