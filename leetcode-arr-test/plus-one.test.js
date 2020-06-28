import plusOne from '../leetcode-arr/plus-one';

describe('plusOne()', () => {
  it(`should return [1, 2, 4] for [1, 2, 3]`, () => {
    const nums = [1, 2, 3];
    const expected = [1, 2, 4];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

});
