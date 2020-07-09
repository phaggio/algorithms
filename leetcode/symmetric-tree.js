// #101

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//    1
//   / \
//  2   2
//   \   \
//    3   3

// iterative solution
// const isSymmetric = root => {
//   if (!root || (root.left === null && root.right === null)) return true;

//   const queue = [root.left, root.right];

//   while (queue.length !== 0) {
//     let left = queue.shift();
//     let right = queue.pop();
//     if (left === null && right === null) continue;
//     if (left === null || right === null) return false;


//     if (left.val !== right.val) return false;

//     queue.unshift(left.right);
//     queue.push(right.left);
//     queue.unshift(left.left);
//     queue.push(right.right);
//   }

//   return true;
// }

// recursive
const isSymmetric = root => {
  if (!root || (root.left === null && root.right === null)) return true;

  const isMirror = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    return left.val === right.val && isMirror(left.right, right.left) && isMirror(left.left, right.right);
  }

  return isMirror(root.left, root.right);
}



export default isSymmetric

// time 2^root
// shift is O(n)
// pop is O(1)