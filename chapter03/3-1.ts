{
  class NODE {
    constructor(index: number, value: string) {
      this.index = index;
      this.value = value;
      this.next = null;
    }
    index: number;
    value: string;
    next: NODE = null;
  }

  class Stack {
    constructor(init: number, list: NODE[]) {
      this.init = init;
      this.list = list;
    }

    private list: NODE[];
    private top: NODE;
    size = 0;
    init = 0
    private offset = 3;

    pop(): NODE {
      if (this.top) {
        const item = this.top;
        this.top = item.next;
        this.size--;
        // 從陣列中移除
        list.splice(item.index, 1);
        return item;
      } else {
        return null;
      }
    }
    push(value: string): Stack {
      const node = new NODE(this.init + this.offset * this.size ,value);
      if (!this.top) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
      this.size++;
      // 添加到陣列
      this.list[node.index] = node;
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
      while(item) {
        arr.push(item.value);
        item = item.next;
      }
      return arr;
    }
  }

  const list: NODE[] = [];
  const stack1 = new Stack(0, list);
  stack1.push('a1').push('a2').push('a3');
  const stack2 = new Stack(1, list);
  stack2.push('b1').push('b2').push('b3');
  const stack3 = new Stack(2, list);
  stack3.push('c1').push('c2').push('c3');
  
  stack1.pop();
  stack2.push('b4')
  stack3.pop();
  stack3.pop();
  stack3.push('c4').push('c5')
  const valueList = list.map(item => item.value);
  console.log(valueList)
  console.log(stack1.getArray())
  console.log(stack2.getArray())
  console.log(stack3.getArray())
}
