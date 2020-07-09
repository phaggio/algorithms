import removeElement from '../leetcode/remove-element';

describe('removeElement()', () => {
  it(`should return count of 3 for ([1, 2, 3, 3, 4], 3)`, () => {
    const arr = [1, 2, 3, 3, 4];
    const val = 3;
    const expected = 3;
    const actual = removeElement(arr, val);

    expect(actual).toEqual(expected);
  });

  it(`should return count of 4 for ([1, 2, 0, 2, 2, 0], 0)`, () => {
    const arr = [1, 2, 0, 2, 2, 0];
    const val = 0;
    const expected = 4;
    const actual = removeElement(arr, val);

    expect(actual).toEqual(expected);
  });


});