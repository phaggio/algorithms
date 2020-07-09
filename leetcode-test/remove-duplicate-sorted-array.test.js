import removeDup from '../leetcode/remove-duplicate-sorted-array';

describe('removeDup()', () => {
  it(`should count of unique numbers in sorted arr [1, 2, 3, 3, 4]`, () => {
    const arr = [1, 2, 3, 3, 4];
    const expected = 4;
    const actual = removeDup(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return 5 for [0,0,1,1,1,2,2,3,3,4]`, () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expected = 5;
    const actual = removeDup(arr);

    expect(actual).toEqual(expected);
  });

  // it(`should count of unique numbers in sorted arr [1, 2, 3, 3, 4]`, () => {
  //   const arr = [1, 2, 3, 3, 4];
  //   const expected = [1, 2, 3, 4];
  //   const actual = removeDup(arr);

  //   expect(actual).toEqual(expected);
  // });

  // it(`should return 5 for [0,0,1,1,1,2,2,3,3,4]`, () => {
  //   const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  //   const expected = [0, 1, 2, 3, 4];
  //   const actual = removeDup(arr);

  //   expect(actual).toEqual(expected);
  // });

});