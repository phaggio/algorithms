import swapCase from '../bootcamp/swap-case';

describe('swapCase()', () => {
  it(`should lettercase swapped string 'Test'`, () => {
    const str = 'Test';
    const expected = 'tEST';
    const actual = swapCase(str);

    expect(actual).toEqual(expected);
  });

  it(`should lettercase swapped string 'something'`, () => {
    const str = 'something';
    const expected = 'SOMETHING';
    const actual = swapCase(str);

    expect(actual).toEqual(expected);
  });

  it(`should lettercase swapped string 'Number1'`, () => {
    const str = 'Number1';
    const expected = 'nUMBER1';
    const actual = swapCase(str);

    expect(actual).toEqual(expected);
  });

  it(`should lettercase swapped string '1234'`, () => {
    const str = '1234';
    const expected = '1234';
    const actual = swapCase(str);

    expect(actual).toEqual(expected);
  });

});