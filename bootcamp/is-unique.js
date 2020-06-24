// Write code to create a function that accepts an array numbers
// Return `true` if no number appears in the array more than once, else return `false`

const isUnique = arr => {
  if (!arr) return false;
  if (!Array.isArray(arr)) return false;
  const mapObj = {};
  for (const num of arr) {
    if (mapObj[num] === undefined) { 
      mapObj[num] = 1
    } else {
      return false;
    }
  }
  return true;


};

export default isUnique;