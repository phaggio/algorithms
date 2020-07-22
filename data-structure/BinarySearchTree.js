class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  // traverse through tree, find right node for newValue, return the node
  insert(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.val) {
      // if new value is less than current node, go to the left child and call insert() with the left child node
      currentNode.left = this.insert(currentNode.left, newValue)
    } else {
      currentNode.right = this.insert(currentNode.right, newValue)
    }
    return currentNode;
  }

  // insert the new value to BinarySearchTree
  insertBST(newValue) {
    // root is null (empty tree), set the new value as root node
    if (this.root === null) {
      this.root = new Node(newValue);
      return;
    }
    // this will traverse through the tree and 
    this.insert(this.root, newValue);
  }
}


export default BinarySearchTree