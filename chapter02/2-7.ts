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
        let current = node;
        while(current) {
          this.tail.next = current;
          this.tail = current;
          current = this.tail.next;
        }
      }
    }
    pushList(list: NODE[]) {
      list.forEach(node => {
        this.push(node);
      })
    }
    static isCross(list1: SinglyLinked, list2: SinglyLinked): boolean {
      // 先跑第一個陣列
      let item1 = list1.head;
      let arr: NODE[] = [];
      while(item1) {
        arr.push(item1);
        item1 = item1.next;
      }
      // 跑第二個陣列
      let item2 = list2.head;
      while(item2) {
        if (arr.includes(item2)) {
          return true;
        }
        item2 = item2.next;
      }
      return false;
    }
  }

  const a1 = new NODE('a1');
  const b1 = new NODE('b1');
  const a2 = new NODE('a2');
  const b2 = new NODE('b2');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  const g = new NODE('g');
  const singly1 = new SinglyLinked();
  singly1.pushList([a1, b1, c, d, e])
  const singly2 = new SinglyLinked();
  singly2.pushList([a2, b2, f, g, c])
  console.log(singly1)
  console.log(singly2)
  console.log(SinglyLinked.isCross(singly1,singly2))
}