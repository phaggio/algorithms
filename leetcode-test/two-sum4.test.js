import findTarget from '../leetcode/two-sum4';
import { arrayToBinaryTree } from '../data-structure/BinaryTreeNode';

describe('findTarget()', () => {

  it(`should return false for [], k = 0`, () => {
    const root = arrayToBinaryTree([]);
    const k = 0;

    const expected = false;
    const actual = findTarget(root, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [5,3,6,2,4,null,7], k = 9`, () => {
    const root = arrayToBinaryTree([5, 3, 6, 2, 4, null, 7])
    const k = 9;

    const expected = true;
    const actual = findTarget(root, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [10,8,20,4,null,16,22,null,2,6,null,18], k = 34`, () => {
    const root = arrayToBinaryTree([10, 8, 20, 4, null, 16, 22, null, 2, 6, null, 18]);
    const k = 34;

    const expected = true;
    const actual = findTarget(root, k);

    expect(actual).toEqual(expected);
  });

  it(`should return true for [10,8,20,4,null,16,22,null,2,6,null,18], k = 12`, () => {
    const root = arrayToBinaryTree([10, 8, 20, 4, null, 16, 22, null, 2, 6, null, 18]);
    const k = 12;

    const expected = true;
    const actual = findTarget(root, k);

    expect(actual).toEqual(expected);
  });

});
