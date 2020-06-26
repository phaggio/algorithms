import stringRepNumber from '../bootcamp/string-rep-number';

describe('stringRepNumber()', () => {
  it(`should return negative number of '1'`, () => {
    const str = '1';
    const expected = -1;
    const actual = stringRepNumber(str);

    expect(actual).toEqual(expected);
  });

  it(`should return negative number of '-5'`, () => {
    const str = '-5';
    const expected = -5;
    const actual = stringRepNumber(str);

    expect(actual).toEqual(expected);
  });

  it(`should throw an error for 'test'`, () => {
    const str = 'test';
    const cb = () => stringRepNumber(str)
    const err = 'not a number'

    expect(cb).toThrow(err);
  });

});