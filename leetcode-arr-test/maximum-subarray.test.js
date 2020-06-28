import maxSubarray from '../leetcode-arr/maximum-subarray';

describe('maxSubarray()', () => {
  it(`should return 6 for [-2, 1, -3, 4, -1, 2, 1, -5, 4]`, () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expected = 6;
    const actual = maxSubarray(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 8 for [-1, 1, 2, 1, 0, -4, -1, 8]`, () => {
    const nums = [-1, 1, 2, 1, 0, -4, -1, 8];
    const expected = 8;
    const actual = maxSubarray(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for [-4, -2, -1, -3, -4, -1, 1, -2, -1, -5, -4]`, () => {
    const nums = [-4, -2, -1, -3, -4, -1, 1, -2, -1, -5, -4];
    const expected = 1;
    const actual = maxSubarray(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return  for ([1, 3, 5, 6], 5)`, () => {
    const nums = [-4, -2, 1, 2, 3, -1, -1, 6, -1, -5, -4];
    const expected = 10;
    const actual = maxSubarray(nums);

    expect(actual).toEqual(expected);
  });

});