import maxProfit from '../leetcode/buy-sell-stock-fee';

describe('maxProfit()', () => {

  it(`should return 0 for ([1], 2)`, () => {
    const prices = [1];
    const fee = 2;
    const expected = 0;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for ([1,4], 3)`, () => {
    const prices = [1, 4];
    const fee = 3;
    const expected = 0;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for ([1,3,2,1,5], 2)`, () => {
    const prices = [1, 3, 2, 1, 5];
    const fee = 2;
    const expected = 2;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 0 for ([4,3,2,5,6,2,1,2,2,5], 2)`, () => {
    const prices = [4, 3, 2, 5, 6, 2, 1, 2, 2, 5];
    const fee = 2;
    const expected = 4;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 8 for ([1, 3, 2, 8, 4, 9], 2)`, () => {
    const prices = [1, 3, 2, 8, 4, 9];
    const fee = 2;
    const expected = 8;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 3 for ([1,2,3,4,5,6], 2)`, () => {
    const prices = [1, 2, 3, 4, 5, 6];
    const fee = 2;
    const expected = 3;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 3 for ([5,3,4,2,1,5], 2)`, () => {
    const prices = [5, 3, 4, 2, 1, 5];
    const fee = 2;
    const expected = 2;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 6 for ([1,3,7,5,10,3], 3)`, () => {
    const prices = [1, 3, 7, 5, 10, 3];
    const fee = 3;
    const expected = 6;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 4 for ([2,1,4,4,2,3,2,5,1,2], 1)`, () => {
    const prices = [2, 1, 4, 4, 2, 3, 2, 5, 1, 2];
    const fee = 1;
    const expected = 4;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });


  it(`should return 4 for ([9,8,7,1,2], 3)`, () => {
    const prices = [9, 8, 7, 1, 2];
    const fee = 3;
    const expected = 0;
    const actual = maxProfit(prices, fee);

    expect(actual).toEqual(expected);
  });
});