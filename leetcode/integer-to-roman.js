// #12

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together. 
// Twelve is written as, XII, which is simply X + II. 
// The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. 
// Input is guaranteed to be within the range from 1 to 3999.

const roman = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

// const intToRoman = num => {
//   if (num < 1) return '';
//   let str = '';
//   while (num > 0) {
//     if (num >= 1000) {
//       str = str + 'M'
//       num = num - 1000;
//     } else if (num >= 900) {
//       str = str + 'CM';
//       num = num - 900;
//     } else if (num >= 500) {
//       str = str + 'D';
//       num = num - 500;
//     } else if (num >= 400) {
//       str = str + 'CD';
//       num = num - 400;
//     } else if (num >= 100) {
//       str = str + 'C';
//       num = num - 100;
//     } else if (num >= 90) {
//       str = str + 'XC';
//       num = num - 90;
//     } else if (num >= 50) {
//       str = str + 'L';
//       num = num - 50;
//     } else if (num >= 40) {
//       str = str + 'XL';
//       num = num - 40;
//     } else if (num >= 10) {
//       str = str + 'X';
//       num = num - 10;
//     } else if (num === 9) {
//       str = str + 'IX';
//       num = num - 9;
//     } else if (num >= 5) {
//       str = str + 'V';
//       num = num - 5;
//     } else if (num === 4) {
//       str = str + 'IV';
//       num = num - 4;
//     } else if (num > 0) {
//       str = str + 'I';
//       num = num - 1;
//     }
//   }
//   return str;
// }

const intToRoman = num => {

  const m = ['', 'M', 'MM', 'MMM'];
  const c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const x = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  let thousands = m[Math.floor(num / 1000)];
  let hundreds = c[Math.floor((num % 1000) / 100)];
  let tens = x[Math.floor((num % 100) / 10)];
  let ones = i[(num % 10)];
  
  return `${thousands}${hundreds}${tens}${ones}`
}

export default intToRoman