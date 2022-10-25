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
    // 刪除重複項目
    static deleteRepeat(list: SinglyLinked) {
      let current = list.head;
      let prev = current;
      const obj: { [key: string]: number } = {};
      while (current) {
        if (!obj[current.val]) {
          obj[current.val] = 1;
          prev = current;
        } else {
          prev.next = current.next;
        }
        current = current.next;
      }
    }
  }

  const singly = new SinglyLinked();
  singly.push('a');
  singly.push('b');
  singly.push('b');
  console.log('before', singly.head)
  SinglyLinked.deleteRepeat(singly)
  console.log('after', singly.head)
}
// npx ts-node 2-1.ts