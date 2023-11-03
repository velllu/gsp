const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const extension = ExtensionUtils.getCurrentExtension();
// var { BinaryTree } = extension.imports.binary_tree;
var BinaryTree = class BinaryTree {};

function tile(windows) {
  let tree = new BinaryTree(windows[0]);

  for (let i = 1; i < windows.length; i++) {
    tree.insert(windows[i]);
  }
}
