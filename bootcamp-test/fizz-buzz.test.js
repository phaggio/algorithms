import fizzBuzz from '../bootcamp/fizz-buzz';

describe(`fizzBuzz()`, () => {
  it(`should return empty if takes an empty array`, () => {
    const arr = [];
    const expected = [];
    const actual = fizzBuzz(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return undefined if takes a non-array`, () => {
    const arr = 'test';
    const expected = undefined;
    const actual = fizzBuzz(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return correct array if takes an array`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const expected = [1, 2, `Fizz`, 4, `Buzz`, `Fizz`, 7, 8, `Fizz`, `Buzz`, 11, `Fizz`, 13, 14, `Fizz Buzz`];
    const actual = fizzBuzz(arr);

    expect(actual).toEqual(expected);
  });

});