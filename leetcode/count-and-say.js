// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221


const countAndSay = n => {
  let str = '1';
  for (let i = 1; i < n; ++i) {
    let currentStr = '';
    let currentChar = str[0];
    let count = 0;

    for (const char of str) {
      if (char === currentChar) {
        count++;
      } else {
        currentStr = `${currentStr}${count}${currentChar}`;
        currentChar = char;
        count = 1;
      }
    }
    currentStr = `${currentStr}${count}${currentChar}`;
    str = currentStr;
    currentStr = '';
  }

  return str;
}

export default countAndSay

// time O m * n 