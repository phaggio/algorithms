import maxDepth from '../leetcode/max-depth-binary-tree';
import { insertLevelOrder } from '../data-structure/BinaryTreeNode'

describe('maxDepth()', () => {
  it(`should return 3 for [3,9,20,null,null,15,7]`, () => {
    const root = insertLevelOrder([3, 9, 20, null, null, 15, 7], 3, 0);
    const expected = 3;
    const actual = maxDepth(root);

    expect(actual).toEqual(expected);
  });

});