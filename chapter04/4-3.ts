{
  class NODE {
    constructor(data: string) {
      this.data = data;
    }
    data: string;
    left: NODE;
    right: NODE;
    level = 0;
  }
  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    getBFSList(node: NODE = this.root): string[][] {
      let queue: NODE[] = [];
      let list: string[][] = [];
      queue.push(node);
      while (queue.length) {
        let current = queue.shift();
        if (!list[current.level]) {
          list[current.level] = [];
        }
        list[current.level].push(current.data);
        if (current.left) {
          current.left.level = current.level + 1;
          queue.push(current.left);
        }
        if (current.right) {
          current.right.level = current.level + 1;
          queue.push(current.right);
        }
      }
      return list;
    }
  }

  //       a
  //    b     c
  //  d   e    f
  //     g    h
  //   i
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  const g = new NODE('g');
  const h = new NODE('h');
  const i = new NODE('i');
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  e.left = g;
  g.left = i;
  c.right = f;
  f.left = h;
  const tree = new Tree(a);
  console.log(tree.getBFSList());

}