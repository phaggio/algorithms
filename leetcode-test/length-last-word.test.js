import lengthOfLastWord from '../leetcode/length-last-word';

describe('lengthOfLastWord()', () => {
  it(`should return 5 for "Hello World"`, () => {
    const s = 'Hello World';
    const expected = 5;
    const actual = lengthOfLastWord(s);
    expect(actual).toEqual(expected);
  });


  it(`should return 5 for "Hello"`, () => {
    const s = 'Hello';
    const expected = 5;
    const actual = lengthOfLastWord(s);
    expect(actual).toEqual(expected);
  });


  it(`should return 0 for ""`, () => {
    const s = '';
    const expected = 0;
    const actual = lengthOfLastWord(s);
    expect(actual).toEqual(expected);
  });

  it(`should return 1 for "a "`, () => {
    const s = 'a ';
    const expected = 1;
    const actual = lengthOfLastWord(s);
    expect(actual).toEqual(expected);
  });


});