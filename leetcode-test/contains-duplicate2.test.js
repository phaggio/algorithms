import containsNearbyDuplicate from '../leetcode/contains-duplicate2';

describe('containsNearbyDuplicate()', () => {
  it(`should return true for [1,2,3,1], k = 3`, () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const expected = true;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,0,1,1], k = 1`, () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    const expected = true;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1,2,3,1,2,3], k = 2`, () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const expected = false;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1,2,3], k = 2`, () => {
    const nums = [1, 2, 3];
    const k = 2;
    const expected = false;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1,2,3], k = 4`, () => {
    const nums = [1, 2, 3];
    const k = 4;
    const expected = false;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [], k = 1`, () => {
    const nums = [];
    const k = 1;
    const expected = false;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1], k = 1`, () => {
    const nums = [1];
    const k = 1;
    const expected = false;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,1], k = 1`, () => {
    const nums = [1, 1];
    const k = 1;
    const expected = true;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,2,3,4,3,5,6,1], k = 3`, () => {
    const nums = [1, 2, 3, 4, 3, 5, 6, 1];
    const k = 3;
    const expected = true;
    const actual = containsNearbyDuplicate(nums, k);

    expect(actual).toEqual(expected);
  });

});