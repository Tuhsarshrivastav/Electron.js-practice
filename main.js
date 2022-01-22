const { app, BrowserWindow } = require("electron");

function createWindow() {
  const windows = new BrowserWindow({
    height: 800,
    width: 600,
    // frame: false,
    // backgroundColor: "#888",
    // title: "trying electron",
    // alwaysOnTop: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  let child = new BrowserWindow({ parent: windows });
  child.loadFile("index.html");
  windows.loadFile("child.html");
  windows.webContents.openDevTools();
}

app.whenReady().then(createWindow);
