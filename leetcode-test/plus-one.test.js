import plusOne from '../leetcode/plus-one';

describe('plusOne()', () => {
  it(`should return [1, 2, 4] for [1, 2, 3]`, () => {
    const nums = [1, 2, 3];
    const expected = [1, 2, 4];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [4, 3, 2, 2] for [4, 3, 2, 1]`, () => {
    const nums = [4, 3, 2, 1];
    const expected = [4, 3, 2, 2];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 0] for [9]`, () => {
    const nums = [9];
    const expected = [1, 0];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [2, 0, 0] for [1, 9, 9]`, () => {
    const nums = [1, 9, 9];
    const expected = [2, 0, 0];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 4, 0] for [1, 3, 9]`, () => {
    const nums = [1, 3, 9];
    const expected = [1, 4, 0];
    const actual = plusOne(nums);

    expect(actual).toEqual(expected);
  });

});
