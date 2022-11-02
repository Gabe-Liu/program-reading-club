{
  class NODE {
    constructor(data: number) {
      this.data = data;
    }
    data: number;
    left: NODE;
    right: NODE;
    size = 1;

    // addNode(num: number) {
    //   if (num < this.data) {
    //     if (!this.left) {
    //       this.left = new NODE(num);
    //     } else {
    //       this.left.addNode(num);
    //     }
    //   } else {
    //     if (!this.right) {
    //       this.right = new NODE(num);
    //     } else {
    //       this.right.addNode(num);
    //     }
    //   }
    //   this.size++;
    // }
  }

  class Tree {
    constructor(root: NODE) {
      this.root = root;
    }
    root: NODE;

    addNode(num: number, node = this.root) {
      if (num < node.data) {
        if (!node.left) {
          node.left = new NODE(num);
        } else {
          this.addNode(num, node.left);
        }
      } else {
        if (!node.right) {
          node.right = new NODE(num);
        } else {
          this.addNode(num, node.right);
        }
      }
      node.size++;
    }

    getRandomNode(node = this.root): NODE {
      const leftSize = node.left ? node.left.size : 0;
      const random = Math.floor(Math.random() * node.size);
      // console.log('random', random)
      if (random < leftSize) {
        return this.getRandomNode(node.left);
      } else if (random === leftSize) {
        return node;
      } else {
        return this.getRandomNode(node.right);
      }
    }
  }

  const node = new NODE(3);
  const tree = new Tree(node);
  tree.addNode(2);
  tree.addNode(1);
  tree.addNode(4);
  tree.addNode(5);
  console.log(tree.root)
  console.log(tree.getRandomNode().data)
}