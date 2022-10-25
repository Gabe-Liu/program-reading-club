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
    push(node: NODE) {
      if (!this.tail) {
        this.tail = node;
        this.head = node
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
    pushList(list: NODE[]) {
      list.forEach(node => {
        this.push(node);
      })
    }
    static getLoopNode(list: SinglyLinked): NODE {
      let item = list.head;
      const arr: NODE[] = [];
      while(item) {
        if (arr.includes(item)) {
          return item;
        }
        arr.push(item);
        item = item.next;
      }
      return null;
    }
  }

  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const singly = new SinglyLinked();
  singly.pushList([a, b, c, d, e, c]);
  console.log(SinglyLinked.getLoopNode(singly));
}