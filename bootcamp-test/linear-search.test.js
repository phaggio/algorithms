import linearSearch from '../bootcamp/linear-search';

describe(`linearSearch()`, () => {
  it(`should return -1 if target does not exist in the array of numbers`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 9;
    const expected = -1;
    const actual = linearSearch(arr, target);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 if target exist in the first index of the array of numbers`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 1;
    const expected = 0;
    const actual = linearSearch(arr, target);

    expect(actual).toEqual(expected);
  });

  it(`should return 3 if target exist in the fourth index of the array of numbers`, () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 4;
    const expected = 3;
    const actual = linearSearch(arr, target);

    expect(actual).toEqual(expected);
  });


});