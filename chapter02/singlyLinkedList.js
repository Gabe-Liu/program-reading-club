class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {//預設值設定
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //新增結點
  push(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //刪除最後節點
  pop() {
    if (!this.tail) {
      return undefined;
    } else {
      // 取得倒數第二個
      const prev = this.get(this.length - 2);
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    // return this;
  }
  //刪除第一個節點
  shift() {
    let currentHead;
    if (!this.head) {
      return undefined;
    } else {
      currentHead = this.head;
      this.head = this.currentHead.next;
    }
    this.length--;
    return currentHead;
  }
  //新增第一節點
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    // return this;
  }
  //取得節點
  get(index) {
    if (index >= this.length) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current === index) {
        break;
      }
      current = current.next;
    }
    return current;
  }
  //設置任一節點的值
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  //將節點插入任一處
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    // 加在最前方
    if (index === 0) {
      return this.unshift(val);
    }
    // 加在最後方
    if (index === this.length) {
      return this.push(val);
    }
    //找到前一節點指向新節點,並令新節點的下一節點為temp
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return newNode;
  }
  //移除任一節點
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    // 刪除第一個
    if (index === 0) {
      return this.shift();
    }
    // 刪除最後一個
    if (index === this.length - 1) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const removeNode = prev.next;
    prev.next = removeNode.next;
    this.length--;
    return removeNode;
  }
}

// https://break0344.medium.com/data-structures-and-algorithms-4-linked-list-343b1a20d2e2