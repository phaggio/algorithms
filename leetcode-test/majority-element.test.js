import majorityElement from '../leetcode/majority-element';

describe('majorityElement()', () => {
  it(`should return 3 for [3]`, () => {
    const nums = [3]
    const expected = 3
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 3 for [3,2,3]`, () => {
    const nums = [3, 2, 3]
    const expected = 3
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 2 for [2,2,1,1,1,2,2]`, () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const expected = 2
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return 2 for [1,1,1,1,2,2,2,2,2,3]`, () => {
    const nums = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3];
    const expected = 2
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

});