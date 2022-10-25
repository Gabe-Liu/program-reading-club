{
  class NODE {
    constructor(val: number) {
      this.val = val;
      this.next = null;
    }
    val: number;
    next: NODE;
  }

  class SinglyLinked {
    constructor() {//預設值設定
      this.head = null;
      this.tail = null;
    }
    head: NODE;
    tail: NODE;
    //新增結點
    push(val: number): NODE {
      const newNode = new NODE(val);
      if (!this.tail) {
        this.tail = newNode;
        this.head = newNode
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      return newNode;
    }
    //新增第一節點
    unshift(val: number) {
      const newNode = new NODE(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    // 加總 
    static calc(a: SinglyLinked, b: SinglyLinked): SinglyLinked {
      // 倒序排列
      const newA = new SinglyLinked();
      const newB = new SinglyLinked();
      let aaNode = a.head;
      let bbNode = b.head;
      while(aaNode || bbNode) {
        if (aaNode) {
          newA.unshift(aaNode?.val);
        } else {
          newA.push(0);
        }
        if (bbNode) {
          newB.unshift(bbNode?.val);
        } else {
          newB.push(0);
        }
        aaNode = aaNode?.next;
        bbNode = bbNode?.next;
      }

      // 開始
      let aNode = newA.head;
      let bNode = newB.head;
      const singlyLinked = new SinglyLinked();
      let carry = 0;
      while (aNode || bNode || carry) {
        let sum = (aNode?.val || 0) + (bNode?.val || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        const remainder = sum % 10;
        singlyLinked.push(remainder);
        aNode = aNode && aNode.next;
        bNode = bNode && bNode.next;
      }
      // 再倒序一次
      const newSinglyLinked = new SinglyLinked();
      let current = singlyLinked.head;
      while (current) {
        newSinglyLinked.unshift(current.val);
        current = current.next;
      }
      return newSinglyLinked;
    }
  }

  const singly1 = new SinglyLinked();
  singly1.push(6);
  singly1.push(1);
  singly1.push(7);
  const singly2 = new SinglyLinked();
  singly2.push(2);
  singly2.push(9);
  singly2.push(5);
  console.log(SinglyLinked.calc(singly1, singly2))
}