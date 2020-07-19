import containsDuplicate from '../leetcode/contains-duplicate';

describe('containsDuplicate()', () => {
  it(`should return false for [1,2,3,4]`, () => {
    const nums = [1, 2, 3, 4];
    const expected = false;
    const actual = containsDuplicate(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return false for []`, () => {
    const nums = [];
    const expected = false;
    const actual = containsDuplicate(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1]`, () => {
    const nums = [1];
    const expected = false;
    const actual = containsDuplicate(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,2,3,4,5,6,1,7,8]`, () => {
    const nums = [1, 2, 3, 4, 5, 6, 1, 7, 8];
    const expected = true;
    const actual = containsDuplicate(nums);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [-3,-2,-1,0,1,2,3,4,5,6,7,8,0]`, () => {
    const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
    const expected = true;
    const actual = containsDuplicate(nums);

    expect(actual).toEqual(expected);
  });
});