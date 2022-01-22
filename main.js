const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");
let win;
function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });
  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    height: mainWindowState.height,
    width: mainWindowState.width,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
  mainWindowState.manage(win);
}

app.whenReady().then(createWindow);
