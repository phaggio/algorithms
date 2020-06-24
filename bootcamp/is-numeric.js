// Write code to create a function that accepts a string and determines if the string is a valid number. 
// You may not use any regex, built-in methods type conversion to accomplish this.

const isNumeric = str => {
  if (!str) return false;
  const arr = str.split(``);
  console.log(arr);
  const decimal = '.';
  const plus = '+';
  const minus = '-';
  let decimalCount = 0;
  const numMap = {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,
    '0': 1
  };

  const symbolMap = {
    '+': 0,
    '-': 0,
    '.': 0
  }

  let hasNum = false;

  for (let i = 0; i < arr.length; ++i) {
    const char = arr[i];
    if (numMap[char] === undefined && symbolMap[char] === undefined) { return false }// if alphabet chars return false
    if (char === plus && i > 0) { return false }// if plus not in first place return false
    if (char === minus && i > 0) { return false }// if minus not in first place return false
    if (char === decimal && decimalCount < 1) { decimalCount++ } //if decimalCount < 1, add one
    if (decimalCount > 1) return false; //if decimalCount > 1 return false
    if (!hasNum) { hasNum = numMap[char] === undefined ? false : true } // if hasNum is false, receive number, update to true
  }
  return hasNum;
};

// isNumeric('-123');

export default isNumeric