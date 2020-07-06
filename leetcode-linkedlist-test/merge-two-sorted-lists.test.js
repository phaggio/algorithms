import mergeTwoLists from '../leetcode-linkedlist/merge-two-sorted-lists';
import LinkedList from '../data-structure/LinkedList';

describe('mergeTwoLists()', () => {
  it(`should return new LinkedList [1,1,2,3,4,4]`, () => {
    const list1 = new LinkedList([1, 2, 4]);
    const list2 = new LinkedList([1, 3, 4]);

    const expected = new LinkedList([1,1,2,3,4,4])
    const actual = mergeTwoLists(list1, list2);

    expect(actual).toEqual(expected);
  });

});