// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.

// Input: 121
// Output: true

// Input: -121
// Output: false

const isPalindrome = num => {
  if (num < 0) return false;
  const arr = num.toString().split(``);
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

export default isPalindrome