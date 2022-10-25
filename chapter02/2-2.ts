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
    // 取得倒數第k
    static getTheListK(list: SinglyLinked, lastIndex: number) {
      let a = list.head;
      let aIndex = 0;
      // 先讓Ａ跑lastIndex次
      while (aIndex < lastIndex) {
        a = a.next;
        aIndex++;
      }
      // 跑第二次,直到Ａ不是null
      let lastK = list.head;
      while (a) {
        a = a.next;
        lastK = lastK.next;
      }
      return lastK;
    }
  }

  const singly = new SinglyLinked();
  singly.push('a');
  singly.push('b');
  singly.push('c');
  singly.push('d');
  singly.push('e');
  console.log(SinglyLinked.getTheListK(singly, 3))
  
}
// npx ts-node 2-1.ts