// #21
// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

import LinkedList from '../data-structure/LinkedList';

const mergeTwoLists = (l1, l2) => {

  let currentNode1 = l1.head;
  let currentNode2 = l2.head;
  let sortedList = new LinkedList();

  while (currentNode1 || currentNode2) {
    if (currentNode1 === null) {
      sortedList.insert(currentNode2.val);
      currentNode2 = currentNode2.next;
    } else if (currentNode2 === null) {
      sortedList.insert(currentNode1.val);
      currentNode1 = currentNode1.next;
    } else if (currentNode1.val >= currentNode2.val) {
      sortedList.insert(currentNode2.val);
      currentNode2 = currentNode2.next;
    } else {
      sortedList.insert(currentNode1.val);
      currentNode1 = currentNode1.next
    }
  }
  return sortedList;
}

export default mergeTwoLists
