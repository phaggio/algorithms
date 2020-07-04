import maxDepth from '../leetcode-dfs/max-depth-binary-tree';

describe('maxDepth()', () => {
  it(`should 3 for [3,9,20,null,null,15,7]`, () => {
    const root = [3, 9, 20, null, null, 15, 7];
    const expected = 3;
    const actual = maxDepth(root);

    expect(actual).toEqual(expected);
  });

});