import removeNthFromEnd from '../leetcode/remove-n-node-from-end';
import { createLinkedList } from '../data-structure/ListNode'

describe('removeNthFromEnd()', () => {

  it(`should return new head [1,2,3,5] `, () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const n = 2;

    const expected = createLinkedList([1, 2, 3, 5]);
    const actual = removeNthFromEnd(head, n);

    expect(actual).toEqual(expected);
  });

  it(`should return new head [2,3,4,5] `, () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const n = 5;

    const expected = createLinkedList([2, 3, 4, 5]);
    const actual = removeNthFromEnd(head, n);

    expect(actual).toEqual(expected);
  });

  it(`should return new head [1] `, () => {
    const head = createLinkedList([1]);
    const n = 1;

    const expected = createLinkedList([]);
    const actual = removeNthFromEnd(head, n);

    expect(actual).toEqual(expected);
  });

  it(`should return new head [1,2,3,4] `, () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const n = 5;

    const expected = createLinkedList([2, 3, 4, 5]);
    const actual = removeNthFromEnd(head, n);

    expect(actual).toEqual(expected);
  });

});