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
    // calcTimes(goal: number, root = this.root) {
    calcTimes(goal: number, root: NODE) {
      if (!root) {
        return 0;
      }
      // console.log(root.data)
      const rootTimes = this.count(root, goal, 0, []);
      const leftTimes = this.calcTimes(goal, root.left);
      const rightTimes = this.calcTimes(goal, root.right);
      // console.log( rootTimes)
      return rootTimes + leftTimes + rightTimes;
    }
    count(node: NODE, goal: number, total: number, list = []) {
      if (!node) {
        return 0;
      }
      total += node.data;
      list.push(node.data);
      let times = 0;
      if (total === goal) {
        times++;
        console.log(list)
      }
      times += this.count(node.left, goal, total, [...list]);
      times += this.count(node.right, goal, total, [...list]);
      return times;
    }
  }
  //         1a
  //      4b     -1c
  //   5d   -1e  4f    3g
  //-7h          
  // 求幾個3: 5;
  const a = new NODE(1);
  const b = new NODE(4);
  const c = new NODE(-1);
  const d = new NODE(5);
  const e = new NODE(-1);
  const f = new NODE(4);
  const g = new NODE(3);
  const h = new NODE(-7);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  d.left = h;
  const tree = new Tree(a);
  console.log(tree.calcTimes(3, tree.root));
  
}