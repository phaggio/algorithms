import sortedArrayToBST from '../leetcode/array-to-binary-tree';


describe('sortedArrayToBST()', () => {
  it(`should return [] for []`, () => {
    const nums = [];
    const expected = null;
    const actual = sortedArrayToBST(nums);

    expect(actual).toEqual(expected);
  });



});