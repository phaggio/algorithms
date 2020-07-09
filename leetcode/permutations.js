// #46

// Given a collection of distinct integers, return all possible permutations.

const permute = nums => {

  const result = [];

  const dfs = (perm, rest) => {
    if (rest.length === 0) result.push(perm);

    for (let i = 0; i < rest.length; ++i) {
      dfs([...perm, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)])
    }
  }

  dfs([], nums);

  return result;
}

export default permute;





  /**
   * The goal is break down the problem by finding permutations in subarrays.
   * So we will maintain a subarray of fixed elements and a subarray for 
   * exploring permutations.
   *
   *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
   * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
   *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
   *                                 [2, 3], [1]    [2, 3, 1]
   *                                 [3, 1], [2]    [3, 1, 2]
   *                                 [3, 2], [1]    [3, 2, 1]                                 
   */