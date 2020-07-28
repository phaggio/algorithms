// #680

// Given a non-empty string s, you may delete at most one character. 
// Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

const validPalindrome = s => {
  if (s.length < 3) return true;
  let left = 0;
  let right = s.length - 1;
  let remain = 1;
  while (left < right) {

    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      if (remain === 0) return false;

      if (s[left + 1] === s[right] && s[left + 2] === s[right - 1]) {
        remain--;
        left++;
      } else if (s[left] === s[right - 1]) {
        remain--;
        right--;
      } else {
        return false;
      }

    }
  }
  return true;
}


// const validPalindrome = (s, correction = 1) => {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s[left] === s[right]) {
//       left++;
//       right--;
//       continue;
//     } else if (correction === 0) {
//       return false;
//     }

//     return validPalindrome(s.slice(left, right), 0) || validPalindrome(s.slice(left + 1, right + 1), 0)
//   }
//   return true;
// }

export default validPalindrome