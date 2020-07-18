import merge from '../leetcode/merge-sorted-array';

describe('merge()', () => {
  it(
    `should return [] for
      nums1 = []
      m = 0
      num2 = []
      n = 0
  `, () => {
    const nums1 = [];
    const m = 0;
    const nums2 = [];
    const n = 0;

    const expected = [];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [] for
      nums1 = [1,2,3,0,0,0]
      m = 3
      num2 = [2,5,6]
      n = 3
  `, () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expected = [1, 2, 2, 3, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,5,6] for
      nums1 = [0,0,0]
      m = 0
      num2 = [2,5,6]
      n = 3
  `, () => {
    const nums1 = [0, 0, 0];
    const m = 0;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expected = [2, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,2,5,6] for
      nums1 = [0,0,0,0]
      m = 1
      num2 = [2,5,6]
      n = 3
  `, () => {
    const nums1 = [0, 0, 0, 0];
    const m = 1;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expected = [0, 2, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,4,5,5,5,6,6] for
      nums1 = [4,5,5,6,0,0,0]
      m = 4
      num2 = [2,5,6]
      n = 3
  `, () => {
    const nums1 = [4, 5, 5, 6, 0, 0, 0];
    const m = 4;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expected = [2, 4, 5, 5, 5, 6, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,3,4,5,5,6,7] for
      nums1 = [2,3,4,5,5,6,0]
      m = 6
      num2 = [7]
      n = 1
  `, () => {
    const nums1 = [2, 3, 4, 5, 5, 6, 0];
    const m = 6;
    const nums2 = [7];
    const n = 1;

    const expected = [2, 3, 4, 5, 5, 6, 7];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,2,4,4,5,6,6] for
      nums1 = [2,2,4,4,6,6,0]
      m = 6
      num2 = [5]
      n = 1
  `, () => {
    const nums1 = [2, 2, 4, 4, 6, 6, 0];
    const m = 6;
    const nums2 = [5];
    const n = 1;

    const expected = [2, 2, 4, 4, 5, 6, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,3,4,5,5,6] for
      nums1 = [2,3,4,5,5,6]
      m = 6
      num2 = []
      n = 0
  `, () => {
    const nums1 = [2, 3, 4, 5, 5, 6];
    const m = 6;
    const nums2 = [];
    const n = 0;

    const expected = [2, 3, 4, 5, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [-2,-1,2,3,4,5,5,6] for
      nums1 = [2,3,4,5,5,6,0,0]
      m = 6
      num2 = [-2,-1]
      n = 2
  `, () => {
    const nums1 = [2, 3, 4, 5, 5, 6, 0, 0];
    const m = 6;
    const nums2 = [-2, -1];
    const n = 2;

    const expected = [-2, -1, 2, 3, 4, 5, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,0,2,3,4,5,5,6] for
      nums1 = [2,3,4,5,5,6,0,0]
      m = 6
      num2 = [0,0]
      n = 2
  `, () => {
    const nums1 = [2, 3, 4, 5, 5, 6, 0, 0];
    const m = 6;
    const nums2 = [0, 0];
    const n = 2;

    const expected = [0, 0, 2, 3, 4, 5, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,0,0,3,4,5,5,6] for
      nums1 = [0,3,4,5,5,6,0,0]
      m = 6
      num2 = [0,0]
      n = 2
  `, () => {
    const nums1 = [0, 3, 4, 5, 5, 6, 0, 0];
    const m = 6;
    const nums2 = [0, 0];
    const n = 2;

    const expected = [0, 0, 0, 3, 4, 5, 5, 6];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,0,0,0,0] for
      nums1 = [0,0,0,0,0]
      m = 3
      num2 = [0,0]
      n = 2
  `, () => {
    const nums1 = [0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [0, 0];
    const n = 2;

    const expected = [0, 0, 0, 0, 0];
    const actual = merge(nums1, m, nums2, n);

    expect(actual).toEqual(expected);
  });
});