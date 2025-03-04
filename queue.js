class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // View the top element without removing it.
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    } else if (this.first === this.last) {
      return null;
    }

    const removeNode = this.first;
    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.dequeue();

myQueue.peek();
