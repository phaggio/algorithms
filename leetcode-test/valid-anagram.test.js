import isAnagram from '../leetcode/valid-anagram';

describe('isAnagram()', () => {

  it(`should return false for s = 'test', t = ''`, () => {
    const s = 'test';
    const t = '';

    const expected = false;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for s = '', t = ''`, () => {
    const s = '';
    const t = '';

    const expected = true;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return true for s = 'anagram', t = 'nagaram`, () => {
    const s = 'anagram';
    const t = 'nagaram';

    const expected = true;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return false for s = 'rat', t = 'car`, () => {
    const s = 'rat';
    const t = 'car';

    const expected = false;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return false for s = 'false', t = 'falsf`, () => {
    const s = 'false';
    const t = 'falsf';

    const expected = false;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return false for s = 'ab', t = 'ba`, () => {
    const s = 'ab';
    const t = 'ba';

    const expected = true;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });

  it(`should return false for s = 'ac', t = 'bb`, () => {
    const s = 'ac';
    const t = 'bb';

    const expected = false;
    const actual = isAnagram(s, t);

    expect(actual).toEqual(expected);
  });


});