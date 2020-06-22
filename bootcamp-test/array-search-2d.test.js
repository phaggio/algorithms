import arraySearch2D from '../bootcamp/array-search-2d';

describe(`arraySearch2D`, () => {
  it(
    `should return 3 when given the array
    [["O", "O", "O"]
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "X"]]`, () => {
    const arr = [
      ['O', 'O', 'O'],
      ['X', 'O', 'O'],
      ['O', 'O', 'X'],
      ['O', 'O', 'X']
    ];

    const actual = arraySearch2D(arr);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  it(
    `should return 0 when given the array
    [["O", "O", "O"],
    ["O", "O", "O"]]`, () => {
    const arr = [
      ['O', 'O', 'O'],
      ['O', 'O', 'O']
    ];

    const actual = arraySearch2D(arr);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it(
    `should return 5 when given the array
    [["X", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["X", "X", "X", "X"],
    ["O", "O", "O", "O"]]`, () => {
    const arr = [
      ['X', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
      ['X', 'X', 'X', 'X'],
      ['O', 'O', 'O', 'O']
    ];

    const actual = arraySearch2D(arr);
    const expected = 5;

    expect(actual).toEqual(expected);
  });

  it(
    `should return 0 when given the array
    [[]]`, () => {
    const arr = [[]];

    const actual = arraySearch2D(arr);
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
