const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
/*
const ElectronViewRenderer = require('electron-view-renderer');

const viewRenderer = new ElectronViewRenderer({
    viewPath: 'src/views',
    viewProtcolName: 'view',
    useAssets: true,
    assetsPath: 'src/assets',
    assetsProtocolName: 'asset',
})

viewRenderer.use('ejs');
*/

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window.

    /*
    nodeItegration은 다른 렌더러 프로세스에서  nodejs 모듈을 호출 할 수 있게 해주는 것이다.
    */
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 630,
        webPreferences: {
            nodeIntegration: true
        }
        //frame:false
    });

    // and load the index.html of the app.
    //const viewOptions = { name: 'BOB' };
    //viewRenderer.load(mainWindow, 'index', viewOptions);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.setMenu(null);
    // Open the DevTools.
    mainWindow.webContents.openDevTools();


};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.