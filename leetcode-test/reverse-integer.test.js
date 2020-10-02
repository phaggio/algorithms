import reverse from '../leetcode/reverse-integer';

describe('reverse()', () => {
  it(`should return 321 for 123`, () => {
    const num = 123
    const expected = 321
    const actual = reverse(num);

    expect(actual).toEqual(expected);
  });

  it(`should return -321 for -123`, () => {
    const num = -123
    const expected = -321
    const actual = reverse(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 21 for 120`, () => {
    const num = 120
    const expected = 21
    const actual = reverse(num);

    expect(actual).toEqual(expected);
  });

});