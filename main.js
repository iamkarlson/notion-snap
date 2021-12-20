const { app, BrowserWindow } = require("electron");

function postConfigure(window) {
    window.webContents.on("will-navigate", function (event, reqUrl) {
        alert('will-navigate');
        let requestedHost = new URL(reqUrl).host;
        let currentHost = new URL(window.webContents.getURL()).host;
        if (requestedHost && requestedHost != currentHost) {
            event.preventDefault();
            shell.openExternal(reqUrl);
        }
    });
}

app.on("ready", () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        icon: __dirname + '/notion.ico',
    });
    win.maximize();
    win.loadURL("https://notion.so");
    alert('ready')
    postConfigure(win);

});
