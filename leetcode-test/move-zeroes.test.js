import moveZeroes from '../leetcode/move-zeroes';

describe('moveZeroes()', () => {

  it(`should move zeroes to the end of array `, () => {
    const nums = [0, 1, 0, 3, 12];

    const expected = [1, 3, 12, 0, 0];
    const actual = moveZeroes(nums);

    expect(actual).toEqual(expected);
  });


  it(`should move zeroes to the end of array `, () => {
    const nums = [0, 0, 0, 0];

    const expected = [0, 0, 0, 0];
    const actual = moveZeroes(nums);

    expect(actual).toEqual(expected);
  });


  it(`should move zeroes to the end of array `, () => {
    const nums = [0, 0, 0, 1];

    const expected = [1, 0, 0, 0];
    const actual = moveZeroes(nums);

    expect(actual).toEqual(expected);
  });


  it(`should move zeroes to the end of array `, () => {
    const nums = [0, 1, 2, 3, 4];

    const expected = [1, 2, 3, 4, 0];
    const actual = moveZeroes(nums);

    expect(actual).toEqual(expected);
  });


  it(`should move zeroes to the end of array `, () => {
    const nums = [0, 2, 3, 1, 0, 5, 2, 0, 0];

    const expected = [2, 3, 1, 5, 2, 0, 0, 0, 0];
    const actual = moveZeroes(nums);

    expect(actual).toEqual(expected);
  });
});