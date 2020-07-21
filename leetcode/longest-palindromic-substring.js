// #5

// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.

// Examples
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Input: "cbbd"
// Output: "bb"


// a function that checks whether a string in arg is a palindrome.
const isPalindrome = str => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

const longestPalindrome = s => {
  if (!s || s.length < 1) return '';
  if (s.length === 2) return s[0] === s[1] ? s : s[0];

  // loop that start with the end of the string and go inward.
  for (let end = s.length - 1; end >= 0; --end) {
    let i = 0;
    let j = end;

    while (j < s.length) {
      let str = s.substring(i, j + 1);
      if (isPalindrome(str)) return str;
      i++;
      j++;
    }

    // in 'abcbefg', the longest palindrome is three characters long,
    // when end = 3, it'll not find the longest palinddrome.
    // when end = 2, it'll check 'abc' then 'bcb' 
    // then it finds the longest palindrome so far and return it.

  }
}

export default longestPalindrome