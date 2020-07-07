// #82

// Given a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5

// Input: 1->1->1->2->3
// Output: 2->3

const deleteDuplicates = head => {
  if (head.head === null || head.head.next === null) return head;

  // at this point, we know list has at least two nodes. They may or may not be the same.

  head.insertAtHead();
  // dummy.next = head.head;
  let lastNode = head.head; // create variable that points to dummy node
  let currentNode = lastNode.next;
  let dup;

  while (currentNode) {
    const nextValue = currentNode.next ? currentNode.next.val : null;

    if (currentNode.val === nextValue) {
      dup = currentNode.val;
    }
    if (currentNode.val === dup) {
      lastNode.next = currentNode.next;
      head.size--;
    } else {
      lastNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  head.removeFrom(0);
  return head;
}
export default deleteDuplicates