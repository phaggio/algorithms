class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const createLinkedList = arr => {
  if (!arr || arr.length === 0) return null;
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