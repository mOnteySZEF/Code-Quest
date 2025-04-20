const { app, BrowserWindow, nativeTheme, autoUpdater } = require('electron');
const path = require('path');

const server = 'https://update.electronjs.org';
const feedURL = `${server}/mOnteySZEF/Code-Quest/${process.platform}-${process.arch}`;

autoUpdater.setFeedURL({ url: feedURL });

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    resizable: true,
    center: true,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#1e1e2f',
      symbolColor: '#ffffff'
    },
    frame: true,
    autoHideMenuBar: true,
    darkTheme: true,
    title: 'CodeQuest',
    fullscreenable: false,
    backgroundColor: '#1e1e2f',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
  });

  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on('checking-for-update', () => {
    console.log('Sprawdzanie dostępności aktualizacji...');
  });

  autoUpdater.on('update-available', () => {
    console.log('Aktualizacja dostępna!');
  });

  autoUpdater.on('update-not-available', () => {
    console.log('Brak dostępnych aktualizacji.');
  });

  autoUpdater.on('error', (err) => {
    console.error('Błąd podczas sprawdzania aktualizacji:', err);
  });

  autoUpdater.on('download-progress', (progressObj) => {
    console.log(`Postęp pobierania: ${progressObj.percent}%`);
  });

  autoUpdater.on('update-downloaded', () => {
    console.log('Aktualizacja pobrana, aplikacja zostanie ponownie uruchomiona.');
    autoUpdater.quitAndInstall();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
