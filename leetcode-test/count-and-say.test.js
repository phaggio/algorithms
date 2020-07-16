import countAndSay from '../leetcode/count-and-say';

describe('countAndSay()', () => {
  it(`should return new string '1' for input of 1`, () => {
    const n = 1;
    const expected = '1';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '11' for input of 2`, () => {
    const n = 2;
    const expected = '11';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '21' for input of 3`, () => {
    const n = 3;
    const expected = '21';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '1211' for input of 4`, () => {
    const n = 4;
    const expected = '1211';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '111221' for input of 5`, () => {
    const n = 5;
    const expected = '111221';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '21' for input of 9`, () => {
    const n = 9;
    const expected = '31131211131221';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


  it(`should return new string '11131221133112132113212221' for input of 11`, () => {
    const n = 11;
    const expected = '11131221133112132113212221';
    const actual = countAndSay(n);
    expect(actual).toEqual(expected);
  });


});