{
  class NODE {
    constructor(val: string) {
      this.val = val;
      this.next = null;
    }
    val: string;
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
    push(val: string) {
      const newNode = new NODE(val);
      if (!this.tail) {
        this.tail = newNode;
        this.head = newNode
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    // 刪除中間項目 => 把Ｃ的內容替換成Ｄ
    static deleteMiddle(node: NODE) {
      node.val = node.next.val;
      node.next = node.next.next;
    }
  }

  const singly = new SinglyLinked();
  singly.push('a');
  singly.push('b');
  singly.push('c');
  singly.push('d');
  singly.push('e');
  console.log('before', singly.head)
  SinglyLinked.deleteMiddle(singly.head.next.next)
  console.log('after', singly.head)
}