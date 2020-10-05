class Node {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// BST allows duplicate values, but usually unique. it is not limited to only numbers, as long as they're comparable.
class BinarySearchTree {
  constructor(rootValue) {
    this.root = rootValue === undefined ? null : new Node(rootValue);
    this.size = rootValue === undefined ? 0 : 1;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  add(data) {
    if (this.#contains(data)) {
      return false;
    } else {
      
      this.size++;
      return true;
    }
  }

  #contains(data) {
    return true
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