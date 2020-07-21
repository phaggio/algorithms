// #112

// Given a binary tree and a sum, determine if the tree has a root-to-leaf path 
// such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.



// BFS
const hasPathSum = (root, sum) => {
  if (!root) return false;
  let queue = [root];

  while (queue.length !== 0) {
    let currentNode = queue.shift()

    // if reached leaf node
    if (currentNode.right === null && currentNode.left === null && currentNode.val === sum) return true;

    if (currentNode.left !== null) {
      currentNode.left.val = currentNode.val;
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      currentNode.right.val += currentNode.val;
      queue.push(currentNode.right);
    }
  }

  return false;
}


export default hasPathSum
