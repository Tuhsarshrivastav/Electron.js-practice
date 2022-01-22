const { app, BrowserWindow } = require("electron");

function createWindow() {
  const windows = new BrowserWindow({
    height: 800,
    width: 600,
    // frame: false,
    // backgroundColor: "#888",
    // title: "trying electron",
    // alwaysOnTop: true,
    resizable:true
    webPreferences: {
      nodeIntegration: true,
    },
  });
  windows.loadFile("index.html");
  windows.webContents.openDevTools();
}

app.whenReady().then(createWindow);
