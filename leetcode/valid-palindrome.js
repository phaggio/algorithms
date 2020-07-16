// # 125

// Given a string, determine if it is a palindrome, 

// considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

// ascii code for lowercase alphabet is 097 - 122
// ascii code for numeric chars is 048 - 57

const checkNumber = char => {
  return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
};

const checkAlphabet = char => {
  return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
}

const isPalindrome = s => {
  if (s === '') return true;
  let left = 0;
  let right = s.length - 1;
  s = s.toLowerCase();

  while (left < right) {

    while (!checkNumber(s[right]) && !checkAlphabet(s[right])) {
      right--;
      if (left > right) break;
    }

    while (!checkNumber(s[left]) && !checkAlphabet(s[left])) {
      left++;
      if (left > right) break;
    }

    if (left > right) break;

    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;

}

export default isPalindrome