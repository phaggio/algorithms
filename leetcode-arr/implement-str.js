// Implement strStr().

// Return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  if (!needle || needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  const needleLength = needle.length;
  const steps = haystack.length - needleLength;
  for (let i = 0; i <= steps; ++i) {
    const checkString = haystack.slice(i, i + needleLength);
    if (checkString === needle) return i;
  };
  return -1;
};

export default strStr