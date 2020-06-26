import reverseWords from '../bootcamp/reverse-words';

describe('reverseWords()', () => {
  it(`should return reversed of string 'this is a test'`, () => {
    const str = 'this is a test';
    const expected = 'test a is this';
    const actual = reverseWords(str);

    expect(actual).toEqual(expected);
  });

  it(`should return reversed of string of one word: 'test'`, () => {
    const str = 'test';
    const expected = 'test';
    const actual = reverseWords(str);

    expect(actual).toEqual(expected);
  });

  it(`should return null if takes empty string or null`, () => {
    const str = '';
    const expected = '';
    const actual = reverseWords(str);

    expect(actual).toEqual(expected);
  });

});