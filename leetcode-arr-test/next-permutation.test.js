import nextPermutation from '../leetcode-arr/next-permutation.js';

describe('nextPermutation()', () => {
  it(
    `should return 2 for
      [
        [1, 0, 1],
        [0, -2, 3]
      ]
      k = 2
    `, () => {
    const matrix = [
      [1, 0, 1],
      [0, -2, 3]
    ];
    const k = 2;
    const expected = 2;
    const actual = nextPermutation(matrix, k);

    expect(actual).toEqual(expected);
  });

});