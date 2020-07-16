import maxProfit from '../leetcode/buy-sell-stock2';

describe('maxProfit()', () => {

  it(`should return 0 for []`, () => {
    const prices = [];
    const expected = 0;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for [0]`, () => {
    const prices = [0];
    const expected = 0;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);

  });


  it(`should return 7 for [7,1,5,3,6,4]`, () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 7;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);

  });


  it(`should return 4 for [1,2,3,4,5]`, () => {
    const prices = [1, 2, 3, 4, 5];
    const expected = 4;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);

  });


  it(`should return 0 for [7,6,4,3,1]`, () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);

  });


  it(`should return 2 for [2,1,2,0,1]`, () => {
    const prices = [2, 1, 2, 0, 1];
    const expected = 2;
    const actual = maxProfit(prices);

    expect(actual).toEqual(expected);

  });


})