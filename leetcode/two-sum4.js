// #653

// Given a Binary Search Tree and a target number, 
// return true if there exist two elements in the BST such that their sum is equal to the given target.


// recursive approach
const findTarget = (root, k) => {
  let set = {};
  const find = (root, k, set) => {
    if (root === null) return false;
    if (set[k - root.val]) return true;
    set[root.val] = true;
    return find(root.left, k, set) || find(root.right, k, set);
  }
  return find(root, k, set);
}

export default findTarget