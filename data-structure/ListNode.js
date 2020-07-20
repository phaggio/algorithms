class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const createLinkedList = arr => {
  let root = new ListNode(arr[0]);
  let node = root;
  for (let i = 1; i < arr.length; ++i) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  };

  return root;
}

export {
  ListNode,
  createLinkedList
}