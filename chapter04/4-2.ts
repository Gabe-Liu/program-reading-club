{
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

    static setBSTTree(list: number[]): Tree {
      let node = this.getMiddle(0, list.length - 1, list);
      return new Tree(node);
    }

    static getMiddle(start: number, end: number, list: number[]): NODE {
      console.log(start, end)
      if (end < start) {
        return null;
      }
      const middle = Math.ceil((start + end) / 2); // 處理偶數陣列
      const node = new NODE(list[middle]);
      node.left = this.getMiddle(start, middle - 1, list); // -1 跳脫中間數
      node.right = this.getMiddle(middle + 1, end, list); // +1 跳脫中間數
      return node;
    }
  }

  const list = [4, 8, 12, 20, 22, 30, 40];
  const BSTTree = Tree.setBSTTree(list);
  console.log(BSTTree.root)
  //      20
  //   8      30
  // 4  12  22  40

  // 
  //      22
  //   12     40
  // 8  20  30  
  // const list = [8, 12, 20, 22, 30, 40];
  // const BSTTree = Tree.setBSTTree(list);
  // console.log(BSTTree)

}