import majorityElement from '../leetcode/majority-element2';

describe('majorityElement()', () => {
  it(`should return [] for []`, () => {
    const nums = []
    const expected = []
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [3] for [3]`, () => {
    const nums = [3]
    const expected = [3]
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [1,3] for [1,3]`, () => {
    const nums = [1, 3]
    const expected = [1, 3]
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [] for [1,2,3]`, () => {
    const nums = [1, 2, 3]
    const expected = []
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [] for [1,1,2,2,3,3]`, () => {
    const nums = [1, 1, 2, 2, 3, 3]
    const expected = []
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [] for [1,1,2,2,2,3,3]`, () => {
    const nums = [1, 1, 2, 2, 2, 3, 3]
    const expected = [2]
    const actual = majorityElement(nums);

    expect(actual).toEqual(expected);
  });
});