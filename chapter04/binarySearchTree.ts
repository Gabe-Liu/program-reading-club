// https://chupai.github.io/posts/2006/ds_binary_search_tree/
{
  class BTNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
    data: number;
    left: BTNode;
    right: BTNode;
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    root: BTNode;
    // methods
    search(data, node = this.root) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        return this.search(data, node.left);
      }
      return this.search(data, node.right);
    }

    insert(data) {
      const insertHelper = (node) => {
        const curNode = node;
        if (data < curNode.data) {
          if (curNode.left) {
            insertHelper(curNode.left);
          } else {
            curNode.left = new BTNode(data);
          }
        } else if (data > curNode.data) {
          if (curNode.right) {
            insertHelper(curNode.right);
          } else {
            curNode.right = new BTNode(data);
          }
        }
      };

      if (!this.root) {
        this.root = new BTNode(data);
      } else {
        insertHelper(this.root);
      }
    }

    findMin(node = this.root) {
      let currentNode = node;
      while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
      }
      return currentNode;
    }

    findMax(node = this.root) {
      let currentNode = node;
      while (currentNode && currentNode.right) {
        currentNode = currentNode.right;
      }
      return currentNode;
    }

    remove(data) {
      const removeNode = (data, node) => {
        const curNode = node;
        // 1
        if (!curNode) {
          return false;
        }
        // 2
        if (data < curNode.data) {
          curNode.left = removeNode(data, curNode.left);
          // 3
        } else if (data > curNode.data) {
          curNode.right = removeNode(data, curNode.right);
          // 4
        } else {
          // 4.1
          if (!curNode.left && !curNode.right) {
            return null;
          }
          // 4.2
          if (!curNode.left) {
            return curNode.right;
          }
          if (!curNode.right) {
            return curNode.left;
          }
          // 4.3
          const aux = this.findMin(curNode.right);
          curNode.data = aux.data;
          curNode.right = removeNode(aux.data, curNode.right);
        }
        return curNode;
      };
      this.root = removeNode(data, this.root);
    }

    preOrderTraversal() {
      const temp = [];
      const stack = [];

      if (this.root) {
        stack.push(this.root);
      }

      while (stack.length) {
        const node = stack.pop();
        temp.push(node.data);

        if (node.right) {
          stack.push(node.right);
        }

        if (node.left) {
          stack.push(node.left);
        }
      }
      return temp;
    }

    inOrderTraversal() {
      const temp = [];
      const stack = [];
      let node = this.root;

      while (node || stack.length) {
        while (node) {
          stack.push(node);
          node = node.left;
        }

        node = stack.pop();
        temp.push(node.data);

        node = node.right;
      }
      return temp;
    }

    postOrderTraversal() {
      const temp = [];
      const stack = [];

      if (this.root) {
        stack.push(this.root);
      }

      while (stack.length) {
        const node = stack.pop();
        temp.push(node.data);
        if (node.left) {
          stack.push(node.left);
        }
        if (node.right) {
          stack.push(node.right);
        }
      }
      return temp.reverse();
    }

    levelorderTraversal() {
      // const temp = [];
      // const queue = [];
      
      // if (this.root) {
      //   queue.push(this.root);
      // }
      
      // while(queue.length) {
      //   const node = queue.shift();
      //   temp.push(node.data);
      //   if(node.left) {
      //     queue.push(node.left);
      //   }
      //   if(node.right) {
      //     queue.push(node.right);
      //   }
      // }
      // return temp;

      const temp = [];
      const queue = [];
  
      if (this.root) {
        queue.push(this.root);
      }
  
      while (queue.length) {
        const subTemp = [];
        const len = queue.length;
  
        for (let i = 0; i < len; i += 1) {
          const node = queue.shift();
          subTemp.push(node.data);
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
  
        temp.push(subTemp);
      }
      return temp;
    }
  }

  const nums = [10, 5, 4, 8, 6, 9, 15, 12, 16];

  const BST = new BinarySearchTree();
  for (const data of nums) {
    BST.insert(data);
  }

  console.log(BST.preOrderTraversal());
  // [ 10, 5, 4, 8, 6, 9, 15, 12, 16 ] 

  console.log(BST.inOrderTraversal());
  // [ 4, 5, 6, 8, 9, 10, 12, 15, 16 ]  

  console.log(BST.postOrderTraversal());
  // [ 4, 6, 9, 8, 5, 12, 16, 15, 10 ] 

  console.log(BST.levelorderTraversal());
}