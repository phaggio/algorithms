import longestWord from '../bootcamp/longest-word';

describe(`longestWord()`, () => {
  it(`should return null if str is null`, () => {
    const str = '';
    const expected = null;
    const actual = longestWord(str);

    expect(actual).toEqual(expected);
  });

  it(`should return the word if str is only one word`, () => {
    const str = 'test';
    const expected = 'test';
    const actual = longestWord(str);

    expect(actual).toEqual(expected);
  });

  it(`should return the longest word from the str`, () => {
    const str = 'this is a test string';
    const expected = 'string';
    const actual = longestWord(str);

    expect(actual).toEqual(expected);
  });

  it(`should return null if there's no one longest word in str`, () => {
    const str = 'this is also a test';
    const expected = null;
    const actual = longestWord(str);

    expect(actual).toEqual(expected);
  });


});