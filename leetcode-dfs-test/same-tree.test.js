import isSameTree from '../leetcode-dfs/same-tree';
import { BinaryTreeNode, insertLevelOrder } from '../data-structure/BinaryTreeNode';

describe('isSameTree()', () => {
  it(
    `should true for:
      [1]
      [1]
    `, () => {
    const p = insertLevelOrder([1], 1, 0);
    const q = insertLevelOrder([1], 1, 0);

    const expected = true;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should true for:
      [1,2,3]
      [1,2,3]
    `, () => {
    const p = insertLevelOrder([1, 2, 3, null], 1, 0);
    const q = insertLevelOrder([1, 2, 3], 1, 0);

    const expected = false;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should true for:
      [1,2]
      [1,2]
    `, () => {
    const p = insertLevelOrder([1, 2], 1, 0);
    const q = insertLevelOrder([1, 2], 1, 0);

    const expected = true;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should false for:
      [1,2,1]
      [1,1,2]
    `, () => {
    const p = insertLevelOrder([1, 2, 1], 1, 0);
    const q = insertLevelOrder([1, 1, 2], 1, 0);

    const expected = false;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should false for:
      [1, 2, 3, null, 5, 6, 7]
      [1, 2, 3, 4, null, 6, 7]
    `, () => {
    const p = insertLevelOrder([1, 2, 3, null, 5, 6, 7], 1, 0);
    const q = insertLevelOrder([1, 2, 3, 4, null, 6, 7], 1, 0);

    const expected = false;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should true for:
      []
      []
    `, () => {
    const p = insertLevelOrder([], null, 0);
    const q = insertLevelOrder([], null, 0);

    const expected = true;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should false for:
      []
      [1]
    `, () => {
    const p = insertLevelOrder([], null, 0);
    const q = insertLevelOrder([1], 1, 0);

    const expected = false;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


  it(
    `should false for:
      [1, null]
      [1]
    `, () => {
    const p = insertLevelOrder([1, null], 1, 0);
    const q = insertLevelOrder([1], 1, 0);

    const expected = false;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });


});