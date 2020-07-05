class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null; // this is a Node
  }

  // insert a new node to the beginning of linked list
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.next = this.head;
    return this; // return the updated list
  }

  isEmpty() {
    return (this.head === null);
  }

  printList() {
    if (this.isEmpty()) {
      console.log(`Empty List`);
      return false;
    } else {
      let temp = this.head;
      while (temp !== null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(` -> `);
        temp = temp.next;
      }
      console.log(`null`);
      return true;
    }
  }

  getHead() {
    console.log(this.head)
    return this.head;
  }

  // update the data in the head of the linked list
  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  // get the linked list in string
  getListStr() {
    if (this.isEmpty()) {
      console.log(`Empty List`);
      return null;
    } else {
      let str = ''; // output
      let temp = this.head;
      while (temp !== null) {
        str += String(temp.data);
        str += ' -> ';
        temp = temp.next;
      }
      str += 'null';
      return str;
    }
  }

  // insert new data to the end of linked list
  insertAtTail(newData) {
    // create a new Node with data as newData;
    let node = new Node(newData);

    // if list is empty, the new node is at the head
    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    // iterate through the list to the last element
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // make new node the next element of the last node in list
    currentNode.next = node;
    return this;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) return this;
    let firstElement = this.head;
    this.head = firstElement.next;
    return this;
  }

  deleteValue(value) {
    // if list is empty return false
    if (this.isEmpty()) return false;


    let currentNode = this.head;

    // if first node is the node to delete, delete it and return true
    if (currentNode.data === value) {
      this.head = currentNode.next;
      return true;
    }

    while (currentNode.next !== null) {
      // if the next node's data equals to the value
      if (currentNode.next.data === value) {
        // change the current node.next to the next next one (skip the node matching value)
        currentNode.next = currentNode.next.next;
        return this;
      }
      currentNode = currentNode.next;
    }
    // node was not found, return false;
    return false;
  }

  deleteAtTail() {
    if (this.isEmpty()) return this;
    let firstNode = this.head;
    if (firstNode.next === null) {
      this.deleteAtHead();
      return this;
    }

    while (firstNode.next.next !== null) {
      firstNode = firstNode.next;
    }

    firstNode.next = null;
    return this;
  }

}

export default LinkedList