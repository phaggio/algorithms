// #108

// Given an array where elements are sorted in ascending order, 
// convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree 
// in which the depth of the two subtrees of every node never differ by more than 1.


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode([nums[mid]]);

  let leftArray = nums.slice(0, mid);
  root.left = sortedArrayToBST(leftArray);

  let rightArray = nums.slice(mid + 1);
  root.right = sortedArrayToBST(rightArray);

  return root;
}

export default sortedArrayToBST