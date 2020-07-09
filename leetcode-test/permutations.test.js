import permute from '../leetcode/permutations.js';

describe('permute()', () => {
  it(
    `should return all permutations for [1,2,3]
    `, () => {
    const nums = [1, 2, 3]
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];
    const actual = permute(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return all permutations for [1,2,3,4]
    `, () => {
    const nums = [1, 2, 3, 4]
    const expected = [
      [1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4], [1, 3, 4, 2], [1, 4, 2, 3], [1, 4, 3, 2],
      [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4], [2, 3, 4, 1], [2, 4, 1, 3], [2, 4, 3, 1],
      [3, 1, 2, 4], [3, 1, 4, 2], [3, 2, 1, 4], [3, 2, 4, 1], [3, 4, 1, 2], [3, 4, 2, 1],
      [4, 1, 2, 3], [4, 1, 3, 2], [4, 2, 1, 3], [4, 2, 3, 1], [4, 3, 1, 2], [4, 3, 2, 1]
    ];
    const actual = permute(nums);

    expect(actual).toEqual(expected);
  });


});