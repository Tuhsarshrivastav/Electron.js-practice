const { app, BrowserWindow } = require("electron");

function createWindow() {
  const windows = new BrowserWindow({
    height: 800,
    width: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  windows.loadFile("index.html");
  windows.webContents.openDevTools();
}

app.whenReady().then(createWindow);
