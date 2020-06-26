// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = str => {
  if (!str) return '';
  const arr = str.split(``);
  let newStr = ``;
  for (let i = str.length - 1; i >= 0; --i) {
    newStr += arr[i];
  }
  return newStr;
};

export default reverseInPlace