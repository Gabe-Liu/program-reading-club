{
  class NODE {
    constructor(data: number) {
      this.data = data
    }
    data: number;
    left = null;
    right = null;
  }

  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    // 節點高度 = max(左子節點高, 右子節點高) + 1
    // 子節點為 null 時，高度視為 -1。
    getNodeHeight(node: NODE) {
      if (!node) {
        return -1;
      }
      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    // 節點的平衡因子 = 左子樹的高度 - 右子樹的高度
    // 在 AVL-Tree 中，每一節點的平衡因子為 1、0 或 -1。帶有平衡因子 -2 或 2 的節點被認為是不平衡的，需要重新平衡。
    getBF(node: NODE) {
      return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    }

    isBF(node: NODE) {
      return  Math.abs(this.getBF(node)) <=1; 
    }
  }
  const a = new NODE(0);
  const b = new NODE(1);
  const c = new NODE(2);
  const d = new NODE(3);
  const e = new NODE(4);
  const f = new NODE(5);
  //    a
  //  b   c
  // d e f
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  const avlTree = new Tree(a);
  console.log(avlTree.isBF(a))

  //     a
  //   b    c
  //  d  e 
  // f
  // a.left = b;
  // a.right = c;
  // b.left = d;
  // b.right = e;
  // d.left = f;
  // const avlTree = new Tree(a);
  // console.log(avlTree.isBF(a))
}