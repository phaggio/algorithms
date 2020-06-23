// Write a function which accepts any number of arrays and returns a single flattened array
// ---
// Input
// `[1, 2, 3], [4, 5, 6], [7, 8, 9]`
// Output
// `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
// ---
// Input
// `['a', 54, null], [], ['pizza', 42]`
// Output
// `['a', 54, null, 'pizza', 42]`
// ---
// Input
// const arrOne = true;
// const arrTwo = ['pizza', 'is', 'my', 'favorite', 'food'];
// const arrThree = 'pizza';
// Output
// arrTwo
// ---

const flattenArray = (...arr) => {
  const merged = [];
  for (const subArr of arr) {
    if (Array.isArray(subArr)) {
      for (const item of subArr) merged.push(item);
    };
  };
  return merged;
}

export default flattenArray
