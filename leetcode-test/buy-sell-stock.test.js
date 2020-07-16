import maxProfit from '../leetcode/buy-sell-stock';

describe('maxProfit()', () => {
  it(`should return 0 for []`, () => {
    const nums = [];
    const expected = 0;
    const actual = maxProfit(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for [2]`, () => {
    const nums = [2];
    const expected = 0;
    const actual = maxProfit(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 5 for [7,1,5,3,6,4]`, () => {
    const nums = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    const actual = maxProfit(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for [7,6,4,3,1]`, () => {
    const nums = [7, 6, 4, 3, 1];
    const expected = 0;
    const actual = maxProfit(nums);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for [7,3,5,6,1,2,8]`, () => {
    const nums = [7, 3, 5, 6, 1, 2, 8];
    const expected = 7;
    const actual = maxProfit(nums);

    expect(actual).toEqual(expected);
  });

});