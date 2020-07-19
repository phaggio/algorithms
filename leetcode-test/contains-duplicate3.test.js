import containsNearbyAlmostDuplicate from '../leetcode/contains-duplicate3';

describe('containsNearbyAlmostDuplicate()', () => {
  it(`should return false for [1], k = 2, t = 3`, () => {
    const nums = [1];
    const k = 2;
    const t = 3;
    const expected = false;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,2,3,1], k = 3, t = 0`, () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const t = 0;
    const expected = true;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,2,3,1], k = 0, t = 2`, () => {
    const nums = [1, 2, 3, 1];
    const k = 0;
    const t = 2;
    const expected = false;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,0,1,1], k = 1, t = 2`, () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    const t = 2;
    const expected = true;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });

  it(`should return false for [1,5,9,1,5,9], k = 2, t = 3`, () => {
    const nums = [1,5,9,1,5,9];
    const k = 2;
    const t = 3;
    const expected = false;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [1,5,9,9,1,9], k = 2, t = 5`, () => {
    const nums = [1,5,9,9,1,9];
    const k = 2;
    const t = 3;
    const expected = true;
    const actual = containsNearbyAlmostDuplicate(nums, k, t);

    expect(actual).toEqual(expected);
  });
});