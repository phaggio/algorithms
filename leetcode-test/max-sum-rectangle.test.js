import maxSumSubMatrix from '../leetcode/max-sum-rectangle.js';

describe('maxSumSubMatrix()', () => {
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
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for
      [
        [1,0,1,3],
        [1,0,-2,3]
      ]
      k = 4
    `, () => {
    const matrix = [
      [1, 0, 1, 3],
      [1, 0, -2, 3]
    ];
    const k = 4;
    const expected = 4;
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for
      [
        [1,0,1,3],
        [1,0,-2,3]
      ]
      k = 4
    `, () => {
    const matrix = [
      [1, 0, 1, 3],
      [1, 0, -2, 3]
    ];
    const k = 4;
    const expected = 4;
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 8 for
      [
        [1,0,1,3],
        [1,0,-2,3],
        [1, 2, -1,2]
      ]
      k = 10
    `, () => {
    const matrix = [
      [1, 0, 1, 3],
      [1, 0, -2, 3],
      [1, 2, -1, 2]
    ];
    const k = 10;
    const expected = 8;
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 0 for
      [
        [1,0,1,3],
        [1,0,-2,3],
        [1, 2, -1,2]
      ]
      k = 1
    `, () => {
    const matrix = [
      [-1, -1, -1, -3],
      [-1, 0, -2, -3],
      [1, -2, -1, -2],
      [-1, -1, 0, -1]
    ]
    const k = 1;
    const expected = 0;
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 14 for
      [
        [1,0,1],[0,-2,3],[1,2,3],[-1,-1,2],[-1,1,1],[-1,2,2]
      ]
      k = 15
    `, () => {
    const matrix = [
      [1, 0, 1],
      [0, -2, 3],
      [1, 2, 3],
      [-1, -1, 2],
      [-1, 1, 1],
      [-1, 2, 2]
    ];
    const k = 15;
    const expected = 14;
    const actual = maxSumSubMatrix(matrix, k);

    expect(actual).toEqual(expected);
  });

});