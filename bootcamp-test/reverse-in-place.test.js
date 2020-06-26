import reverseInPlace from '../bootcamp/reverse-in-place';

describe('reverseInPlace()', () => {
  it(`should return reversed of string 'test'`, () => {
    const str = 'test';
    const expected = 'tset';
    const actual = reverseInPlace(str);

    expect(actual).toEqual(expected);
  });

  it(`should return null if takes an empty string`, () => {
    const str = '';
    const expected = '';
    const actual = reverseInPlace(str);

    expect(actual).toEqual(expected);
  });

  it(`should return reversed of string 'New String'`, () => {
    const str = 'New String';
    const expected = 'gnirtS weN';
    const actual = reverseInPlace(str);

    expect(actual).toEqual(expected);
  });

});