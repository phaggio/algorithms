// #242

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? 
// How would you adapt your solution to such case?



const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let sMap = {};
  for (let i = 0; i < s.length; ++i) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = 1;
    } else {
      sMap[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; ++j) {
    if (!sMap[t[j]] || sMap[t[j]] === 0) return false;
    sMap[t[j]]--;
  }
  return true;
}

export default isAnagram