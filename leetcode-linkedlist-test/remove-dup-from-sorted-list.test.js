import deleteDuplicates from '../leetcode-linkedlist/remove-dup-from-sorted-list';
import LinkedList from '../data-structure/LinkedList';

describe('deleteDuplicates()', () => {
  it(`should return new LinkedList [1,2,3]`, () => {
    const head = new LinkedList([1, 1, 2, 3, 3, 4, 4]);

    const expected = new LinkedList([1, 2, 3, 4])
    const actual = deleteDuplicates(head);
    expect(actual).toEqual(expected);
  });

  it(`should return new LinkedList [1,2,3,4]`, () => {
    const head = new LinkedList([1, 2, 3, 4]);

    const expected = new LinkedList([1, 2, 3, 4])
    const actual = deleteDuplicates(head);
    expect(actual).toEqual(expected);
  });

  it(`should return new LinkedList [0]`, () => {
    const head = new LinkedList([0]);

    const expected = new LinkedList([0])
    const actual = deleteDuplicates(head);
    expect(actual).toEqual(expected);
  });

  it(`should return new LinkedList []`, () => {
    const head = new LinkedList([]);

    const expected = new LinkedList([])
    const actual = deleteDuplicates(head);
    expect(actual).toEqual(expected);
  });

});