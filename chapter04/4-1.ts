{
  class NODE {
    constructor(data: string) {
      this.data = data;
    }
    data: string;
    isMarked = false;
    adjacentList: NODE[] = [];
  }
  class Graph {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    isInterlinked(nodeA: NODE, nodeB: NODE): boolean {
      const A2B = this.interLinkCheck(nodeA, nodeB);
      const B2A = !A2B ? this.interLinkCheck(nodeB, nodeA) : false;
      return A2B || B2A;
    }
    private interLinkCheck(start: NODE, end: NODE) {
      const queue: NODE[] = [];
      const list: NODE[] = [];
      start.isMarked = true;
      queue.push(start);
      list.push(start);
      let isInter = false;
      while(queue.length) {
        const current = queue.shift();
        if (current === end) {
          isInter = true;
          break;
        }
        if (current.adjacentList.length) {
          current.adjacentList.forEach(n => {
            if (!n.isMarked) {
              n.isMarked = true;
              queue.push(n);
              list.push(n);
            }
          });
        }
      }
      if (!isInter) {
        list.forEach(node => node.isMarked = false);
      }
      return isInter;
    }
  }
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  a.adjacentList.push(b);
  b.adjacentList.push(c);
  c.adjacentList.push(d);
  d.adjacentList.push(e);
  const graph = new Graph(a);
  console.log(graph.isInterlinked(d, b));
}