const { app, BrowserWindow } = require("electron");

function createWindow() {
  const windows = new BrowserWindow({
    height: 800,
    width: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  windows.loadFile("index.html");
}

app.whenReady().then(createWindow);
