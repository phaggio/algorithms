import isUnique from '../bootcamp/is-unique';

describe(`isUnique()`, () => {
  it(`should return false if takes an array of numbers that has duplicate numbers`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1];
    const expected = false;
    const actual = isUnique(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-array`, () => {
    const arr = `test`;
    const expected = false;
    const actual = isUnique(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return true if takes an array of numbers that does not have a repeated number`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expected = true;
    const actual = isUnique(arr);

    expect(actual).toEqual(expected);
  });

});