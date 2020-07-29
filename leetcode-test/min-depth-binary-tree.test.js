import minDepth from '../leetcode/min-depth-binary-tree';
import { arrayToBinaryTree } from '../data-structure/BinaryTreeNode'

describe('minDepth()', () => {

  it(`should return 2 for [3,9,20,null,null,15,7] `, () => {
    const root = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);

    const expected = 2;
    const actual = minDepth(root);

    expect(actual).toEqual(expected);
  });

  it(`should return 3 for [10,5,15,4,9,11,17,1,2,null,null,8,7,null,16,3,null,6,12,13,14,18,19,null,20] `, () => {
    const root = arrayToBinaryTree(
      [10, 5, 15, 4, 9, 11, 17, 1, 2, null, null, 8, 7, null, 16, 3, null, 6, 12, 13, 14, 18, 19, null, 20]
    );

    const expected = 3;
    const actual = minDepth(root);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for [10] `, () => {
    const root = arrayToBinaryTree([10]);

    const expected = 1;
    const actual = minDepth(root);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for [] `, () => {
    const root = arrayToBinaryTree([]);

    const expected = 0;
    const actual = minDepth(root);

    expect(actual).toEqual(expected);
  });

  it(`should return 2 for [10,null,5] `, () => {
    const root = arrayToBinaryTree([10, null, 5]);

    const expected = 2;
    const actual = minDepth(root);

    expect(actual).toEqual(expected);
  });
});