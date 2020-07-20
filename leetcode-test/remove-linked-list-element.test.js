import removeElements from '../leetcode/remove-linked-list-element';
import { createLinkedList } from '../data-structure/ListNode';

describe('removeElements()', () => {
  it(`should return new linked list excluding nodes that has value = 6`, () => {
    const head = createLinkedList([])
    const val = 6;
    const expected = createLinkedList([]);
    const actual = removeElements(head, val);

    expect(actual).toEqual(expected);
  });

  it(`should return new linked list excluding nodes that has value = 6`, () => {
    const head = createLinkedList([1, 2, 3, 6, 4, 5, 6])
    const val = 6;
    const expected = createLinkedList([1, 2, 3, 4, 5]);
    const actual = removeElements(head, val);

    expect(actual).toEqual(expected);
  });

  it(`should return new linked list excluding nodes that has value = 6`, () => {
    const head = createLinkedList([1, 2, 3, 4])
    const val = 6;
    const expected = createLinkedList([1, 2, 3, 4]);
    const actual = removeElements(head, val);

    expect(actual).toEqual(expected);
  });

  it(`should return new linked list excluding nodes that has value = 6`, () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6])
    const val = 0;
    const expected = createLinkedList([1, 2, 3, 4, 5, 6]);
    const actual = removeElements(head, val);

    expect(actual).toEqual(expected);
  });

});