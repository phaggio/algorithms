import isAnagram from '../bootcamp/is-anagram';

describe(`isAnagram()`, () => {
  it(`should return true if strings are anagram of each other`, () => {
    const strOne = `iceman`;
    const strTwo = `cinema`;
    const expected = true;
    const actual = isAnagram(strOne, strTwo);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings are anagram of each other`, () => {
    const strOne = `study`;
    const strTwo = `dusty`;
    const expected = true;
    const actual = isAnagram(strOne, strTwo);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings are not anagram of each other`, () => {
    const strOne = `cat`;
    const strTwo = `dat`;
    const expected = false;
    const actual = isAnagram(strOne, strTwo);

    expect(actual).toEqual(expected);
  });


});