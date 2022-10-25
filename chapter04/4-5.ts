{
  enum TreeType {
    Left,
    Right
  }
  class NODE {
    constructor(data: number) {
      this.data = data;
    }
    data: number;
    left: NODE;
    right: NODE;
  }

  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    isBST(node: NODE, type: TreeType = null): boolean {
      if (!node) {
        return true;
      }

      // 若任意節點的左子樹不空，則左子樹上所有節點的值均小於它的根節點的值；
      // 若任意節點的右子樹不空，則右子樹上所有節點的值均大於它的根節點的值；
      // 任意節點的左、右子樹也分別為二元搜尋樹。
      const isRoot = node === this.root;
      const isleftValid = node.left
        ?
        node.left.data <= node.data &&
        (isRoot ? true : (type === TreeType.Left ? node.left.data < this.root.data : node.left.data > this.root.data))
        : true;
      const isRightValid = node.right
        ?
        node.right.data > node.data &&
        (isRoot ? true : (type === TreeType.Left ? node.right.data < this.root.data : node.right.data > this.root.data))
        : true;

      if (isleftValid && isRightValid) {
        if (!this.isBST(node.left, isRoot ? TreeType.Left : type)) {
          return false;
        }
        if (!this.isBST(node.right, isRoot ? TreeType.Right : type)) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
  }

  //     8
  //   4   10
  // 2  6    20
  // const n2 = new NODE(2);
  // const n4 = new NODE(4);
  // const n6 = new NODE(6);
  // const n8 = new NODE(8);
  // const n10 = new NODE(10);
  // const n20 = new NODE(20);
  // n8.left = n4;
  // n8.right = n10;
  // n4.left = n2;
  // n4.right = n6;
  // n10.right = n20;
  // const tree = new Tree(n8);
  // console.log(tree.isBST(tree.root));

  //     8
  //   4   10
  // 2  12    20
  const n2 = new NODE(2);
  const n4 = new NODE(4);
  const n12 = new NODE(12);
  const n8 = new NODE(8);
  const n10 = new NODE(10);
  const n20 = new NODE(20);
  n8.left = n4;
  n8.right = n10;
  n4.left = n2;
  n4.right = n12;
  n10.right = n20;
  const tree = new Tree(n8);
  console.log('isBST', tree.isBST(tree.root));
}