// Write a function that takes in a string 
// if the string is a string representation of a number, return the negative version of that number 
// otherwise throw an Error.
// ---
// Input: '1'
// Output: -1
// ---
// Input: '4'
// Output: -4
// ---
// Input: 'cow'
// Error

const stringRepNumber = str => {
  const num = parseInt(str);
  if (!num) throw 'not a number';
  if (num > 0) {
    return num * (-1);
  } else {
    return num;
  }
}

export default stringRepNumber