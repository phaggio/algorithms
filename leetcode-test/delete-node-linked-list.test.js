import deleteNode from '../leetcode/delete-node-linked-list';
import { createLinkedList } from '../data-structure/ListNode'

describe('deleteNode()', () => {

  it(`should return  `, () => {
    const head = createLinkedList([4, 5, 1, 9]);
    const node = createLinkedList([5]);
    const expected = createLinkedList([4, 1, 9]);
    const actual = deleteNode(head, node);

    expect(actual).toEqual(expected);
  });

  it(`should return  `, () => {
    const head = createLinkedList([2, 3, 4, 5, 1, 9]);
    const node = createLinkedList([4]);
    const expected = createLinkedList([2, 3, 5, 1, 9]);
    const actual = deleteNode(head, node);

    expect(actual).toEqual(expected);
  });
});