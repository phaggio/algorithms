// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const objOne = {};
  const objTwo = {};
  const length = strOne.length;

  for (let i = 0; i < length; ++i) {
    const charOne = strOne[i];
    const charTwo = strTwo[i];

    objOne[charOne] ? objOne[charOne] = objOne[charOne] + 1 : objOne[charOne] = 0;
    objTwo[charTwo] ? objTwo[charTwo] = objTwo[charTwo] + 1 : objTwo[charTwo] = 0;
  }

  for (const key in objOne) {
    if (objOne[key] !== objTwo[key]) return false;
  }

  return true;

};

export default isAnagram