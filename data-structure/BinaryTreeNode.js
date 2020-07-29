class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// must put 'null' for all placeholder in array.
// Example: [0, 1, 2, 3, null, 5, 6, 7, 8, null, null, null, null, null, 14]

//          0
//       /      \
//      1        2
//     / \      /  \
//    3   n     5    6
//   / \ / \   / \  / \
//  7  8 n  n  n n  n 14 


const insertLevelOrder = (arr, root, i) => {
  if (i < arr.length) {
    const newNode = new BinaryTreeNode(arr[i]);
    root = newNode;

    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
}

// this works on leetcode. it takes array and convert to Binary Search Tree, returns root
const arrayToBinaryTree = arr => {
  if (arr.length === 0) return;
  let queue = [];
  let root = new BinaryTreeNode(arr.shift());
  queue.push(root);
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    if (currentNode === null) {
      continue;
    } else {
      let leftValue = arr[0] === undefined ? null : arr.shift();
      currentNode.left = leftValue === null ? null : new BinaryTreeNode(leftValue);
      queue.push(currentNode.left);
      let rightValue = arr[0] === undefined ? null : arr.shift();
      currentNode.right = rightValue === null ? null : new BinaryTreeNode(rightValue);
      queue.push(currentNode.right);
    }
  }
  return root;
}


export { BinaryTreeNode, insertLevelOrder, arrayToBinaryTree }
