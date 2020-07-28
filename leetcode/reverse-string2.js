// #541

// Given a string and an integer k, you need to reverse the first k characters 
// for every 2k characters counting from the start of the string. 
// If there are less than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, 
// then reverse the first k characters and left the other as original.

// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

const reverseStr = (s, k) => {
  let iterator = k;
  let reverse = true;
  let reverseIndex = 0;
  let reversedStr = '';

  for (let i = 0; i < s.length; ++i) {
    if (iterator === k) {
      reverseIndex = s[(i + k - 1)] ? (i + k - 1) : s.length - 1;
      reverse = true;
    } else if (iterator === 0) {
      reverse = false;
    }

    if (reverse) {
      if (s[reverseIndex]) {
        reversedStr += s[reverseIndex];
      }
      iterator--;
      reverseIndex--;
    } else {
      reversedStr += s[i];
      iterator++;
    }
  }

  return reversedStr;
}

export default reverseStr