import addDigits from '../leetcode/add-digits';

describe('addDigits()', () => {
  it(`should return 2`, () => {
    const num = 38
    const expected = 2
    const actual = addDigits(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 4`, () => {
    const num = 103
    const expected = 4
    const actual = addDigits(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 0`, () => {
    const num = 0
    const expected = 0
    const actual = addDigits(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 8`, () => {
    const num = 8
    const expected = 8
    const actual = addDigits(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 5`, () => {
    const num = 167
    const expected = 5
    const actual = addDigits(num);

    expect(actual).toEqual(expected);
  });

})