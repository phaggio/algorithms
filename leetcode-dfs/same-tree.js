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
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = (p, q) => {
  if (p === null || q === null) {
    return p === q;
  }

  if (p.val !== q.val) return false;

  return (isSameTree(p.right, q.right) && isSameTree(p.left, q.left));
};

export default isSameTree

