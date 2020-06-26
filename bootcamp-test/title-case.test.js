import titleCase from '../bootcamp/title-case';

describe('titleCase()', () => {
  it(`should return a string with every word's first letter capitalized 'this is a test'`, () => {
    const str = 'this is a test';
    const expected = 'This Is A Test';
    const actual = titleCase(str);

    expect(actual).toEqual(expected);
  });

  it(`should return a string with every word's first letter capitalized 'test'`, () => {
    const str = 'test';
    const expected = 'Test';
    const actual = titleCase(str);

    expect(actual).toEqual(expected);
  });

  it(`should return the string that already has every word's first letter capitalized 'New String'`, () => {
    const str = 'New String';
    const expected = 'New String';
    const actual = titleCase(str);

    expect(actual).toEqual(expected);
  });

});