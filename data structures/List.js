
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return () => {
        this.delete(node);
      };
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    return () => {
      if (!node) return;
      this.delete(node);
      node = null;
    };
  }
  pushAfter(value, after) {
    if (!this.length || !after) return;
    let node = new Node(value);
    node.prev = after;
    node.next = after.next;
    if (after.next) after.next.prev = node;
    after.next = node;
    if (after === this.tail) this.tail = node;
    this.length++;
  }
  pushBefore(value, before) {
    if (!this.length || !before) return;
    let node = new Node(value);
    node.prev = before.prev;
    if (before.prev) before.prev.next = node;
    node.next = before;
    before.prev = node;
    if (before === this.head) this.head = node;
    this.length++;
  }
  delete(node) {
    if (!this.length || !node) return;
    this.length--;

    if (node === this.head) {
      this.head = node.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return;
    }

    if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) this.tail.next = null;
    } else {
      node.prev.next = node.next;
      if (node.next) node.next.prev = node.prev;
    }
  }
}
