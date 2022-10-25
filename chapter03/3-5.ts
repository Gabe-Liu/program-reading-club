{
  class NODE {
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
    value: number;
    next: NODE = null;
  }

  class Stack {
    constructor() { }

    private top: NODE;
    size = 0;

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
    push(node: NODE): Stack {
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
    sort(): void {
      const tempStack = new Stack();
      while(this.top) {
        const popItem = this.pop();
        if (tempStack.top && tempStack.top.value < popItem.value) {
          // 存最後移回去的NODE
          let lastNode: NODE;
          // 把tempStack小於popItem值到移回去原本stack
          while(tempStack.top && tempStack.top.value < popItem.value) {
            const tempLastNode = tempStack.pop();
            lastNode = tempLastNode;
            this.push(tempLastNode);
          }
          // 把popItem新增至tempStack
          tempStack.push(popItem);
          // 把原本移到stack項目再移回到tempStack
          while(this.top && this.top.value <= lastNode.value) {
            tempStack.push(this.pop());
          }
        } else {
          tempStack.push(popItem);
        }
      }
      this.top = tempStack.top;
    }
    getArray(): number[] {
      const arr = [];
      let item = this.top;
      while(item) {
        arr.push(item.value);
        item = item.next;
      }
      return arr;
    }
  }

  const stack = new Stack();
  const a = new NODE(3);
  const b = new NODE(2);
  const c = new NODE(9);
  const d = new NODE(11);
  stack.push(a).push(b).push(c).push(d);
  stack.sort();
  console.log(stack.getArray())
}
