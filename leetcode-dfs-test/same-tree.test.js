import isSameTree from '../leetcode-dfs/same-tree';

describe('isSameTree()', () => {
  it(
    `should true for:
    [1,2,3]
    [1,2,3]
    `, () => {
    const p = [1, 2, 3];
    const q = [1, 2, 3];
    const expected = true;
    const actual = isSameTree(p, q);

    expect(actual).toEqual(expected);
  });

});