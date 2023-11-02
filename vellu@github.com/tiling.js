const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const extension = ExtensionUtils.getCurrentExtension();
const { Node } = extension.imports.binary_tree;

function tile(windows) {
  let tree = Node(windows[0]);

  for (let i = 1; i < windows.lenght; i++) {
    // const monitor = Main.layoutManager.primaryMonitor;
    // windows[i].move_resize_frame(false, 0, 0, monitor.width, monitor.height);
    tree.insert(windows[i]);
  }

  Main.notify(tree);
}
