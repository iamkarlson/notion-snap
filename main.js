const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow();
  win.maximize();
  win.loadURL("https://notion.so");
});
