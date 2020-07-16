import singleNumber from '../leetcode/single-number';

describe('singleNumber()', () => {
  it(`should return 0 for []`, () => {
    const nums = [];
    const expected = 0;
    const actual = singleNumber(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 1 for [1]`, () => {
    const nums = [1];
    const expected = 1;
    const actual = singleNumber(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 3 for [2,2,3,1,1,4,4]`, () => {
    const nums = [2, 2, 3, 1, 1, 4, 4];
    const expected = 3;
    const actual = singleNumber(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 4 for [1,1,2,2,3,3,4]`, () => {
    const nums = [1, 1, 2, 2, 3, 3, 4];
    const expected = 4;
    const actual = singleNumber(nums);

    expect(actual).toEqual(expected);
  });


});