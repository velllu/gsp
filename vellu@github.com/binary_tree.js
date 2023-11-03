class BinaryTree {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.left === null) {
      this.left = new BinaryTree(data);
    } else if (this.right == null) {
      this.right = new BinaryTree(data);
    } else {
      this.left.insert(data);
    }
  }
}
