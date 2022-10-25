{
  class NODE {
    constructor(value: string) {
      this.value = value;
      this.next = null;
    }
    value: string;
    next: NODE = null;
  }

  class Stack {
    constructor() {}

    private top: NODE;
    size = 0;

    pop(): NODE {
      if (this.top) {
        const item = this.top;
        this.top = item.next;
        this.size--;
        return item;
      } else {
        return null;
      }
    }
    push(value: string): Stack {
      const node = new NODE(value);
      if (!this.top) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
      this.size++;
      return this;
    }
    peak(): NODE {
      if (this.top) {
        return this.top;
      } else {
        return null;
      }
    }
    isEmpty(): boolean {
      return this.top === null;
    }
  }

  const stack = new Stack();
  stack.push('a').push('b').push('c');
}
