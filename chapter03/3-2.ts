{
  class NODE {
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
    value: number;
    next: NODE = null;
    min: number;
  }

  class Stack {
    constructor() {}

    private top: NODE;
    size = 0;

    min(): number {
      return this.top.min;
    }
    pop(): NODE {
      if (this.top) {
        const item = this.top;
        this.top = item.next;
        item.next = null
        this.size--;
        return item;
      } else {
        return null;
      }
    }
    push(value: number): Stack {
      const node = new NODE(value);
      if (!this.top) {
        this.top = node;
        this.top.min = node.value;
      } else {
        node.next = this.top;
        this.top = node;
        this.top.min = Math.min(this.top.next.value, node.value)
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
  stack.push(5).push(4).push(2).push(9);
  console.log(stack.min())
  stack.pop();
  console.log(stack.min())
  stack.pop();
  console.log(stack.min())
  stack.pop();
  console.log(stack.min())
}
