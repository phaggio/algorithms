import searchMatrix from '../leetcode/search-2d-matrix2';

describe('searchMatrix()', () => {

  it(`should return false for target = 1 in 
    []`, () => {
    const matrix = [];
    const target = 1;
    const expected = false;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

  
  it(`should return true for target = 5 in 
    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]`, () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    const target = 5;
    const expected = true;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });


  it(`should return true for target = 1 in 
    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]`, () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    const target = 1;
    const expected = true;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });


  it(`should return true for target = 30 in 
    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]`, () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    const target = 30;
    const expected = true;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });


  it(`should return false for target = 33 in 
    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]`, () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    const target = 33;
    const expected = false;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });


  it(`should return false for target = 0 in 
    [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]`, () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    const target = 0;
    const expected = false;
    const actual = searchMatrix(matrix, target);

    expect(actual).toEqual(expected);
  });

});