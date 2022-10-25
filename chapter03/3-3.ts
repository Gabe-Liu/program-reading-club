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
    constructor() { }

    private top: NODE;
    size = 0;
    next: Stack;

    pop(): NODE {
      if (this.top) {
        const item = this.top;
        this.top = item.next;
        item.next = null; // next清除 避免循環
        this.size--;
        return item;
      } else {
        return null;
      }
    }
    push(value: string): Stack {
      const node = new NODE(value)
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
    getArray(): number[] {
      const arr = [];
      let item = this.top;
      while (item) {
        arr.push(item.value);
        item = item.next;
      }
      return arr;
    }
  }

  class SetOfStacks {
    constructor(max: number) {
      this.max = max
    }
    first: Stack;
    last: Stack;
    max: number;

    push(value: string): SetOfStacks {
      // 尚未建立過last
      if (!this.first) {
        this.first = this.last = new Stack();
      }
      // 超過上限就要新建stack
      if (this.last.size === this.max) {
        const stack = new Stack();
        this.last.next = stack;
        this.last = stack;
      }
      this.last.push(value);
      return this;
    }
    pop(): NODE {
      if (this.last && this.first.size) {
        const popItem = this.last.pop();
        // 已經移除空了
        if (this.last.size === 0) {
          let stack = this.first;
          while (stack.next?.size) {
            stack = stack.next;
          }
          this.last = stack
        }
        return popItem;
      } else {
        return null;
      }
    }
    popAt(index: number) {
      let i = 0;
      let stack: Stack;
      while (i <= index) {
        stack = stack ? stack.next : this.first;
        i++;
      }
      const popItem = stack.pop();
      // 項目往前移動
      let move = stack.next;
      let current = stack;
      while (move) {
        const tempStack = new Stack();
        while (move.peak()) {
          tempStack.push(move.pop().value);
        }
        current.push(tempStack.pop().value);
        while (tempStack.peak()) {
          move.push(tempStack.pop().value);
        }

        // 最後一個被移走時,size為0,調整last值
        if (!move.size) {
          this.last = current;
          this.last.next = null;
        }

        current = move;
        move = move.next;
      }
      return popItem;
    }
    getArray() {
      let arr = [];
      let stack = this.first;
      while (stack) {
        arr.push(stack.getArray())
        stack = stack.next;
      }
      return arr;
    }
  }

  const setOfStacks = new SetOfStacks(2);
  setOfStacks.push('a').push('b').push('c').push('d').push('e');
  setOfStacks.popAt(1);
  console.log(setOfStacks.getArray())
  // console.log(setOfStacks.pop());
  // console.log(setOfStacks.pop());
}
