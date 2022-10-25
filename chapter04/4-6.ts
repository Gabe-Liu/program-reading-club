{
  class NODE {
    constructor(data: string) {
      this.data = data;
    }
    data: string;
    left: NODE;
    right: NODE;
    parent: NODE;
  }
  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    inOrderTraversal() {
      const temp = [];
      const stack = [];
      let node = this.root;

      while (node || stack.length) {
        while (node) {
          stack.push(node);
          node = node.left;
        }

        node = stack.pop();
        temp.push(node.data);

        node = node.right;
      }
      return temp;
    }

    getNext(node: NODE): NODE {
      const isLeaf = !node.left && !node.right;
      const isLeft = node.parent && node.parent.left === node;
      let next: NODE;
      if (isLeaf) {
        if (isLeft) {
          next = node.parent;
        } else {
          let n = node;
          while(n.parent.left !== n) {
            n = n.parent;
          }
          next = n.parent;
        }
      } else {
        if (node.right) {
          let n = node.right;
          while(n.left) {
            n = n.left;
          }
          next = n;
        } else {
          next = node.parent;
        }
      }
      return next;
    }
  }
  //        a
  //    b       c
  // d    e        g
  //h  
  // 
  // [h, d, b, e, a, c, g]
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  // const f = new NODE('f');
  const g = new NODE('g');
  const h = new NODE('h');
  // const i = new NODE('i');
  // const j = new NODE('j');
  // const k = new NODE('k');
  a.left = b;
  b.parent = a;
  a.right = c;
  c.parent = a;
  b.left = d;
  d.parent = b;
  b.right = e;
  e.parent = b;
  // c.left = f;
  // f.parent = c;
  c.right = g;
  g.parent = c;
  d.left = h;
  h.parent = d;
  // d.right = i;
  // i.parent = d;
  // f.left = j;
  // j.parent = f;
  // f.right = k;
  // k.parent = f;
  const tree = new Tree(a);
  console.log(tree.inOrderTraversal())
  console.log(tree.getNext(e).data);

}