import fourSumCount from '../leetcode/4sum-2.js';

describe('fourSumCount()', () => {
  it(
    `should return 2 for 
      A = [ 1, 2]
      B = [-2,-1]
      C = [-1, 2]
      D = [ 0, 2]
    `, () => {
    const a = [1, 2]
    const b = [-2, -1]
    const c = [-1, 2]
    const d = [0, 2]
    const expected = 2
    const actual = fourSumCount(a, b, c, d);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 7 for 
      A = [1,2,3]
      B = [-2,-1,1]
      C = [-1,2,3]
      D = [0,2,-2]
    `, () => {
    const a = [1, 2, 3]
    const b = [-2, -1, 1]
    const c = [-1, 2, 3]
    const d = [0, 2, -2]
    const expected = 7
    const actual = fourSumCount(a, b, c, d);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 7 for 
      A = [0, 0, 0]
      B = [0, 0, 0]
      C = [0, 0, 0]
      D = [0, 0, 0]
    `, () => {
    const A = [0, 0, 0]
    const B = [0, 0, 0]
    const C = [0, 0, 0]
    const D = [0, 0, 0]
    const expected = 81
    const actual = fourSumCount(A, B, C, D);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 6 for 
      A = [1, 2, 10]
      B = [-2, -1, -1]
      C = [-1, 2, 10]
      D = [0, 2, -2]
    `, () => {
    const A = [1, 2, 10]
    const B = [-2, -1, -1]
    const C = [-1, 2, 10]
    const D = [0, 2, -2]
    const expected = 6
    const actual = fourSumCount(A, B, C, D);

    expect(actual).toEqual(expected);
  });

});