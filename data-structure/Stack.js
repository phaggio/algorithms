class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.top;
    }
  }

  pop() {
    if (this.items.length !== 0) {

      if (this.items.length === 1) {
        // once pop the last item in items arr, there's nothing in top.
        this.top = null;
        // return the last item in the items array
        return this.items.pop();
      } else {
        // the top is now the second to the last item in the items array.
        this.top = this.items[this.items.length - 2];
        // return the last item in the items array.
        return this.items.pop();
      }

    } else {
      return undefined;
    }
  }
  
}

export default Stack