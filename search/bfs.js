// import { BinarySearchTree } from '../data-structure/BinarySearchTree';

const BinarySearchTree = require('../data-structure/BinarySearchTree')

const nums = [6, 3, 9];

// let myTree = new BinarySearchTree();

let myTree = new BinarySearchTree(7);

for (const num of nums) {
  myTree.add(num);
}

console.log(myTree);
