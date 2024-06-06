class Tree {
    constructor(array) {
        const sorted = [...array].sort((a, b) => a - b);
        
    }

    buildTree(sorted) {
        if (sorted.length === 0) return null;
        const mid = parseInt(sorted.length / 2);
        const root = new Node(sorted[mid], this.buildTree(sorted.slice(0, mid)), this.buildTree(sorted.slice(mid + 1)))
        return root;
    }

    insert(value, root = this.root) {
        let node = root;
        if (node === null) {
          node = new Node(value);
          return this.root;
        }
        return node.key < value
          ? this.insert(value, node.right)
          : this.insert(value, node.left);
        }
}

