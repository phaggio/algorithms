// #20

//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// param cannot be null;

const isValid = s => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  const stack = [];

  for (const paran of s) {

    if (paran === ')' || paran === ']' || paran === '}') {
      const lastParan = stack.pop();
      if (map[lastParan] !== paran) {
        return false
      }
    } else {
      stack.push(paran);
    }
  }

  if (stack.length > 0) return false;
  return true;
}

export default isValid

// Time complexity O of n