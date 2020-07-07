// #83
// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Input: 1->1->2
// Output: 1->2


import LinkedList from '../data-structure/LinkedList';

const deleteDuplicates = head => {
  let node = head.head;
  if (!node) return head;
  if (node.next === null) return head;

  let previousNode = node;
  node = node.next;

  while (node !== null) {
    if (previousNode.val === node.val) {
      previousNode.next = node.next;
      node = node.next;
      head.size--;
    } else {
      previousNode = previousNode.next;
      node = node.next;
    }
  }
  // console.log(head)
  return head;
}

export default deleteDuplicates