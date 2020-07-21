import hasPathSum from '../leetcode/path-sum';
import { insertLevelOrder } from '../data-structure/BinaryTreeNode'

describe('hasPathSum()', () => {
  // it(`should return false for [], sum = 22`, () => {
  //   const root = insertLevelOrder([], null, 0);
  //   const sum = 22;

  //   const expected = false;
  //   const actual = hasPathSum(root, sum);

  //   expect(actual).toEqual(expected);
  // });

  // it(`should return false for [1,2,3,4,5], sum = 22`, () => {
  //   const root = insertLevelOrder([1, 2, 3, 4, 5], 1, 0);
  //   const sum = 8;

  //   const expected = true;
  //   const actual = hasPathSum(root, sum);

  //   expect(actual).toEqual(expected);
  // });

  // it(`should return true for [5,4,8,11,null,13,4,7,2,null,null,null,1], sum = 22`, () => {
  //   const root = insertLevelOrder([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 5, 0);
  //   const sum = 22;

  //   const expected = true;
  //   const actual = hasPathSum(root, sum);

  //   expect(actual).toEqual(expected);
  // });

  // it(`should return false for [5,4,8,11,null,13,4,7,2,null,null,null,1], sum = 40`, () => {
  //   const root = insertLevelOrder([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 5, 0);
  //   const sum = 40;

  //   const expected = false;
  //   const actual = hasPathSum(root, sum);

  //   expect(actual).toEqual(expected);
  // });

  it(`should return true for [5,4,8,11,null,13,4,7,2,null,null,null,null,null,1], sum = 18`, () => {
    const root = insertLevelOrder([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1], 5, 0);
    const sum = 18;

    const expected = true;
    const actual = hasPathSum(root, sum);

    expect(actual).toEqual(expected);
  });

  // it(`should return true for [5,4,null,2,1,null,null,3], sum = 10`, () => {
  //   const root = insertLevelOrder([5, 4, null, 2, 1, null, null, 3], 5, 0);
  //   const sum = 10;

  //   const expected = true;
  //   const actual = hasPathSum(root, sum);

  //   expect(actual).toEqual(expected);
  // });
});