{
  class NODE {
    constructor(data: string) {
      this.data = data;
    }
    data: string;
    left: NODE;
    right: NODE;
  }

  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    findParent(nodeA: NODE, nodeB: NODE, root = this.root) {
      // 其中一個node等於root時，代表目前root是parent
      if (nodeA === root || nodeB === root) {
        return root;
      }
      const AisInLeft = this.includes(root.left, nodeA);
      const BisInleft = this.includes(root.left, nodeB);
      // console.log(AisInLeft, BisInleft)
      // 不同邊時，root就是parent
      if (AisInLeft !== BisInleft) {
        return root;
      }
      const branchTree = AisInLeft ? root.left : root.right;
      return this.findParent(nodeA, nodeB, branchTree);
    }

    includes(branchNode: NODE, node: NODE) {
      if (branchNode === node) {
        return true;
      }
      if (!branchNode) {
        return false;
      }
      return this.includes(branchNode.left, node) || this.includes(branchNode.right, node);
    }
  }

  //      a
  //   b     c
  // d   e      f
  //       g
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  const g = new NODE('g');
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  e.right = g;
  c.right = f;
  const tree = new Tree(a);
  console.log('parent' ,tree.findParent(c, e).data);
}