class Node {
  constructor(data, next, prev) {
    this.data = data === undefined ? null : data;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  };
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };

  // clear current list
  clear() {
    let trav = this.head
    while (trav !== null) {
      let next = trav.next
      trav.prev = null;
      trav.next = null;
      trav.data = null;
      trav = next;
    };
    this.head = trav;
    this.tail = trav;
    this.size = 0;
  };

  // return current list size
  getSize() {
    return this.size;
  };

  // return bool
  isEmpty() {
    return this.size === 0;
  };

  // add new data to beginning of the list
  unshift(data) {
    if (this.isEmpty()) {
      this.head = this.tail = new Node(data, null, null);
    } else {
      this.head.prev = new Node(data, this.head, null);
      this.head = this.head.prev; // current head is now the new node
    };
    this.size++;
  };

  // add new data to the end of the list
  push(data) {
    if (this.isEmpty()) {
      this.head = this.tail = new Node(data, null, null);
    } else {
      this.tail.next = new Node(data, null, this.tail);
      this.tail = this.tail.next // current tail is now the new node
    };
    this.size++;
  };

  // remove and return the first data from the list
  shift() {
    let data = this.head.data;

    if (this.isEmpty) {
      return data; // this would be undefined
    } else {
      data = this.head.data;
      this.head = head.next;
    }
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    } else {
      this.head.prev = null;
    };
    return data;
  };

  // remove and return the last data from the list
  pop() {
    let data = this.tail.data;
    if (this.isEmpty()) {
      return data; // this would be undefined
    } else {
      this.tail = this.tail.prev;
      this.size--;
    };

    if (this.isEmpty()) {
      this.head = null;
    } else {
      this.tail.next = null;
    };

    return data;
  };

  // private method to remove a given node
  #remove(node) {
    if (node.prev === null) return this.shift(); // node is the head of the list
    if (node.next === null) return this.pop(); // node is the tail of the list
    node.next.prev = node.prev;
    node.prev.next = node.next;
    let data = node.data;
    node.data = null; // clear memory
    node = node.prev = node.next = null; // clear memory
    this.size--;
    return data;
  };

  removeAtIndex(index) {
    if (index < 0 || index >= this.size) throw new Error("no data at index");

    let trav;
    if (index <= ((this.size - 1) / 2).toFixed()) {
      trav = this.head;
      for (let i = 0; i !== index; ++i) { trav = trav.next; }
    } else {
      trav = this.tail;
      for (let i = this.size - 1; i !== index; --i) { trav = trav.prev; }
    };
    return this.#remove(trav);
  };

  // remove the first node whose data matches to arg
  remove(data) {
    let trav = this.head;
    if (data === null) {
      while (trav !== null) {
        if (trav.data === null) {
          this.#remove(trav);
          return true;
        }
      }
    } else {
      while (trav !== null) {
        if (trav.data === data) {
          this.#remove(trav);
          return true;
        }
      }
    }
    return false;
  }

  // return the first index of the data found in the Linked List
  indexOf(data) {
    let trav = this.head;
    let index = 0
    while (trav !== null) {
      if (trav.data === data) return index;
      trav = trav.next;
      index++;
    }
    return -1;
  }

  // return a string representation of the list
  toString() {
    if (this.isEmpty()) return "[]";
    if (this.size === 1) return "[ " + this.head.data + " ]";
    let string = "[ ";
    let trav = this.head;
    while (trav !== null) {
      if (trav !== this.tail) {
        string = string + trav.data + ", "
      } else {
        // no comma after last element
        string = string + trav.data
      }
      trav = trav.next;
    }
    string = string + " ]";
    return string;
  }

}




export default DoublyLinkedList