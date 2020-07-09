import isSymmetric from '../leetcode/symmetric-tree';
import { insertLevelOrder } from '../data-structure/BinaryTreeNode';

describe('isSymmetric()', () => {
  it(
    `should true for:
      []
    `, () => {
    const root = insertLevelOrder([], null, 0);

    const expected = true;
    const actual = isSymmetric(root);

    expect(actual).toEqual(expected);
  });


  it(
    `should true for:
      [1]
    `, () => {
    const root = insertLevelOrder([1], 1, 0);

    const expected = true;
    const actual = isSymmetric(root);

    expect(actual).toEqual(expected);
  });


  it(
    `should true for:
      [1,2,2]
    `, () => {
    const root = insertLevelOrder([1, 2, 2], 1, 0);

    const expected = true;
    const actual = isSymmetric(root);

    expect(actual).toEqual(expected);
  });


  it(
    `should false for:
      [1,2,2,null,3,null,3]
    `, () => {
    const root = insertLevelOrder([1, 2, 2, null, 3, null, 3], 1, 0);

    const expected = false;
    const actual = isSymmetric(root);

    expect(actual).toEqual(expected);
  });


});