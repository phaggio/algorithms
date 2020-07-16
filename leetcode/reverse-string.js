// #344

// Write a function that reverses a string. 
// The input string is given as an array of characters char[].

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.



// const reverseString = s => {

//   let end = s.length % 2 === 0 ? (s.length / 2 - 1) : ((s.length - 1) / 2);
//   for (let i = 0; i <= end; ++i) {
//     const temp = s[i];
//     s[i] = s[s.length - 1 - i];
//     s[s.length - 1 - i] = temp;
//   }

//   return s;
// }

const reverseString = s => {
  
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  return s;
}


export default reverseString

// Two pointers
// time O of 1/2 n
// space O of 1