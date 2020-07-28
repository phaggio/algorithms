// #557

// Given a string, you need to reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Note: In the string, each word is separated by single space 
// and there will not be any extra space in the string.


const reverseWords = s => {
  const words = s.split(` `);

  let output = '';

  for (const word of words) {
    for (let i = word.length - 1; i >= 0; --i) {
      output += word[i];
    }
    output += ' ';
  }

  return output.trim();
}

export default reverseWords