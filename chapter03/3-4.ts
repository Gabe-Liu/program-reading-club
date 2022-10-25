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

    private top: NODE = null;
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
    push(node: NODE): Stack {
      if (!this.top) {
        this.top = node;
        node.next = null;
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

  class MyQueue {
    constructor() {

    }
    stack1 = new Stack();
    stack2 = new Stack();

    add(node: NODE) {
      this.moveToStack1();
      this.stack1.push(node);
      return this;
    }
    peak(): NODE {
      this.moveToStack2();
      return this.stack2.peak();
    }
    remove(): NODE {
      this.moveToStack2();
      return this.stack2.pop();
    }
    moveToStack2() {
      if (!this.stack1.isEmpty()) {
        while(!this.stack1.isEmpty()) {
          this.stack2.push(this.stack1.pop())
        }
      }
    }
    moveToStack1() {
      if (!this.stack2.isEmpty()) {
        while(!this.stack2.isEmpty()) {
          this.stack1.push(this.stack2.pop())
        }
      }
    }
  }

  const myQueue = new MyQueue();
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  myQueue.add(a).add(b).add(c);
  myQueue.remove()
  myQueue.add(d)
  myQueue.add(e)
  myQueue.remove()
  myQueue.remove()
  myQueue.remove()
  myQueue.add(f)
  // myQueue.peak()

  // const stack = new Stack();
  // stack.push('a').push('b').push('c');
  console.log(myQueue.peak())
}
