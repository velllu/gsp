const Main = imports.ui.main;

function tile(windows) {
  windows.forEach((window) => {
    const monitor = Main.layoutManager.primaryMonitor;

    window.move_resize_frame(false, 0, 0, monitor.width, monitor.height);
  });
}
