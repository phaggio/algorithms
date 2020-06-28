import findKthLargest from '../leetcode-arr/kth-max';

describe('findKthLargest()', () => {
  it(
    `should return 1 for:
      nums = [1, 3, 2]
      k = 3
    `, () => {
    const nums = [1, 3, 2];
    const k = 3;
    const expected = 1;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 5 for:
      nums = [3, 2, 1, 5, 6, 4]
    `, () => {
    const nums = [3, 2, 1, 5, 6, 4];
    const k = 2;
    const expected = 5;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for:
      nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
      k = 4
    `, () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
    const expected = 4;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for:
      nums = [2, 1, 3, 2, 0, -1]
      k = 3
    `, () => {
    const nums = [2, 1, 3, 2, 0, -1];
    const k = 3;
    const expected = 2;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 3 for:
      nums = [2, 1, 3, 5, 2, 0, -1, 4]
      k = 3
    `, () => {
    const nums = [2, 1, 3, 5, 2, 0, -1, 4];
    const k = 3;
    const expected = 3;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for :
      nums = [3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, -1]
      k = 2
    `, () => {
    const nums = [3, 2, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, -1];
    const k = 2;
    const expected = 4;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected)
  });

  it(
    `should return 2 for :
      nums = [2, 2, 3, 1]
      k = 3
    `, () => {
    const nums = [2, 2, 3, 1];
    const k = 3;
    const expected = 2;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected)
  });

  it(
    `should return  for :
      nums = [6, 4, 3, 3, 2, 2, 2, 1, 5, 5, 6, 5, 9, 8, 0, 4, 3, 2]
      k = 3
    `, () => {
    const nums = [6, 4, 3, 3, 2, 2, 2, 1, 5, 5, 6, 5, 9, 8, 0, 4, 3, 2];
    const k = 3;
    const expected = 6;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected)
  });

  it(
    `should return  for :
      nums = [6, 4, 3, 0, 2, 0, 2, 0, 0, 5, 0, 0, 0, 0, 0, 4, 3, 2]
      k = 5
    `, () => {
    const nums = [6, 0, 3, 0, 2, 0, 2, 0, 0, 5, 0, 0, 0, 0, 0, 4, 3, 2];
    const k = 5;
    const expected = 3;
    const actual = findKthLargest(nums, k);

    expect(actual).toEqual(expected)
  });

});