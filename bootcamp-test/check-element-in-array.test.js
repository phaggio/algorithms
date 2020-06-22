import checkElementInArray from '../bootcamp/check-element-in-array';

describe(`checkElementInArray()`, () => {
  it(`should return false when takes in a non-array`, () => {
    const arr = `test`;
    const element = `test`
    const expected = false;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });

  it(`should return false when there's no match in array (numbers)`, () => {
    const arr = [1, 2, 3];
    const element = 4
    const expected = false;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });

  it(`should return false when there's no match in array (string)`, () => {
    const arr = [`one`, `two`, `three`];
    const element = `test`
    const expected = false;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });

  it(`should return true when there's no match in array (numbers)`, () => {
    const arr = [1, 2, 3, 4];
    const element = 2
    const expected = true;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });

  it(`should return true when there's no match in array (string)`, () => {
    const arr = [`one`, `two`, `three`, `four`];
    const element = `three`
    const expected = true;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });

  it(`should return false when array is empty`, () => {
    const arr = [];
    const element = `test`
    const expected = false;
    const actual = checkElementInArray(arr, element);
    expect(actual).toEqual(expected);
  });
})