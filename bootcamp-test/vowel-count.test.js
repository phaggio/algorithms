import vowelCount from '../bootcamp/vowel-count';

describe('vowelCount()', () => {
  it(`should return number of vowels in string 'this is a test'`, () => {
    const str = 'this is a test';
    const expected = 4;
    const actual = vowelCount(str);

    expect(actual).toEqual(expected);
  });

  it(`should return number of vowels in string 'BBCCDD'`, () => {
    const str = 'BBCCDD';
    const expected = 0;
    const actual = vowelCount(str);

    expect(actual).toEqual(expected);
  });

  it(`should return number of vowels in string 'UPPER CASE and lower case'`, () => {
    const str = 'UPPER CASE and lower case';
    const expected = 9;
    const actual = vowelCount(str);

    expect(actual).toEqual(expected);
  });

  it(`should return number of vowels in string '12345'`, () => {
    const str = '12345';
    const expected = 0;
    const actual = vowelCount(str);

    expect(actual).toEqual(expected);
  });

});