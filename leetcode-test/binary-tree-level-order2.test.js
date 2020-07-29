import levelOrderBottom from '../leetcode/binary-tree-level-order2';
import { arrayToBinaryTree } from '../data-structure/BinaryTreeNode'

describe('levelOrderBottom()', () => {
  it(`should return [] for [] `, () => {
    const root = arrayToBinaryTree([]);

    const expected = [];
    const actual = levelOrderBottom(root);

    expect(actual).toEqual(expected);
  });

  it(`should return [[10]] for [10] `, () => {
    const root = arrayToBinaryTree([10]);

    const expected = [[10]];
    const actual = levelOrderBottom(root);

    expect(actual).toEqual(expected);
  });

  it(`should return [[15,7],[9,20],[3]] for [3,9,20,null,null,15,7] `, () => {
    const root = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);

    const expected = [
      [15, 7], [9, 20], [3]
    ];
    const actual = levelOrderBottom(root);

    expect(actual).toEqual(expected);
  });

  it(`should return [[3, 6, 12, 13, 14, 18, 19, 20], [1, 2, 8, 7, 16], [4, 9, 11, 17], [5, 15], [10]] 
    for [10,5,15,4,9,11,17,1,2,null,null,8,7,null,16,3,null,6,12,13,14,18,19,null,20] `, () => {
    const root = arrayToBinaryTree(
      [10, 5, 15, 4, 9, 11, 17, 1, 2, null, null, 8, 7, null, 16, 3, null, 6, 12, 13, 14, 18, 19, null, 20]
    );

    const expected = [
      [3, 6, 12, 13, 14, 18, 19, 20], [1, 2, 8, 7, 16], [4, 9, 11, 17], [5, 15], [10]
    ];
    const actual = levelOrderBottom(root);

    expect(actual).toEqual(expected);
  });

});