import Node from "./Node.js";

class Tree {
  constructor(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sorted);
  }

  buildTree(sorted) {
    if (sorted.length === 0) return null;
    const mid = parseInt(sorted.length / 2);
    const root = new Node(sorted[mid], this.buildTree(sorted.slice(0, mid)), this.buildTree(sorted.slice(mid + 1)))
    return root;
  }

  #minValue(root) {
    let minv = root.key;
    while (root.left != null) {
      minv = root.left.key;
      root = root.left
    }

    return minv;
  }

  insert(value, root = this.root) {
    if (root === null) return new Node(value);
    if (root.key === value) return

    root.key < value 
      ? (root.right = this.insert(value, root.right))
      : (root.left = this.insert(value, root.left))
    return root;
  }

  delete(value, root = this.root) {
    if (root === null) return root;
    if (root.key < value) root.right = this.delete(value, root.right);
    else if (root.key > value) root.left = this.delete(value, root.left);
    else {
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;
      root.key = this.#minValue(root.right);
      root.right = this.delete(value, root.right);
    }

    return root;
  }

  find(value, root = this.root) {
    const node = root;
    if (node === null) return null;
    if (node.key !== value) {
      return node.key < value
        ? this.find(value, node.right)
        : this.find(value, node.left);
    }
    return node;
  }



  // END
}

// *** CHECKS *** 

let tree = new Tree([1, 2, 4, 3, 5, 6, 7]);
// console.log(tree.find(6));
console.log(tree.insert(8));
// console.log(tree.find(8));
console.log(tree.delete(2));

