// #13

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. 
// Input is guaranteed to be within the range from 1 to 3999.

const romanToInt = s => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let count = 0;
  let previousChar;
  for (const char of s) {

    count += map[char];

    if (previousChar === 'I' && (char === 'V' || char === 'X')) {
      count = count - 2;
    }

    else if (previousChar === 'X' && (char === 'L' || char === 'C')) {
      count = count - 20;
    }

    else if (previousChar === 'C' && (char === 'D' || char === 'M')) {
      count = count - 200;
    }
    previousChar = char;
  }

  return count;

}

export default romanToInt

// time O of n
