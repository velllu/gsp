class Node {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.left === null) {
      this.left = new Node(data);
    } else if (this.right == null) {
      this.right = new Node(data);
    } else {
      this.left.insert(data);
    }
  }
}
