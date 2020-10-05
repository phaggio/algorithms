class Node {
  constructor(data) {
    this.data = (data === undefined ? null : data);
    this.next = null;
  }
}

class Queue {
  constructor(firstElement) {
    this.front = firstElement === undefined ? null : new Node(firstElement);
    this.back = firstElement === undefined ? null : new Node(firstElement);
    this.size = firstElement === undefined ? 0 : 1;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.front.data;
    };
  }

  size() {
    return this.size;
  }

  enqueue(data) {
    if (this.isEmpty()) {
      this.front = new Node(data);
      this.back = new Node(data);
    } else {
      this.back.next = new Node(data);
      this.back = this.back.next;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    let data = this.front.data;
    // if this.front is the last node in the list, also set its back to null
    if (this.front.next === null) this.back = this.back.next;
    this.front = this.front.next
    this.size--;
    return data;
  }

}

export default Queue