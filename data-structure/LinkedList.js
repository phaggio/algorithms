class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(arr) {
    this.head = null; // this is a Node
    this.size = 0; // this stores the number of nodes in this list
    if (arr) {
      for (const item of arr) {
        this.insert(item);
      }
    }
  }

  // insert a new node element to the beginning of linked list
  insertAtHead(element) {
    let node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this; // return the updated Linked List for chaining
  }

  // insert new element to the end of linked list
  insert(element) {
    // create a new Node and take element;
    let node = new Node(element);

    // if list is empty, the new node is at the head
    if (this.head === null) {
      this.head = node;
      this.size++;
      return this;
    }

    // iterate through the list to the last node
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = node; // add node
    this.size++;
    return this;
  }

  // insert new element at the position index of the list
  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      let currentNode = this.head;
      let previousNode;
      let i = 0;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        // find the node just before the index
        while (i < index) {
          i++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        // add the new element
        node.next = currentNode;
        previousNode.next = node;
      }
      this.size++;
    }
  }

  // remove the node from specific index and return its data
  removeFrom(index) {
    // if list is empty return false
    if (index > 0 && index > this.size) {
      return null;
    } else if (index === 0) {
      this.head = this.head.next
    } else {
      let currentNode = this.head;
      let previousNode;
      let i = 0;
      while (i < index) {
        i++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next; // remove current node
      this.size--;
      return currentNode.data; // return removed node data.
    }
  }

  // remove the nodes that contain data=element from the list
  removeElement(element) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.data === element) {
        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        this.size--;
      }
      previousNode = currentNode;
      currentNode = currentNode.next
    }
    return this;
  }

  // return the index of a given element, if element is in the list
  indexOf(element) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === element) {
        return count;
      }
      count++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  isEmpty() {
    return (this.size === 0);
  }

  // print the content of the list
  printList() {
    if (this.isEmpty()) {
      console.log(`Empty List`);
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        process.stdout.write(String(currentNode.data));
        process.stdout.write(` -> `);
        currentNode = currentNode.next;
      }
      console.log(`null`);
    }
  }

  getHead() {
    console.log(this.head)
    return this.head;
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

  // search element in List, return true if list contains the element
  search(element) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === element) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

// export default LinkedList


// const list = new LinkedList([1,2,3,4]);
// list.printList();