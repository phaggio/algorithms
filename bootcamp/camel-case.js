// Write code to create a function that accepts a string and returns the string in camelCase
// For example, "Hello World" should return "helloWorld"
// Should return null if pass nothing or non-string to its arg.

const camelCase = str => {
  if (!str || typeof str !== `string`) return null;
  const strArr = str.split(` `);
  strArr[0] = strArr[0].toLowerCase();
  for (let i = 1; i < strArr.length; ++i) {
    let word = strArr[i].toLowerCase(); // lower case the whole word
    word = word.charAt(0).toUpperCase() + word.slice(1); // upper case the first char of the word
    strArr[i] = word; // replace the word in array with capitalized word
  }
  return strArr.join(``);
};

export default camelCase

// bigO n