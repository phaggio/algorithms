// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = arr => {
  let count = 0;
  for (const subArr of arr) {
    for (const item of subArr) {
      if (item === `X`) ++count;
    }
  }
  return count;
};

export default arraySearch2D

// bigO n