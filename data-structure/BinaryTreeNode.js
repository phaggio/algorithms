
class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const insertLevelOrder = (arr, root, i) => {
  if (i < arr.length) {
    const newNode = new BinaryTreeNode(arr[i]);
    root = newNode;

    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }

  return root;
}

export { BinaryTreeNode, insertLevelOrder }


// const arr = [1, 2, 3];
// console.log(insertLevelOrder(arr, arr[0], 0))