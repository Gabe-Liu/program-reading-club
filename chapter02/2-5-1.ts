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
    push(val: number) {
      const newNode = new NODE(val);
      if (!this.tail) {
        this.tail = newNode;
        this.head = newNode
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    // 加總 
    static calc(a: SinglyLinked, b: SinglyLinked):SinglyLinked{
      let aNode = a.head;
      let bNode = b.head;
      const newSinglyLinked = new SinglyLinked();
      let carry = 0;
      while (aNode || bNode || carry) {
        let sum = (aNode?.val || 0) + (bNode?.val || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        const remainder = sum % 10;
        newSinglyLinked.push(remainder);
        aNode = aNode && aNode.next;
        bNode = bNode && bNode.next;
      }
      return newSinglyLinked
    }
  }

  const singly1 = new SinglyLinked();
  singly1.push(7);
  singly1.push(1);
  singly1.push(6);
  const singly2 = new SinglyLinked();
  singly2.push(5);
  singly2.push(9);
  singly2.push(2);

  console.log(SinglyLinked.calc(singly1, singly2).head)
}