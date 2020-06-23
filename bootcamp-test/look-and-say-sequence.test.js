import lookAndSay from '../bootcamp/look-and-say-sequence';

describe(`lookAndSay()`, () => {
  it(`should return correct sequence of 1`, () => {
    const num = 1;
    const expected = 11;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

  it(`should return correct sequence of 11`, () => {
    const num = 11;
    const expected = 21;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

  it(`should return correct sequence of 21`, () => {
    const num = 21;
    const expected = 1211;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

  it(`should return correct sequence of 1211`, () => {
    const num = 1211;
    const expected = 111221;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

  it(`should return correct sequence of 111221`, () => {
    const num = 111221;
    const expected = 312211;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

  it(`should return correct sequence of 2222112333`, () => {
    const num = 2222112333;
    const expected = 42211233;
    const actual = lookAndSay(num);

    expect(actual).toEqual(expected);
  });

});