{
  class NODE {
    constructor(value: string) {
      this.value = value;
    }
    value: string;
    next: NODE = null;;
  }

  class Queue {
    constructor() {

    }

    private first: NODE;
    private last: NODE;
    size = 0;

    add(value: string): Queue {
      const node = new NODE(value);
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      this.size++;
      return this;
    }
    remove(): NODE {
      if (this.first) {
        const itme = this.first;
        this.first = this.first.next;
        this.size--;
        return itme;
      } else {
        return null;
      }
    }
    peek(): NODE {
      return this.first || null;
    }
    isEmpty(): boolean {
      return this.first === null;
    }
  }

  const queue = new Queue();
  queue.add('a').add('b').add('c');

  console.log('isEmpty',queue.isEmpty())
  console.log('remove',queue.remove())
  console.log('remove',queue.remove())
  console.log('remove',queue.remove())
  console.log('isEmpty',queue.isEmpty())
}