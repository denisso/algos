class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.compactThreshold = 1000;
  }
  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const value = this.queue[this.head];
    this.head++;
    if (this.head >= this.compactThreshold) {
      this.compact();
    }
    return value;
  }
  compact() {
    this.queue = this.queue.slice(this.head, this.tail);
    this.tail = this.tail - this.head;
    this.head = 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.queue[this.head];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  size() {
    return this.tail - this.head;
  }
  [Symbol.iterator]() {
    let current = this.head;
    const tail = this.tail;
    const queue = this.queue;
    return {
      next() {
        if (current < tail) {
          return { value: queue[current++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
