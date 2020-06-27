// Write code to return the the number of vowels in `str`

const vowelCount = str => {
  if (!str) return 0;
  const vowelMap = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
  }

  let count = 0;

  const arr = str.split(``);
  for (const char of arr) {
    const key = char.toLowerCase();
    if (vowelMap[key] !== undefined) { count++ };
    continue
  }
  return count;
};

export default vowelCount