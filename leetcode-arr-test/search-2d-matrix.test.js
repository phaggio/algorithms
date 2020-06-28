import searchMatrix from '../leetcode-arr/search-2d-matrix';

describe('searchMatrix()', () => {
  it(
    `should return true for matrix: 
    [
      [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]
    ], 
    target = 10)`, () => {
    const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];
    const target = 9;
    const expected = true;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return true for matrix: 
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 31, 32, 33, 34, 35]
    ], 
    target = 30)`, () => {
    const matrix = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 31, 32, 33, 34, 35]
    ]
    const target = 30;
    const expected = false;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return true for matrix: 
    [
      [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    ], 
    target = 24)`, () => {
    const matrix = [
      [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    ]
    const target = 24;
    const expected = false;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return true for matrix: 
    [
      [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    ], 
    target = 33)`, () => {
    const matrix = [
      [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    ]
    const target = 33;
    const expected = true;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

});