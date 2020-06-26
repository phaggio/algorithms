// Write a function that accepts a string (`str`) and reverses the order of the words in the string
// INPUT: 'this is a test' 
// OUTPUT: 'test a is this'


const reverseWords = str => {
  if (!str) return '';
  const arr = str.split(` `);
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; --i) {
    reversedArr.push(arr[i]);
  };
  return reversedArr.join(` `);
};

export default reverseWords