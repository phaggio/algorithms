// Given two binary trees, write a function to check if they are the same or not.

//Two binary trees are considered the same if they are structurally identical 
// and the nodes have the same value.


// Given two binary trees, write a function to check if they are the same or not.
//Two binary trees are considered the same if they are structurally identical 
// and the nodes have the same value.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// class TreeNode {
//   constructor(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
//   }
// }

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// recursive approach
// const isSameTree = (p, q) => {
//   // first check if either node exists, if they're both null, it means it has reached the end of the trees
//   // if one of them has node, the other is null, then they're not the same.
//   if (p === null || q === null) {
//     return p === q;
//   };

//   if (p.val !== q.val) return false;

//   return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
// };



// iterative  approach
const isSameTree = (p, q) => {
  // p and q are root nodes
  let queueP = [p];
  let queueQ = [q];

  while (queueP.length && queueQ.length) {
    const currP = queueP.shift(); // takes the first Node from the queue
    const currQ = queueQ.shift();

    if (currP && currQ && currP.val !== currQ.val) return false;
    if (!currP && currQ) return false;
    if (currP && !currQ) return false;

    // put node's children nodes to the queue to continue the process
    if (currP) {
      queueP.push(currP.left);
      queueP.push(currP.right);
    }
    if (currQ) {
      queueQ.push(currQ.left);
      queueQ.push(currQ.right);
    }
  }

  return (queueP.length === 0 && queueQ.length === 0);
}


export default isSameTree

