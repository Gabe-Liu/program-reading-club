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
      
      // 尋找中間節點
      let fast = list.head;
      let slow = list.head;
      // 製作倒序
      const newList = new SinglyLinked()
      while(fast && fast.next) {
        fast = fast.next.next;
        // console.log('insert', slow.val)
        newList.unshift(slow.val);
        slow = slow.next;
      }
      // console.log('slow', slow)
      // 從current開始往後檢查，
      let isPalindrome = true;
      let prev = newList.head;
      let current = fast ? slow.next : slow;
      while(current) {
        // console.log(current.val, prev.val)
        if (current.val !== prev.val) {
          isPalindrome = false;
          return false;
        }
        prev = prev.next;
        current = current.next;
      }
      return isPalindrome;
    }
  }

  const singly = new SinglyLinked();
  singly.push('a');
  singly.push('b');
  singly.push('c');
  singly.push('b');
  singly.push('a');
  console.log(SinglyLinked.isPalindrome(singly))
}