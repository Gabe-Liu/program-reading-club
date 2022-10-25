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

    getRandom(): NODE {
      const list = this.getList(this.root);
      return list[Math.floor(Math.random() * list.length)];
    }
    getList(node: NODE, list: NODE[] = []): NODE[] {
      if (node) {
        list.push(node);
      }
      if (node.left) {
        this.getList(node.left, list);
      }
      if (node.right) {
        this.getList(node.right, list);
      }
      return list;
    }
    // 尋找
    findNode(node: NODE, root = this.root): NODE {
      if (node === root) {
        return root;
      }
      if (root.left.data === node.data) {
        return root.left;
      }
      if (root.right.data === node.data) {
        return root.right;
      }
      return this.findNode(root.left, node) || this.findNode(root.right, node);
    }
    // 刪除 廣度優先搜尋
    remove() {
      const list = [this.root];
      const tempList = [];
      while (list.length) {
        const node = list.shift();
        tempList.push(node);
        if (node.left) {
          list.push(node.left);
        }
        if (node.right) {
          list.push(node.right);
        }
      }
      const removeNode = tempList[tempList.length - 1];
      const parentNode = tempList.find(t => t.left === removeNode || t.right === removeNode);
      parentNode[parentNode.right ? 'right' : 'left'] = null;
    }

    // 新增 廣度優先搜尋
    add(newNode: NODE) {
      const list = [this.root];
      while (list.length) {
        const node = list.shift();
        if (node.left) {
          list.push(node.left);
        } else {
          node.left = newNode;
          return;
        }
        if (node.right) {
          list.push(node.right);
        } else {
          node.right = newNode;
          return;
        }
      }
    }
  }

  //    a
  //  b   c
  //d  e    f
  //     g    h
  const a = new NODE('a');
  const b = new NODE('b');
  const c = new NODE('c');
  const d = new NODE('d');
  const e = new NODE('e');
  const f = new NODE('f');
  const g = new NODE('g');
  const h = new NODE('h');
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f
  e.right = g;
  f.right = h;
  const tree = new Tree(a);
  // console.log(tree.getRandom().data);
  // const k = new NODE('k');
  // tree.add(k);
  // console.log(tree.root)
  tree.remove();
  tree.remove();
  tree.remove();
  console.log(tree.root)
}