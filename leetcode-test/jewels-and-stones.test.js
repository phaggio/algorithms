import numJewelsInStones from '../leetcode/jewels-and-stones';

describe('numJewelsInStones()', () => {
  it(`should return 3 for j = 'aA', s = 'aAAbbbb' `, () => {
    const j = 'aA';
    const s = 'aAAbbbb';
    const expected = 3;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for j = 'z', s = 'ZZaa' `, () => {
    const j = 'z';
    const s = 'ZZaa';
    const expected = 0;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for j = '', s = 'abcD' `, () => {
    const j = '';
    const s = 'abcD';
    const expected = 0;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for j = '', s = '' `, () => {
    const j = '';
    const s = '';
    const expected = 0;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });

  it(`should return 7 for j = 'aB', s = 'aBaaBBB' `, () => {
    const j = 'aB';
    const s = 'aBaaBBB';
    const expected = 7;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });

  it(`should return 3 for j = 'aB', s = 'cbAabBB' `, () => {
    const j = 'aB';
    const s = 'cbAabBB';
    const expected = 3;
    const actual = numJewelsInStones(j, s);

    expect(actual).toEqual(expected);
  });
});