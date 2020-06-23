// write a function that accepts a number and returns all the fibonacci numbers, in an array, up to that number
// Fibonacci number: each number is the sum of the two preceding ones
// 0 is fibonacci number too, no negative

const fibonacci = num => {
  if (num === null || typeof num !== 'number' || num < 0) return null;
  if (num === 0) return [0];
  const result = [0, 1, 1];
  while (result[result.length - 1] !== num) {
    const newNum = result[result.length -2] + result[result.length - 1];
    result.push(newNum);
  }
  return result;
}

export default fibonacci