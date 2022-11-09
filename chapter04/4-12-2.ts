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

    calcTimes(goal: number, node: NODE) {
      return this.count(goal, node, 0, {});
    }

    count(goal: number, node: NODE, runningSum: number, pathMap: { [key: number]: number }) {
      if (!node) {
        return 0;
      }
      runningSum += node.data;
      const sum = runningSum - goal;
      // 從pathMap找出前面節點總數和到目前節點總和的差是否滿足goal數
      let pathNum = pathMap[sum] || 0;
      console.log(node.data,runningSum, sum,  pathMap[sum])

      if (runningSum === goal) {
        pathNum++;
      }

      // 添加累積總和記錄到map
      this.addMap(runningSum, pathMap);
      // 深度搜尋
      pathNum += this.count(goal, node.left, runningSum, pathMap);
      pathNum += this.count(goal, node.right, runningSum, pathMap);
      // 移除累積總和記錄從map
      this.deleteMap(runningSum, pathMap);

      return pathNum;
    } 

    addMap(key: number, pathMap: { [key: number]: number }) {
      if (!pathMap[key]) {
        pathMap[key] = 1;
      } else {
        pathMap[key]++;
      }
    }

    deleteMap(key: number, pathMap: { [key: number]: number }) {
      pathMap[key]--;
    }
  }

// [ 1, 4, 5, -7 ]
// [ 1, -1, 3 ]
// [ 4, -1 ]
// [ -1, 4 ]
// [ 3 ]
// console.log(node.data,runningSum, sum,  pathMap[sum])
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