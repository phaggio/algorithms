import productOfLargestTwo from '../bootcamp/product-of-largest-two';

describe('productOfLargestTwo()', () => {
  it(`should return product of largest two numbers in [1, 2, 3, 4, 5, 6]`, () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expected = 30;
    const actual = productOfLargestTwo(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return product of largest two numbers in [-2, -3, -4, -5, -6, -1]`, () => {
    const arr = [-2, -3, -4, -5, -6, -1];
    const expected = 2;
    const actual = productOfLargestTwo(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return product of largest two numbers in [-1, 0, 1, 2, 3, 4, 4]`, () => {
    const arr = [-1, 0, 1, 2, 3, 4, 4];
    const expected = 16;
    const actual = productOfLargestTwo(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return product of largest two numbers in [-2, -4, -5, -6, -2]`, () => {
    const arr = [-2, -4, -5, -6, -2];
    const expected = 4;
    const actual = productOfLargestTwo(arr);

    expect(actual).toEqual(expected);
  });

});