class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    } else {
      let currentNode = this.root;
      do {
        if (currentNode.value === value) {
          return currentNode;
        } else if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        }
      } while (currentNode !== null);
      return null;
    }
  }

  //remove(){}
}

const tree = new BinarySearchTree();

//   9
// 4   10
//1 6 25 170

tree.insert(9);
tree.insert(4);
tree.insert(5);
tree.insert(1);
tree.insert(20);
tree.insert(170);
tree.insert(10);

console.log(tree.lookup(4));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
