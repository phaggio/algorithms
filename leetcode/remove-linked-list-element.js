// #203

// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5


const removeElements = (head, val) => {
  let root = head;
  let currentNode = head
  let previousNode = null;

  while (currentNode !== null) {
    if (currentNode.val === val) {
      if (previousNode === null) {
        root = currentNode.next;
        currentNode = currentNode.next;
      } else {
        previousNode.next = currentNode.next;
        currentNode = currentNode.next;
      }
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return root;
}

export default removeElements