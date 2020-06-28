import findMedianSortedArrays from '../leetcode-arr/median-two-sorted-arr';

describe('findMedianSortedArrays()', () => {
  it(
    `should return 2.0 for:
      nums1 = [1, 3]
      nums2 = [2]
    `, () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const expected = 2.0;
    const actual = findMedianSortedArrays(nums1, nums2);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2.5 for:
      nums1 = [1, 2]
      nums2 = [3, 4]
    `, () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const expected = 2.5;
    const actual = findMedianSortedArrays(nums1, nums2);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4.5 for:
      nums1 = [1, 3, 5, 7]
      nums2 = [2, 4, 6, 8]
    `, () => {
    const nums1 = [1, 3, 5, 7];
    const nums2 = [2, 4, 6, 8];
    const expected = 4.5;
    const actual = findMedianSortedArrays(nums1, nums2);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 6 for:
      nums1 = [1, 3, 5, 7]
      nums2 = [2, 4, 6, 8, 9, 10, 11]
    `, () => {
    const nums1 = [1, 3, 5, 7];
    const nums2 = [2, 4, 6, 8, 9, 10, 11];
    const expected = 6;
    const actual = findMedianSortedArrays(nums1, nums2);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 6.5 for:
      nums1 = [1, 3, 5, 7]
      nums2 = [2, 4, 6, 8, 9, 10, 11, 12]
    `, () => {
    const nums1 = [1, 3, 5, 7];
    const nums2 = [2, 4, 6, 8, 9, 10, 11, 12];
    const expected = 6.5;
    const actual = findMedianSortedArrays(nums1, nums2);

    expect(actual).toEqual(expected);
  });

});