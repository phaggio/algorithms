// Write code to add all the numbers in `arr` and return the total
// return 0 if array is empty
// assume it'll always take an array of int.

const sumArray = arr => {
  if (!arr) return 0;
  let sum = 0;
  for (const int of arr) {
    sum += int;
  };
  return sum;
};

export default sumArray