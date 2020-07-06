import addTwoNumbers from '../leetcode-linkedlist/add-two-numbers';
import LinkedList from '../data-structure/LinkedList';

describe('addTwoNumbers()', () => {
  it(`should return new LinkedList [7,0,8]`, () => {
    const list1 = new LinkedList([2, 4, 3]);
    const list2 = new LinkedList([5, 6, 4]);

    const expected = new LinkedList([7, 0, 8])
    const actual = addTwoNumbers(list1, list2);

    expect(actual).toEqual(expected);
  });

});

