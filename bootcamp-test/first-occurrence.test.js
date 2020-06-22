import firstOccurrence from '../bootcamp/first-occurrence';

describe(`firstOccurrence()`, () => {
  it(`should return undefined if takes non-string`, () => {
    const str = 12;
    const expected = undefined;
    const actual = firstOccurrence(str);

    expect(actual).toEqual(expected);
  });

  it(`should return undefined if takes an empty string`, () => {
    const str = '';
    const expected = undefined;
    const actual = firstOccurrence(str);

    expect(actual).toEqual(expected);
  });

  it(`should return undefined if takes null`, () => {
    const expected = undefined;
    const actual = firstOccurrence();

    expect(actual).toEqual(expected);
  });

  it(`should return first character that does not repeat itself in the string`, () => {
    const str = `the quick brown fox jumps over the calm kitten quietly`
    const expected = `b`;
    const actual = firstOccurrence(str);

    expect(actual).toEqual(expected);
  });

  it(`should return first character that does not repeat itself in the string`, () => {
    const str = `this hat is the greatest!`
    const expected = `g`;
    const actual = firstOccurrence(str);

    expect(actual).toEqual(expected);
  });

});