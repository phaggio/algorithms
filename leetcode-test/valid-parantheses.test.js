import isValid from '../leetcode/valid-parantheses';

describe('isValid()', () => {
  it(`should return true for "()"`, () => {
    const s = '()'
    const expected = true;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return true for "()[]{}"`, () => {
    const s = '()[]{}'
    const expected = true;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return false for "(]"`, () => {
    const s = '(]'
    const expected = false;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return true for "{[]}"`, () => {
    const s = '{[]}'
    const expected = true;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return false for "({[]}))"`, () => {
    const s = '({[]}))'
    const expected = false;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return true for ""`, () => {
    const s = ''
    const expected = true;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return true for ")("`, () => {
    const s = ')('
    const expected = false;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


  it(`should return true for ")"`, () => {
    const s = ')'
    const expected = false;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });

  it(`should return true for "("`, () => {
    const s = '('
    const expected = false;
    const actual = isValid(s);
    expect(actual).toEqual(expected);
  });


});