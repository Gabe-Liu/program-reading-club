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

    static isChildTree(bigTree: Tree, smallTree: Tree) {
      const subTreeNode = this.findNode(bigTree.root, smallTree.root);

      // 前序歷遍
      const stackA = [];
      const stackB = [];

      stackA.push(subTreeNode);
      stackB.push(smallTree.root);

      while (stackA.length) {
        const nodeA = stackA.pop();
        const nodeB = stackB.pop();
        if (nodeA.data !== nodeB.data) {
          return false;
        }

        if (nodeA.right) {
          stackA.push(nodeA.right);
          stackB.push(nodeB.right);
        }
        if (nodeA.left) {
          stackA.push(nodeA.left);
          stackB.push(nodeB.left);
        }
      }
      return true;
    }
    static findNode(root: NODE, node: NODE): NODE {
      if (root.left.data === node.data) {
        return root.left;
      }
      if (root.right.data === node.data) {
        return root.right;
      }
      return this.findNode(root.left, node) || this.findNode(root.right, node);
    }
  }

  //      a
  //   b      c
  // d   e  f 
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  const treeA = new Tree(a);
  //   b2
  // e2   d2
  const b2 = new NODE('b');
  const e2 = new NODE('e');
  const d2 = new NODE('d');
  b2.left = e2;
  b2.right = d2;
  const treeB = new Tree(b2);
  console.log(Tree.isChildTree(treeA, treeB))
}