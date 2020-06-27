import searchInsertPosition from '../leetcode-arr/search-insert-position';

describe('searchInsertPosition()', () => {
  it(`should return index = 2 for ([1, 3, 5, 6], 5)`, () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const expected = 2;
    const actual = searchInsertPosition(nums, target);

    expect(actual).toEqual(expected);
  });

  it(`should return index = 1 for where it would be for ([1, 3, 5, 6], 2)`, () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const expected = 1;
    const actual = searchInsertPosition(nums, target);

    expect(actual).toEqual(expected);
  });


  it(`should return index = 4 for where it would be for ([1, 3, 5, 6], 7)`, () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const expected = 4;
    const actual = searchInsertPosition(nums, target);

    expect(actual).toEqual(expected);
  });

  it(`should return index = 0 for where it would be for ([1, 3, 5, 6], 0)`, () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    const expected = 0;
    const actual = searchInsertPosition(nums, target);

    expect(actual).toEqual(expected);
  });

});