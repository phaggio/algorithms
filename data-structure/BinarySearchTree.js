class Node {
  constructor(data, left, right) {
    this.data = (data === undefined ? 0 : data);
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


  // public method to add new data, if data already exist in BST, return false.
  add(data) {
    if (this.#contains(data)) {
      return false;
    } else {
      // private recursive method to add new data to BST
      this.root = this.#add(this.root, data);
      this.size++;
      return true;
    }
  }

  // private recursive method to add the new data to the right node
  #add(node, data) {
    if (node === null) {
      node = new Node(data, null, null);
    } else {
      if (data < node.data) {
        node.left = this.#add(node.left, data);
      } else {
        node.right = this.#add(node.right, data);
      }
    }
    return node;
  }

  // public method to remove data, if data 
  remove(data) {
    if (this.#contains(data)) {
      this.root = this.#remove(this.root, data);
      this.size--;
      return true;
    }
    return false;
  }

  // private recursive method to remove data from tree.
  #remove(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.#remove(node.left, data);
    } else if (data > node.data) {
      node.right = this.#remove(node.right, data);
    } else {

      // remove the node, there could be 4 cases.
      // left sub tree is null
      if (node.left === null && node.right !== null) {
        let rightChild = node.right;
        // clear memory
        node.data = null;
        node = null;
        return rightChild;

        // right sub tree is null
      } else if (node.right === null && node.left !== null) {
        let leftChild = node.left;
        // clear memory
        node.data = null;
        node = null;
        return leftChild;

        // both sub trees exist
      } else {
        // find the most left node in the right sub tree
        let temp = this.#digLeft(node.right);
        // swap data
        node.data = temp.data;
        // remove the most left node from the right sub tree.
        node.right = this.#remove(node.right, temp.data);
      }

    }
    return node;
  }

  // private method to find most left node
  #digLeft(node) {
    let currNode = node;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode;
  }

  #contains(node, data) {
    if (node === null) return false;
    if (data < node.data) {
      return this.#contains(node.left, data);
    } else if (data > node.data) {
      return this.#contains(node.right, data);
    } else {
      return true;
    }
  }

}


export default BinarySearchTree