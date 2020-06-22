import firstDupInt from '../bootcamp/first-dup-int';

describe(`firstDupInt()`, () => {
  it(`should return undefined if takes non-array`, () => {
    const arr = 'test';
    const expected = undefined;
    const actual = firstDupInt(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return undefined if takes an empty array`, () => {
    const arr = [];
    const expected = undefined;
    const actual = firstDupInt(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return undefined if no duplicated int in the array`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = undefined;
    const actual = firstDupInt(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return first duplicated int found in the array`, () => {
    const arr = [1, 2, 3, 4, 2, 5, 6, 3, 8];
    const expected = 2;
    const actual = firstDupInt(arr);

    expect(actual).toEqual(expected);
  });

});