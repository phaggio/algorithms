// #19

// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0, head);

  let nodeBeforeTarget = dummy;
  let currentNode = head;

  while (currentNode.next !== null) {
    if (n > 1) {
      n = n - 1;
      currentNode = currentNode.next;
    } else {
      nodeBeforeTarget = nodeBeforeTarget.next;
      currentNode = currentNode.next;
    }
  }

  nodeBeforeTarget.next = nodeBeforeTarget.next.next;
  return dummy.next;
}

export default removeNthFromEnd