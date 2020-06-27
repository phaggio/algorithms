import zeroesAndOnes from '../bootcamp/zeroes-and-ones';

describe('zeroesAndOnes()', () => {
  it(`should return false for this string '01010'`, () => {
    const str = '01010';
    const expected = false;
    const actual = zeroesAndOnes(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false for this string '01010101'`, () => {
    const str = '01010101';
    const expected = true;
    const actual = zeroesAndOnes(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false for this string '00000000'`, () => {
    const str = '00000000';
    const expected = false;
    const actual = zeroesAndOnes(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false for this string '11111'`, () => {
    const str = '11111';
    const expected = false;
    const actual = zeroesAndOnes(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false for this string '01011011'`, () => {
    const str = '01011011';
    const expected = false;
    const actual = zeroesAndOnes(str);

    expect(actual).toEqual(expected);
  });


});