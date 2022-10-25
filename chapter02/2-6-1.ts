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
    //新增第一節點
    unshift(val: string) {
      const newNode = new NODE(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    static isPalindrome(list: SinglyLinked): boolean {
      let isPalindrome = false;
      const reverseList = new SinglyLinked();
      let current = list.head;
      // 製作倒串鍊
      while (current) {
        reverseList.unshift(current.val);
        current = current.next;
      }
      // 比對
      let item1 = list.head;
      let item2 = reverseList.head;
      while (item1) {
        isPalindrome = item1.val === item2.val;
        item1 = item1.next;
        item2 = item2.next;
        if (!isPalindrome) {
          break;
        }
      }
      return isPalindrome;
    }
  }

  const singly = new SinglyLinked();
  singly.push('a');
  singly.push('b');
  singly.push('a');
  console.log(SinglyLinked.isPalindrome(singly))
}