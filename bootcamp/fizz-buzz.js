// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 put "Fizz"
// If a number is evenly divisible by 5 put "Buzz"
// If a number is evenly divisible by both 3 AND 5, put "Fizz Buzz"
// If a number is not divisible by 3 or 5, put the number
// return the new array
const fizzBuzz = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (!arr) return null;
  const newArr = arr;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) newArr[i] = 'Fizz Buzz';
    if (arr[i] % 3 === 0) arr[i] = `Fizz`;
    if (arr[i] % 5 === 0) arr[i] = `Buzz`;
  }
  return newArr;
};

export default fizzBuzz