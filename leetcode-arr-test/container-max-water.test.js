import maxArea from '../leetcode-arr/container-max-water';

describe('maxArea()', () => {
  it(`should return 4 for [1,8,6,2,5,4,8,3,7]`, () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 49;
    const actual = maxArea(height);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for [1,8]`, () => {
    const height = [1, 8];
    const expected = 1;
    const actual = maxArea(height);

    expect(actual).toEqual(expected);
  });

  it(`should return 4 for [1,8,0,2,3,4,5,6,5]`, () => {
    const height = [1, 8, 0, 2, 3, 4, 5, 6, 5];
    const expected = 36;
    const actual = maxArea(height);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for [2]`, () => {
    const height = [2];
    const expected = 0;
    const actual = maxArea(height);

    expect(actual).toEqual(expected);
  });

  it(`should return 40 for [2,3,4,5,6,7,8,9,8,7,6,5,4,3]`, () => {
    const height = [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3];
    const expected = 40;
    const actual = maxArea(height);

    expect(actual).toEqual(expected);
  });

});